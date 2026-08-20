/** قوالب تهاني المناسبات الدينية والوطنية (رسائل واتساب جاهزة). */

export const OCCASIONS = [
  { key: "friday", label: "يوم الجمعة" },
  { key: "adha", label: "عيد الأضحى المبارك" },
  { key: "fitr", label: "عيد الفطر السعيد" },
  { key: "national", label: "اليوم الوطني ويوم التأسيس" },
] as const;

export type OccasionKey = (typeof OCCASIONS)[number]["key"];

export function greetingText(occasion: OccasionKey, name: string, shopName: string): string {
  const client = (name ?? "").trim();
  const hello = client ? `عميلنا الكريم ${client}` : "عميلنا الكريم";
  const sign = `\n\nمع تحيات ${shopName}`;

  switch (occasion) {
    case "friday":
      return (
        `${hello}\n` +
        `جمعة مباركة 🌿\n` +
        `تقبل الله دعاءكم وبارك في رزقكم وأوقاتكم، ونسعد بخدمتكم دائماً.` +
        sign
      );
    case "adha":
      return (
        `${hello}\n` +
        `عيد الأضحى المبارك 🐏🌙\n` +
        `تقبل الله منكم أضحيتكم وأعاده عليكم بالصحة واليُمن والبركات، كل عام وأنتم بخير.` +
        sign
      );
    case "fitr":
      return (
        `${hello}\n` +
        `عيد الفطر السعيد 🌙✨\n` +
        `تقبل الله صيامكم وقيامكم، وأعاده عليكم بالخير والصحة والسعادة، عيدكم مبارك.` +
        sign
      );
    case "national":
    default:
      return (
        `${hello}\n` +
        `كل عام والمملكة العربية السعودية في عزٍّ وفخر 🇸🇦\n` +
        `تهانينا بمناسبة اليوم الوطني ويوم التأسيس، حفظ الله بلادنا وقيادتنا ودام عزُّها.` +
        sign
      );
  }
}

/**
 * الكشف الآلي عن مناسبة اليوم:
 * الجمعة، عيد الفطر (١-٣ شوال)، عيد الأضحى (١٠-١٣ ذو الحجة)،
 * اليوم الوطني (٢٣ سبتمبر) ويوم التأسيس (٢٢ فبراير).
 */
export function autoOccasionToday(date: Date = new Date()): OccasionKey | null {
  try {
    const parts = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura", {
      month: "numeric",
      day: "numeric",
    }).formatToParts(date);
    const hMonth = Number(parts.find((p) => p.type === "month")?.value ?? 0);
    const hDay = Number(parts.find((p) => p.type === "day")?.value ?? 0);
    if (hMonth === 10 && hDay >= 1 && hDay <= 3) return "fitr";
    if (hMonth === 12 && hDay >= 10 && hDay <= 13) return "adha";
  } catch {
    /* تجاهل: المتصفح لا يدعم التقويم الهجري */
  }
  const m = date.getMonth() + 1;
  const d = date.getDate();
  if ((m === 9 && d === 23) || (m === 2 && d === 22)) return "national";
  if (date.getDay() === 5) return "friday";
  return null;
}
