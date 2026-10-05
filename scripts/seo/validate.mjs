#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { stringify } from "csv-stringify/sync";
import { loadConfig, loadExceptions, reportsDir } from "./lib/config.mjs";
import { applyExceptions } from "./lib/finding.mjs";
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

async function runPerPageRules(records, context) {
  const findings = [];
  for (const record of records) {
    for (const rule of PER_PAGE_RULES) {
      findings.push(...(await rule(record, context)));
    }
  }
  return findings;
}

function writeSummary(summaryPath, { target, generatedAt, findings, records }) {
  const active = findings.filter((f) => !f.exception);
  const suppressed = findings.filter((f) => f.exception);
  const counts = { ERROR: 0, WARNING: 0, REVIEW: 0 };
  for (const f of active) counts[f.severity] = (counts[f.severity] || 0) + 1;

  const lines = [
    "# SEO validation summary — Task 31 prototype",
    "",
    `Target: ${target}`,
    `Generated: ${generatedAt}`,
    `Pages checked: ${records.length}`,
    "",
    `- ERROR: ${counts.ERROR}`,
    `- WARNING: ${counts.WARNING}`,
    `- REVIEW: ${counts.REVIEW}`,
    `- Suppressed by exceptions: ${suppressed.length}`,
    "",
    counts.ERROR > 0
      ? "**Result: BLOCKED** — at least one ERROR on a prototype URL."
      : "**Result: PASS** — no ERROR findings on the prototype URLs.",
    "",
    "## Findings",
    "",
  ];

  for (const sev of ["ERROR", "WARNING", "REVIEW"]) {
    const group = active.filter((f) => f.severity === sev);
    if (!group.length) continue;
    lines.push(`### ${sev} (${group.length})`, "");
    for (const f of group) {
      lines.push(`- **${f.rule}** — ${f.url}`);
      lines.push(`  - Problem: ${f.problem}`);
      lines.push(`  - Expected: ${f.expected}`);
      lines.push(`  - Evidence: ${f.evidence}`);
    }
    lines.push("");
  }

  if (active.length === 0) {
    lines.push("No findings.", "");
  }

  writeFileSync(summaryPath, lines.join("\n"));
}

async function main() {
  const inventoryPath = path.join(reportsDir, "seo-inventory.json");
  if (!existsSync(inventoryPath)) {
    throw new Error(`${inventoryPath} not found. Run "npm run seo:export" first.`);
  }

  const inventory = JSON.parse(readFileSync(inventoryPath, "utf8"));
  const { target, records } = inventory;
  const config = loadConfig();
  const exceptions = loadExceptions();
  const context = { severities: config.severities, config, allRecords: records, target, linkStatusCache: new Map() };

  console.log(`seo:validate — target=${target}, ${records.length} pages`);

  let findings = await runPerPageRules(records, context);
  findings.push(...checkSchemaIdConflicts(records, context));
  findings.push(...checkSimilarContent(records, context));
  findings.push(...(await checkSourceReachability(records, context)));

  findings = applyExceptions(findings, exceptions);
  findings.sort((a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity]);

  const generatedAt = new Date().toISOString();
  mkdirSync(reportsDir, { recursive: true });

  writeFileSync(
    path.join(reportsDir, "seo-findings.json"),
    JSON.stringify({ target, generatedAt, findings }, null, 2),
  );

  const activeForCsv = findings.filter((f) => !f.exception);
  writeFileSync(
    path.join(reportsDir, "seo-findings.csv"),
    stringify(
      activeForCsv.map((f) => ({
        severity: f.severity,
        url: f.url,
        rule: f.rule,
        problem: f.problem,
        expected: f.expected,
        evidence: f.evidence,
      })),
      { header: true },
    ),
  );

  writeSummary(path.join(reportsDir, "seo-summary.md"), { target, generatedAt, findings, records });

  const errorCount = findings.filter((f) => !f.exception && f.severity === "ERROR").length;
  console.log(`Findings: ${findings.length} (${errorCount} ERROR, active).`);
  console.log(`Wrote reports/seo/seo-findings.json, .csv and seo-summary.md`);

  if (errorCount > 0) {
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
