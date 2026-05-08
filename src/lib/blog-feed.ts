/** Matches blog UI topic filters. */
export type BlogFeedTag =
  | "wegovy"
  | "mounjaro"
  | "how-it-works"
  | "guides"
  | "safety"
  | "locations";

/** Matches `getBlogPageFeed` page size (safe to import from client components). */
export const POSTS_PER_PAGE = 21;

export type FeedArticle = {
  title: string;
  /** ISO date string `YYYY-MM-DD` for client-side sorting. */
  date: string;
  image: string;
  description: string;
  href: string;
  tags: BlogFeedTag[];
};

export type FeedArticleMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  heroImage?: string;
  feedTags?: BlogFeedTag[];
};

const DEFAULT_CARD_IMAGE =
  "https://images.pexels.com/photos/373965/pexels-photo-373965.jpeg?auto=compress&cs=tinysrgb&w=1200";

export function inferMarkdownFeedTags(meta: FeedArticleMeta): BlogFeedTag[] {
  const blob = `${meta.title} ${meta.description} ${meta.category}`.toLowerCase();
  const tags = new Set<BlogFeedTag>(["guides"]);
  if (meta.category === "Safety" || meta.category === "Prices") tags.add("safety");
  if (blob.includes("wegovy") || blob.includes("semaglutide")) tags.add("wegovy");
  if (blob.includes("mounjaro") || blob.includes("tirzepatide")) tags.add("mounjaro");
  if (blob.includes("how") && (blob.includes("work") || blob.includes("works")))
    tags.add("how-it-works");
  if (
    blob.includes("safety") ||
    blob.includes("cost") ||
    blob.includes("price") ||
    blob.includes("checklist")
  )
    tags.add("safety");
  return [...tags];
}

export function blogMetaToFeedArticle(meta: FeedArticleMeta): FeedArticle {
  return {
    title: meta.title,
    date: meta.date,
    description: meta.description,
    href: `/blog/${meta.slug}`,
    image: meta.heroImage ?? DEFAULT_CARD_IMAGE,
    tags: meta.feedTags?.length ? [...meta.feedTags] : inferMarkdownFeedTags(meta),
  };
}

