/** Public site name for UI copy, metadata, and structured data. */
export const SITE_BRAND_NAME = "Healthwise360";

/** Article JSON-LD `author.name` for blog posts and helpful guides. */
export const SITE_ARTICLE_AUTHOR_NAME = "Healthwise360 Research Team";

/** Schema.org Organization author node for Article / BlogPosting JSON-LD. */
export const SITE_ARTICLE_AUTHOR = {
  "@type": "Organization",
  name: SITE_ARTICLE_AUTHOR_NAME,
} as const;
