import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// The homepage price table has three narrow columns (dose, lowest, highest). A fixed
// min-width made it wider than a 390px phone, hiding the Highest column off-screen.
const t = readFileSync("src/components/ui/PriceSnapshotSection.tsx", "utf8");

test("the homepage price table has no fixed minimum width that forces sideways scrolling", () => {
  assert.ok(!/min-w-\[\d+px\]/.test(t));
});

test("the table still shows Lowest and Highest only", () => {
  assert.ok(t.includes(">Lowest<") && t.includes(">Highest<"));
  assert.ok(!t.includes(">Typical<"));
});
