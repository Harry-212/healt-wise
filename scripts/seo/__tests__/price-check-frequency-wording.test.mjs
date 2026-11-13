import { test } from "node:test";
import assert from "node:assert/strict";
import { register } from "node:module";
import { pathToFileURL } from "node:url";
import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

register(pathToFileURL("./scripts/seo/__tests__/helpers/ts-alias-loader.mjs").href, import.meta.url);

const { PRICE_CHECK_FREQUENCY_TEXT, PRICE_CHECK_DATE_LONG } = await import("@/lib/data/price-check.ts");
const { getCompareFaqsForSlug, compareFaqPageJsonLd } = await import("@/lib/routes/compare-faqs.ts");
const { SSOT_PAGE_FAQS, ssotPageJsonLd } = await import("@/lib/seo/ssot-page-seo.ts");
const { SSOT_PRICING, SSOT_DESCRIPTIONS, PUBLISHER_GUIDANCE } = await import("@/lib/seo/ssot-content.ts");

// Task 142: Option C, approved by Harry on 11 November 2026. Do not edit without a new approval.
const APPROVED =
  "Standard retail prices are reviewed monthly using each partner pharmacy’s website and information supplied directly by the pharmacy. The date shown is the date of the latest completed price verification. Prices may change between checks, so confirm the final price and any additional charges with the pharmacy before ordering.";

const read = (f) => readFileSync(f, "utf8");

test("the central frequency constant is the exact approved Option C wording", () => {
  assert.equal(PRICE_CHECK_FREQUENCY_TEXT, APPROVED);
  assert.ok(!/\b\d{1,2} (January|February|March|April|May|June|July|August|September|October|November|December)\b/.test(PRICE_CHECK_FREQUENCY_TEXT), "the wording must not hard-code a date");
  assert.ok(PRICE_CHECK_DATE_LONG.length > 0);
});

test("Wegovy vs Mounjaro FAQ and its FAQ schema carry the approved wording", () => {
  const items = getCompareFaqsForSlug("wegovy-vs-mounjaro", {
    wegovySixMonthsLow: "£1",
    mounjaroSixMonthsLow: "£1",
    wegovySixMonthsTypical: "£1",
    mounjaroSixMonthsTypical: "£1",
    wegovyStarterLow: "£1",
    mounjaroStarterLow: "£1",
    pricesChecked: PRICE_CHECK_DATE_LONG,
  });
  const faq = items.find((i) => i.q === "When were these prices checked?");
  assert.ok(faq, "frequency FAQ present");
  assert.ok(faq.a.includes(APPROVED));
  assert.ok(faq.a.includes(PRICE_CHECK_DATE_LONG), "date stays dynamic");
  const ld = JSON.stringify(compareFaqPageJsonLd(items));
  assert.ok(ld.includes(JSON.stringify(faq.a).slice(1, -1)), "schema answer matches the visible answer");
});

test("SSOT: pricing paragraph, descriptions, guidance, FAQ and FAQ schema use the approved wording", () => {
  assert.equal(SSOT_PRICING.paragraphs[0], APPROVED);
  assert.ok(SSOT_DESCRIPTIONS.extended.includes(APPROVED));
  assert.ok(PUBLISHER_GUIDANCE.some((g) => g.includes(APPROVED)));
  const faq = SSOT_PAGE_FAQS.find((f) => f.question === "How often are prices checked?");
  assert.ok(faq);
  assert.equal(faq.answer, APPROVED);
  const ld = JSON.stringify(ssotPageJsonLd("2026-11-12"));
  assert.ok(ld.includes(JSON.stringify(APPROVED).slice(1, -1)), "FAQPage JSON-LD carries the same answer");
});

test("Mounjaro and Wegovy frequency FAQs (visible and schema share one list) use the approved wording", () => {
  for (const file of ["src/lib/seo/mounjaro-json-ld.ts", "src/lib/seo/wegovy-json-ld.ts"]) {
    const src = read(file);
    assert.match(src, /question: "How often do you check (Mounjaro|Wegovy) prices\?",\s*answer:\s*PRICE_CHECK_FREQUENCY_TEXT,/, file);
  }
});

test("price notices near the tables, methodology and editorial policy use the approved wording", () => {
  assert.match(read("src/components/prices/PriceCheckNotice.tsx"), /PRICE_CHECK_SCHEDULE_TEXT = PRICE_CHECK_FREQUENCY_TEXT/);
  assert.match(read("src/components/ui/PriceVerificationDisclaimer.tsx"), /STANDARD_PRICE_VERIFICATION_TEXT = PRICE_CHECK_FREQUENCY_TEXT/);
  assert.match(read("src/app/(informational)/methodology/MethodologyClient.tsx"), /<PriceVerificationDisclaimer variant="inline"/);
  assert.match(read("src/app/(informational)/editorial-policy/page.tsx"), /^\s*PRICE_CHECK_FREQUENCY_TEXT,$/m);
  assert.match(read("src/components/compare/WegovyMounjaroLongFormContent.tsx"), /<PriceVerificationDisclaimer variant="inline" checkDate=\{pricesChecked\}/);
  assert.match(read("src/lib/seo/compare-wegovy-mounjaro-json-ld.ts"), /measurementTechnique:\s*PRICE_CHECK_FREQUENCY_TEXT/);
  assert.match(read("src/lib/seo/home-json-ld.ts"), /measurementTechnique:\s*PRICE_CHECK_FREQUENCY_TEXT/);
});

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(ts|tsx)$/.test(name)) out.push(p);
  }
  return out;
}

test("no conflicting price-check-frequency phrases remain in the site source", () => {
  const banned = [
    /first working day of every month/i,
    /1st working day of every month/i,
    /first week of (each|every) month/i,
    /typically checked monthly/i,
    /prices are typically checked/i,
    /we check every price every month/i,
    /checked directly with each pharmacy/i,
    /we review comparison information regularly/i,
  ];
  for (const file of walk("src")) {
    const src = read(file);
    for (const re of banned) assert.ok(!re.test(src), `${file} still contains ${re}`);
  }
});
