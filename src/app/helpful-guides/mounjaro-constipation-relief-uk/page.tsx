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
  slug: "mounjaro-constipation-relief-uk",
  title: "Mounjaro Constipation: Easy Ways to Find Relief (UK Guide)",
  description: "Constipation is a common early side effect of Mounjaro. Here's why it happens—and the most effective hydration, fibre, movement, routine, and OTC strategies to ease symptoms.",
  openGraphTitle: "Mounjaro Constipation: Easy Ways to Find Relief (UK Guide)",
  openGraphDescription: "Constipation is a common early side effect of Mounjaro. Here's why it happens and how to manage it with hydration, fibre, movement, and OTC options.",
});


const TOC = [
  { id: "why-it-happens", label: "Why Mounjaro Causes Constipation" },
  { id: "hydration", label: "Stay Hydrated" },
  { id: "fibre", label: "Increase Fibre Gradually" },
  { id: "activity", label: "Stay Active" },
  { id: "routine", label: "Build a Bathroom Routine" },
  { id: "otc", label: "Over-the-Counter Options" },
  { id: "when-seek-help", label: "When to Seek Help" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "Is constipation a common side effect of Mounjaro?",
    a: "Yes—constipation is one of the most commonly reported gastrointestinal side effects of Mounjaro (tirzepatide). It is caused by the medication slowing gastric emptying and overall gut motility. For most patients, it is mild and temporary, improving within the first few weeks of treatment.",
  },
  {
    q: "How long does Mounjaro constipation last?",
    a: "For most patients, constipation is most pronounced in the first 2–4 weeks of treatment or following a dose increase. As the body adapts to the medication, gut motility typically stabilises. Persistent constipation beyond 4–6 weeks, or constipation that is significantly affecting quality of life, warrants discussion with your prescribing clinician.",
  },
  {
    q: "What is the best thing to drink for constipation on Mounjaro?",
    a: "Water is the most important—aim for 6–8 glasses per day. Warm water or warm lemon water in the morning can help stimulate bowel motility. Peppermint and herbal teas are good alternatives. Avoid large amounts of caffeine, which can contribute to dehydration and worsen constipation.",
  },
  {
    q: "What foods help constipation on Mounjaro?",
    a: "Foods high in soluble and insoluble fibre are most effective: oats, wholemeal bread, berries, pears (with skin), kiwi, chia seeds, flaxseeds, carrots, spinach, and courgette. Increase fibre gradually—adding too much too quickly can cause bloating, which is already more likely on GLP-1 medications.",
  },
  {
    q: "Can I take laxatives while on Mounjaro?",
    a: "Yes—over-the-counter options like osmotic laxatives (e.g. Movicol, lactulose) or fibre supplements (psyllium husk) are generally safe alongside Mounjaro. Ask your pharmacist for guidance specific to your situation. Avoid regular long-term use of stimulant laxatives without clinical advice, as these can affect natural bowel function over time.",
  },
  {
    q: "Does increasing my Mounjaro dose make constipation worse?",
    a: "Yes, constipation (and other gastrointestinal symptoms) often temporarily worsen when the dose is increased. This is because higher doses slow gut motility more significantly. The same management strategies apply—hydration, fibre, movement—and symptoms typically settle within 1–2 weeks of the new dose.",
  },
];

