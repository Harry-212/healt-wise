import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { STANDARD_PRICE_RULE } from "../lib/standard-price-rule.mjs";

const read = (p) => fs.readFileSync(new URL(`../../../${p}`, import.meta.url), "utf8");

test("the standard-price rule keeps its agreed elements", () => {
  for (const part of [
    "normal publicly available price",
    "one treatment unit or monthly supply",
    "without a promotional code, new-customer discount or long-term commitment",
    "Delivery and compulsory fees are displayed separately where verified",
    "Introductory, subscription and discount-code prices may be shown separately with their conditions",
  ]) {
    assert.ok(STANDARD_PRICE_RULE.includes(part), `missing: ${part}`);
  }
});

test("methodology page, admin dashboard and pricing docs carry the exact rule", () => {
  for (const file of [
    "src/app/(informational)/methodology/MethodologyClient.tsx",
    "src/app/admin-dashboard/AdminDashboard.tsx",
    "docs/pricing-data.md",
  ]) {
    assert.ok(read(file).includes(STANDARD_PRICE_RULE), `${file} does not contain the standard-price rule`);
  }
});

test("providers with an affiliate code are configured so the code price is never the site price", () => {
  const { providers } = JSON.parse(read("scripts/price-scraper/sources.json"));
  for (const id of ["reach-online-pharmacy", "pharmacy-me", "dosedirect"]) {
    const d = providers[id]?.affiliateDiscount;
    assert.ok(d && (d.type === "percent" || d.type === "amount") && d.value > 0, `${id} needs an affiliateDiscount`);
  }
});
