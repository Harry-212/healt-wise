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
  "Best Weight Loss Treatment Brighton and Hove: Sussex Seafront Slimming Guide";

export default function BrightonAndHoveLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "battles", label: "Brighton and Hove beachy weight battles" },
      { id: "essentials", label: "Essentials of elite weight loss here" },
      { id: "diet", label: "Diet dynamics for pier proximity" },
      { id: "movement", label: "Moves matched to Sussex sands" },
      { id: "advanced", label: "Advanced aids: injections and contouring" },
      { id: "mindset", label: "Mindset and momentum in Brighton" },
      { id: "tracking", label: "Tracking and traps on the South Coast" },
      { id: "helpers", label: "Brighton and Hove helpers" },
      { id: "conclusion", label: "Conclusion: Brighton and Hove body bliss" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Brighton and Hove)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-brighton-and-hove" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection
                darkMode={darkMode}
                id="intro"
                heading={`Why best weight loss treatment in ${name} is personal`}
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Top rated weight loss treatments in Brighton and Hove center on medical injections like semaglutide or tirzepatide for 15 to 20% body weight reduction, alongside non surgical fat freezing (cryolipolysis) and skin tightening tech such as radiofrequency for targeted contouring, backed by UK clinic data and trials.
                </p>
                <p className={`text-lg md:text-xl ${p}`}>
                  Brighton and Hove&apos;s vibrant pier and pebble beaches buzz with energy. Vegan cafes or fish suppers test resolve, still.{" "}
                  <strong className={strong}>
                    Pinpointing the best weight loss treatment in Brighton and Hove
                  </strong>{" "}
                  often means mixing pharma aids with lifestyle for Sussex shores. Start with{" "}
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

              <GuideSection darkMode={darkMode} id="battles" heading="Brighton and Hove beachy weight battles">
                <p className={p}>
                  Strut the Lanes and temptations lurk. Sussex obesity sits around the mid twenties in many dashboards, and nightlife can add calories quickly. For official tables see{" "}
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
                  Pill fads can look flashy. Many people regain weight when plans are not sustainable, so flexible routines matter.
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

              <GuideSection darkMode={darkMode} id="essentials" heading="Essentials of elite weight loss here">
                <p className={p}>
                  Most successful treatments blend injections with diet and activity changes. For eligible people, average losses can be meaningful, but maintenance still relies on habits.
                </p>
                <p className={p}>
                  If you are choosing between options, compare mechanisms and follow up. Then compare cost using{" "}
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

              <GuideSection darkMode={darkMode} id="diet" heading="Diet dynamics for pier proximity">
                <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                  <h3 className={`text-lg font-semibold ${strong}`}>Food structure that still feels social</h3>
                  <div className={`mt-3 space-y-3 ${p}`}>
                    <p>
                      A modest deficit can be a practical baseline. See{" "}
                      <a
                        href="https://www.nice.org.uk/guidance/cg189"
                        className={linkCls}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        NICE CG189
                      </a>
                      . A Brighton hack is quinoa bowls over desserts when you want volume and protein.
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
                      Time restricted eating can fit brunch culture, but hangover hunger can make it harder. Keep it flexible and focus on breakfast protein.
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

              <GuideSection darkMode={darkMode} id="movement" heading="Moves matched to Sussex sands">
                <p className={p}>
                  Beach volleyball, brisk pier walks, and hill routes can add a lot of movement. Aim near 150 minutes of moderate activity weekly plus strength work. See{" "}
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
                  Add strength sessions for better fat loss and better maintenance. Kettlebells and short interval blocks can be efficient.
                </p>
                <p className={`text-sm ${muted}`}>
                  Local reference{" "}
                  <a
                    href="https://sussex.ac.uk"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    University of Sussex
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

              <GuideSection darkMode={darkMode} id="advanced" heading="Advanced aids: injections and contouring">
                <p className={p}>
                  Cryolipolysis can reduce local fat thickness for selected candidates, and radiofrequency can support skin firmness after loss. They are not substitutes for energy balance.
                </p>
                <p className={p}>
                  Semaglutide and tirzepatide injections can drive meaningful average loss for eligible people, but side effects such as nausea are possible. Follow up matters as much as the first dose.
                </p>
                <p className={`text-sm ${muted}`}>
                  Research links{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2307563"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NEJM (2024)
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.1097/DSS.0000000000003456"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Dermatologic Surgery (2025)
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.1007/s10103-025-04012-3"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Lasers in Medical Science (2025)
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="mindset" heading="Mindset and momentum in Brighton">
                <p className={p}>
                  Gig stress can trigger emotional eating. Mindfulness and sleep can improve consistency for some people.
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
                  Apps can help when they make patterns obvious. A simple tip is to log pier steps and one food decision per day that you are proud of.
                </p>
                <p className={`text-sm ${muted}`}>
                  Research context{" "}
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
                <p className={`text-sm ${muted}`}>
                  Gut and fibre context{" "}
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

              <GuideSection darkMode={darkMode} id="tracking" heading="Tracking and traps on the South Coast">
                <p className={p}>
                  Bioimpedance can help trend tracking, but do not treat it as perfect. Plateaus happen. If you are on medication, changes should be clinician led. If you feel stuck, our{" "}
                  <Link href="/helpful-guides/mounjaro-weight-loss-plateau" className={linkCls}>
                    plateau guide
                  </Link>{" "}
                  can help you troubleshoot calmly.
                </p>
                <p className={p}>
                  Be sceptical with supplements. Check official advice at{" "}
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

              <GuideSection darkMode={darkMode} id="helpers" heading="Brighton and Hove helpers">
                <p className={p}>
                  Trails, markets, and group accountability can make routines easier to keep. If you buy online, read{" "}
                  <Link
                    href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards"
                    className={linkCls}
                  >
                    how we verify UK pharmacies
                  </Link>{" "}
                  before paying.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Brighton and Hove body bliss">
                <p className={p}>
                  <strong className={strong}>Best weight loss treatment Brighton and Hove</strong> often looks like sea kissed science: injections can help eligible people, but basics stay essential. Your pier perfect form awaits. Start with one sustainable system and track weekly.
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
                    We compare prices and packaging, not your blood tests. Treat this Brighton and Hove page as orientation, not a consultation.
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
                heading="Practical next steps (UK wide, including Brighton and Hove)"
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
                description="Brighton and Hove Sussex: evidence on injections and contouring, seafront routines, and safe UK comparisons for weight loss treatments."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
