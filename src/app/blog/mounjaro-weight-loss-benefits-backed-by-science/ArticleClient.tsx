'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import BlogArticleHeroImage from '@/components/blog/BlogArticleHeroImage';
import { ArrowLeft, Moon, Sun, Calendar, Clock } from 'lucide-react';
import GuideTocSidebar from '@/components/guide/GuideTocSidebar';
import { GuideSharePanel } from '@/components/guide/GuideSharePanel';
import { GuideSection } from '@/components/guide/GuideLayout';
import { siteOrigin } from '@/lib/seo/site-origin';

const TOC = [
  { id: 'understanding', label: 'Understanding Mounjaro weight loss' },
  { id: 'how-it-works', label: 'How Mounjaro works' },
  { id: 'clinical-trials', label: 'Key findings from clinical trials' },
  { id: 'side-effects', label: 'Potential side effects' },
  { id: 'weight-regain', label: 'The challenge of weight regain' },
  { id: 'maintaining', label: 'Maintaining your results' },
  { id: 'dosage', label: 'Finding the right dosage' },
  { id: 'real-life', label: 'Real-life experiences' },
  { id: 'stopping', label: 'Research on stopping Mounjaro' },
  { id: 'future-health', label: 'Future health implications' },
  { id: 'support', label: 'Supporting long-term results' },
  { id: 'informed-choice', label: 'Making an informed choice' },
  { id: 'local-availability', label: 'Finding support in your local area' },
  { id: 'faq', label: 'Frequently Asked Questions' },
  { id: 'conclusion', label: 'Conclusion' },
];

const HERO_IMAGE = '/blog/Mounjaro%20Weight%20Loss%20Benefits%20Backed%20by%20Science.webp';
const INLINE_BENEFITS_IMG_WOMAN = '/blog/Woman.webp';
const INLINE_BENEFITS_IMG_EATING = '/blog/Eating.webp';

