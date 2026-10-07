#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { stringify } from "csv-stringify/sync";
import { loadConfig, loadExceptions, reportsDir } from "./lib/config.mjs";
import { applyExceptions, dedupeFindings } from "./lib/finding.mjs";
import { checkStatus } from "./rules/status.mjs";
import { checkMetadata } from "./rules/metadata.mjs";
import { checkHeadings } from "./rules/headings.mjs";
import { checkLinks } from "./rules/links.mjs";
import { checkRedirects } from "./rules/redirects.mjs";
import { checkCanonical } from "./rules/canonical.mjs";
import { checkIndexing } from "./rules/indexing.mjs";
import { checkSchema, checkSchemaIdConflicts } from "./rules/schema.mjs";
import { checkFaq } from "./rules/faq.mjs";
import { checkReviewer } from "./rules/reviewer.mjs";
import { checkRetiredTerms } from "./rules/retired-terms.mjs";
import { checkSourceMissing, checkSourceReachability } from "./rules/sources.mjs";
import { checkSimilarContent } from "./rules/similarity.mjs";

const PER_PAGE_RULES = [
  checkStatus,
  checkMetadata,
  checkHeadings,
  checkRedirects,
  checkCanonical,
  checkIndexing,
  checkSchema,
  checkFaq,
  checkReviewer,
  checkRetiredTerms,
  checkSourceMissing,
  checkLinks,
];

const SEVERITY_ORDER = { ERROR: 0, WARNING: 1, REVIEW: 2 };

/** Per-severity cap on the full findings dump in the full-site .md summary — see writeSummary. */
const FULL_SITE_DUMP_CAP = 30;

async function runPerPageRules(records, context) {
  const findings = [];
  for (const record of records) {
    for (const rule of PER_PAGE_RULES) {
      findings.push(...(await rule(record, context)));
    }
  }
  return findings;
}

/**
 * Groups findings by rule (a proxy for "distinct root-cause issue"), since a
 * single underlying bug can produce hundreds of per-page findings (e.g. one
 * mismatched Organization @id flags on every other page it's compared
 * against). Ranked by severity, then by how many pages are affected —
 * "most serious" meaning worst severity first, then broadest impact.
 */
function rankDistinctIssues(active, limit) {
  const groups = new Map();
  for (const f of active) {
    if (!groups.has(f.rule)) groups.set(f.rule, { rule: f.rule, severity: f.severity, findings: [] });
    groups.get(f.rule).findings.push(f);
  }
  const ranked = [...groups.values()].sort((a, b) => {
    const sevDiff = SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity];
    if (sevDiff !== 0) return sevDiff;
    return b.findings.length - a.findings.length;
  });
  return ranked.slice(0, limit);
}

