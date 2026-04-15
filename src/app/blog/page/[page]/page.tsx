import { notFound, redirect } from "next/navigation";
import BlogClient from "../../BlogClient";
import { getBlogPageFeed } from "@/lib/blog";

type Props = {
  params: Promise<{ page: string }>;
  searchParams: Promise<{ topic?: string }>;
};

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
