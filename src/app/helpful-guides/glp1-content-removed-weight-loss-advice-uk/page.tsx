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
  slug: "glp1-content-removed-weight-loss-advice-uk",
  title: "Why GLP-1 Content Is Being Removed: Impact on Weight Loss Advice in the UK",
  description: "Social media platforms are restricting content about Mounjaro, Wegovy, and GLP-1 medications. We examine what is being removed, the regulatory context, and what patients are losing.",
  openGraphTitle: "Why GLP-1 Content Is Being Removed: Impact on Weight Loss Advice in the UK",
});


const TOC = [
  { id: "restrictions", label: "Growing Restrictions on Weight Loss Content" },
  { id: "what-removed", label: "What Is Being Restricted?" },
  { id: "patient-loss", label: "What Patients Are Losing" },
  { id: "regulation", label: "The Role of UK Regulation" },
  { id: "over-moderation", label: "The Problem With Over-Moderation" },
  { id: "commercial", label: "Commercial Influence & Competition" },
  { id: "uneven", label: "Uneven Enforcement Concerns" },
  { id: "impact", label: "Impact on Patients" },
  { id: "what-patients-need", label: "What Patients Need" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "Why is weight loss content being removed from social media?",
    a: "Platforms like TikTok have introduced restrictions on health-related content, including content about GLP-1 medications such as Mounjaro and Wegovy. The stated reason is to limit misleading health claims. However, the enforcement appears to be broad, with legitimate and compliant content also being affected.",
  },
  {
    q: "Is it illegal to talk about GLP-1 medications online?",
    a: "No. Discussing GLP-1 medications is not illegal. However, the direct advertising of prescription-only medicines to the public is prohibited under the Human Medicines Regulations 2012. Content that promotes a specific prescription product for commercial purposes crosses this line, but general educational or patient experience content does not.",
  },
  {
    q: "How can I find reliable information about GLP-1 treatments?",
    a: "Use regulated sources and verified platforms that comply with UK healthcare guidelines. Look for information from the MHRA, NHS, and regulated comparison services like Health Wise. Be cautious of unverified social media accounts making specific medical or treatment claims.",
  },
  {
    q: "Are smaller clinics being affected more than larger providers?",
    a: "There are growing reports and concerns that enforcement of content restrictions has been uneven, with smaller digital clinics experiencing more significant impact than established providers. This raises questions about competitive fairness and whether safety concerns are the sole driver of moderation decisions.",
  },
  {
    q: "What should I do if I can no longer find information I need?",
    a: "If you are struggling to find reliable guidance, speak directly to a regulated healthcare provider or your GP. You can also consult official sources such as the NHS website, the MHRA, and regulated comparison platforms that follow UK healthcare communication standards.",
  },
  {
    q: "Where can I compare GLP-1 treatment prices reliably?",
    a: "Health Wise provides unbiased, verified price comparisons for Wegovy, Mounjaro, and Saxenda from GPhC-registered UK pharmacies. Our listings are not influenced by advertising and comply with UK healthcare communication standards.",
  },
];

