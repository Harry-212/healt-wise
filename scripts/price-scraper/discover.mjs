#!/usr/bin/env node
/**
 * Proposes price-page URLs for providers missing from sources.json.
 *
 *   npm run prices:discover                    # every unconfigured provider
 *   npm run prices:discover -- --only=curate,bolt-pharmacy
 *
 * Seeds: the pharmacy's own domain (from its Trustpilot URL), plus the URLs the
 * comparison sites cite. It follows same-site links that mention the medicine,
 * runs the extractor on each candidate and keeps the page that prices the most
 * doses. Output is a PROPOSAL (out/url-proposals-<date>.{json,md}) — review it,
 * then copy confirmed URLs into sources.json. Nothing is written there.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createFetcher } from "./lib/http.mjs";
import { extractStandardPrices } from "./lib/extract.mjs";
import { loadCurrentPrices } from "./lib/current.mjs";
import { loadComparators } from "./lib/comparators.mjs";
import { buildMatcher, dropAmbiguousMatches } from "./lib/match.mjs";
import { MEDICATIONS } from "./lib/doses.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const MAX_CANDIDATES_PER_MED = 6;

const MED_WORDS = {
  mounjaro: /mounjaro|tirzepatide/i,
  wegovy: /wegovy|semaglutide/i,
};
const GOOD_PATH = /product|treatment|medication|weight-?loss|buy|price|shop|injection|clinic|condition|online-doctor/i;
const BAD_PATH = /blog|guide|news|article|review|faq|advice|side-?effect|vs-|-vs|compar|cost|calculator|dosage-guide|how-to|what-is|by-week|learn|story|press|nice-|pill|tablet|oral|login|account|cart|basket|checkout|product-tag|\/feed\/?$|\.(pdf|jpg|png|webp)$/i;

function parseArgs(argv) {
  const opts = { only: null, out: path.join(here, "out") };
  for (const a of argv) {
    const [k, v] = a.replace(/^--/, "").split("=");
    if (k === "only") opts.only = new Set(v.split(","));
    else if (k === "out") opts.out = path.resolve(v);
  }
  return opts;
}

function domainFromTrustpilot(u) {
  const m = String(u ?? "").match(/trustpilot\.com\/review\/([^/?#]+)/i);
  return m ? m[1].replace(/^www\./, "") : null;
}

const sameSite = (a, b) => {
  const strip = (h) => h.replace(/^www\./, "");
  const ha = strip(a), hb = strip(b);
  return ha === hb || ha.endsWith(`.${hb}`) || hb.endsWith(`.${ha}`);
};

/** Same-site links whose URL mentions the medicine, best-looking first. */
function medicineLinks(html, baseUrl, medication) {
  const base = new URL(baseUrl);
  const found = new Map();
  for (const m of html.matchAll(/href\s*=\s*["']([^"'#]+)["']/gi)) {
    let u;
    try {
      u = new URL(m[1].replace(/&amp;/g, "&"), base);
    } catch {
      continue;
    }
    if (!/^https?:$/.test(u.protocol) || !sameSite(u.hostname, base.hostname)) continue;
    const p = decodeURIComponent(u.pathname).toLowerCase();
    if (!MED_WORDS[medication].test(p) || BAD_PATH.test(p)) continue;
    u.search = "";
    const key = u.toString();
    const score = (GOOD_PATH.test(p) ? 2 : 0) - p.split("/").filter(Boolean).length * 0.1;
    found.set(key, Math.max(found.get(key) ?? -Infinity, score));
  }
  return [...found.entries()].sort((a, b) => b[1] - a[1]).map(([u]) => u);
}

async function tryPage(fetcher, url, medication) {
  const res = await fetcher.get(url);
  if (!res.ok) return { url, ok: false, reason: res.reason ?? `HTTP ${res.status}`, transport: res.transport, doses: 0 };
  const { doses } = extractStandardPrices(res.body, medication);
  const n = Object.keys(doses).length;
  const high = Object.values(doses).filter((d) => d.confidence === "high").length;
  return { url: res.finalUrl || url, ok: true, transport: res.transport, doses: n, high, prices: Object.fromEntries(Object.entries(doses).map(([d, v]) => [d, v.price])), body: res.body };
}

/** Sister-page guesses: a found Mounjaro URL often has a Wegovy twin. */
function twinGuesses(url, medication) {
  if (!url) return [];
  const swaps = medication === "wegovy"
    ? [[/mounjaro/gi, "wegovy"], [/tirzepatide/gi, "semaglutide"]]
    : [[/wegovy/gi, "mounjaro"], [/semaglutide/gi, "tirzepatide"]];
  let guess = url;
  for (const [re, to] of swaps) guess = guess.replace(re, to);
  return guess !== url ? [guess] : [];
}

