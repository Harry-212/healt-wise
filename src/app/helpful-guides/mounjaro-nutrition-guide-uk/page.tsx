import { helpfulGuidePath } from "@/lib/helpful-guide-slugs";
import { siteOrigin } from "@/lib/seo/site-origin";
import { buildGuideShareMetadata } from "@/lib/seo/guide-share-metadata";
import { SITE_ARTICLE_AUTHOR_NAME } from "@/lib/site-brand";
import {
  GuideLayout,
  GuideSection,
  GuideParagraph,
  GuideBulletList,
  GuideDisclaimer,
  GuideFaq,
  GuideReferences,
  GuideRelatedGuides,
  GuideCallout,
  IL,
  EL,
} from "@/components/guide/GuideLayout";

const PAGE_TITLE =
  "What to Eat on Mounjaro in the UK: Foods to Eat, Foods to Avoid and Side Effects";
const META_DESCRIPTION =
  "What to eat on Mounjaro in the UK: what the leaflet and NHS say about food, foods to avoid, nausea, alcohol and when to speak to your prescriber.";
const INTRO =
  "Mounjaro (tirzepatide) reduces appetite, so many people eat less than before. That makes it worth knowing what to eat on Mounjaro, which foods can make side effects worse, and where to get personal advice. This guide sets out what the patient leaflet, NHS England and NHS hospital patient information say. It is for information only. It is not a diet plan and it does not replace advice from your prescriber or a dietitian.";

export const metadata = buildGuideShareMetadata({
  slug: "mounjaro-nutrition-guide-uk",
  title: "What to Eat on Mounjaro UK: Foods to Avoid",
  description: META_DESCRIPTION,
  openGraphTitle: "What to Eat on Mounjaro UK: Foods to Avoid",
});

const TOC = [
  { id: "leaflet", label: "What the leaflet says about eating on Mounjaro" },
  { id: "mounjaro-diet", label: "Is there a Mounjaro diet?" },
  { id: "best-foods", label: "Best foods to eat on Mounjaro" },
  { id: "foods-to-avoid", label: "Foods to avoid or limit on Mounjaro" },
  {
    id: "side-effects-food",
    label: "What to eat with nausea, constipation, diarrhoea or heartburn",
  },
  { id: "low-appetite", label: "What to eat on Mounjaro when you are not hungry" },
  { id: "drinks-alcohol", label: "Drinks, fluids and alcohol on Mounjaro" },
  { id: "meal-ideas", label: "Meal ideas on Mounjaro" },
  { id: "urgent-help", label: "When to speak to your prescriber or get urgent help" },
  { id: "nhs-dietitians", label: "NHS support and dietitians" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "references", label: "Sources & Further Reading" },
];

/** Visible FAQ text and FAQPage schema are both built from this array, so they can never differ. */
const FAQ_ITEMS = [
  {
    q: "What should I eat on Mounjaro?",
    a: "There is no set list. The NHS Eatwell Guide is a good guide to a balanced diet: fruit and vegetables, starchy carbohydrates, protein foods, dairy or alternatives, and a small amount of oils. Small, regular meals suit many people because Mounjaro slows stomach emptying.",
  },
  {
    q: "Do I still need to eat well if my appetite is low?",
    a: "Yes. Mounjaro changes how much you want to eat, not what your body needs. When you eat less, the food you choose matters more. If you are eating very little, speak to your prescriber.",
  },
  {
    q: "What foods should I avoid on Mounjaro?",
    a: "Nothing has to be avoided completely. NHS hospital patient information names very sweet, spicy, fatty and fried foods, large portions and strong smelling foods as common triggers for nausea. A food diary can help you spot your own.",
  },
  {
    q: "How much protein should I eat on Mounjaro?",
    a: "The leaflet gives no figure. How much protein you need depends on your age, size, activity and health, so a dietitian can work out an amount for you. Protein foods include fish, eggs, poultry, beans, lentils, tofu and dairy.",
  },
  {
    q: "Should I avoid carbohydrates on Mounjaro?",
    a: "There is no instruction to avoid them. The NHS Eatwell Guide includes starchy carbohydrates, with wholegrain choices for extra fibre. If you want to change how you eat, discuss it with your prescriber or a dietitian first.",
  },
  {
    q: "Can I drink alcohol on Mounjaro?",
    a: "The NHS says it is best to avoid alcohol while using tirzepatide, because it can make side effects such as nausea worse. Ask your prescriber about your own situation.",
  },
  {
    q: "Can I follow keto or intermittent fasting on Mounjaro?",
    a: "The leaflet does not set a diet, and this page cannot say whether a particular diet suits you. Skipping meals or cutting out food groups can be hard when your appetite is already reduced, and it can matter if you take insulin or a sulphonylurea. Speak to your prescriber or a dietitian first.",
  },
  {
    q: "What should I eat on injection day?",
    a: "No food has to be eaten or avoided on injection day. The leaflet says the weekly dose can be taken at any time of day, with or without meals. If you feel sick afterwards, small plain meals are usually easier.",
  },
];

