import { test } from "node:test";
import assert from "node:assert/strict";
import { extractStandardPrices, extractFromJsonLd, extractFromText, extractFromVariants, extractFromShopRecords } from "../lib/extract.mjs";

const prices = (r) => Object.fromEntries(Object.entries(r.doses).map(([d, v]) => [d, v.price]));

test("plain dose/price table (Asda/MedExpress style)", () => {
  const html = `<p>Dosage Price</p><ul><li>2.5mg £179.99</li><li>5mg £189.99</li><li>7.5mg £249.99</li>
    <li>10mg £279.99</li><li>12.5mg £299.99</li><li>15mg £309.99</li></ul>`;
  const r = extractStandardPrices(html, "mounjaro");
  assert.deepEqual(prices(r), { "2.5mg": 179.99, "5mg": 189.99, "7.5mg": 249.99, "10mg": 279.99, "12.5mg": 299.99, "15mg": 309.99 });
  assert.ok(Object.values(r.doses).every((d) => d.confidence === "high"));
});

const struckRows = ["2.5mg", "5mg", "7.5mg"]
  .map((d, i) => `<tr><td>${d}</td><td><span style="text-decoration: line-through">£${179 + i * 20}.00</span></td><td>£${143 + i * 16}.20</td><td>£8.95</td></tr>`)
  .join("");

test("struck price is standard when the table labels the lower price as limited (Superdrug style)", () => {
  const html = `<tr><th>Dose</th><th>Standard Price</th><th>New Patient Price</th><th>Value of points</th></tr>${struckRows}`;
  const r = extractFromText(html, "mounjaro");
  assert.deepEqual(prices(r), { "2.5mg": 179, "5mg": 199, "7.5mg": 219 });
  assert.match(r.doses["2.5mg"].method, /limited offer/);
});

test("unlabelled struck 'was' price is ignored; the selling price is standard (Zava style)", () => {
  const html = `<p>Dose ZAVA prices</p>${struckRows}`;
  const r = extractFromText(html, "mounjaro");
  assert.deepEqual(prices(r), { "2.5mg": 143.2, "5mg": 159.2, "7.5mg": 175.2 });
  assert.match(r.doses["5mg"].method, /sale price; was £199 ignored/);
});

test("two prices plus a 'Save' amount: highest non-save price, medium confidence (Zava style)", () => {
  const html = "Dose ZAVA prices 2.5mg £169.99 £148.99 Save £21.00 5mg £187.99 £178.99 Save £9.00 7.5mg £249.99 £238.99 Save £11.00";
  const r = extractFromText(html, "mounjaro");
  assert.deepEqual(prices(r), { "2.5mg": 169.99, "5mg": 187.99, "7.5mg": 249.99 });
  assert.equal(r.doses["5mg"].confidence, "medium");
});

test("typo '5.mg' still reads as 5mg (Numan style)", () => {
  const html = "2.5mg Injected weekly. £219 5.mg Injected weekly. £249 7.5mg Injected weekly. £299";
  assert.deepEqual(prices(extractFromText(html, "mounjaro")), { "2.5mg": 219, "5mg": 249, "7.5mg": 299 });
});

test("picks the priced run, not an earlier dose picker without prices", () => {
  const html = "Choose strength: 2.5mg 5mg 7.5mg 10mg 12.5mg 15mg … Prices 2.5mg £100 5mg £120 7.5mg £140 10mg £160";
  assert.deepEqual(prices(extractFromText(html, "mounjaro")), { "2.5mg": 100, "5mg": 120, "7.5mg": 140, "10mg": 160 });
});

test("one page with both medicines: each medicine reads its own table (Reach/Slinic style)", () => {
  const html =
    "Mounjaro 2.5mg (1 pen) £154.99 5mg (1 pen) £175.99 7.5mg (1 pen) £241.99 15mg (1 pen) £322.99 " +
    "Wegovy 0.25mg (1 pen) £94.99 0.5mg (1 pen) £99.99 1mg (1 pen) £103.99 1.7mg (1 pen) £174.99 2.4 mg (1 pen) £228.99 7.2mg (1 pen) £272.99 " +
    "Pill 1.5mg (30 tablets) £98.50 4mg (30 tablets) £115.00";
  assert.deepEqual(prices(extractFromText(html, "mounjaro")), { "2.5mg": 154.99, "5mg": 175.99, "7.5mg": 241.99 });
  assert.deepEqual(prices(extractFromText(html, "wegovy")), {
    "0.25mg": 94.99, "0.5mg": 99.99, "1mg": 103.99, "1.7mg": 174.99, "2.4mg": 228.99, "7.2mg": 272.99,
  });
});

