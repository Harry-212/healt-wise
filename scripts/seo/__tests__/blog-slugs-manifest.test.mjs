import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { listBlogArticleFolders, renderManifest } from "../../generate-blog-slugs.mjs";

// The sitemap lost 23 blog articles whenever it was rebuilt on the server (no src folder there).
// It now falls back to this build-time list, so the committed file must match the folders.
test("the committed blog slug list matches the folders under src/app/blog", () => {
  const committed = readFileSync("src/lib/generated/blog-article-slugs.ts", "utf8");
  assert.equal(committed, renderManifest(listBlogArticleFolders()), "run: node scripts/generate-blog-slugs.mjs");
});

test("the list is not empty and has no dynamic or pagination folders", () => {
  const slugs = listBlogArticleFolders();
  assert.ok(slugs.length > 40);
  assert.ok(!slugs.includes("[slug]") && !slugs.includes("page"));
});

test("blog.ts falls back to the generated list when src/app/blog is missing", () => {
  const t = readFileSync("src/lib/blog.ts", "utf8");
  assert.ok(t.includes("BLOG_ARTICLE_FOLDER_SLUGS"));
});

test("npm run build regenerates the list first", () => {
  assert.match(readFileSync("package.json", "utf8"), /"prebuild":\s*"node scripts\/generate-blog-slugs\.mjs"/);
});
