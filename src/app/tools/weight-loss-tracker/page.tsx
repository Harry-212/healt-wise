import type { Metadata } from "next";
import WeightTrackerClient from "@/components/tools/WeightTrackerClient";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";

export const metadata: Metadata = buildPageShareMetadata({
  canonicalPath: "/tools/weight-loss-tracker",
  title: "Weight loss tracker UK (2026) — private Wegovy & Mounjaro progress log",
  metaDescription:
    "Free private weight loss tracker for UK GLP-1 users. Log weight, medication, dose, and supplier over time. No account required — data stored securely in your browser. Built for Wegovy, Mounjaro, and Saxenda users.",
  openGraphTitle: "Weight loss tracker UK — track Wegovy & Mounjaro progress privately",
  openGraphDescription:
    "Private, no-login weight tracker for UK adults on GLP-1 treatments. Visualise progress, compare weeks, and find the best refill prices.",
  imagePath: "/window.svg",
  imageAlt: "Health Wise — Weight Loss Tracker UK",
});

export default function WeightLossTrackerPage() {
  return <WeightTrackerClient />;
}
