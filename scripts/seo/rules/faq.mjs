import { finding } from "../lib/finding.mjs";

/**
 * DEV-04: punctuation-only differences (curly vs straight quotes, the
 * typographic apostrophe) must not fail this check — the visible page
 * typically renders curly quotes via HTML entities (&ldquo;/&rdquo;/&lsquo;/
 * &rsquo;), which cheerio decodes to their Unicode characters, while Schema
 * text is typically written with plain ASCII quotes. Folding both to ASCII
 * before comparing treats them as the same wording, which they are.
 */
function normaliseQuotes(text) {
  return text.replace(/[‘’‚‛]/g, "'").replace(/[“”„‟]/g, '"');
}

function normalise(text) {
  return normaliseQuotes((text || "").replace(/\s+/g, " ").trim().toLowerCase());
}

/**
 * FAQ Schema: a question not visible on the page, or a visible answer worded
 * differently from its Schema answer. Visibility is checked by substring match
 * against the page's visible text — exact wording differences surface as
 * REVIEW, not a false negative, matching the early-indication findings in the
 * Task 31 proposal (Section 8).
 */
export function checkFaq(record, { severities }) {
  if (record.httpStatus !== 200 || !record.faqEntries?.length) return [];
  const findings = [];
  const body = normalise(record.bodyText);

  for (const { question, answer } of record.faqEntries) {
    if (!question) continue;
    const questionVisible = body.includes(normalise(question));
    if (!questionVisible) {
      findings.push(
        finding({
          severity: severities.FAQ_NOT_VISIBLE,
          url: record.url,
          rule: "FAQ_NOT_VISIBLE",
          problem: "A question in FAQ Schema is not visible on the page.",
          expected: "Every FAQ Schema question has matching visible text.",
          evidence: `Schema question: "${question}"`,
        }),
      );
      continue;
    }

    if (answer && !body.includes(normalise(answer))) {
      findings.push(
        finding({
          severity: severities.FAQ_ANSWER_MISMATCH,
          url: record.url,
          rule: "FAQ_ANSWER_MISMATCH",
          problem: "The visible answer is worded differently from its Schema answer.",
          expected: "Schema answer text matches the visible answer.",
          evidence: `Question: "${question}" | Schema answer: "${answer}"`,
        }),
      );
    }
  }

  return findings;
}
