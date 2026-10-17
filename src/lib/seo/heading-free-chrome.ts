/**
 * Pages whose approved heading outline contains only the page's own content
 * headings (SEO settings, Ammara Arif, 16 Oct 2026): the sitewide footer and
 * "Keep exploring" block render their titles as plain text there instead of
 * H2/H3 tags.
 */
const HEADING_FREE_CHROME_PATHS = new Set(["/compare/wegovy-vs-mounjaro"]);

export function hasHeadingFreeChrome(pathname: string | null): boolean {
  if (!pathname) return false;
  const clean = pathname.split("?")[0].replace(/\/$/, "") || "/";
  return HEADING_FREE_CHROME_PATHS.has(clean);
}
