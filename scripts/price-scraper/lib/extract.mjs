import { DOSES, doseKeyFor, isPlausiblePrice, parseGbp } from "./doses.mjs";
import { jsonValuesForKey } from "./rsc.mjs";

/**
 * Pulls the STANDARD per-pen price for each dose of one medication out of a
 * pharmacy page. Three strategies, merged per dose:
 *   1. JSON-LD Offers whose name names exactly one dose (most reliable).
 *   2. Shop variant data (WooCommerce `data-product_variations`, Shopify
 *      `variants`).
 *   3. Visible text: a run of dose labels in titration order, each followed by
 *      its price(s).
 * Every dose comes back with a confidence and the method that produced it.
 *
 * Standard price = what every customer pays for a one-off purchase without a
 * code (decision 2026-10-22). A struck-through / compare-at "was" price is
 * ignored, UNLESS the price table labels the lower price as limited (e.g.
 * "Standard Price | New Patient Price"): then the struck price is the standard.
 * When a dose shows several unstruck prices, the highest is taken (plan
 * discounts, points and "save £x" figures are lower) at medium confidence.
 */
const LIMITED_PRICE_LABEL =
  /standard price|regular price|full price|\bRRP\b|new patient(?:s)? price|first[- ](?:order|month|purchase) price|introductory (?:price|offer)|intro (?:price|offer)/i;

const OTHER_MED_NAMES = {
  mounjaro: /wegovy|ozempic|semaglutide|saxenda|foundayo/i,
  wegovy: /mounjaro|tirzepatide|saxenda|foundayo|pill|tablet|oral/i,
};

const MG_TOKEN = /(?<![\d.])(\d{1,2}(?:\.\d{1,2})?)\.?\s?mg\b/gi;
/** Multi-pen bundles and multi-month packs are not a single-pen price ("1 Pen x 4 Doses" is fine). */
const BUNDLE = /\+|bundle|pack of [2-9]|\b[2-9]\s?pens\b|\b[2-9]\s?months?\b|x\s?[2-9]\s?pens?\b/i;
const PRICE_TOKEN = /(\[STRIKE[^\]£]{0,40})?£\s?(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/g;

export function htmlToText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<svg[\s\S]*?<\/svg>|<!--[\s\S]*?-->/gi, " ")
    .replace(/<(del|s|strike)\b[^>]*>/gi, " [STRIKE ")
    .replace(/<\/(del|s|strike)>/gi, " ] ")
    .replace(/<[^>]+style="[^"]*line-through[^"]*"[^>]*>/gi, " [STRIKE ")
    .replace(/<[^>]+class="[^"]*(?:line-through|strike|was-price|old-price|price--compare|compare-at)[^"]*"[^>]*>/gi, " [STRIKE ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&pound;|&#163;|&#xa3;/gi, "£")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&middot;|&#183;/gi, "·")
    .replace(/\s+/g, " ");
}

// ---------------------------------------------------------------- JSON-LD

function* jsonLdBlocks(html) {
  const re = /<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) {
    try {
      yield JSON.parse(m[1].trim());
    } catch {
      // Malformed blocks are common; skip them.
    }
  }
}

function collectOffers(node, parentName, out) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    for (const n of node) collectOffers(n, parentName, out);
    return;
  }
  const types = [].concat(node["@type"] ?? []);
  const name = typeof node.name === "string" ? node.name : parentName;
  if (types.includes("Offer")) {
    out.push({ name: typeof node.name === "string" ? node.name : parentName, offer: node });
  }
  if (types.includes("AggregateOffer")) {
    out.push({ aggregate: true, low: parseGbp(node.lowPrice ?? node.price), high: parseGbp(node.highPrice) });
  }
  for (const [k, v] of Object.entries(node)) {
    if (k === "offers" || k === "hasVariant" || k === "@graph" || (typeof v === "object" && k !== "priceSpecification")) {
      collectOffers(v, types.includes("Product") || types.includes("ProductGroup") ? name : parentName, out);
    }
  }
}

/** The offer's selling price; a ListPrice/StrikethroughPrice spec is a "was" price and ignored. */
function standardFromOffer(offer) {
  return { price: parseGbp(offer.price) };
}

