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
  GuideTable,
  IL,
  EL,
} from "@/components/guide/GuideLayout";

export const metadata: Metadata = {
  title:
    "Mounjaro Calorie Cycling: A Smarter Approach to Sustainable Weight Loss | Health Wise",
  description:
    "Calorie cycling is a flexible nutrition strategy that can complement Mounjaro's appetite regulation—helping to prevent plateaus and improve long-term adherence to treatment.",
  openGraph: {
    title: "Mounjaro Calorie Cycling: A Smarter Approach to Sustainable Weight Loss",
    description:
      "Calorie cycling is a flexible nutrition strategy that can complement Mounjaro's appetite regulation—helping to prevent plateaus and improve long-term adherence.",
    type: "article",
  },
  alternates: { canonical: "/helpful-guides/mounjaro-calorie-cycling-weight-loss" },
};

const TOC = [
  { id: "what-is", label: "What Is Calorie Cycling?" },
  { id: "how-it-works", label: "How It Works with Mounjaro" },
  { id: "benefits", label: "Benefits of Calorie Cycling" },
  { id: "weekly-framework", label: "Example Weekly Framework" },
  { id: "important-considerations", label: "Important Considerations" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "What is calorie cycling?",
    a: "Calorie cycling (also called calorie shifting) is a nutrition strategy where you vary your daily calorie intake throughout the week—eating more on active days and less on rest days—rather than maintaining a constant deficit. It is not a crash diet; it is a flexible framework designed to support long-term adherence.",
  },
  {
    q: "Is calorie cycling safe while taking Mounjaro?",
    a: "For most people, yes—but always consult your prescribing clinician or a registered dietitian before making significant changes to your diet while on Mounjaro. Mounjaro already affects appetite and blood sugar regulation, so any nutrition strategy should be implemented gradually and monitored carefully.",
  },
  {
    q: "Will calorie cycling break a Mounjaro plateau?",
    a: "Calorie cycling may help if a plateau is caused by metabolic adaptation to a fixed calorie intake. By varying intake, you may prevent your metabolism from fully adjusting to a single calorie level. However, plateaus can have multiple causes—speak to your clinician if progress has stalled for more than 4–6 weeks.",
  },
  {
    q: "How many calories should I eat on high vs low days?",
    a: "This depends on your Total Daily Energy Expenditure (TDEE), which varies by weight, height, age, and activity level. A registered dietitian or clinician can calculate appropriate targets. As a general guide, high days may be at or slightly below maintenance, while low days are in a moderate deficit. Avoid extreme restriction on either day.",
  },
  {
    q: "What should I focus on eating during calorie cycling with Mounjaro?",
    a: "Prioritise protein (to preserve muscle mass and support satiety), complex carbohydrates (for sustained energy on training days), and healthy fats. Avoid ultra-processed foods on both high and low days—food quality matters as much as quantity. See our Mounjaro nutrition guide for detailed advice.",
  },
];

