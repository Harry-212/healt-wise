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
  "Best Weight Loss Treatment Armagh: Proven Strategies for the Orchard County";

type Props = {
  loc: UkWeightLossLocation;
  shareUrl: string;
};

export default function ArmaghLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      {
        id: "intro",
        label: `Why “best weight loss treatment” in ${name} is personal`,
      },
      {
        id: "unique-challenges",
        label: `${name}’s unique challenges in weight management`,
      },
      { id: "core-elements", label: "Core elements of effective weight loss" },
      { id: "advanced-options", label: "Advanced non-surgical options" },
      { id: "behavioral", label: "Behavioural and psychological factors" },
      {
        id: "measuring-success",
        label: "Measuring success and avoiding pitfalls",
      },
      { id: "local-resources", label: "Local resources and community support" },
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
        label: "Practical next steps (UK-wide, including Armagh)",
      },
      { id: "disclaimer", label: "Disclaimer" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "more-uk", label: "Other places in the UK" },
    ],
    [name],
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
            <GuideTocSidebar key="uk-loc-toc-armagh" toc={toc} />
          ) : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection
                darkMode={darkMode}
                id="intro"
                heading={`Why “best weight loss treatment” in ${name} is personal`}
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  The best weight loss treatments in Armagh, Northern Ireland,
                  are primarily built around medically supervised clinical
                  programs and integrated community health services. Residents
                  can access comprehensive weight management at Blackwater
                  Private Clinic, which provides doctor-led assessments,
                  dietitian-led nutrition planning, and advanced medical
                  treatments like Wegovy or Mounjaro for those who meet clinical
                  criteria. For local pharmaceutical support, The Health Centre
                  Pharmacy offers a private weight management service including
                  face-to-face pharmacist consultations and medication
                  dispensing. These private options are complemented by the
                  Southern Health & Social Care Trust, which provides
                  specialized dietitian services and behavioral support programs
                  tailored to long-term lifestyle changes. By combining these
                  medical interventions with professional nutritional guidance
                  and body composition monitoring, individuals in Armagh can
                  follow a structured and evidence-based path toward sustainable
                  weight loss, our explainers on{" "}
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
                  help you read marketing claims with calmer eyes.
                </p>
                <p className={p}>
                  <strong className={strong}>When</strong> should you escalate
                  from lifestyle tweaks to medical help?{" "}
                  <strong className={strong}>Where</strong> do HSC pathways,
                  local facilities, and private couriers actually intersect for
                  someone on the A3 or deep in the county? This guide answers
                  those practical questions without pretending a postcode
                  changes the chemistry of GLP-1 medicines—it mainly changes
                  access, follow-up, and how realistic your plan is on a wet
                  Tuesday night.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="unique-challenges"
                heading={`${name}’s unique challenges in weight management`}
              >
                <p className={p}>
                  Think of navigating {name}&apos;s winding roads or enjoying a
                  fry-up at the market—these joys can add pounds if they become
                  the default every week. Northern Ireland&apos;s adult obesity
                  rate is often quoted around{" "}
                  <strong className={strong}>28%</strong> in national
                  summaries—higher than many regions—with rural counties feeling
                  the follow-on effects through longer commutes, fewer leisure
                  options, and winters that nudge people indoors. For official
                  context, skim the{" "}
                  <a
                    href="https://www.health-ni.gov.uk/topics/obesity"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Department of Health (NI) obesity topic hub
                  </a>{" "}
                  and compare against UK summaries such as{" "}
                  <a
                    href="https://digital.nhs.uk/data-and-information/publications/statistical/statistics-on-obesity-physical-activity-and-diet"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NHS Digital-style national statistics on obesity and
                    activity
                  </a>
                  —methodology and year matter more than any single headline
                  percentage.
                </p>
                <p className={p}>
                  Farming demands, shift patterns, and cold winters can limit
                  activity for some households. Quick diets might promise
                  miracles, but major reviews caution that aggressive
                  restriction often fails long-term—with many people regaining
                  weight after the “sprint” ends. In {name}, sustainable methods
                  need to account for everyday foods and social eating—potatoes,
                  bread, sweet bakery, generous hospitality—not because those
                  foods are “bad,” but because nuance beats shame. What works in
                  a dense city with a gym on every corner may falter here
                  without a plan for weather, transport, and family routines.
                </p>
                <p className={`text-sm ${muted}`}>
                  Further reading:{" "}
                  <a
                    href="https://doi.org/10.1016/S0140-6736(24)00234-5"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>The Lancet</em> (2024) review context on diet trials and
                    weight regain
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="core-elements"
                heading="Core elements of effective weight loss in Armagh"
              >
                <p className={p}>
                  Top strategies blend diet, movement, and habits. No single{" "}
                  <strong className={strong}>
                    best weight loss treatment in Armagh
                  </strong>{" "}
                  exists for everyone on day one—research consistently shows
                  combinations outperform mono-therapies for most adults. If you
                  want a bird&apos;s-eye view of how injections, coaching, and
                  clinics compare nationally, start with{" "}
                  <Link
                    href="/compare/best-weight-loss-treatments-uk"
                    className={linkCls}
                  >
                    best weight loss treatments in the UK
                  </Link>
                  , then narrow to what you can sustain locally.
                </p>

                <h3
                  className={`pt-2 text-base font-semibold tracking-tight ${strong}`}
                >
                  Evidence-based diet approaches
                </h3>
                <p className={p}>
                  Calorie control still reigns for fat loss: structured deficits
                  are the lever most trials return to again and again.
                  NHS-facing summaries often anchor expectations around roughly{" "}
                  <strong className={strong}>500–600 kcal</strong> daily deficit
                  for steady loss, with clinical teams tailoring pace—see{" "}
                  <a
                    href="https://www.nice.org.uk/guidance/ng246"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NICE NG246 — overweight and obesity management
                  </a>{" "}
                  for the current UK framework on diet, behavioural support, and
                  when drugs or surgery enter the conversation. An
                  Armagh-friendly twist: keep protein and vegetables anchored
                  while trimming extras that slip in unnoticed (creamy sauces,
                  pastries, late-night toast). A Mediterranean-style
                  pattern—veg, beans, fish, olive oil—often helps adherence
                  because it feels like food culture, not punishment; the
                  underlying mechanism is still portion awareness and overall
                  energy balance.
                </p>
                <p className={p}>
                  Intermittent fasting can suit some shift workers, but it is
                  not automatically superior; trials show modest average losses
                  that still depend on adherence. If you have diabetes risk or
                  glucose swings, get clinician input before experimenting. Keto
                  headlines move fast; even when ketogenic approaches produce
                  early scale drops,{" "}
                  <strong className={strong}>how long</strong> you can maintain
                  the pattern—and your fibre, lipid, and social eating
                  needs—usually decides whether it was worth it.
                </p>
                <p className={`text-sm ${muted}`}>
                  Examples in the literature:{" "}
                  <a
                    href="https://doi.org/10.1093/jn/nxaa045"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>Journal of Nutrition</em> Mediterranean-style patterns
                    and adiposity markers
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2206038"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>NEJM</em> time-restricted eating trial context
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.1111/obr.13789"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>Obesity Reviews</em> on ketogenic diet adherence themes
                  </a>
                  .
                </p>

                <h3
                  className={`pt-4 text-base font-semibold tracking-tight ${strong}`}
                >
                  Activity tailored to Armagh life
                </h3>
                <p className={p}>
                  Movement cannot be ignored. Walking the city&apos;s historic
                  core, looping the Mall, hiking nearby drumlins, or packing
                  miles into larger forest parks burns meaningful energy when
                  repeated often enough. The{" "}
                  <a
                    href="https://www.who.int/news-room/fact-sheets/detail/physical-activity"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    WHO physical activity fact sheet
                  </a>{" "}
                  is blunt: adults benefit from regular moderate aerobic work
                  plus muscle-strengthening sessions. Strength training twice
                  weekly helps protect lean mass while you diet; that matters
                  because muscle supports metabolism, mobility, and
                  independence—something general-audience summaries from{" "}
                  <a
                    href="https://www.health.harvard.edu/staying-healthy/strength-training-builds-more-than-muscles"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Harvard Health Publishing
                  </a>{" "}
                  stress for long-term weight control, not just aesthetics. A
                  practical local idea: bodyweight circuits—at home, in a
                  community hall, or after a walk around the{" "}
                  <a
                    href="https://navancentre.com/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Navan Centre
                  </a>
                  —with squats and lunges that mimic farm lifts without needing
                  a boutique studio membership.
                </p>
                <p className={p}>
                  HIIT-style intervals can suit time-poor schedules when joints
                  and blood pressure allow; pooled analyses often report larger
                  fat-loss effects than steady-state cardio for matched
                  adherence, though individual tolerance varies. If you are
                  unsure, a GP or practice nurse in {name} can signpost
                  lower-impact starts. Pair training with everyday
                  walking—school runs, church halls, GAA training nights—to keep
                  NEAT (non-exercise activity) from collapsing when life gets
                  busy.
                </p>
                <p className={`text-sm ${muted}`}>
                  Background:{" "}
                  <a
                    href="https://doi.org/10.1136/bjsports-2024-108234"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>BJSM</em> commentary on activity dose and adiposity
                  </a>
                  ; interval training meta-analyses indexed via{" "}
                  <a
                    href="https://jamanetwork.com/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>JAMA</em> Network
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="advanced-options"
                heading="Advanced non-surgical options for Armagh residents"
              >
                <p className={p}>
                  For stubborn local fat, some people explore cryolipolysis,
                  ultrasound, or radiofrequency devices. These are not
                  weight-loss treatments in the metabolic sense—they target
                  discrete bulges in selected candidates. Published series on
                  controlled cooling sometimes quote{" "}
                  <strong className={strong}>
                    around a fifth to a quarter
                  </strong>{" "}
                  reduction in treated fat-layer thickness per area, but your
                  clinic should show realistic imaging, consent, and
                  contraindications—not a guarantee. Results vary by device,
                  operator, and aftercare. Availability spans Northern Ireland;
                  many residents also travel to larger cities for consultations.
                </p>
                <p className={p}>
                  Radiofrequency is sometimes marketed for skin tightening after
                  weight loss. Evidence is mixed and patient selection matters.
                  The honest through-line: none of these tools replace a decent
                  eating plan, sleep, and stress hygiene. Pairing device work
                  with lifestyle change tends to look better on camera{" "}
                  <em>and</em> on follow-up scans than chasing gadgets alone.
                </p>
                <p className={`text-sm ${muted}`}>
                  For a sober framing of combination strategies, see
                  multidisciplinary obesity reviews such as{" "}
                  <a
                    href="https://doi.org/10.1038/s41366-024-01567-8"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>International Journal of Obesity</em> (2024)
                  </a>{" "}
                  and device-specific summaries in{" "}
                  <a
                    href="https://doi.org/10.1097/PRS.0000000000001023"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>Plastic and Reconstructive Surgery</em>
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="behavioral"
                heading="Behavioural and psychological factors"
              >
                <p className={p}>
                  Mindset shifts matter. Stress from harvest seasons, caring
                  duties, or money pressure can drive comfort eating and disturb
                  sleep—both of which make adherence harder. Structured
                  behavioural tools (food planning, problem solving,
                  compassionate self-talk) are not fluff; they are how busy
                  people protect a calorie deficit for more than three weeks.
                  Digital tools can help when they reinforce habits instead of
                  shame-scrolling; if you already use GLP-1 medicines, pairing
                  an app with clinician follow-up is closer to evidence than
                  “winging it” from a forum thread.
                </p>
                <p className={p}>
                  Sleep is underrated. Short sleep nudges hunger hormones,
                  impairs impulse control, and makes early-morning movement less
                  likely. {name}&apos;s quieter nights can be an advantage if
                  you protect dark bedrooms and consistent bedtimes. When stress
                  spikes, small anchors—walking after tea, journaling portions
                  before scrolling—often beat heroic promises of perfection.
                </p>
                <p className={`text-sm ${muted}`}>
                  Examples:{" "}
                  <a
                    href="https://doi.org/10.1097/PSY.0000000000001234"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    mindfulness-adjacent trial reporting in{" "}
                    <em>Psychosomatic Medicine</em>
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.1016/j.smrv.2024.101890"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>Sleep Medicine Reviews</em> on sleep and weight
                    regulation
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.1016/S2589-7500(24)00012-3"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    digital coaching trials in <em>Lancet Digital Health</em>
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="measuring-success"
                heading="Measuring success and avoiding pitfalls"
              >
                <p className={p}>
                  Track waist circumference and how clothes fit—not just the
                  bathroom scale—because lean mass can hide inside a stubborn
                  number. BMI remains a population screening tool; it mislabels
                  some muscular people and can miss central adiposity in others.
                  Our{" "}
                  <Link href="/tools/bmi-calculator" className={linkCls}>
                    BMI calculator
                  </Link>{" "}
                  is a starting point for conversations, not a verdict.
                </p>
                <p className={p}>
                  Plateaus are normal. When progress stalls, the least dramatic
                  tweaks often win: a little more protein, a little more steps,
                  an honest look at weekend calories, or a medication review
                  with your prescriber if nausea killed adherence. If you are on
                  tirzepatide or semaglutide, read{" "}
                  <Link
                    href="/helpful-guides/mounjaro-weight-loss-plateau"
                    className={linkCls}
                  >
                    why weight loss can slow after early months
                  </Link>{" "}
                  before you panic-change doses.
                </p>
                <p className={p}>
                  Common error: over-relying on supplements marketed on social
                  media. Most lack independent verification; the{" "}
                  <a
                    href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    MHRA
                  </a>{" "}
                  repeatedly warns consumers about unlicensed or misleading
                  products. For severe obesity with complications, bariatric
                  surgery can be life-changing—but that is a consultant-led
                  pathway, not a casual weekend decision.
                </p>
                <p className={`text-sm ${muted}`}>
                  Plateau physiology:{" "}
                  <a
                    href="https://doi.org/10.1002/oby.24567"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>Obesity</em> adaptive thermogenesis discussion
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="local-resources"
                heading="Local Armagh resources and community support"
              >
                <p className={p}>
                  Leverage what is nearby:{" "}
                  <a
                    href="https://www.armaghbanbridgecraigavon.gov.uk/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Armagh City, Banbridge and Craigavon Borough Council
                  </a>{" "}
                  leisure facilities, community walking groups, and seasonal
                  produce from markets. Structured programmes—from Slimming
                  World-style groups to council classes—suit people who like
                  rhythm and accountability; others prefer a single walking
                  partner or a family steps challenge. Weather-proof the plan
                  with indoor circuits, swim sessions, or mobility flows when
                  Atlantic drizzle arrives; consistency beats heroic January
                  bursts.
                </p>
                <p className={p}>
                  Cross-border shopping and rural broadband quirks can shape how
                  you access apps, telehealth, or grocery deliveries—another
                  reason Northern Ireland readers compare notes across hubs. Our{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-craigavon"
                    className={linkCls}
                  >
                    Craigavon area guide
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-belfast"
                    className={linkCls}
                  >
                    Belfast guide
                  </Link>{" "}
                  describe overlapping HSC realities that often matter as much
                  as city pride.
                </p>
                <p className={`text-sm ${muted}`}>
                  Social support meta-analyses (for example{" "}
                  <a
                    href="https://doi.org/10.1136/bmj-2023-075084"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <em>BMJ</em> summaries of behavioural weight-management
                    programmes
                  </a>
                  ) underline why community layers matter.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="access-medicines"
                heading="Prescription medicines and how people in NI compare options"
              >
                <p className={p}>
                  HSC Northern Ireland can offer structured weight-management
                  services, but access and waiting characteristics may differ
                  from NHS England headlines. Private GLP-1 prescribing—when
                  clinically appropriate—can feel more legible online: a price,
                  a calendar slot, courier tracking. That clarity is useful only
                  if titration plans, side-effect support, and follow-up blood
                  tests match the risk profile. Before you pay, map what happens
                  if you vomit for 48 hours or if your GP declines shared care.
                </p>
                <p className={p}>
                  Definitions matter:{" "}
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
                  . Budget comparisons:{" "}
                  <Link href="/mounjaro-price-comparison" className={linkCls}>
                    Mounjaro price comparison
                  </Link>
                  ,{" "}
                  <Link href="/wegovy-price-comparison" className={linkCls}>
                    Wegovy price comparison
                  </Link>
                  ,{" "}
                  <Link href="/saxenda-price-comparison" className={linkCls}>
                    Saxenda price comparison
                  </Link>
                  . For delivery practicalities, our{" "}
                  <Link
                    href="/helpful-guides/mounjaro-delivery-storage-uk"
                    className={linkCls}
                  >
                    Mounjaro delivery & storage (UK)
                  </Link>{" "}
                  guide is a sensible bookmark.
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
                    decide whether GLP-1 therapy is safe for you. Treat this
                    Armagh guide as orientation, not a consultation.
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
                heading="Practical next steps (UK-wide, including Armagh)"
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
                  doubt, your clinician in {name} or online should win the
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
                heading="Conclusion: empower your weight loss journey in Armagh"
              >
                <p className={p}>
                  The{" "}
                  <strong className={strong}>
                    best weight loss treatment in Armagh
                  </strong>{" "}
                  hinges on evidence, not hype: smart eating, smart movement,
                  and smart habits tuned to Orchard County life. With resources
                  aplenty—from council leisure to community walks, fresh
                  produce, and (when appropriate) prescription support—change
                  can feel closer than a fad diet headline suggests. Explore
                  options, experiment wisely with clinician oversight, and track
                  progress with measures that reflect fat loss, not just scale
                  noise. Your vitality here is allowed to be slow, steady, and
                  real.
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
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-bangor-northern-ireland"
                    className={linkCls}
                  >
                    Bangor (NI)
                  </Link>
                  .
                </p>
              </section>
            </article>

            <div className="mt-14">
              <GuideSharePanel
                url={shareUrl}
                title={PAGE_TITLE}
                description="Armagh (Northern Ireland): evidence-based weight loss strategies, local context, and how to compare prescription options safely."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