const REFERENCES = [
  {
    label: "MHRA — Human Medicines Regulations 2012",
    description:
      "The UK legal framework governing the advertising and promotion of prescription-only medicines to the public.",
    href: "https://www.legislation.gov.uk/uksi/2012/1916/contents",
  },
  {
    label: "MHRA — Guidance on advertising medicines",
    description:
      "Official MHRA guidance on what constitutes permissible and prohibited promotion of prescription medicines in the UK.",
    href: "https://www.gov.uk/guidance/advertise-your-medicines",
  },
  {
    label: "NHS — Wegovy (semaglutide) information",
    description:
      "NHS clinical information on Wegovy, including how it works, prescribing criteria, and patient safety guidance.",
    href: "https://www.nhs.uk/medicines/semaglutide-weight-loss/",
  },
  {
    label: "NHS — Tirzepatide (Mounjaro) information",
    description:
      "NHS clinical information on Mounjaro, including side effects, dosing, and important safety considerations.",
    href: "https://www.nhs.uk/medicines/tirzepatide/",
  },
  {
    label: "GPhC — Registered pharmacy standards",
    description:
      "The standards that registered UK pharmacies must meet, relevant to patients assessing the legitimacy of online providers.",
    href: "https://www.pharmacyregulation.org/standards/standards-registered-pharmacies",
  },
  {
    label: "Compare GLP-1 treatment prices — Health Wise",
    description:
      "Transparent, verified price comparisons for Wegovy, Mounjaro, and Saxenda from GPhC-registered pharmacies.",
    href: "/prices/cheapest-options-uk",
    external: false,
  },
  {
    label: "What is Wegovy? Full guide — Health Wise",
    description:
      "Independent guide to Wegovy (semaglutide) — how it works, expected outcomes, and verified UK pricing.",
    href: "/what-is-wegovy",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards",
    category: "Pharmacy Safety",
    title: "How We Verify UK Pharmacies: GPhC Checks Explained",
    description:
      "How Health Wise validates every listed pharmacy—and why independent verification matters more when platform content is restricted.",
  },
  {
    href: "/helpful-guides/mounjaro-pregnancy-risk-fertility-contraception",
    category: "Medications",
    title: "Mounjaro and Pregnancy Risk: Fertility & Contraception",
    description:
      "The clinical facts behind Mounjaro's indirect effect on fertility—information that media coverage often gets wrong.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Why GLP-1 Content Is Being Removed: Impact on Weight Loss Advice in the UK",
  description:
    "Social media platforms are restricting content about Mounjaro, Wegovy, and GLP-1 medications. We examine what is being removed, the regulatory context, and what patients are losing.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  about: [
    { "@type": "Thing", name: "GLP-1 medications" },
    { "@type": "Thing", name: "social media health content moderation" },
    { "@type": "Organization", name: "MHRA" },
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteOrigin()}${helpfulGuidePath("glp1-content-removed-weight-loss-advice-uk")}`,
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

export default function GuideGlp1ContentRemoval() {
  return (
    <GuideLayout
      slug="glp1-content-removed-weight-loss-advice-uk"
      category="Regulation"
      categorySlug="regulation"
      title="Why GLP-1 Content Is Being Removed: Impact on Weight Loss Advice in the UK"
      description="Platforms are suppressing content about Mounjaro, Wegovy, and other GLP-1 treatments. We look at what is being removed, who is affected, and what it means for patients seeking reliable health information."
      readTime="4 min read"
      lastUpdated="April 2026"
      toc={TOC}
      internalLinks={internalLinksFor("guideGlp1")}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      {/* ── Section 1 ── */}
      <GuideSection id="restrictions" heading="Growing Restrictions on Weight Loss Content">
        <GuideParagraph>
          Social media platforms, including TikTok, have significantly increased
          restrictions on content related to weight loss treatments—particularly
          GLP-1 medications such as{" "}
          <IL href="/what-is-mounjaro">Mounjaro (tirzepatide)</IL> and{" "}
          <IL href="/what-is-wegovy">Wegovy (semaglutide)</IL>. Similar
          restrictions are also affecting content about{" "}
          <IL href="/what-is-saxenda">Saxenda (liraglutide)</IL>.
        </GuideParagraph>
        <GuideParagraph>
          These changes are officially positioned as patient safety measures
          aimed at reducing misleading health claims. In practice, they are also
          limiting access to valuable, compliant health information—including
          patient experiences, safety guidance, and content from regulated
          providers like{" "}
          <IL href="/">Health Wise</IL>.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 2 ── */}
      <GuideSection id="what-removed" heading="What Is Being Restricted?">
        <GuideParagraph>
          Content containing specific terms associated with GLP-1 medications is
          increasingly removed, suppressed algorithmically, or prevented from
          being amplified. Affected content includes posts referencing:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <><IL href="/what-is-mounjaro">Mounjaro</IL> and tirzepatide.</>,
            <><IL href="/what-is-wegovy">Wegovy</IL> and semaglutide.</>,
            <>
              Weight loss injections and{" "}
              <IL href="/compare/best-weight-loss-injections-uk">
                GLP-1 receptor agonists
              </IL>{" "}
              more broadly.
            </>,
            <>
              Provider comparisons,{" "}
              <IL href="/prices/cheapest-options-uk">pricing discussions</IL>,
              and treatment access.
            </>,
          ]}
        />
        <GuideParagraph>
          The restrictions apply inconsistently. Content that is clearly
          commercial or misleading is the intended target—but automated
          enforcement tools are poorly calibrated, and a significant volume of
          educational content is caught in the same net.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 3 ── */}
      <GuideSection id="patient-loss" heading="What Patients Are Losing">
        <GuideParagraph>
          The practical consequence for patients is a reduction in access to
          peer-level information many people rely on when navigating new
          treatments. This includes:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              Real patient experiences that help set realistic expectations
              about side effects, outcomes, and timelines for treatments like{" "}
              <IL href="/what-is-mounjaro">Mounjaro</IL> and{" "}
              <IL href="/what-is-wegovy">Wegovy</IL>.
            </>,
            <>
              Safety warnings about unregulated providers. Our guide on{" "}
              <IL href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                how we verify UK pharmacies
              </IL>{" "}
              explains why this matters.
            </>,
            "Honest, first-hand discussions about the difficulties of access, cost, and treatment continuation.",
            "Content from regulated smaller clinics and comparison platforms that operate within the law.",
          ]}
        />
        <GuideParagraph>
          When this content disappears, the vacuum is not filled by better
          sources. It is often filled by unverified content that evades
          detection by avoiding flagged terms—precisely the opposite of what
          moderation intends.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 4 ── */}
      <GuideSection id="regulation" heading="The Role of UK Regulation">
        <GuideParagraph>
          In the UK, the{" "}
          <EL href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency">
            Medicines and Healthcare products Regulatory Agency (MHRA)
          </EL>{" "}
          enforces advertising standards for prescription medicines under the{" "}
          <EL href="https://www.legislation.gov.uk/uksi/2012/1916/contents">
            Human Medicines Regulations 2012
          </EL>
          . These regulations prohibit the direct advertising of
          prescription-only medicines (POMs) to the general public.
        </GuideParagraph>
        <GuideParagraph>
          This means a commercial clinic cannot run an advertisement promoting{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> to a consumer audience.
          However, there is an important legal distinction:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>Advertising</strong> — Promoting a specific prescription
              product for commercial gain. Prohibited under the{" "}
              <EL href="https://www.gov.uk/guidance/advertise-your-medicines">
                MHRA advertising rules
              </EL>
              .
            </>,
            <>
              <strong>Education</strong> — Providing factual information about
              a treatment, its effects, or its regulatory status. Permitted, and
              what platforms like{" "}
              <IL href="/">Health Wise</IL> do.
            </>,
            <>
              <strong>Patient discussion</strong> — Sharing personal treatment
              experiences in a non-commercial context. Generally permitted.
            </>,
          ]}
        />
        <GuideParagraph>
          Platforms applying blanket keyword restrictions are, in many cases,
          suppressing content that falls well within legal boundaries.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 5 ── */}
      <GuideSection id="over-moderation" heading="The Problem With Over-Moderation">
        <GuideParagraph>
          Removing genuinely misleading content is legitimate and necessary.
          The problem arises when moderation is so broad that it also removes
          content that serves patients well. Excessive restriction can:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Limit patient access to education about treatments they are already taking or considering.",
            "Reduce the peer support networks that help patients manage side effects and expectations.",
            "Suppress compliant providers whose content is legitimate but triggers automated keyword filters.",
            "Create an asymmetry where well-resourced organisations can work around restrictions, while smaller and independent voices cannot.",
          ]}
        />
        <GuideParagraph>
          There is also a paradoxical risk: when legitimate information becomes
          harder to find, patients may turn to less accurate or less regulated
          sources—precisely the outcome that moderation is meant to prevent.
          This is why platforms like{" "}
          <IL href="/">Health Wise</IL> that verify content quality and
          pharmacy compliance matter more, not less, in a restricted
          information environment.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 6 ── */}
      <GuideSection id="commercial" heading="Commercial Influence and Market Competition">
        <GuideParagraph>
          The GLP-1 weight loss treatment market in the UK is highly
          competitive. Smaller digital clinics often offer faster access, lower
          prices—as visible on our{" "}
          <IL href="/prices/cheapest-options-uk">price comparison tool</IL>
          —and more flexible service models than established providers.
        </GuideParagraph>
        <GuideParagraph>
          This competitive dynamic creates an additional concern: that content
          suppression may not be driven exclusively by safety priorities. There
          are growing questions about whether:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Larger providers with significant commercial influence are better positioned to shape platform policies.",
            "Smaller competitors are disproportionately affected by content restrictions that their larger rivals are better equipped to navigate.",
            "Commercial pressure is playing a role alongside genuine safety concerns in moderation decisions.",
          ]}
        />
        <GuideParagraph>
          These concerns warrant scrutiny. Moderation that primarily
          disadvantages smaller, independent providers should be examined for
          competitive fairness as well as safety effectiveness.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 7 ── */}
      <GuideSection id="uneven" heading="Uneven Enforcement Concerns">
        <GuideParagraph>
          Reports from regulated providers and patient advocacy groups suggest
          that enforcement of content restrictions has not been applied
          consistently:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Smaller clinics and independent practitioners face more frequent content removal than established providers.",
            "Content from larger organisations remains accessible even when it is substantively similar to removed content from smaller sources.",
            "Appeal processes are slow, opaque, and difficult to navigate—particularly for individuals and small businesses.",
          ]}
        />
        <GuideParagraph>
          Uneven enforcement does not simply limit harmful content—it
          systematically disadvantages certain providers while leaving the
          broader information landscape unchanged. Independent, regulated
          comparison platforms become more important in this environment.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 8 ── */}
      <GuideSection id="impact" heading="Impact on Patients">
        <GuideParagraph>
          The cumulative effect of broad content restrictions on patients is
          significant:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              Reduced access to reliable, peer-level information about
              treatments like{" "}
              <IL href="/what-is-mounjaro">Mounjaro</IL> and{" "}
              <IL href="/what-is-wegovy">Wegovy</IL> they may already be using.
            </>,
            "Greater exposure to misinformation from sources that avoid flagged terms by using obfuscating language.",
            <>
              Difficulty identifying safe, regulated providers. Our{" "}
              <IL href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                pharmacy verification guide
              </IL>{" "}
              explains what to look for.
            </>,
            "Loss of the informal safety net that patient communities provide—particularly around early side effect identification.",
          ]}
        />
        <GuideParagraph>
          Patients navigating weight loss treatment decisions deserve better
          access to accurate information, not less.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 9 ── */}
      <GuideSection id="what-patients-need" heading="What Patients Need">
        <GuideParagraph>
          Effective moderation and genuine patient safety are not mutually
          exclusive—but they require more precision than keyword blocking
          delivers. What patients need is:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              Access to accurate, evidence-based information about{" "}
              <IL href="/compare/best-weight-loss-injections-uk">
                GLP-1 treatments
              </IL>{" "}
              and their effects.
            </>,
            <>
              Clear pathways to{" "}
              <IL href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                safe, regulated providers
              </IL>{" "}
              who operate within UK law.
            </>,
            <>
              Transparent pricing and service information that enables
              meaningful{" "}
              <IL href="/compare/wegovy-vs-mounjaro">comparison</IL>.
            </>,
            "Peer support spaces where real patient experiences can be shared honestly.",
          ]}
        />
        <GuideParagraph>
          Platforms have a role to play in protecting patients from
          misinformation. But moderation must preserve the content that
          genuinely helps people.
        </GuideParagraph>

        <GuideSubSection heading="Where to Find Reliable Information">
          <GuideParagraph>
            If you are seeking trustworthy guidance on GLP-1 treatments, use
            regulated and verified sources:
          </GuideParagraph>
          <GuideBulletListRich
            items={[
              <>
                <EL href="https://www.nhs.uk/medicines/semaglutide-weight-loss/">
                  NHS — Wegovy (semaglutide)
                </EL>{" "}
                and{" "}
                <EL href="https://www.nhs.uk/medicines/tirzepatide/">
                  NHS — Mounjaro (tirzepatide)
                </EL>{" "}
                for clinical information.
              </>,
              <>
                The{" "}
                <EL href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency">
                  MHRA
                </EL>{" "}
                for regulatory information and medication safety updates.
              </>,
              "Your GP or a regulated UK prescriber for personalised clinical advice.",
              <>
                <IL href="/">Health Wise</IL> — a regulated comparison platform
                that verifies every pharmacy it lists and follows UK healthcare
                communication standards. Start with our{" "}
                <IL href="/prices/cheapest-options-uk">price comparison</IL> or{" "}
                <IL href="/compare/wegovy-vs-mounjaro">
                  treatment comparison
                </IL>{" "}
                pages.
              </>,
            ]}
          />
        </GuideSubSection>
      </GuideSection>

      {/* ── Key Takeaways ── */}
      <GuideKeyTakeaways
        items={[
          "Social media platforms are broadly restricting GLP-1 content, including content that is compliant and educational.",
          "UK law prohibits direct advertising of prescription medicines but permits education and patient discussion.",
          "Over-moderation risks reducing access to legitimate health information and may disproportionately affect smaller providers.",
          "Patients are losing access to peer support and real-world safety information as a result of broad content suppression.",
          "Use regulated sources—including your GP, the MHRA, the NHS, and verified comparison platforms—for trustworthy GLP-1 information.",
        ]}
      />

      {/* ── Related Guides ── */}
      <GuideRelatedGuides guides={RELATED_GUIDES} />

      {/* ── References ── */}
      <GuideReferences items={REFERENCES} />

      {/* ── Disclaimer ── */}
      <GuideDisclaimer>
        This guide is for informational purposes only. It does not constitute
        legal advice. Information about GLP-1 treatments should be sought from
        regulated healthcare professionals.{" "}
        <IL href="/">Health Wise</IL> is an independent comparison platform
        and is not affiliated with any pharmaceutical manufacturer, social
        media platform, or regulatory body.
      </GuideDisclaimer>

      {/* ── FAQ ── */}
      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
