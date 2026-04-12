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
  GuideStatCards,
  IL,
  EL,
} from "@/components/guide/GuideLayout";

export const metadata: Metadata = {
  title:
    "Why Weight Loss Is Faster at the Start on Mounjaro (And Why It Slows Down) | Health Wise",
  description:
    "Rapid early weight loss on Mounjaro is normal—but why does it slow? We explain the biology behind initial results, what plateaus mean, and how to keep progressing sustainably.",
  openGraph: {
    title:
      "Why Weight Loss Is Faster at the Start on Mounjaro (And Why It Slows Down)",
    description:
      "Rapid early weight loss on Mounjaro is normal—but why does it slow? We explain the biology, what plateaus mean, and how to keep progressing sustainably.",
    type: "article",
  },
  alternates: { canonical: "/helpful-guides/mounjaro-early-weight-loss-why-it-slows" },
};

const TOC = [
  { id: "fast-at-first", label: "Why You Lose Weight Quickly at First" },
  { id: "why-it-slows", label: "Why Progress Slows Over Time" },
  { id: "plateaus-normal", label: "Plateaus Are Normal" },
  { id: "dont-compare", label: "Don't Compare Your Progress" },
  { id: "keep-progressing", label: "How to Keep Progressing" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "Why did I lose weight so fast in the first weeks on Mounjaro?",
    a: "Early weight loss on Mounjaro is typically a combination of reduced calorie intake due to suppressed appetite, loss of excess water weight (which accompanies glycogen depletion), and some initial fat loss. Water weight is lost rapidly but is not the same as fat loss—this is why the scale can drop significantly in the first few weeks.",
  },
  {
    q: "Why has my weight loss slowed down on Mounjaro?",
    a: "Slowing weight loss is a normal and expected part of any effective weight loss treatment. As your body loses weight, it requires fewer calories to maintain itself—so the same calorie deficit produces less weight loss over time. Your metabolism also adapts to lower intake. This does not mean Mounjaro has stopped working.",
  },
  {
    q: "How long do Mounjaro plateaus last?",
    a: "Plateaus can last anywhere from a few weeks to a couple of months. If your weight has genuinely not changed for more than 4–6 weeks despite consistent adherence to treatment and lifestyle, it is worth discussing dose titration or dietary adjustments with your prescribing clinician.",
  },
  {
    q: "Should I increase my Mounjaro dose if progress has slowed?",
    a: "Dose increases should only be made under clinical guidance and according to the standard titration schedule. If you are not yet on the maximum dose and progress has stalled, your clinician may consider an increase. Do not adjust your dose without professional advice.",
  },
  {
    q: "Is slower weight loss on Mounjaro a sign it's not working?",
    a: "Not necessarily. Slower progress often indicates your body is adapting efficiently—which is a positive sign, not a failure. Focus on non-scale markers such as energy levels, measurements, fitness improvements, and blood sugar stability. These often continue improving even when the scale slows.",
  },
  {
    q: "What is the difference between early water weight loss and fat loss?",
    a: "Water weight loss occurs rapidly when glycogen stores in the liver and muscles are depleted—each gram of glycogen holds approximately 3g of water. This can cause significant scale drops in the first 1–2 weeks. Fat loss is slower and more gradual, typically measured in hundreds of grams per week rather than kilograms.",
  },
];

