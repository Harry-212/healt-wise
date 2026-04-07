/** Canonical site origin for sitemaps, JSON-LD, and metadata. */
export function siteOrigin(): string {
  const u = process.env.NEXT_PUBLIC_SITE_URL;
  if (typeof u === "string" && u.length > 0) return u.replace(/\/$/, "");
  return "https://www.health-wise.co.uk";
}
