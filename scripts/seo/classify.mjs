#!/usr/bin/env node
/**
 * seo:classify — Task 7 (2026-10-12): extends the existing full-site
 * inventory with a page-type/topic/cluster classification layer, so the
 * site can be managed by page type and topic cluster at scale.
 *
 * Deliberately read-only and additive: it re-reads the inventory JSON
 * already produced by `seo:export`/`seo:export:full-site` (no new fetches,
 * no re-crawl) and never writes back to the site. It does not touch
 * titles, content, canonicals, indexing or schema.
 *
 * Classification rules (per the Task 7 brief):
 * - Never invent missing information — blank/"Unknown" when evidence is
 *   unavailable.
 * - Mark uncertain classifications as "REVIEW" rather than guessing.
 * - A URL that matches no page-type pattern falls back to "Other" and is
 *   counted separately in the summary so it can be reviewed by a human.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { stringify } from "csv-stringify/sync";
import { loadConfig, matchesPattern, reportsDir } from "./lib/config.mjs";

/**
 * Page types whose every page is, by construction, about one specific
 * medicine (e.g. a "/what-is-mounjaro" or "/tools/wegovy-click-calculator").
 * Only these are checked for a missing topic — pharmacy profiles, helpful
 * guides, blog articles and location pages legitimately cover general
 * weight-loss content as often as medicine-specific content, so forcing a
 * medicine match there would flag the majority of normal pages as REVIEW.
 */
const MEDICINE_TOPIC_PAGE_TYPES = new Set([
  "Medicine price comparison",
  "Treatment comparison",
  "Medicine information",
  "Calculator or tool",
]);

function parseArgs(argv) {
  const target = argv.find((a) => a.startsWith("--target="))?.split("=")[1] || "live";
  const inputArg = argv.find((a) => a.startsWith("--input="))?.split("=")[1];
  return { target, inputArg };
}

function defaultInputPath(target) {
  const suffix = target === "live" ? "full-site" : "full-site";
  return path.join(reportsDir, `seo-inventory-${suffix}.json`);
}

/** Same single-pass "first pattern wins" matching as pageTypeFor(), against the V2 taxonomy. */
function pageTypeV2For(pathname, rules) {
  const rule = rules.find((r) => matchesPattern(pathname, r.pattern));
  return rule ? rule.type : "Other";
}

function pathnameOf(url) {
  try {
    return new URL(url).pathname.replace(/\/$/, "") || "/";
  } catch {
    return url;
  }
}

function derivePrimaryTopic(record, pageType) {
  const haystack = `${record.url || ""} ${record.title || ""}`.toLowerCase();
  const hasMounjaro = haystack.includes("mounjaro");
  const hasWegovy = haystack.includes("wegovy") || haystack.includes("semaglutide");

  if (hasMounjaro && hasWegovy) return "Mounjaro & Wegovy";
  if (hasMounjaro) return "Mounjaro";
  if (hasWegovy) return "Wegovy";

  if (MEDICINE_TOPIC_PAGE_TYPES.has(pageType)) {
    // This page type normally names a medicine, but this one doesn't —
    // flag it rather than guessing which medicine (or "none") it covers.
    return "REVIEW";
  }

  const GENERAL_TOPIC_PAGE_TYPES = new Set([
    "Pharmacy profile",
    "Helpful guide",
    "Blog article",
    "Location page",
  ]);
  if (GENERAL_TOPIC_PAGE_TYPES.has(pageType)) return "General";

  return "Not applicable";
}

function deriveIndexReason(record, pageType) {
  if (record.indexNoindex == null) {
    return `Unknown — no HTML fetched (HTTP ${record.httpStatus ?? "?"})`;
  }
  if (record.indexNoindex === "index") {
    return "Default index,follow (no robots directive found)";
  }
  // noindex
  const pathname = pathnameOf(record.url);
  if (pageType === "Location page" && !/weight-loss-treatment-london$/.test(pathname) && !pathname.endsWith("-london")) {
    return "Intentional noindex — non-London city page (Jeff's standing policy, only London is indexable)";
  }
  if (pathname === "/blog/topic/guides") {
    return "Intentional noindex,follow — overlaps ~70% with /blog (Task 39/4 decision, approved by Jeff)";
  }
  return "REVIEW — noindex with no recorded reason";
}

