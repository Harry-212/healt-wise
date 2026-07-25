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
  "Best Weight Loss Treatment Portsmouth: Complete South Hampshire Guide to NHS, Private & Surgery Options";

export default function PortsmouthLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: "Portsmouth practical overview" },
      { id: "landscape", label: "Portsmouth weight landscape" },
      { id: "nhs", label: "NHS Wellbeing Service" },
      { id: "private", label: "Private injections" },
      { id: "surgery", label: "Bariatric surgery" },
      { id: "criteria", label: "Mounjaro NHS criteria" },
      { id: "timelines", label: "Timelines" },
      { id: "rule", label: "3 3 3 rule" },
      { id: "hacks", label: "Portsmouth hacks" },
      { id: "checklists", label: "Safe steps" },
      { id: "costs", label: "Costs and comparisons" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Portsmouth slimming journey" },
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
          <span className={strong}>Portsmouth</span>
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
                heading="Best weight loss treatment Portsmouth: complete South Hampshire guide to NHS, private and surgery options"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Portsmouth&apos;s historic docks and seafront walks inspire
                  health goals, yet pint stops and commuter sedentary habits add
                  layers. The best weight loss treatment in Portsmouth is not one
                  size. It blends free NHS support with smart private options if
                  needed.
                </p>
                <p className={p}>
                  Best weight loss treatment Portsmouth means understanding the
                  free NHS Wellbeing Programme for BMI 30 or higher, private
                  Wegovy and Mounjaro access, bariatric surgery criteria, 2 stone
                  timelines, and South Hampshire slimming hacks. If you are still
                  comparing the wider UK treatment landscape, start with our{" "}
                  <Link
                    href="/compare/mounjaro-vs-wegovy-vs-saxenda"
                    className={linkCls}
                  >
                    UK weight loss treatment comparison
                  </Link>{" "}
                  and use the{" "}
                  <Link href="/tools/bmi-calculator" className={linkCls}>
                    BMI calculator
                  </Link>{" "}
                  before a GP or clinic appointment.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="landscape"
                heading="Portsmouth's weight landscape: coastal charm versus overweight stats"
              >
                <p className={p}>
                  South Hampshire&apos;s coastal grit means active vibes, but
                  Portsmouth&apos;s adult obesity rate around the national
                  average shapes demand. PO1 to PO6 postcodes mirror much of the
                  regional picture, and self referral to the Wellbeing Service
                  opens doors for many residents.
                </p>
                <p className={p}>
                  Nuance matters. Seafront promenades can burn around 300
                  calories per hour, but fish and chip shops tempt. Fads like
                  juice cleanses may promise fast change, but rebound is common
                  after restrictive short term plans. A local hack is to swap
                  chips for grilled prawns from the harbor when you can, keeping
                  the coastal feel without the same calorie load.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="nhs"
                heading="NHS Portsmouth Wellbeing Service: free, accessible core"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  The Portsmouth Wellbeing Service is the frontline option: a
                  free 12 week adult programme for people aged 18 and above with
                  BMI 30 or higher, or 27.5 or higher for ethnic minorities
                  across PO1 to PO6 postcodes. You can self refer online or go
                  through your GP, without the same wait as specialist clinics.
                </p>
                <p className={p}>Programme perks include:</p>
                <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                  <li>
                    Weekly group meetings at venues such as Paulsgrove Community
                    Centre for peer support.
                  </li>
                  <li>
                    Dietitian led nutrition, including swaps such as baps for
                    lean Portsea chicken salads.
                  </li>
                  <li>
                    Exercise modules using seafront circuits and strength
                    basics.
                  </li>
                </ul>
                <p className={p}>
                  Results in structured lifestyle trials commonly sit around 5
                  to 10% body weight loss over 12 weeks for people who engage
                  consistently, outperforming solo diets. The critique is that
                  specialist clinic waits, including Queen Alexandra Hospital
                  style pathways, may still be 3 to 6 months. Lifestyle referral
                  usually comes first.
                </p>
                <p className={p}>
                  GP referrals can also go to St Mary&apos;s Campus for
                  individualised counselling, including nutritional tweaks for
                  night shifts or parenting stress.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="private"
                heading="Private weight loss injections: Wegovy, Mounjaro, and Saxenda access"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Private injections, especially GLP 1 medicines, feel legible:
                  price, calendar, and courier tracking. For Portsmouth, online
                  pharmacies can deliver refrigerated pens such as semaglutide
                  Wegovy, tirzepatide Mounjaro, and liraglutide Saxenda.
                </p>
                <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                  <li>
                    Wegovy is a weekly pen with around 12 to 15% loss reported
                    in selected trials.
                  </li>
                  <li>
                    Mounjaro is a dual GIP and GLP 1 medicine with around 20%
                    loss reported in selected trial settings.
                  </li>
                  <li>
                    Saxenda is a daily option and can be a milder starter for
                    some people.
                  </li>
                </ul>
                <p className={p}>
                  Private access tips are simple but important: check that the
                  provider is GPhC registered, ask for a slow titration plan such
                  as a low starting dose to reduce nausea, and confirm cold chain
                  delivery. Costs often sit around GBP150 to GBP350 per month
                  including delivery, depending on dose and provider.
                </p>
                <p className={p}>
                  Private care often skips GP shared care unless you request it,
                  and returning to care after a course can become costly. NHS
                  formularies may block Mounjaro if it is not first line. Before
                  choosing a provider, compare our{" "}
                  <Link href="/wegovy-price-comparison" className={linkCls}>
                    Wegovy price comparison
                  </Link>
                  ,{" "}
                  <Link href="/mounjaro-price-comparison" className={linkCls}>
                    Mounjaro price comparison
                  </Link>
                  , and{" "}
                  <Link href="/saxenda-price-comparison" className={linkCls}>
                    Saxenda price comparison
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="surgery"
                heading="Bariatric surgery: Portsmouth hospital access paths"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Bariatric surgery, such as gastric bypass or sleeve, is for
                  severe cases and may be accessed through NHS referral via
                  Queen Alexandra Hospital style pathways. It is usually not a
                  first step.
                </p>
                <p className={p}>Typical criteria include:</p>
                <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                  <li>BMI 40 or higher, or BMI 35 or higher with diabetes or heart issues.</li>
                  <li>Completion of NHS lifestyle support such as Wellbeing first.</li>
                  <li>Mental health stability and no active substance use.</li>
                  <li>Age 18 to 65 in many pathways.</li>
                </ul>
                <p className={p}>
                  NHS waits can be 12 to 24 months. Outcomes can reach 15 to 25%
                  loss or more in selected patients, but surgery has risks and
                  recovery demands. Private hospital routes can cost GBP10,000
                  to GBP15,000 or more and may move faster, but post care gaps
                  matter. Surgery is not forever by itself, and regain can occur
                  without habits.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="criteria"
                heading="GLP 1 NHS criteria: Mounjaro specifics for Hampshire ICB"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Hampshire Integrated Care Board follows NICE style criteria for
                  GLP 1 medicines like Mounjaro. The commonly discussed five
                  criteria are BMI threshold, comorbidities, failed lifestyle
                  support, prescriber approval, and monitoring bloods.
                </p>
                <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                  <li>BMI 35 or higher, or BMI 30 or higher with severe comorbidity such as hypertension.</li>
                  <li>Comorbidities such as Type 2 diabetes or cardiovascular risk.</li>
                  <li>Completed 12 week Wellbeing support with less than 5% loss.</li>
                  <li>GP or specialist prescriber approval.</li>
                  <li>Quarterly bloods and side effect checks.</li>
                </ul>
                <p className={p}>
                  Mounjaro adds GIP activity for appetite control and has strong
                  trial data, but NHS care may prioritise Wegovy first. A
                  Portsmouth GP can assess BMI, ethnicity adjustments, and
                  referral to a metabolic clinic if eligible. Cheap online ads
                  often exclude follow up, so read the small print.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="timelines"
                heading="Timelines: 2 stone in 12 weeks and 5kg safely"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  No 7 day 5kg plan is safe. Rapid early drops usually mean
                  dehydration or muscle loss. A 2 stone loss, or 12.7kg, in 12
                  weeks may be possible for some people at around 1kg per week,
                  but it needs a 500 to 600 calorie deficit, regular exercise,
                  protein, and monitoring.
                </p>
                <p className={p}>
                  For 5kg, a 0.75kg weekly pace gives a 5 to 7 week timeline for
                  suitable people, supported by market vegetable swaps and
                  regular movement. Plateaus around week 8 are common, and some
                  people respond by increasing protein and checking portions
                  before changing anything dramatic.
                </p>
                <p className={p}>
                  The Kelly Clarkson angle is often framed as GLP 1 plus cardio.
                  The UK version needs monitoring, eligibility checks, and a plan
                  that still works after the headlines fade. If you hit a stall,
                  our{" "}
                  <Link
                    href="/helpful-guides/mounjaro-weight-loss-plateau"
                    className={linkCls}
                  >
                    Mounjaro plateau guide
                  </Link>{" "}
                  can help you review what to ask next.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="rule"
                heading="The 3 3 3 rule for fat loss: Portsmouth edition"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  The 3 3 3 rule is a simple Portsmouth friendly framework: 3
                  protein and vegetable meals, 3 strength sessions each week,
                  and 3L water daily if suitable for your health profile.
                </p>
                <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                  <li>
                    3 meals: protein such as chicken, vegetables such as harbor
                    prawns, and fibre from whole grains.
                  </li>
                  <li>
                    3 strength sessions per week: 20 minute home circuits using
                    kettlebells or bodyweight moves that mimic dock lifts.
                  </li>
                  <li>
                    3L water: for some people, hydration helps reduce unnecessary
                    snacking, though medical conditions may change the right
                    amount.
                  </li>
                </ul>
                <p className={p}>
                  The result is not magic, but the structure can support a
                  meaningful fat loss trend over a quarter when it is repeated
                  consistently.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="hacks"
                heading="Practical Portsmouth hacks: local resources and bootches"
              >
                <p className={p}>
                  Seafront paths can burn around 300 calories per hour for some
                  walkers. Markets make fresh lean meats easier to choose.
                  Portsmouth Wellbeing groups can add adherence because they
                  turn intention into appointments.
                </p>
                <p className={p}>
                  Rainy days can be covered by home circuits, and apps can make
                  tracking easier when routine slips. The key is not a perfect
                  day. It is a repeatable day that nudges calories, protein, and
                  movement in the right direction.
                </p>
                <p className={p}>
                  Unlicensed products are not worth the risk. If a product lacks
                  a UK supply chain, proper prescriber details, or pharmacy
                  registration, walk away.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="checklists"
                heading="Checklists: safe steps for Portsmouth residents"
              >
                <p className={p}>Before private care:</p>
                <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                  <li>Verify the GPhC prescriber and pharmacy.</li>
                  <li>Get the titration plan and side effect policy in writing.</li>
                  <li>Budget GBP200 or more per month including delivery to PO postcodes.</li>
                  <li>Consider NHS first through GP BMI with ethnic adjustment.</li>
                  <li>Ask whether shared care is available.</li>
                  <li>Avoid GLP 1 treatment during pregnancy or when planning pregnancy.</li>
                  <li>Treat pancreatitis history as a reason to pause and get clinician advice.</li>
                </ul>
                <p className={p}>
                  For a practical safety checklist, read our guide to{" "}
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
                id="costs"
                heading="Deep dive: costs and comparisons tailored to PO"
              >
                <p className={p}>
                  NHS support is free through the Wellbeing programme, and GLP 1
                  medicines may be available if you meet criteria. Private
                  options usually cost around GBP150 to GBP350 per month for
                  Wegovy, Mounjaro, or Saxenda, with delivery varying between
                  urban and more awkward local routes.
                </p>
                <p className={p}>
                  Bariatric surgery is free on the NHS if you qualify, but waits
                  can be long. Private surgery can cost GBP10,000 or more. The
                  best household view is to compare monthly totals including
                  repeats, delivery, follow up, and any blood tests.
                </p>
              </GuideSection>

              <section id="faq" className="scroll-mt-28">
                <h2 className={`text-xl font-semibold ${strong}`}>
                  FAQs on best weight loss treatment Portsmouth
                </h2>
                <div className={`mt-6 space-y-8 text-sm ${p}`}>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      Which is the most effective weight loss treatment overall?
                    </h3>
                    <p className="mt-2">
                      Combination plans usually win. NHS lifestyle support plus
                      GLP 1 treatment if eligible can yield around 15 to 20% loss
                      in selected patients, while surgery can exceed 25% in some
                      settings. The right choice depends on risk, eligibility,
                      and monitoring.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      What are the 5 criteria for Mounjaro on NHS Hampshire?
                    </h3>
                    <p className="mt-2">
                      The commonly discussed criteria are BMI 35 or higher,
                      comorbidities such as diabetes, failed 12 week lifestyle
                      support, prescriber approval, and quarterly blood
                      monitoring.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      What is the practical 3 3 3 rule for sustainable fat loss
                      here?
                    </h3>
                    <p className="mt-2">
                      Use 3 protein and vegetable meals, 3 strength sessions
                      weekly, and 3L water daily if suitable. It is a simple
                      structure for Portsmouth locals, not a formal medical rule.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      How realistically to lose 2 stone in 12 weeks via
                      Portsmouth NHS?
                    </h3>
                    <p className="mt-2">
                      It can be possible for some people at about 1kg per week,
                      but it needs a calorie deficit, seafront HIIT or similar
                      movement, protein, and monitoring. Many people need a
                      slower pace to protect muscle and reduce rebound.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      Can I access Wegovy privately without GP in Portsmouth?
                    </h3>
                    <p className="mt-2">
                      Yes, via GPhC registered clinics if you meet criteria such
                      as BMI 30 or higher. Cold chain delivery and follow up are
                      essential. Shared care with your GP is optional but useful
                      when available.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      Why do Portsmouth searches mention cheap GLP 1 injections?
                    </h3>
                    <p className="mt-2">
                      Price is visible and tempting, but cheap offers may exclude
                      follow up, blood tests, or side effect support. Read the
                      small print and compare total value, not only the headline
                      medicine price.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection
                darkMode={darkMode}
                id="conclusion"
                heading="Conclusion: Portsmouth's empowered slimming journey"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Portsmouth is layered and local
                  smart: NHS Wellbeing for a free proven foundation, private GLP
                  1 treatment or surgery if criteria are met, and a plan that is
                  monitored rather than rushed.
                </p>
                <p className={p}>
                  From self referrals to harbor hacks, sustainable South
                  Hampshire wins are possible. Assess wisely and start local.
                  Your fitter dockside self is closer than you think.
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
                    safety standards. This Portsmouth guide is educational
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
                heading="Practical next steps for Portsmouth residents"
              >
                <ul className={`list-none space-y-2.5 text-sm ${p}`}>
                  <li>
                    <Link
                      href="/compare/mounjaro-vs-wegovy-vs-saxenda"
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
                    href="/blog/best-weight-loss-treatment-in-southampton"
                    className={linkCls}
                  >
                    Southampton
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-bournemouth"
                    className={linkCls}
                  >
                    Bournemouth
                  </Link>
                  , and{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-winchester"
                    className={linkCls}
                  >
                    Winchester
                  </Link>
                  .
                </p>
              </section>
            </article>

            <div className="mt-14">
              <GuideSharePanel
                url={shareUrl}
                title={PAGE_TITLE}
                description="Best weight loss treatment Portsmouth: NHS Wellbeing, private Wegovy and Mounjaro, surgery criteria, timelines, and Hampshire hacks."
              />
            </div>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