const REFERENCES = [
  {
    label: "NHS — Constipation",
    description:
      "NHS guidance on constipation causes, dietary management, lifestyle changes, and when to seek medical help.",
    href: "https://www.nhs.uk/conditions/constipation/",
  },
  {
    label: "NHS — Fibre in your diet",
    description:
      "NHS overview of dietary fibre—recommended intake, best food sources, and digestive health benefits.",
    href: "https://www.nhs.uk/live-well/eat-well/digestive-health/how-to-get-more-fibre-into-your-diet/",
  },
  {
    label: "Mounjaro (tirzepatide) SmPC",
    description:
      "Official UK prescribing information for Mounjaro, including the full adverse effects profile and patient counselling guidance.",
    href: "https://www.medicines.org.uk/emc/product/15481",
  },
  {
    label: "Mounjaro side effects guide — Health Wise",
    description:
      "Our complete guide to managing all Mounjaro side effects—from nausea and constipation to injection site reactions.",
    href: "/helpful-guides/mounjaro-side-effects-uk",
    external: false,
  },
  {
    label: "Mounjaro nutrition guide UK — Health Wise",
    description:
      "Evidence-based dietary advice for Mounjaro patients—including fibre-rich foods to support digestive health.",
    href: "/helpful-guides/mounjaro-nutrition-guide-uk",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/mounjaro-side-effects-uk",
    category: "Side Effects",
    title: "Mounjaro Side Effects: What to Expect and How to Manage Them",
    description:
      "A complete overview of all Mounjaro side effects—digestive, systemic, and rare—with management strategies for each.",
  },
  {
    href: "/helpful-guides/mounjaro-nutrition-guide-uk",
    category: "Nutrition",
    title: "Mounjaro Nutrition Guide: What to Eat for Better Results",
    description:
      "Evidence-based dietary advice—including fibre-rich foods and hydration strategies that also support digestive health.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mounjaro Constipation: Easy Ways to Find Relief",
  description:
    "Constipation is a common early side effect of Mounjaro. Here's why it happens and how to manage it with hydration, fibre, movement, and OTC options.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteOrigin()}${helpfulGuidePath("mounjaro-constipation-relief-uk")}`,
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

export default function GuideMounjaroConstipation() {
  return (
    <GuideLayout
      slug="mounjaro-constipation-relief-uk"
      category="Side Effects"
      categorySlug="side-effects"
      title="Mounjaro Constipation: Easy Ways to Find Relief (UK Guide)"
      description="Constipation is one of the most commonly reported early side effects of Mounjaro. The mechanism is straightforward—the medication slows gut motility—and the solutions are equally practical. Here's what works."
      readTime="3 min read"
      lastUpdated="April 2026"
      toc={TOC}
      internalLinks={internalLinksFor("guideMounjaroConstipation")}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      <GuideSection id="why-it-happens" heading="Why Mounjaro Causes Constipation">
        <GuideParagraph>
          <IL href="/what-is-mounjaro">Mounjaro (tirzepatide)</IL> slows
          gastric emptying—meaning food moves through the digestive system more
          slowly. This is central to how the medication reduces appetite and
          improves blood sugar control. But it also reduces gut motility
          throughout the intestines, which can result in less frequent or
          harder-to-pass bowel movements.
        </GuideParagraph>
        <GuideParagraph>
          Constipation is most common:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "In the first 2–4 weeks of treatment as the body adapts to the medication",
            "Following a dose increase — each new dose level briefly intensifies the slowing effect",
            "When overall food and fluid intake drops significantly alongside reduced appetite",
          ]}
        />
        <GuideCallout variant="info">
          For most patients, constipation on{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> is mild, manageable,
          and temporary. The strategies below address each contributing factor
          directly. For a broader overview of all side effects, see our{" "}
          <IL href="/helpful-guides/mounjaro-side-effects-uk">
            complete Mounjaro side effects guide
          </IL>
          .
        </GuideCallout>
      </GuideSection>

      <GuideSection id="hydration" heading="Stay Hydrated">
        <GuideParagraph>
          Dehydration is one of the most common drivers of constipation.
          Adequate fluid intake softens stool and supports overall digestive
          function. Because{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> reduces appetite and
          thirst cues alongside hunger, fluid intake often drops—making
          deliberate hydration especially important.
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Aim for 6–8 glasses (approximately 1.5–2 litres) of water daily",
            "Start the morning with a glass of warm water or warm lemon water — warmth stimulates gut motility",
            "Try peppermint tea or herbal teas — naturally stimulating for digestion and caffeine-free",
            "Use sugar-free flavoured drinks or diluted squash for variety if plain water feels unappealing",
          ]}
        />
        <GuideCallout variant="tip">
          Good hydration amplifies the effectiveness of fibre — soluble fibre
          absorbs water to form a gel that softens stool and makes it easier
          to pass. The two strategies work best together.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="fibre" heading="Increase Fibre Gradually">
        <GuideParagraph>
          Dietary fibre regulates bowel movements by adding bulk to stool and
          supporting the natural movement of the intestines. The{" "}
          <EL href="https://www.nhs.uk/live-well/eat-well/digestive-health/how-to-get-more-fibre-into-your-diet/">
            NHS recommends 30g of fibre per day
          </EL>
          —most UK adults consume significantly less.
        </GuideParagraph>
        <GuideParagraph>
          The key is to increase intake gradually. Adding too much fibre too
          quickly—particularly on{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL>, where digestion is
          already slowed—can cause bloating and gas before providing relief.
        </GuideParagraph>
        <GuideParagraph>
          Good fibre-rich foods to incorporate progressively:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Whole grains — oats, wholemeal bread, high-fibre cereals, brown rice",
            "Fruits — berries, pears (with skin on), kiwis (particularly effective for constipation), apples",
            "Seeds — chia seeds and ground flaxseeds (start with one teaspoon and build up slowly)",
            "Vegetables — carrots, spinach, courgette, broccoli, sweet potato",
          ]}
        />
        <GuideParagraph>
          For detailed guidance on building a balanced diet while on Mounjaro,
          see our{" "}
          <IL href="/helpful-guides/mounjaro-nutrition-guide-uk">Mounjaro nutrition guide</IL>
          .
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="activity" heading="Stay Active">
        <GuideParagraph>
          Physical activity directly stimulates gut motility. Even light
          movement can make a meaningful difference to constipation—and
          exercise has additional benefits for metabolic health and overall
          Mounjaro outcomes.
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Walk after meals — a 10–15 minute walk after eating can significantly stimulate digestion",
            "Try gentle stretching or yoga — poses involving twisting and abdominal engagement are particularly helpful",
            "Avoid prolonged sitting — take regular breaks to move, especially if you work at a desk",
            "Aim for at least 30 minutes of moderate activity most days of the week",
          ]}
        />
      </GuideSection>

      <GuideSection id="routine" heading="Build a Bathroom Routine">
        <GuideParagraph>
          Establishing consistent habits can encourage the body's natural
          bowel rhythm—which is regulated by internal circadian cues that
          respond well to routine.
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>Use the toilet at the same time each day</strong> —
              mornings after breakfast are typically when the gastrocolic reflex
              (the body's natural bowel-stimulating response to eating) is
              strongest.
            </>,
            <>
              <strong>Do not rush or strain</strong> — straining worsens
              discomfort and can cause secondary issues. Give yourself adequate
              time without pressure.
            </>,
            <>
              <strong>Use a footstool</strong> — elevating the feet while
              seated on the toilet changes the anorectal angle to a more
              anatomically natural position, making evacuation easier and
              reducing straining.
            </>,
          ]}
        />
      </GuideSection>

      <GuideSection id="otc" heading="Over-the-Counter Options">
        <GuideParagraph>
          If dietary and lifestyle measures are not sufficient, several
          over-the-counter options are generally safe alongside{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL>. Ask your pharmacist
          before starting any new product:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>Osmotic laxatives</strong> (e.g. Movicol, lactulose) —
              draw water into the bowel to soften stool and stimulate movement.
              Well tolerated and suitable for regular short-term use.
            </>,
            <>
              <strong>Fibre supplements</strong> (e.g. psyllium husk / Fybogel)
              — a concentrated source of soluble fibre that adds bulk to stool.
              Must be taken with plenty of water to be effective.
            </>,
            <>
              <strong>Glycerin suppositories</strong> — a locally acting option
              for immediate relief. Does not interact with oral medications.
            </>,
          ]}
        />
        <GuideCallout variant="warning">
          Always follow pharmacist or package guidance. Avoid long-term regular
          use of stimulant laxatives (e.g. senna) without clinical advice, as
          they can reduce natural bowel muscle function over time. Discuss
          persistent constipation with your GP or prescribing clinician.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="when-seek-help" heading="When to Seek Help">
        <GuideParagraph>
          Most constipation on{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> resolves with the
          strategies above. However, contact a healthcare professional if you
          experience:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "No bowel movement for 5 or more days despite trying self-care measures",
            "Severe abdominal pain or significant bloating that does not improve",
            "Blood in stools or on toilet paper — always requires medical assessment",
            "Nausea and vomiting alongside constipation — may indicate more significant bowel slowing",
            "Constipation that significantly worsens after a dose increase and does not improve within 2 weeks",
          ]}
        />
        <GuideParagraph>
          The{" "}
          <EL href="https://www.nhs.uk/conditions/constipation/">
            NHS constipation guidance
          </EL>{" "}
          sets out clear criteria for when to seek medical help. In the UK,
          you can also call NHS 111 for triage advice.
        </GuideParagraph>
      </GuideSection>

      <GuideKeyTakeaways
        items={[
          "Mounjaro causes constipation by slowing gut motility—a direct effect of the medication's mechanism.",
          "Hydration is the most immediate lever: aim for 6–8 glasses of water daily; warm water and peppermint tea are particularly effective.",
          "Increase fibre gradually from whole grains, fruits, seeds, and vegetables—too much too fast causes bloating.",
          "Light movement after meals, consistent bathroom timing, and a footstool for posture can all make a meaningful difference.",
          "OTC osmotic laxatives (Movicol) and fibre supplements (psyllium husk) are safe short-term options; consult a pharmacist.",
          "Seek medical help for blood in stool, no movement for 5+ days, or severe abdominal pain.",
        ]}
      />

      <GuideRelatedGuides guides={RELATED_GUIDES} />
      <GuideReferences items={REFERENCES} />

      <GuideDisclaimer>
        This guide is for informational purposes only. Persistent or severe
        constipation should be assessed by a qualified healthcare professional.
        Do not take any new medications or supplements without consulting your
        pharmacist or clinician.
      </GuideDisclaimer>

      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