const REFERENCES = [
  {
    label: "SURMOUNT-1 trial — Long-term tirzepatide weight loss data",
    description:
      "Published in NEJM, this phase 3 trial shows the trajectory of weight loss over 72 weeks with Mounjaro, including the slowing of rate over time.",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038",
  },
  {
    label: "NHS — Why weight loss slows down",
    description:
      "NHS explanation of why weight loss naturally decelerates over time and what to do about it.",
    href: "https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/managing-your-weight/",
  },
  {
    label: "British Dietetic Association — Sustainable weight management",
    description:
      "BDA guidance on the physiology of weight loss including metabolic adaptation and the role of diet quality.",
    href: "https://www.bda.uk.com/resource/weight-loss.html",
  },
  {
    label: "Understanding Mounjaro plateaus — Health Wise",
    description:
      "Our companion guide explaining weight loss plateaus in depth—causes, what they mean clinically, and strategies to address them.",
    href: "/helpful-guides/mounjaro-weight-loss-plateau",
    external: false,
  },
  {
    label: "Mounjaro calorie cycling guide — Health Wise",
    description:
      "How calorie cycling can help break plateaus and maintain progress during long-term Mounjaro treatment.",
    href: "/helpful-guides/mounjaro-calorie-cycling-weight-loss",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/mounjaro-weight-loss-plateau",
    category: "Medications",
    title: "Why Weight Loss Slows on Mounjaro: Plateaus & Long-Term Progress",
    description:
      "A deeper look at plateau biology, clinical interpretation, and what to do when progress stalls.",
  },
  {
    href: "/helpful-guides/mounjaro-calorie-cycling-weight-loss",
    category: "Nutrition",
    title: "Mounjaro Calorie Cycling: A Smarter Approach to Sustainable Weight Loss",
    description:
      "A flexible nutrition strategy to complement Mounjaro's appetite regulation and prevent plateau-related slowdowns.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Why Weight Loss Is Faster at the Start on Mounjaro (And Why It Slows Down)",
  description:
    "Rapid early weight loss on Mounjaro is normal—but why does it slow? We explain the biology, what plateaus mean, and how to keep progressing sustainably.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://health-wise.co.uk/helpful-guides/mounjaro-early-weight-loss-why-it-slows",
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

export default function GuideEarlyWeightLoss() {
  return (
    <GuideLayout
      slug="mounjaro-early-weight-loss-why-it-slows"
      category="Medications"
      categorySlug="medications"
      title="Why Weight Loss Is Faster at the Start on Mounjaro (And Why It Slows Down)"
      description="Many Mounjaro users experience rapid weight loss in the first weeks—then notice progress slowing. This is biology, not failure. Here's what is actually happening and how to keep moving forward."
      readTime="3 min read"
      lastUpdated="April 2026"
      toc={TOC}
      internalLinks={internalLinksFor("guideEarlyWeightLoss")}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      <GuideSection id="fast-at-first" heading="Why You Lose Weight Quickly at First">
        <GuideParagraph>
          Many users of{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> notice significant weight
          loss in the first few weeks of treatment. This can be encouraging—but
          it is important to understand what is actually driving it.
        </GuideParagraph>
        <GuideParagraph>
          Early rapid weight loss is typically a combination of:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>Reduced appetite and calorie intake</strong> —
              Mounjaro's dual GLP-1/GIP mechanism suppresses hunger signals
              rapidly, often causing a significant reduction in daily food
              intake from the first week.
            </>,
            <>
              <strong>Loss of excess water weight</strong> — as glycogen
              stores in the liver and muscles are depleted (due to lower
              carbohydrate intake), water held alongside those stores is
              released. Each gram of glycogen holds approximately 3g of water,
              so this can produce a rapid drop on the scale.
            </>,
            <>
              <strong>Initial fat loss</strong> — once calorie intake is
              consistently below expenditure, fat loss begins. Early fat loss
              may be faster when the initial deficit is large.
            </>,
          ]}
        />
        <GuideCallout variant="info">
          Early results are encouraging—but not all of the initial weight loss
          is fat. Water weight loss is real, but it does not reflect changes
          in body composition in the same way that fat loss does.
        </GuideCallout>
        <GuideStatCards
          stats={[
            {
              value: "Weeks 1–4",
              label: "Fastest phase of weight loss",
              sub: "Driven by appetite suppression + water weight reduction",
            },
            {
              value: "~22%",
              label: "Average total weight loss (tirzepatide 15mg)",
              sub: "Achieved over 72 weeks — SURMOUNT-1 trial",
            },
          ]}
        />
      </GuideSection>

      <GuideSection id="why-it-slows" heading="Why Progress Slows Over Time">
        <GuideParagraph>
          After the first few weeks on{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL>, the rate of weight loss
          typically stabilises. This is not a sign the medication has stopped
          working—it is a predictable physiological response.
        </GuideParagraph>
        <GuideParagraph>
          Progress slows for three main reasons:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>Your metabolism adapts</strong> — as body weight
              decreases, your resting metabolic rate (the calories your body
              burns at rest) also decreases. This means the same calorie
              deficit produces less weight loss over time.
            </>,
            <>
              <strong>Fat loss replaces water loss</strong> — once water weight
              has been lost, all subsequent scale changes reflect slower,
              genuine fat or muscle tissue changes. Fat loss is measured in
              hundreds of grams per week, not kilograms.
            </>,
            <>
              <strong>The body becomes more energy-efficient</strong> —
              prolonged calorie restriction triggers adaptive thermogenesis,
              where the body reduces energy expenditure beyond what is
              explained by body weight alone. This is a survival mechanism, not
              a personal failing.
            </>,
          ]}
        />
        <GuideParagraph>
          The{" "}
          <EL href="https://www.nejm.org/doi/full/10.1056/NEJMoa2206038">
            SURMOUNT-1 trial
          </EL>{" "}
          data shows this pattern clearly: the steepest weight loss curve
          occurs in the first 16–20 weeks, with gradual deceleration
          thereafter—even as total weight loss continues to accumulate.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="plateaus-normal" heading="Plateaus Are Normal">
        <GuideParagraph>
          A weight loss plateau—where the scale does not move for a period of
          weeks despite consistent treatment—is a normal part of the process,
          not a clinical failure.
        </GuideParagraph>
        <GuideParagraph>
          Plateaus often indicate:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Improved metabolic efficiency — your body has adapted to its new lower weight and is functioning more economically",
            "Stabilisation of body composition — changes in muscle-to-fat ratio may be occurring even when total weight is static",
            "A temporary calorie balance — the deficit that produced earlier losses has been partially offset by metabolic adaptation",
          ]}
        />
        <GuideCallout variant="tip">
          For a more detailed clinical explanation of plateaus and strategies
          to address them, see our companion guide:{" "}
          <IL href="/helpful-guides/mounjaro-weight-loss-plateau">
            Why Weight Loss Slows on Mounjaro: Plateaus & Long-Term Progress
          </IL>
          .
        </GuideCallout>
      </GuideSection>

      <GuideSection id="dont-compare" heading="Don't Compare Your Progress">
        <GuideParagraph>
          Weight loss varies significantly between individuals, even among
          people taking the same dose of{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL>. Comparing your results
          to others—on social media, in forums, or against clinical trial
          averages—is rarely helpful and often misleading.
        </GuideParagraph>
        <GuideParagraph>
          Individual outcomes depend on:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Starting weight — people with higher starting BMI often lose more weight in absolute terms",
            "Hormonal response — individual variation in GLP-1 and GIP receptor sensitivity",
            "Lifestyle factors — diet quality, physical activity, sleep, and stress levels all affect the rate of loss",
            "Dose — higher doses generally produce greater weight loss, but are reached over time via the titration schedule",
          ]}
        />
        <GuideParagraph>
          Rather than focusing exclusively on the scale, monitor broader
          markers of progress:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Energy levels and daily function",
            "Sleep quality and duration",
            "Body measurements (waist, hips, chest) — often change even when weight is static",
            "Blood sugar and lipid markers (if relevant)",
            "Fitness improvements — strength, endurance, or general activity levels",
          ]}
        />
      </GuideSection>

      <GuideSection id="keep-progressing" heading="How to Keep Progressing">
        <GuideParagraph>
          If your rate of weight loss has genuinely slowed and you want to
          support continued progress, the following evidence-based strategies
          can help:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>Increase protein intake</strong> — protein is the most
              satiating macronutrient and helps preserve muscle mass during
              weight loss, which supports metabolic rate. See our{" "}
              <IL href="/helpful-guides/mounjaro-nutrition-guide-uk">
                Mounjaro nutrition guide
              </IL>
              .
            </>,
            <>
              <strong>Add or increase resistance training</strong> — building
              muscle helps counteract the metabolic slowdown that accompanies
              weight loss. Even 2–3 sessions per week makes a meaningful
              difference.
            </>,
            <>
              <strong>Consider calorie cycling</strong> — varying daily intake
              can reduce the degree of metabolic adaptation. See our guide on{" "}
              <IL href="/helpful-guides/mounjaro-calorie-cycling-weight-loss">
                Mounjaro calorie cycling
              </IL>
              .
            </>,
            <>
              <strong>Adjust calorie intake gradually</strong> — as your body
              weight decreases, your calorie needs decrease too. Recalculate
              your targets periodically, or work with a{" "}
              <EL href="https://www.bda.uk.com/resource/weight-loss.html">
                registered dietitian
              </EL>
              .
            </>,
            <>
              <strong>Stay hydrated</strong> — dehydration can temporarily
              affect the scale and mask fat loss. The{" "}
              <EL href="https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/managing-your-weight/">
                NHS recommends
              </EL>{" "}
              approximately 6–8 glasses of water per day.
            </>,
          ]}
        />
        <GuideCallout variant="warning">
          If your weight has genuinely not changed for more than 4–6 weeks
          despite consistent treatment and lifestyle adherence, speak to your
          prescribing clinician. A dose review or clinical assessment may be
          appropriate.
        </GuideCallout>
      </GuideSection>

      <GuideKeyTakeaways
        items={[
          "Rapid early weight loss on Mounjaro is driven by appetite suppression, reduced intake, and water weight loss—not all of it is fat.",
          "Progress naturally slows as metabolism adapts, water weight normalises, and the body becomes more energy-efficient.",
          "Plateaus are a normal physiological response—not a sign that Mounjaro has stopped working.",
          "Individual results vary widely; do not compare your progress to clinical trial averages or other patients.",
          "To maintain progress: increase protein, add resistance training, consider calorie cycling, and speak to your clinician if needed.",
        ]}
      />

      <GuideRelatedGuides guides={RELATED_GUIDES} />
      <GuideReferences items={REFERENCES} />

      <GuideDisclaimer>
        This guide is for informational purposes only and does not replace
        professional medical advice. If you are concerned about your progress
        on{" "}
        <IL href="/what-is-mounjaro">Mounjaro</IL>, speak to your prescribing
        clinician before making any changes to your dose or treatment.
      </GuideDisclaimer>

      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
