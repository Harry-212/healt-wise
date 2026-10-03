import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { siteOrigin } from "@/lib/seo/site-origin";
import { withDefaultShareImage } from "@/lib/seo/default-share-image";
import { ssotPageJsonLd } from "@/lib/seo/ssot-page-seo";
import { getContentLastUpdated, formatUkDate } from "@/lib/seo/content-last-updated";
import SsotScrollyClient from "./SsotScrollyClient";

const TITLE = "Healthwise360: Company Facts and Reference Information";
const DESCRIPTION =
  "Facts about Healthwise360, its founder Alistair Greenwood, provider comparisons, price checks, pharmacy inclusion, editorial team and official contact details.";

/** Fallback used only if git history can't be read (e.g. a shallow clone). */
const FALLBACK_LAST_UPDATED = "2026-10-03T00:00:00.000Z";

const CONTENT_FILES = [
  "src/lib/seo/ssot-content.ts",
  "src/lib/seo/ssot-page-seo.ts",
];

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
  const lastUpdatedIso = getContentLastUpdated(CONTENT_FILES, FALLBACK_LAST_UPDATED);

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ssotPageJsonLd(lastUpdatedIso)) }}
      />
      <SsotScrollyClient lastUpdatedDisplay={formatUkDate(lastUpdatedIso)} />
    </>
  );
}
