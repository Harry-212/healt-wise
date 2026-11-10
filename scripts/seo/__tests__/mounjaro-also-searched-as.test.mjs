import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Client request (Nov 2026): at the bottom of /mounjaro-price-comparison, a line naming the common
// misspellings people search for. It must stay the last block of the article, after the closing CTA.
const PAGE = "src/app/mounjaro-price-comparison/page.tsx";
const text = () => readFileSync(PAGE, "utf8").replace(/\s+/g, " ");

test("the 'Also searched as' line is on the Mounjaro price comparison page", () => {
  const t = text();
  assert.ok(t.includes("Mounjaro prices:"));
  assert.ok(
    t.includes("Also searched as: monjaro prices, munjaro prices, manjaro prices"),
  );
  assert.ok(t.includes("you&apos;re in the right place for Mounjaro pricing."));
});

test("the line is the last block of the article, after the closing call to action", () => {
  const t = text();
  const cta = t.indexOf("Ready to compare and next-step your care?");
  const line = t.indexOf("Also searched as:");
  const end = t.indexOf("</article>");
  assert.ok(cta > 0 && line > cta && end > line);
});

test("the line is plain text, not a heading", () => {
  const t = text();
  const i = t.indexOf('id="mounjaro-also-searched-as"');
  const block = t.slice(i, t.indexOf("</section>", i));
  assert.ok(!/<h[1-6]\b/.test(block));
});
