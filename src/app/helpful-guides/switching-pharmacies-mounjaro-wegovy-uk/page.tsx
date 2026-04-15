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
  IL,
  EL,
} from "@/components/guide/GuideLayout";

export const metadata = buildGuideShareMetadata({
  slug: "switching-pharmacies-mounjaro-wegovy-uk",
  title: "Switching Pharmacies for Mounjaro or Wegovy in the UK: Step-by-Step Guide",
  description: "Want to switch pharmacy for your Mounjaro or Wegovy prescription? Here's how to compare regulated providers, what documents you need, and how to switch safely.",
  openGraphTitle: "Switching Pharmacies for Mounjaro or Wegovy in the UK: Step-by-Step Guide",
});


const TOC = [
  { id: "why-switch", label: "Why People Switch Pharmacies" },
  { id: "eligibility", label: "Check Eligibility Before You Switch" },
  { id: "how-to-choose", label: "How to Choose a New Pharmacy" },
  { id: "what-youll-need", label: "What You'll Need to Switch" },
  { id: "consultation", label: "Consultation Process Explained" },
  { id: "after-switch", label: "After You Switch" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "Can I switch pharmacies for Mounjaro mid-treatment?",
    a: "Yes. You can switch pharmacy at any point during your treatment. Most providers accept patients who are already established on a GLP-1 medication. You will typically need to provide evidence of your current prescription and treatment history.",
  },
  {
    q: "Do I need a new prescription when switching pharmacies?",
    a: "Yes—a new pharmacy will need to issue its own prescription following a medical review. In most cases this is a brief online consultation or questionnaire. Your existing prescription from another provider cannot be transferred directly.",
  },
  {
    q: "Will switching pharmacies affect my dosing schedule?",
    a: "It should not, provided the transition is smooth. Plan the switch so there is no gap in supply—ideally initiate the process with the new pharmacy before your current stock runs out.",
  },
  {
    q: "How do I know if a new pharmacy is legitimate?",
    a: "Check that the pharmacy is registered with the General Pharmaceutical Council (GPhC) using their online register. All legally operating UK pharmacies—local and online—must be GPhC-registered. The pharmacy's website should also display the EU common logo (a green cross with blue stars) if they sell prescription medicines online.",
  },
  {
    q: "What documents do I need to switch pharmacies?",
    a: "Typically: photos of your injection pen box (showing the medication name and dose), your current prescription label, and any previous order confirmations. Some providers may also ask for your BMI, medical history, and GP details.",
  },
  {
    q: "Is it safe to switch from a local to an online pharmacy?",
    a: "Yes, provided the online pharmacy is GPhC-registered and employs qualified prescribers. The main trade-off is losing face-to-face support—consider whether you need ongoing clinical guidance before switching to a fully online provider.",
  },
];

