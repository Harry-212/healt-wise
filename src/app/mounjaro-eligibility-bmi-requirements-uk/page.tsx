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
    "Mounjaro UK Eligibility Guide (2026): BMI Rules, Requirements & Exceptions | Health Wise",
  description:
    "Who qualifies for Mounjaro in the UK? A clear breakdown of BMI thresholds, accepted health conditions, ethnicity adjustments, what happens when BMI drops, and how to restart.",
  openGraph: {
    title: "Mounjaro UK Eligibility Guide (2026): BMI Rules, Requirements & Exceptions",
    description:
      "Who qualifies for Mounjaro in the UK? A clear breakdown of BMI thresholds, accepted health conditions, ethnicity adjustments, and what happens when your BMI drops.",
    type: "article",
  },
  alternates: { canonical: "/mounjaro-eligibility-bmi-requirements-uk" },
};

const TOC = [
  { id: "bmi-requirements", label: "Mounjaro BMI Requirements (UK)" },
  { id: "health-conditions", label: "Accepted Health Conditions" },
  { id: "ethnicity", label: "Ethnicity & Lower BMI Thresholds" },
  { id: "bmi-drops", label: "What Happens When Your BMI Drops?" },
  { id: "how-long", label: "How Long Can You Stay on Mounjaro?" },
  { id: "restart", label: "Can You Restart Mounjaro?" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "What BMI do you need for Mounjaro in the UK?",
    a: "The standard UK eligibility criteria for Mounjaro (tirzepatide) require a BMI of 30 or above, or a BMI of 27–29.9 with at least one weight-related health condition (such as type 2 diabetes, high blood pressure, or high cholesterol). Some providers apply adjusted thresholds for certain ethnic groups at higher metabolic risk.",
  },
  {
    q: "Can I get Mounjaro with a BMI of 25?",
    a: "Standard NICE eligibility criteria do not cover BMI below 27. However, some private providers apply ethnicity-adjusted thresholds and may accept BMI ≥ 25 for individuals from South Asian, Black/African-Caribbean, or East Asian backgrounds, where metabolic risk is higher at lower BMI levels. Always confirm the specific eligibility policy with your chosen provider before booking a consultation.",
  },
  {
    q: "What health conditions make you eligible for Mounjaro with a BMI of 27–29?",
    a: "Accepted conditions include type 2 diabetes, high blood pressure (hypertension), high cholesterol (dyslipidaemia), obstructive sleep apnoea, cardiovascular disease, and non-alcoholic fatty liver disease (NAFLD). Some providers also accept PCOS, prediabetes, and weight-related mental health conditions as qualifying comorbidities.",
  },
  {
    q: "Can I continue Mounjaro if my BMI drops below the eligibility threshold?",
    a: "Many providers allow continued treatment below the standard BMI threshold, recognising obesity as a chronic condition that may require ongoing management. This varies by provider—ask your prescriber specifically about their continuation policy before your BMI approaches the threshold.",
  },
  {
    q: "How long can I stay on Mounjaro?",
    a: "NICE guidance (TA1026) recommends Mounjaro for up to two years initially, with continuation subject to clinical review. Some providers offer long-term maintenance programmes beyond this. The appropriate duration depends on your clinical response, ongoing health markers, and individual circumstances.",
  },
  {
    q: "Can I restart Mounjaro after stopping?",
    a: "Yes. Restarting Mounjaro is possible, but typically requires a new consultation, an updated BMI and health assessment, and a clinical review. Most providers will restart at a lower dose (2.5mg) and re-titrate gradually, regardless of the dose you were previously taking.",
  },
];

