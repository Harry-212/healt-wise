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
  slug: "fake-online-pharmacy-uk-how-to-spot-stay-safe",
  title: "How to Identify a Fake Online Pharmacy in the UK & Stay Safe",
  description: "Fake online pharmacies sell counterfeit or unsafe medicines. Learn the warning signs, who regulates UK pharmacies (GPhC, MHRA), and how to verify a site before you buy.",
  openGraphTitle: "How to Identify a Fake Online Pharmacy in the UK & Stay Safe",
  openGraphDescription: "Fake online pharmacies sell counterfeit or unsafe medicines. Learn the warning signs and how to verify a UK pharmacy before you buy.",
});


const TOC = [
  { id: "benefits-risks", label: "Benefits and Risks of Online Pharmacies" },
  { id: "dangers", label: "Dangers of Buying Medication Online" },
  { id: "warning-signs", label: "Warning Signs of an Unsafe Online Pharmacy" },
  { id: "red-flags", label: "Additional Red Flags" },
  { id: "simple-rule", label: "A Simple Rule" },
  { id: "who-regulates", label: "Who Regulates Online Pharmacies in the UK?" },
  { id: "how-to-stay-safe", label: "How to Stay Safe" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "How do I know if an online pharmacy is legitimate in the UK?",
    a: "Check that the pharmacy is registered with the General Pharmaceutical Council (GPhC) using their online register. Legitimate UK online pharmacies must display the EU common logo (green cross with stars) on every page that sells prescription medicines. You can also read MHRA guidance on buying medicines online safely.",
  },
  {
    q: "Is it legal to buy Mounjaro from an online pharmacy without a prescription?",
    a: "No. Mounjaro (tirzepatide) is a prescription-only medicine (POM) in the UK. Any website offering to sell it without a valid prescription from a qualified prescriber is operating illegally and should be avoided. Legitimate providers always require a medical consultation before issuing a prescription.",
  },
  {
    q: "Why are some online Mounjaro prices so much lower than others?",
    a: "While genuine pharmacies compete on price, prices that are dramatically lower than the UK market average can indicate counterfeit product, unlicensed imports, or fraud. If a price seems unrealistically low compared to GPhC-registered competitors, treat it as a major red flag.",
  },
  {
    q: "What should I do if I receive spam emails offering cheap weight loss treatments?",
    a: "Do not click links or reply. Unsolicited offers for prescription medicines are almost always scams. Report phishing to the National Cyber Security Centre (NCSC) and delete the message. Only obtain medication through a verified GPhC-registered pharmacy after a proper clinical assessment.",
  },
  {
    q: "Does the MHRA regulate online pharmacies?",
    a: "The MHRA regulates medicines and medical devices in the UK, including enforcement against illegal online sales and counterfeit medicines. The GPhC regulates pharmacy premises and professionals. Both play a role in keeping patients safe when buying online.",
  },
];

