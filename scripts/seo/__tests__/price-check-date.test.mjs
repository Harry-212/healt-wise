import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { register } from "node:module";
import { pathToFileURL } from "node:url";

// Imports the REAL .ts source (see pharmacy-website-id.test.mjs).
register(pathToFileURL("./scripts/seo/__tests__/helpers/ts-alias-loader.mjs").href, import.meta.url);
const { PRICE_CHECK_DATE_ISO, PRICE_CHECK_DATE_LONG, PRICE_CHECK_DATE_SHORT, dateModifiedWithPriceCheck } = await import("@/lib/data/price-check.ts");
const mj = await import("@/lib/data/mounjaro-uk-compare-providers.ts");
const wg = await import("@/lib/data/wegovy-uk-compare-providers.ts");

test("the central price-check date formats consistently", () => {
  assert.match(PRICE_CHECK_DATE_ISO, /^\d{4}-\d{2}-\d{2}$/);
  const [y, m, d] = PRICE_CHECK_DATE_ISO.split("-").map(Number);
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  assert.equal(PRICE_CHECK_DATE_LONG, `${d} ${months[m - 1]} ${y}`);
  assert.equal(PRICE_CHECK_DATE_SHORT, `${d} ${months[m - 1].slice(0, 3)} ${y}`);
});

test("Mounjaro and Wegovy seeds take their page and row dates from the central field", () => {
  assert.equal(mj.MOUNJARO_UK_COMPARE_LAST_UPDATED, PRICE_CHECK_DATE_LONG);
  assert.equal(wg.WEGOVY_UK_COMPARE_LAST_UPDATED, PRICE_CHECK_DATE_LONG);
  for (const p of mj.MOUNJARO_UK_COMPARE_PROVIDERS) assert.equal(p.updatedLabel, PRICE_CHECK_DATE_SHORT, `mounjaro ${p.id}`);
  for (const p of wg.WEGOVY_UK_COMPARE_PROVIDERS) assert.equal(p.updatedLabel, PRICE_CHECK_DATE_SHORT, `wegovy ${p.id}`);
});

test("page dateModified is never earlier than the price check", () => {
  assert.equal(dateModifiedWithPriceCheck("2026-09-25"), PRICE_CHECK_DATE_ISO);
  assert.equal(dateModifiedWithPriceCheck(PRICE_CHECK_DATE_ISO), PRICE_CHECK_DATE_ISO);
  assert.equal(dateModifiedWithPriceCheck("2099-01-01"), "2099-01-01");
});

// No page may hard-code the central date: the guard that makes "one source" stick.
const SRC = join(process.cwd(), "src");
const ALLOWED = new Set([join("src", "lib", "data", "price-check.ts")]);
const FORBIDDEN = [PRICE_CHECK_DATE_ISO, PRICE_CHECK_DATE_LONG, PRICE_CHECK_DATE_SHORT];

function* sourceFiles(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) yield* sourceFiles(full);
    else if (/\.(ts|tsx)$/.test(name)) yield full;
  }
}

test("no source file hard-codes the central price-check date", () => {
  const offenders = [];
  for (const file of sourceFiles(SRC)) {
    const rel = relative(process.cwd(), file);
    if (ALLOWED.has(rel) || rel.split(sep).includes("blog")) continue;
    const text = readFileSync(file, "utf8")
      .split("\n")
      .filter((l) => !/^\s*(\/\/|\*|\/\*)/.test(l))
      .join("\n");
    for (const needle of FORBIDDEN) if (text.includes(needle)) offenders.push(`${rel}: ${needle}`);
  }
  assert.deepEqual(offenders, [], "import from @/lib/data/price-check instead of typing the date");
});
