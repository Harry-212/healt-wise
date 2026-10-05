import { finding } from "../lib/finding.mjs";

/** Titles and meta descriptions: missing, duplicate (across indexable pages), or unusual length. */
export function checkMetadata(record, { severities, allRecords }) {
  if (record.httpStatus !== 200) return [];
  const findings = [];
  const indexableOthers = allRecords.filter(
    (r) => r.url !== record.url && r.httpStatus === 200 && r.indexNoindex === "index",
  );

  if (!record.title) {
    findings.push(
      finding({
        severity: severities.TITLE_MISSING,
        url: record.url,
        rule: "TITLE_MISSING",
        problem: "The page has no <title>.",
        expected: "Every indexable page has a non-empty title.",
        evidence: "title: (empty)",
      }),
    );
  } else {
    const dup = indexableOthers.find((r) => r.title === record.title);
    if (dup) {
      findings.push(
        finding({
          severity: severities.TITLE_DUPLICATE,
          url: record.url,
          rule: "TITLE_DUPLICATE",
          problem: "The title is identical to another indexable page.",
          expected: "Each indexable page has a distinct title.",
          evidence: `title: "${record.title}" also used by ${dup.url}`,
        }),
      );
    }
    if (record.titleLength < 15 || record.titleLength > 65) {
      findings.push(
        finding({
          severity: severities.TITLE_LENGTH,
          url: record.url,
          rule: "TITLE_LENGTH",
          problem: "The title is unusually short or long.",
          expected: "Title length is roughly 15-65 characters.",
          evidence: `titleLength: ${record.titleLength}`,
        }),
      );
    }
  }

  if (!record.metaDescription) {
    findings.push(
      finding({
        severity: severities.DESCRIPTION_MISSING,
        url: record.url,
        rule: "DESCRIPTION_MISSING",
        problem: "The page has no meta description.",
        expected: "Every indexable page has a meta description.",
        evidence: "metaDescription: (empty)",
      }),
    );
  } else {
    const dup = indexableOthers.find((r) => r.metaDescription === record.metaDescription);
    if (dup) {
      findings.push(
        finding({
          severity: severities.DESCRIPTION_DUPLICATE,
          url: record.url,
          rule: "DESCRIPTION_DUPLICATE",
          problem: "The meta description is identical to another indexable page.",
          expected: "Each indexable page has a distinct meta description.",
          evidence: `metaDescription duplicated with ${dup.url}`,
        }),
      );
    }
  }

  return findings;
}
