'use client';

import React, { useState } from 'react';
import BlogArticleHeroImage from '@/components/blog/BlogArticleHeroImage';
import { ArrowLeft, Moon, Sun } from 'lucide-react';
import { GuideSection } from '@/components/guide/GuideLayout';
import { GuideSharePanel } from '@/components/guide/GuideSharePanel';
import { siteOrigin } from '@/lib/seo/site-origin';

const SHARE_PATH = '/blog/how-licensed-weight-loss-injections-uk-can-boost-your-journey';
const HERO_SRC = '/blog/How%20Licensed%20Weight%20Loss%20Injections%20UK%20Can%20Boost%20Your%20Journey.webp';
const HERO_ALT = 'Licensed weight loss injections in the UK';
const SOCIAL_HASHTAGS = '#LicensedWeightLossInjections #UKWeightLoss #Mounjaro #Wegovy #PrescriptionWeightLoss';

const TOC = [
  { id: 'understanding-licensed-injections', label: 'Understanding Licensed Weight Loss Injections' },
  { id: 'how-they-work', label: 'How These Injections Work' },
  { id: 'mounjaro-vs-wegovy', label: 'Exploring Mounjaro and Wegovy' },
  { id: 'access-pathways', label: 'NHS and Private Prescriptions' },
  { id: 'benefits-and-risks', label: 'Benefits and Potential Side Effects' },
  { id: 'lifestyle', label: 'Pairing Injections With Lifestyle Change' },
  { id: 'maintenance', label: 'Maintaining Progress' },
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
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">How Licensed Weight Loss Injections UK Can Boost Your Journey</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Discover how MHRA-approved, prescription weight loss injections can support appetite control, clinical oversight and sustainable progress in the UK.</p>
              <div className="mt-8">
                <BlogArticleHeroImage src={HERO_SRC} alt={HERO_ALT} />
              </div>
            </div>

            <div className="space-y-10">
              <GuideSection darkMode={darkMode} id="understanding-licensed-injections" heading="Understanding Licensed Weight Loss Injections">
                <p className="leading-8 text-slate-600">
                  If you have found yourself struggling to manage weight through diet changes, gym memberships, or another round of “starting fresh on Monday,” licensed weight loss injections may seem worth exploring.
                </p>
                <p className="mt-4 leading-8 text-slate-600">For some people, they probably are. These prescription treatments can help regulate appetite, reduce persistent hunger, and make portion control feel less difficult.</p>
                <p className="mt-4 leading-8 text-slate-600">That may sound modest, but for someone dealing with constant cravings, that can be meaningful. Still, it helps to keep expectations grounded. These medicines are not magic.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="how-they-work" heading="How These Injections Work">
                <p className="leading-8 text-slate-600">Most licensed weight loss injections work by affecting appetite signalling pathways. Wegovy acts through GLP-1 receptors. Mounjaro acts on GLP-1 and GIP pathways.</p>
                <p className="mt-4 leading-8 text-slate-600">
                  That difference may matter. Some researchers believe dual pathway activity may partly explain why tirzepatide sometimes appears associated with greater average weight reduction.
                </p>
                <p className="mt-4 leading-8 text-slate-600">These medicines also slow gastric emptying, which can increase satiety and reduce frequent hunger. That may be one reason some people describe less “food noise.”</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="mounjaro-vs-wegovy" heading="Exploring Mounjaro and Wegovy">
                <p className="leading-8 text-slate-600">
                  Mounjaro has attracted considerable attention. Some studies suggest average weight reductions near 20 percent over extended treatment periods. Impressive. But again, averages. Not guarantees.
                </p>
                <p className="mt-4 leading-8 text-slate-600">
                  Wegovy remains one of the most recognised obesity medications in the UK. Reported average weight reductions around 14 percent have made it a major reference point in treatment discussions.
                </p>
                <p className="mt-4 leading-8 text-slate-600">For some people, its longer prescribing history may feel reassuring. That familiarity can matter, especially when deciding between options.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="access-pathways" heading="NHS and Private Prescriptions">
                <p className="leading-8 text-slate-600">This is often where interest runs into logistics. NHS access may be affordable, but limited. Eligibility often depends on BMI, health risks, and specialist referral pathways.</p>
                <p className="mt-4 leading-8 text-slate-600">
                  Private routes offer faster access, though usually at a much higher cost. Monthly treatment may run into hundreds of pounds depending on dose and provider. Can you sustain the cost if treatment works and you need longer
                  use? Worth asking.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="benefits-and-risks" heading="Benefits and Potential Side Effects">
                <p className="leading-8 text-slate-600">
                  There may be several benefits beyond weight reduction alone, including lower appetite, reduced cravings, improved blood sugar control, possible blood pressure improvements, and potential metabolic advantages.
                </p>
                <p className="mt-4 leading-8 text-slate-600">
                  On the risk side, digestive side effects are common. Nausea. Constipation. Diarrhoea. Vomiting. Often temporary. Not always. More serious risks like pancreatitis or gallbladder complications appear uncommon but should not
                  be ignored.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="lifestyle" heading="Pairing Injections With Lifestyle Change">
                <p className="leading-8 text-slate-600">This part may be less glamorous, but arguably matters more. Medication can help regulate appetite. It does not build habits for you. That part still belongs to you.</p>
                <p className="mt-4 leading-8 text-slate-600">
                  A balanced reduced calorie diet still matters. Movement still matters. Sleep likely matters more than many people realise. Sometimes small changes carry more weight than dramatic ones.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="maintenance" heading="Maintaining Progress">
                <p className="leading-8 text-slate-600">Losing weight is one phase. Keeping it off may be harder. Evidence suggests weight regain can occur after stopping treatment, particularly if behavioural patterns have not shifted.</p>
                <p className="mt-4 leading-8 text-slate-600">That is not failure. That is biology meeting behaviour. Some people may need longer treatment. Others may transition off successfully with strong support. It depends.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="Additional FAQs">
                <p className="leading-8 text-slate-600">
                  These licensed medicines may offer meaningful support, but they are not right for everyone. A clinician should assess eligibility, side effects, and whether the treatment is a responsible match for your health profile.
                </p>
                <p className="mt-4 leading-8 text-slate-600">
                  If I were weighing them up personally, I would probably ask: Can I tolerate the side effects? Can I sustain the cost? Can I use this to support habits rather than outsource them?
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
                  title="How Licensed Weight Loss Injections UK Can Boost Your Journey"
                  description="Learn how licensed weight loss injections in the UK can support appetite control, clinical oversight, and longer-term progress with regulated treatment pathways."
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
