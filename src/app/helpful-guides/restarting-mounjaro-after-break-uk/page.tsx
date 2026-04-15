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
  GuideTable,
  IL,
  EL,
} from "@/components/guide/GuideLayout";

export const metadata = buildGuideShareMetadata({
  slug: "restarting-mounjaro-after-break-uk",
  title: "Restarting Mounjaro After a Break: UK Guide (2026)",
  description: "Restarting Mounjaro after a gap is often possible—even if your BMI has dropped. Here's how break length affects your restart dose, what providers need, and how to do it safely.",
  openGraphTitle: "Restarting Mounjaro After a Break: UK Guide (2026)",
  openGraphDescription: "Restarting Mounjaro after a gap is often possible—even if your BMI has dropped. Here's how break length affects restart dose, what providers need, and how to do it safely.",
});


const TOC = [
  { id: "can-you-restart", label: "Can You Restart Mounjaro?" },
  { id: "break-length", label: "How Break Length Affects Restarting" },
  { id: "lower-bmi", label: "Restarting with a Lower BMI" },
  { id: "steps", label: "Steps to Restart Safely" },
  { id: "pharmacy-requirements", label: "What Pharmacies Need" },
  { id: "switching-provider", label: "Switching Provider to Restart" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "Can I restart Mounjaro after stopping?",
    a: "Yes—restarting Mounjaro after a break is generally possible, subject to a new clinical assessment. Even if your BMI has dropped below the original eligibility threshold, many providers will consider your treatment history and previous results. The key requirement is a new medical review.",
  },
  {
    q: "What dose should I restart Mounjaro at after a break?",
    a: "It depends on the length of your break. For breaks of 1–2 weeks, you may be able to continue at the same dose. For 2–4 weeks, restarting one dose level lower is common. For breaks of 4 weeks or more, most clinicians recommend restarting at the lowest dose (2.5mg) and re-titrating gradually. This reduces the risk of side effects.",
  },
  {
    q: "Will my BMI affect whether I can restart Mounjaro?",
    a: "Possibly, but not definitively. Standard NICE eligibility criteria require BMI ≥ 30 (or ≥ 27 with a related condition). However, many providers take a more flexible approach for previous patients, considering weight history, risk of regain, and prior treatment success. Bringing documentation of your previous treatment significantly helps.",
  },
  {
    q: "Do I need a new prescription to restart Mounjaro?",
    a: "Yes—you will need a new prescription from a registered UK prescriber. Existing prescriptions cannot be reactivated; a new clinical consultation is required. Most providers offer this via an online questionnaire or video consultation.",
  },
  {
    q: "Why did I regain weight after stopping Mounjaro?",
    a: "Weight regain after stopping Mounjaro is a well-documented and expected physiological response. The SURMOUNT-4 trial showed that patients who discontinued tirzepatide regained approximately two-thirds of their lost weight within 12 months. Hunger returns to its biological set point as the medication's appetite suppression reverses. This is why long-term maintenance treatment is often clinically appropriate.",
  },
  {
    q: "Can I restart Mounjaro at the same pharmacy or do I need a new one?",
    a: "You can try to restart with your original pharmacy—but their eligibility requirements may have changed, or you may no longer meet their BMI criteria. If your original provider cannot accommodate a restart, switching to a provider with a more flexible approach to previous patients is a reasonable option.",
  },
];

