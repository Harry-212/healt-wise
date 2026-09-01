/** Shared SEO for `/blog` hub and paginated/topic listing pages. */
export const BLOG_HUB_TITLE =
  "Weight Loss Injection News & Guides UK | Healthwise360";

export const BLOG_HUB_DESCRIPTION =
  "Read UK news, safety updates and practical guides about Mounjaro, Wegovy, Saxenda, online pharmacies and prescription weight-loss treatment.";

export function blogHubListingTitle(page?: number): string {
  if (!page || page <= 1) return BLOG_HUB_TITLE;
  return `Weight Loss Injection News & Guides UK — Page ${page} | Healthwise360`;
}

export const BLOG_TOPIC_LABELS: Record<string, string> = {
  wegovy: "Wegovy",
  mounjaro: "Mounjaro",
  "how-it-works": "How It Works",
  guides: "Guides & Advice",
  safety: "Safety & Regulation",
  locations: "Locations",
};

export function blogTopicTitle(topic: string, page?: number): string {
  const label = BLOG_TOPIC_LABELS[topic] || topic;
  if (page && page > 1) {
    return `${label} Articles UK — Page ${page} | Healthwise360`;
  }
  return `${label} Articles & Guides UK | Healthwise360`;
}

export function blogTopicDescription(topic: string): string {
  const label = BLOG_TOPIC_LABELS[topic] || topic;
  return `Read UK news, clinical safety updates and practical guidance focused on ${label.toLowerCase()} from Healthwise360.`;
}
