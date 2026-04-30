'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import BlogArticleHeroImage from '@/components/blog/BlogArticleHeroImage';
import { ArrowLeft, Moon, Sun, Calendar, Clock } from 'lucide-react';
import GuideTocSidebar from '@/components/guide/GuideTocSidebar';
import { GuideSharePanel } from '@/components/guide/GuideSharePanel';
import { GuideSection, GuideTable } from '@/components/guide/GuideLayout';
import { siteOrigin } from '@/lib/seo/site-origin';

const SHARE_PATH = '/blog/mounjaro-weight-loss-before-and-after';
const HERO_SRC = '/blog/Your%20Ultimate%20Guide%20to%20Mounjaro%20Weight%20Loss%20Before%20and%20After.webp';
const HERO_ALT = 'Your Ultimate Guide to Mounjaro Weight Loss Before and After';

const TOC = [
  { id: 'meet-mounjaro', label: 'Meet Mounjaro for weight loss' },
  { id: 'how-works', label: 'Explore how Mounjaro works' },
  { id: 'typical-results', label: 'View typical before and after' },
  { id: 'factors', label: 'Consider factors shaping results' },
  { id: 'stories', label: 'See real-life success stories' },
  { id: 'dosing-safety', label: 'Use dosing tips for safety' },
  { id: 'maximise-plan', label: 'Maximise your Mounjaro plan' },
  { id: 'next-steps', label: 'Take your next steps' },
  { id: 'faq', label: 'Frequently Asked Questions' },
  { id: 'conclusion', label: 'Conclusion' },
];

