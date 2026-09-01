import type { Metadata } from "next";
import { notFound, permanentRedirect, redirect } from "next/navigation";
import BlogClient from "../../BlogClient";
import { getBlogPageFeed } from "@/lib/blog";
import {
  blogHubPath,
  blogPagePath,
  resolveBlogTopicFilter,
} from "@/lib/blog-feed";
import {
  BLOG_HUB_DESCRIPTION,
  blogHubListingTitle,
} from "@/lib/seo/blog-hub-metadata";
import { siteOrigin } from "@/lib/seo/site-origin";

type Props = {
  params: Promise<{ page: string }>;
  searchParams: Promise<{ topic?: string }>;
};

function listingMetadata(canonicalPath: string, page: number): Metadata {
  const title = blogHubListingTitle(page);
  const url = `${siteOrigin()}${canonicalPath}`;
  return {
    title: { absolute: title },
    description: BLOG_HUB_DESCRIPTION,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: BLOG_HUB_DESCRIPTION,
      url,
    },
    twitter: {
      title,
      description: BLOG_HUB_DESCRIPTION,
    },
  };
}

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { page: pageStr } = await params;
  const { topic } = await searchParams;
  const page = Number.parseInt(pageStr, 10);
  if (Number.isNaN(page) || page < 1) return {};
  const activeTopic = resolveBlogTopicFilter(topic);
  if (page === 1) {
    return listingMetadata(blogHubPath(activeTopic), 1);
  }
  if (activeTopic !== "all") {
    return listingMetadata(blogPagePath(page, activeTopic), page);
  }
  const { totalPages } = getBlogPageFeed(page, { topic });
  if (page > totalPages) return {};
  return listingMetadata(blogPagePath(page, "all"), page);
}

export default async function BlogPaginatedPage({
  params,
  searchParams,
}: Props) {
  const { page: pageStr } = await params;
  const { topic } = await searchParams;
  const page = Number.parseInt(pageStr, 10);
  if (Number.isNaN(page) || page < 1) notFound();

  const activeTopic = resolveBlogTopicFilter(topic);
  if (activeTopic !== "all") {
    permanentRedirect(blogPagePath(page, activeTopic));
  }
  if (page === 1) {
    redirect(blogHubPath("all"));
  }

  const { articles, totalPages } = getBlogPageFeed(page, { topic: "all" });
  if (page > totalPages) notFound();

  const canonicalUrl = `${siteOrigin()}${blogPagePath(page, "all")}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: blogHubListingTitle(page),
    description: BLOG_HUB_DESCRIPTION,
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
        activeTopic="all"
      />
    </>
  );
}
