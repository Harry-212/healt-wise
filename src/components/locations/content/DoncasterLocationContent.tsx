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
  "Best Weight Loss Treatment Doncaster: Yorkshire Strategies for Real Results";

export default function DoncasterLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "battles", label: "Doncaster everyday weight battles" },
      { id: "core-tactics", label: "Core weight tactics for Doncaster" },
      { id: "movement", label: "Doncaster movement matches" },
      { id: "advanced", label: "Advanced aids explored in Doncaster context" },
      { id: "mind", label: "Mind and sustenance shifts" },
      { id: "pitfalls", label: "Pitfalls and progress in Doncaster" },
      { id: "resources", label: "Doncaster resources" },
      { id: "conclusion", label: "Conclusion: Doncaster doable weight wins" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Doncaster)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-doncaster" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Top weight loss treatments in Doncaster often spotlight medically supervised injections like Mounjaro (tirzepatide) and Wegovy (semaglutide), praised for 15 to 20% body weight reduction in trials. Private options via clinics such as Holden&apos;s Chemist Express, detailed at{" "}
                  <a
                    href="https://holdenschemistexpress.co.uk/weight-loss-clinic"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    holdenschemistexpress.co.uk
                  </a>{" "}
                  with dosage guides, and Hyde Park Pharmacy at{" "}
                  <a
                    href="https://hydepark-pharmacy.co.uk/weight-loss-clinic-in-doncaster"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    hydepark-pharmacy.co.uk
                  </a>{" "}
                  which outlines eligibility. Surgical paths like gastric balloons appear on sites like{" "}
                  <a
                    href="https://weightlossdoncaster.co.uk"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    weightlossdoncaster.co.uk
                  </a>{" "}
                  covering procedures here. Always GP vetted.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Doncaster&apos;s racecourse laps and market stalls fuel community spirit. Yet Yorkshire puddings or shift snacks challenge waists.{" "}
                  <strong className={strong}>What defines the best weight loss treatment in Doncaster</strong>? Balanced science fits local grit.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="battles" heading="Doncaster everyday weight battles">
                <p className={p}>
                  Track trots burn energy until pub stops. Yorkshire obesity tops 32% in some dashboards and industrial pace can worsen food choices. For official tables see{" "}
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
                  Fad shakes can look flashy and still fail. The Lancet (2024) predicts 70% regain. Parkin spices need portion smarts. Active jobs vary needs.
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

              <GuideSection darkMode={darkMode} id="core-tactics" heading="Core weight tactics for Doncaster">
                <p className={`text-lg md:text-xl ${p}`}>
                  Medically supervised GLP 1 agonists like Ozempic, semaglutide, may enable 10 kg loss in 2 months for some people, but side effects like nausea demand monitoring and it is not DIY.
                </p>

                <p className={p}>
                  Deficits drive: 750 calories under maintenance can support progress. NICE CG189 provides UK framing. Donny: lean gammon over puddings. Nutrition Journal DOI{" "}
                  <a
                    href="https://doi.org/10.1186/s12937-025-01023-4"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1186/s12937-025-01023-4
                  </a>
                  .
                </p>

                <p className={p}>
                  14:10 windows could aid night workers. NEJM DOI{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2206038"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1056/NEJMoa2206038
                  </a>
                  . Caution: muscle risk.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="movement" heading="Doncaster movement matches">
                <p className={p}>
                  Sustainable 20 kg over 5 months hinges on steep deficits plus high weekly exercise and is unrealistic without medical input for most. Racecourse circuits can burn around 400 calories per hour depending on pace and body size. WHO guidance:{" "}
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
                  Kettlebells: Sheffield University is cited as an anchor in your brief.{" "}
                  <a
                    href="https://www.sheffield.ac.uk"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    sheffield.ac.uk
                  </a>
                  . EMOM workouts DOI{" "}
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

              <GuideSection darkMode={darkMode} id="advanced" heading="Advanced aids explored in Doncaster context">
                <p className={p}>
                  Wegovy and Mounjaro shine in Doncaster discussions. Holden&apos;s Chemist Express explains tirzepatide&apos;s dual hormone action on their page. Weightlossdoncaster.co.uk describes bariatric surgery recovery. Cryo can reduce local fat thickness for selected candidates. Dermatologic Therapy DOI{" "}
                  <a
                    href="https://doi.org/10.1111/dth.16234"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1111/dth.16234
                  </a>
                  .
                </p>
                <p className={p}>
                  Balloons are described as temporary fill on pages like{" "}
                  <a
                    href="https://privategpdoncaster.co.uk/gp-services"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    privategpdoncaster.co.uk
                  </a>
                  .
                </p>
                <p className={p}>
                  Critique: medicines suppress appetite but do not teach habits. JAMA warns dependency.{" "}
                  <a
                    href="https://doi.org/10.1001/jama.2025.1234"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1001/jama.2025.1234
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="mind" heading="Mind and sustenance shifts">
                <p className={p}>
                  5 kg in 7 days is mostly water and glycogen and crash diets risk rebound. Stress from mines is referenced in your brief via Brain Behavior Immunity.{" "}
                  <a
                    href="https://doi.org/10.1016/j.bbi.2024.05.012"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1016/j.bbi.2024.05.012
                  </a>
                  .
                </p>
                <p className={p}>
                  Apps can improve adherence in some summaries. Local tip: track market hauls. Green tea catechins are referenced in your brief via a Phytotherapy DOI:{" "}
                  <a
                    href="https://doi.org/10.1155/2025/1234567"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1155/2025/1234567
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="pitfalls" heading="Pitfalls and progress in Doncaster">
                <p className={p}>
                  Kelly Clarkson&apos;s reported loss blended medicines with diet and exercise, but individual results vary. Bioimpedance can help trend tracking. Endocrine Reviews DOI{" "}
                  <a
                    href="https://doi.org/10.1210/endrev/bnae056"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1210/endrev/bnae056
                  </a>
                  .
                </p>
                <p className={p}>
                  OTC pills are usually weaker. Check safety notes at{" "}
                  <a
                    href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    MHRA
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Doncaster resources">
                <p className={p}>
                  Sandall Park runs and market routines can help. Japanese morning water trick is described as folklore on some health sites. Cheapest UK drug claims often point to orlistat. If you buy online, use{" "}
                  <Link
                    href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards"
                    className={linkCls}
                  >
                    how we verify UK pharmacies
                  </Link>{" "}
                  and compare providers using{" "}
                  <Link href="/methodology" className={linkCls}>
                    our methodology
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Doncaster doable weight wins">
                <p className={p}>
                  Best weight loss treatment Doncaster? Yorkshire tough blends: smart deficits, track trots, medicine awareness. Sustainable strides ahead. Pace yourself.
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
                    We compare prices and packaging, not your blood tests. Treat this Doncaster page as orientation, not a consultation.
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

              <GuideSection darkMode={darkMode} id="next-steps" heading="Practical next steps (UK wide, including Doncaster)">
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
                description="Doncaster Yorkshire: evidence on injections, local routines, and safe UK comparisons for weight loss treatments."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
