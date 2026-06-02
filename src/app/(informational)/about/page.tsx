import type { Metadata } from "next";
import AboutScrollyClient from "./AboutScrollyClient";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "How Health Wise helps UK patients compare GLP-1 treatments with independent, safety-first editorial and transparent methodology.",
  alternates: {
    canonical: `${siteOrigin()}/about`,
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