export function extractFromJsonLd(html, medication) {
  const offers = [];
  for (const block of jsonLdBlocks(html)) collectOffers(block, undefined, offers);

  const aggregate = offers.find((o) => o.aggregate) ?? null;
  const doses = {};
  for (const o of offers) {
    if (o.aggregate || !o.name) continue;
    if (OTHER_MED_NAMES[medication].test(o.name)) continue;
    if (BUNDLE.test(o.name)) continue;
    const tokens = [...o.name.matchAll(MG_TOKEN)].map((m) => Number.parseFloat(m[1]));
    if (tokens.length !== 1) continue;
    const dose = doseKeyFor(medication, tokens[0]);
    if (!dose || doses[dose]) continue;
    const { price } = standardFromOffer(o.offer);
    if (!isPlausiblePrice(price)) continue;
    doses[dose] = { price, confidence: "high", method: "json-ld" };
  }
  return { doses, aggregate };
}

// ---------------------------------------------------------------- Shop variants

const decodeEntities = (s) =>
  s.replace(/&quot;/g, '"').replace(/&#0?39;|&#x27;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

/** Shopify theme JSON stores money in pence as integers; WooCommerce in pounds; Storefront uses {amount}. */
function money(v, pence) {
  if (v && typeof v === "object") return parseGbp(String(v.amount ?? ""));
  const n = parseGbp(typeof v === "number" ? v : String(v ?? ""));
  if (!Number.isFinite(n) || n <= 0) return Number.NaN;
  return pence && Number.isInteger(n) && n >= 1000 ? n / 100 : n;
}

function doseFromLabel(label, medication) {
  if (!label || OTHER_MED_NAMES[medication].test(label)) return null;
  if (BUNDLE.test(label)) return null;
  const tokens = [...label.matchAll(MG_TOKEN)].map((m) => Number.parseFloat(m[1]));
  return tokens.length === 1 ? doseKeyFor(medication, tokens[0]) : null;
}

export function extractFromVariants(html, medication) {
  const candidates = [];

  // WooCommerce variable products.
  for (const m of html.matchAll(/data-product_variations\s*=\s*"([^"]+)"/g)) {
    let list;
    try {
      list = JSON.parse(decodeEntities(m[1]));
    } catch {
      continue;
    }
    if (!Array.isArray(list)) continue;
    for (const v of list) {
      if (v?.is_purchasable === false) continue;
      const label = Object.values(v?.attributes ?? {}).map((a) => decodeURIComponent(String(a)).replace(/-/g, " ").replace(/(\d) (\d)/g, "$1.$2")).join(" ");
      candidates.push({ label, price: money(v.display_price, false), regular: money(v.display_regular_price, false), shop: "woocommerce" });
    }
  }

  // Shopify (theme product JSON / analytics meta): variants arrays.
  for (const list of jsonValuesForKey(html, "variants")) {
    if (!Array.isArray(list)) continue;
    for (const v of list) {
      if (!v || typeof v !== "object") continue;
      const label = [v.title, v.public_title, v.name, v.option1].filter((x) => typeof x === "string").join(" ");
      const pence = Number.isInteger(v.price);
      const compare = v.compare_at_price ?? v.compareAtPrice;
      candidates.push({ label, price: money(v.price, pence), regular: money(compare, pence), shop: "shopify" });
    }
  }

  const doses = {};
  for (const c of candidates) {
    const dose = doseFromLabel(c.label, medication);
    if (!dose || doses[dose]) continue;
    // Selling price; a higher regular/compare-at price is a "was" price.
    if (!isPlausiblePrice(c.price)) continue;
    const onSale = isPlausiblePrice(c.regular) && c.regular > c.price;
    doses[dose] = {
      price: c.price,
      confidence: "high",
      method: `${c.shop} variants${onSale ? ` (sale price; was £${c.regular} ignored)` : ""}`,
    };
  }
  return { doses };
}

// ---------------------------------------------------------------- Text

function mgTokens(text) {
  return [...text.matchAll(MG_TOKEN)].map((m) => ({
    value: Number.parseFloat(m[1]),
    start: m.index,
    end: m.index + m[0].length,
  }));
}

function pricesIn(segment) {
  const out = [];
  for (const m of segment.matchAll(PRICE_TOKEN)) {
    const before = segment.slice(Math.max(0, m.index - 12), m.index);
    if (/save|off|points?|cashback/i.test(before)) continue;
    const after = segment.slice(m.index + m[0].length, m.index + m[0].length + 12);
    if (/^\s*(off|points?|cashback)/i.test(after)) continue;
    const price = parseGbp(m[2]);
    if (!isPlausiblePrice(price)) continue;
    out.push({ price, struck: Boolean(m[1]) });
  }
  return out;
}

