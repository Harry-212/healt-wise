import { SITE_BRAND_NAME } from "@/lib/site-brand";

/** Registered business address shown in footer and on /contact. */
export const SITE_BUSINESS_ADDRESS = {
  suite: "Suite RA01",
  street: "195-197 Wood Street",
  city: "London",
  postcode: "E17 3NU",
} as const;

export const SITE_BUSINESS_PHONE_DISPLAY = "07469 549154";
export const SITE_BUSINESS_PHONE_TEL = "+447469549154";

export const SITE_BUSINESS_EMAIL = "contact@healthwise360.co.uk";

/** Single-line address for compact UI (e.g. schema). */
export function siteBusinessAddressLine(): string {
  const { suite, street, city, postcode } = SITE_BUSINESS_ADDRESS;
  return `${suite}, ${street}, ${city}, ${postcode}`;
}

/** Multi-line address block label. */
export function siteBusinessAddressBlock(): string {
  const { suite, street, city, postcode } = SITE_BUSINESS_ADDRESS;
  return `${SITE_BRAND_NAME}\n${suite}, ${street}\n${city}, ${postcode}`;
}

/** Full address string for map search and embeds. */
export function siteBusinessMapQuery(): string {
  return siteBusinessAddressLine();
}

export function siteBusinessGoogleMapsUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteBusinessMapQuery())}`;
}

export function siteBusinessGoogleMapsEmbedUrl(): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(siteBusinessMapQuery())}&output=embed`;
}
