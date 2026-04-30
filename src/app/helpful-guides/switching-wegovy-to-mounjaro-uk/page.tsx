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
  GuideStatCards,
  GuideCallout,
  IL,
  EL,
} from "@/components/guide/GuideLayout";

export const metadata = buildGuideShareMetadata({
  slug: "switching-wegovy-to-mounjaro-uk",
  title: "Switching from Wegovy to Mounjaro in the UK: Safe Transition Guide",
  description: "Thinking of switching from Wegovy to Mounjaro? This guide covers why patients switch, the clinical differences, how to transition safely, and what to expect during the changeover.",
  openGraphTitle: "Switching from Wegovy to Mounjaro in the UK: Safe Transition Guide",
});


const TOC = [
  { id: "why-switch", label: "Why People Switch Treatments" },
  { id: "how-they-differ", label: "How Wegovy and Mounjaro Differ" },
  { id: "expected-results", label: "Expected Results Comparison" },
  { id: "how-to-switch", label: "How to Switch Safely" },
  { id: "what-to-expect", label: "What to Expect During Transition" },
  { id: "safety", label: "Key Safety Considerations" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "Can I switch from Wegovy to Mounjaro?",
    a: "Yes—switching from Wegovy to Mounjaro is possible and is done by patients across the UK, typically under the guidance of a clinician. Mounjaro's dual GLP-1/GIP mechanism may produce stronger results for some patients.",
  },
  {
    q: "How long should I wait between stopping Wegovy and starting Mounjaro?",
    a: "Most clinical guidance recommends waiting 4–5 weeks after stopping Wegovy before starting Mounjaro. This washout period allows semaglutide to clear your system and helps minimise the risk of overlapping side effects.",
  },
  {
    q: "What dose of Mounjaro should I start on after stopping Wegovy?",
    a: "Regardless of the dose of Wegovy you were taking, it is generally recommended to start Mounjaro at the lowest dose (2.5mg) and titrate gradually. This allows your body to adapt and reduces the risk of gastrointestinal side effects.",
  },
  {
    q: "Will I regain weight during the transition period?",
    a: "Some patients experience increased appetite and minor weight regain during the washout period between stopping Wegovy and starting Mounjaro. This is normal and temporary. Focusing on consistent nutrition and physical activity during this time can help.",
  },
  {
    q: "Is it safe to take Wegovy and Mounjaro at the same time?",
    a: "No. You should never overlap Wegovy and Mounjaro. Both medications target the GLP-1 receptor, and combining them significantly increases the risk of severe side effects including nausea, vomiting, and dangerous blood sugar changes.",
  },
  {
    q: "Will my results on Mounjaro be better than on Wegovy?",
    a: "Clinical trials suggest Mounjaro produces higher average weight loss than Wegovy—up to ~22% vs ~15% of body weight. However, individual results vary. Some patients respond better to semaglutide (Wegovy). The best treatment is determined by your clinician based on your health profile.",
  },
];

