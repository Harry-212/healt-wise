import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// The homepage and London partner cards hard-coded /go/<guess> links; four returned 404 and none carried the
// click-tracking attributes. They now take the destination from the central provider data and carry the
// attributes read by the provider_click and affiliate_click trackers.
const FILES = [
  "src/components/home/HomeContentNov2026.tsx",
  "src/components/locations/content/LondonLocationContent.tsx",
];
const IDS = ["dosedirect", "i-prescribe", "pharmacy-me", "reach-online-pharmacy", "shemed", "solira"];

test("partner cards use central provider ids, not typed /go/ paths", () => {
  for (const f of FILES) {
    const t = readFileSync(f, "utf8");
    for (const id of IDS) assert.ok(t.includes(`providerId: "${id}"`), `${f} ${id}`);
    assert.ok(!/href: "\/go\//.test(t), f);
    assert.ok(t.includes("getProvider(p.providerId)?.affiliate.outboundUrl"), f);
  }
});

test("partner card buttons carry the tracking attributes", () => {
  for (const f of FILES) {
    const t = readFileSync(f, "utf8");
    for (const a of ["data-pharmacy={p.name}", "data-provider-id={p.providerId}", "data-hw-provider-id={p.providerId}", 'data-hw-monetised="true"', 'className="hw360-cta']) {
      assert.ok(t.includes(a), `${f} ${a}`);
    }
  }
});
