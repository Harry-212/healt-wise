import { finding } from "../lib/finding.mjs";
import { checkExternalLinks } from "../lib/external-link-cache.mjs";

const TYPES_REQUIRING_SOURCES = ["Blog article", "Helpful Guide", "Medicine overview"];

/** Sources: an article/guide/medicine page with no source links at all. */
export function checkSourceMissing(record, { severities }) {
  if (record.httpStatus !== 200) return [];
  if (!TYPES_REQUIRING_SOURCES.includes(record.pageType)) return [];
  if (record.sourceLinkCount > 0) return [];

  return [
    finding({
      severity: severities.SOURCE_MISSING,
      url: record.url,
      rule: "SOURCE_MISSING",
      problem: `A ${record.pageType} page has no links to an approved evidence source.`,
      expected: "Articles, guides and medicine pages cite at least one approved source.",
      evidence: "sourceLinkCount: 0",
    }),
  ];
}

/**
 * Sources: a source link that fails to load. Checked only in live mode (Section
 * 4.6) — cached for externalLinks.cacheDays and rate-limited, so this makes at
 * most one real HTTP request per unique source URL per cache window.
 */
export async function checkSourceReachability(allRecords, { severities, config, target }) {
  if (target !== "live") return [];

  const uniqueUrls = [...new Set(allRecords.flatMap((r) => r.sourceLinkTargets || []))];
  if (!uniqueUrls.length) return [];

  const statuses = await checkExternalLinks(uniqueUrls, config.externalLinks);

  const findings = [];
  for (const record of allRecords) {
    for (const url of record.sourceLinkTargets || []) {
      const status = statuses.get(url);
      const failed = status === "unreachable" || (typeof status === "number" && status >= 400);
      if (failed) {
        findings.push(
          finding({
            severity: severities.SOURCE_LINK_UNREACHABLE,
            url: record.url,
            rule: "SOURCE_LINK_UNREACHABLE",
            problem: "A source link did not load successfully.",
            expected: "Source links resolve. (Many sites block automated requests, so this needs a human look rather than an automatic fix.)",
            evidence: `${url} -> ${status}`,
          }),
        );
      }
    }
  }
  return findings;
}
