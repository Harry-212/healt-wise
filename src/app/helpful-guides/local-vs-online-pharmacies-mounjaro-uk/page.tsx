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
  GuideTable,
  GuideCallout,
  IL,
  EL,
} from "@/components/guide/GuideLayout";

export const metadata = buildGuideShareMetadata({
  slug: "local-vs-online-pharmacies-mounjaro-uk",
  title: "Local vs Online Pharmacies for Mounjaro in the UK: What's the Better Choice?",
  description: "Online pharmacies are cheaper, but local pharmacies offer face-to-face clinical support. Here's an honest breakdown of both options for Mounjaro patients in the UK.",
  openGraphTitle: "Local vs Online Pharmacies for Mounjaro in the UK: What's the Better Choice?",
});


const TOC = [
  { id: "local-matters", label: "Why Local Pharmacies Still Matter" },
  { id: "what-is-mounjaro", label: "What You Need to Know About Mounjaro" },
  { id: "pricing", label: "Local vs Online Pricing" },
  { id: "benefits-local", label: "Benefits of Local Pharmacies" },
  { id: "benefits-online", label: "Benefits of Online Pharmacies" },
  { id: "how-to-choose", label: "How to Choose the Right Option for You" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "Is Mounjaro available at local pharmacies in the UK?",
    a: "Yes—Mounjaro is available at many registered local pharmacies across the UK. Availability may vary by area and current stock levels. Your GP or prescribing clinician can direct you to a suitable provider.",
  },
  {
    q: "Is it safe to order Mounjaro from an online pharmacy?",
    a: "Yes, provided the pharmacy is registered with the General Pharmaceutical Council (GPhC). You can verify any UK pharmacy using the GPhC's online register. Be cautious of unregistered sites or prices that seem unusually low.",
  },
  {
    q: "Why is Mounjaro cheaper online?",
    a: "Online pharmacies have lower operational overheads—no physical premises, fewer staff, and streamlined dispensing processes. These savings are often passed on to patients. However, the lower price does not include face-to-face consultations or same-day access.",
  },
  {
    q: "Can I get a Mounjaro prescription online?",
    a: "Yes. Many regulated online pharmacies and telehealth providers offer video or questionnaire-based consultations that result in a valid Mounjaro prescription. These services are legal and regulated, but must involve a qualified prescriber.",
  },
  {
    q: "Does it matter which pharmacy I use for ongoing Mounjaro treatment?",
    a: "For many patients, the choice comes down to convenience and budget. However, if you have complex medical needs, are on multiple medications, or are managing side effects, a local pharmacy with an established relationship with your GP may offer better long-term support.",
  },
];

