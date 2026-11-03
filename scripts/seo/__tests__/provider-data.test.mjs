import { test } from "node:test";
import assert from "node:assert/strict";
import { register } from "node:module";
import { pathToFileURL } from "node:url";

// Imports the REAL .ts source so these checks can't drift from what the site
// renders (same approach as pharmacy-website-id.test.mjs).
register(pathToFileURL("./scripts/seo/__tests__/helpers/ts-alias-loader.mjs").href, import.meta.url);
const providers = await import("@/lib/data/providers.ts");
const { AFFILIATE_PARTNER_IDS, AFFILIATE_PARTNERS_MAP } = await import("@/lib/data/affiliate-partners.ts");
const { GPHC_NUMBER_BY_PROVIDER_ID } = await import("@/lib/data/gphc-provider-numbers.ts");
const { allPharmacySlugs } = await import("@/lib/routes/all-pharmacy-slugs.ts");
const { FOOTER_PHARMACY_LINKS } = await import("@/lib/routes/footer-pharmacies.ts");
const { landingProviderName } = await import("@/lib/seo/pharmacy-review-seo.ts");

const { PROVIDERS, activeProviders, activeProviderCount, affiliateRedirects, validateProviders, getActiveProvider } =
  providers;

const activeIds = () => activeProviders().map((p) => p.id);

test("the central provider table is internally consistent", () => {
  assert.deepEqual(validateProviders(), []);
});

test("every registry that lists partners is derived from the active providers", () => {
  const ids = activeIds();
  assert.deepEqual([...AFFILIATE_PARTNER_IDS].sort(), [...ids].sort(), "affiliate registry");
  assert.deepEqual(Object.keys(AFFILIATE_PARTNERS_MAP).sort(), [...ids].sort(), "affiliate map");
  assert.deepEqual(allPharmacySlugs().sort(), [...ids].sort(), "pharmacy slugs (sitemap, llms.txt, directory)");
  assert.deepEqual(Object.keys(GPHC_NUMBER_BY_PROVIDER_ID).sort(), [...ids].sort(), "GPhC numbers");
  assert.deepEqual(
    FOOTER_PHARMACY_LINKS.map((l) => l.href).sort(),
    ids.map((id) => `/pharmacies/${id}`).sort(),
    "footer links",
  );
  for (const id of ids) assert.equal(landingProviderName(id), getActiveProvider(id).name, `${id}: review name`);
});

test("the partner count is the exact number of active providers", () => {
  assert.equal(activeProviderCount(), PROVIDERS.filter((p) => p.active).length);
  assert.equal(activeProviderCount(), activeProviders().length);
});

test("/go/ redirects are generated for exactly the active cloaked providers", () => {
  const expected = activeProviders()
    .filter((p) => p.affiliate.outboundUrl.startsWith("/go/"))
    .map((p) => p.affiliate.outboundUrl)
    .sort();
  assert.deepEqual(affiliateRedirects().map((r) => r.source).sort(), expected);
  for (const r of affiliateRedirects()) assert.ok(r.destination.startsWith("https://"), r.source);
});

test("controlled removal and addition update the count, the A-Z list and the redirects", () => {
  const before = { count: activeProviderCount(), ids: activeIds(), redirects: affiliateRedirects().length };
  const victim = PROVIDERS.find((p) => p.affiliate.outboundUrl.startsWith("/go/"));
  assert.ok(victim, "need a cloaked provider to exercise removal");

  victim.active = false;
  try {
    assert.equal(activeProviderCount(), before.count - 1);
    assert.ok(!activeIds().includes(victim.id));
    assert.equal(getActiveProvider(victim.id), undefined);
    assert.equal(affiliateRedirects().length, before.redirects - 1);
  } finally {
    victim.active = true;
  }
  assert.deepEqual(activeIds(), before.ids, "restoring the flag restores the list");

  const added = {
    id: "test-partner",
    name: "Aaa Test Partner",
    active: true,
    gphcNumber: "9999999",
    standardDeliveryFee: 0,
    affiliate: {
      outboundUrl: "/go/test-partner",
      destinationUrl: "https://example.com/offer",
      ctaLabel: "Start",
      badgeLabel: "Partner Pharmacy",
    },
    offers: [],
  };
  assert.deepEqual(validateProviders([...PROVIDERS, added]), []);
  PROVIDERS.push(added);
  try {
    assert.equal(activeProviderCount(), before.count + 1);
    assert.equal(activeIds()[0], "test-partner", "alphabetical, not commission, order");
    assert.ok(affiliateRedirects().some((r) => r.source === "/go/test-partner"));
  } finally {
    PROVIDERS.pop();
  }
  assert.equal(activeProviderCount(), before.count);
});

test("validation catches the mistakes that would break a page or redirect", () => {
  const base = PROVIDERS[0];
  const bad = (patch) => validateProviders([{ ...base, ...patch }]);
  assert.ok(bad({ id: "Bad Id" }).length > 0, "slug");
  assert.ok(bad({ gphcNumber: "12" }).length > 0, "GPhC");
  assert.ok(bad({ affiliate: { ...base.affiliate, outboundUrl: "/go/wrong" } }).length > 0, "cloaked id mismatch");
  assert.ok(bad({ affiliate: { ...base.affiliate, outboundUrl: `/go/${base.id}` } }).length > 0, "missing destination");
  assert.ok(bad({ affiliate: { ...base.affiliate, outboundUrl: "http://x.test" } }).length > 0, "non-https");
  assert.ok(validateProviders([base, base]).some((p) => p.includes("duplicate")), "duplicate id");
});
