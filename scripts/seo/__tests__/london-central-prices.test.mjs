import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// The London guide used typed price tables, so admin price updates never reached it. The tables are now built
// from the central price rows, which the server passes in from the live store.
const LONDON = readFileSync("src/components/locations/content/LondonLocationContent.tsx", "utf8");
const RENDERER = readFileSync("src/components/locations/LocationContentRenderer.tsx", "utf8");

test("London price tables hold no typed prices", () => {
  assert.ok(!/MOUNJARO_PRICES|WEGOVY_PRICES/.test(LONDON));
  assert.ok(!/£\d/.test(LONDON.replace(/\/\/.*$/gm, "")), "no typed £ amounts in the component");
});

test("London tables read the central price rows", () => {
  assert.ok(LONDON.includes("MOUNJARO_UK_COMPARE_PROVIDERS"));
  assert.ok(LONDON.includes("WEGOVY_UK_COMPARE_PROVIDERS"));
  assert.ok(LONDON.includes("row.prices[k]"));
});

test("the page hands the live store rows to the London guide", () => {
  assert.ok(RENDERER.includes("getMounjaroCompareProviders()"));
  assert.ok(RENDERER.includes("getWegovyCompareProviders()"));
});
