import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (f) => readFileSync(f, "utf8");

// Task 151: Jeff approved adding only "Healthwise360 is free to use." on 13 November 2026,
// and only on the Wegovy comparison page.
test("the approved sentence is added in the coverage note, ahead of the existing sentence", () => {
  const note = read("src/components/compare/ComparisonCoverageNote.tsx");
  assert.match(note, /freeToUse \? "Healthwise360 is free to use\. " : null/);
  assert.ok(
    note.indexOf("Healthwise360 is free to use.") < note.indexOf("We compare selected partner pharmacies, rather than the whole UK market."),
  );
});

test("only the Wegovy comparison page switches it on", () => {
  assert.match(read("src/app/wegovy-price-comparison/page.tsx"), /<ComparisonCoverageNote className="mt-6" freeToUse \/>/);
  for (const f of [
    "src/app/mounjaro-price-comparison/page.tsx",
    "src/components/ui/PriceSnapshotSection.tsx",
    "src/components/compare/WegovyMounjaroLongFormContent.tsx",
  ]) {
    const src = read(f);
    assert.ok(!/freeToUse/.test(src), `${f} must not show the sentence`);
  }
});
