import type { Metadata } from "next";
import AboutScrollyClient from "./AboutScrollyClient";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "About Healthwise360 | Independent UK Price Comparison",
  },
  description:
    "Learn how Healthwise360 researches UK weight-loss treatment prices, checks pharmacy information and publishes independent comparison guides.",
  alternates: {
    canonical: `${siteOrigin()}/about`,
  },
  openGraph: {
    title: "About Healthwise360 | Independent UK Price Comparison",
    description:
      "Learn how Healthwise360 researches UK weight-loss treatment prices, checks pharmacy information and publishes independent comparison guides.",
  },
  twitter: {
    title: "About Healthwise360 | Independent UK Price Comparison",
    description:
      "Learn how Healthwise360 researches UK weight-loss treatment prices, checks pharmacy information and publishes independent comparison guides.",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Information"
        sectionPath="/helpful-guides"
        pageName="About Healthwise360"
        pagePath="/about"
      />
      <AboutScrollyClient />
    </>
  );
}
