import Link from "next/link";
import type { Metadata } from "next";
import {
  filterByCategory,
  getAllPostsMeta,
  paginate,
  POSTS_PER_PAGE,
  totalPages,
} from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Health Wise",
  description:
    "Prices, comparisons, guides, and safety articles for UK GLP-1 treatment.",
};

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function BlogIndexPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const all = filterByCategory(getAllPostsMeta(), category ?? null);
  const page = 1;
  const pages = totalPages(all.length, POSTS_PER_PAGE);
  const posts = paginate(all, page, POSTS_PER_PAGE);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <h1 className="text-3xl font-bold text-slate-900">
        Blog
      </h1>
      <p className="mt-2 text-slate-600">
        Latest articles on UK GLP-1 prices, comparisons, guides, and safety.
      </p>
      <CategoryFilter active={category ?? null} />
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
            <p className="mt-2 text-sm text-slate-500">
              {p.date}
            </p>
            <p className="mt-2 text-slate-600">
              {p.description}
            </p>
          </li>
        ))}
      </ul>
      {pages > 1 ? (
        <nav className="mt-10 flex gap-2" aria-label="Pagination">
          <span className="rounded-lg bg-brand-primary px-3 py-2 text-sm font-medium text-white">
            1
          </span>
          {Array.from({ length: pages - 1 }, (_, i) => i + 2).map((n) => (
            <PageLink key={n} page={n} category={category} />
          ))}
        </nav>
      ) : null}
    </div>
  );
}

function CategoryFilter({ active }: { active: string | null }) {
  const cats = ["Prices", "Comparisons", "Guides", "Safety"] as const;
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      <Link
        href="/blog"
        className={`rounded-full px-3 py-1 text-sm font-medium ${
          !active
            ? "bg-brand-primary text-white"
            : "bg-brand-surface text-slate-700"
        }`}
      >
        All
      </Link>
      {cats.map((c) => (
        <Link
          key={c}
          href={`/blog?category=${encodeURIComponent(c)}`}
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            active === c
              ? "bg-brand-primary text-white"
              : "bg-brand-surface text-slate-700"
          }`}
        >
          {c}
        </Link>
      ))}
    </div>
  );
}

function PageLink({
  page,
  category,
}: {
  page: number;
  category?: string;
}) {
  const q = category
    ? `?category=${encodeURIComponent(category)}`
    : "";
  return (
    <Link
      href={`/blog/page/${page}${q}`}
      className="rounded-lg border border-brand-border px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-surface"
    >
      {page}
    </Link>
  );
}
