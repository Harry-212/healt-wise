import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import {
  blogImgPath,
  WEIGHT_LOSS_TREATMENT_UK_COMPLETE_GUIDE_HERO_PNG,
} from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const PATH = "/blog/weight-loss-treatment-uk-complete-guide";
const TITLE =
  "The Complete Guide to Weight Loss Treatment in the UK (2026): GLP-1, How It Works, Costs & What to Expect";
const DESCRIPTION =
  "The complete UK guide to weight loss treatment 2026 covering GLP-1 treatments, how they work, NHS vs private costs, eligibility, Mounjaro, Wegovy and Saxenda explained.";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(WEIGHT_LOSS_TREATMENT_UK_COMPLETE_GUIDE_HERO_PNG)}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "weight loss treatment UK, weight loss treatment guide UK, GLP-1 weight loss UK, prescription weight loss UK 2026, weight loss injection UK, tirzepatide UK, semaglutide UK, liraglutide UK, NHS weight loss treatment, private weight loss treatment UK, GLP-1 mechanism, weight loss treatment eligibility UK, mounjaro guide UK, wegovy guide UK, saxenda guide UK, weight management medication UK, NICE approved weight loss UK, prescription obesity treatment UK, weight loss medication how it works, fat loss treatment UK",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-06-09T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Complete UK guide to weight loss treatment, eligibility, costs and expectations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [HERO_IMAGE],
  },
};

export default function WeightLossTreatmentUkCompleteGuidePage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360", logo: { "@type": "ImageObject", url: "https://healthwise360.co.uk/logo-health-wise.webp" } },
    datePublished: "2026-06-09",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteOrigin()}${PATH}`,
    },
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the most effective weight loss treatment in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Based on clinical trial data, Mounjaro (tirzepatide) currently shows the highest average weight loss of any MHRA approved weight loss medication in the UK, at approximately 15 to 20% of body weight in the SURMOUNT trials. Individual response varies, and the most effective treatment for a specific person depends on biology, health history, and tolerance.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if I qualify for weight loss treatment in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The general eligibility threshold is BMI 30 or above. Patients with a BMI of 27 to 29.9 may qualify if they have a weight related health condition such as type 2 diabetes, high blood pressure, or sleep apnoea. Final eligibility is always determined by a licensed prescriber following clinical assessment.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get weight loss injections on the NHS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Both Wegovy and Mounjaro are NICE approved and have NHS access pathways through specialist weight management services. Availability is subject to local commissioning and service capacity, so many eligible patients still access treatment privately in 2026.",
        },
      },
      {
        "@type": "Question",
        name: "How long do you stay on weight loss treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GLP 1 treatments are generally intended as long term interventions. Clinical data shows that weight regain commonly occurs when treatment stops because the underlying biological drivers of excess weight, including appetite dysregulation, are not permanently resolved by medication.",
        },
      },
      {
        "@type": "Question",
        name: "What happens when you stop weight loss treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Studies show that weight regain is common after stopping GLP 1 treatment, often recovering a significant proportion of lost weight within twelve months. Stopping should be done with prescriber guidance and ideally with a plan for maintaining supportive lifestyle changes.",
        },
      },
      {
        "@type": "Question",
        name: "How do I compare weight loss treatment prices safely?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use an independent comparison platform that covers all dose steps, shows GPhC verification and Trustpilot ratings alongside prices, and discloses hidden fees. Healthwise360 covers GPhC registered pharmacies across Mounjaro, Wegovy and Saxenda dose strengths.",
        },
      },
      {
        "@type": "Question",
        name: "Is weight loss treatment safe to buy online in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, when purchased from a GPhC registered pharmacy following a proper clinical assessment from a GMC registered prescriber. The risks arise from unregistered providers or platforms that issue prescriptions without genuine clinical assessment.",
        },
      },
    ],
  };

  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Blog"
        sectionPath="/blog"
        pageName="Weight Loss Treatment UK Complete Guide"
        pagePath={PATH}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...ARTICLE_SCHEMA,
            "@graph": [ARTICLE_SCHEMA, FAQ_SCHEMA],
          }),
        }}
      />
      <ArticleClient />
    </>
  );
}
