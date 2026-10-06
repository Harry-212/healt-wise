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
  "Compare Mounjaro and Wegovy prices across GPhC-registered UK pharmacies. Review doses, delivery fees, provider ratings and total treatment costs.";

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
        contactType: "customer support",
        email: SITE_BUSINESS_EMAIL,
        telephone: SITE_BUSINESS_PHONE_TEL,
        availableLanguage: ["English"],
      },
    ],
    sameAs: [...SITE_SOCIAL_PROFILES_ORG_SAFE],
    publishingPrinciples: `${base}/editorial-policy`,
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

export function homePageJsonLdGraph(): Record<string, unknown> {
  const base = siteOrigin().replace(/\/$/, "");
  const pageUrl = `${base}/`;

  const webpage: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": `${base}/#webpage`,
    url: pageUrl,
    name: "Compare Weight Loss Treatment Prices UK",
    description: SITE_DESCRIPTION,
    isPartOf: { "@id": `${base}/#website` },
    publisher: { "@id": `${base}/#organization` },
    mainEntity: { "@id": `${base}/#organization` },
    breadcrumb: { "@id": `${base}/#breadcrumb` },
    inLanguage: SCHEMA_LANGUAGE,
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
    "@graph": [webpage, breadcrumb],
  };
}
