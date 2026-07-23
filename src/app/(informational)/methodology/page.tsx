import type { Metadata } from "next";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import MethodologyClient from "./MethodologyClient";

export const metadata: Metadata = {
  title: {
    absolute: "How We Compare UK Weight Loss Pharmacies | Methodology",
  },
  description:
    "See how Healthwise360 checks pharmacy registration, treatment prices, delivery fees, consultation processes, support and provider information.",
  alternates: {
    canonical: `${siteOrigin()}/methodology`,
  },
  openGraph: {
    title: "How We Compare UK Weight Loss Pharmacies | Methodology",
    description:
      "See how Healthwise360 checks pharmacy registration, treatment prices, delivery fees, consultation processes, support and provider information.",
  },
  twitter: {
    title: "How We Compare UK Weight Loss Pharmacies | Methodology",
    description:
      "See how Healthwise360 checks pharmacy registration, treatment prices, delivery fees, consultation processes, support and provider information.",
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
