import { PILLAR_DIET } from "@/lib/lifestyle/pillar-routes";

/**
 * Image URLs for `/tips`.
 * Uses Pexels CDN (`images.pexels.com`) — whitelisted in next.config and tends to be more
 * reliable than hotlinking some Unsplash variants in certain regions/CDNs.
 */
const px = (id: number, w: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

/** Hero — healthy spread / meal prep vibe */
export const TIPS_HERO_IMAGE = px(1640777, 1400);

export const TIPS_ZIGZAG_IMAGES = {
  /** Nutrition — colourful balanced plates */
  nutrition: "https://images.pexels.com/photos/5714348/pexels-photo-5714348.jpeg",
  /** Appetite — food & dining context */
  appetite: px(1640774, 1200),
  /** Consistency — training / sustainable movement */
  consistency: px(1552242, 1200),
} as const;

/** Support — stretching / calm movement */
export const TIPS_SUPPORT_IMAGE = px(4056723, 1200);

/** Promo — clinical / consultation context */
export const TIPS_PROMO_IMAGE =
  "https://images.pexels.com/photos/7801341/pexels-photo-7801341.jpeg";

export const TIPS_PRINCIPLES = [
  {
    title: "Calorie awareness",
    body: "Understanding your intake helps create a consistent calorie deficit without extreme dieting.",
  },
  {
    title: "Protein priority",
    body: "Protein supports muscle retention and keeps you feeling full longer.",
  },
  {
    title: "Movement matters",
    body: "Daily activity improves metabolism and overall health—even simple walking helps.",
  },
  {
    title: "Sleep & recovery",
    body: "Poor sleep increases hunger hormones and cravings.",
  },
] as const;

export const TIPS_SUPPORT_PILLARS = [
  {
    title: "Exercise",
    body: "You don’t need intense workouts to see results. Start with simple activities like walking, light strength training, or stretching.",
  },
  {
    title: "Stress management",
    body: "Chronic stress increases cortisol, which can lead to fat storage and cravings. Techniques like breathing exercises or mindfulness can help.",
  },
  {
    title: "Sleep",
    body: "Sleep plays a critical role in weight management. Aim for 7–9 hours to support recovery and hormone balance.",
  },
] as const;

export const TIPS_PROMO_BENEFITS = [
  "Helps reduce hunger and cravings",
  "Supports steady, sustainable weight loss",
  "Backed by clinical research",
  "Works alongside lifestyle changes",
] as const;

export const TIPS_RELATED = [
  {
    category: "Medication",
    readTime: "6 min",
    title: "Mounjaro vs Wegovy: what’s the difference?",
    excerpt: "A clear comparison of two leading weight loss treatments.",
    href: "/compare/wegovy-vs-mounjaro",
  },
  {
    category: "Side effects",
    readTime: "5 min",
    title: "How to manage common side effects safely",
    excerpt: "Simple ways to reduce nausea, fatigue, and digestion issues.",
    href: "/helpful-guides/mounjaro-side-effects-uk",
  },
  {
    category: "Lifestyle",
    readTime: "4 min",
    title: "Simple habits that make weight loss easier",
    excerpt: "Small changes that lead to big long-term results.",
    href: PILLAR_DIET,
  },
] as const;
