import { siteOrigin } from "@/lib/seo/site-origin";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import { SITE_LOGO_SRC, SITE_SHARE_IMAGE_SRC } from "@/lib/site-assets";
import {
  SITE_BUSINESS_ADDRESS,
  SITE_BUSINESS_EMAIL,
  SITE_BUSINESS_PHONE_TEL,
  SITE_SOCIAL_PROFILES,
} from "@/lib/site-contact";

/**
 * Site-wide business identity for AI assistants, Google Knowledge Graph and
 * Maps. `Organization` (not `LocalBusiness`) because Healthwise360 is an
 * online comparison publisher, not a walk-in premises — see `/about`.
 */
export function organizationJsonLd(): Record<string, unknown> {
  const base = siteOrigin();
  const { suite, street, city, postcode } = SITE_BUSINESS_ADDRESS;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${base}/#organization`,
    name: SITE_BRAND_NAME,
    url: base,
    logo: `${base}${SITE_LOGO_SRC}`,
    image: `${base}${SITE_SHARE_IMAGE_SRC}`,
    description:
      "Independent UK comparison for weight loss treatment prices, safety, and support.",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${suite}, ${street}`,
      addressLocality: city,
      postalCode: postcode,
      addressCountry: "GB",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: SITE_BUSINESS_PHONE_TEL,
        email: SITE_BUSINESS_EMAIL,
        areaServed: "GB",
        availableLanguage: ["English"],
      },
    ],
    sameAs: SITE_SOCIAL_PROFILES,
  };
}
