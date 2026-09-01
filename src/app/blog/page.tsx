import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import BlogClient from "./BlogClient";
import { getBlogPageFeed } from "@/lib/blog";
import {
  blogHubPath,
  blogTopicHubPath,
  resolveBlogTopicFilter,
} from "@/lib/blog-feed";
import {
  BLOG_HUB_DESCRIPTION,
  BLOG_HUB_TITLE,
} from "@/lib/seo/blog-hub-metadata";
import { siteOrigin } from "@/lib/seo/site-origin";

function blogHubMetadata(canonicalPath: string): Metadata {
  const url = `${siteOrigin()}${canonicalPath}`;
  return {
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
  };
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}): Promise<Metadata> {
  const { topic: rawTopic } = await searchParams;
  const activeTopic = resolveBlogTopicFilter(rawTopic);
  if (activeTopic !== "all") {
    // Legacy ?topic= URLs redirect; metadata still points at the canonical static path.
    return blogHubMetadata(blogTopicHubPath(activeTopic));
  }

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
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteOrigin()}/#website`,
      name: "Healthwise360",
      url: siteOrigin(),
    },
  };
}

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;
  const activeTopic = resolveBlogTopicFilter(topic);
  if (activeTopic !== "all") {
    permanentRedirect(blogTopicHubPath(activeTopic));
  }

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
