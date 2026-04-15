import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import BlogClient from "../../BlogClient";
import { getBlogPageFeed } from "@/lib/blog";
import { siteOrigin } from "@/lib/seo/site-origin";

type Props = {
  params: Promise<{ page: string }>;
  searchParams: Promise<{ topic?: string }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { page: pageStr } = await params;
  const { topic } = await searchParams;
  const page = Number.parseInt(pageStr, 10);
  if (Number.isNaN(page) || page < 1) return {};
  const topicQs =
    topic && topic.trim() !== ""
      ? `?topic=${encodeURIComponent(topic.trim())}`
      : "";
  if (page === 1) {
    return {
      title: "News & Blog",
      description:
        "Stay informed with the latest news, views, product releases, prices, comparisons, guides, safety articles, and UK city weight loss guides.",
      alternates: {
        canonical: `${siteOrigin()}/blog${topicQs}`,
      },
    };
  }
  const { totalPages } = getBlogPageFeed(page, { topic });
  if (page > totalPages) return {};
  const canonical = `${siteOrigin()}/blog/page/${page}${topicQs}`;
  return {
    title: `News & Blog — Page ${page}`,
    description:
      "Stay informed with the latest news, views, product releases, prices, comparisons, guides, safety articles, and UK city weight loss guides.",
    alternates: { canonical },
    openGraph: { url: canonical },
  };
}

export default async function BlogPaginatedPage({ params, searchParams }: Props) {
  const { page: pageStr } = await params;
  const { topic } = await searchParams;
  const page = Number.parseInt(pageStr, 10);
  if (Number.isNaN(page) || page < 1) notFound();
  if (page === 1) {
    const qs = topic ? `?topic=${encodeURIComponent(topic)}` : "";
    redirect(`/blog${qs}`);
  }

  const { articles, totalPages, activeTopic } = getBlogPageFeed(page, { topic });
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
