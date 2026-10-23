#!/usr/bin/env node
/**
 * Sends an approved update file to the site.
 *
 *   PRICE_APPLY_TOKEN=… npm run prices:apply -- --file=scripts/price-scraper/out/price-updates-2026-11-02.json --dry-run
 *   PRICE_APPLY_TOKEN=… npm run prices:apply -- --file=… [--url=https://www.healthwise360.co.uk]
 *
 * Only `updates` and `checked` are sent; `review` rows are for humans. Remove
 * any update line you do not approve before running without --dry-run.
 */
import fs from "node:fs";

function parseArgs(argv) {
  const opts = { file: null, url: "https://www.healthwise360.co.uk", dryRun: false };
  for (const a of argv) {
    const [k, v] = a.replace(/^--/, "").split("=");
    if (k === "file") opts.file = v;
    else if (k === "url") opts.url = v.replace(/\/$/, "");
    else if (k === "dry-run") opts.dryRun = true;
  }
  return opts;
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const token = process.env.PRICE_APPLY_TOKEN?.trim();
  if (!opts.file) throw new Error("--file=<price-updates-….json> is required");
  if (!token) throw new Error("PRICE_APPLY_TOKEN is not set");

  const proposal = JSON.parse(fs.readFileSync(opts.file, "utf8"));
  const body = {
    checkedOn: proposal.checkedOn,
    updates: proposal.updates.map(({ medication, providerId, dose, price, expectedCurrent }) => ({ medication, providerId, dose, price, expectedCurrent })),
    checked: proposal.checked,
  };

  const endpoint = `${opts.url}/api/admin/prices/apply${opts.dryRun ? "?dryRun=1" : ""}`;
  console.log(`${opts.dryRun ? "Dry run" : "Applying"}: ${body.updates.length} price changes, ${body.checked.length} checked pages → ${endpoint}`);
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(body),
  });
  const out = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${out.error ?? "request failed"}`);

  console.log(`Applied ${out.applied.length}, skipped ${out.skipped.length}, providers dated ${out.checkedProviders} (${out.lastUpdated ?? "no change"})`);
  for (const a of out.applied) console.log(`  ✓ ${a.providerId} ${a.medication} ${a.dose}: ${a.previous} → ${a.price}`);
  for (const s of out.skipped) console.log(`  ✗ ${s.providerId} ${s.medication} ${s.dose}: ${s.reason}`);
  if (out.skipped.length > 0) process.exitCode = 2;
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
