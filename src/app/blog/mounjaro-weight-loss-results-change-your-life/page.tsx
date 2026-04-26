import { Metadata } from 'next';
import ArticleClient from './ArticleClient';
import { siteOrigin } from '@/lib/seo/site-origin';

const PATH = '/blog/mounjaro-weight-loss-results-change-your-life';
const HERO_IMAGE = `${siteOrigin()}/blog/Mounjaro%20Weight%20Loss%20Results%20That%20May%20Finally%20Change%20Your%20Life.webp`;

export const metadata: Metadata = {
  title: 'Mounjaro Weight Loss Results That May Finally Change Your Life',
  description: 'Discover if mounjaro weight loss results can finally change your life and help you shed stubborn kilos.',
  keywords: 'mounjaro weight loss results',
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: 'Mounjaro Weight Loss Results That May Finally Change Your Life',
    description: 'Discover if mounjaro weight loss results can finally change your life and help you shed stubborn kilos.',
    url: `${siteOrigin()}${PATH}`,
    type: 'article',
    publishedTime: '2026-04-19T00:00:00.000Z',
    images: [
      {
        url: HERO_IMAGE,
        alt: 'Mounjaro weight loss results',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mounjaro Weight Loss Results That May Finally Change Your Life',
    description: 'Discover if mounjaro weight loss results can finally change your life and help you shed stubborn kilos.',
    images: [HERO_IMAGE],
  },
};

export default function MounjaroWeightLossResultsPage() {
  const ARTICLE_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mounjaro Weight Loss Results That May Finally Change Your Life',
    description: 'What to expect from Mounjaro (tirzepatide) weight loss results: mechanisms, real-world stories, side effects, maintenance after treatment, and professional oversight—informational only, not medical advice.',
    image: [HERO_IMAGE],
    author: { '@type': 'Organization', name: 'Health Wise' },
    publisher: { '@type': 'Organization', name: 'Health Wise' },
    datePublished: '2026-04-19',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteOrigin()}${PATH}`,
    },
  };

  const FAQ_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What kind of weight loss results can people see on Mounjaro?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clinical and pharmacy-reported data often cite substantial average percentage weight loss over many months, but individual results vary with dose, adherence, and lifestyle. Your prescriber can interpret trial data in the context of your health.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long until I notice Mounjaro weight loss results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Some people notice appetite changes within weeks, while meaningful scale change commonly builds over months. Progress is not linear; follow-up helps you interpret plateaus safely.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Mounjaro suitable for everyone who wants weight loss results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Eligibility depends on medical history, medications, and local prescribing rules. Serious risks exist; only a qualified clinician should assess whether tirzepatide is appropriate for you.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens to weight after stopping Mounjaro?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Appetite regulation can shift after discontinuation, and regain is possible without strong maintenance habits. Stopping should be planned with supervision rather than abrupt cessation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you restart Mounjaro if weight creeps back?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sometimes, but it is a medical decision. A second course may differ in dosing, side effects, and expectations compared with the first. Discuss costs, risks, and alternatives with your prescriber.',
        },
      },
      {
        '@type': 'Question',
        name: 'How should I access Mounjaro safely in the UK?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use NHS pathways where eligible, or regulated private prescribers and pharmacies. Verify credentials, avoid unverified sellers, and compare legitimate providers before paying.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...ARTICLE_SCHEMA,
            '@graph': [ARTICLE_SCHEMA, FAQ_SCHEMA],
          }),
        }}
      />
      <ArticleClient />
    </>
  );
}
