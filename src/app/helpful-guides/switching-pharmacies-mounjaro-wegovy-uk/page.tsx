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
  title: "Switching Pharmacies for Mounjaro/Wegovy",
  description: "Want to switch pharmacy for Mounjaro or Wegovy? How to compare regulated providers, what documents you need, and how to switch safely.",
  openGraphTitle: "Switching Pharmacies for Mounjaro/Wegovy",
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

interface FaqItemWithSchema {
  q: string;
  a: React.ReactNode;
  textAnswer: string;
}

const FAQ_ITEMS: FaqItemWithSchema[] = [
  {
    q: "Can I switch pharmacies for Mounjaro mid-treatment?",
    a: "You can ask another provider to assess you for continuing treatment, but acceptance is not guaranteed. Check its requirements for existing patients and provide the treatment information it requests. Discuss the timing with the prescribing team, especially if you may run out of medicine or have had a treatment gap.",
    textAnswer:
      "You can ask another provider to assess you for continuing treatment, but acceptance is not guaranteed. Check its requirements for existing patients and provide the treatment information it requests. Discuss the timing with the prescribing team, especially if you may run out of medicine or have had a treatment gap.",
  },
  {
    q: "Do I need a new prescription when switching pharmacies?",
    a: "Ask the receiving service whether you are changing prescribing providers or asking another pharmacy to dispense an existing prescription. These are different arrangements. Confirm whether it can accept your existing prescription or requires a new assessment and prescription. Do not assume your prescription or order will move automatically.",
    textAnswer:
      "Ask the receiving service whether you are changing prescribing providers or asking another pharmacy to dispense an existing prescription. These are different arrangements. Confirm whether it can accept your existing prescription or requires a new assessment and prescription. Do not assume your prescription or order will move automatically.",
  },
  {
    q: "Will switching pharmacies affect my dosing schedule?",
    a: "Ask the prescribing team how to manage the timing of the switch. Tell them when you last took your medicine and whether you have had any treatment gaps. Do not change your dose or restart treatment without advice from your prescriber.",
    textAnswer:
      "Ask the prescribing team how to manage the timing of the switch. Tell them when you last took your medicine and whether you have had any treatment gaps. Do not change your dose or restart treatment without advice from your prescriber.",
  },
  {
    q: "How do I know if a new pharmacy is legitimate?",
    a: (
      <>
        Check the supplying pharmacy on the{" "}
        <EL href="https://www.pharmacyregulation.org/registers/pharmacy">
          GPhC register
        </EL>{" "}
        if it is based in England, Scotland or Wales, or the{" "}
        <EL href="https://www.psni.org.uk/search-the-registers/">
          PSNI register
        </EL>{" "}
        if it is based in Northern Ireland. Match the registered details with
        those provided by the service.
        <br />
        <br />
        Do not rely on a website badge alone. Online medicine sellers based in
        Great Britain are no longer required to display the EU common logo.{" "}
        <EL href="https://www.gov.uk/guidance/distance-selling-logo-for-medicines-sellers-in-northern-ireland">
          Different requirements apply
        </EL>{" "}
        to sellers based in Northern Ireland.
      </>
    ),
    textAnswer:
      "Check the supplying pharmacy on the GPhC register if it is based in England, Scotland or Wales, or the PSNI register if it is based in Northern Ireland. Match the registered details with those provided by the service. Do not rely on a website badge alone. Online medicine sellers based in Great Britain are no longer required to display the EU common logo. Different requirements apply to sellers based in Northern Ireland.",
  },
  {
    q: "What documents do I need to switch pharmacies?",
    a: "Typically: photos of your injection pen box (showing the medication name and dose), your current prescription label, and any previous order confirmations. Some providers may also ask for your BMI, medical history, and GP details.",
    textAnswer:
      "Typically: photos of your injection pen box (showing the medication name and dose), your current prescription label, and any previous order confirmations. Some providers may also ask for your BMI, medical history, and GP details.",
  },
  {
    q: "Is it safe to switch from a local to an online pharmacy?",
    a: "Check the supplying pharmacy’s registration, how the prescribing assessment works and what follow-up support is available. Discuss whether the service meets your needs with your prescriber, particularly if you need face-to-face care. Registration alone does not establish that a service is suitable for you.",
    textAnswer:
      "Check the supplying pharmacy’s registration, how the prescribing assessment works and what follow-up support is available. Discuss whether the service meets your needs with your prescriber, particularly if you need face-to-face care. Registration alone does not establish that a service is suitable for you.",
  },
];

