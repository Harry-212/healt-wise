/** Shared SEO for `/blog` hub and paginated/topic listing pages. */
export const BLOG_HUB_TITLE =
  "Weight Loss Injection News & Guides UK | Healthwise360";

export const BLOG_HUB_DESCRIPTION =
  "Read UK news, safety updates and practical guides about Mounjaro, Wegovy, Saxenda, online pharmacies and prescription weight-loss treatment.";

export function blogHubListingTitle(page?: number): string {
  if (!page || page <= 1) return BLOG_HUB_TITLE;
  return `Weight Loss Injection News & Guides UK — Page ${page} | Healthwise360`;
}
