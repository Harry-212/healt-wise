import type { Metadata } from "next";
import { Suspense } from "react";
import WeightTrackerClient from "@/components/tools/WeightTrackerClient";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";

export const metadata: Metadata = buildPageShareMetadata({
  canonicalPath: "/tools/weight-loss-tracker",
  title: "Weight loss tracker UK (2026) — private Wegovy & Mounjaro progress log",
  metaDescription:
    "Free private weight loss tracker for UK GLP-1 users. Sign in to start logging weight, medication, dose, and supplier over time — built for Wegovy, Mounjaro, and Saxenda users.",
  openGraphTitle: "Weight loss tracker UK — track Wegovy & Mounjaro progress privately",
  openGraphDescription:
    "Private weight tracker for UK adults on GLP-1 treatments. Sign in to start — visualise progress and compare weeks.",
  imagePath: "/window.svg",
  imageAlt: "Health Wise — Weight Loss Tracker UK",
});

export default function WeightLossTrackerPage() {
  return (
    <Suspense fallback={<div className="min-h-[40vh] w-full animate-pulse rounded-2xl bg-slate-100" aria-hidden />}>
      <WeightTrackerClient />
    </Suspense>
  );
}
