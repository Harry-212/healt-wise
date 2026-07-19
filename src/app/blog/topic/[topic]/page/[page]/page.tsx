import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import BlogClient from "../../../../BlogClient";
import { getBlogPageFeed } from "@/lib/blog";
import {
  BLOG_FEED_TAGS,
  blogHubPath,
  blogPagePath,
  isBlogFeedTag,
  type BlogFeedTag,
} from "@/lib/blog-feed";
import { siteOrigin } from "@/lib/seo/site-origin";

const BLOG_DESCRIPTION =
  "Stay informed with the latest news, views, product releases, prices, comparisons, guides, safety articles, and UK city weight loss guides.";

type Props = {
  params: Promise<{ topic: string; page: string }>;
};

export function generateStaticParams() {
  return BLOG_FEED_TAGS.map((topic) => ({ topic, page: "2" }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic: raw, page: pageStr } = await params;
  if (!isBlogFeedTag(raw)) return {};
  const page = Number.parseInt(pageStr, 10);
  if (Number.isNaN(page) || page < 1) return {};
  if (page === 1) {
    const canonicalPath = blogHubPath(raw);
    return {
      title: "News & Blog",
      description: BLOG_DESCRIPTION,
      alternates: { canonical: `${siteOrigin()}${canonicalPath}` },
      openGraph: { url: `${siteOrigin()}${canonicalPath}` },
    };
  }
  const { totalPages } = getBlogPageFeed(page, { topic: raw });
  if (page > totalPages) return {};
  const canonical = `${siteOrigin()}${blogPagePath(page, raw)}`;
  return {
    title: `News & Blog — Page ${page}`,
    description: BLOG_DESCRIPTION,
    alternates: { canonical },
    openGraph: { url: canonical },
  };
}

export default async function BlogTopicPaginatedPage({ params }: Props) {
  const { topic: raw, page: pageStr } = await params;
  if (!isBlogFeedTag(raw)) notFound();
  const topic: BlogFeedTag = raw;
  const page = Number.parseInt(pageStr, 10);
  if (Number.isNaN(page) || page < 1) notFound();
  if (page === 1) redirect(blogHubPath(topic));

  const { articles, totalPages, activeTopic } = getBlogPageFeed(page, {
    topic,
  });
  if (page > totalPages) notFound();

  return (
    <BlogClient
      articles={articles}
      totalPages={totalPages}
      currentPage={page}
      activeTopic={activeTopic}
    />
  );
}
