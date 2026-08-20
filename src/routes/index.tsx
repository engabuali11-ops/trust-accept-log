import { createFileRoute } from "@tanstack/react-router";
// @ts-expect-error - ported plain JS application module
import { TailorApp } from "./-tailor-app.jsx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "بصمة ليث للخياطة الرجالية - نظام إدارة الطلبات والفواتير" },
      {
        name: "description",
        content:
          "نظام إدارة طلبات الخياطة الرجالية: مقاسات، موديلات، فواتير وتقارير مبيعات يومية وشهرية.",
      },
      {
        property: "og:title",
        content: "بصمة ليث للخياطة الرجالية - نظام إدارة الطلبات",
      },
      {
        property: "og:description",
        content: "إدارة الطلبات والمقاسات والفواتير والتقارير لمحل الخياطة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TailorApp,
});
