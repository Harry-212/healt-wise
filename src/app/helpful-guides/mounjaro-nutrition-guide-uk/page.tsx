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
  slug: "mounjaro-nutrition-guide-uk",
  title: "Mounjaro Nutrition Guide UK: What to Eat for Better Weight Loss Results",
  description: "Mounjaro controls appetite—but what you eat determines the quality of your results. A practical, evidence-based guide to nutrition while using tirzepatide in the UK.",
  openGraphTitle: "Mounjaro Nutrition Guide UK: What to Eat for Better Weight Loss Results",
});


const TOC = [
  { id: "why-nutrition-matters", label: "Why Nutrition Still Matters" },
  { id: "protein", label: "1. Prioritise Protein" },
  { id: "carbs", label: "2. Choose Low-Glycaemic Carbs" },
  { id: "fibre", label: "3. Increase Fibre Intake" },
  { id: "fats", label: "4. Include Healthy Fats" },
  { id: "hydration", label: "5. Stay Hydrated" },
  { id: "processed-foods", label: "6. Limit Processed Foods" },
  { id: "mindful-eating", label: "7. Practice Mindful Eating" },
  { id: "balanced-meals", label: "8. Build Balanced Meals" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "Do I still need to eat well if Mounjaro reduces my appetite?",
    a: "Yes—this is one of the most important points. Mounjaro reduces how much you want to eat, but it does not determine what you eat. Poor food quality on a smaller volume leads to nutrient deficiencies, muscle loss, and fatigue. The quality of your diet remains a major factor in determining your long-term results.",
  },
  {
    q: "How much protein should I eat while on Mounjaro?",
    a: "Most clinical guidance for weight loss recommends 1.2–1.6g of protein per kilogram of body weight per day. This is higher than the standard RDA because a meaningful proportion of weight loss can come from muscle mass without adequate protein intake. A registered dietitian can calculate a personalised target.",
  },
  {
    q: "Should I avoid carbohydrates on Mounjaro?",
    a: "No—carbohydrates are not inherently harmful. The focus should be on quality: choose low-glycaemic, high-fibre options (oats, brown rice, whole grains, vegetables) that provide sustained energy and support blood sugar stability. Highly refined carbohydrates (white bread, sugary snacks) offer little nutritional value and can cause blood sugar spikes.",
  },
  {
    q: "What should I eat when I have very little appetite on Mounjaro?",
    a: "When appetite is significantly suppressed, prioritise nutrient-dense foods that deliver maximum nutrition per calorie: eggs, Greek yoghurt, lean protein, avocado, and vegetables. Liquid nutrition (protein shakes, smoothies) can help maintain intake when solid food is unappealing. Never force large meals—listen to your body, but aim for nutritional completeness.",
  },
  {
    q: "Are there foods I should avoid completely on Mounjaro?",
    a: "There are no absolute prohibitions, but certain foods are worth limiting. Ultra-processed foods, sugary snacks, and high-saturated-fat options tend to be calorie-dense, nutritionally poor, and can worsen nausea—a common early side effect of Mounjaro. Alcohol can also interact with blood sugar regulation and is best consumed minimally.",
  },
  {
    q: "Can I follow a specific diet plan (keto, Mediterranean, intermittent fasting) on Mounjaro?",
    a: "Many dietary approaches are compatible with Mounjaro. The Mediterranean diet, in particular, aligns well—it is high in protein, fibre, and healthy fats, and has strong evidence for cardiovascular and metabolic health. Ketogenic approaches can work but require careful monitoring. Intermittent fasting is generally compatible, but should be discussed with your clinician as it may affect blood sugar management.",
  },
];

