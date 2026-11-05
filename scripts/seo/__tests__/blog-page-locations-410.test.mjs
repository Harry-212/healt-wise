import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Task 127 follow-up: every /blog/page/<n>?topic=locations variant Search Console reported
// returns 410 (the locations topic was removed); the plain archive pages are not rewritten.
test("blog page 2-5 with topic=locations are 410 query variants", async () => {
  const { GONE_BLOG_PAGE_LOCATIONS_QUERY_PATHS, GONE_EXACT_PATHS } = await import("../../../src/lib/seo/gone-paths.ts");
  for (const n of [2, 3, 4, 5]) assert.ok(GONE_BLOG_PAGE_LOCATIONS_QUERY_PATHS.includes(`/blog/page/${n}`));
  for (const p of GONE_BLOG_PAGE_LOCATIONS_QUERY_PATHS) assert.ok(!GONE_EXACT_PATHS.includes(p), `${p} must only be gone with the topic query`);
});

test("next.config gates the rewrite on the topic=locations query", () => {
  const config = readFileSync("next.config.ts", "utf8").replace(/\s+/g, " ");
  assert.match(config, /GONE_BLOG_PAGE_LOCATIONS_QUERY_PATHS\.map\(\(source\) => \(\{ source, has: \[\{ type: "query" as const, key: "topic", value: "locations" \}\]/);
});
