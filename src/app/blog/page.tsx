import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import { getBlogPageFeed } from "@/lib/blog";
import { blogHubPath, resolveBlogTopicFilter } from "@/lib/blog-feed";
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
  const canonicalPath = blogHubPath(activeTopic);

  return {
    title: "News & Blog",
    description: BLOG_DESCRIPTION,
    alternates: {
      canonical: `${siteOrigin()}${canonicalPath}`,
    },
    openGraph: {
      url: `${siteOrigin()}${canonicalPath}`,
    },
  };
}

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;
  const { articles, totalPages, activeTopic } = getBlogPageFeed(1, { topic });

  return (
    <BlogClient
      articles={articles}
      totalPages={totalPages}
      currentPage={1}
      activeTopic={activeTopic}
    />
  );
}
