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
  "Best Weight Loss Treatment Peterborough: NHS Access, Private Injections, and Local Support for Real Results";

export default function PeterboroughLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: "Peterborough practical overview" },
      { id: "context", label: "Weight and health context" },
      { id: "effective", label: "What most effective means" },
      { id: "nhs", label: "NHS weight management" },
      { id: "private", label: "Private GLP 1 and contouring" },
      { id: "access", label: "Safe GLP 1 access" },
      { id: "community", label: "Community support" },
      { id: "timelines", label: "Practical timelines" },
      { id: "menus", label: "Menus and movement" },
      { id: "checklists", label: "Safety checklist" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Peterborough path" },
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
          <span className={strong}>Peterborough</span>
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
          <GuideTocSidebar key="uk-loc-toc-peterborough" toc={toc} />

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection
                darkMode={darkMode}
                id="intro"
                heading="Best weight loss treatment Peterborough: NHS access, private injections, and local support for real results"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Peterborough&apos;s market squares, riverside paths, and
                  Cambridgeshire greenways offer daily movement that quietly
                  supports weight loss. Yet the city&apos;s mix of urban routines
                  and commuter habits can nudge calories upward. If you&apos;re
                  hunting the best weight loss treatment in Peterborough, the
                  evidence points to a hybrid approach: NHS backed specialist
                  support when needs are complex, and medically supervised
                  private injections when criteria are met.
                </p>
                <p className={p}>
                  Postcode does not change drug chemistry, but it does shape who
                  replies to your call, how quickly you&apos;re seen, and whether
                  your GP surgery stays in the loop. Below is a practical, local
                  guide that walks through NHS pathways, private options, and
                  community support in Peterborough. It is built for clarity,
                  safety, and real world timelines.
                </p>
                <p className={p}>
                  If you want a wider view before comparing local routes, start
                  with our{" "}
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
                  to prepare for a GP or clinic conversation.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="context"
                heading="Peterborough's weight and health context: why access matters more than you think"
              >
                <p className={p}>
                  Official public health data for England and Cambridgeshire
                  shows overweight and obesity rates hovering around 65 to 70%
                  of adults, with obesity alone near 30% according to NHS
                  Digital and Health Survey for England 2024 reporting.
                  Peterborough&apos;s urban fabric, busy high streets, mixed
                  housing, and commuter corridors mean sedentary work and
                  convenience food can crowd out plans.
                </p>
                <p className={p}>
                  Access to services matters more than hype. Your GP&apos;s
                  referral, the Cambridgeshire and Peterborough Integrated Care
                  Board eligibility wording, and local clinic capacity can
                  determine whether you start a programme in weeks or months.
                  Peterborough reflects the wider Cambridgeshire public health
                  picture, and local services are shaped by NHS England&apos;s
                  Cambridgeshire and Peterborough Integrated Care Board.
                </p>
                <p className={p}>
                  Nuance to keep in mind: prevalence figures are regional, not a
                  verdict on your kitchen habits. What matters for you is how
                  quickly you can access dietetic review, behavioural support,
                  and, in some cases, GLP 1 medicines under supervision.
                  Peterborough&apos;s network includes NHS Tier 3 specialist
                  weight management, virtual Tier 2 group sessions, and local
                  private clinics offering injections and advanced body
                  contouring.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="effective"
                heading="What makes a weight loss treatment most effective? The evidence based answer"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  The most effective treatment is not a single pill or class. It
                  is a multi component, medically supervised programme that
                  combines nutrition, physical activity, and behavioural support.
                  GLP 1 medicines such as semaglutide, Ozempic, tirzepatide, and
                  Mounjaro can amplify results when eligible, but they work best
                  alongside lifestyle changes.
                </p>
                <p className={p}>
                  Research consistently shows that combining nutrition, movement,
                  and behaviour beats single modality hacks. A deficit of 500 to
                  1,000 kcal per day typically yields 0.5 to 1kg per week, which
                  is a sustainable range reflected in NICE NG246 guidance. GLP 1
                  receptor agonists such as semaglutide and tirzepatide tilt
                  appetite and gastric emptying, supporting 10 to 20% body
                  weight loss over 6 to 12 months in trials.
                </p>
                <p className={p}>
                  But they are not magic. They require titration, monitoring, and
                  a plan for long term habits. Clinics that promise stone fast
                  results without titration or follow up risk side effects and
                  relapse. The safest, most effective path is a multi
                  disciplinary team approach: dietitian for food planning,
                  psychologist for coping strategies, and clinician for medical
                  oversight.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="nhs"
                heading="NHS weight management in Peterborough: Tier 3 specialist programme and medication roll out"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  The NHS route usually starts with your GP. For Tier 3, you
                  need a referral to a specialist programme, and Healthy You
                  Specialist Services is a known Tier 3 provider in the area. The
                  programme can deliver 18 months of support through a multi
                  disciplinary team: specialist dietitians, psychologists, and
                  clinicians.
                </p>
                <p className={p}>
                  NHS Tier 3 specialist weight management in Peterborough offers
                  intensive support for BMI 30 or higher with complex needs, or
                  BMI 35 or higher with comorbidities. It is ideal for complex
                  cases, including psychosocial factors, antidepressant history,
                  night shifts, or other issues where a short advertorial will
                  not catch the full picture. Local references include
                  Thistlemoor Weight Management Services style pathways.
                </p>
                <p className={p}>
                  Local NHS weight medication roll out is underway. Approved GLP
                  1 medicines such as semaglutide and tirzepatide are being
                  phased into NHS local care. GP referral is required to assess
                  eligibility, and highest risk patients are prioritised due to
                  demand. The trade off is patience: a referral letter is not a
                  guarantee of pharmacotherapy, and it may get you into
                  fortnightly group sessions first.
                </p>
                <p className={p}>
                  If NHS Tier 2 group sessions are now virtual or self directed,
                  your GP can still refer you to community options like Slimming
                  World for 12 weeks of free group access. Award winning local
                  groups are available in Peterborough and remain a practical
                  stepping stone through Healthy You place based weight
                  management style routes.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="private"
                heading="Private GLP 1 injections and advanced body contouring in Peterborough: legibility versus safety"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Private GLP 1 prescribing in Peterborough can feel legible: a
                  price, a calendar link, and courier tracking. But it can skip
                  essential conversations about gallstones, pregnancy planning,
                  thyroid history, or ethnicity adjusted BMI thresholds. Online
                  pharmacies delivering to Peterborough are neither automatically
                  safer nor riskier. What matters is proportionate prescribing,
                  cold chain logistics, and follow up.
                </p>
                <p className={p}>
                  Private clinics offer injections such as semaglutide, Ozempic,
                  tirzepatide, Mounjaro, liraglutide, and Saxenda. They may also
                  offer advanced body contouring such as cryolipolysis,
                  ultrasound cavitation, and radiofrequency. Legibility is
                  genuine: fixed pricing, quick scheduling, and delivery
                  tracking. However, the risk is skipping the boring medical
                  conversations that some services handle thoughtfully and others
                  barely mention.
                </p>
                <p className={p}>
                  Rural postcodes around Cambridgeshire can narrow delivery
                  windows for refrigerated pens, so cold chain logistics need to
                  survive a Friday afternoon in the rain. If a website will not
                  name its superintendent pharmacist, pause. Compare likely total
                  private costs through our{" "}
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
                  Advanced body contouring can target stubborn areas.
                  Cryolipolysis is often discussed as producing roughly 19 to
                  24% fat reduction per zone in selected trials, but it must be
                  paired with lifestyle for longevity. Standalone contouring
                  often yields temporary gains and does not replace obesity
                  treatment.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="access"
                heading="How to access GLP 1 medicines safely: NHS versus private paths in Peterborough"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  You might get Ozempic, Mounjaro, or Saxenda without going
                  through your GP via a private prescriber or GPhC registered
                  online clinic, if you meet their clinical criteria. But that
                  route can leave your GP surgery out of the loop unless you ask
                  for shared care. NHS access is narrower, and local health
                  systems may apply their own criteria on top of national
                  guidance.
                </p>
                <p className={p}>
                  Private GLP 1 access can be faster on paper. You still need to
                  meet clinical criteria, including BMI thresholds,
                  comorbidities, and often prior lifestyle steps. It can be
                  quicker, but many practices will not automatically agree to
                  shared care, so ask explicitly. Cambridgeshire and
                  Peterborough Integrated Care Board may also apply additional
                  criteria beyond NICE guidance for NHS treatment.
                </p>
                <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                  <p className={`mb-3 text-base font-semibold ${strong}`}>
                    Before paying for an online clinic:
                  </p>
                  <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                    <li>
                      Check prescriber registration and pharmacy GPhC
                      registration.
                    </li>
                    <li>
                      Ensure a clear titration plan with a slow dose ramp to
                      reduce nausea.
                    </li>
                    <li>
                      Confirm a written policy for nausea, dehydration, and
                      missed doses.
                    </li>
                    <li>
                      Compare monthly totals including repeats, delivery, and
                      follow up for a fairer picture.
                    </li>
                  </ul>
                </div>
                <p className={p}>
                  Price is visible; clinical risk is harder to Google. A low
                  headline fee may exclude follow up or bundle unnecessary blood
                  tests. For a practical safety checklist, read our guide to{" "}
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
                id="community"
                heading="Local community support: group sessions, virtual Tier 2, and sliding into movement"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  If NHS Tier 2 is virtual or self directed, community groups
                  remain practical. Slimming World offers 12 weeks of free group
                  access via GP referral. Award winning local groups exist in
                  Peterborough and often provide the day to day accountability
                  that boosts adherence by around 15 to 20% in group support
                  settings.
                </p>
                <p className={p}>Movement in Peterborough is accessible:</p>
                <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                  <li>River Nene walks can burn about 280 calories per hour.</li>
                  <li>
                    Eastfield Park circuits can include resistance bands and
                    squats.
                  </li>
                  <li>
                    Commuter friendly HIIT apps can support higher fat loss than
                    steady cardio for some people.
                  </li>
                  <li>
                    Rainy days can be covered with home HIIT three times weekly
                    when outdoor routes feel unrealistic.
                  </li>
                </ul>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="timelines"
                heading="Practical timelines: how long to lose 5kg, 10kg, or 20kg in Peterborough"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  No 7 day 5kg plan is safe. A realistic pace is often 0.5 to
                  1kg per week. That means 5kg in about 5 to 10 weeks, 10kg in
                  about 3 to 6 months, and 20kg in about 5 months with medical
                  oversight and consistent lifestyle work for suitable people.
                </p>
                <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                  <li>
                    For 5kg, use a 500 calorie deficit, 150 minutes of moderate
                    movement, and resistance training twice weekly.
                  </li>
                  <li>
                    For 10kg, follow the same principles, add protein
                    prioritisation, and expect 3 to 6 months.
                  </li>
                  <li>
                    For 20kg, GLP 1 treatment plus strength training and
                    fortnightly weighs may make the target realistic for selected
                    patients.
                  </li>
                </ul>
                <p className={p}>
                  NICE style framing treats 10% yearly loss as sustainable, not
                  disappointing. Plateaus can happen. Refeed days or carbohydrate
                  cycles are sometimes used with professional guidance, but the
                  foundation remains calories, protein, movement, and sleep. If
                  your injection progress stalls, our{" "}
                  <Link
                    href="/helpful-guides/mounjaro-weight-loss-plateau"
                    className={linkCls}
                  >
                    Mounjaro plateau guide
                  </Link>{" "}
                  can help you review expectations and next questions.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="menus"
                heading="Menus and movement: local Peterborough food swaps and trails"
              >
                <p className={p}>
                  Peterborough&apos;s markets offer lean meats and fresh
                  vegetables, making it easier to swap pies for salads with local
                  chicken or other protein first meals. Protein first meals boost
                  satiety and make a calorie deficit easier to sustain.
                </p>
                <p className={p}>
                  NT Covert&apos;s Gardens provides gentle hills, and Eastfield
                  Park offers space for resistance bands and squats. Pairing
                  market vegetables, lean meats, and short local walks can turn
                  lifestyle advice into something specific enough to repeat.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="checklists"
                heading="Checklists and safety: what to verify before starting GLP 1 or contouring"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Before starting, verify the prescriber registration, pharmacy
                  GPhC status, titration plan, side effect policy, and cold chain
                  delivery. GLP 1 treatment may be off the table entirely during
                  pregnancy, with pancreatitis history, or with certain thyroid
                  conditions unless a clinician gives clearance.
                </p>
                <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                  <li>Prescriber and pharmacy registration.</li>
                  <li>Titration plan and side effect policy.</li>
                  <li>Cold chain delivery for refrigerated pens.</li>
                  <li>Blood test policy for monitoring.</li>
                  <li>
                    Clear advice on pregnancy, pancreatitis, thyroid conditions,
                    nausea, dehydration, and missed doses.
                  </li>
                </ul>
                <p className={p}>
                  When in doubt, your clinician wins the argument. Weight loss
                  treatment is not just a checkout flow. It is a medical plan
                  that should respect your risk profile.
                </p>
              </GuideSection>

              <section id="faq" className="scroll-mt-28">
                <h2 className={`text-xl font-semibold ${strong}`}>
                  FAQs: rewritten, localised, and answered with care
                </h2>
                <div className={`mt-6 space-y-8 text-sm ${p}`}>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      Which approach is the most effective weight loss treatment
                      for Peterborough residents?
                    </h3>
                    <p className="mt-2">
                      A multi component, medically supervised programme is most
                      effective for complex needs. NHS Tier 3 with a dietitian,
                      psychologist, and clinician can provide that structure.
                      Private GLP 1 injections can amplify results when eligible,
                      but lifestyle changes such as calorie deficit, protein, and
                      movement remain essential.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      What qualifies you for Ozempic on the NHS in
                      Peterborough?
                    </h3>
                    <p className="mt-2">
                      GP referral is required. Typical criteria include BMI 35 or
                      higher with comorbidities, or BMI 30 or higher with complex
                      needs, plus evidence of lifestyle steps. Highest risk
                      patients are prioritised because demand is high. The NHS
                      may apply local criteria beyond NICE.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      How much weight can you lose on Mounjaro in 6 months,
                      realistically?
                    </h3>
                    <p className="mt-2">
                      Trials show about 15 to 20% body weight loss over 6 months
                      with tirzepatide, known as Mounjaro, when paired with
                      lifestyle. Individual results vary. Titration, monitoring,
                      food habits, movement, and sleep drive longevity.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      Can you buy Ozempic from Boots in Peterborough without
                      prescription?
                    </h3>
                    <p className="mt-2">
                      No. Ozempic, or semaglutide, is prescription only. You can
                      get it via private prescription from a registered
                      clinician, but not over the counter at Boots. Online
                      pharmacies must be GPhC registered and provide appropriate
                      cold chain delivery.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection
                darkMode={darkMode}
                id="conclusion"
                heading="Conclusion: your Peterborough path to the best weight loss treatment"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  The best weight loss treatment in Peterborough is not a single
                  product. It is a locally tuned, evidence based path: NHS Tier 3
                  specialist support for complex needs, private GLP 1 treatment
                  when eligible and supervised, and community groups that keep
                  you moving.
                </p>
                <p className={p}>
                  From GP referrals to River Nene walks, real results are doable.
                  Start small: compare two providers honestly, run your BMI with
                  accurate measurements, and book a conversation where you can
                  say &quot;I&apos;m scared of nausea&quot; without being rushed. Your
                  fitter, steadier Peterborough future begins here.
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
                    We compare UK weight loss providers, prices, and safety
                    signals. This Peterborough guide is general information, not
                    a prescription, diagnosis, or replacement for your GP.
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
                heading="Practical next steps for Peterborough residents"
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
                    href="/blog/best-weight-loss-treatment-in-cambridge"
                    className={linkCls}
                  >
                    Cambridge
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-northampton"
                    className={linkCls}
                  >
                    Northampton
                  </Link>
                  , and{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-leicester"
                    className={linkCls}
                  >
                    Leicester
                  </Link>
                  .
                </p>
              </section>
            </article>

            <div className="mt-14">
              <GuideSharePanel
                url={shareUrl}
                title={PAGE_TITLE}
                description="Best weight loss treatment Peterborough: NHS Tier 3, private GLP 1 injections, local support, timelines, and safety checks."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
