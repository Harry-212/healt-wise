import { siteOrigin } from "@/lib/seo/site-origin";

export type BmiCalculatorFaqItem = {
  question: string;
  answer: string;
};

export const BMI_CALCULATOR_FAQS: BmiCalculatorFaqItem[] = [
  {
    question: "Is BMI accurate?",
    answer:
      "BMI is a good guide, but it is not exact. It uses only your height and weight. It does not measure body fat or muscle mass. A very muscular person can have a high BMI. An older adult can have a healthy BMI and still carry too much body fat. That is why we also look at waist size and ethnic background. Think of BMI as a first check, not a diagnosis.",
  },
  {
    question: "What is BMR basal metabolic rate?",
    answer:
      "BMR means basal metabolic rate. It is the number of calories your body burns at rest in a day. It is the energy you need just to stay alive.",
  },
  {
    question: "Ideal weight calculator UK: what is my ideal weight?",
    answer:
      "There is no one perfect number. The best way is to use an ideal weight calculator UK style and look at a range. Enter your height above, and we show the healthy weight range for you. Anywhere in that range is a good place to be.",
  },
  {
    question: "What is good BMI for your age and weight?",
    answer:
      "For adults, the healthy BMI range is 18.5 to 24.9 at any age. What is good for you depends on your height, not just your age and weight. Ask your GP if you are 65 or over.",
  },
  {
    question: "What is the difference between BMR and TDEE?",
    answer:
      "BMR is what you burn at rest. TDEE is what you burn over the whole day, including movement and exercise. TDEE is always higher than BMR.",
  },
  {
    question: "What is a BMI calculator?",
    answer:
      "A BMI calculator is a tool that does the BMI sum for you. You enter your height and weight. It shows your body mass index and your weight group.",
  },
  {
    question: "Can children use this tool?",
    answer:
      "No. It is for adults aged 18 and over. Ask your GP or school nurse about a child's weight.",
  },
];

export function bmiCalculatorJsonLd(): Record<string, unknown> {
  const origin = siteOrigin().replace(/\/$/, "");
  const url = `${origin}/tools/bmi-calculator`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "BMI Calculator UK: BMI, BMR & TDEE Calculator (Stones & kg)",
        headline: "BMI Calculator UK",
        description:
          "Free BMI calculator for UK adults. Check your BMI in stones and pounds or kg, see the BMI chart and work out your BMR, TDEE and daily calories.",
        inLanguage: "en-GB",
        isPartOf: {
          "@id": `${origin}/#website`,
        },
        publisher: {
          "@id": `${origin}/#organization`,
        },
        breadcrumb: {
          "@id": `${url}#breadcrumb`,
        },
        mainEntity: {
          "@id": `${url}#calculator`,
        },
        dateModified: "2026-10-21",
        audience: {
          "@type": "PeopleAudience",
          suggestedMinAge: 18,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#hero-answer"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${origin}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "BMI Calculator UK",
            item: url,
          },
        ],
      },
      {
        "@type": ["WebApplication", "SoftwareApplication"],
        "@id": `${url}#calculator`,
        name: "Healthwise360 BMI, BMR and TDEE Calculator",
        url,
        description:
          "Calculates body mass index, healthy weight range, BMR, TDEE and a calorie deficit target for adults aged 18 and over. Accepts stones, pounds, feet and inches, or kg and cm.",
        applicationCategory: "HealthApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires a modern web browser",
        inLanguage: "en-GB",
        isAccessibleForFree: true,
        creator: {
          "@id": `${origin}/#organization`,
        },
        publisher: {
          "@id": `${origin}/#organization`,
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "GBP",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        isPartOf: {
          "@id": `${url}#webpage`,
        },
        mainEntity: BMI_CALCULATOR_FAQS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
