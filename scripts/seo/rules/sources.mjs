import { finding } from "../lib/finding.mjs";
import { checkExternalLinks, classifyHttpResult, RECOMMENDED_ACTION } from "../lib/external-link-cache.mjs";

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
 *
 * Task 39/40: a failed check is classified (Broken/Blocked/Temporarily
 * unavailable) before becoming a finding — a bot-blocked request (Blocked)
 * must never be reported the same way as a confirmed-dead link (Broken). The
 * classification and recommended action are carried in the evidence string
 * so they survive into seo-findings*.csv; the fuller per-page breakdown
 * (anchor text, location found) lives in buildSourceLinkReport() below,
 * written to its own CSV by validate.mjs.
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
      const classification = classifyHttpResult(status);
      if (classification === "Working") continue;

      findings.push(
        finding({
          severity: severities.SOURCE_LINK_UNREACHABLE,
          url: record.url,
          rule: "SOURCE_LINK_UNREACHABLE",
          problem: `A source link did not load successfully (${classification}).`,
          expected: "Source links resolve. (Many sites block automated requests, so this needs a human look rather than an automatic fix.)",
          evidence: `${url} -> ${status} [${classification}]`,
        }),
      );
    }
  }
  return findings;
}

/**
 * Task 39: the full per-link breakdown the client asked for — one row per
 * (page, destination) pair, each carrying the destination's single HTTP
 * check (never re-requested per page; checkExternalLinks already caches by
 * URL) plus page-specific context (title, anchor text, where the link was
 * found). A `pagesUsingThisSource` column satisfies "deduplicate identical
 * destination URLs so we can see one source and every page using it"
 * without collapsing the page-specific columns the client also asked for.
 * Only non-Working links are included — this is a triage report, not a full
 * link inventory.
 */
export async function buildSourceLinkReport(allRecords, config) {
  const uniqueUrls = [
    ...new Set(allRecords.flatMap((r) => (r.sourceLinks || []).map((l) => l.url))),
  ];
  if (!uniqueUrls.length) return [];

  const statuses = await checkExternalLinks(uniqueUrls, config.externalLinks);

  const pagesPerDestination = new Map();
  for (const record of allRecords) {
    for (const link of record.sourceLinks || []) {
      if (!pagesPerDestination.has(link.url)) pagesPerDestination.set(link.url, new Set());
      pagesPerDestination.get(link.url).add(record.url);
    }
  }

  const rows = [];
  for (const record of allRecords) {
    for (const link of record.sourceLinks || []) {
      const status = statuses.get(link.url);
      const classification = classifyHttpResult(status);
      if (classification === "Working") continue;

      rows.push({
        pageUrl: record.url,
        pageTitle: record.title || null,
        anchorText: link.anchorText,
        destinationUrl: link.url,
        httpResult: status,
        classification,
        whereFound: link.location,
        recommendedAction: RECOMMENDED_ACTION[classification],
        pagesUsingThisSource: pagesPerDestination.get(link.url).size,
      });
    }
  }
  return rows;
}
