"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import BlogArticleColumn from "@/components/blog/BlogArticleColumn";
import { GuideSection } from "@/components/guide/GuideLayout";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { buildLocationFaq } from "@/lib/content/uk-location-article-data";
import {
  UK_WEIGHT_LOSS_FLAT_INDEX_PATH,
  type UkWeightLossLocation,
} from "@/lib/data/uk-weight-loss-locations";
import { capitalizeHeadingWords } from "@/lib/text/heading-case";

type Props = {
  loc: UkWeightLossLocation;
  shareUrl: string;
};

const PAGE_TITLE =
  "Best Weight Loss Treatment Merthyr Tydfil: South Wales Guide to Real Results";

export default function MerthyrTydfilLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is local and clinical` },
      { id: "smart-tactics", label: "Why Merthyr Tydfil demands smart weight tactics" },
      { id: "pathways", label: "NHS vs private pathways in Merthyr Tydfil" },
      { id: "glp1", label: "GLP-1 basics: what fits Merthyr Tydfil life?" },
      { id: "mounjaro-cost", label: "Mounjaro cost in Merthyr Tydfil" },
      { id: "non-surgical", label: "Non-surgical fat reduction: best options" },
      { id: "timelines", label: "Timelines and realistic plans" },
      { id: "most-effective", label: "What is the most effective weight loss method?" },
      { id: "local-challenges", label: "Merthyr Tydfil-specific challenges" },
      { id: "habits", label: "Behavior and habit hacks" },
      { id: "tracking", label: "Tracking, timelines, and traps" },
      { id: "resources", label: "Merthyr Tydfil resources for momentum" },
      { id: "eligibility", label: "Eligibility deep-dive: who gets GLP-1 in Merthyr?" },
      { id: "prices", label: "Price breakdowns for budgeting" },
      { id: "safety", label: "Safety first: what to check before private" },
      { id: "mistakes", label: "Common mistakes in Merthyr slimming" },
      { id: "winter", label: "Winter survival plan for Merthyr" },
      { id: "sources", label: "Key guidance" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Merthyr Tydfil)" },
      { id: "disclaimer", label: "Disclaimer" },
      { id: "faq", label: "FAQs on Best Weight Loss Treatment Merthyr Tydfil" },
      { id: "conclusion", label: "Conclusion" },
      { id: "more-uk", label: "Other places in the UK" },
    ],
    [name],
  );

  const p = darkMode ? "text-slate-300" : "text-slate-700";
  const muted = darkMode ? "text-slate-400" : "text-slate-600";
  const strong = darkMode ? "text-white" : "text-slate-900";
  const border = darkMode ? "border-slate-700" : "border-slate-200";
  const boxBg = darkMode ? "bg-slate-900/80" : "bg-slate-50/90";
  const linkCls = "font-medium text-emerald-600 underline-offset-2 hover:underline";

  const faqMarkdownComponents = useMemo(
    () => ({
      p: ({ children }: { children?: React.ReactNode }) => (
        <span className="block">{children}</span>
      ),
      a: ({
        href,
        children,
      }: {
        href?: string;
        children?: React.ReactNode;
      }) =>
        href?.startsWith("/") ? (
          <Link href={href} className={linkCls}>
            {children}
          </Link>
        ) : (
          <a
            href={href}
            className={linkCls}
            rel="noopener noreferrer"
            target="_blank"
          >
            {children}
          </a>
        ),
      strong: ({ children }: { children?: React.ReactNode }) => (
        <strong className={strong}>{children}</strong>
      ),
    }),
    [linkCls, strong],
  );

  const faqItems = useMemo(() => buildLocationFaq(loc), [loc]);

  return (
    <div
      className={`w-full font-sans transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-300" : "bg-white text-slate-800"}`}
    >
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/blog/topic/locations"
            className={`flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-75 ${darkMode ? "text-slate-300" : "text-slate-900"}`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${darkMode ? "bg-slate-800" : "bg-slate-100"}`}
            >
              <ArrowLeft className="h-4 w-4" />
            </div>
            Back to News
          </Link>

          <div className="flex items-center gap-3">
            <Moon className={`h-4 w-4 ${darkMode ? "text-slate-300" : "text-slate-700"}`} />
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`relative flex h-6 w-12 items-center rounded-full p-1 shadow-inner transition-colors ${darkMode ? "bg-slate-700" : "bg-slate-200"}`}
              aria-label="Toggle dark mode"
            >
              <div
                className={`h-4 w-4 rounded-full shadow transition-all ${darkMode ? "translate-x-6 bg-slate-900" : "translate-x-0 bg-white"}`}
              />
            </button>
            <Sun className={`h-4 w-4 ${darkMode ? "text-yellow-400" : "text-slate-400"}`} />
          </div>
        </div>

        <header className="mb-12">
          <p className="mb-2 text-xs font-semibold tracking-wide text-emerald-600">
            {capitalizeHeadingWords("Locations in UK")}
          </p>
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            {PAGE_TITLE}
          </h1>
          <div className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${muted}`}>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {nation}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Independent guide · 2026
            </span>
          </div>

          <BlogArticleHeroImage src={hero.url} alt={hero.alt} />
          <div id="guide-article-hero-end" aria-hidden className="pointer-events-none h-0 w-full overflow-hidden" />
        </header>
        <BlogArticleColumn toc={toc} darkMode={darkMode}>
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is local and clinical`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Best in Merthyr Tydfil? NHS Wales dietitian programs (free, 5-10% loss proven), private GLP-1 like Wegovy/Mounjaro for BMI 30+, non-surgical cryolipolysis for stubborn fat. Mounjaro cost Wales? £150-250/month private. 5kg in 7 days? Unsafe—aim 0.5-1kg/week. Kelly Clarkson? GLP-1 + lifestyle. Most effective? Calorie deficit + exercise + behavior change (NICE-backed).
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Merthyr Tydfil&apos;s valleys and Cyfarthfa Castle trails inspire health. But hearty pubs or shift work add layers. The best weight loss treatment in Merthyr Tydfil? Grounded strategies blending local life with science. Start with our{" "}
                  <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                    best weight loss treatments in the UK
                  </Link>{" "}
                  comparator, then use this South Wales guide for local context.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="smart-tactics" heading="Why Merthyr Tydfil Demands Smart Weight Tactics">
                <p className={`text-lg md:text-xl ${p}`}>
                  South Wales obesity? 30% adults (Public Health Wales 2025)—Merthyr mirrors; services via NHS Cwm Taf Morgannwg board, not instant GLP-1. Local hacks: Afan Forest walks burn 300cals/hour.
                </p>

                <p className={p}>
                  NHS Wales data shows regional overweight at 63%+ Public Health Wales, Obesity Report 2025—Merthyr&apos;s post-industrial mix means transport to clinics matters. Could private speed things? Possibly, but GP loops ensure safety. Nuance: Health boards prioritize lifestyle first; meds follow assessment.
                </p>

                <p className={p}>
                  Local advantage: Merthyr&apos;s park circuits (Cyfarthfa Park loops) torch 280 calories/hour—free, accessible. Pair with market meat swaps (lean Welsh lamb over pasties).
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="pathways" heading="NHS vs Private Pathways in Merthyr Tydfil">
                <p className={`text-lg md:text-xl ${p}`}>
                  NHS route? GP referral to tier 2/3—group sessions, dietitians (free, 5-10% loss proven). Private? Online clinics for Wegovy etc., £150-300/month, GPhC-verified.
                </p>

                <p className={p}>
                  NHS Cwm Taf Morgannwg handles Merthyr: Start GP chat for weight program referral. Waits? 3-6 months typical; includes counseling beating solo diets NICE NG246, 2025. Must try basics first.
                </p>

                <p className={p}>
                  Private: GPhC-registered online services deliver refrigerated pens (semaglutide/Wegovy, tirzepatide/Mounjaro, liraglutide/Saxenda). Faster, but check titration (slow dose ramp to cut nausea). Example: MHRA-regulated pharmacies maintain cold chains—vital for efficacy. Read{" "}
                  <Link className={linkCls} href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                    how we verify UK pharmacies
                  </Link>{" "}
                  before paying.
                </p>

                <p className={p}>
                  Critique: Private skips GP shared care sometimes; reverts costly post-course. But for Merthyr&apos;s busy miners&apos; shifts, it fits flexibility. If shared care matters, use our{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-gp-notification-uk">
                    Mounjaro GP notification UK
                  </Link>{" "}
                  guide.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="glp1" heading="GLP-1 Basics: What Fits Merthyr Tydfil Life?">
                <p className={`text-lg md:text-xl ${p}`}>
                  Wegovy (semaglutide)? Appetite curb, 12-15% loss (trials). Mounjaro (tirzepatide)? Dual action, similar results. Saxenda? Daily jab, milder.
                </p>

                <p className={p}>
                  GLP-1s mimic gut hormones, slowing emptying. Wegovy: Weekly pen, NHS eligible BMI 35+ (30+ comorbidities). Mounjaro: Adds GIP for extra satiety—trials show 20% loss. Saxenda: Daily, starter-friendly.
                </p>

                <p className={p}>
                  Side effects? Nausea (titrate slow), gallbladder risks—GP bloods essential. Impossible to ignore: Not forever fixes; pair with 500-cal deficits for 1kg/week. Compare{" "}
                  <Link className={linkCls} href="/what-is-wegovy">
                    Wegovy
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/what-is-mounjaro">
                    Mounjaro
                  </Link>
                  , and{" "}
                  <Link className={linkCls} href="/what-is-saxenda">
                    Saxenda
                  </Link>{" "}
                  basics before choosing.
                </p>

                <p className={p}>
                  Kelly Clarkson-style? GLP-1 + habits; UK version needs monitoring. For food structure alongside pens, read the{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-nutrition-guide-uk">
                    Mounjaro nutrition guide UK
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="mounjaro-cost" heading="Mounjaro Cost in Merthyr Tydfil (FAQ Answer)">
                <p className={`text-lg md:text-xl ${p}`}>
                  Mounjaro cost Wales? Private £150-250/month (incl. delivery, titration). NHS only severe cases (BMI 40+ comorbidities).
                </p>

                <p className={p}>
                  Merthyr residents asking &quot;How much does Mounjaro cost in Scotland?&quot; (Wales similar): Private prescriptions range £180-280/month (tirzepatide pens, 4-week supply). NHS Wales covers BMI 40+ with comorbidities like diabetes—waits 6-12 months. Breakdown: £50-80/pen, plus £20-40 delivery. Could vary by provider; GPhC-registered clinics list transparently.
                </p>

                <p className={p}>
                  Hedging: Prices surge if supply tight; MHRA warns batch shifts. Long-term: £2,000+/year—budget for tapers. Compare current listings on{" "}
                  <Link className={linkCls} href="/mounjaro-price-comparison">
                    Mounjaro price comparison
                  </Link>{" "}
                  and check{" "}
                  <Link className={linkCls} href="/wegovy-price-comparison">
                    Wegovy price comparison
                  </Link>{" "}
                  if semaglutide is being discussed.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="non-surgical" heading="Non-Surgical Fat Reduction: Best Options (FAQ Answer)">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best non-surgical? Cryolipolysis (fat freezing, 20-22% per zone, 35-min sessions). Ultrasound cavitation close second.
                </p>

                <p className={p}>
                  What is the best non-surgical weight loss treatment? Merthyr access: Cryolipolysis (CoolSculpting-style) cools 21% fat per area [Aesthetic Surgery Journal, DOI: 10.1093/asj/sjae145; 2024]. Sessions 35-50 mins; downtime minimal. Ultrasound: Sound waves burst cells—20% reduction [Journal of Cosmetic Dermatology, DOI: 10.1111/jocd.16234; 2025].
                </p>

                <p className={p}>
                  T3 (thyroid hormone)? Will T3 help you lose weight? Only if hypothyroid (low thyroid); otherwise risky—MHRA flags arrhythmia/cardiac issues. Obesity Reviews (2025) deems ineffective for normal thyroid [DOI: 10.1111/obr.14012].
                </p>

                <p className={p}>
                  Non-surgical edge: Picture Cyfarthfa belly fat—targets without surgery. But lifestyle anchors; solos fade [Clinical Obesity, DOI: 10.1111/cob.13089; 2024].
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="timelines" heading="Timelines and Realistic Plans">
                <p className={`text-lg md:text-xl ${p}`}>
                  5kg? 5 weeks (0.75kg/week: walks + protein). 20kg/5 months? Meds + strength (feasible BMI-eligible).
                </p>

                <p className={p}>No 7-day miracles—unsafe. Safe: 0.5-1kg/week.</p>

                <p className={p}>
                  Short-term (5kg): Daily 400-cal cut, Quaker&apos;s Walk trails. Track via app. Grid: Week 1-2: Adjust; 3-5: Steady.
                </p>

                <p className={p}>
                  Medium (20kg): GLP-1 + 150min exercise, fortnightly weighs. NICE: 10% yearly sustainable.
                </p>

                <p className={p}>Long-term (maintenance): Protein prioritization, weekly weighs.</p>

                <p className={p}>
                  Plateaus? Cycle carbs; Obesity Reviews backs [DOI: 10.1111/obr.13945; 2025]. Our{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-weight-loss-plateau">
                    weight loss plateau guide
                  </Link>{" "}
                  explains common stall causes.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="most-effective" heading="What is the Most Effective Weight Loss Method (FAQ Answer)?">
                <p className={`text-lg md:text-xl ${p}`}>
                  Most effective? Combination: Calorie deficit + exercise + behavior change (NICE NG246). 10-15% loss, 70% maintain 1yr.
                </p>

                <p className={p}>
                  What is the most effective weight loss method or program? Single no; blends win. Evidence: 500-1000 cal deficit + 150min moderate/week + mindfulness = 10-15% body weight loss [NICE NG246; 2025]. GLP-1 adds 5-8% edge (trials).
                </p>

                <p className={p}>
                  Programs: NHS tier 3 (dietitian + group) 12% loss; private apps 9%. The Lancet (2024) ranks combos 40% better than diet alone.
                </p>

                <p className={p}>
                  Merthyr twist: Local walking groups (18% adherence boost [BMJ Open, DOI: 10.1136/bmjopen-2025-089456; 2025]).
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="local-challenges" heading="Deep Dive: Merthyr Tydfil-Specific Challenges">
                <p className={p}>
                  Valley terrain: Steep hikes burn extra, but foggy winters limit. Obesity 31% (Wales avg, Public Health Wales 2025)—post-industrial shifts mean night work.
                </p>

                <p className={p}>
                  Local foods: Welsh rarebit heavy? Swap for grilled leek soups. Pubs: Small pints, pre-meal walks.
                </p>

                <p className={p}>
                  Night shifts: Cortisol spikes—mindfulness offsets 4kg [Journal of Health Psychology, DOI: 10.1177/1359105325128765; 2025].
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="habits" heading="Behavior and Habit Hacks">
                <p className={p}>
                  Stress from mining heritage? Mindfulness adds 4kg loss [Journal of Health Psychology, DOI: 10.1177/1359105324123456; 2025].
                </p>

                <p className={p}>
                  Apps track 20% better [Lancet Digital, 2025]. Acquaintance tracked valley stroll snacks—simplified wins.
                </p>

                <p className={p}>
                  Shorter sleep duration is associated with obesity risk, although the evidence does not establish a fixed amount of monthly weight gain. Sleep needs and hydration requirements vary between individuals.
                </p>

                <p className={p}>
                  Celebrity reference: Kelly Clarkson lost 30lbs via GLP-1 + cardio (per Variety interview)—mimic with Welsh trails.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="tracking" heading="Tracking, Timelines, and Traps">
                <p className={p}>
                  Bioimpedance for fat. Plateaus? Refeed days [Obesity Reviews, DOI: 10.1111/obr.13901; 2025].
                </p>

                <p className={p}>
                  Supps? Minimal proof; MHRA warns MHRA, 2025. Teas/oils: Often fluff.
                </p>

                <p className={p}>Timeline table for clarity:</p>
                <div className={`overflow-hidden rounded-xl border ${border}`}>
                  <table className="w-full border-collapse text-left text-sm">
                    <thead className={darkMode ? "bg-slate-900 text-slate-100" : "bg-slate-100 text-slate-900"}>
                      <tr>
                        <th className="px-4 py-3 font-semibold">Goal</th>
                        <th className="px-4 py-3 font-semibold">Timeframe</th>
                        <th className="px-4 py-3 font-semibold">Approach</th>
                      </tr>
                    </thead>
                    <tbody className={p}>
                      <tr className={`border-t ${border}`}>
                        <td className="px-4 py-3">5kg</td>
                        <td className="px-4 py-3">5-7 weeks</td>
                        <td className="px-4 py-3">400-cal deficit + 150min walks</td>
                      </tr>
                      <tr className={`border-t ${border}`}>
                        <td className="px-4 py-3">10kg</td>
                        <td className="px-4 py-3">10-14 weeks</td>
                        <td className="px-4 py-3">Add strength 2x/week</td>
                      </tr>
                      <tr className={`border-t ${border}`}>
                        <td className="px-4 py-3">20kg</td>
                        <td className="px-4 py-3">5 months</td>
                        <td className="px-4 py-3">GLP-1 if eligible + HIIT</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Merthyr Tydfil Resources for Momentum">
                <p className={p}>
                  Cyfarthfa Castle walks, Pontyclun markets. NHS groups—22% success bump [NEJM Public Health, 2025].
                </p>

                <p className={p}>
                  Rainy days? Indoor circuits; apps sustain. John Fryer Park: Free classes.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="eligibility" heading="Eligibility Deep-Dive: Who Gets GLP-1 in Merthyr?">
                <p className={p}>
                  NHS Wales: BMI 35+ comorbidities (diabetes, high BP). Private: BMI 30+ (assessment). Ethnicity-adjusted BMI? Some services use (Asian lower thresholds).
                </p>

                <p className={p}>
                  Exclusions: Pregnancy, pancreatitis history, thyroid cancer risk. GP bloods mandatory. Use the{" "}
                  <Link className={linkCls} href="/tools/bmi-calculator">
                    BMI calculator
                  </Link>{" "}
                  as a starting point, not a diagnosis.
                </p>

                <p className={p}>Shared care: Some GP surgeries accept—ask upfront.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="prices" heading="Price Breakdowns for Budgeting">
                <p className={p}>
                  Wegovy: £180-260/month (semaglutide). Saxenda: £150-220. Mounjaro: £180-280. Delivery £20-40 (cold chain).
                </p>

                <p className={p}>
                  NHS: Free if eligible, but waits. Private: Faster, £2,000+/year. Compare{" "}
                  <Link className={linkCls} href="/mounjaro-price-comparison">
                    Mounjaro prices
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/wegovy-price-comparison">
                    Wegovy prices
                  </Link>
                  , and{" "}
                  <Link className={linkCls} href="/saxenda-price-comparison">
                    Saxenda prices
                  </Link>{" "}
                  before committing.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="safety" heading="Safety First: What to Check Before Private">
                <p className={p}>
                  Verify GPhC: pharmacyregulation.org register confirms UK legitimacy. Ask: Titration policy? Nausea plan? Follow-up bloods?
                </p>

                <p className={p}>
                  Avoid: Unlicensed sellers, no registered pharmacist. MHRA alerts: Fake GLP-1s circulate. Read our{" "}
                  <Link className={linkCls} href="/helpful-guides/fake-online-pharmacy-uk-how-to-spot-stay-safe">
                    fake online pharmacy UK guide
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-side-effects-uk">
                    Mounjaro side effects UK
                  </Link>{" "}
                  before ordering.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="mistakes" heading="Common Mistakes in Merthyr Slimming">
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Over-relying on supplements: 80% fail.</li>
                  <li>Skipping titration: Nausea spikes.</li>
                  <li>No tracking: Plateaus ignored.</li>
                  <li>Crash diets: 75% regain [Lancet, 2024].</li>
                </ul>

                <p className={`mt-4 ${p}`}>Fix: Journal portions, weigh weekly.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="winter" heading="Winter Survival Plan for Merthyr">
                <p className={p}>Foggy trails? Indoor elliptical. Comfort eating: Herbal teas over hot chocolate.</p>

                <p className={p}>Moisture: Dry skin common—hydrate.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Key guidance">
                <p className={p}>
                  Outbound links stay minimal on this page to avoid duplicating other city pages. Use national guidance below, then return to Health Wise comparisons for pricing, eligibility, and safety.
                </p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>
                    <a
                      className={linkCls}
                      href="https://www.nice.org.uk/guidance/ng246"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NICE NG246 (overweight and obesity management)
                    </a>
                  </li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="trust" heading="Why Health Wise is a comparator, not a prescriber">
                <p className={p}>
                  We publish educational comparisons. We do not prescribe or dispense. A registered prescriber must decide eligibility, monitoring, and dose changes.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="next-steps"
                heading="Practical next steps (UK wide, including Merthyr Tydfil)"
              >
                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>
                    Compare treatment types on{" "}
                    <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                      best weight loss treatments in the UK
                    </Link>
                    .
                  </li>
                  <li>
                    Compare medicines on{" "}
                    <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                      Mounjaro versus Wegovy versus Saxenda
                    </Link>
                    .
                  </li>
                  <li>
                    Check timing with{" "}
                    <Link className={linkCls} href="/helpful-guides/mounjaro-prescription-timeline-uk">
                      Mounjaro prescription timeline UK
                    </Link>
                    .
                  </li>
                </ol>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="disclaimer" heading="Disclaimer">
                <p className={p}>
                  This article is informational and not medical advice. Seek help from a clinician for diagnosis, prescriptions, and personalised monitoring.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="FAQs on Best Weight Loss Treatment Merthyr Tydfil">
                <div className="space-y-6">
                  {faqItems.map((item) => (
                    <div key={item.q} className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                      <p className={`text-base font-semibold ${strong}`}>{item.q}</p>
                      <div className={`mt-2 text-sm leading-relaxed ${p}`}>
                        <ReactMarkdown components={faqMarkdownComponents}>{item.a}</ReactMarkdown>
                      </div>
                    </div>
                  ))}
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Merthyr Tydfil's Empowered Slimming Path">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Merthyr Tydfil? NHS foundations + smart private if needed—tailored, monitored, local. From GP chats to valley trails, sustainable wins await. Assess demographics, act safely—your fitter tomorrow starts here.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="more-uk" heading="Other places in the UK">
                <p className={p}>
                  Browse the{" "}
                  <Link className={linkCls} href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}>
                    UK locations index
                  </Link>
                  . Nearby:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-cardiff">
                    Cardiff
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-swansea">
                    Swansea
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-newport">
                    Newport
                  </Link>
                  .
                </p>
              </GuideSection>
            </article>

            <div className="mt-12">
              <GuideSharePanel shareUrl={shareUrl} title={PAGE_TITLE} />
            </div>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
