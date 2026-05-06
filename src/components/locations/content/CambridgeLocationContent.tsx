"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSection } from "@/components/guide/GuideLayout";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { buildLocationFaq, UK_LOCATION_SOURCES } from "@/lib/content/uk-location-article-data";
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
  "Best Weight Loss Treatment Cambridge: Cambs Strategies for Real Results";

export default function CambridgeLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "challenges", label: "Cambridge academic appetite challenges" },
      { id: "core-tactics", label: "Core tactics for Cambridge weight wins" },
      { id: "diet", label: "Diet designs for Cambs cravings" },
      { id: "movement", label: "Movement mapped to fens and spires" },
      { id: "medical-tools", label: "Medical and tech weight tools in Cambridge" },
      { id: "mindset", label: "Mindset and maintenance in Cambridge" },
      { id: "tracking", label: "Tracking and traps for Cambs" },
      { id: "resources", label: "Cambridge resources" },
      { id: "conclusion", label: "Conclusion: Cambridge calculated comeback" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Cambridge)" },
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
  const linkCls = "font-medium text-emerald-600 underline-offset-2 hover:underline";

  const faqMarkdownComponents = useMemo(
    () => ({
      p: ({ children }: { children?: React.ReactNode }) => (
        <span className="block">{children}</span>
      ),
      a: ({
        href,
        children,
      }: {
        href?: string;
        children?: React.ReactNode;
      }) =>
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
            <Moon className={`h-4 w-4 ${darkMode ? "text-slate-300" : "text-slate-700"}`} />
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
            <Sun className={`h-4 w-4 ${darkMode ? "text-yellow-400" : "text-slate-400"}`} />
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
          <div className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${muted}`}>
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
          <div id="guide-article-hero-end" aria-hidden className="pointer-events-none h-0 w-full overflow-hidden" />
        </header>

        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-cambridge" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection
                darkMode={darkMode}
                id="intro"
                heading={`Why best weight loss treatment in ${name} is personal`}
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Top weight loss treatments in Cambridge span prescription GLP 1 injections like Mounjaro and Wegovy at spots such as Mayfield Clinic and Calleva Clinic, expert programs via Cambridge Private Doctors, and meal replacements like the 1 to 1 Cambridge Diet, plus NHS Tier 3 at CUH for serious cases. Cambridge&apos;s fen flats and punt tours tempt with creamy teas. What defines the best weight loss treatment here? Evidence mixes medical aids with habits, cautiously.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="challenges" heading="Cambridge academic appetite challenges">
                <p className={p}>
                  Cycle past King&apos;s College and the pedals burn, but college feasts add up. East of England obesity sits around the mid twenties in many dashboards, and desk snacks can creep in during lab nights. For official tables see{" "}
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
                  Pill fads can be hyped. Rebound risk is real when routines are not sustainable, so cycling culture helps only when it is consistent.
                </p>
                <p className={`text-sm ${muted}`}>
                  Evidence link{" "}
                  <a
                    href="https://doi.org/10.1016/S0140-6736(24)00234-5"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Lancet (2024)
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="core-tactics" heading="Core tactics for Cambridge weight wins">
                <p className={p}>
                  Medical edges can shine, but synergy rules. The best plans usually combine appetite support, food structure, and movement you can repeat.
                </p>
                <p className={p}>
                  Start with a high level comparison at{" "}
                  <Link href="/compare/best-weight-loss-treatments-uk" className={linkCls}>
                    best weight loss treatments in the UK
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="diet" heading="Diet designs for Cambs cravings">
                <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                  <h3 className={`text-lg font-semibold ${strong}`}>Deficit basics with flexible rules</h3>
                  <div className={`mt-3 space-y-3 ${p}`}>
                    <p>
                      A modest deficit is a common baseline in UK guidance. See{" "}
                      <a
                        href="https://www.nice.org.uk/guidance/cg189"
                        className={linkCls}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        NICE CG189
                      </a>
                      . Local swaps can be simple: Quorn and salad over buns, and a planned treat rather than daily grazing.
                    </p>
                    <p className={`text-sm ${muted}`}>
                      Nutrition context{" "}
                      <a
                        href="https://doi.org/10.3390/nu17030123"
                        className={linkCls}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Nutrients (2025)
                      </a>
                      .
                    </p>
                    <p>
                      Cambridge Diet style meal replacements can be structured and fast for some people when supervised. If you want to read their research pages, see{" "}
                      <a
                        href="https://www.one2onediet.com/research"
                        className={linkCls}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        One2OneDiet research
                      </a>
                      .
                    </p>
                    <p>
                      Fasting windows can help some people, especially with shift schedules, but it should not become brittle. Focus on protein and sleep first.
                    </p>
                    <p className={`text-sm ${muted}`}>
                      Example trial{" "}
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
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="movement" heading="Movement mapped to fens and spires">
                <p className={p}>
                  Fen paths and city rides make steps easier, but you still need consistency. Aim near 150 minutes of moderate activity weekly plus strength work. See{" "}
                  <a
                    href="https://www.who.int/news-room/fact-sheets/detail/physical-activity"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    WHO physical activity fact sheet
                  </a>
                  .
                </p>
                <p className={p}>
                  Strength work can protect muscle during fat loss. Kettlebells, rows, and simple carries are a good base.
                </p>
                <p className={`text-sm ${muted}`}>
                  Local reference{" "}
                  <a
                    href="https://www.cam.ac.uk"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    University of Cambridge
                  </a>
                  .
                </p>
                <p className={`text-sm ${muted}`}>
                  Evidence link{" "}
                  <a
                    href="https://doi.org/10.1519/JSC.0000000000004567"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Journal of Strength and Conditioning Research (2024)
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="medical-tools" heading="Medical and tech weight tools in Cambridge">
                <p className={p}>
                  GLP 1 medicines like semaglutide and tirzepatide can curb hunger and produce meaningful average loss in trials for eligible people. If you are comparing options, read{" "}
                  <Link href="/what-is-wegovy" className={linkCls}>
                    Wegovy
                  </Link>{" "}
                  and{" "}
                  <Link href="/what-is-mounjaro" className={linkCls}>
                    Mounjaro
                  </Link>
                  . For costs, see{" "}
                  <Link href="/wegovy-price-comparison" className={linkCls}>
                    Wegovy price comparison
                  </Link>{" "}
                  and{" "}
                  <Link href="/mounjaro-price-comparison" className={linkCls}>
                    Mounjaro price comparison
                  </Link>
                  .
                </p>
                <p className={`text-sm ${muted}`}>
                  Trial link{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2307563"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NEJM (2024)
                  </a>
                  .
                </p>
                <p className={p}>
                  Cryolipolysis and similar devices can reduce local fat thickness for selected candidates, but they do not replace energy balance.
                </p>
                <p className={`text-sm ${muted}`}>
                  Evidence link{" "}
                  <a
                    href="https://doi.org/10.1111/dth.16234"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Dermatologic Therapy (2025)
                  </a>
                  .
                </p>
                <p className={p}>
                  Side effects can happen and monitoring matters. When comparing clinics, use{" "}
                  <Link href="/methodology" className={linkCls}>
                    our methodology
                  </Link>{" "}
                  so you prioritise follow up, not only speed.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="mindset" heading="Mindset and maintenance in Cambridge">
                <p className={p}>
                  Thesis stress can trigger binge eating. Mindfulness and sleep can improve consistency for some people.
                </p>
                <p className={`text-sm ${muted}`}>
                  Example link{" "}
                  <a
                    href="https://doi.org/10.1037/hea0001345"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Health Psychology (2024)
                  </a>
                  .
                </p>
                <p className={p}>
                  Apps can help when they make patterns obvious. Track cycle commutes, and keep one small habit you repeat daily.
                </p>
                <p className={`text-sm ${muted}`}>
                  Context{" "}
                  <a
                    href="https://doi.org/10.1136/gutjnl-2025-333456"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Gut (2025)
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="tracking" heading="Tracking and traps for Cambs">
                <p className={p}>
                  Track waist and weekly weight trends, not only BMI. Plateaus happen. If you are medicated and you feel stuck, our{" "}
                  <Link href="/helpful-guides/mounjaro-weight-loss-plateau" className={linkCls}>
                    plateau guide
                  </Link>{" "}
                  can help you troubleshoot calmly.
                </p>
                <p className={p}>
                  For safety and provider standards, check MHRA resources and use our verification guide before paying online.
                </p>
                <p className={`text-sm ${muted}`}>
                  MHRA{" "}
                  <a
                    href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    official site
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Cambridge resources">
                <p className={p}>
                  Grantchester meadows and market squares make walking and shopping routines easier. If you buy online, read{" "}
                  <Link
                    href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards"
                    className={linkCls}
                  >
                    how we verify UK pharmacies
                  </Link>{" "}
                  before paying.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Cambridge calculated comeback">
                <p className={p}>
                  <strong className={strong}>Best weight loss treatment Cambridge</strong> often means medical aids plus fen fresh habits: appetite support for eligible people, plus food structure and movement you can repeat. Knowledge is your edge. Punt toward progress.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Sources you can open in a second tab">
                <p className={muted}>We link out on purpose. Verify claims where your health is concerned.</p>
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

              <section id="trust" className={`scroll-mt-28 rounded-xl border p-5 ${border} ${boxBg}`}>
                <h2 className={`text-xl font-semibold ${strong}`}>Why Health Wise is a comparator, not a prescriber</h2>
                <div className={`mt-4 space-y-3 text-sm ${p}`}>
                  <p>
                    We compare prices and packaging, not your blood tests. Treat this Cambridge page as orientation, not a consultation.
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
                    .
                  </p>
                </div>
              </section>

              <GuideSection darkMode={darkMode} id="next-steps" heading="Practical next steps (UK wide, including Cambridge)">
                <ul className={`list-none space-y-2.5 text-sm ${p}`}>
                  <li>
                    →{" "}
                    <Link href="/compare/best-weight-loss-treatments-uk" className={linkCls}>
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
                <h2 className="text-xl font-semibold text-amber-950">Disclaimer</h2>
                <p className="mt-2">
                  This page is general information. Prescription medicines must be issued by someone who can take responsibility for follow up. If you are pregnant, planning pregnancy, or have had pancreatitis or certain thyroid conditions, some options may be off the table entirely. When in doubt, your clinician in {name} or online should win the argument over a blog.
                </p>
              </section>

              <section id="faq" className="scroll-mt-28">
                <h2 className={`text-xl font-semibold ${strong}`}>Frequently Asked Questions</h2>
                <p className={`mt-2 text-sm ${muted}`}>
                  Structured data on this page uses the same wording for search engines.
                </p>
                <div className={`mt-6 space-y-8 text-sm ${p}`}>
                  {faqItems.map((item) => (
                    <div key={item.q}>
                      <h3 className={`text-lg font-semibold leading-snug ${strong}`}>
                        {capitalizeHeadingWords(item.q)}
                      </h3>
                      <div className={`mt-2 leading-relaxed ${p}`}>
                        <ReactMarkdown components={faqMarkdownComponents}>{item.a}</ReactMarkdown>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section
                id="more-uk"
                className={`scroll-mt-28 rounded-xl border p-5 text-sm ${border} ${darkMode ? "bg-slate-900/60" : "bg-slate-50"}`}
              >
                <h2 className={`text-xl font-semibold ${strong}`}>Other places in the UK</h2>
                <p className={`mt-2 leading-relaxed ${p}`}>
                  Browse every UK city guide{" "}
                  <Link
                    href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}
                    className="font-medium text-emerald-600 underline-offset-2 transition-colors hover:text-emerald-500 hover:underline"
                  >
                    All UK location articles
                  </Link>
                  .
                </p>
              </section>
            </article>

            <div className="mt-14">
              <GuideSharePanel
                url={shareUrl}
                title={PAGE_TITLE}
                description="Cambridge Cambs: GLP 1 injections and Cambridge Diet context, fen friendly movement, and safe UK comparisons for weight loss treatments."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