/** Hashtags for social sharing; align with primary keyword clusters. */
const SOCIAL_HASHTAGS = '#MounjaroWeightLoss #MounjaroBeforeAndAfter #Tirzepatide #GLP1WeightLoss #WeightLossJourney #UKWeightLoss';

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const shareUrl = `${siteOrigin()}${SHARE_PATH}`;

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
            <button type="button" onClick={toggleDarkMode} className={`relative flex h-6 w-12 items-center rounded-full p-1 shadow-inner transition-colors ${darkMode ? 'bg-slate-700' : 'bg-slate-200'}`}>
              <div className={`h-4 w-4 rounded-full shadow transition-all ${darkMode ? 'translate-x-6 bg-slate-900' : 'translate-x-0 bg-white'}`} />
            </button>
            <Sun className={`h-4 w-4 ${darkMode ? 'text-yellow-400' : 'text-slate-400'}`} />
          </div>
        </div>

        <header className="mb-12">
          <h1 className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? 'text-white' : 'text-slate-900'}`}>Your Ultimate Guide to Mounjaro Weight Loss Before and After</h1>
          <div className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              17 Apr 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />9 min read
            </span>
          </div>

          <BlogArticleHeroImage src={HERO_SRC} alt={HERO_ALT} />
          <div id="guide-article-hero-end" aria-hidden className="pointer-events-none h-0 w-full overflow-hidden" />
        </header>

        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          {TOC.length > 0 && <GuideTocSidebar key={TOC.map((t) => t.id).join('-')} toc={TOC} />}

          <div className="min-w-0 max-w-3xl flex-1">
            <article className={`space-y-8 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              <p className="text-lg md:text-xl">
                Mounjaro has gained attention as a promising option for people who want to lose weight after trying countless diets with limited success. It is designed to help you manage your appetite more effectively, reduce your food
                cravings and gradually achieve a healthier body composition. In this ultimate guide to Mounjaro weight loss before and after, you will discover what the treatment involves, how it works, and the real world outcomes people
                have experienced. By understanding the data and practical steps, you can decide whether Mounjaro fits your weight loss goals and plan your next steps confidently. For more context, explore our resources on{' '}
                <Link href="/blog/side-effects-of-wegovy-and-how-to-manage-them" className="font-medium text-emerald-600 hover:underline">
                  managing Wegovy side effects
                </Link>
                .
              </p>

              <GuideSection darkMode={darkMode} id="meet-mounjaro" heading="Meet Mounjaro For Weight Loss">
                <p>
                  Mounjaro is a prescription medication that targets hormonal pathways associated with blood sugar regulation and hunger. If you have had little luck with other weight loss methods, you may find that Mounjaro offers fresh
                  hope by encouraging a lower appetite and more stable energy levels.
                </p>
                <p>
                  People often start Mounjaro as part of a broader health strategy, which includes balanced meals and consistent activity. This medication bolsters your efforts by helping you eat less without feeling deprived. You can learn
                  more about the overall approach in our{' '}
                  <Link href="/helpful-guides/mounjaro-weight-loss-injection-uk" className="font-medium text-brand-primary underline">
                    Mounjaro weight loss
                  </Link>{' '}
                  guide, where you will also find insights into how others manage their diet and fitness routines alongside medication.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="how-works" heading="Explore How Mounjaro Works">
                <p>
                  By mimicking certain hormones that regulate blood glucose and help you feel satiated, Mounjaro supports healthy metabolic processes in your body. It also reduces rapid spikes in blood sugar, which can in turn lower
                  cravings for sugary snacks. These dual effects often make you feel more in control of your eating habits compared to standard diet plans alone.
                </p>
                <p>
                  For a deeper look at the science behind it, visit{' '}
                  <Link href="/blog/does-mounjaro-really-work-for-weight-loss-find-out-here" className="font-medium text-brand-primary underline">
                    how does Mounjaro work for weight loss
                  </Link>
                  . Understanding these mechanisms can motivate you to stick with your injection schedule and maintain a balanced diet. When medication and mindful living align, your weight loss efforts become much more manageable.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="typical-results" heading="View Typical Before And After">
                <p>
                  One of the first questions you probably have about Mounjaro is how much weight you can realistically lose. According to research, patients typically lose around 15 kg (33 lbs) during the course of treatment while also
                  dropping approximately 4 inches off their waist circumference, though timeline and results vary by individual (ZAVA).
                </p>
                <p>
                  Many people notice progress within the first few months. Clinical data shows that, on average, people lose around 4% of initial body weight in the first month, with consistent improvements continuing over time
                  (Prescription Doctor). If you augment each day with nutrient dense meals and physical activities you enjoy, the visual and numerical changes can boost your commitment to the treatment.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="factors" heading="Consider Factors Shaping Results">
                <p>
                  While the overall data is encouraging, it is important to keep in mind that your results will not merely rest on the medication alone. You will benefit the most from Mounjaro when you pair it with strong everyday habits.
                  Several elements play a part in how quickly or steadily you see improvements:
                </p>
                <div className={`my-6 overflow-hidden rounded-xl border ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                  <GuideTable
                    headers={['Factor', 'Why it matters']}
                    rows={[
                      {
                        cells: ['Age', 'Metabolism and hormones shift over time, which can change the pace of loss.'],
                      },
                      {
                        cells: ['Diet adherence', 'Consistent, balanced eating supports appetite control and energy.'],
                      },
                      {
                        cells: ['Exercise frequency', 'Activity preserves fitness and can support waist and weight trends.'],
                      },
                      {
                        cells: ['Proper medication schedule', 'Weekly treatments on schedule help maintain steady drug levels.'],
                      },
                      {
                        cells: ['Underlying health conditions', 'Conditions such as PCOS or type 2 diabetes can influence response.'],
                      },
                    ]}
                  />
                </div>
                <p>
                  Shifts in hormones as you get older or conditions such as PCOS or type 2 diabetes can all subtly influence the pace of your weight loss. In many cases, working with your doctor to coordinate medication timing and track
                  side effects is as vital as perfecting your meal plan. Want to learn more about dosing details that can refine your results? Explore{' '}
                  <Link href="/blog/mounjaro-dosage-for-weight-loss-facts-you-can-trust" className="font-medium text-brand-primary underline">
                    Mounjaro dosage for weight loss
                  </Link>{' '}
                  to see recommended practices and starting points. For more context, explore our resources on{' '}
                  <Link href="/wegovy-price-comparison" className="font-medium text-emerald-600 hover:underline">
                    Wegovy price comparison
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="stories" heading="See Real-Life Success Stories">
                <p>
                  Part of the growing interest in Mounjaro comes from firsthand testimonials of people who found renewed motivation. For instance, Heike reported losing 13 kg over four months. She combined Mounjaro treatments with small,
                  healthy adjustments to her routine and regained the energy to manage daily tasks without exhaustion (ZAVA).
                </p>
                <p>
                  Other remarkable stories include individuals who have transformed their BMI from a severely obese range to near normal levels. In one case, a user reported shedding over 200 pounds in under two years, attributing much of
                  that success to consistent treatments and a patient approach to diet (Prescription Doctor). These accounts remind you that steady effort, rather than dramatic overnight changes, is truly key. If you want more insight into
                  potential outcomes and timelines, you can check{' '}
                  <Link href="/what-is-mounjaro#weight-loss-results" className="font-medium text-brand-primary underline">
                    Mounjaro weight loss results
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="dosing-safety" heading="Use Dosing Tips For Safety">
                <p>
                  To minimise side effects and optimise your progress, Mounjaro typically starts at a 2.5 mg dose for four weeks. This introductory period allows your body to adapt, reducing the likelihood of severe digestion related issues
                  like nausea or constipation (ZAVA). Over time, your healthcare provider may adjust the dose to enhance appetite suppression or address specific concerns.
                </p>
                <p>
                  You will self administer the treatment using carefully measured treatments. For a practical overview of what that routine looks like, see{' '}
                  <Link href="/helpful-guides/mounjaro-weight-loss-injection-uk" className="font-medium text-brand-primary underline">
                    Mounjaro weight loss treatments
                  </Link>
                  . If you are located in the UK and curious about how to obtain your prescription, explore{' '}
                  <Link href="/mounjaro-price-comparison" className="font-medium text-brand-primary underline">
                    UK Mounjaro providers and pricing
                  </Link>{' '}
                  to understand availability and the steps needed to formalise your care with a regulated service.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="maximise-plan" heading="Maximise Your Mounjaro Plan">
                <p>
                  Long term success with Mounjaro hinges on forming strong dietary and lifestyle habits. Consider prioritising protein rich meals, vegetables, and moderate exercise like brisk walking or low impact workouts. These daily
                  habits foster consistent weight loss and guard against stalls. Tracking progress in a journal or mobile app can also help you identify positive patterns and troubleshoot any plateaus.
                </p>
                <p>
                  Staying in close communication with a healthcare professional is equally important. They can monitor how you respond to Mounjaro, recommend slight dosage changes and make sure potential side effects remain manageable. By
                  pairing their guidance with consistent self care, you gain the best chance of achieving and sustaining your weight loss goals over the long haul.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="next-steps" heading="Take Your Next Steps">
                <p>
                  Committing to Mounjaro is easier when you understand the before and after possibilities. On average, many people experience a notable drop in weight and a trimmer waistline after a few months. That is encouraging news,
                  especially if you have struggled with weight management for years. Staying motivated, following a realistic eating plan, and keeping up regular treatments all work together to support you on this journey.
                </p>
                <p>
                  Remember that your personal milestone might not match someone else’s speed and that is entirely normal. As you begin, focus on small wins such as feeling lighter on your feet or sticking to your meal schedule for a full
                  week. If you are interested in a more detailed breakdown of what you might achieve, take a look at{' '}
                  <Link href="/what-is-mounjaro#weight-loss-results" className="font-medium text-brand-primary underline">
                    Mounjaro weight loss results
                  </Link>
                  . With the right support, consistent effort, and a clear plan, you can set yourself up for a healthier future. For more context, explore our resources on{' '}
                  <Link href="/mounjaro-price-comparison" className="font-medium text-emerald-600 hover:underline">
                    Mounjaro price comparison
                  </Link>
                  .
                </p>
              </GuideSection>

              <section id="faq" className={`mt-16 border-t pt-10 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                <h2 className={`mb-8 text-3xl font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Frequently Asked Questions</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>1. What kind of Mounjaro weight loss before and after results are typical in studies?</h3>
                    <p>
                      Trial and real world summaries often report meaningful average weight change over months of treatment, but individual results vary widely. Waist circumference and other measures can improve alongside scale weight. Your
                      clinician can interpret what is realistic for you.
                    </p>
                  </div>

                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>2. How soon might I notice changes after starting Mounjaro?</h3>
                    <p>
                      Some people notice appetite changes within the first few weeks, while scale and waist changes usually build over months. Early progress is not guaranteed and should be tracked with your prescriber, especially around
                      dose changes.
                    </p>
                  </div>

                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>3. Will my before and after results match someone else’s?</h3>
                    <p>No. Age, adherence, activity, dose schedule, and health conditions all influence pace and total loss. Comparisons can be motivating but are not predictions.</p>
                  </div>

                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>4. What factors most influence my personal Mounjaro outcomes?</h3>
                    <p>Diet quality, exercise, sleep, stress, medication timing, dose titration, and conditions such as PCOS or type 2 diabetes can all matter. Sustainable habits usually amplify medication supported loss.</p>
                  </div>

                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>5. Is Mounjaro something I can start without a prescription in the UK?</h3>
                    <p>Mounjaro is a prescription medicine in the UK. You should only obtain it through a qualified prescriber and a regulated supply route; avoid unverified sellers.</p>
                  </div>

                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>6. Where can I read more about dosing and treatments?</h3>
                    <p>
                      Use clinician led resources on titration, side effect monitoring, and injection technique. Health Wise publishes guides on{' '}
                      <Link href="/blog/mounjaro-dosage-for-weight-loss-facts-you-can-trust" className="font-medium text-brand-primary underline">
                        Mounjaro dosage
                      </Link>{' '}
                      and{' '}
                      <Link href="/helpful-guides/mounjaro-weight-loss-injection-uk" className="font-medium text-brand-primary underline">
                        treatments
                      </Link>{' '}
                      for general education always follow your own prescriber’s instructions.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  Mounjaro weight loss before and after stories whether from trials, clinics, or individual journeys highlight what is possible when medication, nutrition, and follow up care work together. Average figures can guide your
                  expectations, but your path will be personal. Use reputable information, stay in touch with your healthcare team, and treat sustainable habits as the foundation that makes results last.
                </p>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  <span className="font-semibold text-slate-600 dark:text-slate-300">Suggested hashtags:</span> {SOCIAL_HASHTAGS}
                  For more context, explore our resources on{' '}
                  <Link href="/blog/mounjaro-weight-loss-benefits-backed-by-science" className="font-medium text-emerald-600 hover:underline">
                    Mounjaro weight loss benefits
                  </Link>
                  .
                </p>
                <div className={`mt-8 border-t pt-6 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                  <h4 className={`mb-4 text-sm font-bold uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>References</h4>
                  <ul className="space-y-2 text-sm opacity-80">
                    <li>[1] ZAVA patient information and outcomes cited in public summaries.</li>
                    <li>[2] Prescription Doctor clinical and patient reported context on Mounjaro weight loss.</li>
                  </ul>
                </div>
              </GuideSection>
            </article>

            <div className="mt-10">
              <GuideSharePanel
                url={shareUrl}
                title="Your Ultimate Guide to Mounjaro Weight Loss Before and After"
                description="Explore Mounjaro weight loss before and after: typical results, dosing context, and what shapes your outcomes."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
