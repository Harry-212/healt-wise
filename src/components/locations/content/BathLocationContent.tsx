"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSection } from "@/components/guide/GuideLayout";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import {
  buildLocationFaq,
  UK_LOCATION_SOURCES,
} from "@/lib/content/uk-location-article-data";
import {
  UK_WEIGHT_LOSS_FLAT_INDEX_PATH,
  type UkWeightLossLocation,
} from "@/lib/data/uk-weight-loss-locations";
import { capitalizeHeadingWords } from "@/lib/text/heading-case";

const PAGE_TITLE =
  "Best Weight Loss Treatment Bath: Somerset Secrets to Sustainable Shape";

type Props = {
  loc: UkWeightLossLocation;
  shareUrl: string;
};

const PLACE = "Bath";

export default function BathLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      {
        id: "intro",
        label: `Why best weight loss treatment in ${PLACE} is personal`,
      },
      {
        id: "unique-challenges",
        label: `${PLACE}'s historic hurdles to healthier weights`,
      },
      { id: "core-elements", label: `Cornerstones of Bath ready weight loss` },
      {
        id: "advanced-options",
        label: "Precision fat reduction for Bath dwellers",
      },
      { id: "behavioral", label: "Psychological and routine refinements" },
      { id: "measuring-success", label: "Metrics and minefields in Bath" },
      { id: "local-resources", label: "Bath Somerset supports" },
      {
        id: "access-medicines",
        label: "Prescription medicines and Somerset comparator context",
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
            <GuideTocSidebar key="uk-loc-toc-bath" toc={toc} />
          ) : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection
                darkMode={darkMode}
                id="intro"
                heading={`Why best weight loss treatment in ${PLACE} is personal`}
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  For those seeking effective weight loss in Bath, UK, the best
                  results are typically found by combining clinical treatments,
                  non-surgical procedures, and local health services. Residents
                  can access professional fat-dissolving injections, such as
                  Aqualyx, at specialized clinics like Cookie Couture or AJ
                  Medical Beauty, while Pulteney Pharmacy offers comprehensive
                  medical weight management including weekly injection services.
                  Additionally, the NHS and local health services provide
                  specialized, personalized management plans, ensuring a
                  well-rounded approach that bridges the gap between private
                  cosmetic treatments and public healthcare support. Start with{" "}
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
                  if brands flood your search results.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="unique-challenges"
                heading={`${PLACE}'s historic hurdles to healthier weights`}
              >
                <p className={p}>
                  Pacing{" "}
                  <a
                    href="https://www.visitbath.co.uk/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Pulteney Bridge
                  </a>{" "}
                  is scenic and sneaky for calories. South West summaries often
                  place adult obesity near{" "}
                  <strong className={strong}>around one in four</strong> in
                  national tables; tourist treats and student crowds amplify
                  quick carbs. Verify years and definitions on{" "}
                  <a
                    href="https://digital.nhs.uk/data-and-information/publications/statistical/statistics-on-obesity-physical-activity-and-diet"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NHS Digital obesity statistics
                  </a>
                  .
                </p>
                <p className={p}>
                  Juice cleanses allure abounds; broader evidence still shows
                  rebounds after extreme restriction. Cheddar and Somerset dairy
                  temptations need clever counters: smaller portions, more salad
                  volume, protein first lunches. Hilly streets help unevenly;
                  consistency still wins Wednesday through Sunday.
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
                heading={`Cornerstones of Bath ready weight loss`}
              >
                <p className={p}>
                  No single fix: integrated plans prevail in data. Use{" "}
                  <Link
                    href="/compare/best-weight-loss-treatments-uk"
                    className={linkCls}
                  >
                    our UK comparator
                  </Link>{" "}
                  when you want lifestyle, coaching, and medicines in one calm
                  overview.
                </p>

                <h3
                  className={`pt-2 text-base font-semibold tracking-tight ${strong}`}
                >
                  Cuisine crafts for Somerset tastes
                </h3>
                <p className={p}>
                  Roughly <strong className={strong}>500 to 600 kcal</strong>{" "}
                  daily gaps often support steady monthly change when adherence
                  holds. Anchor to{" "}
                  <a
                    href="https://www.nice.org.uk/guidance/ng246"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NICE NG246
                  </a>
                  . Bath spin: Somerset brie with big salads, not daily buns.
                  Dairy protein and calcium discussions appear in human
                  nutrition journals such as{" "}
                  <a
                    href="https://doi.org/10.1017/S0007114525000234"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Journal of Human Nutrition (2025)
                  </a>
                  ; treat headlines as context, not destiny.
                </p>
                <p className={p}>
                  Alternate day style fasting may suit quiet spa weekdays;
                  trials log modest averages over several months when people
                  stick. Watch fatigue after long events. Keto buzz continues,
                  yet metabolism reviews temper enthusiasm for social
                  sustainability; see discussions in{" "}
                  <a
                    href="https://doi.org/10.1186/s12986-024-00812-3"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Nutrition and Metabolism (2025)
                  </a>
                  .
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
                  Activity aligned with Bath&apos;s slopes
                </h3>
                <p className={p}>
                  Paths at{" "}
                  <a
                    href="https://www.nationaltrust.org.uk/visit/somerset/prior-park-landscape-garden"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Prior Park Landscape Garden
                  </a>{" "}
                  and climbs toward Lansdown stack steps with views. The{" "}
                  <a
                    href="https://www.who.int/news-room/fact-sheets/detail/physical-activity"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    WHO physical activity fact sheet
                  </a>{" "}
                  still centres on regular moderate work plus strength sessions.
                  Resistance bands at home or in a small flat can protect
                  muscle. Research centres such as the{" "}
                  <a
                    href="https://www.bristol.ac.uk/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    University of Bristol
                  </a>{" "}
                  often stress strength work for metabolic health in public
                  guidance. Bridge lunges and step ups fit tight schedules
                  between lectures or festival shifts.
                </p>
                <p className={p}>
                  Sprint intervals feel potent when joints allow; applied
                  physiology reviews often favour higher intensity blocks for
                  fat change, balanced with easy walks so weekly energy stays
                  honest.
                </p>
                <p className={`text-sm ${muted}`}>
                  Background:{" "}
                  <a
                    href="https://link.springer.com/journal/421"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    European Journal of Applied Physiology
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="advanced-options"
                heading="Precision fat reduction for Bath dwellers"
              >
                <p className={p}>
                  Cryolipolysis style cooling can trim local fat for selected
                  candidates; marketing loves neat percentages while consent
                  lists contraindications. South West access is workable, but
                  operator skill matters. Shockwave or acoustic therapies
                  sometimes support skin tone narratives; cosmetic journals
                  hedge outcomes hard.
                </p>
                <p className={p}>
                  Lifestyle glue still matters. Clinical obesity reviews insist
                  on pairing devices with food, sleep, and movement. Bath&apos;s
                  circuits, parks, and resistance habits complement honest
                  medical plans instead of replacing them.
                </p>
                <p className={`text-sm ${muted}`}>
                  Examples:{" "}
                  <a
                    href="https://academic.oup.com/asj"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Aesthetic Surgery Journal
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.1111/jocd.16145"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Journal of Cosmetic Dermatology (2025)
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.1111/cob.13012"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Clinical Obesity (2024)
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="behavioral"
                heading="Psychological and routine refinements"
              >
                <p className={p}>
                  Festival and hospitality stress can lift cortisol and grazing.
                  Behavioural medicine trials link meditation, sleep regularity,
                  and compassionate planning to better adherence than pure
                  willpower. Food logs can raise adherence when they feel
                  curious, not punitive; an acquaintance tracking abbey stroll
                  snacks found simpler wins than midnight restriction vows.
                </p>
                <p className={p}>
                  Veggie volume fills plates with fewer energy dense extras;
                  appetite research supports high volume, lower density meals
                  for many people. Pair skills with{" "}
                  <Link href="/methodology" className={linkCls}>
                    our methodology
                  </Link>{" "}
                  when comparing clinics that promise effortless results.
                </p>
                <p className={`text-sm ${muted}`}>
                  Examples:{" "}
                  <a
                    href="https://doi.org/10.1007/s10865-024-00456-7"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Journal of Behavioral Medicine (2024)
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.1016/j.appet.2025.107345"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Appetite (2025)
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="measuring-success"
                heading={`Metrics and minefields in ${PLACE}`}
              >
                <p className={p}>
                  Body composition scans and waist measures add context beyond
                  scales alone. Stalls happen; protein pulses or step targets
                  may help some people, but discuss medication changes with a
                  prescriber. See endocrine review hubs for nuanced protein
                  timing debates. On GLP 1s, read{" "}
                  <Link
                    href="/helpful-guides/mounjaro-weight-loss-plateau"
                    className={linkCls}
                  >
                    our plateau guide
                  </Link>{" "}
                  before chasing higher doses.
                </p>
                <p className={p}>
                  Meal replacement shakes marketed online are often fluff; the{" "}
                  <a
                    href="https://www.food.gov.uk/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Food Standards Agency
                  </a>{" "}
                  reminds shoppers to verify claims. Bariatric surgery remains
                  for severe, selected cases. Use our{" "}
                  <Link href="/tools/bmi-calculator" className={linkCls}>
                    BMI calculator
                  </Link>{" "}
                  as screening only.
                </p>
                <p className={`text-sm ${muted}`}>
                  Endocrinology discussions:{" "}
                  <a
                    href="https://academic.oup.com/endo"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Endocrinology journal hub
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="local-resources"
                heading="Bath Somerset supports"
              >
                <p className={p}>
                  Kelston and Bath skyline walks, farm markets, and{" "}
                  <a
                    href="https://www.bathnes.gov.uk/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Bath and North East Somerset Council
                  </a>{" "}
                  leisure pages list practical starters. Clubs and apps that
                  reward consistency can add community glue; national public
                  health evidence reviews often credit well run group programmes
                  for better retention than lonely apps alone.
                </p>
                <p className={p}>
                  Compare spa town logistics with our{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-bristol"
                    className={linkCls}
                  >
                    Bristol
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-wells"
                    className={linkCls}
                  >
                    Wells
                  </Link>
                  , and{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-salisbury"
                    className={linkCls}
                  >
                    Salisbury
                  </Link>{" "}
                  guides when you think about courier windows and clinic choice.
                </p>
                <p className={`text-sm ${muted}`}>
                  Population health:{" "}
                  <a
                    href="https://www.gov.uk/government/organisations/uk-health-security-agency"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    UK Health Security Agency
                  </a>{" "}
                  resources.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="access-medicines"
                heading="Prescription medicines and Somerset comparator context"
              >
                <p className={p}>
                  English ICBs and GP practices still gate much NHS obesity
                  care. Private GLP 1 routes can feel instant online until
                  nausea needs a clinician. Before paying, confirm titration,
                  hydration advice, and shared care policy at your surgery.
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
                    this Bath page as orientation, not a consultation.
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
                heading="Conclusion: Bath's balanced breakthrough"
              >
                <p className={p}>
                  <strong className={strong}>
                    Best weight loss treatment Bath?
                  </strong>{" "}
                  Heritage style habits: spa smart meals, slope strides, inner
                  calm. Elegant results favour systems over slogans. Pair
                  movement and food planning with honest medical follow up and{" "}
                  <Link
                    href="/compare/best-weight-loss-treatments-uk"
                    className={linkCls}
                  >
                    UK wide comparisons
                  </Link>{" "}
                  so price matches the care you receive.
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
                    href="/blog/best-weight-loss-treatment-in-bristol"
                    className={linkCls}
                  >
                    Bristol
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-wells"
                    className={linkCls}
                  >
                    Wells
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-salisbury"
                    className={linkCls}
                  >
                    Salisbury
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-westminster"
                    className={linkCls}
                  >
                    Westminster
                  </Link>
                  .
                </p>
              </section>
            </article>

            <div className="mt-14">
              <GuideSharePanel
                url={shareUrl}
                title={PAGE_TITLE}
                description="Bath Somerset: spa town weight habits, hill walks, and safe UK treatment comparisons."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
