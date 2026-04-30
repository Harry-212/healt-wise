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
  GuideCallout,
  GuideStatCards,
  IL,
  EL,
} from "@/components/guide/GuideLayout";

export const metadata = buildGuideShareMetadata({
  slug: "mounjaro-wegovy-health-benefits-uk",
  title: "Health Benefits of Mounjaro and Wegovy: Beyond Weight Loss",
  description: "Mounjaro and Wegovy do more than reduce weight. From improved blood sugar control to cardiovascular and liver health, here's what the clinical evidence shows.",
  openGraphTitle: "Health Benefits of Mounjaro and Wegovy: Beyond Weight Loss",
});


const TOC = [
  { id: "weight-loss", label: "1. Significant and Sustainable Weight Loss" },
  { id: "blood-sugar", label: "2. Improved Blood Sugar Control" },
  { id: "cardiovascular", label: "3. Cardiovascular Health Benefits" },
  { id: "liver-health", label: "4. Liver Health Support" },
  { id: "sleep-apnoea", label: "5. Sleep Apnoea Improvement" },
  { id: "joint-pain", label: "6. Reduced Joint Pain & Inflammation" },
  { id: "mental-health", label: "7. Mental Health Benefits" },
  { id: "safety", label: "Safety and Side Effects" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "Do Mounjaro and Wegovy have health benefits beyond weight loss?",
    a: "Yes—both medications have demonstrated significant benefits beyond the scale in clinical trials. These include improved blood sugar control, cardiovascular risk reduction, liver fat reduction, sleep apnoea improvement, and better quality of life. These are increasingly recognised as metabolic health therapies, not solely weight loss tools.",
  },
  {
    q: "What is the difference between Mounjaro and Wegovy's health benefits?",
    a: "Both target GLP-1 receptors, producing similar cardiovascular, metabolic, and weight loss benefits. Mounjaro's additional GIP mechanism may provide enhanced effects on insulin sensitivity and fat metabolism. The SELECT trial demonstrated cardiovascular risk reduction with semaglutide (Wegovy); similar data for tirzepatide (Mounjaro) is emerging from ongoing trials.",
  },
  {
    q: "Can Mounjaro help with type 2 diabetes?",
    a: "Yes. Tirzepatide (Mounjaro) was originally developed and approved for type 2 diabetes management (under the brand Mounjaro for diabetes in the US). In the UK, it is approved both for type 2 diabetes and weight management. Clinical trials show significant reductions in HbA1c and improved insulin sensitivity.",
  },
  {
    q: "Can Mounjaro help with non-alcoholic fatty liver disease (NAFLD)?",
    a: "Emerging evidence suggests yes. Studies have shown that tirzepatide significantly reduces liver fat content and markers of liver inflammation in people with obesity and NAFLD. This is an active area of clinical research.",
  },
  {
    q: "Are the mental health benefits of Mounjaro and Wegovy clinically proven?",
    a: "The mental health improvements reported by patients—reduced anxiety, improved confidence, better quality of life—are strongly supported by patient-reported outcome data from clinical trials and real-world evidence. These benefits appear to stem from a combination of physical improvement, reduced food preoccupation, and the psychological effects of sustained weight loss.",
  },
  {
    q: "What are the most serious side effects of Mounjaro and Wegovy?",
    a: "Rare but serious side effects include pancreatitis, gallstones, and allergic reactions. Both medications carry a warning about thyroid C-cell tumours based on animal studies (not confirmed in humans). Patients should report any severe abdominal pain, persistent nausea, or signs of allergic reaction to their clinician immediately. Side effects can also be reported via the MHRA Yellow Card Scheme.",
  },
];

