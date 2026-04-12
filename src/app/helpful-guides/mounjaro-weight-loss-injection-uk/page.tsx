import type { Metadata } from "next";
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
  GuideTable,
  GuideStatCards,
  GuideProsConsBlock,
  IL,
  EL,
} from "@/components/guide/GuideLayout";

export const metadata: Metadata = {
  title:
    "Mounjaro Weight Loss Injection UK (2026): How It Works, Results, Eligibility & Cost | Health Wise",
  description:
    "Complete UK guide to Mounjaro (tirzepatide) for weight loss. Covers how the dual GLP-1/GIP mechanism works, clinical trial results, eligibility criteria, side effects, and 2026 costs.",
  openGraph: {
    title:
      "Mounjaro Weight Loss Injection UK (2026): How It Works, Results, Eligibility & Cost",
    description:
      "Complete UK guide to Mounjaro (tirzepatide) for weight loss. Covers how the dual GLP-1/GIP mechanism works, clinical trial results, eligibility criteria, side effects, and 2026 costs.",
    type: "article",
  },
  alternates: {
    canonical: "/helpful-guides/mounjaro-weight-loss-injection-uk",
  },
};

const TOC = [
  { id: "what-is", label: "What Is Mounjaro?" },
  { id: "how-works", label: "How Mounjaro Works in the Body" },
  { id: "results", label: "Clinical Results: How Much Weight Can You Lose?" },
  { id: "vs-others", label: "Mounjaro vs Other Weight Loss Injections" },
  { id: "eligibility", label: "Who Can Get Mounjaro in the UK?" },
  { id: "side-effects", label: "Side Effects of Mounjaro" },
  { id: "cost", label: "Cost of Mounjaro in the UK" },
  { id: "worth-it", label: "Is Mounjaro Worth It?" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "How quickly does Mounjaro work?",
    a: "Many users notice appetite changes within the first few weeks, but significant weight loss typically develops over several months. Clinical trials show the most rapid losses in months 1–3, with continued but slower progress through month 12.",
  },
  {
    q: "Is Mounjaro better than other injections?",
    a: "It may produce greater average weight loss due to its dual-hormone action targeting both GLP-1 and GIP receptors, but suitability depends on individual health factors. A clinician will assess whether Mounjaro, Wegovy, or Saxenda is most appropriate for you.",
  },
  {
    q: "Can I get Mounjaro without a prescription?",
    a: "No. Mounjaro is a prescription-only medication regulated in the UK by the MHRA. It must be prescribed by a registered clinician following an appropriate consultation and eligibility assessment.",
  },
  {
    q: "Does Mounjaro work differently from Wegovy?",
    a: "Yes. Wegovy (semaglutide) targets only GLP-1 receptors, while Mounjaro (tirzepatide) targets both GLP-1 and GIP receptors. This dual action is believed to contribute to Mounjaro's higher average weight loss outcomes in clinical trials.",
  },
  {
    q: "How much does Mounjaro cost in the UK?",
    a: "Private costs vary by dose level and provider. NHS access is currently limited to specialist weight management programmes. Our price comparison tool shows the latest verified prices from GPhC-registered pharmacies.",
  },
];

