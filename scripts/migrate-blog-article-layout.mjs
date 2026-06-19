/**
 * Migrate blog ArticleClient files to centered BlogArticleColumn layout.
 * Run: node scripts/migrate-blog-article-layout.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const IMPORT_LINE =
  'import BlogArticleColumn from "@/components/blog/BlogArticleColumn";';

function walkArticleClients(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkArticleClients(full, acc);
    else if (entry.name === "ArticleClient.tsx") acc.push(full);
  }
  return acc;
}

const TARGETS = [
  ...walkArticleClients(path.join(root, "src", "app", "blog")),
  path.join(root, "src", "components", "blog", "UkLocationArticleClient.tsx"),
];

function detectTocVar(content) {
  if (/\btoc=\{toc\}/.test(content)) return "toc";
  if (/\bconst toc =/.test(content)) return "toc";
  return "TOC";
}

function migrate(content) {
  if (content.includes("BlogArticleColumn")) {
    return { content, changed: false, reason: "already migrated" };
  }
  if (!content.includes("flex flex-col gap-10 xl:flex-row")) {
    return { content, changed: false, reason: "no legacy flex layout" };
  }

  let next = content;
  const tocVar = detectTocVar(content);
  const hasDarkMode = next.includes("darkMode");

  const sidebarImports = [
    'import GuideTocSidebar from "@/components/guide/GuideTocSidebar";',
    "import GuideTocSidebar from '@/components/guide/GuideTocSidebar';",
  ];
  const matchedImport = sidebarImports.find((line) => next.includes(line));
  if (!matchedImport) {
    return { content, changed: false, reason: "missing GuideTocSidebar import" };
  }
  next = next.replace(matchedImport, `${matchedImport}\n${IMPORT_LINE}`);
  next = next.replace(
    /import GuideTocMobile from ["']@\/components\/guide\/GuideTocMobile["'];\r?\n?/g,
    "",
  );

  next = next.replace(
    /\r?\n\s*<div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-1[46]">\s*/g,
    "",
  );
  next = next.replace(
    /\r?\n\s*\{TOC\.length > 0 && \(\s*<GuideTocSidebar[\s\S]*?\/>\s*\)\}\s*/g,
    "",
  );
  next = next.replace(
    /\r?\n\s*\{TOC\.length > 0 && <GuideTocSidebar[\s\S]*?\/>\s*\}\s*/g,
    "",
  );
  next = next.replace(
    /\r?\n\s*\{toc\.length > 0 && \(\s*<GuideTocSidebar[\s\S]*?\/>\s*\)\}\s*/g,
    "",
  );
  next = next.replace(
    /\r?\n\s*\{toc\.length > 0 \? \(\s*<GuideTocSidebar[\s\S]*?>\s*\) : null\}\s*/g,
    "",
  );
  next = next.replace(
    /\r?\n\s*<div className="min-w-0(?: max-w-3xl flex-1| flex-1 max-w-3xl)">\s*/g,
    "",
  );

  const columnOpen = hasDarkMode
    ? `<BlogArticleColumn toc={${tocVar}} darkMode={darkMode}>`
    : `<BlogArticleColumn toc={${tocVar}}>`;

  if (next.includes('<header className="mb-12">')) {
    next = next.replace(
      /(\r?\n\s*)<header className="mb-12">/,
      `$1${columnOpen}$1  <header className={\`mb-8 border-b pb-8 \${darkMode ? "border-slate-800" : "border-slate-200"}\`}>`,
    );
  } else if (next.includes("<header className='mb-12'>")) {
    next = next.replace(
      /(\r?\n\s*)<header className='mb-12'>/,
      `$1${columnOpen}$1  <header className={\`mb-8 border-b pb-8 \${darkMode ? 'border-slate-800' : 'border-slate-200'}\`}>`,
    );
  } else if (next.includes("header className={`border-b pb-8 ${border}`}")) {
    next = next.replace(
      /(\r?\n\s*)<header className=\{`border-b pb-8 \$\{border\}`\}>/,
      `$1${columnOpen}$1  <header className={\`border-b pb-8 \${border}\`}>`,
    );
  } else {
    next = next.replace(
      /(\r?\n\s*)<article className=/,
      `$1${columnOpen}$1  <article className=`,
    );
  }

  next = next.replace(/\s*<GuideTocMobile toc=\{[^}]+\} darkMode=\{darkMode\} \/>\s*/g, "\n");

  const closeWithShare =
    /(\r?\n\s*<\/div>\r?\n)\s*<\/div>\r?\n\s*<\/div>(\r?\n\s*<\/div>\r?\n\s*<\/div>\r?\n\s*\);\r?\n\})/;
  const closeWithArticle =
    /(\r?\n\s*<\/article>\r?\n)\s*<\/div>\r?\n\s*<\/div>(\r?\n\s*<\/div>\r?\n\s*<\/div>\r?\n\s*\);\r?\n\})/;

  if (closeWithShare.test(next)) {
    next = next.replace(closeWithShare, `$1        </BlogArticleColumn>$2`);
  } else if (closeWithArticle.test(next)) {
    next = next.replace(closeWithArticle, `$1        </BlogArticleColumn>$2`);
  } else {
    return { content, changed: false, reason: "could not find closing block" };
  }

  next = next.replace(/<\/header>\s*<article/g, "</header>\n\n            <article");
  next = next.replace(
    /import GuideTocSidebar from ["']@\/components\/guide\/GuideTocSidebar["'];\r?\n?/g,
    "",
  );

  if (next.includes("showMobile") || next.includes("flex flex-col gap-10 xl:flex-row")) {
    return { content, changed: false, reason: "migration incomplete" };
  }

  return { content: next, changed: true, reason: "migrated" };
}

const results = [];
for (const abs of TARGETS) {
  const rel = path.relative(root, abs).replace(/\\/g, "/");
  const original = fs.readFileSync(abs, "utf8");
  const { content, changed, reason } = migrate(original);
  if (changed) fs.writeFileSync(abs, content, "utf8");
  results.push({ rel, changed, reason });
}

console.log(`Migrated: ${results.filter((r) => r.changed).length}`);
results.filter((r) => r.changed).forEach((r) => console.log(`  ✓ ${r.rel}`));
console.log(`Skipped: ${results.filter((r) => !r.changed).length}`);
results
  .filter((r) => !r.changed)
  .forEach((r) => console.log(`  - ${r.rel}: ${r.reason}`));
