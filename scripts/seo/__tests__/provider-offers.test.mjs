import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register(pathToFileURL("./scripts/seo/__tests__/helpers/ts-alias-loader.mjs").href, import.meta.url);
const providers = await import("@/lib/data/providers.ts");
const { AFFILIATE_PARTNERS_MAP } = await import("@/lib/data/affiliate-partners.ts");
const mj = await import("@/lib/data/mounjaro-uk-compare-providers.ts");
const wg = await import("@/lib/data/wegovy-uk-compare-providers.ts");

const { PROVIDERS, validateProviders, offerCodes, offerTermsText, offersWithUnconfirmedTerms, dossierOfferProps } =
  providers;

test("the card text built from offers is exactly what the site showed before", () => {
  const expected = {
    "pharmacy-me": ["hw360", undefined, "Use code hw360"],
    "reach-online-pharmacy": ["Welcome10health", undefined, "Use code Welcome10health"],
    dosedirect: [undefined, undefined, "Free delivery included"],
    "i-prescribe": ["First10", "HW360", "Code First10 for £10 off first order · Code HW360 on repeat orders"],
    shemed: ["HEALTH20", undefined, "20% off first order with code HEALTH20 · Free blood test & delivery"],
    solira: [undefined, undefined, "Pharmacist-led care · Tracked chilled delivery"],
  };
  for (const [id, [code, secondary, perk]] of Object.entries(expected)) {
    const info = AFFILIATE_PARTNERS_MAP[id];
    assert.equal(info.code, code, `${id} code`);
    assert.equal(info.secondaryCode, secondary, `${id} secondary code`);
    assert.equal(info.perkSummary, perk, `${id} perk summary`);
  }
});

test("offers are valid and carry no price", () => {
  assert.deepEqual(validateProviders(), []);
  const base = PROVIDERS[0];
  const withPrice = { ...base, offers: [{ kind: "discount-code", code: "X", summary: "x", price: 99 }] };
  assert.ok(validateProviders([withPrice]).some((p) => p.includes("hold no prices")), "price key is rejected");
  const noCode = { ...base, offers: [{ kind: "discount-code", summary: "x" }] };
  assert.ok(validateProviders([noCode]).some((p) => p.includes("needs a code")), "code is required");
});

test("retail prices stay retail: every headline price is the lowest standard dose price", () => {
  for (const p of mj.MOUNJARO_UK_COMPARE_PROVIDERS) {
    assert.equal(p.headlineFrom, Math.min(...Object.values(p.prices)), `mounjaro ${p.id}`);
  }
  for (const p of wg.WEGOVY_UK_COMPARE_PROVIDERS) {
    const nums = Object.values(p.prices).filter((v) => typeof v === "number");
    assert.equal(p.headlineFrom, Math.min(...nums), `wegovy ${p.id}`);
  }
});

test("price and ranking data never read offers", () => {
  for (const file of [
    "src/lib/data/mounjaro-uk-compare-providers.ts",
    "src/lib/data/wegovy-uk-compare-providers.ts",
    "src/lib/data/compare-store.ts",
    "src/lib/data/provider-price-summary.ts",
    "src/lib/data/cheapest-options-page-data.ts",
  ]) {
    const text = readFileSync(file, "utf8");
    assert.ok(!/\b(offerCodes|offerPerkSummary|dossierOfferProps|\.offers)\b/.test(text), `${file} must not read offers`);
  }
});

test("scraper discount codes match the offers shown on the site", () => {
  const { providers: sources } = JSON.parse(readFileSync("scripts/price-scraper/sources.json", "utf8"));
  for (const [id, cfg] of Object.entries(sources)) {
    const code = cfg.affiliateDiscount?.code;
    if (!code) continue;
    const provider = PROVIDERS.find((p) => p.id === id);
    assert.ok(provider, `${id} is in sources.json but not in the provider data`);
    assert.ok(offerCodes(provider).includes(code), `${id}: scraper code ${code} is not an offer`);
  }
});

test("offer terms never claim more than is known", () => {
  const unconfirmed = offersWithUnconfirmedTerms().map((o) => o.providerId).sort();
  assert.deepEqual(unconfirmed, ["pharmacy-me", "reach-online-pharmacy"], "offers still awaiting confirmed terms");
  assert.equal(offerTermsText({ kind: "discount-code", summary: "s", code: "C" }), "Confirm the terms at checkout.");
  assert.match(dossierOfferProps("shemed").offerTerms[0], /First order only/);
  assert.match(dossierOfferProps("i-prescribe").offerTerms[1], /Repeat orders only/);
  assert.deepEqual(dossierOfferProps("solira").offerTerms, []);
});
