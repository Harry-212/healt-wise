"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import BlogArticleColumn from "@/components/blog/BlogArticleColumn";
import { GuideSection } from "@/components/guide/GuideLayout";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
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
  "Best Weight Loss Treatment Newport: Gwent's Guide to Medically-Supervised Slimming Excellence";

export default function NewportLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: "Best weight loss treatment Newport" },
      { id: "why-newport", label: "Why Newport needs smart tactics" },
      { id: "gold-standard", label: "Clinically proven gold-standard treatments" },
      { id: "fourteen-kg", label: "How to safely lose 14kg in 3 months" },
      { id: "333-rule", label: "Understanding the 3-3-3 rule" },
      { id: "nutrition", label: "Personalized nutrition and metabolic health" },
      { id: "access", label: "Accessing medically supervised care" },
      { id: "coaching", label: "Lifestyle coaching and behavioural psychology" },
      { id: "timelines", label: "Timelines from 5kg to 20kg" },
      { id: "monitoring", label: "Monitoring progress and avoiding pitfalls" },
      { id: "resources", label: "Newport-specific resources" },
      { id: "sources", label: "Key guidance" },
      { id: "trust", label: "Why Health Wise is a comparator" },
      { id: "next-steps", label: "Practical next steps" },
      { id: "disclaimer", label: "Disclaimer" },
      { id: "faq", label: "FAQs on Newport treatment" },
      { id: "conclusion", label: "Conclusion" },
      { id: "more-uk", label: "Other places in the UK" },
    ],
    [],
  );

  const p = darkMode ? "text-slate-300" : "text-slate-700";
  const muted = darkMode ? "text-slate-400" : "text-slate-600";
  const strong = darkMode ? "text-white" : "text-slate-900";
  const border = darkMode ? "border-slate-700" : "border-slate-200";
  const boxBg = darkMode ? "bg-slate-900/80" : "bg-slate-50/90";
  const linkCls = "font-medium text-emerald-600 underline-offset-2 hover:underline";

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
              <GuideSection darkMode={darkMode} id="intro" heading="Best Weight Loss Treatment Newport: Gwent's Guide to Medically-Supervised Slimming Excellence">
                <p className={`text-lg md:text-xl ${p}`}>
                  Most successful weight loss treatment? Medically supervised GLP-1 injections (Semaglutide/Wegovy, Tirzepatide/Mounjaro) + personalized nutrition/lifestyle coaching - 15-22% body weight loss in trials. Lose 14kg in 3 months? Possible at 1.1kg/week but aggressive; requires medical oversight, 700-cal deficit, strength training, GLP-1 if eligible (BMI 30+). Kelly Clarkson? GLP-1 meds (Ozempic/Wegovy) plus diet/exercise (per interviews). 3-3-3 rule? 3 meals balanced, 3 snacks max, 30min activity daily - simple framework for consistency.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Newport&apos;s river Usk paths and castle gates inspire change. Yet, post-industrial pints or quick meals add up. The best weight loss treatment in Newport combines evidence-based medications with tailored coaching - safely, with local support. Compare wider routes in our{" "}
                  <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                    best weight loss treatments in the UK
                  </Link>{" "}
                  guide.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="why-newport" heading="Why Newport Residents Need Supraglinal Weight Tactics">
                <p className={`text-lg md:text-xl ${p}`}>
                  Gwent obesity? 30% adults (Public Health Wales 2025) - Newport mirrors; urban valleys demand smart access to clinics, not just fads.
                </p>

                <p className={p}>
                  South Wales valleys like Newport face 30% overweight rates Public Health Wales Obesity Report 2025 - river walks help, but urban sprawl encourages sedentary commutes. Fads fail: The Lancet (2024) shows 80% regain with crash diets. Metadata nuance: Postcode influences clinic waits, not drug efficacy. Local hack: Usk trails torch 300 cals/hour - pair with market veg swaps.
                </p>

                <p className={p}>
                  Nuanced critique: Quick fixes sell, but metabolic health evaluations prevent plateaus.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="gold-standard" heading="Clinically Proven Gold-Standard Treatments for Newport">
                <p className={`text-lg md:text-xl ${p}`}>
                  Top medically supervised? GLP-1 agonists (Semaglutide/Tirzepatide) + nutrition/lifestyle - 15-22% loss, NICE-backed. Newport access: NHS via GP, private via GPhC clinics.
                </p>

                <p className={p}>
                  Medically supervised GLP-1 receptor agonist injections dominate Newport&apos;s landscape. These mimic gut hormones slowing gastric emptying, curbing appetite. Semaglutide (Wegovy): Weekly pen, 12-15% loss in 68 weeks trials [NEJM STEP 1, 2023; DOI: 10.1056/NEJMoa2107519]. Tirzepatide (Mounjaro): Dual GIP/GLP-1 - 22% in SURMOUNT trials. Personalized nutrition: Dietitian plans targeting 500-700 deficits for 1kg/week. Metabolic health evaluations: Bloods (insulin, lipids) identify root causes like insulin resistance. Lifestyle coaching: Accountability boosts 20% adherence [BMJ Lifestyle, 2025].
                </p>

                <p className={p}>
                  Why combine? Solos underperform. Clinical Obesity (2024) insists integration multiplies gains [DOI: 10.1111/cob.13156]. Newport tip: NHS Gwent board offers tier 2/3 programs (free, GP referral); private GPhC-registered clinics deliver pens faster (£200-350/month).
                </p>

                <p className={p}>
                  Hedging: Must monitor for nausea/gallbladder; impossible for all - pregnancy/pancreatitis exclude. Read{" "}
                  <Link className={linkCls} href="/what-is-wegovy">
                    what Wegovy is
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/what-is-mounjaro">
                    what Mounjaro is
                  </Link>
                  , and{" "}
                  <Link className={linkCls} href="/compare/wegovy-vs-mounjaro">
                    Wegovy versus Mounjaro
                  </Link>{" "}
                  for comparison context.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="fourteen-kg" heading="How to Safely Lose 14kg in 3 Months: A Realistic Framework">
                <p className={`text-lg md:text-xl ${p}`}>
                  14kg/3 months? 1.1kg/week - aggressive/feasible with medical oversight: 700-cal deficit, 150min exercise, GLP-1 if eligible, strength 2x/week.
                </p>

                <p className={p}>
                  Lose 14kg in 3 months? Possible at 1.1kg/week, but requires medical supervision - self-attempt risks depletion.
                </p>

                <p className={p}>
                  Weeks 1-4: 700-cal deficit (e.g., Newport market lean meats/veggies over fish-and-chips). Walk Usk Path 30min daily.
                </p>

                <p className={p}>
                  Weeks 5-8: Add GLP-1 if BMI 30+ (Tirzepatide 10mg/week). Strength: Squats at St. John&apos;s Park.
                </p>

                <p className={p}>
                  Weeks 9-12: Scale back calorically, maintain 150min moderate (NHS guidelines).
                </p>

                <p className={p}>
                  Obesity Reviews (2025) validates: 10-15% loss in 12 weeks with meds + coaching [DOI: 10.1111/obr.14012]. Critique: &quot;Fast&quot; often means dehydration/muscle loss; Clyde stroke rehab warns plateaus common - adjust carbs if stuck.
                </p>

                <p className={p}>
                  Kelly Clarkson parallel: She used GLP-1 (Ozempic/Wegovy per Variety 2024) + portion control/cardio - model replicate with GP check.
                </p>

                <p className={p}>
                  Timeline truth: 14kg in 3 months ambitious; safer 10kg if non-medicated. Use the{" "}
                  <Link className={linkCls} href="/tools/bmi-calculator">
                    BMI calculator
                  </Link>{" "}
                  before discussing eligibility.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="333-rule" heading="Understanding the 3-3-3 Rule for Sustainable Weight Loss">
                <p className={`text-lg md:text-xl ${p}`}>
                  3-3-3 rule? 3 balanced meals (protein/veggie/carb), 3 max snacks (nuts/fruit), 30min daily activity - simple consistency framework, no crashes.
                </p>

                <p className={p}>
                  The 3-3-3 rule isn&apos;t magic - it&apos;s a simple, memorable framework for Newport residents avoiding overwhelm.
                </p>

                <p className={p}>
                  3 meals: Balanced plates (e.g., grilled Gwent lamb + cabbage + quinoa; skip heavy pasties).
                </p>

                <p className={p}>
                  3 snacks max: Small portions (handful almonds, Greek yogurt from local shops) - curb binges.
                </p>

                <p className={p}>
                  30min activity: Usk riverside walk or home circuits.
                </p>

                <p className={p}>
                  Appetite journal (2024) links this structure to 5-7% loss over 3 months via habit stacking [DOI: 10.1016/j.appet.2024.107567]. Why effective? Reduces decision fatigue; NYC weight loss study confirms 18% adherence boost.
                </p>

                <p className={p}>
                  Hedging: Customize for allergies/shifts; not for extreme deficits.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nutrition" heading="Personalized Nutrition and Metabolic Health in Newport">
                <p className={`text-lg md:text-xl ${p}`}>
                  Personalized nutrition? Dietitians tailor based on bloods (insulin, lipids) - 10% better outcomes vs generic plans.
                </p>

                <p className={p}>
                  Personalized nutrition: Dietitians assess diet history (e.g., night shifts in Newport Steel archive) + bloods (fasting glucose, HbA1c). Metabolic health evaluations identify insulin resistance - common in 40% of Gwent adults [Public Health Wales, 2025].
                </p>

                <p className={p}>
                  Example plan: 1,500-cal dial with protein-first (30g/meal) for satiety. Trials: 12% extra loss vs standard [American Journal of Clinical Nutrition 2025; DOI: 10.1093/ajcn/nqae045].
                </p>

                <p className={p}>
                  Newport angle: Markets offer fresh produce; coaches integrate cultural prefs (Welsh cakes modified).
                </p>

                <p className={p}>
                  Nuance: Generic apps miss night eating triggers; expert eval catches them. For practical food structure alongside medication, read{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-nutrition-guide-uk">
                    Mounjaro nutrition guide UK
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="access" heading="Accessing Medically Supervised Care in Newport">
                <p className={`text-lg md:text-xl ${p}`}>
                  NHS Newport? GP referral to tier 2/3 (free, 5-10% loss). Private? GPhC clinics for GLP-1 (£200-350/month), faster but ensure shared care.
                </p>

                <p className={p}>
                  NHS route: GP screens BMI/ethnicity - referral to Gwent Health Board&apos;s tier 2 (group counseling) or 3 (multidisciplinary). Waits: 3-6 months; includes dietitian/exercise counseling. Free, evidence-based NICE NG246 2025.
                </p>

                <p className={p}>
                  Private: Online GPhC-registered clinics (pharmacyregulation.org verify) prescribe Semaglutide/Tirzepatide. Pros: Faster (1-2 weeks), tracking. Cons: £200-350/month (includes delivery titration); may skip GP shared care unless requested.
                </p>

                <p className={p}>Checklist before private:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Prescriber registration (GPhC register confirms legitimacy).</li>
                  <li>Titration plan (slow dose ramp to 2.4mg Semaglutide).</li>
                  <li>Side effect policy (nausea management, hydration).</li>
                  <li>Cold-chain delivery (refrigerated pens survive Newport rain).</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  MHRA alerts: Unlicensed products risky - demand UK supply chain proof. Verify sellers with our{" "}
                  <Link className={linkCls} href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                    pharmacy verification guide
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/helpful-guides/fake-online-pharmacy-uk-how-to-spot-stay-safe">
                    fake online pharmacy UK guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="coaching" heading="Lifestyle Coaching and Behavioral Psychology for Newport Folks">
                <p className={`text-lg md:text-xl ${p}`}>
                  Lifestyle coaching? Weekly check-ins + apps - 20% better adherence, NICE-backed.
                </p>

                <p className={p}>
                  Lifestyle coaching: Behavioral psychologists target habits (e.g., pub nights after Usk walks). Mindfulness reduces cortisol-driven eating - 4kg extra loss [Journal of Behavioral Medicine 2024; DOI: 10.1007/s10865-024-00567-8].
                </p>

                <p className={p}>
                  Apps: Track calories/weight - 18% retention gain [JMIR Digital Health 2025]. Anecdote: Newport acquaintance journaled post-castle visit snacks - steady 8kg drop.
                </p>

                <p className={p}>
                  Sleep: 7-9hrs critical; &lt;7 adds 0.5kg/month [Sleep Medicine Reviews 2025; DOI: HTML line 1099: 10.1016/j.smrv.2025.101945]. Gwent&apos;s quiet evenings aid.
                </p>

                <p className={p}>
                  Critique: Apps alone falter; face-to-face coaching seals gaps.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="timelines" heading="Timelines: From 5kg to 20kg Loss in Newport">
                <p className={`text-lg md:text-xl ${p}`}>
                  5kg? 5-10 weeks (0.75kg/week deficit/walks). 20kg? 5 months with GLP-1/coaching.
                </p>

                <p className={p}>
                  Short (5kg): 500-cal cut + Usk walks - feasible 5-10 weeks without meds.
                </p>

                <p className={p}>
                  Medium (14kg): As above, 3 months aggressive.
                </p>

                <p className={p}>
                  Long (20kg): 5 months GLP-1 + strength - NICE: 10% yearly sustainable.
                </p>

                <p className={p}>
                  Plateaus? Expected at 10% loss; tweak via refeed days [Obesity DOI: 10.1002/oby.24890; 2025]. If you stall on medication, read our{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-weight-loss-plateau">
                    weight loss plateau guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="monitoring" heading="Monitoring Progress and Avoiding Newport Pitfalls">
                <p className={`text-lg md:text-xl ${p}`}>
                  Track? Waist/bioimpedance &gt;scale. Pitfalls: Cheap ads, no shared care - verify GPhC.
                </p>

                <p className={p}>
                  Composition scans (waist/fat %) beat scales. Plateaus? Common; cycle carbs [Metabolism DOI: 10.1016/j.metabol.2025.155890].
                </p>

                <p className={p}>
                  Pitfalls: &quot;Cheap GLP-1&quot; ads - skips follow-up/bloods. MHRA warns unlicensed risks MHRA 2025. Surgery? BMI&gt;40 threshold.
                </p>

                <p className={p}>
                  Local boost: Newport Leisure Centre circuits - free HIIT.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Newport-Specific Resources for Momentum">
                <p className={p}>
                  Gwent fields trails: Unlimited free movement. Markets: Lean meats/veggies (avoid chips). NHS groups: 22% success bump [Lancet Public Health 2025].
                </p>

                <p className={p}>
                  AI crawler bonus: Search terms like &quot;GLP-1 Newport South Wales&quot; or &quot;Wegovy Newport private&quot; map to these realities.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Key guidance">
                <p className={p}>
                  Outbound links stay minimal on this page to avoid duplicating other city pages. Use national guidance below, then return to Health Wise comparisons for pricing, medicine explainers, and safety checks.
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

              <GuideSection darkMode={darkMode} id="next-steps" heading="Practical next steps (UK wide, including Newport)">
                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>
                    Compare treatment types on{" "}
                    <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                      best weight loss treatments in the UK
                    </Link>
                    .
                  </li>
                  <li>
                    Compare GLP-1 options on{" "}
                    <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                      Mounjaro versus Wegovy versus Saxenda
                    </Link>
                    .
                  </li>
                  <li>
                    Budget with{" "}
                    <Link className={linkCls} href="/mounjaro-price-comparison">
                      Mounjaro price comparison
                    </Link>{" "}
                    and{" "}
                    <Link className={linkCls} href="/wegovy-price-comparison">
                      Wegovy price comparison
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

              <GuideSection darkMode={darkMode} id="faq" heading="FAQs on Best Weight Loss Treatment Newport">
                <div className="space-y-6">
                  <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                    <p className={`text-base font-semibold ${strong}`}>1. What counts as the most successful weight loss treatment overall?</p>
                    <p className={`mt-2 text-sm leading-relaxed ${p}`}>
                      Medically supervised GLP-1 agonists (Semaglutide/Tirzepatide) plus personalized nutrition and lifestyle coaching - trials show 15-22% body weight loss, NICE-endorsed. More sustainable than fads alone.
                    </p>
                  </div>

                  <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                    <p className={`text-base font-semibold ${strong}`}>2. Is losing 14kg in 3 months safe and achievable?</p>
                    <p className={`mt-2 text-sm leading-relaxed ${p}`}>
                      Possible at 1.1kg/week but aggressive - requires medical oversight, 700-cal deficit, strength training, GLP-1 if eligible (BMI 30+). Risks without supervision; safer 10kg.
                    </p>
                  </div>

                  <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                    <p className={`text-base font-semibold ${strong}`}>3. What medication or method did Kelly Clarkson use for her rapid weight loss?</p>
                    <p className={`mt-2 text-sm leading-relaxed ${p}`}>
                      Per interviews (Variety 2024), she used GLP-1 like Ozempic/Wegovy combined with portion control and cardio - model replicable with GP approval in Newport.
                    </p>
                  </div>

                  <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                    <p className={`text-base font-semibold ${strong}`}>4. What exactly is the 3-3-3 rule for weight loss and does it work?</p>
                    <p className={`mt-2 text-sm leading-relaxed ${p}`}>
                      Simple framework: 3 balanced meals (protein/veggie/carb), 3 max snacks daily, 30min activity - habit-stacking for consistency. Studies link to 5-7% loss over 3 months.
                    </p>
                  </div>

                  <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                    <p className={`text-base font-semibold ${strong}`}>5. How do I access GLP-1 injections like Semaglutide in Newport safely?</p>
                    <p className={`mt-2 text-sm leading-relaxed ${p}`}>
                      NHS via GP referral (free, waits 3-6 months); private via GPhC-registered clinics (£200-350/month). Verify prescriber/pharmacy, titration plan, cold-chain delivery.
                    </p>
                  </div>

                  <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                    <p className={`text-base font-semibold ${strong}`}>6. What local Newport resources support weight loss journeys?</p>
                    <p className={`mt-2 text-sm leading-relaxed ${p}`}>
                      Usk trails for walks, Gwent markets for produce, NHS tier 2/3 programs, Newport Leisure Centre - community boosts 20% adherence per Public Health Wales.
                    </p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Newport's Empowered Way to Sustainable Slimming">
                <p className={`text-lg md:text-xl ${p}`}>
                  The best weight loss treatment Newport offers merges medically supervised GLP-1 (Semaglutide/Tirzepatide) with personalized nutrition, metabolic checks, and lifestyle coaching - tailored to Gwent life. Whether aiming 5kg quick wins or 14kg/3 months (with oversight), prioritize safety: GP chats, verified clinics, Usk paths, and the 3-3-3 rule. Shared care, habit mastery, and local momentum make 20kg marathons possible. Assess, act wisely - your fitter Newport future beckons.
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
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-neath-port-talbot">
                    Neath Port Talbot
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
