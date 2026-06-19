import fs from "fs";
import path from "path";

const dir = "src/components/locations/content";
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".tsx"));

const flexBlock =
  /\s*<div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">\s*\n\s*\{toc\.length > 0 \? <GuideTocSidebar[^]*?\/>\s*: null\}\s*\n\s*<div className="min-w-0 flex-1 max-w-3xl">\s*\n/;

const flexBlockAlt =
  /\s*<div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">\s*\n\s*<GuideTocSidebar[\s\S]*?<\/GuideTocSidebar>\s*\n\s*<div className="min-w-0 flex-1 max-w-3xl">\s*\n/;

const flexBlockInline =
  /\s*<div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">\s*\n\s*\{toc\.length > 0 \?\s*\n\s*<GuideTocSidebar[\s\S]*?\/>\s*\n\s*\)\s*:\s*null\}\s*\n\s*<div className="min-w-0 flex-1 max-w-3xl">\s*\n/;

const flexBlockMultiline =
  /\s*<div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">\s*\n\s*\{toc\.length > 0 \? \(\s*\n\s*<GuideTocSidebar[\s\S]*?\/>\s*\n\s*\) : null\}\s*\n\s*<div className="min-w-0 flex-1 max-w-3xl">\s*\n/;

let updated = 0;

for (const file of files) {
  const fp = path.join(dir, file);
  let src = fs.readFileSync(fp, "utf8");
  if (src.includes("UkLocationArticleClient")) continue;
  if (!src.includes("GuideTocSidebar") && !src.includes("flex flex-col gap-10 xl:flex-row"))
    continue;

  const original = src;

  if (!src.includes("BlogArticleColumn")) {
    src = src.replace(
      /import GuideTocSidebar from "@\/components\/guide\/GuideTocSidebar";\r?\n/,
      'import BlogArticleColumn from "@/components/blog/BlogArticleColumn";\n',
    );
  }

  src = src.replace(
    flexBlock,
    "\n        <BlogArticleColumn toc={toc} darkMode={darkMode}>\n",
  );
  src = src.replace(
    flexBlockAlt,
    "\n        <BlogArticleColumn toc={toc} darkMode={darkMode}>\n",
  );
  src = src.replace(
    flexBlockInline,
    "\n        <BlogArticleColumn toc={toc} darkMode={darkMode}>\n",
  );
  src = src.replace(
    flexBlockMultiline,
    "\n        <BlogArticleColumn toc={toc} darkMode={darkMode}>\n",
  );

  const patterns = [flexBlock, flexBlockAlt, flexBlockInline, flexBlockMultiline];
  const blogOpen = "\n        <BlogArticleColumn toc={toc} darkMode={darkMode}>\n";

  // Fix broken partial migration: closing BlogArticleColumn but flex wrapper still open
  if (
    src.includes("</BlogArticleColumn>") &&
    src.includes("flex flex-col gap-10 xl:flex-row")
  ) {
    for (const pattern of patterns) {
      src = src.replace(pattern, blogOpen);
    }
  }

  // Remove orphan wrapper closes before BlogArticleColumn close
  src = src.replace(
    /\n          <\/div>\s*\n        <\/div>\s*\n(\s*<\/BlogArticleColumn>)/,
    "\n$1",
  );

  // Standard close when still using old double div close
  src = src.replace(
    /\n          <\/div>\s*\n        <\/div>\s*\n      <\/div>\s*\n    <\/div>/,
    "\n        </BlogArticleColumn>\n      </div>\n    </div>",
  );

  if (src !== original) {
    fs.writeFileSync(fp, src);
    updated++;
    console.log("updated:", file);
  }
}

console.log("Pass 2 updated:", updated);

// Report remaining issues
const remaining = files.filter((file) => {
  const src = fs.readFileSync(path.join(dir, file), "utf8");
  return src.includes("GuideTocSidebar") && !src.includes("UkLocationArticleClient");
});
console.log("Still has GuideTocSidebar:", remaining.length);
remaining.forEach((f) => console.log(" -", f));
