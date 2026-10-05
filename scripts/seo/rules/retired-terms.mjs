import { finding } from "../lib/finding.mjs";

/** Retired terms (e.g. Saxenda) in visible text, metadata, Schema or links. */
export function checkRetiredTerms(record, { severities, config }) {
  if (record.httpStatus !== 200 || !config.retiredTerms.length) return [];
  const findings = [];

  const haystacks = {
    "visible text": record.bodyText,
    title: record.title,
    "meta description": record.metaDescription,
    "Schema types": (record.schemaTypes || []).join(", "),
    "internal links": (record.internalLinkTargets || []).join(", "),
  };

  for (const term of config.retiredTerms) {
    const pattern = new RegExp(`\\b${term}\\b`, "i");
    for (const [location, text] of Object.entries(haystacks)) {
      if (text && pattern.test(text)) {
        findings.push(
          finding({
            severity: severities.RETIRED_TERM_FOUND,
            url: record.url,
            rule: "RETIRED_TERM_FOUND",
            problem: `The retired term "${term}" appears in ${location}.`,
            expected: `No references to retired terms (${config.retiredTerms.join(", ")}).`,
            evidence: `Found in: ${location}`,
          }),
        );
      }
    }
  }

  return findings;
}
