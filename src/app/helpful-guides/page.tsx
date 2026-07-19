import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import HelpfulGuidesListing, {
  helpfulGuidesListingMetadata,
} from "./HelpfulGuidesListing";
import {
  helpfulGuidesCategoryHubPath,
  resolveHelpfulGuideCategoryFilter,
} from "@/lib/helpful-guide-slugs";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}): Promise<Metadata> {
  const { category: rawCategory } = await searchParams;
  if (rawCategory) {
    const resolved = resolveHelpfulGuideCategoryFilter(rawCategory);
    if (resolved) {
      return helpfulGuidesListingMetadata(resolved.slug);
    }
  }
  return helpfulGuidesListingMetadata();
}

export default async function HelpfulGuidePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category: rawCategory } = await searchParams;
  if (rawCategory) {
    const resolved = resolveHelpfulGuideCategoryFilter(rawCategory);
    if (resolved) {
      permanentRedirect(helpfulGuidesCategoryHubPath(resolved.slug));
    }
  }

  return <HelpfulGuidesListing />;
}
