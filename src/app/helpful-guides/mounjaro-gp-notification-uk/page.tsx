import { helpfulGuidePath } from "@/lib/helpful-guide-slugs";
import { siteOrigin } from "@/lib/seo/site-origin";
import { buildGuideShareMetadata } from "@/lib/seo/guide-share-metadata";
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

export const metadata = buildGuideShareMetadata({
  slug: "mounjaro-gp-notification-uk",
  title: "Do UK Pharmacies Inform Your GP About Mounjaro? Complete Guide",
  description: "Yes—UK pharmacies are required to notify your GP when dispensing Mounjaro. Here's why it happens, how the process works, and what it means for your medical records.",
  openGraphTitle: "Do UK Pharmacies Inform Your GP About Mounjaro? Complete Guide",
});


const TOC = [
  { id: "short-answer", label: "Short Answer: Yes" },
  { id: "why-happens", label: "Why This Happens" },
  { id: "process", label: "How the Process Works" },
  { id: "opt-out", label: "Can You Opt Out?" },
  { id: "risks", label: "Risks If Your GP Is Not Informed" },
  { id: "timeline", label: "How Long Does It Take?" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "Do UK pharmacies tell my GP I'm taking Mounjaro?",
    a: "Yes. UK pharmacies are required to notify your GP when dispensing high-risk prescription medications, including Mounjaro (tirzepatide). This applies to both local and registered online pharmacies. The notification is a patient safety requirement, not a matter of choice.",
  },
  {
    q: "Can I stop the pharmacy from telling my GP?",
    a: "No. Because Mounjaro is classified as a high-risk prescription-only medication (POM), notification of the dispensing clinician or GP is mandatory under UK pharmacy regulation. Patients cannot opt out of this process.",
  },
  {
    q: "What information does the pharmacy share with my GP?",
    a: "Pharmacies typically share: the name of the medication (Mounjaro/tirzepatide), the dose prescribed, the prescribing clinician's details, and the date of dispensing. They do not typically share your full consultation notes unless requested.",
  },
  {
    q: "How long does it take for my GP to be notified?",
    a: "Most pharmacies using digital notification systems complete the process within 24–48 hours. For pharmacies using manual update processes, it may take 3–5 working days. Your GP's record should reflect your Mounjaro treatment within approximately one week of dispensing.",
  },
  {
    q: "What if I got my Mounjaro prescription from an online pharmacy?",
    a: "Regulated online pharmacies registered with the GPhC are subject to the same notification requirements as local pharmacies. They are required to share relevant dispensing information with your GP regardless of how the prescription was obtained.",
  },
  {
    q: "Is my health information kept confidential?",
    a: "Yes. All communication between pharmacies and GPs is conducted through secure clinical systems and is subject to strict NHS and GDPR data protection requirements. Your information is not shared beyond your clinical care team without your explicit consent.",
  },
];

