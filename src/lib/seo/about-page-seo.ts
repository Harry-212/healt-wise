import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/about";

export const ABOUT_PAGE_FAQS: { question: string; answer: string }[] = [
  {
    question: "Is Healthwise360 a pharmacy?",
    answer:
      "No. Healthwise360 is an independent comparison website. It does not prescribe, sell or dispatch medicines; a qualified prescriber and a regulated supplier are responsible for clinical assessment and supply.",
  },
  {
    question: "Can Healthwise360 tell me which treatment is right for me?",
    answer:
      "No. Our comparisons can help you understand provider costs and prepare questions, but they cannot assess your medical history or determine suitability. Speak with a qualified healthcare professional about treatment decisions.",
  },
  {
    question: "Are the prices on Healthwise360 live?",
    answer:
      "Prices are checked on the dates shown on the relevant comparison pages. Providers can change prices, offers, stock and fees after a check, so confirm the final amount and terms on the provider's website.",
  },
  {
    question: "How can I check whether an online pharmacy is registered?",
    answer:
      "Use the official GPhC register to check the pharmacy supplying the medicine. Our verification guide explains what to look for, including why the provider's trading name may differ from the dispensing pharmacy's name.",
  },
  {
    question: "Who writes Healthwise360's comparisons?",
    answer:
      "Founder Alistair Greenwood researches and explains published provider and pricing information. He is not a healthcare professional, and Healthwise360's content is not medically reviewed. Read Alistair's profile and our editorial policy for more detail.",
  },
];

export function aboutPageJsonLd(): Record<string, unknown> {
  const url = `${siteOrigin()}${PATH}`;
  const faqEntities = ABOUT_PAGE_FAQS.map((item) => ({
    "@type": "Question" as const,
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${url}#webpage`,
        url,
        name: "About Healthwise360",
        description:
          "Healthwise360 is an independent UK website that helps adults compare private weight-management providers, published prices and pharmacy information.",
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqEntities,
      },
    ],
  };
}
