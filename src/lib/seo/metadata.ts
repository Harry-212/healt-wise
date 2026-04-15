import type { Metadata } from "next";
import { siteOrigin } from "@/lib/seo/site-origin";

/**
 * Title: [Keyword] UK (2026): Price, Comparison & Best Options
 * Description: Compare [keyword] prices in the UK...
 */
export function buildSeoMetadata(
  keyword: string,
  canonicalPath: string,
): Metadata {
  const title = `${keyword} UK (2026): Price, Comparison & Best Options`;
  const description = `Compare ${keyword.toLowerCase()} prices in the UK. See cheapest providers, monthly costs, and best options. Updated 2026.`;
  const shareTitle = `${title} | Health Wise`;
  const path = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
  const canonical = `${siteOrigin()}${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title: shareTitle, description, url: canonical },
    twitter: { title: shareTitle, description },
  };
}
