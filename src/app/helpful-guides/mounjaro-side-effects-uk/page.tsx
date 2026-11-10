import { helpfulGuidePath } from "@/lib/helpful-guide-slugs";
import { siteOrigin } from "@/lib/seo/site-origin";
import { buildGuideShareMetadata } from "@/lib/seo/guide-share-metadata";
import {
  GuideLayout,
  GuideSection,
  GuideParagraph,
  GuideBulletList,
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

/**
 * Rewrite of 5 Nov 2026 from the "Mounjaro side effects UK" content, SEO settings and schema briefs.
 * Every medical statement follows the UK Mounjaro KwikPen patient leaflet (medicines.org.uk, product 15483).
 * Where the leaflet gives a different frequency for weight management, type 2 diabetes or the
 * cardiovascular study, the page says so and points to the leaflet instead of picking one.
 * No clinical-review claim is made: the page is not marked as reviewed.
 */

const LEAFLET_URL = "https://www.medicines.org.uk/emc/product/15483/pil";
const YELLOW_CARD_URL = "https://yellowcard.mhra.gov.uk";
const H1 = "Mounjaro Side Effects UK: What the Patient Leaflet Says";
const META_DESCRIPTION =
  "Mounjaro side effects in the UK: the very common, common, uncommon and rare effects in the patient leaflet, and when to get help.";

export const metadata = buildGuideShareMetadata({
  slug: "mounjaro-side-effects-uk",
  title: "Mounjaro Side Effects UK: Leaflet Guide",
  description: META_DESCRIPTION,
  openGraphTitle: "Mounjaro Side Effects UK: Leaflet Guide",
});

const TOC = [
  { id: "at-a-glance", label: "Side Effects at a Glance" },
  { id: "very-common", label: "Very Common Side Effects" },
  { id: "common", label: "Common Side Effects" },
  { id: "uncommon-rare", label: "Uncommon and Rare Side Effects" },
  { id: "timing", label: "When Do Side Effects Start?" },
  { id: "by-dose", label: "Side Effects by Dose" },
  { id: "women-men", label: "Women, Men and People Without Diabetes" },
  { id: "long-term", label: "Long Term Use and Cancer" },
  { id: "get-help", label: "When to Get Help" },
  { id: "faq", label: "FAQs" },
  { id: "references", label: "Sources" },
];

const FAQ_ITEMS = [
  {
    q: "What is the most common side effect of Mounjaro?",
    a: "The leaflet lists seven very common side effects, which affect more than 1 in 10 people: nausea, diarrhoea, vomiting, stomach pain, constipation, tiredness and feeling less hungry. The leaflet does not rank them.",
  },
  {
    q: "How long do Mounjaro side effects last?",
    a: "The leaflet says nausea, diarrhoea and vomiting are most common at the start of treatment and usually ease over time. It gives no other timings. Talk to your prescriber or pharmacist if a side effect is severe or does not settle.",
  },
  {
    q: "Does Mounjaro cause hair loss?",
    a: "Hair loss is listed as a common side effect, affecting up to 1 in 10 people, for people using Mounjaro for weight management. The leaflet does not say how long it lasts.",
  },
  {
    q: "Does Mounjaro cause headaches?",
    a: "Headache is not named in the list of side effects in the leaflet. It is listed as a sign of low blood sugar, which can happen when Mounjaro is used with a sulphonylurea or insulin. Talk to your prescriber or pharmacist about any side effect that worries you, including ones that are not listed.",
  },
  {
    q: "Are Mounjaro side effects different for women and men?",
    a: "The leaflet lists the same side effects for everyone. For women who use the oral contraceptive pill, it gives extra advice for 4 weeks after starting and after each dose increase.",
  },
  {
    q: "Can Mounjaro cause constipation?",
    a: "Yes. Constipation is a very common side effect. Read our Mounjaro constipation guide.",
  },
  {
    q: "What are the serious side effects of Mounjaro?",
    a: "The leaflet names acute pancreatitis, which is uncommon, and severe allergic reactions, which are rare. Both need urgent medical help.",
  },
  {
    q: "Does Mounjaro cause cancer?",
    a: "Cancer is not listed as a side effect in the leaflet, which does list raised calcitonin in the blood among its side effects. Tell your prescriber about your health history at the health check.",
  },
  {
    q: "What should I do if I miss a dose of Mounjaro?",
    a: "If 4 days or less have passed since you should have used it, use it as soon as you remember. If more than 4 days have passed, skip it and do not double up.",
  },
  {
    q: "How do I report a Mounjaro side effect in the UK?",
    a: "You can report it on the MHRA Yellow Card scheme, at the Yellow Card website or in the Yellow Card app.",
  },
];

const REFERENCES = [
  {
    label: "Mounjaro KwikPen patient information leaflet — medicines.org.uk",
    description:
      "The UK patient leaflet this guide follows: side effects by frequency, dose, contraception and missed doses.",
    href: LEAFLET_URL,
  },
  {
    label: "MHRA Yellow Card scheme — Reporting side effects",
    description:
      "The MHRA scheme for reporting a suspected side effect, on the website or in the app.",
    href: YELLOW_CARD_URL,
  },
  {
    label: "What is Mounjaro — Healthwise360",
    description: "How Mounjaro (tirzepatide) works and what it is used for in the UK.",
    href: "/what-is-mounjaro",
    external: false,
  },
  {
    label: "Mounjaro constipation relief — Healthwise360",
    description: "Our guide to constipation on Mounjaro.",
    href: "/helpful-guides/mounjaro-constipation-relief-uk",
    external: false,
  },
  {
    label: "Mounjaro skin pain — Healthwise360",
    description: "Our guide to skin pain and injection site reactions.",
    href: "/helpful-guides/mounjaro-skin-pain-causes-treatment",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/mounjaro-constipation-relief-uk",
    category: "Side Effects",
    title: "Mounjaro Constipation: Easy Ways to Find Relief",
    description: "A focused guide to constipation on Mounjaro.",
  },
  {
    href: "/helpful-guides/mounjaro-skin-pain-causes-treatment",
    category: "Side Effects",
    title: "Mounjaro Skin Pain: Causes and What to Do",
    description: "Skin pain and injection site reactions explained.",
  },
  {
    href: "/helpful-guides/mounjaro-eligibility-bmi-requirements-uk",
    category: "Medications",
    title: "Mounjaro Eligibility and BMI Requirements UK",
    description: "Who can be prescribed Mounjaro for weight management in the UK.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: META_DESCRIPTION,
  author: { "@type": "Organization", name: "Healthwise360 editorial team" },
  publisher: {
    "@type": "Organization",
    name: "Healthwise360",
    logo: {
      "@type": "ImageObject",
      url: `${siteOrigin()}/logo-health-wise.webp`,
    },
  },
  datePublished: "2026-04-09",
  dateModified: "2026-11-05",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteOrigin()}${helpfulGuidePath("mounjaro-side-effects-uk")}`,
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

export default function GuideMounjaroSideEffects() {
  return (
    <GuideLayout
      slug="mounjaro-side-effects-uk"
      category="Side Effects"
      categorySlug="side-effects"
      title={H1}
      description="Mounjaro (tirzepatide) can cause side effects, although not everybody gets them. This guide sets out the Mounjaro side effects UK listed in the patient leaflet, from very common to rare, what the leaflet says about each dose, and when to get help. It is for information only. Your prescriber or pharmacist can tell you what applies to you."
      readTime="6 min read"
      lastUpdated="5 November 2026"
      toc={TOC}
      schemaJson={{ "@context": "https://schema.org", "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      <GuideParagraph>
        <IL href="/what-is-mounjaro">Read what is Mounjaro</IL>, or{" "}
        <EL href={YELLOW_CARD_URL}>report a side effect on Yellow Card</EL>.
      </GuideParagraph>

      <GuideSection id="at-a-glance" heading="Mounjaro side effects at a glance">
        <GuideParagraph>
          What are the side effects of Mounjaro? The leaflet groups them by how often they happen. This table repeats
          its groups and its words.
        </GuideParagraph>
        <GuideTable
          headers={["Group", "How often", "Side effects listed in the leaflet"]}
          rows={[
            {
              cells: [
                "Very common",
                "More than 1 in 10 people",
                "Feeling sick (nausea), diarrhoea, being sick (vomiting), stomach pain, constipation, feeling tired, feeling less hungry. Low blood sugar (hypoglycaemia) when used with a sulphonylurea or insulin for type 2 diabetes",
              ],
            },
            {
              cells: [
                "Common",
                "Up to 1 in 10 people",
                "Allergic reaction such as rash, itching and eczema, dizziness, low blood pressure, indigestion, bloating, burping, wind, reflux or heartburn, hair loss, injection site reactions, fast pulse, raised pancreatic enzymes and calcitonin in the blood, gallstones, gallbladder infection (cholecystitis)",
              ],
            },
            {
              cells: [
                "Uncommon",
                "Up to 1 in 100 people",
                "Acute pancreatitis, pain at the injection site, changed sense of taste, change in skin sensation, delayed emptying of the stomach",
              ],
            },
            {
              cells: [
                "Rare",
                "Up to 1 in 1,000 people",
                "Severe allergic reactions, including anaphylactic reaction and angioedema",
              ],
            },
          ]}
        />
        <GuideParagraph>
          For some effects the leaflet gives a different frequency depending on how the medicine is used: for weight
          management, for type 2 diabetes or in the cardiovascular study. Dizziness, low blood pressure and hair loss
          are listed for people using Mounjaro for weight management. Low blood sugar is listed for people with type 2
          diabetes. Check the leaflet table for your use.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="very-common" heading="Very common Mounjaro side effects">
        <GuideParagraph>These affect more than 1 in 10 people, according to the leaflet.</GuideParagraph>
        <GuideBulletList
          items={[
            "Nausea (feeling sick).",
            "Diarrhoea.",
            "Vomiting (being sick).",
            "Stomach (abdominal) pain.",
            "Constipation.",
            "Tiredness (fatigue).",
            "Feeling less hungry (decreased appetite).",
            "Low blood sugar (hypoglycaemia) when Mounjaro is used with a sulphonylurea or insulin for type 2 diabetes. Your doctor should tell you how to treat it.",
          ]}
        />
        <GuideParagraph>
          <IL href="/helpful-guides/mounjaro-constipation-relief-uk">Read the constipation guide</IL>.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="common" heading="Common Mounjaro side effects">
        <GuideParagraph>
          These affect up to 1 in 10 people. They include indigestion, bloating, burping, wind, reflux or heartburn,
          dizziness, low blood pressure and a fast pulse. Allergic reactions such as rash, itching and eczema are also
          listed, as are raised pancreatic enzymes and calcitonin in the blood.
        </GuideParagraph>
        <GuideParagraph>
          <strong>Hair loss.</strong> Hair loss, which some people call hair thinning, is listed as a common side effect
          for people using Mounjaro for weight management. The leaflet does not say how long it lasts. If it worries
          you, talk to your prescriber or pharmacist.
        </GuideParagraph>
        <GuideParagraph>
          <strong>Injection site reactions.</strong> Itching or redness where you inject is common. Pain at the
          injection site is uncommon.
        </GuideParagraph>
        <GuideParagraph>
          <strong>Gallbladder.</strong> Gallstones and gallbladder infection (cholecystitis) are in the leaflet&apos;s
          common list. The leaflet gives the frequency by use, so check its table for yours.
        </GuideParagraph>
        <GuideParagraph>
          <IL href="/helpful-guides/mounjaro-skin-pain-causes-treatment">Read the skin pain guide</IL>.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="uncommon-rare" heading="Uncommon and rare Mounjaro side effects">
        <GuideParagraph>
          <strong>Acute pancreatitis (uncommon, up to 1 in 100).</strong> This is inflammation of the pancreas. It can
          cause severe stomach and back pain that does not go away. The leaflet says to stop using the medicine and get
          urgent medical help.
        </GuideParagraph>
        <GuideParagraph>
          <strong>Severe allergic reactions (rare, up to 1 in 1,000).</strong> These include anaphylactic reaction and
          angioedema. Get immediate medical help.
        </GuideParagraph>
        <GuideParagraph>
          <strong>Other uncommon effects.</strong> The leaflet also lists a changed sense of taste, a change in skin
          sensation and delayed emptying of the stomach. It tells people with severe problems with food digestion, or
          with food staying in the stomach for longer than normal, to talk to their doctor before using the medicine.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="timing" heading="When do Mounjaro side effects start, and how long do they last?">
        <GuideParagraph>
          The leaflet says nausea, diarrhoea and vomiting are most common at the start of treatment and usually ease
          over time. It gives no other timings for when side effects start or how long they last. Some pages quote exact
          weeks. We do not, because the leaflet does not.
        </GuideParagraph>
        <GuideParagraph>
          If a side effect is severe, does not settle or you are unsure, talk to your prescriber or pharmacist. The
          leaflet says to do this for any side effect, including ones that are not listed.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="by-dose" heading="Mounjaro side effects by dose: 2.5 mg to 15 mg">
        <GuideParagraph>
          People search for the side effects of each strength, such as 2.5 mg, 5 mg or 10 mg. The leaflet lists one set
          of side effects for the medicine and does not split them by strength. This is what it does say about the dose.
        </GuideParagraph>
        <GuideTable
          headers={["Step", "What the leaflet says"]}
          rows={[
            { cells: ["Starting dose", "2.5 mg once a week for four weeks"] },
            { cells: ["Next step", "5 mg once a week"] },
            {
              cells: [
                "Further increases",
                "In 2.5 mg steps, staying on each dose for at least 4 weeks",
              ],
            },
            { cells: ["Changing dose", "Do not change your dose unless your doctor has told you to"] },
            {
              cells: [
                "Missed dose",
                "If 4 days or less have passed since you should have used it, use it as soon as you remember. If more than 4 days have passed, skip it. Do not double up",
              ],
            },
          ]}
        />
        <GuideParagraph>
          A prescriber decides your dose.{" "}
          <IL href="/blog/mounjaro-dosage-for-weight-loss-facts-you-can-trust">Read our Mounjaro dosage guide</IL>.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="women-men" heading="Mounjaro side effects in women, men and people without diabetes">
        <GuideParagraph>
          <strong>Women and men.</strong> The leaflet lists the same side effects for everyone and gives no separate list
          for women or men.
        </GuideParagraph>
        <GuideParagraph>
          <strong>Contraception.</strong> The leaflet advises women with obesity or overweight who use the oral
          contraceptive pill to think about a non oral method, or to add a barrier method such as a condom, for 4 weeks
          after starting Mounjaro and for 4 weeks after each increase in dose. Ask your prescriber or pharmacist what
          suits you. If you also use HRT, read our guide to{" "}
          <IL href="/helpful-guides/mounjaro-menopause-weight-loss-uk">Mounjaro and HRT</IL>.
        </GuideParagraph>
        <GuideParagraph>
          <strong>People without diabetes.</strong> Some effects are listed for people using Mounjaro for weight
          management: dizziness, low blood pressure and hair loss. Low blood sugar is listed for people with type 2
          diabetes, especially with a sulphonylurea or insulin.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="long-term" heading="Long term Mounjaro side effects and cancer">
        <GuideParagraph>
          The leaflet has no separate section on long term side effects. It lists effects by how often they happen, and
          it says to talk to your doctor, pharmacist or nurse about any side effect.
        </GuideParagraph>
        <GuideParagraph>
          Cancer is not listed as a side effect in the leaflet. Raised calcitonin in the blood is among the listed side
          effects. Tell your prescriber about your health history at the health check, including if you have ever had
          pancreatitis or have a problem with your eyes (diabetic retinopathy or macular oedema).
        </GuideParagraph>
        <GuideParagraph>
          Do not stop using <IL href="/what-is-mounjaro">Mounjaro</IL> without talking to your doctor.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="get-help" heading="When to get help with Mounjaro side effects">
        <GuideCallout variant="warning">
          <strong>Get urgent medical help.</strong> Stop using Mounjaro and get urgent help if you have severe stomach
          pain that does not go away, with or without nausea and vomiting. In an emergency, call 999. Get immediate
          medical help if you have signs of a severe allergic reaction.
        </GuideCallout>
        <GuideParagraph>
          Talk to your prescriber, pharmacist or nurse about any side effect, including ones that are not listed in the
          leaflet.
        </GuideParagraph>
        <GuideParagraph>
          <strong>Avoid dehydration.</strong> The leaflet says fluid loss from nausea, vomiting or diarrhoea can reduce
          kidney function, and that it is important to avoid dehydration by drinking plenty of fluids. Contact your
          doctor with any questions. For food ideas when you feel sick, see{" "}
          <IL href="/helpful-guides/mounjaro-nutrition-guide-uk">what to eat on Mounjaro with nausea</IL>.
        </GuideParagraph>
        <GuideParagraph>
          <strong>Low blood sugar.</strong> If you use Mounjaro with a sulphonylurea or insulin, the leaflet lists signs
          of low blood sugar, including headache, drowsiness, weakness, dizziness, hunger, confusion, irritability, a
          fast heartbeat and sweating. Your doctor should tell you how to treat it.
        </GuideParagraph>
        <GuideParagraph>
          <strong>Report it.</strong> You can report any side effect on the MHRA Yellow Card scheme, at the Yellow Card
          website or in the Yellow Card app.{" "}
          <EL href={YELLOW_CARD_URL}>Report a side effect on Yellow Card</EL>.
        </GuideParagraph>
      </GuideSection>

      <GuideKeyTakeaways
        items={[
          "The leaflet groups Mounjaro side effects as very common, common, uncommon and rare, and gives some frequencies by use.",
          "Nausea, diarrhoea and vomiting are most common at the start and usually ease over time; the leaflet gives no other timings.",
          "The leaflet lists one set of side effects for the medicine and does not split them by dose or by sex.",
          "Acute pancreatitis (uncommon) and severe allergic reactions (rare) need urgent medical help.",
          "Report a suspected side effect on the MHRA Yellow Card scheme.",
        ]}
      />

      <GuideFaq items={FAQ_ITEMS} heading="Mounjaro side effects FAQs" questionsAsHeadings />

      <GuideRelatedGuides guides={RELATED_GUIDES} />
      <GuideReferences items={REFERENCES} />

      <GuideDisclaimer>
        This guide is for information only. It follows the UK patient leaflet and does not replace advice from your
        prescriber or pharmacist. Do not stop taking <IL href="/what-is-mounjaro">Mounjaro</IL> without talking to your
        doctor. In a medical emergency, call 999.
      </GuideDisclaimer>
    </GuideLayout>
  );
}