async function discoverFor(fetcher, provider, seeds) {
  const result = {};
  const pageCache = new Map();
  const seedSet = new Set(Object.values(seeds).flat());
  // Mounjaro first so its result can seed a Wegovy guess.
  for (const medication of [...provider.meds].sort()) {
    const tried = new Map();
    const other = result.mounjaro?.proposed ?? result.wegovy?.proposed ?? null;
    const queue = [...new Set([...twinGuesses(other, medication), ...seeds[medication]])];
    const budget = MAX_CANDIDATES_PER_MED + queue.length;
    while (queue.length && tried.size < budget) {
      const url = queue.shift();
      if (tried.has(url)) continue;
      const r = pageCache.get(url) ?? (await tryPage(fetcher, url, medication));
      pageCache.set(url, r);
      // Same page may serve both medicines; re-extract for this one.
      const scored = r.ok && r.body ? { ...r, ...(await rescore(r, medication)) } : r;
      tried.set(url, scored);
      if (scored.doses === 6 && scored.high === 6) break;
      // Follow medicine links found on any seed page (home, category, cited page).
      if (r.ok && r.body && seedSet.has(url)) {
        for (const l of medicineLinks(r.body, r.url, medication).slice(0, MAX_CANDIDATES_PER_MED)) if (!tried.has(l) && !queue.includes(l)) queue.push(l);
      }
    }
    const ranked = [...tried.values()].filter((t) => t.ok).sort((a, b) => b.doses - a.doses || b.high - a.high || a.url.length - b.url.length);
    const best = ranked[0] && ranked[0].doses >= 3 ? ranked[0] : null;
    result[medication] = {
      proposed: best?.url ?? null,
      doses: best?.doses ?? 0,
      prices: best?.prices ?? {},
      transport: best?.transport ?? null,
      tried: [...tried.values()].map((t) => ({ url: t.url, ok: t.ok, doses: t.doses, reason: t.reason })),
    };
  }
  return result;
}

async function rescore(r, medication) {
  const { doses } = extractStandardPrices(r.body, medication);
  return {
    doses: Object.keys(doses).length,
    high: Object.values(doses).filter((d) => d.confidence === "high").length,
    prices: Object.fromEntries(Object.entries(doses).map(([d, v]) => [d, v.price])),
  };
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const fetcher = createFetcher({ cacheDir: path.join(opts.out, "cache") });
  const sources = JSON.parse(fs.readFileSync(path.join(here, "sources.json"), "utf8")).providers;
  const current = await loadCurrentPrices({ fetcher });

  const providers = new Map();
  for (const medication of MEDICATIONS) {
    for (const p of current[medication].providers) {
      if (!providers.has(p.id)) providers.set(p.id, { ...p, meds: [] });
      providers.get(p.id).meds.push(medication);
    }
  }
  const targets = [...providers.values()].filter((p) => (opts.only ? opts.only.has(p.id) : !sources[p.id]));
  console.log(`Discovering price pages for ${targets.length} providers…`);

  // Comparison sites cite pharmacy URLs; use them as extra seeds.
  const comparators = await loadComparators(fetcher);
  const match = buildMatcher([...providers.values()].map((p) => ({ id: p.id, name: p.name, gphc: p.gphc, domains: [domainFromTrustpilot(p.trustpilotUrl)].filter(Boolean) })));
  const tagged = [];
  for (const c of comparators) for (const r of c.rows) {
    const m = match(r);
    if (m) tagged.push({ ...r, ourId: m.id, via: m.via });
  }
  const { kept } = dropAmbiguousMatches(tagged);
  const citedUrls = new Map();
  const glp = JSON.parse((await fetcher.get("https://glpcomparison.com/data/prices.json")).body || "{}");
  const glpUrlByName = new Map((glp.providers ?? []).map((p) => [p.name, p.url]));
  for (const r of kept) {
    const set = citedUrls.get(r.ourId) ?? { mounjaro: new Set(), wegovy: new Set() };
    if (r.sourceUrl) set[r.medication].add(r.sourceUrl);
    const g = r.site === "glpcomparison.com" ? glpUrlByName.get(r.name) : null;
    if (g) for (const m of MEDICATIONS) set[m].add(g);
    citedUrls.set(r.ourId, set);
  }

  const proposals = {};
  await Promise.all(
    targets.map(async (p) => {
      const domain = domainFromTrustpilot(p.trustpilotUrl);
      const cited = citedUrls.get(p.id);
      const seeds = {};
      for (const m of p.meds) {
        seeds[m] = [...(cited?.[m] ?? [])].filter((u) => !domain || sameSite(new URL(u).hostname, domain));
        if (domain) seeds[m].push(`https://${domain}/`);
      }
      if (p.meds.every((m) => seeds[m].length === 0)) {
        proposals[p.id] = { name: p.name, domain, error: "no domain or cited URL to start from" };
        console.log(`  ${p.id.padEnd(28)} no starting URL`);
        return;
      }
      const found = await discoverFor(fetcher, p, seeds);
      proposals[p.id] = { name: p.name, domain, ...found };
      console.log(`  ${p.id.padEnd(28)} ${p.meds.map((m) => `${m}:${found[m].doses}/6`).join(" ")}`);
    }),
  );

  const day = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/London" }).format(new Date());
  fs.mkdirSync(opts.out, { recursive: true });
  const base = path.join(opts.out, `url-proposals-${day}`);
  fs.writeFileSync(`${base}.json`, JSON.stringify(proposals, null, 2));
  const md = [`# Price-page URL proposals — ${day}`, "", "| Provider | Med | Proposed URL | Doses read | Via | Prices |", "|---|---|---|---|---|---|"];
  for (const [id, p] of Object.entries(proposals).sort()) {
    if (p.error) {
      md.push(`| ${id} | — | — | — | — | ${p.error} |`);
      continue;
    }
    for (const m of MEDICATIONS) {
      if (!p[m]) continue;
      const pr = Object.entries(p[m].prices).map(([d, v]) => `${d} £${v}`).join(", ");
      const why = p[m].proposed ? pr : p[m].tried.map((t) => (t.ok ? `${t.doses}/6` : t.reason)).join("; ");
      md.push(`| ${id} | ${m} | ${p[m].proposed ?? "—"} | ${p[m].doses}/6 | ${p[m].transport ?? "—"} | ${why} |`);
    }
  }
  fs.writeFileSync(`${base}.md`, md.join("\n"));
  console.log(`\n${base}.md\n${base}.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
