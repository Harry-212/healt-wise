import test from "node:test";
import assert from "node:assert/strict";

class MockAnchorElement {
  constructor(attributes = {}, href = "https://example.com/go/affiliate") {
    this.href = href;
    this.dataset = {};
    this.attributes = { ...attributes };

    for (const [key, val] of Object.entries(attributes)) {
      if (key.startsWith("data-")) {
        const camel = key
          .slice(5)
          .replace(/-([a-z])/g, (_, char) => char.toUpperCase());
        this.dataset[camel] = val;
      }
    }
  }

  getAttribute(name) {
    return this.attributes[name] ?? null;
  }
}

test("extractAffiliateEventParams extracts all params correctly with proper types", async () => {
  const { extractAffiliateEventParams } = await import(
    "../../../src/lib/affiliateTracking.ts"
  );

  const anchor = new MockAnchorElement(
    {
      "data-hw-provider": "Pharmacy + Me",
      "data-hw-provider-id": "pharmacy-me",
      "data-hw-placement": "organic",
      "data-hw-monetised": "true",
      "data-hw-medication": "mounjaro",
      "data-hw-dose": "2.5mg",
      "data-hw-total-pence": "12634",
    },
    "https://pharmacyme.co.uk/go/hw360"
  );

  const params = extractAffiliateEventParams(anchor);

  assert.equal(params.link_url, "https://pharmacyme.co.uk/go/hw360");
  assert.equal(params.provider, "Pharmacy + Me");
  assert.equal(params.provider_id, "pharmacy-me");
  assert.equal(params.placement, "organic");
  assert.equal(params.monetised, true);
  assert.equal(typeof params.monetised, "boolean");
  assert.equal(params.medication, "mounjaro");
  assert.equal(params.dose, "2.5mg");
  assert.equal(params.total_pence, 12634);
  assert.equal(typeof params.total_pence, "number");
  assert.equal(params.total_gbp, 126.34);
  assert.equal(typeof params.total_gbp, "number");
});

test("extractAffiliateEventParams derives monetised from the partner list, not the attribute", async () => {
  const { extractAffiliateEventParams } = await import(
    "../../../src/lib/affiliateTracking.ts"
  );

  const fake = extractAffiliateEventParams(
    new MockAnchorElement(
      { "data-hw-provider": "Boots", "data-hw-provider-id": "boots", "data-hw-monetised": "true" },
      "https://boots.com"
    )
  );
  assert.equal(fake.monetised, false);
  assert.equal(fake.total_pence, 0);
  assert.equal(fake.total_gbp, 0);

  const real = extractAffiliateEventParams(
    new MockAnchorElement(
      { "data-hw-provider": "DoseDirect", "data-hw-provider-id": "dosedirect", "data-hw-monetised": "false" },
      "https://dosedirect.co.uk"
    )
  );
  assert.equal(real.monetised, true);
});

test("extractAffiliateEventParams falls back to a slug of the provider name when id is missing", async () => {
  const { extractAffiliateEventParams } = await import(
    "../../../src/lib/affiliateTracking.ts"
  );
  const params = extractAffiliateEventParams(
    new MockAnchorElement({ "data-hw-provider": "Reach Online Pharmacy" })
  );
  assert.equal(params.provider_id, "reach-online-pharmacy");
  assert.equal(params.monetised, true);
});

test("only the 5 affiliate partners are tracked; other providers send nothing", async () => {
  const { trackAffiliateClick } = await import(
    "../../../src/lib/affiliateTracking.ts"
  );

  const gtagCalls = [];
  const dataLayer = [];
  globalThis.window = {
    location: { pathname: "/compare/mounjaro-uk" },
    gtag: (...args) => gtagCalls.push(args),
    dataLayer,
  };

  const partners = [
    ["Pharmacy + Me", "pharmacy-me"],
    ["Reach Online Pharmacy", "reach-online-pharmacy"],
    ["DoseDirect", "dosedirect"],
    ["i-Prescribe", "i-prescribe"],
    ["SheMed", "shemed"],
  ];
  for (const [name, id] of partners) {
    const result = trackAffiliateClick(
      new MockAnchorElement({ "data-hw-provider": name, "data-hw-provider-id": id })
    );
    assert.ok(result, `${name} should be tracked`);
  }
  assert.equal(gtagCalls.length, 5);
  assert.equal(dataLayer.length, 5);

  for (const [name, id] of [
    ["Boots", "boots"],
    ["Superdrug", "superdrug"],
    ["Simple", "simple"],
    ["Unknown", ""],
  ]) {
    const result = trackAffiliateClick(
      new MockAnchorElement({ "data-hw-provider": name, "data-hw-provider-id": id })
    );
    assert.equal(result, null, `${name} must not be tracked`);
  }
  assert.equal(gtagCalls.length, 5);
  assert.equal(dataLayer.length, 5);
});

