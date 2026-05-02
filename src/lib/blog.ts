import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogFeedTag } from '@/lib/blog-feed';
import { blogMetaToFeedArticle, inferMarkdownFeedTags, POSTS_PER_PAGE, type FeedArticle } from '@/lib/blog-feed';
import { buildUkLocationMetaDescription } from '@/lib/content/uk-location-article-data';
import { UK_WEIGHT_LOSS_LOCATIONS } from '@/lib/data/uk-weight-loss-locations';
import { capitalizeHeadingWords } from '@/lib/text/heading-case';

export { POSTS_PER_PAGE } from '@/lib/blog-feed';

export type BlogCategory = 'Prices' | 'Comparisons' | 'Guides' | 'Safety' | 'Locations in UK';

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

export const UK_LOCATION_ARTICLE_PREFIX = 'best-weight-loss-treatment-in-' as const;

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

const LOCATION_POST_DATE = '2026-04-15';

function ukLocationTitle(name: string): string {
  return capitalizeHeadingWords(`Best weight loss treatment in ${name}`);
}

function ukLocationDescription(loc: (typeof UK_WEIGHT_LOSS_LOCATIONS)[number]): string {
  return buildUkLocationMetaDescription(loc);
}

function getUkWeightLossLocationPostMetas(): BlogPostMeta[] {
  return UK_WEIGHT_LOSS_LOCATIONS.map((loc) => ({
    slug: ukLocationArticleSlug(loc.slug),
    title: ukLocationTitle(loc.name),
    date: LOCATION_POST_DATE,
    category: 'Locations in UK',
    description: ukLocationDescription(loc),
    heroImage: loc.hero.url,
    feedTags: ['locations'],
  }));
}

