import { test } from "node:test";
import assert from "node:assert/strict";
import { checkFaq } from "../rules/faq.mjs";

const severities = { FAQ_NOT_VISIBLE: "ERROR", FAQ_ANSWER_MISMATCH: "REVIEW" };

test("DEV-04: a question/answer rendered with curly quotes still matches straight-quote Schema text", () => {
  const record = {
    httpStatus: 200,
    bodyText:
      'Some intro text. Are “natural Ozempic” supplements safe? Be careful with “natural Ozempic” claims. The phrase can be misleading.',
    faqEntries: [
      {
        question: 'Are "natural Ozempic" supplements safe?',
        answer: 'Be careful with "natural Ozempic" claims. The phrase can be misleading.',
      },
    ],
  };
  const findings = checkFaq(record, { severities });
  assert.equal(findings.length, 0, "curly vs straight quotes alone must not fail the FAQ check");
});

test("DEV-04: curly apostrophes (typographic) also normalise correctly", () => {
  const record = {
    httpStatus: 200,
    bodyText: "Can’t I just take a supplement instead? No, supplements aren’t regulated the same way.",
    faqEntries: [{ question: "Can't I just take a supplement instead?", answer: "No, supplements aren't regulated the same way." }],
  };
  const findings = checkFaq(record, { severities });
  assert.equal(findings.length, 0);
});

test("DEV-04: a genuinely missing question still fails", () => {
  const record = {
    httpStatus: 200,
    bodyText: "This page says nothing about the topic asked.",
    faqEntries: [{ question: "Is this question visible anywhere?", answer: "No." }],
  };
  const findings = checkFaq(record, { severities });
  assert.equal(findings.length, 1);
  assert.equal(findings[0].rule, "FAQ_NOT_VISIBLE");
});

test("DEV-04: a genuinely different answer (not just punctuation) still fails as a mismatch", () => {
  const record = {
    httpStatus: 200,
    bodyText: "Is this safe? Yes, completely safe with no caveats at all.",
    faqEntries: [{ question: "Is this safe?", answer: "No, this carries significant risk." }],
  };
  const findings = checkFaq(record, { severities });
  assert.equal(findings.length, 1);
  assert.equal(findings[0].rule, "FAQ_ANSWER_MISMATCH");
});
