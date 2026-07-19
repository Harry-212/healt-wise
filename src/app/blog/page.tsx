import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import BlogClient from "./BlogClient";
import { getBlogPageFeed } from "@/lib/blog";
import {
  blogHubPath,
  blogTopicHubPath,
  resolveBlogTopicFilter,
} from "@/lib/blog-feed";
import { siteOrigin } from "@/lib/seo/site-origin";

const BLOG_DESCRIPTION =
  "Stay informed with the latest news, views, product releases, prices, comparisons, guides, safety articles, and UK city weight loss guides.";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}): Promise<Metadata> {
  const { topic: rawTopic } = await searchParams;
  const activeTopic = resolveBlogTopicFilter(rawTopic);
  if (activeTopic !== "all") {
    // Legacy ?topic= URLs redirect; metadata still points at the canonical static path.
    return {
      title: "News & Blog",
      description: BLOG_DESCRIPTION,
      alternates: {
        canonical: `${siteOrigin()}${blogTopicHubPath(activeTopic)}`,
      },
      openGraph: {
        url: `${siteOrigin()}${blogTopicHubPath(activeTopic)}`,
      },
    };
  }

  return {
    title: "News & Blog",
    description: BLOG_DESCRIPTION,
    alternates: {
      canonical: `${siteOrigin()}${blogHubPath("all")}`,
    },
    openGraph: {
      url: `${siteOrigin()}${blogHubPath("all")}`,
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

  return (
    <BlogClient
      articles={articles}
      totalPages={totalPages}
      currentPage={1}
      activeTopic="all"
    />
  );
}