const REFERENCES = [
  {
    label: "NHS — Calorie checker and weight management guidance",
    description:
      "NHS tools and guidance on healthy calorie intake and sustainable weight management approaches.",
    href: "https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/",
  },
  {
    label: "British Dietetic Association — Weight management",
    description:
      "Evidence-based guidance from the BDA on sustainable dietary approaches for weight management.",
    href: "https://www.bda.uk.com/resource/weight-loss.html",
  },
  {
    label: "SURMOUNT-1 trial — Mounjaro (tirzepatide) weight loss results",
    description:
      "Phase 3 clinical trial (NEJM) showing the long-term weight loss outcomes of tirzepatide alongside lifestyle intervention.",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038",
  },
  {
    label: "Why weight loss slows on Mounjaro — Health Wise",
    description:
      "Our guide explaining Mounjaro plateaus, metabolic adaptation, and how to maintain long-term progress.",
    href: "/helpful-guides/mounjaro-weight-loss-plateau",
    external: false,
  },
  {
    label: "Mounjaro nutrition guide UK — Health Wise",
    description:
      "A practical, evidence-based guide to what to eat while using Mounjaro for the best weight loss outcomes.",
    href: "/helpful-guides/mounjaro-nutrition-guide-uk",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/mounjaro-weight-loss-plateau",
    category: "Medications",
    title: "Why Weight Loss Slows on Mounjaro: Plateaus & Long-Term Progress",
    description:
      "Understand the biology behind plateaus and what markers matter beyond the number on the scale.",
  },
  {
    href: "/helpful-guides/mounjaro-nutrition-guide-uk",
    category: "Nutrition",
    title: "Mounjaro Nutrition Guide: What to Eat for Better Results",
    description:
      "A practical breakdown of what to eat while on Mounjaro to maximise fat loss and maintain energy.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mounjaro Calorie Cycling: A Smarter Approach to Sustainable Weight Loss",
  description:
    "Calorie cycling is a flexible nutrition strategy that can complement Mounjaro's appetite regulation—helping to prevent plateaus and improve long-term adherence.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://health-wise.co.uk/helpful-guides/mounjaro-calorie-cycling-weight-loss",
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

export default function GuideCalorieCycling() {
  return (
    <GuideLayout
      slug="mounjaro-calorie-cycling-weight-loss"
      category="Nutrition"
      categorySlug="nutrition"
      title="Mounjaro Calorie Cycling: A Smarter Approach to Sustainable Weight Loss"
      description="Calorie cycling is a flexible nutrition strategy where your intake varies throughout the week. When combined with Mounjaro's appetite regulation, it can help prevent plateaus, reduce diet fatigue, and improve long-term adherence."
      readTime="4 min read"
      lastUpdated="April 2026"
      toc={TOC}
      internalLinks={internalLinksFor("guideCalorieCycling")}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      <GuideSection id="what-is" heading="What Is Calorie Cycling?">
        <GuideParagraph>
          Calorie cycling (sometimes called calorie shifting) is a flexible
          nutrition strategy where your daily calorie intake varies throughout
          the week rather than staying constant. Instead of targeting the same
          deficit every day, you eat more on active or training days and less
          on rest or recovery days.
        </GuideParagraph>
        <GuideParagraph>
          When combined with{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL>, calorie cycling can
          complement the medication's appetite-regulating effects and help:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Prevent weight loss plateaus caused by metabolic adaptation",
            "Support metabolic flexibility and fat utilisation",
            "Improve long-term dietary adherence by reducing the monotony of fixed-deficit eating",
          ]}
        />
        <GuideCallout variant="info">
          Calorie cycling is not a crash diet or an extreme restriction
          strategy. It is a structured, evidence-informed approach to varying
          intake in a way that supports sustainable weight loss.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="how-it-works" heading="How It Works with Mounjaro">
        <GuideParagraph>
          <IL href="/what-is-mounjaro">Mounjaro (tirzepatide)</IL> regulates
          appetite through its dual GLP-1/GIP mechanism—reducing hunger signals
          and slowing gastric emptying. This makes it easier to eat less, but
          does not automatically determine the quality or structure of what you
          eat.
        </GuideParagraph>
        <GuideParagraph>
          Calorie cycling enhances Mounjaro's effect by aligning calorie intake
          with your body's actual energy needs on a given day:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>Higher-calorie days</strong> — timed around physical
              activity or resistance training. Sufficient fuel supports
              performance, muscle preservation, and recovery.
            </>,
            <>
              <strong>Lower-calorie days</strong> — on rest or sedentary days,
              reduced intake aligns with lower energy demand, supporting a
              calorie deficit without the discomfort of under-fuelling.
            </>,
          ]}
        />
        <GuideParagraph>
          This variable approach reduces the degree of metabolic adaptation
          that often occurs with prolonged, fixed-calorie restriction—a common
          cause of{" "}
          <IL href="/helpful-guides/mounjaro-weight-loss-plateau">weight loss plateaus</IL>.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="benefits" heading="Benefits of Calorie Cycling">
        <GuideBulletListRich
          items={[
            <>
              <strong>Maintains metabolic rate</strong> — alternating between
              higher and lower intake days may prevent the sustained metabolic
              slowdown associated with continuous restriction.
            </>,
            <>
              <strong>Reduces diet fatigue</strong> — knowing you have
              higher-intake days to look forward to makes lower-intake days
              psychologically more manageable.
            </>,
            <>
              <strong>Improves long-term adherence</strong> — flexible
              frameworks are generally better sustained than rigid daily
              targets. The{" "}
              <EL href="https://www.bda.uk.com/resource/weight-loss.html">
                British Dietetic Association
              </EL>{" "}
              consistently highlights adherence as a key predictor of
              sustainable weight loss.
            </>,
            <>
              <strong>Supports fat loss while preserving muscle</strong> —
              adequate fuelling on training days supports muscle protein
              synthesis, particularly when combined with resistance exercise.
            </>,
          ]}
        />
      </GuideSection>

      <GuideSection id="weekly-framework" heading="Example Weekly Framework">
        <GuideParagraph>
          There is no single correct calorie cycling framework—the right
          structure depends on your activity level, goals, and how{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> is affecting your
          appetite. A commonly used structure is:
        </GuideParagraph>
        <GuideTable
          headers={["Day Type", "Calorie Target", "Activity Focus"]}
          rows={[
            {
              cells: ["Higher-calorie day (×3)", "At or slightly below maintenance", "Training / active"],
            },
            {
              cells: ["Lower-calorie day (×4)", "Moderate deficit", "Rest / light movement"],
            },
          ]}
        />
        <GuideParagraph>
          On both higher and lower-calorie days, prioritise:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Protein-rich meals — to preserve muscle mass and support satiety (Mounjaro already reduces hunger, but protein remains essential)",
            "Whole foods — minimally processed, nutrient-dense options",
            "Balanced macronutrients — avoid eliminating entire food groups",
          ]}
        />
        <GuideCallout variant="tip">
          A registered dietitian can calculate personalised calorie targets
          based on your TDEE (Total Daily Energy Expenditure), current weight,
          and Mounjaro dose. Generic calorie calculators are a starting point,
          not a prescription. See our{" "}
          <IL href="/helpful-guides/mounjaro-nutrition-guide-uk">Mounjaro nutrition guide</IL>{" "}
          for a broader dietary framework.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="important-considerations" heading="Important Considerations">
        <GuideParagraph>
          Calorie cycling is not suitable for everyone, and requires careful
          implementation alongside a medication like{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL>:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Always consult a healthcare professional before implementing calorie cycling—particularly if you have type 2 diabetes, as blood sugar management needs careful monitoring",
            "Avoid extreme calorie restriction on low days—Mounjaro already reduces intake and over-restriction can cause fatigue, nutrient deficiency, and muscle loss",
            "Monitor energy levels and recovery — if you feel consistently fatigued or weak, your low-day target may be too aggressive",
            "Do not use calorie cycling as a reason to delay clinical follow-up — if weight loss has stalled significantly, speak to your prescribing clinician",
          ]}
        />
        <GuideCallout variant="warning">
          Calorie cycling is a complementary nutrition strategy—it does not
          replace clinical oversight of your{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> treatment. If you are
          experiencing a significant plateau, discuss dose titration or other
          clinical adjustments with your prescriber.
        </GuideCallout>
      </GuideSection>

      <GuideKeyTakeaways
        items={[
          "Calorie cycling varies daily intake between higher (training) and lower (rest) days—reducing the metabolic adaptation that causes plateaus.",
          "It complements Mounjaro's appetite regulation without conflicting with the medication's mechanism.",
          "Benefits include reduced diet fatigue, improved adherence, and preserved muscle mass during weight loss.",
          "A typical framework uses 3 higher-calorie days and 4 lower-calorie days per week, aligned with activity level.",
          "Always consult a clinician or dietitian before implementing calorie cycling alongside a prescription medication.",
        ]}
      />

      <GuideRelatedGuides guides={RELATED_GUIDES} />
      <GuideReferences items={REFERENCES} />

      <GuideDisclaimer>
        This guide is for informational purposes only and does not constitute
        dietary or medical advice. Always consult a qualified healthcare
        professional or registered dietitian before making significant changes
        to your diet, particularly while taking a prescription medication such
        as{" "}
        <IL href="/what-is-mounjaro">Mounjaro</IL>.
      </GuideDisclaimer>

      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
