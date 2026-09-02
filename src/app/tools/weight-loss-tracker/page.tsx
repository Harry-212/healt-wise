import type { Metadata } from "next";
import WeightTrackerClient from "@/components/tools/WeightTrackerClient";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = buildPageShareMetadata({
  canonicalPath: "/tools/weight-loss-tracker",
  title: "Weight Loss Tracker UK: Wegovy & Mounjaro",
  metaDescription:
    "Free private weight loss tracker for UK GLP-1 users. Log weight, medication, dose and supplier over time. Built for Wegovy, Mounjaro and Saxenda users.",
  openGraphTitle: "Weight loss tracker UK — track Wegovy & Mounjaro progress privately",
  openGraphDescription:
    "Private weight tracker for UK adults on GLP-1 treatments. Sign in to start — visualise progress and compare weeks.",
  imagePath: "/window.svg",
  imageAlt: "Health Wise — Weight Loss Tracker UK",
});

export default function WeightLossTrackerPage() {
  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Tools"
        sectionPath="/tools"
        pageName="Weight loss tracker UK"
        pagePath="/tools/weight-loss-tracker"
      />
      <WeightTrackerClient />
    </>
  );
}
