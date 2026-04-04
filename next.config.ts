import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/weight-loss-treatment-price-comparison-uk',
        permanent: true,
      },
      {
        source: '/compare-weight-loss-treatments-uk',
        destination: '/weight-loss-treatment-price-comparison-uk',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
