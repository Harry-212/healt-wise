import { NextResponse } from "next/server";
import { STATIC_SEARCH_ITEMS } from "@/lib/search/static-search";
import { blogPostHref, getAllPostsMeta } from "@/lib/blog";

export async function GET() {
  const posts = getAllPostsMeta().map((p) => ({
    type: "Blog" as const,
    title: p.title,
    href: blogPostHref(p),
    keywords: `${p.category} ${p.description}`,
  }));

  return NextResponse.json({
    items: [...STATIC_SEARCH_ITEMS, ...posts],
  });
}