function writeSummary(summaryPath, { target, scope, generatedAt, findings, rawFindingsCount, records, discoveryMeta }) {
  const active = findings.filter((f) => !f.exception);
  const suppressed = findings.filter((f) => f.exception);
  const counts = { ERROR: 0, WARNING: 0, REVIEW: 0 };
  for (const f of active) counts[f.severity] = (counts[f.severity] || 0) + 1;
  const distinctAffectedDestinations = new Set(active.map((f) => f.url)).size;
  const repeatedEventCount = rawFindingsCount - findings.length;

  const isFullSite = scope === "full-site";
  const findingsCsvName = isFullSite ? "seo-findings-full-site" : "seo-findings";
  const lines = [
    isFullSite
      ? "# SEO validation summary — Task 32 whole-site audit (report-only)"
      : "# SEO validation summary — Task 31 prototype",
    "",
    `Target: ${target}`,
    `Generated: ${generatedAt}`,
    `Pages checked: ${records.length}`,
    "",
    // DEV-02: raw rows vs distinct findings vs affected destinations are
    // different numbers and must never be collapsed into one whole-site
    // total — a single root cause can produce many raw rows without being
    // many distinct problems.
    `- Raw finding rows (before dedupe): ${rawFindingsCount}`,
    `- Distinct findings (deduped by severity+rule+URL+evidence): ${findings.length}${repeatedEventCount > 0 ? ` (${repeatedEventCount} repeated event(s) collapsed)` : ""}`,
    `- Distinct affected destinations (active, non-suppressed): ${distinctAffectedDestinations}`,
    "",
    `- ERROR: ${counts.ERROR}`,
    `- WARNING: ${counts.WARNING}`,
    `- REVIEW: ${counts.REVIEW}`,
    `- Suppressed by exceptions: ${suppressed.length}`,
    "",
    isFullSite
      ? "**Report-only** — this run does not block deployment and made no content/schema/redirect changes."
      : counts.ERROR > 0
        ? "**Result: BLOCKED** — at least one ERROR on a prototype URL."
        : "**Result: PASS** — no ERROR findings on the prototype URLs.",
    "",
  ];

  if (isFullSite && discoveryMeta) {
    lines.push(
      "## Discovery",
      "",
      `- Total requests attempted: ${discoveryMeta.totalRequestsAttempted}`,
      `- Total unique destinations: ${discoveryMeta.totalUniqueDestinations}`,
      `- Total crawled successfully: ${discoveryMeta.totalRequestsAttempted - discoveryMeta.failedUrls.length}`,
      `- Pages that could not be processed: ${discoveryMeta.failedUrls.length}`,
    );
    for (const f of discoveryMeta.failedUrls) lines.push(`  - ${f.url}: ${f.error}`);
    lines.push(
      "",
      `### Found via internal links but missing from sitemap.xml (${discoveryMeta.missingFromSitemapUrls.length})`,
      "",
    );
    if (discoveryMeta.missingFromSitemapUrls.length) {
      for (const url of discoveryMeta.missingFromSitemapUrls) lines.push(`- ${url}`);
    } else {
      lines.push("None — every internally-linked page was already in sitemap.xml.");
    }
    lines.push("");
  }

  const topIssues = rankDistinctIssues(active, 10);
  lines.push(
    isFullSite ? `## Top ${topIssues.length} most serious findings (by distinct issue)` : "## Findings",
    "",
  );
  if (isFullSite) {
    lines.push(
      "Grouped by rule — one underlying issue can produce many per-page findings (e.g. a single mismatched Schema @id flags on every other page it conflicts with). Ranked by severity, then by how many pages are affected.",
      "",
    );
    topIssues.forEach((group, i) => {
      const rep = group.findings[0];
      lines.push(`${i + 1}. **[${group.severity}] ${group.rule}** — affects ${group.findings.length} page(s)`);
      lines.push(`   - Example URL: ${rep.url}`);
      lines.push(`   - Problem: ${rep.problem}`);
      lines.push(`   - Expected: ${rep.expected}`);
      if (group.findings.length > 1) {
        lines.push(`   - Other affected URLs: ${group.findings.slice(1, 6).map((f) => f.url).join(", ")}${group.findings.length > 6 ? `, +${group.findings.length - 6} more` : ""}`);
      }
      if (group.rule.startsWith("SIMILAR_CONTENT")) {
        lines.push(
          "   - **Caveat**: this rule compares the entire `<body>` text (Task 31's `checkSimilarContent`), which includes the shared nav/footer/menu boilerplate present on every page, not just the unique article content. At full-site scale that inflates the overlap score for nearly every page pair — treat this count as a signal to spot-check, not literal proof of duplicate content. Narrowing the rule to main-content text only would need its own change, which is out of scope for a report-only audit.",
        );
      }
      lines.push("");
    });
    lines.push(
      `## Full findings by severity (first ${FULL_SITE_DUMP_CAP} per severity — complete list in ${findingsCsvName}.csv)`,
      "",
    );
  }

  // A full-site run can produce tens of thousands of individual findings
  // (one root cause × every affected page). Dumping all of them here would
  // turn this "summary" into a multi-megabyte file that defeats its purpose
  // — the complete, unabridged list already lives in the findings CSV/JSON.
  const perSeverityCap = isFullSite ? FULL_SITE_DUMP_CAP : Infinity;

  for (const sev of ["ERROR", "WARNING", "REVIEW"]) {
    const group = active.filter((f) => f.severity === sev);
    if (!group.length) continue;
    lines.push(`### ${sev} (${group.length})`, "");
    for (const f of group.slice(0, perSeverityCap)) {
      lines.push(`- **${f.rule}** — ${f.url}`);
      lines.push(`  - Problem: ${f.problem}`);
      lines.push(`  - Expected: ${f.expected}`);
      lines.push(`  - Evidence: ${f.evidence}`);
    }
    if (group.length > perSeverityCap) {
      lines.push(`- ... and ${group.length - perSeverityCap} more ${sev} findings — see ${findingsCsvName}.csv`);
    }
    lines.push("");
  }

  if (active.length === 0) {
    lines.push("No findings.", "");
  }

  writeFileSync(summaryPath, lines.join("\n"));
}

