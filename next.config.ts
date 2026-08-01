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
    "https://www.googletagmanager.com https://www.clarity.ms https://scripts.clarity.ms",
  ]
    .filter(Boolean)
    .join(" "),
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "media-src 'self' https:",
  "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://www.clarity.ms https://*.clarity.ms",
  "frame-src 'self' https://www.google.com https://maps.google.com",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
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
    ];
  },
  async redirects() {
    return [
      // Legacy / mistaken URLs (e.g. ads) — avoid 403/404 noise in Search Console.
      // Absolute www home so apex + /lander collapses in one hop (middleware also handles this).
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
        destination: "/compare/mounjaro-vs-wegovy-vs-saxenda",
        permanent: true,
      },
      {
        source: "/compare/best-weight-loss-treatments-uk",
        destination: "/compare/mounjaro-vs-wegovy-vs-saxenda",
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
      {
        source: "/prices/saxenda-price-uk",
        destination: "/saxenda-price-comparison",
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
      ...HELPFUL_GUIDE_SLUGS.map((slug) => ({
        source: `/${slug}`,
        destination: `/helpful-guides/${slug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
