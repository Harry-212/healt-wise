import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { register } from "node:module";
import { pathToFileURL } from "node:url";

// Tasks 114 and 115: the Foundayo and Wegovy pill pages stay unpublished drafts and
// their datasets hold only active partners.
register(pathToFileURL("./scripts/seo/__tests__/helpers/ts-alias-loader.mjs").href, import.meta.url);
const rows = await import("@/lib/data/pill-price-rows.ts");
const providers = await import("@/lib/data/providers.ts");
const { buildFoundayoPriceCopy, providerCount } = await import("@/lib/data/foundayo-price-copy.ts");
const { FOUNDAYO_DOSES, WEGOVY_PILL_DOSES } = await import("@/lib/data/pill-prices.ts");

const DRAFT_PAGES = [
  "src/app/foundayo-price-comparison/page.tsx",
  "src/app/wegovy-pill-price-comparison/page.tsx",
  "src/app/(informational)/foundayo-faqs/page.tsx",
];

test("draft pill datasets contain only active partners, named from the central data", () => {
  for (const [label, list] of [["foundayo", rows.FOUNDAYO_PRICE_ROWS], ["wegovy pill", rows.WEGOVY_PILL_PRICE_ROWS]]) {
    assert.ok(list.length > 0, `${label} dataset is empty`);
    for (const r of list) {
      const provider = providers.getActiveProvider(r.providerId);
      assert.ok(provider, `${label}: ${r.providerId} is not an active partner`);
      assert.equal(r.provider, provider.name, `${label}: name comes from the provider data`);
    }
    const ids = list.map((r) => r.providerId);
    assert.equal(new Set(ids).size, ids.length, `${label}: one row per partner`);
  }
});

test("every row has a price for each of its doses and every dose has evidence", () => {
  for (const r of rows.FOUNDAYO_PRICE_ROWS) {
    assert.equal(r.prices.length, FOUNDAYO_DOSES.length, `foundayo ${r.providerId}`);
    assert.ok(r.prices.every((p) => typeof p === "number" && p > 0), `foundayo ${r.providerId} has an unresolved dose`);
    assert.ok(["pharmacy", "comparison"].includes(r.source));
  }
  for (const r of rows.WEGOVY_PILL_PRICE_ROWS) {
    assert.equal(r.prices.length, WEGOVY_PILL_DOSES.length, `wegovy pill ${r.providerId}`);
    assert.ok(r.prices.every((p) => typeof p === "number" && p > 0), `wegovy pill ${r.providerId} has an unresolved dose`);
  }
});

test("the drafts stay noindex, out of the sitemap and out of navigation", () => {
  for (const file of DRAFT_PAGES) {
    assert.match(readFileSync(file, "utf8"), /robots: \{ index: false, follow: false \}/, `${file} must stay noindex`);
  }
  const sitemap = readFileSync("src/app/sitemap.ts", "utf8");
  for (const path of ["/foundayo-price-comparison", "/wegovy-pill-price-comparison", "/foundayo-faqs"]) {
    assert.ok(!sitemap.includes(`"${path}"`), `${path} must not be in the sitemap`);
  }
});

test("draft page text names no provider outside the dataset", () => {
  const banned = ["Medicine Marketplace", "Medino", "Boots", "Superdrug", "Zava", "Pharmacy2U", "Ashcroft", "Curely", "Dotor", "comparewegovyprices"];
  for (const file of DRAFT_PAGES.slice(0, 2).concat(["src/lib/data/foundayo-price-copy.ts", "src/lib/data/wegovy-pill-price-copy.ts"])) {
    const text = readFileSync(file, "utf8");
    for (const name of banned) assert.ok(!text.includes(name), `${file} still names ${name}`);
    assert.ok(!/\b15 (UK )?providers\b/.test(text), `${file} still states 15 providers`);
  }
});

test("the Foundayo copy follows the rows: counts, prices and names are never typed", () => {
  const one = buildFoundayoPriceCopy(rows.FOUNDAYO_PRICE_ROWS);
  assert.match(one.description, new RegExp(`from ${providerCount(rows.FOUNDAYO_PRICE_ROWS.length)} by dose`));
  assert.ok(one.costAnswer.includes("£79.99") && one.costAnswer.includes("£139.99"));

  const pricey = { providerId: "reach-online-pharmacy", provider: "Reach Online Pharmacy", source: "comparison", prices: [90, 95, 100, 110, 140, 150] };
  const three = buildFoundayoPriceCopy([...rows.FOUNDAYO_PRICE_ROWS, pricey, { ...pricey, providerId: "x", provider: "Alpha", source: "pharmacy", prices: [99, 99, 99, 99, 99, 99] }]);
  assert.match(three.description, /from 3 providers by dose/);
  assert.ok(three.cheapestAnswer.includes("Solira"), "lowest provider is named from the rows");
  assert.ok(three.hasComparisonRows);
  assert.ok(three.sourcesText.includes("independent comparison site"));
  assert.equal(providerCount(1), "1 provider");
});
