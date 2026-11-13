import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Jeff's final London content (12 Nov 2026): one price-check date on the whole page, a cost FAQ that
// matches the table, FAQ schema added later, and the approved price-verification wording.
const read = (p) => readFileSync(p, "utf8");
const LONDON = read("src/components/locations/content/LondonLocationContent.tsx");
const DATA = read("src/lib/content/uk-location-article-data.ts");
const PAGE = read("src/app/blog/[slug]/page.tsx");

test("the London meta description takes its check date from the central date, not typed text", () => {
  assert.match(DATA, /Checked \$\{PRICE_CHECK_DATE_LONG\}\.`;/);
  assert.ok(!/Checked 12 November 2026/.test(DATA));
});

test("no price-check date is typed into the London page or its FAQ data", () => {
  assert.ok(!/On 12 November 2026/.test(LONDON + DATA));
  assert.ok(!/\b(31 October|12 November) 2026\b/.test(LONDON.replace(/Last updated: 12 November 2026\./, "")), "only the page's own 'Last updated' line may carry a typed date");
});

test("the cost FAQ (10.4) is built from the live table figures, so it cannot differ from section 5", () => {
  assert.match(LONDON, /const faqs = useMemo/);
  assert.match(LONDON, /mounjaroStart: formatAmount\(stats\.mjStart\.minVal\)/);
  assert.match(LONDON, /wegovyStart: formatAmount\(stats\.wgStart\.minVal\)/);
  assert.match(LONDON, /On \$\{PRICE_CHECK_DATE_LONG\}, the lowest standard price we found was \$\{lowest\.mounjaroStart\}/);
  assert.ok(!/\bconst FAQS\b/.test(LONDON), "no typed FAQ list left");
});

test("the FAQPage schema is held back for London only", () => {
  assert.match(PAGE, /const faqSchemaOnHold = loc\.slug === "london";/);
  assert.match(PAGE, /faqSchemaOnHold \? null : locationFaqJsonLd\(faqItems\)/);
  assert.match(PAGE, /\{faqLd \? \(/);
});

test("the approved price-verification wording block is on the page", () => {
  assert.match(LONDON, /<PriceVerificationDisclaimer \/>/);
});
