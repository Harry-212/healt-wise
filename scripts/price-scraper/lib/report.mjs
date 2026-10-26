import fs from "node:fs";
import path from "node:path";
import { STANDARD_PRICE_RULE } from "./standard-price-rule.mjs";

const gbp = (v) => (typeof v === "number" ? `£${v.toFixed(2)}` : v == null ? "—" : String(v));
const pct = (v) => (v == null ? "—" : `${v > 0 ? "+" : ""}${v}%`);
const cell = (s) => String(s ?? "").replace(/\|/g, "\\|");

const discountLabel = (d) => `${d.type === "percent" ? `−${d.value}%` : `−£${d.value}`}${d.code ? ` code ${d.code}` : ""}`;

/** Configured pages the run could not read (bot wall, no prices, failed, missing doses). */
const MANUAL_STATUSES = new Set(["blocked", "no-prices", "failed", "partial"]);

/**
 * "Manual check" list: one block per pharmacy × medicine whose page could not
 * be read, with our price, the comparison sites' prices and a hint per dose,
 * so a person can confirm it on the pharmacy's site in a minute.
 */
export function manualCheckSection(rows) {
  const groups = new Map();
  for (const r of rows) {
    if (r.action !== "manual" || !MANUAL_STATUSES.has(r.pharmacyStatus)) continue;
    const key = `${r.providerId}|${r.medication}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(r);
  }
  const md = [`## Manual check list (${groups.size})`, ""];
  if (groups.size === 0) {
    md.push("_Every configured pharmacy page was read._", "");
    return md;
  }
  md.push(
    "These pages are configured but could not be read this run. Open the page, confirm each standard price, and change any that differ in /admin-dashboard.",
    "The comparison sites are hints only; the pharmacy's own page is the source of truth.",
    "",
  );
  for (const list of groups.values()) {
    const first = list[0];
    md.push(`### ${first.provider} (${first.medication}): ${first.pharmacyStatus}`, "");
    if (first.pharmacyUrl) md.push(`Page: ${first.pharmacyUrl}`, "");
    if (first.pharmacyReason) md.push(`Why: ${cell(first.pharmacyReason)}`, "");
    md.push("| Dose | Ours now | Comparison sites | Hint |", "|---|---|---|---|");
    for (const r of list) {
      const sites = r.comparators.length ? r.comparators.map((c) => `${c.site} ${gbp(c.standard)}`).join(", ") : "—";
      let hint = "no comparison data";
      if (r.consensus != null && typeof r.current === "number") {
        const d = Math.round(((r.consensus - r.current) / r.current) * 1000) / 10;
        hint = Math.abs(d) <= 5 ? "matches comparison sites" : `**check**: comparison sites ${d > 0 ? "+" : ""}${d}%`;
      }
      md.push(`| ${r.dose} | ${gbp(r.current)} | ${sites} | ${hint} |`);
    }
    md.push("");
  }
  return md;
}

function countBy(items, key) {
  const out = {};
  for (const i of items) out[i[key]] = (out[i[key]] ?? 0) + 1;
  return out;
}

export function writeReports({ outDir, runDate, rows, pharmacyReads, comparators, current, options }) {
  fs.mkdirSync(outDir, { recursive: true });
  const base = path.join(outDir, `price-check-${runDate}`);

  // ---- JSON (everything, for the later update step)
  fs.writeFileSync(
    `${base}.json`,
    JSON.stringify(
      {
        runDate,
        options,
        current: Object.fromEntries(Object.entries(current).map(([m, c]) => [m, { source: c.source, providers: c.providers.length }])),
        comparators: comparators.map(({ rows: r, ...meta }) => ({ ...meta, rows: r.length, matched: r.filter((x) => x.ourId).length })),
        pharmacyReads: Object.fromEntries(pharmacyReads),
        rows,
      },
      null,
      2,
    ),
  );

  // ---- CSV (one line per provider × medication × dose)
  const header = ["provider_id", "provider", "medication", "dose", "current", "pharmacy_standard", "standard_price_for_site", "affiliate_code_price", "affiliate_discount", "confidence", "method", "comparator_median", "delta_vs_comparators_pct", "change_vs_current", "action", "pharmacy_status", "comparators"];
  const csv = [header.join(",")];
  for (const r of rows) {
    csv.push(
      [r.providerId, r.provider, r.medication, r.dose, r.current, r.pharmacy, r.sitePrice, r.codePrice, r.affiliateDiscount ? discountLabel(r.affiliateDiscount) : null, r.pharmacyConfidence, r.pharmacyMethod, r.consensus, r.deltaVsConsensus, r.changeVsCurrent, r.action, r.pharmacyStatus, r.comparators.map((c) => `${c.site}=${c.standard}`).join(" ")]
        .map((v) => (v == null ? "" : `"${String(v).replace(/"/g, '""')}"`))
        .join(","),
    );
  }
  fs.writeFileSync(`${base}.csv`, csv.join("\n"));

  // ---- Markdown summary for humans
  const reads = [...pharmacyReads.entries()].flatMap(([id, meds]) => Object.entries(meds).map(([medication, r]) => ({ id, medication, ...r })));
  const actions = countBy(rows, "action");
  const providersTotal = new Set(rows.map((r) => r.providerId)).size;
  const md = [];
  md.push(`# Price check — ${runDate}`, "");
  md.push(`> **Standard-price rule.** ${STANDARD_PRICE_RULE}`, "");
  md.push(
    "Reviewer checklist: (1) confirm every proposed price is the normal public price, not a code, first-order, subscription or plan price; (2) a price shown only after a code or first-order reward is stored separately, never in the table; (3) delivery and consultation fees are only called \"included\" when the checkout shows it; (4) a strength the provider does not list is \"N/A\", not \"TBC\".",
    "",
  );
  md.push("> Prototype run. **Nothing on the website was changed.** This report shows what the monthly update *would* do.", "");
  md.push("## Summary", "");
  md.push(`- Providers on Healthwise360: **${providersTotal}** (Mounjaro ${current.mounjaro.providers.length}, Wegovy ${current.wegovy.providers.length}); current prices read from ${options.currentSource}.`);
  md.push(`- Pharmacy pages configured this run: **${reads.length}** (${Object.entries(countBy(reads, "status")).map(([k, v]) => `${k}: ${v}`).join(", ")}).`);
  md.push(`- Dose prices: ${Object.entries(actions).map(([k, v]) => `**${k}** ${v}`).join(" · ")}.`);
  const manualWhy = countBy(rows.filter((r) => r.action === "manual"), "pharmacyStatus");
  md.push(`- Why \`manual\`: ${Object.entries(manualWhy).map(([k, v]) => `${k} ${v}`).join(" · ")} (not-configured = price-page URL not added to sources.json yet).`);
  md.push("");
  md.push("| Action | Meaning |", "|---|---|");
  md.push("| unchanged | Pharmacy's standard price equals ours |");
  md.push("| update | Read with high confidence, within 5% of the comparison sites (or none to check) — would be updated |");
  md.push("| review | Read, but medium confidence or more than 5% away from the comparison sites — needs a human look |");
  md.push("| manual | No usable price from the pharmacy (not configured, blocked, or page needs a browser) — keep ours |");
  md.push("");

  md.push("## Comparison sites (cross-check only)", "");
  md.push("| Site | Price rows | Matched to our pharmacies | Last updated | Note |", "|---|---|---|---|---|");
  for (const c of comparators) {
    const matchedProviders = new Set(c.rows.filter((r) => r.ourId).map((r) => r.ourId)).size;
    md.push(`| ${c.site} | ${c.rows.length} | ${matchedProviders} pharmacies | ${c.lastUpdated ?? "per row"} | ${cell(c.error ?? "")} |`);
  }
  md.push("");

  md.push("## Pharmacy pages read", "");
  md.push("Fetched with Node first; `curl` means Node was refused and one retry with curl (same user agent) succeeded. `node+curl` means both were refused.", "");
  md.push("| Pharmacy | Medication | Status | Doses read | Fetched via | Note |", "|---|---|---|---|---|---|");
  for (const r of reads.sort((a, b) => a.id.localeCompare(b.id))) {
    md.push(`| ${r.id} | ${r.medication} | ${r.status} | ${Object.keys(r.doses ?? {}).length}/6 | ${r.transport ?? "—"} | ${cell([r.reason, ...(r.warnings ?? [])].filter(Boolean).join("; "))} |`);
  }
  md.push("");

  const interesting = rows.filter((r) => r.action === "update" || r.action === "review");
  md.push(`## Proposed changes and items to review (${interesting.length})`, "");
  if (interesting.length === 0) md.push("_None._", "");
  else {
    md.push("*Site price* is always the public one-off standard price. Partner-code prices are shown separately in brackets as *code price*, never used for ranking, and affiliate rows are never applied automatically.", "");
    md.push("| Pharmacy | Med | Dose | Ours now | Pharmacy (standard) | Site price | Change | Comparators (median) | Δ vs comparators | Action | How read |", "|---|---|---|---|---|---|---|---|---|---|---|");
    for (const r of interesting) {
      const site = r.affiliateDiscount ? `${gbp(r.sitePrice)} (code price ${gbp(r.codePrice)}, ${discountLabel(r.affiliateDiscount)})` : gbp(r.sitePrice);
      md.push(`| ${r.provider} | ${r.medication} | ${r.dose} | ${gbp(r.current)} | ${gbp(r.pharmacy)} | ${site} | ${r.changeVsCurrent == null ? "—" : gbp(r.changeVsCurrent)} | ${gbp(r.consensus)} (${r.comparators.length}) | ${pct(r.deltaVsConsensus)} | **${r.action}** | ${cell(r.pharmacyMethod)} |`);
    }
    md.push("");
  }

  md.push(...manualCheckSection(rows));

  const comparatorOnly = rows.filter((r) => r.action === "manual" && r.pharmacyStatus === "not-configured" && r.consensus != null && typeof r.current === "number" && Math.abs((r.consensus - r.current) / r.current) > 0.05);
  md.push(`## Not configured yet, but comparison sites disagree with us by >5% (${comparatorOnly.length})`, "");
  md.push("Hints only — the pharmacy's own site is the source of truth; these are worth a manual check.", "");
  if (comparatorOnly.length) {
    md.push("| Pharmacy | Med | Dose | Ours now | Comparators (median) | Sites |", "|---|---|---|---|---|---|");
    for (const r of comparatorOnly) md.push(`| ${r.provider} | ${r.medication} | ${r.dose} | ${gbp(r.current)} | ${gbp(r.consensus)} | ${r.comparators.map((c) => `${c.site} ${gbp(c.standard)}`).join(", ")} |`);
    md.push("");
  }

  md.push("## Limits of this prototype", "");
  md.push("- Only the pharmacies listed in `scripts/price-scraper/sources.json` are read; the rest show as `manual` until their price-page URLs are added.");
  md.push("- Pages that need a real browser (prices loaded by JavaScript) are reported, not rendered. Bot-protection challenges are never solved: if both Node and curl get one, the pharmacy is reported as blocked and goes on the manual check list.");
  md.push("- From GitHub's servers, Cloudflare refuses Asda, Superdrug, Zava and YourPharmacy (data-centre IPs); these are expected on the manual check list each month.");
  md.push("- A page that loads without prices, or a failed request, is retried once after a pause before it is reported.");
  md.push("- healthcount.app quotes a monthly total that may include delivery, so it can sit slightly above the pen price.");
  fs.writeFileSync(`${base}.md`, md.join("\n"));

  return { json: `${base}.json`, csv: `${base}.csv`, md: `${base}.md` };
}
