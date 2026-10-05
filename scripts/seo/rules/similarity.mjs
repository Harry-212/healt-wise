import { finding } from "../lib/finding.mjs";

function wordSet(text) {
  return new Set((text || "").toLowerCase().match(/[a-z0-9]+/g) || []);
}

/** Jaccard similarity over the body's word set — compares wording, not meaning (proposal Section 9). */
function similarity(a, b) {
  const intersectionSize = [...a].filter((w) => b.has(w)).length;
  const unionSize = new Set([...a, ...b]).size;
  return unionSize === 0 ? 0 : intersectionSize / unionSize;
}

/** Similar content: pages whose main text overlaps above the configured thresholds. */
export function checkSimilarContent(allRecords, { severities, config }) {
  const findings = [];
  const pages = allRecords.filter((r) => r.httpStatus === 200 && r.bodyText);
  const { reviewAt, warningAt } = config.similarityThresholds;

  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      const score = similarity(wordSet(pages[i].bodyText), wordSet(pages[j].bodyText));
      if (score < reviewAt) continue;

      const severity = score >= warningAt ? severities.SIMILAR_CONTENT_WARNING : severities.SIMILAR_CONTENT_REVIEW;
      const rule = score >= warningAt ? "SIMILAR_CONTENT_WARNING" : "SIMILAR_CONTENT_REVIEW";
      const pct = Math.round(score * 100);

      for (const [self, other] of [[pages[i], pages[j]], [pages[j], pages[i]]]) {
        findings.push(
          finding({
            severity,
            url: self.url,
            rule,
            problem: `This page's wording overlaps ${pct}% with another page.`,
            expected: `Overlap below ${Math.round(reviewAt * 100)}%, or a decision on which page owns the topic.`,
            evidence: `Overlaps with: ${other.url} (${pct}%)`,
          }),
        );
      }
    }
  }

  return findings;
}
