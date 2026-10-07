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

/**
 * Minimum extracted-text length treated as meaningful. Below this, an
 * extraction is more likely a stripped-down/empty page than genuinely thin
 * content, so it is excluded rather than compared (DEV-02: "don't compare
 * empty text as meaningful similarity").
 */
const MIN_MEANINGFUL_LENGTH = 40;

/**
 * DEV-02: dedupes the comparison set by final URL before pairing — defence
 * in depth on top of export.mjs's destination-level dedupe (sub-task 1), so
 * this rule can never produce a self-pair (A vs A) even if it were ever fed
 * an inventory with duplicate rows for the same URL again. The first row
 * seen for a URL wins; later duplicates are silently dropped from
 * comparison, not treated as a second distinct page.
 */
function uniqueComparablePages(allRecords) {
  const seenUrls = new Set();
  const pages = [];
  for (const r of allRecords) {
    if (r.httpStatus !== 200) continue;
    if (r.mainContentExtractionFailed) continue;
    if (!r.mainContentText || r.mainContentText.length < MIN_MEANINGFUL_LENGTH) continue;
    if (!r.url || seenUrls.has(r.url)) continue;
    seenUrls.add(r.url);
    pages.push(r);
  }
  return pages;
}

/** Similar content: pages whose main text (nav/footer/cookie/script/style/JSON-LD excluded) overlaps above the configured thresholds. */
export function checkSimilarContent(allRecords, { severities, config }) {
  const findings = [];
  const pages = uniqueComparablePages(allRecords);
  const { reviewAt, warningAt } = config.similarityThresholds;

  // i < j, never i === j: each unordered pair {A, B} is scored exactly once,
  // regardless of how many total pages are being compared (DEV-02: "A/B plus
  // B/A produces one pair and two participating pages").
  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      const score = similarity(wordSet(pages[i].mainContentText), wordSet(pages[j].mainContentText));
      if (score < reviewAt) continue;

      const severity = score >= warningAt ? severities.SIMILAR_CONTENT_WARNING : severities.SIMILAR_CONTENT_REVIEW;
      const rule = score >= warningAt ? "SIMILAR_CONTENT_WARNING" : "SIMILAR_CONTENT_REVIEW";
      const pct = Math.round(score * 100);

      // One finding per participating page, both naming the same pair —
      // this is the pair's two participants being reported, not two pairs.
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