function parseArgs(argv) {
  const scope = argv.find((a) => a.startsWith("--scope="))?.split("=")[1] || "prototype";
  if (!["prototype", "full-site"].includes(scope)) {
    throw new Error(`Unknown --scope "${scope}". Use "prototype" or "full-site".`);
  }
  return { scope };
}

async function main() {
  const { scope } = parseArgs(process.argv.slice(2));
  const inventoryName = scope === "full-site" ? "seo-inventory-full-site" : "seo-inventory";
  const findingsName = scope === "full-site" ? "seo-findings-full-site" : "seo-findings";
  const summaryName = scope === "full-site" ? "seo-summary-full-site" : "seo-summary";

  const inventoryPath = path.join(reportsDir, `${inventoryName}.json`);
  if (!existsSync(inventoryPath)) {
    throw new Error(`${inventoryPath} not found. Run "npm run seo:export -- --scope=${scope}" first.`);
  }

  const inventory = JSON.parse(readFileSync(inventoryPath, "utf8"));
  const { target, records, discoveryMeta } = inventory;
  const config = loadConfig();
  const exceptions = loadExceptions();
  const context = { severities: config.severities, config, allRecords: records, target, linkStatusCache: new Map() };

  console.log(`seo:validate — target=${target} scope=${scope}, ${records.length} pages`);

  let findings = await runPerPageRules(records, context);
  findings.push(...checkSchemaIdConflicts(records, context));
  findings.push(...checkSimilarContent(records, context));
  findings.push(...(await checkSourceReachability(records, context)));

  // DEV-02: collapse exact-duplicate findings (same severity+rule+URL+
  // evidence) before exceptions/sorting, and keep the pre-dedupe count only
  // for reporting how many repeated events were collapsed — never feed the
  // raw count back into anything that looks like a distinct-issue total.
  const rawFindingsCount = findings.length;
  findings = dedupeFindings(findings);

  findings = applyExceptions(findings, exceptions);
  findings.sort((a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity]);

  const generatedAt = new Date().toISOString();
  mkdirSync(reportsDir, { recursive: true });

  writeFileSync(
    path.join(reportsDir, `${findingsName}.json`),
    JSON.stringify({ target, scope, generatedAt, rawFindingsCount, findings }, null, 2),
  );

  const activeForCsv = findings.filter((f) => !f.exception);
  writeFileSync(
    path.join(reportsDir, `${findingsName}.csv`),
    stringify(
      activeForCsv.map((f) => ({
        severity: f.severity,
        url: f.url,
        rule: f.rule,
        problem: f.problem,
        expected: f.expected,
        evidence: f.evidence,
        occurrences: f.occurrences,
      })),
      { header: true },
    ),
  );

  writeSummary(path.join(reportsDir, `${summaryName}.md`), {
    target,
    scope,
    generatedAt,
    findings,
    rawFindingsCount,
    records,
    discoveryMeta,
  });

  const errorCount = findings.filter((f) => !f.exception && f.severity === "ERROR").length;
  console.log(`Findings: ${findings.length} distinct (${rawFindingsCount} raw rows before dedupe), ${errorCount} ERROR active.`);
  console.log(`Wrote reports/seo/${findingsName}.json, .csv and ${summaryName}.md`);

  // Report-only for full-site (Task 32, point 4): never fails the process,
  // so nothing downstream can accidentally treat a whole-site finding as a
  // deploy gate. Only the prototype scope (the actual CI PR gate) exits 1.
  if (scope === "prototype" && errorCount > 0) {
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
