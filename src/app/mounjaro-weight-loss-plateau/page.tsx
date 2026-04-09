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
  GuideCallout,
  IL,
  EL,
} from "@/components/guide/GuideLayout";

export const metadata: Metadata = {
  title:
    "Why Weight Loss Slows on Mounjaro: Understanding Plateaus & Long-Term Progress | Health Wise",
  description:
    "Weight loss naturally slows after the first weeks on Mounjaro. Learn why plateaus happen, what they mean for long-term progress, and how to stay on track with tirzepatide.",
  openGraph: {
    title:
      "Why Weight Loss Slows on Mounjaro: Understanding Plateaus & Long-Term Progress",
    description:
      "Weight loss naturally slows after the first weeks on Mounjaro. Learn why plateaus happen, what they mean for long-term progress, and how to stay on track.",
    type: "article",
  },
  alternates: {
    canonical: "/mounjaro-weight-loss-plateau",
  },
};

const TOC = [
  { id: "fast-start", label: "Why Weight Loss Is Faster at the Start" },
  { id: "slows-down", label: "Why Progress Slows Over Time" },
  { id: "what-matters", label: "What Actually Matters" },
  { id: "maintain", label: "How to Maintain Progress" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "Why did my weight loss stop on Mounjaro?",
    a: "Plateaus are normal and often indicate your body is adapting. Metabolic adaptation means your body is expending fewer calories at your new lower weight. This does not mean Mounjaro has stopped working—it may mean a dosage review or lifestyle adjustment is needed.",
  },
  {
    q: "Is slow weight loss bad?",
    a: "No. Slower weight loss is more sustainable and healthier long term. Rapid early losses often include water weight, which is not the same as fat loss. Steady, slower loss after the initial phase is a positive sign of sustained progress.",
  },
  {
    q: "How long do plateaus typically last on Mounjaro?",
    a: "Plateaus can last from a few weeks to a couple of months. Adjusting calorie intake, increasing protein, or adding resistance training often helps break through a plateau. Speak to your clinician if a plateau is prolonged or concerning.",
  },
  {
    q: "Does Mounjaro stop working over time?",
    a: "No—Mounjaro's appetite-suppressing effects remain active. However, as your body adapts metabolically, the rate of weight loss naturally slows. This is expected and is not a sign of treatment failure.",
  },
];

