#!/usr/bin/env node
/**
 * Task 45 (CSV) / Task 41 (client message, 9 Oct 2026): compiles
 * seo-editorial-queue.csv — every finding that cannot be fixed safely by
 * code alone, needing a named human decision before a developer acts.
 *
 * Most rows are derived mechanically from the latest full-site findings +
 * inventory reports (SOURCE_MISSING, TITLE_LENGTH on indexable pages only,
 * SIMILAR_CONTENT pairs deduped to one row per pair). A handful of rows
 * cannot be derived from the automated rules at all and are recorded here
 * by hand, each with a comment explaining why:
 *   - the Switching Pharmacies guide: a closed/implemented item kept for
 *     the audit trail (Task 43), not a live finding any more.
 *   - the 7 huel.com affiliate "Buy now" 404s: these are outbound
 *     affiliate links, not citations to an approved source domain, so the
 *     source-link checker never sees them (see scripts/seo/lib/extract.mjs
 *     classifyLinks — only approvedSourceDomains links are tracked
 *     individually). Found during the 9 Oct DeadLinkChecker review.
 *
 * Reads the most recent `npm run seo:validate -- --scope=full-site` output
 * from reports/seo/ — run that first.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { stringify } from "csv-stringify/sync";
import { reportsDir } from "./lib/config.mjs";

const QUEUE_COLUMNS = [
  "taskNumber",
  "priority",
  "pageUrl",
  "pageTitle",
  "finding",
  "exactAffectedWordingOrAnchor",
  "currentSource",
  "suggestedSource",
  "decisionRequired",
  "approvalRequiredFrom",
  "developerActionAfterApproval",
  "status",
];

function loadJson(name) {
  const p = path.join(reportsDir, `${name}.json`);
  if (!existsSync(p)) {
    throw new Error(`${p} not found. Run "npm run seo:validate -- --scope=full-site" (and seo:export first) before seo:editorial-queue.`);
  }
  return JSON.parse(readFileSync(p, "utf8"));
}

function titleOf(inventory, url) {
  return inventory.records.find((r) => r.url === url)?.title || null;
}

function isIndexable(inventory, url) {
  return inventory.records.find((r) => r.url === url)?.indexNoindex === "index";
}

/** The specific claim-by-claim evidence Task 37's investigation already produced (CSV row 86), kept verbatim rather than re-derived. */
const SOURCE_MISSING_CLAIMS = {
  "https://www.healthwise360.co.uk/blog/weight-loss-treatment-london":
    "6 claims: NHS Digital Weight Management Programme; NICE NG246 reference; GPhC registration requirement; a specific GPhC registration number; prescription-advertising law; ASA/CAP guidance.",
  "https://www.healthwise360.co.uk/blog/best-weight-loss-treatment-in-reading":
    "8-10 unsourced clinical/statistical claims: obesity rates, NHS wait times, BMI eligibility thresholds, trial outcome percentages, bariatric surgery stats.",
  "https://www.healthwise360.co.uk/blog/best-weight-loss-treatment-in-oxford":
    "8-10 unsourced clinical/statistical claims: obesity rates, NHS wait times, BMI eligibility thresholds, trial outcome percentages, bariatric surgery stats.",
  "https://www.healthwise360.co.uk/blog/best-weight-loss-treatment-in-preston":
    "8-10 unsourced clinical/statistical claims (as above), plus named local businesses/addresses/postcodes (DDL Davies Pharmacy, NHL Pharmacy, Broadway Pharmacy, My Private Clinic, Diet UK) claiming medicine stock without the hedge used on Reading/Oxford — separate factual-accuracy risk.",
};