const SIDE_EFFECT_ROWS: { effect: string; consider: string; against: string }[] = [
  {
    effect: "Nausea or vomiting",
    consider:
      "Small, regular meals and snacks, because an empty stomach can make nausea worse. Eating slowly. Sitting upright or slightly reclined after eating. Plain, dry foods such as toast or crackers. Ginger or peppermint tea. Sipping fluids between meals.",
    against: "Very sweet, spicy, fatty or fried foods. Large portions. Strong smelling foods.",
  },
  {
    effect: "Constipation",
    consider:
      "Plenty of fluids. Fruit and vegetables. Wholegrain foods, beans and pulses. Staying active. Speak to a pharmacist before using a laxative.",
    against: "Processed foods and refined carbohydrates. Too much alcohol or caffeine.",
  },
  {
    effect: "Diarrhoea",
    consider:
      "Plenty of fluids to replace what is lost. Small meals of soft, easily digested foods. A food diary to spot triggers. Speak to a doctor if it does not settle.",
    against:
      "High-fibre foods while it lasts. Spicy or fatty foods. Alcohol, strong tea or coffee, and pure fruit juice.",
  },
  {
    effect: "Heartburn or reflux",
    consider:
      "Smaller amounts at regular times. Not skipping meals. Sitting upright to eat. Finishing the evening meal a few hours before bed.",
    against:
      "Large meals. Lying down soon after eating. Alcohol. For some people, tea, coffee, fizzy drinks, citrus, tomato, garlic, spicy or fatty foods.",
  },
];

const REFERENCES = [
  {
    label: "Mounjaro KwikPen patient information leaflet (emc)",
    description: "The UK patient leaflet: use with a reduced-calorie diet, dehydration advice and when to get urgent help.",
    href: "https://www.medicines.org.uk/emc/product/15483/pil",
  },
  {
    label: "NHS England — weight management injections",
    description: "How tirzepatide (Mounjaro) is offered on the NHS, and the diet and activity support that goes with it.",
    href: "https://www.england.nhs.uk/medicines-for-obesity/weight-management-injections/",
  },
  {
    label: "NICE — Tirzepatide for managing overweight and obesity (TA1026)",
    description: "NICE recommends tirzepatide as an addition to a reduced-calorie diet and increased physical activity.",
    href: "https://www.nice.org.uk/guidance/ta1026",
  },
  {
    label: "NHS — The Eatwell Guide",
    description: "The UK's standard picture of a balanced diet, with the proportion of each food group.",
    href: "https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/the-eatwell-guide/",
  },
  {
    label: "NHS — How to get more fibre into your diet",
    description: "NHS advice on fibre, including the 30 g a day target for adults.",
    href: "https://www.nhs.uk/live-well/eat-well/digestive-health/how-to-get-more-fibre-into-your-diet/",
  },
  {
    label: "Cambridge University Hospitals — dietary advice for people with type 2 diabetes using tirzepatide (Mounjaro)",
    description: "NHS hospital patient information used for the food advice on side effects, small meals and low appetite.",
    href: "https://www.cuh.nhs.uk/patient-information/dietary-advice-for-people-with-type-2-diabetes-using-tirzepatide-mounjaro/",
  },
  {
    label: "NHS — Tirzepatide (Mounjaro)",
    description: "NHS medicine information, including food, drink and alcohol with tirzepatide.",
    href: "https://www.nhs.uk/medicines/tirzepatide/",
  },
  {
    label: "NHS — Water, drinks and hydration",
    description: "How much fluid adults are advised to drink and which drinks count.",
    href: "https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/water-drinks-nutrition/",
  },
  {
    label: "MHRA Yellow Card scheme",
    description: "Report a suspected side effect of a medicine.",
    href: "https://yellowcard.mhra.gov.uk",
  },
  {
    label: "British Dietetic Association — find a dietitian",
    description: "Directory of dietitians.",
    href: "https://www.bda.uk.com/find-a-dietitian.html",
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/mounjaro-menopause-weight-loss-uk",
    category: "Medications",
    title: "Mounjaro and Menopause",
    description: "A UK guide to Mounjaro, menopause and weight.",
  },
  {
    href: "/blog/why-does-belly-fat-increase-after-40",
    category: "Weight management",
    title: "Why Does Belly Fat Increase After 40?",
    description:
      "How hormones and fat storage change in midlife, explained in plain UK language.",
  },
];

