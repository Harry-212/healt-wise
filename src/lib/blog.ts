import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogFeedTag } from "@/lib/blog-feed";
import {
  blogMetaToFeedArticle,
  inferMarkdownFeedTags,
  POSTS_PER_PAGE,
  type FeedArticle,
} from "@/lib/blog-feed";
import { UK_WEIGHT_LOSS_LOCATIONS } from "@/lib/data/uk-weight-loss-locations";
import { capitalizeHeadingWords } from "@/lib/text/heading-case";

export { POSTS_PER_PAGE } from "@/lib/blog-feed";

export type BlogCategory =
  | "Prices"
  | "Comparisons"
  | "Guides"
  | "Safety"
  | "Locations in UK";

export type BlogPostMeta = {
  slug: string;
  /** @deprecated Prefer `/blog/${slug}`; kept for older data. */
  postPath?: string;
  title: string;
  date: string;
  category: BlogCategory;
  description: string;
  /** Card / Open Graph image for blog grid. */
  heroImage?: string;
  /** Topic chips on /blog (filter). */
  feedTags?: BlogFeedTag[];
};

export const UK_LOCATION_ARTICLE_PREFIX = "best-weight-loss-treatment-in-" as const;

export function ukLocationArticleSlug(citySlug: string): string {
  return `${UK_LOCATION_ARTICLE_PREFIX}${citySlug}`;
}

/** Reverse URL slug → city slug (e.g. `manchester`). */
export function parseCitySlugFromUkArticleSlug(articleSlug: string): string | null {
  if (!articleSlug.startsWith(UK_LOCATION_ARTICLE_PREFIX)) return null;
  const rest = articleSlug.slice(UK_LOCATION_ARTICLE_PREFIX.length);
  return rest.length ? rest : null;
}

export function getAllUkLocationArticleSlugs(): string[] {
  return UK_WEIGHT_LOSS_LOCATIONS.map((l) => ukLocationArticleSlug(l.slug));
}

export function blogPostHref(meta: BlogPostMeta): string {
  return meta.postPath ?? `/blog/${meta.slug}`;
}

const LOCATION_POST_DATE = "2026-04-15";

function ukLocationTitle(name: string): string {
  return capitalizeHeadingWords(`Best weight loss treatment in ${name}`);
}

function ukLocationDescription(loc: (typeof UK_WEIGHT_LOSS_LOCATIONS)[number]): string {
  return `${loc.name} (${loc.nation}): NHS, private & online weight loss options, GLP-1 context, GPhC checks—what postcode may change. Not medical advice.`;
}

function getUkWeightLossLocationPostMetas(): BlogPostMeta[] {
  return UK_WEIGHT_LOSS_LOCATIONS.map((loc) => ({
    slug: ukLocationArticleSlug(loc.slug),
    title: ukLocationTitle(loc.name),
    date: LOCATION_POST_DATE,
    category: "Locations in UK",
    description: ukLocationDescription(loc),
    heroImage: loc.hero.url,
    feedTags: ["locations"],
  }));
}

/** Long-form `/blog/...` routes (App Router folders), merged into the main blog feed. */
export const CURATED_APP_ROUTER_POSTS: BlogPostMeta[] = [
  {
    slug: "how-does-wegovy-work-to-transform-your-weight-journey",
    title: "How Does Wegovy Work to Transform Your Weight Journey",
    date: "2026-05-18",
    category: "Guides",
    description:
      "Discover exactly how the Wegovy weight loss injection works in your body, from mimicking the GLP-1 hormone to reducing appetite and slowing gastric emptying.",
    heroImage: "https://i.ibb.co.com/qYntkdQh/how-does-wegovy-work.png",
    feedTags: ["wegovy", "how-it-works"],
  },
  {
    slug: "mounjaro-dosage-for-weight-loss-facts-you-can-trust",
    title: "Mounjaro Dosage for Weight Loss: Facts You Can Trust",
    date: "2026-05-17",
    category: "Guides",
    description:
      "Learn how Mounjaro dosage works, the stages from 2.5 mg to higher doses, potential side effects, and long-term success strategies.",
    heroImage: "https://i.ibb.co.com/cSgqJLYC/image.png",
    feedTags: ["mounjaro", "guides"],
  },
  {
    slug: "the-truth-about-wegovy-weight-loss-medication-costs-in-the-uk",
    title: "The Truth About Wegovy Weight Loss Medication Costs in the UK",
    date: "2026-05-16",
    category: "Safety",
    description:
      "Discover real UK costs for wegovy weight loss medication, see if you qualify and compare providers today.",
    heroImage: "https://i.ibb.co.com/Ndr2MsY9/image.png",
    feedTags: ["wegovy", "safety"],
  },
  {
    slug: "easy-to-follow-wegovy-injection-instructions-you-can-trust",
    title: "Easy-to-Follow Wegovy Injection Instructions You Can Trust",
    date: "2026-05-15",
    category: "Guides",
    description:
      "Follow clear wegovy injection instructions to confidently start your UK weight loss journey today.",
    heroImage: "https://i.ibb.co.com/TjdVknY/image.png",
    feedTags: ["wegovy", "guides"],
  },
  {
    slug: "discover-if-mounjaro-is-safe-for-weight-loss-and-right-for-you",
    title: "Discover If Mounjaro Is Safe for Weight Loss and Right for You",
    date: "2026-05-14",
    category: "Safety",
    description:
      "Wondering is mounjaro safe for weight loss? Get your UK eligibility, cost & provider insights before deciding.",
    heroImage: "https://i.ibb.co.com/xqyv8wc3/image.png",
    feedTags: ["mounjaro", "safety"],
  },
  {
    slug: "does-mounjaro-really-work-for-weight-loss-find-out-here",
    title: "Does Mounjaro Really Work for Weight Loss? Find Out Here",
    date: "2026-05-13",
    category: "Guides",
    description:
      "How does Mounjaro work for weight loss? Discover your eligibility, costs and UK providers in one guide.",
    heroImage: "https://i.ibb.co.com/k2NjLMfp/image.png",
    feedTags: ["mounjaro", "how-it-works"],
  },
  {
    slug: "mounjaro-weight-loss-benefits-backed-by-science",
    title: "Mounjaro Weight Loss Benefits Backed by Science",
    date: "2026-05-12",
    category: "Guides",
    description:
      "Unlock mounjaro weight loss benefits backed by science to help you shed stubborn pounds with confidence.",
    heroImage: "https://i.ibb.co.com/rKvC8NDp/image.png",
    feedTags: ["mounjaro", "how-it-works"],
  },
  {
    slug: "the-truth-about-mounjaro-dosage-for-weight-loss-effectiveness",
    title: "The Truth About Mounjaro Dosage for Weight Loss Effectiveness",
    date: "2026-05-11",
    category: "Guides",
    description:
      "Find the ideal mounjaro dosage for weight loss to maximise your results with clear, expert-backed guidance.",
    heroImage: "https://i.ibb.co.com/N28zDM17/image.png",
    feedTags: ["mounjaro", "guides"],
  },
];

