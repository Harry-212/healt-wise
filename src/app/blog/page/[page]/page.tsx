import type { Metadata } from "next";
import { notFound, permanentRedirect, redirect } from "next/navigation";
import BlogClient from "../../BlogClient";
import { getBlogPageFeed } from "@/lib/blog";
import {
  blogHubPath,
  blogPagePath,
  resolveBlogTopicFilter,
} from "@/lib/blog-feed";
import { siteOrigin } from "@/lib/seo/site-origin";

type Props = {
  params: Promise<{ page: string }>;
  searchParams: Promise<{ topic?: string }>;
};

const BLOG_DESCRIPTION =
  "Stay informed with the latest news, views, product releases, prices, comparisons, guides, safety articles, and UK city weight loss guides.";

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
  if (activeTopic !== "all") {
    const canonical = `${siteOrigin()}${blogPagePath(page, activeTopic)}`;
    return {
      title: `News & Blog — Page ${page}`,
      description: BLOG_DESCRIPTION,
      alternates: { canonical },
      openGraph: { url: canonical },
    };
  }
  const { totalPages } = getBlogPageFeed(page, { topic });
  if (page > totalPages) return {};
  const canonical = `${siteOrigin()}${blogPagePath(page, "all")}`;
  return {
    title: `News & Blog — Page ${page}`,
    description: BLOG_DESCRIPTION,
    alternates: { canonical },
    openGraph: { url: canonical },
  };
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

  return (
    <BlogClient
      articles={articles}
      totalPages={totalPages}
      currentPage={page}
      activeTopic="all"
    />
  );
}
