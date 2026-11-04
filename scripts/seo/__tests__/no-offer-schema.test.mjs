import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

// Healthwise360 is an independent comparison site, not a shop or pharmacy. Schema.org
// Offer / Product markup is a compliance error (flagged by PenSEO) without written legal
// approval, so no JSON-LD builder may emit it.
function* jsonLdFiles(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) yield* jsonLdFiles(full);
    else if (/json-ld.*\.ts$/.test(name)) yield full;
  }
}

test("no JSON-LD builder emits an Offer, offers or Product entity", () => {
  const offenders = [];
  for (const file of jsonLdFiles(join(process.cwd(), "src"))) {
    const text = readFileSync(file, "utf8");
    if (/"@type":\s*"(Offer|AggregateOffer|Product)"|\boffers\s*:/.test(text)) {
      offenders.push(relative(process.cwd(), file).replaceAll("\\", "/"));
    }
  }
  assert.deepEqual(offenders, []);
});

test("the BMI calculator schema stays free without an Offer", () => {
  const t = readFileSync("src/lib/seo/bmi-calculator-json-ld.ts", "utf8");
  assert.ok(t.includes("isAccessibleForFree: true"));
  assert.ok(!/"@type":\s*"Offer"/.test(t));
});
