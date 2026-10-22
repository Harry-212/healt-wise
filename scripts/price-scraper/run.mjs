#!/usr/bin/env node
/**
 * Monthly standard-price check (prototype — reads and reports, changes nothing).
 *
 *   npm run prices:check                       # live HW prices, all configured pharmacies
 *   npm run prices:check -- --only=asda-online-doctor,zava
 *   npm run prices:check -- --fresh            # ignore today's cache
 *   npm run prices:check -- --current=data     # compare with local data/*.json instead of the live site
 *
 * Output: scripts/price-scraper/out/price-check-<date>.{md,csv,json}
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createFetcher } from "./lib/http.mjs";
import { extractStandardPrices } from "./lib/extract.mjs";
import { loadCurrentPrices } from "./lib/current.mjs";
import { loadComparators } from "./lib/comparators.mjs";
import { buildMatcher, dropAmbiguousMatches } from "./lib/match.mjs";
import { compareAll } from "./lib/compare.mjs";
import { writeReports } from "./lib/report.mjs";
import { buildProposal } from "./lib/proposal.mjs";
import { MEDICATIONS } from "./lib/doses.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));

function parseArgs(argv) {
  const opts = { only: null, fresh: false, current: null, out: path.join(here, "out") };
  for (const a of argv) {
    const [k, v] = a.replace(/^--/, "").split("=");
    if (k === "only") opts.only = new Set(v.split(",").map((s) => s.trim()).filter(Boolean));
    else if (k === "fresh") opts.fresh = true;
    else if (k === "current") opts.current = v;
    else if (k === "out") opts.out = path.resolve(v);
  }
  return opts;
}

/** Run date in UK time, so a run late on the 1st (UTC) is not filed under the 2nd. */
function ukDate() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/London" }).format(new Date());
}

async function readPharmacy(fetcher, url, medication, note) {
  if (!url) return { status: "not-configured", reason: note ?? "price-page URL not confirmed yet", doses: {} };
  const res = await fetcher.get(url);
  if (!res.ok) {
    return { status: res.blocked ? "blocked" : "failed", reason: res.reason ?? `HTTP ${res.status}`, url, transport: res.transport ?? null, doses: {} };
  }
  const { doses, warnings } = extractStandardPrices(res.body, medication);
  const n = Object.keys(doses).length;
  return {
    status: n === 0 ? "no-prices" : n < 6 ? "partial" : "ok",
    reason: n === 0 ? "no dose prices in the page HTML (likely loaded by JavaScript)" : null,
    url,
    transport: res.transport ?? null,
    doses,
    warnings,
  };
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const runDate = ukDate();
  const fetcher = createFetcher({ cacheDir: path.join(opts.out, "cache"), fresh: opts.fresh });
  const sources = JSON.parse(fs.readFileSync(path.join(here, "sources.json"), "utf8")).providers;

  console.log(`Price check ${runDate}`);
  console.log("• Loading current Healthwise360 prices…");
  const current = await loadCurrentPrices({ fetcher, localDir: opts.current });

  const providerIds = new Set(MEDICATIONS.flatMap((m) => current[m].providers.map((p) => p.id)));
  const targets = Object.entries(sources).filter(([id]) => (!opts.only || opts.only.has(id)) && providerIds.has(id));
  const unknown = Object.keys(sources).filter((id) => !providerIds.has(id));
  if (unknown.length) console.warn(`  ! sources.json ids not on the site: ${unknown.join(", ")}`);

  console.log(`• Reading ${targets.length} pharmacy websites…`);
  const pharmacyReads = new Map();
  await Promise.all(
    targets.map(async ([id, urls]) => {
      const meds = {};
      for (const medication of MEDICATIONS) {
        const listed = current[medication].providers.some((p) => p.id === id);
        if (!listed) continue;
        meds[medication] = await readPharmacy(fetcher, urls[medication] ?? null, medication, urls.note);
      }
      pharmacyReads.set(id, meds);
      const line = Object.entries(meds).map(([m, r]) => `${m}:${r.status}(${Object.keys(r.doses).length}${r.transport === "curl" ? ",curl" : ""})`).join(" ");
      console.log(`  ${id.padEnd(32)} ${line}`);
    }),
  );

  console.log("• Loading comparison sites…");
  const comparators = await loadComparators(fetcher);
  const ourProviders = [...providerIds].map((id) => {
    const p = MEDICATIONS.map((m) => current[m].providers.find((x) => x.id === id)).find(Boolean);
    const domains = MEDICATIONS.map((m) => sources[id]?.[m])
      .filter(Boolean)
      .map((u) => new URL(u).hostname.replace(/^www\./, ""));
    return { id, name: p.name, gphc: p.gphc, domains };
  });
  const match = buildMatcher(ourProviders);
  const matched = [];
  for (const c of comparators) {
    for (const r of c.rows) {
      const m = match(r);
      if (m) {
        r.ourId = m.id;
        r.via = m.via;
        matched.push(r);
      }
    }
  }
  const { kept: comparatorRows, dropped } = dropAmbiguousMatches(matched);
  for (const r of dropped) delete r.ourId;
  for (const c of comparators) {
    console.log(`  ${c.site.padEnd(20)} ${c.rows.length} rows, ${new Set(c.rows.filter((r) => r.ourId).map((r) => r.ourId)).size} of our pharmacies${c.error ? `  (${c.error})` : ""}`);
  }
  if (dropped.length) console.log(`  (${dropped.length} rows dropped: one GPhC number shared by several brands)`);

  const discounts = Object.fromEntries(
    Object.entries(sources)
      .filter(([, s]) => s.affiliateDiscount)
      .map(([id, s]) => [id, s.affiliateDiscount]),
  );
  const rows = compareAll({ current, pharmacyReads, comparatorRows, discounts });
  const files = writeReports({
    outDir: opts.out,
    runDate,
    rows,
    pharmacyReads,
    comparators,
    current,
    options: { only: opts.only ? [...opts.only] : null, currentSource: opts.current ? `local ${opts.current}/` : "the live site" },
  });

  const proposal = buildProposal(rows, runDate);
  const proposalFile = path.join(opts.out, `price-updates-${runDate}.json`);
  fs.writeFileSync(proposalFile, JSON.stringify(proposal, null, 2) + "\n");

  const tally = {};
  for (const r of rows) tally[r.action] = (tally[r.action] ?? 0) + 1;
  console.log(`• Done: ${Object.entries(tally).map(([k, v]) => `${k} ${v}`).join(", ")}`);
  console.log(`  ${files.md}\n  ${files.csv}\n  ${files.json}`);
  console.log(`• Update proposal (${proposal.updates.length} price changes, ${proposal.checked.length} pages checked, ${proposal.review.length} to review):\n  ${proposalFile}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
