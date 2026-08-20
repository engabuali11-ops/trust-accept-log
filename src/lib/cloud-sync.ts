import { supabase } from "@/integrations/supabase/client";

/**
 * Cloud persistence for orders + shop settings.
 * Local storage stays the fast primary store; the cloud copy makes the data
 * survive a move to another machine / browser.
 */

type AnyOrder = Record<string, unknown> & { serial: number };

export async function fetchCloudOrders(): Promise<AnyOrder[]> {
  const { data, error } = await supabase.from("orders").select("serial, data");
  if (error) throw error;
  return (data ?? []).map((row) => ({
    ...((row.data ?? {}) as Record<string, unknown>),
    serial: row.serial,
  })) as AnyOrder[];
}

export async function pushCloudOrder(order: AnyOrder): Promise<void> {
  const { error } = await supabase.from("orders").upsert(
    {
      serial: Number(order.serial),
      data: order as never,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "serial" },
  );
  if (error) throw error;
}

export async function pushCloudOrders(orders: AnyOrder[]): Promise<void> {
  if (!orders.length) return;
  const { error } = await supabase.from("orders").upsert(
    orders.map((order) => ({
      serial: Number(order.serial),
      data: order as never,
      updated_at: new Date().toISOString(),
    })),
    { onConflict: "serial" },
  );
  if (error) throw error;
}

export async function deleteCloudOrder(serial: number): Promise<void> {
  const { error } = await supabase.from("orders").delete().eq("serial", Number(serial));
  if (error) throw error;
}

const SETTINGS_ID = "shop";

export async function fetchCloudSettings(): Promise<Record<string, unknown> | null> {
  const { data, error } = await supabase
    .from("app_settings")
    .select("data")
    .eq("id", SETTINGS_ID)
    .maybeSingle();
  if (error) throw error;
  return (data?.data ?? null) as Record<string, unknown> | null;
}

export async function pushCloudSettings(settings: Record<string, unknown>): Promise<void> {
  const { error } = await supabase.from("app_settings").upsert(
    {
      id: SETTINGS_ID,
      data: settings as never,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "id" },
  );
  if (error) throw error;
}

/**
 * Live cross-device sync: fires whenever another device changes orders or
 * shop settings. Returns an unsubscribe function.
 */
export function subscribeCloudChanges(onChange: (table: "orders" | "app_settings") => void) {
  const channel = supabase
    .channel("shop-sync")
    .on("postgres_changes", { event: "*", schema: "public", table: "orders" }, () =>
      onChange("orders"),
    )
    .on("postgres_changes", { event: "*", schema: "public", table: "app_settings" }, () =>
      onChange("app_settings"),
    )
    .subscribe();
  return () => {
    void supabase.removeChannel(channel);
  };
}

/* ------------------------------------------------------------------ *
 * Offline persistence: any cloud write that fails while the device is
 * offline is queued locally and replayed automatically once the
 * connection is back (or every 15s while the app is open).
 * ------------------------------------------------------------------ */

type Outbox =
  | { kind: "order"; order: AnyOrder }
  | { kind: "delete"; serial: number }
  | { kind: "settings"; settings: Record<string, unknown> };

const OUTBOX_KEY = "cloud-outbox-v1";

function readOutbox(): Outbox[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(OUTBOX_KEY) ?? "[]") as Outbox[];
  } catch {
    return [];
  }
}

function writeOutbox(items: Outbox[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(OUTBOX_KEY, JSON.stringify(items.slice(-500)));
}

export function queueCloudWrite(item: Outbox) {
  const items = readOutbox().filter((existing) => {
    if (item.kind === "settings") return existing.kind !== "settings";
    if (item.kind === "order" || item.kind === "delete")
      return !(
        (existing.kind === "order" &&
          Number(existing.order.serial) ===
            Number(item.kind === "order" ? item.order.serial : item.serial)) ||
        (existing.kind === "delete" &&
          Number(existing.serial) ===
            Number(item.kind === "order" ? item.order.serial : item.serial))
      );
    return true;
  });
  items.push(item);
  writeOutbox(items);
}

export async function flushCloudOutbox(): Promise<void> {
  if (typeof window === "undefined" || !navigator.onLine) return;
  const items = readOutbox();
  if (!items.length) return;
  const failed: Outbox[] = [];
  for (const item of items) {
    try {
      if (item.kind === "order") await pushCloudOrder(item.order);
      else if (item.kind === "delete") await deleteCloudOrder(item.serial);
      else await pushCloudSettings(item.settings);
    } catch {
      failed.push(item);
    }
  }
  writeOutbox(failed);
}

/** Starts background re-syncing. Returns a cleanup function. */
export function startOfflineSync(): () => void {
  if (typeof window === "undefined") return () => {};
  void flushCloudOutbox();
  const onOnline = () => void flushCloudOutbox();
  window.addEventListener("online", onOnline);
  const timer = window.setInterval(onOnline, 15000);
  return () => {
    window.removeEventListener("online", onOnline);
    window.clearInterval(timer);
  };
}
