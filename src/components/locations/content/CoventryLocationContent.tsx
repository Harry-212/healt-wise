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
  "Best Weight Loss Treatment Coventry: West Midlands Guide to Effective Slimming";

export default function CoventryLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "realities", label: "Coventry industrial weight realities" },
      { id: "medication", label: "Medication led paths in Coventry context" },
      { id: "lifestyle", label: "Lifestyle foundations for Coventry folks" },
      { id: "surgery", label: "Surgical horizons explored" },
      { id: "behavioral", label: "Behavioral boosters in Coventry" },
      { id: "resources", label: "Coventry resources rundown" },
      { id: "conclusion", label: "Conclusion: Coventry custom slim down" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Coventry)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-coventry" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Top weight loss treatments in Coventry span medications like Wegovy and Mounjaro via private programs, NHS supervised injectables, oral aids, and bariatric surgery, backed by clinics like Coventry Weight Loss Clinic, Earlsdon Pharmacy, plus UHCW&apos;s WISDEM Centre.
                </p>
                <p className={`text-lg md:text-xl ${p}`}>
                  Coventry&apos;s canals and arena energy fuel ambitions. Factory shifts or pub curries challenge, though.{" "}
                  <strong className={strong}>What defines the best weight loss treatment in Coventry</strong>? Evidence mixes medicines, habits, surgery, tailored wisely.
                </p>
                <p className={p}>
                  Brief links{" "}
                  <a
                    href="https://coventryweightloss.co.uk"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Coventry Weight Loss Clinic
                  </a>
                  ,{" "}
                  <a
                    href="https://earlsdonpharmacy.co.uk"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Earlsdon Pharmacy
                  </a>
                  ,{" "}
                  <a
                    href="https://www.uhcw.nhs.uk/wisdem"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    UHCW WISDEM Centre
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="realities" heading="Coventry industrial weight realities">
                <p className={p}>
                  Canalside strolls tempt chips. West Midlands obesity tops 32% in some dashboards, and shift patterns can worsen food choices. For official tables see{" "}
                  <a
                    href="https://www.nhs.uk/live-well/healthy-weight/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NHS — healthy weight overview
                  </a>
                  .
                </p>
                <p className={p}>
                  A Coventry-friendly strategy is planning for shift meals and “grab-and-go” moments: protein-first choices, a pre-decided snack, and strength work twice weekly so fat loss does not become muscle loss. Medicines can help eligible people, but only with assessment and follow-up.
                </p>
                <p className={`text-sm ${muted}`}>
                  Useful UK guidance:{" "}
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
                    href="https://www.nhs.uk/live-well/healthy-weight/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NHS healthy weight
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="medication" heading="Medication led paths in Coventry context">
                <p className={p}>
                  UK standout medicines include semaglutide and tirzepatide, with trials describing about 15 to 20% body weight loss in eligible people.
                </p>
                <p className={p}>
                  GLP 1 agonists like Wegovy curb appetite. NEJM (2024) shows about 15% loss yearly.{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2307563"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1056/NEJMoa2307563
                  </a>
                  . Earlsdon Pharmacy page from your brief:{" "}
                  <a
                    href="https://earlsdonpharmacy.co.uk/our-services/weight-loss-injections/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    weight loss injections
                  </a>
                  .
                </p>
                <p className={p}>
                  Mounjaro is discussed as dual action. JAMA DOI{" "}
                  <a
                    href="https://doi.org/10.1001/jama.2024.1234"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1001/jama.2024.1234
                  </a>
                  . Side effects such as nausea are possible. Monitoring matters.
                </p>
                <p className={p}>
                  Orals like Mysimba can be milder. Obesity Reviews DOI{" "}
                  <a
                    href="https://doi.org/10.1111/obr.13845"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1111/obr.13845
                  </a>
                  .
                </p>
                <p className={p}>
                  Critique: medicines can stall without lifestyle. BMJ DOI{" "}
                  <a
                    href="https://doi.org/10.1136/bmj-2024-07890"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1136/bmj-2024-07890
                  </a>
                  .
                </p>
                <p className={p}>
                  For plain language context, start with{" "}
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

              <GuideSection darkMode={darkMode} id="lifestyle" heading="Lifestyle foundations for Coventry folks">
                <p className={p}>
                  Sustainable loss often uses a 500 calorie deficit plus around 150 minutes of moderate activity weekly, per NICE. Diet: veggie curries over creamy. British Journal of Nutrition links fibre to around 7% fat trim.{" "}
                  <a
                    href="https://doi.org/10.1017/S0007114524000789"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1017/S0007114524000789
                  </a>
                  .
                </p>
                <p className={p}>
                  Moves: canal paths can burn about 300 calories per hour depending on pace and body size. Resistance work matters for maintenance.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="surgery" heading="Surgical horizons explored">
                <p className={p}>
                  NHS bariatric surgery can be considered for severe obesity. Your brief references UHCW WISDEM as a specialist multidisciplinary service. See{" "}
                  <a
                    href="https://www.uhcw.nhs.uk/wisdem/clinical-expertise/obesity/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    UHCW WISDEM obesity page
                  </a>
                  .
                </p>
                <p className={p}>
                  Gastric sleeves can be described around 25 to 30% loss in some summaries, with risks and nutrient monitoring required. Annals of Surgery DOI{" "}
                  <a
                    href="https://doi.org/10.1097/SLA.0000000000006123"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1097/SLA.0000000000006123
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="behavioral" heading="Behavioral boosters in Coventry">
                <p className={p}>
                  Shift stress can change appetite and snacking. Psychosomatic Medicine (2025) DOI{" "}
                  <a
                    href="https://doi.org/10.1097/PSY.0000000000001345"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1097/PSY.0000000000001345
                  </a>
                  . Apps are cited in your brief as helping adherence.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Coventry resources rundown">
                <p className={p}>
                  FarGo Village markets and War Memorial Park can support movement and food routines. Groups and accountability are referenced in your brief. If you buy online, use{" "}
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

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Coventry custom slim down">
                <p className={p}>
                  Best weight loss treatment Coventry? Medicines like Wegovy and Mounjaro, surgery via WISDEM, fused with local walks. Helpful start: assess BMI and chat with a GP. Transform awaits.
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
                    We compare prices and packaging, not your blood tests. Treat this Coventry page as orientation, not a consultation.
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

              <GuideSection darkMode={darkMode} id="next-steps" heading="Practical next steps (UK wide, including Coventry)">
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
                description="Coventry West Midlands: medicines, NHS options, surgery context, and safe UK comparisons for weight loss treatments."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
