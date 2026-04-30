'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import BlogArticleHeroImage from '@/components/blog/BlogArticleHeroImage';
import { ArrowLeft, Moon, Sun, Calendar, Clock } from 'lucide-react';
import GuideTocSidebar from '@/components/guide/GuideTocSidebar';
import { GuideSharePanel } from '@/components/guide/GuideSharePanel';
import { GuideSection } from '@/components/guide/GuideLayout';
import { siteOrigin } from '@/lib/seo/site-origin';
import { INJECTABLE_OBESITY_TREATMENTS_HERO } from './blog-assets';

const SHARE_PATH = '/blog/injectable-obesity-treatments-uk-what-works-and-what-doesnt';
const HERO_SRC = INJECTABLE_OBESITY_TREATMENTS_HERO;

const TOC = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'how-they-work', label: 'How they work' },
  { id: 'nhs-vs-private', label: 'NHS vs Private' },
  { id: 'comparing-options', label: 'Comparing options' },
  { id: 'before-starting', label: 'Before starting' },
  { id: 'risks-side-effects', label: 'Risks & side effects' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'cost-effectiveness', label: 'Cost effectiveness' },
  { id: 'additional-faq', label: 'Additional FAQ' },
  { id: 'faq', label: 'Frequently Asked Questions' },
  { id: 'final-thoughts', label: 'Final thoughts' },
];

const SOCIAL_HASHTAGS = '#InjectableObesityTreatmentsUK #WegovyUK #MounjaroUK #GLP1UK #ObesityTreatment #WeightLossUK #SaxendaUK';