const REFERENCES = [
  {
    label: "GPhC — Find a pharmacy",
    description:
      "The official General Pharmaceutical Council register allows you to verify whether a pharmacy is legally registered in the UK.",
    href: "https://www.pharmacyregulation.org/registers/pharmacy",
  },
  {
    label: "NHS pharmacy finder",
    description:
      "The NHS service for finding regulated local pharmacies in England by location.",
    href: "https://www.nhs.uk/service-search/pharmacy/find-a-pharmacy",
  },
  {
    label: "MHRA — Buying medicines online safely",
    description:
      "MHRA guidance on how to identify legitimate online pharmacies and avoid counterfeit or unlicensed medicines.",
    href: "https://fakemeds.campaign.gov.uk/",
  },
  {
    label: "How we verify UK pharmacies — Health Wise",
    description:
      "Our pharmacy verification process, including GPhC checks and the safety standards every listed provider must meet.",
    href: "/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards",
    external: false,
  },
  {
    label: "Mounjaro price comparison UK — Health Wise",
    description:
      "Up-to-date price comparison for Mounjaro across verified UK providers.",
    href: "/mounjaro-price-comparison",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards",
    category: "Pharmacy Safety",
    title: "How We Verify UK Pharmacies: GPhC Checks & Safety Standards",
    description:
      "Every pharmacy listed on Health Wise is checked against the GPhC register. Here's how our verification process works.",
  },
  {
    href: "/helpful-guides/mounjaro-delivery-storage-uk",
    category: "Pharmacy Safety",
    title: "Mounjaro Delivery & Storage UK: Temperature Rules & Safety Checks",
    description:
      "What to check when your Mounjaro arrives—temperature rules, packaging, and what to do if something looks wrong.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Local vs Online Pharmacies for Mounjaro in the UK: What's the Better Choice?",
  description:
    "Online pharmacies are cheaper, but local pharmacies offer face-to-face clinical support. Here's an honest breakdown of both options for Mounjaro patients in the UK.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteOrigin()}${helpfulGuidePath("local-vs-online-pharmacies-mounjaro-uk")}`,
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

export default function GuideLocalVsOnline() {
  return (
    <GuideLayout
      slug="local-vs-online-pharmacies-mounjaro-uk"
      category="Pharmacy Safety"
      categorySlug="pharmacy-safety"
      title="Local vs Online Pharmacies for Mounjaro in the UK: What's the Better Choice?"
      description="Online pharmacies often advertise lower prices for Mounjaro, while local pharmacies offer face-to-face clinical support. Here's an honest, evidence-based breakdown of both options."
      readTime="4 min read"
      lastUpdated="April 2026"
      toc={TOC}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      <GuideSection id="local-matters" heading="Why Local Pharmacies Still Matter">
        <GuideParagraph>
          Online pharmacies frequently advertise lower prices for{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL>. But local, community
          pharmacies offer something that online services cannot always
          replicate: direct, face-to-face clinical support.
        </GuideParagraph>
        <GuideParagraph>
          You can use the{" "}
          <EL href="https://www.nhs.uk/service-search/pharmacy/find-a-pharmacy">
            NHS pharmacy finder
          </EL>{" "}
          to locate regulated providers near you. Every UK pharmacy—whether
          local or online—must be registered with the{" "}
          <EL href="https://www.pharmacyregulation.org/registers/pharmacy">
            General Pharmaceutical Council (GPhC)
          </EL>
          . You can verify any provider on the GPhC register before using their
          services.
        </GuideParagraph>
        <GuideCallout variant="info">
          Health Wise checks every pharmacy we list against the GPhC register.
          See{" "}
          <IL href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
            how our pharmacy verification process works
          </IL>
          .
        </GuideCallout>
      </GuideSection>

      <GuideSection id="what-is-mounjaro" heading="What You Need to Know About Mounjaro">
        <GuideParagraph>
          <IL href="/what-is-mounjaro">Mounjaro (tirzepatide)</IL> is a
          prescription-only medication used for:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Weight management in adults with obesity or overweight with at least one weight-related health condition",
            "Type 2 diabetes management",
          ]}
        />
        <GuideParagraph>
          It works by activating two receptors—GLP-1 and GIP—to regulate
          appetite, insulin response, and blood sugar levels. Because it is a
          prescription-only medicine (POM), it must be prescribed by a
          qualified clinician regardless of whether you obtain it from a local
          or online pharmacy.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="pricing" heading="Local vs Online Pricing">
        <GuideParagraph>
          Local pharmacies may appear more expensive at first glance—but the
          price often includes services that online providers charge separately
          for, or do not offer at all. When comparing costs, consider what is
          included:
        </GuideParagraph>
        <GuideTable
          headers={["Factor", "Local Pharmacy", "Online Pharmacy"]}
          rows={[
            { cells: ["Price", "Higher list price", "Generally lower"] },
            { cells: ["Consultation", "In person, included", "Video / questionnaire"] },
            { cells: ["Access speed", "Same day", "1–3 day delivery"] },
            { cells: ["Clinical support", "Ongoing, face-to-face", "Email / chat / phone"] },
            { cells: ["Storage assurance", "In-store refrigeration", "Cold-chain delivery"] },
            { cells: ["GPhC regulated", "Yes", "Yes (if legitimate)"] },
          ]}
        />
        <GuideParagraph>
          For a current price comparison across verified UK providers, see our{" "}
          <IL href="/mounjaro-price-comparison">Mounjaro price comparison</IL>.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="benefits-local" heading="Benefits of Local Pharmacies">
        <GuideParagraph>
          Local pharmacies provide a level of personalised clinical support that
          is difficult to replicate online:
        </GuideParagraph>

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          1. Personalised Advice
        </h3>
        <GuideBulletList
          items={[
            "Face-to-face medication guidance from a qualified pharmacist",
            "Direct support for managing side effects",
            "Dosage questions answered in real time",
          ]}
        />

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          2. Same-Day Access
        </h3>
        <GuideBulletList
          items={[
            "No delivery delays—collect your prescription the same day it is issued",
            "Useful if you are starting treatment urgently or missed a dose",
          ]}
        />

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          3. Ongoing Monitoring
        </h3>
        <GuideBulletList
          items={[
            "Regular check-ins with a consistent pharmacist who knows your history",
            "Lifestyle and dietary guidance alongside clinical support",
            "Easier coordination with your GP",
          ]}
        />

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          4. Guaranteed Authentic Medication
        </h3>
        <GuideParagraph>
          All UK pharmacies registered with the{" "}
          <EL href="https://www.pharmacyregulation.org/registers/pharmacy">
            GPhC
          </EL>{" "}
          are required to source medicines from licensed suppliers. This
          significantly reduces the risk of counterfeit or substandard products.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="benefits-online" heading="Benefits of Online Pharmacies">
        <GuideParagraph>
          Regulated online pharmacies have become an important part of the UK
          healthcare ecosystem—particularly for repeat prescriptions and
          treatments like{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL>.
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>Lower prices</strong> — reduced overheads allow online
              providers to pass savings on. See our{" "}
              <IL href="/mounjaro-price-comparison">
                Mounjaro price comparison
              </IL>{" "}
              for current UK pricing.
            </>,
            <>
              <strong>Convenience</strong> — consultations, prescriptions, and
              delivery handled entirely online, often within 24–48 hours.
            </>,
            <>
              <strong>Discreet service</strong> — useful for patients who prefer
              privacy around their treatment.
            </>,
            <>
              <strong>Wider access</strong> — particularly valuable in rural
              areas where local pharmacies may not stock{" "}
              <IL href="/what-is-mounjaro">Mounjaro</IL>.
            </>,
          ]}
        />
        <GuideCallout variant="warning">
          Always verify an online pharmacy is GPhC-registered before ordering.
          The{" "}
          <EL href="https://fakemeds.campaign.gov.uk/">
            MHRA provides guidance
          </EL>{" "}
          on how to identify legitimate online providers and avoid counterfeit
          medicines.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="how-to-choose" heading="How to Choose the Right Option for You">
        <GuideParagraph>
          The right choice depends on your individual circumstances:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>Choose a local pharmacy</strong> if you are new to
              Mounjaro, managing complex health conditions, or prefer ongoing
              face-to-face support.
            </>,
            <>
              <strong>Choose a regulated online pharmacy</strong> if you are on
              a stable, established dose, are comfortable with remote
              consultations, and want to reduce costs.
            </>,
            <>
              In either case, verify the provider is{" "}
              <EL href="https://www.pharmacyregulation.org/registers/pharmacy">
                GPhC-registered
              </EL>{" "}
              and that your prescription is issued by a qualified clinician.
            </>,
          ]}
        />
      </GuideSection>

      <GuideKeyTakeaways
        items={[
          "Local pharmacies may cost more, but offer face-to-face clinical support, same-day access, and ongoing monitoring.",
          "Online pharmacies are often cheaper and more convenient, particularly for patients on stable doses.",
          "Both types must be GPhC-registered—always verify before ordering.",
          "The MHRA provides guidance on identifying legitimate online pharmacies and avoiding counterfeit products.",
          "The best choice depends on your clinical needs, location, and budget—not price alone.",
        ]}
      />

      <GuideRelatedGuides guides={RELATED_GUIDES} />
      <GuideReferences items={REFERENCES} />

      <GuideDisclaimer>
        This guide is for informational purposes only. It does not constitute
        medical advice or a recommendation of any specific pharmacy. Always
        verify that a pharmacy is GPhC-registered and that any prescription is
        issued by a qualified clinician before purchasing medication.
      </GuideDisclaimer>

      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
