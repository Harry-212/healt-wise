import { finding } from "../lib/finding.mjs";

/** Page status: a sitemap/prototype URL that does not return 200. */
export function checkStatus(record, { severities }) {
  if (record.httpStatus === 200) return [];
  return [
    finding({
      severity: severities.PAGE_STATUS_NOT_200,
      url: record.url || record.requestedUrl,
      rule: "PAGE_STATUS_NOT_200",
      problem: "The page does not return HTTP 200.",
      expected: "A prototype or sitemap URL should return HTTP 200.",
      evidence: `HTTP status: ${record.httpStatus ?? "no response (fetch failed)"}`,
    }),
  ];
}
