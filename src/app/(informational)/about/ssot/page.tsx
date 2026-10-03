import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { siteOrigin } from "@/lib/seo/site-origin";
import { withDefaultShareImage } from "@/lib/seo/default-share-image";
import { ssotPageJsonLd } from "@/lib/seo/ssot-page-seo";
import SsotScrollyClient from "./SsotScrollyClient";

const TITLE = "Healthwise360: Company Facts and Reference Information";
const DESCRIPTION =
  "Facts about Healthwise360, its founder Alistair Greenwood, provider comparisons, price checks, pharmacy inclusion, editorial team and official contact details.";

export const metadata: Metadata = withDefaultShareImage({
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteOrigin()}/about/ssot`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
});

export default function SsotPage() {
  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Information"
        sectionPath="/helpful-guides"
        pageName="Company Facts and Reference Information"
        pagePath="/about/ssot"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ssotPageJsonLd()) }}
      />
      <SsotScrollyClient />
    </>
  );
}
