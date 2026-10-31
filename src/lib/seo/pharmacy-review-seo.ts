import type { Metadata } from "next";
import { withDefaultShareImage } from "@/lib/seo/default-share-image";

/**
 * Standard pharmacy profile SEO:
 * Primary — "{Provider} weight management review"
 * Secondary — treatment prices, consultation, delivery fees, clinical support,
 * registered pharmacy, provider review, total monthly cost
 */

export function pharmacyReviewTitle(providerName: string): string {
  return `${providerName} Review 2026: Mounjaro & Wegovy Prices`;
}

export function pharmacyReviewDescription(providerName: string): string {
  return `Is ${providerName} legit? Our ${providerName} review covers Mounjaro and Wegovy prices for every dose, the GPhC number, delivery and support.`;
}

export function pharmacyReviewH1(providerName: string): string {
  return `${providerName} Review: Mounjaro and Wegovy Prices`;
}

export function pharmacyReviewSubtitle(providerName: string): string {
  return `Independent provider review of ${providerName}: consultation process, clinical support, registered pharmacy fulfilment, delivery fees, treatment prices and total monthly cost (information only — not medical advice).`;
}

export function pharmacyReviewMetadata(opts: {
  providerName: string;
  canonical: string;
}): Metadata {
  const title = pharmacyReviewTitle(opts.providerName);
  const description = pharmacyReviewDescription(opts.providerName);
  return withDefaultShareImage({
    title: { absolute: title },
    description,
    alternates: { canonical: opts.canonical },
    openGraph: {
      type: "website",
      url: opts.canonical,
      title,
      description,
    },
  });
}

/** Slugs with custom dossier landings — keep in sync with `/pharmacies/[slug]` branches. */
export const PHARMACY_LANDING_PROVIDER_NAMES: Record<string, string> = {
  "pharmacy-me": "Pharmacy + Me",
  "i-prescribe": "i-Prescribe",
  shemed: "SheMed",
};

export function landingProviderName(slug: string): string | undefined {
  return PHARMACY_LANDING_PROVIDER_NAMES[slug];
}
