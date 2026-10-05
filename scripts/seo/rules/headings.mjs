import { finding } from "../lib/finding.mjs";

/** H1: missing, or more than one. */
export function checkHeadings(record, { severities }) {
  if (record.httpStatus !== 200) return [];
  const findings = [];

  if (record.h1Count === 0) {
    findings.push(
      finding({
        severity: severities.H1_MISSING,
        url: record.url,
        rule: "H1_MISSING",
        problem: "The page has no H1 heading.",
        expected: "Exactly one H1 that describes the page.",
        evidence: "0 H1 elements found in server-rendered HTML.",
      }),
    );
  } else if (record.h1Count > 1) {
    findings.push(
      finding({
        severity: severities.H1_MULTIPLE,
        url: record.url,
        rule: "H1_MULTIPLE",
        problem: "The page has more than one H1 heading.",
        expected: "Exactly one H1 that describes the page.",
        evidence: `${record.h1Count} H1 elements found: ${(record.h1s || []).map((h) => `"${h.text}"`).join(", ")}`,
      }),
    );
  }

  return findings;
}
