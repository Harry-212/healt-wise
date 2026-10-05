import { finding } from "../lib/finding.mjs";

/** Reviewer claims: any reviewer named in Schema or visible text who is not on the approved list. */
export function checkReviewer(record, { severities, config }) {
  if (record.httpStatus !== 200 || !record.reviewerName) return [];
  if (config.approvedReviewers.includes(record.reviewerName)) return [];

  return [
    finding({
      severity: severities.REVIEWER_NOT_APPROVED,
      url: record.url,
      rule: "REVIEWER_NOT_APPROVED",
      problem: "A reviewer is named whose identity is not on the approved-reviewer list.",
      expected: "Reviewer claims are only made for names on seo.config.json's approvedReviewers.",
      evidence: `reviewer: "${record.reviewerName}" (source: ${record.reviewerSchema?.includes(record.reviewerName) ? "Schema" : "visible text"})`,
    }),
  ];
}
