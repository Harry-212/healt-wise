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
import {
  BLOG_HUB_DESCRIPTION,
  blogTopicDescription,
  blogTopicTitle,
} from "@/lib/seo/blog-hub-metadata";
import { siteOrigin } from "@/lib/seo/site-origin";

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
    const title = blogTopicTitle(raw, 1);
    const description = blogTopicDescription(raw, 1);
    const url = `${siteOrigin()}${blogHubPath(raw)}`;
    return {
      title: { absolute: title },
      description,
      alternates: { canonical: url },
      openGraph: { title, description, url },
      twitter: { title, description },
    };
  }
  const { totalPages } = getBlogPageFeed(page, { topic: raw });
  if (page > totalPages) return {};
  const title = blogTopicTitle(raw, page);
  const description = blogTopicDescription(raw, page);
  const url = `${siteOrigin()}${blogPagePath(page, raw)}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
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

  const canonicalUrl = `${siteOrigin()}${blogPagePath(page, raw)}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: blogTopicTitle(raw, page),
    description: blogTopicDescription(raw),
    inLanguage: "en-GB",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteOrigin()}/#website`,
      name: "Healthwise360",
      url: siteOrigin(),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient
        articles={articles}
        totalPages={totalPages}
        currentPage={page}
        activeTopic={activeTopic}
      />
    </>
  );
}
