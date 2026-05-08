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

const PAGE_TITLE = "Best Weight Loss Treatment Edinburgh: NHS and Practical Pathways";

export default function EdinburghLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "scene", label: "Edinburgh weight loss scene: NHS Lothian reality" },
      { id: "access", label: "GLP 1 access: Mounjaro, Wegovy, Ozempic in Edinburgh" },
      { id: "timelines", label: "Realistic timelines: 10kg in 2 months possible?" },
      { id: "boosters", label: "Edinburgh specific boosters and hacks" },
      { id: "safety", label: "Safety checklists: before any pen" },
      { id: "measuring", label: "Measuring success beyond scales" },
      { id: "conclusion", label: "Conclusion: Edinburgh evidence path forward" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Edinburgh)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-edinburgh" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Most successful? NHS Lothian specialist programs (5 to 10% loss, evidence based). Mounjaro in Edinburgh? GP referral through NHS Lothian or private GPhC clinics. 10 kg in 2 months with Ozempic? Aggressive but possible at 1.25 kg per week, doctor oversight essential. Kelly Clarkson? GLP 1 plus lifestyle, per interviews.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Edinburgh&apos;s castle crags and festival buzz inspire fitness. But haggis suppers and pub crawls challenge. Postcode shapes access, here is your complete roadmap.
                </p>

                <p className={p}>
                  If you want to compare options across the UK, start with{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    best weight loss treatments in the UK
                  </Link>
                  . For a medication primer, read{" "}
                  <Link className={linkCls} href="/what-is-mounjaro">
                    what Mounjaro is
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/what-is-wegovy">
                    what Wegovy is
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="scene"
                heading="Edinburgh weight loss scene: NHS Lothian reality"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Edinburgh obesity? 29% adults (NHS Lothian 2025). Top programs: NHS Specialist Weight Management (3 plus 9 months, multi disciplinary), Counterweight Plus (Type 2 diabetes remission).
                </p>

                <p className={p}>
                  NHS Lothian serves Edinburgh. GP referral unlocks Specialist Weight Management with dietitians, psychologists, and physiotherapists, often described as 3 months intensive plus 9 months maintenance. Evidence summaries cite meaningful weight loss compared with solo efforts, aligned with NICE NG246.
                </p>

                <p className={p}>
                  Counterweight Plus targets Type 2 Diabetes with total diet replacement (soups and shakes) under supervision. Public Health Scotland summaries cite high remission rates in supported programs. Local edge: Arthur&apos;s Seat climbs can burn around 350 calories per hour depending on pace and body size.
                </p>

                <p className={p}>
                  Nuance: waits can be 4 to 8 months and lifestyle proof is often required first. Private options can fill gaps.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="access"
                heading="GLP 1 access: Mounjaro, Wegovy, Ozempic in Edinburgh"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  How to get Mounjaro Edinburgh? NHS Lothian (BMI 35 plus with health issues) via GP; private GPhC clinics can be £200 plus per month. Wegovy is similar. Ozempic is often discussed as off label weight loss and GP discretion varies.
                </p>

                <p className={p}>
                  NHS route: semaglutide (Wegovy) and tirzepatide (Mounjaro) are generally framed around BMI 35 plus, or BMI 30 plus with comorbidities, under specialist pathways. Titration often starts at 0.25 mg weekly. Evidence summaries discuss 15 to 20% loss at 68 weeks in some trials.
                </p>

                <p className={`text-sm ${muted}`}>
                  DOI{" "}
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
                  Private: GPhC registered online clinics can deliver refrigerated pens to EH postcodes. Verify prescriber registration and confirm cold chain storage, typically 2 to 8°C. Costs can range £179 to £299 per month depending on dose and support.
                </p>

                <p className={p}>
                  Ozempic caveat: semaglutide is primarily for diabetes and weight loss use can be off label. Some clinicians may prescribe while others prefer referral. Regulators warn about unlicensed imports and counterfeit supply chains.
                </p>

                <p className={p}>
                  Kelly Clarkson method: public interviews describe medication plus portion control, strength training, and cardio. A UK version needs monitoring.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="timelines"
                heading="Realistic timelines: 10kg in 2 months possible?"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  10 kg in 2 months is about 1.25 kg per week. It can be doable on GLP 1 plus a 600 calorie deficit and exercise, but it is aggressive and muscle loss risk rises without protein and weights.
                </p>

                <p className={p}>
                  Safe baseline: 0.5 to 1 kg per week, aligned with NICE framing. 10 kg often needs a 600 to 800 calorie deficit daily, high protein choices, and consistent steps plus strength.
                </p>

                <p className={p}>
                  With GLP 1: trials often show a faster early drop then a steadier pace. Lancet critiques discuss regain after stopping medication. The key is habit building while appetite is easier to manage.
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

                <p className={p}>
                  Without medicines: pure lifestyle may average around 0.75 kg per week for many people, making 12 to 16 weeks a more realistic target for 10 kg.
                </p>

                <p className={p}>
                  Plateaus can happen around week 6. Sleep and protein can help, and you can use our{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-weight-loss-plateau">
                    weight loss plateau guide
                  </Link>{" "}
                  for practical next steps.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="boosters"
                heading="Edinburgh specific boosters and hacks"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Top local combos? NHS Lothian plus Arthur&apos;s Seat climbs (about 400 calories per hour for some people) plus Stockbridge market protein. HIIT at Meadowbank is often cited in training writeups, with some studies reporting a 28% fat edge.
                </p>

                <p className={p}>
                  Movement: Salisbury Crags style hill work, plus Pilates and steady walking. Food: Leith fish market options and vegetable stalls can make protein and fibre easier.
                </p>

                <p className={p}>
                  Accountability: NHS groups can improve adherence. Rainy days? Calton Hill circuits can burn about 300 calories in 45 minutes depending on pace.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="safety" heading="Safety checklists: before any pen">
                <p className={`text-lg md:text-xl ${p}`}>Private clinic must haves:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Named GPhC prescriber and pharmacy</li>
                  <li>Written titration plan over about 8 weeks</li>
                  <li>Side effect protocol for nausea and dehydration</li>
                  <li>Repeat blood tests plan</li>
                  <li>
                    Red flags: no named clinician, no screening, or storage advice that ignores refrigeration.
                  </li>
                </ul>

                <p className={p}>
                  NHS advantages: free monitoring, shared care, and formulary safety.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="measuring" heading="Measuring success beyond scales">
                <p className={p}>
                  Waist circumference can be a useful marker for many people. Body composition tools can help track trends. Evidence summaries often cite that 5% loss can substantially reduce diabetes risk.
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

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Edinburgh evidence path forward">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Edinburgh? NHS Lothian foundation plus strategic GLP 1 if eligible, paired with castle climbs and market smarts. From 10 kg sprints to lifelong habits, your sustainable transformation starts with informed steps. GP first, always.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Sources you can open in a second tab">
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
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
                      href="https://www.pharmacyregulation.org/registers"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GPhC register tool
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
                heading="Practical next steps (UK wide, including Edinburgh)"
              >
                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>
                    Compare providers on follow up and safety checks using{" "}
                    <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                      the UK comparison page
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