const REFERENCES = [
  {
    label: "SURMOUNT-4 trial — Weight regain after stopping tirzepatide",
    description:
      "Clinical trial demonstrating that stopping tirzepatide led to ~14% weight regain within 12 months, supporting restart and maintenance prescribing.",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2311017",
  },
  {
    label: "NICE — Tirzepatide for managing overweight and obesity (TA1026)",
    description:
      "NICE guidance on tirzepatide eligibility, treatment duration, and continuation criteria.",
    href: "https://www.nice.org.uk/guidance/ta1026",
  },
  {
    label: "Mounjaro (tirzepatide) SmPC — Dosing guidance",
    description:
      "Official UK prescribing information for Mounjaro, including dose initiation and reinitiation guidance.",
    href: "https://www.medicines.org.uk/emc/product/15481",
  },
  {
    label: "Mounjaro eligibility BMI guide — Health Wise",
    description:
      "Full UK eligibility criteria for Mounjaro—BMI thresholds, conditions, ethnicity adjustments, and what happens when BMI drops.",
    href: "/helpful-guides/mounjaro-eligibility-bmi-requirements-uk",
    external: false,
  },
  {
    label: "Switching pharmacies for Mounjaro or Wegovy — Health Wise",
    description:
      "How to find a new regulated provider if your current pharmacy cannot support a restart.",
    href: "/helpful-guides/switching-pharmacies-mounjaro-wegovy-uk",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/mounjaro-eligibility-bmi-requirements-uk",
    category: "Medications",
    title: "Mounjaro UK Eligibility Guide: BMI Rules, Requirements & Exceptions",
    description:
      "Full breakdown of eligibility criteria—including what applies when your BMI has changed.",
  },
  {
    href: "/helpful-guides/mounjaro-bmi-cutoff-stopping-uk",
    category: "Medications",
    title: "Mounjaro BMI Cutoffs: Why Stopping Too Early Can Backfire",
    description:
      "Why rigid BMI-based cessation is flawed—and how to make the case for continued treatment.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Restarting Mounjaro After a Break: UK Guide (2026)",
  description:
    "Restarting Mounjaro after a gap is often possible—even if your BMI has dropped. Here's how break length affects restart dose, what providers need, and how to do it safely.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteOrigin()}${helpfulGuidePath("restarting-mounjaro-after-break-uk")}`,
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

export default function GuideRestartingMounjaro() {
  return (
    <GuideLayout
      slug="restarting-mounjaro-after-break-uk"
      category="Medications"
      categorySlug="medications"
      title="Restarting Mounjaro After a Break: UK Guide (2026)"
      description="Many people in the UK don't realise that restarting Mounjaro after a break is often possible—even if their BMI has changed. The dose you restart at, what your provider needs, and how to do it safely all depend on how long you've been off treatment."
      readTime="3 min read"
      lastUpdated="April 2026"
      toc={TOC}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      <GuideSection id="can-you-restart" heading="Can You Restart Mounjaro?">
        <GuideParagraph>
          Yes—restarting{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> after a break is
          generally possible under clinical supervision. The weight regain that
          follows stopping GLP-1 medications—documented clearly in the{" "}
          <EL href="https://www.nejm.org/doi/full/10.1056/NEJMoa2311017">
            SURMOUNT-4 trial
          </EL>{" "}
          —supports the clinical case for restarting when long-term weight
          management is the goal.
        </GuideParagraph>
        <GuideParagraph>
          Standard eligibility applies:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "BMI ≥ 30 (obesity), or",
            "BMI ≥ 27 with at least one related health condition (e.g. type 2 diabetes, hypertension)",
          ]}
        />
        <GuideParagraph>
          However, many providers take a more flexible approach for previous
          patients—particularly those who can demonstrate prior successful
          treatment. For the full eligibility picture, see our{" "}
          <IL href="/helpful-guides/mounjaro-eligibility-bmi-requirements-uk">
            Mounjaro eligibility guide
          </IL>
          .
        </GuideParagraph>
        <GuideCallout variant="info">
          A new prescription and clinical consultation are always required.
          Existing prescriptions cannot simply be reactivated—your provider
          must conduct a fresh assessment before issuing a new prescription.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="break-length" heading="How Break Length Affects Restarting">
        <GuideParagraph>
          The length of your break determines the appropriate restart dose.
          This is consistent with the{" "}
          <EL href="https://www.medicines.org.uk/emc/product/15481">
            Mounjaro SmPC
          </EL>{" "}
          guidance on missed doses and with standard clinical practice:
        </GuideParagraph>
        <GuideTable
          headers={["Break Length", "Restart Approach"]}
          rows={[
            { cells: ["1–2 weeks", "May continue at the same dose"] },
            { cells: ["2–4 weeks", "Often restart one dose level lower"] },
            { cells: ["4+ weeks", "Restart at 2.5mg and re-titrate from the beginning"] },
          ]}
        />
        <GuideParagraph>
          Starting at a lower dose after a break—or returning to the lowest
          dose—significantly reduces the risk of gastrointestinal side effects
          during readaptation. Do not attempt to skip ahead to your previous
          dose without clinical guidance.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="lower-bmi" heading="Restarting with a Lower BMI">
        <GuideParagraph>
          If your BMI has dropped below the standard threshold during your
          break—or even during your previous treatment—many providers will
          still consider restarting you on{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL>, provided you can
          demonstrate:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Evidence of previous prescriptions — confirmation you were legitimately treated before",
            "Weight loss progress and history — showing that treatment was effective and regain is occurring",
            "Relevant medical history — existing conditions that initially supported eligibility may still apply",
          ]}
        />
        <GuideParagraph>
          This reflects the growing recognition of obesity as a chronic,
          relapsing condition. A patient who lost weight on Mounjaro and
          regained it after stopping is arguably a stronger clinical case for
          restart than a new patient—the medication has already demonstrated
          it works for them. See our guide on{" "}
          <IL href="/helpful-guides/mounjaro-bmi-cutoff-stopping-uk">
            why BMI cutoffs alone are a flawed basis for stopping treatment
          </IL>
          .
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="steps" heading="Steps to Restart Safely">
        <GuideBulletListRich
          items={[
            <>
              <strong>Step 1 — Speak to a clinician</strong>: contact your
              original provider or a new regulated pharmacy. Explain that you
              are seeking to restart after a break and provide as much context
              as possible about your previous treatment.
            </>,
            <>
              <strong>Step 2 — Provide your treatment history</strong>: gather
              previous prescription labels, pen box photos, order confirmations,
              and any clinical notes from your previous treatment. This
              significantly strengthens your case for lower-BMI restart.
            </>,
            <>
              <strong>Step 3 — Complete a new medical consultation</strong>:
              this will assess your current BMI, health markers, and overall
              suitability for restarting. Most providers conduct this online.
            </>,
            <>
              <strong>Step 4 — Restart at the appropriate dose</strong>:
              follow the guidance in the table above based on how long your
              break has been. Never skip to your previous dose without clinical
              approval.
            </>,
            <>
              <strong>Step 5 — Monitor progress and side effects</strong>:
              restarting can feel similar to starting treatment for the first
              time. Be aware that gastrointestinal side effects may return,
              particularly at the 2.5mg dose.
            </>,
          ]}
        />
      </GuideSection>

      <GuideSection id="pharmacy-requirements" heading="What Pharmacies Need">
        <GuideParagraph>
          Different providers have different requirements for restarting
          patients. Common requests include:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Updated BMI and current weight — some providers require a recent weight measurement",
            "Prescription history — photos of previous pen boxes, prescription labels, or order confirmations",
            "Brief medical history — particularly any conditions that supported your original eligibility",
            "Blood tests — some providers request HbA1c or lipid panel results, particularly if considerable time has elapsed",
          ]}
        />
        <GuideParagraph>
          Always confirm the specific requirements with your chosen provider
          before booking a consultation—requirements vary and being prepared
          speeds up the process significantly.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="switching-provider" heading="Switching Provider to Restart">
        <GuideParagraph>
          If your original pharmacy cannot support a restart—for example,
          because their BMI eligibility criteria do not accommodate patients
          below threshold—switching to a different registered provider is a
          practical option.
        </GuideParagraph>
        <GuideParagraph>
          When evaluating a new provider, look specifically for:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Explicit policies on restarting patients — do they accept treatment history documentation?",
            "Flexible BMI criteria for previous patients — particularly important if your BMI has changed",
            "Long-term prescribing support — can they support your treatment beyond the initial restart phase?",
            "GPhC registration — verified before placing any order",
          ]}
        />
        <GuideParagraph>
          For a step-by-step guide to the pharmacy switching process—including
          what documents to prepare—see:{" "}
          <IL href="/helpful-guides/switching-pharmacies-mounjaro-wegovy-uk">
            Switching Pharmacies for Mounjaro or Wegovy in the UK
          </IL>
          .
        </GuideParagraph>
      </GuideSection>

      <GuideKeyTakeaways
        items={[
          "Restarting Mounjaro after a break is generally possible—even with a lower BMI—provided you can evidence your previous treatment.",
          "Break length determines restart dose: 1–2 weeks may continue same dose; 2–4 weeks restart one level lower; 4+ weeks restart at 2.5mg.",
          "A new clinical consultation and prescription are always required—existing prescriptions cannot be reactivated.",
          "Gather your previous prescription labels, pen box photos, and order history before approaching a provider.",
          "If your original pharmacy cannot support a restart, switching to a provider with flexible criteria is a valid option.",
        ]}
      />

      <GuideRelatedGuides guides={RELATED_GUIDES} />
      <GuideReferences items={REFERENCES} />

      <GuideDisclaimer>
        This guide is for informational purposes only. Restarting prescription
        medication should always be done under clinical supervision. Do not
        self-prescribe or resume treatment without a valid new prescription
        from a GPhC-registered UK provider.
      </GuideDisclaimer>

      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
