import type { Metadata } from "next";
import { TipsPageClient } from "@/components/lifestyle/tips/TipsPageClient";
import { PILLAR_TIPS } from "@/lib/lifestyle/pillar-routes";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Weight loss tips | Lifestyle",
  description:
    "Science-backed weight loss tips: nutrition, appetite, sustainable habits, sleep, stress, and movement—plus how GLP-1 treatments can fit alongside lifestyle change.",
  alternates: {
    canonical: PILLAR_TIPS,
  },
};

export default function TipsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Lifestyle"
        sectionPath="/tips"
        pageName="Weight loss tips"
        pagePath="/tips"
      />
      <TipsPageClient />
    </>
  );
}
