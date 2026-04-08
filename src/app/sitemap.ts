import type { MetadataRoute } from "next";
import {
  getAllPostsMeta,
  getAllSlugs,
  POSTS_PER_PAGE,
  totalPages,
} from "@/lib/blog";
import { COMPARE_SLUGS } from "@/lib/routes/compare-slugs";
import { PRICE_SLUGS } from "@/lib/routes/price-slugs";
import { MOUNJARO_UK_COMPARE_PROVIDERS } from "@/lib/data/mounjaro-uk-compare-providers";
import { SAXENDA_UK_COMPARE_PROVIDERS } from "@/lib/data/saxenda-uk-compare-providers";
import { WEGOVY_UK_COMPARE_PROVIDERS } from "@/lib/data/wegovy-uk-compare-providers";
import { siteOrigin } from "@/lib/seo/site-origin";

const STATIC_PATHS = [
  "/",
  "/lifestyle",
  "/contact",
  "/blog",
  "/pharmacy-safety-gphc-verification",
  "/wegovy-price-comparison",
  "/mounjaro-price-comparison",
  "/saxenda-price-comparison",
  "/wegovy-price-list",
  "/mounjaro-price-list",
  "/wegovy-maintenance-pharmacies",
  "/mounjaro-maintenance-pharmacies",
  "/tools/weight-loss-tracker",
  "/tools/bmi-calculator",
  "/tools/progress-estimator",
  "/tools/dosage-calculator",
  "/tools/cost-calculator",
  "/what-is-wegovy",
  "/what-is-mounjaro",
  "/what-is-saxenda",
  "/wegovy-faq",
  "/price-alerts",
  "/mounjaro-faq",
  "/methodology",
  "/about",
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

  for (const path of STATIC_PATHS) {
    push(path, path === "/" ? 1 : 0.75);
  }

  for (const slug of Object.keys(PRICE_SLUGS)) {
    push(`/prices/${slug}`, 0.8);
  }
  for (const slug of Object.keys(COMPARE_SLUGS)) {
    push(`/compare/${slug}`, 0.8);
  }

  {
    const ids = new Set<string>();
    for (const p of WEGOVY_UK_COMPARE_PROVIDERS) ids.add(p.id);
    for (const p of MOUNJARO_UK_COMPARE_PROVIDERS) ids.add(p.id);
    for (const p of SAXENDA_UK_COMPARE_PROVIDERS) ids.add(p.id);
    for (const id of ids) {
      push(`/pharmacies/${id}`, 0.72);
    }
  }

  for (const slug of getAllSlugs()) {
    push(`/blog/${slug}`, 0.65);
  }

  const blogCount = getAllPostsMeta().length;
  const pages = totalPages(blogCount, POSTS_PER_PAGE);
  for (let p = 2; p <= pages; p++) {
    push(`/blog/page/${p}`, 0.5);
  }

  return entries;
}
