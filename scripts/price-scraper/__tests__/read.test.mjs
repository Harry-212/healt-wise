import { test } from "node:test";
import assert from "node:assert/strict";
import { readPharmacy } from "../lib/read.mjs";
import { manualCheckSection } from "../lib/report.mjs";
import { buildProposal } from "../lib/proposal.mjs";

const PRICED = "<title>Mounjaro</title> Dosage Price 2.5mg £179.99 5mg £189.99 7.5mg £249.99 10mg £279.99 12.5mg £299.99 15mg £309.99";
const EMPTY = "<title>Mounjaro – Weight Loss Injection</title><p>Choose your dose to see the price.</p>";
const ok = (body) => ({ ok: true, status: 200, body, transport: "node" });

/** Fake fetcher returning the queued responses in order; records refresh flags. */
function fakeFetcher(...responses) {
  const calls = [];
  return {
    calls,
    async get(url, opts = {}) {
      calls.push({ url, refresh: Boolean(opts.refresh) });
      return responses.shift();
    },
  };
}
const noSleep = { sleep: async () => {} };

test("page without prices is retried once, bypassing the cache, and recovers", async () => {
  const f = fakeFetcher(ok(EMPTY), ok(PRICED));
  const r = await readPharmacy(f, "https://shop.test/mounjaro", "mounjaro", undefined, noSleep);
  assert.equal(r.status, "ok");
  assert.equal(r.retried, true);
  assert.deepEqual(f.calls.map((c) => c.refresh), [false, true]);
  assert.match(r.reason, /first attempt: no dose prices .*Mounjaro – Weight Loss Injection/);
});

test("still no prices after the retry: reported with title/size and the retry noted", async () => {
  const f = fakeFetcher(ok(EMPTY), ok(EMPTY));
  const r = await readPharmacy(f, "https://shop.test/mounjaro", "mounjaro", undefined, noSleep);
  assert.equal(r.status, "no-prices");
  assert.match(r.reason, /title "Mounjaro – Weight Loss Injection", 0 KB\); same after a retry/);
});

test("a failed request is retried; a bot wall is not", async () => {
  const failed = fakeFetcher({ ok: false, blocked: false, status: 503, reason: "HTTP 503", body: "" }, ok(PRICED));
  assert.equal((await readPharmacy(failed, "https://x.test/", "mounjaro", undefined, noSleep)).status, "ok");
  assert.equal(failed.calls.length, 2);

  const wall = fakeFetcher({ ok: false, blocked: true, status: 403, reason: "bot protection page", body: "", transport: "node+curl" });
  const r = await readPharmacy(wall, "https://x.test/", "mounjaro", undefined, noSleep);
  assert.equal(r.status, "blocked");
  assert.equal(wall.calls.length, 1);
});

test("a priced page is read once", async () => {
  const f = fakeFetcher(ok(PRICED));
  const r = await readPharmacy(f, "https://x.test/", "mounjaro", undefined, noSleep);
  assert.equal(r.status, "ok");
  assert.equal(f.calls.length, 1);
  assert.equal(r.retried, undefined);
});

const row = (over) => ({
  providerId: "asda-online-doctor", provider: "Asda", medication: "mounjaro", dose: "2.5mg",
  current: 148.97, consensus: 148.97, comparators: [{ site: "glpcomparison.com", standard: 148.97 }],
  pharmacyStatus: "blocked", pharmacyReason: "bot protection page", pharmacyUrl: "https://onlinedoctor.asda.com/uk/mounjaro.html",
  action: "manual", ...over,
});

test("manual check list: blocked pages listed with comparator hints; not-configured pages excluded", () => {
  const md = manualCheckSection([
    row({}),
    row({ dose: "5mg", current: 188.97, consensus: 168.97, comparators: [{ site: "glpcomparison.com", standard: 168.97 }] }),
    row({ dose: "7.5mg", consensus: null, comparators: [] }),
    row({ providerId: "curate", provider: "Curate", pharmacyStatus: "not-configured" }),
    row({ providerId: "zava", provider: "Zava", pharmacyStatus: "ok", action: "unchanged" }),
  ]).join("\n");
  assert.match(md, /## Manual check list \(1\)/);
  assert.match(md, /### Asda \(mounjaro\): blocked/);
  assert.match(md, /Page: https:\/\/onlinedoctor\.asda\.com\/uk\/mounjaro\.html/);
  assert.match(md, /\| 2\.5mg \| £148\.97 \| glpcomparison\.com £148\.97 \| matches comparison sites \|/);
  assert.match(md, /\| 5mg \| £188\.97 \| .* \| \*\*check\*\*: comparison sites -10\.6% \|/);
  assert.match(md, /\| 7\.5mg \| .* \| — \| no comparison data \|/);
  assert.doesNotMatch(md, /Curate|Zava/);
});

test("proposal lists configured-but-unread pages under manual, once per pharmacy × medicine", () => {
  const p = buildProposal([row({}), row({ dose: "5mg" }), row({ providerId: "curate", provider: "Curate", pharmacyStatus: "not-configured" })], "2026-11-02");
  assert.deepEqual(p.manual, [
    { medication: "mounjaro", providerId: "asda-online-doctor", provider: "Asda", status: "blocked", url: "https://onlinedoctor.asda.com/uk/mounjaro.html" },
  ]);
});
