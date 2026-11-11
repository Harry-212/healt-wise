import { test } from "node:test";
import assert from "node:assert/strict";
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register(pathToFileURL("./scripts/seo/__tests__/helpers/ts-alias-loader.mjs").href, import.meta.url);
const { GET, OPTIONS } = await import("@/app/api/v1/prices/route.ts");

test("GET /api/v1/prices returns both medications by default with CORS headers", async () => {
  const req = new Request("http://localhost:3000/api/v1/prices");
  const res = await GET(req);
  assert.equal(res.status, 200);
  assert.equal(res.headers.get("access-control-allow-origin"), "*");

  const json = await res.json();
  assert.equal(json.success, true);
  assert.ok(json.meta?.lastUpdated);
  assert.ok(Array.isArray(json.data?.mounjaro));
  assert.ok(Array.isArray(json.data?.wegovy));
  assert.ok(json.data.mounjaro.length > 0);
  assert.ok(json.data.wegovy.length > 0);
});

test("GET /api/v1/prices?medicine=wegovy returns only Wegovy data", async () => {
  const req = new Request("http://localhost:3000/api/v1/prices?medicine=wegovy");
  const res = await GET(req);
  const json = await res.json();
  assert.ok(json.data?.wegovy);
  assert.equal(json.data?.mounjaro, undefined);
});

test("OPTIONS /api/v1/prices returns 204 with CORS preflight headers", async () => {
  const res = await OPTIONS();
  assert.equal(res.status, 204);
  assert.equal(res.headers.get("access-control-allow-origin"), "*");
  assert.ok(res.headers.get("access-control-allow-methods")?.includes("GET"));
});
