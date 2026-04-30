import type { Metadata } from 'next';
import ArticleClient from './ArticleClient';
import { siteOrigin } from '@/lib/seo/site-origin';

const PATH = '/blog/discover-the-powerful-benefits-of-prescription-slimming-injections-uk';
const HERO_IMAGE = `${siteOrigin()}/blog/Discover%20the%20Powerful%20Benefits%20of%20Prescription%20Slimming%20Injections%20UK.webp`;

export const metadata: Metadata = {
  title: 'Discover the Powerful Benefits of Prescription Slimming Treatments UK',
  description: 'Discover the powerful benefits of prescription slimming treatments in the UK, including how Wegovy, Mounjaro and Saxenda support appetite, blood sugar and long-term progress.',
  keywords: 'prescription slimming treatments UK, Wegovy, Mounjaro, Saxenda, GLP-1, prescription weight loss, obesity treatment UK, slimming treatments benefits',
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: 'Discover the Powerful Benefits of Prescription Slimming Treatments UK',
    description: 'Discover the powerful benefits of prescription slimming treatments in the UK, including how Wegovy, Mounjaro and Saxenda support appetite, blood sugar and long-term progress.',
    url: `${siteOrigin()}${PATH}`,
    type: 'article',
    publishedTime: '2026-05-22T00:00:00.000Z',
    images: [
      {
        url: HERO_IMAGE,
        alt: 'Prescription slimming treatments UK with Wegovy, Mounjaro and Saxenda for regulated obesity treatment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discover the Powerful Benefits of Prescription Slimming Treatments UK',
    description: 'Discover the powerful benefits of prescription slimming treatments in the UK, including how Wegovy, Mounjaro and Saxenda support appetite, blood sugar and long-term progress.',
    images: [HERO_IMAGE],
  },
};

export default function PrescriptionSlimmingInjectionsPage() {
  return <ArticleClient />;
}