export function sourceMissingRows(findings, inventory) {
  return findings
    .filter((f) => f.rule === "SOURCE_MISSING")
    .map((f) => {
      const isLondon = f.url.includes("weight-loss-treatment-london");
      return {
        taskNumber: "CSV #37",
        priority: isLondon ? "High (indexable)" : "Medium (noindex — retain/remove pending)",
        pageUrl: f.url,
        pageTitle: titleOf(inventory, f.url),
        finding: "SOURCE_MISSING — page has no links to an approved evidence source",
        exactAffectedWordingOrAnchor: SOURCE_MISSING_CLAIMS[f.url] || "See full claim list in task32-end-of-day-report.md",
        currentSource: "None",
        suggestedSource: isLondon
          ? "NHS Digital / NICE NG246 / legislation.gov.uk (GPhC + ASA/CAP domains not on the approved-source allowlist — needs Jeff's decision)"
          : "NICE / NHS / gov.uk / doi.org / pubmed (one source per claim)",
        decisionRequired: isLondon
          ? "Approve source-to-claim match; decide whether to extend the approved-source allowlist to GPhC/ASA-CAP domains or cite primarily via legislation.gov.uk"
          : "Confirm retain/remove decision for this noindex page before any sourcing work starts",
        approvalRequiredFrom: isLondon ? "Harry (source match) + Jeff (allowlist decision)" : "Jeff (retain/remove)",
        developerActionAfterApproval: "Add approved source links to the specific claims listed, then rerun the audit",
        status: "Waiting for Jeff",
      };
    });
}

export function titleLengthRows(findings, inventory) {
  return findings
    .filter((f) => f.rule === "TITLE_LENGTH" && isIndexable(inventory, f.url))
    .map((f) => ({
      taskNumber: "CSV #39",
      priority: "Medium",
      pageUrl: f.url,
      pageTitle: titleOf(inventory, f.url),
      finding: `TITLE_LENGTH — ${f.evidence}`,
      exactAffectedWordingOrAnchor: titleOf(inventory, f.url),
      currentSource: titleOf(inventory, f.url),
      suggestedSource: "Pending — needs Search Console query/impressions export before proposing a ~50-65 char replacement",
      decisionRequired: "Export GSC queries/impressions for this URL, then approve exact replacement title (H1 unchanged unless evidence supports it)",
      approvalRequiredFrom: "Jeff (title) + Harry (if health wording is touched)",
      developerActionAfterApproval: "Update the <title> tag (and OG/Twitter/JSON-LD headline if they mirror it) to the approved text",
      status: "Not started",
    }));
}

export function similarityRows(findings, inventory) {
  const simFindings = findings.filter((f) => f.rule.startsWith("SIMILAR_CONTENT"));
  const seenPairs = new Set();
  const rows = [];
  for (const f of simFindings) {
    const other = /Overlaps with: (\S+)/.exec(f.evidence || "")?.[1];
    if (!other) continue;
    const pairKey = [f.url, other].sort().join("|");
    if (seenPairs.has(pairKey)) continue;
    seenPairs.add(pairKey);

    const isArchivePair = f.url.includes("/blog/topic/guides") || other.includes("/blog/topic/guides");
    rows.push({
      taskNumber: "CSV #45",
      priority: "Medium",
      pageUrl: f.url,
      pageTitle: titleOf(inventory, f.url),
      finding: `SIMILAR_CONTENT — ${f.evidence}`,
      exactAffectedWordingOrAnchor: `Pair: ${f.url} <-> ${other}`,
      currentSource: "N/A",
      suggestedSource: "N/A",
      decisionRequired: isArchivePair
        ? "Decide keep/merge/noindex for /blog vs /blog/topic/guides — explain the separate purpose and keyword owner for each"
        : "Confirm St Albans and York are intentionally distinct noindex pages (both outside Jeff's London-only indexable policy), not accidental near-duplicates",
      approvalRequiredFrom: "Jeff",
      developerActionAfterApproval: "Implement the approved keep/merge/noindex decision; no redirect/delete/rewrite until approved",
      status: "Not started",
    });
  }
  return rows;
}

