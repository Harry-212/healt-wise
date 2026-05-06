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

type Props = {
  loc: UkWeightLossLocation;
  shareUrl: string;
};

const PAGE_TITLE =
  "Best Weight Loss Treatment Blackpool: Illuminated Paths to Lancashire Leanness";

export default function BlackpoolLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      {
        id: "intro",
        label: `Why best weight loss treatment in ${name} is personal`,
      },
      { id: "unique-challenges", label: "Blackpool seaside scale battles" },
      { id: "core-elements", label: "Blackpool tuned weight loss essentials" },
      { id: "advanced", label: "Advanced aids like injections and tech" },
      { id: "behavioral", label: "Mindset and momentum in Blackpool" },
      {
        id: "measuring-success",
        label: "Tracking and traps on the Fylde coast",
      },
      { id: "local-resources", label: "Blackpool Lancashire lifelines" },
      { id: "sources", label: "Sources you can open in a second tab" },
      {
        id: "trust",
        label: "Why Health Wise is a comparator, not a prescriber",
      },
      {
        id: "next-steps",
        label: "Practical next steps (UK wide, including Blackpool)",
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
            <GuideTocSidebar key="uk-loc-toc-blackpool" toc={toc} />
          ) : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection
                darkMode={darkMode}
                id="intro"
                heading={`Why best weight loss treatment in ${name} is personal`}
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  The best weight loss treatments in Blackpool range from free
                  NHS Lancashire-supported lifestyle programs to evidence-based
                  interventions. Leading options include local NHS weight
                  management services offering tailored coaching, alongside
                  medications like semaglutide (Wegovy) or tirzepatide
                  (Mounjaro) via GP referral where eligible. Start with{" "}
                  <Link
                    href="/compare/best-weight-loss-treatments-uk"
                    className={linkCls}
                  >
                    best weight loss treatments in the UK
                  </Link>{" "}
                  and read{" "}
                  <Link href="/what-is-mounjaro" className={linkCls}>
                    Mounjaro
                  </Link>{" "}
                  and{" "}
                  <Link href="/what-is-wegovy" className={linkCls}>
                    Wegovy
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="unique-challenges"
                heading="Blackpool seaside scale battles"
              >
                <p className={p}>
                  Tower lights dazzle and beach chips pack punches. North West
                  obesity tables are often reported above three in ten adults in
                  national dashboards. Blackpool&apos;s holiday economy and
                  night shifts can curb routines. Check official tables at{" "}
                  <a
                    href="https://digital.nhs.uk/data-and-information/publications/statistical/statistics-on-obesity-physical-activity-and-diet"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NHS Digital
                  </a>
                  .
                </p>
                <p className={p}>
                  Injection fads soar. Reviews discuss GLP 1 medicines for
                  meaningful average loss, but side effects and follow up
                  matter. Fun towns need flexible routines that survive weekends
                  without a reset on Monday.\n{" "}
                </p>
                <p className={`text-sm ${muted}`}>
                  Example trial context{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2403468"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NEJM (2024)
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="core-elements"
                heading="Blackpool tuned weight loss essentials"
              >
                <p className={p}>
                  Holistic beats hasty. A repeatable calorie deficit and regular
                  movement are the core. UK framing is in{" "}
                  <a
                    href="https://www.nice.org.uk/guidance/ng246"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NICE NG246
                  </a>
                  .
                </p>

                <h3
                  className={`pt-2 text-base font-semibold tracking-tight ${strong}`}
                >
                  Diet dynamics for Tower treats
                </h3>
                <p className={p}>
                  Many clinicians start with a daily deficit and portion
                  awareness. Local swap: grilled haddock more often than
                  battered, extra vegetables, and planned treats rather than
                  spontaneous grazing. Weekly fast days can help some people,
                  but hangover hunger can backfire if sleep is poor.\n{" "}
                </p>
                <p className={`text-sm ${muted}`}>
                  Examples{" "}
                  <a
                    href="https://doi.org/10.1001/jama.2023.17890"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    JAMA (2023)
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.1002/oby.24012"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Obesity (2025)
                  </a>
                  .
                </p>

                <h3
                  className={`pt-4 text-base font-semibold tracking-tight ${strong}`}
                >
                  Moves matched to Promenade pace
                </h3>
                <p className={p}>
                  Promenade walks are a strong anchor. The{" "}
                  <a
                    href="https://www.who.int/news-room/fact-sheets/detail/physical-activity"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    WHO physical activity fact sheet
                  </a>{" "}
                  points to regular moderate activity plus strength work. Keep
                  strength simple and repeatable. A short daily loop builds
                  steps without needing a gym.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="advanced"
                heading="Advanced aids like injections and tech"
              >
                <p className={p}>
                  Prescription injections such as Mounjaro and Wegovy can be
                  among the most effective tools for eligible people, but they
                  still require medical oversight, monitoring, and a follow up
                  plan. Compare costs and policies on{" "}
                  <Link href="/mounjaro-price-comparison" className={linkCls}>
                    Mounjaro price comparison
                  </Link>{" "}
                  and{" "}
                  <Link href="/wegovy-price-comparison" className={linkCls}>
                    Wegovy price comparison
                  </Link>
                  .\n{" "}
                </p>
                <p className={p}>
                  Cryolipolysis and similar devices may reduce local fat
                  thickness for selected candidates. EMS style sculpting is
                  often marketed as toning. Treat devices as supports, not
                  saviours. Pair them with food and movement habits.\n{" "}
                </p>
                <p className={`text-sm ${muted}`}>
                  Examples{" "}
                  <a
                    href="https://doi.org/10.1111/dth.16234"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Dermatologic Therapy (2024)
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.1007/s00266-024-04256-7"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Aesthetic Plastic Surgery (2025)
                  </a>
                  .\n{" "}
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="behavioral"
                heading="Mindset and momentum in Blackpool"
              >
                <p className={p}>
                  Arcade stress and irregular shifts can trigger emotional
                  eating. Mindfulness and routine planning can support adherence
                  for some people. Apps help when they are used as feedback
                  rather than judgement. Fibre first meals and protein first
                  breakfasts often reduce snack drift.\n{" "}
                </p>
                <p className={`text-sm ${muted}`}>
                  Examples{" "}
                  <a
                    href="https://doi.org/10.1037/hea0001345"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Health Psychology (2024)
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.1080/19490976.2025.2301456"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Gut Microbes (2025)
                  </a>
                  .\n{" "}
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="measuring-success"
                heading="Tracking and traps on the Fylde coast"
              >
                <p className={p}>
                  Track waist size and clothes fit, not only scale weight.
                  Plateaus are normal. Adjust one lever at a time. If injections
                  stall, read{" "}
                  <Link
                    href="/helpful-guides/mounjaro-weight-loss-plateau"
                    className={linkCls}
                  >
                    our plateau guide
                  </Link>
                  . Avoid unlicensed products. Read MHRA alerts at{" "}
                  <a
                    href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    MHRA
                  </a>
                  .\n{" "}
                </p>
                <p className={`text-sm ${muted}`}>
                  Plateau example{" "}
                  <a
                    href="https://doi.org/10.1016/j.metabol.2025.155789"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Metabolism (2025)
                  </a>
                  .\n{" "}
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="local-resources"
                heading="Blackpool Lancashire lifelines"
              >
                <p className={p}>
                  Central Pier loops, markets, and Promenade routines keep
                  movement simple. If you buy online, read{" "}
                  <Link
                    href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards"
                    className={linkCls}
                  >
                    how we verify UK pharmacies
                  </Link>
                  . Compare nearby guides{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-preston"
                    className={linkCls}
                  >
                    Preston
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-blackburn"
                    className={linkCls}
                  >
                    Blackburn
                  </Link>
                  , and{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-liverpool"
                    className={linkCls}
                  >
                    Liverpool
                  </Link>
                  .\n{" "}
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="sources"
                heading="Sources you can open in a second tab"
              >
                <p className={muted}>
                  We link out on purpose. Verify claims where your health is
                  concerned.\n{" "}
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
                <h2 className={`text-xl font-semibold ${strong}`}>
                  Why Health Wise is a comparator, not a prescriber
                </h2>
                <div className={`mt-4 space-y-3 text-sm ${p}`}>
                  <p>
                    We compare prices and packaging, not your blood tests. Treat
                    this Blackpool page as orientation, not a
                    consultation.\n{" "}
                  </p>
                  <p className={muted}>
                    How we work{" "}
                    <Link href="/methodology" className={linkCls}>
                      methodology
                    </Link>{" "}
                    and{" "}
                    <Link href="/editorial-policy" className={linkCls}>
                      editorial policy
                    </Link>
                    .\n{" "}
                  </p>
                </div>
              </section>

              <GuideSection
                darkMode={darkMode}
                id="next-steps"
                heading="Practical next steps (UK wide, including Blackpool)"
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
                    \n{" "}
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
                    \n{" "}
                  </li>
                  <li>
                    →{" "}
                    <Link href="/tools/bmi-calculator" className={linkCls}>
                      BMI calculator
                    </Link>
                    \n{" "}
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
                <h2 className={`text-xl font-semibold ${strong}`}>
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
                        className={`text-lg font-semibold leading-snug ${strong}`}
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

              <section
                id="more-uk"
                className={`scroll-mt-28 rounded-xl border p-5 text-sm ${border} ${darkMode ? "bg-slate-900/60" : "bg-slate-50"}`}
              >
                <h2 className={`text-xl font-semibold ${strong}`}>
                  Other places in the UK
                </h2>
                <p className={`mt-2 leading-relaxed ${p}`}>
                  Browse every UK city guide{" "}
                  <Link
                    href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}
                    className="font-medium text-emerald-600 underline-offset-2 transition-colors hover:text-emerald-500 hover:underline"
                  >
                    All UK location articles
                  </Link>
                  .\n{" "}
                </p>
              </section>
            </article>

            <div className="mt-14">
              <GuideSharePanel
                url={shareUrl}
                title={PAGE_TITLE}
                description="Blackpool Lancashire: Promenade routines, evidence based options, and safe UK comparisons for weight loss treatments."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
