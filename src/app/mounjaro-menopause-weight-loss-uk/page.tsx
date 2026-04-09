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
    "Mounjaro and Menopause: A Complete UK Guide to Weight Loss Support | Health Wise",
  description:
    "Menopause-related weight gain has distinct hormonal causes. Here's how Mounjaro's dual GLP-1/GIP mechanism can help menopausal women, who is eligible, and how to maximise results.",
  openGraph: {
    title: "Mounjaro and Menopause: A Complete UK Guide to Weight Loss Support",
    description:
      "Menopause-related weight gain has distinct hormonal causes. Here's how Mounjaro's dual GLP-1/GIP mechanism can help menopausal women, who is eligible, and how to maximise results.",
    type: "article",
  },
  alternates: { canonical: "/mounjaro-menopause-weight-loss-uk" },
};

const TOC = [
  { id: "why-weight-gain", label: "Why Weight Gain Happens During Menopause" },
  { id: "how-mounjaro-helps", label: "How Mounjaro Helps with Menopause Weight" },
  { id: "expected-results", label: "Expected Results: What the Data Shows" },
  { id: "eligibility", label: "Is Mounjaro Right for You?" },
  { id: "hrt-mounjaro", label: "Can You Take Mounjaro with HRT?" },
  { id: "lifestyle", label: "Maximising Results: Lifestyle Strategy" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "Can menopausal women take Mounjaro in the UK?",
    a: "Yes—menopausal women are eligible for Mounjaro under the standard UK criteria (BMI ≥ 30, or ≥ 27 with a related health condition). Menopause itself is not a contraindication. In fact, menopausal women are among those who may benefit most from Mounjaro's dual mechanism, which addresses both appetite and insulin response.",
  },
  {
    q: "Why is menopause weight gain different from regular weight gain?",
    a: "Menopausal weight gain is driven by hormonal changes—particularly declining oestrogen—rather than simply eating more. These changes alter fat distribution (increasing visceral/abdominal fat), slow metabolic rate, reduce muscle mass, and increase insulin resistance. This means standard calorie restriction alone is often less effective.",
  },
  {
    q: "Can I take Mounjaro alongside HRT?",
    a: "In most cases, yes. HRT and Mounjaro address different aspects of menopause: HRT targets hormonal deficiency and symptoms (hot flushes, sleep disruption), while Mounjaro supports weight and metabolic health. There is no established contraindication between the two. However, always discuss both treatments with your GP or specialist, as individual clinical circumstances vary.",
  },
  {
    q: "Does Mounjaro specifically target abdominal fat?",
    a: "Clinical trials show that Mounjaro reduces visceral (abdominal) fat as part of overall weight loss. While no medication can target fat in a single area exclusively, the metabolic improvements from Mounjaro's GIP mechanism—improved insulin sensitivity and fat metabolism—tend to have a proportionally greater effect on visceral fat stores.",
  },
  {
    q: "How long does it take to see results on Mounjaro during menopause?",
    a: "Most patients begin to notice appetite changes within the first 1–2 weeks. Meaningful weight loss typically becomes apparent from weeks 4–8, with the most significant changes occurring over 12–24 weeks as the dose is titrated upward. Clinical trial data shows progressive weight loss over 72 weeks with Mounjaro.",
  },
  {
    q: "Are there any menopause-specific risks with Mounjaro?",
    a: "No menopause-specific contraindications have been identified. Standard Mounjaro contraindications apply: history of pancreatitis, medullary thyroid cancer or MEN2 syndrome, pregnancy, and certain other conditions. Your prescribing clinician will review your full medical history before prescribing.",
  },
];

