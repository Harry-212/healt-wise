import type { Metadata } from "next";
import { TipsPageClient } from "@/components/lifestyle/tips/TipsPageClient";
import { PILLAR_TIPS } from "@/lib/lifestyle/pillar-routes";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const TIPS_TITLE = "Healthy Weight Loss Tips UK | Food, Exercise & Sleep";
const TIPS_DESCRIPTION =
  "Explore practical weight-loss tips covering protein, fibre, appetite, exercise, sleep and sustainable habits that support long-term progress.";

export const metadata: Metadata = {
  title: { absolute: TIPS_TITLE },
  description: TIPS_DESCRIPTION,
  alternates: {
    canonical: PILLAR_TIPS,
  },
  openGraph: {
    title: TIPS_TITLE,
    description: TIPS_DESCRIPTION,
  },
  twitter: {
    title: TIPS_TITLE,
    description: TIPS_DESCRIPTION,
  },
};

export default function TipsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Lifestyle"
        sectionPath="/tips"
        pageName="Healthy Weight Loss Tips UK"
        pagePath="/tips"
      />
      <TipsPageClient />
    </>
  );
}
