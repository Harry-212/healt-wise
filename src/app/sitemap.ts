import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import {
  getAllBlogSitemapSlugs,
  getAllPostsMeta,
  totalPages,
} from "@/lib/blog";
import { POSTS_PER_PAGE } from "@/lib/blog-feed";
import { COMPARE_SLUGS } from "@/lib/routes/compare-slugs";
import { PRICE_SLUGS } from "@/lib/routes/price-slugs";
import { allPharmacySlugs } from "@/lib/routes/all-pharmacy-slugs";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  HELPFUL_GUIDES_HUB_PATH,
  helpfulGuidePath,
} from "@/lib/helpful-guide-slugs";
/** Guide URLs under /helpful-guides/: only folders on disk with a page.tsx file. */
function helpfulGuideSlugsOnDisk(): string[] {
  const base = path.join(process.cwd(), "src", "app", "helpful-guides");
  if (!fs.existsSync(base)) return [];
  return fs
    .readdirSync(base, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .filter((slug) => fs.existsSync(path.join(base, slug, "page.tsx")))
    .sort();
}

/** Fixed App Router paths without dynamic segments. */
const STATIC_PATHS = [
  "/",
  "/about",
  "/blog",
  "/contact",
  "/diet",
  "/editorial-policy",
  "/exercise",
  HELPFUL_GUIDES_HUB_PATH,
  "/methodology",
  "/mounjaro-faq",
  "/mounjaro-maintenance-pharmacies",
  "/mounjaro-price-comparison",
  "/mounjaro-price-list",
  "/pharmacy-safety-gphc-verification",
  "/price-alerts",
  "/privacy-policy",
  "/saxenda-price-comparison",
  "/sleep",
  "/stress",
  "/terms-of-service",
  "/tips",
  "/tools/bmi-calculator",
  "/tools/mounjaro-click-calculator",
  "/tools/weight-loss-tracker",
  "/wegovy-faq",
  "/wegovy-maintenance-pharmacies",
  "/wegovy-price-comparison",
  "/wegovy-price-list",
  "/what-is-mounjaro",
  "/what-is-saxenda",
  "/what-is-wegovy",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteOrigin();
  const entries: MetadataRoute.Sitemap = [];

  const push = (path: string, priority: number) => {
    entries.push({
      url: `${origin}${path}`,
      changeFrequency: "weekly",
      priority,
    });
  };

  /** Strong internal hubs — higher sitemap weight (does not guarantee sitelinks). */
  const HIGH_PRIORITY_HUBS = new Set<string>([
    "/wegovy-price-comparison",
    "/mounjaro-price-comparison",
    "/saxenda-price-comparison",
    "/blog",
    HELPFUL_GUIDES_HUB_PATH,
  ]);

  for (const path of STATIC_PATHS) {
    const priority =
      path === "/" ? 1 : HIGH_PRIORITY_HUBS.has(path) ? 0.9 : 0.75;
    push(path, priority);
  }

  for (const slug of helpfulGuideSlugsOnDisk()) {
    push(helpfulGuidePath(slug), 0.72);
  }

  for (const slug of Object.keys(PRICE_SLUGS)) {
    push(`/prices/${slug}`, 0.8);
  }
  for (const slug of Object.keys(COMPARE_SLUGS)) {
    push(`/compare/${slug}`, 0.8);
  }

  for (const id of allPharmacySlugs()) {
    push(`/pharmacies/${id}`, 0.72);
  }

  for (const slug of getAllBlogSitemapSlugs()) {
    push(`/blog/${slug}`, 0.65);
  }

  const blogCount = getAllPostsMeta().length;
  const pages = totalPages(blogCount, POSTS_PER_PAGE);
  for (let p = 2; p <= pages; p++) {
    push(`/blog/page/${p}`, 0.5);
  }

  return entries;
}
