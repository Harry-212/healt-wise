import { siteOrigin } from "@/lib/seo/site-origin";

export const BMI_CALCULATOR_FAQ_ITEMS = [
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
    name: "BMI calculator UK — weight loss treatment eligibility guide",
    description:
      "Free BMI calculator for UK adults: height in cm or feet, weight in kg, lbs, or stone. See category, treatment eligibility context, and links to Wegovy, Mounjaro, and price comparisons.",
    url,
    isPartOf: {
      "@type": "WebSite",
      name: "Health Wise",
      url: origin,
    },
  };
}
