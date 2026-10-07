import { test } from "node:test";
import assert from "node:assert/strict";
import { checkSimilarContent } from "../rules/similarity.mjs";

const context = {
  severities: { SIMILAR_CONTENT_WARNING: "WARNING", SIMILAR_CONTENT_REVIEW: "REVIEW" },
  config: { similarityThresholds: { reviewAt: 0.7, warningAt: 0.9 } },
};

function page(url, text, overrides = {}) {
  return { url, httpStatus: 200, mainContentText: text, mainContentExtractionFailed: false, ...overrides };
}

const LOREM_A =
  "Mounjaro tirzepatide is authorised in the UK for type 2 diabetes and for eligible adults weight management the UK weight management indication was authorised in November 2023";
const LOREM_B =
  "Wegovy semaglutide is a different medicine used for weight management with its own UK licensing history and dosing schedule entirely separate from Mounjaro";

test("DEV-02: a page is never compared against itself (duplicate rows for the same URL produce zero self-pairs)", () => {
  const dupeText = LOREM_A;
  const records = [page("https://example.test/a", dupeText), page("https://example.test/a", dupeText)];
  const findings = checkSimilarContent(records, context);
  assert.equal(findings.length, 0, "a URL appearing twice must not be scored against itself");
});

test("DEV-02: an unordered pair {A,B} is counted once, not twice as A/B and B/A", () => {
  const records = [page("https://example.test/a", LOREM_A), page("https://example.test/b", LOREM_A)];
  const findings = checkSimilarContent(records, context);
  // Two participating pages reported, not four (which would mean the pair was counted twice).
  assert.equal(findings.length, 2);
  const urls = findings.map((f) => f.url).sort();
  assert.deepEqual(urls, ["https://example.test/a", "https://example.test/b"]);
  const others = findings.map((f) => f.evidence).sort();
  assert.ok(others[0].includes("https://example.test/b") || others[0].includes("https://example.test/a"));
});

test("DEV-02: two unrelated pages with low overlap produce no finding", () => {
  const records = [page("https://example.test/a", LOREM_A), page("https://example.test/b", LOREM_B)];
  const findings = checkSimilarContent(records, context);
  assert.equal(findings.length, 0);
});

test("DEV-02: a failed or empty extraction is excluded from comparison, not treated as meaningful similarity", () => {
  const records = [
    page("https://example.test/a", LOREM_A),
    page("https://example.test/b", LOREM_A, { mainContentExtractionFailed: true }),
    page("https://example.test/c", "", {}),
    page("https://example.test/d", "x".repeat(10)), // below MIN_MEANINGFUL_LENGTH
  ];
  const findings = checkSimilarContent(records, context);
  assert.equal(findings.length, 0, "no page should be compared against the excluded ones");
});
