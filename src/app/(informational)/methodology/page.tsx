import type { Metadata } from "next";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import MethodologyClient from "./MethodologyClient";

const TITLE = "How We Compare UK Weight Loss Providers | Methodology";
const DESCRIPTION =
  "Weight loss provider comparison methodology: pharmacy price checks, GPhC verification, total treatment cost, consultation fees, delivery charges, provider scoring and clinical support.";

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
