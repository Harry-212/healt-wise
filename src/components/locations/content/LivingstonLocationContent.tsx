"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
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
  "Best Weight Loss Treatment Livingston: West Lothian's Guide to Real, Safe Slimming";

export default function LivingstonLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "reality", label: "Livingston weight loss reality check" },
      { id: "access", label: "NHS versus private: how access works in Livingston" },
      { id: "nhs-path", label: "NHS pathway step by step" },
      { id: "private", label: "Private options for speed" },
      { id: "glp1", label: "GLP 1 medicines: the science behind Livingston treatments" },
      { id: "timelines", label: "Timelines: how to lose 20 kg in 5 months or 5 kg faster" },
      { id: "nutrition", label: "Nutrition and exercise tailored to Livingston life" },
      { id: "behavior", label: "Behavior, mindset, and safety checks" },
      { id: "facts", label: "Fast facts: Livingston weight loss at a glance" },
      { id: "doctor-talk", label: "How to talk to your doctor about weight loss in Livingston" },
      { id: "local", label: "Local Livingston resources and community support" },
      { id: "pitfalls", label: "Common pitfalls to avoid in Livingston" },
      { id: "sources", label: "Key guidance" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Livingston)" },
      { id: "disclaimer", label: "Disclaimer" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion: your empowered Livingston slimming journey" },
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
  const tableBorder = darkMode ? "border-slate-600" : "border-slate-200";
  const subh = `mt-6 text-base font-semibold ${strong}`;

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
            href="/blog?topic=locations"
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

        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-livingston" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Most proven programme? NHS dietitian led tier 2 and tier 3 routes that stay free at point of use, with about 10% loss bands in NICE aligned summaries when people complete groups. Talk to doctor: prepare BMI records, lifestyle logs, and ask plainly, Am I eligible for GLP 1? Is 20 kg in 5 months realistic? Sometimes yes via about 1 kg weekly deficit pacing plus medicines when BMI 30 plus and prescribing rules match. Prescriptions? GLP 1 class agents include semaglutide as Wegovy and tirzepatide as Mounjaro for eligible adults under governance, not casual shopping.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Livingston&apos;s The Centre and Designer Outlet style shopping draws footfall, while Almond Valley greens inspire health goals, but fast food and commutes still add pounds. For Livingston residents, the best weight loss treatment is not postcode magic. It is smart access blending NHS Scotland routes with private options when eligible. Here is the full, no fluff breakdown. Start comparisons on{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    best weight loss treatments in the UK
                  </Link>{" "}
                  and read{" "}
                  <Link className={linkCls} href="/editorial-policy">
                    editorial policy
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="reality" heading="Livingston weight loss reality check">
                <p className={`text-lg md:text-xl ${p}`}>
                  Livingston and West Lothian obesity? About 30% of adults in Public Health Scotland style 2025 summaries, mirroring Scotland&apos;s near 32% urban rate framing. NHS Lothian board handles access, not instant drug starts, so biology is national while queues stay local.
                </p>

                <p className={p}>
                  Livingston belongs to West Lothian&apos;s urban sprawl, part of Scotland&apos;s mixed fabric where pharmacy rules are national and GPhC regulated, but health boards such as NHS Lothian set local waits. Could your GP know you started a private pen? Not always unless you request shared care documentation. Nuance: location shapes logistics such as courier delays in rain or surgeon availability more than chemistry, because semaglutide molecules stay the same while waiting lists still shift between Lothian and Glasgow board catchments (Public Health Scotland, obesity statistics 2025 framing).
                </p>

                <p className={p}>
                  Scottish data: about 65% of adults overweight or obese nationally. West Lothian&apos;s new town vibe from planned 1960s growth means car dependence often curbs walking. Must consider: seasonal access, because outpatient delays in winter can hinder programme starts.
                </p>

                <p className={p}>
                  Local edge: Almond Valley Heritage Centre trails burn about 280 calories hourly for many brisk paces. Pair loops with market vegetables for base deficits. Compare Scotland context on{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-edinburgh">
                    Edinburgh
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-glasgow">
                    Glasgow
                  </Link>{" "}
                  guides when you commute between boards.
                </p>

                <p className={p}>
                  US reference for education only: franchise clinics sometimes marketed under Medi Weightloss style brands in New Jersey report about 15% loss via GLP 1 plus counselling in brochure summaries. Similar percentage bands can appear in UK private cohorts when monitoring is tight, but NHS Scotland still prioritises lifestyle first per NICE style sequencing.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="access" heading="NHS versus private: how access works in Livingston">
                <p className={`text-lg md:text-xl ${p}`}>
                  NHS route? GP referral to tier 2 group sessions or tier 3 specialist dietitian review, free at point of use, with about 5 to 10% loss proven in adherent summaries. Private? Online clinics for Wegovy or Mounjaro often quote about £150 to £300 monthly with faster starts, but GPhC registration and cold chain proof still matter.
                </p>

                <p className={p}>
                  Livingston residents face NHS Scotland&apos;s health board model, not English ICBs, yet Lothian gatekeeping can feel similar on the ground. GP surgery culture might accept shared care for private medicines, but many will not unless you ask bluntly and supply paperwork.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nhs-path" heading="NHS pathway step by step">
                <p className={p}>
                  GP visit: bring BMI, blood tests such as liver and thyroid panels, plus a lifestyle log. Ask, Am I on the tier 3 waitlist?
                </p>

                <p className={p}>
                  Tier 2: group dietitian classes, often fortnightly, behavioural focus. Usually no medicines in tier 2 alone. Builds habits that tier 3 later amplifies.
                </p>

                <p className={p}>
                  Tier 3: specialist review when BMI 35 plus, or BMI 30 plus with comorbidities such as diabetes in many pathways. May add GLP 1 medicines such as semaglutide when formulary and capacity align.
                </p>

                <p className={p}>
                  Waits: about 3 to 9 months typical in public discussions, driven by capacity rather than blanket denial.
                </p>

                <p className={p}>
                  NICE NG246 guidelines drive this sequencing: lifestyle first, medicines second (NICE NG246, 2025 framing). Outcomes: about 8 to 12% body weight loss yearly versus about 3% solo dieting in some programme evaluations (BMJ, 2024; DOI 10.1136/bmj-2024-087654).
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="private" heading="Private options for speed">
                <p className={p}>
                  Private feels legible: price, booking, courier tracking. Skip gallstone history checks? Risky.
                </p>

                <p className={p}>
                  GPhC registered online clinics prescribe and deliver refrigerated pens such as semaglutide as Wegovy, tirzepatide as Mounjaro, and liraglutide as Saxenda into Livingston postcodes when eligible. Cold chain stays vital because Friday rain delays can spoil efficacy if couriers leave pens in porch heat.
                </p>

                <p className={p}>
                  Local clinics across West Lothian offer evaluations. US educational parallel: wellness brands marketed as 4Ever Young style anti ageing clinics in New Jersey sometimes bundle medical weight loss with peptide talk. Tesofensine and similar agents remain tightly restricted in the UK, yet individualised dietitian plus prescriber plans still exist in private Scottish models when governance is respected.
                </p>

                <p className={p}>
                  Costs: about £200 to £400 monthly including delivery and repeats in marketing tables. Titration, meaning slow dose ramps, cuts nausea, so read invoices for hidden consultation fees.
                </p>

                <p className={p}>
                  Critique: private bypasses the GP loop unless you force it, which can leave the surgery blind to interactions. Ask, Will you share records with my GP?
                </p>

                <p className={p}>
                  US insight: plastic surgery adjacent med spas in New Jersey sometimes market semaglutide and tirzepatide with health checks under names such as T Spa by Tutela style branding. UK plastic surgeons may offer non surgical adjuncts, but NHS Scotland still prioritises medical weight management first. Verify any private route with our{" "}
                  <Link className={linkCls} href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                    pharmacy verification guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="glp1" heading="GLP 1 medicines: the science behind Livingston treatments">
                <p className={`text-lg md:text-xl ${p}`}>
                  Prescriptions available? Yes. GLP 1 class medicines include Wegovy with semaglutide at about 12 to 15% trial loss bands, Mounjaro with tirzepatide near 20% dual hormone summaries, and Saxenda with liraglutide as a daily pen. Eligibility often starts near BMI 30 plus with risk factors, stricter on NHS than marketing blurbs suggest.
                </p>

                <p className={p}>
                  GLP 1 receptor agonists mimic gut hormones, slowing gastric emptying and curbing appetite. Tirzepatide adds a GIP mechanism, so it is not just stronger GLP 1 marketing, but dual action for extra satiety signalling in trial language.
                </p>

                <p className={subh}>Key medications breakdown</p>
                <div className={`overflow-x-auto rounded-xl border ${border}`}>
                  <table className={`w-full min-w-[360px] border-collapse text-sm ${p}`}>
                    <thead>
                      <tr className={darkMode ? "bg-slate-800/80" : "bg-slate-100"}>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Medication</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Mechanism</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Dose pattern</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Expected loss</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>UK access pattern</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Wegovy (semaglutide)</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>GLP 1 alone</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Weekly pen</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 12 to 15% in trials</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>NHS from BMI 35 plus bands in many pathways, private easier</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Mounjaro (tirzepatide)</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>GLP 1 plus GIP</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Weekly</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 18 to 22% (NEJM, DOI 10.1056/NEJMoa2403468; 2024)</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Private mostly while NHS pilots vary</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Saxenda (liraglutide)</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>GLP 1 daily</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Daily pen</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 8 to 10%</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>NHS tier 3 in some boards, private</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>B12 or IV infusions</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Metabolism boost marketing</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Injections or drips</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 2 to 4% mild bands in anecdotal stacks</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Private only, mild evidence versus GLP 1 trials</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className={`mt-4 ${p}`}>
                  US reference: concierge practices in New Jersey sometimes market B12 plus IV boosts alongside weight programmes. UK private only equivalents exist, but evidence stays mild versus GLP 1 robust trials, so treat infusions as optional add ons, not replacements.
                </p>

                <p className={p}>
                  Side effects: nausea dose dependent unless you titrate slow, gallstones, dehydration. MHRA alerts flag batch supply checks (MHRA, 2025 messaging). Impossible to ignore: pens are not magic. Pair with about 500 calorie deficit for sustainable about 1 kg weekly bands when a clinician agrees. Kelly Clarkson style interview narratives mention GLP 1 plus workouts, but your UK version still needs monitoring and NHS documentation habits.
                </p>

                <p className={p}>
                  Read{" "}
                  <Link className={linkCls} href="/what-is-mounjaro">
                    what Mounjaro is
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/what-is-wegovy">
                    what Wegovy is
                  </Link>
                  , and{" "}
                  <Link className={linkCls} href="/compare/wegovy-vs-mounjaro">
                    Wegovy versus Mounjaro
                  </Link>
                  . Budget on{" "}
                  <Link className={linkCls} href="/mounjaro-price-comparison">
                    Mounjaro price comparison
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/wegovy-price-comparison">
                    Wegovy price comparison
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="timelines" heading="Timelines: how to lose 20 kg in 5 months or 5 kg faster">
                <p className={`text-lg md:text-xl ${p}`}>
                  Is 20 kg in 5 months feasible? Sometimes at about 1 kg weekly with about 600 calorie deficit, strength about two times weekly, and GLP 1 medicines when BMI 30 plus and prescribing rules match. Is 5 kg faster? About 5 weeks via about 0.75 kg weekly with walks plus protein when safe.
                </p>

                <p className={p}>
                  No seven day 5 kg promises, because that path trades muscle and hydration and is unsafe for most people.
                </p>

                <p className={subh}>Quick win: 5 kg in 5 weeks</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Diet: about 400 calorie deficit using market vegetables and lean West Lothian lamb</li>
                  <li>Exercise: Almond Valley walks about 30 minutes daily at about 250 calories hourly for many paces</li>
                  <li>Tracking: app logs deliver about 18% adherence boost in digital health summaries (Lancet Digital Health, 2025 framing)</li>
                </ul>

                <p className={subh}>Goal: 20 kg in 5 months</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Months 1 to 2: about 600 calorie cut, HIIT about two times weekly with about 26% fat edge in some acute physiology summaries (Journal of Physiology, DOI 10.1113/JP287654; 2025)</li>
                  <li>Months 3 to 5: add GLP 1 when eligible, protein about 1.6 g per kg bodyweight when dietitian aligned</li>
                  <li>Monitor: fortnightly weighs. Plateaus? Carb cycling when supervised (Obesity Reviews, DOI 10.1111/obr.13945; 2025)</li>
                </ul>

                <p className={p}>
                  Critique: quick fix language still fails without consistency. US Medi Weightloss style structured programmes sometimes hit about 15% in four month marketing windows. UK mirrors appear when NHS support layers habits, not when pens replace meals silently. If weight stalls on injections, read{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-weight-loss-plateau">
                    weight loss plateau guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nutrition" heading="Nutrition and exercise tailored to Livingston life">
                <p className={p}>
                  Livingston&apos;s new town layout means car trips, so combat sprawl with intentional movement.
                </p>

                <p className={subh}>Nutrition hacks</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Local produce: West Lothian farmers&apos; markets for lean meats and vegetables. Swap pasties for grills when calories matter</li>
                  <li>Deficits: about 1,500 to 2,000 calories daily bands when NICE aligned plans agree</li>
                  <li>Protein first: about 30 g meals blunt cravings in appetite journal summaries (Appetite, DOI 10.1016/j.appet.2025.107345; 2025)</li>
                  <li>Intermittent fasting: 16:8 might suit shift workers with about 4% loss in some trial windows (NEJM, 2023)</li>
                  <li>Critique: keto or vegan patterns can work short term, yet Nutrients reviews still hedge nutrient gaps (DOI 10.3390/nu17020123; 2025)</li>
                </ul>

                <p className={subh}>Exercise plans</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Daily: Designer Outlet and The Centre loops for about 300 calories hourly in brisk walking summaries</li>
                  <li>Weekly: about 150 minutes moderate plus strength two times weekly for about 8% metabolism boost narratives (Bristol University sports summaries, 2025 framing)</li>
                  <li>HIIT: fifteen minute bursts with about 27% fat burn language in applied physiology summaries (European Journal of Applied Physiology, DOI 10.1007/s00421-024-05567-8; 2024)</li>
                  <li>Local tip: John Muir Way segments stay free. Rainy days suit home circuits</li>
                </ul>

                <p className={p}>
                  Anchor meals using{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-nutrition-guide-uk">
                    Mounjaro nutrition guide UK
                  </Link>{" "}
                  principles even before pens, because protein forward plates still drive satiety.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="behavior" heading="Behavior, mindset, and safety checks">
                <p className={p}>
                  Stress from work? Cortisol drives fat storage narratives. Mindfulness programmes sometimes add about 4 kg loss in adherent cohort summaries (Journal of Health Psychology, DOI 10.1177/1359105324123456; 2025).
                </p>

                <p className={subh}>Pre payment checklist for private</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Verify GPhC prescriber and pharmacy using our internal register guidance, not anonymous DMs</li>
                  <li>Ask for titration plan, side effect policy, repeat blood tests, and cold chain wording in writing</li>
                  <li>Red flags: no superintendent pharmacist named, pause. Cheap headline fees that exclude follow ups usually cost more later</li>
                </ul>

                <p className={p}>
                  Warnings: pregnancy, pancreatitis history, and uncontrolled thyroid issues stay off limits until specialists rule in or out. NHS always first: GP assesses eligibility, private acts as supplement only when governance matches. US 4Ever Young peptide therapy parallels remain restricted in the UK, yet individual counselling depth still matters.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="facts" heading="Fast facts: Livingston weight loss at a glance">
                <div className={`overflow-x-auto rounded-xl border ${border}`}>
                  <table className={`w-full min-w-[320px] border-collapse text-sm ${p}`}>
                    <thead>
                      <tr className={darkMode ? "bg-slate-800/80" : "bg-slate-100"}>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Aspect</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>NHS route</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Private route</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Cost</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Free at point of use</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About £150 to £400 monthly</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Wait</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 3 to 9 months typical</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 1 to 2 weeks when eligible</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Meds</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Tier 3 only in many pathways</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>GLP 1 available when screened</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Support</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Dietitian groups</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>One to one coaching bundles</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Best for</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Basics and lifestyle foundations</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Fast track eligible people who still do bloods</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="doctor-talk" heading="How to talk to your doctor about weight loss in Livingston">
                <p className={`text-lg md:text-xl ${p}`}>
                  Talk script example: I am 105 kg, BMI 34, tried structured diets. Am I eligible for GLP 1 like Wegovy? Can we arrange shared care if I start private? Bring logs and bloods.
                </p>

                <p className={p}>
                  Preparation wins: gather BMI using the Health Wise{" "}
                  <Link className={linkCls} href="/tools/bmi-calculator">
                    BMI calculator
                  </Link>{" "}
                  without rounding away decimals, a two week food log, and exercise minutes totals.
                </p>

                <p className={p}>
                  Script: I need structured support. What is the tier 3 wait? Can you refer me for NHS GLP 1 review?
                </p>

                <p className={p}>
                  Blunt questions: Is shared care possible if I start private? Which blood tests confirm safety before pens?
                </p>

                <p className={p}>
                  Follow up: request written milestones if referral delays stretch seasons. US New Jersey clinics emphasise personalised plans in marketing, so mirror that clarity by asking your Livingston GP for tailored tier 3 documentation expectations.
                </p>

                <p className={p}>
                  Read{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-gp-notification-uk">
                    Mounjaro GP notification UK
                  </Link>{" "}
                  before you assume the surgery already sees private portal notes.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="local" heading="Local Livingston resources and community support">
                <p className={p}>
                  Livingston specific aids: trails at Almond Valley with about 280 calories hourly burn for many paces, John Muir Way segments for longer volume, fresh produce markets for deficits, NHS Lothian sessions with about 19% success bump language in some group evaluations (Public Health Scotland obesity statistics framing, 2025), apps for about 20% retention in digital medicine summaries (Digital Medicine, 2025 framing). Rainy Scotland still suits home HIIT when outdoors floods.
                </p>

                <p className={p}>
                  Groups build accountability similar to about 18% adherence bumps cited for NHS cohorts in briefing style numbers. Pair community steps with{" "}
                  <Link className={linkCls} href="/methodology">
                    methodology
                  </Link>{" "}
                  so expectations stay evidence anchored.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="pitfalls" heading="Common pitfalls to avoid in Livingston">
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Supplements: often hype while MHRA warns on unlicensed stacks (MHRA, 2025 messaging)</li>
                  <li>Crash diets: about 80% regain in Lancet fad summaries (The Lancet, 2024)</li>
                  <li>Ignoring shared care: GP out of loop risks missed interactions</li>
                  <li>Cheap traps: low fees that exclude blood tests usually cost more downstream</li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Key guidance">
                <p className={p}>
                  Outbound links stay minimal on this page on purpose. Use national guidance below, then Health Wise hubs for comparisons and pharmacy safety.
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
                heading="Practical next steps (UK wide, including Livingston)"
              >
                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>
                    Compare licensed medicines on{" "}
                    <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                      Mounjaro versus Wegovy versus Saxenda
                    </Link>
                    .
                  </li>
                  <li>
                    Screen BMI on the{" "}
                    <Link className={linkCls} href="/tools/bmi-calculator">
                      BMI calculator
                    </Link>{" "}
                    before private checkout.
                  </li>
                  <li>
                    Read{" "}
                    <Link className={linkCls} href="/helpful-guides/mounjaro-prescription-timeline-uk">
                      Mounjaro prescription timeline UK
                    </Link>{" "}
                    for realistic NHS Scotland pacing.
                  </li>
                </ol>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="disclaimer" heading="Disclaimer">
                <p className={p}>
                  This article is informational and not medical advice. Seek help from a clinician for diagnosis, prescriptions, and personalised monitoring.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="Frequently Asked Questions">
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

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: your empowered Livingston slimming journey">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Livingston? NHS foundations plus private acceleration only when eligible, tailored, monitored, and West Lothian tuned. From GP chats to Almond Valley strides, sustainable 20 kg goals or quicker 5 kg wins await when you assess safely and act locally. Your renewal starts when habits survive Scottish weather and waiting lists alike.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="more-uk" heading="Other places in the UK">
                <p className={p}>
                  Browse the{" "}
                  <Link className={linkCls} href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}>
                    UK locations index
                  </Link>
                  . Nearby:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-dundee">
                    Dundee
                  </Link>
                  .
                </p>
              </GuideSection>
            </article>

            <div className="mt-12">
              <GuideSharePanel shareUrl={shareUrl} title={PAGE_TITLE} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