const REFERENCES = [
  {
    label: "NHS Eatwell Guide",
    description:
      "The UK government's evidence-based framework for a balanced diet, covering proportions of each food group for adults.",
    href: "https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/the-eatwell-guide/",
  },
  {
    label: "British Dietetic Association — Protein and muscle health",
    description:
      "BDA evidence summary on protein requirements for weight management and muscle preservation.",
    href: "https://www.bda.uk.com/resource/protein.html",
  },
  {
    label: "NHS — Fibre in your diet",
    description:
      "NHS guidance on dietary fibre—recommended intake, best sources, and health benefits.",
    href: "https://www.nhs.uk/live-well/eat-well/digestive-health/how-to-get-more-fibre-into-your-diet/",
  },
  {
    label: "NICE — Tirzepatide for managing overweight and obesity (TA1026)",
    description:
      "NICE guidance on tirzepatide including the importance of lifestyle intervention (diet and exercise) alongside medication.",
    href: "https://www.nice.org.uk/guidance/ta1026",
  },
  {
    label: "Mounjaro calorie cycling guide — Health Wise",
    description:
      "How to structure calorie intake throughout the week to complement Mounjaro and prevent plateaus.",
    href: "/helpful-guides/mounjaro-calorie-cycling-weight-loss",
    external: false,
  },
  {
    label: "Why weight loss slows on Mounjaro — Health Wise",
    description:
      "Understanding Mounjaro plateaus, metabolic adaptation, and the role of nutrition in long-term progress.",
    href: "/helpful-guides/mounjaro-weight-loss-plateau",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/mounjaro-calorie-cycling-weight-loss",
    category: "Nutrition",
    title: "Mounjaro Calorie Cycling: A Smarter Approach to Weight Loss",
    description:
      "Vary your daily intake to prevent metabolic adaptation and improve long-term adherence alongside Mounjaro.",
  },
  {
    href: "/helpful-guides/mounjaro-early-weight-loss-why-it-slows",
    category: "Medications",
    title: "Why Weight Loss Is Faster at the Start on Mounjaro",
    description:
      "Understand the biology behind rapid early results—and why slowing progress is normal, not failure.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mounjaro Nutrition Guide UK: What to Eat for Better Weight Loss Results",
  description:
    "Mounjaro controls appetite—but what you eat determines the quality of your results. A practical, evidence-based guide to nutrition while using tirzepatide in the UK.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteOrigin()}${helpfulGuidePath("mounjaro-nutrition-guide-uk")}`,
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
      title="Mounjaro Nutrition Guide UK: What to Eat for Better Weight Loss Results"
      description="Mounjaro significantly reduces appetite—but the quality of what you eat still determines the quality of your results. This evidence-based guide covers the key dietary principles for getting the most from tirzepatide treatment."
      readTime="5 min read"
      lastUpdated="April 2026"
      toc={TOC}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      <GuideSection id="why-nutrition-matters" heading="Why Nutrition Still Matters">
        <GuideParagraph>
          <IL href="/what-is-mounjaro">Mounjaro (tirzepatide)</IL> works by
          suppressing appetite and regulating blood sugar—making it
          significantly easier to eat less. But the medication controls
          quantity, not quality. What you choose to eat within your reduced
          intake determines your energy levels, body composition, and the
          sustainability of your results.
        </GuideParagraph>
        <GuideParagraph>
          A structured nutrition approach alongside{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> improves:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Energy levels throughout the day — nutrient-dense food sustains energy even in a calorie deficit",
            "Fat loss efficiency — protein and fibre preserve muscle mass and maximise fat loss relative to total weight lost",
            "Long-term sustainability — a balanced, flexible diet is easier to maintain than extreme restriction",
          ]}
        />
        <GuideCallout variant="info">
          The{" "}
          <EL href="https://www.nice.org.uk/guidance/ta1026">
            NICE guidance on tirzepatide (TA1026)
          </EL>{" "}
          explicitly states that Mounjaro should be used as an adjunct to a
          reduced-calorie diet and increased physical activity—not as a
          standalone treatment. Nutrition is not optional; it is part of the
          clinical framework.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="protein" heading="1. Prioritise Protein">
        <GuideParagraph>
          Protein is the most important macronutrient to prioritise while using{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL>. When in a calorie
          deficit, the body can break down muscle tissue for energy—a process
          that slows metabolism and reduces long-term results. Adequate protein
          intake helps prevent this.
        </GuideParagraph>
        <GuideParagraph>
          Protein supports:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Muscle preservation — critical during weight loss to maintain metabolic rate",
            "Satiety — protein is the most filling macronutrient, supporting Mounjaro's appetite-suppressing effect",
            "Metabolic function — protein has a higher thermic effect than carbohydrates or fats (your body burns more calories digesting it)",
          ]}
        />
        <GuideParagraph>
          Best protein sources for Mounjaro patients:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Lean meats — chicken breast, turkey, lean beef",
            "Fish and seafood — salmon, cod, tuna, prawns",
            "Eggs — one of the most nutrient-dense, versatile protein sources",
            "Dairy — Greek yoghurt, cottage cheese, low-fat cheese",
            "Plant proteins — lentils, chickpeas, tofu, edamame, tempeh",
          ]}
        />
        <GuideCallout variant="tip">
          Target approximately 1.2–1.6g of protein per kilogram of body weight
          per day. For a 90kg individual, that is 108–144g of protein daily. A
          registered dietitian can calculate a more precise target based on
          your situation.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="carbs" heading="2. Choose Low-Glycaemic Carbs">
        <GuideParagraph>
          Carbohydrates are not the enemy—but the type matters. Low-glycaemic
          index (GI) foods release energy more slowly, helping to stabilise
          blood sugar levels. This is particularly important alongside{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL>, which already works in
          part by improving insulin response.
        </GuideParagraph>
        <GuideParagraph>
          Good low-GI carbohydrate choices include:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Oats — slow-releasing energy, high in beta-glucan (soluble fibre)",
            "Brown rice and quinoa — higher fibre, more sustained energy than white rice",
            "Whole grain bread and pasta — lower GI than refined versions",
            "Sweet potato — more nutritious and slower-releasing than white potato",
            "Non-starchy vegetables — broccoli, spinach, peppers, courgette",
          ]}
        />
        <GuideParagraph>
          Limit high-GI refined carbohydrates (white bread, pastries, sugary
          breakfast cereals) — they cause rapid blood sugar spikes and
          subsequent hunger, working against Mounjaro's stabilising effect.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="fibre" heading="3. Increase Fibre Intake">
        <GuideParagraph>
          Fibre is consistently under-consumed in UK diets, yet it plays a
          critical role in supporting weight loss and gut health. The{" "}
          <EL href="https://www.nhs.uk/live-well/eat-well/digestive-health/how-to-get-more-fibre-into-your-diet/">
            NHS recommends 30g of fibre per day
          </EL>{" "}
          for adults—most people consume considerably less.
        </GuideParagraph>
        <GuideParagraph>
          Fibre improves:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Digestion — supports healthy gut motility and reduces constipation (a potential side effect of GLP-1 medications)",
            "Satiety — soluble fibre slows gastric emptying and helps you feel full longer",
            "Gut health — fermentable fibres feed beneficial gut bacteria, supporting the microbiome",
          ]}
        />
        <GuideParagraph>
          High-fibre foods to include:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Vegetables — especially leafy greens, broccoli, Brussels sprouts",
            "Fruits — berries, apples, pears (with skin), kiwi",
            "Legumes — lentils, chickpeas, black beans, kidney beans",
            "Whole grains — oats, barley, brown rice, whole wheat",
          ]}
        />
      </GuideSection>

      <GuideSection id="fats" heading="4. Include Healthy Fats">
        <GuideParagraph>
          Dietary fat is essential—not optional. Healthy fats support brain
          function, hormonal balance, and the absorption of fat-soluble
          vitamins (A, D, E, K). When appetite is significantly reduced by{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL>, ensuring adequate fat
          intake from quality sources becomes especially important.
        </GuideParagraph>
        <GuideParagraph>
          Good sources of healthy fats:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Avocado — rich in monounsaturated fats and potassium",
            "Nuts and seeds — almonds, walnuts, chia seeds, flaxseeds",
            "Olive oil — primary fat source in the Mediterranean diet; anti-inflammatory",
            "Oily fish — salmon, mackerel, sardines (also excellent protein sources)",
            "Eggs — contain both protein and healthy fat in a single food",
          ]}
        />
        <GuideParagraph>
          Limit saturated fats (found in fatty meats, butter, full-fat dairy,
          and ultra-processed foods) and avoid trans fats (partially
          hydrogenated oils found in some processed baked goods) entirely.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="hydration" heading="5. Stay Hydrated">
        <GuideParagraph>
          Adequate hydration supports appetite control, digestion, and
          metabolism—all of which interact with how{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> functions. Dehydration
          can also temporarily affect the scale, masking genuine fat loss and
          causing unnecessary concern.
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Aim for 6–8 glasses (approximately 1.5–2 litres) of water per day — more if physically active or in warm weather",
            "Drink before meals — a glass of water before eating can enhance Mounjaro's satiety effect",
            "Limit caffeinated and alcoholic drinks — they can contribute to dehydration and may affect blood sugar regulation",
            "Herbal teas and sparkling water are good alternatives to plain water for variety",
          ]}
        />
      </GuideSection>

      <GuideSection id="processed-foods" heading="6. Limit Processed Foods">
        <GuideParagraph>
          Ultra-processed foods are a key driver of poor nutritional outcomes
          even at lower calorie levels. They tend to be low in protein, fibre,
          and micronutrients—while being high in refined carbohydrates,
          saturated fats, sugar, and sodium.
        </GuideParagraph>
        <GuideParagraph>
          Limit or avoid:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Sugary snacks and confectionery — deliver empty calories with no nutritional benefit",
            "Ultra-processed ready meals — typically high in sodium, saturated fat, and additives",
            "High-saturated-fat fast food — calorie-dense and nutritionally poor",
            "Sugary drinks — rapidly absorbed glucose that spikes blood sugar despite Mounjaro's regulation",
          ]}
        />
        <GuideCallout variant="warning">
          Some patients on Mounjaro report that greasy or high-fat meals worsen
          nausea—a common early side effect. Limiting processed and fatty foods
          can also reduce gastrointestinal discomfort during the initial weeks
          of treatment.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="mindful-eating" heading="7. Practice Mindful Eating">
        <GuideParagraph>
          <IL href="/what-is-mounjaro">Mounjaro</IL> significantly reduces
          appetite, but it does not eliminate the habit of eating quickly or
          eating past fullness. Mindful eating techniques help you tune into
          your body's actual hunger and satiety signals—particularly important
          when those signals are being pharmacologically altered.
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Eat slowly — it takes approximately 20 minutes for fullness signals to reach the brain; rushing a meal often leads to overeating",
            "Remove distractions — eating in front of screens disrupts awareness of portion size and satiety",
            "Recognise fullness cues — learn to stop eating when satisfied, not when the plate is empty; Mounjaro lowers the threshold where fullness occurs",
            "Chew thoroughly — supports digestion and slows the eating pace naturally",
          ]}
        />
      </GuideSection>

      <GuideSection id="balanced-meals" heading="8. Build Balanced Meals">
        <GuideParagraph>
          The simplest practical framework is to ensure every meal contains a
          combination of protein, complex carbohydrates, and healthy fat. This
          approach naturally improves satiety, blood sugar stability, and
          nutritional completeness without requiring calorie counting.
        </GuideParagraph>
        <GuideParagraph>
          A balanced meal example:
        </GuideParagraph>
        <GuideBulletList
          items={[
            "Grilled salmon (protein + healthy fat) + brown rice or quinoa (complex carb) + roasted vegetables (fibre + micronutrients)",
            "Chicken breast (protein) + sweet potato (low-GI carb) + spinach salad with olive oil dressing (fibre + healthy fat)",
            "Lentil and vegetable curry (plant protein + fibre) + whole grain bread (complex carb) + Greek yoghurt (protein + probiotic)",
          ]}
        />
        <GuideParagraph>
          For evidence-based UK dietary guidance, the{" "}
          <EL href="https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/the-eatwell-guide/">
            NHS Eatwell Guide
          </EL>{" "}
          provides a practical framework for proportioning food groups. The
          British Dietetic Association's{" "}
          <EL href="https://www.bda.uk.com/resource/weight-loss.html">
            weight management resources
          </EL>{" "}
          are also valuable for those seeking professional dietary support.
        </GuideParagraph>
        <GuideCallout variant="tip">
          Nutrition is the multiplier—not the replacement—for{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL>. The medication manages
          appetite; your food choices determine the quality of what you build
          on that foundation.
        </GuideCallout>
      </GuideSection>

      <GuideKeyTakeaways
        items={[
          "Mounjaro controls how much you eat; nutrition determines the quality of your results.",
          "Prioritise protein (1.2–1.6g/kg/day) to preserve muscle mass and support satiety during weight loss.",
          "Choose low-GI carbohydrates and high-fibre foods to stabilise blood sugar and support digestion.",
          "Include healthy fats (avocado, oily fish, nuts, olive oil) for hormonal balance and fat-soluble vitamin absorption.",
          "Limit ultra-processed foods—they worsen nausea, offer poor nutrition, and undermine the quality of your weight loss.",
          "Build balanced meals combining protein, complex carbs, and healthy fat; practice mindful eating to tune into satiety cues.",
        ]}
      />

      <GuideRelatedGuides guides={RELATED_GUIDES} />
      <GuideReferences items={REFERENCES} />

      <GuideDisclaimer>
        This guide is for informational purposes only and does not constitute
        personalised dietary or medical advice. For a nutrition plan tailored
        to your specific needs, consult a registered dietitian. Always discuss
        significant dietary changes with your prescribing clinician while using{" "}
        <IL href="/what-is-mounjaro">Mounjaro</IL>.
      </GuideDisclaimer>

      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
