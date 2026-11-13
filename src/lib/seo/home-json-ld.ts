import { HELPFUL_GUIDES_HUB_PATH } from "@/lib/helpful-guide-slugs";
import { PRICE_CHECK_FREQUENCY_TEXT } from "@/lib/data/price-check";
import {
  HOME_COMPARE_CTA_LABEL,
  HOME_COMPARE_HUB_HREF,
} from "@/lib/routes/home-compare-hub";
import { siteOrigin } from "@/lib/seo/site-origin";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import { PRICE_CHECK_DATE_ISO, PRICE_CHECK_DATE_LONG, dateModifiedWithPriceCheck } from "@/lib/data/price-check";

const SCHEMA_LANGUAGE = "en-GB";

const HOME_PAGE_NAME = "Weight Loss Injections Price Comparison UK";
const HOME_PAGE_DESCRIPTION =
  "Compare weight loss injection prices at our GPhC registered UK pharmacy partners, at every dose.";

function homeSchemaPerson(base: string): Record<string, unknown> {
  return {
    "@type": "Person",
    "@id": `${base}/editorial-team/alistair-greenwood#person`,
    name: "Alistair Greenwood",
    jobTitle: "Founder",
    url: `${base}/editorial-team/alistair-greenwood`,
    description:
      "Founder of Healthwise360 and weight-management pricing researcher. Not a healthcare professional.",
    worksFor: { "@id": `${base}/#organization` },
  };
}

function homeSchemaPriceSnapshotDataset(base: string): Record<string, unknown> {
  return {
    "@type": "Dataset",
    "@id": `${base}/#price-snapshot`,
    name: "UK weight loss injection prices by dose: Mounjaro and Wegovy",
    description:
      `Lowest and highest listed price of a 4 week Mounjaro and Wegovy pen at our partner pharmacies, from the Healthwise360 price check on ${PRICE_CHECK_DATE_LONG}.`,
    url: `${base}/`,
    creator: { "@id": `${base}/#organization` },
    publisher: { "@id": `${base}/#organization` },
    dateModified: PRICE_CHECK_DATE_ISO,
    temporalCoverage: PRICE_CHECK_DATE_ISO,
    spatialCoverage: { "@type": "Place", name: "United Kingdom" },
    isAccessibleForFree: true,
    inLanguage: SCHEMA_LANGUAGE,
    license: `${base}/terms-of-service`,
    measurementTechnique:
      PRICE_CHECK_FREQUENCY_TEXT,
    variableMeasured: [
      { "@type": "PropertyValue", name: "Lowest price", unitText: "GBP" },
      { "@type": "PropertyValue", name: "Highest price", unitText: "GBP" },
    ],
    about: [
      { "@type": "Thing", name: "Mounjaro (tirzepatide)" },
      { "@type": "Thing", name: "Wegovy (semaglutide)" },
    ],
    keywords: [
      "weight loss injections prices",
      "weight loss injection price comparison uk",
      "Mounjaro price",
      "Wegovy price",
      "GLP-1 price comparison uk",
    ],
  };
}

export interface HomePageJsonLdOptions {
  mounjaroStarterLow?: string;
  mounjaroTopHigh?: string;
  wegovyStarterLow?: string;
  wegovyTopHigh?: string;
  lastUpdatedDateIso?: string;
}

export function homePageJsonLdGraph(
  _options?: HomePageJsonLdOptions,
): Record<string, unknown> {
  const base = siteOrigin().replace(/\/$/, "");
  const pageUrl = `${base}/`;

  const webpage: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": `${base}/#webpage`,
    url: pageUrl,
    name: `${HOME_PAGE_NAME} | ${SITE_BRAND_NAME}`,
    headline: HOME_PAGE_NAME,
    description: HOME_PAGE_DESCRIPTION,
    inLanguage: SCHEMA_LANGUAGE,
    isPartOf: { "@id": `${base}/#website` },
    publisher: { "@id": `${base}/#organization` },
    author: { "@id": `${base}/#organization` },
    about: [
      { "@type": "Thing", name: "Weight loss injections" },
      { "@type": "Thing", name: "Mounjaro (tirzepatide)" },
      { "@type": "Thing", name: "Wegovy (semaglutide)" },
    ],
    mainEntity: { "@id": `${base}/#price-snapshot` },
    breadcrumb: { "@id": `${base}/#breadcrumb` },
    dateModified: dateModifiedWithPriceCheck("2026-10-14"),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#hero-answer", "#cost-answer"],
    },
    mentions: [
      {
        "@type": "Organization",
        name: "General Pharmaceutical Council",
        url: "https://www.pharmacyregulation.org/",
      },
      {
        "@type": "Organization",
        name: "Medicines and Healthcare products Regulatory Agency",
        url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
      },
      { "@type": "Organization", name: "NHS", url: "https://www.nhs.uk/" },
    ],
  };

  const breadcrumb: Record<string, unknown> = {
    "@type": "BreadcrumbList",
    "@id": `${base}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: pageUrl,
      },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      // Organization and WebSite are defined once, in the site-wide graph
      // (`shared-json-ld.ts`); the nodes below reference them by @id.
      homeSchemaPerson(base),
      webpage,
      breadcrumb,
      homeSchemaPriceSnapshotDataset(base),
    ],
  };
}
