import type { Metadata } from "next";

const SITE = "Health Wise";

/**
 * Title: [Keyword] UK (2026): Price, Comparison & Best Options
 * Description: Compare [keyword] prices in the UK...
 */
export function buildSeoMetadata(keyword: string): Metadata {
  const title = `${keyword} UK (2026): Price, Comparison & Best Options | ${SITE}`;
  const description = `Compare ${keyword.toLowerCase()} prices in the UK. See cheapest providers, monthly costs, and best options. Updated 2026.`;
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}
