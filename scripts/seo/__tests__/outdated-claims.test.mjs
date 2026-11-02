import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

// Guards the Task 112 fixes: the site compares selected partner providers, so no
// page may state a fixed whole-market provider count, and profile prose must read
// prices from the data instead of repeating them.

function* sourceFiles(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) yield* sourceFiles(full);
    else if (/\.(ts|tsx)$/.test(name)) yield full;
  }
}

// Unpublished (noindex) drafts that still describe the old 15-provider Foundayo
// dataset. Task 114 rebuilds them from approved partners only; remove this
// entry then so the guard covers them too.
const DRAFTS_AWAITING_TASK_114 = [join("src", "app", "foundayo-price-comparison")];

test("no source file states a fixed double or triple digit provider count", () => {
  const count =
    /\b(?:more than |over )?\d{2,3}\+? (?:GPhC[- ]registered )?(?:UK )?(?:online )?(?:pharmacies|providers)\b/i;
  const offenders = [];
  for (const file of sourceFiles(join(process.cwd(), "src"))) {
    if (DRAFTS_AWAITING_TASK_114.some((d) => relative(process.cwd(), file).startsWith(d))) continue;
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((line, i) => {
      if (/^\s*(\/\/|\*|\/\*)/.test(line)) return;
      if (count.test(line)) offenders.push(`${relative(process.cwd(), file)}:${i + 1}: ${line.trim().slice(0, 110)}`);
    });
  }
  assert.deepEqual(offenders, [], "use the live partner count or neutral wording");
});

test("profile prose does not repeat prices that live in the data", () => {
  const iPrescribe = readFileSync("src/components/pharmacies/content/IPrescribePharmacyContent.tsx", "utf8");
  for (const literal of ["£160", "£340", "£129.99", "£229.99", "October 2026 price review"]) {
    assert.ok(!iPrescribe.includes(literal), `i-Prescribe prose hard-codes ${literal}`);
  }
  const sheMed = readFileSync("src/components/pharmacies/content/SheMedPharmacyContent.tsx", "utf8");
  assert.ok(!sheMed.includes("£229 standard retail"), "SheMed Mounjaro standard retail is hard-coded");
  assert.ok(!sheMed.includes("£139 standard retail"), "SheMed Wegovy standard retail is hard-coded");
});

test("the best-place article no longer ranks or names removed providers (Task 113)", () => {
  const dir = "src/app/blog/best-place-to-start-weight-loss-treatment-online-uk/";
  const text = (readFileSync(dir + "ArticleClient.tsx", "utf8") + readFileSync(dir + "page.tsx", "utf8")).toLowerCase();
  for (const needle of [
    "shortlist",
    "how we rank",
    "pharmacy express",
    "swift doctor",
    "pharmica",
    "dr weightmans",
    "care pharmacy",
    "ashcroft",
    "best online weight loss providers",
    "20 september 2026",
  ]) {
    assert.ok(!text.includes(needle), `ranking content is back: "${needle}"`);
  }
});
