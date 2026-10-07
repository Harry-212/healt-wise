import { test } from "node:test";
import assert from "node:assert/strict";
import { finding, dedupeFindings, applyExceptions } from "../lib/finding.mjs";

function f(overrides = {}) {
  return finding({
    severity: "ERROR",
    url: "https://example.test/a",
    rule: "TITLE_MISSING",
    problem: "No title.",
    expected: "A title.",
    evidence: "title: (none)",
    ...overrides,
  });
}

test("DEV-02: exact-duplicate findings (same severity, rule, URL, evidence) collapse into one with an occurrence count", () => {
  const findings = [f(), f(), f()];
  const deduped = dedupeFindings(findings);
  assert.equal(deduped.length, 1);
  assert.equal(deduped[0].occurrences, 3);
});

test("DEV-02: findings differing only in evidence are kept distinct", () => {
  const findings = [f({ evidence: "title: (none)" }), f({ evidence: "title: too short" })];
  const deduped = dedupeFindings(findings);
  assert.equal(deduped.length, 2);
  assert.ok(deduped.every((d) => d.occurrences === 1));
});

test("DEV-02: findings on different URLs are never merged, even with identical rule/evidence", () => {
  const findings = [f({ url: "https://example.test/a" }), f({ url: "https://example.test/b" })];
  const deduped = dedupeFindings(findings);
  assert.equal(deduped.length, 2);
});

test("DEV-02: evidence whitespace differences normalise to the same key", () => {
  const findings = [f({ evidence: "title: (none)" }), f({ evidence: "title:   (none)  " })];
  const deduped = dedupeFindings(findings);
  assert.equal(deduped.length, 1);
  assert.equal(deduped[0].occurrences, 2);
});

test("dedupe runs before exceptions and both survive composition", () => {
  const findings = dedupeFindings([f(), f()]);
  const exceptions = [{ url: "https://example.test/a", rule: "TITLE_MISSING" }];
  const withExceptions = applyExceptions(findings, exceptions);
  assert.equal(withExceptions.length, 1);
  assert.equal(withExceptions[0].occurrences, 2);
  assert.ok(withExceptions[0].exception);
});
