import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
    ],
  },
  async redirects() {
    return [
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
    ];
  },
};

export default nextConfig;