const REFERENCES = [
  {
    label: "SELECT trial — Semaglutide cardiovascular outcomes",
    description:
      "Landmark cardiovascular outcomes trial showing 20% reduction in major adverse cardiovascular events with semaglutide 2.4mg in people with obesity.",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2307563",
  },
  {
    label: "SURMOUNT-1 trial — Tirzepatide weight and metabolic outcomes",
    description:
      "Phase 3 trial (NEJM) showing 15–22% body weight reduction and significant metabolic improvements with tirzepatide.",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038",
  },
  {
    label: "NICE — Tirzepatide for managing overweight and obesity (TA1026)",
    description:
      "NICE technology appraisal on tirzepatide including evidence review for metabolic and cardiovascular benefits.",
    href: "https://www.nice.org.uk/guidance/ta1026",
  },
  {
    label: "Diabetes UK — GLP-1 medications and type 2 diabetes",
    description:
      "Diabetes UK summary of how GLP-1 receptor agonists improve blood sugar control and reduce HbA1c in type 2 diabetes.",
    href: "https://www.diabetes.org.uk/",
  },
  {
    label: "MHRA Yellow Card Scheme — Reporting side effects",
    description:
      "The MHRA's UK system for reporting adverse drug reactions, including side effects of Mounjaro and Wegovy.",
    href: "https://yellowcard.mhra.gov.uk/",
  },
  {
    label: "Wegovy vs Mounjaro comparison — Health Wise",
    description:
      "Our independent side-by-side comparison of Wegovy and Mounjaro on mechanism, results, and availability.",
    href: "/compare/wegovy-vs-mounjaro",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/mounjaro-weight-loss-injection-uk",
    category: "Medications",
    title: "Mounjaro Weight Loss Treatment UK (2026): Full Guide",
    description:
      "Everything about Mounjaro—mechanism, clinical results, eligibility, and UK pricing.",
  },
  {
    href: "/helpful-guides/switching-wegovy-to-mounjaro-uk",
    category: "Medications",
    title: "Switching from Wegovy to Mounjaro: Safe Transition Guide",
    description:
      "How to transition between GLP-1 treatments safely—clinical differences and what to expect.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Health Benefits of Mounjaro and Wegovy: Beyond Weight Loss",
  description:
    "Mounjaro and Wegovy do more than reduce weight. From improved blood sugar control to cardiovascular and liver health, here's what the clinical evidence shows.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteOrigin()}${helpfulGuidePath("mounjaro-wegovy-health-benefits-uk")}`,
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

export default function GuideMounjaroHealthBenefits() {
  return (
    <GuideLayout
      slug="mounjaro-wegovy-health-benefits-uk"
      category="Medications"
      categorySlug="medications"
      title="Health Benefits of Mounjaro and Wegovy: Beyond Weight Loss"
      description="Weight loss treatments like Mounjaro and Wegovy are increasingly recognised as metabolic health therapies—not simply fat-loss tools. Here's what the clinical evidence shows about their broader health benefits."
      readTime="5 min read"
      lastUpdated="April 2026"
      toc={TOC}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      <GuideSection id="weight-loss" heading="1. Significant and Sustainable Weight Loss">
        <GuideParagraph>
          The foundation of both{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> and{" "}
          <IL href="/what-is-wegovy">Wegovy</IL>'s health impact is the
          quality and sustainability of the weight loss they produce. Unlike
          short term calorie restriction, GLP 1 medications work by directly
          modifying the hormonal signals that regulate hunger and satiety 
          making lower intake feel natural rather than forced.
         For more context, explore our resources on <IL href="/blog/side-effects-of-wegovy-and-how-to-manage-them" className="font-medium text-emerald-600 hover:underline">managing Wegovy side effects</IL>.</GuideParagraph>
        <GuideStatCards
          stats={[
            {
              value: "~22%",
              label: "Average weight loss with Mounjaro (tirzepatide 15mg)",
              sub: "SURMOUNT-1 — 72 weeks",
            },
            {
              value: "~15%",
              label: "Average weight loss with Wegovy (semaglutide 2.4mg)",
              sub: "STEP-1 — 68 weeks",
            },
          ]}
        />
        <GuideBulletList
          items={[
            "Reduced appetite and cravings — hormonal regulation rather than willpower",
            "Sustained calorie deficit — without the hunger rebound typical of traditional diets",
            "Long-term weight maintenance — continued treatment supports maintenance of results",
          ]}
        />
      </GuideSection>

      <GuideSection id="blood-sugar" heading="2. Improved Blood Sugar Control">
        <GuideParagraph>
          Both{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> and{" "}
          <IL href="/what-is-wegovy">Wegovy</IL> were originally developed in
          the context of type 2 diabetes management and their glucose lowering
          effects are among their most clinically significant benefits.
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Increase insulin sensitivity — cells become more responsive to insulin",
            "Lower HbA1c levels — the key long-term marker of blood sugar control",
            "Reduce post-meal blood sugar spikes — by slowing gastric emptying",
            "Help manage or prevent type 2 diabetes — particularly in high-risk individuals with obesity",
          ]}
        />
        <GuideParagraph>
          <EL href="https://www.diabetes.org.uk/">Diabetes UK</EL> highlights
          GLP 1 receptor agonists as an important class of treatment for type
          2 diabetes management, noting both the glucose lowering and weight
          loss effects that benefit patients.
        </GuideParagraph>
        <GuideCallout variant="info">
          If you have type 2 diabetes, discuss{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> with your GP or diabetes
          specialist. Both its weight loss and glucose-lowering effects may be
          relevant to your treatment plan.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="cardiovascular" heading="3. Cardiovascular Health Benefits">
        <GuideParagraph>
          One of the most significant recent developments in GLP 1 research is
          the demonstration of cardiovascular risk reduction independent of
          weight loss alone. The landmark{" "}
          <EL href="https://www.nejm.org/doi/full/10.1056/NEJMoa2307563">
            SELECT trial
          </EL>{" "}
          showed that semaglutide (Wegovy) reduced the risk of major adverse
          cardiovascular events (heart attack, stroke, cardiovascular death) by
          20% in people with obesity and established cardiovascular disease.
         For more context, explore our resources on <IL href="/blog/best-weight-loss-treatment-in-birmingham" className="font-medium text-emerald-600 hover:underline">clinics in Birmingham</IL>.</GuideParagraph>
        <GuideBulletList
          items={[
            "Reduced blood pressure — particularly systolic blood pressure, a key cardiovascular risk factor",
            "Lower LDL cholesterol — the 'bad' cholesterol linked to arterial plaque and heart disease",
            "Reduced risk of heart attack and stroke — demonstrated in the SELECT trial",
            "Reduced systemic inflammation — which contributes to arterial damage and cardiovascular disease",
          ]}
        />
        <GuideCallout variant="info">
          Similar cardiovascular outcomes trials for{" "}
          <IL href="/what-is-mounjaro">Mounjaro (tirzepatide)</IL> are
          ongoing (SURPASS-CVOT). Early data and mechanistic evidence suggest
          comparable or potentially superior cardiovascular benefits.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="liver-health" heading="4. Liver Health Support">
        <GuideParagraph>
          Non alcoholic fatty liver disease (NAFLD) now often termed metabolic
          dysfunction associated steatotic liver disease (MASLD) affects an
          estimated 25–30% of UK adults and is closely linked to obesity and
          insulin resistance.
        </GuideParagraph>
        <GuideParagraph>
          Both{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> and{" "}
          <IL href="/what-is-wegovy">Wegovy</IL> have shown meaningful
          reductions in liver fat and inflammation in clinical studies:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Reduced hepatic fat content — measured by MRI in clinical studies",
            "Lower liver inflammation markers — reduction in ALT and AST liver enzymes",
            "Potential reversal of early-stage NAFLD — particularly when combined with dietary improvement",
          ]}
        />
      </GuideSection>

      <GuideSection id="sleep-apnoea" heading="5. Sleep Apnoea Improvement">
        <GuideParagraph>
          Obstructive sleep apnoea (OSA) is strongly associated with excess
          body weight, particularly fat accumulation around the neck and upper
          airway. Weight loss through{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> or{" "}
          <IL href="/what-is-wegovy">Wegovy</IL> can produce significant
          improvements in sleep apnoea severity.
         For more context, explore our resources on <IL href="/wegovy-price-comparison" className="font-medium text-emerald-600 hover:underline">Wegovy price comparison</IL>.</GuideParagraph>
        <GuideBulletList
          items={[
            "Reduced airway obstruction — less fat tissue pressing on the airway during sleep",
            "Fewer apnoea events per hour — directly improving sleep quality",
            "Reduced snoring — a common symptom of airway narrowing",
            "Better sleep quality and daytime energy — with downstream benefits for mood, cognition, and metabolic health",
          ]}
        />
      </GuideSection>

      <GuideSection id="joint-pain" heading="6. Reduced Joint Pain & Inflammation">
        <GuideParagraph>
          Excess body weight places disproportionate mechanical stress on the
          joints particularly the knees, hips, and spine. For every kilogram of
          body weight lost, joint load decreases by approximately 4kg. The
          significant weight loss achievable with{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> and{" "}
          <IL href="/what-is-wegovy">Wegovy</IL> can therefore have a
          substantial impact on musculoskeletal health.
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Lower joint stress — reduced mechanical load on knees, hips, and lumbar spine",
            "Reduced systemic inflammation — adipose tissue produces pro-inflammatory cytokines; reducing body fat lowers systemic inflammation",
            "Improved mobility — less pain and less body weight to carry makes movement easier and more sustainable",
          ]}
        />
      </GuideSection>

      <GuideSection id="mental-health" heading="7. Mental Health Benefits">
        <GuideParagraph>
          The psychological benefits of sustained weight loss with GLP 1
          medications are increasingly documented in patient reported outcome
          data from clinical trials and real world evidence.
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>Improved confidence and self-esteem</strong> — a
              consistent finding in patient-reported outcomes from both
              Mounjaro and Wegovy trials.
            </>,
            <>
              <strong>Reduced anxiety and depression symptoms</strong> —
              weight-related stigma and body image concerns are significant
              contributors to anxiety; meaningful weight loss often brings
              relief.
            </>,
            <>
              <strong>Reduced food preoccupation</strong> — many patients
              report that GLP-1 medications reduce the psychological 'noise'
              around food and eating, a phenomenon sometimes described as
              'food quiet.'
            </>,
            <>
              <strong>Better quality of life</strong> — across physical
              function, social participation, and energy levels, quality of
              life improvements are among the most consistently reported
              patient outcomes.
            </>,
          ]}
        />
      </GuideSection>

      <GuideSection id="safety" heading="Safety and Side Effects">
        <GuideParagraph>
          Both{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> and{" "}
          <IL href="/what-is-wegovy">Wegovy</IL> have a well characterised
          safety profile from extensive clinical trials. Understanding common
          and rare side effects helps patients manage treatment effectively.
         For more context, explore our resources on <IL href="/blog/best-weight-loss-treatment-in-manchester" className="font-medium text-emerald-600 hover:underline">treatment in Manchester</IL>.</GuideParagraph>

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          Common side effects
        </h3>
        <GuideBulletList
          items={[
            "Nausea — most common, particularly when starting or titrating up; usually improves over weeks",
            "Constipation or diarrhoea — gastrointestinal effects of slowed digestion",
            "Fatigue — often temporary during the initial adjustment period",
            "Injection site reactions — mild redness or bruising at the injection site",
          ]}
        />

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          Rare but serious side effects
        </h3>
        <GuideBulletList
          items={[
            "Pancreatitis — severe abdominal pain should be reported immediately to a clinician",
            "Gallstones — rapid weight loss can increase gallstone formation risk",
            "Allergic reactions — seek urgent medical attention for signs of severe allergic response",
          ]}
        />
        <GuideCallout variant="warning">
          Side effects should be reported via the{" "}
          <EL href="https://yellowcard.mhra.gov.uk/">
            MHRA Yellow Card Scheme
          </EL>
          . This reporting system helps regulators monitor the real-world
          safety of medicines including{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> and{" "}
          <IL href="/what-is-wegovy">Wegovy</IL>.
        </GuideCallout>
      </GuideSection>

      <GuideKeyTakeaways
        items={[
          "Mounjaro and Wegovy are metabolic health therapies—not just weight loss tools.",
          "Blood sugar improvements are among the most clinically significant benefits, particularly for people with or at risk of type 2 diabetes.",
          "The SELECT trial demonstrated a 20% reduction in cardiovascular events with semaglutide—the most significant cardiovascular finding for GLP-1 medications to date.",
          "Additional benefits include liver fat reduction, sleep apnoea improvement, reduced joint pain, and meaningful mental health gains.",
          "Common side effects are largely gastrointestinal and manageable; rare serious effects should be reported promptly to a clinician and the MHRA Yellow Card Scheme.",
        ]}
      />

      <GuideRelatedGuides guides={RELATED_GUIDES} />
      <GuideReferences items={REFERENCES} />

      <GuideDisclaimer>
        This guide is for informational purposes only. Clinical outcomes vary
        between individuals. Always consult a qualified healthcare professional
        before starting or changing any prescription medication, including{" "}
        <IL href="/what-is-mounjaro">Mounjaro</IL> and{" "}
        <IL href="/what-is-wegovy">Wegovy</IL>.
      </GuideDisclaimer>

      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
