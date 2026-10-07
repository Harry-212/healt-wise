import { test } from "node:test";
import assert from "node:assert/strict";
import { loadConfig, pageTypeFor } from "../lib/config.mjs";
import { checkSourceMissing } from "../rules/sources.mjs";

// Reads the real seo/seo.config.json rather than a hand-copied list, so this
// test can't silently drift from what seo:export actually uses in production.
const { pageTypeRules } = loadConfig();

test("DEV-02/DEV-04: blog pagination, topic and helpful-guides category pages classify as Archive, not as an article type", () => {
  assert.equal(pageTypeFor("/blog/page/2", pageTypeRules), "Archive");
  assert.equal(pageTypeFor("/blog/topic/mounjaro", pageTypeRules), "Archive");
  assert.equal(pageTypeFor("/blog/topic/mounjaro/page/2", pageTypeRules), "Archive");
  assert.equal(pageTypeFor("/helpful-guides/category/safety", pageTypeRules), "Archive");
});

test("DEV-02/DEV-04: genuine articles and guides still classify as their article type", () => {
  assert.equal(pageTypeFor("/blog/does-mounjaro-really-work-for-weight-loss-find-out-here", pageTypeRules), "Blog article");
  assert.equal(pageTypeFor("/helpful-guides/mounjaro-side-effects-uk", pageTypeRules), "Helpful Guide");
  assert.equal(pageTypeFor("/what-is-mounjaro", pageTypeRules), "Medicine overview");
});

test("DEV-04: an Archive page with no source links does not trigger SOURCE_MISSING", () => {
  const record = { httpStatus: 200, pageType: "Archive", sourceLinkCount: 0, url: "https://example.test/blog/page/2" };
  const findings = checkSourceMissing(record, { severities: { SOURCE_MISSING: "WARNING" } });
  assert.equal(findings.length, 0);
});

test("DEV-04: a genuine Blog article with no source links still triggers SOURCE_MISSING", () => {
  const record = { httpStatus: 200, pageType: "Blog article", sourceLinkCount: 0, url: "https://example.test/blog/some-article" };
  const findings = checkSourceMissing(record, { severities: { SOURCE_MISSING: "WARNING" } });
  assert.equal(findings.length, 1);
  assert.equal(findings[0].rule, "SOURCE_MISSING");
});