/** Every run (3+) of consecutive mg tokens that walks the medication's doses in order. */
function doseRuns(tokens, medication) {
  const ladder = DOSES[medication];
  const runs = [];
  for (let i = 0; i < tokens.length; i++) {
    const startIdx = ladder.findIndex((d) => Number.parseFloat(d) === tokens[i].value);
    if (startIdx < 0) continue;
    const run = [{ token: tokens[i], dose: ladder[startIdx], next: tokens[i + 1] }];
    let ladderIdx = startIdx;
    for (let j = i + 1; j < tokens.length && ladderIdx + 1 < ladder.length; j++) {
      if (tokens[j].value !== Number.parseFloat(ladder[ladderIdx + 1])) break;
      if (tokens[j].start - tokens[j - 1].end > 400) break;
      ladderIdx++;
      run.push({ token: tokens[j], dose: ladder[ladderIdx], next: tokens[j + 1] });
    }
    if (run.length >= 3) runs.push(run);
  }
  return runs;
}

/** Text runs often repeat (dose pickers, FAQs); keep the one that prices the most doses. */
export function extractFromText(html, medication) {
  const text = htmlToText(html);
  let best = { doses: {} };
  for (const run of doseRuns(mgTokens(text), medication)) {
    const doses = pricesForRun(text, run);
    // A run where only a minority of labels carry prices is likely prose, not a price table.
    if (Object.keys(doses).length < Math.ceil(run.length / 2)) continue;
    if (Object.keys(doses).length > Object.keys(best.doses).length) best = { doses };
  }
  return best;
}

function pricesForRun(text, run) {
  const doses = {};
  // The table header sits just before the first dose label ("Dose Standard Price New Patient Price …").
  const header = text.slice(Math.max(0, run[0].token.start - 80), run[0].token.start);
  const lowerPriceIsLimited = LIMITED_PRICE_LABEL.test(header);
  run.forEach(({ token, dose, next }, i) => {
    // Rows share a rhythm; the last row gets the same span so it cannot swallow the next table.
    const span = i > 0 ? token.start - run[i - 1].token.start : 300;
    const end = Math.min(next ? next.start : text.length, token.end + Math.min(300, span + 20));
    const prices = pricesIn(text.slice(token.end, end));
    if (prices.length === 0) return;
    const struck = prices.filter((p) => p.struck);
    const unstruck = prices.filter((p) => !p.struck);
    if (struck.length > 0 && (lowerPriceIsLimited || unstruck.length === 0)) {
      doses[dose] = {
        price: Math.max(...struck.map((p) => p.price)),
        confidence: "high",
        method: lowerPriceIsLimited ? "text (struck standard price; lower price is a labelled limited offer)" : "text (struck-through only)",
      };
    } else if (struck.length > 0) {
      doses[dose] = {
        price: Math.max(...unstruck.map((p) => p.price)),
        confidence: "high",
        method: `text (sale price; was £${Math.max(...struck.map((p) => p.price))} ignored)`,
      };
    } else if (prices.length === 1) {
      doses[dose] = { price: prices[0].price, confidence: "high", method: "text" };
    } else {
      doses[dose] = {
        price: Math.max(...prices.map((p) => p.price)),
        confidence: "medium",
        method: `text (${prices.length} prices shown, took highest)`,
      };
    }
  });
  return doses;
}

// ---------------------------------------------------------------- Merge

/** Per-dose merge: JSON-LD, then shop variants, then text; sanity-checks against the page's own price range. */
export function extractStandardPrices(html, medication) {
  const ld = extractFromJsonLd(html, medication);
  const vr = extractFromVariants(html, medication);
  const tx = extractFromText(html, medication);
  const doses = {};
  for (const dose of DOSES[medication]) {
    const hit = ld.doses[dose] ?? vr.doses[dose] ?? tx.doses[dose];
    if (hit) doses[dose] = { ...hit };
  }

  const warnings = [];
  const agg = ld.aggregate;
  const found = Object.values(doses).map((d) => d.price);
  if (agg && found.length > 0 && isPlausiblePrice(agg.low)) {
    const min = Math.min(...found);
    // Below the page's own advertised floor means we picked up something odd.
    if (min < agg.low * 0.9) {
      warnings.push(`lowest extracted £${min} is below the page's own "from £${agg.low}"`);
      for (const d of Object.values(doses)) if (d.price < agg.low * 0.9) d.confidence = "low";
    }
  }
  return { doses, aggregate: agg, warnings };
}
