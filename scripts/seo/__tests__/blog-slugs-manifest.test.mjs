import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { listBlogArticleFolders, renderManifest } from "../../generate-blog-slugs.mjs";

// The sitemap lost 23 blog articles whenever it was rebuilt on the server (no src folder there).
// It now falls back to this build-time list, so the committed file must match the folders.
test("the committed blog slug list matches the folders under src/app/blog", () => {
  const committed = readFileSync("src/lib/generated/blog-article-slugs.ts", "utf8").replace(/\r\n/g, "\n");
  assert.equal(committed, renderManifest(listBlogArticleFolders()).replace(/\r\n/g, "\n"), "run: node scripts/generate-blog-slugs.mjs");
});

test("the list is not empty and has no dynamic or pagination folders", () => {
  const slugs = listBlogArticleFolders();
  assert.ok(slugs.length > 40);
  assert.ok(!slugs.includes("[slug]") && !slugs.includes("page"));
});

test("blog.ts reads the generated list and never the source folders at runtime", () => {
  const t = readFileSync("src/lib/blog.ts", "utf8");
  const fn = t.slice(t.indexOf("function blogArticleSlugsOnDisk"), t.indexOf("/** Unique `/blog/:slug` targets"));
  assert.ok(fn.includes("BLOG_ARTICLE_FOLDER_SLUGS"));
  assert.ok(!/readdirSync|existsSync|process\.cwd/.test(fn), "no disk access in the slug list");
});

test("npm run build regenerates the list first", () => {
  assert.match(readFileSync("package.json", "utf8"), /"prebuild":\s*"node scripts\/generate-blog-slugs\.mjs"/);
});
