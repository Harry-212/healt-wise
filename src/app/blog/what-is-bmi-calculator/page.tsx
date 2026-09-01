import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogImgPath, BMI_HERO_PNG } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const PATH = "/blog/what-is-bmi-calculator";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(BMI_HERO_PNG)}`;

export const metadata: Metadata = {
  title: "BMI Calculator UK: What Your Number Means, How to Use It, and What Comes Next",
  description:
    "Free BMI calculator for UK adults. Understand your BMI category, NHS thresholds, limitations, weight loss treatment eligibility, and what to do with your result.",
  keywords:
    "BMI calculator UK, what is my BMI, BMI calculator, calculate BMI UK, healthy BMI UK",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: "BMI Calculator UK: What Your Number Means, How to Use It, and What Comes Next",
    description:
      "Free BMI calculator for UK adults. Understand your BMI category, NHS thresholds, limitations, weight loss treatment eligibility, and what to do with your result.",
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-05-30T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "BMI Calculator UK: What Your Number Means, How to Use It, and What Comes Next",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BMI Calculator UK: What Your Number Means, How to Use It, and What Comes Next",
    description:
      "Free BMI calculator for UK adults. Understand your BMI category, NHS thresholds, limitations, weight loss treatment eligibility, and what to do with your result.",
    images: [HERO_IMAGE],
  },
};

export default function BmiCalculatorBlogPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "BMI Calculator UK: What Your Number Means, How to Use It, and What Comes Next",
    description:
      "Free BMI calculator for UK adults. Understand your BMI category, NHS thresholds, limitations, weight loss treatment eligibility, and what to do with your result.",
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360", logo: { "@type": "ImageObject", url: "https://healthwise360.co.uk/logo-health-wise.webp" } },
    datePublished: "2026-05-30",
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
        name: "What is a healthy BMI for a woman in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The NHS uses the same BMI range for both men and women: 18.5 to 24.9 is considered healthy weight. However, because women typically carry a higher proportion of body fat than men at the same BMI, some clinicians consider waist circumference or body fat percentage as supplementary metrics. For women, a waist circumference below 80 cm (31.5 inches) is generally associated with lower metabolic risk.",
        },
      },
      {
        "@type": "Question",
        name: "What is a healthy BMI for a man in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The same NHS standard applies: 18.5 to 24.9. For men, a waist circumference below 94 cm (37 inches) is the supplementary NHS guidance for lower metabolic risk, rising to high risk above 102 cm (40 inches).",
        },
      },
      {
        "@type": "Question",
        name: "How accurate is BMI as a health measure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BMI is accurate at what it is designed to measure: weight relative to height. It is not accurate as a measure of body fat, metabolic health, or individual disease risk. It works well as a population-level screening tool and a starting point for clinical conversations. For individual assessment, it should be used alongside waist circumference, blood tests, and clinical judgement.",
        },
      },
      {
        "@type": "Question",
        name: "At what BMI does the NHS offer weight loss treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NHS weight management services typically require BMI 30 or above for referral. Wegovy and Mounjaro are available through NHS specialist services with BMI thresholds of 30+ (or 35+ in some NICE pathway frameworks), subject to specific eligibility criteria. NHS GP services can advise on local availability and referral pathways.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use a BMI calculator in stone and feet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our interactive BMI calculator UK tool accepts height in feet/inches and weight in stone, pounds, or kg, in any combination. Results update in real time as you type.",
        },
      },
      {
        "@type": "Question",
        name: "Is BMI different for Asian adults in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Public Health England and NICE acknowledge that people of South Asian, East Asian, and some other Asian heritage groups face higher metabolic risk at lower BMI values. The suggested adjusted thresholds are: overweight at BMI 23+, and obese at BMI 27.5+. These adjusted thresholds are increasingly used in clinical practice, though not yet universally applied across all NHS services.",
        },
      },
      {
        "@type": "Question",
        name: "Does BMI affect my eligibility for Wegovy or Mounjaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BMI is one of the key eligibility criteria for GLP-1 weight loss treatments in the UK. Generally, BMI 30+ may qualify without additional conditions, while BMI 27 to 29.9 may qualify with weight-related health conditions such as high blood pressure, type 2 diabetes, or sleep apnoea. However, eligibility is always determined by a licensed prescriber following a full clinical assessment, meaning BMI alone is not sufficient. For price and provider comparison, you can visit our comprehensive mounjaro vs wegovy vs saxenda comparison dashboard.",
        },
      },
      {
        "@type": "Question",
        name: "What is a normal BMI for a 60-year-old in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The standard NHS BMI range (18.5–24.9) applies across adult age groups, including those over 60. However, for older adults, maintaining a BMI slightly above the healthy range (around 25–27) may be associated with lower all-cause mortality in some research, sometimes called the 'obesity paradox.' Additionally, muscle mass naturally declines with age, so BMI may underestimate adiposity in older adults. A GP can provide age-appropriate guidance.",
        },
      },
    ],
  };

  return (
    <>
      
      <BreadcrumbJsonLd
        sectionName="Blog"
        sectionPath="/blog"
        pageName="BMI Calculator UK: What Your Number Means, How to Use It, and What Comes Next"
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
