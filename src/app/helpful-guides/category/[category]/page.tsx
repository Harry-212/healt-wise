import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HelpfulGuidesListing, {
  helpfulGuidesListingMetadata,
} from "../../HelpfulGuidesListing";
import {
  HELPFUL_GUIDE_CATEGORY_SLUGS,
  isHelpfulGuideCategorySlug,
  type HelpfulGuideCategorySlug,
} from "@/lib/helpful-guide-slugs";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return HELPFUL_GUIDE_CATEGORY_SLUGS.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  if (!isHelpfulGuideCategorySlug(category)) return {};
  return helpfulGuidesListingMetadata(category);
}

export default async function HelpfulGuidesCategoryPage({ params }: Props) {
  const { category: raw } = await params;
  if (!isHelpfulGuideCategorySlug(raw)) notFound();
  const category: HelpfulGuideCategorySlug = raw;

  return <HelpfulGuidesListing activeCategorySlug={category} />;
}
