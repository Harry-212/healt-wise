import type { Metadata } from 'next';
import ArticleClient from './ArticleClient';
import { siteOrigin } from '@/lib/seo/site-origin';

const PATH = '/blog/how-licensed-weight-loss-injections-uk-can-boost-your-journey';
const HERO_IMAGE = `${siteOrigin()}/blog/How%20Licensed%20Weight%20Loss%20Injections%20UK%20Can%20Boost%20Your%20Journey.webp`;

export const metadata: Metadata = {
  title: 'How Licensed Weight Loss Injections UK Can Boost Your Journey',
  description: 'Learn how licensed weight loss injections in the UK can support appetite control, clinical oversight, and longer-term progress with regulated treatment pathways.',
  keywords: 'licensed weight loss injections UK, Mounjaro, Wegovy, MHRA approved, prescription weight loss, obesity treatment UK, appetite control, clinical supervision',
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: 'How Licensed Weight Loss Injections UK Can Boost Your Journey',
    description: 'Learn how licensed weight loss injections in the UK can support appetite control, clinical oversight, and longer-term progress with regulated treatment pathways.',
    url: `${siteOrigin()}${PATH}`,
    type: 'article',
    publishedTime: '2026-05-21T00:00:00.000Z',
    images: [
      {
        url: HERO_IMAGE,
        alt: 'Licensed weight loss injections in the UK help support regulated treatment and appetite control',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Licensed Weight Loss Injections UK Can Boost Your Journey',
    description: 'Learn how licensed weight loss injections in the UK can support appetite control, clinical oversight, and longer-term progress with regulated treatment pathways.',
    images: [HERO_IMAGE],
  },
};

export default function LicensedWeightLossInjectionsPage() {
  return <ArticleClient />;
}
