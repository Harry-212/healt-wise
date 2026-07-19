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
  "Best Weight Loss Treatment Reading: Thames Valley Guide to Safe, Effective Slimming";

export default function ReadingLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: "Reading practical overview" },
      { id: "access", label: "Why Reading shapes access" },
      { id: "pathways", label: "NHS versus private pathways" },
      { id: "glp1", label: "GLP 1 medication options" },
      { id: "timelines", label: "Reading timelines" },
      { id: "safety", label: "Safety checklist" },
      { id: "hacks", label: "Local Reading hacks" },
      { id: "advanced", label: "Advanced options" },
      { id: "mindset", label: "Behaviour and mindset" },
      { id: "tracking", label: "Tracking and traps" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Reading slimming journey" },
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
            href="/blog/topic/locations"
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
          <Link href="/blog/topic/locations" className={linkCls}>
            Locations
          </Link>
          <span>/</span>
          <span className={strong}>Reading</span>
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
        <BlogArticleColumn toc={toc} darkMode={darkMode}>
            <article className="space-y-8 leading-relaxed">
              <GuideSection
                darkMode={darkMode}
                id="intro"
                heading="Best weight loss treatment Reading: Thames Valley guide to safe, effective slimming"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Reading&apos;s vibrant Thames paths and bustling queues fuel
                  vitality. Yet Harrow Day treats or commuter pint stops nudge
                  scales. Best weight loss treatment in Reading means layered
                  paths blending local life with evidence, not magic jabs.
                </p>
                <p className={p}>
                  Best weight loss treatment Reading UK includes NHS and private
                  GLP 1 access such as Wegovy, Mounjaro, and Saxenda, local
                  tips, timelines for stone and 20kg loss, and safety guides for
                  Thames Valley slimming. If you are still comparing treatment
                  types, start with our{" "}
                  <Link
                    href="/compare/best-weight-loss-treatments-uk"
                    className={linkCls}
                  >
                    UK weight loss treatment comparison
                  </Link>{" "}
                  and check your baseline with the{" "}
                  <Link href="/tools/bmi-calculator" className={linkCls}>
                    BMI calculator
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="access"
                heading="Why Reading's mix shapes weight access"
              >
                <p className={p}>
                  Thames Valley data sits around 28% adult obesity in public
                  health summaries, and Reading&apos;s commuter hustle, London
                  rail links, and M4 traffic can curb activity while pie shops
                  tempt. NHS Berkshire West routes usually start with GP
                  referral first, and waits of 3 to 6 months for Tier 2
                  programmes such as diet and counselling can happen.
                </p>
                <p className={p}>
                  Private care is faster through online assessments or GP
                  consultations for Wegovy and other options. The nuance is that
                  eligibility can shift by BMI, comorbidities, and sometimes
                  ethnicity adjusted thresholds that adverts miss. You cannot
                  assume the fastest advert is the safest route.
                </p>
                <p className={p}>
                  A local hack is Thames Bank walking, which can burn around 300
                  calories per hour depending on pace and body size. Pair that
                  with market vegetable swaps from Cabbage Hill or nearby food
                  shops and the plan becomes easier to repeat.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="pathways"
                heading="Core pathways: NHS versus private in Reading"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  NHS care starts strong through GP referral to Berkshire
                  programmes. Dietitians can spot night shift patterns, common in
                  Reading factories and service work, that adverts miss. NICE
                  style structured support can produce meaningful yearly loss
                  when people stay engaged.
                </p>
                <p className={p}>
                  The trade off is patience. Referrals often log group meetings
                  monthly, not instant injections. Private care sharpens clarity:
                  prices, calendars, and courier tracking. Reading Weight Loss
                  Clinic style providers may offer medically supervised Wegovy
                  education, Mayfield Clinic style services can fast track GP
                  assessments for Mounjaro, and Fields Pharmacy style partners
                  can offer dashboards tracking steps and vitals.
                </p>
                <p className={p}>
                  But hesitation is healthy. Private care may skip shared care,
                  leaving your GP surgery out of the loop unless you ask. Do not
                  assume safety from social media adverts. Verify GPhC
                  registration and prescriber details before paying. Spire
                  Dunedin near Reading can offer consultant directed surgical and
                  non surgical routes such as gastric bypass, sleeve, or balloons
                  for selected people, but NHS criteria remain strict, often BMI
                  40 or higher.
                </p>
                <p className={p}>
                  Quick private paths can omit gallstone, pregnancy, and thyroid
                  conversations, so blunt questions are needed. If you compare
                  private GLP 1 routes, use our{" "}
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
                  </Link>{" "}
                  for a better view of monthly totals.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="glp1"
                heading="GLP 1 deep dive: Reading's medication options"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  GLP 1 medicines mimic gut hormones, slowing gastric emptying
                  and curbing appetite. Semaglutide, sold as Wegovy, is a weekly
                  pen and may be NHS eligible at BMI 35 or higher, or BMI 30 or
                  higher with diabetes or other comorbidities in some pathways.
                  Tirzepatide, sold as Mounjaro, combines GIP and GLP 1 action
                  and has shown around 20% loss in selected trials compared with
                  around 15% for Wegovy. Liraglutide, sold as Saxenda, is daily,
                  starter friendly, and averages lower results for many people.
                </p>
                <p className={p}>
                  Ozempic is semaglutide too, but is diabetes focused rather
                  than a pure weight loss product. UK prescribing rules and
                  product licensing matter. Unlicensed products are risky, so
                  demand a UK supply chain and clear clinician responsibility.
                </p>
                <p className={p}>
                  Side effects can include nausea, dehydration, and gallbladder
                  risks. Dose titration should be slow. It is impossible to
                  ignore that these medicines are not forever for everyone. Pair
                  them with a calorie deficit, often around 500 calories daily
                  where suitable, for about 1kg per week in selected people.
                  Berkshire clinic style care may include blood tests and
                  dietitian referrals for personalisation.
                </p>
                <p className={p}>
                  Kelly Clarkson style headlines are often GLP 1 plus habits,
                  but the UK version needs monitoring. Read{" "}
                  <Link href="/what-is-mounjaro" className={linkCls}>
                    what Mounjaro is
                  </Link>{" "}
                  and{" "}
                  <Link href="/what-is-wegovy" className={linkCls}>
                    what Wegovy is
                  </Link>{" "}
                  before booking a private consultation.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="timelines"
                heading="Timelines and realistic Reading goals"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  No 7 day stone plan is safe. That usually means dehydration and
                  muscle loss rather than sustainable fat loss. A safe pace is
                  often 0.5 to 1kg per week, with NICE style calorie deficits of
                  500 to 1,000 calories per day depending on the person.
                </p>
                <p className={p}>
                  A stone, or 6.35kg, in 6 weeks is aggressive. It needs about a
                  700 calorie daily cut, Thames HIIT, and close attention to
                  fatigue and muscle loss. A safer timeline is often 8 to 12
                  weeks. Tracking apps can improve adherence because they make
                  hidden snacks, drinks, and portions visible.
                </p>
                <p className={p}>
                  A 20kg target in 5 months can be feasible for selected people
                  at about 1kg per week with GLP 1 treatment, 150 minutes of
                  exercise weekly, strength work, and fortnightly weighs. A 5kg
                  quick target may take about 5 weeks at around 0.75kg per week
                  with vegetable and protein planning.
                </p>
                <p className={p}>
                  Plateaus can happen. Protein pulses, planned refeed strategies,
                  and careful review can help some people, but the foundation is
                  still calories, protein, movement, sleep, and monitoring.
                  Mounjaro has a slight data edge because of dual action, but
                  Wegovy&apos;s weekly simplicity wins for many people.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="safety"
                heading="Safety checklists: Reading residents' pre check"
              >
                <p className={p}>Before private GLP 1 treatment:</p>
                <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                  <li>Verify the GPhC prescriber and pharmacy registration.</li>
                  <li>Ask for the titration plan, nausea policy, and repeat bloods.</li>
                  <li>
                    Budget GBP200 or more per month including delivery, because
                    Mounjaro, Wegovy, and Saxenda prices vary.
                  </li>
                  <li>
                    Do not use GLP 1 treatment during pregnancy or when planning
                    pregnancy unless a clinician gives stopping advice.
                  </li>
                  <li>
                    Treat pancreatitis history or certain thyroid conditions as
                    reasons to pause and get medical clearance.
                  </li>
                  <li>
                    Start with NHS GP BMI and ethnicity assessment where
                    possible, and ask whether shared care can be arranged.
                  </li>
                </ul>
                <p className={p}>
                  Public scepticism is healthy. Cheap GLP 1 adverts can hide the
                  small print, excluding follow ups or blood tests. Read invoices
                  carefully. For a practical safety framework, read our{" "}
                  <Link
                    href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards"
                    className={linkCls}
                  >
                    UK pharmacy safety standards guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="hacks"
                heading="Local Reading hacks for momentum"
              >
                <p className={p}>
                  Thamesside paths can burn around 300 calories per hour for
                  some people. Cabbage Hill markets and local food shops can make
                  fresh lean meats and vegetables easier swaps than pasties or
                  high calorie lunches.
                </p>
                <p className={p}>
                  NHS groups can boost success because accountability makes
                  change scheduled. Rainy days can be covered with home circuits.
                  Protein first meals can improve satiety and make a calorie
                  deficit feel less punishing.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="advanced"
                heading="Advanced options: surgical and non surgical in Berkshire"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Bariatric surgery such as gastric bypass can produce 30 to 40%
                  loss in selected patients and is usually reserved for BMI 40 or
                  higher, or lower BMI with serious comorbidities. Sleeve
                  procedures and balloons can produce around 15 to 20% loss in
                  selected private settings such as consultant led Spire Dunedin
                  style care near Reading.
                </p>
                <p className={p}>
                  Surgery is for extremes, not a shortcut for everyone. Lifestyle
                  anchors still matter. The critique is that adverts may hype
                  fast stone loss while understating infection, recovery, and
                  long term follow up risk.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="mindset"
                heading="Behavior and mindset: Reading specific edges"
              >
                <p className={p}>
                  Work stress in Reading tech firms and commuter roles can raise
                  eating pressure. Meditation and stress management can improve
                  outcomes for some people because they reduce reactive snacking
                  and help protect sleep.
                </p>
                <p className={p}>
                  Logs and apps can improve retention because they replace
                  guesswork with feedback. A Reading style example is tracking
                  Castle Street walks and snacks, then finding the easy calorie
                  reductions without cutting entire food groups.
                </p>
                <p className={p}>
                  Vegetable volume fills without many calories, and 7 to 9 hours
                  sleep matters. Less than 7 hours can worsen cravings and hunger
                  for many people.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="tracking"
                heading="Tracking progress and dodging Reading traps"
              >
                <p className={p}>
                  Bioimpedance scans can be useful when interpreted carefully,
                  but waist size, clothes fit, blood pressure, energy, and food
                  consistency matter more than one scale reading. Humps and
                  stalls are normal, and some people use refeed days under
                  guidance rather than panicking.
                </p>
                <p className={p}>
                  Shakes and pills often promise more than they deliver.
                  Regulator warnings around unsafe products still matter. The
                  best maintenance usually comes from combinations that keep
                  working after 6 months, not one dramatic month.
                </p>
              </GuideSection>

              <section id="faq" className="scroll-mt-28">
                <h2 className={`text-xl font-semibold ${strong}`}>
                  FAQs on best weight loss treatment Reading
                </h2>
                <div className={`mt-6 space-y-8 text-sm ${p}`}>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      Can I buy Ozempic at Boots in Reading?
                    </h3>
                    <p className="mt-2">
                      No. Ozempic is prescription only. You must consult a GP or
                      private prescriber for diabetes or eligibility assessment.
                      Boots will not sell it without a prescription.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      What is the most successful weight loss treatment overall?
                    </h3>
                    <p className="mt-2">
                      Combined lifestyle support, calorie deficit, exercise, and
                      GLP 1 medicines when eligible tends to perform best, with
                      selected trials showing around 15 to 20% loss and better
                      long term sustainability than solo dieting.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      How to lose a stone, 6.35kg, in 6 weeks safely?
                    </h3>
                    <p className="mt-2">
                      That pace is aggressive. It may require around a 700
                      calorie daily deficit plus HIIT or Thames walks, but 8 to
                      12 weeks is safer for most people to reduce muscle loss,
                      fatigue, and rebound.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      Which is better: Mounjaro or Wegovy for Reading users?
                    </h3>
                    <p className="mt-2">
                      Mounjaro has a dual GIP and GLP 1 mechanism and often shows
                      a stronger loss signal in selected data. Wegovy is weekly,
                      proven, and may be simpler or better covered. Choose based
                      on clinical fit, tolerance, preference, and cost.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      How does NHS weight management work for Reading residents?
                    </h3>
                    <p className="mt-2">
                      It usually starts with GP referral to Berkshire programmes.
                      Diet and counselling support come first, with waits of
                      around 3 to 6 months possible. It is free and can support
                      meaningful yearly loss when followed consistently.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      What to check before private GLP 1 in Berkshire?
                    </h3>
                    <p className="mt-2">
                      Check GPhC registration, prescriber details, titration
                      plan, side effect policy, repeat blood tests, delivery
                      arrangements, and total monthly cost. Budget GBP200 or more
                      when delivery and follow up are included.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection
                darkMode={darkMode}
                id="conclusion"
                heading="Conclusion: Reading's empowered slimming journey"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Reading means NHS starts plus
                  private GLP 1 treatment if eligible, combined with local Thames
                  walks, market meals, and monitored safety. From stone quick
                  wins to 20kg marathons, Thames Valley renewal demands smart
                  steps.
                </p>
                <p className={p}>
                  Assess wisely and act safely. A fitter you awaits, but the
                  path should be registered, realistic, and built around the life
                  you actually live.
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
                    safety standards. This Reading guide is educational
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
                heading="Practical next steps for Reading residents"
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
                    href="/blog/best-weight-loss-treatment-in-oxford"
                    className={linkCls}
                  >
                    Oxford
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-london"
                    className={linkCls}
                  >
                    London
                  </Link>
                  .
                </p>
              </section>
            </article>

            <div className="mt-14">
              <GuideSharePanel
                url={shareUrl}
                title={PAGE_TITLE}
                description="Best weight loss treatment Reading UK: NHS and private GLP 1 access, local tips, timelines, and Thames Valley safety guidance."
              />
            </div>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
