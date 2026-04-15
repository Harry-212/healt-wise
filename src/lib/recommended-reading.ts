import { CURATED_APP_ROUTER_POSTS } from "@/lib/blog";
import { GUIDE_IMAGES } from "@/lib/guide-images";
import {
  HELPFUL_GUIDE_SLUGS,
  helpfulGuidePath,
} from "@/lib/helpful-guide-slugs";

export type RecommendedItem = {
  kind: "guide" | "blog";
  href: string;
  title: string;
  description: string;
  imageUrl: string;
};

const ACRONYMS: Record<string, string> = {
  uk: "UK",
  nhs: "NHS",
  gphc: "GPhC",
  glp: "GLP",
  glp1: "GLP-1",
  fda: "FDA",
  bmi: "BMI",
};

/** Readable title from guide slug when a dedicated title map is not needed. */
function labelFromGuideSlug(slug: string): string {
  const words = slug.split("-").map((w) => {
    const lower = w.toLowerCase();
    if (ACRONYMS[lower]) return ACRONYMS[lower];
    return w.charAt(0).toUpperCase() + w.slice(1);
  });
  return words.join(" ");
}

export function getRecommendedReadingPool(): RecommendedItem[] {
  const guides: RecommendedItem[] = HELPFUL_GUIDE_SLUGS.flatMap((slug) => {
    const imageUrl = GUIDE_IMAGES[slug];
    if (!imageUrl) return [];
    return [
      {
        kind: "guide" as const,
        href: helpfulGuidePath(slug),
        title: labelFromGuideSlug(slug),
        description:
          "Evidence-based UK guide on GLP-1 treatment, safety, and regulation.",
        imageUrl,
      },
    ];
  });

  const blogs: RecommendedItem[] = CURATED_APP_ROUTER_POSTS.map((p) => ({
    kind: "blog" as const,
    href: `/blog/${p.slug}`,
    title: p.title,
    description: p.description,
    imageUrl: p.heroImage ?? "",
  })).filter((x) => x.imageUrl.length > 0);

  return [...guides, ...blogs];
}
