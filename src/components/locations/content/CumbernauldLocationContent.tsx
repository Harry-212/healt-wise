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
  "Best Weight Loss Treatment Cumbernauld: Top Scotland Strategies for North Lanarkshire";

export default function CumbernauldLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "landscape", label: "Cumbernauld local weight loss landscape" },
      { id: "medical", label: "Medical weight management options in Scotland" },
      { id: "non-surgical", label: "Non surgical fat reduction near Cumbernauld" },
      { id: "nhs", label: "NHS Scotland programs and eligibility" },
      { id: "lifestyle", label: "Lifestyle pillars for Cumbernauld success" },
      { id: "resources", label: "Cumbernauld resources" },
      { id: "conclusion", label: "Conclusion: Cumbernauld weight win plan" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Cumbernauld)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-cumbernauld" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Leading weight loss treatments near Cumbernauld include medical options like Saxenda and Wegovy via pharmacies, non surgical fat reduction such as CoolSculpting at aesthetic clinics, and NHS Scotland structured programs. Personalized support appears at places like Clinetix for consultations and M and D Green Pharmacy for private services. Spire Aesthetics in Cumbernauld offers CoolSculpting specifics.
                </p>
                <p className={p}>
                  Brief links{" "}
                  <a
                    href="https://clinetix.co.uk/treatments/weight-management-consultations/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Clinetix weight management consultations
                  </a>
                  ,{" "}
                  <a
                    href="https://cumbernauld.spireaesthetics.co.uk/coolsculpting-weight-loss/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Spire Aesthetics CoolSculpting page
                  </a>
                  .
                </p>
                <p className={`text-lg md:text-xl ${p}`}>
                  Cumbernauld&apos;s parks and town center hum with potential. Chippy runs or motorway munchies challenge, though.{" "}
                  <strong className={strong}>What stands as the best weight loss treatment in Cumbernauld</strong>? Evidence mixes medicines, tech, and lifestyle, tailored to Scotland&apos;s system.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="landscape" heading="Cumbernauld local weight loss landscape">
                <p className={p}>
                  Town trails tempt walks, yet obesity in North Lanarkshire is high in many dashboards and commutes to Glasgow can add snacks. NHS Scotland reports are referenced in your brief for 2025. For UK wide obesity statistics tables, see{" "}
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
                  Pills alone can be risky. The Lancet (2024) notes many people need support. Haggis cravings call for hybrids.
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

              <GuideSection darkMode={darkMode} id="medical" heading="Medical weight management options in Scotland">
                <p className={p}>
                  GLP 1 medicines lead many comparisons. Saxenda can curb appetite and Wegovy is similar. NICE approvals are referenced in your brief with TA664.
                </p>
                <p className={p}>
                  Mounjaro is a dual action option. Trials describe about 15 to 20% loss in a year for eligible people. NEJM DOI{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2307563"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1056/NEJMoa2307563
                  </a>
                  .
                </p>
                <p className={p}>
                  Critique: side effects such as nausea are possible and medicines are not forever fixes. If you compare options, start with{" "}
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

              <GuideSection darkMode={darkMode} id="non-surgical" heading="Non surgical fat reduction near Cumbernauld">
                <p className={p}>
                  CoolSculpting can reduce local fat thickness for selected candidates, with 20 to 25% per session cited in some summaries. Plastic Surgery Journal review DOI{" "}
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
                  Ultrasound cavitation is discussed as an add on and evidence varies. Dermatologic Therapy DOI{" "}
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
                  These work best after lifestyle changes and ongoing maintenance. Obesity Surgery DOI{" "}
                  <a
                    href="https://doi.org/10.1007/s11695-024-07123-4"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1007/s11695-024-07123-4
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nhs" heading="NHS Scotland programs and eligibility">
                <p className={p}>
                  Free tier services may exist for higher BMI and health risk profiles. Tiered support can include counselling and very low calorie diets, with surgery as a last resort.
                </p>
                <p className={p}>
                  Your brief notes supply shortages and Scottish Government context in 2025. Who qualifies for Mounjaro can depend on BMI plus health risks and GP referral.
                </p>
                <p className={p}>
                  NHS Scotland options can include apps, group sessions, and medicines for eligible people. Waiting times vary.
                </p>
                <p className={p}>
                  Private bariatric surgery costs can be high, while NHS routes can be free for approved candidates.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="lifestyle" heading="Lifestyle pillars for Cumbernauld success">
                <p className={p}>
                  Diet: 1,800 calories per day, oats over fritters. British Medical Journal DOI{" "}
                  <a
                    href="https://doi.org/10.1136/bmj-2024-078901"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1136/bmj-2024-078901
                  </a>
                  .
                </p>
                <p className={p}>
                  Walk Palacerigg: about 300 calories per hour depending on pace and body size. Aim near 150 minutes weekly.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Cumbernauld resources">
                <p className={p}>Markets for vegetables, parks for runs, and apps for tracking.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Cumbernauld weight win plan">
                <p className={p}>
                  Best weight loss treatment Cumbernauld blends Scotland medicines, tech, NHS support, and habits. Helpful start: GP chat and trail time. Transform awaits.
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
                    We compare prices and packaging, not your blood tests. Treat this Cumbernauld page as orientation, not a consultation.
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

              <GuideSection darkMode={darkMode} id="next-steps" heading="Practical next steps (UK wide, including Cumbernauld)">
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
                description="Cumbernauld Scotland: Saxenda and CoolSculpting context, NHS programs, and safe UK comparisons for weight loss treatments."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
