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
  "Best Weight Loss Treatment Preston: Lancashire's Complete Guide to Safe, Real Results";

export default function PrestonLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: "Preston practical overview" },
      { id: "landscape", label: "Preston weight landscape" },
      { id: "pathways", label: "NHS versus private pathways" },
      { id: "glp1", label: "GLP 1 deep dive" },
      { id: "timelines", label: "Realistic timelines" },
      { id: "community", label: "Community and lifestyle" },
      { id: "safety", label: "Private clinic vetting" },
      { id: "gap", label: "Why this guide helps" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "clinics", label: "Local clinic highlights" },
      { id: "psychology", label: "Psychological and habit edges" },
      { id: "metrics", label: "Metrics and pitfalls" },
      { id: "conclusion", label: "Preston transformation" },
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
          <span className={strong}>Preston</span>
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
          <GuideTocSidebar key="uk-loc-toc-preston" toc={toc} />

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection
                darkMode={darkMode}
                id="intro"
                heading="Best weight loss treatment Preston: Lancashire's complete guide to safe, real results"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Preston&apos;s bustling Market Street, Regent Park trails, and
                  Lancashire heritage fuel health goals. But quick snacks or
                  shifts add pounds. What is the best weight loss treatment in
                  Preston? Grounded strategies blending local access, NHS paths,
                  and private GLP 1 insights, with no fads and real science.
                </p>
                <p className={p}>
                  Best weight loss treatment Preston means comparing NHS and
                  private options such as Mounjaro and Wegovy, local clinics,
                  safety tips, timelines for 5kg and 20kg loss, and sustainable
                  slimming Preston UK habits. Before paying privately, compare
                  the national treatment landscape through our{" "}
                  <Link
                    href="/compare/best-weight-loss-treatments-uk"
                    className={linkCls}
                  >
                    UK weight loss treatment comparison
                  </Link>{" "}
                  and check your starting point with the{" "}
                  <Link href="/tools/bmi-calculator" className={linkCls}>
                    BMI calculator
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="landscape"
                heading="Preston's weight landscape: why access trumps postcode"
              >
                <p className={p}>
                  Lancashire data shows around 30% adult obesity, and
                  Preston&apos;s urban mix means travel to clinics, including
                  Plungington Road pharmacies, can shape speed. Could private
                  care speed access? Possibly, but GP involvement helps maintain
                  safety loops.
                </p>
                <p className={p}>
                  The nuance is that NHS boards prioritise lifestyle tiers first,
                  with medicines following documented efforts. Postcode does not
                  rewrite biology, but it can change appointment timing, travel
                  friction, and how easily follow up happens.
                </p>
                <p className={p}>
                  A local hack is Preston Market&apos;s fresh fish and
                  vegetables. Swapping pasties for grilled plaice can save
                  calories, while hourly Harris Park loops can turn movement into
                  a routine rather than a special event.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="pathways"
                heading="NHS versus private: your Preston pathways"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  NHS North West Lancashire routes usually start with a GP for
                  Tier 2 or Tier 3 referral, including free dietitian groups and
                  counselling. Waits of 4 to 7 months can be typical, but
                  structured support can help people reach meaningful yearly
                  losses and build safer habits.
                </p>
                <p className={p}>
                  The NHS route usually expects you to try basics first. Private
                  care can skip some waiting, but it should not skip clinical
                  checks. Private Preston clinics may include face to face
                  pharmacist or GP consultations rather than online rushes.
                  Examples locally include DDL Davies Pharmacy on Plungington
                  Road stocking Wegovy and Mounjaro pens, NHL Pharmacy on New
                  Hall Lane offering clinician plans, Broadway Pharmacy on
                  Garstang Road monitoring injections, My Private Clinic in
                  Fulwood giving GP access without NHS referral, and Diet UK on
                  Fishergate offering programmes and appetite suppressants.
                </p>
                <p className={p}>
                  Private care is faster and may cost GBP200 or more per month,
                  but you still need to check GPhC registration and cold chain
                  delivery for refrigerated pens. If you are comparing private
                  routes, use our{" "}
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
                  to look beyond headline pricing.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="glp1"
                heading="GLP 1 deep dive: Preston access to Mounjaro, Wegovy, and Saxenda"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  GLP 1 medicines mimic gut hormones and delay stomach emptying.
                  Wegovy is a weekly semaglutide pen and may be NHS eligible for
                  BMI 35 or higher, or BMI 30 or higher with comorbidities in
                  some pathways. Mounjaro is tirzepatide with dual action, and
                  selected trials show around 20% body weight loss. Saxenda is a
                  daily option with a milder onset.
                </p>
                <p className={p}>
                  Side effects can include nausea, especially during dose
                  increases, and gallstone risk should be discussed. GP bloods
                  are key, especially if you use private care. It is impossible
                  to ignore that these medicines work best with a calorie
                  deficit, often around 500 calories daily where suitable, plus
                  movement and enough protein.
                </p>
                <p className={p}>
                  Which is most effective? GLP 1 treatment plus habits usually
                  outperforms solo attempts. Mounjaro has a dual mechanism and
                  strong trial data, but Wegovy can be more cost effective and
                  suitable for many people. If you are still learning the
                  medicines, read{" "}
                  <Link href="/what-is-mounjaro" className={linkCls}>
                    what Mounjaro is
                  </Link>{" "}
                  and{" "}
                  <Link href="/what-is-wegovy" className={linkCls}>
                    what Wegovy is
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="timelines"
                heading="Timelines: Preston realities for 5kg and 20kg loss"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  No 7 day 5kg plan is safe. That usually means dehydration or
                  muscle loss. A safer pace is 0.5 to 1kg per week for many
                  adults, depending on starting weight, medical history, and
                  adherence.
                </p>
                <p className={p}>
                  A 5kg short target may take 5 to 7 weeks with a daily 400
                  calorie deficit, park circuits, and tracking. App based
                  tracking can help because it turns snacks, portions, and drinks
                  into visible data rather than guesses.
                </p>
                <p className={p}>
                  A 20kg medium target may be feasible over about 5 months for
                  selected people using GLP 1 treatment, 150 minutes of exercise
                  weekly, strength work, and monitoring. For someone asking how
                  to lose 20kg in 5 months, the answer is roughly 1kg per week
                  through a 600 calorie cut, HIIT or other movement, monitoring,
                  and GP review for eligibility.
                </p>
                <p className={p}>
                  Plateaus are common. Protein emphasis and planned refeed cycles
                  can help some people when guided properly, but the core remains
                  consistency. If your injection progress stalls, our{" "}
                  <Link
                    href="/helpful-guides/mounjaro-weight-loss-plateau"
                    className={linkCls}
                  >
                    Mounjaro plateau guide
                  </Link>{" "}
                  can help you think through next steps.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="community"
                heading="Community and lifestyle: Preston's free boosters"
              >
                <p className={p}>
                  NHS free groups in Preston can build adherence because they
                  add social accountability. Harris Park groups or John
                  o&apos; Gaits walks can turn movement into a regular calendar
                  item rather than a vague plan.
                </p>
                <p className={p}>
                  Diet UK style clinician support may include appetite
                  suppressants that are not GLP 1 medicines for early tiers, when
                  appropriate. Local food habits matter too. Market vegetables
                  can make meals leaner, and pub swaps such as lower alcohol
                  choices can trim weekly intake without making life feel
                  joyless.
                </p>
                <p className={p}>
                  Rainy Preston days can be covered with home HIIT, resistance
                  work, or short circuits. The goal is not perfection. It is to
                  protect the routine when weather, shifts, or family life get in
                  the way.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="safety"
                heading="Safety checklists: Preston private clinic vetting"
              >
                <p className={p}>Before private care:</p>
                <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                  <li>Verify GPhC prescriber and pharmacy registration.</li>
                  <li>Ask for the titration plan, nausea policy, and blood tests.</li>
                  <li>
                    Budget around GBP150 to GBP300 per month including delivery
                    and cold chain handling.
                  </li>
                  <li>
                    Ask what a GP would prescribe or refer for, usually lifestyle
                    first and then GLP 1 if BMI and comorbidities fit the local
                    pathway.
                  </li>
                  <li>Avoid GLP 1 treatment during pregnancy or when planning pregnancy.</li>
                  <li>
                    Treat pancreatitis or certain thyroid history as reasons to
                    pause and get clinician advice.
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
                id="gap"
                heading="Competitor gap fill: why this Preston guide wins"
              >
                <p className={p}>
                  Many competitor pages, such as thin Preston skin, laser, or
                  booking style pages, can be light on safety warnings, titration
                  details, realistic timelines, and local practical tips. This
                  guide adds checklists, real paces, NHS and NICE style framing,
                  MHRA safety awareness, and semantic depth around Preston
                  clinics, markets, and parks.
                </p>
              </GuideSection>

              <section id="faq" className="scroll-mt-28">
                <h2 className={`text-xl font-semibold ${strong}`}>
                  FAQs on best weight loss treatment Preston
                </h2>
                <div className={`mt-6 space-y-8 text-sm ${p}`}>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      Which is the most effective weight loss treatment overall?
                    </h3>
                    <p className="mt-2">
                      GLP 1 medicines like Mounjaro or Wegovy with lifestyle
                      support tend to outperform solo attempts, with trials
                      showing around 15 to 20% loss in selected patients. NHS
                      backed programmes add sustainability through monitoring and
                      behaviour support.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      Can I buy Ozempic at Boots Preston?
                    </h3>
                    <p className="mt-2">
                      No. Ozempic is prescription only. You need a GP or private
                      prescriber for Wegovy, Ozempic style semaglutide, or
                      Mounjaro access. Boots can sell over the counter products,
                      but not prescription injections without a clinician.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      What is a cheaper alternative to Mounjaro in Preston?
                    </h3>
                    <p className="mt-2">
                      Wegovy or Saxenda may cost around GBP150 to GBP250 per
                      month depending on provider, dose, and delivery. Wegovy can
                      offer similar 12 to 15% loss in selected groups and may be
                      more cost effective than Mounjaro for some Preston
                      patients.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      What will a GP prescribe for weight loss near Preston?
                    </h3>
                    <p className="mt-2">
                      A GP will usually start with lifestyle support and referral
                      routes. GLP 1 treatment may be considered when BMI is 30 or
                      higher with comorbidities, or where local formulary rules
                      allow. NHS North West Lancashire pathways remain guided by
                      safety and eligibility.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      How to lose 5kg safely in less than 7 days?
                    </h3>
                    <p className="mt-2">
                      It is not realistic or safe for true fat loss. Aim for 5 to
                      7 weeks at around 0.75kg per week using a calorie deficit,
                      walking, strength work, and tracking. Faster approaches
                      increase dehydration and muscle loss risk.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      How did celebrities like Kelly Clarkson lose quickly?
                    </h3>
                    <p className="mt-2">
                      Public interviews point to GLP 1 treatment combined with
                      diet and exercise. The UK lesson is not to copy a celebrity
                      plan unsupervised, but to use monitoring, eligibility
                      checks, and sustainable habits.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection
                darkMode={darkMode}
                id="clinics"
                heading="Local Preston clinic highlights"
              >
                <p className={p}>
                  Preston Travel Vaccination and Weight Loss Clinic at DD L
                  Davies, 59 Plungington Road PR1 7EN, can offer pharmacist
                  consultations and Wegovy or Mounjaro stock without shortcuts.
                  Diet UK at 78A Fishergate PR1 2UH offers appetite suppressant
                  programmes and is described as CQC inspected.
                </p>
                <p className={p}>
                  NHL Pharmacy at 266 New Hall Lane PR1 4ST offers clinician
                  plans. My Private Clinic at 228 Garstang Road, Fulwood PR2
                  9QB, provides GP access without NHS referral. Broadway Pharmacy
                  at 331 Garstang Road, Fulwood PR2 9UP, can support injection
                  monitoring and tailored plans.
                </p>
                <p className={p}>
                  All such routes should be checked for GPhC registration,
                  cold chain handling, titration policy, and follow up before
                  payment.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="psychology"
                heading="Psychological and habit edges for Preston folk"
              >
                <p className={p}>
                  Shift stress can drive grazing, late eating, and missed meals.
                  Mindfulness, food logs, and routine check ins can improve
                  retention for some people. A practical Preston example is
                  tracking Market snacks and discovering that the hidden calories
                  were between meals rather than at meals.
                </p>
                <p className={p}>
                  The aim is not to moralise food. It is to make patterns
                  visible so the next small change is easier. Logs, planned
                  protein, and repeated park walks are not glamorous, but they
                  compound.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="metrics"
                heading="Metrics, minefields, and Lancashire momentum"
              >
                <p className={p}>
                  Bio scales can be more useful than weight alone when interpreted
                  carefully, because waist size, body composition, clothes fit,
                  blood pressure, and energy all matter. Plateaus may call for
                  carbohydrate adjustments, protein review, or movement changes,
                  not panic.
                </p>
                <p className={p}>
                  Supplements have minimal proof for major fat loss, and MHRA
                  warnings around unsafe products still matter. Gastric surgery
                  can be appropriate for BMI over 40, or lower BMI with serious
                  health risks, but it needs specialist assessment and lifelong
                  follow up. Harris groups and local community routines can add
                  momentum because they make change social and scheduled.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="conclusion"
                heading="Conclusion: Preston's doable, localised transformation"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Preston means NHS first safety plus
                  smart private GLP 1 treatment such as Mounjaro, Wegovy, or
                  Saxenda when clinically suitable. Local tips such as markets
                  and parks, plus realistic timelines for 5kg and 20kg, make the
                  plan more doable.
                </p>
                <p className={p}>
                  There are no quick fixes. Real monitored wins start with GP
                  chats, provider checks, Harris trails, and a plan that still
                  makes sense after the first month. Your Lancashire slimming
                  starts informed, local, and empowered.
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
                    safety standards. This Preston guide is educational
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
                heading="Practical next steps for Preston residents"
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
                    href="/blog/best-weight-loss-treatment-in-blackpool"
                    className={linkCls}
                  >
                    Blackpool
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-lancaster"
                    className={linkCls}
                  >
                    Lancaster
                  </Link>
                  , and{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-manchester"
                    className={linkCls}
                  >
                    Manchester
                  </Link>
                  .
                </p>
              </section>
            </article>

            <div className="mt-14">
              <GuideSharePanel
                url={shareUrl}
                title={PAGE_TITLE}
                description="Best weight loss treatment Preston: NHS and private Mounjaro or Wegovy options, local clinics, safety tips, and timelines."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
