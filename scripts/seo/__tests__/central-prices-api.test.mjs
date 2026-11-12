import { test } from "node:test";
import assert from "node:assert/strict";
import { register } from "node:module";
import { pathToFileURL } from "node:url";
import { readFileSync } from "node:fs";

register(pathToFileURL("./scripts/seo/__tests__/helpers/ts-alias-loader.mjs").href, import.meta.url);
const { GET, OPTIONS } = await import("@/app/api/v1/prices/route.ts");
const { resetRateLimits } = await import("@/lib/api/rate-limiter.ts");
const robots = (await import("@/app/robots.ts")).default;

test("GET /api/v1/prices returns both medications by default with full security and cache headers", async () => {
  resetRateLimits();
  const req = new Request("http://localhost:3000/api/v1/prices", {
    headers: { "x-forwarded-for": "10.0.0.1" },
  });
  const res = await GET(req);
  assert.equal(res.status, 200);

  // Security & Robots headers
  assert.equal(res.headers.get("access-control-allow-origin"), null);
  assert.equal(res.headers.get("x-robots-tag"), "noindex, nofollow, noarchive");
  assert.ok(res.headers.get("cache-control")?.includes("public"));
  assert.ok(res.headers.get("cache-control")?.includes("s-maxage="));
  assert.ok(res.headers.get("x-ratelimit-limit"));
  assert.ok(res.headers.get("x-ratelimit-remaining"));
  assert.ok(res.headers.get("x-ratelimit-reset"));

  const json = await res.json();
  assert.equal(json.success, true);
  assert.equal(json.meta?.priceCheckDate, "31 October 2026");
  assert.ok(json.meta?.pricingPolicy);
  assert.ok(Array.isArray(json.data?.mounjaro));
  assert.ok(Array.isArray(json.data?.wegovy));
  assert.equal(json.data.mounjaro.length, 6);
  assert.equal(json.data.wegovy.length, 6);
});

test("GET /api/v1/prices?medicine=mounjaro returns only Mounjaro data", async () => {
  resetRateLimits();
  const req = new Request("http://localhost:3000/api/v1/prices?medicine=mounjaro", {
    headers: { "x-forwarded-for": "10.0.0.2" },
  });
  const res = await GET(req);
  assert.equal(res.status, 200);
  const json = await res.json();
  assert.ok(json.data?.mounjaro);
  assert.equal(json.data?.wegovy, undefined);
});

test("GET /api/v1/prices?medicine=wegovy returns only Wegovy data", async () => {
  resetRateLimits();
  const req = new Request("http://localhost:3000/api/v1/prices?medicine=wegovy", {
    headers: { "x-forwarded-for": "10.0.0.3" },
  });
  const res = await GET(req);
  assert.equal(res.status, 200);
  const json = await res.json();
  assert.ok(json.data?.wegovy);
  assert.equal(json.data?.mounjaro, undefined);
});

test("GET /api/v1/prices returns 400 Bad Request on invalid medicine parameter", async () => {
  resetRateLimits();
  const req = new Request("http://localhost:3000/api/v1/prices?medicine=invalid-med", {
    headers: { "x-forwarded-for": "10.0.0.4" },
  });
  const res = await GET(req);
  assert.equal(res.status, 400);
  const json = await res.json();
  assert.equal(json.success, false);
  assert.equal(json.error?.code, "INVALID_MEDICINE");
  assert.ok(json.error?.message.includes("invalid-med"));
});

test("GET /api/v1/prices returns 400 Bad Request on invalid dosage parameter", async () => {
  resetRateLimits();
  const req = new Request("http://localhost:3000/api/v1/prices?medicine=mounjaro&dosage=99mg", {
    headers: { "x-forwarded-for": "10.0.0.5" },
  });
  const res = await GET(req);
  assert.equal(res.status, 400);
  const json = await res.json();
  assert.equal(json.success, false);
  assert.equal(json.error?.code, "INVALID_DOSAGE");
  assert.ok(json.error?.message.includes("99mg"));
});

test("GET /api/v1/prices?medicine=mounjaro&dosage=2.5mg filters prices to requested dose", async () => {
  resetRateLimits();
  const req = new Request("http://localhost:3000/api/v1/prices?medicine=mounjaro&dosage=2.5mg", {
    headers: { "x-forwarded-for": "10.0.0.6" },
  });
  const res = await GET(req);
  assert.equal(res.status, 200);
  const json = await res.json();
  assert.ok(json.data?.mounjaro);
  for (const provider of json.data.mounjaro) {
    assert.deepEqual(Object.keys(provider.prices), ["2.5mg"]);
  }
});

test("feed payload contains only sanitized public data and separates retail prices from offers", async () => {
  resetRateLimits();
  const req = new Request("http://localhost:3000/api/v1/prices", {
    headers: { "x-forwarded-for": "10.0.0.7" },
  });
  const res = await GET(req);
  const json = await res.json();

  const allProviders = [...json.data.mounjaro, ...json.data.wegovy];
  for (const p of allProviders) {
    // Required public fields
    assert.ok(p.id);
    assert.ok(p.name);
    assert.ok(p.gphcRegNo);
    assert.ok(typeof p.rating === "number");
    assert.ok(p.deliveryNote, "deliveryNote must be clearly identified");
    assert.equal(p.priceCheckDate, "31 October 2026");
    assert.ok(p.updatedLabel);
    assert.ok(typeof p.headlineFrom === "number");
    assert.ok(typeof p.prices === "object");
    assert.ok(Array.isArray(p.offers));

    // Must NOT expose internal admin or affiliate secrets
    assert.equal(p.admin, undefined);
    assert.equal(p.token, undefined);
    assert.equal(p.secret, undefined);
    assert.equal(p.commission, undefined);
    assert.equal(p.cpa, undefined);
    assert.equal(p.password, undefined);
    assert.equal(p.internalNotes, undefined);
  }
});

