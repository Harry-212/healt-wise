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
  "Best Weight Loss Treatment Paisley: Scotland's Practical Guide to Real Results";

export default function PaisleyLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: "Paisley practical overview" },
      { id: "landscape", label: "Paisley weight landscape" },
      { id: "glp", label: "GLP 1 injections" },
      { id: "contouring", label: "Body contouring and fat dissolving" },
      { id: "nhs", label: "NHS weight management" },
      { id: "timelines", label: "Realistic timelines" },
      { id: "checklists", label: "Safe steps checklist" },
      { id: "local-hacks", label: "Behavioural and local hacks" },
      { id: "tracking", label: "Tracking and pitfalls" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Paisley slimming journey" },
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
        <div className="mb-10 flex items-center justify-between">
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
              Independent guide · May 2026
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
                heading="Best weight loss treatment Paisley: Scotland's practical guide to real results"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Paisley&apos;s textile mills and Renfrewshire greens inspire
                  health. Yet pub pints or shift work add weight. The best
                  weight loss treatment in Paisley hinges on goals: medically
                  supervised GLP 1 treatment for big drops, or non surgical body
                  contouring for targeted inches. Let&apos;s break it down
                  helpfully.
                </p>
                <p className={p}>
                  Best weight loss treatment Paisley Scotland means balancing
                  NHS and private GLP 1 options such as Mounjaro, Wegovy, and
                  Saxenda, non surgical contouring such as HIFU and fat
                  dissolving, practical timelines, and local Renfrewshire habits
                  for safe slimming. If you are still comparing the bigger UK
                  picture, start with our{" "}
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
                heading="Paisley's weight landscape and access realities"
              >
                <p className={p}>
                  Scotland&apos;s adult obesity hovers around 32% in public
                  health profiles, and Paisley&apos;s urban fabric means clinics
                  around Glasgow Road and Gauze Street are accessible. Could
                  shifts at mills hinder progress? Likely, but local trails can
                  counter that pressure.
                </p>
                <p className={p}>
                  The nuance is that health boards, including NHS Greater Glasgow
                  and Clyde, tend to prioritise lifestyle first, with medication
                  following assessment. Search terms like Mounjaro Paisley
                  collide with waits; private care can fill gaps, but patients
                  still need to verify registration and follow up.
                </p>
                <p className={p}>
                  A local hack is to use St Mirin&apos;s Park walks, which can
                  burn about 280 calories per hour depending on pace and body
                  size, then pair that with market vegetables from Paisley&apos;s
                  weekly stalls. The local environment is not a full treatment
                  plan, but it can make a realistic plan easier to repeat.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="glp"
                heading="1. Medically supervised GLP 1 injections for Paisley residents"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  GLP 1 agonists mimic gut hormones, curbing appetite and
                  slowing gastric emptying. Tirzepatide, sold as Mounjaro, adds
                  a GIP mechanism for stronger satiety. Trials show around 20%
                  loss for tirzepatide compared with around 15% for semaglutide,
                  sold as Wegovy, in selected groups. Liraglutide, sold as
                  Saxenda, is a daily and often milder starter option.
                </p>
                <p className={p}>
                  Paisley residents may access these medicines through GP and
                  NHS routes, with referral to tier 2 programmes that include
                  free dietitian input and counselling. Eligibility commonly
                  centres on BMI 35 or higher, or BMI 30 or higher with
                  comorbidities such as diabetes, though local pathways can vary.
                  Waits may be 3 to 6 months, and the focus usually remains on
                  lifestyle first.
                </p>
                <p className={p}>
                  Private routes can involve remote video consults, Glasgow
                  weight loss services covering Paisley home delivery, and GPhC
                  registered pharmacies dispensing the medicine. Abbey Chemist on
                  Gauze Street and Well Pharmacy on Glasgow Road are examples of
                  local pharmacy access points that may partner with clinics or
                  support cold chain handling for refrigerated pens.
                </p>
                <p className={p}>
                  Costs commonly sit around GBP150 to GBP350 per month when
                  titration is included. The critique is that private care may
                  skip GP loops unless shared care is requested. Shared care is
                  essential for safety because these medicines can interact with
                  wider health monitoring, blood sugar risk, and other
                  prescriptions. Use our{" "}
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
                  when you need to compare headline costs before checking what
                  support is included.
                </p>
                <p className={p}>
                  Side effects include nausea, especially if dose increases are
                  too fast, so good clinics step doses gradually over weeks.
                  Gallbladder risks need to be discussed, and medicine alerts can
                  happen. It is impossible to ignore that GLP 1 treatment is not
                  standalone. It works best with a sustainable calorie deficit,
                  often around 500 calories per day, and enough movement to
                  support about 1kg per week for suitable people.
                </p>
                <p className={p}>
                  Can you get injections without a GP? Yes, private providers can
                  prescribe after assessment, but your GP should be notified if
                  shared care is requested and many practices will agree after a
                  proper clinical review. If you are new to the medicines, read{" "}
                  <Link href="/what-is-mounjaro" className={linkCls}>
                    what Mounjaro is
                  </Link>
                  ,{" "}
                  <Link href="/what-is-wegovy" className={linkCls}>
                    what Wegovy is
                  </Link>
                  , and{" "}
                  <Link href="/what-is-saxenda" className={linkCls}>
                    how Saxenda works
                  </Link>{" "}
                  before booking a consultation.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="contouring"
                heading="2. Non surgical body contouring and fat dissolving treatments"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Stubborn areas such as belly or thighs can resist diet. Non
                  invasive options may help with targeted inches, not overall
                  obesity treatment. HIFU, meaning High Intensity Focused
                  Ultrasound, uses ultrasound waves to heat fat and tighten skin,
                  and is popular for contouring after weight loss. Fat dissolving
                  injections, often using deoxycholic acid, break down cells in
                  selected areas.
                </p>
                <p className={p}>
                  Paisley providers can include home based tailored services,
                  such as Lipo Sculpt Paisley visiting residences and avoiding
                  clinic trips, which may suit busy textile or shopping shifts.
                  Specialised centres such as Spire Aesthetics Paisley may offer
                  body contouring, skin tightening, and cellulite reduction for
                  targeted inches without surgery.
                </p>
                <p className={p}>
                  Results are often visible in 4 to 8 weeks, with sessions of
                  about 30 to 60 minutes. The critique is important: these
                  treatments are not for obesity. They are usually best for BMI
                  under 35 and for maintenance or shaping after wider weight
                  loss. They should pair with lifestyle, because combination
                  plans outperform solo treatments.
                </p>
                <p className={p}>
                  Are they viable for Paisley? Yes. Urban access is easy, and
                  rain proof home options can be practical. Still, if your goal
                  is a large drop in body weight, start with GP review,
                  structured lifestyle support, GLP 1 assessment, or NHS
                  pathways before treating contouring as the main answer.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="nhs"
                heading="NHS weight management programs in Paisley and Renfrewshire"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  NHS Greater Glasgow and Clyde runs structured programmes that
                  Paisley residents may access through GP referral, including
                  practices such as Abbey Medical Centre or Anchor Mill Medical
                  Practice. Support can include nutrition counselling,
                  behavioural health, and exercise planning, with decades of
                  evidence behind sustainable weight management.
                </p>
                <p className={p}>
                  For teens aged 12 to 18, Weigh to Go at Ferguslie Clinic is a
                  youth focused option with dietetics and counselling tailored to
                  younger people. Pills and injections are usually limited in NHS
                  youth pathways, while lifestyle remains the core foundation.
                </p>
                <p className={p}>
                  The trade off is waiting. Group sessions may be fortnightly and
                  access can take time. It is not instant medication, but 5 to
                  10% loss is a realistic and meaningful outcome for many people
                  who engage over the long term.
                </p>
                <h3
                  className={`pt-2 text-base font-semibold tracking-tight ${strong}`}
                >
                  Step by step Paisley NHS access
                </h3>
                <ol className={`list-decimal space-y-2 pl-5 ${p}`}>
                  <li>
                    Book a GP BMI check and ask whether ethnicity adjusted
                    thresholds apply.
                  </li>
                  <li>
                    Request a tier 2 referral if lifestyle attempts have failed
                    or health risks are rising.
                  </li>
                  <li>
                    Attend groups and complete follow up blood tests when
                    requested.
                  </li>
                  <li>
                    Compare private routes only after weighing the cost against
                    the free NHS option and the safety value of GP oversight.
                  </li>
                </ol>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="timelines"
                heading="Timelines: how long for realistic loss in Paisley?"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  No quick fixes. A safe pace is usually 0.5 to 1kg weekly for
                  many adults, depending on starting weight, health conditions,
                  medication, diet, and activity.
                </p>
                <p className={p}>
                  For a short target such as 5kg, a 400 calorie daily cut plus
                  daily St Mirin&apos;s trails can make 5 to 10 weeks realistic.
                  Tracking with an app helps expose snacks, drinks, and portion
                  creep.
                </p>
                <p className={p}>
                  For a medium target such as 20kg, GLP 1 treatment plus 150
                  minutes of exercise and fortnightly weighs may make 5 months
                  feasible for selected people. A 10% yearly loss is often more
                  sustainable than chasing a dramatic number at any cost.
                </p>
                <p className={p}>
                  For long term maintenance, weigh ins and habits after medicine
                  matter. Many people regain when structure disappears. Plateaus
                  can happen, and some clinicians use carbohydrate cycling or
                  planned refeed days for selected people. If your progress
                  stalls on injections, our{" "}
                  <Link
                    href="/helpful-guides/mounjaro-weight-loss-plateau"
                    className={linkCls}
                  >
                    Mounjaro plateau guide
                  </Link>{" "}
                  explains how to review habits, expectations, and prescriber
                  follow up.
                </p>
                <p className={p}>
                  Kelly Clarkson style weight loss often reflects GLP 1
                  medication plus cardio and structured support, based on public
                  interviews. The safer Paisley lesson is to mimic the supervision
                  and consistency, not the headline speed.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="checklists"
                heading="Practical checklists: safe steps for Paisley folk"
              >
                <p className={p}>
                  Before using a private provider, verify the GPhC prescriber and
                  pharmacy registration. The register confirms UK legitimacy and
                  should show the correct pharmacy name and superintendent
                  details. Our guide on{" "}
                  <Link
                    href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards"
                    className={linkCls}
                  >
                    UK pharmacy safety standards
                  </Link>{" "}
                  can help you understand what to check.
                </p>
                <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                  <li>
                    Ask for the titration plan, side effect policy, and repeat
                    test schedule.
                  </li>
                  <li>
                    Budget at least GBP200 per month when delivery and follow up
                    are included.
                  </li>
                  <li>
                    Consider NHS first through a GP BMI and ethnicity threshold
                    calculation, with shared care possible later.
                  </li>
                  <li>
                    Avoid GLP 1 treatment during pregnancy or when planning
                    pregnancy unless a clinician gives clear advice to stop and
                    switch plans.
                  </li>
                  <li>
                    Treat pancreatitis history or certain thyroid histories as
                    major warning signs that need clinician review.
                  </li>
                  <li>
                    Use Paisley Market lean meats and vegetables, plus John Muir
                    Way segments, as local boosters for meals and free movement.
                  </li>
                </ul>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="local-hacks"
                heading="Behavioral and local Paisley hacks"
              >
                <p className={p}>
                  Stress from textile jobs can push grazing, late meals, or
                  comfort eating. Mindfulness has been linked with better weight
                  outcomes in some studies, with one 2025 health psychology
                  example describing around 4kg extra loss in supported groups.
                </p>
                <p className={p}>
                  Apps can improve tracking because they turn guesswork into
                  feedback. One Paisley style example is a person logging park
                  snacks and finding that the easy calories were not meals at all
                  but extras during walks, errands, and social stops.
                </p>
                <p className={p}>
                  Sleep matters. Less than 7 hours can make hunger and cravings
                  worse over time, while Paisley&apos;s quieter evenings can help
                  people build a steadier routine. Hydration matters too, and
                  around 2L daily can help some people reduce unnecessary
                  snacking when thirst is being mistaken for hunger.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="tracking"
                heading="Tracking progress and dodging pitfalls"
              >
                <p className={p}>
                  Bioimpedance can help estimate fat changes, but waist size,
                  clothes fit, energy, and blood markers often tell a better
                  story than scale weight alone. Plateaus are normal, especially
                  after the first fast drop in water and glycogen.
                </p>
                <p className={p}>
                  Supplements have minimal proof for major fat loss, and medicine
                  regulators continue to warn about unsafe products and poorly
                  regulated sellers. Bariatric surgery can be appropriate for BMI
                  over 40, or for lower BMI with serious health conditions, but
                  it needs specialist assessment and lifelong follow up.
                </p>
              </GuideSection>

              <section id="faq" className="scroll-mt-28">
                <h2 className={`text-xl font-semibold ${strong}`}>
                  FAQs on best weight loss treatment Paisley
                </h2>
                <div className={`mt-6 space-y-8 text-sm ${p}`}>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      Can I access weight loss injections through my GP in
                      Scotland, or is private required for residents like those
                      in Paisley?
                    </h3>
                    <p className="mt-2">
                      Yes, GPs can prescribe GLP 1 medicines such as Mounjaro,
                      Wegovy, or Saxenda if you are eligible via NHS tier 3 style
                      pathways, commonly BMI 35 or higher with comorbidities.
                      Waits may be 3 to 6 months. Private routes are faster and
                      can start from around GBP150 per month through GPhC linked
                      clinics, but proper assessment and GP communication still
                      matter.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      What ranks as the top non surgical option for stubborn fat
                      in Paisley without surgery downtime?
                    </h3>
                    <p className="mt-2">
                      HIFU or fat dissolving injections are common options for
                      targeted inch loss, with some clinics quoting about 20 to
                      25% change in a treated area per session and no recovery
                      period. Spire style clinics and Lipo Sculpt style local
                      services may suit people focused on shaping rather than
                      large scale weight loss.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      Which weight loss options does NHS Scotland actually
                      provide for Paisley patients, including teens?
                    </h3>
                    <p className="mt-2">
                      NHS Scotland pathways for Paisley can include free tier 2
                      programmes with dietitian support, groups, behavioural
                      advice, and realistic 5 to 10% loss goals. Weigh to Go at
                      Ferguslie Clinic supports young people aged 12 to 18 with
                      dietetics and counselling. Medicines are more limited, and
                      lifestyle remains the core.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      What method programs deliver the most effective sustainable
                      results overall for Paisley folks?
                    </h3>
                    <p className="mt-2">
                      Combination plans tend to perform best: GLP 1 treatment
                      when clinically suitable, 150 minutes of activity each
                      week, food tracking, enough protein, and regular review.
                      Around 20% loss can happen in selected medication supported
                      cases, while maintenance depends on habits continuing after
                      the medicine phase changes.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      How safe are home delivered GLP 1 pens to Paisley, and what
                      cold chain checks matter?
                    </h3>
                    <p className="mt-2">
                      Home delivered pens can be safe when supplied by a GPhC
                      registered pharmacy with clear cold chain procedures. Ask
                      how the pen is packed, what happens if delivery is delayed
                      by rain or a Friday dispatch, and how titration and side
                      effects are managed after delivery.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      Are non surgical treatments like HIFU suitable for
                      Paisley&apos;s active residents, or do they need rest?
                    </h3>
                    <p className="mt-2">
                      Yes, HIFU style treatments usually involve no downtime and
                      can be paired with St Mirin&apos;s trails or regular walking.
                      They are best viewed as maintenance or contouring after
                      wider weight loss, not as a replacement for nutrition,
                      movement, or medical obesity treatment.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection
                darkMode={darkMode}
                id="conclusion"
                heading="Conclusion: Paisley's empowered slimming journey"
              >
                <p className={p}>
                  Best weight loss treatment Paisley is goal tuned: medical GLP
                  1 treatment for big drops, non surgical treatment for inches,
                  and NHS foundations for safety. From GP chats to St
                  Mirin&apos;s walks, Renfrewshire is accessible and evidence
                  backed.
                </p>
                <p className={p}>
                  Assess wisely and act locally. Your sustainable Paisley
                  transformation starts with a realistic plan, a registered
                  clinician when medicine is involved, and habits you can keep
                  after the first exciting weeks have passed.
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
                    pharmacy safety standards. This Paisley guide is educational
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
                heading="Practical next steps for Paisley residents"
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
                    href="/blog/best-weight-loss-treatment-in-glasgow"
                    className={linkCls}
                  >
                    Glasgow
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-edinburgh"
                    className={linkCls}
                  >
                    Edinburgh
                  </Link>
                  , and{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-livingston"
                    className={linkCls}
                  >
                    Livingston
                  </Link>
                  .
                </p>
              </section>
            </article>

            <div className="mt-14">
              <GuideSharePanel
                url={shareUrl}
                title={PAGE_TITLE}
                description="Best weight loss treatment Paisley Scotland: GLP 1 options, body contouring, NHS support, timelines, and Renfrewshire tips."
              />
            </div>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
