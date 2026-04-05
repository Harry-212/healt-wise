import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import {
  filterByCategory,
  getAllPostsMeta,
  paginate,
  POSTS_PER_PAGE,
  totalPages,
} from "@/lib/blog";

type Props = {
  params: Promise<{ page: string }>;
  searchParams: Promise<{ category?: string }>;
};

export default async function BlogPaginatedPage({ params, searchParams }: Props) {
  const { page: pageStr } = await params;
  const { category } = await searchParams;
  const page = Number.parseInt(pageStr, 10);
  if (Number.isNaN(page) || page < 1) notFound();
  if (page === 1) {
    const q = category
      ? `?category=${encodeURIComponent(category)}`
      : "";
    redirect(`/blog${q}`);
  }

  const all = filterByCategory(getAllPostsMeta(), category ?? null);
  const pages = totalPages(all.length, POSTS_PER_PAGE);
  if (page > pages) notFound();

  const posts = paginate(all, page, POSTS_PER_PAGE);

  const q = category
    ? `?category=${encodeURIComponent(category)}`
    : "";

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <h1 className="text-3xl font-bold text-slate-900">
        Blog — page {page}
      </h1>
      <ul className="mt-10 space-y-8">
        {posts.map((p) => (
          <li key={p.slug} className="border-b border-brand-border pb-8">
            <p className="text-xs font-semibold uppercase text-brand-primary">
              {p.category}
            </p>
            <Link
              href={`/blog/${p.slug}`}
              className="mt-1 block text-xl font-semibold text-slate-900 hover:text-brand-primary"
            >
              {p.title}
            </Link>
            <p className="mt-2 text-sm text-slate-500">{p.date}</p>
            <p className="mt-2 text-slate-600">
              {p.description}
            </p>
          </li>
        ))}
      </ul>
      <nav className="mt-10 flex flex-wrap gap-2" aria-label="Pagination">
        <Link
          href={`/blog${q}`}
          className="rounded-lg border border-brand-border px-3 py-2 text-sm"
        >
          1
        </Link>
        {Array.from({ length: pages - 1 }, (_, i) => i + 2).map((n) => (
          <Link
            key={n}
            href={`/blog/page/${n}${q}`}
            className={`rounded-lg px-3 py-2 text-sm ${
              n === page
                ? "bg-brand-primary text-white"
                : "border border-brand-border"
            }`}
          >
            {n}
          </Link>
        ))}
      </nav>
    </div>
  );
}
