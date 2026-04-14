import { helpfulGuidePath } from "@/lib/helpful-guide-slugs";
import { siteOrigin } from "@/lib/seo/site-origin";
import { buildGuideShareMetadata } from "@/lib/seo/guide-share-metadata";
import { internalLinksFor } from "@/lib/internal-linking";
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
  GuideCallout,
  IL,
  EL,
} from "@/components/guide/GuideLayout";

export const metadata = buildGuideShareMetadata({
  slug: "travel-insurance-mounjaro-users-uk",
  title: "Travel Insurance for Mounjaro Users: UK Guide (2026)",
  description: "Travelling on Mounjaro is usually straightforward. What insurers ask, why you must declare tirzepatide, what cover to look for, and a practical pre-trip checklist.",
  openGraphTitle: "Travel Insurance for Mounjaro Users: UK Guide (2026)",
  openGraphDescription: "Travelling on Mounjaro is usually straightforward. What insurers ask, why disclosure matters, and what your policy should include.",
});


const TOC = [
  { id: "overview", label: "Travelling on Mounjaro" },
  { id: "insurers-ask", label: "What Insurers Typically Ask" },
  { id: "disclosure", label: "Why Disclosure Matters" },
  { id: "how-to-apply", label: "How to Apply" },
  { id: "policy-include", label: "What Your Policy Should Include" },
  { id: "checklist", label: "Travel Checklist" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "Do I need to declare Mounjaro on travel insurance?",
    a: "Yes. Mounjaro (tirzepatide) is a prescription medicine used for weight management or diabetes. You should declare it when asked about medications or medical conditions, along with any related conditions such as type 2 diabetes or hypertension. Failure to declare can invalidate your policy if you need to claim.",
  },
  {
    q: "Will travel insurance cost more because I take Mounjaro?",
    a: "Not necessarily. Many mainstream insurers do not load premiums solely for stable weight-management medication if you have no serious complications. Premiums depend on your overall health profile, destination, trip length, and age. Specialist insurers exist if you are declined standard cover.",
  },
  {
    q: "Can I take Mounjaro on a plane?",
    a: "Yes, in general—keep pens in hand luggage with copies of your prescription and a letter from your prescriber if helpful. Insulin and similar injectables are well understood by airport security; declare liquids to security as required. Check your airline's medical device policy and your destination country's import rules for personal medication.",
  },
  {
    q: "What if my Mounjaro is lost or stolen abroad?",
    a: "Look for a policy that explicitly covers lost or stolen prescription medication, or high-value medical equipment. You may still need to obtain a local prescription or emergency supply through a clinician abroad—travel insurance medical helplines can guide you. Keep photos of your prescription label and pen boxes.",
  },
  {
    q: "Should I consult my GP before travelling on Mounjaro?",
    a: "If you have complex health needs, are changing time zones significantly, or are unsure about hydration and food while away, a brief check-in with your GP or specialist is sensible. For routine holidays with stable health, following standard travel advice may be sufficient.",
  },
];