const REFERENCES = [
  {
    label: "SURMOUNT-1 Trial — NEJM: tirzepatide weight loss over 72 weeks",
    description:
      "Phase 3 trial data showing the weight loss trajectory of tirzepatide over time, including the natural slowdown after initial rapid loss.",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038",
  },
  {
    label: "NHS — Tirzepatide (Mounjaro)",
    description:
      "NHS patient information on Mounjaro including expected treatment outcomes and what to discuss with your clinician.",
    href: "https://www.nhs.uk/medicines/tirzepatide/",
  },
  {
    label: "NICE — Managing overweight and obesity: lifestyle interventions",
    description:
      "NICE guidance on the role of diet, exercise, and behavioural support alongside medical weight management.",
    href: "https://www.nice.org.uk/guidance/cg189",
  },
  {
    label: "Weight loss tracker (My Hub) — Health Wise",
    description:
      "Track your weight loss progress over time with our free tool to visualise your journey and identify plateaus early.",
    href: "/tools/weight-loss-tracker",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/mounjaro-weight-loss-injection-uk",
    category: "Medications",
    title: "Mounjaro Weight Loss Injection UK: Full Guide",
    description:
      "How Mounjaro works, clinical results, eligibility, and costs—everything you need to know before starting treatment.",
  },
  {
    href: "/mounjaro-prescription-timeline-uk",
    category: "Medications",
    title: "How Long Does It Take to Get Mounjaro in the UK?",
    description:
      "From consultation to first delivery—the Mounjaro prescription and delivery timeline explained.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Why Weight Loss Slows on Mounjaro: Understanding Plateaus & Long-Term Progress",
  description:
    "Weight loss naturally slows after the first weeks on Mounjaro. Learn why plateaus happen, what they mean for long-term progress, and how to stay on track.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  about: [{ "@type": "Drug", name: "Mounjaro" }],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://health-wise.co.uk/mounjaro-weight-loss-plateau",
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

export default function GuideMounjaroPlateau() {
  return (
    <GuideLayout
      category="Medications"
      categorySlug="medications"
      title="Why Weight Loss Slows on Mounjaro: Understanding Plateaus & Long-Term Progress"
      description="Early results on Mounjaro can feel rapid—then progress slows. This is completely normal. Here's the science behind why it happens and what to focus on for sustained results."
      readTime="4 min read"
      lastUpdated="April 2026"
      toc={TOC}
      internalLinks={internalLinksFor("guideMounjaroPlateau")}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      {/* ── Section 1 ── */}
      <GuideSection id="fast-start" heading="Why Weight Loss Is Faster at the Start">
        <GuideParagraph>
          Early results on{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> can feel rapid. This is
          mainly due to:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Reduced appetite — leading to a sharp initial reduction in calorie intake",
            "Initial water weight loss, which occurs quickly and visibly on the scale",
            "Quick metabolic response to the drug's effects on blood sugar and insulin",
          ]}
        />
        <GuideCallout variant="warning">
          Important: early drops are not all fat loss. Water weight can account
          for a significant portion of initial losses. The scale number may not
          reflect true body composition changes at this stage.
        </GuideCallout>
      </GuideSection>

      {/* ── Section 2 ── */}
      <GuideSection id="slows-down" heading="Why Progress Slows Over Time">
        <GuideParagraph>
          Weight loss naturally becomes slower after the first few weeks. This
          is not a failure of{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL>—it is a well-understood
          physiological response. The{" "}
          <EL href="https://www.nejm.org/doi/full/10.1056/NEJMoa2206038">
            SURMOUNT-1 trial
          </EL>{" "}
          data clearly shows this pattern across all dose groups. Reasons
          include:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Metabolic adaptation — the body conserves energy more efficiently at a lower weight",
            "Fat loss is slower than water loss — actual fat tissue requires a sustained caloric deficit to reduce",
            "Natural plateaus — temporary periods where weight stabilises before resuming decline",
          ]}
        />
        <GuideCallout variant="tip">
          This is a normal and healthy process. A plateau often signals that
          your body is adjusting to a new set point — not that treatment has
          stopped working.
        </GuideCallout>
      </GuideSection>

      {/* ── Section 3 ── */}
      <GuideSection id="what-matters" heading="What Actually Matters">
        <GuideParagraph>
          Progress is not just the number on the scale. The{" "}
          <EL href="https://www.nice.org.uk/guidance/cg189">NICE guidelines</EL>{" "}
          for obesity management recognise multiple markers of meaningful
          progress. Focus on:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            "Energy levels — improved stamina and reduced fatigue are common early benefits of weight loss.",
            "Body composition — fat-to-muscle ratio matters more than total weight; use our free " +
              "weight tracker to monitor trends over time.",
            "Blood sugar control — particularly important for patients with type 2 diabetes or insulin resistance.",
            "Clothing fit — a more reliable indicator of fat loss than daily scale readings.",
          ]}
        />
        <GuideParagraph>
          Use our{" "}
          <IL href="/tools/weight-loss-tracker">weight loss tracker</IL> to
          visualise your progress over weeks and months—not just day to day.
          Trends matter far more than daily fluctuations.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 4 ── */}
      <GuideSection id="maintain" heading="How to Maintain Progress">
        <GuideParagraph>
          To move through a plateau and sustain long-term results on{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL>:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Adjust calorie intake over time — as weight falls, total daily energy needs reduce",
            "Increase protein and fibre — both support satiety and preserve muscle mass during weight loss",
            "Add strength training — resistance exercise helps maintain muscle and sustain metabolic rate",
            "Stay consistent — missing doses or reverting to old eating patterns will slow progress",
          ]}
        />
        <GuideParagraph>
          If a plateau persists for more than 4–6 weeks despite lifestyle
          adjustments, speak to your prescribing clinician. A dosage review
          may be appropriate. You can also{" "}
          <IL href="/compare/best-weight-loss-injections-uk">
            compare weight loss treatments
          </IL>{" "}
          to understand how other options compare if Mounjaro is not producing
          expected results.
        </GuideParagraph>
      </GuideSection>

      {/* ── Key Takeaways ── */}
      <GuideKeyTakeaways
        items={[
          "Early weight loss on Mounjaro is faster partly due to water weight, not just fat loss.",
          "Slowing weight loss after the initial phase is normal—metabolic adaptation is a natural physiological response.",
          "Progress should be measured beyond the scale: energy, body composition, blood sugar, and clothing fit all matter.",
          "Adjusting calorie intake, increasing protein and fibre, and adding strength training help sustain progress.",
          "A prolonged plateau should prompt a conversation with your clinician about dosage or lifestyle adjustments.",
        ]}
      />

      {/* ── Related Guides ── */}
      <GuideRelatedGuides guides={RELATED_GUIDES} />

      {/* ── References ── */}
      <GuideReferences items={REFERENCES} />

      {/* ── Disclaimer ── */}
      <GuideDisclaimer>
        This guide is for informational purposes only and does not replace
        professional medical advice. Always consult a qualified healthcare
        professional regarding your{" "}
        <IL href="/what-is-mounjaro">Mounjaro</IL> treatment and any concerns
        about progress or side effects.
      </GuideDisclaimer>

      {/* ── FAQ ── */}
      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