const REFERENCES = [
  {
    label: "NHS — Menopause symptoms and treatment",
    description:
      "NHS overview of menopausal symptoms including weight gain, metabolic changes, and evidence-based treatment options.",
    href: "https://www.nhs.uk/conditions/menopause/",
  },
  {
    label: "SURMOUNT-1 trial — Tirzepatide (Mounjaro) clinical results",
    description:
      "Phase 3 trial published in NEJM showing up to 22.5% body weight reduction with tirzepatide over 72 weeks.",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038",
  },
  {
    label: "NICE — Tirzepatide for managing overweight and obesity (TA1026)",
    description:
      "NICE technology appraisal on tirzepatide eligibility criteria and clinical use in the UK.",
    href: "https://www.nice.org.uk/guidance/ta1026",
  },
  {
    label: "British Menopause Society — Weight management in menopause",
    description:
      "Evidence-based guidance from the BMS on the drivers of menopausal weight gain and management approaches.",
    href: "https://thebms.org.uk/",
  },
  {
    label: "Mounjaro weight loss injection UK — full guide — Health Wise",
    description:
      "Complete independent guide to Mounjaro—mechanism, clinical results, eligibility, and UK pricing.",
    href: "/mounjaro-weight-loss-injection-uk",
    external: false,
  },
  {
    label: "Mounjaro nutrition guide UK — Health Wise",
    description:
      "Evidence-based nutrition advice for getting the most from Mounjaro treatment.",
    href: "/mounjaro-nutrition-guide-uk",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/mounjaro-weight-loss-injection-uk",
    category: "Medications",
    title: "Mounjaro Weight Loss Injection UK (2026): Full Guide",
    description:
      "Everything about Mounjaro—mechanism, clinical results, eligibility, dosing, and UK pricing.",
  },
  {
    href: "/mounjaro-nutrition-guide-uk",
    category: "Nutrition",
    title: "Mounjaro Nutrition Guide: What to Eat for Better Results",
    description:
      "A practical, evidence-based guide to nutrition while using Mounjaro—protein, carbs, fibre, and more.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mounjaro and Menopause: A Complete UK Guide to Weight Loss Support",
  description:
    "Menopause-related weight gain has distinct hormonal causes. Here's how Mounjaro's dual GLP-1/GIP mechanism can help menopausal women, who is eligible, and how to maximise results.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://health-wise.co.uk/mounjaro-menopause-weight-loss-uk",
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

export default function GuideMounjaroMenopause() {
  return (
    <GuideLayout
      category="Medications"
      categorySlug="medications"
      title="Mounjaro and Menopause: A Complete UK Guide to Weight Loss Support"
      description="Menopause can bring significant weight changes—particularly visceral fat accumulation—driven by hormonal shifts that standard calorie restriction alone struggles to address. Here's how Mounjaro's dual mechanism can help, and how to use it effectively."
      readTime="5 min read"
      lastUpdated="April 2026"
      toc={TOC}
      internalLinks={internalLinksFor("guideMounjaroMenopause")}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      <GuideSection id="why-weight-gain" heading="Why Weight Gain Happens During Menopause">
        <GuideParagraph>
          Menopause can bring a wave of unexpected changes—weight gain being
          one of the most frustrating. Many women notice fat accumulating
          around the abdomen, even when diet and lifestyle habits have not
          changed. This is not a matter of willpower—it is physiology.
        </GuideParagraph>
        <GuideParagraph>
          The driving force is hormonal. Declining oestrogen during
          perimenopause and menopause profoundly affects how the body stores
          fat and burns energy. Key changes include:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>Slower metabolism</strong> — basal metabolic rate
              decreases as oestrogen levels fall, meaning fewer calories are
              burned at rest even without changes in activity.
            </>,
            <>
              <strong>Muscle loss (sarcopenia)</strong> — hormonal changes
              accelerate the age-related loss of muscle tissue, further
              reducing calorie expenditure.
            </>,
            <>
              <strong>Increased visceral fat</strong> — fat redistribution
              shifts from hips and thighs to the abdomen, significantly
              increasing the risk of cardiovascular disease and type 2
              diabetes.
            </>,
            <>
              <strong>Stronger cravings</strong> — hormonal disruption affects
              appetite-regulating hormones including leptin and ghrelin,
              increasing cravings for sugar and high-calorie foods.
            </>,
          ]}
        />
        <GuideCallout variant="info">
          The{" "}
          <EL href="https://www.nhs.uk/conditions/menopause/">NHS</EL>{" "}
          identifies menopause as a significant metabolic turning point. The
          weight-related changes are physiologically distinct from standard
          weight gain and often respond poorly to conventional calorie
          restriction alone.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="how-mounjaro-helps" heading="How Mounjaro Helps with Menopause Weight">
        <GuideParagraph>
          <IL href="/what-is-mounjaro">Mounjaro (tirzepatide)</IL> works
          differently from traditional weight loss methods. Rather than simply
          restricting intake through willpower, it targets the hormonal
          regulation of appetite and metabolism directly—making it particularly
          relevant for menopausal weight gain.
        </GuideParagraph>
        <GuideParagraph>
          Its dual-hormone mechanism acts on two pathways:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>GLP-1 (glucagon-like peptide-1)</strong> — slows gastric
              emptying, signals fullness to the brain, and reduces appetite.
              This directly counters the increased cravings associated with
              menopausal hormonal change.
            </>,
            <>
              <strong>GIP (glucose-dependent insulinotropic polypeptide)</strong>{" "}
              — improves insulin response and fat metabolism. This is
              particularly relevant during menopause, when declining oestrogen
              contributes to increased insulin resistance.
            </>,
          ]}
        />
        <GuideParagraph>
          For menopausal women, this combination of effects offers:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Reduced cravings and emotional eating triggered by hormonal fluctuation",
            "Improved blood sugar stability, countering menopause-related insulin resistance",
            "Enhanced fat loss—particularly abdominal/visceral fat",
            "Better long-term weight control compared to calorie restriction alone",
          ]}
        />
      </GuideSection>

      <GuideSection id="expected-results" heading="Expected Results: What the Data Shows">
        <GuideParagraph>
          Clinical trial data for{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> is compelling, though it
          is important to note that most major trials did not isolate
          menopausal women as a specific subgroup. The overall results provide
          a strong indication of what is achievable:
        </GuideParagraph>
        <GuideStatCards
          stats={[
            {
              value: "15–22%",
              label: "Average body weight reduction",
              sub: "Across tirzepatide doses — SURMOUNT-1 trial (72 weeks)",
            },
            {
              value: "Improved",
              label: "Metabolic markers",
              sub: "Blood sugar, insulin sensitivity, and lipid profiles",
            },
          ]}
        />
        <GuideParagraph>
          For menopausal women specifically, the metabolic benefits may
          translate to:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Meaningful reduction in visceral (abdominal) fat—the type most closely linked to cardiovascular and metabolic risk",
            "Lower cardiovascular risk factors (blood pressure, cholesterol, blood sugar)",
            "Increased energy and improved mobility as body weight reduces",
            "Reduced burden of menopause-associated metabolic conditions including type 2 diabetes risk",
          ]}
        />
      </GuideSection>

      <GuideSection id="eligibility" heading="Is Mounjaro Right for You?">
        <GuideParagraph>
          In the UK, eligibility for{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> follows{" "}
          <EL href="https://www.nice.org.uk/guidance/ta1026">
            NICE guidance (TA1026)
          </EL>{" "}
          and typically requires:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "BMI ≥ 30 (obesity), or",
            "BMI ≥ 27 with at least one weight-related health condition (e.g. type 2 diabetes, hypertension, high cholesterol, sleep apnoea)",
          ]}
        />
        <GuideParagraph>
          Mounjaro is generally not suitable if you:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Are pregnant or breastfeeding",
            "Have a personal or family history of medullary thyroid carcinoma or MEN2 syndrome",
            "Have a history of pancreatitis",
            "Have severe gastrointestinal conditions",
          ]}
        />
        <GuideCallout variant="warning">
          Always consult a GP or specialist before starting Mounjaro. A full
          medical review—including a discussion of your menopausal history,
          current medications, and any HRT—is essential to ensure it is the
          right choice for your individual circumstances.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="hrt-mounjaro" heading="Can You Take Mounjaro with HRT?">
        <GuideParagraph>
          This is one of the most common questions from menopausal women
          considering{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL>. In most cases, the
          answer is yes—HRT and Mounjaro address different aspects of
          menopause and can be used together.
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>HRT</strong> targets hormonal deficiency—replacing
              oestrogen (and sometimes progesterone and testosterone) to manage
              symptoms like hot flushes, sleep disruption, mood changes, and
              bone density loss.
            </>,
            <>
              <strong>Mounjaro</strong> targets metabolic and weight outcomes—
              reducing appetite, improving insulin response, and supporting
              sustained weight loss.
            </>,
          ]}
        />
        <GuideParagraph>
          There is no established clinical contraindication between HRT and
          tirzepatide. However, the interaction between medications should
          always be reviewed by a clinician who has full visibility of your
          medical history and current prescriptions. Some forms of HRT may
          affect appetite and weight independently, which is worth discussing
          with your prescriber.
        </GuideParagraph>
        <GuideCallout variant="tip">
          The{" "}
          <EL href="https://thebms.org.uk/">
            British Menopause Society
          </EL>{" "}
          provides evidence-based guidance on weight management during
          menopause and can be a useful resource when discussing combined
          treatment approaches with your GP.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="lifestyle" heading="Maximising Results: Lifestyle Strategy">
        <GuideParagraph>
          <IL href="/what-is-mounjaro">Mounjaro</IL> works best when paired
          with a structured lifestyle approach. During menopause, specific
          strategies are particularly effective:
        </GuideParagraph>

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          1. Strength Training
        </h3>
        <GuideParagraph>
          Resistance training is the single most effective lifestyle
          intervention for menopausal women on a weight loss programme.
          Strength training:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Prevents and reverses muscle loss (sarcopenia) accelerated by menopause",
            "Boosts resting metabolic rate — more muscle means more calories burned at rest",
            "Improves bone density, reducing osteoporosis risk",
          ]}
        />
        <GuideParagraph>
          Even 2–3 sessions per week of moderate resistance training makes a
          clinically meaningful difference. This does not require a gym—
          bodyweight exercises, resistance bands, or free weights at home are
          all effective.
        </GuideParagraph>

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          2. Protein-Rich Diet
        </h3>
        <GuideParagraph>
          Prioritising protein supports muscle retention and enhances
          Mounjaro's satiety effect. See our{" "}
          <IL href="/mounjaro-nutrition-guide-uk">
            Mounjaro nutrition guide
          </IL>{" "}
          for detailed dietary recommendations, including protein targets and
          food sources.
        </GuideParagraph>

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          3. Stress Management
        </h3>
        <GuideParagraph>
          Chronic stress elevates cortisol, which directly promotes visceral
          fat accumulation—the primary site of menopause-related fat gain.
          Strategies such as mindfulness, adequate sleep, and moderate aerobic
          exercise all help manage cortisol levels and support weight loss
          outcomes.
        </GuideParagraph>
        <GuideParagraph>
          Menopause does not have to mean inevitable weight gain. With a
          treatment like{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> and a targeted lifestyle
          approach—strength training, adequate protein, and stress management—
          sustainable weight loss is achievable. The key is combining clinical
          support with consistent lifestyle habits, rather than relying on
          either alone.
        </GuideParagraph>
      </GuideSection>

      <GuideKeyTakeaways
        items={[
          "Menopausal weight gain is driven by hormonal changes—particularly declining oestrogen—that alter fat distribution, metabolism, and insulin sensitivity.",
          "Mounjaro's dual GLP-1/GIP mechanism directly addresses the metabolic disruption of menopause, not just appetite.",
          "Clinical trials show 15–22% body weight loss with Mounjaro, with particular benefits for visceral (abdominal) fat reduction.",
          "HRT and Mounjaro can generally be used together—they address different aspects of menopause and have no established contraindication.",
          "Strength training, protein-rich diet, and stress management significantly amplify Mounjaro's results during menopause.",
        ]}
      />

      <GuideRelatedGuides guides={RELATED_GUIDES} />
      <GuideReferences items={REFERENCES} />

      <GuideDisclaimer>
        This guide is for informational purposes only and does not replace
        professional medical advice. Menopause is a complex physiological
        stage with highly individual variation. Always consult your GP or a
        menopause specialist before starting or combining any treatments,
        including{" "}
        <IL href="/what-is-mounjaro">Mounjaro</IL> and HRT.
      </GuideDisclaimer>

      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