function SubHeading({ children, darkMode }: { children: React.ReactNode; darkMode: boolean }) {
  return <p className={`mt-6 font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{children}</p>;
}

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);
  const shareUrl = `${siteOrigin()}${SHARE_PATH}`;

  const ARTICLE_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Injectable Obesity Treatments UK: What Works and What Doesn't",
    description: 'Injectable obesity treatments in the UK: how Wegovy, Mounjaro and Saxenda work, NHS vs private access, costs, side effects and realistic expectations.',
    image: [HERO_SRC],
    author: { '@type': 'Organization', name: 'Health Wise' },
    publisher: { '@type': 'Organization', name: 'Health Wise' },
    datePublished: '2026-05-20',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteOrigin()}${SHARE_PATH}`,
    },
  };

  const FAQ_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I still need diet and exercise with injectable obesity treatments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, probably more than many advertisements imply. Medication may help regulate appetite, but it does not replace foundational habits.',
        },
      },
      {
        '@type': 'Question',
        name: 'How fast will I lose weight with injectable treatments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'That varies. Some people respond quickly. Others lose steadily over longer periods. Rapid results should not be assumed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I switch between injectable obesity treatments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Possibly, but only with clinical supervision. Switching between different medications requires proper medical guidance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will NHS prescriptions continue indefinitely?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not necessarily. Progress reviews often determine continuation. Many NHS pathways may stop prescribing if expected progress is not achieved.',
        },
      },
    ],
  };

  return (
    <div className={`w-full font-sans transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-300' : 'bg-white text-slate-800'}`}>
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <Link href="/blog" className={`flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-75 ${darkMode ? 'text-slate-300' : 'text-slate-900'}`}>
            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
              <ArrowLeft className="h-4 w-4" />
            </div>
            Back to News
          </Link>

          <div className="flex items-center gap-3">
            <Moon className={`h-4 w-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`} />
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`relative flex h-6 w-12 items-center rounded-full p-1 shadow-inner transition-colors ${darkMode ? 'bg-slate-700' : 'bg-slate-200'}`}
              aria-label="Toggle dark mode"
            >
              <div className={`h-4 w-4 rounded-full shadow transition-all ${darkMode ? 'translate-x-6 bg-slate-900' : 'translate-x-0 bg-white'}`} />
            </button>
            <Sun className={`h-4 w-4 ${darkMode ? 'text-yellow-400' : 'text-slate-400'}`} />
          </div>
        </div>

        <header className="mb-12">
          <h1 className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? 'text-white' : 'text-slate-900'}`}>Injectable Obesity Treatments UK: What Works and What Doesn't</h1>
          <div className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              20 May 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              13 min read
            </span>
          </div>

          <BlogArticleHeroImage src={HERO_SRC} alt="Injectable obesity treatments in the UK, clinical weight management options including Wegovy, Mounjaro and Saxenda" />
          <div id="guide-article-hero-end" aria-hidden className="pointer-events-none h-0 w-full overflow-hidden" />
        </header>

        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          {TOC.length > 0 && <GuideTocSidebar key={TOC.map((t) => t.id).join('-')} toc={TOC} />}

          <div className="min-w-0 max-w-3xl flex-1">
            <article className={`space-y-8 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              <GuideSection darkMode={darkMode} id="introduction" heading="Introduction">
                <p>If you have struggled with obesity despite trying the usual advice—eat less, move more, try another plan next Monday—injectable treatments may seem worth considering. For some people, they probably are.</p>
                <p>
                  These medicines can help reduce appetite, increase satiety, and in some cases make it easier to maintain a calorie deficit without feeling constantly hungry. That may sound simple, but anyone who has lived with persistent
                  food cravings knows it often is not.
                </p>
                <p>
                  Still, it helps to be realistic. These treatments do not override every driver of weight gain. They may help with hunger, but they do not necessarily fix emotional eating, stress-related habits, or years of metabolic
                  complexity.
                </p>
                <p>
                  In the UK, injectable obesity treatments are generally offered when body mass index thresholds are met—often a BMI of 30 or above, or 27 with weight-related health conditions, though exact criteria can vary. While they can
                  be effective, they are not usually viewed as standalone solutions.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="how-they-work" heading="How injectable obesity treatments work">
                <p>Most of these medicines act on pathways involved in appetite signalling.</p>
                <SubHeading darkMode={darkMode}>Wegovy and Saxenda</SubHeading>
                <p>Both act through the GLP-1 pathway, helping you feel fuller for longer and, in many cases, eat less.</p>
                <SubHeading darkMode={darkMode}>Mounjaro</SubHeading>
                <p>Mounjaro works somewhat differently, targeting both GLP-1 and GIP receptors. Some researchers believe that dual action may partly explain why outcomes can sometimes appear stronger in comparative studies.</p>
                <p>
                  These medicines also tend to slow gastric emptying. That may reduce hunger between meals, but it can also explain why nausea shows up so often, particularly during dose escalation. That is not a flaw in the treatment. It
                  is part of how it works.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nhs-vs-private" heading="NHS or private: which route makes sense?">
                <p>This is often less about medicine and more about access.</p>
                <SubHeading darkMode={darkMode}>NHS access</SubHeading>
                <p>
                  Through the NHS, treatment may be affordable, even remarkably so compared with private routes. In England, standard prescription charges apply. Elsewhere in the UK, prescriptions may be free. That is a major advantage.
                </p>
                <p>But access can be slow. Very slow in some cases. Eligibility criteria, specialist referrals, monitoring reviews—these can create delays that frustrate people already motivated to begin treatment.</p>
                <SubHeading darkMode={darkMode}>Private prescribing</SubHeading>
                <p>That is often why private clinics appeal. Not necessarily because they offer better medicines, but because they may offer faster access.</p>
                <p>Private prescribing for Wegovy, Saxenda, or Mounjaro may run from roughly £150 to over £300 monthly. Costs can rise over time. That adds up.</p>
                <p>Which raises a question people sometimes ignore: Can you sustain the treatment financially if it works well and you need longer use? That question deserves attention.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="comparing-options" heading="Comparing the main injectable options">
                <SubHeading darkMode={darkMode}>Mounjaro</SubHeading>
                <p>
                  Mounjaro is taken weekly. Some data suggest it may produce greater average weight reduction than some alternatives, though not everyone tolerates it equally well. Common concerns may include nausea, constipation, and
                  digestive discomfort.
                </p>
                <SubHeading darkMode={darkMode}>Wegovy</SubHeading>
                <p>
                  Wegovy is also once weekly and widely recognised. It tends to be the reference point many patients ask about first. Common side effects can include nausea, vomiting, diarrhoea, and in rare cases more serious concerns
                  requiring medical review.
                </p>
                <SubHeading darkMode={darkMode}>Saxenda</SubHeading>
                <p>
                  Saxenda differs partly because it is taken daily. For some, daily treatments feel inconvenient. Others prefer the dose flexibility. It may depend on the person. And that comes up often in obesity medicine: there may not be
                  one universally "best" option. There may only be a best fit.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="before-starting" heading="What you should actually consider before starting">
                <p>A few practical things matter more than glossy comparisons suggest:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Frequency matters.</strong> Some people simply do better with weekly routines.
                  </li>
                  <li>
                    <strong>Side effects matter.</strong> An effective medicine you cannot tolerate may not be effective for you.
                  </li>
                  <li>
                    <strong>Cost matters.</strong> That seems obvious, but many underestimate long-term expense.
                  </li>
                  <li>
                    <strong>Monitoring matters too.</strong> These are not really set and forget treatments. Dose changes, symptom reviews, progress assessments may all affect whether treatment continues.
                  </li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="risks-side-effects" heading="Risks and side effects">
                <p>This deserves honest discussion. Because enthusiasm can sometimes outpace caution.</p>
                <SubHeading darkMode={darkMode}>Common digestive side effects</SubHeading>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Nausea</li>
                  <li>Constipation</li>
                  <li>Diarrhoea</li>
                  <li>Vomiting</li>
                  <li>Sometimes fatigue</li>
                </ul>
                <p>Often these improve. Sometimes they do not.</p>
                <SubHeading darkMode={darkMode}>More serious risks</SubHeading>
                <p>More serious risks, including pancreatitis or bowel complications, appear much less common, but they are not theoretical. That is why medical supervision matters—not as a formality, but as protection.</p>
                <p>Some medicines also carry warnings involving thyroid-related concerns in certain contexts. Those warnings should be discussed properly, not skimmed over.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="eligibility" heading="Eligibility is often stricter than people assume">
                <p>A common misunderstanding is that anyone can request these treatments and receive them. Usually not.</p>
                <p>
                  NICE and NHS pathways often involve BMI criteria, obesity-related conditions, previous attempts at lifestyle intervention, and ongoing review requirements. Some NHS pathways may stop prescribing if expected progress is not
                  achieved—often around 5 percent body weight loss thresholds. That can surprise people. But from a system perspective, it reflects treatment evaluation.
                </p>
                <p>Private prescribers may also screen carefully. Responsible ones should.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="cost-effectiveness" heading="Are they worth the cost?">
                <p>Possibly. Some economic analyses suggest semaglutide may be cost-effective compared with lifestyle intervention alone when longer-term health outcomes are considered.</p>
                <p>But cost effectiveness in a model is not always the same as affordability in real life. That difference matters. A treatment may make sense clinically and still be financially difficult. Both can be true.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="additional-faq" heading="Additional frequently asked questions">
                <div className="space-y-6">
                  <div>
                    <h3 className={`mb-3 text-lg font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Which weight loss treatment is most effective in the UK?</h3>
                    <p>Current evidence often points to Mounjaro as producing the greatest average weight loss, though effectiveness can depend on individual response, tolerability, and adherence.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-lg font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Can I lose 10kg in 2 months with Ozempic?</h3>
                    <p>Ozempic may support substantial loss for some people, though 10kg in 8 weeks may be ambitious for many and should not be assumed.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-lg font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>What is the 3-3-3 rule for weight loss?</h3>
                    <p>It is generally a habit framework, not a clinical obesity treatment method. People often use it to refer to simple routines around meals, movement, and reducing trigger foods.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-lg font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>How did Kelly Clarkson really lose her weight?</h3>
                    <p>Kelly Clarkson has attributed her weight loss to dietary change, walking, and physician-guided medical support. It appears likely multiple factors were involved.</p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="Frequently asked questions">
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Do I still need diet and exercise?</h3>
                    <p>Yes. Probably more than many advertisements imply. Medication may help regulate appetite, but it does not replace foundational habits.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>How fast will I lose weight?</h3>
                    <p>That varies. Some people respond quickly. Others lose steadily over longer periods. Rapid results should not be assumed.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Can I switch between treatments?</h3>
                    <p>Possibly, but only with clinical supervision.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Will NHS prescriptions continue indefinitely?</h3>
                    <p>Not necessarily. Progress reviews often determine continuation.</p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="final-thoughts" heading="Final thoughts">
                <p>Injectable obesity treatments may offer real support. They may also be oversold in some conversations. Both things can be true.</p>
                <p>Used carefully, with realistic expectations and proper medical oversight, they may help shift the odds in your favour. Used as a shortcut, they may disappoint.</p>
                <p>If I were weighing them up personally, I would probably ask:</p>
                <ul className="list-decimal space-y-2 pl-6">
                  <li>Can I tolerate the side effects?</li>
                  <li>Can I sustain the cost?</li>
                  <li>Can I use this to support habits, not outsource them?</li>
                </ul>
                <p>Those may be better questions than asking which treatment sounds strongest on paper.</p>
                <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Health Wise does not sell medicines. This page is general information and is not medical advice.</p>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  <span className="font-semibold text-slate-600 dark:text-slate-300">Suggested hashtags:</span> {SOCIAL_HASHTAGS}
                </p>
              </GuideSection>
            </article>

            <div className="mt-10">
              <GuideSharePanel
                url={shareUrl}
                title="Injectable Obesity Treatments UK: What Works and What Doesn't"
                description="Injectable obesity treatments in the UK: understand how Wegovy, Mounjaro and Saxenda work, NHS vs private access, costs, side effects and realistic expectations."
              />
            </div>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...ARTICLE_SCHEMA,
            '@graph': [ARTICLE_SCHEMA, FAQ_SCHEMA],
          }),
        }}
      />
    </div>
  );
}
