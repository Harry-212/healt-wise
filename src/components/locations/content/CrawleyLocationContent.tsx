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

const PAGE_TITLE = "Best Weight Loss Treatment Crawley: Sussex Strategies and Insights";

export default function CrawleyLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "realities", label: "Crawley airport area weight realities" },
      { id: "core", label: "Core tactics for Crawley success" },
      { id: "prescriptions", label: "Prescription paths explained" },
      { id: "diet", label: "Diet plays for Sussex snacks" },
      { id: "tech", label: "Non invasive tech for locals" },
      { id: "behavioral", label: "Behavioral boosts near Gatwick" },
      { id: "conclusion", label: "Conclusion: Crawley weight wins" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Crawley)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-crawley" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  The best weight loss treatments in Crawley often include prescription injections like Wegovy (semaglutide) and Mounjaro (tirzepatide), accessible via private pharmacist led services such as specialist clinics or pharmacies offering medicated support. Non invasive picks feature cryolipolysis, fat freezing, from providers like LA Lipo Crawley. Always consult a doctor; results vary.
                </p>
                <p className={p}>
                  Brief links{" "}
                  <a
                    href="https://www.crawleyweightlossclinic.co.uk"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Crawley Weight Loss Clinic
                  </a>
                  ,{" "}
                  <a
                    href="https://la-lipo.co.uk"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    LA Lipo
                  </a>
                  .
                </p>
                <p className={`text-lg md:text-xl ${p}`}>
                  Crawley&apos;s Gatwick hum and Tilgate woods blend convenience with nature. Airport shifts or park picnics tip scales, though. Beyond injections, sustainable paths matter.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="realities" heading="Crawley airport area weight realities">
                <p className={p}>
                  Dash to flights and steps rack up unevenly. Sussex obesity sits around 29% in many dashboards, with commuters snacking heavily. For official tables see{" "}
                  <a
                    href="https://www.nhs.uk/live-well/healthy-weight/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NHS — healthy weight overview
                  </a>
                  . Vending machines tempt.
                </p>
                <p className={p}>
                  Airport-area life adds a specific problem: unpredictable shift hunger. The win is planning for the “between flights” moments—protein-first snacks, hydration, and a short walk break—so you do not rely on willpower at midnight.
                </p>
                <p className={`text-sm ${muted}`}>
                  Quick UK references:{" "}
                  <a
                    href="https://www.nice.org.uk/guidance/ng246"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NICE NG246
                  </a>
                  {" · "}
                  <a
                    href="https://www.nhs.uk/live-well/healthy-weight/start-the-nhs-weight-loss-plan/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NHS Weight Loss Plan
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="core" heading="Core tactics for Crawley success">
                <p className={p}>Evidence favors mixes.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="prescriptions" heading="Prescription paths explained">
                <p className={p}>
                  Wegovy and Mounjaro curb appetite via GLP 1 pathways. NICE approves some routes for higher BMI criteria. Private routes can be quicker than NHS waits. Side effects such as nausea are common for some people.
                </p>
                <p className={`text-sm ${muted}`}>
                  NICE TA1026{" "}
                  <a
                    href="https://www.nice.org.uk/guidance/ta1026"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    guidance page
                  </a>
                  . NEJM DOI{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2302392"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1056/NEJMoa2302392
                  </a>
                  .
                </p>
                <p className={p}>
                  Private spots like Kamsons Pharmacy are referenced in your brief as general health prescribing pages. NHS waits can be long. Critique: not forever fixes and some regain can happen off drug.
                </p>
                <p className={p}>
                  For a safe overview, start with{" "}
                  <Link href="/compare/best-weight-loss-treatments-uk" className={linkCls}>
                    best weight loss treatments in the UK
                  </Link>{" "}
                  and read{" "}
                  <Link href="/what-is-wegovy" className={linkCls}>
                    Wegovy
                  </Link>{" "}
                  and{" "}
                  <Link href="/what-is-mounjaro" className={linkCls}>
                    Mounjaro
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="diet" heading="Diet plays for Sussex snacks">
                <p className={p}>
                  500 deficit basics: park salads over chips. BMJ Nutrition links vegetables to around 7% drops.{" "}
                  <a
                    href="https://doi.org/10.1136/bmjnph-2024-000456"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1136/bmjnph-2024-000456
                  </a>
                  .
                </p>
                <p className={p}>
                  Intermittent fasting might fit shifts and some summaries cite about 5% loss. Cell Metabolism is referenced in your brief.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="tech" heading="Non invasive tech for locals">
                <p className={p}>
                  Cryolipolysis can reduce local fat thickness for selected candidates. LA Lipo Crawley describes non surgical lipo alternatives for belly and thighs. Plastic Surgery review DOI{" "}
                  <a
                    href="https://doi.org/10.1097/PRS.0000000000009500"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1097/PRS.0000000000009500
                  </a>
                  .
                </p>
                <p className={p}>
                  Ultrasound is discussed as a similar vibe and efficacy varies. Dermatologic Therapy is referenced in your brief for 2025.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="behavioral" heading="Behavioral boosts near Gatwick">
                <p className={p}>
                  Stress eating can be helped by mindfulness for some people. Health Psychology (2024) is referenced in your brief. Trackers can shine when they make patterns obvious.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Crawley weight wins">
                <p className={p}>
                  Best weight loss treatment Crawley mixes medicines, tech, and habits. Tilgate trails await. Choose wisely.
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
                    We compare prices and packaging, not your blood tests. Treat this Crawley page as orientation, not a consultation.
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

              <GuideSection darkMode={darkMode} id="next-steps" heading="Practical next steps (UK wide, including Crawley)">
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
                description="Crawley Sussex: injections and cryolipolysis context, airport shift routines, and safe UK comparisons for weight loss treatments."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
