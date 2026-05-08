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

const PAGE_TITLE = "Best Weight Loss Treatment Hull: Humber Side Access and Strategies";

export default function KingstonUponHullLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "entry", label: "Hull weight landscape and NHS entry point" },
      { id: "private", label: "Private pathways: GLP 1 and surgical access" },
      { id: "timelines", label: "Practical timelines for Hull residents" },
      { id: "realities", label: "GLP 1 realities: benefits, sides, monitoring" },
      { id: "resources", label: "Local Hull resources and lifestyle integration" },
      { id: "checklist", label: "Safe access checklist for Hull" },
      { id: "conclusion", label: "Conclusion: Hull structured slimming success" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Hull)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-hull" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Most effective Hull weight loss? NHS CHCP specialist services for higher BMI thresholds with multidisciplinary support and lifestyle first care. Private GLP 1 medicines such as Wegovy and Mounjaro can be available through hospitals and pharmacies. Surgery routes exist for severe obesity. A 12 week NHS Digital programme may be available via GP referral.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Hull&apos;s Humber views and markets tempt with chips. But structured paths exist. Location shapes access, CHCP can offer free specialist care and private options can speed medicines. Here is your roadmap.
                </p>

                <p className={p}>
                  Compare options on{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    best weight loss treatments in the UK
                  </Link>{" "}
                  and check eligibility with the{" "}
                  <Link className={linkCls} href="/bmi-calculator">
                    BMI calculator
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="entry" heading="Hull weight landscape and NHS entry point">
                <p className={`text-lg md:text-xl ${p}`}>
                  Hull obesity is often cited around the mid 30% range in some dashboards. City Health Care Partnership specialist weight management at Marfleet Health Centre can be accessed by self referral for higher BMI thresholds. Support can be multidisciplinary, aligned with NICE NG246.
                </p>

                <p className={p}>
                  Waiting times can be about 2 to 4 months depending on capacity. A structured foundation can help because quick fixes often fail. Local boost: Humber Bridge walks can burn about 350 calories per hour depending on pace and body size.
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
              </GuideSection>

              <GuideSection darkMode={darkMode} id="private" heading="Private pathways: GLP 1 and surgical access">
                <p className={`text-lg md:text-xl ${p}`}>
                  Private options can include hospitals and pharmacies. Wegovy is a weekly semaglutide pen with many summaries citing around 15% average loss. Mounjaro is tirzepatide with dual hormone action. Typical monthly costs can be £180 to £320 depending on dose and monitoring.
                </p>

                <p className={p}>
                  Surgery options such as gastric sleeve or bypass can be considered at severe obesity thresholds, usually after lifestyle support has been tried. Cold storage and regulated delivery matter for injectable pens.
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
              </GuideSection>

              <GuideSection darkMode={darkMode} id="timelines" heading="Practical timelines for Hull residents">
                <p className={`text-lg md:text-xl ${p}`}>
                  Lose 10 kg safely? About 10 to 12 weeks with structured support and a 500 calorie deficit is a common target. 20 kg in 6 months? GLP 1 plus strength training can make it feasible for selected eligible people. Surgery pathways can involve 1 to 2 years of preparation and follow up.
                </p>

                <p className={p}>Safe pace is often 0.5 to 1 kg per week.</p>

                <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                  <p className={`text-base font-semibold ${strong}`}>Examples</p>
                  <ul className={`mt-3 list-disc space-y-2 pl-6 ${p}`}>
                    <li>5 kg: about 5 to 7 weeks with Humber walks and coaching</li>
                    <li>20 kg: about 5 to 6 months with medicines plus weights twice weekly</li>
                    <li>30 kg plus: about 12 to 24 months through surgery pathways</li>
                  </ul>
                </div>

                <p className={p}>
                  Plateaus happen. If you feel stuck, use our{" "}
                  <Link className={linkCls} href="/weight-loss-plateau">
                    weight loss plateau guide
                  </Link>
                  .
                </p>

                <p className={`text-sm ${muted}`}>
                  Obesity Reviews DOI{" "}
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
              </GuideSection>

              <GuideSection darkMode={darkMode} id="realities" heading="GLP 1 realities: benefits, sides, monitoring">
                <p className={`text-lg md:text-xl ${p}`}>
                  GLP 1 medicines curb appetite. Wegovy summaries often cite around 15% loss at 68 weeks in selected studies, while Mounjaro can show higher averages for some people. Side effects often include nausea and it can be reduced with slow dose increases.
                </p>

                <p className={p}>
                  Hull tip: a weekend start can be easier for shift patterns. Pair medicines with adequate protein and strength work to preserve muscle. Long term outcomes depend on habits, not only pens.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Local Hull resources and lifestyle integration">
                <p className={p}>
                  CHCP lifestyle support can be a foundation. App based tracking programmes may be available via NHS referral. Movement options include Humber Bridge and East Park circuits. Markets can make lean fish and vegetables easier than fried options.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="checklist" heading="Safe access checklist for Hull">
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>
                    Verify a UK pharmacy using{" "}
                    <a
                      href="https://www.pharmacyregulation.org/registers"
                      className={linkCls}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      pharmacyregulation.org
                    </a>
                  </li>
                  <li>Named prescriber and clear monitoring plan</li>
                  <li>Written titration schedule and side effect protocol</li>
                  <li>Cold storage and delivery handling confirmation</li>
                </ul>

                <p className={p}>
                  Use the{" "}
                  <Link className={linkCls} href="/methodology">
                    methodology
                  </Link>{" "}
                  to compare provider standards and the{" "}
                  <Link className={linkCls} href="/bmi-calculator">
                    BMI calculator
                  </Link>{" "}
                  to prepare for eligibility discussions.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Hull structured slimming success">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Hull? CHCP foundations for many people, with private GLP 1 or surgery routes for eligible cases. From specialist support to Humber strides, evidence beats fads. Start with a BMI check and a clinician conversation.
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
                      href="https://www.nhs.uk/live-well/healthy-weight/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NHS healthy weight overview
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
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="trust" heading="Why Health Wise is a comparator, not a prescriber">
                <p className={p}>
                  We help you compare options and questions to ask. We do not prescribe. A qualified clinician should assess eligibility, interactions, contraindications, and monitoring.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="next-steps" heading="Practical next steps (UK wide, including Hull)">
                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>
                    Compare providers using{" "}
                    <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                      our UK comparison page
                    </Link>
                    .
                  </li>
                  <li>
                    Read{" "}
                    <Link className={linkCls} href="/what-is-wegovy">
                      what Wegovy is
                    </Link>{" "}
                    and{" "}
                    <Link className={linkCls} href="/what-is-mounjaro">
                      what Mounjaro is
                    </Link>
                    .
                  </li>
                  <li>
                    If pricing matters, check{" "}
                    <Link className={linkCls} href="/mounjaro-price-comparison">
                      Mounjaro price comparison
                    </Link>{" "}
                    and{" "}
                    <Link className={linkCls} href="/wegovy-price-comparison">
                      Wegovy price comparison
                    </Link>
                    .
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