const REFERENCES = [
  {
    label: "GPhC — Find a registered pharmacy",
    description:
      "The official General Pharmaceutical Council register to verify any UK pharmacy before using their services.",
    href: "https://www.pharmacyregulation.org/registers/pharmacy",
  },
  {
    label: "MHRA — Buying prescription medicines online safely",
    description:
      "MHRA guidance on how to identify legitimate online pharmacies and protect yourself from counterfeit medications.",
    href: "https://www.gov.uk/guidance/medicines-and-online-pharmacies",
  },
  {
    label: "NICE — Tirzepatide for managing overweight and obesity (TA1026)",
    description:
      "NICE technology appraisal confirming eligibility criteria for Mounjaro (tirzepatide) in the UK.",
    href: "https://www.nice.org.uk/guidance/ta1026",
  },
  {
    label: "NHS — Wegovy prescribing criteria",
    description:
      "NHS information on who is eligible for GLP-1 weight management treatments including Wegovy in England.",
    href: "https://www.nhs.uk/medicines/semaglutide-weight-loss/",
  },
  {
    label: "How we verify UK pharmacies — Health Wise",
    description:
      "Our GPhC-based pharmacy verification process and what every listed provider must meet.",
    href: "/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards",
    external: false,
  },
  {
    label: "Mounjaro price comparison UK — Health Wise",
    description:
      "Up-to-date price comparison across verified UK Mounjaro providers.",
    href: "/mounjaro-price-comparison",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/local-vs-online-pharmacies-mounjaro-uk",
    category: "Pharmacy Safety",
    title: "Local vs Online Pharmacies for Mounjaro: What's the Better Choice?",
    description:
      "An honest breakdown of the differences between local and online pharmacy services for Mounjaro patients.",
  },
  {
    href: "/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards",
    category: "Pharmacy Safety",
    title: "How We Verify UK Pharmacies: GPhC Checks & Safety Standards",
    description:
      "Every pharmacy we list is checked against the GPhC register. Here's how our verification process works.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Switching Pharmacies for Mounjaro or Wegovy in the UK: Step-by-Step Guide",
  description:
    "Want to switch pharmacy for your Mounjaro or Wegovy prescription? Here's how to compare regulated providers, what documents you need, and how to switch safely.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteOrigin()}${helpfulGuidePath("switching-pharmacies-mounjaro-wegovy-uk")}`,
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

export default function GuideSwitchingPharmacy() {
  return (
    <GuideLayout
      slug="switching-pharmacies-mounjaro-wegovy-uk"
      category="Pharmacy Safety"
      categorySlug="pharmacy-safety"
      title="Switching Pharmacies for Mounjaro or Wegovy in the UK: Step-by-Step Guide"
      description="Switching pharmacies for your Mounjaro or Wegovy prescription is increasingly common in the UK. Here's how to do it safely—covering eligibility, what documents you need, how to choose a regulated provider, and what to expect."
      readTime="4 min read"
      lastUpdated="April 2026"
      toc={TOC}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      <GuideSection id="why-switch" heading="Why People Switch Pharmacies">
        <GuideParagraph>
          Switching pharmacies for{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> or{" "}
          <IL href="/what-is-wegovy">Wegovy</IL> is increasingly common in the
          UK. Patients may find a better-suited provider as the market matures
          and more regulated options become available.
        </GuideParagraph>
        <GuideParagraph>
          Typical reasons people switch include:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Lower treatment costs — prices vary significantly between providers. See our Mounjaro price comparison for current UK rates.",
            "Faster prescription processing — some providers turn around consultations and dispatch within 24 hours.",
            "Better clinical support — more responsive clinicians or pharmacist access.",
            "Easier online access — streamlined repeat ordering and digital consultation options.",
            "Stock availability — some pharmacies have more consistent supply of higher doses.",
          ]}
        />
      </GuideSection>

      <GuideSection id="eligibility" heading="Check Eligibility Before You Switch">
        <GuideParagraph>
          Before moving to a new provider, confirm you still meet UK prescribing
          criteria. Even if you are already established on treatment, a new
          pharmacy will conduct its own medical review.
        </GuideParagraph>
        <GuideParagraph>
          Standard{" "}
          <EL href="https://www.nice.org.uk/guidance/ta1026">
            NICE eligibility criteria
          </EL>{" "}
          for Mounjaro include:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "BMI ≥ 30 (obesity), or",
            "BMI ≥ 27 with at least one weight-related health condition (e.g. type 2 diabetes, hypertension)",
          ]}
        />
        <GuideParagraph>
          Some pharmacies may accept:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Lower BMI thresholds adjusted for ethnicity-based risk factors (consistent with NICE guidance)",
            "Existing patients continuing a stable maintenance dose, with appropriate clinical justification",
          ]}
        />
        <GuideCallout variant="tip">
          Always review a new provider's eligibility page before booking a
          consultation. If you do not meet their stated criteria, you may be
          declined—wasting time and potentially a consultation fee.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="how-to-choose" heading="How to Choose a New Pharmacy">
        <GuideParagraph>
          Not all pharmacies offering{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> or{" "}
          <IL href="/what-is-wegovy">Wegovy</IL> are equal. When comparing
          providers, consider:
        </GuideParagraph>

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          1. Regulation
        </h3>
        <GuideBulletListRich
          items={[
            <>
              Ensure the pharmacy is registered with the{" "}
              <EL href="https://www.pharmacyregulation.org/registers/pharmacy">
                General Pharmaceutical Council (GPhC)
              </EL>
              —this is the legal minimum for operating in the UK.
            </>,
            <>
              See{" "}
              <IL href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                how we verify pharmacies
              </IL>{" "}
              for the checks Health Wise applies before listing any provider.
            </>,
          ]}
        />

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          2. Pricing Transparency
        </h3>
        <GuideBulletList
          items={[
            "Medication cost per pen/dose — compare like-for-like",
            "Delivery fees — some providers charge separately",
            "Consultation fees — some platforms charge per medical review",
            "Hidden charges — check for auto-renewal or subscription lock-ins",
          ]}
        />

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          3. Service Quality
        </h3>
        <GuideBulletList
          items={[
            "Consultation process — video, questionnaire, or hybrid?",
            "Response time — how quickly does the clinical team respond to queries?",
            "Customer reviews — Trustpilot ratings and patient feedback",
            "Support for side effects — is clinical advice available if you experience issues?",
          ]}
        />
        <GuideCallout variant="warning">
          Be cautious of providers that do not require a medical consultation,
          offer unusually low prices, or are not listed on the{" "}
          <EL href="https://www.pharmacyregulation.org/registers/pharmacy">
            GPhC register
          </EL>
          . These are red flags for unregulated or counterfeit supply.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="what-youll-need" heading="What You'll Need to Switch">
        <GuideParagraph>
          Most UK pharmacies require documentation to confirm your existing
          treatment before issuing a new prescription. Preparing these in
          advance significantly speeds up the process:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Photos of your current injection pen box — showing the medication name (e.g. Mounjaro or Wegovy) and dose strength",
            "Prescription label — from your existing provider, showing the dispensing date and prescriber",
            "Previous order confirmation — email or portal screenshot from your current pharmacy",
            "Your BMI and relevant health details — most providers ask for current weight, height, and any related conditions",
            "GP details — for mandatory GP notification (see our guide on GP notification for Mounjaro)",
          ]}
        />
        <GuideParagraph>
          These documents are typically uploaded through the new pharmacy's
          secure patient portal during your consultation.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="consultation" heading="Consultation Process Explained">
        <GuideParagraph>
          All UK pharmacies are required to conduct a medical review before
          issuing a prescription for{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> or{" "}
          <IL href="/what-is-wegovy">Wegovy</IL>. This applies even if you
          are switching—not starting fresh.
        </GuideParagraph>
        <GuideParagraph>
          You will typically need to:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Provide your current BMI and health details via a questionnaire or portal",
            "Share relevant medical history, including any existing conditions and current medications",
            "Upload supporting documents confirming your existing treatment",
            "Complete a video consultation in some cases — particularly for first-time prescriptions at regulated telehealth providers",
          ]}
        />
        <GuideCallout variant="info">
          The consultation is not just a formality. A qualified prescriber
          reviews your information and makes a clinical decision. If a provider
          issues a prescription without any review, that is a regulatory
          concern.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="after-switch" heading="After You Switch">
        <GuideParagraph>
          Once your new prescription is approved and your first order has been
          dispatched, keep the following in mind:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>Continue tracking your weight and medication</strong> —
              maintain a consistent record to share with your clinician at
              follow-up reviews.
            </>,
            <>
              <strong>Book follow-ups as needed</strong> — your new pharmacy
              will have its own review schedule. Understand when your next
              clinical check is due.
            </>,
            <>
              <strong>Monitor any changes in side effects or progress</strong>{" "}
              — switching pharmacy does not change the medication, but
              differences in pen device or storage handling may occasionally
              affect experience. See our guide on{" "}
              <IL href="/helpful-guides/mounjaro-delivery-storage-uk">
                Mounjaro delivery and storage
              </IL>
              .
            </>,
            <>
              <strong>Confirm GP notification</strong> — your new pharmacy
              should notify your GP when dispensing. See{" "}
              <IL href="/helpful-guides/mounjaro-gp-notification-uk">
                why GP notification matters
              </IL>
              .
            </>,
          ]}
        />
      </GuideSection>

      <GuideKeyTakeaways
        items={[
          "Switching pharmacies for Mounjaro or Wegovy is straightforward—but always choose a GPhC-registered provider.",
          "You will need a new medical consultation and prescription—existing prescriptions cannot be transferred between pharmacies.",
          "Prepare your injection pen photos, prescription label, and order confirmation in advance to speed up the process.",
          "Compare providers on regulation, pricing transparency, and service quality—not price alone.",
          "After switching, confirm GP notification and keep tracking your progress consistently.",
        ]}
      />

      <GuideRelatedGuides guides={RELATED_GUIDES} />
      <GuideReferences items={REFERENCES} />

      <GuideDisclaimer>
        This guide is for informational purposes only. Always verify that any
        pharmacy is GPhC-registered and that prescriptions are issued by
        qualified clinicians. Do not obtain prescription medications without a
        valid prescription from a registered UK prescriber.
      </GuideDisclaimer>

      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
