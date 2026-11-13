import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Nov 2026 homepage and London copy: approved commission wording, one central price-check date,
// no clinical-review implication and no keyword-list paragraph.
const read = (p) => readFileSync(p, "utf8").replace(/\s+/g, " ");
const HOME = "src/components/home/HomeContentNov2026.tsx";
const LONDON = "src/components/locations/content/LondonLocationContent.tsx";
const APPROVED = "Healthwise360 may earn commission when visitors use some partner links. Commercial relationships do not determine the ordering of providers in our price-sorted comparison tables. Providers cannot pay for a higher ranking. Promotional prices and discount codes are displayed separately from standard retail prices.";

test("homepage and London page use the approved commission wording", () => {
  assert.ok(read(HOME).includes(APPROVED));
  assert.ok(read(LONDON).includes(APPROVED));
  for (const f of [HOME, LONDON]) {
    assert.ok(!/pay us a commission|at no extra cost to you|may earn a commission/.test(read(f)), f);
  }
});

test("London prices use the central price-check date, not typed dates", () => {
  const t = read(LONDON);
  assert.ok(t.includes('import { PRICE_CHECK_DATE_LONG } from "@/lib/data/price-check"'));
  assert.ok(!t.includes("27 September to 1 November"));
  assert.ok(t.includes("checked on {PRICE_CHECK_DATE_LONG}"));
});

test("London page does not claim an editorial review", () => {
  assert.ok(!/Reviewed by/.test(read(LONDON)));
});

test("homepage has no keyword-variation paragraph", () => {
  const t = read(HOME);
  assert.ok(!t.includes("other ways people search"));
  assert.ok(!t.includes("GLP 1 price comparison UK"));
  assert.ok(!t.includes("weight loss injection price checker UK"));
});

test("London SEO title is Jeff's 57-character title, with no brand suffix typed into the string", () => {
  const t = read("src/lib/content/uk-location-article-data.ts");
  assert.ok(t.includes('return "Weight Loss Treatment in London: Online Partners Compared";'));
  assert.equal("Weight Loss Treatment in London: Online Partners Compared".length, 57);
  assert.ok(!t.includes("in London | Healthwise360"));
  // The page applies it as an absolute title so the 57 characters are not extended by the site template.
  assert.ok(read("src/app/blog/[slug]/page.tsx").includes('loc.slug === "london" ? { absolute: title } : title'));
});
