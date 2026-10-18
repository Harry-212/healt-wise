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
      "data-hw-provider-id": "72",
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
  assert.equal(params.provider_id, "72");
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

test("extractAffiliateEventParams handles non-monetised and missing numeric values safely", async () => {
  const { extractAffiliateEventParams } = await import(
    "../../../src/lib/affiliateTracking.ts"
  );

  const anchor = new MockAnchorElement(
    {
      "data-hw-provider": "Asda Online Doctor",
      "data-hw-monetised": "false",
    },
    "https://onlinedoctor.asda.com"
  );

  const params = extractAffiliateEventParams(anchor);

  assert.equal(params.provider, "Asda Online Doctor");
  assert.equal(params.monetised, false);
  assert.equal(params.total_pence, 0);
  assert.equal(params.total_gbp, 0);
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
      "data-hw-provider-id": "72",
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

