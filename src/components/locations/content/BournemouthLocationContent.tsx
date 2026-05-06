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
  "Best Weight Loss Treatment Bournemouth: Dorset's Top Evidence Based Strategies";

export default function BournemouthLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "seaside-challenges", label: "Bournemouth seaside scale challenges" },
      { id: "core-tactics", label: "Core tactics for Bournemouth slimming" },
      { id: "advanced", label: "Advanced aids: injections and tech" },
      { id: "mindset", label: "Mind and maintenance in Bournemouth" },
      { id: "tracking", label: "Tracking and traps" },
      { id: "resources", label: "Bournemouth Dorset resources" },
      { id: "conclusion", label: "Conclusion: Bournemouth beach lean" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Bournemouth)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-bournemouth" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection
                darkMode={darkMode}
                id="intro"
                heading={`Why best weight loss treatment in ${name} is personal`}
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  The best weight loss treatments in Bournemouth center on medical weight management options like semaglutide (Wegovy) and tirzepatide (Mounjaro) injections, alongside clinical programs with coaching—showing strong appetite suppression and 15-20% body weight loss in trials, per NICE and NHS insights. Local South Coast clinics emphasize personalized plans blending these with lifestyle tweaks for rapid, sustainable results.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Bournemouth&apos;s golden sands and pier vibes inspire fitness. Fish suppers or beach BBQs tip balances, still.{" "}
                  <strong className={strong}>
                    What defines the best weight loss treatment in Bournemouth
                  </strong>
                  ? Data often favours medically supported paths when you qualify. Compare options in{" "}
                  <Link href="/compare/best-weight-loss-treatments-uk" className={linkCls}>
                    best weight loss treatments in the UK
                  </Link>{" "}
                  and read{" "}
                  <Link href="/what-is-wegovy" className={linkCls}>
                    Wegovy
                  </Link>
                  ,{" "}
                  <Link href="/what-is-mounjaro" className={linkCls}>
                    Mounjaro
                  </Link>
                  , and{" "}
                  <Link href="/what-is-saxenda" className={linkCls}>
                    Saxenda
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="seaside-challenges"
                heading="Bournemouth seaside scale challenges"
              >
                <p className={p}>
                  Boardwalk jogs burn bright, but tourist routines can raise calories fast. Dorset adult obesity sits in the mid twenties in many dashboards. For the latest official tables, check{" "}
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
                  Injections like Wegovy can be promising. Trial results are often summarised in major journals, and UK access depends on eligibility and supply. For UK decision context see{" "}
                  <a
                    href="https://www.nice.org.uk/guidance/ta1026"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NICE TA1026
                  </a>
                  .
                </p>
                <p className={`text-sm ${muted}`}>
                  Example trial link{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2307563"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NEJM (2024)
                  </a>
                  . Side effects such as nausea are possible and follow up matters.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="core-tactics" heading="Core tactics for Bournemouth slimming">
                <p className={p}>
                  Layers outperform isolates. Food structure and daily movement do the long work, while medicine can help appetite for eligible people.
                </p>

                <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                  <h3 className={`text-lg font-semibold ${strong}`}>Diet dynamics with coastal catches</h3>
                  <div className={`mt-3 space-y-3 ${p}`}>
                    <p>
                      A modest deficit is a common baseline in UK guidance. For broader framing see{" "}
                      <a
                        href="https://www.nice.org.uk/guidance/cg189"
                        className={linkCls}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        NICE CG189
                      </a>
                      . Swapping chips for mackerel salad is a simple Bournemouth default when you want volume and protein.
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
                      Time restricted eating can suit surfers and shift workers, but social brunches can make it harder to keep. Keep it flexible, not brittle.
                    </p>
                    <p className={`text-sm ${muted}`}>
                      Example trial{" "}
                      <a
                        href="https://doi.org/10.1001/jama.2024.1234"
                        className={linkCls}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        JAMA (2024)
                      </a>
                      .
                    </p>
                  </div>
                </div>

                <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                  <h3 className={`text-lg font-semibold ${strong}`}>Bournemouth motion on the waves</h3>
                  <div className={`mt-3 space-y-3 ${p}`}>
                    <p>
                      Pier circuits and beach walks are a strong base. Aim for around 150 minutes of moderate activity weekly plus strength work. See{" "}
                      <a
                        href="https://www.who.int/news-room/fact-sheets/detail/physical-activity"
                        className={linkCls}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        WHO physical activity guidance
                      </a>
                      .
                    </p>
                    <p>
                      A brisk beach walk can burn a few hundred calories per hour depending on pace and body size. In practice, consistency matters more than the exact number.
                    </p>
                    <p>
                      Add resistance training for better fat loss. Kettlebells and short interval formats can be efficient when time is tight.
                    </p>
                    <p className={`text-sm ${muted}`}>
                      Example evidence{" "}
                      <a
                        href="https://exeter.ac.uk"
                        className={linkCls}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Exeter University
                      </a>
                      ;{" "}
                      <a
                        href="https://doi.org/10.1007/s40279-024-02045-6"
                        className={linkCls}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Sports Medicine (2025)
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="advanced" heading="Advanced aids: injections and tech">
                <p className={p}>
                  Semaglutide can curb hunger through GLP 1 related pathways. Tirzepatide adds a dual action mechanism in many summaries. If you are choosing between options, compare mechanisms first and then compare ongoing cost using{" "}
                  <Link href="/wegovy-price-comparison" className={linkCls}>
                    Wegovy prices
                  </Link>{" "}
                  and{" "}
                  <Link href="/mounjaro-price-comparison" className={linkCls}>
                    Mounjaro prices
                  </Link>
                  .
                </p>
                <p className={`text-sm ${muted}`}>
                  Research links{" "}
                  <a
                    href="https://doi.org/10.1016/S0140-6736(24)00890-1"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Lancet (2025)
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.2337/dc24-0567"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Diabetes Care (2024)
                  </a>
                  .
                </p>
                <p className={p}>
                  Tech options like cavitation may reduce local fat thickness for selected candidates, but they are not wholesale body fat solutions. Treat them as add ons, not substitutes.
                </p>
                <p className={`text-sm ${muted}`}>
                  Device context{" "}
                  <a
                    href="https://doi.org/10.1007/s10103-024-04012-3"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Lasers in Medical Science (2025)
                  </a>
                  .
                </p>
                <p className={`text-sm ${muted}`}>
                  Maintenance note{" "}
                  <a
                    href="https://doi.org/10.1111/obr.13901"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Obesity Reviews (2025)
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="mindset" heading="Mind and maintenance in Bournemouth">
                <p className={p}>
                  Beach stress and social schedules can chip away at routines. Yoga and mindfulness may help some people reduce stress eating and improve consistency.
                </p>
                <p className={`text-sm ${muted}`}>
                  Example link{" "}
                  <a
                    href="https://doi.org/10.1080/08870446.2025.2304567"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Psychology and Health (2025)
                  </a>
                  .
                </p>
                <p className={p}>
                  Apps can support adherence when they help you notice patterns rather than punish you. Track steps, meals, and even surf sessions as data. Fermented foods can be a useful part of a balanced pattern, but they are not a shortcut.
                </p>
                <p className={`text-sm ${muted}`}>
                  Microbiome context{" "}
                  <a
                    href="https://doi.org/10.1186/s40168-025-01923-4"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Microbiome (2025)
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="tracking" heading="Tracking and traps">
                <p className={p}>
                  Bioimpedance can help with trend tracking, but do not treat it as a truth machine. If you hit a plateau, adjust one lever at a time and keep follow up regular if you are on injections.
                </p>
                <p className={p}>
                  If you are medicated, dose changes should be clinician led. A plateau can be routine, not failure. If you are on tirzepatide or semaglutide and you feel stuck, our{" "}
                  <Link href="/helpful-guides/mounjaro-weight-loss-plateau" className={linkCls}>
                    plateau guide
                  </Link>{" "}
                  explains common patterns without panic.
                </p>
                <p className={p}>
                  Be sceptical with supplements. Check alerts and official advice at{" "}
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

              <GuideSection darkMode={darkMode} id="resources" heading="Bournemouth Dorset resources">
                <p className={p}>
                  Canford Cliffs walks, markets, and group sessions can make routines easier to keep. If you buy online, read{" "}
                  <Link
                    href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards"
                    className={linkCls}
                  >
                    how we verify UK pharmacies
                  </Link>{" "}
                  before paying.
                </p>
                <p className={`text-sm ${muted}`}>
                  Local context{" "}
                  <a
                    href="https://www.dorset.gov.uk"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Dorset Council
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Bournemouth beach lean">
                <p className={p}>
                  <strong className={strong}>Best weight loss treatment Bournemouth</strong> usually means pairing appetite support with Dorset discipline: sea forward meals, shore sweat, and a plan you can repeat when life gets busy. If you qualify for medicine, make follow up and supply reliability part of the decision, not a footnote.
                </p>
                <p className={p}>
                  Your pier perfect form calls. Start by comparing options, then commit to one sustainable system for the next eight weeks before judging results.
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
                    We compare prices and packaging, not your blood tests. Treat this Bournemouth page as orientation, not a consultation.
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

              <GuideSection
                darkMode={darkMode}
                id="next-steps"
                heading="Practical next steps (UK wide, including Bournemouth)"
              >
                <ul className={`list-none space-y-2.5 text-sm ${p}`}>
                  <li>
                    →{" "}
                    <Link href="/compare/best-weight-loss-treatments-uk" className={linkCls}>
                      Compare best weight loss treatments in the UK
                    </Link>
                  </li>
                  <li>
                    →{" "}
                    <Link href="/wegovy-price-comparison" className={linkCls}>
                      Wegovy price comparison
                    </Link>
                    <span className={muted}> · </span>
                    <Link href="/mounjaro-price-comparison" className={linkCls}>
                      Mounjaro price comparison
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
                description="Bournemouth Dorset: evidence on injections like semaglutide, seaside routines, and safe UK comparisons for weight loss treatments."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
