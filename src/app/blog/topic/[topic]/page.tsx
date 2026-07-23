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
import {
  BLOG_HUB_DESCRIPTION,
  BLOG_HUB_TITLE,
} from "@/lib/seo/blog-hub-metadata";
import { siteOrigin } from "@/lib/seo/site-origin";

type Props = {
  params: Promise<{ topic: string }>;
};

export function generateStaticParams() {
  return BLOG_FEED_TAGS.map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic: raw } = await params;
  if (!isBlogFeedTag(raw)) return {};
  const url = `${siteOrigin()}${blogHubPath(raw)}`;
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
