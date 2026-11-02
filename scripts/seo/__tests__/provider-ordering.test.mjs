import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register(pathToFileURL("./scripts/seo/__tests__/helpers/ts-alias-loader.mjs").href, import.meta.url);
const ord = await import("@/lib/compare/provider-ordering.ts");
const providers = await import("@/lib/data/providers.ts");
const mj = await import("@/lib/data/mounjaro-uk-compare-providers.ts");

const { orderProviders, totalPrice, ORDERING_RULES_SUMMARY } = ord;

/** Source with comments and string literals removed, so only identifiers and logic are scanned. */
function codeOnly(text) {
  return text
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/[^\n]*/g, "")
    .replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`/g, '""');
}

const rows = [
  { name: "Bravo", retail: 100, deliveryFee: 5, rating: 4.5 },
  { name: "Alpha", retail: 100, deliveryFee: 0, rating: 4.7 },
  { name: "Charlie", retail: 90, deliveryFee: 10, rating: 4.7 },
  { name: "Delta", retail: null, deliveryFee: 0, rating: 4.9 },
  { name: "Echo", retail: 95, deliveryFee: null, rating: 4.0 },
];
const names = (rule, dir) => orderProviders(rows, (r) => r, rule, dir).map((r) => r.name);

test("default and alphabetical order are A-Z, reversible", () => {
  assert.deepEqual(names("alphabetical", "asc"), ["Alpha", "Bravo", "Charlie", "Delta", "Echo"]);
  assert.deepEqual(names("alphabetical", "desc"), ["Echo", "Delta", "Charlie", "Bravo", "Alpha"]);
});

test("retail price order: ties go A-Z, providers with no price go last in both directions", () => {
  assert.deepEqual(names("retail-price", "asc"), ["Charlie", "Echo", "Alpha", "Bravo", "Delta"]);
  assert.deepEqual(names("retail-price", "desc"), ["Alpha", "Bravo", "Echo", "Charlie", "Delta"]);
});

test("total price adds the standard delivery fee and never guesses a missing fee", () => {
  assert.equal(totalPrice(rows[0]), 105);
  assert.equal(totalPrice(rows[3]), null);
  assert.equal(totalPrice(rows[4]), null);
  // Alpha 100, Bravo 105, Charlie 100, then providers without a total.
  assert.deepEqual(names("total-price", "asc"), ["Alpha", "Charlie", "Bravo", "Delta", "Echo"]);
});

test("rating order ties go A-Z", () => {
  assert.deepEqual(names("rating", "desc"), ["Delta", "Alpha", "Charlie", "Bravo", "Echo"]);
});

test("the same data always gives the same order, whatever order it arrives in", () => {
  const shuffled = [rows[3], rows[0], rows[4], rows[2], rows[1]];
  for (const rule of ["alphabetical", "retail-price", "total-price", "rating"]) {
    for (const dir of ["asc", "desc"]) {
      assert.deepEqual(
        orderProviders(shuffled, (r) => r, rule, dir).map((r) => r.name),
        names(rule, dir),
        `${rule} ${dir}`,
      );
    }
  }
});

test("ordering input excludes anything commercial and ordering code never reads it", () => {
  const keys = ["name", "retail", "deliveryFee", "rating"];
  for (const r of rows) assert.deepEqual(Object.keys(r), keys);
  const src = codeOnly(readFileSync("src/lib/compare/provider-ordering.ts", "utf8"));
  assert.ok(!/(affiliate|commission|offer|featured|sponsor|paid|promo)/i.test(src), "no commercial inputs in code");
  assert.match(ORDERING_RULES_SUMMARY, /never influenced by commission/);
});

test("no paid or featured placement logic in the tables or the sort module", () => {
  for (const file of [
    "src/components/mounjaro/MounjaroUkCompareTable.tsx",
    "src/components/wegovy/WegovyUkCompareTable.tsx",
    "src/lib/compare/provider-ordering.ts",
  ]) {
    const text = codeOnly(readFileSync(file, "utf8"));
    assert.ok(!/\.(offers|affiliate)\b/.test(text), `${file} must not read offers or affiliate data`);
    assert.ok(!/(commission|sponsored|paidPlacement|pinned)/i.test(text), `${file} must not reference paid placement`);
  }
  // A paid-placement banner existed unused; it must not come back unnoticed.
  assert.throws(() => readFileSync("src/components/compare/FeaturedProviderBanner.tsx", "utf8"));
});

test("every provider has a delivery fee and the seeded A-Z order is stable", () => {
  for (const p of providers.PROVIDERS) assert.ok(p.standardDeliveryFee >= 0, p.id);
  const ordered = orderProviders(
    mj.MOUNJARO_UK_COMPARE_PROVIDERS,
    (p) => ({ name: p.name, retail: p.headlineFrom, deliveryFee: providers.standardDeliveryFee(p.id), rating: p.rating }),
    "alphabetical",
    "asc",
  ).map((p) => p.name);
  assert.deepEqual(ordered, [...ordered].sort((a, b) => a.localeCompare(b, "en-GB", { sensitivity: "base" })));
});