test("last dose cannot swallow a price from the next table", () => {
  const html = "2.5mg £129.00 5mg £155.00 7.5mg £206.00 10mg £230.00 12.5mg £247.00 15mg £267.00 " +
    "Wegovy Semaglutide once-weekly, one of the most studied treatments in the world, from £399.00 per month";
  assert.equal(extractFromText(html, "mounjaro").doses["15mg"].price, 267);
});

test("JSON-LD per-dose offers; bundles and other medicines ignored", () => {
  const ld = {
    "@type": "Product",
    name: "Mounjaro Injection",
    offers: [
      { "@type": "AggregateOffer", lowPrice: "179.99", highPrice: "329.99" },
      { "@type": "Offer", name: "Mounjaro 2.5mg Injection", price: "179.99" },
      { "@type": "Offer", name: "Mounjaro 5mg Injection", price: "199.99" },
      { "@type": "Offer", name: "Mounjaro Bundle – 2.5mg + 5mg", price: "329.99" },
      { "@type": "Offer", name: "Wegovy 2.4mg", price: "199.00" },
    ],
  };
  const html = `<script type="application/ld+json">${JSON.stringify(ld)}</script>`;
  const r = extractFromJsonLd(html, "mounjaro");
  assert.deepEqual(prices(r), { "2.5mg": 179.99, "5mg": 199.99 });
  assert.equal(r.aggregate.low, 179.99);
});

test("ProductGroup variants carry the dose in the variant name (Click2Pharmacy style)", () => {
  const ld = {
    "@type": "ProductGroup",
    name: "Buy Mounjaro Online",
    hasVariant: [
      { "@type": "Product", name: "Mounjaro - 2.5mg (Starter Dose)", offers: { "@type": "Offer", price: "145.99" } },
      { "@type": "Product", name: "Mounjaro - 5mg", offers: { "@type": "Offer", price: "173.99" } },
    ],
  };
  const html = `<script type="application/ld+json">${JSON.stringify(ld)}</script>`;
  assert.deepEqual(prices(extractFromJsonLd(html, "mounjaro")), { "2.5mg": 145.99, "5mg": 173.99 });
});

test("prices below the page's own 'from' price are downgraded to low confidence", () => {
  const ld = { "@type": "Product", name: "Mounjaro", offers: { "@type": "AggregateOffer", lowPrice: "180", highPrice: "330" } };
  const html = `<script type="application/ld+json">${JSON.stringify(ld)}</script> 2.5mg £20 5mg £199 7.5mg £259`;
  // £20 is outside the plausible range and dropped; nothing below the floor remains.
  const r = extractStandardPrices(html, "mounjaro");
  assert.equal(r.doses["2.5mg"], undefined);
  const html2 = `<script type="application/ld+json">${JSON.stringify(ld)}</script> 2.5mg £99 5mg £199 7.5mg £259`;
  const r2 = extractStandardPrices(html2, "mounjaro");
  assert.equal(r2.doses["2.5mg"].confidence, "low");
  assert.equal(r2.warnings.length, 1);
});

