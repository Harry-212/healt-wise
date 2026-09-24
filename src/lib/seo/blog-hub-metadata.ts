/** Shared SEO for `/blog` hub and paginated/topic listing pages. */
export const BLOG_HUB_TITLE =
  "Weight Loss Injection News & Guides UK | Healthwise360";

export const BLOG_HUB_DESCRIPTION =
  "Read UK news, safety updates and practical guides about Mounjaro, Wegovy, Saxenda, online pharmacies and prescription weight-loss treatment.";

export function blogHubListingTitle(page?: number): string {
  if (!page || page <= 1) return BLOG_HUB_TITLE;
  return `Weight Loss News & Guides UK — Page ${page} | Healthwise360`;
}

export const BLOG_TOPIC_LABELS: Record<string, string> = {
  wegovy: "Wegovy",
  mounjaro: "Mounjaro",
  "how-it-works": "How It Works",
  guides: "Guides & Advice",
  safety: "Safety & Regulation",
  locations: "Locations",
};

/** On-page H1 for the blog hub and topic listings. */
export const BLOG_HUB_HEADING = "Weight Loss Injection News & Guides";

/** One-line intro per topic listing, describing what that topic actually holds. */
export const BLOG_TOPIC_INTROS: Record<string, string> = {
  wegovy:
    "Articles covering Wegovy (semaglutide): the FlexTouch pen and click counts, the Wegovy pill, starting treatment safely and how UK private prices compare.",
  mounjaro:
    "Articles covering Mounjaro (tirzepatide): KwikPen dosing and click counts, how it works, safety questions and how UK private prices compare.",
  "how-it-works":
    "Explainers on how prescription weight-loss treatments work, from weekly injections and the Wegovy pill to eating well alongside treatment and what BMI measures.",
  guides:
    "Practical guides for UK readers: where to start, buying treatment safely online, protein and fibre on GLP-1 treatment, and belly fat after 40.",
  safety:
    "Safety and regulation: buying from registered UK providers, GLP-1 supplement claims, side effects and what to check before you pay.",
  locations:
    "Guides to weight-loss treatment options in specific UK locations, covering NHS routes, local clinics and online providers.",
};

export function blogListingHeading(topic: string, page?: number): string {
  const base =
    topic === "all" ? BLOG_HUB_HEADING : `${BLOG_TOPIC_LABELS[topic] || topic} Articles`;
  return page && page > 1 ? `${base} — Page ${page}` : base;
}

export function blogListingIntro(topic: string): string {
  return BLOG_TOPIC_INTROS[topic] ?? BLOG_HUB_DESCRIPTION;
}

export function blogTopicTitle(topic: string, page?: number): string {
  const label = BLOG_TOPIC_LABELS[topic] || topic;
  if (page && page > 1) {
    return `${label} Articles UK — Page ${page} | Healthwise360`;
  }
  // "Guides & Advice Articles & Guides" reads badly; drop the repeat.
  return label.includes("Guides")
    ? `${label} Articles UK | Healthwise360`
    : `${label} Articles & Guides UK | Healthwise360`;
}

export function blogTopicDescription(topic: string, page?: number): string {
  const label = BLOG_TOPIC_LABELS[topic] || topic;
  const base = blogListingIntro(topic);
  if (page && page > 1) {
    return `${label} articles, page ${page}. ${base}`;
  }
  return base;
}

export function blogHubPageDescription(page?: number): string {
  if (page && page > 1) {
    return `Page ${page} — UK guides and news on Mounjaro, Wegovy, Saxenda, online pharmacies and prescription weight-loss treatment.`;
  }
  return BLOG_HUB_DESCRIPTION;
}
