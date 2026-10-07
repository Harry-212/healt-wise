import { finding } from "../lib/finding.mjs";
import { isIndexablePage } from "../lib/indexing-status.mjs";

/** Indexing vs sitemap: noindex-but-in-sitemap, indexable-but-redirecting/canonicalised, or indexable-but-missing. */
export function checkIndexing(record, { severities }) {
  if (record.httpStatus !== 200) return [];
  const findings = [];
  const inSitemap = record.sitemapInclusion === "Yes";
  const isIndexable = isIndexablePage(record);

  if (record.indexNoindex === "noindex" && inSitemap) {
    findings.push(
      finding({
        severity: severities.NOINDEX_IN_SITEMAP,
        url: record.url,
        rule: "NOINDEX_IN_SITEMAP",
        problem: "The page is noindex but still listed in the sitemap.",
        expected: "Noindex pages are removed from the sitemap.",
        evidence: `robots: ${record.robotsMetaRaw ?? ""} ${record.xRobotsTagRaw ?? ""}`,
      }),
    );
  }

  if (isIndexable && inSitemap && record.canonicalSelfReferencing === false) {
    findings.push(
      finding({
        severity: severities.SITEMAP_REDIRECT_OR_CANONICALISED,
        url: record.url,
        rule: "SITEMAP_REDIRECT_OR_CANONICALISED",
        problem: "A sitemap URL is canonicalised to a different page.",
        expected: "Sitemap URLs are self-canonical, indexable pages.",
        evidence: `canonical: ${record.canonicalUrl}`,
      }),
    );
  }

  if (isIndexable && !inSitemap) {
    findings.push(
      finding({
        severity: severities.INDEXABLE_NOT_IN_SITEMAP,
        url: record.url,
        rule: "INDEXABLE_NOT_IN_SITEMAP",
        problem: "An indexable page is missing from the sitemap.",
        expected: "Indexable pages are listed in the sitemap, unless intentionally excluded.",
        evidence: "sitemapInclusion: No",
      }),
    );
  }

  return findings;
}
