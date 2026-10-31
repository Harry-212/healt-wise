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
  /** noindex,follow — overlaps heavily with /blog; stays live and crawlable but out of the sitemap. */
  "/blog/topic/guides",
  "/blog/topic/mounjaro",
  "/blog/topic/locations",
  "/blog/topic/how-it-works",
  /** noindex,follow — overlaps heavily with /helpful-guides; stays live and crawlable but out of the sitemap. */
  "/helpful-guides/category/medications",
  "/helpful-guides/category/nutrition",
  "/compare/best-weight-loss-injections-uk",
  "/compare/best-weight-loss-treatments-uk",
  "/pharmacies/chemist4u",
  "/pharmacies/click-pharmacy",
  "/pharmacies/phlo-clinic",
  "/pharmacies/simply-meds-online",
  /** Redirected duplicate pages (Zero-click pack 1, section B) — 308 to stronger hubs. */
  "/blog/mounjaro-vs-wegovy-key-differences-explained",
  "/blog/injectable-obesity-treatments-uk-what-works-and-what-doesnt",
  "/blog/understanding-prescription-weight-loss-injections-uk",
  "/blog/what-is-wegovy-pill",
  "/blog/wegovy-pill-uk",
  "/blog/the-truth-about-mounjaro-dosage-for-weight-loss-effectiveness",
  "/blog/does-mounjaro-really-work-for-weight-loss-find-out-here",
  "/blog/discover-if-mounjaro-is-safe-for-weight-loss-and-right-for-you",
  "/helpful-guides/mounjaro-weight-loss-injection-uk",
  "/blog/buy-weight-loss-pills-uk",
  "/blog/the-surprising-mounjaro-side-effects-you-might-experience",
  "/blog/mounjaro-weight-loss-injections-game-changer",
  "/blog/glp-1-supplements-uk",
  "/blog/understanding-the-mounjaro-kwikpen-a-user-guide",
  "/blog/how-does-wegovy-work-to-transform-your-weight-journey",
  /** Redirected pages (Zero-click pack 4, section D) */
  "/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards",
  "/blog/what-is-bmi-calculator",
  "/blog/can-hormones-cause-belly-fat-after-40",
]);

/** Fixed App Router paths without dynamic segments. */
const STATIC_PATHS = [
  "/",
  "/about",
  "/about/ssot",
  "/best-weight-loss-treatment-comparison-london",
  "/blog",
  "/contact",
  "/diet",
  "/editorial-policy",
  "/editorial-team",
  "/editorial-team/alistair-greenwood",
  "/exercise",
  HELPFUL_GUIDES_HUB_PATH,
  "/methodology",
  "/mounjaro-faq",
  "/mounjaro-price-comparison",
  "/pharmacies",
  "/foundayo-price-comparison",
  "/pharmacy-safety-gphc-verification",
  "/privacy-policy",
  "/sleep",
  "/stress",
  "/terms-of-service",
  "/tips",
  "/tools",
  "/tools/bmi-calculator",
  "/tools/mounjaro-click-calculator",
  "/tools/wegovy-click-calculator",
  "/tools/weight-loss-tracker",
  "/wegovy-faq",
  "/wegovy-pill-price-comparison",
  "/wegovy-price-comparison",
  "/what-is-foundayo",
  "/what-is-mounjaro",
  "/what-is-wegovy",
  "/wegovy-tablet-faqs",
  "/what-is-wegovy-pill",
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
    "/best-weight-loss-treatment-comparison-london",
    "/blog",
    "/pharmacies",
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

  /* Paginated listings (/blog/page/N, /blog/topic/x/page/N) stay crawlable
     through their pagination links but are left out of the sitemap: Search
     Console reported them as crawled-not-indexed, and every post they list
     is already submitted above. */

  return entries;
}
