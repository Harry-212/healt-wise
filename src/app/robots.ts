import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/seo/site-origin";

export default function robots(): MetadataRoute.Robots {
  const base = siteOrigin();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /go/* are cloaked affiliate redirects to partner sites: nothing to index or crawl.
      disallow: ["/api/", "/my-hub", "/auth/", "/admin-dashboard", "/go/"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
