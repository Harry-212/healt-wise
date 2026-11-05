import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Tasks 126, 133 and 81: selected-partner directory wording and the approved commission disclosure.
const read = (p) => readFileSync(p, "utf8").replace(/\s+/g, " ");

test("Task 126: /pharmacies uses the approved title, H1 and description", () => {
  const t = read("src/app/pharmacies/page.tsx");
  assert.ok(t.includes('const TITLE = "Weight Loss Treatment Partner Pharmacies UK";'));
  assert.ok(t.includes("Compare Our UK Partner Pharmacies"));
  assert.ok(t.includes('"Review selected UK partner pharmacies offering private Mounjaro, Wegovy and other weight-management treatments. Compare registration details, support, delivery and prices."'));
  assert.ok(!t.includes("Every UK weight loss pharmacy"));
  assert.ok(!t.includes("All UK Weight Loss Pharmacies"));
  assert.ok(t.includes("activeProviders()") && t.includes("{providers.length}"));
});

test("Task 133: whole-market phrases are gone and the homepage range is dynamic", () => {
  const cost = read("src/components/ui/CostSection.tsx");
  assert.ok(!cost.includes("£100") && !cost.includes("£154") && !cost.includes("£299"));
  assert.ok(cost.includes("{mounjaroTopHigh}"));
  const mj = read("src/app/mounjaro-price-comparison/page.tsx");
  assert.ok(!mj.includes("Cheapest Prices by Dose") && !mj.includes("Cheapest Price by Dose"));
  assert.ok(!mj.includes("at every pharmacy"));
  assert.ok(!read("src/components/mounjaro/MounjaroCheapestSection.tsx").includes("cheapest Mounjaro online in"));
  assert.ok(!read("src/components/wegovy/WegovyCheapestSection.tsx").includes("cheapest Wegovy online in"));
  const faq = read("src/lib/seo/cheapest-options-page-seo.ts");
  assert.ok(!faq.includes("What is the cheapest weight loss injection in the UK?"));
});

test("Task 81: the three policy pages carry the approved commission paragraph", () => {
  const approved = "Healthwise360 may earn commission when visitors use some partner links. Commercial relationships do not determine the ordering of providers in our price-sorted comparison tables. Providers cannot pay for a higher ranking. Promotional prices and discount codes are displayed separately from standard retail prices.";
  for (const f of [
    "src/app/(informational)/methodology/MethodologyClient.tsx",
    "src/app/(informational)/editorial-policy/page.tsx",
    "src/lib/seo/ssot-content.ts",
    "src/lib/seo/ssot-page-seo.ts",
  ]) {
    const t = read(f);
    assert.ok(t.includes(approved), f);
    assert.ok(!t.includes("does not currently earn commission"), f);
  }
  assert.ok(!read("src/components/compare/WegovyMounjaroLongFormContent.tsx").includes("does not currently earn commission"));
});