function TableStoppingResearch({ darkMode }: { darkMode: boolean }) {
  const cell = darkMode ? 'border-slate-700 text-slate-300' : 'border-slate-200 text-slate-700';
  const head = darkMode ? 'bg-slate-900 text-slate-200' : 'bg-slate-50 text-slate-900';
  const wrap = darkMode ? 'border-slate-700' : 'border-slate-200/80';
  return (
    <div className={`my-6 w-full min-w-0 max-w-full overflow-x-auto overscroll-x-contain rounded-xl border [-webkit-overflow-scrolling:touch] ${wrap}`}>
      <table className="w-full min-w-[640px] border-collapse text-left text-xs sm:text-sm">
        <thead>
          <tr className={head}>
            <th className={`border-b px-3 py-2 font-semibold ${cell}`}>Extent of weight regain</th>
            <th className={`border-b px-3 py-2 font-semibold ${cell}`}>Avg. waist increase</th>
            <th className={`border-b px-3 py-2 font-semibold ${cell}`}>Systolic BP (mmHg)</th>
            <th className={`border-b px-3 py-2 font-semibold ${cell}`}>Non-HDL cholesterol (%)</th>
            <th className={`border-b px-3 py-2 font-semibold ${cell}`}>HbA1c (%)</th>
            <th className={`border-b px-3 py-2 font-semibold ${cell}`}>Fasting insulin (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`border-b px-3 py-2 ${cell}`}>50% to &lt;75% of weight lost</td>
            <td className={`border-b px-3 py-2 ${cell}`}>10.1 cm</td>
            <td className={`border-b px-3 py-2 ${cell}`}>9.6</td>
            <td className={`border-b px-3 py-2 ${cell}`}>8.4</td>
            <td className={`border-b px-3 py-2 ${cell}`}>0.27</td>
            <td className={`border-b px-3 py-2 ${cell}`}>46.2</td>
          </tr>
          <tr>
            <td className={`px-3 py-2 ${cell}`}>75% or more of weight lost</td>
            <td className={`px-3 py-2 ${cell}`}>14.7 cm</td>
            <td className={`px-3 py-2 ${cell}`}>10.4</td>
            <td className={`px-3 py-2 ${cell}`}>10.8</td>
            <td className={`px-3 py-2 ${cell}`}>0.35</td>
            <td className={`px-3 py-2 ${cell}`}>26.3</td>
          </tr>
        </tbody>
      </table>
      <p className={`border-t px-3 py-2 text-xs ${darkMode ? 'border-slate-700 text-slate-500' : 'border-slate-200 text-slate-500'}`}>
        Summary figures reported in coverage of tirzepatide discontinuation studies (see <em>Pharmaceutical Journal</em>). For more context, explore our resources on{' '}
        <Link href="/wegovy-price-comparison" className="font-medium text-emerald-600 hover:underline">
          Wegovy price comparison
        </Link>
        .
      </p>
    </div>
  );
}

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);
  const shareUrl = `${siteOrigin()}/blog/mounjaro-weight-loss-benefits-backed-by-science`;

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`w-full font-sans transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-300' : 'bg-white text-slate-800'}`}>
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        {/* TOP NAVIGATION HEADER */}
        <div className="mb-10 flex items-center justify-between">
          <Link href="/blog" className={`flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-75 ${darkMode ? 'text-slate-300' : 'text-slate-900'}`}>
            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
              <ArrowLeft className="h-4 w-4" />
            </div>
            Back to News
          </Link>

          <div className="flex items-center gap-3">
            <Moon className={`h-4 w-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`} />
            <button type="button" onClick={toggleDarkMode} className={`relative flex h-6 w-12 items-center rounded-full p-1 shadow-inner transition-colors ${darkMode ? 'bg-slate-700' : 'bg-slate-200'}`} aria-label="Toggle dark mode">
              <div className={`h-4 w-4 rounded-full shadow transition-all ${darkMode ? 'translate-x-6 bg-slate-900' : 'translate-x-0 bg-white'}`} />
            </button>
            <Sun className={`h-4 w-4 ${darkMode ? 'text-yellow-400' : 'text-slate-400'}`} />
          </div>
        </div>

        {/* HERO HEADER */}
        <header className="mb-12">
          <h1 className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? 'text-white' : 'text-slate-900'}`}>Mounjaro Weight Loss Benefits Backed by Science</h1>
          <div className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              15 Apr 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              14 min read
            </span>
          </div>

          <BlogArticleHeroImage src={HERO_IMAGE} alt="Mounjaro weight loss benefits and clinical evidence" />
          <div id="guide-article-hero-end" aria-hidden className="pointer-events-none h-0 w-full overflow-hidden" />
        </header>

        {/* CONTENT SPLIT LAYOUT */}
        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          {/* LEFT: TOC */}
          {TOC.length > 0 && <GuideTocSidebar key={TOC.map((t) => t.id).join('-')} toc={TOC} />}

          {/* RIGHT: ARTICLE BODY */}
          <div className="min-w-0 flex-1 max-w-3xl">
            <article className={`space-y-8 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              <p className="text-lg md:text-xl">
                If you have been on a long journey to lose weight and tried countless diets without lasting success, you might be curious about newer options on the market. One of the prominent treatments gaining attention is Mounjaro, an
                injectable medication that has shown strong potential for weight loss in recent clinical trials.
              </p>
              <p>
                Though it recently became available in specialist NHS weight loss clinics in England and Wales, understanding how it actually works can be crucial before you decide whether it is right for you. You will find lots of data
                from trials that highlight effectiveness, but also considerations you should explore from side effects to maintaining results over time. Weight loss is never just about a single solution.
              </p>

              <GuideSection darkMode={darkMode} id="understanding" heading="Understanding Mounjaro weight loss">
                <p>
                  You may have heard about Mounjaro through health news, or you might know someone currently taking it. The promise is straightforward: by subduing your appetite and helping regulate how your body uses energy, Mounjaro
                  provides measurable weight loss benefits. As you read on, keep in mind how Mounjaro might fit into your broader approach, including diet, exercise, and daily habits.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="how-it-works" heading="How does Mounjaro work">
                <p>
                  Mounjaro, also known by its active ingredient tirzepatide, works by mimicking GLP 1, which helps regulate fullness and how your body manages energy. When you eat, hormones in your stomach signal satisfaction to your brain.
                  Mounjaro enhances this process, so you feel full sooner. It also slows digestion, so you remain satisfied longer often reducing snacking and overeating.
                </p>
                <p>
                  An additional mechanism is how Mounjaro influences metabolism and insulin sensitivity, so your body can process nutrients more efficiently. This dual approach has positioned Mounjaro as a potentially powerful option for
                  significant weight loss, especially if standalone diet or exercise has not been enough. For a deeper look at mechanisms, see our guide on{' '}
                  <Link href="/blog/does-mounjaro-really-work-for-weight-loss-find-out-here" className="font-semibold text-brand-primary underline-offset-2 hover:underline">
                    how Mounjaro works for weight loss
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="clinical-trials" heading="Key findings from clinical trials">
                <p>
                  Multiple clinical studies have examined Mounjaro&apos;s impact on weight loss. A 72 week trial reported by the BBC involved 750 participants with obesity, with an average weight of 113 kg. Those on Mounjaro achieved around
                  a <strong className={darkMode ? 'text-white' : 'text-slate-900'}>20% reduction in body weight</strong> compared with about <strong className={darkMode ? 'text-white' : 'text-slate-900'}>14%</strong> on another medication
                  (Wegovy). Cutting a fifth of body mass can translate into major improvements in comfort, energy, and overall health (BBC).
                </p>
                <p>
                  The SURMOUNT 4 trial, discussed in a 2025 analysis in <em>JAMA Internal Medicine</em>, included 670 participants without diabetes but with obesity or excess weight. Results indicated that{' '}
                  <strong className={darkMode ? 'text-white' : 'text-slate-900'}>82% of those who stopped Mounjaro and switched to placebo regained at least a quarter of the weight they had lost within nine months</strong> (British Heart
                  Foundation). That is a reminder that consistent use and follow up may be crucial for continued success.
                </p>
                <p>
                  Trials typically included medical supervision and lifestyle support balanced diet and exercise not injections alone. For sustainable loss, align medication with healthy living, regular check ups, and therapy if needed.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="side-effects" heading="Potential side effects">
                <p>Like most prescription medicines, Mounjaro can cause side effects. Many are mild or temporary, but you should know what to expect and discuss them with your clinician before starting. The BBC highlights common issues:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Nausea</li>
                  <li>Vomiting</li>
                  <li>Bloating</li>
                  <li>Constipation</li>
                  <li>Diarrhoea</li>
                </ul>
                <p>
                  Rare but serious problems including gallbladder or kidney issues and mood changes have been reported; causality is not always confirmed (BBC). Seek urgent advice for severe or persistent symptoms or unusual changes in mood
                  or wellbeing.
                </p>
                <p>Day to day awareness helps you spot problems early. More fibre and fluids can ease constipation; smaller, frequent meals can help early nausea.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="weight-regain" heading="The challenge of weight regain">
                <p>
                  A major theme in Mounjaro discussions is regaining weight after stopping. SURMOUNT 4 and related analyses found that many who stopped saw reversal of progress. The British Heart Foundation reported increases in waist
                  circumference, blood pressure, LDL cholesterol, and fasting glucose alongside regain (British Heart Foundation).
                </p>
                <p>
                  <em>The Guardian</em> similarly noted that{' '}
                  <strong className={darkMode ? 'text-white' : 'text-slate-900'}>many who stopped tirzepatide after losing at least 10% body weight regained 25% or more of that loss within a year</strong>. Once appetite suppression is
                  removed, older appetite signals can return especially challenging if you struggle with portions or emotional eating. For more context, explore our resources on{' '}
                  <Link href="/mounjaro-price-comparison" className="font-medium text-emerald-600 hover:underline">
                    Mounjaro price comparison
                  </Link>
                  .
                </p>
                <p>
                  This pattern is not unique to Mounjaro. The lesson: medication can accelerate progress, but it is not a standalone cure. If you plan to stop, build eating patterns and activity you can sustain, and plan dose changes with
                  your doctor or dietitian.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="maintaining" heading="Maintaining your results">
                <p>Lasting change usually needs a maintenance framework beyond the last injection. Useful pillars include:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>Balanced diet.</strong> Lean proteins, whole grains, fruit, vegetables, and healthy fats support weight goals and micronutrient needs without extreme
                    restriction.
                  </li>
                  <li>
                    <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>Ongoing exercise.</strong> Walking, strength training, or sport you enjoy helps balance energy intake and supports heart health and stress.
                  </li>
                  <li>
                    <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>Mindful habits.</strong> You may grow used to smaller portions on Mounjaro; if you stop, keep portion awareness. Meal tracking in an app or notebook can
                    highlight patterns.
                  </li>
                  <li>
                    <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>Regular check ups.</strong> Periodic reviews help catch issues early and align other medicines with your goals.
                  </li>
                </ul>
                <p>The British Heart Foundation stresses that diet and exercise after stopping remain essential to limit regain (British Heart Foundation).</p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage src={INLINE_BENEFITS_IMG_WOMAN} alt="Mounjaro weight loss journey — science-backed results and wellbeing" priority={false} showFullImage />
              </div>

              <GuideSection darkMode={darkMode} id="dosage" heading="Finding the right dosage">
                <p>
                  Dose decisions belong with your prescriber, based on weight, comorbidities, tolerability, and response. For how titration and strengths work in practice, read{' '}
                  <Link href="/blog/mounjaro-dosage-for-weight-loss-facts-you-can-trust" className="font-semibold text-brand-primary underline-offset-2 hover:underline">
                    Mounjaro dosage for weight loss
                  </Link>
                  .
                </p>
                <p>
                  NHS England and Wales pathways and GP eligibility have evolved; coverage and private costs vary by region and indication. Lower starting doses are common to test tolerance before increases with follow up to balance benefit
                  and side effects.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="real-life" heading="Looking at real-life experiences">
                <p>
                  Personal stories can motivate or reassure you: appetite changes, steady scale movement, or challenges with side effects and cost. For context on expectations and safety, see{' '}
                  <Link href="/blog/discover-if-mounjaro-is-safe-for-weight-loss-and-right-for-you" className="font-semibold text-brand-primary underline-offset-2 hover:underline">
                    whether Mounjaro is safe and right for you
                  </Link>{' '}
                  and trial style outcomes on{' '}
                  <Link href="/what-is-mounjaro#weight-loss-results" className="font-semibold text-brand-primary underline-offset-2 hover:underline">
                    Mounjaro weight loss results
                  </Link>
                  .
                </p>
                <p>
                  Communities sometimes discuss injection technique; for UK focused practical context, see{' '}
                  <Link href="/helpful-guides/mounjaro-weight-loss-injection-uk" className="font-semibold text-brand-primary underline-offset-2 hover:underline">
                    Mounjaro weight loss treatments (UK)
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="stopping" heading="Exploring the research on stopping Mounjaro">
                <p>
                  Benefits on weight and cardiometabolic markers can reverse after discontinuation. Publications including <em>The Guardian</em> and the <em>Pharmaceutical Journal</em> have summarised how regain tracks with waist, blood
                  pressure, lipids, and glycaemic markers. Illustrative summary figures reported in that coverage:
                </p>
                <TableStoppingResearch darkMode={darkMode} />
                <p>
                  More regain tended to mean greater loss of cardiometabolic gains another reason to plan before stopping rather than quitting abruptly. Eli Lilly has described obesity as often requiring longer term therapy; early
                  discontinuation can set the stage for substantial regain (Pharmaceutical Journal).
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="future-health" heading="Considering future health implications">
                <p>
                  <em>The Guardian</em> has reported on discussions around pregnancy and weight loss medicines: stopping tirzepatide before or early in pregnancy may be linked to greater weight gain and possible complications in some
                  analyses, but evidence is not yet definitive speak to your clinician if pregnancy is possible (The Guardian).
                </p>
                <p>Regain after stopping often tracks with rising blood pressure, glucose, and cardiovascular risk. Longer term use warrants monitoring blood tests and symptoms so your care plan can adapt.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="support" heading="Supporting long-term results">
                <p>
                  Long term success depends on partnership with your healthcare team GPs, specialists, dietitians, and trainers. If you compare regulated UK supply routes, start from our{' '}
                  <Link href="/mounjaro-price-comparison" className="font-semibold text-brand-primary underline-offset-2 hover:underline">
                    Mounjaro price comparison
                  </Link>{' '}
                  and verify any online pharmacy is GPhC registered; counterfeit products are dangerous.
                </p>
                <p>
                  Structured eating plans, activity targets (for example toward UK activity guidelines), and medication where appropriate work best together. That stack improves the odds of steady progress even if doses change later. For
                  more context, explore our resources on{' '}
                  <Link href="/helpful-guides/mounjaro-weight-loss-injection-uk" className="font-medium text-emerald-600 hover:underline">
                    Mounjaro weight loss treatment UK
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="informed-choice" heading="Making an informed choice">
                <p>
                  Mounjaro can offer meaningful weight reduction some trials around <strong className={darkMode ? 'text-white' : 'text-slate-900'}>20%</strong> and improvements in blood pressure, lipids, and glucose. Keeping those gains may
                  require ongoing therapy and lifestyle discipline; stopping without a plan can return you toward your previous trajectory.
                </p>
                <p>
                  Refine decisions with professionals who know your history, weigh cost and side effects, and consider long term need. If previous diets and exercise were insufficient, Mounjaro may help provided you commit to sustainable
                  habits alongside medical oversight.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="local-availability" heading="Finding support in your local area">
                <p>While Mounjaro can be a powerful tool, having the right local support can make a significant difference in your journey. Many patients prefer finding clinics or pharmacies near them to get personalised guidance.</p>
                <p>
                  Whether you are looking for the{' '}
                  <Link href="/blog/best-weight-loss-treatment-in-london" className="font-semibold text-[#3562ff] underline-offset-2 hover:underline">
                    best weight loss treatment in London
                  </Link>
                  , seeking options for{' '}
                  <Link href="/blog/best-weight-loss-treatment-in-manchester" className="font-semibold text-[#3562ff] underline-offset-2 hover:underline">
                    weight management in Manchester
                  </Link>
                  , or exploring{' '}
                  <Link href="/blog/best-weight-loss-treatment-in-birmingham" className="font-semibold text-[#3562ff] underline-offset-2 hover:underline">
                    clinics in Birmingham
                  </Link>
                  , comparing local regulated providers ensures you receive safe and continuous care.
                </p>
                <div className={`mt-6 rounded-xl border p-6 ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-100 bg-slate-50'}`}>
                  <h3 className={`mb-2 text-lg font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Ready to explore options near you?</h3>
                  <p className={`mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Discover verified providers in your city and find the right medical weight loss plan tailored to your needs. Visit our comprehensive UK locations guide to see options available in your local area.
                  </p>
                  <Link
                    href="/blog?topic=locations"
                    className={`inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${darkMode ? 'bg-[#3562ff] text-white hover:bg-[#2a4fd6]' : 'bg-[#3562ff] text-white hover:bg-[#2a4fd6]'}`}
                  >
                    Explore local UK providers
                  </Link>
                </div>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage src={INLINE_BENEFITS_IMG_EATING} alt="Balanced eating habits alongside Mounjaro for lasting weight loss" priority={false} showFullImage />
              </div>

              <section id="faq" className={`mt-16 border-t pt-10 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                <h2 className={`mb-8 text-3xl font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Frequently Asked Questions</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>What weight loss has Mounjaro shown in trials?</h3>
                    <p>In a widely reported 72 week trial, participants achieved around a 20% reduction in body weight on Mounjaro versus about 14% on another GLP 1 option; individual results vary and require medical supervision.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Can I regain weight if I stop Mounjaro?</h3>
                    <p>Yes. Studies such as SURMOUNT 4 suggest many people regain a substantial portion of lost weight after stopping unless strong diet, exercise, and follow up plans are in place.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>What are the most common side effects of Mounjaro?</h3>
                    <p>Nausea, vomiting, bloating, constipation, and diarrhoea are among the most commonly reported. Serious problems are rarer but need prompt medical attention.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Is Mounjaro a substitute for diet and exercise?</h3>
                    <p>No. Trials typically combine medication with lifestyle support. Sustainable results usually depend on ongoing habits, not injections alone.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Who should I speak to before starting Mounjaro in the UK?</h3>
                    <p>Always discuss with a GMC registered prescriber or your GP. Eligibility, NHS pathways, and private options differ; Health Wise compares information and does not prescribe.</p>
                  </div>
                </div>
              </section>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  Mounjaro weight loss is backed by serious trial data: meaningful reductions in weight and supportive cardiometabolic changes for many participants. It is not a magic bullet side effects, cost, long term use, and regain
                  after stopping are all part of an honest picture.
                </p>
                <p>
                  Treat Mounjaro as one component of a broader plan: clear goals, clinician partnership, monitoring, and habits you can keep. If you move forward, do it with licensed UK supply, realistic expectations, and the same patience
                  you would bring to any major health decision. This article is informational only and not medical advice; always follow personalised guidance from your care team. For more context, explore our resources on{' '}
                  <Link href="/blog/mounjaro-weight-loss-benefits-backed-by-science" className="font-medium text-emerald-600 hover:underline">
                    Mounjaro weight loss benefits
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="references" heading="References">
                <ol className="list-decimal space-y-2 pl-5 text-sm">
                  <li>BBC News reporting on tirzepatide / Mounjaro weight loss trial outcomes and NHS context.</li>
                  <li>British Heart Foundation coverage of SURMOUNT 4 and regain after stopping tirzepatide.</li>
                  <li>
                    <em>The Guardian</em> reporting on weight regain after stopping tirzepatide and related public health discussion.
                  </li>
                  <li>
                    <em>Pharmaceutical Journal</em> analysis of cardiometabolic changes after discontinuation; Eli Lilly commentary on obesity as a chronic condition.
                  </li>
                  <li>
                    <em>JAMA Internal Medicine</em> (2025) analysis context for SURMOUNT 4 (as cited in secondary reporting).
                  </li>
                </ol>
              </GuideSection>
            </article>

            <div className="mt-10">
              <GuideSharePanel url={shareUrl} title="Mounjaro Weight Loss Benefits Backed by Science" description="Unlock mounjaro weight loss benefits backed by science to help you shed stubborn pounds with confidence." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
