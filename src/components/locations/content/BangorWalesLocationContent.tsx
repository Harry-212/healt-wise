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
  "Best Weight Loss Treatment Bangor Wales: North Wales Paths to Lasting Slimming";

type Props = {
  loc: UkWeightLossLocation;
  shareUrl: string;
};

const PLACE = "Bangor";

export default function BangorWalesLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      {
        id: "intro",
        label: `Why best weight loss treatment in ${PLACE} Wales is personal`,
      },
      {
        id: "unique-challenges",
        label: `Weight struggles in ${PLACE}'s mountain shadow`,
      },
      {
        id: "core-elements",
        label: `Foundations of winning weight loss in ${PLACE}`,
      },
      { id: "advanced-options", label: "Tech aided fat targeting" },
      { id: "behavioral", label: "Behavioural edges in Bangor uni town" },
      { id: "measuring-success", label: "Progress checks and pitfall dodges" },
      { id: "local-resources", label: "Bangor Wales resources roundup" },
      {
        id: "access-medicines",
        label: "Prescription medicines and Welsh comparator context",
      },
      { id: "sources", label: "Sources you can open in a second tab" },
      {
        id: "trust",
        label: "Why Health Wise is a comparator, not a prescriber",
      },
      {
        id: "next-steps",
        label: `Practical next steps (UK wide, including ${PLACE} Wales)`,
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
            <GuideTocSidebar key="uk-loc-toc-bangor-wales" toc={toc} />
          ) : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection
                darkMode={darkMode}
                id="intro"
                heading={`Why best weight loss treatment in ${PLACE} Wales is personal`}
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Weight loss solutions in Bangor, Wales, offer a blend of
                  medical treatments, specialized aesthetic procedures, and
                  public health support. Residents can access advanced weight
                  loss medications like Wegovy and Mounjaro through local
                  pharmacies such as Rowlands Pharmacy or via private clinical
                  consultations at centers like Nichola Hawes Aesthetics, which
                  provides medical weight loss management alongside targeted
                  fat-dissolving injections. For those seeking non-invasive body
                  contouring, the North Wales Clinical Wellness Centre offers
                  high-tech options like 3D Lipo fat freezing and ultrasound
                  cavitation. Complementing these private services, the Betsi
                  Cadwaladr University Health Board provides specialized NHS
                  weight management programmes, such as "Healthy Weight Healthy
                  You," which focus on sustainable lifestyle changes and
                  personalized support for those losing weight for health
                  reasons. Map the landscape with{" "}
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
                  if a clinician mentions those names.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="unique-challenges"
                heading={`Weight struggles in ${PLACE}'s mountain shadow`}
              >
                <p className={p}>
                  Huff up an Elidir trail: rewarding, exhausting, appetite
                  waking. Wales wide obesity statistics sit near{" "}
                  <strong className={strong}>around a quarter</strong> of adults
                  in many national summaries, while Gwynedd&apos;s active
                  terrain can hide desk jobs and long library hours. Student
                  life and tourism swell grab and go snacks. For official
                  framing see{" "}
                  <a
                    href="https://phw.nhs.wales/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Public Health Wales hub
                  </a>{" "}
                  and read the footnotes on year and definition.
                </p>
                <p className={p}>
                  Miracle shakes tempt. Broad reviews still warn that aggressive
                  short plans often rebound. A local angle: bara brith and
                  bakery sugars reward savvy swaps, not guilt loops. Hilly life
                  helps, but consistency rules: repeatable meals, sleep you can
                  defend, and movement you will actually do in sideways rain.
                </p>
                <p className={`text-sm ${muted}`}>
                  Further context:{" "}
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
                heading={`Foundations of winning weight loss in ${PLACE}`}
              >
                <p className={p}>
                  No magic bullet: blends win in trials. Start with{" "}
                  <Link
                    href="/compare/best-weight-loss-treatments-uk"
                    className={linkCls}
                  >
                    our UK comparator
                  </Link>{" "}
                  when you want medicines, coaching, and devices in one sober
                  frame.
                </p>

                <h3
                  className={`pt-2 text-base font-semibold tracking-tight ${strong}`}
                >
                  Eating smart amid Welsh lamb and leeks
                </h3>
                <p className={p}>
                  Roughly <strong className={strong}>500 kcal</strong> daily
                  deficit commonly targets near half a kilo weekly loss when
                  adherence holds; your clinician may pace you slower. Anchor to{" "}
                  <a
                    href="https://www.nice.org.uk/guidance/ng246"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NICE NG246 weight management guidance
                  </a>
                  . Bangor style: roast local lamb with leeks and roots, not a
                  deep fried default every hike. Higher protein patterns often
                  improve satiety; see trial summaries such as{" "}
                  <a
                    href="https://doi.org/10.1007/s00394-024-03345-6"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    European Journal of Nutrition (2024)
                  </a>{" "}
                  for nuance, not a promise printed on a mug.
                </p>
                <p className={p}>
                  Sixteen hour fasting windows with an eight hour eating block
                  can suit hikers who prefer bigger lunches; evidence shows
                  modest quarterly averages when people stick with it. Watch for
                  energy dips on intense ascents. Vegan shifts gain traction,
                  yet nutrient gaps can stall progress without planning; see
                  balanced diet advice on{" "}
                  <a
                    href="https://doi.org/10.3390/nu17020123"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Nutrients (2025)
                  </a>{" "}
                  style reviews alongside a dietitian if you need precision.
                </p>
                <p className={`text-sm ${muted}`}>
                  Time restricted eating trial:{" "}
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
                  Exercise geared for Snowdonia access
                </h3>
                <p className={p}>
                  Pacing{" "}
                  <a
                    href="https://www.nationaltrust.org.uk/visit/wales/penrhyn-castle-and-garden"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Penrhyn Castle
                  </a>{" "}
                  grounds or riverside loops stacks steps without a gym
                  membership. WHO still centres on regular moderate activity
                  plus strength work across the week; read the{" "}
                  <a
                    href="https://www.who.int/news-room/fact-sheets/detail/physical-activity"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    WHO physical activity fact sheet
                  </a>
                  . Weights two or three times weekly protect muscle while you
                  diet; public summaries from{" "}
                  <a
                    href="https://med.stanford.edu/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Stanford Medicine
                  </a>{" "}
                  style resources explain why strength supports metabolism for
                  many adults, not just athletes. Bangor gym circuits can mimic
                  climb patterns when peaks are socked in.
                </p>
                <p className={p}>
                  Circuit training offers quick wins when programmed sensibly;
                  pooled sports medicine literature often favours higher
                  intensity blocks for fat change, but joints and sleep matter.
                  Mix trails, strength, and easy walks so NEAT stays high during
                  term time.
                </p>
                <p className={`text-sm ${muted}`}>
                  Background:{" "}
                  <a
                    href="https://onlinelibrary.wiley.com/journal/1600083x"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Scandinavian Journal of Medicine and Science in Sports
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="advanced-options"
                heading="Tech aided fat targeting for Bangor residents"
              >
                <p className={p}>
                  CoolSculpting style cryotherapy can reduce local fat pockets
                  in selected candidates; marketing often shouts percentages
                  while consent forms list limits. North Wales clinics exist,
                  but quality varies by device and operator. Laser lipo style
                  options contour gently for some; dermatology journals stress
                  variability and follow up.
                </p>
                <p className={p}>
                  Habits amplify results. Standalone devices rarely replace food
                  planning and sleep. Bangor&apos;s trails pair well with any
                  honest medical plan: walk the deficit you can keep, then
                  discuss devices as icing, not the whole cake.
                </p>
                <p className={`text-sm ${muted}`}>
                  Examples:{" "}
                  <a
                    href="https://doi.org/10.1007/s00266-024-04123-4"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Aesthetic Plastic Surgery (2024)
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.1002/lsm.23789"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Lasers in Surgery and Medicine
                  </a>
                  ; commentary in{" "}
                  <a
                    href="https://jamanetwork.com/journals/jamadermatology"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    JAMA Dermatology
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="behavioral"
                heading="Behavioural edges in Bangor uni town"
              >
                <p className={p}>
                  Exam stress fuels late night crisps. Mindfulness and planning
                  skills tie to better adherence in stress and health
                  literature; small wins stack. Journaling apps can boost
                  adherence when they feel supportive; pair them with scheduled
                  walks rather than all night library snacks.
                </p>
                <p className={p}>
                  Gut friendly foods need not be exotic: fermented Welsh
                  cheeses, yogurt, beans, and fibre rich veg support regularity.
                  Microbiome science is fast moving; treat bold claims with the
                  same scepticism we outline in{" "}
                  <Link href="/methodology" className={linkCls}>
                    our methodology
                  </Link>
                  .
                </p>
                <p className={`text-sm ${muted}`}>
                  Examples:{" "}
                  <a
                    href="https://doi.org/10.1002/smi.3345"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Stress and Health (2024)
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.1136/gutjnl-2024-332145"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Gut (2025)
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="measuring-success"
                heading={`Progress checks and pitfall dodges in ${PLACE}`}
              >
                <p className={p}>
                  Tape measures and how clothes fit often track fat change more
                  honestly than scales alone. Plateaus arrive; gentle tweaks to
                  steps, protein, and weekend calories beat panic. See
                  multidisciplinary obesity reviews such as{" "}
                  <a
                    href="https://doi.org/10.1038/s41366-025-01678-9"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    International Journal of Obesity
                  </a>{" "}
                  for adaptive ideas. On GLP 1 medicines, read{" "}
                  <Link
                    href="/helpful-guides/mounjaro-weight-loss-plateau"
                    className={linkCls}
                  >
                    our plateau guide
                  </Link>{" "}
                  before you chase dose changes solo.
                </p>
                <p className={p}>
                  Teas and supplements often hype thin results; the{" "}
                  <a
                    href="https://www.food.gov.uk/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Food Standards Agency
                  </a>{" "}
                  reminds consumers to check claims. Bariatric surgery remains
                  for extreme cases with strict criteria; discuss only with
                  specialist teams. Use our{" "}
                  <Link href="/tools/bmi-calculator" className={linkCls}>
                    BMI calculator
                  </Link>{" "}
                  as a screening aid, not a verdict.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="local-resources"
                heading="Bangor Wales resources roundup"
              >
                <p className={p}>
                  Gwynedd trails and High Street area markets help you buy veg
                  first, pastries second. Walking groups and campus sports make
                  accountability social.{" "}
                  <a
                    href="https://phw.nhs.wales/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Public Health Wales
                  </a>{" "}
                  publishes community level guidance worth reading before you
                  buy another gadget. Council services:{" "}
                  <a
                    href="https://www.gwynedd.llyw.cymru/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Cyngor Gwynedd
                  </a>
                  .
                </p>
                <p className={p}>
                  Compare notes with our{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-cardiff"
                    className={linkCls}
                  >
                    Cardiff
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-swansea"
                    className={linkCls}
                  >
                    Swansea
                  </Link>
                  , and{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-wrexham"
                    className={linkCls}
                  >
                    Wrexham
                  </Link>{" "}
                  guides when you think about courier cut offs and health board
                  wording.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="access-medicines"
                heading="Prescription medicines and Welsh comparator context"
              >
                <p className={p}>
                  Welsh health boards set local obesity service arrangements;
                  what your GP can offer this month may differ from an English
                  relative&apos;s story. Private GLP 1 routes can feel faster
                  online until side effects need a real clinician. Before you
                  pay, map titration, anti nausea plans, and whether your
                  practice will accept shared care.
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
                    We compare prices and packaging, not your liver tests. Treat
                    this Bangor Wales page as orientation, not a consultation.
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
                heading={`Practical next steps (UK wide, including ${PLACE} Wales)`}
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
                  your clinician in {PLACE} or online should win the argument
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
                heading="Conclusion: unlock Bangor Wales wellness"
              >
                <p className={p}>
                  <strong className={strong}>
                    Best weight loss treatment Bangor Wales?
                  </strong>{" "}
                  Science smarts plus local leverage: mountain minded meals,
                  trail sweat, and mind skills you can repeat after graduation
                  week. Sustainable wins await when you pair habits with honest
                  medical follow up and{" "}
                  <Link
                    href="/compare/best-weight-loss-treatments-uk"
                    className={linkCls}
                  >
                    UK wide comparisons
                  </Link>
                  . Start mapping yours today with your clinician in the loop.
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
                    href="/blog/best-weight-loss-treatment-in-cardiff"
                    className={linkCls}
                  >
                    Cardiff
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-swansea"
                    className={linkCls}
                  >
                    Swansea
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-newport"
                    className={linkCls}
                  >
                    Newport
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-wrexham"
                    className={linkCls}
                  >
                    Wrexham
                  </Link>
                  .
                </p>
              </section>
            </article>

            <div className="mt-14">
              <GuideSharePanel
                url={shareUrl}
                title={PAGE_TITLE}
                description="Bangor Wales: North Wales trail habits, uni town routines, and safe ways to compare UK weight loss treatments."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
