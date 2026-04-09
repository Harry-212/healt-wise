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
  IL,
  EL,
} from "@/components/guide/GuideLayout";

export const metadata: Metadata = {
  title:
    "Norovirus & Mounjaro/Wegovy (UK Guide): Symptoms, Risks & Safe Recovery | Health Wise",
  description:
    "Norovirus can feel more intense on GLP-1 medications like Mounjaro or Wegovy. Here's why, what symptoms to watch for, when to delay your injection, and how to recover safely.",
  openGraph: {
    title: "Norovirus & Mounjaro/Wegovy (UK Guide): Symptoms, Risks & Safe Recovery",
    description:
      "Norovirus can feel more intense on GLP-1 medications like Mounjaro or Wegovy. Here's why, what symptoms to watch for, when to delay your injection, and how to recover safely.",
    type: "article",
  },
  alternates: { canonical: "/norovirus-mounjaro-wegovy-uk" },
};

const TOC = [
  { id: "how-affects", label: "How Norovirus Affects GLP-1 Medication Users" },
  { id: "prevention", label: "How to Prevent Norovirus" },
  { id: "what-to-do", label: "What to Do If You Get Norovirus" },
  { id: "should-stop", label: "Should You Stop Mounjaro or Wegovy?" },
  { id: "when-seek-help", label: "When to Seek Medical Help" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "Can Mounjaro make norovirus worse?",
    a: "Not directly—Mounjaro does not make norovirus itself more severe. However, Mounjaro slows gastric emptying, which can prolong nausea and vomiting symptoms during a norovirus infection. Combined with the reduced calorie and fluid intake typical of GLP-1 treatment, recovery may feel harder. Monitor hydration carefully.",
  },
  {
    q: "Should I skip my Mounjaro or Wegovy injection if I'm sick with norovirus?",
    a: "For mild symptoms, it is usually safe to continue your injection on schedule. For severe vomiting or diarrhoea lasting more than 24–48 hours, consider delaying your next dose and consult your prescribing clinician or pharmacist. Never permanently stop your medication without medical advice.",
  },
  {
    q: "How long does norovirus last?",
    a: "Norovirus typically resolves within 1–3 days. Fatigue and reduced appetite may persist for a few additional days. If symptoms last beyond 3 days or worsen significantly, seek medical advice—particularly if you are on GLP-1 medications and concerned about dehydration.",
  },
  {
    q: "Is there a higher risk of dehydration on Mounjaro or Wegovy during norovirus?",
    a: "Yes. GLP-1 medications already reduce food and drink intake due to appetite suppression. Combined with the fluid loss from vomiting and diarrhoea during norovirus, the risk of dehydration is meaningfully higher. Prioritise small, frequent sips of water and oral rehydration salts from the moment symptoms start.",
  },
  {
    q: "What should I eat after norovirus if I'm on Mounjaro?",
    a: "Start with bland, easily digestible foods—the BRAT approach (bananas, rice, applesauce, toast) is a well-established guideline. Avoid fatty, spicy, or high-fibre foods initially. Reintroduce regular foods gradually over 24–48 hours. Mounjaro's appetite suppression means you may feel very little hunger—focus on nutritional completeness rather than volume.",
  },
  {
    q: "Can I give norovirus to others if I'm on Mounjaro?",
    a: "Yes—Mounjaro does not affect the transmissibility of norovirus. You remain contagious from the onset of symptoms until at least 48 hours after your last episode of vomiting or diarrhoea. Follow NHS infection prevention guidance: wash hands thoroughly, avoid preparing food for others, and disinfect contaminated surfaces.",
  },
];

