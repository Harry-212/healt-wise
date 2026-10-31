import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DoseDirectPharmacyContent from "@/components/pharmacies/content/DoseDirectPharmacyContent";
import IPrescribePharmacyContent from "@/components/pharmacies/content/IPrescribePharmacyContent";
import PharmacyMePharmacyContent from "@/components/pharmacies/content/PharmacyMePharmacyContent";
import ReachOnlinePharmacyContent from "@/components/pharmacies/content/ReachOnlinePharmacyContent";
import SheMedPharmacyContent from "@/components/pharmacies/content/SheMedPharmacyContent";
import RelatedPharmacyLinks from "@/components/pharmacies/RelatedPharmacyLinks";
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
 * Only the affiliate partners (see `AFFILIATE_PARTNER_IDS`) have a profile page;
 * every other `/pharmacies/:slug` answers 410 Gone (see `lib/seo/gone-paths.ts`).
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

export default async function PharmacyProfilePage({ params }: Props) {
  const { slug } = await params;

  if (slug === "dosedirect") {
    const title = "DoseDirect weight loss review (UK) — pharmacist-led care";
    const description =
      "DoseDirect: GPhC-registered distance-selling pharmacy, online clinical questionnaire, pharmacist independent prescriber review, same-day dispatch before 1pm and ongoing dose-review support. Information from Healthwise360 — not medical advice.";

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              pharmacyProfileJsonGraph({
                slug,
                name: "DoseDirect",
                title,
                description,
              }),
            ),
          }}
        />
        <DoseDirectPharmacyContent />
        <RelatedPharmacyLinks currentSlug="dosedirect" />
      </>
    );
  }

  if (slug === "reach-online-pharmacy") {
    const title =
      "Reach Online Pharmacy weight loss review (UK) — GPhC-registered";
    const description =
      "Reach Online Pharmacy: GPhC-registered UK pharmacy, online clinical questionnaire, review by UK-registered clinicians, tracked next-day delivery and ongoing dose-review support. Information from Healthwise360 — not medical advice.";

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              pharmacyProfileJsonGraph({
                slug,
                name: "Reach Online Pharmacy",
                title,
                description,
              }),
            ),
          }}
        />
        <ReachOnlinePharmacyContent />
        <RelatedPharmacyLinks currentSlug="reach-online-pharmacy" />
      </>
    );
  }

  if (slug === "pharmacy-me") {
    const title = "Pharmacy + Me weight loss review (UK) — GPhC-registered";
    const description =
      "Pharmacy + Me: GPhC-registered UK online pharmacy (PHARMKG Ltd, 9012604), free clinical assessment, review by UK-registered Pharmacist Independent Prescribers, tracked Royal Mail delivery, and ongoing clinical care. Information from Healthwise360 — not medical advice.";

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              pharmacyProfileJsonGraph({
                slug,
                name: "Pharmacy + Me",
                title,
                description,
              }),
            ),
          }}
        />
        <PharmacyMePharmacyContent />
        <RelatedPharmacyLinks currentSlug="pharmacy-me" />
      </>
    );
  }

  if (slug === "i-prescribe") {
    const title =
      "i-Prescribe Weight Loss Review: Mounjaro & Wegovy Prices";
    const description =
      "Is i-Prescribe legit? Our i-Prescribe review covers Mounjaro and Wegovy pen prices, online consultation, Royal Mail delivery and GPhC registration 9012850.";

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              pharmacyProfileJsonGraph({
                slug,
                name: "i-Prescribe",
                title,
                description,
              }),
            ),
          }}
        />
        <IPrescribePharmacyContent />
      </>
    );
  }

  if (slug === "shemed") {
    const title =
      "SheMed Weight Loss Review: Women's Programme, Prices & Delivery";
    const description =
      "Explore SheMed's women's weight loss programme, including Mounjaro & Wegovy prices, eligibility, included blood tests, clinical support and free UK delivery.";

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              pharmacyProfileJsonGraph({
                slug,
                name: "SheMed",
                title,
                description,
              }),
            ),
          }}
        />
        <SheMedPharmacyContent />
      </>
    );
  }

  notFound();
}
