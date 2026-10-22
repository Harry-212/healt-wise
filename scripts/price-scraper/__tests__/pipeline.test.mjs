import { test } from "node:test";
import assert from "node:assert/strict";
import { parseRobots, isAllowed, isRefused } from "../lib/http.mjs";
import { buildMatcher, dropAmbiguousMatches } from "../lib/match.mjs";
import { compareAll, applyAffiliateDiscount } from "../lib/compare.mjs";
import { decodeFlightPayload, jsonObjectsStartingWith } from "../lib/rsc.mjs";
import { buildProposal } from "../lib/proposal.mjs";
import { firstWorkingDay, ukToday } from "../lib/schedule.mjs";

test("first UK working day skips weekends and bank holidays", () => {
  const holidays = new Set(["2026-12-25", "2026-12-28", "2027-01-01", "2027-05-03"]);
  assert.equal(firstWorkingDay("2026-11-15", holidays), "2026-11-02"); // 1 Nov is a Sunday
  assert.equal(firstWorkingDay("2026-12-09", holidays), "2026-12-01");
  assert.equal(firstWorkingDay("2027-01-20", holidays), "2027-01-04"); // 1 Jan holiday, then weekend
  assert.equal(firstWorkingDay("2027-05-10", holidays), "2027-05-04"); // 1–2 May weekend, 3 May holiday
});

test("UK date follows Europe/London, not UTC", () => {
  // 23:30 UTC on 31 Oct 2026 (GMT) is still 31 Oct; 23:30 UTC on 31 Jul 2026 (BST) is already 1 Aug.
  assert.equal(ukToday(new Date("2026-10-31T23:30:00Z")), "2026-10-31");
  assert.equal(ukToday(new Date("2026-07-31T23:30:00Z")), "2026-08-01");
});

test("proposal: only update rows are applied; pages with a review row are not marked checked", () => {
  const row = (providerId, dose, action, extra = {}) => ({ providerId, provider: providerId, medication: "mounjaro", dose, action, current: 150, sitePrice: 155, ...extra });
  const p = buildProposal(
    [
      row("a", "2.5mg", "update"),
      row("a", "5mg", "unchanged"),
      row("a", "7.5mg", "manual"),
      row("b", "2.5mg", "unchanged"),
      row("b", "5mg", "review"),
      row("c", "2.5mg", "manual"),
    ],
    "2026-11-02",
  );
  assert.equal(p.checkedOn, "2026-11-02");
  assert.deepEqual(p.updates.map((u) => [u.providerId, u.dose, u.price, u.expectedCurrent]), [["a", "2.5mg", 155, 150]]);
  assert.deepEqual(p.checked, [{ medication: "mounjaro", providerId: "a" }]);
  assert.deepEqual(p.review.map((r) => r.providerId), ["b"]);
});

test("robots.txt: '*' group applies; longest rule wins; Allow wins ties", () => {
  const rules = parseRobots(`User-agent: GPTBot\nDisallow: /\n\nUser-agent: *\nAllow: /\nDisallow: /go/\nAllow: /go/public`);
  assert.equal(isAllowed(rules, "/data/prices.json"), true);
  assert.equal(isAllowed(rules, "/go/asda"), false);
  assert.equal(isAllowed(rules, "/go/public/x"), true);
});

test("robots.txt: a group naming our bot overrides '*'", () => {
  const rules = parseRobots(`User-agent: *\nAllow: /\n\nUser-agent: Healthwise360-PriceCheck\nDisallow: /`);
  assert.equal(isAllowed(rules, "/anything"), false);
});

test("refusals that trigger the single curl retry: 403/429 and challenge pages", () => {
  assert.equal(isRefused({ status: 403, body: "" }), true);
  assert.equal(isRefused({ status: 429, body: "" }), true);
  assert.equal(isRefused({ status: 200, body: "<title>Just a moment...</title>" }), true);
  assert.equal(isRefused({ status: 200, body: "<title>Vercel Security Checkpoint</title>" }), true);
  assert.equal(isRefused({ status: 200, body: "<title>Mounjaro prices</title> 2.5mg £149" }), false);
  assert.equal(isRefused({ status: 404, body: "Not found" }), false);
});

test("matcher: GPhC first, then domain, then normalised name", () => {
  const match = buildMatcher([
    { id: "asda-online-doctor", name: "Asda", gphc: "1116105", domains: ["onlinedoctor.asda.com"] },
    { id: "the-independent-pharmacy", name: "The Independent Pharmacy", gphc: null, domains: [] },
  ]);
  assert.deepEqual(match({ gphc: "1116105", name: "x" }), { id: "asda-online-doctor", via: "gphc" });
  assert.deepEqual(match({ domain: "onlinedoctor.asda.com", name: "x" }), { id: "asda-online-doctor", via: "domain" });
  assert.deepEqual(match({ name: "Independent Pharmacy (The)" }), { id: "the-independent-pharmacy", via: "name" });
  assert.equal(match({ name: "Unknown Chemist" }), null);
});

