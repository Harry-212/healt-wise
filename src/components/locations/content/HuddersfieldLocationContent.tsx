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
  "Best Weight Loss Treatment Huddersfield: Yorkshire Access & Strategies Guide";

export default function HuddersfieldLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "ecosystem", label: "Huddersfield weight loss ecosystem" },
      { id: "tiered", label: "NHS tiered support: from free programs to surgery" },
      { id: "private", label: "Private and pharmacy based GLP 1 access" },
      { id: "timelines", label: "Practical timelines for Huddersfield residents" },
      { id: "boosters", label: "Local Huddersfield boosters and integration" },
      { id: "conclusion", label: "Conclusion: Huddersfield strategic path" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Huddersfield)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-huddersfield" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Best in Huddersfield? Free Kirklees Wellness Service with 12 week coaching for BMI 25 plus can be a strong first step; NHS bariatric surgery routes can apply for higher BMI thresholds; private pharmacies can offer faster access to Wegovy and Mounjaro for eligible people. Lose 10 kg? 2 to 3 months can be a safe target for many people.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Huddersfield&apos;s Pennine views and market bustle inspire health goals. Yet Yorkshire puddings and shift work challenge. Here is practical navigation for the best weight loss treatment in Huddersfield.
                </p>

                <p className={p}>
                  Start by comparing providers on{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    best weight loss treatments in the UK
                  </Link>{" "}
                  and check eligibility with the{" "}
                  <Link className={linkCls} href="/tools/bmi-calculator">
                    BMI calculator
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="ecosystem" heading="Huddersfield weight loss ecosystem">
                <p className={`text-lg md:text-xl ${p}`}>
                  Kirklees obesity? 34% adults (NHS Digital 2025). Free NHS programs can be accessed via GP referral, with clinical escalation for complex cases.
                </p>

                <p className={p}>
                  NHS Digital data often highlights Yorkshire as a higher prevalence region. Huddersfield&apos;s textile heritage can shape food patterns. Location can change access and timing, and Kirklees Council coordinates local services. Local edge: Holly Bank country park trails can burn about 280 calories per hour depending on pace and body size.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="tiered" heading="NHS tiered support: from free programs to surgery">
                <p className={`text-lg md:text-xl ${p}`}>
                  Free option? Kirklees Wellness Service with 12 week coaching and group support for BMI 25 plus, with reports citing around 5 to 8% weight loss in similar tier 2 programs. Bariatric routes can be handled through Calderdale and Huddersfield NHS Foundation Trust pathways for higher BMI thresholds.
                </p>

                <p className={p}>
                  Kirklees Wellness Service style programmes focus on personalised coaching, group accountability, and nutrition basics. Evidence summaries such as NICE NG246 describe how structured lifestyle support can beat solo apps. Waiting times can be around 4 to 12 weeks depending on capacity.
                </p>

                <p className={p}>
                  Specialist bariatric pathways can include gastric sleeve and bypass routes for severe obesity, typically BMI 40 plus or BMI 35 plus with conditions after lower tiers have been tried. Surgery can drive large losses and still requires lifelong changes and nutrient monitoring.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="private" heading="Private and pharmacy based GLP 1 access">
                <p className={`text-lg md:text-xl ${p}`}>
                  Fast GLP 1 access can be available via private pharmacies with supervision. Wegovy can be described around 15% trial loss and Mounjaro around 20% in selected settings. Monthly costs can range roughly £180 to £350 depending on dose and monitoring.
                </p>

                <p className={p}>
                  Private programmes often include titration schedules, side effect support, and guidance on cold storage for refrigerated pens. NEJM trials are commonly cited in summaries describing 12 to 20% loss at around 68 weeks for selected candidates.
                </p>

                <p className={`text-sm ${muted}`}>
                  DOI{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2416394"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1056/NEJMoa2416394
                  </a>
                  .
                </p>

                <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                  <p className={`text-base font-semibold ${strong}`}>Safety checklist</p>
                  <ul className={`mt-3 list-disc space-y-2 pl-6 ${p}`}>
                    <li>GPhC registered pharmacy and named clinician</li>
                    <li>Cold storage guidance for refrigerated pens</li>
                    <li>Clear side effect management support</li>
                    <li>Repeat blood tests plan where appropriate</li>
                  </ul>
                  <p className={`mt-3 text-sm ${muted}`}>
                    Verify registration at{" "}
                    <a
                      href="https://www.pharmacyregulation.org/registers"
                      className={linkCls}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      pharmacyregulation.org
                    </a>
                    .
                  </p>
                </div>

                <p className={p}>
                  Hedging: medicines amplify lifestyle. If you want medication primers, read{" "}
                  <Link className={linkCls} href="/what-is-wegovy">
                    what Wegovy is
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/what-is-mounjaro">
                    what Mounjaro is
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="timelines" heading="Practical timelines for Huddersfield residents">
                <p className={`text-lg md:text-xl ${p}`}>
                  5 kg safely? About 5 to 7 weeks with a 500 calorie deficit and consistent steps. 20 kg in 6 months? GLP 1 plus strength training can make it feasible for eligible people. Surgery routes can produce larger losses across 12 to 18 months.
                </p>

                <p className={p}>
                  Crash diets fail. The Lancet analyses commonly cited in public summaries discuss high regain rates. A safer pace is 0.5 to 1 kg per week.
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

                <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                  <p className={`text-base font-semibold ${strong}`}>Safe pace examples</p>
                  <ul className={`mt-3 list-disc space-y-2 pl-6 ${p}`}>
                    <li>5 kg: about 5 to 7 weeks with a 400 calorie cut and 10k steps</li>
                    <li>10 kg: about 2 to 3 months with structured coaching and protein focus</li>
                    <li>20 kg: about 5 to 6 months with GLP 1 plus strength twice weekly</li>
                    <li>30 kg plus: about 12 to 18 months through bariatric pathways</li>
                  </ul>
                </div>

                <p className={p}>
                  Plateaus happen. Some people use structured carbohydrate cycling approaches. Obesity Reviews discusses plateau patterns and adherence.
                </p>

                <p className={`text-sm ${muted}`}>
                  DOI{" "}
                  <a
                    href="https://doi.org/10.1111/obr.13987"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1111/obr.13987
                  </a>
                  .
                </p>

                <p className={p}>
                  If you feel stuck, use our{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-weight-loss-plateau">
                    weight loss plateau guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="boosters" heading="Local Huddersfield boosters and integration">
                <p className={`text-lg md:text-xl ${p}`}>
                  Top local hacks? Holly Bank trails, market vegetable swaps, and Kirklees groups can improve adherence compared with solo efforts.
                </p>

                <p className={p}>
                  Movement: Colne Valley paths and local circuits can help you hit the WHO baseline of 150 minutes weekly. Nutrition: Huddersfield market shopping can make lean protein and fibre easier. Accountability: group sessions can improve retention.
                </p>

                <p className={p}>
                  Weather proof plan: home HIIT apps can help. Some studies report a relative fat loss edge in certain intervention trials.
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

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Huddersfield strategic path">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Huddersfield? Tiered excellence: free Kirklees wellness support for starters, NHS bariatric pathways for complex cases, and pharmacy GLP 1 programmes for eligible speed. Local trails amplify all. Start with a GP chat or a market veg haul and keep the plan repeatable.
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
                      href="https://www.pharmacyregulation.org/registers"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Pharmacy register tool
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
                heading="Practical next steps (UK wide, including Huddersfield)"
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
                    If medication is discussed, read{" "}
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
