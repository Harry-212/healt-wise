import type { Metadata } from 'next';
import ArticleClient from './ArticleClient';
import { INJECTABLE_OBESITY_TREATMENTS_HERO } from './blog-assets';
import { siteOrigin } from '@/lib/seo/site-origin';

const PATH = '/blog/injectable-obesity-treatments-uk-what-works-and-what-doesnt';
const HERO_IMAGE = `${siteOrigin()}${INJECTABLE_OBESITY_TREATMENTS_HERO}`;

export const metadata: Metadata = {
  title: "Injectable Obesity Treatments UK: What Works and What Doesn't",
  description: 'Injectable obesity treatments in the UK: understand how Wegovy, Mounjaro and Saxenda work, NHS vs private access, costs, side effects and realistic expectations.',
  keywords: 'injectable obesity treatments uk, Wegovy, Mounjaro, Saxenda, GLP-1, GIP, weight loss injections, obesity treatment UK, prescription weight loss, semaglutide, tirzepatide',
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: "Injectable Obesity Treatments UK: What Works and What Doesn't",
    description: 'Injectable obesity treatments in the UK: understand how Wegovy, Mounjaro and Saxenda work, NHS vs private access, costs, side effects and realistic expectations.',
    url: `${siteOrigin()}${PATH}`,
    type: 'article',
    publishedTime: '2026-05-20T00:00:00.000Z',
    images: [
      {
        url: HERO_IMAGE,
        alt: 'Injectable obesity treatments in the UK, clinical weight management options including Wegovy, Mounjaro and Saxenda',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Injectable Obesity Treatments UK: What Works and What Doesn't",
    description: 'Injectable obesity treatments in the UK: understand how Wegovy, Mounjaro and Saxenda work, NHS vs private access, costs, side effects and realistic expectations.',
    images: [HERO_IMAGE],
  },
};

export default function InjectableObesityTreatmentsPage() {
  return <ArticleClient />;
}