const REFERENCES = [
  {
    label: "NHS — Travelling with medicines",
    description:
      "NHS guidance on carrying prescription medicines abroad, proof of prescription, and quantities.",
    href: "https://www.nhs.uk/common-health-questions/medicines/can-i-take-my-medicine-abroad/",
  },
  {
    label: "GOV.UK — Foreign travel advice",
    description:
      "Official UK government travel advice by country—including health and entry requirements.",
    href: "https://www.gov.uk/foreign-travel-advice",
  },
  {
    label: "Financial Conduct Authority — Travel insurance",
    description:
      "FCA information on buying travel insurance and understanding policy terms in the UK market.",
    href: "https://www.fca.org.uk/consumers/travel-insurance",
  },
  {
    label: "Mounjaro delivery & storage UK — Health Wise",
    description:
      "Cold-chain and temperature rules—relevant if you travel with refrigerated pens.",
    href: "/helpful-guides/mounjaro-delivery-storage-uk",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/mounjaro-delivery-storage-uk",
    category: "Pharmacy Safety",
    title: "Mounjaro Delivery & Storage UK: Temperature Rules & Safety Checks",
    description:
      "How to keep pens within 2°C–8°C before use—especially relevant for summer travel or long journeys.",
  },
  {
    href: "/helpful-guides/mounjaro-hot-weather-safety-uk",
    category: "Safety Checks",
    title: "Mounjaro and Hot Weather: Staying Safe in the Heat",
    description:
      "Hydration and heat illness prevention when travelling to warm destinations on GLP-1 treatment.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Travel Insurance for Mounjaro Users: UK Guide",
  description:
    "Travelling on Mounjaro is usually straightforward. What insurers ask, why disclosure matters, and what your policy should include.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteOrigin()}${helpfulGuidePath("travel-insurance-mounjaro-users-uk")}`,
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function GuideTravelInsuranceMounjaro() {
  return (
    <GuideLayout
      slug="travel-insurance-mounjaro-users-uk"
      category="Safety Checks"
      categorySlug="safety-checks"
      title="Travel Insurance for Mounjaro Users: UK Guide"
      description="Most travel insurers do not automatically refuse cover because you use Mounjaro—but you must answer questions honestly and declare your medication and related conditions. Here's how to prepare and what your policy should cover."
      readTime="4 min read"
      lastUpdated="April 2026"
      toc={TOC}
      internalLinks={internalLinksFor("guideTravelInsuranceMounjaro")}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      <GuideSection id="overview" heading="Travelling on Mounjaro">
        <GuideParagraph>
          Travelling while using{" "}
          <IL href="/what-is-mounjaro">Mounjaro (tirzepatide)</IL> is
          usually straightforward for people whose health is stable. The key
          to insurance is transparency: declare your prescription and any
          conditions the insurer asks about, so your cover matches your actual
          risk profile.
        </GuideParagraph>
        <GuideParagraph>
          This guide is not a substitute for reading your policy wording or
          speaking to an insurer—it explains what to expect and how to prepare.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="insurers-ask" heading="What Insurers Typically Ask">
        <GuideParagraph>
          Medical screening questions vary by insurer and product, but you may
          be asked about:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Height, weight, and BMI",
            "How long you have used Mounjaro and your current dose",
            "Your prescribing clinician (GP or specialist) and whether you have regular reviews",
            "Other conditions—e.g. type 2 diabetes, hypertension, heart disease, mental health conditions",
            "Recent hospital admissions or changes in medication",
          ]}
        />
        <GuideCallout variant="info">
          Insurers use this information for risk assessment—not to refuse you
          arbitrarily, but to price cover fairly and ensure the policy can pay
          valid claims if you need emergency treatment abroad.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="disclosure" heading="Why Disclosure Matters">
        <GuideBulletListRich
          items={[
            <>
              <strong>Risk assessment</strong> — insurers need an accurate
              picture of your health to offer appropriate emergency medical
              cover.
            </>,
            <>
              <strong>Fair pricing</strong> — premiums reflect overall risk,
              not the mere fact of taking a GLP-1 alone.
            </>,
            <>
              <strong>Claims protection</strong> — non-disclosure of material
              facts is one of the most common reasons claims are declined. If in
              doubt, declare it and keep a record of what you disclosed.
            </>,
          ]}
        />
      </GuideSection>

      <GuideSection id="how-to-apply" heading="How to Apply">
        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          Step 1: Prepare information
        </h3>
        <GuideBulletList
          items={[
            "Current BMI or weight, and any recent changes",
            "Medication list including Mounjaro dose and frequency",
            "GP or specialist contact details",
            "Letters or summaries if you have complex medical history",
          ]}
        />

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          Step 2: Compare policies
        </h3>
        <GuideParagraph>
          Use FCA-regulated comparison services and read policy summaries for
          medical limits, exclusions, and excess. The{" "}
          <EL href="https://www.fca.org.uk/consumers/travel-insurance">
            FCA consumer pages on travel insurance
          </EL>{" "}
          explain what to look for when buying cover in the UK.
        </GuideParagraph>

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          Step 3: Consider specialist insurers if needed
        </h3>
        <GuideParagraph>
          If mainstream screening declines cover or applies high loadings,
          specialist providers that focus on pre-existing conditions may offer
          alternatives. Always confirm that emergency medical limits meet your
          destination's typical treatment costs.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="policy-include" heading="What Your Policy Should Include">
        <GuideBulletList
          items={[
            "Emergency medical expenses — many advisers suggest at least £2 million for the USA and other high-cost destinations; confirm wording covers prescription-related complications if relevant",
            "Cover for lost or stolen medication where available—or sufficient baggage cover with medical endorsement",
            "Trip cancellation and curtailment if illness before or during travel prevents you from going",
            "Repatriation to the UK if medically necessary",
            "Access to a 24-hour medical assistance helpline",
          ]}
        />
      </GuideSection>

      <GuideSection id="checklist" heading="Travel Checklist">
        <GuideBulletListRich
          items={[
            <>
              Keep{" "}
              <IL href="/what-is-mounjaro">Mounjaro</IL> in original packaging
              with the pharmacy label and a copy of your prescription. See{" "}
              <EL href="https://www.nhs.uk/common-health-questions/medicines/can-i-take-my-medicine-abroad/">
                NHS guidance on travelling with medicines
              </EL>
              .
            </>,
            <>
              Research how to access urgent care at your destination and save
              your insurer's emergency number. Check{" "}
              <EL href="https://www.gov.uk/foreign-travel-advice">
                GOV.UK foreign travel advice
              </EL>{" "}
              for your country.
            </>,
            <>
              Plan cold storage if needed for unused pens—see{" "}
              <IL href="/helpful-guides/mounjaro-delivery-storage-uk">
                Mounjaro delivery & storage
              </IL>
              .
            </>,
            <>
              Register with the Foreign, Commonwealth & Development Office
              (FCDO) travel updates where appropriate for your destination.
            </>,
          ]}
        />
        <GuideCallout variant="tip">
          Being open about{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> and related health
          details helps ensure valid cover, smoother claims, and fewer surprises
          if you need treatment abroad.
        </GuideCallout>
      </GuideSection>

      <GuideKeyTakeaways
        items={[
          "Declare Mounjaro and related conditions honestly—non-disclosure can void claims.",
          "Prepare BMI, dose, prescriber details, and your full medication list before screening.",
          "Compare policies for emergency medical limits, lost medication cover, cancellation, and repatriation.",
          "Carry pens in hand luggage with prescription proof; follow NHS advice on travelling with medicines.",
          "For hot destinations, pair this guide with our heat and hydration advice for GLP-1 users.",
        ]}
      />

      <GuideRelatedGuides guides={RELATED_GUIDES} />
      <GuideReferences items={REFERENCES} />

      <GuideDisclaimer>
        Health Wise does not sell insurance or provide financial advice. Always
        read your policy documents and confirm cover with your insurer or a
        regulated broker. Insurance terms change—verify details at purchase.
      </GuideDisclaimer>

      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