test("shared GPhC number: several brands from one site are dropped unless matched by name/domain", () => {
  const rows = [
    { site: "a", ourId: "second-nature", name: "Second Nature", via: "name" },
    { site: "a", ourId: "second-nature", name: "Second Nature (Plan B)", via: "gphc" },
    { site: "b", ourId: "x", name: "Brand 1", via: "gphc" },
    { site: "b", ourId: "x", name: "Brand 2", via: "gphc" },
    { site: "c", ourId: "y", name: "Only One", via: "gphc" },
  ];
  const { kept, dropped } = dropAmbiguousMatches(rows);
  assert.deepEqual(kept.map((r) => r.name).sort(), ["Only One", "Second Nature"]);
  assert.equal(dropped.length, 3);
});

test("compare: actions follow the agreed rules", () => {
  const current = {
    mounjaro: { providers: [{ id: "p", name: "P", prices: { "2.5mg": 150, "5mg": 170, "7.5mg": 200, "10mg": 230, "12.5mg": 250, "15mg": 270 } }] },
    wegovy: { providers: [] },
  };
  const pharmacyReads = new Map([
    ["p", { mounjaro: { status: "partial", doses: {
      "2.5mg": { price: 150, confidence: "high" },
      "5mg": { price: 175, confidence: "high" },
      "7.5mg": { price: 220, confidence: "high" },
      "10mg": { price: 235, confidence: "medium" },
    } } }],
  ]);
  const comparatorRows = [
    { ourId: "p", medication: "mounjaro", dose: "5mg", standard: 176, site: "s" },
    { ourId: "p", medication: "mounjaro", dose: "7.5mg", standard: 200, site: "s" },
  ];
  const byDose = Object.fromEntries(compareAll({ current, pharmacyReads, comparatorRows }).map((r) => [r.dose, r]));
  assert.equal(byDose["2.5mg"].action, "unchanged");
  assert.equal(byDose["5mg"].action, "update");
  assert.equal(byDose["7.5mg"].action, "review"); // +10% vs comparators
  assert.equal(byDose["7.5mg"].deltaVsConsensus, 10);
  assert.equal(byDose["10mg"].action, "review"); // medium confidence
  assert.equal(byDose["12.5mg"].action, "manual");
});

test("affiliate partners: site price is standard minus the partner discount; comparators still use standard", () => {
  assert.equal(applyAffiliateDiscount(154.99, { type: "percent", value: 10 }), 139.49);
  assert.equal(applyAffiliateDiscount(132.99, { type: "percent", value: 5 }), 126.34);
  assert.equal(applyAffiliateDiscount(144.99, { type: "amount", value: 10 }), 134.99);
  assert.equal(applyAffiliateDiscount(144.99, null), 144.99);

  const current = {
    mounjaro: { providers: [{ id: "reach", name: "Reach", prices: { "2.5mg": 139.49, "5mg": 150 } }] },
    wegovy: { providers: [] },
  };
  const pharmacyReads = new Map([["reach", { mounjaro: { status: "ok", doses: {
    "2.5mg": { price: 154.99, confidence: "high" },
    "5mg": { price: 175.99, confidence: "high" },
  } } }]]);
  const comparatorRows = [{ ourId: "reach", medication: "mounjaro", dose: "2.5mg", standard: 154.99, site: "s" }];
  const rows = compareAll({ current, pharmacyReads, comparatorRows, discounts: { reach: { type: "percent", value: 10 } } });
  const byDose = Object.fromEntries(rows.map((r) => [r.dose, r]));
  assert.equal(byDose["2.5mg"].action, "unchanged");
  assert.equal(byDose["2.5mg"].deltaVsConsensus, 0);
  assert.equal(byDose["5mg"].sitePrice, 158.39);
  assert.equal(byDose["5mg"].action, "update");
});

test("flight payload decoding finds provider objects", () => {
  const obj = { id: "asda", name: "Asda", gphcRegNo: "1116105", prices: { "2.5mg": 148.97 } };
  const chunk = JSON.stringify(`3:["$","div",null,{"providers":[${JSON.stringify(obj)}]}]`);
  const html = `<script>self.__next_f.push([1,${chunk}])</script>`;
  const found = jsonObjectsStartingWith(decodeFlightPayload(html), '{"id":"');
  assert.deepEqual(found[0], obj);
});
