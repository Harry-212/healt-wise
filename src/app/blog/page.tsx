import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import { getBlogPageFeed } from "@/lib/blog";

export const metadata: Metadata = {
  title: "News & Blog",
  description:
    "Stay informed with the latest news, views, product releases, prices, comparisons, guides, safety articles, and UK city weight loss guides.",
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
