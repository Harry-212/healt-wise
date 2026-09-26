// Crawls the site (from the sitemap) and reports broken or redirected internal links.
// Usage: node scripts/check-links.mjs [baseUrl] [--max=N]
const base = (process.argv[2] && !process.argv[2].startsWith("--") ? process.argv[2] : "http://localhost:3000").replace(/\/$/, "");
const maxArg = process.argv.find((a) => a.startsWith("--max="));
const max = maxArg ? Number(maxArg.split("=")[1]) : Infinity;
const CONCURRENCY = 6;

const norm = (u) => {
  try {
    const url = new URL(u, base);
    if (url.origin !== base && !/^https?:\/\/(www\.)?healthwise360\.co\.uk$/.test(url.origin)) return null;
    url.hash = "";
    let p = url.pathname.replace(/\/+$/, "") || "/";
    return p + url.search;
  } catch {
    return null;
  }
};

const sitemapXml = await (await fetch(`${base}/sitemap.xml`)).text();
const queue = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => norm(m[1])).filter(Boolean);
const seen = new Set(queue);
const status = new Map(); // path -> { status, location }
const referrers = new Map(); // target -> Set(source pages)
let pages = 0;

const addRef = (target, from) => {
  if (!referrers.has(target)) referrers.set(target, new Set());
  referrers.get(target).add(from);
};

async function visit(path) {
  let res;
  try {
    res = await fetch(base + path, { redirect: "manual" });
  } catch (e) {
    status.set(path, { status: "ERR " + e.message });
    return;
  }
  const location = res.headers.get("location");
  status.set(path, { status: res.status, location });
  if (res.status !== 200 || !(res.headers.get("content-type") || "").includes("text/html")) return;
  pages++;
  const html = await res.text();
  for (const m of html.matchAll(/<a\b[^>]*?\shref="([^"]+)"/g)) {
    const href = m[1].replace(/&amp;/g, "&");
    if (/^(mailto:|tel:|javascript:|#)/.test(href)) continue;
    const t = norm(href);
    if (!t || /^\/(_next|api)\b/.test(t)) continue;
    addRef(t, path);
    if (!seen.has(t) && seen.size < max) {
      seen.add(t);
      queue.push(t);
    }
  }
}

const workers = Array.from({ length: CONCURRENCY }, async () => {
  while (queue.length) {
    const p = queue.shift();
    await visit(p);
  }
});
await Promise.all(workers);

const broken = [...status].filter(([, v]) => typeof v.status !== "number" || v.status >= 400);
const redirected = [...status].filter(([, v]) => v.status >= 300 && v.status < 400);
const show = (list, label) => {
  console.log(`\n${label}: ${list.length}`);
  for (const [p, v] of list) {
    console.log(`  ${v.status} ${p}${v.location ? " -> " + v.location : ""}`);
    for (const src of [...(referrers.get(p) || [])].slice(0, 5)) console.log(`      linked from ${src}`);
  }
};
console.log(`Checked ${status.size} URLs (${pages} HTML pages crawled) on ${base}`);
show(broken, "BROKEN (4xx/5xx/error)");
show(redirected.filter(([p]) => referrers.has(p)), "REDIRECTING internal links (update the href)");
process.exitCode = broken.length ? 1 : 0;