test("WooCommerce variations: selling price is standard ('was' regular ignored); '1 Pen x 4 Doses' is a single pen", () => {
  const variations = [
    { attributes: { attribute_strength: "2.5mg", attribute_quantity: "1 Pen x 4 Doses" }, display_price: 139.99, display_regular_price: 149.99 },
    { attributes: { attribute_strength: "5mg", attribute_quantity: "1 Pen x 4 Doses" }, display_price: 158.98, display_regular_price: 158.98 },
    { attributes: { attribute_strength: "5mg", attribute_quantity: "3 Pens" }, display_price: 450, display_regular_price: 450 },
  ];
  const attr = JSON.stringify(variations).replace(/"/g, "&quot;");
  const r = extractFromVariants(`<form data-product_variations="${attr}"></form>`, "mounjaro");
  assert.deepEqual(prices(r), { "2.5mg": 139.99, "5mg": 158.98 });
  assert.match(r.doses["2.5mg"].method, /woocommerce.*was £149.99 ignored/);
});

test("Shopify variants: pence integers, compare-at ignored, {amount} objects, multi-month packs skipped", () => {
  const theme = { variants: [
    { title: "2.5mg", price: 15400, compare_at_price: 16900 },
    { title: "5mg", price: 16800, compare_at_price: null },
  ] };
  const storefront = { variants: [
    { title: "1 Month (1 Pen) / 7.5mg", price: { amount: 221, currencyCode: "GBP" } },
    { title: "3 Months (3 Pens) / 7.5mg", price: { amount: 600, currencyCode: "GBP" } },
  ] };
  const html = `<script>var a=${JSON.stringify(theme)};var b=${JSON.stringify(storefront)};</script>`;
  assert.deepEqual(prices(extractFromVariants(html, "mounjaro")), { "2.5mg": 154, "5mg": 168, "7.5mg": 221 });
});

test("prose mentioning doses without a price table yields nothing", () => {
  const html = "Doses go from 2.5mg to 5mg, then 7.5mg, 10mg, 12.5mg and 15mg. Plans from £149 a month.";
  assert.deepEqual(extractFromText(html, "mounjaro").doses, {});
});

// Pharmulous regression: its JSON-LD offers lag behind the live product records
// that feed the price checker, so the 2 November run must read the records.
const pharmulousRecord = (strength, pens, price, sale = 0) => ({
  id: 1, item_id: 75, size: `${pens} x ${strength}`, quantity: pens === 1 ? "1 Pen" : `${pens} Pens`,
  pack_size: 1, label_count: pens, strength, colour: "", price, price_exvat: price, sale_price: sale, hide: 0,
});
const pharmulousHtml = (records, staleLd) => {
  const escaped = JSON.stringify(records).replace(/"/g, "&quot;").replace(/\//g, "\/");
  return `<script type="application/ld+json">${JSON.stringify(staleLd)}</script><div :variants="${escaped}"></div>`;
};

test("Pharmulous: live product records win over stale JSON-LD; multi-pen packs ignored", () => {
  const staleLd = {
    "@type": "Product",
    name: "Wegovy Injection",
    offers: [
      { "@type": "Offer", name: "Wegovy 0.25mg", price: "99.99" },
      { "@type": "Offer", name: "Wegovy 0.5mg", price: "109.99" },
      { "@type": "Offer", name: "Wegovy 7.2mg", price: "229.99" },
    ],
  };
  const html = pharmulousHtml([
    pharmulousRecord("0.25mg", 1, 94.99),
    pharmulousRecord("0.5mg", 1, 99.99),
    pharmulousRecord("0.5mg", 2, 189.99),
    pharmulousRecord("7.2mg", 1, 209.99),
  ], staleLd);
  const r = extractStandardPrices(html, "wegovy");
  assert.deepEqual(prices(r), { "0.25mg": 94.99, "0.5mg": 99.99, "7.2mg": 209.99 });
  assert.match(r.doses["0.5mg"].method, /shop records/);
});

test("Pharmulous: a non-zero sale_price is a promotion, the list price stays standard", () => {
  const html = pharmulousHtml([pharmulousRecord("2.5mg", 1, 144.99, 129.99)], {});
  const r = extractFromShopRecords(html, "mounjaro");
  assert.deepEqual(prices(r), { "2.5mg": 144.99 });
  assert.match(r.doses["2.5mg"].method, /sale price £129.99 ignored/);
});

test("Pharmulous: a trailing space in the size label ('1 x 7.2mg ') still reads", () => {
  const record = { ...pharmulousRecord("7.2mg", 1, 209.99), size: "1 x 7.2mg " };
  assert.deepEqual(prices(extractFromShopRecords(pharmulousHtml([record], {}), "wegovy")), { "7.2mg": 209.99 });
});

test("Pharmulous: records also read when the JSON is escaped twice", () => {
  const rec = JSON.stringify([pharmulousRecord("1.7mg", 1, 149.99)]);
  const html = `<div data-x="${JSON.stringify(rec).replace(/"/g, "&quot;")}"></div>`;
  assert.deepEqual(prices(extractFromShopRecords(html, "wegovy")), { "1.7mg": 149.99 });
});
