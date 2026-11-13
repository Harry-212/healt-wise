import { test } from "node:test";
import assert from "node:assert/strict";
import { register } from "node:module";
import { pathToFileURL } from "node:url";
import { readFileSync } from "node:fs";

register(pathToFileURL("./scripts/seo/__tests__/helpers/ts-alias-loader.mjs").href, import.meta.url);

const read = (f) => readFileSync(f, "utf8");

// Jeff, 13 Nov 2026: one reusable text block (wording + dynamic date) on the pages, so a wording
// change is made in one place only.
const BLOCK = "src/components/ui/PriceVerificationDisclaimer.tsx";

test("the block takes its wording and its default date from the central price-check file only", () => {
  const src = read(BLOCK);
  assert.match(src, /STANDARD_PRICE_VERIFICATION_TEXT = PRICE_CHECK_FREQUENCY_TEXT/);
  assert.match(src, /checkDate === undefined \? PRICE_CHECK_DATE_LONG : checkDate/);
  assert.ok(!/Standard retail prices are reviewed monthly/.test(src), "the sentence must not be copied into the component");
});

test("the approved sentence is written out once in src (price-check.ts) and nowhere else", () => {
  const files = [
    "src/components/ui/PriceVerificationDisclaimer.tsx",
    "src/components/prices/PriceCheckNotice.tsx",
    "src/app/(informational)/methodology/MethodologyClient.tsx",
    "src/app/(informational)/editorial-policy/page.tsx",
    "src/components/compare/WegovyMounjaroLongFormContent.tsx",
    "src/lib/routes/compare-faqs.ts",
    "src/lib/seo/ssot-content.ts",
    "src/lib/seo/ssot-page-seo.ts",
    "src/lib/seo/mounjaro-json-ld.ts",
    "src/lib/seo/wegovy-json-ld.ts",
    "src/lib/seo/home-json-ld.ts",
    "src/lib/seo/compare-wegovy-mounjaro-json-ld.ts",
  ];
  for (const f of files) assert.ok(!/reviewed monthly using each partner/.test(read(f)), `${f} must import the sentence, not copy it`);
  assert.match(read("src/lib/data/price-check.ts"), /reviewed monthly using each partner pharmacy/);
});

test("the table notice is the same block, so the Mounjaro and Wegovy notices cannot drift", () => {
  assert.match(read("src/components/prices/PriceCheckNotice.tsx"), /<PriceVerificationDisclaimer/);
  for (const f of ["src/components/mounjaro/MounjaroUkCompareTable.tsx", "src/components/wegovy/WegovyUkCompareTable.tsx"]) {
    assert.match(read(f), /<PriceCheckNotice /, f);
  }
});
