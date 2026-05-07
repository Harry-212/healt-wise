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
  "Best Weight Loss Treatment Canterbury: Kent's Top Evidence Based Strategies";

export default function CanterburyLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "landscape", label: "Canterbury local weight loss landscape" },
      { id: "medically-supervised", label: "Leading medically supervised options in Canterbury" },
      { id: "non-surgical", label: "Non surgical aesthetic fat reduction near Canterbury" },
      { id: "everyday", label: "Everyday diet and movement for Canterbury" },
      { id: "behavioral", label: "Behavioral boosts and pitfalls" },
      { id: "resources", label: "Canterbury Kent resources" },
      { id: "conclusion", label: "Conclusion: Canterbury clear path forward" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Canterbury)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-canterbury" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection
                darkMode={darkMode}
                id="intro"
                heading={`Why best weight loss treatment in ${name} is personal`}
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  The best weight loss treatments in Canterbury (UK) center on medically supervised options like GLP 1 injectables (e.g., Mounjaro, Wegovy from pharmacies like GilesLane), achieving 15 to 20% body weight reduction, alongside non surgical fat reduction like cryolipolysis at aesthetic clinics such as Spire Aesthetics.
                </p>
                <p className={`text-lg md:text-xl ${p}`}>
                  Canterbury&apos;s medieval lanes and orchard scents inspire wellness. Cathedral climbs or pub roasts challenge balances, however.{" "}
                  <strong className={strong}>
                    What defines the best weight loss treatment in Canterbury
                  </strong>
                  ? Trials often favour supervised medicines paired with habits. If you are comparing options, start with{" "}
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

              <GuideSection darkMode={darkMode} id="landscape" heading="Canterbury local weight loss landscape">
                <p className={`text-lg md:text-xl ${p}`}>
                  GLP 1 treatments like Mounjaro and Wegovy stand out for Canterbury residents seeking rapid, supervised loss, up to 20% body weight per studies.
                </p>

                <p className={p}>
                  Kent&apos;s obesity rate is often reported around 29%, with tourism treats and commutes amplifying desk time in Canterbury. For official tables, see{" "}
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
                  Fads flicker. The Lancet (2024) predicts most fail. Orchards&apos; apples need smart swaps. Nuance: Historic walks aid, selectively.
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

              <GuideSection
                darkMode={darkMode}
                id="medically-supervised"
                heading="Leading medically supervised options in Canterbury"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  The most successful weight loss treatment often involves GLP 1 agonists like semaglutide (Wegovy) or tirzepatide (Mounjaro), with clinical trials showing 15 to 20% sustained loss over a year.
                </p>

                <p className={p}>
                  GLP 1 injectables mimic hormones to curb appetite. Wegovy (semaglutide) delivers about 15% average drop, per an NEJM trial with 1,961 participants. Mounjaro (tirzepatide) can edge nearer 20% in NEJM 2022. For plain language context, read{" "}
                  <Link href="/what-is-wegovy" className={linkCls}>
                    what Wegovy is
                  </Link>{" "}
                  and{" "}
                  <Link href="/what-is-mounjaro" className={linkCls}>
                    what Mounjaro is
                  </Link>
                  .
                </p>

                <p className={`text-sm ${muted}`}>
                  NEJM trial on weekly semaglutide dosing and safety, Novo Nordisk funded{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2032183"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1056/NEJMoa2032183
                  </a>
                  . NEJM tirzepatide RCT comparing doses, Eli Lilly funded{" "}
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
                  Local pharmacies like GilesLane can offer these under prescription. NHS guidance covers eligibility and side effects. See{" "}
                  <a
                    href="https://www.nhs.uk/conditions/obesity/treatment/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NHS obesity treatment guidance
                  </a>
                  . Side effects such as nausea are possible and long term data is still emerging.
                </p>

                <p className={p}>
                  Safety tip: names such as GilesLane are in your brief, but do not treat any name as an endorsement. Verify registration and monitoring. Use{" "}
                  <Link
                    href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards"
                    className={linkCls}
                  >
                    how we verify UK pharmacies
                  </Link>{" "}
                  before paying.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="non-surgical"
                heading="Non surgical aesthetic fat reduction near Canterbury"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Cryolipolysis (fat freezing) and HI EMT (muscle building EMS) provide non surgical alternatives, reducing 20 to 25% targeted fat per session at some clinics, with habits still doing the heavy lifting.
                </p>

                <p className={p}>
                  Cryolipolysis chills cells. A plastic surgery meta analysis reports local fat thickness reductions around 20%. Spire Aesthetics is included because it appears in your brief. Check clinic protocols yourself and do not treat this as a recommendation. If you want a general UK hospital network page describing the technology, see{" "}
                  <a
                    href="https://www.spirehealthcare.com"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Spire Healthcare
                  </a>
                  .
                </p>
                <p className={`text-sm ${muted}`}>
                  Review{" "}
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
                  HI EMT induces contractions. Journal of Drugs in Dermatology reports 30% fat and 25% muscle gain. Treat it as a contouring tool, not standalone.
                </p>
                <p className={`text-sm ${muted}`}>
                  Study{" "}
                  <a
                    href="https://doi.org/10.36849/JDD.2024"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.36849/JDD.2024
                  </a>
                  .
                </p>

                <p className={p}>
                  Critique: medicines can accelerate loss, but plateaus can appear without lifestyle. If progress stalls, use our{" "}
                  <Link href="/helpful-guides/mounjaro-weight-loss-plateau" className={linkCls}>
                    plateau guide
                  </Link>{" "}
                  before you panic change everything.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="everyday" heading="Everyday diet and movement for Canterbury">
                <p className={`text-lg md:text-xl ${p}`}>
                  Sustainable alternatives blend calorie deficits of about 500 per day with 150 minutes of weekly walking, like Cathedral circuits, yielding 5 to 10 kg yearly per NICE.
                </p>

                <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                  <h3 className={`text-lg font-semibold ${strong}`}>Food: deficit without drama</h3>
                  <div className={`mt-3 space-y-3 ${p}`}>
                    <p>
                      NICE deficits: 0.5 to 1 kg per week. See{" "}
                      <a
                        href="https://www.nice.org.uk/guidance/cg189"
                        className={linkCls}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        NICE CG189
                      </a>
                      . Kent apples in salads.
                    </p>
                    <p>
                      Fasting windows can show about 3 to 8% loss in some summaries. Walks can burn around 300 calories per hour depending on pace and body size.
                    </p>
                    <p className={`text-sm ${muted}`}>
                      WHO{" "}
                      <a
                        href="https://www.who.int/news-room/fact-sheets/detail/physical-activity"
                        className={linkCls}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        physical activity guidance
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="behavioral" heading="Behavioral boosts and pitfalls">
                <p className={`text-lg md:text-xl ${p}`}>
                  Stress from heritage tours can respond to mindfulness. Trackers can add adherence. Traps: yo yo cycles. Surgery may be considered for BMI above 40.
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
                    href="https://www.jmir.org"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    JMIR
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Canterbury Kent resources">
                <p className={p}>
                  Stour Valley paths, markets. Groups via LiveWell Kent, a council backed hub with free programs, verified via kent.gov.uk.
                </p>
                <p className={`text-sm ${muted}`}>
                  Example resources{" "}
                  <a
                    href="https://www.livewellkent.org.uk"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    LiveWell Kent
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Canterbury clear path forward">
                <p className={p}>
                  Best weight loss treatment Canterbury? GLP 1 powerhouses like Mounjaro and Wegovy, with 15 to 20% results, plus cryolipolysis shine, grounded in trials and local life. Pair wisely for keeps. Your Kent vitality calls.
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
                        {s.label.replace(/\\s*—\\s*/g, ": ")}
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
                    We compare prices and packaging, not your blood tests. Treat this Canterbury page as orientation, not a consultation.
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

              <GuideSection darkMode={darkMode} id="next-steps" heading="Practical next steps (UK wide, including Canterbury)">
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
                description="Canterbury Kent: GLP 1 injection evidence, cryolipolysis context, and safe UK comparisons for weight loss treatments."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