const REFERENCES = [
  {
    label: "GPhC — Find a registered pharmacy",
    description:
      "Register for checking pharmacies in England, Scotland and Wales.",
    href: "https://www.pharmacyregulation.org/registers/pharmacy",
  },
  {
    label: "PSNI — Pharmacy register",
    description:
      "Register of pharmaceutical chemists and pharmacy premises in Northern Ireland.",
    href: "https://www.psni.org.uk/search-the-registers/",
  },
  {
    label: "MHRA — Distance Selling Logo guidance",
    description:
      "MHRA regulatory guidance on distance selling logo requirements for online medicine sellers.",
    href: "https://www.gov.uk/guidance/distance-selling-logo-for-medicines-sellers-in-northern-ireland",
  },
  {
    label: "MHRA — Buying prescription medicines online safely",
    description:
      "MHRA guidance on how to identify legitimate online pharmacies and protect yourself from counterfeit medications.",
    href: "https://fakemeds.campaign.gov.uk/",
  },
  {
    label: "NICE — Tirzepatide for managing overweight and obesity (TA1026)",
    description:
      "NICE guidance on tirzepatide for managing overweight and obesity in the NHS.",
    href: "https://www.nice.org.uk/guidance/ta1026",
  },
  {
    label: "NHS — Wegovy prescribing criteria",
    description:
      "NHS information on who is eligible for GLP-1 weight management treatments including Wegovy in England.",
    href: "https://www.nice.org.uk/guidance/ta875/informationforpublic",
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
    "Switching Pharmacies for Mounjaro/Wegovy",
  description:
    "Want to switch pharmacy for Mounjaro or Wegovy? How to compare regulated providers, what documents you need, and how to switch safely.",
  author: { "@type": "Organization", name: "Healthwise360 Research Team" },
  publisher: {
    "@type": "Organization",
    name: "Healthwise360",
    logo: {
      "@type": "ImageObject",
      url: `${siteOrigin()}/logo-health-wise.webp`,
    },
  },
  datePublished: "2026-04-09",
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
    acceptedAnswer: { "@type": "Answer", text: item.textAnswer },
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
          UK. Patients may find a better suited provider as the market matures
          and more regulated options become available.</GuideParagraph>
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
          Before switching, ask the new provider whether it accepts patients who
          are already receiving treatment and what information it needs.
        </GuideParagraph>
        <GuideParagraph>
          NHS access criteria and private prescribing requirements are
          different. Having a prescription from one provider does not guarantee
          that another provider will continue your treatment.
        </GuideParagraph>
        <GuideParagraph>
          Tell the new prescriber your current medicine and dose, when you last
          used it, any treatment gaps and any side effects. They will assess
          whether continuing treatment is appropriate.
        </GuideParagraph>
        <GuideParagraph>
          Check the assessment requirements and any consultation fees before
          applying.
        </GuideParagraph>
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
        <GuideParagraph>
          Check which pharmacy will dispense your medicine. Its name may be
          different from the website or prescribing-service brand.
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              For pharmacies based in England, Scotland or Wales, check the{" "}
              <EL href="https://www.pharmacyregulation.org/registers/pharmacy">
                General Pharmaceutical Council (GPhC)
              </EL>{" "}
              register.
            </>,
            <>
              For pharmacies based in Northern Ireland, check the{" "}
              <EL href="https://www.psni.org.uk/search-the-registers/">
                Pharmaceutical Society of Northern Ireland (PSNI) register
              </EL>
              .
            </>,
          ]}
        />
        <GuideParagraph>
          Match the pharmacy’s name, address and registration number with the
          provider’s details. Ask the provider to explain any differences before
          proceeding.
        </GuideParagraph>

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
        <GuideParagraph>
          You can{" "}
          <IL href="/mounjaro-price-comparison">compare Mounjaro prices</IL> or{" "}
          <IL href="/wegovy-price-comparison">compare Wegovy prices</IL> when
          checking provider costs. Confirm what is included directly with the
          provider.
        </GuideParagraph>

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
          Check the supplying pharmacy’s registration and ask how the prescribing
          assessment works. If registration details cannot be verified or the
          service offers prescription medicine without an appropriate assessment,
          do not proceed until your concerns have been resolved.
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
            "Your GP or usual prescriber’s contact details, together with any consent needed to obtain or share information relevant to your care.",
          ]}
        />
        <GuideParagraph>
          These documents are typically uploaded through the new pharmacy's
          secure patient portal during your consultation.</GuideParagraph>
      </GuideSection>

      <GuideSection id="consultation" heading="Consultation Process Explained">
        <GuideParagraph>
          The new prescriber must assess whether continuing treatment is
          appropriate, even if you already take the medicine.
        </GuideParagraph>
        <GuideParagraph>
          Expect questions about your medical history, current treatment and
          side effects. The provider should explain how it checks the
          information needed for prescribing, including relevant measurements
          such as weight, height or BMI.
        </GuideParagraph>
        <GuideParagraph>
          Ask which documents or appointments you need before paying. Completing
          a questionnaire or submitting an application does not guarantee a
          prescription.
        </GuideParagraph>
        <div className="mt-4">
          <EL href="https://www.pharmacyregulation.org/standards/guidance/prescribing">
            GPhC guidance for pharmacist prescribers
          </EL>
        </div>
      </GuideSection>

      <GuideSection id="after-switch" heading="After You Switch">
        <GuideParagraph>
          Once your new prescription is approved and your first order has been
          dispatched, keep the following in mind:</GuideParagraph>
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
              Ask how the provider will communicate with your GP or usual
              prescriber, what information it needs to share and how consent is
              handled.
            </>,
          ]}
        />
      </GuideSection>

      <GuideKeyTakeaways
        items={[
          "Check the supplying pharmacy on the appropriate official register.",
          "Confirm the new provider’s assessment and prescription requirements.",
          "Prepare the treatment records and documents it requests.",
          "Compare total costs, follow-up support and delivery arrangements.",
          "Discuss treatment timing and information sharing with the prescribing team.",
        ]}
      />

      <GuideRelatedGuides guides={RELATED_GUIDES} />
      <GuideReferences items={REFERENCES} />

      <GuideDisclaimer>
        This guide provides general information and does not replace advice from
        your prescriber. Check the supplying pharmacy’s registration and discuss
        any change of provider with the prescribing team. Do not change your dose
        or restart treatment based on this article.
      </GuideDisclaimer>

      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
