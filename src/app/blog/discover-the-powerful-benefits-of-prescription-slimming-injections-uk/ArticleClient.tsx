'use client';

import React, { useState } from 'react';
import BlogArticleHeroImage from '@/components/blog/BlogArticleHeroImage';
import { ArrowLeft, Moon, Sun } from 'lucide-react';
import { GuideSection } from '@/components/guide/GuideLayout';
import { GuideSharePanel } from '@/components/guide/GuideSharePanel';
import { siteOrigin } from '@/lib/seo/site-origin';

const SHARE_PATH = '/blog/discover-the-powerful-benefits-of-prescription-slimming-injections-uk';
const HERO_SRC = '/blog/Discover%20the%20Powerful%20Benefits%20of%20Prescription%20Slimming%20Injections%20UK.webp';
const HERO_ALT = 'Prescription slimming treatments in the UK';
const SOCIAL_HASHTAGS = '#SlimmingInjectionsUK #PrescriptionWeightLoss #Mounjaro #Wegovy #Saxenda';

const TOC = [
  { id: 'intro', label: 'Why Prescription Slimming Treatments Matter' },
  { id: 'how-they-work', label: 'How They Work in Your Body' },
  { id: 'uk-options', label: 'What Are Your Options in the UK' },
  { id: 'eligibility', label: 'Are You Eligible?' },
  { id: 'benefits-drawbacks', label: 'Potential Benefits and Drawbacks' },
  { id: 'provider', label: 'Choosing a Reputable Provider' },
  { id: 'cost', label: 'NHS vs Private Costs' },
  { id: 'faq', label: 'Frequently Asked Questions' },
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
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Discover the Powerful Benefits of Prescription Slimming Treatments UK</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">If you have been wrestling with weight for years, not weeks, prescription slimming treatments may feel worth looking into for real support.</p>
              <div className="mt-8">
                <BlogArticleHeroImage src={HERO_SRC} alt={HERO_ALT} />
              </div>
            </div>

            <div className="space-y-10">
              <GuideSection darkMode={darkMode} id="intro" heading="Why Prescription Slimming Treatments Matter">
                <p className="leading-8 text-slate-600">
                  People often focus on kilograms lost. But sometimes the first noticeable change is quieter — fewer cravings in the evening, smaller portions without effort, and less constant negotiation with hunger.
                </p>
                <p className="mt-4 leading-8 text-slate-600">
                  In the UK, prescription slimming treatments generally refer to regulated medicines such as Wegovy, Mounjaro, and Saxenda. These are not over-the-counter products. They require prescribing oversight.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="how-they-work" heading="How They Work in Your Body">
                <p className="leading-8 text-slate-600">
                  Most prescription slimming treatments act through hormone pathways linked to appetite. Wegovy and Saxenda work through GLP-1 receptor activity. Mounjaro acts on GLP-1 and GIP pathways.
                </p>
                <p className="mt-4 leading-8 text-slate-600">
                  These medicines also tend to slow gastric emptying, which may help people stay full longer after eating. That is often why cravings change, not because willpower suddenly improves.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="uk-options" heading="What Are Your Options in the UK?">
                <p className="leading-8 text-slate-600">
                  Saxenda is taken daily. Some people dislike daily treatments. Others prefer the routine. It depends. Wegovy is taken weekly and has become a major reference point for obesity treatment.
                </p>
                <p className="mt-4 leading-8 text-slate-600">
                  Mounjaro has generated attention because of its dual-action mechanism. Some clinicians see it as potentially the strongest injectable option currently available, while others note that long-term comparisons are still
                  developing.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="eligibility" heading="Are You Eligible?">
                <p className="leading-8 text-slate-600">
                  Not everyone can simply request these medicines and receive them. Eligibility usually involves BMI thresholds, weight-related health conditions, previous supervised weight loss attempts, clinical review, and sometimes NHS
                  pathway requirements.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="benefits-drawbacks" heading="Potential Benefits and Drawbacks">
                <p className="leading-8 text-slate-600">
                  Potential upsides may include reduced appetite, improved portion control, better blood sugar markers, and possible reductions in obesity-related risk. Some people also describe reduced food obsession.
                </p>
                <p className="mt-4 leading-8 text-slate-600">
                  On the downside, side effects are not rare. Nausea. Constipation. Diarrhoea. Vomiting. Sometimes fatigue. Often temporary. Sometimes enough to stop treatment. That possibility deserves honest discussion.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="provider" heading="Choosing a Reputable Provider">
                <p className="leading-8 text-slate-600">
                  Please do not treat social media sellers as healthcare. Use regulated prescribers, licensed pharmacies, and providers willing to monitor you. A cheap shortcut with an unverified pen is not a bargain.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="cost" heading="NHS vs Private Costs">
                <p className="leading-8 text-slate-600">
                  NHS access may be far cheaper but restricted. Private prescriptions may offer speed, but costs can easily reach thousands annually. If treatment works well, can you afford to continue it? That matters more than people
                  think.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="Frequently Asked Questions">
                <p className="leading-8 text-slate-600">
                  Prescription slimming treatments are not over the counter. They require a prescription and clinical supervision. Serious complications appear uncommon, but they can occur. That is why monitoring matters.
                </p>
                <p className="mt-4 leading-8 text-slate-600">If I were weighing them up personally, I would probably ask: Can I tolerate the side effects? Can I sustain the cost? Can I use this to build habits, not outsource them?</p>
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
                  title="Discover the Powerful Benefits of Prescription Slimming Treatments UK"
                  description="Discover the powerful benefits of prescription slimming treatments in the UK, including how Wegovy, Mounjaro and Saxenda support appetite, blood sugar and long-term progress."
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
