import { HELPFUL_GUIDES_HUB_PATH } from "@/lib/helpful-guide-slugs";
import { HOME_COMPARE_HUB_HREF } from "@/lib/routes/home-compare-hub";
import { siteOrigin } from "@/lib/seo/site-origin";
import { SITE_LOGO_SRC } from "@/lib/site-assets";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import {
  SITE_BUSINESS_ADDRESS,
  SITE_BUSINESS_EMAIL,
  SITE_BUSINESS_PHONE_TEL,
  SITE_SOCIAL_PROFILES,
} from "@/lib/site-contact";

const SCHEMA_LANGUAGE = "en-GB";

const SITE_DESCRIPTION =
  "Compare Mounjaro, Wegovy and Saxenda prices across GPhC-registered UK pharmacies. Review doses, delivery fees, provider ratings and total treatment costs.";

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
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE_BUSINESS_ADDRESS.suite}, ${SITE_BUSINESS_ADDRESS.street}`,
      addressLocality: SITE_BUSINESS_ADDRESS.city,
      postalCode: SITE_BUSINESS_ADDRESS.postcode,
      addressCountry: "GB",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE_BUSINESS_EMAIL,
        telephone: SITE_BUSINESS_PHONE_TEL,
        availableLanguage: ["English"],
      },
    ],
    sameAs: [...SITE_SOCIAL_PROFILES],
    termsOfService: `${base}/terms-of-service`,
    publishingPrinciples: `${base}/privacy-policy`,
  };
}

function homeSchemaWebsite(base: string): Record<string, unknown> {
  return {
    "@type": "WebSite",
    "@id": `${base}/#website`,
    url: `${base}/`,
    name: SITE_BRAND_NAME,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${base}/#organization` },
    inLanguage: SCHEMA_LANGUAGE,
  };
}

/** Homepage-only structured data: organization, website, webpage, and featured entry points. */
export function homePageJsonLdGraph(): Record<string, unknown> {
  const base = siteOrigin().replace(/\/$/, "");
  const pageUrl = `${base}/`;
  const logoId = `${base}/#/schema/logo/image/`;

  /** Crawlable site hubs Google may surface as sitelinks under brand queries. */
  const featured = [
    { name: "Compare weight loss treatments (UK)", path: HOME_COMPARE_HUB_HREF },
    { name: "Mounjaro price comparison UK", path: "/mounjaro-price-comparison" },
    { name: "Wegovy price comparison UK", path: "/wegovy-price-comparison" },
    { name: "BMI, BMR and calorie calculator", path: "/tools/bmi-calculator" },
    { name: "Weight loss injection news and guides", path: "/blog" },
    { name: "Helpful guides", path: HELPFUL_GUIDES_HUB_PATH },
    { name: "About Healthwise360", path: "/about" },
    { name: "How we compare UK pharmacies", path: "/methodology" },
  ] as const;

  const webpage: Record<string, unknown> = {
    "@type": ["WebPage", "CollectionPage"],
    "@id": `${base}/#webpage`,
    url: pageUrl,
    name: "Compare Weight Loss Treatment Prices UK | Healthwise360",
    description: SITE_DESCRIPTION,
    isPartOf: { "@id": `${base}/#website` },
    about: { "@id": `${base}/#organization` },
    primaryImageOfPage: { "@id": logoId },
    image: { "@id": logoId },
    thumbnailUrl: homeSchemaLogoUrl(base),
    breadcrumb: { "@id": `${base}/#breadcrumb` },
    mainEntity: { "@id": `${base}/#organization` },
    inLanguage: SCHEMA_LANGUAGE,
    potentialAction: [
      {
        "@type": "ReadAction",
        target: [pageUrl],
      },
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

  const itemList: Record<string, unknown> = {
    "@type": "ItemList",
    "@id": `${base}/#featured-pages`,
    name: "Featured pages",
    numberOfItems: featured.length,
    itemListElement: featured.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.name,
      item: `${base}${entry.path}`,
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      webpage,
      homeSchemaLogoImage(base),
      breadcrumb,
      homeSchemaWebsite(base),
      homeSchemaOrganization(base),
      itemList,
    ],
  };
}
