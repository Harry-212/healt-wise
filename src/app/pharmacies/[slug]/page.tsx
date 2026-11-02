import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import DoseDirectPharmacyContent from "@/components/pharmacies/content/DoseDirectPharmacyContent";
import GenericProviderProfile from "@/components/pharmacies/content/GenericProviderProfile";
import IPrescribePharmacyContent from "@/components/pharmacies/content/IPrescribePharmacyContent";
import PharmacyMePharmacyContent from "@/components/pharmacies/content/PharmacyMePharmacyContent";
import ReachOnlinePharmacyContent from "@/components/pharmacies/content/ReachOnlinePharmacyContent";
import SheMedPharmacyContent from "@/components/pharmacies/content/SheMedPharmacyContent";
import SoliraPharmacyContent from "@/components/pharmacies/content/SoliraPharmacyContent";
import RelatedPharmacyLinks from "@/components/pharmacies/RelatedPharmacyLinks";
import { getActiveProvider } from "@/lib/data/providers";
import { allPharmacySlugs } from "@/lib/routes/all-pharmacy-slugs";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  landingProviderName,
  pharmacyReviewMetadata,
} from "@/lib/seo/pharmacy-review-seo";
import { pharmacyProfileJsonGraph } from "@/lib/seo/pharmacy-landing-json-ld";
import { getLiveMounjaroProvider, getLiveWegovyProvider } from "@/lib/data/compare-live";

type Props = { params: Promise<{ slug: string }> };

/**
 * Prices come from the live store (admin edits + monthly update). Pages are
 * regenerated at most every 5 minutes, and at once when prices are saved
 * (revalidatePath in the admin and price-apply routes).
 *
 * Only the active partners (see `providers.ts`) have a profile page; every other
 * `/pharmacies/:slug` answers 410 Gone (see `lib/seo/gone-paths.ts`).
 */
export const revalidate = 300;

export function generateStaticParams() {
  return allPharmacySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const canonical = `${siteOrigin()}/pharmacies/${slug}`;

  const landingName = landingProviderName(slug);
  if (landingName) {
    return pharmacyReviewMetadata({ providerName: landingName, canonical });
  }

  const w = getLiveWegovyProvider(slug);
  const m = getLiveMounjaroProvider(slug);
  const name = w?.name ?? m?.name;
  if (!name) return { title: "Pharmacy" };

  return pharmacyReviewMetadata({ providerName: name, canonical });
}

/**
 * Hand-written profiles. An active partner without an entry here gets
 * `GenericProviderProfile`, built from the central provider data, so switching a
 * partner on never produces a 404 for a URL the sitemap lists.
 */
const CUSTOM_PROFILES: Record<string, ComponentType> = {
  dosedirect: DoseDirectPharmacyContent,
  "reach-online-pharmacy": ReachOnlinePharmacyContent,
  "pharmacy-me": PharmacyMePharmacyContent,
  "i-prescribe": IPrescribePharmacyContent,
  shemed: SheMedPharmacyContent,
  solira: SoliraPharmacyContent,
};

/** Profiles whose cross-links the route renders; the others render their own. */
const ROUTE_RENDERS_RELATED_LINKS = new Set<string>([
  "dosedirect",
  "pharmacy-me",
  "reach-online-pharmacy",
]);

const CUSTOM_PROFILE_SEO: Record<string, { title: string; description: string }> = {
  dosedirect: {
    title: "DoseDirect weight loss review (UK) — pharmacist-led care",
    description:
      "DoseDirect: GPhC-registered distance-selling pharmacy, online clinical questionnaire, pharmacist independent prescriber review, same-day dispatch before 1pm and ongoing dose-review support. Information from Healthwise360 — not medical advice.",
  },
  "reach-online-pharmacy": {
    title: "Reach Online Pharmacy weight loss review (UK) — GPhC-registered",
    description:
      "Reach Online Pharmacy: GPhC-registered UK pharmacy, online clinical questionnaire, review by UK-registered clinicians, tracked next-day delivery and ongoing dose-review support. Information from Healthwise360 — not medical advice.",
  },
  "pharmacy-me": {
    title: "Pharmacy + Me weight loss review (UK) — GPhC-registered",
    description:
      "Pharmacy + Me: GPhC-registered UK online pharmacy (PHARMKG Ltd, 9012604), free clinical assessment, review by UK-registered Pharmacist Independent Prescribers, tracked Royal Mail delivery, and ongoing clinical care. Information from Healthwise360 — not medical advice.",
  },
  "i-prescribe": {
    title: "i-Prescribe Weight Loss Review: Mounjaro & Wegovy Prices",
    description:
      "Is i-Prescribe legit? Our i-Prescribe review covers Mounjaro and Wegovy pen prices, online consultation, Royal Mail delivery and GPhC registration 9012850.",
  },
  shemed: {
    title: "SheMed Weight Loss Review: Women's Programme, Prices & Delivery",
    description:
      "Explore SheMed's women's weight loss programme, including Mounjaro & Wegovy prices, eligibility, included blood tests, clinical support and free UK delivery.",
  },
  solira: {
    title: "Solira Weight Loss UK | Prices & Delivery",
    description:
      "Explore Solira's UK weight loss programme, pharmacist consultations, treatment prices, eligibility, ongoing support and delivery charges.",
  },
};

export default async function PharmacyProfilePage({ params }: Props) {
  const { slug } = await params;

  const provider = getActiveProvider(slug);
  if (!provider) notFound();

  const Custom = CUSTOM_PROFILES[slug];
  const seo = CUSTOM_PROFILE_SEO[slug] ?? {
    title: `${provider.name} weight loss review: Mounjaro & Wegovy prices`,
    description: `${provider.name}: standard retail Mounjaro and Wegovy prices by dose, standard delivery fee and GPhC registration. Information from Healthwise360, not medical advice.`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            pharmacyProfileJsonGraph({
              slug,
              name: provider.name,
              title: seo.title,
              description: seo.description,
            }),
          ),
        }}
      />
      {Custom ? <Custom /> : <GenericProviderProfile providerId={slug} />}
      {ROUTE_RENDERS_RELATED_LINKS.has(slug) ? (
        <RelatedPharmacyLinks currentSlug={slug} />
      ) : null}
    </>
  );
}
