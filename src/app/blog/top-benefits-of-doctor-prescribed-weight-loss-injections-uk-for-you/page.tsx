import type { Metadata } from 'next';
import ArticleClient from './ArticleClient';
import { TOP_BENEFITS_WEIGHT_LOSS_INJECTIONS_HERO } from './blog-assets';
import { siteOrigin } from '@/lib/seo/site-origin';

const PATH = '/blog/top-benefits-of-doctor-prescribed-weight-loss-injections-uk-for-you';
const HERO_IMAGE = `${siteOrigin()}${TOP_BENEFITS_WEIGHT_LOSS_INJECTIONS_HERO}`;

export const metadata: Metadata = {
  title: 'Top Benefits of Doctor Prescribed Weight Loss Injections UK for You',
  description: 'Discover the top benefits of doctor prescribed weight loss injections in the UK, including appetite control, medical support, and what to ask your clinician before choosing Wegovy, Mounjaro or Saxenda.',
  keywords: 'doctor prescribed weight loss injections uk, Wegovy, Mounjaro, Saxenda, GLP-1, prescription obesity treatment, UK weight loss injections',
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: 'Top Benefits of Doctor Prescribed Weight Loss Injections UK for You',
    description: 'Discover the top benefits of doctor prescribed weight loss injections in the UK, including appetite control, medical support, and what to ask your clinician before choosing Wegovy, Mounjaro or Saxenda.',
    url: `${siteOrigin()}${PATH}`,
    type: 'article',
    publishedTime: '2026-05-19T00:00:00.000Z',
    images: [
      {
        url: HERO_IMAGE,
        alt: 'Doctor prescribed weight loss injection in the UK, a clinical support option for obesity treatment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Benefits of Doctor Prescribed Weight Loss Injections UK for You',
    description: 'Discover the top benefits of doctor prescribed weight loss injections in the UK, including appetite control, medical support, and what to ask your clinician before choosing Wegovy, Mounjaro or Saxenda.',
    images: [HERO_IMAGE],
  },
};

export default function TopBenefitsDoctorPrescribedWeightLossInjectionsPage() {
  return <ArticleClient />;
}
