'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import BlogArticleHeroImage from '@/components/blog/BlogArticleHeroImage';
import { ArrowLeft, Moon, Sun, Calendar, Clock } from 'lucide-react';
import GuideTocSidebar from '@/components/guide/GuideTocSidebar';
import { GuideSharePanel } from '@/components/guide/GuideSharePanel';
import { GuideSection } from '@/components/guide/GuideLayout';
import { siteOrigin } from '@/lib/seo/site-origin';
import { TOP_BENEFITS_WEIGHT_LOSS_INJECTIONS_HERO } from './blog-assets';

const SHARE_PATH = '/blog/top-benefits-of-doctor-prescribed-weight-loss-injections-uk-for-you';
const HERO_SRC = TOP_BENEFITS_WEIGHT_LOSS_INJECTIONS_HERO;

const TOC = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'what-are-treatments', label: 'What these treatments are' },
  { id: 'how-they-help', label: 'How they may help' },
  { id: 'benefits', label: 'UK benefits' },
  { id: 'what-doctors-give', label: 'What your doctor can prescribe' },
  { id: 'which-is-most-effective', label: 'Which treatment is most effective' },
  { id: 'side-effects', label: 'Risks & side effects' },
  { id: 'after-starting', label: 'After starting' },
  { id: 'if-you-stop', label: 'If you stop' },
  { id: 'faq', label: 'FAQ' },
  { id: 'final-thoughts', label: 'Final thoughts' },
];

const SOCIAL_HASHTAGS = '#UKWeightLossInjections #DoctorPrescribedWeightLoss #GLP1UK #Wegovy #Mounjaro #Saxenda';

