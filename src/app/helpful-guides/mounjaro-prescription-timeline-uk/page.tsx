import { helpfulGuidePath } from "@/lib/helpful-guide-slugs";
import { siteOrigin } from "@/lib/seo/site-origin";
import { buildGuideShareMetadata } from "@/lib/seo/guide-share-metadata";
import {
  GuideLayout,
  GuideSection,
  GuideParagraph,
  GuideBulletList,
  GuideBulletListRich,
  GuideKeyTakeaways,
  GuideDisclaimer,
  GuideFaq,
  GuideReferences,
  GuideRelatedGuides,
  GuideStatCards,
  GuideCallout,
  IL,
  EL,
} from "@/components/guide/GuideLayout";

export const metadata = buildGuideShareMetadata({
  slug: "mounjaro-prescription-timeline-uk",
  title: "How Long Does It Take to Get Mounjaro in the UK? Prescription & Delivery Timeline",
  description: "Most patients receive Mounjaro within 1–3 days of approval. Learn the full prescription process—medical review, eligibility checks, cold-chain delivery—and how to avoid delays.",
  openGraphTitle: "How Long Does It Take to Get Mounjaro in the UK? Prescription & Delivery Timeline",
  openGraphDescription: "Most patients receive Mounjaro within 1–3 days of approval. Learn the full prescription process and how to avoid common delays.",
});


const TOC = [
  { id: "timeline", label: "Typical Timeline" },
  { id: "why-time", label: "Why It Takes Time" },
  { id: "cold-chain", label: "Cold Chain Delivery" },
  { id: "avoid-delays", label: "How to Avoid Delays" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "Can I get same-day approval for Mounjaro?",
    a: "Sometimes, but it depends on demand and the speed of the clinical review. Most providers process approvals within 24 hours during business days. Completing your consultation questionnaire accurately and completely is the most reliable way to speed up the process.",
  },
  {
    q: "How long does delivery take after Mounjaro is approved?",
    a: "Most verified UK pharmacies dispatch on the next working day after approval, with next-day or 2-day tracked delivery. Orders placed late in the day or at weekends may take slightly longer.",
  },
  {
    q: "Can I track my Mounjaro delivery?",
    a: "Yes. Most verified pharmacies provide tracked delivery with a tracking number. Because Mounjaro requires cold-chain packaging, it is usually dispatched via a specialist courier rather than standard post.",
  },
  {
    q: "What happens if my Mounjaro is delayed in transit?",
    a: "If your Mounjaro is delayed and you are concerned about storage temperature, contact the pharmacy before using it. See our guide on Mounjaro delivery and storage for temperature rules and what to check on arrival.",
  },
];

const REFERENCES = [
  {
    label: "Mounjaro (tirzepatide) SmPC — cold-chain storage requirements",
    description:
      "Official prescribing reference confirming Mounjaro's storage requirements of 2°C–8°C and transport conditions.",
    href: "https://www.medicines.org.uk/emc/product/15481",
  },
  {
    label: "MHRA — Prescription-only medicines in the UK",
    description:
      "MHRA guidance on the legal framework for prescription-only medicines, including what a valid prescription requires.",
    href: "https://www.gov.uk/government/publications/rules-for-the-sale-supply-and-administration-of-medicines",
  },
  {
    label: "NHS — How to get a prescription",
    description:
      "NHS guidance on obtaining prescriptions from GPs and private providers in the UK.",
    href: "https://www.nhs.uk/nhs-services/prescriptions-and-pharmacies/",
  },
  {
    label: "How we verify UK pharmacies — Health Wise",
    description:
      "Our verification process for pharmacies listed on Health Wise, including cold-chain compliance checks.",
    href: "/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards",
    external: false,
  },
  {
    label: "Compare Mounjaro prices UK — Health Wise",
    description:
      "Find verified Mounjaro prices from GPhC-registered pharmacies, including delivery information.",
    href: "/mounjaro-price-comparison",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/mounjaro-delivery-storage-uk",
    category: "Pharmacy Safety",
    title: "Mounjaro Delivery & Storage UK: Temperature Rules",
    description:
      "What safe delivery looks like, temperature zones explained, and what to do if something goes wrong.",
  },
  {
    href: "/helpful-guides/mounjaro-weight-loss-injection-uk",
    category: "Medications",
    title: "Mounjaro Weight Loss Treatment UK: Full Guide",
    description:
      "How Mounjaro works, clinical results, eligibility, and costs—everything you need to know.",
  },
  {
    href: "/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards",
    category: "Pharmacy Safety",
    title: "How We Verify UK Pharmacies: GPhC Checks Explained",
    description:
      "Why pharmacy verification matters and how to confirm a provider is GPhC-registered.",
  },
];