const REFERENCES = [
  {
    label: "Mounjaro (tirzepatide) SmPC — electronic Medicines Compendium",
    description:
      "Official UK prescribing reference for Mounjaro, including mechanism of action, clinical data, and safety information.",
    href: "https://www.medicines.org.uk/emc/product/15481",
  },
  {
    label: "SURMOUNT-1 Trial — New England Journal of Medicine",
    description:
      "Phase 3 randomised controlled trial demonstrating tirzepatide's weight loss outcomes of up to 22.5% body weight loss.",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038",
  },
  {
    label: "NHS — Tirzepatide (Mounjaro)",
    description:
      "NHS information on tirzepatide including side effects, dosing, and important patient safety advice.",
    href: "https://www.nhs.uk/medicines/tirzepatide/",
  },
  {
    label: "NICE — Obesity: identification, assessment and management (CG189)",
    description:
      "NICE clinical guideline providing the evidence base for BMI thresholds and weight management treatments in the UK.",
    href: "https://www.nice.org.uk/guidance/cg189",
  },
  {
    label: "MHRA — Tirzepatide approved for weight management in the UK",
    description:
      "MHRA approval documentation for tirzepatide (Mounjaro) as a treatment for obesity and overweight in UK adults.",
    href: "https://www.gov.uk/drug-safety-update",
  },
  {
    label: "Compare Mounjaro prices UK — Health Wise",
    description:
      "Verified price comparison for Mounjaro across GPhC-registered UK pharmacies, updated regularly.",
    href: "/mounjaro-price-comparison",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/mounjaro-weight-loss-plateau",
    category: "Medications",
    title: "Why Weight Loss Slows on Mounjaro: Plateaus & Progress",
    description:
      "Weight loss naturally becomes slower after the first few weeks. Here's why it's normal and what to do.",
  },
  {
    href: "/helpful-guides/mounjaro-prescription-timeline-uk",
    category: "Medications",
    title: "How Long Does It Take to Get Mounjaro in the UK?",
    description:
      "From consultation to delivery—what to expect at each stage of the Mounjaro prescription process.",
  },
  {
    href: "/helpful-guides/mounjaro-delivery-storage-uk",
    category: "Pharmacy Safety",
    title: "Mounjaro Delivery & Storage UK: Temperature Rules",
    description:
      "Mounjaro must be refrigerated. Learn how to check your delivery and what to do if something goes wrong.",
  },
  {
    href: "/helpful-guides/mounjaro-pregnancy-risk-fertility-contraception",
    category: "Medications",
    title: "Mounjaro and Pregnancy Risk: Fertility & Contraception",
    description:
      "Mounjaro can indirectly increase fertility. Here's what the clinical guidance says.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Mounjaro Weight Loss Injection UK (2026): How It Works, Results, Eligibility & Cost",
  description:
    "Complete UK guide to Mounjaro (tirzepatide) for weight loss. Covers how the dual GLP-1/GIP mechanism works, clinical trial results, eligibility criteria, side effects, and 2026 costs.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  about: [{ "@type": "Drug", name: "Mounjaro" }, { "@type": "Drug", name: "tirzepatide" }],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://health-wise.co.uk/helpful-guides/mounjaro-weight-loss-injection-uk",
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

export default function GuideMounjaroPillar() {
  return (
    <GuideLayout
      slug="mounjaro-weight-loss-injection-uk"
      category="Medications"
      categorySlug="medications"
      title="Mounjaro Weight Loss Injection UK (2026): How It Works, Results, Eligibility & Cost"
      description="Everything you need to know about Mounjaro (tirzepatide) in the UK—the dual-hormone mechanism, clinical weight loss data, who qualifies, side effects, and current costs."
      readTime="6 min read"
      lastUpdated="April 2026"
      toc={TOC}
      internalLinks={internalLinksFor("guideMounjaroPillar")}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      {/* ── Section 1 ── */}
      <GuideSection id="what-is" heading="What Is Mounjaro?">
        <GuideParagraph>
          <IL href="/what-is-mounjaro">Mounjaro (tirzepatide)</IL> is a
          once-weekly prescription injection used for weight management in
          adults. Originally developed to treat type 2 diabetes, it is now
          approved in the UK as a medical treatment for obesity and overweight
          conditions.
        </GuideParagraph>
        <GuideParagraph>
          It works differently from older medications by targeting two key
          appetite and metabolic hormones:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "GLP-1 (glucagon-like peptide-1)",
            "GIP (glucose-dependent insulinotropic polypeptide)",
          ]}
        />
        <GuideParagraph>
          This dual mechanism is what sets{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> apart from other weight
          loss injections such as{" "}
          <IL href="/what-is-wegovy">Wegovy (semaglutide)</IL>, which targets
          only GLP-1.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 2 ── */}
      <GuideSection id="how-works" heading="How Mounjaro Works in the Body">
        <GuideParagraph>
          <IL href="/what-is-mounjaro">Mounjaro</IL> helps regulate appetite
          and energy intake through multiple pathways:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Slows stomach emptying — you feel full for longer",
            "Reduces hunger signals in the brain",
            "Improves blood sugar control",
            "Reduces cravings, especially for high-calorie foods",
          ]}
        />
        <GuideParagraph>
          The result: most people naturally eat less without strict dieting.
          The dual GLP-1 and GIP action is believed to produce a stronger
          combined appetite-suppressing effect than a single-hormone approach,
          as evidenced by the{" "}
          <EL href="https://www.nejm.org/doi/full/10.1056/NEJMoa2206038">
            SURMOUNT-1 clinical trial
          </EL>
          .
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 3 ── */}
      <GuideSection id="results" heading="Clinical Results: How Much Weight Can You Lose?">
        <GuideParagraph>
          Clinical trials show significant weight loss outcomes when combined
          with lifestyle support. Average results from the{" "}
          <EL href="https://www.nejm.org/doi/full/10.1056/NEJMoa2206038">
            SURMOUNT-1 trial
          </EL>{" "}
          published in the New England Journal of Medicine:
        </GuideParagraph>
        <GuideStatCards
          stats={[
            { value: "~10–15%", label: "Body weight loss", sub: "Within 6 months" },
            { value: "20%+", label: "Body weight loss", sub: "After 12 months" },
            { value: "22.5%", label: "Max average loss", sub: "Highest dose group" },
            { value: "1×/week", label: "Injection frequency", sub: "Subcutaneous pen" },
          ]}
        />
        <GuideParagraph>
          These findings are supported by studies published in journals such as
          the New England Journal of Medicine. Results vary by individual,
          dosage, and lifestyle adherence. Use our{" "}
          <IL href="/tools/bmi-calculator">BMI calculator</IL> to understand
          what these percentages mean in absolute terms for your weight.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 4 ── */}
      <GuideSection id="vs-others" heading="Mounjaro vs Other Weight Loss Injections">
        <GuideParagraph>
          <IL href="/what-is-mounjaro">Mounjaro</IL> is often compared with
          other GLP-1-based treatments available in the UK. The key difference
          is Mounjaro's dual-hormone mechanism:
        </GuideParagraph>
        <GuideTable
          headers={["Treatment", "Frequency", "Average Weight Loss"]}
          rows={[
            {
              cells: ["Mounjaro (tirzepatide)", "Weekly", "15–22%"],
              highlight: true,
            },
            { cells: ["Wegovy (semaglutide)", "Weekly", "12–15%"] },
            { cells: ["Saxenda (liraglutide)", "Daily", "5–10%"] },
          ]}
        />
        <GuideParagraph>
          Key difference: Mounjaro targets two hormones instead of one, which
          may lead to stronger results for some patients. However, individual
          response varies—see our full{" "}
          <IL href="/compare/wegovy-vs-mounjaro">Wegovy vs Mounjaro comparison</IL>{" "}
          and{" "}
          <IL href="/compare/mounjaro-vs-saxenda">Mounjaro vs Saxenda comparison</IL>{" "}
          for a detailed breakdown.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 5 ── */}
      <GuideSection id="eligibility" heading="Who Can Get Mounjaro in the UK?">
        <GuideParagraph>
          Eligibility follows clinical guidelines aligned with organisations
          like the{" "}
          <EL href="https://www.nice.org.uk/guidance/cg189">
            National Institute for Health and Care Excellence (NICE)
          </EL>
          . You may qualify if:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "BMI ≥ 30",
            "BMI ≥ 27 with a related condition such as type 2 diabetes, high blood pressure, or sleep apnoea",
          ]}
        />
        <GuideParagraph>
          Not suitable for:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "History of pancreatitis",
            "Certain thyroid conditions",
            "Pregnancy or breastfeeding",
          ]}
        />
        <GuideParagraph>
          A consultation with a licensed clinician is required before any
          prescription can be issued. You can use our{" "}
          <IL href="/tools/bmi-calculator">BMI calculator</IL> to check your
          BMI before booking a consultation. See our guide on{" "}
          <IL href="/helpful-guides/mounjaro-prescription-timeline-uk">
            how long it takes to get Mounjaro
          </IL>{" "}
          for what to expect after eligibility is confirmed.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 6 ── */}
      <GuideSection id="side-effects" heading="Side Effects of Mounjaro">
        <GuideParagraph>
          Most side effects are mild and improve over time as your body adjusts
          to the medication. The{" "}
          <EL href="https://www.nhs.uk/medicines/tirzepatide/">
            NHS tirzepatide page
          </EL>{" "}
          and the{" "}
          <EL href="https://www.medicines.org.uk/emc/product/15481">
            official SmPC
          </EL>{" "}
          provide full side effect information.
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Common: nausea, digestive discomfort, fatigue",
            "Less common but serious: pancreatitis, gallbladder issues",
          ]}
        />
        <GuideParagraph>
          Always follow guidance from your clinician. If you experience severe
          or persistent abdominal pain, seek medical advice promptly.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 7 ── */}
      <GuideSection id="cost" heading="Cost of Mounjaro in the UK">
        <GuideParagraph>
          Prices vary depending on provider and dosage. Typical factors
          affecting cost:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            "Clinic or pharmacy — verified providers vary in their pricing structure.",
            <>Dose level — higher doses typically cost more per pen.</>,
            "Availability and demand — stock constraints can affect pricing.",
          ]}
        />
        <GuideParagraph>
          NHS access is limited and usually restricted to specialist weight
          management programmes. For private prescriptions, use our{" "}
          <IL href="/mounjaro-price-comparison">
            Mounjaro price comparison tool
          </IL>{" "}
          to find the lowest verified prices from{" "}
          <IL href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
            GPhC-registered pharmacies
          </IL>
          . You can also{" "}
          <IL href="/prices/cheapest-options-uk">compare cheapest GLP-1 options</IL>{" "}
          across all treatments.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 8 ── */}
      <GuideSection id="worth-it" heading="Is Mounjaro Worth It?">
        <GuideProsConsBlock
          pros={[
            "Higher average weight loss compared to other GLP-1 treatments",
            "Once-weekly injection — easier to maintain than daily medications",
            "Supports long-term appetite control beyond the initial phase",
            "Dual-hormone mechanism may be more effective for those with insulin resistance",
          ]}
          cons={[
            "Ongoing private cost — NHS access is currently restricted",
            "Requires lifestyle changes to maximise and sustain results",
            "Possible side effects, particularly gastrointestinal, especially early in treatment",
            "Requires ongoing clinical supervision and prescription renewal",
          ]}
        />
        <GuideParagraph>
          <IL href="/what-is-mounjaro">Mounjaro</IL> represents a significant
          advancement in medical weight loss treatment in the UK. Its
          dual-hormone mechanism and strong clinical outcomes make it one of
          the most effective options currently available. Whether it is right
          for you depends on your individual health profile, eligibility, and
          access to a prescribing clinician.
        </GuideParagraph>
      </GuideSection>

      {/* ── Key Takeaways ── */}
      <GuideKeyTakeaways
        items={[
          "Mounjaro (tirzepatide) is a once-weekly injection targeting both GLP-1 and GIP receptors—a dual mechanism not found in Wegovy or Saxenda.",
          "Clinical trials show average weight loss of 15–22% body weight, with some patients losing over 20% at 12 months.",
          "Eligibility requires BMI ≥ 30, or ≥ 27 with a related health condition, assessed by a licensed clinician.",
          "Most side effects are mild and temporary; serious side effects are less common but require medical attention.",
          "NHS access is limited—compare verified private pharmacy prices using Health Wise.",
        ]}
      />

      {/* ── Related Guides ── */}
      <GuideRelatedGuides guides={RELATED_GUIDES} />

      {/* ── References ── */}
      <GuideReferences items={REFERENCES} />

      {/* ── Disclaimer ── */}
      <GuideDisclaimer>
        This guide is for informational purposes only and does not replace
        professional medical advice. <IL href="/what-is-mounjaro">Mounjaro</IL>{" "}
        is a prescription-only medicine. Always consult a registered clinician
        before starting, stopping, or changing any treatment.
      </GuideDisclaimer>

      {/* ── FAQ ── */}
      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