function SubHeading({ children, darkMode }: { children: React.ReactNode; darkMode: boolean }) {
  return <p className={`mt-6 font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{children}</p>;
}

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);
  const shareUrl = `${siteOrigin()}${SHARE_PATH}`;

  const ARTICLE_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top Benefits of Doctor Prescribed Weight Loss Treatments UK for You',
    description: 'A clear UK guide to the benefits of doctor prescribed weight loss treatments, when they may help, and what to expect from Wegovy, Mounjaro or Saxenda.',
    image: [HERO_SRC],
    author: { '@type': 'Organization', name: 'Health Wise' },
    publisher: { '@type': 'Organization', name: 'Health Wise' },
    datePublished: '2026-05-19',
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
        name: 'What are the benefits of weight loss treatments in the UK?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Benefits may include reduced appetite, better blood sugar regulation, more consistent support, and improved long-term weight maintenance for eligible patients.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which weight loss treatment is most effective?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mounjaro often shows the strongest average weight loss in trials, but Wegovy and Saxenda may still be the better fit for some patients depending on tolerability, cost, and access.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get these treatments through the NHS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NHS access is usually limited to people who meet BMI and health risk criteria and are referred into specialist weight management pathways. Private prescribing is more widely available but can be expensive.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will I gain weight back if I stop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Some people regain weight after stopping if the habits around diet, movement, and appetite control are not sustained. Planning maintenance and staying in touch with a clinician can help reduce that risk.',
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
          <h1 className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? 'text-white' : 'text-slate-900'}`}>Top Benefits of Doctor Prescribed Weight Loss Treatments UK for You</h1>
          <div className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              19 May 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              12 min read
            </span>
          </div>

          <BlogArticleHeroImage src={HERO_SRC} alt="Doctor prescribed weight loss treatment treatment in the UK, clinical support for obesity management" />
          <div id="guide-article-hero-end" aria-hidden className="pointer-events-none h-0 w-full overflow-hidden" />
        </header>

        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          {TOC.length > 0 && <GuideTocSidebar key={TOC.map((t) => t.id).join('-')} toc={TOC} />}

          <div className="min-w-0 max-w-3xl flex-1">
            <article className={`space-y-8 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              <GuideSection darkMode={darkMode} id="introduction" heading="Introduction">
                <p>Trying to lose weight can feel frustrating, especially when you have already done what people keep recommending: eat less, move more, track calories. For some people, those basics help. For others, progress stalls.</p>
                <p>
                  That gap is partly why doctor prescribed weight loss treatments have gained traction across the UK. Treatments such as Wegovy, Mounjaro and Saxenda are not cosmetic shortcuts. They are prescription medicines intended for
                  people with clinical need and medical supervision.
                </p>
                <p>They may make change more manageable, but they are not effortless. That distinction matters for anyone deciding whether to explore these options.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="what-are-treatments" heading="What are doctor prescribed weight loss treatments?">
                <p>
                  In simple terms, these are prescription medicines used to support obesity treatment under medical supervision. Most available UK options are GLP-1 or related incretin-based medicines that affect appetite, fullness and
                  blood sugar regulation.
                </p>
                <p>They are not designed as a quick fix. They are usually offered to people who meet BMI and health risk criteria and when conventional diet and lifestyle efforts have not delivered the desired progress.</p>
                <p>
                  If you want a wider view of how these treatments fit into UK weight loss care, see our guide on{' '}
                  <Link href="/blog/understanding-prescription-weight-loss-injections-uk" className="font-medium text-brand-primary underline">
                    understanding prescription weight loss treatments in the UK
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="how-they-help" heading="How these treatments may help">
                <p>The main improvement many people notice first is reduced appetite. They feel full sooner, portions shrink, and cravings tend to quiet.</p>
                <p>That effect can make it easier to follow a structured eating plan. For people who have struggled with persistent hunger, that alone can feel like a significant benefit.</p>
                <p>
                  There may also be broader metabolic effects, including improved insulin sensitivity and reduced blood sugar swings. That is why some patients in the UK are offered these medicines for both weight and diabetes-related
                  reasons.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="benefits" heading="What are the benefits of weight loss treatments in the UK?">
                <p>The most common benefits include:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Meaningful body weight reduction when combined with ongoing support</li>
                  <li>Reduced hunger, snacking and food preoccupation</li>
                  <li>More structured medical support from a prescriber or specialist team</li>
                  <li>Potential improvements in blood sugar regulation and cardiovascular risk factors</li>
                </ul>
                <p>For some people, the best benefit is less mental energy spent thinking about food. That mental relief may be powerful if it helps someone stay consistent with the basics.</p>
                <p>
                  Evidence is still evolving, but some research suggests GLP-1 medicines may have benefits beyond weight loss, especially for heart health in people with obesity and metabolic risk. This is one reason these treatments are
                  usually offered as part of a broader treatment plan.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="what-doctors-give" heading="What can my doctor give me for weight loss in the UK?">
                <p>
                  Depending on eligibility, a UK doctor may discuss options such as Wegovy, Mounjaro or Saxenda. Access often depends on BMI thresholds, weight-related health risks, and whether treatment is being pursued through NHS
                  specialist pathways or private prescribing.
                </p>
                <p>Some people assume they can simply request a GP prescription. Often it is not that simple. Referral criteria, local commissioning and specialist assessment may all matter.</p>
                <p>
                  For a practical timeline of how private prescribing can work in the UK, our article on{' '}
                  <Link href="/helpful-guides/mounjaro-prescription-timeline-uk" className="font-medium text-brand-primary underline">
                    Mounjaro prescription timeline in the UK
                  </Link>{' '}
                  may be helpful.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="which-is-most-effective" heading="Which weight loss treatment is most effective?">
                <p>Right now, Mounjaro is often considered the strongest performer for average weight reduction. Some studies suggest around 20 percent body weight reduction under structured treatment settings.</p>
                <p>That sounds impressive. And it is. But averages can mislead. Tolerability, access, cost and personal response matter too. For some people, Wegovy or Saxenda may still be the better fit.</p>
                <p>Effectiveness is not only about headline percentages. It is also about whether a treatment is sustainable, tolerable and available to you.</p>
                <p>
                  Compare the two main options in our{' '}
                  <Link href="/blog/mounjaro-vs-wegovy-key-differences-explained" className="font-medium text-brand-primary underline">
                    Mounjaro vs Wegovy comparison
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="side-effects" heading="Risks and side effects you should know">
                <p>These medicines can help. They can also cause side effects. Common issues may include:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Nausea</li>
                  <li>Constipation</li>
                  <li>Diarrhoea</li>
                  <li>Vomiting</li>
                  <li>Fatigue during dose changes</li>
                </ul>
                <p>These symptoms often improve with time and slower dose escalation, but sometimes they do not. That is why proper monitoring matters.</p>
                <p>More serious risks, though uncommon, may include pancreatitis and gallbladder complications. It is not a treatment to take casually.</p>
                <p>
                  For more detail on common GLP-1 tolerability issues, see our article on{' '}
                  <Link href="/blog/side-effects-of-wegovy-and-how-to-manage-them" className="font-medium text-brand-primary underline">
                    side effects of Wegovy and how to manage them
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="after-starting" heading="What happens after starting?">
                <p>
                  Starting treatments is one thing. Maintaining progress is another. People often do best when they pair treatment with practical habits like higher protein meals, regular walking, hydration, symptom tracking and routine
                  follow-up appointments.
                </p>
                <p>It is often the boring habits that do the heavy lifting, not the dramatic ones.</p>
                <p>The medicines may make progress more manageable, but they usually work best when the person is already building healthier routines alongside them.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="if-you-stop" heading="What happens if you stop?">
                <p>Stopping treatment may lead to weight regain, especially if underlying eating patterns have not shifted.</p>
                <p>That does not mean regain is guaranteed. It may mean maintenance needs planning and ongoing support. That is different from expecting the treatments to be a permanent shortcut.</p>
                <p>If you are considering stopping, ask your clinician about how to transition and whether a maintenance plan can help protect your progress.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="Frequently Asked Questions">
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>What are the benefits of weight loss treatments UK?</h3>
                    <p>Benefits may include greater weight loss than lifestyle changes alone, reduced appetite, improved blood sugar regulation, and possible reductions in obesity-related health risks.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>What is the 3-3-3 rule for weight loss?</h3>
                    <p>The 3-3-3 rule is usually described as 3 balanced meals, 30 minutes of movement, and reducing 3 high calorie trigger foods. It is a habit framework, not a formal clinical treatment method.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>What did Kelly Clarkson use to lose weight?</h3>
                    <p>Kelly Clarkson has spoken about dietary change, walking, managing health factors, and physician-guided medical support. Public figures usually combine several approaches rather than rely on one single trick.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>What can my doctor give me for weight loss in the UK?</h3>
                    <p>Depending on your eligibility, a doctor may discuss Wegovy, Mounjaro or Saxenda. Suitability depends on your medical history and prescribing criteria.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Who qualifies for doctor prescribed weight loss treatments?</h3>
                    <p>Usually people who meet BMI thresholds and have weight-related health risks, although criteria can vary by service and region.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Are these treatments safe for everyone?</h3>
                    <p>No. They are not suitable for everyone, which is why a clinical assessment and prescription are essential.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>How quickly will I lose weight?</h3>
                    <p>It depends. Some people notice changes within weeks. Others progress more gradually. Both can be normal.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Will I gain weight back if I stop?</h3>
                    <p>There may be a risk of regain, especially without long-term lifestyle support. Proper planning can help reduce that risk.</p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="final-thoughts" heading="Final thoughts">
                <p>Doctor prescribed weight loss treatments may be useful, but they are not magic. They are not effortless. For some people, they can provide the support needed to finally make progress feel sustainable.</p>
                <p>Before deciding, ask yourself:</p>
                <ul className="list-decimal space-y-2 pl-6">
                  <li>Can I commit to the habits around this?</li>
                  <li>Can I manage the side effects?</li>
                  <li>Can I sustain treatment long enough to matter?</li>
                </ul>
                <p>Those questions may tell you more than comparing percentage losses alone.</p>
                <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Health Wise does not sell medicines. This page is general information and is not medical advice.</p>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  <span className="font-semibold text-slate-600 dark:text-slate-300">Suggested hashtags:</span> {SOCIAL_HASHTAGS}
                </p>
              </GuideSection>
            </article>

            <div className="mt-10">
              <GuideSharePanel
                url={shareUrl}
                title="Top Benefits of Doctor Prescribed Weight Loss Treatments UK for You"
                description="A clear UK guide to the benefits of doctor prescribed weight loss treatments, when they may help, and what to expect from Wegovy, Mounjaro or Saxenda."
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
