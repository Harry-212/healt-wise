import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/about";

/** A plain run of text, or one linked to `href` — lets a FAQ answer carry an
 * inline link while `answer` stays plain text for the FAQPage JSON-LD. */
export type FaqRichPart = { text: string; href?: string };

export const ABOUT_PAGE_FAQS: {
  question: string;
  answer: string;
  answerRich?: FaqRichPart[];
}[] = [
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
    answerRich: [
      { text: "Use the " },
      { text: "official GPhC register", href: "https://www.pharmacyregulation.org/registers" },
      { text: " to check the pharmacy supplying the medicine. " },
      { text: "Our verification guide", href: "/pharmacy-safety-gphc-verification" },
      {
        text: " explains what to look for, including why the provider's trading name may differ from the dispensing pharmacy's name.",
      },
    ],
  },
  {
    question: "Who writes Healthwise360's comparisons?",
    answer:
      "Founder Alistair Greenwood researches and explains published provider and pricing information. He is not a healthcare professional, and Healthwise360's content is not medically reviewed. Read Alistair's profile and our editorial policy for more detail.",
    answerRich: [
      {
        text: "Founder Alistair Greenwood researches and explains published provider and pricing information. He is not a healthcare professional, and Healthwise360's content is not medically reviewed. Read ",
      },
      { text: "Alistair's profile", href: "/editorial-team/alistair-greenwood" },
      { text: " and " },
      { text: "our editorial policy", href: "/editorial-policy" },
      { text: " for more detail." },
    ],
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
