import type { NextConfig } from "next";
import { HELPFUL_GUIDE_SLUGS } from "./src/lib/helpful-guide-slugs";

const nextConfig: NextConfig = {
  images: {
    /** Allow `quality` on `<Image>` — include 80 so older chunks / defaults never throw at runtime. */
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
  async redirects() {
    return [
      // Legacy / mistaken URLs (e.g. ads) — avoid 403/404 noise in Search Console.
      {
        source: "/lander",
        destination: "/",
        permanent: true,
      },
      {
        source: "/lander/",
        destination: "/",
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
        source: "/prices/wegovy-price-uk",
        destination: "/wegovy-price-comparison",
        permanent: true,
      },
      {
        source: "/prices/mounjaro-price-uk",
        destination: "/mounjaro-price-comparison",
        permanent: true,
      },
      {
        source: "/prices/saxenda-price-uk",
        destination: "/saxenda-price-comparison",
        permanent: true,
      },
      {
        source: "/blog/uk-weight-loss/:slug",
        destination: "/blog/best-weight-loss-treatment-in-:slug",
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