const REFERENCES = [
  {
    label: "SURMOUNT-1 trial — Tirzepatide (Mounjaro) weight loss results",
    description:
      "Phase 3 clinical trial published in NEJM showing up to 22.5% body weight reduction with Mounjaro (tirzepatide) in adults with obesity.",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038",
  },
  {
    label: "STEP-1 trial — Semaglutide (Wegovy) weight loss results",
    description:
      "Phase 3 clinical trial published in NEJM showing up to 14.9% body weight reduction with semaglutide 2.4mg.",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2032183",
  },
  {
    label: "Mounjaro (tirzepatide) SmPC",
    description:
      "Official UK prescribing information for Mounjaro, including dosing schedule, contraindications, and drug interactions.",
    href: "https://www.medicines.org.uk/emc/product/15481",
  },
  {
    label: "Wegovy (semaglutide) SmPC",
    description:
      "Official UK prescribing information for Wegovy, including dosing, washout guidance, and contraindications.",
    href: "https://www.medicines.org.uk/emc/product/13799",
  },
  {
    label: "Wegovy vs Mounjaro comparison — Health Wise",
    description:
      "Our independent side-by-side comparison of Wegovy and Mounjaro on mechanism, results, cost, and availability.",
    href: "/compare/wegovy-vs-mounjaro",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/mounjaro-weight-loss-injection-uk",
    category: "Medications",
    title: "Mounjaro Weight Loss Treatment UK: Full Guide (2026)",
    description:
      "Everything you need to know about Mounjaro—mechanism, clinical results, eligibility, and UK pricing.",
  },
  {
    href: "/helpful-guides/mounjaro-weight-loss-plateau",
    category: "Medications",
    title: "Why Weight Loss Slows on Mounjaro: Plateaus & Long-Term Progress",
    description:
      "What happens when progress stalls and how to interpret long-term results on tirzepatide.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Switching from Wegovy to Mounjaro in the UK: Safe Transition Guide",
  description:
    "Thinking of switching from Wegovy to Mounjaro? This guide covers why patients switch, the clinical differences, how to transition safely, and what to expect.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteOrigin()}${helpfulGuidePath("switching-wegovy-to-mounjaro-uk")}`,
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

export default function GuideSwitchingWegovy() {
  return (
    <GuideLayout
      slug="switching-wegovy-to-mounjaro-uk"
      category="Medications"
      categorySlug="medications"
      title="Switching from Wegovy to Mounjaro in the UK: Safe Transition Guide"
      description="Switching from Wegovy to Mounjaro is becoming more common in the UK as evidence for tirzepatide's dual mechanism grows. Here's what the clinical data shows and how to make the transition safely."
      readTime="4 min read"
      lastUpdated="April 2026"
      toc={TOC}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      <GuideSection id="why-switch" heading="Why People Switch Treatments">
        <GuideParagraph>
          Both{" "}
          <IL href="/what-is-wegovy">Wegovy (semaglutide)</IL> and{" "}
          <IL href="/what-is-mounjaro">Mounjaro (tirzepatide)</IL> are
          effective GLP 1 receptor agonists used for weight management. But
          they work differently and for some patients, that difference matters.
         For more context, explore our resources on <IL href="/blog/best-weight-loss-treatment-in-london" className="font-medium text-emerald-600 hover:underline">treatment in London</IL>.</GuideParagraph>
        <GuideParagraph>
          Common reasons patients switch from Wegovy to Mounjaro include:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Weight loss plateau on Wegovy—progress has stalled at a lower-than-expected level",
            "Clinical evidence suggesting tirzepatide produces greater average weight loss",
            "Persistent side effects on Wegovy that may differ with a different mechanism",
            "Change in clinical guidance or availability from their provider",
          ]}
        />
      </GuideSection>

      <GuideSection id="how-they-differ" heading="How Wegovy and Mounjaro Differ">
        <GuideParagraph>
          The key clinical distinction lies in receptor targets:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>Wegovy</strong> targets the GLP-1 (glucagon-like
              peptide-1) receptor only, reducing appetite and slowing gastric
              emptying.
            </>,
            <>
              <strong>Mounjaro</strong> targets both GLP-1 and GIP
              (glucose-dependent insulinotropic polypeptide) receptors. This
              dual mechanism may enhance the metabolic effect compared to
              single-receptor agonism.
            </>,
          ]}
        />
        <GuideTable
          headers={["Feature", "Wegovy", "Mounjaro"]}
          rows={[
            { cells: ["Active ingredient", "Semaglutide", "Tirzepatide"] },
            { cells: ["Receptor targets", "GLP-1", "GLP-1 + GIP"] },
            { cells: ["Treatment frequency", "Once weekly", "Once weekly"] },
            { cells: ["Starting dose", "0.25mg", "2.5mg"] },
            { cells: ["Maximum dose", "2.4mg", "15mg"] },
            { cells: ["Approved for weight", "Yes", "Yes"] },
            { cells: ["Approved for T2D", "Yes (Ozempic)", "Yes"] },
          ]}
        />
        <GuideParagraph>
          See our detailed{" "}
          <IL href="/compare/wegovy-vs-mounjaro">Wegovy vs Mounjaro comparison</IL>{" "}
          for a full side by side breakdown.
         For more context, explore our resources on <IL href="/wegovy-price-comparison" className="font-medium text-emerald-600 hover:underline">Wegovy price comparison</IL>.</GuideParagraph>
      </GuideSection>

      <GuideSection id="expected-results" heading="Expected Results Comparison">
        <GuideParagraph>
          Head to head clinical trial data and published research consistently
          shows greater average weight loss with Mounjaro:
        </GuideParagraph>
        <GuideStatCards
          stats={[
            {
              value: "~15%",
              label: "Average weight loss with Wegovy",
              sub: "STEP-1 trial (semaglutide 2.4mg)",
            },
            {
              value: "~22%",
              label: "Average weight loss with Mounjaro",
              sub: "SURMOUNT-1 trial (tirzepatide 15mg)",
            },
          ]}
        />
        <GuideCallout variant="info">
          These figures represent average outcomes from clinical trials. Individual
          results vary significantly based on starting weight, diet, physical
          activity, and other health factors. Some patients achieve better
          outcomes on Wegovy than the average Mounjaro result. Your clinician
          can help you understand what is realistic for your situation.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="how-to-switch" heading="How to Switch Safely">
        <GuideParagraph>
          Switching from Wegovy to{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> requires a structured
          approach. Never overlap both medications they both act on the GLP 1
          receptor and combining them significantly increases side effect risk.
        </GuideParagraph>
        <GuideParagraph>
          The standard transition protocol is:
         For more context, explore our resources on <IL href="/blog/side-effects-of-wegovy-and-how-to-manage-them" className="font-medium text-emerald-600 hover:underline">managing Wegovy side effects</IL>.</GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>Step 1 — Stop Wegovy</strong>: Take your final Wegovy
              dose and do not administer another.
            </>,
            <>
              <strong>Step 2 — Wait 4–5 weeks</strong>: Allow sufficient time
              for semaglutide to clear your system. This washout period is
              important for safety.
            </>,
            <>
              <strong>Step 3 — Start Mounjaro at 2.5mg</strong>: Regardless of
              your previous Wegovy dose, always begin at the lowest tirzepatide
              dose. This gives your body time to adapt.
            </>,
            <>
              <strong>Step 4 — Titrate gradually</strong>: Increase the dose
              every 4 weeks as directed by your prescribing clinician, following
              the{" "}
              <EL href="https://www.medicines.org.uk/emc/product/15481">
                Mounjaro SmPC titration schedule
              </EL>
              .
            </>,
          ]}
        />
        <GuideCallout variant="warning">
          Never take Wegovy and Mounjaro simultaneously. Overlapping two GLP-1
          receptor agonists is not clinically appropriate and significantly
          increases the risk of serious adverse effects.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="what-to-expect" heading="What to Expect During Transition">
        <GuideParagraph>
          The washout period between Wegovy and Mounjaro can feel challenging.
          As semaglutide clears your system, you may temporarily experience:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Increased hunger — appetite suppression reduces as Wegovy clears",
            "Mild digestive changes — your gastrointestinal system adjusts",
            "Lower energy — a temporary effect as your body adapts",
            "Minor weight regain — some patients regain a small amount during the gap period",
          ]}
        />
        <GuideParagraph>
          These effects typically stabilise once{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> treatment begins. During
          the transition, focus on maintaining consistent nutrition and regular
          physical activity to minimise any temporary setbacks. See our guide
          on{" "}
          <IL href="/helpful-guides/mounjaro-weight-loss-plateau">
            understanding Mounjaro plateaus
          </IL>{" "}
          for context on what to expect long term.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="safety" heading="Key Safety Considerations">
        <GuideParagraph>
          Always consult a healthcare provider before switching medications.
          This is especially important when transitioning between two
          prescription only treatments that act on overlapping pathways.
         For more context, explore our resources on <IL href="/blog/best-weight-loss-treatment-in-manchester" className="font-medium text-emerald-600 hover:underline">treatment in Manchester</IL>.</GuideParagraph>
        <GuideBulletList
          items={[
            "Your prescribing clinician can confirm the right washout period for your specific dose of Wegovy",
            "Inform your GP and pharmacist about the switch so your medical records are updated",
            "If you experience severe nausea, vomiting, or blood sugar changes during the transition, contact your clinician promptly",
            "Do not attempt to self-prescribe or source Mounjaro without a valid prescription from a registered UK prescriber",
          ]}
        />
      </GuideSection>

      <GuideKeyTakeaways
        items={[
          "Mounjaro targets both GLP-1 and GIP receptors; Wegovy targets GLP-1 only—this dual mechanism may produce stronger results.",
          "Clinical trials show ~22% average weight loss with Mounjaro vs ~15% with Wegovy, though individual results vary.",
          "The standard transition is: stop Wegovy → wait 4–5 weeks → start Mounjaro at 2.5mg → titrate gradually.",
          "Never take Wegovy and Mounjaro at the same time—overlapping GLP-1 agonists is not clinically appropriate.",
          "Increased hunger and minor weight regain during the washout period are normal and temporary.",
        ]}
      />

      <GuideRelatedGuides guides={RELATED_GUIDES} />
      <GuideReferences items={REFERENCES} />

      <GuideDisclaimer>
        This guide is for informational purposes only and does not replace
        professional medical advice. Switching between prescription medications
        should only be done under the supervision of a qualified clinician. Do
        not stop or start any medication without consulting your prescriber.
      </GuideDisclaimer>

      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
