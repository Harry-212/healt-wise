import fs from "node:fs";
import { DOSES } from "./doses.mjs";
import { decodeFlightPayload, jsonObjectsStartingWith } from "./rsc.mjs";

/**
 * Current Healthwise360 prices. Default source is the LIVE public comparison
 * pages (the server JSON edited in /admin-dashboard is not in git), so the
 * report compares against what visitors actually see. `--current=<dir>` reads
 * local data/*.json instead (offline runs).
 */

const LIVE_PAGES = {
  mounjaro: "https://www.healthwise360.co.uk/mounjaro-price-comparison",
  wegovy: "https://www.healthwise360.co.uk/wegovy-price-comparison",
};

function normaliseProvider(p, medication) {
  const prices = {};
  for (const dose of DOSES[medication]) {
    const v = p.prices?.[dose];
    prices[dose] = typeof v === "number" && v > 0 ? v : v ?? null;
  }
  return {
    id: p.id,
    name: p.name,
    gphc: (String(p.gphcRegNo ?? "").match(/\d{6,8}/) ?? [null])[0],
    updatedLabel: p.updatedLabel ?? null,
    trustpilotUrl: p.trustpilotUrl ?? null,
    prices,
  };
}

export async function loadCurrentPrices({ fetcher, localDir }) {
  const out = {};
  for (const medication of Object.keys(DOSES)) {
    if (localDir) {
      const store = JSON.parse(fs.readFileSync(`${localDir}/${medication}-compare.json`, "utf8"));
      out[medication] = { source: `${localDir}/${medication}-compare.json`, lastUpdated: store.lastUpdated, providers: store.providers.map((p) => normaliseProvider(p, medication)) };
      continue;
    }
    const url = LIVE_PAGES[medication];
    const res = await fetcher.get(url);
    if (!res.ok) throw new Error(`Could not load live ${medication} page (${res.reason ?? res.status})`);
    const payload = decodeFlightPayload(res.body);
    const seen = new Map();
    for (const obj of jsonObjectsStartingWith(payload, '{"id":"')) {
      if (!obj.prices || !obj.gphcRegNo || seen.has(obj.id)) continue;
      seen.set(obj.id, normaliseProvider(obj, medication));
    }
    if (seen.size === 0) throw new Error(`No provider data found on ${url} — page structure changed?`);
    out[medication] = { source: url, lastUpdated: null, providers: [...seen.values()] };
  }
  return out;
}
