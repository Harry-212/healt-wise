import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import { getBlogPageFeed } from "@/lib/blog";
import { blogHubPath } from "@/lib/blog-feed";
import {
  BLOG_HUB_DESCRIPTION,
  BLOG_HUB_TITLE,
} from "@/lib/seo/blog-hub-metadata";
import { siteOrigin } from "@/lib/seo/site-origin";
import { withDefaultShareImage } from "@/lib/seo/default-share-image";

function blogHubMetadata(canonicalPath: string): Metadata {
  const url = `${siteOrigin()}${canonicalPath}`;
  return withDefaultShareImage({
    title: { absolute: BLOG_HUB_TITLE },
    description: BLOG_HUB_DESCRIPTION,
    alternates: { canonical: url },
    openGraph: {
      title: BLOG_HUB_TITLE,
      description: BLOG_HUB_DESCRIPTION,
      url,
    },
    twitter: {
      title: BLOG_HUB_TITLE,
      description: BLOG_HUB_DESCRIPTION,
    },
  });
}

// This page reads no request data, so it is prerendered and cached like the other static pages.
// Legacy `/blog?topic=` URLs are redirected to the topic hubs in middleware
// (legacyFilterQueryRedirect), so the page itself no longer needs `searchParams`.
export function generateMetadata(): Metadata {
  return blogHubMetadata(blogHubPath("all"));
}

function blogHubJsonLd(canonicalUrl: string): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: BLOG_HUB_TITLE,
    description: BLOG_HUB_DESCRIPTION,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${siteOrigin()}/#website` },
  };
}

export default function BlogIndexPage() {
  const { articles, totalPages } = getBlogPageFeed(1, { topic: "all" });
  const canonicalUrl = `${siteOrigin()}/blog`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogHubJsonLd(canonicalUrl)) }}
      />
      <BlogClient
        articles={articles}
        totalPages={totalPages}
        currentPage={1}
        activeTopic="all"
      />
    </>
  );
}
