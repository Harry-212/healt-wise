import { test } from "node:test";
import assert from "node:assert/strict";
import { classifyHttpResult, RECOMMENDED_ACTION } from "../lib/external-link-cache.mjs";
import { extractHtmlFields } from "../lib/extract.mjs";

// Task 39: "a blocked automated request must not be reported as a broken link".
test("Task 39: classifyHttpResult separates confirmed-broken from bot-blocked from transient failures", () => {
  assert.equal(classifyHttpResult(404), "Broken");
  assert.equal(classifyHttpResult(410), "Broken");
  assert.equal(classifyHttpResult(401), "Blocked");
  assert.equal(classifyHttpResult(403), "Blocked");
  assert.equal(classifyHttpResult(405), "Blocked");
  assert.equal(classifyHttpResult(429), "Blocked");
  assert.equal(classifyHttpResult(500), "Temporarily unavailable");
  assert.equal(classifyHttpResult(503), "Temporarily unavailable");
  assert.equal(classifyHttpResult("timeout"), "Temporarily unavailable");
  assert.equal(classifyHttpResult("unreachable"), "Temporarily unavailable");
  assert.equal(classifyHttpResult(200), "Working");
});

test("Task 39: every non-Working classification has a distinct recommended action, and Blocked's never says broken", () => {
  assert.match(RECOMMENDED_ACTION.Broken, /confirmed broken/i);
  assert.match(RECOMMENDED_ACTION.Blocked, /not proof.*broken/i);
  assert.match(RECOMMENDED_ACTION.Blocked, /verify manually/i);
  assert.match(RECOMMENDED_ACTION["Temporarily unavailable"], /re-check/i);
});

const siteHostname = "www.healthwise360.co.uk";
const approvedSourceDomains = ["gov.uk", "nhs.uk"];
const pageUrl = "https://www.healthwise360.co.uk/helpful-guides/example";

function sourceLinksFrom(html) {
  return extractHtmlFields(html, pageUrl, siteHostname, approvedSourceDomains).sourceLinks;
}

test("Task 39/40: a source link in the main article body is located as Main content, with its visible anchor text", () => {
  const html = `<html><body><article><p>See <a href="https://www.gov.uk/guidance/example">the guidance</a>.</p></article></body></html>`;
  const links = sourceLinksFrom(html);
  assert.equal(links.length, 1);
  assert.equal(links[0].location, "Main content");
  assert.equal(links[0].anchorText, "the guidance");
  assert.equal(links[0].url, "https://www.gov.uk/guidance/example");
});

test("Task 39/40: a source link inside #faq is located as FAQ", () => {
  const html = `<html><body><section id="faq"><a href="https://www.nhs.uk/info">NHS info</a></section></body></html>`;
  const links = sourceLinksFrom(html);
  assert.equal(links.length, 1);
  assert.equal(links[0].location, "FAQ");
});

test("Task 39/40: a source link inside #references or #sources is located as Sources section", () => {
  const htmlReferences = `<html><body><section id="references"><a href="https://www.gov.uk/a">A</a></section></body></html>`;
  const htmlSources = `<html><body><section id="sources"><a href="https://www.gov.uk/b">B</a></section></body></html>`;
  assert.equal(sourceLinksFrom(htmlReferences)[0].location, "Sources section");
  assert.equal(sourceLinksFrom(htmlSources)[0].location, "Sources section");
});

test("Task 39/40: a source URL cited only in JSON-LD (no visible <a>) is still captured, with location JSON-LD and no anchor text", () => {
  const html = `<html><head><script type="application/ld+json">${JSON.stringify({
    "@type": "Article",
    citation: "https://www.nhs.uk/schema-only-citation",
  })}</script></head><body><p>No link here.</p></body></html>`;
  const links = sourceLinksFrom(html);
  assert.equal(links.length, 1);
  assert.equal(links[0].location, "JSON-LD");
  assert.equal(links[0].anchorText, null);
  assert.equal(links[0].url, "https://www.nhs.uk/schema-only-citation");
});

test("Task 39/40: a URL that is both a visible link and cited in JSON-LD is reported once, keeping its HTML location", () => {
  const html = `<html><head><script type="application/ld+json">${JSON.stringify({
    citation: "https://www.gov.uk/guidance/example",
  })}</script></head><body><section id="faq"><a href="https://www.gov.uk/guidance/example">guidance</a></section></body></html>`;
  const links = sourceLinksFrom(html);
  assert.equal(links.length, 1);
  assert.equal(links[0].location, "FAQ");
});
