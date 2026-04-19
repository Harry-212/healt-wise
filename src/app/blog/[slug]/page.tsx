import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import UkLocationArticleClient from "@/components/blog/UkLocationArticleClient";
import {
  getAllSlugs,
  getAllUkLocationArticleSlugs,
  getPostBySlug,
  parseCitySlugFromUkArticleSlug,
} from "@/lib/blog";
import {
  buildLocationFaq,
  locationFaqJsonLd,
} from "@/lib/content/uk-location-article-data";
import { getUkWeightLossLocationBySlug } from "@/lib/data/uk-weight-loss-locations";
import { siteOrigin } from "@/lib/seo/site-origin";
import { capitalizeHeadingWords } from "@/lib/text/heading-case";

type Props = { params: Promise<{ slug: string }> };

const blogMarkdownComponents: Partial<Components> = {
  table({ children }) {
    return (
      <div className="my-6 w-full min-w-0 overflow-x-auto overscroll-x-contain rounded-xl border border-slate-200/90 bg-white shadow-sm [-webkit-overflow-scrolling:touch]">
        <table className="min-w-max w-full border-collapse text-left text-xs sm:text-sm">
          {children}
        </table>
      </div>
    );
  },
  th({ children }) {
    return (
      <th className="border-b border-slate-200 bg-slate-50 px-2 py-2 text-left text-xs font-semibold text-slate-800 first:pl-3 last:pr-3 sm:px-4 sm:first:pl-4 sm:last:pr-4">
        {children}
      </th>
    );
  },
  td({ children }) {
    return (
      <td className="border-b border-slate-100 px-2 py-2 align-top text-slate-700 first:pl-3 last:pr-3 sm:px-4 sm:py-2.5 sm:first:pl-4 sm:last:pr-4">
        {children}
      </td>
    );
  },
};

export function generateStaticParams() {
  const md = getAllSlugs().map((slug) => ({ slug }));
  const loc = getAllUkLocationArticleSlugs().map((slug) => ({ slug }));
  return [...md, ...loc];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (post) {
    return {
      title: post.title,
      description: post.description,
    };
  }
  const citySlug = parseCitySlugFromUkArticleSlug(slug);
  if (!citySlug) return {};
  const loc = getUkWeightLossLocationBySlug(citySlug);
  if (!loc) return {};
  const title = capitalizeHeadingWords(`Best weight loss treatment in ${loc.name}`);
  const description = `Weight loss treatment in ${loc.name}, ${loc.nation}: NHS vs private vs online GLP-1 access, GPhC checks, FAQs—not medical advice.`;
  const url = `${siteOrigin()}/blog/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      locale: "en_GB",
      images: [{ url: loc.hero.url, width: 1600, height: 900, alt: loc.hero.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [loc.hero.url],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const mdPost = getPostBySlug(slug);
  if (mdPost) {
    return (
      <article className="mx-auto min-w-0 max-w-3xl px-4 pb-20 pt-8 sm:px-5 sm:py-10 md:px-6 md:py-12">
        <Link
          href="/blog"
          className="text-sm font-medium text-brand-primary hover:underline"
        >
          ← Back to blog
        </Link>
        <p className="mt-6 text-xs font-semibold uppercase text-brand-primary">
          {mdPost.category}
        </p>
        <h1 className="mt-2 text-balance text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
          {mdPost.title}
        </h1>
        <p className="mt-2 text-sm text-slate-500">{mdPost.date}</p>
        <div className="mt-10 min-w-0 max-w-none space-y-4 leading-relaxed text-slate-700 [&_a]:font-medium [&_a]:text-brand-primary [&_a]:underline [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_img]:mx-auto [&_img]:my-4 [&_img]:block [&_img]:h-auto [&_img]:w-full [&_img]:max-w-full [&_img]:rounded-xl [&_img]:border [&_img]:border-slate-200/80 [&_img]:shadow-sm">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={blogMarkdownComponents}
          >
            {mdPost.content}
          </ReactMarkdown>
        </div>
      </article>
    );
  }

  const citySlug = parseCitySlugFromUkArticleSlug(slug);
  if (!citySlug) notFound();
  const loc = getUkWeightLossLocationBySlug(citySlug);
  if (!loc) notFound();

  const canonical = `${siteOrigin()}/blog/${slug}`;
  const faqLd = locationFaqJsonLd(buildLocationFaq(loc));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <UkLocationArticleClient loc={loc} shareUrl={canonical} />
    </>
  );
}