function deriveMedicalReviewStatus(record) {
  if (!record.reviewerName) return "No reviewer declared";
  if (record.reviewerApproved === true) return "Reviewed — approved reviewer on record";
  if (record.reviewerApproved === false) return "REVIEW — reviewer not on the approved list";
  return "Unknown";
}

function deriveAffiliateDisclosurePresent(record) {
  const text = (record.bodyText || record.mainContentText || "").toLowerCase();
  if (!text) return "Unknown";
  return /\b(affiliate|commission|sponsor(ed)?|paid partner)\b/.test(text) ? "Yes" : "No";
}

function deriveLastContentUpdate(record) {
  return record.lastUpdatedVisible || record.dateModifiedSchema || record.datePublishedSchema || "";
}

function derivePriceCheckDate(record) {
  return record.priceCheckDates?.newest || "";
}

function deriveHumanDecisionRequired({ pageType, primaryTopic, indexReason, medicalReviewStatus, record }) {
  const reasons = [];
  if (pageType === "Other") reasons.push("page type did not match any known pattern");
  if (primaryTopic === "REVIEW") reasons.push("expected a medicine topic but found none");
  if (indexReason.startsWith("REVIEW")) reasons.push("noindex with no recorded reason");
  if (medicalReviewStatus.startsWith("REVIEW")) reasons.push("reviewer not on the approved list");
  if (record.httpStatus != null && record.httpStatus !== 200) reasons.push(`non-200 status (${record.httpStatus})`);
  if (record.canonicalSelfReferencing === false) reasons.push("canonical points elsewhere");
  return reasons;
}

function classifyRecord(record, config) {
  const pageType = pageTypeV2For(pathnameOf(record.url), config.pageTypeTaxonomyV2);
  const primaryTopic = derivePrimaryTopic(record, pageType);
  const contentCluster = config.contentClusterByPageType[pageType] ?? "REVIEW";
  const indexReason = deriveIndexReason(record, pageType);
  const medicalReviewStatus = deriveMedicalReviewStatus(record);
  const affiliateDisclosurePresent = deriveAffiliateDisclosurePresent(record);
  const humanDecisionReasons = deriveHumanDecisionRequired({
    pageType,
    primaryTopic,
    indexReason,
    medicalReviewStatus,
    record,
  });

  return {
    url: record.url,
    page_type: pageType,
    primary_topic: primaryTopic,
    content_cluster: contentCluster,
    index_status: record.indexNoindex ?? "Unknown",
    index_reason: indexReason,
    title: record.title ?? "",
    meta_description: record.metaDescription ?? "",
    h1: (record.h1s || []).map((h) => h.lines.join(" / ")).join(" | "),
    canonical: record.canonicalUrl ?? "",
    schema_types: (record.schemaTypes || []).join(", "),
    visible_author: record.authorVisible ?? "",
    visible_reviewer: record.reviewerVisible ?? record.reviewerName ?? "",
    medical_review_status: medicalReviewStatus,
    price_check_date: derivePriceCheckDate(record),
    source_count: record.sourceLinkCount ?? "",
    affiliate_disclosure_present: affiliateDisclosurePresent,
    last_content_update: deriveLastContentUpdate(record),
    human_decision_required: humanDecisionReasons.length > 0 ? "Yes" : "No",
    human_decision_reasons: humanDecisionReasons.join("; "),
  };
}

function buildSummary(classified) {
  const byType = new Map();
  const byCluster = new Map();
  for (const row of classified) {
    byType.set(row.page_type, (byType.get(row.page_type) || 0) + 1);
    byCluster.set(row.content_cluster, (byCluster.get(row.content_cluster) || 0) + 1);
  }
  const sortDesc = (map) =>
    [...map.entries()].sort((a, b) => b[1] - a[1]);

  const unclassified = classified.filter((r) => r.page_type === "Other");
  const needsHumanDecision = classified.filter((r) => r.human_decision_required === "Yes");

  return { byType: sortDesc(byType), byCluster: sortDesc(byCluster), unclassified, needsHumanDecision };
}