const PAGE_PATH = helpfulGuidePath("mounjaro-nutrition-guide-uk");

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: PAGE_TITLE,
  description: META_DESCRIPTION,
  author: { "@type": "Organization", name: SITE_ARTICLE_AUTHOR_NAME },
  publisher: {
    "@type": "Organization",
    name: "Healthwise360",
    logo: {
      "@type": "ImageObject",
      url: `${siteOrigin()}/logo-health-wise.webp`,
    },
  },
  inLanguage: "en-GB",
  datePublished: "2026-04-09",
  dateModified: "2026-11-10",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteOrigin()}${PAGE_PATH}`,
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

export default function GuideMounjaroNutrition() {
  return (
    <GuideLayout
      slug="mounjaro-nutrition-guide-uk"
      category="Nutrition"
      categorySlug="nutrition"
      title={PAGE_TITLE}
      description={INTRO}
      readTime="9 min read"
      lastUpdated="November 2026"
      toc={TOC}
      schemaJson={{ "@context": "https://schema.org", "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      <GuideCallout variant="tip">
        <p className="font-semibold">At a glance</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            There is no set Mounjaro diet. The leaflet and NHS England describe Mounjaro as used
            with a reduced-calorie diet and regular physical activity.
          </li>
          <li>
            Mounjaro slows how quickly the stomach empties, so large, rich or fatty meals can bring
            on nausea or heartburn.
          </li>
          <li>Side effects are most common when you start and when the dose goes up.</li>
          <li>
            Drinking enough matters, because vomiting or diarrhoea can lead to dehydration.
          </li>
          <li>
            If you are unsure what to eat, ask your prescriber, pharmacist or a registered
            dietitian.
          </li>
        </ul>
        <p className="mt-3">
          New to the medicine? Read <IL href="/what-is-mounjaro">what Mounjaro is</IL>.
        </p>
      </GuideCallout>

      <GuideSection id="leaflet" heading="What the leaflet says about eating on Mounjaro">
        <GuideParagraph>
          The UK patient leaflet for Mounjaro KwikPen does not list foods to eat or avoid. It makes
          two points that matter for eating:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Mounjaro is used together with a reduced-calorie diet and increased physical activity, and the leaflet asks you to follow the dietary and activity advice from your doctor, nurse or pharmacist.",
            "When you start treatment you may lose fluids through vomiting, nausea or diarrhoea. This can reduce kidney function, so the leaflet says it is important to avoid dehydration by drinking plenty of fluids, and to contact your doctor if you have concerns.",
          ]}
        />
        <GuideParagraph>
          NHS England says the same about diet: if Mounjaro is recommended you need to eat a
          balanced, reduced-calorie diet and take part in regular physical activity while taking it.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="mounjaro-diet" heading="Is there a Mounjaro diet?">
        <GuideParagraph>
          No. There is no official Mounjaro diet, and no named diet plan comes with the medicine.
          NICE recommends tirzepatide as an addition to a reduced-calorie diet and increased
          physical activity, not as a replacement for them.
        </GuideParagraph>
        <GuideParagraph>
          That is why any “Mounjaro diet plan” you find online, including PDFs and seven day plans,
          is one company&apos;s suggestion and not part of the leaflet or NHS guidance. A plan that
          suits you depends on your health, your other medicines and your food preferences. A
          registered dietitian can build one with you.
        </GuideParagraph>
        <GuideParagraph>
          Some people also ask about changing how many calories they eat across the week. Our guide
          to{" "}
          <IL href="/helpful-guides/mounjaro-calorie-cycling-weight-loss">
            calorie cycling on Mounjaro
          </IL>{" "}
          explains what is known.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="best-foods" heading="Best foods to eat on Mounjaro">
        <GuideParagraph>
          No food is known to be a must on Mounjaro. The NHS Eatwell Guide is the UK&apos;s standard
          picture of a balanced diet, and it is a sensible starting point whether or not you take
          Mounjaro. It shows:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Fruit and vegetables: just over a third of the plate. The NHS suggests five portions a day.",
            "Starchy carbohydrates: just over a third. Wholegrain choices such as wholemeal bread, brown rice, oats and potatoes with their skins add fibre.",
            "Protein foods: beans, pulses, fish, eggs, poultry and other meat, tofu and similar foods. Dairy or dairy alternatives sit alongside them.",
            "Oils and spreads: a small amount, mostly unsaturated.",
          ]}
        />
        <GuideParagraph>
          The NHS says adults should aim for 30 g of fibre a day, and most people eat less. Fibre
          can help with constipation, which is a common Mounjaro side effect.
        </GuideParagraph>
        <GuideParagraph>
          Protein foods are filling. How much protein you need depends on your age, size, activity
          and health, so this page gives no figure. A dietitian can work out an amount for you.
        </GuideParagraph>
        <GuideParagraph>
          When you eat less overall, it helps if the food you do eat is varied. If you are eating
          very little or avoiding whole food groups, tell your prescriber.
        </GuideParagraph>
        <GuideParagraph>
          For more on two of these food groups, see our guides to{" "}
          <IL href="/blog/protein-for-glp-1-users-uk">protein for GLP-1 users</IL> and{" "}
          <IL href="/blog/fibre-for-glp-1-users">fibre for GLP-1 users</IL>.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="foods-to-avoid" heading="Foods to avoid or limit on Mounjaro">
        <GuideParagraph>
          Nothing has to be avoided completely, and there is no list from the leaflet. Because
          Mounjaro slows stomach emptying, some foods tend to make side effects worse. NHS hospital
          patient information names very sweet, spicy, fatty and fried foods, large portions and
          strong smelling foods. The examples below are ours:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Fatty and fried foods. Chips, fried chicken, pastries and creamy sauces take longer to digest and can bring on nausea, bloating or heartburn.",
            "Very sweet foods and drinks. Sugary snacks and sweet drinks can add to nausea in some people.",
            "Spicy foods. These can irritate the stomach and add to heartburn or diarrhoea.",
            "Large portions. A big meal on top of slower stomach emptying is a common trigger. Small, regular meals are usually easier.",
            "Strong smelling foods, if you feel sick.",
            "Fizzy drinks, which some people find worsen reflux.",
            "Alcohol. See the drinks section below.",
          ]}
        />
        <GuideParagraph>
          Keeping a food and symptom diary can help you spot which foods bother you. Triggers vary
          from person to person.
        </GuideParagraph>
      </GuideSection>

      <GuideSection
        id="side-effects-food"
        heading="What to eat with nausea, constipation, diarrhoea or heartburn"
      >
        <GuideParagraph>
          These side effects are common, especially at the start and after a dose increase. The
          table below follows an NHS hospital patient leaflet written for people with type 2
          diabetes who use tirzepatide. The food advice for side effects applies more widely, but it
          is general information and not personal advice.
        </GuideParagraph>
        <div className="w-full overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th scope="col" className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Side effect
                </th>
                <th scope="col" className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                  What people are advised to consider
                </th>
                <th scope="col" className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                  What is advised against
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {SIDE_EFFECT_ROWS.map((row) => (
                <tr key={row.effect}>
                  <th scope="row" className="px-4 py-3 align-top font-medium text-slate-900">
                    {row.effect}
                  </th>
                  <td className="px-4 py-3 align-top leading-relaxed text-slate-700">{row.consider}</td>
                  <td className="px-4 py-3 align-top leading-relaxed text-slate-700">{row.against}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <GuideParagraph>
          For more on each side effect, see our{" "}
          <IL href="/helpful-guides/mounjaro-side-effects-uk">Mounjaro side effects guide</IL>. For
          constipation in particular, read our{" "}
          <IL href="/helpful-guides/mounjaro-constipation-relief-uk">
            Mounjaro constipation relief guide
          </IL>
          .
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="low-appetite" heading="What to eat on Mounjaro when you are not hungry">
        <GuideParagraph>
          Many people notice they feel full quickly or forget to eat. NHS hospital patient
          information suggests small, regular meals with snacks in between, because an empty stomach
          can make nausea worse. Eating slowly gives your stomach time to settle.
        </GuideParagraph>
        <GuideParagraph>
          Plain, nourishing choices are easier when appetite is low: yoghurt, eggs, soup, porridge,
          fruit, or a small sandwich. Sipping fluids through the day helps too.
        </GuideParagraph>
        <GuideParagraph>
          If you are eating very little for several days, speak to your prescriber. If weight loss
          is slowing instead, see{" "}
          <IL href="/helpful-guides/mounjaro-weight-loss-plateau">
            why weight loss slows on Mounjaro
          </IL>
          .
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="drinks-alcohol" heading="Drinks, fluids and alcohol on Mounjaro">
        <GuideParagraph>
          <span className="font-semibold">Fluids.</span> The patient leaflet says it is important to
          avoid dehydration, because vomiting, nausea or diarrhoea can cause you to lose fluids. The
          NHS suggests 6 to 8 glasses of fluid a day for most adults, and more when it is hot or
          when you are losing fluid. Water, lower-fat milk, sugar-free drinks and tea and coffee all
          count.
        </GuideParagraph>
        <GuideParagraph>
          <span className="font-semibold">Alcohol.</span> The NHS says it is best to avoid alcohol
          while using tirzepatide, because it can make side effects such as nausea worse. NHS
          hospital patient information also advises limiting it with diarrhoea or constipation, and
          avoiding it with reflux. If you also take insulin or a sulphonylurea, alcohol can add to
          the risk of low blood sugar, so ask your diabetes team.
        </GuideParagraph>
        <GuideParagraph>
          <span className="font-semibold">Fizzy and sweet drinks.</span> Some people find these
          worsen reflux. A food and symptom diary can show whether they affect you.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="meal-ideas" heading="Meal ideas on Mounjaro">
        <GuideParagraph>
          These are ideas based on the NHS Eatwell Guide, not a plan. Choose what suits you, and
          adjust for allergies, medicines and your dietitian&apos;s advice.
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Breakfast: porridge with fruit. Eggs on wholemeal toast. Plain yoghurt with berries.",
            "Lunch: bean and vegetable soup with bread. A chicken and salad wrap. Tuna and sweetcorn on a jacket potato.",
            "Dinner: baked fish with potatoes and green vegetables. Lentil dhal with rice. Chicken and vegetable stir fry with noodles.",
            "Snacks: fruit. Plain yoghurt. Oatcakes with cottage cheese. A small handful of unsalted nuts.",
          ]}
        />
        <GuideParagraph>
          On days when you feel sick, plain foods such as toast, crackers, rice or a banana are often
          easier.
        </GuideParagraph>
        <GuideParagraph>
          Some people ask whether they need extra vitamins when they eat less. See our{" "}
          <IL href="/helpful-guides/mounjaro-multivitamins-uk">Mounjaro and multivitamins guide</IL>.
        </GuideParagraph>
      </GuideSection>

      <GuideSection
        id="urgent-help"
        heading="When to speak to your prescriber or get urgent help"
      >
        <GuideParagraph>
          Get medical help straight away if you have severe pain in your stomach and back that does
          not go away, with or without vomiting. The patient leaflet lists this as a possible sign
          of inflammation of the pancreas (pancreatitis).
        </GuideParagraph>
        <GuideParagraph>Contact your prescriber, GP or pharmacist if:</GuideParagraph>
        <GuideBulletList
          items={[
            "vomiting or diarrhoea means you cannot keep fluids down, or it does not settle",
            "you are eating very little for several days",
            "heartburn, constipation or nausea is severe or does not improve",
            "you take insulin or a sulphonylurea, because your doses may need to change when you eat less",
            "you are thinking about starting a restrictive diet",
          ]}
        />
        <GuideParagraph>
          You can also report a suspected side effect through the{" "}
          <EL href="https://yellowcard.mhra.gov.uk">MHRA Yellow Card scheme</EL>.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="nhs-dietitians" heading="NHS support and dietitians">
        <GuideParagraph>
          A registered dietitian can set personal food targets that this page cannot. Ask your GP
          about dietitian support, or search the British Dietetic Association&apos;s{" "}
          <EL href="https://www.bda.uk.com/find-a-dietitian.html">directory of dietitians</EL>.
        </GuideParagraph>
        <GuideParagraph>
          NHS England says that tirzepatide (Mounjaro) is offered on the NHS in a phased way, first
          to people with the highest clinical need, with support that can include dietitians. See
          the{" "}
          <EL href="https://www.england.nhs.uk/medicines-for-obesity/weight-management-injections/">
            NHS England page on weight management injections
          </EL>{" "}
          to check how it applies to you.
        </GuideParagraph>
      </GuideSection>

      <GuideFaq
        items={FAQ_ITEMS}
        heading="Frequently asked questions"
        questionsAsHeadings
      />

      <GuideRelatedGuides guides={RELATED_GUIDES} />
      <GuideReferences items={REFERENCES} />

      <p className="text-xs text-slate-400">
        Written and maintained by the {SITE_ARTICLE_AUTHOR_NAME}. Last updated November 2026.
      </p>

      <GuideDisclaimer>
        This guide is for informational purposes only and does not constitute personalised dietary
        or medical advice. For a nutrition plan tailored to your specific needs, consult a registered
        dietitian. Always discuss significant dietary changes with your prescribing clinician while
        using <IL href="/what-is-mounjaro">Mounjaro</IL>.
      </GuideDisclaimer>
    </GuideLayout>
  );
}