test("rate limiting triggers HTTP 429 when client exceeds request limit", async () => {
  resetRateLimits();
  const testIp = "192.168.1.100";
  let lastRes;

  // Send 60 allowed requests
  for (let i = 0; i < 60; i++) {
    const req = new Request("http://localhost:3000/api/v1/prices", {
      headers: { "x-forwarded-for": testIp },
    });
    lastRes = await GET(req);
    assert.equal(lastRes.status, 200);
  }

  // 61st request should be rate limited
  const req61 = new Request("http://localhost:3000/api/v1/prices", {
    headers: { "x-forwarded-for": testIp },
  });
  const res61 = await GET(req61);
  assert.equal(res61.status, 429);
  assert.ok(res61.headers.get("retry-after"));
  assert.equal(res61.headers.get("x-ratelimit-remaining"), "0");

  const json61 = await res61.json();
  assert.equal(json61.success, false);
  assert.equal(json61.error?.code, "RATE_LIMIT_EXCEEDED");
});

test("robots.txt disallows /api/ and sitemap excludes /api/", () => {
  const robotsConfig = robots();
  const disallows = Array.isArray(robotsConfig.rules)
    ? robotsConfig.rules.flatMap((r) => r.disallow ?? [])
    : (robotsConfig.rules?.disallow ?? []);

  assert.ok(disallows.includes("/api/"), "robots.txt must disallow /api/");

  const sitemapSource = readFileSync("src/app/sitemap.ts", "utf8");
  assert.ok(!sitemapSource.includes("/api/v1/prices"), "sitemap.ts must not include /api/v1/prices");
});

test("OPTIONS /api/v1/prices returns 204 with CORS and X-Robots-Tag", async () => {
  const res = await OPTIONS(new Request("http://localhost:3000/api/v1/prices", {
    method: "OPTIONS",
    headers: { origin: "https://pencompare.co.uk" },
  }));
  assert.equal(res.status, 204);
  assert.equal(res.headers.get("access-control-allow-origin"), "https://pencompare.co.uk");
  assert.equal(res.headers.get("x-robots-tag"), "noindex, nofollow, noarchive");
  assert.ok(res.headers.get("access-control-allow-methods")?.includes("GET"));
});

test("dosage without medicine only returns the medicine that owns the dose", async () => {
  resetRateLimits();
  const res = await GET(new Request("http://localhost:3000/api/v1/prices?dosage=0.25mg", {
    headers: { "x-forwarded-for": "10.0.1.1" },
  }));
  const json = await res.json();
  assert.equal(json.data.mounjaro, undefined);
  for (const p of json.data.wegovy) assert.deepEqual(Object.keys(p.prices), ["0.25mg"]);
});

test("error responses are not cacheable", async () => {
  resetRateLimits();
  const res = await GET(new Request("http://localhost:3000/api/v1/prices?medicine=nope", {
    headers: { "x-forwarded-for": "10.0.1.2" },
  }));
  assert.equal(res.status, 400);
  assert.equal(res.headers.get("cache-control"), "no-store");
});

test("providers expose a structured delivery fee", async () => {
  resetRateLimits();
  const res = await GET(new Request("http://localhost:3000/api/v1/prices", {
    headers: { "x-forwarded-for": "10.0.1.3" },
  }));
  const json = await res.json();
  for (const p of [...json.data.mounjaro, ...json.data.wegovy]) {
    assert.ok(p.deliveryFeeFromGbp === null || typeof p.deliveryFeeFromGbp === "number");
  }
});

test("rate limiter ignores a spoofed first x-forwarded-for entry", async () => {
  const { getClientIp } = await import("@/lib/api/rate-limiter.ts");
  const req = new Request("http://localhost:3000/api/v1/prices", {
    headers: { "x-forwarded-for": "1.2.3.4, 203.0.113.9" },
  });
  assert.equal(getClientIp(req), "203.0.113.9");
});

test("health endpoint reports ok with six providers per medicine", async () => {
  const { GET: health } = await import("@/app/api/v1/prices/health/route.ts");
  const res = health();
  assert.equal(res.status, 200);
  const json = await res.json();
  assert.equal(json.status, "ok");
  assert.deepEqual(json.providers, { mounjaro: 6, wegovy: 6 });
  assert.equal(res.headers.get("x-robots-tag"), "noindex, nofollow, noarchive");
});

test("CORS allows pencompare.co.uk and no other origin", async () => {
  resetRateLimits();
  const ok = await GET(new Request("http://localhost:3000/api/v1/prices", {
    headers: { "x-forwarded-for": "10.0.2.1", origin: "https://www.pencompare.co.uk" },
  }));
  assert.equal(ok.headers.get("access-control-allow-origin"), "https://www.pencompare.co.uk");
  assert.equal(ok.headers.get("vary"), "Origin");

  const other = await GET(new Request("http://localhost:3000/api/v1/prices", {
    headers: { "x-forwarded-for": "10.0.2.2", origin: "https://evil.example" },
  }));
  assert.equal(other.status, 200);
  assert.equal(other.headers.get("access-control-allow-origin"), null);

  const preflight = await OPTIONS(new Request("http://localhost:3000/api/v1/prices", {
    method: "OPTIONS",
    headers: { origin: "https://evil.example" },
  }));
  assert.equal(preflight.headers.get("access-control-allow-origin"), null);
});
