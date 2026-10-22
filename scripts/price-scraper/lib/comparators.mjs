import { DOSES, doseKeyFor, isPlausiblePrice, parseGbp } from "./doses.mjs";
import { decodeFlightPayload, jsonValuesForKey } from "./rsc.mjs";

/**
 * Independent comparison sites used ONLY to cross-check our pharmacy reads
 * (internal report — nothing from them is published). Each adapter returns
 * normalised rows:
 *   { site, name, gphc, domain, medication, dose, standard, promo, checked }
 * Pencompare is deliberately not used (same developer, not independent).
 */

const gphcOf = (v) => (String(v ?? "").match(/\d{6,8}/) ?? [null])[0];
const domainOf = (u) => {
  try {
    return new URL(u).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
};

// ---------------------------------------------------------------- glpcomparison.com
// Publishes its full dataset as JSON (schema.org Dataset distribution).
async function glpComparison(fetcher) {
  const url = "https://glpcomparison.com/data/prices.json";
  const res = await fetcher.get(url);
  if (!res.ok) return { site: "glpcomparison.com", url, error: res.reason ?? `HTTP ${res.status}`, rows: [] };
  const data = JSON.parse(res.body);
  const rows = [];
  for (const p of data.providers ?? []) {
    for (const medication of Object.keys(DOSES)) {
      for (const [k, v] of Object.entries(p.prices?.[medication] ?? {})) {
        const dose = doseKeyFor(medication, Number.parseFloat(k));
        if (!dose) continue;
        const standard = typeof v === "number" ? v : parseGbp(v?.price);
        if (!isPlausiblePrice(standard)) continue;
        rows.push({
          site: "glpcomparison.com",
          name: p.name,
          gphc: gphcOf(p.gphc_number),
          domain: domainOf(p.url),
          medication,
          dose,
          standard,
          promo: typeof v === "object" && isPlausiblePrice(parseGbp(v.promo)) ? parseGbp(v.promo) : null,
          checked: p.checked ?? data.last_updated ?? null,
        });
      }
    }
  }
  return { site: "glpcomparison.com", url, lastUpdated: data.last_updated ?? null, rows };
}

// ---------------------------------------------------------------- comparemj.co.uk
// Mounjaro only; one page per strength, listings carry price + discountPrice.
const COMPAREMJ_PAGES = {
  "2.5mg": "https://www.comparemj.co.uk/",
  "5mg": "https://www.comparemj.co.uk/mounjaro-5mg-price-comparison-uk",
  "7.5mg": "https://www.comparemj.co.uk/mounjaro-7.5mg-price-comparison-uk",
  "10mg": "https://www.comparemj.co.uk/mounjaro-10mg-price-comparison-uk",
  "12.5mg": "https://www.comparemj.co.uk/mounjaro-12.5mg-price-comparison-uk",
  "15mg": "https://www.comparemj.co.uk/mounjaro-15mg-price-comparison-uk",
};

async function compareMj(fetcher) {
  const rows = [];
  const errors = [];
  for (const [dose, url] of Object.entries(COMPAREMJ_PAGES)) {
    const res = await fetcher.get(url);
    if (!res.ok) {
      errors.push(`${dose}: ${res.reason ?? res.status}`);
      continue;
    }
    const payload = decodeFlightPayload(res.body);
    // Each card is {"listing":{…},"provider":{…}}; read them pairwise.
    const listings = jsonValuesForKey(payload, "listing");
    const providers = jsonValuesForKey(payload, "provider").filter((p) => p && typeof p === "object" && p.name);
    const byName = new Map(providers.map((p) => [p.name, p]));
    const seen = new Set();
    for (const l of listings) {
      if (!l?.providerName || l.product !== "mounjaro" || l.strength !== dose || Number(l.quantity) !== 1) continue;
      if (seen.has(l.providerName)) continue;
      seen.add(l.providerName);
      const standard = parseGbp(l.price);
      if (!isPlausiblePrice(standard)) continue;
      const discount = parseGbp(l.discountPrice);
      const prov = byName.get(l.providerName);
      rows.push({
        site: "comparemj.co.uk",
        name: l.providerName,
        gphc: gphcOf(prov?.regulatory?.gphc?.registrationNumber),
        domain: domainOf(prov?.website),
        medication: "mounjaro",
        dose,
        standard,
        promo: isPlausiblePrice(discount) && discount < standard ? discount : null,
        checked: null,
      });
    }
  }
  return { site: "comparemj.co.uk", url: COMPAREMJ_PAGES["2.5mg"], error: errors.length ? errors.join("; ") : undefined, rows };
}

// ---------------------------------------------------------------- healthcount.app
// Rows per pharmacy/drug/dose with the pharmacy's own source URL. Its figure is a
// monthly total (may include delivery), so it is a looser cross-check.
async function healthcount(fetcher) {
  const url = "https://www.healthcount.app/glp1-prices";
  const res = await fetcher.get(url);
  if (!res.ok) return { site: "healthcount.app", url, error: res.reason ?? `HTTP ${res.status}`, rows: [] };
  const payload = decodeFlightPayload(res.body);
  const rows = [];
  const seen = new Set();
  for (const list of jsonValuesForKey(payload, "rows")) {
    if (!Array.isArray(list)) continue;
    for (const r of list) {
      const medication = r?.drug === "Mounjaro" ? "mounjaro" : r?.drug === "Wegovy" ? "wegovy" : null;
      if (!medication || r.confidence === "low") continue;
      const dose = doseKeyFor(medication, Number.parseFloat(r.dose_mg));
      const standard = parseGbp(r.total_price_gbp);
      if (!dose || !isPlausiblePrice(standard)) continue;
      const key = `${r.pharmacy}|${medication}|${dose}`;
      if (seen.has(key)) continue;
      seen.add(key);
      rows.push({
        site: "healthcount.app",
        name: r.pharmacy,
        gphc: gphcOf(r.gphc_number),
        domain: domainOf(r.website),
        medication,
        dose,
        standard,
        promo: null,
        checked: r.last_verified ?? null,
        sourceUrl: r.source_url ?? null,
      });
    }
  }
  return { site: "healthcount.app", url, rows };
}

export const COMPARATORS = [glpComparison, compareMj, healthcount];

export async function loadComparators(fetcher) {
  const results = [];
  for (const load of COMPARATORS) {
    try {
      results.push(await load(fetcher));
    } catch (err) {
      results.push({ site: load.name, error: String(err.message ?? err), rows: [] });
    }
  }
  return results;
}
