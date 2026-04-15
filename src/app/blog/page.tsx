import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import { getBlogPageFeed } from "@/lib/blog";
import { siteOrigin } from "@/lib/seo/site-origin";

export const metadata: Metadata = {
  title: "News & Blog",
  description:
    "Stay informed with the latest news, views, product releases, prices, comparisons, guides, safety articles, and UK city weight loss guides.",
  alternates: {
    canonical: `${siteOrigin()}/blog`,
  },
};

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
