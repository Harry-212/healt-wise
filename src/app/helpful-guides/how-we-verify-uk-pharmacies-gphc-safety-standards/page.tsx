import { helpfulGuidePath } from "@/lib/helpful-guide-slugs";
import { siteOrigin } from "@/lib/seo/site-origin";
import { buildGuideShareMetadata } from "@/lib/seo/guide-share-metadata";
import { internalLinksFor } from "@/lib/internal-linking";
import {
  GuideLayout,
  GuideSection,
  GuideSubSection,
  GuideParagraph,
  GuideBulletList,
  GuideBulletListRich,
  GuideKeyTakeaways,
  GuideDisclaimer,
  GuideFaq,
  GuideReferences,
  GuideRelatedGuides,
  IL,
  EL,
} from "@/components/guide/GuideLayout";

export const metadata = buildGuideShareMetadata({
  slug: "how-we-verify-uk-pharmacies-gphc-safety-standards",
  title: "How We Verify UK Pharmacies: GPhC Checks & Safety Standards Explained",
  description: "Discover how Health Wise validates every pharmacy against the GPhC register. Learn our multi-layer safety verification process and how to check a pharmacy yourself.",
  openGraphTitle: "How We Verify UK Pharmacies: GPhC Checks & Safety Standards Explained",
});


const TOC = [
  { id: "protection", label: "How We Protect Your Safety" },
  { id: "gphc", label: "Why GPhC Registration Matters" },
  { id: "process", label: "Our Verification Process" },
  { id: "risks", label: "Risks of Unregulated Pharmacies" },
  { id: "check-yourself", label: "How to Check a Pharmacy Yourself" },
  { id: "trust", label: "Why Trust Health Wise?" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "What is the GPhC?",
    a: "The General Pharmaceutical Council (GPhC) is the regulatory body for pharmacies in the UK. It ensures that pharmacies and pharmacy professionals meet strict standards for safe and effective practice, and it maintains a publicly accessible register of all legally registered pharmacies.",
  },
  {
    q: "Can I trust online pharmacies in the UK?",
    a: "Yes—but only when they hold a valid GPhC registration. Before purchasing any medication online, verify the pharmacy's registration number on the official GPhC register at pharmacyregulation.org. Registered pharmacies are legally required to display their GPhC registration on their website.",
  },
  {
    q: "What happens if a pharmacy fails your checks?",
    a: "Any pharmacy that cannot demonstrate full GPhC compliance or fails our safety review is excluded from our platform entirely. We do not list providers until every element of our verification process is satisfied.",
  },
  {
    q: "How often do you re-verify pharmacies?",
    a: "We perform ongoing checks to ensure that listed pharmacies maintain their compliance. If a pharmacy's registration lapses or safety standards change, we update or remove their listing promptly.",
  },
  {
    q: "Do you verify pharmacies for delivery and storage compliance?",
    a: "Yes. Part of our review covers delivery and storage practices, including cold-chain handling for temperature-sensitive medications such as Wegovy and Mounjaro. We check that pharmacies meet UK prescribing and dispensing regulations throughout the supply chain.",
  },
];