const REFERENCES = [
  {
    label: "NICE — Tirzepatide for managing overweight and obesity (TA1026)",
    description:
      "The definitive NICE technology appraisal covering eligibility criteria, clinical evidence, and duration of treatment for Mounjaro in the UK.",
    href: "https://www.nice.org.uk/guidance/ta1026",
  },
  {
    label: "NHS — BMI calculator and healthy weight",
    description:
      "NHS BMI calculator and guidance on interpreting BMI, including ethnic group adjustments.",
    href: "https://www.nhs.uk/live-well/healthy-weight/bmi-calculator/",
  },
  {
    label: "NICE — Weight management: lifestyle services for overweight or obese adults",
    description:
      "NICE guidance on ethnicity-adjusted BMI thresholds and tailored weight management approaches.",
    href: "https://www.nice.org.uk/guidance/ph53",
  },
  {
    label: "Mounjaro BMI cutoffs: why stopping too early backfires — Health Wise",
    description:
      "Our in-depth guide on the risks of BMI-based treatment cessation and the case for personalised long-term management.",
    href: "/mounjaro-bmi-cutoff-stopping-uk",
    external: false,
  },
  {
    label: "Mounjaro weight loss injection UK — full guide — Health Wise",
    description:
      "Complete guide to Mounjaro—mechanism, clinical results, eligibility, dosing, and UK pricing.",
    href: "/mounjaro-weight-loss-injection-uk",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/mounjaro-bmi-cutoff-stopping-uk",
    category: "Medications",
    title: "Mounjaro BMI Cutoffs: Why Stopping Too Early Can Backfire",
    description:
      "Why rigid BMI-based cessation is clinically flawed—and what better long-term management looks like.",
  },
  {
    href: "/mounjaro-prescription-timeline-uk",
    category: "Medications",
    title: "How Long Does It Take to Get Mounjaro in the UK?",
    description:
      "From consultation to delivery—a step-by-step breakdown of the UK Mounjaro prescription process.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Mounjaro UK Eligibility Guide (2026): BMI Rules, Requirements & Exceptions",
  description:
    "Who qualifies for Mounjaro in the UK? A clear breakdown of BMI thresholds, accepted health conditions, ethnicity adjustments, and what happens when your BMI drops.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://health-wise.co.uk/mounjaro-eligibility-bmi-requirements-uk",
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

export default function GuideMounjaroEligibility() {
  return (
    <GuideLayout
      category="Medications"
      categorySlug="medications"
      title="Mounjaro UK Eligibility Guide (2026): BMI Rules, Requirements & Exceptions"
      description="Understanding who qualifies for Mounjaro in the UK is more nuanced than a single BMI number. This guide covers the standard criteria, accepted health conditions, ethnicity adjustments, and what happens to your prescription as your weight changes."
      readTime="4 min read"
      lastUpdated="April 2026"
      toc={TOC}
      internalLinks={internalLinksFor("guideMounjaroEligibility")}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      <GuideSection id="bmi-requirements" heading="Mounjaro BMI Requirements (UK)">
        <GuideParagraph>
          In the UK, access to{" "}
          <IL href="/what-is-mounjaro">Mounjaro (tirzepatide)</IL> for weight
          management is governed by{" "}
          <EL href="https://www.nice.org.uk/guidance/ta1026">
            NICE technology appraisal TA1026
          </EL>
          . While Mounjaro is available as a private prescription, most
          responsible providers follow these evidence-based clinical guidelines.
        </GuideParagraph>
        <GuideTable
          headers={["BMI", "Eligibility"]}
          rows={[
            { cells: ["≥ 30", "Eligible (obesity)"] },
            { cells: ["27–29.9 + related condition", "Eligible (overweight with comorbidity)"] },
            { cells: ["< 27 (standard)", "Not eligible under NICE criteria"] },
            { cells: ["≥ 25 (ethnicity-adjusted)", "Eligible at some providers for high-risk ethnic groups"] },
          ]}
        />
        <GuideCallout variant="info">
          BMI is a starting point—not the full picture. A responsible prescriber
          will consider your weight history, metabolic markers, and health
          conditions alongside BMI before issuing a prescription. See our
          guide on{" "}
          <IL href="/mounjaro-bmi-cutoff-stopping-uk">
            BMI cutoffs and why rigid thresholds can backfire
          </IL>
          .
        </GuideCallout>
      </GuideSection>

      <GuideSection id="health-conditions" heading="Accepted Health Conditions (Comorbidities)">
        <GuideParagraph>
          If your BMI is between 27 and 29.9, you need at least one
          weight-related health condition to qualify. The following are
          commonly accepted:
        </GuideParagraph>

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          Commonly accepted conditions
        </h3>
        <GuideBulletList
          items={[
            "Type 2 diabetes or prediabetes",
            "High blood pressure (hypertension)",
            "High cholesterol (dyslipidaemia)",
            "Obstructive sleep apnoea",
            "Cardiovascular disease (existing or high risk)",
            "Non-alcoholic fatty liver disease (NAFLD / MASLD)",
          ]}
        />

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          Conditions accepted by some providers
        </h3>
        <GuideBulletList
          items={[
            "Polycystic ovary syndrome (PCOS) — with associated weight and metabolic challenges",
            "Weight-related joint pain (osteoarthritis)",
            "Weight-related mental health conditions — depression or anxiety significantly worsened by weight",
          ]}
        />
        <GuideParagraph>
          Eligibility policies vary between providers. Always confirm the
          specific criteria with your chosen pharmacy or clinic before booking
          a consultation.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="ethnicity" heading="Ethnicity & Lower BMI Thresholds">
        <GuideParagraph>
          Standard BMI thresholds were originally derived from studies in
          predominantly white European populations. Research consistently shows
          that people from certain ethnic backgrounds face higher metabolic
          risk at lower BMI levels—meaning the standard thresholds
          underestimate health risk for these groups.
        </GuideParagraph>
        <GuideParagraph>
          The{" "}
          <EL href="https://www.nhs.uk/live-well/healthy-weight/bmi-calculator/">
            NHS BMI calculator
          </EL>{" "}
          and{" "}
          <EL href="https://www.nice.org.uk/guidance/ph53">NICE guidance</EL>{" "}
          both recognise lower BMI thresholds for the following groups:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>South Asian backgrounds</strong> (Indian, Pakistani,
              Bangladeshi, Sri Lankan) — elevated risk of type 2 diabetes and
              cardiovascular disease at BMI ≥ 23; some providers use ≥ 25 as
              the Mounjaro eligibility threshold.
            </>,
            <>
              <strong>Black and African-Caribbean backgrounds</strong> —
              higher cardiovascular and diabetes risk at lower BMI; adjusted
              thresholds of ≥ 25 are used by some providers.
            </>,
            <>
              <strong>East and South-East Asian backgrounds</strong> — similar
              to South Asian populations, higher metabolic risk at lower BMI.
            </>,
          ]}
        />
        <GuideCallout variant="tip">
          If you are from one of these groups and your BMI is between 25 and
          29.9, ask your provider specifically about ethnicity-adjusted
          eligibility. Not all providers apply these thresholds—but those
          following best practice should.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="bmi-drops" heading="What Happens When Your BMI Drops?">
        <GuideParagraph>
          A common concern for patients making progress on{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> is what happens when
          their BMI falls below the standard eligibility threshold of 27 or 30.
        </GuideParagraph>
        <GuideParagraph>
          The approach varies between providers, but progressive clinical
          practice allows:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Continued treatment below the BMI threshold — recognising obesity as a chronic condition requiring ongoing management",
            "Maintenance dosing — a lower dose (e.g. 2.5mg or 5mg) to sustain results without full active treatment",
            "Transfer to a new provider with a maintenance programme — if your current provider stops treatment at a threshold",
          ]}
        />
        <GuideParagraph>
          For a full clinical discussion of why abrupt cessation based on BMI
          is problematic—and the evidence for weight regain—see our guide:{" "}
          <IL href="/mounjaro-bmi-cutoff-stopping-uk">
            Mounjaro BMI Cutoffs: Why Stopping Too Early Can Backfire
          </IL>
          .
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="how-long" heading="How Long Can You Stay on Mounjaro?">
        <GuideParagraph>
          <EL href="https://www.nice.org.uk/guidance/ta1026">
            NICE guidance (TA1026)
          </EL>{" "}
          recommends{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> for up to two years
          initially, subject to clinical review at regular intervals. This is
          not a fixed endpoint—it is a review point where continued
          prescription is assessed based on ongoing clinical benefit.
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Standard providers: up to 2 years with periodic clinical reviews",
            "Progressive providers: long-term maintenance plans beyond 2 years where clinically appropriate",
            "Regular progress reviews required — weight, metabolic markers, and patient-reported outcomes",
          ]}
        />
        <GuideCallout variant="info">
          The two-year NICE recommendation is based on the duration of clinical
          trial data available at the time of appraisal—not a clinical
          argument for stopping treatment at that point. Long-term prescribing
          where appropriate is consistent with how other chronic conditions are
          managed.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="restart" heading="Can You Restart Mounjaro?">
        <GuideParagraph>
          Yes—restarting{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> after a break is
          possible. Most providers require:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "A new medical consultation — to reassess eligibility and health status",
            "Updated BMI and relevant health markers",
            "Medical review of any changes since previous treatment",
          ]}
        />
        <GuideParagraph>
          When restarting, providers will almost always begin at the lowest
          dose (2.5mg) and re-titrate gradually—regardless of the dose you
          were previously taking. This reduces the risk of side effects and
          allows your body to readapt.
        </GuideParagraph>
        <GuideParagraph>
          If you are considering switching providers to restart or continue
          treatment, see our guide on{" "}
          <IL href="/switching-pharmacies-mounjaro-wegovy-uk">
            switching pharmacies for Mounjaro or Wegovy
          </IL>
          .
        </GuideParagraph>
      </GuideSection>

      <GuideKeyTakeaways
        items={[
          "Standard UK eligibility: BMI ≥ 30, or BMI 27–29.9 with at least one weight-related health condition.",
          "Ethnicity-adjusted thresholds (BMI ≥ 25) apply for South Asian, Black/African-Caribbean, and East Asian groups at higher metabolic risk.",
          "Many providers allow continued treatment below BMI thresholds—ask your prescriber about their continuation and maintenance policy.",
          "NICE guidance recommends Mounjaro for up to two years with review—long-term prescribing is appropriate where clinically justified.",
          "Restarting after a break requires a new consultation and re-titration from 2.5mg.",
        ]}
      />

      <GuideRelatedGuides guides={RELATED_GUIDES} />
      <GuideReferences items={REFERENCES} />

      <GuideDisclaimer>
        This guide reflects UK eligibility criteria and clinical guidance as of
        April 2026. Eligibility policies vary between providers and may change.
        Always confirm the specific criteria with your chosen prescriber. This
        guide does not constitute medical advice.
      </GuideDisclaimer>

      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
