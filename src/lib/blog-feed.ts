/** Matches blog UI topic filters. */
export type BlogFeedTag =
  | "wegovy"
  | "mounjaro"
  | "how-it-works"
  | "guides"
  | "safety"
  | "locations";

export const BLOG_HUB_PATH = "/blog";

export const BLOG_FEED_TAGS = [
  "wegovy",
  "mounjaro",
  "how-it-works",
  "guides",
  "safety",
  "locations",
] as const satisfies ReadonlyArray<BlogFeedTag>;

const BLOG_FEED_TAG_SET = new Set<string>(BLOG_FEED_TAGS);

export function isBlogFeedTag(s: string): s is BlogFeedTag {
  return BLOG_FEED_TAG_SET.has(s);
}

export function resolveBlogTopicFilter(raw?: string): BlogFeedTag | "all" {
  if (!raw?.trim()) return "all";
  let decoded = raw.trim();
  try {
    decoded = decodeURIComponent(decoded);
  } catch {
    /* keep raw */
  }
  return isBlogFeedTag(decoded) ? decoded : "all";
}

export function blogTopicHubPath(topic: BlogFeedTag): string {
  return `${BLOG_HUB_PATH}/topic/${topic}`;
}

/** Canonical blog hub path for page 1 (all topics or a single topic filter). */
export function blogHubPath(topic?: BlogFeedTag | "all" | null): string {
  if (!topic || topic === "all") return BLOG_HUB_PATH;
  return blogTopicHubPath(topic);
}

/** Paginated blog listing path (page ≥ 2). */
export function blogPagePath(
  page: number,
  topic?: BlogFeedTag | "all" | null,
): string {
  if (page <= 1) return blogHubPath(topic);
  if (topic && topic !== "all") {
    return `${blogTopicHubPath(topic)}/page/${page}`;
  }
  return `${BLOG_HUB_PATH}/page/${page}`;
}

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

