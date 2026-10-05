import { finding } from "../lib/finding.mjs";

/** Canonical: missing/invalid, or pointing to a different page. */
export function checkCanonical(record, { severities }) {
  if (record.httpStatus !== 200) return [];
  const findings = [];

  if (!record.canonicalUrl) {
    findings.push(
      finding({
        severity: severities.CANONICAL_MISSING_OR_INVALID,
        url: record.url,
        rule: "CANONICAL_MISSING_OR_INVALID",
        problem: "The page has no <link rel=\"canonical\">.",
        expected: "Every indexable page has a self-referencing https/www canonical.",
        evidence: "canonical: (missing)",
      }),
    );
    return findings;
  }

  const isHttps = record.canonicalUrl.startsWith("https://");
  const isWww = /^https:\/\/www\./.test(record.canonicalUrl);
  if (!isHttps || !isWww) {
    findings.push(
      finding({
        severity: severities.CANONICAL_MISSING_OR_INVALID,
        url: record.url,
        rule: "CANONICAL_MISSING_OR_INVALID",
        problem: "The canonical URL is not https and/or not the www host.",
        expected: "Canonical points to an https://www.* URL.",
        evidence: `canonical: ${record.canonicalUrl}`,
      }),
    );
  } else if (!record.canonicalSelfReferencing) {
    findings.push(
      finding({
        severity: severities.CANONICAL_POINTS_ELSEWHERE,
        url: record.url,
        rule: "CANONICAL_POINTS_ELSEWHERE",
        problem: "The canonical URL points to a different page.",
        expected: "Canonical is self-referencing, unless this is an approved exception.",
        evidence: `canonical: ${record.canonicalUrl}`,
      }),
    );
  }

  return findings;
}