test("trackAffiliateClick pushes to gtag and dataLayer fallback", async () => {
  const { trackAffiliateClick } = await import(
    "../../../src/lib/affiliateTracking.ts"
  );

  const gtagCalls = [];
  const dataLayer = [];

  globalThis.window = {
    location: { pathname: "/mounjaro-price-comparison" },
    gtag: (...args) => gtagCalls.push(args),
    dataLayer,
  };
  globalThis.document = { title: "Mounjaro Price Comparison UK" };

  const anchor = new MockAnchorElement(
    {
      "data-hw-provider": "Pharmacy + Me",
      "data-hw-provider-id": "pharmacy-me",
      "data-hw-placement": "featured",
      "data-hw-monetised": "true",
      "data-hw-medication": "mounjaro",
      "data-hw-dose": "5mg",
      "data-hw-total-pence": "12824",
    },
    "https://pharmacyme.co.uk/go/hw360"
  );

  const result = trackAffiliateClick(anchor);

  assert.ok(result);
  assert.equal(result.total_gbp, 128.24);

  // Assert gtag called with 'event', 'affiliate_click'
  assert.equal(gtagCalls.length, 1);
  assert.equal(gtagCalls[0][0], "event");
  assert.equal(gtagCalls[0][1], "affiliate_click");
  assert.equal(gtagCalls[0][2].provider, "Pharmacy + Me");
  assert.equal(gtagCalls[0][2].total_pence, 12824);
  assert.equal(gtagCalls[0][2].total_gbp, 128.24);
  assert.equal(gtagCalls[0][2].page_path, "/mounjaro-price-comparison");

  // Assert dataLayer received push
  assert.equal(dataLayer.length, 1);
  assert.equal(dataLayer[0].event, "affiliate_click");
  assert.equal(dataLayer[0].provider, "Pharmacy + Me");
  assert.equal(dataLayer[0].total_gbp, 128.24);
});

test("shouldTrackInteraction prevents duplicate rapid double-firing", async () => {
  const { shouldTrackInteraction } = await import(
    "../../../src/lib/affiliateTracking.ts"
  );

  const anchor = new MockAnchorElement({});

  assert.equal(shouldTrackInteraction(anchor, 500), true);
  // Immediate second call should be suppressed
  assert.equal(shouldTrackInteraction(anchor, 500), false);
});


function makeStorage() {
  const store = new Map();
  return {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k),
  };
}

test("affiliate click followed by a return emits one affiliate_return with seconds_away", async () => {
  const { trackAffiliateClick, trackAffiliateReturn } = await import(
    "../../../src/lib/affiliateTracking.ts"
  );

  const gtagCalls = [];
  globalThis.window = {
    location: { pathname: "/compare/mounjaro-uk" },
    gtag: (...args) => gtagCalls.push(args),
    dataLayer: [],
    sessionStorage: makeStorage(),
  };

  // No click yet: nothing to report.
  assert.equal(trackAffiliateReturn("bfcache"), null);

  const realNow = Date.now;
  const t0 = realNow();
  Date.now = () => t0;
  trackAffiliateClick(
    new MockAnchorElement({
      "data-hw-provider": "DoseDirect",
      "data-hw-provider-id": "dosedirect",
    })
  );
  Date.now = () => t0 + 42_000;
  const ret = trackAffiliateReturn("bfcache");
  Date.now = realNow;

  assert.ok(ret);
  assert.equal(ret.provider_id, "dosedirect");
  assert.equal(ret.seconds_away, 42);
  assert.equal(ret.return_source, "bfcache");
  const returns = gtagCalls.filter((c) => c[1] === "affiliate_return");
  assert.equal(returns.length, 1);

  // Marker is consumed: a second return signal does not double count.
  assert.equal(trackAffiliateReturn("tab_visible"), null);
});

test("a return after the 30 minute window is ignored", async () => {
  const { trackAffiliateClick, trackAffiliateReturn } = await import(
    "../../../src/lib/affiliateTracking.ts"
  );

  globalThis.window = {
    location: { pathname: "/" },
    gtag: () => {},
    dataLayer: [],
    sessionStorage: makeStorage(),
  };

  const realNow = Date.now;
  const t0 = realNow();
  Date.now = () => t0;
  trackAffiliateClick(
    new MockAnchorElement({
      "data-hw-provider": "DoseDirect",
      "data-hw-provider-id": "dosedirect",
    })
  );
  Date.now = () => t0 + 31 * 60 * 1000;
  assert.equal(trackAffiliateReturn("tab_visible"), null);
  Date.now = realNow;
});

test("clicks on internal links do not arm affiliate_return", async () => {
  const { trackAffiliateClick, trackAffiliateReturn } = await import(
    "../../../src/lib/affiliateTracking.ts"
  );

  globalThis.window = {
    location: { pathname: "/mounjaro-price-comparison", host: "www.healthwise360.co.uk" },
    gtag: () => {},
    dataLayer: [],
    sessionStorage: makeStorage(),
  };

  trackAffiliateClick(
    new MockAnchorElement(
      { "data-hw-provider": "DoseDirect", "data-hw-provider-id": "dosedirect" },
      "https://www.healthwise360.co.uk/pharmacies/dosedirect"
    )
  );
  assert.equal(trackAffiliateReturn("tab_visible"), null);
});
