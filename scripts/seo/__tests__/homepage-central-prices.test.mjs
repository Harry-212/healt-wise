import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Homepage previously held typed Wegovy prices that drifted from the Wegovy comparison page.
// The prices are now computed dynamically from the central live comparison store.
const HOME = readFileSync("src/components/home/HomeContentNov2026.tsx", "utf8");
const PAGE = readFileSync("src/app/page.tsx", "utf8");

test("homepage reads central provider rows and does not hardcode conflicting Wegovy prices", () => {
  assert.ok(HOME.includes("WEGOVY_UK_COMPARE_PROVIDERS"));
  assert.ok(HOME.includes("MOUNJARO_UK_COMPARE_PROVIDERS"));
  assert.ok(!HOME.includes('price: "£80.99"'));
  assert.ok(!HOME.includes('price: "£136.99"'));
  assert.ok(!HOME.includes('price: "£194.99"'));
});

test("homepage passes live store rows to HomeContentNov2026", () => {
  assert.ok(PAGE.includes("getMounjaroCompareProviders()"));
  assert.ok(PAGE.includes("getWegovyCompareProviders()"));
  assert.ok(PAGE.includes("mounjaroProviders={getMounjaroCompareProviders()}"));
  assert.ok(PAGE.includes("wegovyProviders={getWegovyCompareProviders()}"));
});
