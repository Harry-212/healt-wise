import type { Metadata } from "next";
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
  GuideTable,
  IL,
  EL,
} from "@/components/guide/GuideLayout";

export const metadata: Metadata = {
  title:
    "Mounjaro Side Effects UK: What to Expect and How to Manage Them | Health Wise",
  description:
    "A complete, honest overview of Mounjaro side effects—from common digestive symptoms to rare serious reactions—with evidence-based management strategies for each.",
  openGraph: {
    title: "Mounjaro Side Effects UK: What to Expect and How to Manage Them",
    description:
      "A complete, honest overview of Mounjaro side effects—from common digestive symptoms to rare serious reactions—with evidence-based management strategies for each.",
    type: "article",
  },
  alternates: { canonical: "/helpful-guides/mounjaro-side-effects-uk" },
};

const TOC = [
  { id: "common-side-effects", label: "Common Side Effects" },
  { id: "injection-reactions", label: "Injection Site Reactions" },
  { id: "other-effects", label: "Other Possible Effects" },
  { id: "how-long", label: "How Long Do Side Effects Last?" },
  { id: "dose-increases", label: "Side Effects with Dose Increases" },
  { id: "managing", label: "Managing Symptoms" },
  { id: "serious", label: "Serious Side Effects (Rare)" },
  { id: "when-to-seek", label: "When to Seek Medical Advice" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "What are the most common side effects of Mounjaro?",
    a: "The most common Mounjaro side effects are gastrointestinal: nausea, diarrhoea, constipation, bloating, and reduced appetite. These are caused by the medication slowing gastric emptying and are most pronounced in the first few weeks of treatment or following dose increases. Most patients find they improve significantly within 4–6 weeks.",
  },
  {
    q: "How long do Mounjaro side effects last?",
    a: "Mild side effects—particularly nausea and gastrointestinal symptoms—typically peak in the first 1–4 weeks and improve gradually. Most patients experience significant improvement by weeks 4–6. Side effects often return briefly each time the dose is increased, then settle again within 1–2 weeks.",
  },
  {
    q: "Does Mounjaro cause hair loss?",
    a: "Temporary hair thinning (telogen effluvium) has been reported by some Mounjaro users. It is not listed as a formally established adverse effect in the SmPC, but it is a recognised phenomenon associated with rapid weight loss and significant calorie reduction generally. It typically resolves within 3–6 months as weight stabilises and nutrition improves.",
  },
  {
    q: "What should I do if I feel sick on Mounjaro?",
    a: "For nausea, eat smaller, more frequent meals and avoid greasy, spicy, or high-fat foods. Eating slowly and not lying down immediately after meals also helps. Ginger tea, peppermint tea, and cold foods (which have less smell) are often better tolerated. If nausea is severe or persistent, contact your prescribing clinician.",
  },
  {
    q: "Are Mounjaro side effects different from Wegovy?",
    a: "The side effect profiles of Mounjaro (tirzepatide) and Wegovy (semaglutide) are broadly similar, as both act on the GLP-1 receptor. Mounjaro's additional GIP mechanism may affect how gastrointestinal side effects present, but clinical trials show comparable rates of nausea, constipation, and diarrhoea between the two medications.",
  },
  {
    q: "When should I stop Mounjaro due to side effects?",
    a: "Do not stop Mounjaro without consulting your clinician. Most side effects are manageable and temporary. However, seek urgent medical attention for severe abdominal pain (possible pancreatitis), jaundice (yellowing of skin or eyes), difficulty breathing, signs of allergic reaction, or significant low blood sugar. These warrant immediate assessment.",
  },
];

