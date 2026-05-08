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
  "Best Weight Loss Treatment Glasgow: NHS and Private Pathways Explained";

export default function GlasgowLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "context", label: "Glasgow weight loss scene: context first" },
      { id: "nhs", label: "NHS Greater Glasgow and Clyde: the free route" },
      { id: "private", label: "Private clinics and pharmacies in Glasgow" },
      { id: "glp1", label: "GLP 1 deep dive: costs, effectiveness, Kelly Clarkson" },
      { id: "timelines", label: "Practical timelines and local hacks" },
      { id: "safety", label: "Safety checklist: before any pen" },
      { id: "resources", label: "Glasgow specific resources" },
      { id: "conclusion", label: "Conclusion: Glasgow smartest strategy" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Glasgow)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-glasgow" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Most successful? NHSGGC CWMS and Weight Watchers combo, with some summaries citing 10 to 15% loss sustained for engaged participants. Mounjaro Scotland cost? £180 to £320 per month privately. Kelly Clarkson? GLP 1 plus lifestyle, per interviews. Cheaper alternative? Saxenda, often priced £130 to £200.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Glasgow&apos;s parks and tenements mix opportunity with temptation. NHS or private? Your BMI, health, and patience decide the best weight loss treatment in Glasgow.
                </p>

                <p className={p}>
                  Compare options using{" "}
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

              <GuideSection darkMode={darkMode} id="context" heading="Glasgow weight loss scene: context first">
                <p className={`text-lg md:text-xl ${p}`}>
                  Glasgow obesity? 34% adults (Public Health Scotland 2025). NHSGGC services are free but tiered; private can start faster for GLP 1 for eligible people.
                </p>

                <p className={p}>
                  Public Health Scotland summaries often cite Glasgow as a high prevalence area for obesity. Industrial heritage and modern commutes can reduce movement. Private can leapfrog waiting lists for some people, but lifestyle foundations still matter.
                </p>

                <p className={p}>
                  Local start: Kelvingrove Park circuits can burn about 300 calories per hour depending on pace and body size.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nhs" heading="NHS Greater Glasgow and Clyde: the free route">
                <p className={`text-lg md:text-xl ${p}`}>
                  NHSGGC access? Community routes and supported programmes can be free. Specialist services are usually reserved for higher BMI thresholds and complex needs. Wegovy eligibility is often framed around BMI 35 plus.
                </p>

                <p className={p}>
                  NHSGGC offers tiered support at no cost. Community programmes can partner with group support and digital tools. Specialist services can include dietitians and psychologists for complex cases, aligned with NICE NG246.
                </p>

                <p className={p}>
                  Medical pathways can include Wegovy and Mounjaro for eligible people. Type 2 diabetes remission programmes often use total diet replacement around 800 calories under supervision. GP referral is commonly required, and waits can be 6 to 12 months.
                </p>

                <p className={p}>
                  Critique: free excellence can require patience. Private can fill gaps.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="private" heading="Private clinics and pharmacies in Glasgow">
                <p className={`text-lg md:text-xl ${p}`}>
                  Top private options mentioned in local guides include pharmacist led services, private GP supported clinics, and hybrid pickup models. Costs can range roughly £150 to £350 per month depending on dose and support.
                </p>

                <p className={p}>
                  Cold chain delivery is critical for injectable medicines, and GPhC registration can confirm legitimacy. Verify before paying and look for a clear titration plan and side effect protocol.
                </p>

                <p className={p}>
                  If you are comparing providers, use{" "}
                  <Link className={linkCls} href="/methodology">
                    our methodology
                  </Link>{" "}
                  so you focus on safety checks and follow up quality.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="glp1" heading="GLP 1 deep dive: costs, effectiveness, Kelly Clarkson">
                <p className={`text-lg md:text-xl ${p}`}>
                  Mounjaro Scotland cost? Private: starter doses can be around £180, with higher doses often priced higher. Trials often report 15 to 20% body weight loss for GLP 1 class medicines in selected settings. Kelly Clarkson stories describe medication plus training and portion control.
                </p>

                <p className={p}>
                  Wegovy (semaglutide) is a weekly pen and trials often cite around 12 to 15% loss at about 68 weeks. Mounjaro (tirzepatide) is dual hormone, and some studies show higher average loss. Saxenda is a daily injection with more modest outcomes for many people and can be cheaper.
                </p>

                <p className={`text-sm ${muted}`}>
                  NEJM DOI{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2403468"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1056/NEJMoa2403468
                  </a>
                  .
                </p>

                <p className={p}>
                  Hedging: medicines amplify, they do not replace habits. Pair medication with walking, protein, and strength training so you can maintain results later.
                </p>

                <p className={p}>
                  For cost comparisons, see{" "}
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

              <GuideSection darkMode={darkMode} id="timelines" heading="Practical timelines and local hacks">
                <p className={`text-lg md:text-xl ${p}`}>
                  Lose 10 kg? About 10 to 20 weeks on NHS style pathways for many people, or 8 to 12 weeks for some people on private programmes with medicines. 5 kg starter goal can be around 4 to 6 weeks with walks and a 500 calorie deficit.
                </p>

                <p className={p}>
                  5 kg in about one month: community meetings plus a daily 400 calorie deficit. Pollok Park laps can help with steps.
                </p>

                <p className={p}>
                  20 kg in 6 months: GLP 1 plus strength training plus tracking. NHS specialist services or a well supervised private plan can support this for selected candidates.
                </p>

                <p className={p}>
                  Plateaus happen. Some people use planned diet breaks. Obesity Reviews discusses plateau and adherence patterns.
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
                  .
                </p>

                <p className={p}>
                  Glasgow markets can make protein and vegetables easier. Lean fish and vegetables usually beat fried fast food for satiety.
                </p>

                <p className={p}>
                  If progress stalls, see our{" "}
                  <Link className={linkCls} href="/weight-loss-plateau">
                    weight loss plateau guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="safety" heading="Safety checklist: before any pen">
                <p className={`text-lg md:text-xl ${p}`}>Before private:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>
                    Verify GPhC registration at{" "}
                    <a
                      href="https://www.pharmacyregulation.org/registers"
                      className={linkCls}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      pharmacyregulation.org
                    </a>
                  </li>
                  <li>Ask for a titration schedule and how side effects are handled</li>
                  <li>Ask about follow up and whether blood tests are part of the plan</li>
                  <li>Ask about shared care and GP communication expectations</li>
                </ul>

                <p className={p}>
                  Contraindications can include pregnancy, pancreatitis history, and certain thyroid cancer risks. GP advice should trump marketing.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Glasgow specific resources">
                <p className={p}>
                  George Square markets and Clyde Walkway are easy movement options. Clyde Walkway can burn around 400 calories per hour depending on pace and body size. Group support can improve adherence for many people.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Glasgow smartest strategy">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Glasgow? NHSGGC foundations that are free and proven, plus private GLP 1 acceleration for eligible people. From community meetings to Clyde walks, sustainable paths exist. Start with self assessment and a GP conversation.
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
                      href={UK_LOCATION_SOURCES.OBESITY_STATS}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      UK obesity statistics overview
                    </a>
                  </li>
                  <li>
                    <a
                      className={linkCls}
                      href="https://www.nhsinform.scot/healthy-living/food-and-nutrition/healthy-eating-and-weight-loss/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NHS inform weight loss overview
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
                heading="Practical next steps (UK wide, including Glasgow)"
              >
                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>
                    Compare providers on safety checks and follow up using{" "}
                    <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                      our UK comparison page
                    </Link>
                    .
                  </li>
                  <li>
                    Use the{" "}
                    <Link className={linkCls} href="/bmi-calculator">
                      BMI calculator
                    </Link>{" "}
                    to prepare for eligibility discussions.
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
                    before paying for private care.
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