/** Manually authored rows — see module docstring for why these can't be derived from the automated rules. */
export function manualRows() {
  return [
    {
      taskNumber: "CSV #43",
      priority: "High",
      pageUrl: "https://www.healthwise360.co.uk/helpful-guides/switching-pharmacies-mounjaro-wegovy-uk",
      pageTitle: "Switching pharmacies for Mounjaro or Wegovy in the UK",
      finding: "SOURCE_LINK_UNREACHABLE (Broken) — MHRA distance-selling-logo URL and PSNI register URL both confirmed 404 by DeadLinkChecker full-site scan",
      exactAffectedWordingOrAnchor: "\"Different requirements apply\" (MHRA) / \"PSNI register\" and \"Pharmaceutical Society of Northern Ireland (PSNI) register\" (PSNI) — inline body copy and Sources & Further Reading",
      currentSource: "gov.uk/guidance/distance-selling-logo-for-medicines-sellers-in-northern-ireland ; psni.org.uk/search-the-registers/",
      suggestedSource: "gov.uk/guidance/register-for-the-distance-selling-logo ; registers.psni.org.uk/ (both verified live, same regulatory content)",
      decisionRequired: "None — qualified reviewer approval confirmed 2026-10-09",
      approvalRequiredFrom: "Qualified reviewer (confirmed)",
      developerActionAfterApproval: "Done — implemented in PR #19, awaiting merge/deploy",
      status: "Implemented, pending deploy",
    },
    {
      taskNumber: "New finding (9 Oct DeadLinkChecker review)",
      priority: "Low",
      pageUrl: "https://www.healthwise360.co.uk/protein-and-fitness",
      pageTitle: null,
      finding: "3x huel.com affiliate 'Buy now' links return 404 (products renamed/moved to uk.huel.com with new slugs)",
      exactAffectedWordingOrAnchor: "Buy now — hot-and-savoury-black-edition-ramen, light-lean-bundle, huel-lite-ready-to-drink",
      currentSource: "huel.com/products/<old-slug>",
      suggestedSource: "Needs research — confirm current product slugs on uk.huel.com before relinking",
      decisionRequired: "Confirm these affiliate placements are still wanted, then find the correct current product URLs",
      approvalRequiredFrom: "Jeff",
      developerActionAfterApproval: "Update the affiliate links once correct destinations are confirmed",
      status: "Not started",
    },
    {
      taskNumber: "New finding (9 Oct DeadLinkChecker review)",
      priority: "Low",
      pageUrl: "https://www.healthwise360.co.uk/eat-healthier",
      pageTitle: null,
      finding: "4x huel.com affiliate 'Buy now' links return 404 (products renamed/moved to uk.huel.com with new slugs)",
      exactAffectedWordingOrAnchor: "Buy now — hot-and-savoury-lite-ramen, daily-wellness-set, huel-diet-powder, huel-daily-a-z-vitamins",
      currentSource: "huel.com/products/<old-slug>",
      suggestedSource: "Needs research — confirm current product slugs on uk.huel.com before relinking",
      decisionRequired: "Confirm these affiliate placements are still wanted, then find the correct current product URLs",
      approvalRequiredFrom: "Jeff",
      developerActionAfterApproval: "Update the affiliate links once correct destinations are confirmed",
      status: "Not started",
    },
  ];
}

function main() {
  const findingsData = loadJson("seo-findings-full-site");
  const inventory = loadJson("seo-inventory-full-site");
  const findings = findingsData.findings.filter((f) => !f.exception);

  const rows = [
    ...manualRows(),
    ...sourceMissingRows(findings, inventory),
    ...titleLengthRows(findings, inventory),
    ...similarityRows(findings, inventory),
  ];

  const outPath = path.join(reportsDir, "seo-editorial-queue.csv");
  writeFileSync(outPath, stringify(rows, { header: true, columns: QUEUE_COLUMNS }));
  console.log(`Wrote reports/seo/seo-editorial-queue.csv (${rows.length} rows: ${manualRows().length} manual, ${rows.length - manualRows().length} derived from findings)`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
