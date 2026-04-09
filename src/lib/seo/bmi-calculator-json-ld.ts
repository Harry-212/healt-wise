import { siteOrigin } from "@/lib/seo/site-origin";

export const BMI_CALCULATOR_FAQ_BMI_ITEMS = [
  {
    q: "What is a healthy BMI in the UK?",
    a: "For most UK adults, a BMI between 18.5 and 24.9 is considered a healthy weight range. Below 18.5 is underweight; 25 to 29.9 is overweight; 30 or above is obese. BMI is a screening tool—not a diagnosis—and doesn't account for muscle mass or where fat is stored.",
  },
  {
    q: "What BMI qualifies for Wegovy in the UK?",
    a: "Private prescribing in the UK often follows similar bands to clinical guidance: typically BMI 30 or above, or BMI 27 or above with weight-related health conditions. Only a qualified prescriber can confirm eligibility after reviewing your medical history, medications, and goals.",
  },
  {
    q: "Is BMI enough to get weight loss treatment?",
    a: "No. BMI helps triage who might be suitable, but treatment decisions require a full assessment: conditions like diabetes, thyroid disorders, pregnancy, medicines you take, mental health, and more. You should never start prescription injections without clinician supervision.",
  },
  {
    q: "What BMI is needed for Mounjaro in the UK?",
    a: "Like other GLP-1-based weight loss medicines, Mounjaro is generally considered for adults with obesity (often BMI 30+) or overweight (often BMI 27+) when certain health conditions apply. NICE recommendations and individual providers may differ—your prescriber interprets what's appropriate for you.",
  },
] as const;

export const BMI_CALCULATOR_FAQ_BMR_TDEE_ITEMS = [
  {
    q: "What is BMR (Basal Metabolic Rate)?",
    a: "BMR is an estimate of how many calories your body burns at complete rest—before daily activity, digestion, or exercise. It reflects energy needed for breathing, circulation, cell repair, and other basic functions. It is not the same as how much you should eat in a day; that is closer to TDEE (total daily energy expenditure).",
  },
  {
    q: "How does Health Wise calculate BMR?",
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
    a: "They are reasonable population averages, not personalised medical tests. Error margins of roughly 10–20% are common. Athletes, very lean or very muscular people, older adults, and those on certain drugs (including some GLP-1 medicines) may sit above or below the estimate. Treat outputs as discussion points with a dietitian, GP, or prescriber—not rigid targets.",
  },
  {
    q: "Should I follow TDEE calorie targets if I am on Wegovy or Mounjaro?",
    a: "GLP-1 treatments often reduce appetite naturally, so fixed calorie numbers from any online calculator may not match how you feel or what your clinician wants. Some people need structured minimum intakes for health; others need adjustments for muscle or medical conditions. Always follow the eating plan agreed with your healthcare team rather than a generic deficit from a website.",
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
    name: "BMI, BMR & TDEE calculator UK — weight loss treatment guide",
    description:
      "Free UK calculator: BMI, basal metabolic rate (BMR), TDEE, and calorie targets. Height in cm or feet, weight in kg, lbs, or stone. FAQs on BMR vs TDEE, treatment context, and links to Wegovy, Mounjaro, and price comparisons.",
    url,
    isPartOf: {
      "@type": "WebSite",
      name: "Health Wise",
      url: origin,
    },
  };
}
