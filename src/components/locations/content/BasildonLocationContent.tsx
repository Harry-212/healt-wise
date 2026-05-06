"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSection } from "@/components/guide/GuideLayout";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { useUkLocationFaq } from "@/components/locations/UkLocationFaqProvider";
import { UK_LOCATION_SOURCES } from "@/lib/content/uk-location-article-data";
import {
  UK_WEIGHT_LOSS_FLAT_INDEX_PATH,
  type UkWeightLossLocation,
} from "@/lib/data/uk-weight-loss-locations";
import { capitalizeHeadingWords } from "@/lib/text/heading-case";

const PAGE_TITLE =
  "Best Weight Loss Treatment Basildon: Essex Edge for Everyday Slimming";

type Props = {
  loc: UkWeightLossLocation;
  shareUrl: string;
};

const PLACE = "Basildon";

export default function BasildonLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      {
        id: "intro",
        label: `Why best weight loss treatment in ${PLACE} is personal`,
      },
      { id: "unique-challenges", label: `${PLACE}'s commuter weight hurdles` },
      {
        id: "core-elements",
        label: `Pillars of solid weight loss in ${PLACE}`,
      },
      { id: "advanced-options", label: "Non surgical fat busters for locals" },
      { id: "behavioral", label: "Habit and headspace wins" },
      { id: "measuring-success", label: "Gauges and gremlins in Basildon" },
      { id: "local-resources", label: "Basildon Essex boosters" },
      {
        id: "access-medicines",
        label: "Prescription medicines and Essex comparator context",
      },
      { id: "sources", label: "Sources you can open in a second tab" },
      {
        id: "trust",
        label: "Why Health Wise is a comparator, not a prescriber",
      },
      {
        id: "next-steps",
        label: `Practical next steps (UK wide, including ${PLACE})`,
      },
      { id: "disclaimer", label: "Disclaimer" },
      { id: "faq", label: "Frequently Asked Questions" },
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

  const faqMarkdownComponents = useMemo(
    () => ({
      p: ({ children }: { children?: React.ReactNode }) => (
        <span className="block">{children}</span>
      ),
      a: ({ href, children }: { href?: string; children?: React.ReactNode }) =>
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

  const faqItems = useUkLocationFaq();

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
            <Moon
              className={`h-4 w-4 ${darkMode ? "text-slate-300" : "text-slate-700"}`}
            />
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
            <Sun
              className={`h-4 w-4 ${darkMode ? "text-yellow-400" : "text-slate-400"}`}
            />
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

        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          {toc.length > 0 ? (
            <GuideTocSidebar key="uk-loc-toc-basildon" toc={toc} />
          ) : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection
                darkMode={darkMode}
                id="intro"
                heading={`Why best weight loss treatment in ${PLACE} is personal`}
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Weight loss solutions in Basildon feature a variety of medical
                  interventions, most notably advanced treatments like Wegovy
                  (semaglutide) and Mounjaro (tirzepatide), which are accessible
                  through specialized providers such as The Slimming Clinic and
                  other local practitioners. Beyond systemic medication, those
                  seeking targeted fat reduction can opt for localized
                  fat-dissolving injections specifically designed for areas like
                  the chin and abdomen. To ensure long-term success, these
                  clinical options are typically integrated with professional
                  lifestyle coaching and personalized dietary adjustments,
                  providing a comprehensive approach to health and weight
                  management. Orient first with{" "}
                  <Link
                    href="/compare/best-weight-loss-treatments-uk"
                    className={linkCls}
                  >
                    best weight loss treatments in the UK
                  </Link>
                  , then read{" "}
                  <Link href="/what-is-mounjaro" className={linkCls}>
                    Mounjaro
                  </Link>
                  ,{" "}
                  <Link href="/what-is-wegovy" className={linkCls}>
                    Wegovy
                  </Link>
                  , and{" "}
                  <Link href="/what-is-saxenda" className={linkCls}>
                    Saxenda
                  </Link>{" "}
                  if those brands keep appearing in your inbox.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="unique-challenges"
                heading={`${PLACE}'s commuter weight hurdles`}
              >
                <p className={p}>
                  Rush hour toward London trains can mean long sitting and grab
                  and go breakfasts. Essex wide obesity summaries often sit near{" "}
                  <strong className={strong}>around three in ten</strong> adults
                  in national tables, with urban centres feeling fast food
                  density. Factory and warehouse shifts can curb home cooking
                  energy. Check definitions on{" "}
                  <a
                    href="https://digital.nhs.uk/data-and-information/publications/statistical/statistics-on-obesity-physical-activity-and-diet"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NHS Digital obesity statistics
                  </a>{" "}
                  before treating any percentage as personal fate.
                </p>
                <p className={p}>
                  Detox crazes look shiny. Broader reviews still warn that
                  aggressive short plans rebound hard. Here, pie and mash
                  culture needs practical pivots: smaller swaps, not perfection.
                  Desk heavy weeks demand anti sit strategies such as walking
                  calls, earlier station exits, and strength work you can finish
                  in twenty minutes.
                </p>
                <p className={`text-sm ${muted}`}>
                  Context:{" "}
                  <a
                    href="https://doi.org/10.1016/S0140-6736(24)00234-5"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Lancet (2024) diet trials and regain
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="core-elements"
                heading={`Pillars of solid weight loss in ${PLACE}`}
              >
                <p className={p}>
                  Synergy beats solo tricks; evidence usually rewards stacks.
                  Use{" "}
                  <Link
                    href="/compare/best-weight-loss-treatments-uk"
                    className={linkCls}
                  >
                    our UK comparator
                  </Link>{" "}
                  when you want medicines, coaching, and devices in one calm
                  frame.
                </p>

                <h3
                  className={`pt-2 text-base font-semibold tracking-tight ${strong}`}
                >
                  Fuel fixes for Essex appetites
                </h3>
                <p className={p}>
                  Roughly <strong className={strong}>400 to 600 kcal</strong>{" "}
                  daily shortfalls often yield steady losses when adherence
                  holds. Anchor expectations to{" "}
                  <a
                    href="https://www.nice.org.uk/guidance/ng246"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NICE NG246
                  </a>
                  . Basildon play: grilled chicken from town markets over daily
                  takeaways, extra vegetables, and fibre that keeps you full on
                  late trains. See cohort style discussions such as{" "}
                  <a
                    href="https://doi.org/10.1017/S0007114524000456"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    British Journal of Nutrition (2024)
                  </a>{" "}
                  for fibre rich patterns and satiety, not miracle promises.
                </p>
                <p className={p}>
                  Two day fasting patterns might mesh with rotating shifts if a
                  clinician agrees; trials log modest quarterly averages when
                  people stick. Watch fatigue on long drives. Paleo style plans
                  can appeal, yet social fit matters; see appetite research such
                  as{" "}
                  <a
                    href="https://doi.org/10.1016/j.appet.2024.107234"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Appetite (2025)
                  </a>{" "}
                  for adherence angles.
                </p>
                <p className={`text-sm ${muted}`}>
                  Time restricted trial:{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2206038"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NEJM (2023)
                  </a>
                  .
                </p>

                <h3
                  className={`pt-4 text-base font-semibold tracking-tight ${strong}`}
                >
                  Motion made for Basildon life
                </h3>
                <p className={p}>
                  Park loops around{" "}
                  <a
                    href="https://www.basildon.gov.uk/leisure/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Wat Tyler Country Park
                  </a>{" "}
                  or trips into{" "}
                  <a
                    href="https://www.thorndoncountrypark.co.uk/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Thorndon Country Park
                  </a>{" "}
                  stack steps without a boutique membership. The{" "}
                  <a
                    href="https://www.who.int/news-room/fact-sheets/detail/physical-activity"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    WHO physical activity fact sheet
                  </a>{" "}
                  still centres on regular moderate work plus strength sessions.
                  Bodyweight training a few times weekly supports muscle during
                  a deficit; summaries from university health communicators such
                  as{" "}
                  <a
                    href="https://www.phc.ox.ac.uk/research"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Oxford population health research
                  </a>{" "}
                  explain why that matters for metabolism and independence.
                  After you park, a short squat and lunge circuit costs minutes
                  and breaks up sitting.
                </p>
                <p className={p}>
                  HIIT style apps can be efficient when joints allow; physiology
                  reviews often favour higher intensity blocks for fat change,
                  but sleep and recovery still rule. Mix intensity with easy
                  walks so weekday NEAT does not vanish.
                </p>
                <p className={`text-sm ${muted}`}>
                  Background:{" "}
                  <a
                    href="https://physoc.onlinelibrary.wiley.com/journal/14697791"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Journal of Physiology
                  </a>{" "}
                  intensity literature.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="advanced-options"
                heading="Non surgical fat busters for locals"
              >
                <p className={p}>
                  Fat freezing style devices may reduce local fat pockets for
                  selected candidates; marketing loves percentages while consent
                  forms list limits. Essex and London corridor clinics are
                  reachable, but quality varies. Ultrasound based options exist
                  too; cosmetic dermatology journals stress operator skill and
                  realistic aftercare.
                </p>
                <p className={p}>
                  Diet still anchors results. Obesity science reviews insist on
                  integration, not gadgets alone. Basildon walks and strength
                  habits seal the deal: burn some energy, protect muscle, repeat
                  next week.
                </p>
                <p className={`text-sm ${muted}`}>
                  Examples:{" "}
                  <a
                    href="https://doi.org/10.1111/jocd.15987"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Journal of Cosmetic Dermatology (2024)
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.1111/jocd.16012"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    JCD (2025)
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.1159/000537890"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Obesity Facts (2024)
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="behavioral"
                heading="Habit and headspace wins"
              >
                <p className={p}>
                  Tube and rail delays spark stress snacks. Coping skills tied
                  to sleep regularity, meal planning, and compassionate logging
                  show up in psychoneuroendocrinology style research as
                  meaningful levers, not lectures. Trackers can improve
                  retention when they feel supportive; pair them with station
                  strides and weekend park miles.
                </p>
                <p className={p}>
                  Protein first meals often improve satiety on busy evenings;
                  see reviews such as{" "}
                  <a
                    href="https://doi.org/10.1093/nutrit/nuae045"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Nutrition Reviews (2025)
                  </a>
                  . For fair provider comparisons, keep{" "}
                  <Link href="/methodology" className={linkCls}>
                    our methodology
                  </Link>{" "}
                  open beside any app that promises effortless loss.
                </p>
                <p className={`text-sm ${muted}`}>
                  Examples:{" "}
                  <a
                    href="https://doi.org/10.1016/j.psyneuen.2024.106234"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Psychoneuroendocrinology (2024)
                  </a>
                  ;{" "}
                  <a
                    href="https://www.jmir.org/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    JMIR digital health literature
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="measuring-success"
                heading={`Gauges and gremlins in ${PLACE}`}
              >
                <p className={p}>
                  Waist measurements and fit of clothes often track fat change
                  better than scales alone. Stalls happen; gentle carb cycling
                  or step targets may help some people, but run changes past a
                  clinician if you use medicines. See metabolism reviews such as{" "}
                  <a
                    href="https://doi.org/10.1016/j.metabol.2025.155678"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Metabolism (2025)
                  </a>{" "}
                  for nuance. On GLP 1s, read{" "}
                  <Link
                    href="/helpful-guides/mounjaro-weight-loss-plateau"
                    className={linkCls}
                  >
                    our plateau guide
                  </Link>{" "}
                  before panic tweaks.
                </p>
                <p className={p}>
                  Gimmick teas and unlicensed injectables deserve scepticism;
                  the{" "}
                  <a
                    href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    MHRA
                  </a>{" "}
                  publishes alerts worth reading. Bariatric surgery remains for
                  specialist selected cases. Use our{" "}
                  <Link href="/tools/bmi-calculator" className={linkCls}>
                    BMI calculator
                  </Link>{" "}
                  as screening only.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="local-resources"
                heading="Basildon Essex boosters"
              >
                <p className={p}>
                  Nature trails, town centre markets, and{" "}
                  <a
                    href="https://www.basildon.gov.uk/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Basildon Council
                  </a>{" "}
                  leisure pages list practical starters. Walking groups and apps
                  that reward consistency can add social glue; public health
                  journals credit community layers for better retention when
                  programmes are well run.
                </p>
                <p className={p}>
                  Compare commuter realities with our{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-chelmsford"
                    className={linkCls}
                  >
                    Chelmsford
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-southend-on-sea"
                    className={linkCls}
                  >
                    Southend on Sea
                  </Link>
                  , and{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-crawley"
                    className={linkCls}
                  >
                    Crawley
                  </Link>{" "}
                  guides when you think about courier cut offs and clinic
                  density.
                </p>
                <p className={`text-sm ${muted}`}>
                  Population science:{" "}
                  <a
                    href="https://www.thelancet.com/journals/lanpub/home"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Lancet Public Health
                  </a>{" "}
                  community intervention themes.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="access-medicines"
                heading="Prescription medicines and Essex comparator context"
              >
                <p className={p}>
                  In England, GP practices and integrated care boards still gate
                  much NHS obesity care. Private GLP 1 routes can feel faster
                  online until nausea or gallbladder questions appear. Before
                  paying, confirm titration, anti sickness plans, and whether
                  your surgery will accept shared care.
                </p>
                <p className={p}>
                  Orientation:{" "}
                  <Link href="/what-is-mounjaro" className={linkCls}>
                    Mounjaro
                  </Link>
                  ,{" "}
                  <Link href="/what-is-wegovy" className={linkCls}>
                    Wegovy
                  </Link>
                  ,{" "}
                  <Link href="/what-is-saxenda" className={linkCls}>
                    Saxenda
                  </Link>
                  . Budgets:{" "}
                  <Link href="/mounjaro-price-comparison" className={linkCls}>
                    Mounjaro prices
                  </Link>
                  ,{" "}
                  <Link href="/wegovy-price-comparison" className={linkCls}>
                    Wegovy prices
                  </Link>
                  ,{" "}
                  <Link href="/saxenda-price-comparison" className={linkCls}>
                    Saxenda prices
                  </Link>
                  . Delivery:{" "}
                  <Link
                    href="/helpful-guides/mounjaro-delivery-storage-uk"
                    className={linkCls}
                  >
                    Mounjaro delivery and storage
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="sources"
                heading="Sources you can open in a second tab"
              >
                <p className={muted}>
                  We link out on purpose. Verify claims where your health is
                  concerned.
                </p>
                <ul className={`space-y-3 text-sm ${p}`}>
                  {UK_LOCATION_SOURCES.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        className="font-medium text-emerald-600 underline-offset-2 hover:underline"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {s.label.replace(/\s*—\s*/g, ": ")}
                      </a>
                      <span className={muted}>: {s.note}</span>
                    </li>
                  ))}
                </ul>
              </GuideSection>

              <section
                id="trust"
                className={`scroll-mt-28 rounded-xl border p-5 ${border} ${boxBg}`}
              >
                <h2
                  className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  Why Health Wise is a comparator, not a prescriber
                </h2>
                <div className={`mt-4 space-y-3 text-sm ${p}`}>
                  <p>
                    We compare prices and packaging, not your blood tests. Treat
                    this Basildon page as orientation, not a consultation.
                  </p>
                  <p className={muted}>
                    How we work:{" "}
                    <Link href="/methodology" className={linkCls}>
                      methodology
                    </Link>
                    ,{" "}
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
                heading={`Practical next steps (UK wide, including ${PLACE})`}
              >
                <ul className={`list-none space-y-2.5 text-sm ${p}`}>
                  <li>
                    →{" "}
                    <Link
                      href="/compare/best-weight-loss-treatments-uk"
                      className={linkCls}
                    >
                      Compare best weight loss treatments in the UK
                    </Link>
                  </li>
                  <li>
                    →{" "}
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
                  <li>
                    →{" "}
                    <Link
                      href="/helpful-guides/mounjaro-weight-loss-injection-uk"
                      className={linkCls}
                    >
                      Mounjaro weight loss injection (UK guide)
                    </Link>
                  </li>
                  <li>
                    →{" "}
                    <Link href="/tools/bmi-calculator" className={linkCls}>
                      BMI calculator
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
                  be issued by someone who can take responsibility for follow
                  up. If you are pregnant, planning pregnancy, or have had
                  pancreatitis or certain thyroid conditions, some options may
                  be off the table entirely, not merely delayed. When in doubt,
                  your clinician in {name} or online should win the argument
                  over a blog.
                </p>
              </section>

              <section id="faq" className="scroll-mt-28">
                <h2
                  className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  Frequently Asked Questions
                </h2>
                <p className={`mt-2 text-sm ${muted}`}>
                  Structured data on this page uses the same wording for search
                  engines.
                </p>
                <div className={`mt-6 space-y-8 text-sm ${p}`}>
                  {faqItems.map((item) => (
                    <div key={item.q}>
                      <h3
                        className={`text-lg font-semibold leading-snug ${darkMode ? "text-white" : "text-slate-900"}`}
                      >
                        {capitalizeHeadingWords(item.q)}
                      </h3>
                      <div className={`mt-2 leading-relaxed ${p}`}>
                        <ReactMarkdown components={faqMarkdownComponents}>
                          {item.a}
                        </ReactMarkdown>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <GuideSection
                darkMode={darkMode}
                id="conclusion"
                heading="Conclusion: Basildon body reset"
              >
                <p className={p}>
                  <strong className={strong}>
                    Best weight loss treatment Basildon?
                  </strong>{" "}
                  Everyday Essex smarts: smart bites, park power, routine
                  resilience. Your fitter commute starts when systems beat
                  slogans. Pair habits with honest medical follow up and{" "}
                  <Link
                    href="/compare/best-weight-loss-treatments-uk"
                    className={linkCls}
                  >
                    UK wide comparisons
                  </Link>{" "}
                  so budgets match the care you actually receive.
                </p>
              </GuideSection>

              <section
                id="more-uk"
                className={`scroll-mt-28 rounded-xl border p-5 text-sm ${border} ${darkMode ? "bg-slate-900/60" : "bg-slate-50"}`}
              >
                <h2 className={`text-xl font-semibold ${strong}`}>
                  Other places in the UK
                </h2>
                <p className={`mt-2 leading-relaxed ${p}`}>
                  Browse every UK city guide:{" "}
                  <Link
                    href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}
                    className="font-medium text-emerald-600 underline-offset-2 transition-colors hover:text-emerald-500 hover:underline"
                  >
                    All UK location articles
                  </Link>
                  .
                </p>
                <p className={`mt-2 leading-relaxed ${muted}`}>
                  Nearby:{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-chelmsford"
                    className={linkCls}
                  >
                    Chelmsford
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-southend-on-sea"
                    className={linkCls}
                  >
                    Southend on Sea
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-reading"
                    className={linkCls}
                  >
                    Reading
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-crawley"
                    className={linkCls}
                  >
                    Crawley
                  </Link>
                  .
                </p>
              </section>
            </article>

            <div className="mt-14">
              <GuideSharePanel
                url={shareUrl}
                title={PAGE_TITLE}
                description="Basildon Essex: commuter friendly weight loss habits, park miles, and safe UK treatment comparisons."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
