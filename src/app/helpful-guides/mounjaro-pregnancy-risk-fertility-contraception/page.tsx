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
  IL,
  EL,
} from "@/components/guide/GuideLayout";

export const metadata = buildGuideShareMetadata({
  slug: "mounjaro-pregnancy-risk-fertility-contraception",
  title: "Mounjaro and Pregnancy Risk: Fertility & Contraception Guide",
  description: "Mounjaro may increase fertility indirectly as metabolic health improves. Understand the clinical facts about tirzepatide, contraception, and pregnancy risk in the UK.",
  openGraphTitle: "Mounjaro and Pregnancy Risk: What You Need to Know About Fertility & Contraception",
});


const TOC = [
  { id: "understanding", label: "Understanding Mounjaro and Pregnancy" },
  { id: "pregnancy-risk", label: "Can Mounjaro Affect Pregnancy Risk?" },
  { id: "why-happens", label: "Why This Happens" },
  { id: "not-new", label: "Why This Is Not New Information" },
  { id: "contraception", label: "Why Contraception Is Important" },
  { id: "media", label: "What Media Headlines Often Miss" },
  { id: "what-to-do", label: "What You Should Do" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "Can Mounjaro make you more fertile?",
    a: "Mounjaro (tirzepatide) does not directly affect fertility, but it supports weight loss and metabolic health improvements that can indirectly restore ovulation and increase fertility. This is a known and documented physiological effect of meaningful weight loss.",
  },
  {
    q: "Does Mounjaro directly cause pregnancy?",
    a: "No. Mounjaro does not cause pregnancy. However, by improving hormonal balance and restoring ovulation—particularly in people who were previously not ovulating—it can increase the likelihood of conception if contraception is not used.",
  },
  {
    q: "Should I change my contraception while using Mounjaro?",
    a: "You should consult a healthcare professional to review your contraception options before or shortly after starting Mounjaro. Oral contraceptive pills may be less reliably absorbed due to Mounjaro's effect on gastric emptying. Your clinician may recommend additional or alternative contraception.",
  },
  {
    q: "Is Mounjaro safe to use during pregnancy?",
    a: "Mounjaro is not recommended for use during pregnancy. If you are pregnant or planning to become pregnant, discuss this with your prescribing clinician immediately. Treatment should typically be stopped before conception.",
  },
  {
    q: "Where is this information documented?",
    a: "The contraceptive interaction and fertility-related effects of tirzepatide are documented in the Summary of Product Characteristics (SmPC), patient information leaflets, and clinical prescribing guidance. Healthcare professionals are expected to discuss these effects as part of routine consultation before starting treatment.",
  },
  {
    q: "How does Mounjaro compare to Wegovy for weight loss?",
    a: "Both Mounjaro (tirzepatide) and Wegovy (semaglutide) produce significant weight loss, though clinical trials suggest Mounjaro achieves a higher average reduction. Both can indirectly affect fertility through the same mechanism of weight loss and hormonal improvement.",
  },
];

