import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import InternalLinks from "@/components/content/InternalLinks";
import { internalLinksFor } from "@/lib/internal-linking";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Health Wise`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <Link
        href="/blog"
        className="text-sm font-medium text-brand-primary hover:underline"
      >
        ← Back to blog
      </Link>
      <p className="mt-6 text-xs font-semibold uppercase text-brand-primary">
        {post.category}
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
        {post.title}
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        {post.date}
      </p>
      <div className="mt-10 max-w-none space-y-4 leading-relaxed text-slate-700 [&_a]:font-medium [&_a]:text-brand-primary [&_a]:underline [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
      <div className="mt-12">
        <InternalLinks links={internalLinksFor("blog")} />
      </div>
    </article>
  );
}
