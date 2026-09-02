import type { MetadataRoute } from "next";
import { getAllBlogSitemapSlugs } from "@/lib/blog";
import { COMPARE_SLUGS } from "@/lib/routes/compare-slugs";
import { PRICE_SLUGS } from "@/lib/routes/price-slugs";
import { allPharmacySlugs } from "@/lib/routes/all-pharmacy-slugs";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  HELPFUL_GUIDE_CATEGORY_SLUGS,
  HELPFUL_GUIDE_SLUGS,
  HELPFUL_GUIDES_HUB_PATH,
  helpfulGuidePath,
  helpfulGuidesCategoryHubPath,
} from "@/lib/helpful-guide-slugs";
import { BLOG_FEED_TAGS, blogTopicHubPath } from "@/lib/blog-feed";

const EXCLUDED_SITEMAP_PATHS = new Set<string>([
  "/$",
  "/blog/locations-in-uk",
  /** Consolidated via permanentRedirect() into /blog/can-i-buy-weight-loss-injections-uk — redirect stubs don't belong in the sitemap. */
  "/blog/buy-weight-loss-injections-online-uk",
  "/blog/buy-weight-loss-injections-uk",
  "/blog/can-i-buy-weight-loss-injections-online",
  /** Legacy path that redirect()s to the locations topic hub — not a real destination page. */
  "/blog/uk-weight-loss",
  "/compare/best-weight-loss-injections-uk",
  "/compare/best-weight-loss-treatments-uk",
  "/pharmacies/chemist4u",
  "/pharmacies/click-pharmacy",
  "/pharmacies/phlo-clinic",
  "/pharmacies/simply-meds-online",
]);

/** Fixed App Router paths without dynamic segments. */
const STATIC_PATHS = [
  "/",
  "/about",
  "/blog",
  "/contact",
  "/diet",
  "/eat-healthier",
  "/editorial-policy",
  "/exercise",
  HELPFUL_GUIDES_HUB_PATH,
  "/methodology",
  "/mounjaro-faq",
  "/mounjaro-price-comparison",
  "/pharmacy-safety-gphc-verification",
  "/privacy-policy",
  "/protein-and-fitness",
  "/saxenda-price-comparison",
  "/sleep",
  "/stress",
  "/support-weight-management",
  "/terms-of-service",
  "/time-saver",
  "/tips",
  "/tools/bmi-calculator",
  "/tools/mounjaro-click-calculator",
  "/tools/wegovy-click-calculator",
  "/tools/weight-loss-tracker",
  "/wegovy-faq",
  "/wegovy-price-comparison",
  "/what-is-mounjaro",
  "/what-is-saxenda",
  "/what-is-wegovy",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteOrigin();
  const entries: MetadataRoute.Sitemap = [];

  const push = (path: string, priority: number) => {
    if (EXCLUDED_SITEMAP_PATHS.has(path)) return;

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

  for (const topic of BLOG_FEED_TAGS) {
    push(blogTopicHubPath(topic), 0.7);
  }

  for (const category of HELPFUL_GUIDE_CATEGORY_SLUGS) {
    push(helpfulGuidesCategoryHubPath(category), 0.7);
  }

  for (const slug of HELPFUL_GUIDE_SLUGS) {
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


  return entries;
}