const REFERENCES = [
  {
    label: "Mounjaro (tirzepatide) — Summary of Product Characteristics (SmPC)",
    description:
      "Official prescribing reference for Mounjaro in the UK, including contraception guidance and fertility-related effects.",
    href: "https://www.medicines.org.uk/emc/product/15481",
  },
  {
    label: "NHS — Tirzepatide (Mounjaro)",
    description:
      "NHS information on tirzepatide including side effects, dosing, and important safety advice.",
    href: "https://www.england.nhs.uk/long-read/tirzepatide-in-primary-care-for-weight-management-information-on-wraparound-care/",
  },
  {
    label: "NICE — Obesity: identification, assessment and management",
    description:
      "NICE clinical guideline on obesity management providing the evidence base for GLP-1 treatment in the UK.",
    href: "https://www.nice.org.uk/guidance/cg189",
  },
  {
    label: "MHRA — GLP-1 receptor agonists and risk of intestinal obstruction",
    description:
      "MHRA drug safety update covering GLP-1 class effects and important safety considerations.",
    href: "https://www.gov.uk/drug-safety-update",
  },
  {
    label: "Compare Mounjaro prices UK — Health Wise",
    description:
      "Find the lowest verified prices for Mounjaro across UK pharmacies, with GPhC compliance confirmation.",
    href: "/mounjaro-price-comparison",
    external: false,
  },
  {
    label: "What is Mounjaro? Full guide — Health Wise",
    description:
      "Everything you need to know about Mounjaro (tirzepatide)—how it works, expected weight loss, and UK availability.",
    href: "/what-is-mounjaro",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards",
    category: "Pharmacy Safety",
    title: "How We Verify UK Pharmacies: GPhC Checks Explained",
    description:
      "Learn how we validate every pharmacy on our platform before listing—including cold-chain compliance for Mounjaro.",
  },
  {
    href: "/helpful-guides/glp1-content-removed-weight-loss-advice-uk",
    category: "Regulation",
    title: "Why GLP-1 Content Is Being Removed",
    description:
      "Social media restrictions are limiting access to information about Mounjaro, Wegovy, and GLP-1 treatments.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Mounjaro and Pregnancy Risk: What You Need to Know About Fertility & Contraception",
  description:
    "Mounjaro may increase fertility indirectly as metabolic health improves. Understand the clinical facts about tirzepatide, contraception, and pregnancy risk in the UK.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  about: [
    { "@type": "Drug", name: "Mounjaro" },
    { "@type": "Drug", name: "tirzepatide" },
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteOrigin()}${helpfulGuidePath("mounjaro-pregnancy-risk-fertility-contraception")}`,
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

export default function GuideMounjaroPregnancy() {
  return (
    <GuideLayout
      slug="mounjaro-pregnancy-risk-fertility-contraception"
      category="Medications"
      categorySlug="medications"
      title="Mounjaro and Pregnancy Risk: What You Need to Know About Fertility & Contraception"
      description="Reports of unexpected pregnancies during Mounjaro use have attracted media attention—but this is not hidden or new information. Here is what the clinical guidance actually says."
      readTime="4 min read"
      lastUpdated="April 2026"
      toc={TOC}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      {/* ── Section 1 ── */}
      <GuideSection id="understanding" heading="Understanding Mounjaro and Pregnancy">
        <GuideParagraph>
          Recent headlines about unexpected pregnancies while using{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> have caused
          confusion—and in some cases, alarm. However, this is not new or
          previously hidden information.
        </GuideParagraph>
        <GuideParagraph>
          The potential impact of{" "}
          <IL href="/what-is-mounjaro">Mounjaro (tirzepatide)</IL> on fertility
          has been clearly documented in clinical guidance—including the{" "}
          <EL href="https://www.medicines.org.uk/emc/product/15481">
            official SmPC
          </EL>
          —and is routinely discussed during medical consultations. This guide
          explains what the evidence actually shows and what you should do if
          you are taking Mounjaro.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 2 ── */}
      <GuideSection id="pregnancy-risk" heading="Can Mounjaro Affect Pregnancy Risk?">
        <GuideParagraph>
          Yes—but not in the way many headlines suggest.{" "}
          <IL href="/what-is-mounjaro">Mounjaro (tirzepatide)</IL> is a dual
          GLP-1 and GIP receptor agonist that supports significant weight loss
          and improves metabolic health. Unlike{" "}
          <IL href="/what-is-wegovy">Wegovy (semaglutide)</IL>, which targets
          only GLP-1 receptors, Mounjaro's dual action tends to produce{" "}
          <IL href="/compare/wegovy-vs-mounjaro">greater average weight loss</IL>
          —and with greater weight loss comes a more pronounced effect on
          hormonal health. These changes can indirectly increase fertility:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Improved hormone balance, including a reduction in insulin resistance.",
            "Restoration of regular ovulation in people who had previously experienced irregular or absent cycles.",
            "Enhanced insulin sensitivity, which plays a role in reproductive hormone regulation.",
          ]}
        />
        <GuideParagraph>
          There is an additional factor:{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> slows gastric emptying.
          This can reduce the rate at which oral contraceptive pills are
          absorbed into the bloodstream, potentially making them less effective.
          This is documented explicitly in the{" "}
          <EL href="https://www.medicines.org.uk/emc/product/15481">
            Mounjaro SmPC
          </EL>
          .
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 3 ── */}
      <GuideSection id="why-happens" heading="Why This Happens">
        <GuideParagraph>
          As the body loses weight and metabolic health improves—a core outcome
          of treatment with{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL>—a chain of hormonal
          changes takes place:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Insulin sensitivity improves, which reduces circulating insulin levels.",
            "Sex hormone-binding globulin (SHBG) levels normalise, affecting the availability of reproductive hormones.",
            "Ovulation may resume in people who previously had ovulatory dysfunction—particularly those with polycystic ovary syndrome (PCOS).",
          ]}
        />
        <GuideParagraph>
          These are well-understood physiological responses to meaningful weight
          loss. They are not unexpected side effects unique to Mounjaro—they
          occur with any effective weight loss intervention, including{" "}
          <IL href="/what-is-wegovy">Wegovy</IL> and{" "}
          <IL href="/what-is-saxenda">Saxenda</IL>. Mounjaro's speed and
          magnitude of weight loss may simply make them more pronounced, as
          supported by the{" "}
          <EL href="https://www.nice.org.uk/guidance/cg189">
            NICE obesity guidelines
          </EL>
          .
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 4 ── */}
      <GuideSection id="not-new" heading="Why This Is Not New Information">
        <GuideParagraph>
          The fertility-related effects and contraceptive interaction of
          tirzepatide are documented across multiple regulatory and clinical
          sources:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              The{" "}
              <EL href="https://www.medicines.org.uk/emc/product/15481">
                Summary of Product Characteristics (SmPC)
              </EL>{" "}
              for Mounjaro—the official prescribing reference—explicitly notes
              the potential impact on oral contraceptive absorption.
            </>,
            "Patient information leaflets distributed with the medication include contraception guidance.",
            <>
              <EL href="https://www.england.nhs.uk/long-read/tirzepatide-in-primary-care-for-weight-management-information-on-wraparound-care/">
                NHS guidance on tirzepatide
              </EL>{" "}
              recommends discussing contraception with your clinician before
              starting treatment.
            </>,
          ]}
        />
        <GuideParagraph>
          If a patient was not informed about this before starting treatment, it
          represents a gap in the consultation process—not a failure of the
          medication to disclose a hidden risk.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 5 ── */}
      <GuideSection id="contraception" heading="Why Contraception Is Important">
        <GuideParagraph>
          If pregnancy is not planned, effective contraception is essential
          while using <IL href="/what-is-mounjaro">Mounjaro</IL>. Healthcare
          professionals may recommend:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Reviewing your current contraception method to confirm it remains appropriate.",
            "Using additional contraception, such as a barrier method, alongside oral contraceptive pills—particularly during the first four weeks of treatment or if vomiting and diarrhoea occur.",
            "Considering non-oral contraception methods, such as a hormonal IUD, implant, or injection, which are unaffected by gastric emptying changes.",
          ]}
        />
        <GuideParagraph>
          The decision about which contraception is most appropriate should
          always be made in discussion with a qualified healthcare professional.
          The{" "}
          <EL href="https://www.england.nhs.uk/long-read/tirzepatide-in-primary-care-for-weight-management-information-on-wraparound-care/">
            NHS Mounjaro page
          </EL>{" "}
          provides additional guidance on this.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 6 ── */}
      <GuideSection id="media" heading="What Media Headlines Often Miss">
        <GuideParagraph>
          Many news reports focus on "unexpected pregnancy" without providing
          the clinical context. Specifically, they often fail to explain:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              That improved fertility is an expected and documented consequence
              of the weight loss{" "}
              <IL href="/what-is-mounjaro">Mounjaro</IL> produces—not a
              hidden side effect.
            </>,
            "That Mounjaro itself does not cause pregnancy—the increased risk comes from hormonal changes and, in some cases, reduced oral contraceptive effectiveness.",
            "That this risk can be effectively managed with appropriate contraception and clinical guidance.",
          ]}
        />
        <GuideParagraph>
          The same dynamic applies, to varying degrees, to other GLP-1
          treatments including{" "}
          <IL href="/what-is-wegovy">Wegovy</IL> and{" "}
          <IL href="/what-is-saxenda">Saxenda</IL>. Framing this as an
          alarming or hidden risk specific to Mounjaro misrepresents the
          evidence.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 7 ── */}
      <GuideSection id="what-to-do" heading="What You Should Do">
        <GuideParagraph>
          If you are currently taking{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> or are considering
          starting treatment, take the following steps:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              Read the{" "}
              <EL href="https://www.medicines.org.uk/emc/product/15481">
                patient information leaflet
              </EL>
              —it contains specific guidance on contraception and pregnancy.
            </>,
            "Speak to your prescribing clinician or pharmacist about your contraception options before or at the start of treatment.",
            "Ensure you have a contraception plan that accounts for both the fertility changes and the potential reduction in oral contraceptive effectiveness.",
            "If you think you may be pregnant, stop treatment and seek medical advice promptly.",
            <>
              Use our{" "}
              <IL href="/mounjaro-price-comparison">
                Mounjaro price comparison
              </IL>{" "}
              to find a verified UK clinic to speak to about your treatment
              plan.
            </>,
          ]}
        />
      </GuideSection>

      {/* ── Key Takeaways ── */}
      <GuideKeyTakeaways
        items={[
          "Mounjaro does not directly cause pregnancy, but it can increase the chance of conception indirectly through weight loss and hormonal improvements.",
          "Mounjaro's effect on gastric emptying may reduce the absorption and effectiveness of oral contraceptive pills.",
          "These effects are documented in the SmPC, NHS guidance, and clinical prescribing literature—this is not new or hidden information.",
          "Appropriate contraception is essential while taking Mounjaro if pregnancy is not planned.",
          "Speak to a healthcare professional to review your contraception options before starting treatment.",
        ]}
      />

      {/* ── Related Guides ── */}
      <GuideRelatedGuides guides={RELATED_GUIDES} />

      {/* ── References ── */}
      <GuideReferences items={REFERENCES} />

      {/* ── Disclaimer ── */}
      <GuideDisclaimer>
        This content is for informational purposes only and does not replace
        professional medical advice. Always consult a qualified healthcare
        professional before starting, stopping, or changing any medication or
        contraception.{" "}
        <IL href="/what-is-mounjaro">Mounjaro</IL> is a prescription-only
        medicine and must be prescribed by a registered clinician following an
        appropriate consultation.
      </GuideDisclaimer>

      {/* ── FAQ ── */}
      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
