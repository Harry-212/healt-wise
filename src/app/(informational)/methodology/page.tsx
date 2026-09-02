import type { Metadata } from "next";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import MethodologyClient from "./MethodologyClient";

const TITLE = "How We Compare UK Weight Loss Providers | Methodology";
const DESCRIPTION =
  "Our UK weight loss provider methodology: GPhC verification, total treatment cost, delivery charges and provider scoring.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteOrigin()}/methodology`,
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
