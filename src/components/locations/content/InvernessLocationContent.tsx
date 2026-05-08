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
  "Best Weight Loss Treatment Inverness: Highland Scotland Weight Loss Reality";

export default function InvernessLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "context", label: "Inverness weight loss: local context first" },
      { id: "nhs", label: "NHS Highland pathways: the smart start" },
      { id: "private", label: "Private clinic reality in Inverness" },
      { id: "glp1", label: "GLP 1 deep dive for Inverness life" },
      { id: "timelines", label: "Practical timelines: from 5kg to transformation" },
      { id: "checklists", label: "Safety checklists for Highland residents" },
      { id: "boosters", label: "Inverness specific boosters" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion: Inverness informed path" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Inverness)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-inverness" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Best in Inverness? NHS Highland 12 week programs are often a strong free start, with Counterweight style support for diabetes needs. Private clinics can offer Mounjaro and Wegovy for eligible people, often framed around BMI 30 plus. 5 kg can be a 5 to 7 week goal for many people. A 15% body weight target can take 6 to 12 months with GLP 1 plus habits.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Inverness&apos;s riverbanks and mountain air inspire health shifts. But haggis suppers and long winters test resolve. Here is how postcode can shape smart access.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="context" heading="Inverness weight loss: local context first">
                <p className={`text-lg md:text-xl ${p}`}>
                  Highland obesity is often discussed around the low 30% range in public dashboards. Rural driving can limit activity and clinic travel can be a barrier. Self referral routes can help some people start without waiting for a GP appointment.
                </p>

                <p className={p}>
                  NHS Highland serves a large area across difficult terrain. Inverness has better access than many remote communities. Private can bridge gaps for some people with the caveat that monitoring still matters. Local edge: Ness Islands walks can burn about 280 calories per hour depending on pace and body size.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nhs" heading="NHS Highland pathways: the smart start">
                <p className={`text-lg md:text-xl ${p}`}>
                  NHS route? Some services allow self referral to dietetic support. Counterweight style programmes can run around 12 weeks and aim for 5 to 10% loss with structured coaching.
                </p>

                <p className={p}>
                  Tier 3 options usually involve GP referral for specialist multidisciplinary teams and may include medicines or bariatric pathways for severe obesity, often BMI 40 plus. Waiting times can be 6 to 12 months and many pathways expect Tier 2 lifestyle support first.
                </p>

                <p className={p}>
                  Critique: it can feel slow and it is often safer. It builds habits that fads skip.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="private" heading="Private clinic reality in Inverness">
                <p className={`text-lg md:text-xl ${p}`}>
                  Private GLP 1 options can be available via doctor led clinics with blood tests and nutrition support. Monthly costs can range about £180 to £350. It can be faster than NHS access and still needs monitoring.
                </p>

                <p className={p}>
                  Titration matters. Smaller starting doses and gradual increases can reduce nausea for many people.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="glp1" heading="GLP 1 deep dive for Inverness life">
                <p className={`text-lg md:text-xl ${p}`}>
                  Wegovy is a weekly pen and many trial summaries cite around 12 to 15% average loss. Mounjaro is dual hormone with some studies citing 18 to 22% potential in selected settings. Pair with a 500 calorie deficit and Highland walks.
                </p>

                <p className={p}>
                  Side effects can include gastrointestinal symptoms and occasional gallbladder issues. Protein forward meals can help preserve muscle. If you want to price check options, see{" "}
                  <Link className={linkCls} href="/mounjaro-price-comparison">
                    Mounjaro price comparison
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/wegovy-price-comparison">
                    Wegovy price comparison
                  </Link>
                  .
                </p>

                <p className={`text-sm ${muted}`}>
                  DOI{" "}
                  <a
                    href="https://doi.org/10.1016/S0140-6736(24)00890-2"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1016/S0140-6736(24)00890-2
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="timelines" heading="Practical timelines: from 5kg to transformation">
                <p className={`text-lg md:text-xl ${p}`}>
                  5 kg safe plan: a 400 to 500 calorie cut plus daily walks can support about 1 kg per week for some people early on. 20 kg in 6 months can be feasible for selected eligible people using GLP 1 plus strength training.
                </p>

                <p className={p}>
                  Crash diets fail. Public summaries often cite high regain rates. A safer pace is 0.5 to 1 kg per week.
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

              <GuideSection darkMode={darkMode} id="checklists" heading="Safety checklists for Highland residents">
                <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                  <p className={`text-base font-semibold ${strong}`}>Private clinic must haves</p>
                  <ul className={`mt-3 list-disc space-y-2 pl-6 ${p}`}>
                    <li>Named prescriber and clear regulation</li>
                    <li>GPhC registered pharmacy</li>
                    <li>Written titration and side effect plan</li>
                    <li>Baseline blood tests plan</li>
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
              </GuideSection>

              <GuideSection darkMode={darkMode} id="boosters" heading="Inverness specific boosters">
                <p className={p}>
                  Ness Islands circuits and farmers markets can make protein and vegetables easier. Indoor rowing can be a winter friendly option.
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

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Inverness informed path">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Inverness? NHS Highland foundations plus targeted private support if eligible, with Ness powered movement and repeatable food habits. Start smart, stay local, and keep monitoring in the loop.
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
                      NHS healthy weight overview
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

              <GuideSection
                darkMode={darkMode}
                id="next-steps"
                heading="Practical next steps (UK wide, including Inverness)"
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
