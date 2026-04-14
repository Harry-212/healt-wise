import type { Metadata } from "next";

/**
 * Title: [Keyword] UK (2026): Price, Comparison & Best Options
 * Description: Compare [keyword] prices in the UK...
 */
export function buildSeoMetadata(keyword: string): Metadata {
  const title = `${keyword} UK (2026): Price, Comparison & Best Options`;
  const description = `Compare ${keyword.toLowerCase()} prices in the UK. See cheapest providers, monthly costs, and best options. Updated 2026.`;
  const shareTitle = `${title} | Health Wise`;
  return {
    title,
    description,
    openGraph: { title: shareTitle, description },
    twitter: { title: shareTitle, description },
  };
}