/** Curated long-form `/blog/:slug` App Router articles (each includes an in-page FAQ). */
export const CURATED_BLOG_ARTICLE_SLUGS: readonly string[] =
  CURATED_APP_ROUTER_POSTS.map((p) => p.slug);

const CURATED_SLUG_SET = new Set(CURATED_APP_ROUTER_POSTS.map((p) => p.slug));

/** Long-form app routes & markdown before programmatic city pages (stable blog index). */
function feedSortBand(meta: BlogPostMeta): number {
  if (CURATED_SLUG_SET.has(meta.slug)) return 0;
  if (meta.slug.startsWith(UK_LOCATION_ARTICLE_PREFIX)) return 2;
  return 1;
}

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
    [
      "Prices",
      "Comparisons",
      "Guides",
      "Safety",
      "Locations in UK",
    ] as const
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
  const fromMarkdown = getAllSlugs()
    .map((slug) => {
      const p = getPostBySlug(slug);
      if (!p) return null;
      const { content: _, ...meta } = p;
      const feedTags = inferMarkdownFeedTags({
        slug: meta.slug,
        title: meta.title,
        description: meta.description,
        category: meta.category,
      });
      const row: BlogPostMeta = { ...meta, feedTags };
      return row;
    })
    .filter((m): m is BlogPostMeta => m != null);

  const fromLocations = getUkWeightLossLocationPostMetas();

  return [...fromMarkdown, ...CURATED_APP_ROUTER_POSTS, ...fromLocations].sort(
    (a, b) => {
      const ba = feedSortBand(a);
      const bb = feedSortBand(b);
      if (ba !== bb) return ba - bb;
      const d = b.date.localeCompare(a.date);
      if (d !== 0) return d;
      return a.title.localeCompare(b.title);
    },
  );
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

/** Paginated feed for the visual blog grid (20 per page). */
export function getBlogPageFeed(
  page: number,
  opts: { topic?: string | null; category?: string | null },
): {
  articles: FeedArticle[];
  totalPages: number;
  activeTopic: BlogFeedTag | "all";
} {
  let all = getAllPostsMeta();
  if (opts.category) {
    all = filterByCategory(all, opts.category);
  }
  const topicRaw = opts.topic?.trim() ?? "";
  const topicSet = new Set<string>([
    "wegovy",
    "mounjaro",
    "how-it-works",
    "guides",
    "safety",
    "locations",
  ]);
  const activeTopic: BlogFeedTag | "all" = topicSet.has(topicRaw)
    ? (topicRaw as BlogFeedTag)
    : "all";
  if (activeTopic !== "all") {
    all = all.filter((p) => p.feedTags?.includes(activeTopic));
  }
  const pages = totalPages(all.length, POSTS_PER_PAGE);
  const slice = paginate(all, page, POSTS_PER_PAGE);
  const articles = slice.map((p) =>
    blogMetaToFeedArticle({
      slug: p.slug,
      title: p.title,
      description: p.description,
      category: p.category,
      heroImage: p.heroImage,
      feedTags: p.feedTags,
    }),
  );
  return { articles, totalPages: pages, activeTopic };
}

export function buildBlogListQuery(opts: {
  topic?: BlogFeedTag | "all";
  page?: number;
}): string {
  const q = new URLSearchParams();
  if (opts.topic && opts.topic !== "all") q.set("topic", opts.topic);
  if (opts.page != null && opts.page > 1) q.set("page", String(opts.page));
  const s = q.toString();
  return s ? `?${s}` : "";
}