const REFERENCES = [
  {
    label: "GPhC — Find a registered pharmacy",
    description:
      "Search the official General Pharmaceutical Council register to confirm any UK pharmacy is legally authorised to operate.",
    href: "https://www.pharmacyregulation.org/registers/pharmacy",
  },
  {
    label: "MHRA — Buying medicines online safely",
    description:
      "MHRA guidance on how to identify legitimate online pharmacies and avoid counterfeit or unlicensed medicines.",
    href: "https://fakemeds.campaign.gov.uk/",
  },
  {
    label: "MHRA — Reporting fake medicines and illegal sales",
    description:
      "How to report suspected counterfeit medicines or illegal online medicine sales to UK regulators.",
    href: "https://www.gov.uk/report-problem-medicine-medical-device",
  },
  {
    label: "How we verify UK pharmacies — Health Wise",
    description:
      "Our GPhC-based checks and safety standards for every pharmacy listed on Health Wise.",
    href: "/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards",
    external: false,
  },
  {
    label: "Mounjaro delivery times UK — why safety matters — Health Wise",
    description:
      "Why responsible prescribing takes time—and why speed-only marketing is a red flag.",
    href: "/helpful-guides/mounjaro-delivery-times-uk",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards",
    category: "Pharmacy Safety",
    title: "How We Verify UK Pharmacies: GPhC Checks & Safety Standards",
    description:
      "Every pharmacy we list is checked against the GPhC register. Here's what that means for your safety.",
  },
  {
    href: "/helpful-guides/switching-pharmacies-mounjaro-wegovy-uk",
    category: "Pharmacy Safety",
    title: "Switching Pharmacies for Mounjaro or Wegovy: Step-by-Step UK Guide",
    description:
      "How to move to a new regulated provider safely—with documentation and clinical checks.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Identify a Fake Online Pharmacy and Stay Safe (UK Guide)",
  description:
    "Fake online pharmacies sell counterfeit or unsafe medicines. Learn the warning signs, who regulates UK pharmacies, and how to verify a provider before you buy.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteOrigin()}${helpfulGuidePath("fake-online-pharmacy-uk-how-to-spot-stay-safe")}`,
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

export default function GuideFakePharmacy() {
  return (
    <GuideLayout
      slug="fake-online-pharmacy-uk-how-to-spot-stay-safe"
      category="Safety Checks"
      categorySlug="safety-checks"
      title="How to Identify a Fake Online Pharmacy and Stay Safe (UK Guide)"
      description="Online pharmacies offer convenience and competitive pricing—but not every site operates legally. Counterfeit medicines can contain harmful ingredients, wrong doses, or no active drug at all. Here's how to spot rogue operators and protect yourself."
      readTime="4 min read"
      lastUpdated="April 2026"
      toc={TOC}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      <GuideSection id="benefits-risks" heading="Benefits and Risks of Online Pharmacies">
        <GuideParagraph>
          Online pharmacies have grown rapidly in popularity in the UK. They
          offer 24/7 access, competitive pricing, privacy for sensitive
          conditions, and the ability to complete consultations without an
          in person visit benefits that matter for treatments such as{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> or{" "}
          <IL href="/what-is-wegovy">Wegovy</IL>.
         For more context, explore our resources on <IL href="/blog/best-weight-loss-treatment-in-london" className="font-medium text-emerald-600 hover:underline">treatment in London</IL>.</GuideParagraph>
        <GuideParagraph>
          However, convenience also creates risk. Not every website that looks
          like a pharmacy is registered, regulated, or selling genuine
          medicines. Understanding both sides is essential before you hand over
          payment or personal health data.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="dangers" heading="Dangers of Buying Medication Online">
        <GuideParagraph>
          Rising demand for weight loss and other sensitive treatments has
          attracted fraudulent operators. These sites may look professional but
          expose you to serious harm:
         For more context, explore our resources on <IL href="/blog/mounjaro-weight-loss-benefits-backed-by-science" className="font-medium text-emerald-600 hover:underline">Mounjaro weight loss benefits</IL>.</GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>Unsafe ingredients</strong> — counterfeit drugs may
              contain toxic fillers, wrong substances, or contaminants with no
              quality control.
            </>,
            <>
              <strong>Ineffective treatment</strong> — fake or diluted products
              may lack the active ingredient entirely, leaving your condition
              untreated.
            </>,
            <>
              <strong>Incorrect dosages</strong> — wrong strength increases the
              risk of dangerous side effects or treatment failure.
            </>,
            <>
              <strong>Poor manufacturing standards</strong> — unlicensed
              products are not made to UK or EU Good Manufacturing Practice
              standards.
            </>,
            <>
              <strong>Misuse risk</strong> — obtaining prescription-only
              medicines without a proper clinical review increases the chance of
              dangerous drug interactions and missed contraindications.
            </>,
          ]}
        />
        <GuideCallout variant="warning">
          For your safety, always verify a pharmacy through the{" "}
          <EL href="https://www.pharmacyregulation.org/registers/pharmacy">
            GPhC register
          </EL>{" "}
          before purchasing. See{" "}
          <IL href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
            how Health Wise verifies pharmacies
          </IL>
          .
        </GuideCallout>
      </GuideSection>

      <GuideSection id="warning-signs" heading="Warning Signs of an Unsafe Online Pharmacy">
        <GuideParagraph>
          Be cautious if a website shows any of the following:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "No prescription required for prescription-only medicines (POMs) such as Mounjaro or Wegovy",
            "Prices that seem unrealistically low compared to established UK providers",
            "No evidence of UK regulation — no GPhC registration, no MHRA distance-selling logo where required",
            "Bulk discounts or 'special offers' that pressure you to buy large quantities of controlled or high-risk medicines",
            "Spam emails or social ads promoting quick fixes, miracle cures, or 'no questions asked' supply",
            "Missing or vague contact details — no physical UK address, no pharmacist contact, only a web form",
            "Prices listed primarily in currencies other than GBP (£), suggesting offshore or unregulated supply",
          ]}
        />
      </GuideSection>

      <GuideSection id="red-flags" heading="Additional Red Flags">
        <GuideBulletList
          items={[
            "Claims of unrestricted worldwide shipping for prescription-only medicines",
            "No UK registration number or refusal to state which pharmacy holds the prescription",
            "Limited or vague medical information — no clear prescriber credentials or clinical process",
            "No health questionnaire, video consultation, or other appropriate screening before a prescription is issued",
            "Pressure tactics — countdown timers, 'only 3 left' on prescription products",
          ]}
        />
        <GuideParagraph>
          If a pharmacy fails these checks, it is best to avoid it entirely 
          even if the site looks polished.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="simple-rule" heading="A Simple Rule">
        <GuideCallout variant="info">
          If something feels too good to be true, it usually is. Unsolicited
          offers for cheap medication are often scams. At best, the product
          will not work. At worst, it could seriously harm your health.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="who-regulates" heading="Who Regulates Online Pharmacies in the UK?">
        <GuideParagraph>
          Trusted UK pharmacies and prescribers operate under overlapping
          oversight:
         For more context, explore our resources on <IL href="/wegovy-price-comparison" className="font-medium text-emerald-600 hover:underline">Wegovy price comparison</IL>.</GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>
                <EL href="https://www.pharmacyregulation.org/registers/pharmacy">
                  General Pharmaceutical Council (GPhC)
                </EL>
              </strong>{" "}
              — registers pharmacy premises and pharmacists. Every legal UK
              pharmacy must appear on the GPhC register.
            </>,
            <>
              <strong>
                <EL href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency">
                  Medicines and Healthcare products Regulatory Agency (MHRA)
                </EL>
              </strong>{" "}
              — regulates medicines, licensing, counterfeit enforcement, and
              online selling rules.
            </>,
            <>
              <strong>Care Quality Commission (CQC)</strong> — regulates some
              independent clinics and digital healthcare providers in England
              where applicable.
            </>,
          ]}
        />
        <GuideParagraph>
          Always cross check registration before you buy. The{" "}
          <EL href="https://fakemeds.campaign.gov.uk/">
            MHRA's online medicines guidance
          </EL>{" "}
          explains what legitimate distance selling pharmacies must display.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="how-to-stay-safe" heading="How to Stay Safe">
        <GuideBulletListRich
          items={[
            <>
              <strong>Verify registration and certification</strong> — search
              the pharmacy name on the GPhC register; confirm the web address
              matches the registered details.
            </>,
            <>
              <strong>Avoid suspiciously cheap offers</strong> — compare against{" "}
              <IL href="/mounjaro-price-comparison">verified UK price data</IL>{" "}
              for context.
            </>,
            <>
              <strong>Ensure prescriptions and clinical checks are required</strong>{" "}
              — legitimate supply of{" "}
              <IL href="/what-is-mounjaro">Mounjaro</IL> always involves a
              qualified prescriber. Read{" "}
              <IL href="/helpful-guides/mounjaro-delivery-times-uk">
                why safe prescribing takes time
              </IL>
              .
            </>,
            <>
              <strong>Use the same checks when switching</strong> — our{" "}
              <IL href="/helpful-guides/switching-pharmacies-mounjaro-wegovy-uk">
                switching pharmacies guide
              </IL>{" "}
              lists what to ask a new provider.
            </>,
          ]}
        />
        <GuideParagraph>
          By staying cautious, you can benefit from legitimate online pharmacies
          while protecting your health and your personal data.
         For more context, explore our resources on <IL href="/helpful-guides/mounjaro-weight-loss-injection-uk" className="font-medium text-emerald-600 hover:underline">Mounjaro weight loss treatment UK</IL>.</GuideParagraph>
      </GuideSection>

      <GuideKeyTakeaways
        items={[
          "Online pharmacies are convenient—but rogue sites sell counterfeit or unsafe medicines.",
          "Never buy prescription-only medicines without a valid UK prescription from a qualified prescriber.",
          "Red flags: no GPhC registration, no clinical screening, unrealistically low prices, spam promotions, non-GBP pricing.",
          "Verify every pharmacy on the GPhC register and follow MHRA guidance on buying medicines online.",
          "If it feels too good to be true, walk away—and use a regulated provider instead.",
        ]}
      />

      <GuideRelatedGuides guides={RELATED_GUIDES} />
      <GuideReferences items={REFERENCES} />

      <GuideDisclaimer>
        This guide is for general information only. It does not list or endorse
        specific pharmacies. Always verify registration yourself before
        purchasing medicines online.
      </GuideDisclaimer>

      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
