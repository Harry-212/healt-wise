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
  "Best Weight Loss Treatment East Kilbride: Practical Scotland Access Guide";

export default function EastKilbrideLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "landscape", label: "East Kilbride weight loss landscape" },
      { id: "pathways", label: "NHS vs private pathways in East Kilbride" },
      { id: "glp1", label: "GLP 1 basics: what fits East Kilbride life?" },
      { id: "timelines", label: "Timelines and realistic plans" },
      { id: "checklist", label: "Checklists: safe steps for EK residents" },
      { id: "boosters", label: "Local East Kilbride boosters" },
      { id: "conclusion", label: "Conclusion: East Kilbride empowered path" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including East Kilbride)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-east-kilbride" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Best in East Kilbride? NHS dietitian programs first (free, evidence based); private GLP 1 like Wegovy and Mounjaro for eligible (BMI 30 plus). Access via GP and health board, waits vary. Lose 10 kg? 3 to 6 months safely.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  East Kilbride&apos;s green belts and EK trails offer slimming potential. But pie shops and commutes challenge. Postcode tweaks access, not science, here&apos;s how to navigate wisely.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="landscape" heading="East Kilbride weight loss landscape">
                <p className={`text-lg md:text-xl ${p}`}>
                  Scotland obesity? 32% adults (Public Health Scotland 2025), EK mirrors; services via NHS Lanarkshire board, not instant GLP 1.
                </p>

                <p className={p}>
                  NHS Scotland data shows regional overweight at 65% plus, Public Health Scotland Obesity Profile 2025. EK&apos;s urban suburban mix means transport to clinics matters. Could private speed things? Possibly, but GP loops ensure safety. Nuance: health boards prioritise lifestyle first; medicines follow assessment.
                </p>

                <p className={p}>
                  Local hacks: Langlands Moss walks burn about 250 calories per hour, pair with market veg swaps.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="pathways" heading="NHS vs private pathways in East Kilbride">
                <p className={`text-lg md:text-xl ${p}`}>
                  NHS route? GP referral to tier 2 and 3, group sessions, dietitians (free, 5 to 10% loss proven). Private? Online clinics for Wegovy and others, £150 to £300 per month.
                </p>

                <p className={p}>
                  NHS Lanarkshire handles EK. Start with a GP chat for a weight program referral. Waits? 3 to 6 months typical; includes counselling beating solo diets, NICE NG246, 2025. Most people must try basics first.
                </p>

                <p className={p}>
                  Private: GPhC registered online services deliver refrigerated pens (semaglutide, Wegovy, tirzepatide, Mounjaro, liraglutide, Saxenda). Faster, but check titration and a slow dose ramp to reduce nausea. MHRA regulated pharmacies maintain cold chains which is vital for efficacy.
                </p>

                <p className={p}>
                  Critique: private plans can skip GP shared care and can feel costly after the course ends.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="glp1" heading="GLP 1 basics: what fits East Kilbride life?">
                <p className={`text-lg md:text-xl ${p}`}>
                  Wegovy (semaglutide)? Appetite curb, 12 to 15% loss (trials). Mounjaro (tirzepatide)? Dual action, similar results. Saxenda? Daily injection, milder.
                </p>

                <p className={p}>
                  GLP 1s mimic gut hormones and slow stomach emptying. Wegovy is a weekly pen, and NHS eligibility is often framed around higher BMI thresholds and risk factors. Mounjaro adds GIP for extra satiety, with trials reporting around 20% average loss.
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
                  Side effects can include nausea and gallbladder risk. GP blood tests can be essential. These are not forever fixes, pair them with a 500 calorie deficit for about 1 kg per week. Kelly Clarkson style? Medicines plus habits, but UK access needs monitoring.
                </p>

                <p className={p}>
                  If you want a quick primer, read{" "}
                  <Link className={linkCls} href="/what-is-wegovy">
                    what Wegovy is
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/what-is-mounjaro">
                    what Mounjaro is
                  </Link>
                  , and{" "}
                  <Link className={linkCls} href="/what-is-saxenda">
                    what Saxenda is
                  </Link>
                  . If budget is a concern, check{" "}
                  <Link className={linkCls} href="/wegovy-price-comparison">
                    Wegovy price comparison
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/mounjaro-price-comparison">
                    Mounjaro price comparison
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="timelines" heading="Timelines and realistic plans">
                <p className={`text-lg md:text-xl ${p}`}>
                  5 kg? About 5 weeks at roughly 0.75 kg per week using walks plus protein. 20 kg in 5 months? Medicines plus strength can make it feasible for some people who are BMI eligible.
                </p>

                <p className={p}>
                  No 7 day miracles, unsafe. Safe: 0.5 to 1 kg per week.
                </p>

                <p className={p}>
                  Short term (5 kg): daily 400 calorie cut, EK Park circuits, and tracking via an app.
                </p>

                <p className={p}>
                  Medium term (20 kg): GLP 1 plus 150 minutes exercise, fortnightly weigh ins. NICE: 10% yearly can be sustainable for many people.
                </p>

                <p className={p}>
                  Plateaus? Some people cycle carbohydrates. Obesity Reviews discusses approaches to plateaus and adherence.
                </p>

                <p className={`text-sm ${muted}`}>
                  DOI{" "}
                  <a
                    href="https://doi.org/10.1111/obr.13945"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1111/obr.13945
                  </a>
                  .
                </p>

                <p className={p}>
                  If you want a practical playbook, see our{" "}
                  <Link className={linkCls} href="/weight-loss-plateau">
                    weight loss plateau guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="checklist" heading="Checklists: safe steps for EK residents">
                <p className={`text-lg md:text-xl ${p}`}>Before private:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>
                    Verify GPhC prescriber and pharmacy. The register tool at{" "}
                    <a
                      href="https://www.pharmacyregulation.org/registers"
                      className={linkCls}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      pharmacyregulation.org
                    </a>{" "}
                    can confirm UK legitimacy.
                  </li>
                  <li>Ask about the titration plan, side effect policy, and repeat tests.</li>
                  <li>Budget at least £200 per month including delivery.</li>
                  <li>NHS first? Ask your GP about BMI and any risk factors and whether shared care is possible.</li>
                  <li>Warnings: pregnancy is a reason to avoid. A pancreatitis history can be a no go.</li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="boosters" heading="Local East Kilbride boosters">
                <p className={p}>
                  John Muir Way segments offer free movement. Markets help with lean meats and vegetables. Groups and sessions can improve adherence.
                </p>

                <p className={p}>
                  Rainy days? Home HIIT can help, with some studies reporting a 26% fat edge in certain protocols.
                </p>

                <p className={`text-sm ${muted}`}>
                  DOI{" "}
                  <a
                    href="https://doi.org/10.1113/JP287654"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1113/JP287654
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: East Kilbride empowered path">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment East Kilbride? NHS foundations plus smart private if needed, tailored, monitored, local. From GP chats to trail walks, sustainable wins await. Assess, act safely, your fitter tomorrow starts local.
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
                      href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      WHO obesity fact sheet
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
                heading="Practical next steps (UK wide, including East Kilbride)"
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
                    <Link className={linkCls} href="/bmi-calculator">
                      BMI calculator
                    </Link>{" "}
                    and bring your medical history to your GP or clinician.
                  </li>
                  <li>
                    If you consider medicines, read the primers on{" "}
                    <Link className={linkCls} href="/what-is-wegovy">
                      Wegovy
                    </Link>{" "}
                    and{" "}
                    <Link className={linkCls} href="/what-is-mounjaro">
                      Mounjaro
                    </Link>{" "}
                    before you pay.
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
