/* eslint-disable */
// Tailor order sheet application.
import * as React from "react";
import * as JsxRuntime from "react/jsx-runtime";
import { Toaster, toast as r } from "sonner";
import {
  fetchCloudOrders,
  pushCloudOrder,
  pushCloudOrders,
  deleteCloudOrder,
  fetchCloudSettings,
  pushCloudSettings,
  subscribeCloudChanges,
  queueCloudWrite,
  startOfflineSync,
} from "@/lib/cloud-sync";
import { OCCASIONS, greetingText, autoOccasionToday } from "@/lib/greetings";

const e = (m) => m;
const t = () => JsxRuntime;
const n = () => React;

var i = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  a = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  o = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => (n ? n.toUpperCase() : t.toLowerCase())),
  s = (e) => {
    let t = o(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  c = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  l = (e) => {
    for (let t in e) if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  u = e(n()),
  d = (0, u.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: a = ``,
        children: o,
        iconNode: s,
        ...d
      },
      f,
    ) =>
      (0, u.createElement)(
        `svg`,
        {
          ref: f,
          ...c,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: i(`lucide`, a),
          ...(!o && !l(d) && { "aria-hidden": `true` }),
          ...d,
        },
        [...s.map(([e, t]) => (0, u.createElement)(e, t)), ...(Array.isArray(o) ? o : [o])],
      ),
  ),
  f = (e, t) => {
    let n = (0, u.forwardRef)(({ className: n, ...r }, o) =>
      (0, u.createElement)(d, {
        ref: o,
        iconNode: t,
        className: i(`lucide-${a(s(e))}`, `lucide-${e}`, n),
        ...r,
      }),
    );
    return ((n.displayName = s(e)), n);
  },
  p = f(`chart-column`, [
    [`path`, { d: `M3 3v16a2 2 0 0 0 2 2h16`, key: `c24i48` }],
    [`path`, { d: `M18 17V9`, key: `2bz60n` }],
    [`path`, { d: `M13 17V5`, key: `1frdt8` }],
    [`path`, { d: `M8 17v-3`, key: `17ska0` }],
  ]),
  m = f(`eye`, [
    [
      `path`,
      {
        d: `M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,
        key: `1nclc0`,
      },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
  ]),
  ee = f(`file-plus-corner`, [
    [
      `path`,
      {
        d: `M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35`,
        key: `17jvcc`,
      },
    ],
    [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }],
    [`path`, { d: `M14 19h6`, key: `bvotb8` }],
    [`path`, { d: `M17 16v6`, key: `18yu1i` }],
  ]),
  h = f(`file-text`, [
    [
      `path`,
      {
        d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
        key: `1oefj6`,
      },
    ],
    [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }],
    [`path`, { d: `M10 9H8`, key: `b1mrlr` }],
    [`path`, { d: `M16 13H8`, key: `t4e002` }],
    [`path`, { d: `M16 17H8`, key: `z1uh3a` }],
  ]),
  te = f(`log-out`, [
    [`path`, { d: `m16 17 5-5-5-5`, key: `1bji2h` }],
    [`path`, { d: `M21 12H9`, key: `dn1m92` }],
    [`path`, { d: `M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`, key: `1uf3rs` }],
  ]),
  ne = f(`message-circle`, [
    [
      `path`,
      {
        d: `M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`,
        key: `1sd12s`,
      },
    ],
  ]),
  g = f(`printer`, [
    [
      `path`,
      {
        d: `M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2`,
        key: `143wyd`,
      },
    ],
    [`path`, { d: `M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6`, key: `1itne7` }],
    [`rect`, { x: `6`, y: `14`, width: `12`, height: `8`, rx: `1`, key: `1ue0tg` }],
  ]),
  _ = f(`save`, [
    [
      `path`,
      {
        d: `M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,
        key: `1c8476`,
      },
    ],
    [`path`, { d: `M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`, key: `1ydtos` }],
    [`path`, { d: `M7 3v4a1 1 0 0 0 1 1h7`, key: `t51u73` }],
  ]),
  re = f(`settings`, [
    [
      `path`,
      {
        d: `M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,
        key: `1i5ecw`,
      },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
  ]),
  ie = f(`users`, [
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`path`, { d: `M16 3.128a4 4 0 0 1 0 7.744`, key: `16gr8j` }],
    [`path`, { d: `M22 21v-2a4 4 0 0 0-3-3.87`, key: `kshegd` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
  ]),
  v = f(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  y = {
    crotch: {
      version: 1,
      asset_id: `4e2d15dc-e89b-480b-858c-07ddf775d72b`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/crotch.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/4e2d15dc-e89b-480b-858c-07ddf775d72b/crotch.png`,
      original_filename: `crotch.png`,
      size: 12633,
      content_type: `image/png`,
      created_at: `2026-08-13T15:01:36Z`,
    }.url,
    cuff0: {
      version: 1,
      asset_id: `01d1c585-4541-4860-b8a4-7ec2e781657b`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/cuff0.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/01d1c585-4541-4860-b8a4-7ec2e781657b/cuff0.png`,
      original_filename: `cuff0.png`,
      size: 11019,
      content_type: `image/png`,
      created_at: `2026-08-13T15:01:40Z`,
    }.url,
    cuff1: {
      version: 1,
      asset_id: `d5d06e3f-5567-4216-ac98-5ab4fd77c295`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/cuff1.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/d5d06e3f-5567-4216-ac98-5ab4fd77c295/cuff1.png`,
      original_filename: `cuff1.png`,
      size: 16125,
      content_type: `image/png`,
      created_at: `2026-08-13T15:01:44Z`,
    }.url,
    cuff2: {
      version: 1,
      asset_id: `6b60ade8-e056-45ba-8e7e-841f38cde6a0`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/cuff2.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/6b60ade8-e056-45ba-8e7e-841f38cde6a0/cuff2.png`,
      original_filename: `cuff2.png`,
      size: 18669,
      content_type: `image/png`,
      created_at: `2026-08-13T15:01:48Z`,
    }.url,
    cuff3: {
      version: 1,
      asset_id: `be6c8322-2523-4341-9971-22e46862338c`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/cuff3.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/be6c8322-2523-4341-9971-22e46862338c/cuff3.png`,
      original_filename: `cuff3.png`,
      size: 15770,
      content_type: `image/png`,
      created_at: `2026-08-13T15:01:51Z`,
    }.url,
    cuff4: {
      version: 1,
      asset_id: `22f469d1-2fbd-474d-82cc-aaf7d5a490b8`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/cuff4.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/22f469d1-2fbd-474d-82cc-aaf7d5a490b8/cuff4.png`,
      original_filename: `cuff4.png`,
      size: 16457,
      content_type: `image/png`,
      created_at: `2026-08-13T15:01:56Z`,
    }.url,
    cuff5: {
      version: 1,
      asset_id: `423eb084-8548-4c00-b1af-c6812d6a31a2`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/cuff5.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/423eb084-8548-4c00-b1af-c6812d6a31a2/cuff5.png`,
      original_filename: `cuff5.png`,
      size: 21900,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:00Z`,
    }.url,
    cuff6: {
      version: 1,
      asset_id: `0a709172-ac59-4bab-94cf-507ebfeacad0`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/cuff6.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/0a709172-ac59-4bab-94cf-507ebfeacad0/cuff6.png`,
      original_filename: `cuff6.png`,
      size: 22162,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:03Z`,
    }.url,
    logo: {
      version: 1,
      asset_id: `1fb163c2-cf46-45f8-a69e-5ba1d559b84e`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/logo.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/1fb163c2-cf46-45f8-a69e-5ba1d559b84e/logo.png`,
      original_filename: `logo.png`,
      size: 502929,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:08Z`,
    }.url,
    model0: {
      version: 1,
      asset_id: `1d25e582-9af5-4090-a5d6-6259e411bd16`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/model0.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/1d25e582-9af5-4090-a5d6-6259e411bd16/model0.png`,
      original_filename: `model0.png`,
      size: 20710,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:13Z`,
    }.url,
    model1: {
      version: 1,
      asset_id: `7e1c30b6-a423-467f-b49c-b8df3776f7fc`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/model1.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/7e1c30b6-a423-467f-b49c-b8df3776f7fc/model1.png`,
      original_filename: `model1.png`,
      size: 23663,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:16Z`,
    }.url,
    model2: {
      version: 1,
      asset_id: `c107e311-6ddb-4516-a264-92f26bb64703`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/model2.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/c107e311-6ddb-4516-a264-92f26bb64703/model2.png`,
      original_filename: `model2.png`,
      size: 25606,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:19Z`,
    }.url,
    model3: {
      version: 1,
      asset_id: `d3f96cfa-098b-4b4d-a2d0-b90262bb7b2a`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/model3.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/d3f96cfa-098b-4b4d-a2d0-b90262bb7b2a/model3.png`,
      original_filename: `model3.png`,
      size: 21998,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:23Z`,
    }.url,
    model4: {
      version: 1,
      asset_id: `a71c63f8-3aee-47ee-8b97-78e12563db1c`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/model4.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/a71c63f8-3aee-47ee-8b97-78e12563db1c/model4.png`,
      original_filename: `model4.png`,
      size: 22055,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:26Z`,
    }.url,
    neck_r0a: {
      version: 1,
      asset_id: `d6e44f21-a11e-49c6-a604-3d128158faac`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/neck_r0a.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/d6e44f21-a11e-49c6-a604-3d128158faac/neck_r0a.png`,
      original_filename: `neck_r0a.png`,
      size: 33486,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:30Z`,
    }.url,
    neck_r0b: {
      version: 1,
      asset_id: `7f91d1e2-3a94-4bd9-9438-3fe77a721885`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/neck_r0b.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/7f91d1e2-3a94-4bd9-9438-3fe77a721885/neck_r0b.png`,
      original_filename: `neck_r0b.png`,
      size: 30697,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:37Z`,
    }.url,
    neck_r1a: {
      version: 1,
      asset_id: `bc33dd46-07a5-4a89-a7db-be62d5d340b2`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/neck_r1a.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/bc33dd46-07a5-4a89-a7db-be62d5d340b2/neck_r1a.png`,
      original_filename: `neck_r1a.png`,
      size: 32361,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:56Z`,
    }.url,
    neck_r1b: {
      version: 1,
      asset_id: `770c3efe-4693-4a5c-ad9c-7c43c5addaa6`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/neck_r1b.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/770c3efe-4693-4a5c-ad9c-7c43c5addaa6/neck_r1b.png`,
      original_filename: `neck_r1b.png`,
      size: 37153,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:56Z`,
    }.url,
    neck_r2a: {
      version: 1,
      asset_id: `b4d82ffd-b38c-430f-87f8-fc975a15ba2a`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/neck_r2a.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/b4d82ffd-b38c-430f-87f8-fc975a15ba2a/neck_r2a.png`,
      original_filename: `neck_r2a.png`,
      size: 37129,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:56Z`,
    }.url,
    neck_r2b: {
      version: 1,
      asset_id: `953770c3-a1ea-4e34-9dba-1b1005ae05d0`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/neck_r2b.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/953770c3-a1ea-4e34-9dba-1b1005ae05d0/neck_r2b.png`,
      original_filename: `neck_r2b.png`,
      size: 32730,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:56Z`,
    }.url,
    neck_r3a: {
      version: 1,
      asset_id: `fb236bed-4ef4-4cbb-b975-d46f74623cd9`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/neck_r3a.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/fb236bed-4ef4-4cbb-b975-d46f74623cd9/neck_r3a.png`,
      original_filename: `neck_r3a.png`,
      size: 37828,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:56Z`,
    }.url,
    neck_r3b: {
      version: 1,
      asset_id: `26a6fd7e-0e21-44bb-86cf-1784ec1fd300`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/neck_r3b.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/26a6fd7e-0e21-44bb-86cf-1784ec1fd300/neck_r3b.png`,
      original_filename: `neck_r3b.png`,
      size: 36249,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:56Z`,
    }.url,
    plk0: {
      version: 1,
      asset_id: `7ddd096e-0dc9-4b80-9bf6-c657f2c09744`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/plk0.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/7ddd096e-0dc9-4b80-9bf6-c657f2c09744/plk0.png`,
      original_filename: `plk0.png`,
      size: 34226,
      content_type: `image/png`,
      created_at: `2026-08-13T15:07:12Z`,
    }.url,
    plk1: {
      version: 1,
      asset_id: `1f20ed2c-814a-480e-8729-6a4ee06de5ce`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/plk1.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/1f20ed2c-814a-480e-8729-6a4ee06de5ce/plk1.png`,
      original_filename: `plk1.png`,
      size: 28533,
      content_type: `image/png`,
      created_at: `2026-08-13T15:07:12Z`,
    }.url,
    plk2: {
      version: 1,
      asset_id: `796036f8-15c0-4d02-96b3-8d57294788c8`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/plk2.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/796036f8-15c0-4d02-96b3-8d57294788c8/plk2.png`,
      original_filename: `plk2.png`,
      size: 28754,
      content_type: `image/png`,
      created_at: `2026-08-13T15:07:12Z`,
    }.url,
    plk3: {
      version: 1,
      asset_id: `a85bf478-8c7f-431c-b705-8588a69b4cc0`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/plk3.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/a85bf478-8c7f-431c-b705-8588a69b4cc0/plk3.png`,
      original_filename: `plk3.png`,
      size: 39145,
      content_type: `image/png`,
      created_at: `2026-08-13T15:07:12Z`,
    }.url,
    plk4: {
      version: 1,
      asset_id: `e420e76a-b1b3-4b36-8fa7-e698d43274f2`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/plk4.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/e420e76a-b1b3-4b36-8fa7-e698d43274f2/plk4.png`,
      original_filename: `plk4.png`,
      size: 18882,
      content_type: `image/png`,
      created_at: `2026-08-13T15:07:12Z`,
    }.url,
    plk5: {
      version: 1,
      asset_id: `3e80b530-e8aa-468c-a58d-12214216744c`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/plk5.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/3e80b530-e8aa-468c-a58d-12214216744c/plk5.png`,
      original_filename: `plk5.png`,
      size: 18234,
      content_type: `image/png`,
      created_at: `2026-08-13T15:07:12Z`,
    }.url,
    pocket0: {
      version: 1,
      asset_id: `4fdc4a3f-4d59-44f5-89be-ce04d579ec57`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/pocket0.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/4fdc4a3f-4d59-44f5-89be-ce04d579ec57/pocket0.png`,
      original_filename: `pocket0.png`,
      size: 13169,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:57Z`,
    }.url,
    pocket1: {
      version: 1,
      asset_id: `07b62f7d-d3c3-4476-adb8-cae670705de6`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/pocket1.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/07b62f7d-d3c3-4476-adb8-cae670705de6/pocket1.png`,
      original_filename: `pocket1.png`,
      size: 13117,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:57Z`,
    }.url,
    pocket2: {
      version: 1,
      asset_id: `af4a11e8-a01f-41f8-8f54-bf98193a0df8`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/pocket2.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/af4a11e8-a01f-41f8-8f54-bf98193a0df8/pocket2.png`,
      original_filename: `pocket2.png`,
      size: 10633,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:57Z`,
    }.url,
    pocket3: {
      version: 1,
      asset_id: `c3fd5f53-58fc-4c00-9327-7b704233d45b`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/pocket3.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/c3fd5f53-58fc-4c00-9327-7b704233d45b/pocket3.png`,
      original_filename: `pocket3.png`,
      size: 13252,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:57Z`,
    }.url,
    pocket4: {
      version: 1,
      asset_id: `a202c89f-c70d-48a4-9c04-8d13007392cc`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/pocket4.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/a202c89f-c70d-48a4-9c04-8d13007392cc/pocket4.png`,
      original_filename: `pocket4.png`,
      size: 16114,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:57Z`,
    }.url,
    pocket5: {
      version: 1,
      asset_id: `fbcbdef6-2fb8-4657-b850-d646d5b70de5`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/pocket5.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/fbcbdef6-2fb8-4657-b850-d646d5b70de5/pocket5.png`,
      original_filename: `pocket5.png`,
      size: 17429,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:57Z`,
    }.url,
    pocket6: {
      version: 1,
      asset_id: `e9cb5c6f-d4ec-41a9-a94c-e77f172eb62d`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/pocket6.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/e9cb5c6f-d4ec-41a9-a94c-e77f172eb62d/pocket6.png`,
      original_filename: `pocket6.png`,
      size: 14649,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:57Z`,
    }.url,
    pocket7: {
      version: 1,
      asset_id: `f3426cd3-c7ef-4ee0-a410-a7f8781414c5`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/pocket7.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/f3426cd3-c7ef-4ee0-a410-a7f8781414c5/pocket7.png`,
      original_filename: `pocket7.png`,
      size: 11534,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:57Z`,
    }.url,
    shoulder1: {
      version: 1,
      asset_id: `d67ad8e4-d4dd-46e0-be08-e36366afe471`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/shoulder1.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/d67ad8e4-d4dd-46e0-be08-e36366afe471/shoulder1.png`,
      original_filename: `shoulder1.png`,
      size: 35367,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:57Z`,
    }.url,
    shoulder2: {
      version: 1,
      asset_id: `5fd2442b-b5f3-4a16-ada5-c5cd5ecc9578`,
      project_id: `53aa9ced-5eb7-42ab-a03f-4813a066054e`,
      url: `/images/shoulder2.png`,
      r2_key: `a/v1/53aa9ced-5eb7-42ab-a03f-4813a066054e/5fd2442b-b5f3-4a16-ada5-c5cd5ecc9578/shoulder2.png`,
      original_filename: `shoulder2.png`,
      size: 36172,
      content_type: `image/png`,
      created_at: `2026-08-13T15:02:57Z`,
    }.url,
  },
  b = [`٠`, `١`, `٢`, `٣`, `٤`, `٥`, `٦`, `٧`, `٨`, `٩`];
function x(e) {
  return String(e).replace(/[0-9]/g, (e) => b[Number(e)] ?? e);
}
function S(e) {
  return String(e ?? ``)
    .replace(/[\u0660-\u0669]/g, (e) => String(e.charCodeAt(0) - 1632))
    .replace(/[\u06f0-\u06f9]/g, (e) => String(e.charCodeAt(0) - 1776));
}
function C(e) {
  let t = S(e)
      .replace(/[\u066b,]/g, `.`)
      .replace(/[\u066c\u00a0\s]/g, ``)
      .replace(/[^\d.]/g, ``),
    i = t.indexOf(`.`);
  i >= 0 && (t = t.slice(0, i + 1) + t.slice(i + 1).replace(/\./g, ``));
  let n = parseFloat(t);
  return Number.isFinite(n) ? n : 0;
}


function numClean(e) {
  let n = Number.isFinite(e) ? e : 0,
    t = Math.round(n * 100) / 100,
    s = String(t);
  return x(s);
}
function w(e) {
  return `${numClean(e)} ريال`;
}
var S2 = (e) => S(String(e ?? ``));
/** يحوّل أي صيغة جوال (عربية/محلية) إلى رقم واتساب دولي بصيغة 966. */
function waNumber(e) {
  let t = S(String(e ?? ``)).replace(/\D/g, ``);
  return t
    ? (t.startsWith(`00`) && (t = t.slice(2)),
      t.startsWith(`966`)
        ? t
        : t.startsWith(`0`)
          ? `966${t.slice(1)}`
          : t.startsWith(`5`) && t.length === 9
            ? `966${t}`
            : t)
    : ``;
}
var T = [`١/٤`, `١/٢`, `٣/٤`],
  E = [``, ...Array.from({ length: 5 }, (e, t) => x(t + 1))],
  D = [``, ...Array.from({ length: 11 }, (e, t) => `${x(t + 10)} هــ`)];
function O(e) {
  if (!e) return ``;
  let [t, n, r] = e.split(`-`);
  return !t || !n || !r ? x(e) : `${x(r)} / ${x(n)} / ${x(t)} م`;
}
function k(e) {
  return !!e && e !== `بدون`;
}
// تفصيل آلي: [{ serial, count }] مرتبطة برقم الفاتورة/التسلسل
function buildBreak(list, counter) {
  return (list ?? [])
    .map((o) => ({
      serial: o.serial,
      count: counter ? counter(o) : Number(o.count) || 0,
    }))
    .filter((r) => r.count > 0)
    .sort((a, b) => a.serial - b.serial);
}
/* ============ متابعة ذكية على مستوى كل ثوب داخل الفاتورة ============ */
var ITEM_STAGES = [`قيد القص`, `قيد الخياطة`, `قيد التطريز`, `قيد الكوي`, `جاهز`, `تم التسليم`];
function defaultStageFor(status) {
  return status === `تم التسليم`
    ? `تم التسليم`
    : status === `جاهز`
      ? `جاهز`
      : status === `قيد التنفيذ`
        ? `قيد الخياطة`
        : `قيد القص`;
}
/** ثياب الفاتورة مرتبطة آلياً برقم الفاتورة وتسلسل الثوب. */
function orderItems(o) {
  let count = Math.max(1, Number(C(o?.count)) || 0),
    saved = Array.isArray(o?.items) ? o.items : [],
    def = defaultStageFor(o?.status);
  return Array.from({ length: count }, (_, i) => {
    let s = saved[i],
      stage = s && ITEM_STAGES.includes(s.stage) ? s.stage : def;
    return { idx: i + 1, stage };
  });
}
function isReadyStage(s) {
  return s === `جاهز` || s === `تم التسليم`;
}
function countReadyItems(o) {
  return orderItems(o).filter((it) => isReadyStage(it.stage)).length;
}
function countDeliveredItems(o) {
  return orderItems(o).filter((it) => it.stage === `تم التسليم`).length;
}
function countPendingItems(o) {
  return orderItems(o).filter((it) => !isReadyStage(it.stage)).length;
}
/** حالة الفاتورة تُشتق آلياً من حالات ثيابها. */
function statusFromItems(items, prev) {
  if (!items.length) return prev;
  if (prev === `ملغي`) return prev;
  if (items.every((it) => it.stage === `تم التسليم`)) return `تم التسليم`;
  if (items.every((it) => isReadyStage(it.stage))) return `جاهز`;
  return `قيد التنفيذ`;
}
function withItems(o, items) {
  return {
    ...o,
    items: items.map((it) => ({ idx: it.idx, stage: it.stage })),
    status: statusFromItems(items, o.status),
  };
}

// محدد الكسر الذكي: اختيار الكسر، والضغط على نفس الكسر يلغيه (بدون كلمة «بدون»)
function FracSelect({ value: val, onChange, className: cls = ``, ariaLabel = `الكسر`, disabled }) {
  let [open, setOpen] = React.useState(!1),
    ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    let h = (ev) => {
      if (ref.current && !ref.current.contains(ev.target)) setOpen(!1);
    };
    document.addEventListener(`mousedown`, h);
    return () => document.removeEventListener(`mousedown`, h);
  }, [open]);
  let cur = k(val) ? val : ``,
    pick = (f) => {
      (onChange(cur === f ? `` : f), setOpen(!1));
    };
  return H.jsxs(`div`, {
    ref,
    className: `relative ${cls.includes(`w-full`) ? `w-full` : `shrink-0`}`,
    children: [
      H.jsx(`button`, {
        type: `button`,
        disabled,
        "aria-label": ariaLabel,
        onClick: () => !disabled && setOpen(!open),
        className: cls,
        children: cur,
      }),
      open &&
        !disabled &&
        H.jsx(`div`, {
          className: `absolute inset-x-0 top-full z-50 mt-1 min-w-[40px] rounded-md border border-ink/60 bg-sheet shadow-md`,
          children: T.map((f) =>
            H.jsx(
              `button`,
              {
                type: `button`,
                onClick: () => pick(f),
                className: `block w-full px-1 py-[3px] text-center text-[11px] font-bold ${cur === f ? `text-destructive` : `text-ink`}`,
                children: f,
              },
              f,
            ),
          ),
        }),
    ],
  });
}
var A = [
    [``, `٢ جيب جوال`],
    [``, `جيب قلم`],
  ],
  ae = [
    `تقرير المبيعات اليومي`,
    `تقرير المبيعات الشهري`,
    `تقرير العملاء`,
    `تقرير الأصناف`,
    `تقرير المندوبين`,
  ],
  j = [`الطول`, `الكتف`, `الكم سادة`, `الكم كبك`, `الرقبة سادة`, `الرقبة قلاب`, `العرض`, `أسفل`],
  M = [
    { key: `cuff0`, label: `يد سادة` },
    { key: `cuff1`, label: `كبك مربع` },
    { key: `cuff2`, label: `كبك مشتول` },
    { key: `cuff3`, label: `كبك مدور` },
    { key: `cuff4`, label: `كبك مقلوب` },
    { key: `cuff5`, label: `كبك سادة` },
    { key: `cuff6`, label: `سادة كبك` },
  ],
  N = [
    `neck_r0a`,
    `neck_r0b`,
    `neck_r1a`,
    `neck_r1b`,
    `neck_r2a`,
    `neck_r2b`,
    `neck_r3a`,
    `neck_r3b`,
  ],
  P = [`plk0`, `plk1`, `plk2`, `plk3`, `plk4`, `plk5`],
  F = [`pocket0`, `pocket1`, `pocket2`, `pocket3`, `pocket4`, `pocket5`, `pocket6`, `pocket7`],
  I = [
    { key: `model4`, label: `سعودي مبروم` },
    { key: `model3`, label: `سعودي سوبرمان` },
    { key: `model2`, label: `سعودي دبل` },
    { key: `model1`, label: `كويتي` },
    { key: `model0`, label: `بحريني` },
  ],
  L = [`جديد`, `قيد التنفيذ`, `جاهز`, `تم التسليم`, `ملغي`];
var MEASURE_LABELS = j,
  hasFrac = k,
  M2 = M;
function R(e) {
  let t = new Date().toISOString().slice(0, 10);
  return {
    serial: e,
    count: ``,
    name: ``,
    mobile: ``,
    whatsapp: ``,
    fabrics: [, , , , , ,].fill(``),
    measures: j.map(() => ({ whole: ``, frac: `` })),
    notesA: Array(8).fill(``),
    notesB: Array(8).fill(``),
    notesLast: { whole: ``, frac: `` },
    neckPlainNote: { whole: ``, frac: ``, spec: `` },
    neckFlapNote: { whole: ``, frac: ``, spec: `` },
    lengthNote: { whole: ``, frac: `` },
    sleevePlainNote: { frac1: ``, whole1: ``, frac2: ``, whole2: `` },
    sleeveCuffNote: { frac1: ``, whole1: ``, frac2: ``, whole2: `` },
    cuff: `cuff1`,
    neck: ``,
    placket: ``,
    pocket: ``,
    model: `model0`,
    shoulder: ``,
    cuffHeight: { whole: ``, frac: `` },
    plainCuff: { whole: ``, frac: `` },
    cuffEmbroidery: !1,
    placketEmbroidery: !1,
    pocketEmbroidery: !1,
    crotchHeight: { whole: ``, frac: `` },
    placketHeight: { whole: ``, frac: `` },
    orderValue: ``,
    unitPrice: 0,
    cash: ``,
    card: ``,
    settleCash: ``,
    settleCard: ``,
    paymentMethod: `none`,

    receiptDate: t,
    deliveryDate: t,
    status: `جديد`,
    tailorId: ``,
    createdAt: new Date().toISOString(),
  };
}
var z = `basmat-laith-orders`,
  SETTINGS_KEY = `basmat-laith-settings`,
  DEFAULT_SETTINGS = {
    shopName: `بصمة ليث للخياطة الرجالية`,
    cr: ``,
    vat: ``,
    phone: `٠٥٤٤٥٩٦٦٩٦`,
    taxRate: `١٥`,
    printCopy: `نسخة الخياط`,
    autoPrint: !1,
    autoGreetings: !0,
    autoOrderWhatsApp: !0,
    tailorName: ``,
    tailorPhone: ``,
    tailorContact: ``,
    tailors: [],
  };
/** يعيد قائمة الخياطين مع دعم البيانات القديمة (خياط واحد). */
function getTailors(s) {
  let list = Array.isArray(s?.tailors) ? s.tailors : [];
  return list.length
    ? list
    : s?.tailorName || s?.tailorPhone
      ? [
          {
            id: `legacy`,
            name: s.tailorName || `الخياط`,
            phone: s.tailorPhone || ``,
            whatsapp: s.tailorPhone || ``,
          },
        ]
      : [];
}
function findTailor(s, id) {
  return getTailors(s).find((t) => t.id === id) ?? null;
}
function loadSettings() {
  if (typeof window > `u`) return DEFAULT_SETTINGS;
  try {
    let e = window.localStorage.getItem(SETTINGS_KEY);
    return e ? { ...DEFAULT_SETTINGS, ...JSON.parse(e) } : DEFAULT_SETTINGS;
  } catch {
    return DEFAULT_SETTINGS;
  }
}
function saveSettings(e) {
  if (typeof window > `u`) return;
  window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(e));
}
var DELETED_KEY = `deleted_serials_v1`;
// سجل الطلبات الملغاة نهائياً: يمنع رجوعها بعد تحديث الصفحة أو من جهاز آخر
function loadDeletedSerials() {
  if (typeof window > `u`) return [];
  try {
    let e = window.localStorage.getItem(DELETED_KEY);
    return (e ? JSON.parse(e) : []).map(Number);
  } catch {
    return [];
  }
}
function markDeletedSerial(serial) {
  if (typeof window > `u`) return;
  let list = loadDeletedSerials();
  if (!list.includes(Number(serial))) list.push(Number(serial));
  window.localStorage.setItem(DELETED_KEY, JSON.stringify(list));
}
function isDeletedSerial(serial) {
  return loadDeletedSerials().includes(Number(serial));
}
function B() {
  if (typeof window > `u`) return [];
  try {
    let e = window.localStorage.getItem(z),
      del = loadDeletedSerials();
    return (e ? JSON.parse(e) : [])
      .filter((o) => !del.includes(Number(o.serial)))
      .sort((e, t) => e.serial - t.serial);
  } catch {
    return [];
  }
}
function oe(e) {
  if (typeof window > `u`) return;
  let del = loadDeletedSerials(),
    t = [...e].filter((o) => !del.includes(Number(o.serial))).sort((e, t) => e.serial - t.serial);
  window.localStorage.setItem(z, JSON.stringify(t));
}
function V(e) {
  return e.reduce((e, t) => Math.max(e, t.serial), 0) + 1;
}
var H = t();
function U({ value: e, onChange: t, readOnly: n, className: r = ``, type: i = `text` }) {
  return (0, H.jsx)(`input`, {
    type: i,
    value: x(e),
    readOnly: n,
    onChange: (e) => t(x(e.target.value)),
    className: `print-field h-7 w-full rounded-md border border-ink/60 bg-transparent px-2 text-[13px] text-ink outline-none focus:border-ink focus:ring-1 focus:ring-ink/40 ${r}`,
  });
}
function W({ value: e, onChange: t, readOnly: n, className: r = `` }) {
  return (0, H.jsxs)(`div`, {
    className: `flex items-center gap-1`,
    children: [
      (0, H.jsx)(U, { value: e, onChange: t, readOnly: n, className: r }),
      (0, H.jsx)(`span`, {
        className: `shrink-0 text-[12px] font-bold text-destructive`,
        children: `هــ`,
      }),
    ],
  });
}
function G({ checked: e, onSelect: t }) {
  return (0, H.jsx)(`span`, {
    role: `radio`,
    "aria-checked": e,
    tabIndex: 0,
    onClick: t,
    onKeyDown: (e) => e.key === `Enter` && t(),
    className: `inline-flex h-[18px] w-[18px] shrink-0 cursor-pointer items-center justify-center rounded-[4px] border leading-none ${e ? `border-destructive/70` : `border-ink/60`}`,
    children:
      e &&
      (0, H.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        className: `h-[16px] w-[16px] text-destructive`,
        "aria-hidden": `true`,
        children: (0, H.jsx)(`path`, {
          d: `M4 13.5 9.5 19 20 5.5`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `4`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
        }),
      }),
  });
}
function K({ title: e, children: t, className: n = `` }) {
  return (0, H.jsxs)(`div`, {
    className: `relative rounded-xl border border-ink/70 p-2 ${n}`,
    children: [
      e &&
        (0, H.jsx)(`span`, {
          className: `absolute -top-[11px] right-1/2 translate-x-1/2 bg-sheet px-2 text-[13px] font-bold tracking-[2px] text-ink`,
          children: e,
        }),
      t,
    ],
  });
}
function q({
  title: e,
  value: t,
  onChange: n,
  readOnly: r,
  wholeAsSelect: i,
  options: a = E,
  redHex: hx,
  suffix: sfx,
}) {
  let o = k(t.frac);
  let selOpts = a.includes(t.whole) || !t.whole ? a : [...a, t.whole];
  return (0, H.jsxs)(`div`, {
    className: `rounded-md border border-ink/50 px-2 pb-1 pt-[2px] text-center`,
    children: [
      (0, H.jsx)(`div`, {
        className: `text-[11px] font-bold text-ink`,
        children: e,
      }),
      (0, H.jsxs)(`div`, {
        className: `flex items-end gap-1`,
        children: [
          (0, H.jsxs)(`div`, {
            className: `w-[50px] shrink-0`,
            children: [
              (0, H.jsx)(`div`, {
                className: `text-[8px] text-ink/70`,
                children: `الكسر`,
              }),
              r
                ? (0, H.jsx)(`div`, {
                    className: `print-field h-5 rounded-md border border-ink/60 text-[11px] font-bold leading-5 text-ink`,
                    children: o ? t.frac : ``,
                  })
                : (0, H.jsx)(FracSelect, {
                    value: t.frac,
                    onChange: (v) => n({ ...t, frac: v }),
                    className: `h-5 w-full appearance-none rounded-md border border-ink/60 bg-transparent px-0 text-center text-[11px] font-bold text-ink outline-none`,
                  }),
            ],
          }),
          (0, H.jsxs)(`div`, {
            className: `flex-1`,
            children: [
              (0, H.jsx)(`div`, {
                className: `text-[8px] text-ink/70`,
                children: `الرقم الصحيح`,
              }),
              (0, H.jsxs)(`div`, {
                className: `flex items-center gap-1`,
                children: [
                  i
                    ? r
                      ? (0, H.jsx)(`div`, {
                          className: `print-field h-5 flex-1 rounded-md border border-ink/60 text-[11px] font-bold leading-5 text-destructive`,
                          style: hx ? { color: `#dc2626`, fontWeight: 700 } : void 0,
                          children: t.whole,
                        })
                      : (0, H.jsx)(`select`, {
                          value: t.whole,
                          onChange: (e) => n({ ...t, whole: e.target.value }),
                          className: `print-field h-5 w-full min-w-0 flex-1 appearance-none rounded-md border border-ink/60 bg-transparent px-0 text-center text-[11px] font-bold text-destructive outline-none`,
                          style: hx ? { color: `#dc2626`, fontWeight: 700 } : void 0,
                          children: selOpts.map((e) =>
                            (0, H.jsx)(`option`, { value: e, children: e }, e),
                          ),
                        })
                    : (0, H.jsx)(`div`, {
                        className: `flex-1`,
                        children: (0, H.jsx)(W, {
                          value: t.whole,
                          readOnly: r,
                          onChange: (e) => n({ ...t, whole: e }),
                          className: `h-5 text-[11px]`,
                        }),
                      }),
                  sfx &&
                    (0, H.jsx)(`span`, {
                      className: `print-suffix shrink-0 text-[12px] font-bold text-destructive`,
                      children: sfx,
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var CROTCH_OPTS = [``, ...Array.from({ length: 10 }, (e, t) => `${x(t + 3)} هـ`)],
  CUFF_H_OPTS = [``, ...Array.from({ length: 4 }, (e, t) => `${x(t + 2)} هـ`)],
  NOTE_H_OPTS = [``, ...Array.from({ length: 9 }, (e, t) => x(t + 4))],
  NECK_H_OPTS = [``, `١`, `٢`, `٣`],
  NECK_SPEC_OPTS = [``, `١ طـ بلاستيك`, `٢ طـ بلاستيك`, `١ طـ حديد`, `٢ طـ حديد`];
var SLEEVE_WHOLE_OPTS = [``, ...Array.from({ length: 23 }, (e, t) => x(t + 10))],
  NECK_WHOLE_OPTS = [``, ...Array.from({ length: 14 }, (e, t) => x(t + 7))],
  MEASURE_WHOLE_OPTS = {
    2: SLEEVE_WHOLE_OPTS,
    3: SLEEVE_WHOLE_OPTS,
    4: NECK_WHOLE_OPTS,
    5: NECK_WHOLE_OPTS,
  },
  WIDTH_NOTE_PRESETS = [`توسيع الورك`];
function NeckNoteCell({ value: e, onChange: t, readOnly: n, wholeOpts: wOpts }) {
  let r = e ?? { whole: ``, frac: ``, spec: `` };
  return (0, H.jsxs)(`div`, {
    className: `flex items-center gap-1`,
    children: [
      (0, H.jsxs)(`div`, {
        className: `flex flex-1 items-center gap-1`,
        children: [
          n
            ? (0, H.jsx)(`div`, {
                className: `print-note print-field h-7 w-[36px] shrink-0 rounded-md border border-ink/60 text-center text-[11px] font-bold leading-7 text-ink`,
                children: k(r.frac) ? r.frac : ``,
              })
            : (0, H.jsx)(FracSelect, {
                value: r.frac,
                onChange: (v) => t({ ...r, frac: v }),
                className: `h-7 w-[36px] shrink-0 appearance-none rounded-md border border-ink/60 bg-transparent px-0 text-center text-[11px] font-bold text-ink outline-none`,
              }),
          n
            ? (0, H.jsx)(`div`, {
                className: `print-note print-field h-7 w-[32px] shrink-0 rounded-md border border-ink/60 text-center text-[11px] font-bold leading-7`,
                style: { color: `#dc2626` },
                children: r.whole,
              })
            : (0, H.jsx)(`select`, {
                value: r.whole,
                "aria-label": `الارتفاع`,
                onChange: (e) => t({ ...r, whole: e.target.value }),
                className: `print-note print-field h-7 w-[32px] shrink-0 appearance-none rounded-md border border-ink/60 bg-transparent px-0 text-center text-[11px] font-bold outline-none`,
                style: { color: `#dc2626` },
                children: (wOpts ?? NECK_H_OPTS).map((e) =>
                  (0, H.jsx)(`option`, { value: e, children: e }, e),
                ),
              }),
        ],
      }),
      n
        ? (0, H.jsx)(`div`, {
            className: `print-note print-spec-cell print-field h-7 w-[84px] shrink-0 whitespace-nowrap rounded-md border border-ink/60 text-center text-[9px] font-bold leading-7 text-ink`,
            children: r.spec,
          })
        : (0, H.jsx)(`select`, {
            value: r.spec,
            "aria-label": `المواصفات`,
            onChange: (e) => t({ ...r, spec: e.target.value }),
            className: `print-spec-cell h-7 w-[84px] min-w-max shrink-0 whitespace-nowrap rounded-md border border-ink/60 bg-transparent px-1 text-center text-[10px] font-bold text-ink outline-none`,
            children: NECK_SPEC_OPTS.map((e) =>
              (0, H.jsx)(
                `option`,
                { value: e, style: { whiteSpace: `nowrap` }, children: e },
                e,
              ),
            ),
          }),
    ],
  });
}
function LenNoteCell({ value: e, onChange: t, readOnly: n }) {
  let r = e ?? { whole: ``, frac: `` };
  return (0, H.jsxs)(`div`, {
    className: `len-note-row flex w-full min-w-0 max-w-full flex-nowrap items-center gap-1`,
    children: [
      n
        ? (0, H.jsx)(`div`, {
            className: `print-field h-7 w-[62px] shrink-0 rounded-md border border-ink/60 text-center text-[10px] font-bold leading-7 text-ink`,
            children: k(r.frac) ? r.frac : ``,
          })
        : (0, H.jsx)(`select`, {
            value: k(r.frac) ? r.frac : ``,
            "aria-label": `الكسر`,
            onChange: (ev) => t({ ...r, frac: ev.target.value }),
            className: `h-7 w-[62px] shrink-0 appearance-none rounded-md border border-ink/60 bg-transparent px-0 text-center text-[10px] font-bold text-ink outline-none`,
            children: [``, ...T].map((f) =>
              (0, H.jsx)(`option`, { value: f, children: f }, f || `none`),
            ),
          }),
      (0, H.jsx)(U, {
        value: r.whole,
        readOnly: n,
        onChange: (e) => t({ ...r, whole: e }),
        className: `text-[11px]`,
      }),
    ],
  });
}
function LastNoteCell({ value: e, onChange: t, readOnly: n }) {
  let r = e ?? { whole: ``, frac: `` },
    selOpts = E.includes(r.whole) || !r.whole ? E : [...E, r.whole];
  return (0, H.jsxs)(`div`, {
    className: `flex items-center gap-1`,
    children: [
      n
        ? (0, H.jsx)(`div`, {
            className: `print-note print-field h-7 w-[58px] shrink-0 rounded-md border border-ink/60 text-center text-[11px] font-bold leading-7 text-ink`,
            children: k(r.frac) ? r.frac : ``,
          })
        : (0, H.jsx)(FracSelect, {
            value: r.frac,
            onChange: (v) => t({ ...r, frac: v }),
            className: `h-7 w-[58px] shrink-0 appearance-none rounded-md border border-ink/60 bg-transparent px-0 text-center text-[11px] font-bold text-ink outline-none`,
          }),
      n
        ? (0, H.jsx)(`div`, {
            className: `print-note print-field h-7 flex-1 min-w-0 rounded-md border border-ink/60 text-center text-[11px] font-bold leading-7 text-destructive`,
            children: r.whole,
          })
        : (0, H.jsx)(`select`, {
            value: r.whole,
            "aria-label": `الرقم الصحيح`,
            onChange: (e) => t({ ...r, whole: e.target.value }),
            className: `print-note print-field h-7 flex-1 min-w-0 appearance-none rounded-md border border-ink/60 bg-transparent px-0 text-center text-[11px] font-bold text-destructive outline-none`,
            children: selOpts.map((e) => (0, H.jsx)(`option`, { value: e, children: e }, e)),
          }),
      (0, H.jsx)(`span`, {
        className: `print-suffix shrink-0 text-[13px] font-bold`,
        style: { color: `#dc2626` },
        children: `هـ`,
      }),
      (0, H.jsx)(`span`, {
        className: `print-suffix shrink-0 text-[13px] font-bold`,
        style: { color: `#dc2626` },
        children: `كـــ`,
      }),
    ],
  });
}
function SleeveNoteCell({ value: e, onChange: t, readOnly: n, wholeOpts: wOpts }) {
  let r = e ?? { frac1: ``, whole1: ``, frac2: ``, whole2: `` },
    i = (e, i) => t({ ...r, [e]: i }),
    a = (e, t) =>
      n
        ? (0, H.jsx)(`div`, {
            className: `print-note print-frac-cell print-field h-7 w-[36px] shrink-0 rounded-md border border-ink/60 text-center text-[11px] font-bold leading-7 text-ink`,
            children: k(r[e]) ? r[e] : ``,
          })
        : (0, H.jsx)(FracSelect, {
            value: r[e],
            ariaLabel: t,
            onChange: (v) => i(e, v),
            className: `print-frac-cell h-7 w-[36px] shrink-0 appearance-none rounded-md border border-ink/60 bg-transparent px-0 text-center text-[11px] font-bold text-ink outline-none`,
          }),
    o = (e, t) =>
      wOpts && !n
        ? (0, H.jsx)(`select`, {
            value: r[e] ?? ``,
            "aria-label": `الارتفاع`,
            onChange: (t) => i(e, t.target.value),
            className: `h-7 w-[32px] shrink-0 appearance-none rounded-md border border-ink/60 bg-transparent px-0 text-center text-[11px] font-bold text-ink outline-none`,
            children: wOpts.map((e) => (0, H.jsx)(`option`, { value: e, children: e }, e)),
          })
        : (0, H.jsx)(U, {
        value: r[e],
        readOnly: n,
        onChange: (t) => i(e, t),
        className: `w-[32px]! shrink-0 px-0 text-center text-[11px]`,
      });
  return (0, H.jsxs)(`div`, {
    className: `flex w-full items-center gap-[1px]`,
    children: [
      a(`frac1`, `الكسر`),
      o(`whole1`),
      (0, H.jsx)(`span`, {
        className: `shrink-0 text-[11px] font-bold`,
        style: { color: `#dc2626` },
        children: `×`,
      }),
      a(`frac2`, `الكسر`),
      o(`whole2`),
      (0, H.jsx)(`span`, {
        className: `print-suffix shrink-0 text-[12px] font-bold`,
        style: { color: `#dc2626` },
        children: `هـ`,
      }),
    ],
  });
}
function J({ order: e, patch: t, readOnly: n, tailorSlot }) {
  let r = (n, r, i) => {
      let a = [...e[n]];
      ((a[r] = i), t({ [n]: a }));
    },
    i = (n, r) => {
      let i = [...e.measures];
      ((i[n] = r), t({ measures: i }));
    };
  return (0, H.jsxs)(`div`, {
    dir: `rtl`,
    className: `w-[1180px] rounded-2xl border-2 border-ink bg-sheet p-3 text-ink`,
    children: [
      (0, H.jsxs)(`div`, {
        className: `flex items-start gap-3`,
        children: [
          (0, H.jsxs)(`div`, {
            className: `w-[210px] space-y-1`,
            children: [
              (0, H.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, H.jsx)(`span`, {
                    className: `w-[52px] text-[13px] font-bold`,
                    children: `العـدد`,
                  }),
                  (0, H.jsx)(U, {
                    value: e.count,
                    readOnly: n,
                    onChange: (e) => t({ count: e }),
                  }),
                ],
              }),
              (0, H.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, H.jsx)(`span`, {
                    className: `w-[52px] text-[13px] font-bold`,
                    children: `التسلسل`,
                  }),
                  (0, H.jsx)(U, {
                    value: x(e.serial),
                    readOnly: n,
                    onChange: (e) => t({ serial: Number(S(e).replace(/\D/g, ``)) || 0 }),
                  }),
                ],
              }),
              (0, H.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, H.jsx)(`span`, {
                    className: `w-[52px] text-[13px] font-bold`,
                    children: `الاسم :`,
                  }),
                  (0, H.jsx)(U, {
                    value: e.name,
                    readOnly: n,
                    onChange: (e) => t({ name: e }),
                  }),
                ],
              }),
            ],
          }),
          (0, H.jsx)(`div`, {
            className: `flex flex-1 justify-center`,
            children: (0, H.jsx)(`img`, {
              src: y.logo,
              alt: `بصمة ليث للخياطة الرجالية`,
              className: `h-[118px] object-contain`,
            }),
          }),
          (0, H.jsxs)(`div`, {
            className: `flex w-[430px] items-start gap-2`,
            children: [
              (0, H.jsxs)(`div`, {
                className: `w-[230px] space-y-2`,
                children: [
                  (0, H.jsxs)(`div`, {
                    className: `flex items-center gap-2 rounded-lg border border-ink/70 px-2 py-1`,
                    children: [
                      (0, H.jsx)(`span`, {
                        className: `text-[13px] font-bold`,
                        children: `جوال :`,
                      }),
                      (0, H.jsx)(U, {
                        value: e.mobile,
                        readOnly: n,
                        onChange: (e) => t({ mobile: e }),
                        className: `border-0 focus:ring-0`,
                      }),
                    ],
                  }),
                  (0, H.jsxs)(`div`, {
                    className: `flex items-center gap-2 rounded-lg border border-ink/70 px-2 py-1`,
                    children: [
                      (0, H.jsx)(`span`, {
                        className: `text-[13px] font-bold`,
                        children: `واتس :`,
                      }),
                      (0, H.jsx)(U, {
                        value: e.whatsapp,
                        readOnly: n,
                        onChange: (e) => t({ whatsapp: e }),
                        className: `border-0 focus:ring-0`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, H.jsxs)(`div`, {
                className: `flex-1`,
                children: [
                  (0, H.jsx)(`div`, {
                    className: `mb-1 text-center text-[13px] font-bold tracking-[2px]`,
                    children: `نوع القمـاش`,
                  }),
                  (0, H.jsx)(`div`, {
                    className: `space-y-[3px]`,
                    children: e.fabrics.map((e, t) =>
                      (0, H.jsxs)(
                        `div`,
                        {
                          className: `flex items-center gap-1`,
                          children: [
                            (0, H.jsxs)(`span`, {
                              className: `text-[11px]`,
                              children: [x(t + 1), ` -`],
                            }),
                            (0, H.jsx)(`input`, {
                              value: e,
                              readOnly: n,
                              onChange: (e) => r(`fabrics`, t, e.target.value),
                              className: `h-5 flex-1 border-b border-dotted border-ink/70 bg-transparent text-[12px] outline-none`,
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, H.jsxs)(`div`, {
        className: `mt-4 flex gap-2`,
        children: [
          (0, H.jsxs)(`div`, {
            className: `flex w-[300px] shrink-0 flex-col gap-2`,
            children: [
              (0, H.jsx)(K, {
            title: `المقاســات`,
            className: `w-full pt-3`,
            children: (0, H.jsxs)(`table`, {

              className: `w-full border-collapse text-center text-[12px]`,
              children: [
                (0, H.jsx)(`thead`, {
                  children: (0, H.jsxs)(`tr`, {
                    children: [
                      (0, H.jsx)(`th`, {
                        className: `w-[86px] border border-ink/60 px-1 py-[3px] font-bold`,
                        children: `الاسم`,
                      }),
                      (0, H.jsx)(`th`, {
                        className: `w-[64px] border border-ink/60 px-1 py-[3px] font-bold`,
                        children: `الكسر`,
                      }),
                      (0, H.jsx)(`th`, {
                        className: `border border-ink/60 px-1 py-[3px] font-bold`,
                        children: `الرقم الصحيح`,
                      }),
                    ],
                  }),
                }),
                (0, H.jsx)(`tbody`, {
                  children: j.map((t, r) =>
                    (0, H.jsxs)(
                      `tr`,
                      {
                        className: `ms-row`,
                        children: [
                          (0, H.jsx)(`td`, {
                            className: `border border-ink/60 px-1 py-[3px] font-bold`,
                            style:
                              t === `الكم سادة` || t === `الرقبة سادة`
                                ? { color: `#dc2626` }
                                : void 0,
                            children: t,
                          }),
                          (0, H.jsx)(`td`, {
                            className: `border border-ink/60 p-[3px]`,
                            children: n
                              ? (0, H.jsx)(`div`, {
                                  className: `print-field h-6 rounded-md border border-ink/60 text-center text-[12px] font-bold leading-6 text-ink`,
                                  children: k(e.measures[r]?.frac ?? ``) ? e.measures[r]?.frac : ``,
                                })
                              : (0, H.jsx)(FracSelect, {
                                  value: e.measures[r]?.frac ?? ``,
                                  onChange: (v) =>
                                    i(r, {
                                      whole: e.measures[r]?.whole ?? ``,
                                      frac: v,
                                    }),
                                  className: `h-6 w-full appearance-none rounded-md border border-ink/60 bg-transparent px-0 text-center text-[12px] font-bold text-ink outline-none`,
                                }),
                          }),
                          (0, H.jsx)(`td`, {
                            className: `border border-ink/60 p-[3px]`,
                            children: MEASURE_WHOLE_OPTS[r]
                              ? (0, H.jsxs)(`div`, {
                                  className: `flex items-center gap-1`,
                                  children: [
                                    n
                                      ? (0, H.jsx)(`div`, {
                                          className: `print-field h-6 flex-1 rounded-md border border-ink/60 text-center text-[12px] font-bold leading-6 text-ink`,
                                          children: e.measures[r]?.whole ?? ``,
                                        })
                                      : (0, H.jsx)(`select`, {
                                          value: e.measures[r]?.whole ?? ``,
                                          onChange: (t) =>
                                            i(r, {
                                              whole: t.target.value,
                                              frac: e.measures[r]?.frac ?? ``,
                                            }),
                                          className: `print-field h-6 w-full flex-1 rounded-md border border-ink/60 bg-transparent text-[12px] font-bold text-ink outline-none`,
                                          children: MEASURE_WHOLE_OPTS[r].map((e) =>
                                            (0, H.jsx)(`option`, { value: e, children: e }, e),
                                          ),
                                        }),
                                    (0, H.jsx)(`span`, {
                                      className: `shrink-0 text-[12px] font-bold text-destructive`,
                                      children: `هــ`,
                                    }),
                                  ],
                                })
                              : (0, H.jsx)(W, {
                                  value: e.measures[r]?.whole ?? ``,
                                  readOnly: n,
                                  onChange: (t) =>
                                    i(r, {
                                      whole: t,
                                      frac: e.measures[r]?.frac ?? ``,
                                    }),
                                  className: `h-6!`,
                                }),
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
              }),
              tailorSlot,
            ],
          }),

          (0, H.jsx)(K, {
            title: `ملاحظــات`,
            className: `notes-panel w-[210px] pt-3`,
            children: (0, H.jsxs)(`div`, {
              className: `notes-rows mt-[10px] space-y-0`,
              children: [
                (0, H.jsx)(`div`, {
                  className: `notes-head mb-1 text-center text-[12px] font-bold leading-none text-ink`,
                  children: `الطول من الوراء`,
                }),
                ...e.notesB.slice(0, -1).map((i, a) =>
                  (0, H.jsx)(
                    `div`,
                    { className: `ns-row flex h-[31px] items-center`, children:
                  a === 0
                    ? (0, H.jsx)(
                        LenNoteCell,
                        {
                          value: e.lengthNote ?? { whole: ``, frac: `` },
                          readOnly: n,
                          onChange: (e) => t({ lengthNote: e }),
                        },
                        a,
                      )
                    : a === 2 || a === 3
                    ? (0, H.jsx)(
                        SleeveNoteCell,
                        {
                          wholeOpts: a === 2 || a === 3 ? NOTE_H_OPTS : void 0,
                          value:
                            (a === 2 ? e.sleevePlainNote : e.sleeveCuffNote) ?? {
                              frac1: ``,
                              whole1: ``,
                              frac2: ``,
                              whole2: ``,
                            },
                          readOnly: n,
                          onChange: (e) =>
                            t(a === 2 ? { sleevePlainNote: e } : { sleeveCuffNote: e }),
                        },
                        a,
                      )
                    : a === 4 || a === 5
                    ? (0, H.jsx)(
                        NeckNoteCell,
                        {
                          wholeOpts: NECK_H_OPTS,
                          value:
                            a === 4
                              ? (e.neckPlainNote ?? {
                                  whole: ``,
                                  frac: ``,
                                  spec: ``,
                                })
                              : (e.neckFlapNote ?? {
                                  whole: ``,
                                  frac: ``,
                                  spec: ``,
                                }),
                          readOnly: n,
                          onChange: (e) => t(a === 4 ? { neckPlainNote: e } : { neckFlapNote: e }),
                        },
                        a,
                      )
                    : a === 6
                      ? (0, H.jsxs)(
                          `div`,
                          {
                            className: `width-note-row flex w-full min-w-0 items-center gap-1`,
                            children: [
                              (0, H.jsx)(U, {
                                value: i,
                                readOnly: n,
                                className: `print-note print-width-note`,
                                onChange: (e) => r(`notesB`, a, e),
                              }),
                              !n &&
                                (0, H.jsxs)(`select`, {
                                  value: WIDTH_NOTE_PRESETS.includes(i) ? i : ``,
                                  "aria-label": `خيارات سريعة`,
                                  onChange: (e) => r(`notesB`, a, e.target.value),
                                  className: `width-note-select h-7 w-[26px] shrink-0 rounded-md border border-ink/60 bg-transparent text-[11px] text-ink outline-none`,

                                  children: [
                                    (0, H.jsx)(`option`, { value: ``, children: `▾` }),
                                    WIDTH_NOTE_PRESETS.map((e) =>
                                      (0, H.jsx)(`option`, { value: e, children: e }, e),
                                    ),
                                  ],
                                }),
                            ],
                          },
                          a,
                        )
                      : (0, H.jsx)(
                          U,
                          {
                            value: i,
                            readOnly: n,
                            onChange: (e) => r(`notesB`, a, e),
                          },
                          a,
                        ), },
                    a,
                  ),
                ),
                (0, H.jsx)(`div`, {
                  className: `ns-row flex h-[31px] items-center`,
                  children: (0, H.jsx)(LastNoteCell, {
                    value: e.notesLast ?? { whole: ``, frac: `` },
                    readOnly: n,
                    onChange: (e) => t({ notesLast: e }),
                  }),
                }),
              ],
            }),
          }),
          (0, H.jsxs)(`div`, {
            className: `flex w-[300px] flex-col gap-2`,
            children: [
              (0, H.jsxs)(K, {
                title: `ملاحظــات`,
                className: `pt-4`,
                children: [
                  (0, H.jsx)(`div`, {
                    className: `space-y-[7px]`,
                    children: e.notesA.slice(0, 4).map((e, t) => {
                      let i = A[t];
                      return (0, H.jsxs)(
                        `div`,
                        {
                          className: `flex items-center gap-1`,
                          children: [
                            (0, H.jsx)(U, {
                              value: e,
                              readOnly: n,
                              onChange: (e) => r(`notesA`, t, e),
                            }),
                            i &&
                              !n &&
                              (0, H.jsxs)(`select`, {
                                value: i.filter(Boolean).includes(e) ? e : ``,
                                "aria-label": `خيارات سريعة`,
                                onChange: (n) => r(`notesA`, t, n.target.value),
                                title: `اختر الوصف أو «مسح» لإفراغ الخانة`,
                                className: `h-7 w-[26px] shrink-0 rounded-md border border-ink/60 bg-transparent text-[11px] text-ink outline-none`,
                                children: [
                                  (0, H.jsx)(`option`, {
                                    value: ``,
                                    children: e ? `— مسح —` : `▾`,
                                  }),
                                  i
                                    .filter(Boolean)
                                    .map((e) => (0, H.jsx)(`option`, { value: e, children: e }, e)),
                                ],
                              }),
                          ],
                        },
                        t,
                      );
                    }),
                  }),
                  null,
                  (0, H.jsx)(`div`, {
                    className: `mt-2 text-center text-[12px] font-bold leading-none text-ink`,
                    children: `نوع الكتف`,
                  }),
                  (0, H.jsx)(`div`, {
                    className: `mt-2 flex items-end justify-around`,
                    children: [
                      { key: `shoulder1`, label: `كتف مائل`, caption: `مائل` },
                      { key: `shoulder2`, label: `كتف مائل خفيف`, caption: `مائل شوي` },
                    ].map((r) =>
                      (0, H.jsxs)(
                        `div`,
                        {
                          className: `flex flex-col items-center gap-1`,
                          children: [
                            (0, H.jsx)(`img`, {
                              src: y[r.key],
                              alt: r.label,
                              className: `diagram-ink h-[42px] cursor-pointer object-contain`,
                              onClick: () => !n && t({ shoulder: e.shoulder === r.key ? `` : r.key }),
                            }),
                            (0, H.jsx)(`div`, {
                              className: `text-[11px] font-bold leading-none text-ink`,
                              children: r.caption,
                            }),
                            (0, H.jsx)(G, {
                              checked: e.shoulder === r.key,
                              onSelect: () => !n && t({ shoulder: e.shoulder === r.key ? `` : r.key }),
                            }),
                          ],
                        },
                        r.key,
                      ),
                    ),
                  }),
                  (0, H.jsxs)(`div`, {
                    className: `mt-2 flex items-end gap-2`,
                    children: [
                      (0, H.jsx)(`div`, {
                        className: `flex-1`,
                        children: (0, H.jsx)(q, {
                          title: `ارتفاع الخشتك`,
                          wholeAsSelect: !0,
                          options: CROTCH_OPTS,
                          redHex: !0,
                          value: e.crotchHeight,
                          readOnly: n,
                          // حقل مستقل تماماً: لا مزامنة مع ارتفاع الكبك أو الجبزور
                          onChange: (v) => t({ crotchHeight: v }),
                        }),
                      }),
                      (0, H.jsx)(`img`, {
                        src: y.crotch,
                        alt: `ارتفاع الخشتك`,
                        className: `h-[54px] object-contain`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, H.jsxs)(K, {
                title: `الجيـوب`,
                className: `pockets-panel pt-4`,
                children: [(0, H.jsx)(`div`, {
                  className: `flex items-end justify-between gap-1`,
                  children: F.map((r) =>
                    (0, H.jsxs)(
                      `div`,
                      {
                        className: `flex flex-col items-center gap-1`,
                        children: [
                          (0, H.jsx)(`img`, {
                            src: y[r],
                            alt: r,
                            className: `h-[44px] cursor-pointer object-contain`,
                            onClick: () => !n && t({ pocket: e.pocket === r ? `` : r }),
                          }),
                          (0, H.jsx)(G, {
                            checked: e.pocket === r,
                            onSelect: () => !n && t({ pocket: e.pocket === r ? `` : r }),
                          }),
                        ],
                      },
                      r,
                    ),
                  ),
                }),
                (0, H.jsxs)(`div`, {
                  className: `mt-1 flex cursor-pointer items-center justify-center gap-2 rounded-md border border-ink/50 py-[2px] text-[11px] font-bold text-ink`,
                  onClick: () => !n && t({ pocketEmbroidery: !e.pocketEmbroidery }),
                  children: [
                    (0, H.jsx)(G, {
                      checked: !!e.pocketEmbroidery,
                      onSelect: () => !n && t({ pocketEmbroidery: !e.pocketEmbroidery }),
                    }),
                    `جيــــب تطريز`,
                  ],
                })],
              }),
            ],
          }),
          (0, H.jsxs)(`div`, {
            className: `flex flex-1 flex-col gap-2`,
            children: [
              (0, H.jsx)(K, {
                className: `pt-4`,
                children: (0, H.jsxs)(`div`, {
                  className: `flex gap-2`,
                  children: [
                    (0, H.jsxs)(`div`, {
                      className: `flex-1`,
                      children: [
                        (0, H.jsx)(`div`, {
                          className: `mb-1 text-center text-[13px] font-bold`,
                          children: `نـوع الكبك`,
                        }),
                        (0, H.jsx)(`div`, {
                          className: `space-y-[6px]`,
                          children: M.map((r) =>
                            (0, H.jsxs)(
                              `div`,
                              {
                                className: `flex items-center gap-2`,
                                 children: [
                                   // خانتا «الكسر» و«الرقم الصحيح» قبل مربع «يد سادة» (يمين RTL)
                                   r.key === `cuff0`
                                     ? (0, H.jsxs)(`div`, {
                                         className: `cuff-plain-fields flex w-[100px] shrink-0 items-center gap-1`,
                                         children: [
                                           (0, H.jsx)(FracSelect, {
                                             value: e.plainCuff?.frac ?? ``,
                                             disabled: n,
                                             onChange: (v) =>
                                               t({
                                                 plainCuff: {
                                                   ...(e.plainCuff ?? { whole: `` }),
                                                   frac: v,
                                                 },
                                               }),
                                             className: `h-5 w-[44px] shrink-0 appearance-none rounded-md border border-ink/60 bg-transparent px-0 text-center text-[10px] font-bold text-ink outline-none`,
                                           }),
                                           (0, H.jsx)(`select`, {
                                             value: e.plainCuff?.whole ?? ``,
                                             disabled: n,
                                             "aria-label": `الرقم الصحيح`,
                                             onChange: (ev) =>
                                               t({
                                                 plainCuff: {
                                                   ...(e.plainCuff ?? { frac: `` }),
                                                   whole: ev.target.value,
                                                 },
                                               }),
                                             className: `h-5 w-[52px] shrink-0 appearance-none rounded-md border border-ink/60 bg-transparent px-0 text-center text-[10px] font-bold text-destructive outline-none`,
                                             children: CUFF_H_OPTS.map((o) =>
                                               (0, H.jsx)(
                                                 `option`,
                                                 { value: o, children: o === `` ? `` : o },
                                                 o,
                                               ),
                                             ),
                                           }),
                                         ],
                                       })
                                     : (0, H.jsx)(`span`, {
                                         className: `w-[100px] shrink-0`,
                                         "aria-hidden": `true`,
                                       }),
                                   (0, H.jsx)(G, {
                                     checked: e.cuff === r.key,
                                     onSelect: () => !n && t({ cuff: e.cuff === r.key ? `` : r.key }),
                                   }),
                                   (0, H.jsx)(`span`, {
                                     className: `w-[68px] text-[12px] font-bold`,
                                     children: r.label,
                                   }),
                                   (0, H.jsx)(`img`, {
                                     src: y[r.key],
                                     alt: r.label,
                                     className: `h-[20px] cursor-pointer object-contain`,
                                     onClick: () => !n && t({ cuff: e.cuff === r.key ? `` : r.key }),
                                   }),
                                 ],

                              },
                              r.key,
                            ),
                          ),
                        }),
                        (0, H.jsxs)(`div`, {
                          className: `mt-2`,
                          children: [
                            (0, H.jsx)(q, {
                              title: `ارتفاع الكبك`,
                              wholeAsSelect: !0,
                              options: CUFF_H_OPTS,
                              value: e.cuffHeight,
                              readOnly: n,
                              onChange: (e) => t({ cuffHeight: e }),
                            }),
                            (0, H.jsxs)(`div`, {
                              className: `mt-1 flex cursor-pointer items-center justify-center gap-2 rounded-md border border-ink/50 py-[2px] text-[11px] font-bold text-ink`,
                              onClick: () => !n && t({ cuffEmbroidery: !e.cuffEmbroidery }),
                              children: [
                                (0, H.jsx)(G, {
                                  checked: !!e.cuffEmbroidery,
                                  onSelect: () => !n && t({ cuffEmbroidery: !e.cuffEmbroidery }),
                                }),
                                `كبك تطريز`,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, H.jsxs)(`div`, {
                      className: `w-[150px]`,
                      children: [
                        (0, H.jsx)(`div`, {
                          className: `mb-1 text-center text-[13px] font-bold`,
                          children: `نوع الرقبة`,
                        }),
                        (0, H.jsx)(`div`, {
                          className: `grid grid-cols-2 gap-x-1 gap-y-[6px]`,
                          children: N.map((r) =>
                            (0, H.jsxs)(
                              `div`,
                              {
                                className: `flex items-center gap-1`,
                                children: [
                                  (0, H.jsx)(G, {
                                    checked: e.neck === r,
                                    onSelect: () => !n && t({ neck: e.neck === r ? `` : r }),
                                  }),
                                  (0, H.jsx)(`img`, {
                                    src: y[r],
                                    alt: r,
                                    className: `h-[34px] cursor-pointer object-contain`,
                                    onClick: () => !n && t({ neck: e.neck === r ? `` : r }),
                                  }),
                                ],
                              },
                              r,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, H.jsxs)(K, {
                title: `نـوع الجبـزور`,
                className: `pt-4`,
                children: [
                  (0, H.jsx)(`div`, {
                    className: `flex items-end justify-around`,
                    children: P.map((r, i) =>
                      (0, H.jsxs)(
                        `div`,
                        {
                          className: `flex flex-col items-center gap-1`,
                          children: [
                            (0, H.jsx)(`img`, {
                              src: y[r],
                              alt: r,
                              className: `diagram-ink h-[92px] cursor-pointer object-contain`,
                              onClick: () => !n && t({ placket: e.placket === r ? `` : r }),
                            }),
                            i >= 3 &&
                              (0, H.jsx)(`span`, {
                                className: `text-[11px] font-bold text-ink`,
                                children: `سحاب`,
                              }),
                            (0, H.jsx)(G, {
                              checked: e.placket === r,
                              onSelect: () => !n && t({ placket: e.placket === r ? `` : r }),
                            }),
                          ],
                        },
                        r,
                      ),
                    ),
                  }),
                  (0, H.jsxs)(`div`, {
                    className: `mt-2 flex w-[430px] items-center gap-2`,
                    children: [
                      (0, H.jsx)(`div`, {
                        className: `w-[210px]`,
                        children: (0, H.jsx)(q, {
                          title: `ارتفاع الجبـزور`,
                          wholeAsSelect: !0,
                          options: D,
                          value: e.placketHeight,
                          readOnly: n,
                          onChange: (e) => t({ placketHeight: e }),
                        }),
                      }),
                      (0, H.jsxs)(`div`, {
                        className: `flex cursor-pointer items-center gap-2 rounded-md border border-ink/50 px-2 py-[6px] text-[12px] font-bold text-ink`,
                        onClick: () => !n && t({ placketEmbroidery: !e.placketEmbroidery }),
                        children: [
                          (0, H.jsx)(G, {
                            checked: !!e.placketEmbroidery,
                            onSelect: () => !n && t({ placketEmbroidery: !e.placketEmbroidery }),
                          }),
                          `جبزور تطريز`,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, H.jsx)(K, {
        title: `نـوع المـوديل`,
        className: `mt-4 pt-4`,
        children: (0, H.jsx)(`div`, {
          className: `flex justify-between gap-2`,
          children: I.map((r) =>
            (0, H.jsxs)(
              `button`,
              {
                type: `button`,
                onClick: () => !n && t({ model: e.model === r.key ? `` : r.key }),
                className: `flex flex-1 items-center justify-around gap-2 rounded-xl border border-ink/70 px-2 py-1`,
                children: [
                  (0, H.jsxs)(`div`, {
                    className: `flex flex-col items-center gap-1`,
                    children: [
                      (0, H.jsx)(`span`, {
                        className: `text-[15px] font-bold`,
                        children: r.label,
                      }),
                      (0, H.jsx)(G, {
                        checked: e.model === r.key,
                        onSelect: () => !n && t({ model: e.model === r.key ? `` : r.key }),
                      }),
                    ],
                  }),
                  (0, H.jsx)(`img`, {
                    src: y[r.key],
                    alt: r.label,
                    className: `diagram-ink h-[72px] object-contain`,
                  }),
                ],
              },
              r.key,
            ),
          ),
        }),
      }),
    ],
  });
}
var DELIVERED = `تم التسليم`,
  isDelivered = (e) => (e?.status ?? ``) === DELIVERED,
  cashOf = (e) => C(e.cash) + (isDelivered(e) ? C(e.settleCash ?? ``) : 0),
  cardOf = (e) => C(e.card) + (isDelivered(e) ? C(e.settleCard ?? ``) : 0),
  Y = (e) => cashOf(e) + cardOf(e),
  X = (e) => C(e.orderValue),
  baseRemaining = (e) => X(e) - (C(e.cash) + C(e.card)),
  settleLabel = (e) => {
    let t = C(e.settleCash ?? ``),
      n = C(e.settleCard ?? ``);
    return t > 0 && n > 0
      ? `تم التسليم بالكامل كاش وشبكة`
      : n > 0
        ? `تم التسليم بالكامل شبكة`
        : `تم التسليم بالكامل كاش`;
  },
  remainingLabel = (e) => {
    if (!isDelivered(e)) return w(X(e) - Y(e));
    let t = baseRemaining(e);
    return t > 0 ? `${w(t)} - ${settleLabel(e)}` : settleLabel(e);
  };

function Z(e) {
  let t = e.reduce((e, t) => e + X(t), 0),
    n = e.reduce((e, t) => e + Y(t), 0);
  return [
    { label: `عدد الطلبات`, value: x(e.length) },
    { label: `إجمالي القيمة`, value: w(t) },
    { label: `المتبقي`, value: w(t - n) },
  ];
}
function se(e) {
  return {
    stats: Z(e),
    columns: [`المسلسل`, `الاسم`, `القيمة`, `المدفوع`, `الباقي`, `الحالة`],
    rows: e.map((e) => [x(e.serial), e.name || `-`, w(X(e)), w(Y(e)), w(X(e) - Y(e)), e.status]),
  };
}
function Q(e, t) {
  let n = new Map();
  for (let r of e) {
    let e = t(r) || `غير محدد`;
    n.set(e, [...(n.get(e) ?? []), r]);
  }
  return [...n.entries()];
}
function ce(e) {
  let t = cashOf(e),
    n = cardOf(e);

  return t > 0 && n > 0 ? `كاش + شبكة` : n > 0 ? `شبكة` : t > 0 ? `كاش` : `آجل`;
}
function le(e) {
  if (!e) return `-`;
  let t = new Date(e);
  if (Number.isNaN(t.getTime())) return `-`;
  let n = t.getHours(),
    r = n >= 12 ? `م` : `ص`,
    i = n % 12 || 12;
  return `${x(`${String(i).padStart(2, `0`)}:${String(t.getMinutes()).padStart(2, `0`)}`)} ${r}`;
}
function ue(e) {
  let t = e.reduce((e, t) => e + cashOf(t), 0),
    n = e.reduce((e, t) => e + cardOf(t), 0),
    r = e.reduce((e, t) => e + X(t), 0),
    i = e.reduce((e, t) => e + X(t) - Y(t), 0);

  return {
    stats: [
      { label: `عدد الطلبات`, value: x(e.length) },
      { label: `إجمالي الكاش`, value: w(t) },
      { label: `إجمالي الشبكة`, value: w(n) },
      { label: `إجمالي المبيعات`, value: w(r) },
      { label: `إجمالي المحصل`, value: w(t + n) },
      { label: `إجمالي المتبقي / الديون`, value: w(i) },
    ],
    columns: [
      `التسلسل`,
      `اسم العميل`,
      `طريقة الدفع`,
      `كاش`,
      `شبكة`,
      `المدفوع`,
      `المتبقي`,
      `التاريخ`,
      `وقت الطلب`,
    ],
    rows: e.map((e) => [
      x(e.serial),
      e.name || `-`,
      ce(e),
      w(cashOf(e)),
      w(cardOf(e)),
      w(Y(e)),
      remainingLabel(e),

      O(e.receiptDate),
      le(e.createdAt),
    ]),
  };
}
function monthlyReport(e) {
  let t = e.reduce((e, t) => e + cashOf(t), 0),
    n = e.reduce((e, t) => e + cardOf(t), 0),

    r = e.reduce((e, t) => e + X(t), 0);
  return {
    stats: [
      { label: `إجمالي كاش`, value: w(t) },
      { label: `إجمالي شبكة`, value: w(n) },
      { label: `الإجمالي الكلي (كاش + شبكة)`, value: w(t + n) },
    ],
    groups: [
      { label: `التسلسل`, span: 1, rowSpan: 2 },
      { label: `اسم العميل`, span: 1, rowSpan: 2 },
      { label: `قيمة الطلب`, span: 1, rowSpan: 2 },
      { label: `المدفوع`, span: 2, rowSpan: 1 },
      { label: `إجمالي المدفوع`, span: 1, rowSpan: 2 },
      { label: `المتبقي`, span: 1, rowSpan: 2 },
      { label: `التاريخ`, span: 1, rowSpan: 2 },
    ],
    subColumns: [`كاش`, `شبكة`],
    columns: [
      `التسلسل`,
      `اسم العميل`,
      `قيمة الطلب`,
      `كاش`,
      `شبكة`,
      `إجمالي المدفوع`,
      `المتبقي`,
      `التاريخ`,
    ],
    rows: [
      ...e.map((e) => [
        x(e.serial),
        e.name || `-`,
        w(X(e)),
        w(cashOf(e)),
        w(cardOf(e)),
        w(Y(e)),
        remainingLabel(e),

        O(e.receiptDate),
      ]),
      ...(e.length ? [[`الإجمالي`, ``, w(r), w(t), w(n), w(t + n), w(r - (t + n)), ``]] : []),
    ],
  };
}
function de(e, t) {
  let n = new Date().toISOString().slice(0, 10),
    r = n.slice(0, 7);
  if (e.includes(`اليومي`)) return ue(t.filter((e) => e.receiptDate === n));
  if (e.includes(`الشهري`))
    return monthlyReport(t.filter((e) => (e.receiptDate ?? ``).startsWith(r)));
  if (e.includes(`العملاء`)) {
    let e = Q(t, (e) => e.name);
    return {
      stats: [{ label: `عدد العملاء`, value: x(e.length) }, ...Z(t).slice(1)],
      columns: [`العميل`, `الجوال`, `عدد الطلبات`, `إجمالي القيمة`, `الباقي`],
      rows: e.map(([e, t]) => [
        e,
        x(t[0]?.mobile ?? ``),
        x(t.length),
        w(t.reduce((e, t) => e + X(t), 0)),
        w(t.reduce((e, t) => e + X(t) - Y(t), 0)),
      ]),
    };
  }
  if (e.includes(`الأصناف`)) {
    let e = (e) => I.find((t) => t.key === e)?.label ?? e,
      n = Q(t, (t) => e(t.model));
    return {
      stats: [{ label: `عدد الأصناف`, value: x(n.length) }, ...Z(t).slice(1)],
      columns: [`الصنف / الموديل`, `عدد الطلبات`, `إجمالي القيمة`],
      rows: n.map(([e, t]) => [e, x(t.length), w(t.reduce((e, t) => e + X(t), 0))]),
    };
  }
  let i = Q(t, (e) => e.status);
  return {
    stats: Z(t),
    columns: [`الحالة`, `عدد الطلبات`, `إجمالي القيمة`, `الباقي`],
    rows: i.map(([e, t]) => [
      e,
      x(t.length),
      w(t.reduce((e, t) => e + X(t), 0)),
      w(t.reduce((e, t) => e + X(t) - Y(t), 0)),
    ]),
  };
}
function $({ icon: e, label: t, onClick: n, danger: r }) {
  return (0, H.jsxs)(`button`, {
    type: `button`,
    onClick: n,
    className: `flex min-w-[92px] flex-col items-center gap-1 rounded-lg px-3 py-2 transition-colors hover:bg-ink/10 ${r ? `text-destructive` : `text-ink`}`,
    children: [
      (0, H.jsx)(e, { className: `h-7 w-7`, strokeWidth: 1.6 }),
      (0, H.jsx)(`span`, { className: `text-[13px] font-bold`, children: t }),
    ],
  });
}
function ClientCard({ order: e, settings: t }) {
  let n = C(e.orderValue),
    r = C(e.cash) + C(e.card);
  return (0, H.jsxs)(`div`, {
    dir: `rtl`,
    className: `w-[420px] rounded-2xl border-2 border-ink bg-sheet p-4 text-ink`,
    children: [
      (0, H.jsx)(`div`, {
        className: `flex justify-center`,
        children: (0, H.jsx)(`img`, {
          src: y.logo,
          alt: t.shopName,
          className: `h-[92px] object-contain`,
        }),
      }),
      (0, H.jsx)(`div`, {
        className: `mt-1 text-center text-[15px] font-bold`,
        children: t.shopName,
      }),
      (0, H.jsx)(`div`, {
        className: `mb-2 text-center text-[12px]`,
        children: t.phone ? `جوال : ${x(t.phone)}` : ``,
      }),
      (0, H.jsx)(`div`, {
        className: `space-y-1 text-[13px] font-bold`,
        children: [
          [`رقم الطلب`, x(e.serial)],
          [`الاسم`, e.name],
          [`الجوال`, x(e.mobile)],
          [`العدد`, x(e.count)],
          [`قيمة الطلب`, w(n)],
          [`المدفوع`, w(r)],
          [`المتبقي`, w(n - r)],
          [`تاريخ القبض`, O(e.receiptDate)],
          [`موعد التسليم`, O(e.deliveryDate)],
          [`الحالة`, e.status],
        ].map(([e, t]) =>
          (0, H.jsxs)(
            `div`,
            {
              className: `flex items-center justify-between rounded-md border border-ink/50 px-2 py-[3px]`,
              children: [
                (0, H.jsx)(`span`, { children: e }),
                (0, H.jsx)(`span`, { children: t }),
              ],
            },
            e,
          ),
        ),
      }),
    ],
  });
}
function fe() {
  let [e, t] = (0, u.useState)([]),
    [n, i] = (0, u.useState)(() => R(1)),
    [a, o] = (0, u.useState)(!1),
    [s, c] = (0, u.useState)(!1),
    [l, d] = (0, u.useState)(null),
    [f, y] = (0, u.useState)(null),
    [settingsOpen, setSettingsOpen] = (0, u.useState)(!1),
    [query, setQuery] = (0, u.useState)(``),
    [cardOrder, setCardOrder] = (0, u.useState)(null),
    [printReport, setPrintReport] = (0, u.useState)(null),
    [greetingsOpen, setGreetingsOpen] = (0, u.useState)(!1),
    [tailorOpen, setTailorOpen] = (0, u.useState)(!1),
    [tailorBoardOpen, setTailorBoardOpen] = (0, u.useState)(!1),
    [tailorBoardQuery, setTailorBoardQuery] = (0, u.useState)(``),
    [settings, setSettings] = (0, u.useState)(DEFAULT_SETTINGS);
  let currentSerialRef = (0, u.useRef)(0);
  (0, u.useEffect)(() => {
    currentSerialRef.current = n?.serial ?? 0;
  }, [n?.serial]);
  (0, u.useEffect)(() => {
    setSettings(loadSettings());
  }, []);
  // إعادة إرسال التعديلات المحفوظة محلياً عند عودة الاتصال
  (0, u.useEffect)(() => startOfflineSync(), []);
  ((0, u.useEffect)(() => {
    let e = B();
    (t(e), i(R(V(e))));

    (async () => {
      try {
        let cloudRaw = await fetchCloudOrders(),
          localOrders = B(),
          // الطلبات الملغاة نهائياً لا تُستعاد أبداً، وتُحذف من السحابة إن وُجدت
          cloudOrders = cloudRaw.filter((o) => !isDeletedSerial(o.serial));
        for (const gone of cloudRaw.filter((o) => isDeletedSerial(o.serial)))
          await deleteCloudOrder(gone.serial).catch(() => {});
        let map = new Map(cloudOrders.map((o) => [Number(o.serial), o]));
        // local edits win for the same serial, cloud fills everything else
        localOrders.forEach((o) => map.set(Number(o.serial), o));
        let merged = [...map.values()].sort((a, b) => a.serial - b.serial);
        (oe(merged), t(B()), i(R(V(merged))));
        await pushCloudOrders(merged);
        let cloudSettings = await fetchCloudSettings();
        cloudSettings
          ? setSettings((s) => {
              let next = { ...s, ...cloudSettings };
              return (saveSettings(next), next);
            })
          : await pushCloudSettings(loadSettings());
      } catch (err) {
        console.error(`cloud sync failed`, err);
      }
    })();
  }, []),
    // مزامنة لحظية بين الأجهزة: أي تعديل من جهاز آخر يظهر هنا مباشرة
    (0, u.useEffect)(() => {
      let alive = !0,
        stop = subscribeCloudChanges(async (table) => {
          try {
            if (table === `app_settings`) {
              let cs = await fetchCloudSettings();
              if (alive && cs)
                setSettings((s) => {
                  let next = { ...s, ...cs };
                  return (saveSettings(next), next);
                });
              return;
            }
            let cloudOrders = (await fetchCloudOrders()).filter((o) => !isDeletedSerial(o.serial)),
              localOrders = B(),
              // السحابة هي المرجع: الحذف من جهاز آخر ينعكس هنا فوراً
              map = new Map(cloudOrders.map((o) => [Number(o.serial), o]));
            localOrders.forEach((o) => {
              // نحافظ فقط على الطلب المفتوح حالياً قيد التعديل
              if (Number(o.serial) === Number(currentSerialRef.current))
                map.set(Number(o.serial), o);
            });
            let merged = [...map.values()].sort((a, b) => a.serial - b.serial);
            if (!alive) return;
            (oe(merged), t(B()));
          } catch (err) {
            console.error(`realtime sync failed`, err);
          }
        });
      return () => {
        ((alive = !1), stop());
      };
    }, []),
    (0, u.useEffect)(() => {
      if (!l) return;
      let e = () => d(null);
      window.addEventListener(`afterprint`, e);
      let t = window.setTimeout(() => window.print(), 120);
      // إرسال واتساب آلي مدمج داخل نسخة الخياط / نسخة العميل
      let wa = window.setTimeout(() => {
        l === `client` ? M() : sendTailorWhatsApp();
      }, 400);
      return () => {
        (window.removeEventListener(`afterprint`, e),
          window.clearTimeout(t),
          window.clearTimeout(wa));
      };
    }, [l]),
    (0, u.useEffect)(() => {
      if (!cardOrder) return;
      let e = () => setCardOrder(null);
      window.addEventListener(`afterprint`, e);
      let t = window.setTimeout(() => window.print(), 120);
      // إرسال عبر الواتساب آلياً لرقم العميل المرتبط بالكرت
      let card = cardOrder,
        wa = window.setTimeout(() => sendCard(card), 400);
      return () => {
        (window.removeEventListener(`afterprint`, e),
          window.clearTimeout(t),
          window.clearTimeout(wa));
      };
    }, [cardOrder]),
    (0, u.useEffect)(() => {
      if (!printReport) return;
      let e = () => setPrintReport(null);
      window.addEventListener(`afterprint`, e);
      // قفل مطلق لاتجاه الصفحة: A4 عمودي دائماً للتقارير والطلبات (كمبيوتر وجوال)
      let portraitStyle = document.createElement(`style`);
      ((portraitStyle.setAttribute(`data-report-portrait`, `1`),
        (portraitStyle.textContent = `@media print{@page{size:A4 portrait !important;size:portrait !important;margin:6mm !important}@page report{size:A4 portrait !important;size:portrait !important;margin:6mm !important}html,body{width:210mm !important;max-width:210mm !important}}`),
        document.head.appendChild(portraitStyle)));
      // حساب تصغير تلقائي ليطبع التقرير على صفحة A4 عمودية واحدة
      let fit = window.setTimeout(() => {
        try {
          let sheet = document.querySelector(`.print-report-sheet`);
          if (!sheet) return;
          let probe = document.createElement(`div`);
          ((probe.style.cssText = `position:absolute;visibility:hidden;height:100mm`),
            document.body.appendChild(probe));
          let mm = probe.getBoundingClientRect().height / 100;
          probe.remove();
          let prev = sheet.getAttribute(`style`) ?? ``;
          ((sheet.style.cssText = `${prev};display:block;position:absolute;left:-10000px;top:0;width:${198 * mm}px;max-height:none;zoom:1;overflow:visible;`),
            void sheet.offsetHeight);
          let h = sheet.scrollHeight;
          (sheet.setAttribute(`style`, prev),
            document.documentElement.style.setProperty(
              `--report-print-zoom`,
              String(Math.min(1, Math.max(0.4, (285 * mm) / (h + 4)))),
            ));

        } catch (err) {
          console.error(`report fit failed`, err);
        }
      }, 40);
      let t = window.setTimeout(() => window.print(), 160);
      return () => {
        (window.removeEventListener(`afterprint`, e),
          window.clearTimeout(fit),
          window.clearTimeout(t),
          portraitStyle.remove());
      };
    }, [printReport]));
  let b = (e) =>
      i((t) => {
        let n = { ...t, ...e };
        if (`orderValue` in e) {
          let r = C(n.count) || 1;
          n.unitPrice = C(String(e.orderValue ?? ``)) / r;
        } else if (`count` in e) {
          let r = Number(t.unitPrice) || 0;
          r > 0 && (n.orderValue = numClean(r * (C(String(e.count ?? ``)) || 0)));
        }
        let rem = C(n.orderValue) - (C(n.cash) + C(n.card));
        if (!Number.isFinite(rem) || rem < 0) rem = 0;
        rem = Math.round(rem * 100) / 100;
        let z2 = x(`0`);
        let remStr = x(String(rem));
        if (`paymentMethod` in e) {
          // تبديل حصري فوري: تحويل كامل الباقي للحقل المختار وتصفير الآخر
          if (e.paymentMethod === `cash`)
            ((n.settleCash = remStr), (n.settleCard = z2), (n.paymentMethod = `cash`));
          else if (e.paymentMethod === `card`)
            ((n.settleCard = remStr), (n.settleCash = z2), (n.paymentMethod = `card`));
          else ((n.settleCash = z2), (n.settleCard = z2), (n.paymentMethod = `none`));
        } else if (`status` in e) {
          n.status === DELIVERED
            ? ((n.settleCash = remStr), (n.settleCard = z2), (n.paymentMethod = `cash`))
            : ((n.settleCash = ``), (n.settleCard = ``), (n.paymentMethod = `none`));
        } else if (`settleCash` in e) {
          if (C(n.settleCash) > rem) n.settleCash = remStr;
          ((n.settleCard = z2), (n.paymentMethod = `cash`));
        } else if (`settleCard` in e) {
          if (C(n.settleCard) > rem) n.settleCard = remStr;
          ((n.settleCash = z2), (n.paymentMethod = `card`));
        } else if (n.status === DELIVERED && (`orderValue` in e || `cash` in e || `card` in e)) {
          n.paymentMethod === `card`
            ? ((n.settleCard = remStr), (n.settleCash = z2))
            : ((n.settleCash = remStr), (n.settleCard = z2));
        }
        // لا تُترك حقول السداد فارغة/غير معرّفة عند حالة التسليم
        if (n.status === DELIVERED) {
          if (!n.settleCash) n.settleCash = z2;
          if (!n.settleCard) n.settleCard = z2;
        }

        return n;

      }),
    S = C(n.orderValue),
    T = C(n.cash) + C(n.card),
    E = S - T,
    settledAmount = (Number(C(n.settleCash)) || 0) + (Number(C(n.settleCard)) || 0),
    rawRemainingBalance = Math.max(0, E),
    discountAmount =
      settledAmount >= rawRemainingBalance ? 0 : rawRemainingBalance - settledAmount,
    discountPct =
      S > 0 ? Math.max(0, Math.min(100, (discountAmount / S) * 100)) : 0,

    D = (e) => {
      (oe(e), t(B()));
    },
    k = () => {
      let e = B(),
        t = e.findIndex((e) => e.serial === n.serial);
      (t >= 0 ? (e[t] = n) : e.push(n), D(e), r.success(`تم حفظ الطلب رقم ${x(n.serial)}`));
      pushCloudOrder(n).catch((err) => {
        (queueCloudWrite({ kind: `order`, order: n }),
          console.error(`cloud save failed`, err),
          r.error(`تم الحفظ على الجهاز، وسيتم رفعه للسحابة عند توفر الاتصال`));
      });
      // إرسال آلي لتفاصيل الطلب على واتساب العميل بعد الحفظ
      if (settings.autoOrderWhatsApp !== !1 && waNumber(n.whatsapp || n.mobile))
        window.setTimeout(() => M(), 250);
    },

    A = () => {
      // حفظ تلقائي في الخلفية للطلب الحالي قبل التصفير لمنع فقدان البيانات
      try {
        let cur = n,
          list = B(),
          idx = list.findIndex((o) => o.serial === cur.serial);
        (idx >= 0 ? (list[idx] = cur) : list.push(cur), D(list));
        pushCloudOrder(cur).catch((err) => {
          (queueCloudWrite({ kind: `order`, order: cur }),
            console.error(`cloud autosave failed`, err));
        });
      } catch (err) {
        console.error(`autosave before new order failed`, err);
      }
      (i(R(V(B()))), r.info(`تم حفظ الطلب الحالي وتجهيز طلب جديد`));
    },
    j = () => {
      let removed = n.serial;
      // مسح نهائي: تسجيل الرقم كمحذوف + مسح الكاش المحلي + حذف من السحابة
      markDeletedSerial(removed);
      let e = B().filter((e) => e.serial !== removed);
      (D(e), i(R(V(e))), r.error(`تم إلغاء الطلب نهائياً`));
      deleteCloudOrder(removed).catch((err) => {
        (queueCloudWrite({ kind: `delete`, serial: Number(removed) }),
          console.error(`cloud delete failed`, err));
      });
    },
    M = () => {
      let e = waNumber(n.whatsapp || n.mobile);
      if (!e) {
        r.error(`أدخل رقم الواتس أولاً`);
        return;
      }
      let t = [
        settings.shopName || `بصمة ليث للخياطة الرجالية`,
        settings.phone ? `جوال المحل: ${settings.phone}` : ``,
        `الاسم: ${n.name}`,
        `رقم الطلب: ${x(n.serial)}`,
        `حالة الطلب: ${n.status}`,
        `العدد: ${x(n.count)}`,
        `— المقاسات —`,
        ...MEASURE_LABELS.map(
          (e, t) =>
            `${e}: ${n.measures[t]?.whole ?? ``}${hasFrac(n.measures[t]?.frac) ? ` ${n.measures[t].frac}` : ``}`,
        ),
        `— المبالغ —`,
        `قيمة الطلب: ${w(S)}`,
        `كاش: ${w(C(n.cash))}`,
        `شبكة: ${w(C(n.card))}`,
        `المدفوع: ${w(T)}`,
        `المتبقي: ${w(E)}`,
        `موعد التسليم: ${O(n.deliveryDate)}`,
      ]
        .filter(Boolean)
        .join(`
`);
      window.open(
        `https://wa.me/${e}?text=${encodeURIComponent(t)}`,
        `_blank`,
        `noopener,noreferrer`,
      );
    },
    // إرسال ملخص الطلب إلى واتساب الخياط المخزّن في «بيانات الخياط»
    buildTailorMessage = (o, tailor) =>
      [
        settings.shopName || `بصمة ليث للخياطة الرجالية`,
        tailor?.name ? `الخياط: ${tailor.name}` : ``,
        `— نسخة الخياط —`,
        `الاسم: ${o.name}`,
        `رقم الطلب: ${x(o.serial)}`,
        `العدد: ${x(String(C(o.count) || 0))}`,
        `الموديل: ${I.find((m) => m.key === o.model)?.label ?? ``}`,
        `— المقاسات —`,
        ...MEASURE_LABELS.map(
          (lbl, idx) =>
            `${lbl}: ${o.measures?.[idx]?.whole ?? ``}${hasFrac(o.measures?.[idx]?.frac) ? ` ${o.measures[idx].frac}` : ``}`,
        ),
        `— الرموز والتفاصيل —`,
        `الكم: ${M2.find((c) => c.key === o.cuff)?.label ?? ``}${o.cuffEmbroidery ? ` (كبك تطريز)` : ``}`,
        o.neck ? `رمز الرقبة: ${x(String(N.indexOf(o.neck) + 1))}` : ``,
        o.placket
          ? `رمز الكسرة: ${x(String(P.indexOf(o.placket) + 1))}${o.placketEmbroidery ? ` (تطريز)` : ``}`
          : ``,
        o.pocket
          ? `رمز الجيب: ${x(String(F.indexOf(o.pocket) + 1))}${o.pocketEmbroidery ? ` (تطريز)` : ``}`
          : ``,
        o.shoulder ? `الكتف: ${o.shoulder === `shoulder1` ? `مائل` : `مائل شوي`}` : ``,
        o.cuffHeight?.whole
          ? `ارتفاع الكبك: ${o.cuffHeight.whole}${hasFrac(o.cuffHeight.frac) ? ` ${o.cuffHeight.frac}` : ``}`
          : ``,
        o.placketHeight?.whole
          ? `ارتفاع الكسرة: ${o.placketHeight.whole}${hasFrac(o.placketHeight.frac) ? ` ${o.placketHeight.frac}` : ``}`
          : ``,
        o.crotchHeight?.whole
          ? `ارتفاع الخشتك: ${o.crotchHeight.whole}${hasFrac(o.crotchHeight.frac) ? ` ${o.crotchHeight.frac}` : ``}`
          : ``,
        `— المبالغ —`,
        `قيمة الطلب: ${w(C(o.orderValue))}`,
        `المدفوع: ${w(C(o.cash) + C(o.card))}`,
        `المتبقي: ${w(C(o.orderValue) - C(o.cash) - C(o.card))}`,
        `حالة الطلب: ${o.status}`,
        `موعد التسليم: ${O(o.deliveryDate)}`,
      ]
        .filter(Boolean)
        .join(`
`),
    sendTailorWhatsApp = (o = n) => {
      let tailor = findTailor(settings, o.tailorId) ?? getTailors(settings)[0] ?? null,
        num = waNumber(tailor?.whatsapp || tailor?.phone || settings.tailorPhone);
      if (!num) {
        (r.error(`أضف خياطاً ورقم واتسابه من «بيانات الخياط» أولاً`), setTailorOpen(!0));
        return;
      }
      const messageText = buildTailorMessage(o, tailor);
      const encodedText = encodeURIComponent(messageText);
      const waUrl = `https://wa.me/${num}?text=${encodedText}`;
      const webUrl = `https://web.whatsapp.com/send?phone=${num}&text=${encodedText}`;
      const opened = window.open(waUrl, `_blank`);
      if (!opened) {
        window.open(webUrl, `_blank`);
      }
    },
    N = (0, u.useMemo)(() => [...e].sort((e, t) => e.serial - t.serial), [e]),
    tailorStats = (0, u.useMemo)(
      () =>
        getTailors(settings).map((tl) => {
          let own = e.filter((o) => o.tailorId === tl.id),
            total = own.reduce((a, o) => a + orderItems(o).length, 0),
            ready = own.reduce((a, o) => a + countReadyItems(o), 0),
            delivered = own.reduce((a, o) => a + countDeliveredItems(o), 0);
          return {
            id: tl.id,
            name: tl.name || `بدون اسم`,
            phone: tl.whatsapp || tl.phone || ``,
            serials: own.map((o) => o.serial).sort((a, b) => a - b),
            // تفصيل ذكي وآلي: كل رقم فاتورة/تسلسل مع عدد ثيابه (جاهزة / غير جاهزة)
            readyBreak: buildBreak(own, countReadyItems),
            pendingBreak: buildBreak(own, countPendingItems),
            total,
            ready,
            delivered,
            pending: Math.max(0, total - ready),
          };
        }),
      [e, settings],
    ),
    boardSerialQuery = S2(tailorBoardQuery).replace(/\D/g, ``),
    boardRows = (0, u.useMemo)(
      () =>
        boardSerialQuery
          ? tailorStats
              .filter((st) => st.serials.some((sn) => String(sn).includes(boardSerialQuery)))
              .map((st) => {
                // عدد الثياب الخاص برقم الطلب المطلوب فقط
                let matched = st.serials.filter((sn) => String(sn).includes(boardSerialQuery)),
                  own = e.filter((o) => o.tailorId === st.id && matched.includes(o.serial)),
                  total = own.reduce((a, o) => a + orderItems(o).length, 0),
                  ready = own.reduce((a, o) => a + countReadyItems(o), 0),
                  delivered = own.reduce((a, o) => a + countDeliveredItems(o), 0);
                return {
                  ...st,
                  serials: matched,
                  readyBreak: buildBreak(own, countReadyItems),
                  pendingBreak: buildBreak(own, countPendingItems),
                  total,
                  ready,
                  delivered,
                  pending: Math.max(0, total - ready),
                };
              })

          : tailorStats,
      [tailorStats, boardSerialQuery, e],
    ),
    filteredOrders = (0, u.useMemo)(() => {
      let e = S2(query).trim().toLowerCase();
      return e
        ? N.filter(
            (t) =>
              (t.name ?? ``).toLowerCase().includes(e) ||
              S2(t.mobile ?? ``).includes(e) ||
              S2(t.whatsapp ?? ``).includes(e) ||
              String(t.serial).includes(e),
          )
        : N;
    }, [N, query]),
    sendCard = (e) => {
      let t = waNumber(e.whatsapp || e.mobile);
      if (!t) {
        r.error(`لا يوجد رقم واتس لهذا العميل`);
        return;
      }
      let n = C(e.orderValue),
        i = C(e.cash) + C(e.card),
        a = [
          settings.shopName || `بصمة ليث للخياطة الرجالية`,
          settings.phone ? `جوال المحل: ${settings.phone}` : ``,
          ``,
          `عميلنا الكريم ${e.name || ``}`.trim(),
          `رقم الطلب: ${x(e.serial)}`,
          `حالة الطلب: ${e.status}`,
          `إجمالي قيمة الطلب: ${w(n)}`,
          `المدفوع: ${w(i)}`,
          `المتبقي: ${w(n - i)}`,
          `موعد التسليم: ${O(e.deliveryDate)}`,
          ``,
          `شاكرين لكم ثقتكم بنا 🌿`,
        ]
          .filter((e) => e !== null && e !== void 0)
          .join(`
`);
      const cardUrl = `https://wa.me/${t}?text=${encodeURIComponent(a)}`;
      const cardWebUrl = `https://web.whatsapp.com/send?phone=${t}&text=${encodeURIComponent(a)}`;
      const cardOpened = window.open(cardUrl, `_blank`);
      if (!cardOpened) window.open(cardWebUrl, `_blank`);
    },
    sendGreetings = (occasion) => {
      let seen = new Set(),
        targets = [];
      (N.forEach((o) => {
        let num = waNumber(o.whatsapp || o.mobile);
        num && !seen.has(num) && (seen.add(num), targets.push({ num: num, name: o.name }));
      }),
        targets.length === 0
          ? r.error(`لا توجد أرقام واتساب في الطلبات المحفوظة`)
          : (targets.forEach((tg, idx) => {
              window.setTimeout(() => {
                const greetingMessage = greetingText(
                  occasion,
                  tg.name,
                  settings.shopName || `بصمة ليث للخياطة الرجالية`,
                );
                const greetingUrl = `https://wa.me/${tg.num}?text=${encodeURIComponent(greetingMessage)}`;
                const greetingWebUrl = `https://web.whatsapp.com/send?phone=${tg.num}&text=${encodeURIComponent(greetingMessage)}`;
                const opened = window.open(greetingUrl, `_blank`);
                if (!opened) window.open(greetingWebUrl, `_blank`);
              }, idx * 600);
            }),
            setGreetingsOpen(!1),
            r.success(`تم تجهيز ${x(targets.length)} رسالة تهنئة`)));
    },
    // قائمة «الخياط المسؤول» كعنصر مستقل يمكن إدراجه في نسخة الخياط
    tailorPickerBox = () =>
      (0, H.jsxs)(`div`, {
        className: `tailor-picker-box rounded-xl border border-ink/70 bg-sheet p-2`,
        children: [
          (0, H.jsx)(`div`, {
            className: `mb-1 text-center text-[12px] font-bold text-ink`,
            children: `الخياط المسؤول`,
          }),
          (0, H.jsxs)(`select`, {
            value: n.tailorId ?? ``,
            "aria-label": `الخياط المسؤول`,
            onChange: (t) => b({ tailorId: t.target.value }),
            className: `h-7 w-full rounded-md border border-ink/60 bg-transparent px-2 text-center text-[12px] font-bold text-ink outline-none`,
            children: [
              (0, H.jsx)(`option`, { value: ``, children: `— اختر الخياط —` }, `none`),
              ...getTailors(settings).map((tl) =>
                (0, H.jsx)(`option`, { value: tl.id, children: tl.name }, tl.id),
              ),
            ],
          }),
        ],
      }),
    P = (e, hideTailor) =>

      (0, H.jsxs)(`div`, {
        className: `w-[240px] space-y-3`,
        children: [
          (0, H.jsxs)(`div`, {
            className: `rounded-xl border border-ink/70 bg-sheet p-3`,
            children: [
              (0, H.jsx)(`div`, {
                className: `mb-2 text-center text-[15px] font-bold text-ink`,
                children: `البيانات المالية`,
              }),
              (0, H.jsx)(`label`, {
                className: `mb-1 block text-[13px] font-bold text-ink`,
                children: `قيمة الطلب`,
              }),
              (0, H.jsx)(`input`, {
                inputMode: `decimal`,
                value: x(n.orderValue),
                onChange: (e) => b({ orderValue: x(e.target.value) }),
                placeholder: `٠.٠٠`,
                className: `print-field h-9 w-full rounded-md border border-ink/60 bg-transparent px-2 text-center text-[15px] text-ink outline-none focus:ring-1 focus:ring-ink/40`,
              }),
              (0, H.jsx)(`div`, {
                className: `mt-2 text-center text-[13px] font-bold text-ink`,
                children: `المدفوع`,
              }),
              (0, H.jsx)(`label`, {
                className: `mb-1 block text-[13px] font-bold text-ink`,
                children: `كاش`,
              }),
              (0, H.jsx)(`input`, {
                inputMode: `decimal`,
                value: x(n.cash),
                onChange: (e) => b({ cash: x(e.target.value) }),
                placeholder: `٠.٠٠`,
                className: `print-field h-9 w-full rounded-md border border-ink/60 bg-transparent px-2 text-center text-[15px] text-ink outline-none focus:ring-1 focus:ring-ink/40`,
              }),
              (0, H.jsx)(`label`, {
                className: `mb-1 mt-2 block text-[13px] font-bold text-ink`,
                children: `شبكة`,
              }),
              (0, H.jsx)(`input`, {
                inputMode: `decimal`,
                value: x(n.card),
                onChange: (e) => b({ card: x(e.target.value) }),
                placeholder: `٠.٠٠`,
                className: `print-field h-9 w-full rounded-md border border-ink/60 bg-transparent px-2 text-center text-[15px] text-ink outline-none focus:ring-1 focus:ring-ink/40`,
              }),
              (0, H.jsx)(`div`, {
                className: `mt-3 text-[13px] font-bold text-ink`,
                children: `إجمالي المدفوع`,
              }),
              (0, H.jsx)(`div`, {
                className: `mt-1 rounded-md border border-ink/60 py-1 text-center text-[15px] font-bold text-ink`,
                children: w(T),
              }),
              (0, H.jsx)(`div`, {
                className: `mt-3 text-[13px] font-bold text-ink`,
                children: `الباقي`,
              }),
              (0, H.jsx)(`div`, {
                className: `mt-1 rounded-md border border-ink/60 py-1 text-center text-[15px] font-bold text-destructive`,
                children: w(E),
              }),
              n.status === DELIVERED &&
                (0, H.jsx)(`div`, {
                  className: `mt-3 cursor-pointer text-[13px] font-bold text-ink`,
                  onClick: () => b({ paymentMethod: `card` }),
                  children: `الباقي شبكة`,
                }),
              n.status === DELIVERED &&
                (0, H.jsx)(`input`, {
                  inputMode: `decimal`,
                  value: x(n.settleCard ?? ``),
                  onFocus: () => b({ paymentMethod: `card` }),
                  onChange: (e) => b({ settleCard: x(e.target.value) }),
                  placeholder: `٠.٠٠`,
                  className: `print-field mt-1 h-9 w-full rounded-md border border-ink/60 bg-transparent px-2 text-center text-[15px] text-ink outline-none focus:ring-1 focus:ring-ink/40`,
                }),
              n.status === DELIVERED &&
                (0, H.jsx)(`div`, {
                  className: `mt-3 cursor-pointer text-[13px] font-bold text-ink`,
                  onClick: () => b({ paymentMethod: `cash` }),
                  children: `الباقي كاش`,
                }),
              n.status === DELIVERED &&
                (0, H.jsx)(`input`, {
                  inputMode: `decimal`,
                  value: x(n.settleCash ?? ``),
                  onFocus: () => b({ paymentMethod: `cash` }),
                  onChange: (e) => b({ settleCash: x(e.target.value) }),
                  placeholder: `٠.٠٠`,
                  className: `print-field mt-1 h-9 w-full rounded-md border border-ink/60 bg-transparent px-2 text-center text-[15px] text-ink outline-none focus:ring-1 focus:ring-ink/40`,
                }),
              n.status === DELIVERED &&
                (0, H.jsx)(`div`, {
                  className: `mt-3 text-[13px] font-bold text-ink`,
                  children: `نسبة الخصم %`,
                }),
              n.status === DELIVERED &&
                (0, H.jsx)(`div`, {
                  className: `print-field mt-1 rounded-md border border-ink/60 py-1 text-center text-[15px] font-bold text-destructive`,
                  children: `${x(String(Math.max(0, Math.round(Number(discountPct) || 0))))}%`,
                }),



            ],
          }),
          !hideTailor &&
            (0, H.jsxs)(`div`, {
            className: `rounded-xl border border-ink/70 bg-sheet p-3`,

            children: [
              (0, H.jsx)(`div`, {
                className: `mb-2 text-center text-[15px] font-bold text-ink`,
                children: `الخياط المسؤول`,
              }),
              e
                ? (0, H.jsx)(`div`, {
                    className: `print-field h-9 rounded-md border border-ink/60 px-2 text-center text-[14px] font-bold leading-9 text-ink`,
                    children: findTailor(settings, n.tailorId)?.name ?? `—`,
                  })
                : (0, H.jsxs)(`select`, {
                    value: n.tailorId ?? ``,
                    "aria-label": `الخياط المسؤول`,
                    onChange: (t) => {
                      let id = t.target.value;
                      b({ tailorId: id });
                    },
                    className: `h-9 w-full rounded-md border border-ink/60 bg-transparent px-2 text-[14px] text-ink outline-none`,
                    children: [
                      (0, H.jsx)(`option`, { value: ``, children: `— اختر الخياط —` }, `none`),
                      ...getTailors(settings).map((tl) =>
                        (0, H.jsx)(`option`, { value: tl.id, children: tl.name }, tl.id),
                      ),
                    ],
                  }),
              !e &&
                (0, H.jsx)(`button`, {
                  type: `button`,
                  onClick: () => sendTailorWhatsApp(n),
                  className: `no-print mt-2 w-full rounded-md bg-ink px-3 py-2 text-[13px] font-bold text-sheet`,
                  children: `إرسال للواتساب`,
                }),
            ],
          }),
          (0, H.jsxs)(`div`, {
            className: `rounded-xl border border-ink/70 bg-sheet p-3`,
            children: [
              (0, H.jsx)(`label`, {
                className: `mb-1 block text-[13px] font-bold text-ink`,
                children: `تاريخ القبض`,
              }),
              e
                ? (0, H.jsx)(`div`, {
                    className: `print-field h-9 rounded-md border border-ink/60 px-2 text-center text-[14px] font-bold leading-9 text-ink`,
                    children: O(n.receiptDate),
                  })
                : (0, H.jsx)(`input`, {
                    type: `date`,
                    value: n.receiptDate,
                    onChange: (e) => b({ receiptDate: e.target.value }),
                    className: `h-9 w-full rounded-md border border-ink/60 bg-transparent px-2 text-center text-[14px] text-ink outline-none`,
                  }),
              (0, H.jsx)(`label`, {
                className: `mb-1 mt-3 block text-[13px] font-bold text-ink`,
                children: `موعد التسليم`,
              }),
              e
                ? (0, H.jsx)(`div`, {
                    className: `print-field h-9 rounded-md border border-ink/60 px-2 text-center text-[14px] font-bold leading-9 text-ink`,
                    children: O(n.deliveryDate),
                  })
                : (0, H.jsx)(`input`, {
                    type: `date`,
                    value: n.deliveryDate,
                    onChange: (e) => b({ deliveryDate: e.target.value }),
                    className: `h-9 w-full rounded-md border border-ink/60 bg-transparent px-2 text-center text-[14px] text-ink outline-none`,
                  }),
              (0, H.jsx)(`label`, {
                className: `mb-1 mt-3 block text-[13px] font-bold text-ink`,
                children: `حالة الطلب`,
              }),
              (0, H.jsx)(`select`, {
                value: n.status,
                onChange: (e) => b({ status: e.target.value }),
                className: `h-9 w-full rounded-md border border-ink/60 bg-transparent px-2 text-center text-[14px] text-ink outline-none`,
                children: L.map((e) => (0, H.jsx)(`option`, { children: e }, e)),
              }),
              (0, H.jsxs)(`div`, {
                className: `no-print mt-3 space-y-2`,
                children: [
                  (0, H.jsxs)(`button`, {
                    onClick: () => {
                      k();
                    },
                    className: `flex w-full items-center justify-center gap-2 rounded-md bg-ink py-2 text-[14px] font-bold text-sheet`,
                    children: [(0, H.jsx)(g, { className: `h-4 w-4` }), ` حفظ الطلب`],
                  }),
                  (0, H.jsxs)(`button`, {
                    onClick: j,
                    className: `flex w-full items-center justify-center gap-2 rounded-md border border-destructive py-2 text-[14px] font-bold text-destructive`,
                    children: [(0, H.jsx)(v, { className: `h-4 w-4` }), ` إلغاء الطلب`],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
  // خدمة التهاني الآلية الذكية: تتعرف على المناسبة (الجمعة / الأعياد / اليوم الوطني والتأسيس) وتجهز الإرسال لكل العملاء مرة واحدة في اليوم
  ((0, u.useEffect)(() => {
    if (typeof window > `u` || settings.autoGreetings === !1 || !e.length) return;
    let occ = autoOccasionToday();
    if (!occ) return;
    let d = new Date(),
      flag = `basmat-laith-greet-${occ}-${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    if (window.localStorage.getItem(flag)) return;
    (window.localStorage.setItem(flag, `1`),
      setGreetingsOpen(!0),
      r.info(
        occ === `friday`
          ? `جمعة مباركة — التهنئة الآلية جاهزة لإرسالها لجميع العملاء`
          : `مناسبة اليوم — التهنئة الآلية جاهزة لإرسالها لجميع العملاء`,
      ));
  }, [e.length, settings.autoGreetings]));
  // تنسيق الجوال/التابلت: نفس تنسيق الكمبيوتر مع تصغير متناسب بدون أي قص أو كسر
  ((0, u.useEffect)(() => {
    if (typeof window > `u`) return;
    let BASE = 1440,
      apply = () => {
        let w = window.innerWidth || BASE,
          z = Math.min(1, w / BASE);
        (document.documentElement.style.setProperty(`--app-base-width`, `${BASE}px`),
          document.documentElement.style.setProperty(`--app-zoom`, String(z)));
      };
    apply();
    (window.addEventListener(`resize`, apply), window.addEventListener(`orientationchange`, apply));
    return () => {
      (window.removeEventListener(`resize`, apply),
        window.removeEventListener(`orientationchange`, apply));
    };
  }, []));
  return (0, H.jsxs)(`div`, {

    dir: `rtl`,
    className: `min-h-screen bg-app font-arabic`,
    children: [
      (0, H.jsx)(Toaster, { position: `top-center`, richColors: !0 }),
      (0, H.jsxs)(`div`, {
        className: `app-screen`,
        children: [
          (0, H.jsx)(`header`, {
            className: `no-print flex items-center justify-between border-b border-ink/30 bg-sheet px-4 py-2`,
            children: (0, H.jsx)(`h1`, {
              className: `text-[15px] font-bold text-ink`,
              children: `بصمة ليث للخياطة الرجالية - نظام إدارة الطلبات والفواتير`,
            }),
          }),
          (0, H.jsxs)(`nav`, {
            className: `no-print flex flex-wrap items-center gap-1 border-b-2 border-ink/40 bg-sheet px-3 py-1`,
            children: [
              (0, H.jsx)($, { icon: ee, label: `طلب جديد`, onClick: A }),
              
              (0, H.jsx)($, {
                icon: g,
                label: `نسخة الخياط`,
                onClick: () => d(`tailor`),
              }),
              (0, H.jsx)($, {
                icon: g,
                label: `نسخة العميل`,
                onClick: () => d(`client`),
              }),
              (0, H.jsx)($, {
                icon: re,
                label: `بيانات الخياط`,
                onClick: () => setTailorOpen(!0),
              }),
              (0, H.jsx)($, {
                icon: ie,
                label: `متابعة الخياطين`,
                onClick: () => setTailorBoardOpen(!0),
              }),
              (0, H.jsx)($, {
                icon: ne,
                label: `تهنئة المناسبات`,
                onClick: () => setGreetingsOpen(!0),
              }),
              (0, H.jsx)($, {
                icon: h,
                label: `كرت العميل`,
                onClick: () => setCardOrder(n),
              }),
              (0, H.jsx)($, {
                icon: h,
                label: `الطلبات`,
                onClick: () => o(!0),
              }),
              (0, H.jsx)($, {
                icon: ie,
                label: `العملاء`,
                onClick: () => o(!0),
              }),
              (0, H.jsx)($, {
                icon: re,
                label: `الإعدادات`,
                onClick: () => setSettingsOpen(!0),
              }),
              (0, H.jsx)($, {
                icon: te,
                label: `خروج`,
                danger: !0,
                onClick: () => r.info(`تسجيل الخروج`),
              }),
            ],
          }),
          (0, H.jsxs)(`main`, {
            className: `flex items-start justify-center gap-3 p-3 pb-16`,
            children: [P(!1), (0, H.jsx)(J, { order: n, patch: b })],
          }),
          (0, H.jsx)(`div`, {
            className: `no-print fixed inset-x-0 bottom-6 z-40 flex flex-wrap items-center justify-center gap-2 border-t-2 border-ink/40 bg-sheet px-3 py-2`,
            children: ae.map((e) =>
              (0, H.jsx)(
                `button`,
                {
                  type: `button`,
                  onClick: () => y(e),
                  className: `rounded-md border border-ink/60 px-3 py-1 text-[13px] font-bold text-ink hover:bg-ink/10`,
                  children: e,
                },
                e,
              ),
            ),
          }),
          (0, H.jsxs)(`footer`, {
            className: `no-print fixed inset-x-0 bottom-0 z-40 flex items-center justify-between border-t border-ink/30 bg-sheet px-4 py-1 text-[12px] text-ink`,
            children: [
              (0, H.jsx)(`span`, { children: `الإصدار ١.٠.٠` }),
              (0, H.jsxs)(`span`, { children: [`الحالة : `, n.status] }),
              (0, H.jsx)(`span`, {
                children: `جميع الحقوق محفوظة © بصمة ليث للخياطة الرجالية`,
              }),
            ],
          }),
        ],
      }),
      l &&
        (0, H.jsx)(`div`, {
          className: `print-only`,
          children: (0, H.jsxs)(`div`, {
            className: `print-template ${l === `client` ? `print-client` : `print-tailor`} flex items-start justify-center gap-3`,
            children: [
              // نسخة العميل: بدون خانة «الخياط المسؤول»
              l === `client` && P(!0, !0),
              (0, H.jsx)(J, {
                order: n,
                patch: b,
                readOnly: !0,
                // نسخة الخياط فقط: قائمة «الخياط المسؤول» أعلى اليمين تحت قائمة المقاسات
                tailorSlot: l === `tailor` ? tailorPickerBox() : null,
              }),
            ],
          }),
        }),

      s &&
        (0, H.jsx)(`div`, {
          className: `no-print fixed inset-0 z-50 overflow-auto bg-black/50 p-4`,
          children: (0, H.jsxs)(`div`, {
            className: `mx-auto w-fit rounded-xl bg-sheet p-4`,
            children: [
              (0, H.jsxs)(`div`, {
                className: `mb-2 flex justify-between gap-3`,
                children: [
                  (0, H.jsx)(`span`, {
                    className: `text-[15px] font-bold text-ink`,
                    children: `معاينة الفاتورة`,
                  }),
                  (0, H.jsx)(`button`, {
                    onClick: () => c(!1),
                    className: `text-ink`,
                    children: (0, H.jsx)(v, { className: `h-5 w-5` }),
                  }),
                ],
              }),
              (0, H.jsx)(`div`, {
                className: `origin-top scale-[0.72]`,
                children: (0, H.jsxs)(`div`, {
                  className: `flex items-start gap-3`,
                  children: [P(!0), (0, H.jsx)(J, { order: n, patch: b, readOnly: !0 })],
                }),
              }),
            ],
          }),
        }),
      a &&
        (0, H.jsx)(`div`, {
          className: `no-print fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black/50 p-6`,
          children: (0, H.jsxs)(`div`, {
            className: `w-full max-w-4xl rounded-xl bg-sheet p-4`,
            children: [
              (0, H.jsxs)(`div`, {
                className: `mb-3 flex items-center justify-between`,
                children: [
                  (0, H.jsx)(`h2`, {
                    className: `text-[16px] font-bold text-ink`,
                    children: `الطلبات المحفوظة`,
                  }),
                  (0, H.jsx)(`button`, {
                    onClick: () => o(!1),
                    className: `text-ink`,
                    children: (0, H.jsx)(v, { className: `h-5 w-5` }),
                  }),
                ],
              }),
              (0, H.jsxs)(`div`, {
                className: `mb-3 flex items-center gap-2`,
                children: [
                  (0, H.jsx)(`input`, {
                    value: query,
                    onChange: (e) => setQuery(e.target.value),
                    placeholder: `بحث بالاسم أو الجوال أو رقم الطلب`,
                    className: `h-9 flex-1 rounded-md border border-ink/60 bg-transparent px-2 text-[13px] text-ink outline-none`,
                  }),
                  (0, H.jsx)(`button`, {
                    type: `button`,
                    onClick: () =>
                      setPrintReport({
                        title: `الطلبات المحفوظة`,
                        data: {
                          stats: [
                            { label: `عدد الطلبات`, value: x(filteredOrders.length) },
                            {
                              label: `إجمالي القيمة`,
                              value: w(filteredOrders.reduce((a, o) => a + C(o.orderValue), 0)),
                            },
                          ],
                          columns: [
                            `التسلسل`,
                            `الاسم`,
                            `الجوال`,
                            `العدد`,
                            `قيمة الطلب`,
                            `الباقي`,
                            `تاريخ القبض`,
                            `موعد التسليم`,
                            `الحالة`,
                          ],
                          rows: filteredOrders.map((o) => [
                            x(o.serial),
                            o.name || `-`,
                            x(o.mobile),
                            x(String(C(o.count) || 0)),
                            w(C(o.orderValue)),
                            isDelivered(o)
                              ? DELIVERED
                              : w(C(o.orderValue) - C(o.cash) - C(o.card)),
                            O(o.receiptDate),
                            isDelivered(o) ? DELIVERED : O(o.deliveryDate),
                            o.status,
                          ]),
                        },
                      }),
                    className: `rounded-md border border-ink/60 px-3 py-1 text-[13px] font-bold text-ink hover:bg-ink/10`,
                    children: `طباعة`,
                  }),
                ],
              }),
              (0, H.jsxs)(`table`, {
                className: `w-full border-collapse text-center text-[13px] text-ink`,
                children: [
                  (0, H.jsx)(`thead`, {
                    children: (0, H.jsxs)(`tr`, {
                      className: `bg-ink/10`,
                      children: [
                        (0, H.jsx)(`th`, {
                          className: `border border-ink/40 p-2`,
                          children: `التسلسل`,
                        }),
                        (0, H.jsx)(`th`, {
                          className: `border border-ink/40 p-2`,
                          children: `الاسم`,
                        }),
                        (0, H.jsx)(`th`, {
                          className: `border border-ink/40 p-2`,
                          children: `الجوال`,
                        }),
                        (0, H.jsx)(`th`, {
                          className: `border border-ink/40 p-2`,
                          children: `العدد`,
                        }),
                        (0, H.jsx)(`th`, {
                          className: `border border-ink/40 p-2`,
                          children: `قيمة الطلب`,
                        }),
                        (0, H.jsx)(`th`, {
                          className: `border border-ink/40 p-2`,
                          children: `الباقي`,
                        }),
                        (0, H.jsx)(`th`, {
                          className: `border border-ink/40 p-2`,
                          children: `تاريخ القبض`,
                        }),
                        (0, H.jsx)(`th`, {
                          className: `border border-ink/40 p-2`,
                          children: `موعد التسليم`,
                        }),
                        (0, H.jsx)(`th`, {
                          className: `border border-ink/40 p-2`,
                          children: `الحالة`,
                        }),
                        (0, H.jsx)(`th`, {
                          className: `border border-ink/40 p-2`,
                          children: `فتح`,
                        }),
                        (0, H.jsx)(`th`, {
                          className: `border border-ink/40 p-2`,
                          children: `كرت العميل`,
                        }),
                      ],
                    }),
                  }),
                  (0, H.jsxs)(`tbody`, {
                    children: [
                      filteredOrders.map((e) =>
                        (0, H.jsxs)(
                          `tr`,
                          {
                            children: [
                              (0, H.jsx)(`td`, {
                                className: `border border-ink/40 p-2 font-bold`,
                                children: x(e.serial),
                              }),
                              (0, H.jsx)(`td`, {
                                className: `border border-ink/40 p-2`,
                                children: e.name,
                              }),
                              (0, H.jsx)(`td`, {
                                className: `border border-ink/40 p-2`,
                                children: x(e.mobile),
                              }),
                              (0, H.jsx)(`td`, {
                                className: `border border-ink/40 p-2 font-bold`,
                                children: x(String(C(e.count) || 0)),
                              }),
                              (0, H.jsx)(`td`, {
                                className: `border border-ink/40 p-2`,
                                children: w(C(e.orderValue)),
                              }),
                              (0, H.jsx)(`td`, {
                                className: `border border-ink/40 p-2`,
                                children: isDelivered(e)
                                  ? DELIVERED
                                  : w(C(e.orderValue) - C(e.cash) - C(e.card)),
                              }),
                              (0, H.jsx)(`td`, {
                                className: `border border-ink/40 p-2`,
                                children: O(e.receiptDate),
                              }),
                              (0, H.jsx)(`td`, {
                                className: `border border-ink/40 p-2`,
                                children: isDelivered(e) ? DELIVERED : O(e.deliveryDate),

                              }),
                              (0, H.jsx)(`td`, {
                                className: `border border-ink/40 p-2`,
                                children: e.status,
                              }),
                              (0, H.jsx)(`td`, {
                                className: `border border-ink/40 p-2`,
                                children: (0, H.jsx)(`button`, {
                                  onClick: () => {
                                    (i(e), o(!1));
                                  },
                                  className: `rounded-md bg-ink px-3 py-1 text-sheet`,
                                  children: `فتح`,
                                }),
                              }),
                              (0, H.jsxs)(`td`, {
                                className: `border border-ink/40 p-2`,
                                children: [
                                  (0, H.jsx)(`button`, {
                                    onClick: () => setCardOrder(e),
                                    className: `ml-1 rounded-md border border-ink/60 px-2 py-1 text-ink`,
                                    children: `طباعة`,
                                  }),
                                  (0, H.jsx)(`button`, {
                                    onClick: () => sendCard(e),
                                    className: `rounded-md border border-ink/60 px-2 py-1 text-ink`,
                                    children: `واتساب`,
                                  }),
                                ],
                              }),
                            ],
                          },
                          e.serial,
                        ),
                      ),
                      filteredOrders.length === 0 &&
                        (0, H.jsx)(`tr`, {
                          children: (0, H.jsx)(`td`, {
                            colSpan: 11,
                            className: `border border-ink/40 p-4`,
                            children: `لا توجد طلبات محفوظة`,
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      settingsOpen &&
        (0, H.jsx)(`div`, {
          className: `no-print fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black/50 p-6`,
          children: (0, H.jsxs)(`div`, {
            dir: `rtl`,
            className: `w-full max-w-xl rounded-xl border border-ink/60 bg-sheet p-4 text-ink`,
            children: [
              (0, H.jsxs)(`div`, {
                className: `mb-3 flex items-center justify-between`,
                children: [
                  (0, H.jsx)(`h2`, {
                    className: `text-[16px] font-bold text-ink`,
                    children: `الإعدادات`,
                  }),
                  (0, H.jsx)(`button`, {
                    type: `button`,
                    "aria-label": `إغلاق`,
                    onClick: () => setSettingsOpen(!1),
                    className: `text-ink`,
                    children: (0, H.jsx)(v, { className: `h-5 w-5` }),
                  }),
                ],
              }),
              (0, H.jsx)(`div`, {
                className: `grid grid-cols-2 gap-3`,
                children: [
                  { key: `shopName`, label: `اسم المحل` },
                  { key: `cr`, label: `السجل التجاري` },
                  { key: `vat`, label: `الرقم الضريبي` },
                  { key: `phone`, label: `الجوال` },
                  { key: `taxRate`, label: `نسبة الضريبة ٪` },
                ].map((e) =>
                  (0, H.jsxs)(
                    `label`,
                    {
                      className: `block text-[13px] font-bold text-ink`,
                      children: [
                        e.label,
                        (0, H.jsx)(`input`, {
                          value: settings[e.key] ?? ``,
                          onChange: (t) =>
                            setSettings((n) => ({
                              ...n,
                              [e.key]: e.key === `shopName` ? t.target.value : x(t.target.value),
                            })),
                          className: `mt-1 h-9 w-full rounded-md border border-ink/60 bg-transparent px-2 text-[14px] text-ink outline-none focus:ring-1 focus:ring-ink/40`,
                        }),
                      ],
                    },
                    e.key,
                  ),
                ),
              }),
              (0, H.jsxs)(`div`, {
                className: `mt-3 rounded-lg border border-ink/50 p-3`,
                children: [
                  (0, H.jsx)(`div`, {
                    className: `mb-2 text-[13px] font-bold text-ink`,
                    children: `خيارات الطباعة الافتراضية`,
                  }),
                  (0, H.jsx)(`select`, {
                    value: settings.printCopy,
                    "aria-label": `النسخة الافتراضية`,
                    onChange: (e) => setSettings((t) => ({ ...t, printCopy: e.target.value })),
                    className: `h-9 w-full rounded-md border border-ink/60 bg-transparent px-2 text-[14px] text-ink outline-none`,
                    children: [`نسخة الخياط`, `نسخة العميل`].map((e) =>
                      (0, H.jsx)(`option`, { value: e, children: e }, e),
                    ),
                  }),
                  (0, H.jsxs)(`label`, {
                    className: `mt-2 flex items-center gap-2 text-[13px] font-bold text-ink`,
                    children: [
                      (0, H.jsx)(`input`, {
                        type: `checkbox`,
                        checked: !!settings.autoPrint,
                        onChange: (e) =>
                          setSettings((t) => ({
                            ...t,
                            autoPrint: e.target.checked,
                          })),
                        className: `h-[14px] w-[14px] accent-[var(--ink)]`,
                      }),
                      `طباعة تلقائية بعد الحفظ`,
                    ],
                  }),
                ],
              }),
              (0, H.jsxs)(`div`, {
                className: `mt-4 flex justify-end gap-2`,
                children: [
                  (0, H.jsx)(`button`, {
                    type: `button`,
                    onClick: () => setSettingsOpen(!1),
                    className: `rounded-md border border-ink/60 px-4 py-2 text-[13px] font-bold text-ink hover:bg-ink/10`,
                    children: `إلغاء`,
                  }),
                  (0, H.jsx)(`button`, {
                    type: `button`,
                    onClick: () => {
                      (saveSettings(settings),
                        pushCloudSettings(settings).catch((err) => {
                          queueCloudWrite({ kind: `settings`, settings });
                          console.error(`cloud settings save failed`, err);
                        }),
                        setSettingsOpen(!1),
                        r.success(`تم حفظ الإعدادات`));
                    },
                    className: `rounded-md bg-ink px-4 py-2 text-[13px] font-bold text-sheet`,
                    children: `حفظ الإعدادات`,
                  }),
                ],
              }),
            ],
          }),
        }),
      tailorOpen &&
        (0, H.jsx)(`div`, {
          className: `no-print fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black/50 p-6`,
          children: (0, H.jsxs)(`div`, {
            dir: `rtl`,
            className: `w-full max-w-md rounded-xl border border-ink/60 bg-sheet p-4 text-ink`,
            children: [
              (0, H.jsxs)(`div`, {
                className: `mb-3 flex items-center justify-between`,
                children: [
                  (0, H.jsx)(`h2`, {
                    className: `text-[16px] font-bold text-ink`,
                    children: `بيانات الخياط`,
                  }),
                  (0, H.jsx)(`button`, {
                    type: `button`,
                    "aria-label": `إغلاق`,
                    onClick: () => setTailorOpen(!1),
                    className: `text-ink`,
                    children: (0, H.jsx)(v, { className: `h-5 w-5` }),
                  }),
                ],
              }),
              (0, H.jsxs)(`div`, {
                className: `space-y-3`,
                children: [
                  ...getTailors(settings).map((tl, idx) =>
                    (0, H.jsxs)(
                      `div`,
                      {
                        className: `rounded-lg border border-ink/50 p-3`,
                        children: [
                          (0, H.jsxs)(`div`, {
                            className: `mb-2 flex items-center justify-between text-[13px] font-bold text-ink`,
                            children: [
                              `الخياط ${x(String(idx + 1))}`,
                              (0, H.jsx)(`button`, {
                                type: `button`,
                                onClick: () =>
                                  setSettings((s) => ({
                                    ...s,
                                    tailors: getTailors(s).filter((t2) => t2.id !== tl.id),
                                  })),
                                className: `rounded-md border border-ink/60 px-2 py-[2px] text-[12px] text-ink hover:bg-ink/10`,
                                children: `حذف`,
                              }),
                            ],
                          }),
                          ...[
                            { key: `name`, label: `الاسم` },
                            { key: `phone`, label: `رقم الجوال` },
                            { key: `whatsapp`, label: `رقم الواتساب` },
                          ].map((fld) =>
                            (0, H.jsxs)(
                              `label`,
                              {
                                className: `block text-[13px] font-bold text-ink`,
                                children: [
                                  fld.label,
                                  (0, H.jsx)(`input`, {
                                    value: tl[fld.key] ?? ``,
                                    onChange: (ev) => {
                                      let val = ev.target.value;
                                      setSettings((s) => ({
                                        ...s,
                                        tailors: getTailors(s).map((t2) =>
                                          t2.id === tl.id ? { ...t2, [fld.key]: val } : t2,
                                        ),
                                      }));
                                    },
                                    className: `mb-2 mt-1 h-9 w-full rounded-md border border-ink/60 bg-transparent px-2 text-[14px] text-ink outline-none focus:ring-1 focus:ring-ink/40`,
                                  }),
                                ],
                              },
                              fld.key,
                            ),
                          ),
                        ],
                      },
                      tl.id,
                    ),
                  ),
                  (0, H.jsx)(`button`, {
                    type: `button`,
                    onClick: () =>
                      setSettings((s) => ({
                        ...s,
                        tailors: [
                          ...getTailors(s),
                          {
                            id: `t${Date.now()}`,
                            name: ``,
                            phone: ``,
                            whatsapp: ``,
                          },
                        ],
                      })),
                    className: `w-full rounded-md border border-ink/60 px-3 py-2 text-[13px] font-bold text-ink hover:bg-ink/10`,
                    children: `+ إضافة خياط`,
                  }),
                ],
              }),
              (0, H.jsxs)(`div`, {
                className: `mt-4 flex justify-end gap-2`,
                children: [
                  (0, H.jsx)(`button`, {
                    type: `button`,
                    onClick: () => (setSettings(loadSettings()), setTailorOpen(!1)),
                    className: `rounded-md border border-ink/60 px-4 py-2 text-[13px] font-bold text-ink hover:bg-ink/10`,
                    children: `إلغاء`,
                  }),
                  (0, H.jsx)(`button`, {
                    type: `button`,
                    onClick: () => {
                      (saveSettings(settings),
                        pushCloudSettings(settings).catch((err) => {
                          queueCloudWrite({ kind: `settings`, settings });
                          console.error(`cloud settings save failed`, err);
                        }),
                        setTailorOpen(!1),
                        r.success(`تم حفظ بيانات الخياط`));
                    },
                    className: `rounded-md bg-ink px-4 py-2 text-[13px] font-bold text-sheet`,
                    children: `حفظ`,
                  }),
                ],
              }),
            ],
          }),
        }),
      tailorBoardOpen &&
        (0, H.jsx)(`div`, {
          className: `no-print fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black/50 p-6`,
          children: (0, H.jsxs)(`div`, {
            dir: `rtl`,
            className: `w-full max-w-3xl rounded-xl border border-ink/60 bg-sheet p-4 text-ink`,
            children: [
              (0, H.jsxs)(`div`, {
                className: `mb-3 flex items-center justify-between`,
                children: [
                  (0, H.jsx)(`h2`, {
                    className: `text-[16px] font-bold text-ink`,
                    children: `لوحة متابعة الخياطين`,
                  }),
                  (0, H.jsx)(`button`, {
                    type: `button`,
                    "aria-label": `إغلاق`,
                    onClick: () => setTailorBoardOpen(!1),
                    className: `text-ink`,
                    children: (0, H.jsx)(v, { className: `h-5 w-5` }),
                  }),
                ],
              }),
              (0, H.jsxs)(`div`, {
                className: `mb-3 flex items-center gap-2`,
                children: [
                  (0, H.jsx)(`input`, {
                    value: tailorBoardQuery,
                    "aria-label": `بحث برقم الطلب أو التسلسل`,
                    placeholder: `بحث برقم الطلب / التسلسل`,
                    onChange: (ev) => setTailorBoardQuery(ev.target.value),
                    className: `h-9 flex-1 rounded-md border border-ink/60 bg-transparent px-2 text-[13px] text-ink outline-none focus:ring-1 focus:ring-ink/40`,
                  }),
                  tailorBoardQuery &&
                    (0, H.jsx)(`button`, {
                      type: `button`,
                      onClick: () => setTailorBoardQuery(``),
                      className: `h-9 rounded-md border border-ink/60 px-3 text-[13px] font-bold text-ink hover:bg-ink/10`,
                      children: `مسح`,
                    }),
                ],
              }),
              (0, H.jsxs)(`table`, {
                className: `w-full border-collapse text-center text-[13px] text-ink`,
                children: [
                  (0, H.jsx)(`thead`, {
                    children: (0, H.jsx)(`tr`, {
                      className: `bg-ink/10`,
                      children: [
                        `الخياط`,
                        `رقم الجوال`,
                        `التسلسل`,
                        `إجمالي الثياب الموكلة`,
                        `الثياب الجاهزة`,
                        `غير الجاهزة (قيد التنفيذ)`,
                      ].map((h2) =>
                        (0, H.jsx)(
                          `th`,
                          { className: `border border-ink/40 p-2`, children: h2 },
                          h2,
                        ),
                      ),
                    }),
                  }),
                  (0, H.jsxs)(`tbody`, {
                    children: [
                      ...boardRows.map((st) =>
                        (0, H.jsxs)(
                          `tr`,
                          {
                            children: [
                              (0, H.jsx)(`td`, {
                                className: `border border-ink/40 p-2 font-bold`,
                                children: st.name,
                              }),
                              (0, H.jsx)(`td`, {
                                className: `border border-ink/40 p-2`,
                                children: x(st.phone || `—`),
                              }),
                              (0, H.jsx)(`td`, {
                                className: `border border-ink/40 p-1`,
                                children: st.serials.length
                                  ? (0, H.jsx)(`table`, {
                                      className: `mx-auto border-collapse`,
                                      children: (0, H.jsx)(`tbody`, {
                                        children: (0, H.jsx)(`tr`, {
                                          children: st.serials.map((sn) =>
                                            (0, H.jsx)(
                                              `td`,
                                              {
                                                className: `border border-ink/40 px-2 py-[2px] text-[12px] ${
                                                  boardSerialQuery && String(sn) === boardSerialQuery
                                                    ? `bg-ink/20 font-bold text-destructive`
                                                    : ``
                                                }`,
                                                children: x(String(sn)),
                                              },
                                              sn,
                                            ),
                                          ),
                                        }),
                                      }),
                                    })
                                  : `—`,
                              }),
                              (0, H.jsx)(`td`, {
                                className: `border border-ink/40 p-2`,
                                children: x(String(st.total)),
                              }),
                              (0, H.jsx)(`td`, {
                                className: `border border-ink/40 p-2`,
                                children: (0, H.jsxs)(`div`, {
                                  className: `flex flex-col items-center gap-1`,
                                  children: [
                                    (0, H.jsx)(`span`, {
                                      className: `font-bold`,
                                      children: x(String(st.ready)),
                                    }),
                                    (st.readyBreak ?? []).length
                                      ? (0, H.jsx)(`div`, {
                                          className: `flex flex-wrap justify-center gap-1`,
                                          children: (st.readyBreak ?? []).map((b) =>
                                            (0, H.jsx)(
                                              `span`,
                                              {
                                                className: `rounded-md border border-ink/40 px-1 text-[11px] ${
                                                  boardSerialQuery &&
                                                  String(b.serial) === boardSerialQuery
                                                    ? `bg-ink/20 font-bold text-destructive`
                                                    : ``
                                                }`,
                                                children: `${x(String(b.serial))} : ${x(String(b.count))}`,
                                              },
                                              b.serial,
                                            ),
                                          ),
                                        })
                                      : null,
                                  ],
                                }),
                              }),
                              (0, H.jsx)(`td`, {
                                className: `border border-ink/40 p-2`,
                                children: (0, H.jsxs)(`div`, {
                                  className: `flex flex-col items-center gap-1`,
                                  children: [
                                    (0, H.jsx)(`span`, {
                                      className: `font-bold`,
                                      children: x(String(st.pending)),
                                    }),
                                    (st.pendingBreak ?? []).length
                                      ? (0, H.jsx)(`div`, {
                                          className: `flex flex-wrap justify-center gap-1`,
                                          children: (st.pendingBreak ?? []).map((b) =>
                                            (0, H.jsx)(
                                              `span`,
                                              {
                                                className: `rounded-md border border-ink/40 px-1 text-[11px] ${
                                                  boardSerialQuery &&
                                                  String(b.serial) === boardSerialQuery
                                                    ? `bg-ink/20 font-bold text-destructive`
                                                    : ``
                                                }`,
                                                children: `${x(String(b.serial))} : ${x(String(b.count))}`,
                                              },
                                              b.serial,
                                            ),
                                          ),
                                        })
                                      : null,
                                  ],
                                }),
                              }),
                            ],
                          },
                          st.id,
                        ),
                      ),
                      boardRows.length === 0 &&
                        (0, H.jsx)(`tr`, {
                          children: (0, H.jsx)(`td`, {
                            colSpan: 6,
                            className: `border border-ink/40 p-4`,
                            children: tailorBoardQuery
                              ? `لا يوجد خياط مرتبط برقم الطلب ${x(tailorBoardQuery)}`
                              : `لا يوجد خياطون — أضفهم من «بيانات الخياط»`,
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      f &&
        (0, H.jsx)(`div`, {
          className: `no-print fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black/50 p-6`,
          children: (0, H.jsxs)(`div`, {
            className: `w-full max-w-3xl rounded-xl bg-sheet p-4`,
            children: [
              (0, H.jsxs)(`div`, {
                className: `mb-3 flex items-center justify-between`,
                children: [
                  (0, H.jsx)(`h2`, {
                    className: `text-[16px] font-bold text-ink`,
                    children: f,
                  }),
                  (0, H.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, H.jsx)(`button`, {
                        type: `button`,
                        onClick: () => setPrintReport({ title: f, data: de(f, N) }),
                        className: `rounded-md border border-ink/60 px-3 py-1 text-[13px] font-bold text-ink hover:bg-ink/10`,
                        children: `طباعة`,
                      }),
                      (0, H.jsx)(`button`, {
                        onClick: () => y(null),
                        className: `text-ink`,
                        children: (0, H.jsx)(v, { className: `h-5 w-5` }),
                      }),
                    ],
                  }),
                ],
              }),
              (() => {
                let e = de(f, N);
                return (0, H.jsxs)(H.Fragment, {
                  children: [
                    (0, H.jsx)(`div`, {
                      className: `mb-3 grid grid-cols-3 gap-2`,
                      children: e.stats.map((e) =>
                        (0, H.jsxs)(
                          `div`,
                          {
                            className: `rounded-lg border border-ink/50 p-2 text-center text-ink`,
                            children: [
                              (0, H.jsx)(`div`, {
                                className: `text-[12px] font-bold`,
                                children: e.label,
                              }),
                              (0, H.jsx)(`div`, {
                                className: `text-[16px] font-bold`,
                                children: e.value,
                              }),
                            ],
                          },
                          e.label,
                        ),
                      ),
                    }),
                    (0, H.jsxs)(`table`, {
                      className: `w-full border-collapse text-center text-[13px] text-ink`,
                      children: [
                        e.groups
                          ? (0, H.jsxs)(`thead`, {
                              children: [
                                (0, H.jsx)(`tr`, {
                                  className: `bg-ink/10`,
                                  children: e.groups.map((e) =>
                                    (0, H.jsx)(
                                      `th`,
                                      {
                                        colSpan: e.span,
                                        rowSpan: e.rowSpan,
                                        className: `border border-ink/40 p-2 font-bold`,
                                        children: e.label,
                                      },
                                      e.label,
                                    ),
                                  ),
                                }),
                                (0, H.jsx)(`tr`, {
                                  className: `bg-ink/10`,
                                  children: e.subColumns.map((e) =>
                                    (0, H.jsx)(
                                      `th`,
                                      {
                                        className: `border border-ink/40 p-2`,
                                        children: e,
                                      },
                                      e,
                                    ),
                                  ),
                                }),
                              ],
                            })
                          : (0, H.jsx)(`thead`, {
                              children: (0, H.jsx)(`tr`, {
                                className: `bg-ink/10`,
                                children: e.columns.map((e) =>
                                  (0, H.jsx)(
                                    `th`,
                                    {
                                      className: `border border-ink/40 p-2`,
                                      children: e,
                                    },
                                    e,
                                  ),
                                ),
                              }),
                            }),
                        (0, H.jsxs)(`tbody`, {
                          children: [
                            e.rows.map((e, t) =>
                              (0, H.jsx)(
                                `tr`,
                                {
                                  children: e.map((e, t) =>
                                    (0, H.jsx)(
                                      `td`,
                                      {
                                        className: `border border-ink/40 p-2`,
                                        children: e,
                                      },
                                      t,
                                    ),
                                  ),
                                },
                                t,
                              ),
                            ),
                            e.rows.length === 0 &&
                              (0, H.jsx)(`tr`, {
                                children: (0, H.jsx)(`td`, {
                                  colSpan: e.columns.length,
                                  className: `border border-ink/40 p-4`,
                                  children: `لا توجد بيانات لهذا التقرير`,
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                });
              })(),
            ],
          }),
        }),
      greetingsOpen &&
        (0, H.jsx)(`div`, {
          className: `no-print fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black/50 p-6`,
          children: (0, H.jsxs)(`div`, {
            dir: `rtl`,
            className: `w-full max-w-md rounded-xl border border-ink/60 bg-sheet p-4 text-ink`,
            children: [
              (0, H.jsxs)(`div`, {
                className: `mb-3 flex items-center justify-between`,
                children: [
                  (0, H.jsx)(`h2`, {
                    className: `text-[16px] font-bold text-ink`,
                    children: `تهنئة المناسبات`,
                  }),
                  (0, H.jsx)(`button`, {
                    type: `button`,
                    "aria-label": `إغلاق`,
                    onClick: () => setGreetingsOpen(!1),
                    className: `text-ink`,
                    children: (0, H.jsx)(v, { className: `h-5 w-5` }),
                  }),
                ],
              }),
              (0, H.jsx)(`p`, {
                className: `mb-3 text-[13px] text-ink/80`,
                children: `اختر المناسبة وسيتم تجهيز رسائل واتساب جاهزة لجميع عملاء المحل تلقائياً.`,
              }),
              (0, H.jsx)(`div`, {
                className: `space-y-2`,
                children: OCCASIONS.map((o) =>
                  (0, H.jsx)(
                    `button`,
                    {
                      type: `button`,
                      onClick: () => sendGreetings(o.key),
                      className: `flex w-full items-center justify-center rounded-md py-2 text-[14px] font-bold ${
                        autoOccasionToday() === o.key
                          ? `bg-destructive text-sheet`
                          : `bg-ink text-sheet`
                      }`,
                      children:
                        autoOccasionToday() === o.key ? `${o.label} — مناسبة اليوم` : o.label,
                    },
                    o.key,
                  ),
                ),
              }),
              (0, H.jsxs)(`div`, {
                className: `mt-4 space-y-2 border-t border-ink/30 pt-3 text-[13px] text-ink`,
                children: [
                  (0, H.jsxs)(`label`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, H.jsx)(`input`, {
                        type: `checkbox`,
                        checked: settings.autoGreetings !== !1,
                        onChange: () =>
                          setSettings((s) => {
                            let next = { ...s, autoGreetings: s.autoGreetings === !1 };
                            return (
                              saveSettings(next),
                              pushCloudSettings(next).catch(() => queueCloudWrite({ kind: `settings`, settings: next })),
                              next
                            );
                          }),
                      }),
                      `تهنئة آلية ذكية عند كل مناسبة (الجمعة والأعياد واليوم الوطني)`,
                    ],
                  }),
                  (0, H.jsxs)(`label`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, H.jsx)(`input`, {
                        type: `checkbox`,
                        checked: settings.autoOrderWhatsApp !== !1,
                        onChange: () =>
                          setSettings((s) => {
                            let next = { ...s, autoOrderWhatsApp: s.autoOrderWhatsApp === !1 };
                            return (
                              saveSettings(next),
                              pushCloudSettings(next).catch(() => queueCloudWrite({ kind: `settings`, settings: next })),
                              next
                            );
                          }),
                      }),
                      `إرسال تفاصيل الطلب آلياً على واتساب العميل بعد الحفظ`,
                    ],
                  }),
                ],
              }),

            ],
          }),
        }),
      cardOrder &&
        (0, H.jsx)(`div`, {
          className: `print-only`,
          children: (0, H.jsxs)(`div`, {
            className: `print-template flex flex-col items-center gap-2`,
            children: [
              (0, H.jsx)(`div`, { className: `print-title`, children: `كرت العميل` }),
              (0, H.jsx)(ClientCard, { order: cardOrder, settings: settings }),
            ],
          }),
        }),
      printReport &&
        (0, H.jsxs)(`div`, {
          className: `print-only print-report-sheet`,
          children: [
            (0, H.jsx)(`div`, { className: `print-title`, children: printReport.title }),
            (0, H.jsx)(`div`, {
              className: `print-report-stats`,
              children: (printReport.data.stats ?? []).map((e) =>
                (0, H.jsxs)(
                  `div`,
                  {
                    className: `print-report-stat`,
                    children: [
                      (0, H.jsx)(`div`, { className: `font-bold`, children: e.label }),
                      (0, H.jsx)(`div`, { className: `font-bold`, children: e.value }),
                    ],
                  },
                  e.label,
                ),
              ),
            }),
            (0, H.jsxs)(`table`, {
              dir: `rtl`,
              className: `print-report-table border-collapse text-center text-[13px] text-ink`,
              children: [
                (0, H.jsx)(`thead`, {
                  children: (0, H.jsx)(`tr`, {
                    children: (printReport.data.subColumns ?? printReport.data.columns).map((e) =>
                      (0, H.jsx)(`th`, { className: `border border-ink/60 p-2`, children: e }, e),
                    ),
                  }),
                }),
                (0, H.jsx)(`tbody`, {
                  children: printReport.data.rows.map((e, t) =>
                    (0, H.jsx)(
                      `tr`,
                      {
                        children: e.map((e, t) =>
                          (0, H.jsx)(`td`, { className: `border border-ink/60 p-2`, children: e }, t),
                        ),
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
export { fe as TailorApp };