/** Long-form `/blog/...` routes (App Router folders), merged into the main blog feed. */
export const CURATED_APP_ROUTER_POSTS: BlogPostMeta[] = [
  {
    slug: 'weekly-weight-loss-injections-uk-what-they-may-actually-do',
    title: 'Weekly Weight Loss Treatments in the UK: What They May Actually Do',
    date: '2026-04-25',
    category: 'Guides',
    description: 'Weekly weight loss treatments in the UK explained: how Wegovy and Mounjaro may affect appetite, access (NHS vs private), side effects, and what happens after stopping.',
    heroImage: 'https://images.pexels.com/photos/5726708/pexels-photo-5726708.jpeg?auto=compress&cs=tinysrgb&w=1200',
    feedTags: ['wegovy', 'mounjaro', 'guides', 'how-it-works'],
  },
  {
    slug: 'understanding-prescription-weight-loss-injections-uk',
    title: 'Understanding Prescription Weight Loss Treatments in the UK: What They May Actually Offer',
    date: '2026-04-25',
    category: 'Guides',
    description: "Explore uk prescription weight loss treatments and discover if they're the safe, effective boost you need.",
    heroImage: '/blog/UK%20prescription%20weight%20loss%20injection.webp',
    feedTags: ['wegovy', 'mounjaro', 'guides', 'how-it-works'],
  },
  {
    slug: 'top-benefits-of-doctor-prescribed-weight-loss-injections-uk-for-you',
    title: 'Top Benefits of Doctor Prescribed Weight Loss Treatments UK for You',
    date: '2026-05-19',
    category: 'Guides',
    description: 'Discover the top benefits of doctor prescribed weight loss treatments in the UK, including appetite control, medical support, and what to ask your clinician before choosing Wegovy, Mounjaro or Saxenda.',
    heroImage: '/blog/Top%20Benefits%20of%20Doctor%20Prescribed%20Weight%20Loss%20Injections%20UK%20for%20You.webp',
    feedTags: ['wegovy', 'mounjaro', 'guides', 'how-it-works'],
  },
  {
    slug: 'injectable-obesity-treatments-uk-what-works-and-what-doesnt',
    title: "Injectable Obesity Treatments UK: What Works and What Doesn't",
    date: '2026-05-20',
    category: 'Guides',
    description: 'Injectable obesity treatments in the UK: understand how Wegovy, Mounjaro and Saxenda work, NHS vs private access, costs, side effects and realistic expectations.',
    heroImage: '/blog/injectable%20obesity%20treatments%20uk.avif',
    feedTags: ['wegovy', 'mounjaro', 'guides', 'how-it-works'],
  },
  {
    slug: 'mounjaro-vs-ozempic-smart-comparisons-for-better-results',
    title: 'Mounjaro vs Ozempic: Smart Comparisons for Better Results',
    date: '2026-04-24',
    category: 'Comparisons',
    description: 'Mounjaro vs Ozempic: find which treatment fits your diabetes goals in the UK with clear, confident advice.',
    heroImage: '/blog/Mounjaro%20vs%20Ozempic%20Smart%20Comparisons%20for%20Better%20Results.webp',
    feedTags: ['mounjaro', 'how-it-works', 'guides'],
  },
  {
    slug: 'the-surprising-mounjaro-side-effects-you-might-experience',
    title: 'The Surprising Mounjaro Side Effects You Might Experience',
    date: '2026-04-24',
    category: 'Guides',
    description: 'Discover surprising mounjaro side effects you might experience and how you can manage them with confidence.',
    heroImage: '/blog/mounjaro side effects.webp',
    feedTags: ['mounjaro', 'guides', 'safety'],
  },
  {
    slug: 'weight-loss-injection-shortages-in-the-uk-what-you-need-to-know',
    title: 'What You Should Know About Weight Loss Treatment Shortages in the UK',
    date: '2026-04-23',
    category: 'Guides',
    description: 'Stay ahead of weight loss treatment shortages in the UK: what you need to know to reach your goals.',
    heroImage: '/blog/pharmacies.webp',
    feedTags: ['wegovy', 'mounjaro', 'guides'],
  },
  {
    slug: 'side-effects-of-wegovy-and-how-to-manage-them',
    title: 'Effective Tips for Handling Side Effects of Wegovy Yourself',
    date: '2026-04-22',
    category: 'Guides',
    description: 'Boost your weight loss with friendly tips on side effects of Wegovy and how to manage them in the UK.',
    heroImage: '/blog/tired.webp',
    feedTags: ['wegovy', 'guides', 'safety'],
  },
  {
    slug: 'understanding-the-mounjaro-kwikpen-a-user-guide',
    title: 'Feel Confident with Understanding the Mounjaro Kwikpen: A User Guide',
    date: '2026-04-21',
    category: 'Guides',
    description: 'Get confident with understanding the mounjaro kwikpen: a user guide to your UK weight loss treatment journey.',
    heroImage: '/blog/Woman%20(1).webp',
    feedTags: ['mounjaro', 'guides', 'how-it-works'],
  },
  {
    slug: 'mounjaro-vs-wegovy-key-differences-explained',
    title: 'How Mounjaro vs Wegovy: The Key Differences Explained Help You Choose',
    date: '2026-04-20',
    category: 'Comparisons',
    description: 'See how mounjaro vs wegovy: the key differences explained helps you choose your ideal UK weight loss shot.',
    heroImage: `/blog/A-fiTXpbVkmhwjsp3cuYQM2huWvK0viH-ZUgmbJc-LsNznNX-q1CkBk57RiUxF1pPsvAFSANlu82zJ-kBO5FIHP81uSUbMLq_I3_X1zAx6Sc-314jsebYaRMu83aYB-kbliiLmKiLKHXAkYHodC7hi4SBN6LviIgIYE8LTNy9mmGvicH6LlFNjgRq1utPdBf.webp`,
    feedTags: ['mounjaro', 'wegovy', 'guides'],
  },
  {
    slug: 'mounjaro-weight-loss-results-change-your-life',
    title: 'Mounjaro Weight Loss Results That May Finally Change Your Life',
    date: '2026-04-19',
    category: 'Guides',
    description: 'Discover if mounjaro weight loss results can finally change your life and help you shed stubborn kilos.',
    heroImage: '/blog/Mounjaro%20Weight%20Loss%20Results%20That%20May%20Finally%20Change%20Your%20Life.webp',
    feedTags: ['mounjaro', 'guides'],
  },
  {
    slug: 'how-licensed-weight-loss-injections-uk-can-boost-your-journey',
    title: 'How Licensed Weight Loss Injections UK Can Boost Your Journey',
    date: '2026-05-21',
    category: 'Guides',
    description:
      'How licensed MHRA-authorised weight loss injections in the UK can support appetite control, NHS vs private access, and realistic expectations with medical oversight.',
    heroImage: '/blog/How%20Licensed%20Weight%20Loss%20Injections%20UK%20Can%20Boost%20Your%20Journey.webp',
    feedTags: ['mounjaro', 'wegovy', 'guides', 'safety'],
  },
  {
    slug: 'discover-the-powerful-benefits-of-prescription-slimming-injections-uk',
    title: 'Discover the Powerful Benefits of Prescription Slimming Treatments UK',
    date: '2026-05-22',
    category: 'Guides',
    description: 'Discover the powerful benefits of prescription slimming treatments in the UK, including how Wegovy, Mounjaro and Saxenda support appetite, blood sugar and long-term progress.',
    heroImage: '/blog/Discover%20the%20Powerful%20Benefits%20of%20Prescription%20Slimming%20Injections%20UK.webp',
    feedTags: ['mounjaro', 'wegovy', 'guides', 'safety'],
  },
  {
    slug: 'how-to-compare-uk-weight-loss-pens-and-find-the-best',
    title: 'How to Compare UK Weight Loss Pens and Find the Best',
    date: '2026-05-23',
    category: 'Comparisons',
    description: 'Learn how to compare UK weight loss pens, including Saxenda, Wegovy and Mounjaro, to find the best option for your goals, tolerance and budget.',
    heroImage: '/blog/How%20to%20Compare%20UK%20Weight%20Loss%20Pens%20and%20Find%20the%20Best.webp',
    feedTags: ['mounjaro', 'wegovy', 'guides', 'safety'],
  },
  {
    slug: 'mounjaro-weight-loss-injections-game-changer',
    title: 'Could Mounjaro Weight Loss Treatments Be Your Game-Changer?',
    date: '2026-04-18',
    category: 'Guides',
    description: 'Could mounjaro weight loss treatments be your breakthrough to finally conquer stubborn diet plateaus?',
    heroImage: '/blog/Could%20Mounjaro%20Weight%20Loss%20Injections%20Be%20Your%20Game-Changer.webp',
    feedTags: ['mounjaro', 'guides'],
  },
  {
    slug: 'mounjaro-weight-loss-before-and-after',
    title: 'Your Ultimate Guide to Mounjaro Weight Loss Before and After',
    date: '2026-04-17',
    category: 'Guides',
    description: 'Explore the mounjaro weight loss before and after results to see how you can finally conquer stubborn pounds.',
    heroImage: '/blog/Your%20Ultimate%20Guide%20to%20Mounjaro%20Weight%20Loss%20Before%20and%20After.webp',
    feedTags: ['mounjaro', 'guides'],
  },
  {
    slug: 'how-does-wegovy-work-to-transform-your-weight-journey',
    title: 'How Does Wegovy Work to Transform Your Weight Journey',
    date: '2026-05-18',
    category: 'Guides',
    description: 'Discover exactly how the Wegovy weight loss treatment works in your body, from mimicking the GLP-1 hormone to reducing appetite and slowing gastric emptying.',
    heroImage: 'https://i.ibb.co.com/qYntkdQh/how-does-wegovy-work.png',
    feedTags: ['wegovy', 'how-it-works'],
  },
  {
    slug: 'mounjaro-dosage-for-weight-loss-facts-you-can-trust',
    title: 'Mounjaro Dosage for Weight Loss: Facts You Can Trust',
    date: '2026-05-17',
    category: 'Guides',
    description: 'Learn how Mounjaro dosage works, the stages from 2.5 mg to higher doses, potential side effects, and long-term success strategies.',
    heroImage: '/blog/Healthy.webp',
    feedTags: ['mounjaro', 'guides'],
  },
  {
    slug: 'the-truth-about-wegovy-weight-loss-medication-costs-in-the-uk',
    title: 'The Truth About Wegovy Weight Loss Medication Costs in the UK',
    date: '2026-05-16',
    category: 'Safety',
    description: 'Discover real UK costs for wegovy weight loss medication, see if you qualify and compare providers today.',
    heroImage: 'https://i.ibb.co.com/Ndr2MsY9/image.png',
    feedTags: ['wegovy', 'safety'],
  },
  {
    slug: 'easy-to-follow-wegovy-injection-instructions-you-can-trust',
    title: 'Easy-to-Follow Wegovy Treatment Instructions You Can Trust',
    date: '2026-05-15',
    category: 'Guides',
    description: 'Follow clear wegovy treatment instructions to confidently start your UK weight loss journey today.',
    heroImage: 'https://i.ibb.co.com/TjdVknY/image.png',
    feedTags: ['wegovy', 'guides'],
  },
  {
    slug: 'discover-if-mounjaro-is-safe-for-weight-loss-and-right-for-you',
    title: 'Discover If Mounjaro Is Safe for Weight Loss and Right for You',
    date: '2026-05-14',
    category: 'Safety',
    description: 'Wondering is mounjaro safe for weight loss? Get your UK eligibility, cost & provider insights before deciding.',
    heroImage:
      '/blog/Discover%20If%20Mounjaro%20Is%20Safe%20for%20Weight%20Loss%20and%20Right.webp',
    feedTags: ['mounjaro', 'safety'],
  },
  {
    slug: 'does-mounjaro-really-work-for-weight-loss-find-out-here',
    title: 'Does Mounjaro Really Work for Weight Loss? Find Out Here',
    date: '2026-05-13',
    category: 'Guides',
    description: 'How does Mounjaro work for weight loss? Discover your eligibility, costs and UK providers in one guide.',
    heroImage: 'https://i.ibb.co.com/k2NjLMfp/image.png',
    feedTags: ['mounjaro', 'how-it-works'],
  },
  {
    slug: 'mounjaro-weight-loss-benefits-backed-by-science',
    title: 'Mounjaro Weight Loss Benefits Backed by Science',
    date: '2026-05-12',
    category: 'Guides',
    description: 'Unlock mounjaro weight loss benefits backed by science to help you shed stubborn pounds with confidence.',
    heroImage: '/blog/Mounjaro%20Weight%20Loss%20Benefits%20Backed%20by%20Science.webp',
    feedTags: ['mounjaro', 'how-it-works'],
  },
  {
    slug: 'the-truth-about-mounjaro-dosage-for-weight-loss-effectiveness',
    title: 'The Truth About Mounjaro Dosage for Weight Loss Effectiveness',
    date: '2026-05-11',
    category: 'Guides',
    description: 'Find the ideal mounjaro dosage for weight loss to maximise your results with clear, expert-backed guidance.',
    heroImage: '/blog/The%20Truth%20About%20Mounjaro%20Dosage%20for%20Weight%20Loss%20Effectiveness.webp',
    feedTags: ['mounjaro', 'guides'],
  },
];

