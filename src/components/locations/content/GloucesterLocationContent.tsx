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

const PAGE_TITLE =
  "Best Weight Loss Treatment Gloucester: Gloucestershire Access Guide";

export default function GloucesterLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "reality", label: "Gloucester weight loss reality check" },
      { id: "free-vs-private", label: "Free NHS vs private GLP 1 breakdown" },
      { id: "glp1", label: "GLP 1 deep dive: Mounjaro, Wegovy, alternatives" },
      { id: "timelines", label: "Practical timelines and checklists" },
      { id: "boosters", label: "Gloucester specific boosters" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion: Gloucester smartest path" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Gloucester)" },
      { id: "disclaimer", label: "Disclaimer" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-gloucester" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Most successful Gloucester weight loss? Healthy Lifestyles Gloucestershire (free 12 week NHS programs), proven 5 to 10% loss. Kelly Clarkson? GLP 1 medicines plus lifestyle, per interviews. Mounjaro 6 months? 15 to 20 kg can be realistic for some people. Cheaper alternative? NHS programs first.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Gloucester&apos;s cathedral views and Sharpness canal paths inspire fitness. But dockside fish and chips can pile on pounds. Location shapes access, free county programs beat trendy injections for most people. Here is your roadmap.
                </p>

                <p className={p}>
                  Compare options on{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    best weight loss treatments in the UK
                  </Link>
                  , then read{" "}
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

              <GuideSection darkMode={darkMode} id="reality" heading="Gloucester weight loss reality check">
                <p className={`text-lg md:text-xl ${p}`}>
                  Gloucestershire obesity? 29% adults (NHS 2025). Top free option? Healthy Lifestyles Gloucestershire, 12 week programs via GP referral, BMI 25 plus eligible.
                </p>

                <p className={p}>
                  County data often cites overweight around 62%. Urban docks and rural Forest areas mean varied access. Healthy Lifestyles Gloucestershire, run by ABL Health for the NHS, offers free 12 week programs with group sessions, one to one coaching, and apps. Eligibility is often BMI 25 plus, and BMI 27.5 plus for some ethnic risk groups. Reports cite 5 to 10 kg average loss in evaluations.
                </p>

                <p className={p}>
                  Nuance: medicines like Mounjaro tend to come later. Lifestyle first is a common sequence under NICE style guidance. Local bonus: Gloucester Quays loops can burn about 350 calories per hour depending on pace and body size.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="free-vs-private" heading="Free NHS vs private GLP 1 breakdown">
                <p className={`text-lg md:text-xl ${p}`}>
                  Gloucester NHS route? GP to Healthy Lifestyles, free and often faster. Private Mounjaro and Wegovy? Often £200 plus per month, and BMI 30 plus is commonly discussed.
                </p>

                <p className={p}>
                  Healthy Lifestyles Gloucestershire stands out for accessibility, no cost and no needles. Weekly weigh ins, nutrition swaps, and movement plans are typical. Many programs run 12 weeks and can be extendable. Group accountability is often linked with better adherence.
                </p>

                <p className={p}>
                  Private route: online clinics can prescribe Wegovy (semaglutide) and Mounjaro (tirzepatide). Monthly costs can cluster around £179 to £299, and titration can reduce nausea. If you go private, GP shared care can be inconsistent, so budget for the full course.
                </p>

                <p className={p}>
                  Safety note: verify GPhC registration and cold storage. You can check registers at{" "}
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
              </GuideSection>

              <GuideSection darkMode={darkMode} id="glp1" heading="GLP 1 deep dive: Mounjaro, Wegovy, alternatives">
                <p className={`text-lg md:text-xl ${p}`}>
                  Mounjaro 6 months? 15 to 20 kg loss can be typical in some trial based expectations for selected people, using a weekly pen. Kelly Clarkson method? GLP 1 plus cardio and portion control. Cheaper alternative? Healthy Lifestyles Gloucestershire is free.
                </p>

                <p className={p}>
                  Mounjaro (tirzepatide) is dual hormone and mimics GLP 1 plus GIP. Trials report large average losses in selected populations at around a year. A 6 month plan can be meaningful when paired with a 500 calorie deficit.
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
                  Wegovy (semaglutide) is single action with trial summaries often around 15% at about a year. NHS eligibility is commonly framed around BMI 35 plus, or BMI 30 plus with issues. Saxenda is a daily alternative with smaller average losses for many people.
                </p>

                <p className={p}>
                  Cheaper alternatives include NHS lifestyle support first, and sometimes daily liraglutide options. Avoid unregulated imports.
                </p>

                <p className={p}>
                  If you want to compare costs, check{" "}
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

              <GuideSection darkMode={darkMode} id="timelines" heading="Practical timelines and checklists">
                <p className={`text-lg md:text-xl ${p}`}>
                  Lose 10 kg? About 10 to 12 weeks for some people using an NHS lifestyle program. 20 kg in 6 months? Mounjaro plus walks can be feasible for selected candidates. 5 kg quick start? A 400 calorie cut plus Quays circuits.
                </p>

                <p className={p}>
                  Safe pace: 0.5 to 1 kg per week. No 7 day miracle targets.
                </p>

                <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                  <p className={`text-base font-semibold ${strong}`}>Gloucester timeline planner</p>
                  <ul className={`mt-3 list-disc space-y-2 pl-6 ${p}`}>
                    <li>Phase 1 (weeks 1 to 4): Healthy Lifestyles signup, 400 calorie deficit, 10k steps</li>
                    <li>Phase 2 (weeks 5 to 12): add strength twice weekly, expect 6 to 8 kg down</li>
                    <li>Phase 3 (months 4 to 6): GLP 1 if plateaued, aim 15 kg total</li>
                  </ul>
                </div>

                <p className={`text-lg md:text-xl ${p}`}>Before private:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>
                    Use the{" "}
                    <Link className={linkCls} href="/bmi-calculator">
                      BMI calculator
                    </Link>{" "}
                    and consider waist measurement
                  </li>
                  <li>GPhC pharmacy check</li>
                  <li>Written titration schedule</li>
                  <li>Side effect exit plan</li>
                </ul>

                <p className={`text-lg md:text-xl ${p}`}>NHS first checklist:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>GP referral request</li>
                  <li>BMI 25 plus proof</li>
                  <li>Transport to sessions if needed</li>
                </ul>

                <p className={p}>
                  If you hit a plateau, use our{" "}
                  <Link className={linkCls} href="/weight-loss-plateau">
                    weight loss plateau guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="boosters" heading="Gloucester specific boosters">
                <p className={p}>
                  Lydney Docks walks can burn about 400 calories per hour depending on pace. Farmers markets can make lean protein easier. Group support can improve retention in many programs.
                </p>

                <p className={p}>
                  Rain plan: home Tabata sessions are used by some people, with some studies reporting a relative fat loss edge in certain interventions.
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

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Gloucester smartest path">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Gloucester? Start with Healthy Lifestyles Gloucestershire because it is free, proven, and local. Add Mounjaro or Wegovy if needed, with realistic timelines and monitoring. From Quays walks to group support, sustainable change can fit GL postcodes well. A GP chat can unlock the path.
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
                heading="Practical next steps (UK wide, including Gloucester)"
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
                    and bring your history to your GP.
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
