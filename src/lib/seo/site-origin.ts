/** Production origin — never use legacy domains here. */
const CANONICAL_ORIGIN = "https://www.healthwise360.co.uk";

/** Legacy / wrong deploy host (must not appear in metadata or JSON-LD). */
const LEGACY_HEALTH_WISE_HOST =
  /^(.+\.)?health-wise\.co\.uk$/i;

/** Canonical site origin for sitemaps, JSON-LD, and metadata. */
export function siteOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  if (typeof raw !== "string" || raw.trim() === "") {
    return CANONICAL_ORIGIN;
  }

  const trimmed = raw.trim().replace(/\/$/, "");
  try {
    const { hostname } = new URL(trimmed);
    if (LEGACY_HEALTH_WISE_HOST.test(hostname)) {
      return CANONICAL_ORIGIN;
    }
  } catch {
    return CANONICAL_ORIGIN;
  }

  return trimmed;
}
