import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/seo/site-origin";

export default function robots(): MetadataRoute.Robots {
  const base = siteOrigin();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/my-hub", "/auth/"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
