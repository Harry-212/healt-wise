import type { Metadata } from 'next';
import ArticleClient from './ArticleClient';
import { siteOrigin } from '@/lib/seo/site-origin';

const PATH = '/blog/how-to-compare-uk-weight-loss-pens-and-find-the-best';
const HERO_IMAGE = `${siteOrigin()}/blog/How%20to%20Compare%20UK%20Weight%20Loss%20Pens%20and%20Find%20the%20Best.webp`;

export const metadata: Metadata = {
  title: 'How to Compare UK Weight Loss Pens and Find the Best',
  description: 'Learn how to compare UK weight loss pens, including Saxenda, Wegovy and Mounjaro, to find the best option for your goals, tolerance and budget.',
  keywords: 'UK weight loss pens, compare weight loss pens UK, Saxenda, Wegovy, Mounjaro, prescription weight loss, injectable obesity treatment, weight loss pens comparison',
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: 'How to Compare UK Weight Loss Pens and Find the Best',
    description: 'Learn how to compare UK weight loss pens, including Saxenda, Wegovy and Mounjaro, to find the best option for your goals, tolerance and budget.',
    url: `${siteOrigin()}${PATH}`,
    type: 'article',
    publishedTime: '2026-05-23T00:00:00.000Z',
    images: [
      {
        url: HERO_IMAGE,
        alt: 'Compare UK weight loss pens to find the best choice for your treatment goals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Compare UK Weight Loss Pens and Find the Best',
    description: 'Learn how to compare UK weight loss pens, including Saxenda, Wegovy and Mounjaro, to find the best option for your goals, tolerance and budget.',
    images: [HERO_IMAGE],
  },
};

export default function CompareUKWeightLossPensPage() {
  return <ArticleClient />;
}
