"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
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
  "Best Weight Loss Treatment Plymouth: South West Guide to Real, Safe Results";

export default function PlymouthLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: "Plymouth practical overview" },
      { id: "why-tailored", label: "Why Plymouth needs tailored tactics" },
      { id: "tier-2", label: "NHS Tier 2 One You Plymouth" },
      { id: "tier-3", label: "NHS Tier 3 Livewell Southwest" },
      { id: "private", label: "Private GLP 1 options" },
      { id: "surgery", label: "Bariatric surgery" },
      { id: "glp1", label: "GLP 1 deep dive" },
      { id: "timelines", label: "Realistic timelines" },
      { id: "checklists", label: "Safe private checklist" },
      { id: "boosters", label: "Local Plymouth boosters" },
      { id: "keywords", label: "Search context" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Plymouth weight journey" },
      { id: "trust", label: "Why Health Wise is a comparator" },
      { id: "next-steps", label: "Practical next steps" },
      { id: "disclaimer", label: "Disclaimer" },
      { id: "more-uk", label: "Other places in the UK" },
    ],
    [],
  );

  const p = darkMode ? "text-slate-300" : "text-slate-700";
  const muted = darkMode ? "text-slate-400" : "text-slate-600";
  const strong = darkMode ? "text-white" : "text-slate-900";
  const border = darkMode ? "border-slate-700" : "border-slate-200";
  const boxBg = darkMode ? "bg-slate-900/80" : "bg-slate-50/90";
  const linkCls =
    "font-medium text-emerald-600 underline-offset-2 hover:underline";

  return (
    <div
      className={`w-full font-sans transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-slate-300" : "bg-white text-slate-800"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/blog?topic=locations"
            className={`flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-75 ${
              darkMode ? "text-slate-300" : "text-slate-900"
            }`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                darkMode ? "bg-slate-800" : "bg-slate-100"
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
            </div>
            Back to News
          </Link>

          <div className="flex items-center gap-3">
            <Moon
              className={`h-4 w-4 ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            />
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`relative flex h-6 w-12 items-center rounded-full p-1 shadow-inner transition-colors ${
                darkMode ? "bg-slate-700" : "bg-slate-200"
              }`}
              aria-label="Toggle dark mode"
            >
              <div
                className={`h-4 w-4 rounded-full shadow transition-all ${
                  darkMode
                    ? "translate-x-6 bg-slate-900"
                    : "translate-x-0 bg-white"
                }`}
              />
            </button>
            <Sun
              className={`h-4 w-4 ${
                darkMode ? "text-yellow-400" : "text-slate-400"
              }`}
            />
          </div>
        </div>

        <nav
          aria-label="Breadcrumb"
          className={`mb-8 flex flex-wrap items-center gap-2 text-xs font-medium ${muted}`}
        >
          <Link href="/" className={linkCls}>
            Home
          </Link>
          <span>/</span>
          <Link href="/blog?topic=locations" className={linkCls}>
            Locations
          </Link>
          <span>/</span>
          <span className={strong}>Plymouth</span>
        </nav>

        <header className="mb-12">
          <p className="mb-2 text-xs font-semibold tracking-wide text-emerald-600">
            {capitalizeHeadingWords("Locations in UK")}
          </p>
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            {PAGE_TITLE}
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${muted}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {nation}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Independent guide · June 2026
            </span>
          </div>

          <BlogArticleHeroImage src={hero.url} alt={hero.alt} />
          <div
            id="guide-article-hero-end"
            aria-hidden
            className="pointer-events-none h-0 w-full overflow-hidden"
          />
        </header>

        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          <GuideTocSidebar key="uk-loc-toc-plymouth" toc={toc} />

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection
                darkMode={darkMode}
                id="intro"
                heading="Best weight loss treatment Plymouth: South West guide to real, safe results"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Plymouth&apos;s harbor breezes and Hoe promenades inspire
                  change, yet steak and kidney pies or cruise day indulgences add
                  pounds. The best weight loss treatment in Plymouth is not one
                  thing. It is layered pathways: free NHS tiers for lifestyle
                  foundations, private medicines for faster gates, all anchored
                  in local resilience.
                </p>
                <p className={p}>
                  Location shapes access, from Devonport clinics to Sutton
                  Harbour online picks, not biology. Best weight loss treatment
                  Plymouth means free NHS programmes such as One You and
                  Livewell, private options such as Mounjaro and Wegovy,
                  realistic timelines for 2 stone loss, and Devon specific tips
                  that actually fit normal life.
                </p>
                <p className={p}>
                  If you want to compare treatment categories before choosing a
                  local route, start with our{" "}
                  <Link
                    href="/compare/best-weight-loss-treatments-uk"
                    className={linkCls}
                  >
                    UK weight loss treatment comparison
                  </Link>{" "}
                  and use the{" "}
                  <Link href="/tools/bmi-calculator" className={linkCls}>
                    BMI calculator
                  </Link>{" "}
                  before speaking with your GP or a private clinic.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="why-tailored"
                heading="Why Plymouth needs tailored weight tactics"
              >
                <p className={p}>
                  NHS Devon data flags South West overweight at around 64%, with
                  Plymouth&apos;s urban port mix meaning transport to Cumberland
                  Centre can be tricky. Cruise tourism or fish and chip stops
                  tempt. Fads like detox teas can look appealing, but rebound
                  rates after short term diets are a known concern in weight
                  management research.
                </p>
                <p className={p}>
                  Nuance matters. Harbour strolls help, but desk shifts hinder.
                  Could private care bridge waits? Possibly, but GP oversight
                  keeps it safer. The most sensible Plymouth plan usually works
                  with your actual routine, not an ideal week that never
                  happens.
                </p>
                <p className={p}>
                  A local hack is to use Hoe cliff walks, which can burn around
                  280 calories per hour depending on pace and body size. Pairing
                  that with lean fish from local markets makes easy swaps feel
                  more local and less like punishment.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="tier-2"
                heading="NHS Tier 2: One You Plymouth, starter friendly"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  If you are registered with a Plymouth GP, Tier 2 starts with
                  One You Plymouth&apos;s Wellness and Weight Loss Programme. It
                  is free, runs for 12 weeks, and can be accessed by self
                  referral online or a GP chat for people aged 16 and above with
                  BMI 25.5 or higher, or 23 or higher for some BAME groups.
                </p>
                <p className={p}>
                  The focus is diet, behaviour, and lifestyle, with no
                  injections. NICE backed group sessions commonly produce around
                  4 to 6% loss over 6 months for people who engage consistently.
                  This is the starter friendly option for many Plymouth
                  residents because it is free, structured, and lower risk.
                </p>
                <p className={p}>
                  The critique is simple: there is no pharmacotherapy. It is most
                  useful for mild excess weight or for people who feel wary of
                  injections and want a foundation first. Practical sessions at
                  local community hubs and app based tracking can make it easier
                  to keep the habit alive between appointments.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="tier-3"
                heading="NHS Tier 3: Livewell Southwest, intensive clinical support"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Tier 3 ramps up through Livewell Southwest at Devonport&apos;s
                  Cumberland Centre. This route is multidisciplinary, involving
                  specialist nurses, dietitians, psychologists, and
                  physiotherapists where appropriate. It is usually for higher
                  BMIs, often 35 or above, or weight linked conditions such as
                  type 2 diabetes.
                </p>
                <p className={p}>
                  The route requires GP referral, with waits of 3 to 6 months
                  typical. Evidence for multidisciplinary programmes supports
                  around 10 to 15% sustained loss in selected groups, often
                  superior to solo dieting because the programme can address
                  food, mood, mobility, and medical risk together.
                </p>
                <p className={p}>
                  The nuance is that Tier 3 can be demanding, often with regular
                  or fortnightly meetings. That may challenge shift workers or
                  people with caring duties. The Plymouth spin is to pair the
                  programme with Dockyard trails or physio guided moves, so the
                  clinical plan becomes something you can repeat locally.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="private"
                heading="Private options: GLP 1 injections and structured programmes"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  NHS waits drive some people toward private care. Medically
                  supervised injections like Mounjaro, Wegovy, and Ozempic style
                  semaglutide brands may be accessed through Plymouth private
                  clinics, including private GP appointment models such as
                  Mayfield Clinic style services. Structured lifestyle packages
                  may sit alongside the prescription.
                </p>
                <p className={p}>
                  Private access can beat NHS timelines through online
                  consultations and courier delivery to Plymouth. Costs often sit
                  around GBP150 to GBP300 per month for medication plus delivery,
                  depending on dose and provider. If you need to compare likely
                  private costs, use our{" "}
                  <Link href="/mounjaro-price-comparison" className={linkCls}>
                    Mounjaro price comparison
                  </Link>
                  ,{" "}
                  <Link href="/wegovy-price-comparison" className={linkCls}>
                    Wegovy price comparison
                  </Link>
                  , and{" "}
                  <Link href="/saxenda-price-comparison" className={linkCls}>
                    Saxenda price comparison
                  </Link>
                  .
                </p>
                <p className={p}>
                  Hedging matters. Medicines are not for everyone. Pregnancy
                  planning, pancreatitis history, and certain thyroid histories
                  can make GLP 1 treatment unsuitable. Regulated pharmacies
                  should handle cold chain delivery and clinical checks. If a
                  provider skips these basics, the convenience is not worth the
                  risk.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="surgery"
                heading="Bariatric surgery: when programmes fall short"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  For severe obesity, bariatric surgery such as gastric bypass
                  may be available through Plymouth hospitals via NHS referral.
                  Typical criteria include BMI 40 or higher, or BMI 35 or higher
                  with comorbidities after lifestyle trials.
                </p>
                <p className={p}>
                  Surgery is often the most effective long term intervention,
                  with 20 to 30% loss possible in selected patients. But it is
                  invasive, with risks such as infection, leaks, nutrient
                  deficiencies, and a significant recovery period. It also
                  requires lifelong follow up and supplements.
                </p>
                <p className={p}>
                  The critique is that bariatric surgery is not first line. A
                  lifestyle foundation is mandatory, not because lifestyle alone
                  always solves the problem, but because surgery still depends on
                  eating patterns, follow up, and long term monitoring.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="glp1"
                heading="GLP 1 deep dive: what fits Plymouth life?"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  GLP 1 agonists mimic gut hormones and slow gastric emptying.
                  They can reduce appetite and make a calorie deficit easier to
                  sustain. For Plymouth residents comparing options, the main
                  names are Wegovy, Mounjaro, and Ozempic style semaglutide
                  brands.
                </p>
                <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                  <li>
                    Wegovy, or semaglutide, is a weekly injection. NHS
                    eligibility often centres on BMI 35 or higher, or BMI 30 or
                    higher with health issues in some pathways. Trials report
                    around 15% average loss in selected groups.
                  </li>
                  <li>
                    Mounjaro, or tirzepatide, acts on both GIP and GLP 1
                    pathways. The dual action can create extra satiety, and
                    selected trial data reports around 20% loss.
                  </li>
                  <li>
                    Ozempic is a semaglutide diabetes brand. Weight management
                    variants are similar in mechanism to Wegovy, but prescribing
                    rules and product licensing matter.
                  </li>
                </ul>
                <p className={p}>
                  Side effects include nausea, especially if titration is too
                  fast, plus possible gallbladder concerns. It is impossible to
                  ignore the basics: pair medication with a calorie deficit, such
                  as around 500 calories per day where suitable, for about 1lb
                  per week in many people. A Kelly Clarkson style story may be
                  GLP 1 plus habits, but the UK version needs monitoring.
                </p>
                <p className={p}>
                  If you are still learning the medicine names, read{" "}
                  <Link href="/what-is-mounjaro" className={linkCls}>
                    what Mounjaro is
                  </Link>{" "}
                  and{" "}
                  <Link href="/what-is-wegovy" className={linkCls}>
                    what Wegovy is
                  </Link>{" "}
                  before you pay for a private consultation.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="timelines"
                heading="Realistic timelines and Plymouth plans"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  No haste. A 2 stone loss, or 28lb, in 12 weeks is too rapid
                  for most people and increases risk. NHS style pacing is closer
                  to 1lb per week for many adults, which puts 2 stone at around
                  28 weeks, or 7 months.
                </p>
                <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                  <li>
                    Quick target, 5kg or 11lb: about 5 weeks through a 400
                    calorie cut and regular Hoe walks for suitable people.
                  </li>
                  <li>
                    High target, 2 stone or 28lb: about 28 weeks through NHS
                    support, private medicines if eligible, and steady habits.
                  </li>
                  <li>
                    Larger target, 20kg or 44lb: around 5 months for selected
                    people with GLP 1 support plus strength training and
                    monitoring.
                  </li>
                </ul>
                <p className={p}>
                  Plateaus are normal. Some people use refeed strategies or
                  carbohydrate cycling with professional guidance, but the main
                  levers remain food structure, activity, sleep, and follow up.
                  If your progress stalls on injections, our{" "}
                  <Link
                    href="/helpful-guides/mounjaro-weight-loss-plateau"
                    className={linkCls}
                  >
                    Mounjaro plateau guide
                  </Link>{" "}
                  can help you plan the next questions.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="checklists"
                heading="Checklists: safe private steps for Plymouth"
              >
                <p className={p}>Before private care:</p>
                <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                  <li>
                    Verify the GPhC prescriber and pharmacy registration.
                  </li>
                  <li>
                    Ask about titration, nausea policy, and blood tests.
                  </li>
                  <li>
                    Budget around GBP200 or more per month for a fuller package
                    including medication, delivery, and follow up.
                  </li>
                  <li>
                    Consider NHS first through a GP BMI calculation, with shared
                    care possible later if a clinician agrees.
                  </li>
                  <li>
                    Avoid GLP 1 treatment during pregnancy or when planning
                    pregnancy unless a clinician gives stopping advice.
                  </li>
                  <li>
                    Treat thyroid history, pancreatitis history, or serious
                    gastrointestinal problems as warning signs that need medical
                    clearance.
                  </li>
                </ul>
                <p className={p}>
                  For a practical provider checklist, read our guide to{" "}
                  <Link
                    href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards"
                    className={linkCls}
                  >
                    UK pharmacy safety standards
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="boosters"
                heading="Local Plymouth boosters"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Plymouth local hacks can make a plan feel less clinical and
                  more repeatable. Hoe prom walks can burn around 300 calories
                  per hour for some people. Brixham Harbour and local markets
                  make lean fish and vegetables easier swaps. NHS groups can add
                  structure and stickiness.
                </p>
                <p className={p}>
                  Rainy days do not need to pause the plan. Indoor HIIT, home
                  circuits, or resistance work can cover the gap when the weather
                  makes outdoor walking less appealing. The goal is not to become
                  perfect. It is to make the next default choice slightly better
                  than the last one.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="keywords"
                heading="Search context for Plymouth readers"
              >
                <p className={p}>
                  This guide is written around the real phrases people use when
                  comparing care: Plymouth weight management NHS, South West
                  private GLP 1, Devonport slimming clinics, sustainable fat
                  loss Plymouth, Tier 3 Plymouth weight, Mounjaro Plymouth
                  price, and Wegovy versus Ozempic UK. The search language is
                  useful only when it leads back to a safe plan and a registered
                  clinician.
                </p>
              </GuideSection>

              <section id="faq" className="scroll-mt-28">
                <h2 className={`text-xl font-semibold ${strong}`}>
                  FAQs on best weight loss treatment Plymouth
                </h2>
                <div className={`mt-6 space-y-8 text-sm ${p}`}>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      Which is the most effective weight loss treatment overall?
                    </h3>
                    <p className="mt-2">
                      Multi disciplinary supervised combinations, such as NHS
                      Tier 3 plus GLP 1 treatment if eligible, can yield around
                      15 to 20% sustained loss in selected patients. These
                      approaches tend to outperform solo diets because they
                      combine food planning, behavioural support, medical review,
                      and movement.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      Can I buy Ozempic at Boots pharmacy in Plymouth?
                    </h3>
                    <p className="mt-2">
                      No. Ozempic is prescription only. Boots may sell over the
                      counter supplements, but not prescription injections
                      without a clinician. A private GP or registered prescriber
                      is needed for legal access.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      What is a cheaper alternative to Mounjaro in Plymouth?
                    </h3>
                    <p className="mt-2">
                      Wegovy, based on semaglutide, is often cheaper than
                      Mounjaro by about GBP50 to GBP100 per month depending on
                      dose and provider. Saxenda is a daily option and can be
                      milder, but compare full totals including delivery and
                      follow up.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      How to lose 2 stone in 12 weeks via NHS safely?
                    </h3>
                    <p className="mt-2">
                      It is not usually safe or realistic. A steadier target is
                      around 1lb per week, meaning 2 stone is closer to 28 weeks.
                      NHS support is designed to build safe pace, preserve
                      muscle, and reduce rebound risk.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      Is private GLP 1 better than NHS One You Plymouth?
                    </h3>
                    <p className="mt-2">
                      NHS support is free and safer as a foundation for many
                      people. Private GLP 1 treatment can be faster and includes
                      medicines if you are eligible. The strongest route may be
                      NHS foundation first, with private add on only when it is
                      clinically suitable and properly monitored.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      What if the NHS Tier 3 waitlist is long in Devonport?
                    </h3>
                    <p className="mt-2">
                      Private care can bridge the gap, but ask your GP about
                      shared care and follow up before you start. If a private
                      provider will not explain side effects, blood tests, or
                      prescribing responsibility, pause before paying.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection
                darkMode={darkMode}
                id="conclusion"
                heading="Conclusion: Plymouth's empowered weight journey"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Plymouth is tiered and local smart:
                  NHS foundations through One You and Livewell, GLP 1 treatment
                  for boosts when eligible, and surgery for extreme cases. From
                  Hoe hikes to market swaps, sustainable Plymouth wins start
                  informed.
                </p>
                <p className={p}>
                  Assess your path carefully. The safest result comes from a
                  registered clinician, realistic expectations, and habits that
                  still fit your life after the first month. Your harbor ready
                  self awaits.
                </p>
              </GuideSection>

              <section
                id="trust"
                className={`scroll-mt-28 rounded-xl border p-5 ${border} ${boxBg}`}
              >
                <h2 className={`text-xl font-semibold ${strong}`}>
                  Why Health Wise is a comparator, not a prescriber
                </h2>
                <div className={`mt-4 space-y-3 text-sm ${p}`}>
                  <p>
                    We compare UK weight loss providers, price signals, and
                    safety standards. This Plymouth guide is educational
                    information, not a prescription, diagnosis, or replacement
                    for your GP.
                  </p>
                  <p className={muted}>
                    Read our{" "}
                    <Link href="/methodology" className={linkCls}>
                      methodology
                    </Link>{" "}
                    and{" "}
                    <Link href="/editorial-policy" className={linkCls}>
                      editorial policy
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <GuideSection
                darkMode={darkMode}
                id="next-steps"
                heading="Practical next steps for Plymouth residents"
              >
                <ul className={`list-none space-y-2.5 text-sm ${p}`}>
                  <li>
                    <Link
                      href="/compare/best-weight-loss-treatments-uk"
                      className={linkCls}
                    >
                      Compare best weight loss treatments in the UK
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/bmi-calculator" className={linkCls}>
                      Check your BMI before a GP or clinic appointment
                    </Link>
                  </li>
                  <li>
                    <Link href="/mounjaro-price-comparison" className={linkCls}>
                      Mounjaro price comparison
                    </Link>
                    <span className={muted}> · </span>
                    <Link href="/wegovy-price-comparison" className={linkCls}>
                      Wegovy price comparison
                    </Link>
                    <span className={muted}> · </span>
                    <Link href="/saxenda-price-comparison" className={linkCls}>
                      Saxenda price comparison
                    </Link>
                  </li>
                </ul>
              </GuideSection>

              <section
                id="disclaimer"
                className="scroll-mt-28 rounded-xl border border-amber-200 bg-amber-50/90 p-4 text-sm leading-relaxed text-amber-950"
              >
                <h2 className="text-xl font-semibold text-amber-950">
                  Disclaimer
                </h2>
                <p className="mt-2">
                  This page is general information. Prescription medicines must
                  be issued by a qualified clinician who can take responsibility
                  for follow up. If you are pregnant, planning pregnancy, or have
                  a history of pancreatitis, gallbladder symptoms, or certain
                  thyroid conditions, some options may not be suitable.
                </p>
              </section>

              <section
                id="more-uk"
                className={`scroll-mt-28 rounded-xl border p-5 text-sm ${border} ${
                  darkMode ? "bg-slate-900/60" : "bg-slate-50"
                }`}
              >
                <h2 className={`text-xl font-semibold ${strong}`}>
                  Other places in the UK
                </h2>
                <p className={`mt-2 leading-relaxed ${p}`}>
                  Browse every UK city guide{" "}
                  <Link
                    href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}
                    className={linkCls}
                  >
                    All UK location articles
                  </Link>
                  , or compare nearby guides for{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-exeter"
                    className={linkCls}
                  >
                    Exeter
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-truro"
                    className={linkCls}
                  >
                    Truro
                  </Link>
                  , and{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-bournemouth"
                    className={linkCls}
                  >
                    Bournemouth
                  </Link>
                  .
                </p>
              </section>
            </article>

            <div className="mt-14">
              <GuideSharePanel
                url={shareUrl}
                title={PAGE_TITLE}
                description="Best weight loss treatment Plymouth: free NHS programmes, private Mounjaro and Wegovy options, timelines, and Devon tips."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