const GUIDE_URL = `${siteOrigin()}${helpfulGuidePath("mounjaro-prescription-timeline-uk")}`;

const SCHEMA_JSON = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${GUIDE_URL}#blogPosting`,
      headline:
        "How Long Does It Take to Get Mounjaro in the UK? Prescription & Delivery Timeline",
      description:
        "Most patients receive Mounjaro within 1–3 days of approval. Learn the full prescription process and how to avoid common delays.",
      author: { "@type": "Organization", name: "Health Wise" },
      publisher: { "@type": "Organization", name: "Health Wise" },
      dateModified: "2026-04-09",
      keywords:
        "Mounjaro, tirzepatide, UK prescription, online pharmacy, cold chain delivery, GLP-1",
      mainEntityOfPage: { "@type": "WebPage", "@id": GUIDE_URL },
      url: GUIDE_URL,
      isAccessibleForFree: true,
      inLanguage: "en-GB",
    },
    {
      "@type": "FAQPage",
      "@id": `${GUIDE_URL}#faq`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function GuideMounjaroTimeline() {
  return (
    <GuideLayout
      slug="mounjaro-prescription-timeline-uk"
      category="Medications"
      categorySlug="medications"
      title="How Long Does It Take to Get Mounjaro in the UK? Prescription & Delivery Timeline"
      description="From consultation to doorstep delivery—most patients receive Mounjaro within 1–3 days of approval. Here's what happens at each stage and how to avoid common delays."
      readTime="3 min read"
      lastUpdated="April 2026"
      toc={TOC}
      schemaJson={SCHEMA_JSON}
    >
      {/* ── Section 1 ── */}
      <GuideSection id="timeline" heading="Typical Timeline">
        <GuideParagraph>
          Most patients receive{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> within:
         For more context, explore our resources on <IL href="/blog/side-effects-of-wegovy-and-how-to-manage-them" className="font-medium text-emerald-600 hover:underline">managing Wegovy side effects</IL>.</GuideParagraph>
        <GuideStatCards
          stats={[
            { value: "1–3", label: "Days for approval", sub: "After consultation" },
            { value: "Next day", label: "Delivery", sub: "After dispatch" },
            { value: "24hrs", label: "Typical review", sub: "Business days" },
            { value: "2–8°C", label: "Cold-chain", sub: "Required in transit" },
          ]}
        />
        <GuideParagraph>
          The total time from starting your consultation to receiving your
          medication is typically 2–4 working days with most{" "}
          <IL href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
            GPhC registered online pharmacies
          </IL>
          . You can use our{" "}
          <IL href="/mounjaro-price-comparison">Mounjaro price comparison</IL>{" "}
          to find providers that include delivery speed information.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 2 ── */}
      <GuideSection id="why-time" heading="Why It Takes Time">
        <GuideParagraph>
          <IL href="/what-is-mounjaro">Mounjaro</IL> is a prescription only
          medicine regulated by the{" "}
          <EL href="https://www.gov.uk/government/publications/rules-for-the-sale-supply-and-administration-of-medicines">
            MHRA
          </EL>
          . This means it cannot simply be ordered like an over the counter
          product each prescription must go through a proper clinical process:
         For more context, explore our resources on <IL href="/blog/best-weight-loss-treatment-in-london" className="font-medium text-emerald-600 hover:underline">treatment in London</IL>.</GuideParagraph>
        <GuideBulletList
          items={[
            "Medical review — a registered clinician reviews your consultation questionnaire and health history",
            "Eligibility checks — confirmation that you meet the BMI and health criteria for Mounjaro",
            "Prescription approval — a legally valid prescription is issued by the clinician",
          ]}
        />
        <GuideParagraph>
          This process protects patient safety and ensures{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> is only prescribed to
          those for whom it is clinically appropriate. Any provider offering
          immediate supply without a proper clinical review should be treated
          with caution.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 3 ── */}
      <GuideSection id="cold-chain" heading="Cold Chain Delivery">
        <GuideParagraph>
          <IL href="/what-is-mounjaro">Mounjaro</IL> must be stored between
          2°C and 8°C throughout the supply chain. This is a regulatory
          requirement set out in the{" "}
          <EL href="https://www.medicines.org.uk/emc/product/15481">
            official SmPC
          </EL>{" "}
          and means that pharmacies must use specialist cold chain packaging
          for delivery.
         For more context, explore our resources on <IL href="/blog/best-weight-loss-treatment-in-manchester" className="font-medium text-emerald-600 hover:underline">treatment in Manchester</IL>.</GuideParagraph>
        <GuideBulletList
          items={[
            "Medication is dispatched in insulated packaging with cooling elements (ice packs or gel packs)",
            "Specialist couriers are used to maintain temperature control throughout transit",
            "Delivery windows are typically tighter than standard parcels to minimise exposure time",
          ]}
        />
        <GuideCallout variant="info">
          This is one of the reasons why buying from unverified or unregistered
          pharmacies carries real risk — cold-chain compliance is not
          guaranteed. Our{" "}
          <IL href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
            pharmacy verification guide
          </IL>{" "}
          explains the storage checks we perform on every listed provider.
        </GuideCallout>
        <GuideParagraph>
          For full details on what to check when your delivery arrives, see our
          dedicated guide on{" "}
          <IL href="/helpful-guides/mounjaro-delivery-storage-uk">
            Mounjaro delivery and storage in the UK
          </IL>
          .
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 4 ── */}
      <GuideSection id="avoid-delays" heading="How to Avoid Delays">
        <GuideParagraph>
          Most delays in receiving{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> are preventable. Follow
          these steps:
         For more context, explore our resources on <IL href="/mounjaro-price-comparison" className="font-medium text-emerald-600 hover:underline">Mounjaro price comparison</IL>.</GuideParagraph>
        <GuideBulletListRich
          items={[
            "Complete your consultation questionnaire accurately and thoroughly — incomplete answers are the most common cause of delays.",
            "Respond quickly to any requests for additional information from the clinical team.",
            "Order early in the week — orders placed on Thursday or Friday may not dispatch until Monday.",
            <>
              Ensure your delivery address is correct and accessible — missed
              deliveries of cold-chain items can affect medication safety. See
              our{" "}
              <IL href="/helpful-guides/mounjaro-delivery-storage-uk">
                delivery and storage guide
              </IL>{" "}
              for what to do if you miss a delivery.
            </>,
            <>
              Choose a pharmacy from our{" "}
              <IL href="/mounjaro-price-comparison">
                verified Mounjaro comparison
              </IL>{" "}
              — all listed providers have passed our delivery compliance checks.
            </>,
          ]}
        />
      </GuideSection>

      {/* ── Key Takeaways ── */}
      <GuideKeyTakeaways
        items={[
          "Most patients receive Mounjaro within 1–3 days of approval, with next-day delivery after dispatch.",
          "Mounjaro is a prescription-only medicine — a full clinical review is legally required before approval.",
          "Cold-chain packaging is mandatory for Mounjaro delivery; only use verified pharmacies that guarantee this.",
          "Completing your consultation accurately and ordering early in the week are the most effective ways to avoid delays.",
          "Use our Mounjaro price comparison to find providers with fast, compliant delivery included.",
        ]}
      />

      {/* ── Related Guides ── */}
      <GuideRelatedGuides guides={RELATED_GUIDES} />

      {/* ── References ── */}
      <GuideReferences items={REFERENCES} />

      {/* ── Disclaimer ── */}
      <GuideDisclaimer>
        This guide is for informational purposes only. Timelines are
        indicative and may vary by provider, demand, and location.{" "}
        <IL href="/what-is-mounjaro">Mounjaro</IL> is a prescription-only
        medicine that must be prescribed by a registered clinician following
        an appropriate clinical consultation.
      </GuideDisclaimer>

      {/* ── FAQ ── */}
      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
