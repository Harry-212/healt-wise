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
  "Best Weight Loss Treatment Colchester: Essex's Top Evidence Backed Options";

export default function ColchesterLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "landscape", label: "Colchester local weight loss landscape" },
      { id: "core", label: "Core strategies beyond medicines" },
      { id: "diet", label: "Diet dynamics for Colchester eats" },
      { id: "motion", label: "Essex motion for busy locals" },
      { id: "non-surgical", label: "Clinic spotlight: non surgical in Colchester" },
      { id: "behavioral", label: "Behavioral boosts and pitfalls" },
      { id: "resources", label: "Colchester resources rundown" },
      { id: "conclusion", label: "Conclusion: Colchester smart slim down" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Colchester)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-colchester" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Top weight loss treatments in Colchester include prescription injections like Mounjaro (clinical trials show up to 26% body weight loss) and Wegovy (up to 15 to 17% in studies), available via clinics such as Dedham Pharmacy&apos;s weight management service and Colchester Weight Loss Clinic&apos;s dietician led programs. Non surgical picks feature 3D Lipo Colchester&apos;s fat freezing, cryolipolysis for 20 to 25% fat reduction per session, and The Mind, Body and Soul&apos;s LuxMaster laser body sculpting for targeted contouring.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Colchester&apos;s Roman walls and Castle Park hum with history. Oyster bars or market chips tip balances, though.{" "}
                  <strong className={strong}>What truly ranks as the best weight loss treatment in Colchester</strong>? Balanced science, not hype.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="landscape" heading="Colchester local weight loss landscape">
                <p className={p}>
                  Castle Park jogs burn steady. Essex obesity sits around 29% in many dashboards, with pub routines adding hurdles. For official tables see{" "}
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
                  Injections promise big. NEJM backs strong average loss for tirzepatide in some trials and Wegovy averages vary by study.
                </p>
                <p className={`text-sm ${muted}`}>
                  Mounjaro trial DOI{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2312635"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1056/NEJMoa2312635
                  </a>
                  . Wegovy DOI{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2206038"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1056/NEJMoa2206038
                  </a>
                  .
                </p>
                <p className={p}>
                  Local access links from your brief include{" "}
                  <a
                    href="https://www.dedhampharmacy.co.uk/weight-loss-service-colchester/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Dedham Pharmacy weight loss service
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.weightlosscolchester.co.uk/private-appointment/dietician"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Colchester Weight Loss Clinic dietician page
                  </a>
                  .
                </p>
                <p className={p}>
                  Fads flop fast. The Lancet warns 70% regain. Nuance: oyster feasts need tweaks.
                </p>
                <p className={`text-sm ${muted}`}>
                  DOI{" "}
                  <a
                    href="https://doi.org/10.1016/S0140-6736(24)00234-5"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1016/S0140-6736(24)00234-5
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="core" heading="Core strategies beyond medicines">
                <p className={p}>Pills aside, foundations endure.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="diet" heading="Diet dynamics for Colchester eats">
                <p className={p}>
                  500 deficit plans can drop about 0.5 kg per week. NICE CG189 gives the UK baseline. Swap frites for Mersea oysters.
                </p>
                <p className={`text-sm ${muted}`}>
                  NICE{" "}
                  <a
                    href="https://www.nice.org.uk/guidance/cg189"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    CG189
                  </a>
                  . Nutrition Journal DOI{" "}
                  <a
                    href="https://doi.org/10.1186/s12937-024-00987-4"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1186/s12937-024-00987-4
                  </a>
                  .
                </p>
                <p className={p}>
                  Fasting windows might aid shifts, with about 4 to 8% results in some summaries. Low GI can feel steadier. Diabetes Care DOI{" "}
                  <a
                    href="https://doi.org/10.2337/dc24-0567"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.2337/dc24-0567
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="motion" heading="Essex motion for busy locals">
                <p className={p}>
                  Park circuits can burn around 300 calories per hour depending on pace and body size. Aim near 150 minutes per week of moderate activity plus strength. WHO guidance:{" "}
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
                <p className={`text-sm ${muted}`}>
                  JSCR DOI{" "}
                  <a
                    href="https://doi.org/10.1519/JSC.0000000000004567"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1519/JSC.0000000000004567
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="non-surgical" heading="Clinic spotlight: non surgical in Colchester">
                <p className={p}>
                  3D Lipo Colchester specialises in cryolipolysis and their site details sessions:{" "}
                  <a
                    href="https://www.colchester3dlipo.co.uk/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    colchester3dlipo.co.uk
                  </a>
                  . The Mind, Body and Soul provides LuxMaster laser sculpting and discusses inch loss on their page:{" "}
                  <a
                    href="https://www.themindbodysoul.co.uk/weight-loss-cellulite-treatments/luxmaster-slim-laser-body-sculpting/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    LuxMaster page
                  </a>
                  . Gastric bypass info appears in your brief via{" "}
                  <a
                    href="https://www.weightlosscolchester.co.uk/bariatric-surgery/gastric-bypass"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    gastric bypass page
                  </a>
                  .
                </p>
                <p className={p}>
                  Critique: medicines can shine short term and Obesity flags muscle loss risk without resistance training.{" "}
                  <a
                    href="https://doi.org/10.1002/oby.24012"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1002/oby.24012
                  </a>
                  . Pair wisely.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="behavioral" heading="Behavioral boosts and pitfalls">
                <p className={p}>
                  Stress munching is real. Psychosomatic (2024) DOI{" "}
                  <a
                    href="https://doi.org/10.1097/PSY.0000000000001345"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1097/PSY.0000000000001345
                  </a>
                  .
                </p>
                <p className={p}>
                  Apps can track patterns and some summaries cite better adherence. Plateaus can happen. Metabolism DOI{" "}
                  <a
                    href="https://doi.org/10.1016/j.metabol.2025.155789"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1016/j.metabol.2025.155789
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Colchester resources rundown">
                <p className={p}>
                  Layer Marney trails and markets. Groups can amplify results in some reports. If you buy online, use{" "}
                  <Link href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards" className={linkCls}>
                    how we verify UK pharmacies
                  </Link>{" "}
                  and compare providers using{" "}
                  <Link href="/methodology" className={linkCls}>
                    our methodology
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Colchester smart slim down">
                <p className={p}>
                  Best weight loss treatment Colchester blends injections (Mounjaro, Wegovy), tech (fat freezing, laser), and habits. Informed choices win. Explore locally and stay evidence led.
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
                    We compare prices and packaging, not your blood tests. Treat this Colchester page as orientation, not a consultation.
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

              <GuideSection darkMode={darkMode} id="next-steps" heading="Practical next steps (UK wide, including Colchester)">
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
                description="Colchester Essex: Mounjaro and Wegovy evidence, clinic context, and safe UK comparisons for weight loss treatments."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
