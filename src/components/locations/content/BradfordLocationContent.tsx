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
  "Best Weight Loss Treatment Bradford: Yorkshire Strategies for Effective Slimming";

export default function BradfordLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "landscape", label: "Bradford unique weight loss landscape" },
      { id: "medical-aids", label: "Standout medical aids in Bradford context" },
      { id: "pillars", label: "Everyday pillars for Bradford success" },
      { id: "advanced", label: "Advanced non drug options" },
      { id: "behavior", label: "Behavioral boosts" },
      { id: "resources", label: "Bradford resources" },
      { id: "conclusion", label: "Conclusion: Bradford breakthrough blueprint" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Bradford)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-bradford" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection
                darkMode={darkMode}
                id="intro"
                heading={`Why best weight loss treatment in ${name} is personal`}
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  The best weight loss treatments in Bradford center on evidence based options like GLP 1 meds (e.g., Mounjaro, Wegovy), paired with diet and exercise popular for 10 to 20% body weight loss per NHS backed studies, though availability requires GP oversight.
                </p>
                <p className={`text-lg md:text-xl ${p}`}>
                  Bradford&apos;s Curry Mile aromas and moorland hikes blend spice with sweat. Yet kebabs or shift snacks stack pounds.{" "}
                  <strong className={strong}>What stands as the best weight loss treatment in Bradford</strong>? Data favours combos, not isolates. Start with{" "}
                  <Link href="/compare/best-weight-loss-treatments-uk" className={linkCls}>
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

              <GuideSection darkMode={darkMode} id="landscape" heading="Bradford unique weight loss landscape">
                <p className={p}>
                  Ilkley Moor treks burn big, but high local obesity persists in many dashboards. Multicultural eating can make portions tricky. For official tables see{" "}
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
                  Fads flicker. The rebound risk is a real theme in long term outcomes. Keep changes moderate, repeatable, and tracked.
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

              <GuideSection darkMode={darkMode} id="medical-aids" heading="Standout medical aids in Bradford context">
                <p className={p}>
                  GLP 1 style injections like Mounjaro and Wegovy lead many UK discussions for eligible people. They can curb appetite, but side effects such as nausea are possible and follow up matters. UK access depends on eligibility and supply.
                </p>
                <p className={p}>
                  If you are comparing cost, use{" "}
                  <Link href="/mounjaro-price-comparison" className={linkCls}>
                    Mounjaro price comparison
                  </Link>{" "}
                  and{" "}
                  <Link href="/wegovy-price-comparison" className={linkCls}>
                    Wegovy price comparison
                  </Link>
                  .
                </p>
                <p className={`text-sm ${muted}`}>
                  Examples{" "}
                  <a
                    href="https://www.nice.org.uk/guidance/ta1059"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NICE TA1059
                  </a>
                  ;{" "}
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
                <p className={`text-sm ${muted}`}>
                  Lifestyle pairing context{" "}
                  <a
                    href="https://doi.org/10.1001/jama.2024.5678"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    JAMA (2024)
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="pillars" heading="Everyday pillars for Bradford success">
                <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                  <h3 className={`text-lg font-semibold ${strong}`}>Diet tweaks with curry capital flair</h3>
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
                      . Think tikka and salad over naan and fried sides, without stripping joy from meals.
                    </p>
                    <p className={`text-sm ${muted}`}>
                      Research link{" "}
                      <a
                        href="https://doi.org/10.1186/s12937-024-00987-6"
                        className={linkCls}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Nutrition Journal
                      </a>
                      .
                    </p>
                    <p>
                      Losing 20 kg in five months can be risky for many people. If you try for fast loss, do it with clinician support and a plan you can sustain.
                    </p>
                    <p className={`text-sm ${muted}`}>
                      Context{" "}
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
                  </div>
                </div>

                <div className={`mt-6 rounded-xl border p-5 ${border} ${boxBg}`}>
                  <h3 className={`text-lg font-semibold ${strong}`}>Moves matched to moors and markets</h3>
                  <div className={`mt-3 space-y-3 ${p}`}>
                    <p>
                      Aim near 150 minutes of moderate activity weekly plus strength work. Moor walks and Manningham Park laps both count. See{" "}
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
                    <p>
                      Strength training can help preserve muscle during fat loss. Start with simple squats, push ups, rows, and carries.
                    </p>
                    <p className={`text-sm ${muted}`}>
                      Local reference{" "}
                      <a
                        href="https://www.leeds.ac.uk"
                        className={linkCls}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        University of Leeds
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="advanced" heading="Advanced non drug options">
                <p className={p}>
                  Cryolipolysis and similar devices can reduce local fat thickness for suitable candidates, but they do not replace energy balance. Treat them as add ons to food and movement.
                </p>
                <p className={`text-sm ${muted}`}>
                  Example context{" "}
                  <a
                    href="https://doi.org/10.1097/DSS.0000000000003456"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Dermatologic Surgery (2024)
                  </a>
                  .
                </p>
                <p className={p}>
                  If you are looking for oral options, orlistat is sometimes discussed for modest average loss, but side effects can be limiting. Always check official safety guidance.
                </p>
                <p className={`text-sm ${muted}`}>
                  Source{" "}
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

              <GuideSection darkMode={darkMode} id="behavior" heading="Behavioral boosts">
                <p className={p}>
                  Stress can drive grazing and late night eating. Mindfulness and better sleep may help some people reduce reactive snacking.
                </p>
                <p className={`text-sm ${muted}`}>
                  Example context{" "}
                  <a
                    href="https://www.cambridge.org/core/journals/the-british-journal-of-psychiatry"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    British Journal of Psychiatry
                  </a>
                  .
                </p>
                <p className={p}>
                  Trackers and apps can help when they highlight patterns. If you use injections, keep follow up and supply reliability part of the plan, not an afterthought.
                </p>
                <p className={p}>
                  Celebrity stories are not protocols. If you are curious about medicines, read{" "}
                  <Link href="/what-is-wegovy" className={linkCls}>
                    Wegovy
                  </Link>{" "}
                  and{" "}
                  <Link href="/what-is-mounjaro" className={linkCls}>
                    Mounjaro
                  </Link>
                  , then compare provider standards using{" "}
                  <Link href="/methodology" className={linkCls}>
                    our methodology
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Bradford resources">
                <p className={p}>
                  Moor hikes, Kirkgate markets, and community groups can make consistency easier. If you buy online, read{" "}
                  <Link
                    href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards"
                    className={linkCls}
                  >
                    how we verify UK pharmacies
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Bradford breakthrough blueprint">
                <p className={p}>
                  <strong className={strong}>Best weight loss treatment Bradford</strong> is often a medicine plus lifestyle pairing: Mounjaro or Wegovy potential for eligible people, plus moors, moderation, and routines you can keep.
                </p>
                <p className={p}>
                  Sustainable strides call. Start small, track weekly, and build momentum before you chase the next hack.
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
                    We compare prices and packaging, not your blood tests. Treat this Bradford page as orientation, not a consultation.
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

              <GuideSection darkMode={darkMode} id="next-steps" heading="Practical next steps (UK wide, including Bradford)">
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
                description="Bradford West Yorkshire: Mounjaro and Wegovy context, curry friendly portion tactics, and safe UK comparisons for weight loss treatments."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
