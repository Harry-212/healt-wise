import {
  getAllBlogSitemapSlugs,
  getAllPostsMeta,
  totalPages,
} from "@/lib/blog";
import { POSTS_PER_PAGE } from "@/lib/blog-feed";
import { allPharmacySlugs } from "@/lib/routes/all-pharmacy-slugs";
import { siteOrigin } from "@/lib/seo/site-origin";

export const dynamic = "force-static";

export async function GET() {
  const origin = siteOrigin();
  const lines: string[] = [
    "# Healthwise360",
    "",
    "> Independent UK comparison site for weight loss treatment prices, pharmacy safety context, and editorial guides. Not medical advice — always consult a registered clinician.",
    "",
    "## Entry points",
    "",
    `- ${origin}/`,
    `- ${origin}/blog`,
    `- ${origin}/compare/wegovy-vs-mounjaro`,
    `- ${origin}/prices/cheapest-options-uk`,
    `- ${origin}/helpful-guides`,
    `- ${origin}/editorial-policy`,
    `- ${origin}/methodology`,
    "",
    "## Compare hubs",
    "",
    `- ${origin}/wegovy-price-comparison`,
    `- ${origin}/mounjaro-price-comparison`,
    `- ${origin}/saxenda-price-comparison`,
    "",
    "## Policies",
    "",
    `- ${origin}/privacy-policy`,
    `- ${origin}/terms-of-service`,
    "",
    "## Pharmacy profiles",
    "",
  ];

  for (const id of allPharmacySlugs()) {
    lines.push(`- ${origin}/pharmacies/${id}`);
  }

  lines.push("", "## Blog articles", "");
  for (const slug of getAllBlogSitemapSlugs()) {
    lines.push(`- ${origin}/blog/${slug}`);
  }

  lines.push("", "## Blog listing pagination", "");
  lines.push(`- ${origin}/blog`);
  const blogCount = getAllPostsMeta().length;
  const pages = totalPages(blogCount, POSTS_PER_PAGE);
  for (let p = 2; p <= pages; p++) {
    lines.push(`- ${origin}/blog/page/${p}`);
  }

  lines.push("", "## Optional", "", `- Sitemap: ${origin}/sitemap.xml`, "");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
