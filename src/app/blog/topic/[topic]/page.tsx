import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogClient from "../../BlogClient";
import { getBlogPageFeed } from "@/lib/blog";
import {
  BLOG_FEED_TAGS,
  blogHubPath,
  isBlogFeedTag,
  type BlogFeedTag,
} from "@/lib/blog-feed";
import { siteOrigin } from "@/lib/seo/site-origin";

const BLOG_DESCRIPTION =
  "Stay informed with the latest news, views, product releases, prices, comparisons, guides, safety articles, and UK city weight loss guides.";

type Props = {
  params: Promise<{ topic: string }>;
};

export function generateStaticParams() {
  return BLOG_FEED_TAGS.map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic: raw } = await params;
  if (!isBlogFeedTag(raw)) return {};
  const canonicalPath = blogHubPath(raw);
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

export default async function BlogTopicPage({ params }: Props) {
  const { topic: raw } = await params;
  if (!isBlogFeedTag(raw)) notFound();
  const topic: BlogFeedTag = raw;

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
