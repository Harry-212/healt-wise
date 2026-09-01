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
  blogTopicDescription,
  blogTopicTitle,
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
  const title = blogTopicTitle(raw);
  const description = blogTopicDescription(raw);
  const url = `${siteOrigin()}${blogHubPath(raw)}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function BlogTopicPage({ params }: Props) {
  const { topic: raw } = await params;
  if (!isBlogFeedTag(raw)) notFound();
  const topic: BlogFeedTag = raw;

  const { articles, totalPages, activeTopic } = getBlogPageFeed(1, { topic });
  const canonicalUrl = `${siteOrigin()}${blogHubPath(raw)}`;
  const title = blogTopicTitle(raw);
  const description = blogTopicDescription(raw);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: title,
    description,
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
        currentPage={1}
        activeTopic={activeTopic}
      />
    </>
  );
}
