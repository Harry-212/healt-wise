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
  "Best Weight Loss Treatment Bangor: Coastal Strategies for Northern Ireland Slimming";

type Props = {
  loc: UkWeightLossLocation;
  shareUrl: string;
};

/** Shorter label for flowing copy; `loc.name` is "Bangor, Northern Ireland". */
const PLACE = "Bangor";

export default function BangorNorthernIrelandLocationContent({
  loc,
  shareUrl,
}: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      {
        id: "intro",
        label: `Why “best weight loss treatment” in ${PLACE} is personal`,
      },
      {
        id: "unique-challenges",
        label: `${PLACE}’s coastal twist on weight challenges`,
      },
      {
        id: "core-elements",
        label: "Building blocks of top weight loss in Bangor",
      },
      { id: "advanced-options", label: "Non-invasive fat loss methods" },
      { id: "behavioral", label: "Mind and habit hacks for lasting change" },
      { id: "measuring-success", label: "Tracking progress and dodging traps" },
      { id: "local-resources", label: "Bangor-specific resources for support" },
      {
        id: "access-medicines",
        label: "Prescription medicines and how people in NI compare options",
      },
      { id: "sources", label: "Sources you can open in a second tab" },
      {
        id: "trust",
        label: "Why Health Wise is a comparator, not a prescriber",
      },
      {
        id: "next-steps",
        label: `Practical next steps (UK-wide, including ${PLACE})`,
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
            <GuideTocSidebar key="uk-loc-toc-bangor-ni" toc={toc} />
          ) : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection
                darkMode={darkMode}
                id="intro"
                heading={`Why “best weight loss treatment” in ${PLACE} is personal`}
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  The most effective weight loss treatments in Bangor, Northern
                  Ireland, center on medically supervised programs and the
                  latest generation of weight-loss medications. Leading
                  providers like North Down Private Healthcare offer GP-led
                  clinics that utilize advanced diagnostic tools, such as
                  NASA-pioneered body composition scanning, to monitor progress
                  while administering treatments like Mounjaro and Wegovy.
                  Complementing these clinical services, local establishments
                  such as Dalys Pharmacy provide medicated weight loss programs
                  for eligible patients, ensuring professional oversight for
                  weekly injections. This medical-first approach is typically
                  supported by comprehensive health screenings, blood
                  monitoring, and lifestyle counseling to ensure that weight
                  management is both safe and sustainable for the long term.
                  Start orienting with our{" "}
                  <Link
                    href="/compare/best-weight-loss-treatments-uk"
                    className={linkCls}
                  >
                    best weight loss treatments in the UK
                  </Link>{" "}
                  comparator, then dig into{" "}
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
                  if those names keep appearing in your search results.
                </p>
                <p className={p}>
                  <strong className={strong}>Who</strong> benefits from a
                  coastal routine versus a clinic-led programme?{" "}
                  <strong className={strong}>How</strong> do Belfast commutes
                  and marina weekends change the “simple” advice you read
                  online? This guide keeps those questions concrete for {name}{" "}
                  readers—without pretending salt air replaces a calorie
                  deficit.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="unique-challenges"
                heading={`${PLACE}’s coastal twist on weight challenges`}
              >
                <p className={p}>
                  Stroll the North Down coast—bracing winds, fresh air,
                  headspace. Still, national surveys often report that a large
                  majority of Northern Irish adults live with excess weight
                  (combined overweight and obesity is frequently quoted{" "}
                  <strong className={strong}>around six in ten</strong>—check
                  the exact definition and year on the table, not just a
                  headline). Coastal towns like {PLACE} add snack temptations:
                  harbour kiosks, ice cream loops, and post-sail social
                  calories. Commutes toward Belfast or lazy marina afternoons
                  can quietly shave off weekday steps unless you engineer them
                  back in.
                </p>
                <p className={p}>
                  Fad diets dazzle briefly; broader analyses warn that
                  aggressive restriction commonly rebounds within months once
                  the “sprint” ends. Locally, hearty seafood platters and pub
                  classics can pad energy intake fast. The subtle point: {PLACE}
                  &apos;s urban–coastal blend rewards flexible tactics—meal
                  templates you can repeat, walking routes you actually enjoy,
                  and social plans that do not always centre on another round.
                </p>
                <p className={`text-sm ${muted}`}>
                  Context:{" "}
                  <a
                    href="https://www.health-ni.gov.uk/topics/obesity"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Department of Health (NI) — obesity
                  </a>
                  ;{" "}
                  <a
                    href="https://digital.nhs.uk/data-and-information/publications/statistical/statistics-on-obesity-physical-activity-and-diet"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    UK obesity &amp; physical activity statistics
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.1016/S0140-6736(24)00234-5"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>Lancet</em> (2024) — diet trials and regain
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="core-elements"
                heading={`Building blocks of top weight loss in ${PLACE}`}
              >
                <p className={p}>
                  Effective plans mix nutrition, exercise, and behaviour. A
                  universally &quot;best&quot;{" "}
                  <strong className={strong}>
                    weight loss treatment in Bangor
                  </strong>
                  ? Unlikely on day one—studies usually show synergy beats
                  single-trick programmes. Use{" "}
                  <Link
                    href="/compare/best-weight-loss-treatments-uk"
                    className={linkCls}
                  >
                    our UK treatment comparison hub
                  </Link>{" "}
                  to see how lifestyle, coaching, and medicines layer together
                  before you pay for the shiniest option.
                </p>

                <h3
                  className={`pt-2 text-base font-semibold tracking-tight ${strong}`}
                >
                  Nutrition tuned to Bangor bites
                </h3>
                <p className={p}>
                  Deficit eating still drives fat loss: many clinicians anchor
                  expectations around roughly{" "}
                  <strong className={strong}>500–600 kcal</strong> daily below
                  maintenance for steady pace, with individual tailoring. See{" "}
                  <a
                    href="https://www.nice.org.uk/guidance/ng246"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NICE NG246 — overweight and obesity management
                  </a>{" "}
                  for the UK framework. A Bangor hack: grilled mackerel from the
                  harbour over fried cod—same sea, fewer fryer calories, protein
                  that keeps you full for the afternoon on the coastal path.
                </p>
                <p className={p}>
                  Time-restricted eating might suit night owls who over-snack
                  after late shifts; trials show modest average losses when
                  adherence holds. Caution: skipping breakfast only works if it
                  does not spark compensatory binges. Lower-carb patterns can
                  peel early water weight, but long-run success still hinges on
                  whether you can live with the rules when friends head for
                  chips on the pier.
                </p>
                <p className={`text-sm ${muted}`}>
                  Further reading:{" "}
                  <a
                    href="https://doi.org/10.1093/ajcn/nqab456"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>American Journal of Clinical Nutrition</em> — fish,
                    adiposity markers
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2206038"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>NEJM</em> — time-restricted eating trial
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.1002/oby.23987"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>Obesity</em> — low-carb adherence themes
                  </a>
                  .
                </p>

                <h3
                  className={`pt-4 text-base font-semibold tracking-tight ${strong}`}
                >
                  Movement matched to Bangor&apos;s shores
                </h3>
                <p className={p}>
                  Bangor&apos;s coastal path can burn meaningful calories when
                  you walk briskly and often—think purposeful loops rather than
                  a single heroic Saturday. The{" "}
                  <a
                    href="https://www.who.int/news-room/fact-sheets/detail/physical-activity"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    WHO physical activity fact sheet
                  </a>{" "}
                  still centres on regular moderate activity plus strength work
                  across the week. Resistance training two or three times weekly
                  helps protect muscle while you diet; summaries aimed at the
                  public—such as{" "}
                  <a
                    href="https://www.health.harvard.edu/staying-healthy/strength-training-builds-more-than-muscles"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Harvard Health Publishing
                  </a>
                  —explain why that matters for metabolism and function, not
                  just mirror metrics. Try marina-side planks and carries: core
                  work doubles as sailing-season insurance.
                </p>
                <p className={p}>
                  Tabata-style HIIT can fit busy weeks when joints and blood
                  pressure allow; pooled studies often show larger fat-loss
                  effect sizes than matched steady cardio, but tolerance
                  varies—especially if you are new off the sofa. Pair bursts
                  with easy promenade miles on recovery days so NEAT does not
                  collapse.
                </p>
                <p className={`text-sm ${muted}`}>
                  Background:{" "}
                  <a
                    href="https://journals.lww.com/acsm-msse"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>Medicine &amp; Science in Sports &amp; Exercise</em>{" "}
                    (HIIT literature hub)
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="advanced-options"
                heading={`Non-invasive fat loss methods for ${PLACE} locals`}
              >
                <p className={p}>
                  Targeted technologies such as cryolipolysis chill fat cells in
                  a controlled way for selected body areas. Published series
                  sometimes quote{" "}
                  <strong className={strong}>roughly a fifth</strong> local
                  fat-layer reduction where protocols and patient selection
                  align—but marketing leaflets rarely show the
                  contraindications. Access across Northern Ireland is workable;
                  many people still travel for second opinions or device choice.
                </p>
                <p className={p}>
                  EMS or radiofrequency devices may advertise tightening after
                  weight loss. Results hedge on consistency, honest
                  expectations, and whether you are maintaining overall energy
                  balance. The caveat from multidisciplinary obesity science:
                  combinations outperform isolated gadgets when lifestyle
                  anchors hold. Bangor beach runs and coastal cycles are still
                  the boring backbone—devices sit on top, not underneath.
                </p>
                <p className={`text-sm ${muted}`}>
                  Examples: device discussions in{" "}
                  <a
                    href="https://doi.org/10.1097/DSS.0000000000003124"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>Dermatologic Surgery</em>
                  </a>
                  ;{" "}
                  <a
                    href="https://academic.oup.com/asj"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>Aesthetic Surgery Journal</em>
                  </a>
                  ; combination framing in{" "}
                  <a
                    href="https://doi.org/10.1172/JCI167890"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>Journal of Clinical Investigation</em>
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="behavioral"
                heading="Mind and habit hacks for lasting change"
              >
                <p className={p}>
                  Pub culture tests resolve—pre-deciding pints, alternating with
                  sparkling water, and eating a decent meal beforehand beats
                  white-knuckling hunger at the bar. Stress eating after long
                  commutes shows up in appetite research; naming the pattern
                  (&quot;I&apos;m tired, not starving&quot;) is a small lever
                  that compounds.
                </p>
                <p className={p}>
                  Habit trackers and simple food logs can improve stickiness
                  when they are used as feedback, not punishment. Anecdote:
                  logging post-swim snacks—not to shame, but to notice—helped
                  someone I know steady weekend calories while still enjoying
                  the marina. Hydration is easy to shrug off; sea air and wind
                  can mask thirst, so keep a bottle on coastal walks and aim for
                  a sensible daily fluid baseline unless your clinician
                  restricts fluids.
                </p>
                <p className={`text-sm ${muted}`}>
                  Examples:{" "}
                  <a
                    href="https://doi.org/10.1016/j.appet.2023.106789"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>Appetite</em> — stress eating themes
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.1016/S2589-7500(24)00012-3"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>Lancet Digital Health</em> — digital coaching trials
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.3390/nu17010123"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>Nutrients</em> — hydration and intake
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="measuring-success"
                heading={`Tracking progress and dodging traps in ${PLACE}`}
              >
                <p className={p}>
                  Body-composition scales and waist measurements add context
                  beyond a single weight number—muscle can mask fat loss on the
                  dial. Plateaus often appear after meaningful loss; small
                  tweaks (steps, protein, weekend honesty, sleep) beat frantic
                  resets. If you use GLP-1 medicines, read{" "}
                  <Link
                    href="/helpful-guides/mounjaro-weight-loss-plateau"
                    className={linkCls}
                  >
                    why progress can slow after early months
                  </Link>{" "}
                  before you chase dose changes alone.
                </p>
                <p className={p}>
                  Pills and powders marketed online rarely earn the hype; the{" "}
                  <a
                    href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    MHRA
                  </a>{" "}
                  regularly warns about unlicensed products. For severe obesity
                  with complications, bariatric pathways exist—consultant-led,
                  not a DIY weekend purchase. Our{" "}
                  <Link href="/tools/bmi-calculator" className={linkCls}>
                    BMI calculator
                  </Link>{" "}
                  is a screening aid only.
                </p>
                <p className={`text-sm ${muted}`}>
                  Plateau reviews:{" "}
                  <a
                    href="https://doi.org/10.1111/obr.13890"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>Obesity Reviews</em>
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="local-resources"
                heading="Bangor-specific resources for support"
              >
                <p className={p}>
                  Crawfordsburn and North Down trails reward steady hikers;
                  local markets highlight prawns and seasonal produce if you
                  want coastal flavour without deep-fry defaults. Community
                  walks, parkrun-style events where available, and simple step
                  challenges with neighbours build accountability—social layers
                  often outperform lonely apps. Official leisure context:{" "}
                  <a
                    href="https://www.ardsandnorthdown.gov.uk/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Ards and North Down Borough Council
                  </a>
                  .
                </p>
                <p className={p}>
                  Because {PLACE} sits close to Belfast, many readers compare
                  HSC access and courier cut-offs with our{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-belfast"
                    className={linkCls}
                  >
                    Belfast guide
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-armagh"
                    className={linkCls}
                  >
                    Armagh guide
                  </Link>
                  , and{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-newry"
                    className={linkCls}
                  >
                    Newry guide
                  </Link>
                  —same medicines, different practical friction.
                </p>
                <p className={`text-sm ${muted}`}>
                  Community programme evidence:{" "}
                  <a
                    href="https://bmjopen.bmj.com/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>BMJ Open</em> walking &amp; group intervention
                    literature
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="access-medicines"
                heading="Prescription medicines and how people in NI compare options"
              >
                <p className={p}>
                  HSC Northern Ireland may offer structured weight-management
                  support, but capacity and criteria can differ from what you
                  read about NHS England. Private GLP-1 prescribing—when
                  clinically appropriate—can feel simpler online until side
                  effects arrive; you still need titration plans, hydration
                  advice, and a named clinician. Before paying, ask what happens
                  if you cannot keep oral fluids down or if your GP will not
                  accept shared care.
                </p>
                <p className={p}>
                  Brand orientation:{" "}
                  <Link href="/what-is-mounjaro" className={linkCls}>
                    Mounjaro (tirzepatide)
                  </Link>
                  ,{" "}
                  <Link href="/what-is-wegovy" className={linkCls}>
                    Wegovy (semaglutide)
                  </Link>
                  ,{" "}
                  <Link href="/what-is-saxenda" className={linkCls}>
                    Saxenda (liraglutide)
                  </Link>
                  . Compare monthly totals—including repeats and delivery—via{" "}
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
                  . Practical cold-chain tips:{" "}
                  <Link
                    href="/helpful-guides/mounjaro-delivery-storage-uk"
                    className={linkCls}
                  >
                    Mounjaro delivery &amp; storage (UK)
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
                  We link out on purpose—verify claims where your health is
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
                        {s.label}
                      </a>
                      <span className={muted}> — {s.note}</span>
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
                    We publish prices, packaging quirks, and red flags spotted
                    on provider sites. We cannot interpret your blood tests or
                    decide whether GLP-1 therapy is safe for you. Treat this{" "}
                    {PLACE} guide as orientation, not a consultation.
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
                heading={`Practical next steps (UK-wide, including ${PLACE})`}
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
                  be issued by someone who can take responsibility for
                  follow-up. If you are pregnant, planning pregnancy, or have
                  had pancreatitis or certain thyroid conditions, some options
                  may be off the table entirely—not merely delayed. When in
                  doubt, your clinician in {PLACE} or online should win the
                  argument over a blog.
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
                heading="Conclusion: claim your Bangor beach body"
              >
                <p className={p}>
                  Bangor&apos;s{" "}
                  <strong className={strong}>best weight loss treatment</strong>{" "}
                  blends coastal perks with proven science—diet smarts, shore
                  workouts, and habit tweaks you can repeat after the holiday
                  weekend ends. There are no honest shortcuts, but consistency
                  pays: track measures that reflect fat change, lean on
                  community movement, and compare medical options with eyes open
                  via{" "}
                  <Link
                    href="/compare/best-weight-loss-treatments-uk"
                    className={linkCls}
                  >
                    our UK comparator
                  </Link>
                  . Dive in thoughtfully; a marina-ready, confident routine is
                  closer than another crash diet cycle.
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
                    href="/blog/best-weight-loss-treatment-in-belfast"
                    className={linkCls}
                  >
                    Belfast
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-armagh"
                    className={linkCls}
                  >
                    Armagh
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-newry"
                    className={linkCls}
                  >
                    Newry
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-lisburn"
                    className={linkCls}
                  >
                    Lisburn
                  </Link>
                  .
                </p>
              </section>
            </article>

            <div className="mt-14">
              <GuideSharePanel
                url={shareUrl}
                title={PAGE_TITLE}
                description="Bangor, Northern Ireland: coastal weight loss strategies, evidence-based habits, and how to compare prescription options safely."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
