import { siteOrigin } from "@/lib/seo/site-origin";

export const BMI_CALCULATOR_FAQ_BMI_ITEMS = [
  {
    q: "What is a healthy BMI in the UK?",
    a: "For most UK adults, a BMI between 18.5 and 24.9 is considered a healthy weight range. Below 18.5 is underweight; 25 to 29.9 is overweight; 30 or above is obese. BMI is a screening tool—not a diagnosis—and doesn't account for muscle mass or where fat is stored.",
  },
  {
    q: "What are the NHS BMI thresholds for adults?",
    a: "NHS adult categories commonly use: underweight under 18.5, healthy 18.5–24.9, overweight 25–29.9, and obese 30 or above. Some clinical pathways also discuss BMI 27+ when weight-related conditions are present. Ethnicity and body composition can change how a clinician interprets the number.",
  },
  {
    q: "What do BMI categories mean for weight management eligibility?",
    a: "BMI categories help clinicians triage who may benefit from structured weight management support. Eligibility for any programme or clinical pathway depends on a full assessment—history, comorbidities, medications, and goals—not BMI alone. This calculator cannot decide eligibility for you.",
  },
  {
    q: "Is BMI accurate as a body fat measure?",
    a: "BMI accurately summarises weight-for-height for population screening. It is not an accurate personal body-fat test and can misclassify muscular people or miss risk in people with higher visceral fat at a “healthy” BMI. Waist size, blood tests, and clinical review fill the gaps.",
  },
] as const;

export const BMI_CALCULATOR_FAQ_BMR_TDEE_ITEMS = [
  {
    q: "What is BMR (Basal Metabolic Rate)?",
    a: "BMR is an estimate of how many calories your body burns at complete rest—before daily activity, digestion, or exercise. It reflects energy needed for breathing, circulation, cell repair, and other basic functions. It is not the same as how much you should eat in a day; that is closer to TDEE (total daily energy expenditure).",
  },
  {
    q: "How does Healthwise360 calculate BMR?",
    a: "We use the Mifflin–St Jeor equation, a widely used formula that takes your weight, height, age, and sex. Like all estimates, it can differ from lab-measured metabolic rate—muscle mass, genetics, thyroid health, and medications can shift real energy needs. Use the number as a planning guide, not a prescription.",
  },
  {
    q: "What is TDEE (Total Daily Energy Expenditure)?",
    a: "TDEE is an estimate of how many calories you burn across a whole day, including BMR plus the energy from movement, work, fidgeting, digestion, and exercise. Our calculator multiplies your BMR by an activity factor (from sedentary to very active). Pick the level that best matches your typical week, not your best week.",
  },
  {
    q: "What is the difference between BMR and TDEE?",
    a: "BMR is rest-only; TDEE adds everything you do on top of that. If you ate exactly your BMR every day while still walking, working, and training, you would usually be in a large deficit because TDEE is higher. For weight planning, TDEE (or a clinician’s plan) is usually the more relevant starting point than BMR alone.",
  },
  {
    q: "How accurate are BMR and TDEE calculators?",
    a: "They are reasonable population averages, not personalised medical tests. Error margins of roughly 10–20% are common. Athletes, very lean or very muscular people, older adults, and those on certain medicines may sit above or below the estimate. Treat outputs as discussion points with a dietitian or GP—not rigid targets.",
  },
  {
    q: "How should I use calorie needs for weight management?",
    a: "Use maintain, mild-deficit, and moderate-deficit estimates as starting ranges, then adjust for energy, hunger, and clinical advice. Very low intakes are not appropriate for everyone. If you have a medical condition, are pregnant, or take regular medicines, agree calorie targets with a healthcare professional.",
  },
] as const;

/** All FAQ entries — used for FAQPage JSON-LD and combined rendering. */
export const BMI_CALCULATOR_FAQ_ITEMS = [
  ...BMI_CALCULATOR_FAQ_BMI_ITEMS,
  ...BMI_CALCULATOR_FAQ_BMR_TDEE_ITEMS,
] as const;

export function bmiCalculatorFaqJsonLd() {
  const origin = siteOrigin();
  const url = `${origin}/tools/bmi-calculator`;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: BMI_CALCULATOR_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
    url,
  };
}

export function bmiCalculatorWebPageJsonLd() {
  const origin = siteOrigin();
  const url = `${origin}/tools/bmi-calculator`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "BMI, BMR & Calorie Calculator UK | Free Online Tool",
    description:
      "Free BMI calculator UK with body mass index categories, NHS BMI thresholds, BMR calculator and estimated calorie needs for weight management planning.",
    url,
    isPartOf: {
      "@type": "WebSite",
      name: "Healthwise360",
      url: origin,
    },
  };
}
