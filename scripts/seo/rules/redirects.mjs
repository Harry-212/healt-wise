import { finding } from "../lib/finding.mjs";

/** Redirects: loop, or a chain of more than one hop. */
export function checkRedirects(record, { severities }) {
  const findings = [];

  if (record.redirectLoop) {
    findings.push(
      finding({
        severity: severities.REDIRECT_LOOP,
        url: record.requestedUrl,
        rule: "REDIRECT_LOOP",
        problem: "Following this URL's redirects returns to a URL already visited.",
        expected: "No redirect loops.",
        evidence: `Loop detected while resolving ${record.requestedUrl}`,
      }),
    );
  } else if ((record.redirectHops || 0) > 1) {
    findings.push(
      finding({
        severity: severities.REDIRECT_CHAIN,
        url: record.requestedUrl,
        rule: "REDIRECT_CHAIN",
        problem: "The URL redirects through more than one hop before reaching its destination.",
        expected: "At most one redirect hop to the final URL.",
        evidence: `${record.redirectHops} hops, final: ${record.url}`,
      }),
    );
  }

  return findings;
}
