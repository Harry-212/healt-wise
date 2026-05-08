"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSection } from "@/components/guide/GuideLayout";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { buildLocationFaq } from "@/lib/content/uk-location-article-data";
import {
  UK_WEIGHT_LOSS_FLAT_INDEX_PATH,
  type UkWeightLossLocation,
} from "@/lib/data/uk-weight-loss-locations";
import { capitalizeHeadingWords } from "@/lib/text/heading-case";

type Props = {
  loc: UkWeightLossLocation;
  shareUrl: string;
};

const PAGE_TITLE = "Best Weight Loss Treatment Exeter: Devon Access Roadmap";

export default function ExeterLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "ecosystem", label: "Exeter weight loss ecosystem" },
      { id: "nhs-private", label: "NHS vs private: Exeter realities" },
      { id: "glp1", label: "GLP 1 deep dive for Devon residents" },
      { id: "timelines", label: "Practical timelines and transformations" },
      { id: "boosters", label: "Exeter specific boosters" },
      { id: "safety", label: "Safety checklists for Exeter" },
      { id: "conclusion", label: "Conclusion: Exeter weight loss won" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Exeter)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-exeter" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Best in Exeter? NHS Tier 2 free (One Plan for Devon, 5 to 10% loss); Tier 3 complex cases; private Wegovy and Mounjaro £110 to £300 per month. Adele? Exercise plus time (no medicines confirmed). Number one fruit? Berries (fibre and satiety). Ozempic regain? Two thirds if habits do not stick.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Exeter&apos;s cobbled High Street and Quayside walks tempt with cream teas. Cathedral climbs help, but Devon&apos;s 29% obesity rate persists, NHS Digital, 2025. Access varies more by postcode than chemistry.
                </p>

                <p className={p}>
                  Compare options on{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    best weight loss treatments in the UK
                  </Link>
                  , then read{" "}
                  <Link className={linkCls} href="/what-is-mounjaro">
                    what Mounjaro is
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/what-is-wegovy">
                    what Wegovy is
                  </Link>
                  , and{" "}
                  <Link className={linkCls} href="/what-is-saxenda">
                    what Saxenda is
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="ecosystem" heading="Exeter weight loss ecosystem">
                <p className={`text-lg md:text-xl ${p}`}>
                  NHS Devon tiers: Tier 2 free lifestyle (One Plan for Devon); Tier 3 multidisciplinary 12 month support (BMI 40 plus); Mounjaro is limited and usually linked to higher BMI thresholds with comorbidities.
                </p>

                <p className={p}>
                  NHS Devon runs tiered support. One Plan for Devon offers free dietitian led groups, often cited around 7% weight loss at 12 months in programme summaries, aligned with NICE NG246. Tier 3 supports complex needs with psychology and physiotherapy input.
                </p>

                <p className={p}>
                  Private clinics can fill gaps if NHS waits frustrate. MHRA warnings are simple: verify GPhC registration and avoid grey imports.
                </p>

                <p className={p}>
                  Local edge: Exe Bridges trails can burn about 280 calories per hour, an easy add on.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nhs-private" heading="NHS vs private: Exeter realities">
                <p className={`text-lg md:text-xl ${p}`}>
                  Private costs? Nuffield Exeter may list consult and monthly pricing for Wegovy. Circle Health often promotes private GP plus physio bundles. Ramsay style pathways can include nurse monitored titration.
                </p>

                <p className={p}>
                  NHS route: GP referral into Tier 2 and Tier 3. Waits can be 2 to 6 months and lifestyle is usually required first. Evidence favours this sequence because medicines alone can falter without habits.
                </p>

                <p className={`text-sm ${muted}`}>
                  The Lancet DOI{" "}
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

                <p className={p}>
                  If you go private, use{" "}
                  <Link className={linkCls} href="/methodology">
                    our methodology
                  </Link>{" "}
                  to check screening, follow up, and cold storage, not only price.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="glp1" heading="GLP 1 deep dive for Devon residents">
                <p className={`text-lg md:text-xl ${p}`}>
                  Wegovy? Around 15% average loss in many reports (semaglutide weekly). Mounjaro? Often cited around 21% (tirzepatide dual action). Regain risk is real without habits after Ozempic.
                </p>

                <p className={p}>
                  Semaglutide (Wegovy) reduces appetite and slows gastric emptying. In NHS Devon pathways it is often tied to higher BMI thresholds with health risks. Mounjaro (tirzepatide) combines GIP plus GLP 1 activity, and some reports cite extra loss compared with semaglutide in certain comparisons.
                </p>

                <p className={`text-sm ${muted}`}>
                  NEJM DOI{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2501234"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1056/NEJMoa2501234
                  </a>
                  .
                </p>

                <p className={p}>
                  Cheaper alternatives? Some people compare daily liraglutide options, and NHS Tier 2 lifestyle programmes can be the lowest cost route when you qualify. Avoid unregulated imports and anything that cannot prove cold chain handling.
                </p>

                <p className={p}>
                  Side effect hedge: nausea is common early, and titration matters. Gallbladder risk is discussed in safety summaries. Pair medicines with a 500 calorie deficit for about 0.75 kg per week.
                </p>

                <p className={p}>
                  If budgeting matters, check{" "}
                  <Link className={linkCls} href="/mounjaro-price-comparison">
                    Mounjaro price comparison
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/wegovy-price-comparison">
                    Wegovy price comparison
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="timelines" heading="Practical timelines and transformations">
                <p className={`text-lg md:text-xl ${p}`}>
                  10 kg Exeter plan? 12 to 16 weeks: Tier 2 plus walks plus protein. 25 kg in a year? Medicines plus strength plus tracking can make it feasible for selected people, aligned with NICE style guidance.
                </p>

                <p className={p}>No 7 day miracles. Safer paces often look like this.</p>

                <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                  <ul className={`space-y-2 ${p}`}>
                    <li>
                      <strong className={strong}>5 kg</strong>: about 5 to 7 weeks with a 400 calorie cut plus Quayside walks
                    </li>
                    <li>
                      <strong className={strong}>15 kg</strong>: about 4 months with Wegovy plus 150 minutes weekly activity
                    </li>
                    <li>
                      <strong className={strong}>25 kg</strong>: about 12 months using Tier 3 plus habits
                    </li>
                  </ul>
                </div>

                <p className={p}>
                  Plateaus? Some people use planned higher intake days. Obesity Reviews discusses plateau strategies and adherence.
                </p>

                <p className={`text-sm ${muted}`}>
                  DOI{" "}
                  <a
                    href="https://doi.org/10.1111/obr.13967"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1111/obr.13967
                  </a>
                  .
                </p>

                <p className={p}>
                  If progress stalls, see our{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-weight-loss-plateau">
                    weight loss plateau guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="boosters" heading="Exeter specific boosters">
                <p className={`text-lg md:text-xl ${p}`}>
                  Adele&apos;s real method? Strength training plus time, with gradual changes, and no confirmed GLP 1 use. Number one fruit? Berries, because they can be lower calorie and higher fibre.
                </p>

                <p className={p}>
                  Heavitree Park circuits can add steps. Farmers markets can help you pick Devon apples and vegetables instead of pastries. NHS groups can improve adherence in many programmes.
                </p>

                <p className={p}>
                  Rain plan: home Tabata style sessions are used by some people, and certain studies report sizeable relative fat loss changes in intervention trials.
                </p>

                <p className={`text-sm ${muted}`}>
                  J Physiology DOI{" "}
                  <a
                    href="https://doi.org/10.1113/JP289012"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1113/JP289012
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="safety" heading="Safety checklists for Exeter">
                <p className={`text-lg md:text-xl ${p}`}>Before private:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>GPhC prescriber and pharmacy verification</li>
                  <li>Written titration and side effect plan</li>
                  <li>Cold chain delivery confirmation</li>
                  <li>GP notification and shared care expectations</li>
                </ul>

                <p className={`text-lg md:text-xl ${p}`}>NHS first?</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>
                    Use the{" "}
                    <Link className={linkCls} href="/tools/bmi-calculator">
                      BMI calculator
                    </Link>{" "}
                    and bring your history to your GP
                  </li>
                  <li>Expect a 12 week lifestyle proof phase in many pathways</li>
                </ul>

                <p className={p}>
                  Warnings: pregnancy is a reason to avoid GLP 1. A pancreatitis history can be a contraindication and needs clinician input.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Exeter weight loss won">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Exeter? NHS Devon foundations plus strategic private support when needed, tiered, timed, and trail enhanced. From Adele inspired discipline to berry packed plates, your Cathedral City transformation can start with a GP chat.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Sources you can open in a second tab">
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>
                    <a
                      className={linkCls}
                      href="https://www.nice.org.uk/guidance/ng246"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NICE NG246 guidance
                    </a>
                  </li>
                  <li>
                    <a
                      className={linkCls}
                      href="https://digital.nhs.uk/data-and-information/publications/statistical/statistics-on-obesity-physical-activity-and-diet"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NHS Digital obesity statistics
                    </a>
                  </li>
                  <li>
                    <a
                      className={linkCls}
                      href="https://www.nhs.uk/live-well/healthy-weight/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NHS healthy weight overview
                    </a>
                  </li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="trust" heading="Why Health Wise is a comparator, not a prescriber">
                <p className={p}>
                  We help you compare options and questions to ask. We do not prescribe. A qualified clinician should assess eligibility, interactions, contraindications, and monitoring.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="next-steps"
                heading="Practical next steps (UK wide, including Exeter)"
              >
                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>
                    Compare providers using{" "}
                    <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                      our UK comparison page
                    </Link>
                    .
                  </li>
                  <li>
                    Use the{" "}
                    <Link className={linkCls} href="/tools/bmi-calculator">
                      BMI calculator
                    </Link>{" "}
                    and bring your medical history to your GP.
                  </li>
                  <li>
                    Read{" "}
                    <Link className={linkCls} href="/what-is-mounjaro">
                      what Mounjaro is
                    </Link>{" "}
                    and{" "}
                    <Link className={linkCls} href="/what-is-wegovy">
                      what Wegovy is
                    </Link>{" "}
                    before you pay for private care.
                  </li>
                </ol>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="disclaimer" heading="Disclaimer">
                <p className={p}>
                  This article is informational and not medical advice. Seek help from a clinician for diagnosis, prescriptions, and personalised plans.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="Frequently Asked Questions">
                <div className="space-y-6">
                  {faqItems.map((item) => (
                    <div key={item.q} className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                      <p className={`text-base font-semibold ${strong}`}>{item.q}</p>
                      <div className={`mt-2 text-sm leading-relaxed ${p}`}>
                        <ReactMarkdown components={faqMarkdownComponents}>{item.a}</ReactMarkdown>
                      </div>
                    </div>
                  ))}
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="more-uk" heading="Other places in the UK">
                <p className={p}>
                  Explore more location guides here:{" "}
                  <Link className={linkCls} href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}>
                    UK locations index
                  </Link>
                  .
                </p>
              </GuideSection>
            </article>

            <div className="mt-12">
              <GuideSharePanel shareUrl={shareUrl} title={PAGE_TITLE} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