/** Curated long-form `/blog/:slug` App Router articles (each includes an in-page FAQ). */
export const CURATED_BLOG_ARTICLE_SLUGS: readonly string[] = CURATED_APP_ROUTER_POSTS.map((p) => p.slug);

const CURATED_SLUG_SET = new Set(CURATED_APP_ROUTER_POSTS.map((p) => p.slug));

/** Long-form app routes & markdown before programmatic city pages (stable blog index). */
function feedSortBand(meta: BlogPostMeta): number {
  if (CURATED_SLUG_SET.has(meta.slug)) return 0;
  if (meta.slug.startsWith(UK_LOCATION_ARTICLE_PREFIX)) return 2;
  return 1;
}

export type BlogPost = BlogPostMeta & { content: string };

function postsDir(): string {
  return path.join(process.cwd(), 'content', 'blog');
}

export function getAllSlugs(): string[] {
  const dir = postsDir();
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const file = path.join(postsDir(), `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  const rawCat = String(data.category ?? 'Guides');
  const category = (['Prices', 'Comparisons', 'Guides', 'Safety', 'Locations in UK'] as const).includes(rawCat as BlogCategory) ? (rawCat as BlogCategory) : 'Guides';
  const heroRaw = data.heroImage ?? data.hero_image;
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ''),
    category,
    description: String(data.description ?? ''),
    ...(heroRaw != null && String(heroRaw).trim() !== ''
      ? { heroImage: String(heroRaw).trim() }
      : {}),
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
        date: meta.date,
        description: meta.description,
        category: meta.category,
      });
      const row: BlogPostMeta = { ...meta, feedTags };
      return row;
    })
    .filter((m): m is BlogPostMeta => m != null);

  const fromLocations = getUkWeightLossLocationPostMetas();

  return [...fromMarkdown, ...CURATED_APP_ROUTER_POSTS, ...fromLocations].sort((a, b) => {
    const ba = feedSortBand(a);
    const bb = feedSortBand(b);
    if (ba !== bb) return ba - bb;
    const d = b.date.localeCompare(a.date);
    if (d !== 0) return d;
    return a.title.localeCompare(b.title);
  });
}

export function filterByCategory(posts: BlogPostMeta[], category: string | null): BlogPostMeta[] {
  if (!category) return posts;
  return posts.filter((p) => p.category.toLowerCase() === category.toLowerCase());
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
  activeTopic: BlogFeedTag | 'all';
} {
  let all = getAllPostsMeta();
  if (opts.category) {
    all = filterByCategory(all, opts.category);
  }
  const topicRaw = opts.topic?.trim() ?? '';
  const topicSet = new Set<string>(['wegovy', 'mounjaro', 'how-it-works', 'guides', 'safety', 'locations']);
  const activeTopic: BlogFeedTag | 'all' = topicSet.has(topicRaw) ? (topicRaw as BlogFeedTag) : 'all';
  if (activeTopic !== 'all') {
    all = all.filter((p) => p.feedTags?.includes(activeTopic));
  }
  const pages = totalPages(all.length, POSTS_PER_PAGE);
  const slice = paginate(all, page, POSTS_PER_PAGE);
  const articles = slice.map((p) =>
    blogMetaToFeedArticle({
      slug: p.slug,
      title: p.title,
      date: p.date,
      description: p.description,
      category: p.category,
      heroImage: p.heroImage,
      feedTags: p.feedTags,
    }),
  );
  return { articles, totalPages: pages, activeTopic };
}

export function buildBlogListQuery(opts: { topic?: BlogFeedTag | 'all'; page?: number }): string {
  const q = new URLSearchParams();
  if (opts.topic && opts.topic !== 'all') q.set('topic', opts.topic);
  if (opts.page != null && opts.page > 1) q.set('page', String(opts.page));
  const s = q.toString();
  return s ? `?${s}` : '';
}
