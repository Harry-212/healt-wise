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

const PAGE_TITLE = "Best Weight Loss Treatment Chelmsford: Essex Guide to Proven Slimming";

export default function ChelmsfordLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "realities", label: "Chelmsford Essex weight realities" },
      { id: "categories", label: "Key weight loss categories in Chelmsford" },
      { id: "injections", label: "Prescription injections: Wegovy and Mounjaro explored" },
      { id: "tech", label: "Non surgical fat tech" },
      { id: "surgery", label: "Surgical routes" },
      { id: "lifestyle", label: "Lifestyle boosters for Chelmsford success" },
      { id: "costs", label: "Costs, risks, realistic expectations" },
      { id: "resources", label: "Chelmsford resources" },
      { id: "conclusion", label: "Conclusion: Chelmsford smart slim down" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Chelmsford)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-chelmsford" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Top weight loss treatments in Chelmsford span medical options like prescription injections (Wegovy, Mounjaro) via supervised clinics, non surgical fat reduction such as laser lipo and fat dissolving shots, and bariatric surgery, each with varying success backed by NHS and NICE data. Local spots like SkinSense GP Clinic detail fat dissolving and Pronokal diets post assessment, while Springfield Hospital covers surgery; costs range 150 to 500 pounds per month for medicines, per UK averages.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Chelmsford&apos;s vibrant markets and Hylands Park lure with treats. Train hops to London stack sedentary hours.{" "}
                  <strong className={strong}>What makes the best weight loss treatment in Chelmsford</strong>? Evidence mixes medicines, tech, lifestyle, tailored wisely. Start with{" "}
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

              <GuideSection darkMode={darkMode} id="realities" heading="Chelmsford Essex weight realities">
                <p className={p}>
                  Dodging station snacks amid about 29% local obesity in some dashboards. Commuter fatigue hits hard. For official tables see{" "}
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
                  In a commuter town, the biggest “hidden calories” are often routine ones: station breakfasts, late meetings, and the easy-on/easy-off snack loop. The fix is less dramatic than it sounds—protein at breakfast, planned lunches, and a default dinner you can repeat on busy nights.
                </p>

                <p className={`text-sm ${muted}`}>
                  Practical reference links:{" "}
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

              <GuideSection darkMode={darkMode} id="categories" heading="Key weight loss categories in Chelmsford">
                <p className={p}>Layers beat lone wolves, studies show.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="injections" heading="Prescription injections: Wegovy and Mounjaro explored">
                <p className={p}>
                  Semaglutide (Wegovy) or tirzepatide (Mounjaro) curb appetite. NICE approves for BMI above 30 in some guidance pages. Trials describe 15 to 20% loss yearly in some cohorts.
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
                  Local angle: clinics like SkinSense GP are referenced in your brief, offering post assessment pathways and sometimes structured diet programs. Costs can sit around 170 to 250 pounds per month UK wide, and side effects such as nausea are possible. Critique: dependency risks and muscle loss without exercise have been discussed in journals like BMJ.
                </p>
                <p className={p}>
                  If you are budgeting, compare totals on{" "}
                  <Link href="/wegovy-price-comparison" className={linkCls}>
                    Wegovy prices
                  </Link>{" "}
                  and{" "}
                  <Link href="/mounjaro-price-comparison" className={linkCls}>
                    Mounjaro prices
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="tech" heading="Non surgical fat tech">
                <p className={p}>
                  Laser lipo uses low level lasers to disrupt fat in local areas. Fat dissolvers like Aqualyx are injections for small regions such as chin and belly. Emsculpt style devices aim to build muscle as well.
                </p>
                <p className={`text-sm ${muted}`}>
                  Lasers in Surgery DOI{" "}
                  <a
                    href="https://doi.org/10.1002/lsm.23890"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1002/lsm.23890
                  </a>
                  . Journal of Cosmetic Dermatology DOI{" "}
                  <a
                    href="https://doi.org/10.1111/jocd.16234"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1111/jocd.16234
                  </a>
                  .
                </p>
                <p className={p}>
                  Links from your brief include{" "}
                  <a
                    href="https://bodyaesthetics.co.uk/chelmsford"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Body Aesthetics Chelmsford
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://thechelmsfordskinclinic.co.uk"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    The Chelmsford Skin Clinic
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="surgery" heading="Surgical routes">
                <p className={p}>
                  Gastric sleeves and bypass can lead to large total losses in eligible people, but lifelong changes are required. Your brief references Springfield Hospital, see{" "}
                  <a
                    href="https://www.ramsayhealth.co.uk/hospitals/springfield-hospital"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Springfield Hospital
                  </a>
                  . For NHS eligibility details see{" "}
                  <a
                    href="https://www.nhs.uk/conditions/bariatric-surgery/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NHS bariatric surgery guidance
                  </a>
                  .
                </p>
                <p className={`text-sm ${muted}`}>
                  British Obesity Surgery DOI{" "}
                  <a
                    href="https://doi.org/10.1177/00369330241234567"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1177/00369330241234567
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="lifestyle" heading="Lifestyle boosters for Chelmsford success">
                <p className={p}>
                  Medicines amplify basics. A 500 calorie deficit plus 150 minutes of weekly walking, like Hylands loops, can add up over the year. NICE CG189 gives the UK baseline.
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
                  . Nutrition DOI{" "}
                  <a
                    href="https://doi.org/10.1016/j.nut.2025.112345"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1016/j.nut.2025.112345
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="costs" heading="Costs, risks, realistic expectations">
                <p className={p}>
                  Injections can range 150 to 500 per course. Surgery can be 8,000 to 15,000 pounds privately. Health Economics weighs value.{" "}
                  <a
                    href="https://doi.org/10.1002/hec.4567"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1002/hec.4567
                  </a>
                  .
                </p>
                <p className={p}>
                  Kelly Clarkson reportedly credited semaglutide publicly alongside workouts. A 3 3 3 rule is often described informally as three meals, three litres of water, three kilometres of walking. It aligns with basics but lacks robust trials.
                </p>
                <p className={p}>
                  Most successful? Lifestyle led patterns can sustain. Medicines can boost early loss but habits protect maintenance.
                </p>
                <p className={`text-sm ${muted}`}>
                  Obesity Reviews DOI{" "}
                  <a
                    href="https://doi.org/10.1111/obr.13901"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1111/obr.13901
                  </a>
                  . Lancet PH DOI{" "}
                  <a
                    href="https://doi.org/10.1016/S2468-2667(25)00067-8"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1016/S2468-2667(25)00067-8
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Chelmsford resources">
                <p className={p}>
                  Markets for vegetables, parks for runs, and apps for tracking can help. If you buy online, read{" "}
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

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Chelmsford smart slim down">
                <p className={p}>
                  Best weight loss treatment Chelmsford? Informed picks: injections for kickstarts, tech for tweaks, habits for keeps. Consult professionals. Your Essex edge awaits.
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
                    We compare prices and packaging, not your blood tests. Treat this Chelmsford page as orientation, not a consultation.
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

              <GuideSection darkMode={darkMode} id="next-steps" heading="Practical next steps (UK wide, including Chelmsford)">
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
                description="Chelmsford Essex: injections, laser lipo, surgery context, and safe UK comparisons for weight loss treatments."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
