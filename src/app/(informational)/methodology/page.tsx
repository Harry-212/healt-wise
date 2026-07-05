import type { Metadata } from "next";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import MethodologyClient from "./MethodologyClient";

export const metadata: Metadata = {
  title: "Our Methodology | Healthwise360 Weight Loss Provider Standards",
  description:
    "How Healthwise360 compares UK weight loss treatment providers, parses pricing, checks pharmacy regulation, and evaluates safety standards.",
  alternates: {
    canonical: `${siteOrigin()}/methodology`,
  },
};

export default function Methodology() {
  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Information"
        sectionPath="/helpful-guides"
        pageName="Methodology"
        pagePath="/methodology"
      />
      <MethodologyClient />
    </>
  );
}