const REFERENCES = [
  {
    label: "Mounjaro (tirzepatide) SmPC — Full adverse effects profile",
    description:
      "Official UK prescribing information for Mounjaro, including the complete list of adverse reactions and their frequency.",
    href: "https://www.medicines.org.uk/emc/product/15481",
  },
  {
    label: "MHRA Yellow Card Scheme — Reporting side effects",
    description:
      "The MHRA system for reporting adverse drug reactions, including unexpected side effects of Mounjaro.",
    href: "https://yellowcard.mhra.gov.uk/",
  },
  {
    label: "NHS — Nausea and vomiting",
    description:
      "NHS guidance on managing nausea, including dietary approaches and when to seek medical advice.",
    href: "https://www.nhs.uk/conditions/feeling-sick-nausea/",
  },
  {
    label: "Mounjaro constipation relief — Health Wise",
    description:
      "Our dedicated guide to managing constipation on Mounjaro—hydration, fibre, movement, and OTC options.",
    href: "/helpful-guides/mounjaro-constipation-relief-uk",
    external: false,
  },
  {
    label: "Health benefits of Mounjaro and Wegovy — Health Wise",
    description:
      "The broader clinical benefits of GLP-1 medications—providing context for the risk/benefit assessment of treatment.",
    href: "/helpful-guides/mounjaro-wegovy-health-benefits-uk",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/mounjaro-constipation-relief-uk",
    category: "Side Effects",
    title: "Mounjaro Constipation: Easy Ways to Find Relief",
    description:
      "A focused guide to the most effective strategies for relieving constipation on Mounjaro.",
  },
  {
    href: "/helpful-guides/mounjaro-skin-pain-causes-treatment",
    category: "Side Effects",
    title: "Mounjaro Skin Pain: Causes, Symptoms & Treatment",
    description:
      "Understanding the uncommon but reported experience of skin sensitivity and burning sensations on Mounjaro.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mounjaro Side Effects UK: What to Expect and How to Manage Them",
  description:
    "A complete, honest overview of Mounjaro side effects—from common digestive symptoms to rare serious reactions—with evidence-based management strategies for each.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://health-wise.co.uk/helpful-guides/mounjaro-side-effects-uk",
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
      title="Mounjaro Side Effects UK: What to Expect and How to Manage Them"
      description="Mounjaro (tirzepatide) is well tolerated by most patients—but side effects, particularly gastrointestinal, are common in the early weeks. This guide covers every documented side effect, how long they last, and the most effective management strategies."
      readTime="5 min read"
      lastUpdated="April 2026"
      toc={TOC}
      internalLinks={internalLinksFor("guideMounjaroSideEffects")}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      <GuideSection id="common-side-effects" heading="Common Side Effects">
        <GuideParagraph>
          The most frequently reported side effects of{" "}
          <IL href="/what-is-mounjaro">Mounjaro (tirzepatide)</IL> are
          gastrointestinal—a direct consequence of how the medication slows
          gastric emptying and reduces gut motility. According to the{" "}
          <EL href="https://www.medicines.org.uk/emc/product/15481">
            Mounjaro SmPC
          </EL>
          , the following occur in more than 1 in 10 patients:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Nausea — the most commonly reported symptom, particularly at treatment initiation and after dose increases",
            "Diarrhoea — loose stools, often in the first few weeks of treatment",
            "Constipation — caused by reduced gut motility; see our dedicated constipation guide",
            "Bloating and stomach discomfort — gas, fullness, and abdominal cramping",
            "Reduced appetite — the intended therapeutic effect, but can feel pronounced initially",
            "Vomiting — less common than nausea, but reported by some patients",
          ]}
        />
        <GuideCallout variant="tip">
          Eating smaller, more frequent meals rather than two or three large
          ones is one of the most effective strategies for reducing GI
          symptoms. Large meals amplify gastric pressure when emptying is
          slowed, worsening nausea and bloating.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="injection-reactions" heading="Injection Site Reactions">
        <GuideParagraph>
          <IL href="/what-is-mounjaro">Mounjaro</IL> is administered as a
          weekly subcutaneous injection, and localised reactions at the
          injection site are common—reported in approximately 1 in 7 patients.
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Redness (erythema) — mild flushing or redness around the injection site",
            "Mild swelling or induration — a small lump under the skin",
            "Itching or bruising — transient and usually resolves within a day or two",
          ]}
        />
        <GuideParagraph>
          Most injection site reactions are mild and resolve within a few days.
          To minimise them:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Rotate injection sites — use the abdomen, thigh, or upper arm, and change location each week",
            "Allow the pen to reach room temperature before injecting — cold medication from the fridge causes more discomfort",
            "Apply a cool compress for a few minutes after injection to reduce localised inflammation",
          ]}
        />
      </GuideSection>

      <GuideSection id="other-effects" heading="Other Possible Effects">
        <GuideParagraph>
          Beyond gastrointestinal symptoms, other side effects reported in
          clinical trials and real-world use include:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Fatigue — particularly in the first few weeks as the body adapts to reduced calorie intake",
            "Headaches — sometimes associated with reduced food or fluid intake; usually mild",
            "Mild dizziness — can be related to blood pressure changes or reduced intake",
            "Temporary hair thinning — not a formally listed adverse effect, but reported; linked to rapid weight loss (telogen effluvium) rather than the medication directly",
          ]}
        />
        <GuideParagraph>
          If you experience unusual or persistent symptoms not covered here,
          report them via the{" "}
          <EL href="https://yellowcard.mhra.gov.uk/">
            MHRA Yellow Card Scheme
          </EL>
          . This system helps regulators monitor real-world drug safety.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="how-long" heading="How Long Do Side Effects Last?">
        <GuideParagraph>
          The duration of side effects varies by symptom type:
        </GuideParagraph>
        <GuideTable
          headers={["Side Effect", "Typical Duration", "Pattern"]}
          rows={[
            { cells: ["Nausea", "Days to 4 weeks", "Improves as body adapts"] },
            { cells: ["Constipation", "2–6 weeks", "Responds to diet/hydration changes"] },
            { cells: ["Diarrhoea", "1–2 weeks", "Usually self-limiting"] },
            { cells: ["Bloating", "Weeks 1–4", "Reduces with smaller meals"] },
            { cells: ["Injection reactions", "1–3 days", "Resolves between doses"] },
            { cells: ["Fatigue", "1–4 weeks", "Improves as intake stabilises"] },
            { cells: ["Hair thinning", "3–6 months", "Resolves as weight stabilises"] },
          ]}
        />
        <GuideCallout variant="info">
          Most side effects peak in the first 2–4 weeks and improve
          significantly by weeks 4–6. Patients who persist through the initial
          adjustment period typically report much better tolerability
          thereafter.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="dose-increases" heading="Side Effects with Dose Increases">
        <GuideParagraph>
          <IL href="/what-is-mounjaro">Mounjaro</IL> is titrated gradually
          from 2.5mg to a maximum of 15mg over several months. Each dose
          increase typically brings a temporary return of gastrointestinal
          symptoms—particularly nausea, fatigue, and stomach discomfort.
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Temporary nausea — often resolves within 1–2 weeks of the new dose",
            "Mild fatigue — as the body adjusts to the stronger appetite suppression",
            "Stomach discomfort and bloating — more pronounced initially at each new dose level",
          ]}
        />
        <GuideParagraph>
          These are expected and do not indicate a problem with the
          medication. Apply the same management strategies (small meals,
          hydration, rest) and allow 2–4 weeks for adaptation. If side effects
          at a new dose are severe or unmanageable, discuss a slower titration
          schedule with your clinician.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="managing" heading="Managing Symptoms">
        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          For nausea
        </h3>
        <GuideBulletList
          items={[
            "Eat smaller, more frequent meals — 4–5 small meals rather than 2–3 large ones",
            "Avoid greasy, spicy, or strong-smelling foods — these amplify nausea on a slowed stomach",
            "Eat cold or room-temperature foods — hot food has more odour and can worsen nausea",
            "Try ginger or peppermint tea — both have mild anti-nausea properties",
            "Do not lie down immediately after eating — stay upright for at least 30–60 minutes",
          ]}
        />

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          For constipation
        </h3>
        <GuideBulletListRich
          items={[
            <>
              Increase water intake to 6–8 glasses daily and add fibre
              gradually. See our full{" "}
              <IL href="/helpful-guides/mounjaro-constipation-relief-uk">
                Mounjaro constipation guide
              </IL>{" "}
              for a complete management plan.
            </>,
            "Walk for 10–15 minutes after meals to stimulate gut motility.",
            "Consider osmotic laxatives (Movicol) or psyllium husk if dietary changes are insufficient.",
          ]}
        />

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          For diarrhoea
        </h3>
        <GuideBulletList
          items={[
            "Stay hydrated — replace lost fluids with water and oral rehydration salts",
            "Eat simple, bland foods — rice, bananas, toast, boiled chicken",
            "Avoid dairy, high-fat, and high-fibre foods temporarily until symptoms settle",
            "Avoid caffeine and alcohol during episodes",
          ]}
        />

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          For injection site reactions
        </h3>
        <GuideBulletList
          items={[
            "Rotate injection sites consistently — abdomen, thigh, upper arm",
            "Let the pen warm to room temperature before use",
            "Apply a cool compress after injection to reduce swelling and itching",
          ]}
        />
      </GuideSection>

      <GuideSection id="serious" heading="Serious Side Effects (Rare)">
        <GuideParagraph>
          Serious side effects are rare but require immediate medical
          attention. Seek urgent care if you experience:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Severe abdominal pain — may indicate pancreatitis, a rare but serious complication",
            "Yellowing of the skin or whites of the eyes (jaundice) — may indicate liver or gallbladder issues",
            "Difficulty breathing, facial swelling, or rash — signs of a serious allergic reaction (anaphylaxis)",
            "Signs of low blood sugar (hypoglycaemia) — particularly if taking insulin or other diabetes medications alongside Mounjaro",
          ]}
        />
        <GuideCallout variant="warning">
          Call 999 or attend A&E immediately for severe allergic reaction,
          pancreatitis symptoms, or difficulty breathing. Do not wait. Rare
          side effects should also be reported to the{" "}
          <EL href="https://yellowcard.mhra.gov.uk/">
            MHRA Yellow Card Scheme
          </EL>{" "}
          to support ongoing drug safety monitoring.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="when-to-seek" heading="When to Seek Medical Advice">
        <GuideParagraph>
          Contact your GP, pharmacist, or prescribing clinician if:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Side effects persist beyond 6 weeks without improvement",
            "Nausea, vomiting, or diarrhoea is severe enough to affect daily function or prevent adequate fluid intake",
            "You are unable to tolerate a dose increase — a slower titration schedule may be appropriate",
            "You notice unexpected symptoms not covered in the patient information leaflet",
            "Side effects are significantly affecting your quality of life",
          ]}
        />
        <GuideParagraph>
          Do not stop{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> without discussing it
          with your clinician first. Abrupt cessation causes appetite to
          return rapidly, and most side effects are manageable with clinical
          support rather than stopping treatment.
        </GuideParagraph>
      </GuideSection>

      <GuideKeyTakeaways
        items={[
          "Gastrointestinal side effects (nausea, constipation, diarrhoea, bloating) affect the majority of patients and are most pronounced in weeks 1–4.",
          "Most side effects improve significantly by weeks 4–6 and return briefly with each dose increase before settling again.",
          "Smaller, more frequent meals are the single most effective strategy for reducing nausea and bloating.",
          "Injection site reactions are common but mild—rotation and room-temperature dosing reduce their frequency.",
          "Rare serious side effects (pancreatitis, allergic reaction) require immediate emergency care.",
          "Report unexpected side effects via the MHRA Yellow Card Scheme to support ongoing drug safety monitoring.",
        ]}
      />

      <GuideRelatedGuides guides={RELATED_GUIDES} />
      <GuideReferences items={REFERENCES} />

      <GuideDisclaimer>
        This guide is for informational purposes only. For personalised advice
        about side effects, contact your prescribing clinician or pharmacist.
        Do not stop taking{" "}
        <IL href="/what-is-mounjaro">Mounjaro</IL> without medical guidance.
        In a medical emergency, call 999.
      </GuideDisclaimer>

      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