const REFERENCES = [
  {
    label: "NHS — Norovirus (vomiting bug)",
    description:
      "NHS guidance on norovirus symptoms, duration, treatment, and infection prevention in the UK.",
    href: "https://www.nhs.uk/conditions/norovirus/",
  },
  {
    label: "NHS — Dehydration",
    description:
      "NHS overview of dehydration symptoms, treatment, and when to seek urgent medical help.",
    href: "https://www.nhs.uk/conditions/dehydration/",
  },
  {
    label: "UKHSA — Norovirus in the UK: epidemiology and prevention",
    description:
      "UK Health Security Agency data and guidance on norovirus epidemiology, prevention, and outbreak management.",
    href: "https://www.gov.uk/government/collections/norovirus-guidance-data-and-analysis",
  },
  {
    label: "Mounjaro (tirzepatide) SmPC",
    description:
      "Official UK prescribing information for Mounjaro, including guidance on gastrointestinal effects and missed doses.",
    href: "https://www.medicines.org.uk/emc/product/15481",
  },
  {
    label: "Mounjaro delivery & storage UK — Health Wise",
    description:
      "What to do if your Mounjaro delivery is affected by illness or absence—temperature rules and storage guidance.",
    href: "/mounjaro-delivery-storage-uk",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/mounjaro-weight-loss-injection-uk",
    category: "Medications",
    title: "Mounjaro Weight Loss Injection UK (2026): Full Guide",
    description:
      "Everything about Mounjaro—how it works, clinical results, eligibility, and UK pricing.",
  },
  {
    href: "/mounjaro-nutrition-guide-uk",
    category: "Nutrition",
    title: "Mounjaro Nutrition Guide: What to Eat for Better Results",
    description:
      "Evidence-based advice on what to eat while using Mounjaro—including recovery from illness.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Norovirus & Mounjaro/Wegovy (UK Guide): Symptoms, Risks & Safe Recovery",
  description:
    "Norovirus can feel more intense on GLP-1 medications like Mounjaro or Wegovy. Here's why, what symptoms to watch for, when to delay your injection, and how to recover safely.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://health-wise.co.uk/norovirus-mounjaro-wegovy-uk",
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

export default function GuideNorovirus() {
  return (
    <GuideLayout
      category="Side Effects"
      categorySlug="side-effects"
      title="Norovirus & Mounjaro/Wegovy (UK Guide): Symptoms, Risks & Safe Recovery"
      description="Norovirus cases rise every winter in the UK. For people using GLP-1 medications like Mounjaro or Wegovy, symptoms like nausea and dehydration can feel more pronounced. Here's what to expect and how to manage recovery safely."
      readTime="4 min read"
      lastUpdated="April 2026"
      toc={TOC}
      internalLinks={internalLinksFor("guideNorovirus")}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      <GuideSection id="how-affects" heading="How Norovirus Affects GLP-1 Medication Users">
        <GuideParagraph>
          Norovirus is a highly contagious stomach virus causing vomiting,
          diarrhoea, nausea, and stomach cramps. For most people it resolves
          within 1–3 days. For people using{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> or{" "}
          <IL href="/what-is-wegovy">Wegovy</IL>, the experience may feel
          more intense—not because the virus is worse, but because GLP-1
          medications alter how your body processes food and fluids.
        </GuideParagraph>
        <GuideParagraph>
          Key interactions to understand:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>Slower digestion prolongs nausea</strong> — GLP-1
              medications slow gastric emptying as part of their mechanism.
              During norovirus, this can mean nausea and vomiting symptoms last
              longer than they would without medication.
            </>,
            <>
              <strong>Higher dehydration risk</strong> — Mounjaro and Wegovy
              already reduce fluid intake through appetite suppression. Combined
              with fluid loss from vomiting and diarrhoea, dehydration risk
              increases significantly.
            </>,
            <>
              <strong>Electrolyte imbalance</strong> — persistent vomiting and
              diarrhoea deplete sodium, potassium, and magnesium. Reduced food
              intake from GLP-1 treatment means these stores are already lower
              than typical.
            </>,
            <>
              <strong>Lower energy during recovery</strong> — reduced baseline
              calorie intake makes the fatigue of norovirus harder to recover
              from, as the body has fewer energy reserves to draw on.
            </>,
          ]}
        />
        <GuideCallout variant="info">
          These effects do not make norovirus more dangerous for GLP-1 users—
          but they can make symptoms feel more severe. Proactive hydration and
          electrolyte management are especially important.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="prevention" heading="How to Prevent Norovirus">
        <GuideParagraph>
          Prevention is the most effective strategy. The{" "}
          <EL href="https://www.gov.uk/government/collections/norovirus-guidance-data-and-analysis">
            UK Health Security Agency (UKHSA)
          </EL>{" "}
          and{" "}
          <EL href="https://www.nhs.uk/conditions/norovirus/">NHS</EL>{" "}
          both emphasise the following steps:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Wash hands thoroughly with soap and water for at least 20 seconds — particularly after using the toilet and before preparing or eating food",
            "Do not rely solely on hand sanitiser — alcohol-based gels are less effective against norovirus than soap and water",
            "Disinfect contaminated surfaces with bleach-based cleaners — norovirus survives on surfaces for days",
            "Wash contaminated clothing and bedding immediately at 60°C or above",
            "Avoid high-risk foods — raw or undercooked shellfish (especially oysters) are a common norovirus source",
            "If someone in your household is ill, avoid sharing towels, utensils, or close contact",
          ]}
        />
        <GuideCallout variant="tip">
          Supporting gut health through a diet rich in fibre and probiotic
          foods (yoghurt, kefir, fermented vegetables) may reduce the severity
          and duration of gastrointestinal infections, though this is not
          specific to norovirus. See our{" "}
          <IL href="/mounjaro-nutrition-guide-uk">Mounjaro nutrition guide</IL>{" "}
          for dietary recommendations while on GLP-1 treatment.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="what-to-do" heading="What to Do If You Get Norovirus">
        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          1. Stay Hydrated
        </h3>
        <GuideParagraph>
          Hydration is the most critical priority—particularly for{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> and{" "}
          <IL href="/what-is-wegovy">Wegovy</IL> users, who already have
          reduced fluid intake due to appetite suppression.
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Sip fluids slowly and frequently — large amounts at once may trigger vomiting",
            "Water, diluted squash, and clear broth are good starting points",
            "Avoid alcohol, caffeine, and carbonated drinks — they can worsen dehydration",
          ]}
        />

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          2. Replace Electrolytes
        </h3>
        <GuideBulletList
          items={[
            "Oral rehydration salts (ORS) — available from UK pharmacies without prescription; more effective than water alone for electrolyte replacement",
            "Light salty foods — crackers, broth, or a small amount of soup when tolerated",
            "Avoid sports drinks with high sugar content — the sugar can worsen diarrhoea",
          ]}
        />

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          3. Eat Simple Foods When Ready
        </h3>
        <GuideParagraph>
          Follow the BRAT approach once you can tolerate food:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Bananas — easy to digest, high in potassium",
            "Rice — plain white rice, easily tolerated",
            "Applesauce — gentle on the stomach",
            "Toast — plain, no butter initially",
          ]}
        />
        <GuideParagraph>
          Reintroduce normal foods gradually over 24–48 hours. The appetite
          suppression from{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> or{" "}
          <IL href="/what-is-wegovy">Wegovy</IL> means hunger cues may be
          very weak during recovery—focus on nutritional completeness rather
          than volume.
        </GuideParagraph>

        <h3 className="mb-2 mt-5 text-base font-semibold text-slate-800">
          4. Rest and Monitor
        </h3>
        <GuideBulletList
          items={[
            "Avoid intense physical activity until fully recovered",
            "Monitor signs of significant dehydration: dizziness, very dark urine, dry mouth, confusion, or no urination for 8+ hours",
            "Stay at home and avoid contact with others for at least 48 hours after the last episode of vomiting or diarrhoea",
          ]}
        />
      </GuideSection>

      <GuideSection id="should-stop" heading="Should You Stop Mounjaro or Wegovy?">
        <GuideParagraph>
          The decision to delay or skip a dose depends on symptom severity.
          The{" "}
          <EL href="https://www.medicines.org.uk/emc/product/15481">
            Mounjaro SmPC
          </EL>{" "}
          provides guidance on missed doses, but does not specifically address
          norovirus. General clinical guidance suggests:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>Mild symptoms</strong> — nausea and loose stools that
              are manageable: usually safe to continue on your normal schedule.
              Mounjaro is a subcutaneous injection and is not affected by
              vomiting once absorbed.
            </>,
            <>
              <strong>Severe vomiting or diarrhoea</strong> — lasting more
              than 24 hours: consider delaying your next injection and contact
              your prescribing clinician or pharmacist for advice.
            </>,
            <>
              <strong>Symptoms lasting beyond 48 hours</strong>: speak to your
              GP or pharmacist. Prolonged symptoms alongside GLP-1 medication
              warrant clinical assessment.
            </>,
          ]}
        />
        <GuideCallout variant="warning">
          Never permanently stop{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> or{" "}
          <IL href="/what-is-wegovy">Wegovy</IL> without medical advice.
          Short-term illness does not require permanent cessation. If you miss
          a dose, follow the guidance in your medication's patient information
          leaflet or ask your pharmacist.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="when-seek-help" heading="When to Seek Medical Help">
        <GuideParagraph>
          Most norovirus cases in GLP-1 medication users resolve safely with
          home management. However, seek medical help promptly if you experience:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Signs of significant dehydration — extreme dizziness, confusion, no urination for 8+ hours, or very dark urine",
            "Blood in vomit or diarrhoea",
            "Severe abdominal pain beyond typical stomach cramping",
            "Symptoms lasting more than 3 days without improvement",
            "High fever (above 38.5°C) that does not respond to paracetamol",
            "Inability to keep any fluids down for more than 12 hours",
          ]}
        />
        <GuideParagraph>
          The{" "}
          <EL href="https://www.nhs.uk/conditions/dehydration/">
            NHS dehydration guidance
          </EL>{" "}
          provides clear criteria for when to attend A&E or call 999. When in
          doubt, call 111 for clinical triage advice.
        </GuideParagraph>
      </GuideSection>

      <GuideKeyTakeaways
        items={[
          "GLP-1 medications slow gastric emptying, which can prolong nausea and vomiting during norovirus—symptoms may feel more intense but are not more dangerous.",
          "Dehydration risk is higher for Mounjaro/Wegovy users due to reduced baseline fluid intake; prioritise oral rehydration salts from symptom onset.",
          "For mild symptoms, continue your injection on schedule; delay the next dose only for severe or prolonged vomiting/diarrhoea.",
          "Follow the BRAT diet when food is tolerated—reintroduce normal eating gradually over 24–48 hours.",
          "Seek medical help for dehydration signs, blood in stool, symptoms beyond 3 days, or inability to keep fluids down for 12+ hours.",
        ]}
      />

      <GuideRelatedGuides guides={RELATED_GUIDES} />
      <GuideReferences items={REFERENCES} />

      <GuideDisclaimer>
        This guide is for informational purposes only. If you are concerned
        about your symptoms or the interaction between norovirus and your
        medication, contact your GP, pharmacist, or call NHS 111. Do not
        permanently stop any prescription medication without clinical advice.
      </GuideDisclaimer>

      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
