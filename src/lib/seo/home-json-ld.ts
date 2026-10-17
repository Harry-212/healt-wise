import { HELPFUL_GUIDES_HUB_PATH } from "@/lib/helpful-guide-slugs";
import {
  HOME_COMPARE_CTA_LABEL,
  HOME_COMPARE_HUB_HREF,
} from "@/lib/routes/home-compare-hub";
import { siteOrigin } from "@/lib/seo/site-origin";
import { SITE_LOGO_SRC } from "@/lib/site-assets";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import {
  SITE_BUSINESS_ADDRESS,
  SITE_BUSINESS_EMAIL,
  SITE_BUSINESS_PHONE_TEL,
  SITE_SOCIAL_PROFILES_ORG_SAFE,
} from "@/lib/site-contact";

const SCHEMA_LANGUAGE = "en-GB";

const SITE_DESCRIPTION =
  "Independent UK price comparison for weight loss injections. We compare Mounjaro and Wegovy prices at 60+ GPhC registered pharmacies. We do not sell, prescribe or send medicines.";

const HOME_PAGE_NAME = "Weight Loss Injections Price Comparison UK";
const HOME_PAGE_DESCRIPTION =
  "Compare weight loss injection prices at 60+ GPhC registered UK pharmacies. See Mounjaro from £119 and Wegovy from £73, at every dose.";

const SITE_KNOWS_ABOUT = [
  "Weight loss injections price comparison UK",
  "Weight loss injection prices",
  "Cost of weight loss injections in the UK",
  "Mounjaro prices UK",
  "Wegovy prices UK",
  "Mounjaro vs Wegovy",
  "Tirzepatide",
  "Semaglutide",
  "GLP-1 price comparison UK",
  "Weight loss jab prices UK",
  "Weight loss treatment prices UK",
  "Online pharmacy weight loss injections",
  "GPhC pharmacy registration checks",
  "Mounjaro click calculator",
  "Wegovy click calculator",
  "BMI calculator",
];

function homeSchemaLogoUrl(base: string): string {
  return `${base}${SITE_LOGO_SRC}`;
}

function homeSchemaLogoImage(base: string): Record<string, unknown> {
  const logoUrl = homeSchemaLogoUrl(base);

  return {
    "@type": "ImageObject",
    "@id": `${base}/#/schema/logo/image/`,
    url: logoUrl,
    contentUrl: logoUrl,
    caption: SITE_BRAND_NAME,
    inLanguage: SCHEMA_LANGUAGE,
  };
}

function homeSchemaOrganization(base: string): Record<string, unknown> {
  const logoId = `${base}/#/schema/logo/image/`;

  return {
    "@type": "Organization",
    "@id": `${base}/#organization`,
    name: SITE_BRAND_NAME,
    url: `${base}/`,
    email: SITE_BUSINESS_EMAIL,
    foundingDate: "2026",
    description: SITE_DESCRIPTION,
    logo: { "@id": logoId },
    image: { "@id": logoId },
    founder: {
      "@id": `${base}/editorial-team/alistair-greenwood#person`,
    },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_BUSINESS_ADDRESS.street,
      addressLocality: SITE_BUSINESS_ADDRESS.city,
      postalCode: SITE_BUSINESS_ADDRESS.postcode,
      addressCountry: "GB",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: SITE_BUSINESS_EMAIL,
        telephone: SITE_BUSINESS_PHONE_TEL,
        areaServed: "GB",
        availableLanguage: ["English"],
      },
    ],
    sameAs: [...SITE_SOCIAL_PROFILES_ORG_SAFE],
    knowsAbout: SITE_KNOWS_ABOUT,
    publishingPrinciples: `${base}/editorial-policy`,
  };
}

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

function homeSchemaWebsite(base: string): Record<string, unknown> {
  return {
    "@type": "WebSite",
    "@id": `${base}/#website`,
    url: `${base}/`,
    name: SITE_BRAND_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: SCHEMA_LANGUAGE,
    publisher: { "@id": `${base}/#organization` },
  };
}

