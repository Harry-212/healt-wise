import { siteOrigin } from "@/lib/seo/site-origin";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import { SITE_LOGO_SRC, SITE_SHARE_IMAGE_SRC } from "@/lib/site-assets";
import {
  SITE_BUSINESS_ADDRESS,
  SITE_BUSINESS_EMAIL,
  SITE_BUSINESS_PHONE_TEL,
  SITE_SOCIAL_PROFILES_ORG_SAFE,
} from "@/lib/site-contact";

/**
 * Site-wide shared graph containing Organization and WebSite entities.
 */
export function sharedGraphJsonLd(): Record<string, unknown> {
  const base = siteOrigin();
  const { street, city, postcode } = SITE_BUSINESS_ADDRESS;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: SITE_BRAND_NAME,
        url: `${base}/`,
        logo: {
          "@type": "ImageObject",
          "@id": `${base}/#logo`,
          url: `${base}${SITE_LOGO_SRC}`,
        },
        image: `${base}${SITE_SHARE_IMAGE_SRC}`,
        description: "Independent UK comparison for weight loss treatment prices, safety, and support.",
        foundingDate: "2026",
        publishingPrinciples: `${base}/editorial-policy`,
        founder: {
          "@id": `${base}/editorial-team/alistair-greenwood#person`,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: street,
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
        sameAs: SITE_SOCIAL_PROFILES_ORG_SAFE,
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: `${base}/`,
        name: SITE_BRAND_NAME,
        publisher: {
          "@id": `${base}/#organization`,
        },
        inLanguage: "en-GB",
      },
    ],
  };
}