const REFERENCES = [
  {
    label: "GPhC Pharmacy Register",
    description:
      "Official public register of all GPhC-registered pharmacies in the UK. Use this to verify any online pharmacy before purchasing.",
    href: "https://www.pharmacyregulation.org/registers/pharmacy",
  },
  {
    label: "GPhC — Standards for Registered Pharmacies",
    description:
      "The GPhC's standards document outlining what registered pharmacies must demonstrate to operate legally in the UK.",
    href: "https://www.pharmacyregulation.org/standards/standards-registered-pharmacies",
  },
  {
    label: "MHRA — Buying medicines online",
    description:
      "UK government guidance from the Medicines and Healthcare products Regulatory Agency on safely purchasing medicines online.",
    href: "https://www.gov.uk/buy-safely-online",
  },
  {
    label: "NHS — Buying medicines online safely",
    description:
      "NHS guidance on how to verify an online pharmacy and avoid illegal or unregulated suppliers.",
    href: "https://www.nhs.uk/nhs-services/pharmacies/buying-medicines-online/",
  },
  {
    label: "Compare verified UK pharmacies — Health Wise",
    description:
      "Browse our verified pharmacy listings for Wegovy, Mounjaro, and Saxenda, with pricing, availability, and compliance status.",
    href: "/prices/cheapest-options-uk",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/mounjaro-pregnancy-risk-fertility-contraception",
    category: "Medications",
    title: "Mounjaro and Pregnancy Risk: Fertility & Contraception",
    description:
      "What you need to know about Mounjaro's indirect effect on fertility and how to plan contraception safely.",
  },
  {
    href: "/helpful-guides/glp1-content-removed-weight-loss-advice-uk",
    category: "Regulation",
    title: "Why GLP-1 Content Is Being Removed",
    description:
      "How social media platform restrictions are limiting access to reliable GLP-1 information in the UK.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How We Verify UK Pharmacies: GPhC Checks & Safety Standards Explained",
  description:
    "Discover how Health Wise validates every pharmacy against the GPhC register. Learn our multi-layer safety verification process and how to check a pharmacy yourself.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteOrigin()}${helpfulGuidePath("how-we-verify-uk-pharmacies-gphc-safety-standards")}`,
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

export default function GuidePharmacyVerification() {
  return (
    <GuideLayout
      slug="how-we-verify-uk-pharmacies-gphc-safety-standards"
      category="Pharmacy Safety"
      categorySlug="pharmacy-safety"
      title="How We Verify UK Pharmacies: GPhC Checks & Safety Standards Explained"
      description="A transparent look at the multi-layer process Health Wise uses to validate every pharmacy before listing—so you can buy medication online with confidence."
      readTime="5 min read"
      lastUpdated="April 2026"
      toc={TOC}
      internalLinks={internalLinksFor("guidePharmacy")}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      {/* ── Section 1 ── */}
      <GuideSection id="protection" heading="How We Protect Your Safety When Buying Medication Online">
        <GuideParagraph>
          When purchasing medication online, safety should always come first. At{" "}
          <IL href="/">Health Wise</IL>, we prioritise patient protection by
          carefully reviewing every pharmacy before it is listed on our
          platform. This applies to all GLP-1 treatments we cover, including{" "}
          <IL href="/what-is-wegovy">Wegovy</IL>,{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL>, and{" "}
          <IL href="/what-is-saxenda">Saxenda</IL>.
        </GuideParagraph>
        <GuideParagraph>
          Our verification process is designed to ensure that only legitimate,
          regulated UK pharmacies are included—helping you make safer, more
          informed decisions. Below, we explain exactly what we check and why
          each step matters. You can also{" "}
          <IL href="/prices/cheapest-options-uk">compare verified UK pharmacy prices</IL>{" "}
          directly on our platform.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 2 ── */}
      <GuideSection id="gphc" heading="Why GPhC Registration Matters">
        <GuideParagraph>
          In the UK, all pharmacies must be regulated by the{" "}
          <EL href="https://www.pharmacyregulation.org">
            General Pharmaceutical Council (GPhC)
          </EL>{" "}
          to operate legally. This regulation exists specifically to protect
          patients and maintain strict healthcare standards across the industry.
          The{" "}
          <EL href="https://www.pharmacyregulation.org/registers/pharmacy">
            GPhC public register
          </EL>{" "}
          is freely accessible to anyone.
        </GuideParagraph>
        <GuideParagraph>
          GPhC registration carries three core patient benefits:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Legal compliance — Only registered pharmacies can legally supply prescription medication.",
            "Ongoing oversight — Pharmacies are regularly inspected and monitored against national standards.",
            "Patient protection — You can independently verify any pharmacy's legitimacy before purchasing.",
          ]}
        />
        <GuideParagraph>
          We validate every GPhC registration to confirm it is active and
          authentic. Pharmacies that do not meet these standards are not
          included on our platform under any circumstances.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 3 ── */}
      <GuideSection id="process" heading="Our Pharmacy Verification Process">
        <GuideParagraph>
          We apply a multi-layered verification system to assess each provider.
          No pharmacy is listed until all three stages are passed.
        </GuideParagraph>

        <GuideSubSection heading="1. GPhC Registration Validation">
          <GuideParagraph>
            We confirm that each pharmacy is officially listed and compliant by
            cross-checking directly with the{" "}
            <EL href="https://www.pharmacyregulation.org/registers/pharmacy">
              official GPhC register
            </EL>{" "}
            and verifying that registration is current and in good standing.
          </GuideParagraph>
          <GuideParagraph>
            We also perform additional checks beyond the standard register
            listing, including:
          </GuideParagraph>
          <GuideBulletList
            items={[
              "Website domain verification to confirm the pharmacy's online presence is genuine.",
              "Matching the website and trading name against the registered business details.",
              "Maintaining internal verification records for accountability and audit purposes.",
            ]}
          />
        </GuideSubSection>

        <GuideSubSection heading="2. Safety and Compliance Review">
          <GuideParagraph>
            Each pharmacy is assessed for how it handles medication throughout
            the supply and delivery process. This is particularly important for
            temperature-sensitive treatments—{" "}
            <IL href="/what-is-wegovy">Wegovy</IL> and{" "}
            <IL href="/what-is-mounjaro">Mounjaro</IL> both require cold-chain
            handling. We check for:
          </GuideParagraph>
          <GuideBulletList
            items={[
              "Secure and tamper-evident packaging standards.",
              "Cold-chain handling protocols for temperature-sensitive treatments.",
              "Compliance with UK prescribing and dispensing regulations.",
            ]}
          />
        </GuideSubSection>

        <GuideSubSection heading="3. Removal of Non-Compliant Providers">
          <GuideParagraph>
            Any provider that cannot demonstrate full compliance or fails our
            safety checks is excluded from the platform. This applies at initial
            assessment and on an ongoing basis. If a listed pharmacy's
            compliance status changes, we update or remove their listing
            immediately.
          </GuideParagraph>
        </GuideSubSection>
      </GuideSection>

      {/* ── Section 4 ── */}
      <GuideSection id="risks" heading="Risks of Unregulated Online Pharmacies">
        <GuideParagraph>
          Using unverified providers can expose you to serious risks. The{" "}
          <EL href="https://www.gov.uk/buy-safely-online">MHRA warns</EL> that
          unregulated online pharmacies are one of the most common routes by
          which counterfeit medicines enter the UK. Common dangers include:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            "Counterfeit or substandard medication that may be ineffective or actively harmful—particularly relevant for high-demand treatments like Mounjaro and Wegovy.",
            <>
              Fraudulent websites designed to collect payment and personal
              data. The{" "}
              <EL href="https://www.nhs.uk/nhs-services/pharmacies/buying-medicines-online/">
                NHS recommends
              </EL>{" "}
              always checking for a GPhC logo before purchasing.
            </>,
            "No consumer protection recourse if something goes wrong.",
            "Medication supplied without a proper clinical consultation or valid prescription—a legal requirement for all GLP-1 treatments in the UK.",
          ]}
        />
        <GuideParagraph>
          By limiting our listings to verified pharmacies, we significantly
          reduce your exposure to these risks. Use our{" "}
          <IL href="/prices/cheapest-options-uk">price comparison tool</IL> to
          find the cheapest options among verified, compliant providers only.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 5 ── */}
      <GuideSection id="check-yourself" heading="How to Check a Pharmacy Yourself">
        <GuideParagraph>
          You do not need to rely solely on our platform to verify a pharmacy.
          The{" "}
          <EL href="https://www.pharmacyregulation.org/registers/pharmacy">
            GPhC public register
          </EL>{" "}
          is free and accessible to anyone. To verify independently:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              Visit{" "}
              <EL href="https://www.pharmacyregulation.org/registers/pharmacy">
                pharmacyregulation.org/registers/pharmacy
              </EL>{" "}
              and search by name, address, or registration number.
            </>,
            "Confirm the pharmacy's status shows as 'registered' and that the details match the website you are using.",
            "Check that the pharmacy's website displays a clickable GPhC logo that links directly to their register entry.",
          ]}
        />
        <GuideParagraph>
          Legitimate UK online pharmacies are legally required to display a GPhC
          logo linked directly to their register entry on their homepage. If
          this is absent, treat it as a warning sign and do not proceed.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 6 ── */}
      <GuideSection id="trust" heading="Why Trust Health Wise?">
        <GuideParagraph>
          We go beyond basic registration checks. Every pharmacy listed on{" "}
          <IL href="/">Health Wise</IL> has passed a multi-stage review covering
          GPhC compliance, website legitimacy, and supply chain safety. Our{" "}
          <IL href="/methodology">methodology page</IL> explains the full
          process in detail.
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            "Full GPhC registration validation for every listed provider.",
            "Website and business ownership verification to confirm legitimacy.",
            <>
              Delivery and storage compliance review—critical for cold-chain
              medications like{" "}
              <IL href="/what-is-wegovy">Wegovy</IL> and{" "}
              <IL href="/what-is-mounjaro">Mounjaro</IL>.
            </>,
            <>
              Transparent, unbiased listings with no paid placement.{" "}
              <IL href="/prices/cheapest-options-uk">
                Compare prices openly
              </IL>
              .
            </>,
            "Ongoing re-verification to reflect any changes in pharmacy status.",
          ]}
        />
      </GuideSection>

      {/* ── Key Takeaways ── */}
      <GuideKeyTakeaways
        items={[
          "All UK pharmacies must be GPhC registered to legally supply prescription medication.",
          "We validate GPhC registration, website identity, and storage compliance before listing any provider.",
          "Non-compliant pharmacies are never listed and are removed if their status changes.",
          "You can independently verify any pharmacy on the free GPhC register at pharmacyregulation.org.",
          "Legitimate online pharmacies must display a GPhC logo linked to their register entry.",
        ]}
      />

      {/* ── Related Guides ── */}
      <GuideRelatedGuides guides={RELATED_GUIDES} />

      {/* ── References ── */}
      <GuideReferences items={REFERENCES} />

      {/* ── Disclaimer ── */}
      <GuideDisclaimer>
        This guide is for informational purposes only. It does not constitute
        medical or legal advice. Always verify a pharmacy's registration
        directly with the{" "}
        <EL href="https://www.pharmacyregulation.org/registers/pharmacy">
          GPhC register
        </EL>{" "}
        before purchasing medication online.
      </GuideDisclaimer>

      {/* ── FAQ ── */}
      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