function toMarkdownSummary({ total, byType, byCluster, unclassified, needsHumanDecision }, { target, generatedAt }) {
  const lines = [];
  lines.push(`# SEO page classification summary — Task 7`);
  lines.push("");
  lines.push(`Target: ${target}`);
  lines.push(`Generated: ${generatedAt}`);
  lines.push(`Pages classified: ${total}`);
  lines.push("");
  lines.push(`**Report-only** — no title, content, canonical, indexing or schema was changed.`);
  lines.push("");
  lines.push("## Pages per page type");
  lines.push("");
  for (const [type, count] of byType) lines.push(`- ${type}: ${count}`);
  lines.push("");
  lines.push("## Pages per content cluster");
  lines.push("");
  for (const [cluster, count] of byCluster) lines.push(`- ${cluster}: ${count}`);
  lines.push("");
  lines.push(`## Unclassified ("Other") — ${unclassified.length}`);
  lines.push("");
  if (unclassified.length === 0) {
    lines.push("None — every URL matched a known page-type pattern.");
  } else {
    for (const r of unclassified) lines.push(`- ${r.url}`);
  }
  lines.push("");
  lines.push(`## Flagged for human decision — ${needsHumanDecision.length}`);
  lines.push("");
  if (needsHumanDecision.length === 0) {
    lines.push("None.");
  } else {
    for (const r of needsHumanDecision) lines.push(`- ${r.url} — ${r.human_decision_reasons}`);
  }
  lines.push("");
  return lines.join("\n");
}

async function main() {
  const { target, inputArg } = parseArgs(process.argv.slice(2));
  const config = loadConfig();
  const inputPath = inputArg ? path.resolve(inputArg) : defaultInputPath(target);

  if (!existsSync(inputPath)) {
    console.error(
      `Input inventory not found: ${inputPath}\nRun "npm run seo:export:full-site -- --target=${target}" first, or pass --input=<path to seo-inventory-full-site.json>.`,
    );
    process.exitCode = 1;
    return;
  }

  const inventory = JSON.parse(readFileSync(inputPath, "utf8"));
  const records = inventory.records || inventory;
  console.log(`seo:classify — target=${target}, ${records.length} page(s) from ${path.relative(process.cwd(), inputPath)}`);

  const classified = records.map((r) => classifyRecord(r, config));
  const summary = buildSummary(classified);
  const generatedAt = new Date().toISOString();

  writeFileSync(
    path.join(reportsDir, "seo-page-classification.json"),
    JSON.stringify({ target, generatedAt, totalPages: classified.length, records: classified }, null, 2),
  );
  writeFileSync(
    path.join(reportsDir, "seo-page-classification.csv"),
    stringify(classified, { header: true }),
  );
  writeFileSync(
    path.join(reportsDir, "seo-page-classification-summary.md"),
    toMarkdownSummary({ total: classified.length, ...summary }, { target, generatedAt }),
  );

  console.log(`\nPages per page type:`);
  for (const [type, count] of summary.byType) console.log(`  ${type}: ${count}`);
  console.log(`\nPages per content cluster:`);
  for (const [cluster, count] of summary.byCluster) console.log(`  ${cluster}: ${count}`);
  console.log(`\nUnclassified ("Other"): ${summary.unclassified.length}`);
  console.log(`Flagged for human decision: ${summary.needsHumanDecision.length}`);
  console.log(
    `\nWrote reports/seo/seo-page-classification.json, .csv and seo-page-classification-summary.md`,
  );
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}

export {
  pageTypeV2For,
  derivePrimaryTopic,
  deriveIndexReason,
  deriveMedicalReviewStatus,
  deriveAffiliateDisclosurePresent,
  deriveLastContentUpdate,
  derivePriceCheckDate,
  deriveHumanDecisionRequired,
  classifyRecord,
  buildSummary,
};
