'use client';

import React, { useState } from 'react';
import BlogArticleHeroImage from '@/components/blog/BlogArticleHeroImage';
import { ArrowLeft, Moon, Sun } from 'lucide-react';
import { GuideSection } from '@/components/guide/GuideLayout';
import { GuideSharePanel } from '@/components/guide/GuideSharePanel';
import { siteOrigin } from '@/lib/seo/site-origin';

const SHARE_PATH = '/blog/how-to-compare-uk-weight-loss-pens-and-find-the-best';
const HERO_SRC = '/blog/How%20to%20Compare%20UK%20Weight%20Loss%20Pens%20and%20Find%20the%20Best.webp';
const HERO_ALT = 'Compare UK weight loss pens and find the best option';
const SOCIAL_HASHTAGS = '#WeightLossPensUK #CompareWeightLossPens #Mounjaro #Wegovy #Saxenda';

const TOC = [
  { id: 'why-pens', label: 'Why Weight Loss Pens Matter' },
  { id: 'how-they-work', label: 'How These Pens Work' },
  { id: 'compare-options', label: 'Compare the Main Options' },
  { id: 'what-to-compare', label: 'What Should You Compare?' },
  { id: 'safety', label: 'Safety and Legality' },
  { id: 'costs', label: 'Dosing and Pricing' },
  { id: 'tips', label: 'Practical Tips for Better Results' },
  { id: 'faq', label: 'Additional FAQs' },
];

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const shareUrl = `${siteOrigin()}${SHARE_PATH}`;

  return (
    <div className={`w-full font-sans transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-300' : 'bg-white text-slate-800'}`}>
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <a href="/blog" className={`flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-75 ${darkMode ? 'text-slate-300' : 'text-slate-900'}`}>
            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
              <ArrowLeft className="h-4 w-4" />
            </div>
            Back to News
          </a>

          <div className="flex items-center gap-3">
            <Moon className={`h-4 w-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`} />
            <button type="button" onClick={toggleDarkMode} className={`relative flex h-6 w-12 items-center rounded-full p-1 shadow-inner transition-colors ${darkMode ? 'bg-slate-700' : 'bg-slate-200'}`}>
              <div className={`h-4 w-4 rounded-full shadow transition-all ${darkMode ? 'translate-x-6 bg-slate-900' : 'translate-x-0 bg-white'}`} />
            </button>
            <Sun className={`h-4 w-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`} />
          </div>
        </div>

        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">
          <main>
            <div className="mb-10 rounded-3xl border border-slate-200/90 bg-white/80 p-6 shadow-sm shadow-slate-900/5 ring-1 ring-slate-900/5 backdrop-blur-lg sm:p-8">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">How to Compare UK Weight Loss Pens and Find the Best</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Weight loss pens are more common in the UK than ever. Learn how to compare the main options and choose the one that fits your goals, tolerance and budget.</p>
              <div className="mt-8">
                <BlogArticleHeroImage src={HERO_SRC} alt={HERO_ALT} />
              </div>
            </div>

            <div className="space-y-10">
              <GuideSection darkMode={darkMode} id="why-pens" heading="Why Weight Loss Pens Matter">
                <p className="leading-8 text-slate-600">
                  Weight loss pens have become much more mainstream in the UK. A few years ago, many people had never heard of them. Now they come up in GP appointments, news stories, and conversations with friends who have tried everything
                  from calorie counting to meal replacements.
                </p>
                <p className="mt-4 leading-8 text-slate-600">That shift says something. People are looking for support beyond traditional advice. Still, not all pens work the same, and not every person responds the same way.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="how-they-work" heading="How These Pens Work">
                <p className="leading-8 text-slate-600">
                  Most weight loss pens work through incretin hormones, particularly GLP-1, and in some cases GIP as well. In practice, this often means feeling full faster, staying full longer, and thinking about food less often.
                </p>
                <p className="mt-4 leading-8 text-slate-600">
                  These medicines also tend to slow gastric emptying, which may help reduce appetite but may also explain common side effects like nausea. That is often part of the trade-off, not a flaw.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="compare-options" heading="Compare the Main Options">
                <p className="leading-8 text-slate-600">
                  Three pens dominate most UK comparisons. Saxenda is the older daily injection option. Some people like the predictability. Others find it inconvenient. Wegovy is weekly and has become a major reference point.
                </p>
                <p className="mt-4 leading-8 text-slate-600">
                  Mounjaro is often discussed as the most potent option currently available. Some evidence suggests average reductions up to 22.5 percent in some settings, which has driven both interest and high expectations.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="what-to-compare" heading="What Should You Compare?">
                <p className="leading-8 text-slate-600">
                  People often compare only weight loss percentages. That is too narrow. You should also compare dosing frequency, side effect tolerance, monthly cost, NHS availability, appetite control, and long-term sustainability.
                </p>
                <p className="mt-4 leading-8 text-slate-600">Sometimes the “best” pen is simply the one you can stay on consistently. That may sound obvious. It often gets overlooked.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="safety" heading="Safety and Legality Matter">
                <p className="leading-8 text-slate-600">Do not buy these from social media sellers. Do not buy them from beauty salons. Do not trust a cheap pen without proper prescribing. The MHRA warnings exist for a reason.</p>
                <p className="mt-4 leading-8 text-slate-600">Use regulated pharmacies, licensed prescribers, and medical supervision. That is the safer path.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="costs" heading="Dosing and Pricing">
                <p className="leading-8 text-slate-600">
                  Saxenda may sometimes appear cheaper upfront, though daily dosing can change the maths. Wegovy often sits in the middle range. Mounjaro may be most expensive, particularly at higher doses.
                </p>
                <p className="mt-4 leading-8 text-slate-600">
                  Which raises a question worth asking early: if treatment works well, can you afford to continue it? Continuity matters. Stopping because of cost may affect results just as much as stopping because of side effects.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="tips" heading="Practical Tips for Better Results">
                <p className="leading-8 text-slate-600">A pen is not a full plan. What may help: prioritise protein, stay hydrated, eat slowly, track symptoms, keep follow up appointments, and walk after meals if you can.</p>
                <p className="mt-4 leading-8 text-slate-600">Symptom tracking alone is underrated. People often notice appetite changes but ignore patterns tied to nausea, energy, or tolerance. A notes app can help.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="Additional FAQs">
                <p className="leading-8 text-slate-600">
                  Based on current evidence, many clinicians would point to Mounjaro as among the most effective weight loss pens available. But “effective” depends on what matters most to you: total loss, tolerability, or long-term
                  maintenance.
                </p>
                <p className="mt-4 leading-8 text-slate-600">
                  If I were choosing personally, I would ask: Can I tolerate this? Can I afford this long term? Can I realistically stay consistent with this? Those questions often matter more than chasing the highest percentage in a
                  headline.
                </p>
              </GuideSection>
            </div>
          </main>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200/90 bg-white/80 p-6 shadow-sm shadow-slate-900/5 ring-1 ring-slate-900/5 backdrop-blur-lg">
              <h2 className="text-lg font-semibold text-slate-900">Share this article</h2>
              <p className="mt-2 text-sm text-slate-600">Use the share tools below and include the key hashtags for reach.</p>
              <div className="mt-4">
                <GuideSharePanel
                  url={shareUrl}
                  title="How to Compare UK Weight Loss Pens and Find the Best"
                  description="Learn how to compare UK weight loss pens, including Saxenda, Wegovy and Mounjaro, to find the best option for your goals, tolerance and budget."
                />
              </div>
              <p className="mt-4 text-sm text-slate-500">Tags: {SOCIAL_HASHTAGS}</p>
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-white/80 p-6 shadow-sm shadow-slate-900/5 ring-1 ring-slate-900/5 backdrop-blur-lg">
              <h2 className="text-lg font-semibold text-slate-900">Jump to section</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {TOC.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-slate-700 underline-offset-2 hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
