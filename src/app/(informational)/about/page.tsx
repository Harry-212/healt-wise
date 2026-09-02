import type { Metadata } from "next";
import AboutScrollyClient from "./AboutScrollyClient";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const TITLE = "About Healthwise360 | UK Weight Loss Provider Comparison";
const DESCRIPTION =
  "About Healthwise360: an independent UK weight loss comparison site — provider pricing, pharmacy verification and editorial independence.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteOrigin()}/about`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
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
