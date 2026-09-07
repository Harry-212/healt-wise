import { siteOrigin } from "@/lib/seo/site-origin";
import { SITE_LOGO_SRC } from "@/lib/site-assets";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import {
  SITE_BUSINESS_ADDRESS,
  SITE_BUSINESS_EMAIL,
  SITE_BUSINESS_PHONE_TEL,
} from "@/lib/site-contact";

const PAGE_PATH = "/best-weight-loss-treatment-comparison-london";

/**
 * LocalBusiness + Service structured data for the London comparison landing
 * page — targets "best weight loss treatment comparison London" with the
 * business's registered London address as the LocalBusiness location.
 */
export function londonComparisonJsonLdGraph(): Record<string, unknown> {
  const base = siteOrigin().replace(/\/$/, "");
  const pageUrl = `${base}${PAGE_PATH}`;
  const businessId = `${pageUrl}#localbusiness`;

  const localBusiness: Record<string, unknown> = {
    "@type": "LocalBusiness",
    "@id": businessId,
    name: SITE_BRAND_NAME,
    image: `${base}${SITE_LOGO_SRC}`,
    url: pageUrl,
    telephone: SITE_BUSINESS_PHONE_TEL,
    email: SITE_BUSINESS_EMAIL,
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE_BUSINESS_ADDRESS.suite}, ${SITE_BUSINESS_ADDRESS.street}`,
      addressLocality: SITE_BUSINESS_ADDRESS.city,
      postalCode: SITE_BUSINESS_ADDRESS.postcode,
      addressCountry: "GB",
    },
    areaServed: {
      "@type": "City",
      name: "London",
    },
  };

  const service: Record<string, unknown> = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    serviceType: "Weight loss treatment price comparison",
    name: "Best Weight Loss Treatment Comparison London",
    description:
      "Independent comparison of Mounjaro, Wegovy and Saxenda pricing and GPhC-registered providers serving London.",
    url: pageUrl,
    provider: { "@id": businessId },
    areaServed: {
      "@type": "City",
      name: "London",
    },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [localBusiness, service],
  };
}
