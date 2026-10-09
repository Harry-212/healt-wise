import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  sourceMissingRows,
  titleLengthRows,
  similarityRows,
  manualRows,
} from "../editorial-queue.mjs";

const scriptPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../editorial-queue.mjs");

function inventoryWith(records) {
  return { records };
}

test("Task 45/41: SOURCE_MISSING prioritises the indexable London page over the noindex city pages", () => {
  const findings = [
    { rule: "SOURCE_MISSING", url: "https://example.test/blog/weight-loss-treatment-london" },
    { rule: "SOURCE_MISSING", url: "https://example.test/blog/best-weight-loss-treatment-in-reading" },
  ];
  const inventory = inventoryWith([
    { url: "https://example.test/blog/weight-loss-treatment-london", title: "London" },
    { url: "https://example.test/blog/best-weight-loss-treatment-in-reading", title: "Reading" },
  ]);
  const rows = sourceMissingRows(findings, inventory);
  assert.equal(rows.length, 2);
  assert.match(rows[0].priority, /High/);
  assert.match(rows[1].priority, /Medium/);
  assert.match(rows[1].decisionRequired, /retain\/remove/i);
});

test("Task 45/41: TITLE_LENGTH only produces a row for indexable pages, never a noindex city page", () => {
  const findings = [
    { rule: "TITLE_LENGTH", url: "https://example.test/blog/indexable-article", evidence: "titleLength: 80" },
    { rule: "TITLE_LENGTH", url: "https://example.test/blog/best-weight-loss-treatment-in-luton", evidence: "titleLength: 107" },
  ];
  const inventory = inventoryWith([
    { url: "https://example.test/blog/indexable-article", title: "An Indexable Article Title", indexNoindex: "index" },
    { url: "https://example.test/blog/best-weight-loss-treatment-in-luton", title: "Luton", indexNoindex: "noindex" },
  ]);
  const rows = titleLengthRows(findings, inventory);
  assert.equal(rows.length, 1);
  assert.equal(rows[0].pageUrl, "https://example.test/blog/indexable-article");
});

test("Task 45/41: SIMILAR_CONTENT pairs are deduped to one row, not two (no double-counting A/B and B/A)", () => {
  const findings = [
    { rule: "SIMILAR_CONTENT_REVIEW", url: "https://example.test/blog", evidence: "Overlaps with: https://example.test/blog/topic/guides (74%)" },
    { rule: "SIMILAR_CONTENT_REVIEW", url: "https://example.test/blog/topic/guides", evidence: "Overlaps with: https://example.test/blog (74%)" },
  ];
  const inventory = inventoryWith([{ url: "https://example.test/blog", title: "Blog" }]);
  const rows = similarityRows(findings, inventory);
  assert.equal(rows.length, 1);
});

test("regression: a similarity pair other than the two named in Task 45 gets its own accurate decision text, not a copy-pasted example naming unrelated pages", () => {
  const findings = [
    { rule: "SIMILAR_CONTENT_REVIEW", url: "https://example.test/pharmacies/curate", evidence: "Overlaps with: https://example.test/pharmacies/curely (73%)" },
    { rule: "SIMILAR_CONTENT_REVIEW", url: "https://example.test/pharmacies/curely", evidence: "Overlaps with: https://example.test/pharmacies/curate (73%)" },
  ];
  const inventory = inventoryWith([
    { url: "https://example.test/pharmacies/curate", title: "Curate", indexNoindex: "index" },
    { url: "https://example.test/pharmacies/curely", title: "Curely", indexNoindex: "index" },
  ]);
  const rows = similarityRows(findings, inventory);
  assert.equal(rows.length, 1);
  assert.doesNotMatch(rows[0].decisionRequired, /St Albans|York/);
  assert.match(rows[0].decisionRequired, /curate/);
  assert.match(rows[0].decisionRequired, /curely/);
});

test("Task 41: the queue starts with the Switching Pharmacies guide as a manual (non-derived) row", () => {
  const rows = manualRows();
  assert.ok(rows.length >= 1);
  assert.match(rows[0].pageUrl, /switching-pharmacies/);
  assert.equal(rows[0].taskNumber, "CSV #43");
});

test("regression: running the script directly (node scripts/seo/editorial-queue.mjs) actually invokes main() and writes output, not just exits silently", () => {
  // Guards the Windows path-separator bug: comparing import.meta.url against
  // a raw `file://${process.argv[1]}` concatenation silently fails on
  // Windows (backslash path vs forward-slash file URL), so main() never ran
  // and the command exited 0 having written nothing.
  const output = execFileSync("node", [scriptPath], { encoding: "utf8" });
  assert.match(output, /Wrote reports[\\/]seo[\\/]seo-editorial-queue\.csv/);
});

test("Task 41: every row has all twelve required columns populated (not undefined)", () => {
  const rows = [
    ...manualRows(),
    ...sourceMissingRows(
      [{ rule: "SOURCE_MISSING", url: "https://example.test/blog/weight-loss-treatment-london" }],
      inventoryWith([{ url: "https://example.test/blog/weight-loss-treatment-london", title: "London" }]),
    ),
  ];
  const requiredColumns = [
    "taskNumber", "priority", "pageUrl", "finding", "decisionRequired",
    "approvalRequiredFrom", "developerActionAfterApproval", "status",
  ];
  for (const row of rows) {
    for (const col of requiredColumns) {
      assert.notEqual(row[col], undefined, `missing ${col} on row for ${row.pageUrl}`);
    }
  }
});