const REFERENCES = [
  {
    label: "GPhC — Standards for registered pharmacies",
    description:
      "The General Pharmaceutical Council's standards for safe and effective practice, including clinical communication requirements.",
    href: "https://www.pharmacyregulation.org/standards/standards-registered-pharmacies",
  },
  {
    label: "NHS — How your health information is used",
    description:
      "NHS guidance on how patient health information is shared between clinical services and what rights patients have.",
    href: "https://www.nhs.uk/using-the-nhs/about-the-nhs/how-your-health-information-is-used/",
  },
  {
    label: "NICE — Tirzepatide for managing overweight and obesity",
    description:
      "NICE technology appraisal guidance on the use of tirzepatide (Mounjaro) including monitoring and follow-up requirements.",
    href: "https://www.nice.org.uk/guidance/ta1026",
  },
  {
    label: "MHRA — Prescription-only medicines (POMs)",
    description:
      "MHRA guidance on the legal classification of prescription-only medicines and the obligations this places on prescribers and dispensers.",
    href: "https://www.gov.uk/guidance/prescriptions-for-controlled-drugs-and-other-prescription-only-medicines",
  },
  {
    label: "How we verify UK pharmacies — Health Wise",
    description:
      "Our pharmacy verification process, including how we check GPhC registration and regulatory compliance.",
    href: "/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards",
    category: "Pharmacy Safety",
    title: "How We Verify UK Pharmacies: GPhC Checks & Safety Standards",
    description:
      "Every pharmacy we list is verified against the GPhC register. Here's what our verification process involves.",
  },
  {
    href: "/helpful-guides/local-vs-online-pharmacies-mounjaro-uk",
    category: "Pharmacy Safety",
    title: "Local vs Online Pharmacies for Mounjaro: What's the Better Choice?",
    description:
      "An honest breakdown of the differences between local and online pharmacy services for Mounjaro patients.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Do UK Pharmacies Inform Your GP About Mounjaro? (Complete Guide)",
  description:
    "Yes—UK pharmacies are required to notify your GP when dispensing Mounjaro. Here's why it happens, how the process works, and what it means for your medical records.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteOrigin()}${helpfulGuidePath("mounjaro-gp-notification-uk")}`,
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

export default function GuideMounjaroGP() {
  return (
    <GuideLayout
      slug="mounjaro-gp-notification-uk"
      category="Regulation"
      categorySlug="regulation"
      title="Do UK Pharmacies Inform Your GP About Mounjaro? (Complete Guide)"
      description="Yes—UK pharmacies are required to notify your GP when dispensing Mounjaro. Here's why it happens, how the process works, and what it means for your medical records."
      readTime="3 min read"
      lastUpdated="April 2026"
      toc={TOC}
      internalLinks={internalLinksFor("guideMounjaroGP")}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      <GuideSection id="short-answer" heading="Short Answer: Yes">
        <GuideParagraph>
          In the UK, pharmacies—both local and registered online providers—are
          required to notify your GP when dispensing high-risk prescription
          medications like{" "}
          <IL href="/what-is-mounjaro">Mounjaro (tirzepatide)</IL>.
        </GuideParagraph>
        <GuideCallout variant="info">
          This is not about surveillance—it is a patient safety requirement.
          Keeping your GP informed ensures your treatment is properly
          coordinated, reduces the risk of dangerous drug interactions, and
          ensures your medical records remain accurate.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="why-happens" heading="Why This Happens">
        <GuideParagraph>
          GP notification is required under standards set by the{" "}
          <EL href="https://www.pharmacyregulation.org/standards/standards-registered-pharmacies">
            General Pharmaceutical Council (GPhC)
          </EL>{" "}
          and aligned with{" "}
          <EL href="https://www.nice.org.uk/guidance/ta1026">
            NICE guidance on tirzepatide
          </EL>
          , which includes monitoring and follow-up requirements.
        </GuideParagraph>
        <GuideParagraph>
          Key reasons the notification requirement exists:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>Prevent drug interactions</strong> — your GP may be
              prescribing other medications. Knowing you are taking{" "}
              <IL href="/what-is-mounjaro">Mounjaro</IL> allows them to check
              for interactions and adjust other treatments if necessary.
            </>,
            <>
              <strong>Maintain accurate medical records</strong> — a complete
              medication history is essential for safe clinical care, especially
              in emergencies.
            </>,
            <>
              <strong>Ensure long-term care continuity</strong> — your GP
              needs to be aware of your treatment to provide appropriate
              follow-up, monitoring, and referrals.
            </>,
          ]}
        />
      </GuideSection>

      <GuideSection id="process" heading="How the Process Works">
        <GuideParagraph>
          The GP notification process is straightforward and happens behind the
          scenes:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "You provide your GP's details when registering with the pharmacy or during your consultation",
            "The pharmacy or online prescribing service sends a secure notification to your GP practice",
            "Your GP updates your medical records to include Mounjaro as a current medication",
            "Future consultations—whether with your GP, a specialist, or another pharmacist—will reflect your Mounjaro treatment",
          ]}
        />
        <GuideParagraph>
          This communication is conducted through secure clinical channels and
          is subject to NHS and{" "}
          <EL href="https://www.nhs.uk/using-the-nhs/about-the-nhs/how-your-health-information-is-used/">
            GDPR data protection requirements
          </EL>
          . Your information is not shared beyond your clinical care team
          without your explicit consent.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="opt-out" heading="Can You Opt Out?">
        <GuideParagraph>
          No.
        </GuideParagraph>
        <GuideParagraph>
          Because{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> is a{" "}
          <EL href="https://www.gov.uk/guidance/prescriptions-for-controlled-drugs-and-other-prescription-only-medicines">
            prescription-only medicine (POM)
          </EL>{" "}
          classified as high-risk by the{" "}
          <EL href="https://www.pharmacyregulation.org/registers/pharmacy">
            GPhC
          </EL>
          , GP notification is a mandatory clinical safeguard. Patients cannot
          opt out of this process.
        </GuideParagraph>
        <GuideCallout variant="info">
          This requirement applies equally to regulated online pharmacies. If a
          pharmacy offers to dispense Mounjaro without notifying your GP and
          frames this as a feature, treat it as a warning sign.{" "}
          <IL href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
            See how we verify pharmacy compliance
          </IL>
          .
        </GuideCallout>
      </GuideSection>

      <GuideSection id="risks" heading="Risks If Your GP Is Not Informed">
        <GuideParagraph>
          If your GP is unaware that you are taking{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL>, there are real clinical
          risks:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Dangerous drug interactions — other medications may be prescribed or adjusted without accounting for Mounjaro",
            "Missed side effects — without awareness, your GP cannot attribute symptoms to Mounjaro or adjust treatment accordingly",
            "Incomplete health monitoring — effective Mounjaro treatment requires periodic health checks that your GP may coordinate",
            "Emergency care risk — in an emergency, clinicians rely on accurate medication records to provide safe treatment",
          ]}
        />
      </GuideSection>

      <GuideSection id="timeline" heading="How Long Does It Take?">
        <GuideParagraph>
          The speed of notification depends on the pharmacy's systems:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>Digital systems</strong> (most regulated online
              pharmacies and modern high-street pharmacies) — notification is
              typically sent within 24–48 hours of dispensing.
            </>,
            <>
              <strong>Manual updates</strong> (some smaller or rural pharmacies)
              — GP records may take 3–5 working days to update.
            </>,
          ]}
        />
        <GuideParagraph>
          In practice, most patients can expect their GP to be notified within
          one week of receiving their{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> prescription. If you
          have a GP appointment shortly after starting treatment, it is worth
          confirming they have received the notification.
        </GuideParagraph>
      </GuideSection>

      <GuideKeyTakeaways
        items={[
          "UK pharmacies are required to notify your GP when dispensing Mounjaro—this applies to both local and regulated online pharmacies.",
          "The notification prevents drug interactions, maintains accurate medical records, and ensures continuity of care.",
          "Patients cannot opt out—GP notification is a mandatory safety requirement for prescription-only high-risk medications.",
          "Digital pharmacies typically notify within 24–48 hours; manual systems may take 3–5 working days.",
          "If a pharmacy suggests that bypassing GP notification is a benefit, treat this as a serious red flag.",
        ]}
      />

      <GuideRelatedGuides guides={RELATED_GUIDES} />
      <GuideReferences items={REFERENCES} />

      <GuideDisclaimer>
        This guide is for informational purposes only and reflects UK pharmacy
        regulation as of April 2026. Requirements may change. Always consult
        your GP or a qualified pharmacist for advice specific to your
        circumstances.
      </GuideDisclaimer>

      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
