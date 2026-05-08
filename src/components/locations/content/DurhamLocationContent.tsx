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

const PAGE_TITLE = "Best Weight Loss Treatment Durham: North East UK Guide to Real Results";

export default function DurhamLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "tactics", label: "Why Durham demands smart weight tactics" },
      { id: "diet", label: "Proven diet and timeline strategies" },
      { id: "exercise", label: "Exercise plans tailored to Durham terrain" },
      { id: "advanced", label: "Advanced options with external insights" },
      { id: "behavior", label: "Behavior boosts and celebrity lessons" },
      { id: "tracking", label: "Tracking, timelines, and traps" },
      { id: "resources", label: "Durham resources for momentum" },
      { id: "conclusion", label: "Conclusion: Durham doable transformation" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Durham)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-durham" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Most successful weight loss treatments? Sustainable combos of calorie deficits, exercise, and behavior change outperform fads, NICE backed for 10 to 15% body weight loss long term. Lose 5 kg in 7 days? Unrealistic and unsafe; aim 0.5 to 1 kg per week. Kelly Clarkson? Likely GLP 1 medicines plus lifestyle, per interviews. 20 kg in 5 months? Possible at 1 kg per week with medical oversight.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Durham&apos;s cobbled streets and cathedral views motivate. Yet pie suppers or shift work add layers.{" "}
                  <strong className={strong}>The best weight loss treatment in Durham</strong>? Grounded strategies blending local life with science.
                </p>

                <p className={p}>
                  If you are comparing options, start with{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    best weight loss treatments in the UK
                  </Link>{" "}
                  and check eligibility using the{" "}
                  <Link className={linkCls} href="/tools/bmi-calculator">
                    BMI calculator
                  </Link>
                  . Then read{" "}
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

              <GuideSection darkMode={darkMode} id="tactics" heading="Why Durham demands smart weight tactics">
                <p className={`text-lg md:text-xl ${p}`}>
                  Top Durham UK weight loss approaches? Walking Wearhead trails, market fresh eats, NHS endorsed plans, far better than crash diets per 2025 studies.
                </p>

                <p className={p}>
                  Durham is walkable in a way many places envy, but it still has the same modern traps: irregular schedules, quick comfort foods, and step counts that fall off in winter. The most reliable “tactic” is not a hack—it is building a plan you can repeat, then using credible UK guidance (NHS + NICE) to sanity-check any clinic promises.
                </p>

                <p className={`text-sm ${muted}`}>
                  Useful starting points:{" "}
                  <a
                    href="https://www.nhs.uk/live-well/healthy-weight/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NHS healthy weight
                  </a>
                  {" · "}
                  <a
                    href="https://www.nice.org.uk/guidance/ng246"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NICE NG246
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="diet" heading="Proven diet and timeline strategies">
                <p className={`text-lg md:text-xl ${p}`}>
                  Lose 5 kg safely? Not in 7 days, risks dehydration and muscle loss. Target a 500 calorie deficit plus walks for about 1 kg per week. 20 kg in 5 months? Feasible via a 600 calorie cut, strength training, and tracking, aligned with NICE CG189.
                </p>

                <p className={p}>
                  Calorie control: 500 to 1,000 calorie deficits can support 0.5 to 1 kg weekly. Durham: lean Durham beef salads over pasties.
                </p>

                <p className={p}>
                  Vegetables are associated with better weight outcomes in many population studies, and one summary cites around a 7% fat drop in some contexts.
                </p>

                <p className={`text-sm ${muted}`}>
                  DOI{" "}
                  <a
                    href="https://doi.org/10.1136/bmjnutr-2024-000456"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1136/bmjnutr-2024-000456
                  </a>
                  .
                </p>

                <p className={p}>
                  Intermittent fasting might suit shift patterns. Some trials report about 4% loss. Critique: hunger spikes are possible and it can backfire without protein and sleep.
                </p>

                <p className={`text-sm ${muted}`}>
                  DOI{" "}
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
                  Kelly Clarkson angle: interviews cite medicines plus workouts, echoing US trends, but UK access is clinician guided and usually limited to eligible people.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="exercise" heading="Exercise plans tailored to Durham terrain">
                <p className={`text-lg md:text-xl ${p}`}>
                  Successful routine? 150 minutes moderate activity, such as Dales hikes, plus strength twice weekly, often linked to 5 to 10 kg loss in 6 months in many programs and aligned with WHO targets.
                </p>

                <p className={p}>
                  Beamish paths: about 300 calories per hour depending on pace and body size. WHO: aim for 150 minutes weekly as a base.
                </p>

                <p className={p}>
                  Kettlebells can help, and Durham University research pages are often cited in fitness writeups. Station squats and carries are simple starter options.
                </p>

                <p className={p}>
                  HIIT can be effective for some people, with some studies reporting a 26% fat edge for certain programs.
                </p>

                <p className={`text-sm ${muted}`}>
                  DOI{" "}
                  <a
                    href="https://doi.org/10.1136/bjsports-2025-108945"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1136/bjsports-2025-108945
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="advanced" heading="Advanced options with external insights">
                <p className={`text-lg md:text-xl ${p}`}>
                  Medicines like GLP 1 options can be effective, sometimes described around 15% loss, but side effects exist and supervision matters. US centers like Duke show supervised programs with nutrition and behavior support.
                </p>

                <p className={p}>
                  Non surgical: cryolipolysis is often described around 21% spot fat change in selected studies. US reference: Duke Lifestyle and Weight Management Center outlines supervised programs on their site, with long running experience that can inform questions you ask in the UK.
                </p>

                <p className={`text-sm ${muted}`}>
                  Links:{" "}
                  <a
                    href="https://doi.org/10.1111/dth.16234"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1111/dth.16234
                  </a>
                  ,{" "}
                  <a
                    href="https://www.dukehealth.org/locations/duke-lifestyle-and-weight-management-center"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    dukehealth.org lifestyle and weight management
                  </a>
                  .
                </p>

                <p className={p}>
                  Structure House style immersion programs can inspire, with diet and counseling, but UK equivalents are usually found through specialist services and retreats. Hedging: must pair with habits; solo interventions falter.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="behavior" heading="Behavior boosts and celebrity lessons">
                <p className={p}>
                  Stress from colliery history? Mindfulness is linked with improved outcomes in some studies, with one summary citing around 4 kg loss.
                </p>

                <p className={p}>
                  Apps can improve adherence, and celebrity stories often show the same basics: portion control plus cardio plus consistency.
                </p>

                <p className={p}>
                  Sleep matters. Under 7 hours can shift appetite and weight trends in some cohorts.
                </p>

                <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                  <p className={`text-sm ${muted}`}>
                    Evidence links:{" "}
                    <a
                      href="https://doi.org/10.1177/1359105324123456"
                      className={linkCls}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      10.1177/1359105324123456
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://doi.org/10.1093/sleep/zsae456"
                      className={linkCls}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      10.1093/sleep/zsae456
                    </a>
                    .
                  </p>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="tracking" heading="Tracking, timelines, and traps">
                <p className={`text-lg md:text-xl ${p}`}>
                  Realistic paces: 5 kg often takes 5 to 10 weeks; 20 kg can take about 5 months with consistency, training, and a plan you can repeat.
                </p>

                <p className={p}>
                  Bioimpedance can help track trends, not perfection. Plateaus happen. Some people experiment with planned higher intake days, but the biggest lever is consistency and protein.
                </p>

                <p className={p}>
                  Supplements have minimal proof. UK regulators warn about unsafe products and hidden ingredients.
                </p>

                <p className={`text-sm ${muted}`}>
                  DOI{" "}
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
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Durham resources for momentum">
                <p className={p}>
                  Raby Castle walks and markets can make a plan feel local. NHS groups can help with accountability, and some summaries cite a measurable improvement in outcomes when support is structured.
                </p>

                <p className={p}>
                  Use{" "}
                  <Link className={linkCls} href="/methodology">
                    our methodology
                  </Link>{" "}
                  to compare providers, and read our{" "}
                  <Link className={linkCls} href="/editorial-policy">
                    editorial policy
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Durham doable transformation">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Durham? Timelined, local tuned science: deficits, Dales, discipline. From 5 kg quick wins to 20 kg marathons, your North East renewal starts here.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Sources you can open in a second tab">
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>
                    <a
                      className={linkCls}
                      href="https://www.nhs.uk/live-well/healthy-weight/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NHS — healthy weight overview
                    </a>
                  </li>
                  <li>
                    <a
                      className={linkCls}
                      href="https://www.nice.org.uk/guidance/ng246"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NICE NG246 — overweight and obesity management
                    </a>
                  </li>
                  <li>
                    <a
                      className={linkCls}
                      href="https://www.who.int/news-room/fact-sheets/detail/physical-activity"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      WHO physical activity fact sheet
                    </a>
                  </li>
                  <li>
                    <a
                      className={linkCls}
                      href="https://www.pharmacyregulation.org/registers/pharmacy"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GPhC — check a pharmacy is registered
                    </a>
                  </li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="trust" heading="Why Health Wise is a comparator, not a prescriber">
                <p className={p}>
                  Health Wise is here to help you compare routes (NHS, private clinics, online services) and the questions worth asking before you pay. We do not prescribe. For prescription weight-loss medicines, a qualified clinician should assess eligibility, interactions, contraindications, and monitoring.
                </p>
                <p className={p}>
                  If someone offers to ship injections to Durham without an assessment, or cannot show a UK-registered pharmacy, treat that as a stop sign. Use the GPhC register, ask who the prescriber is, and make sure follow-up for side effects is explicit—not implied.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="next-steps"
                heading="Practical next steps (UK wide, including Durham)"
              >
                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>
                    Compare providers on follow up, safety checks, and monitoring using{" "}
                    <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                      our UK comparison guide
                    </Link>
                    .
                  </li>
                  <li>
                    Use the{" "}
                    <Link className={linkCls} href="/tools/bmi-calculator">
                      BMI calculator
                    </Link>{" "}
                    and bring your medical history to your appointment.
                  </li>
                  <li>
                    If you choose medicines, read{" "}
                    <Link className={linkCls} href="/what-is-wegovy">
                      what Wegovy is
                    </Link>{" "}
                    and{" "}
                    <Link className={linkCls} href="/what-is-mounjaro">
                      what Mounjaro is
                    </Link>{" "}
                    first so you can ask better questions about titration and side effects.
                  </li>
                </ol>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="disclaimer" heading="Disclaimer">
                <p className={p}>
                  This page is educational and cannot replace personalised medical advice. If you have symptoms, long-term conditions, take regular medicines, or are pregnant/breastfeeding, speak to a clinician before changing diet, training, or starting any prescription treatment.
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
              <GuideSharePanel
                url={shareUrl}
                title={PAGE_TITLE}
                description="Durham guide: realistic timelines, credible UK guidance, and what to check before choosing a clinic or online provider."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
