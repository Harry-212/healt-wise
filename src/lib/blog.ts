import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const POSTS_PER_PAGE = 10;

export type BlogCategory =
  | "Prices"
  | "Comparisons"
  | "Guides"
  | "Safety";

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  category: BlogCategory;
  description: string;
};

export type BlogPost = BlogPostMeta & { content: string };

function postsDir(): string {
  return path.join(process.cwd(), "content", "blog");
}

export function getAllSlugs(): string[] {
  const dir = postsDir();
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const file = path.join(postsDir(), `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const rawCat = String(data.category ?? "Guides");
  const category = (
    ["Prices", "Comparisons", "Guides", "Safety"] as const
  ).includes(rawCat as BlogCategory)
    ? (rawCat as BlogCategory)
    : "Guides";
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    category,
    description: String(data.description ?? ""),
    content,
  };
}

export function getAllPostsMeta(): BlogPostMeta[] {
  return getAllSlugs()
    .map((slug) => {
      const p = getPostBySlug(slug);
      if (!p) return null;
      const { content: _, ...meta } = p;
      return meta;
    })
    .filter((m): m is BlogPostMeta => m != null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function filterByCategory(
  posts: BlogPostMeta[],
  category: string | null,
): BlogPostMeta[] {
  if (!category) return posts;
  return posts.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase(),
  );
}

export function paginate<T>(items: T[], page: number, perPage: number): T[] {
  const start = (page - 1) * perPage;
  return items.slice(start, start + perPage);
}

export function totalPages(count: number, perPage: number): number {
  return Math.max(1, Math.ceil(count / perPage));
}