function homeSchemaPriceSnapshotDataset(base: string): Record<string, unknown> {
  return {
    "@type": "Dataset",
    "@id": `${base}/#price-snapshot`,
    name: "UK weight loss injection prices by dose: Mounjaro and Wegovy",
    description:
      "Lowest, typical and highest price of a 4 week Mounjaro and Wegovy pen at 60+ GPhC registered UK pharmacies, from the Healthwise360 price check on 20 September 2026.",
    url: `${base}/`,
    creator: { "@id": `${base}/#organization` },
    publisher: { "@id": `${base}/#organization` },
    dateModified: "2026-09-20",
    temporalCoverage: "2026-09-20",
    spatialCoverage: { "@type": "Place", name: "United Kingdom" },
    isAccessibleForFree: true,
    inLanguage: SCHEMA_LANGUAGE,
    license: `${base}/terms-of-service`,
    measurementTechnique:
      "Listed prices checked on each pharmacy website in the first week of every month",
    variableMeasured: [
      { "@type": "PropertyValue", name: "Lowest price", unitText: "GBP" },
      { "@type": "PropertyValue", name: "Typical price", unitText: "GBP" },
      { "@type": "PropertyValue", name: "Highest price", unitText: "GBP" },
    ],
    about: [{ "@id": `${base}/#mounjaro` }, { "@id": `${base}/#wegovy` }],
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

function homeSchemaMounjaroProduct(
  base: string,
  options?: HomePageJsonLdOptions,
): Record<string, unknown> {
  const lowPrice = options?.mounjaroStarterLow ?? "119.69";
  const highPrice = options?.mounjaroTopHigh ?? "359.95";

  return {
    "@type": ["Drug", "Product"],
    "@id": `${base}/#mounjaro`,
    name: "Mounjaro",
    alternateName: "Mounjaro KwikPen",
    nonProprietaryName: "tirzepatide",
    activeIngredient: "tirzepatide",
    brand: { "@type": "Brand", name: "Mounjaro" },
    manufacturer: { "@type": "Organization", name: "Eli Lilly and Company" },
    prescriptionStatus: "https://schema.org/PrescriptionOnly",
    administrationRoute: "Subcutaneous injection, once a week",
    dosageForm: "Pre-filled injection pen",
    description:
      "Weekly weight loss injection. Doses from 2.5 mg (starter) to 15 mg. Prices compared at 60+ GPhC registered UK pharmacies.",
    url: `${base}/mounjaro-price-comparison`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "GBP",
      lowPrice,
      highPrice,
      url: `${base}/mounjaro-price-comparison`,
    },
  };
}

function homeSchemaWegovyProduct(
  base: string,
  options?: HomePageJsonLdOptions,
): Record<string, unknown> {
  const lowPrice = options?.wegovyStarterLow ?? "72.89";
  const highPrice = options?.wegovyTopHigh ?? "290.00";

  return {
    "@type": ["Drug", "Product"],
    "@id": `${base}/#wegovy`,
    name: "Wegovy",
    alternateName: "Wegovy FlexTouch",
    nonProprietaryName: "semaglutide",
    activeIngredient: "semaglutide",
    brand: { "@type": "Brand", name: "Wegovy" },
    manufacturer: { "@type": "Organization", name: "Novo Nordisk" },
    prescriptionStatus: "https://schema.org/PrescriptionOnly",
    administrationRoute: "Subcutaneous injection, once a week",
    dosageForm: "Pre-filled injection pen",
    description:
      "Weekly weight loss injection. Doses from 0.25 mg (starter) to 2.4 mg. Prices compared at 60+ GPhC registered UK pharmacies.",
    url: `${base}/wegovy-price-comparison`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "GBP",
      lowPrice,
      highPrice,
      url: `${base}/wegovy-price-comparison`,
    },
  };
}

export function homePageJsonLdGraph(
  options?: HomePageJsonLdOptions,
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
      { "@id": `${base}/#mounjaro` },
      { "@id": `${base}/#wegovy` },
    ],
    mainEntity: { "@id": `${base}/#price-snapshot` },
    breadcrumb: { "@id": `${base}/#breadcrumb` },
    dateModified: "2026-10-14",
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
      homeSchemaWebsite(base),
      homeSchemaOrganization(base),
      homeSchemaLogoImage(base),
      homeSchemaPerson(base),
      webpage,
      breadcrumb,
      homeSchemaPriceSnapshotDataset(base),
      homeSchemaMounjaroProduct(base, options),
      homeSchemaWegovyProduct(base, options),
    ],
  };
}
