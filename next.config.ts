import type { NextConfig } from "next";
import { HELPFUL_GUIDE_SLUGS } from "./src/lib/helpful-guide-slugs";

/**
 * Site-wide CSP for XSS / injection mitigation.
 * Static-friendly (no per-request nonce) so ISR/SSG stays intact.
 * `'unsafe-inline'` is required for Next.js hydration + Tailwind/inline styles.
 * `'unsafe-eval'` is only for local `next dev` — React uses eval() for debug
 * callstacks; production builds never need it.
 */
const isDev = process.env.NODE_ENV === "development";

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "object-src 'none'",
  [
    "script-src 'self' 'unsafe-inline'",
    isDev ? "'unsafe-eval'" : null,
    "https://www.googletagmanager.com https://news.google.com",
  ]
    .filter(Boolean)
    .join(" "),
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "media-src 'self' https:",
  "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://news.google.com",
  "frame-src 'self' https://www.google.com https://maps.google.com https://news.google.com",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  /**
   * Hostinger's build container reports ~63 CPUs but caps the thread count, so
   * `next build` spawned too many page-data workers and aborted with "OS can't
   * spawn worker thread" (build of 9875d0f, 19 Oct 2026). Cap the workers.
   */
  experimental: {
    cpus: 4,
  },
  images: {
    /** Allow `quality` on `<Image>` - include 80 so older chunks / defaults never throw at runtime. */
    qualities: [50, 60, 70, 75, 80, 85, 90],
    /** Prefer modern formats from the image optimizer (smaller than JPEG/PNG). */
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ibb.co.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: CONTENT_SECURITY_POLICY,
          },
        ],
      },
      {
        source: "/_next/image",
        headers: [
          {
            key: "Content-Disposition",
            value: "inline",
          },
        ],
      },
      {
        source: "/_next/static/media/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
      {
        source: "/:path*.(png|jpg|jpeg|webp|avif|gif|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Commercial affiliate redirects (cloaked affiliate URLs)
      {
        source: "/go/shemed",
        destination: "https://www.shemed.co.uk/treatment?via=healthwise360&code=HEALTH20",
        permanent: false,
      },
      {
        source: "/go/i-prescribe",
        destination:
          "https://i-prescribe.co.uk/pages/pom?formtype=weight-loss&ref=HW360&utm_source=healthwise360&utm_medium=referral&utm_campaign=weight-loss-referral",
        permanent: false,
      },
      // Legacy / mistaken URLs (e.g. ads) — avoid 403/404 noise in Search Console.
      // These sit above the apex rule on purpose: the apex rule matches every
      // path, so below it apex /lander went apex -> www/lander -> www/ (two hops).
      // With an absolute www destination it is a single hop from either host.
      {
        source: "/lander",
        destination: "https://www.healthwise360.co.uk/",
        permanent: true,
      },
      {
        source: "/lander/",
        destination: "https://www.healthwise360.co.uk/",
        permanent: true,
      },
      // Apex -> www, any path, preserving path + query. This must live here
      // (not only in middleware.ts) because middleware does not appear to
      // execute on this Hostinger deployment — verified 30 Sep 2026 that a
      // middleware-only redirect (junk-path `/$`) 404s in production while
      // this next.config.ts `redirects()` list is honoured. Keep it first among the
      // generic rules (only the absolute-destination /lander rules above it).
      {
        source: "/:path*",
        has: [{ type: "host", value: "healthwise360.co.uk" }],
        destination: "https://www.healthwise360.co.uk/:path*",
        permanent: true,
      },
      // Retired three-treatment hub: content now lives on the Mounjaro vs Wegovy page.
      {
        source: "/compare/mounjaro-vs-wegovy-vs-saxenda",
        destination: "/compare/wegovy-vs-mounjaro",
        statusCode: 301,
      },
      {
        source: "/lifestyle",
        destination: "/tips",
        permanent: true,
      },
      {
        source: "/lifestyle/nutrition",
        destination: "/diet",
        permanent: true,
      },
      {
        source: "/lifestyle/tips",
        destination: "/tips",
        permanent: true,
      },
      {
        source: "/lifestyle/diet",
        destination: "/diet",
        permanent: true,
      },
      {
        source: "/lifestyle/exercise",
        destination: "/exercise",
        permanent: true,
      },
      {
        source: "/lifestyle/sleep",
        destination: "/sleep",
        permanent: true,
      },
      {
        source: "/lifestyle/stress",
        destination: "/stress",
        permanent: true,
      },
      {
        source: "/helpful-guide/:slug+",
        destination: "/helpful-guides/:slug+",
        permanent: true,
      },
      {
        source: "/helpful-guide",
        destination: "/helpful-guides",
        permanent: true,
      },
      // Legacy ?category= / ?topic= → static hubs are handled in middleware
      // (next.config redirects preserve query strings by default).
      {
        source: "/weight-loss-treatment-price-comparison-uk",
        destination: "/",
        permanent: true,
      },
      {
        source: "/compare-weight-loss-treatments-uk",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/locations-in-uk",
        destination: "/blog/topic/locations",
        permanent: true,
      },
      {
        source: "/compare/best-weight-loss-injections-uk",
        destination: "/compare/wegovy-vs-mounjaro",
        permanent: true,
      },
      {
        source: "/compare/best-weight-loss-treatments-uk",
        destination: "/compare/wegovy-vs-mounjaro",
        permanent: true,
      },
      {
        source: "/pharmacies/chemist4u",
        destination: "/mounjaro-price-comparison",
        permanent: true,
      },
      {
        source: "/pharmacies/click-pharmacy",
        destination: "/mounjaro-price-comparison",
        permanent: true,
      },
      {
        source: "/pharmacies/phlo-clinic",
        destination: "/mounjaro-price-comparison",
        permanent: true,
      },
      {
        source: "/pharmacies/simply-meds-online",
        destination: "/mounjaro-price-comparison",
        permanent: true,
      },
      {
        source: "/prices/wegovy-price-uk",
        destination: "/wegovy-price-comparison",
        permanent: true,
      },
      {
        source: "/prices/mounjaro-price-uk",
        destination: "/mounjaro-price-comparison",
        permanent: true,
      },
      // Retired price-list URLs (removed to avoid cannibalising comparison hubs)
      {
        source: "/mounjaro-price-list",
        destination: "/mounjaro-price-comparison",
        permanent: true,
      },
      {
        source: "/mounjaro-price-list/",
        destination: "/mounjaro-price-comparison",
        permanent: true,
      },
      {
        source: "/wegovy-price-list",
        destination: "/wegovy-price-comparison",
        permanent: true,
      },
      {
        source: "/wegovy-price-list/",
        destination: "/wegovy-price-comparison",
        permanent: true,
      },
      // Maintenance lists were retired with the price lists (commit 967f98e)
      // but Google still crawls them; send equity to the comparison hubs.
      {
        source: "/mounjaro-maintenance-pharmacies",
        destination: "/mounjaro-price-comparison",
        permanent: true,
      },
      {
        source: "/wegovy-maintenance-pharmacies",
        destination: "/wegovy-price-comparison",
        permanent: true,
      },
      // Blog price articles cannibalised the price comparison hubs (neither
      // got indexed) — consolidate each into its hub.
      {
        source: "/blog/mounjaro-price-uk",
        destination: "/mounjaro-price-comparison",
        permanent: true,
      },
      {
        source: "/blog/wegovy-price-uk",
        destination: "/wegovy-price-comparison",
        permanent: true,
      },
      {
        source: "/blog/the-truth-about-wegovy-weight-loss-medication-costs-in-the-uk",
        destination: "/wegovy-price-comparison",
        permanent: true,
      },
      {
        source: "/blog/saxenda-vs-mounjaro-vs-wegovy-price-uk",
        destination: "/compare/wegovy-vs-mounjaro",
        permanent: true,
      },
      // No standalone /compare index — Wegovy vs Mounjaro is the hub
      // (the three-treatment page was retired; see above).
      {
        source: "/compare",
        destination: "/compare/wegovy-vs-mounjaro",
        permanent: true,
      },
      {
        source: "/helpful-guides/mounjaro-weight-loss-treatment-uk",
        destination: "/helpful-guides/mounjaro-weight-loss-injection-uk",
        permanent: true,
      },
      {
        source: "/prices/saxenda-price-uk",
        destination: "/compare/wegovy-vs-mounjaro",
        permanent: true,
      },
      {
        source: "/saxenda-price-comparison",
        destination: "/compare/wegovy-vs-mounjaro",
        permanent: true,
      },
      {
        source: "/blog/best-weight-loss-treatment-in-london",
        destination: "/blog/weight-loss-treatment-london",
        permanent: true,
      },
      {
        source: "/blog/uk-weight-loss/london",
        destination: "/blog/weight-loss-treatment-london",
        permanent: true,
      },
      {
        source: "/blog/uk-weight-loss/:slug",
        destination: "/blog/best-weight-loss-treatment-in-:slug",
        permanent: true,
      },
      {
        source: "/blog/can-i-buy-weight-loss-injections-online-uk",
        destination: "/blog/can-i-buy-weight-loss-injections-uk",
        permanent: true,
      },
      {
        source: "/blog/can-i-buy-weight-loss-injections-online",
        destination: "/blog/can-i-buy-weight-loss-injections-uk",
        permanent: true,
      },
      {
        source: "/blog/buy-weight-loss-injections-online-uk",
        destination: "/blog/can-i-buy-weight-loss-injections-uk",
        permanent: true,
      },
      {
        source: "/blog/buy-weight-loss-injections-uk",
        destination: "/blog/can-i-buy-weight-loss-injections-uk",
        permanent: true,
      },
      {
        source: "/blog/wegovy-uk-prices-overview",
        destination: "/helpful-guides",
        permanent: true,
      },
      {
        source: "/blog/mounjaro-vs-wegovy-costs",
        destination: "/helpful-guides",
        permanent: true,
      },
      {
        source: "/blog/glp-1-safety-checklist",
        destination: "/helpful-guides",
        permanent: true,
      },
      {
        source: "/blog/getting-started-glp1-uk",
        destination: "/helpful-guides",
        permanent: true,
      },
      {
        source: "/blog/best-weight-loss-comparison-sites-uk",
        destination: "/blog",
        permanent: true,
      },
      // Zero-click pack 1, section A: old URLs that 404 but still appear in
      // Google — send them to the live page.
      {
        source: "/blog/mounjaro-click-calculator",
        destination: "/blog/mounjaro-click-calculator-uk",
        permanent: true,
      },
      {
        source: "/blog/mounjaro-click-calculator-kwikpen-guide",
        destination: "/blog/mounjaro-click-calculator-uk",
        permanent: true,
      },
      {
        source: "/blog/mounjaro-kwikpen-guide",
        destination: "/blog/mounjaro-click-calculator-uk",
        permanent: true,
      },
      {
        source: "/blog/mounjaro-kikpen-guide-|-healthwise360",
        destination: "/blog/mounjaro-click-calculator-uk",
        permanent: true,
      },
      {
        source: "/blog/mounjaro-kwikpen-clicks-per-dose-chart",
        destination: "/blog/mounjaro-click-calculator-uk",
        permanent: true,
      },
      {
        source: "/blog/mounjaro-kwikpen-specific-index",
        destination: "/blog/mounjaro-click-calculator-uk",
        permanent: true,
      },
      {
        source: "/blog/how-many-clicks-is-your-dose-kwikpen-guide-2026",
        destination: "/blog/mounjaro-click-calculator-uk",
        permanent: true,
      },
      {
        source: "/blog/mounjaro-calculator-uk",
        destination: "/blog/mounjaro-click-calculator-uk",
        permanent: true,
      },
      {
        source: "/blog/mounjaro-kwikpen-click-calculator",
        destination: "/blog/mounjaro-click-calculator-uk",
        permanent: true,
      },
      {
        source: "/blog/mounjaro-kwikpen-clicks-per-pen-client",
        destination: "/blog/mounjaro-click-calculator-uk",
        permanent: true,
      },
      {
        source: "/blog/mounjaro-kwikpen-guide--healthworks360",
        destination: "/blog/mounjaro-click-calculator-uk",
        permanent: true,
      },
      {
        source: "/blog/mounjaro-kwikpen-guide-lake",
        destination: "/blog/mounjaro-click-calculator-uk",
        permanent: true,
      },
      {
        source: "/blog/mounjaro-kwikpen-guide-uk",
        destination: "/blog/mounjaro-click-calculator-uk",
        permanent: true,
      },
      {
        source: "/blog/wegovy-click-counting-ink-uk",
        destination: "/tools/wegovy-click-calculator",
        permanent: true,
      },
      {
        source: "/tools/wegovy-click-calculator-uk",
        destination: "/tools/wegovy-click-calculator",
        permanent: true,
      },
      {
        source: "/helpful-guides/restarting-mounjaro-after-break",
        destination: "/helpful-guides/restarting-mounjaro-after-break-uk",
        permanent: true,
      },
      {
        source: "/helpful-guides/restarting-mounjaro-break-uk",
        destination: "/helpful-guides/restarting-mounjaro-after-break-uk",
        permanent: true,
      },
      // Zero-click pack 1, section B: duplicate pages that overlap a
      // stronger page on the same topic and get no clicks.
      {
        source: "/blog/mounjaro-vs-wegovy-key-differences-explained",
        destination: "/compare/wegovy-vs-mounjaro",
        permanent: true,
      },
      {
        source: "/blog/injectable-obesity-treatments-uk-what-works-and-what-doesnt",
        destination: "/blog/weight-loss-treatment-uk-complete-guide",
        permanent: true,
      },
      {
        source: "/blog/understanding-prescription-weight-loss-injections-uk",
        destination: "/blog/weight-loss-treatment-uk-complete-guide",
        permanent: true,
      },
      {
        source: "/blog/what-is-wegovy-pill",
        destination: "/blog/wegovy-pill-uk",
        permanent: true,
      },
      {
        source: "/blog/the-truth-about-mounjaro-dosage-for-weight-loss-effectiveness",
        destination: "/blog/mounjaro-dosage-for-weight-loss-facts-you-can-trust",
        permanent: true,
      },
      {
        source: "/blog/does-mounjaro-really-work-for-weight-loss-find-out-here",
        destination: "/what-is-mounjaro",
        permanent: true,
      },
      {
        source: "/blog/discover-if-mounjaro-is-safe-for-weight-loss-and-right-for-you",
        destination: "/what-is-mounjaro",
        permanent: true,
      },
      {
        source: "/helpful-guides/mounjaro-weight-loss-injection-uk",
        destination: "/what-is-mounjaro",
        permanent: true,
      },
      {
        source: "/blog/buy-weight-loss-pills-uk",
        destination: "/blog/buy-weight-loss-tablets",
        permanent: true,
      },
      {
        source: "/blog/the-surprising-mounjaro-side-effects-you-might-experience",
        destination: "/helpful-guides/mounjaro-side-effects-uk",
        permanent: true,
      },
      {
        source: "/blog/mounjaro-weight-loss-injections-game-changer",
        destination: "/blog/mounjaro-weight-loss-before-and-after",
        permanent: true,
      },
      {
        source: "/blog/glp-1-supplements-uk",
        destination: "/blog/are-glp-1-supplements-real",
        permanent: true,
      },
      {
        source: "/blog/understanding-the-mounjaro-kwikpen-a-user-guide",
        destination: "/blog/mounjaro-click-calculator-uk",
        permanent: true,
      },
      {
        source: "/blog/how-does-wegovy-work-to-transform-your-weight-journey",
        destination: "/what-is-wegovy",
        permanent: true,
      },
      // Zero-click pack 4, section D: Move content first, then 301 redirect
      {
        source: "/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards",
        destination: "/pharmacy-safety-gphc-verification",
        permanent: true,
      },
      {
        source: "/blog/what-is-bmi-calculator",
        destination: "/tools/bmi-calculator",
        permanent: true,
      },
      {
        source: "/blog/can-hormones-cause-belly-fat-after-40",
        destination: "/blog/why-does-belly-fat-increase-after-40",
        permanent: true,
      },
      ...HELPFUL_GUIDE_SLUGS.map((slug) => ({
        source: `/${slug}`,
        destination: `/helpful-guides/${slug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
