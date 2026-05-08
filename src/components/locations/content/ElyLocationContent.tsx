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
  "Best Weight Loss Treatment Ely: Cambridgeshire's Complete Weight Loss Roadmap";

export default function ElyLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "reality", label: "Ely weight loss reality check" },
      { id: "nhs", label: "NHS Cambridgeshire programs: start here" },
      { id: "private", label: "Private medicines access: Wegovy and Mounjaro reality" },
      { id: "global", label: "Global methods: Chinese fast loss examined" },
      { id: "timelines", label: "Practical timelines and local plans" },
      { id: "safety", label: "Safety checklists for Ely residents" },
      { id: "resources", label: "Ely Cambridgeshire resources" },
      { id: "conclusion", label: "Conclusion: Ely evidence path forward" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Ely)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-ely" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Most successful? Healthy You 12 week program (5 to 10% loss, psychology led). Top drug? Tirzepatide, Mounjaro (20% loss trials). Kelly Clarkson? GLP 1 plus lifestyle. Chinese fast loss? Green tea plus calorie cycling, not magic.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Ely&apos;s cathedral towers and fenland flats inspire health goals. Yet pub roasts and sedentary cycles challenge. Here&apos;s your local, evidence based path forward.
                </p>

                <p className={p}>
                  Start by comparing options on{" "}
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

              <GuideSection darkMode={darkMode} id="reality" heading="Ely weight loss reality check">
                <p className={`text-lg md:text-xl ${p}`}>
                  Ely obesity? 28% adults (Cambridgeshire average, PHE 2025). NHS first stop: Healthy You self referral, BMI 25 plus. Tier 3 Addenbrooke&apos;s for complex cases.
                </p>

                <p className={p}>
                  Cambridgeshire overweight hits 60% plus, Public Health England, 2025. Ely&apos;s rural flat terrain limits natural movement; cathedral climbs help but do not suffice. Nuance: NHS Tier 2, Healthy You, can beat solo apps, and psychology support can improve retention, aligned with NICE NG246. Could private speed it? Maybe, after basics.
                </p>

                <p className={p}>
                  Local hack: River Ouse walks burn about 280 calories per hour, free and accessible.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nhs" heading="NHS Cambridgeshire programs: start here">
                <p className={`text-lg md:text-xl ${p}`}>
                  Healthy You? Free 12 weeks: behaviour coaching, food swaps, activity. Self refer anytime. Counterweight Plus? Type 2 diabetes remission via total diet replacement (800 calorie shakes).
                </p>

                <p className={p}>
                  Healthy You Adult Weight Management is often described as council funded, 12 weeks, psychology led. Self referral (BMI 25 plus) or GP referral focuses sustainable habits over scales. Some local summaries cite around 7% average loss and ongoing maintenance for many people.
                </p>

                <p className={p}>
                  Tier 3 Specialist Service at Addenbrooke&apos;s in Cambridge can support complex cases, typically higher BMI thresholds with risk factors. Waiting times can be 6 to 12 months. GLP 1 access is often routed through specialist pathways.
                </p>

                <p className={p}>
                  Counterweight Plus uses total diet replacement (soups and shakes) under supervision. Some reports cite meaningful remission rates at 12 months in supported programs.
                </p>

                <p className={`text-sm ${muted}`}>
                  DOI{" "}
                  <a
                    href="https://doi.org/10.1016/S2213-8587(24)00123-4"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1016/S2213-8587(24)00123-4
                  </a>
                  .
                </p>

                <p className={p}>
                  Critique: waits can frustrate, but foundations prevent yo yo cycles.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="private" heading="Private medicines access: Wegovy and Mounjaro reality">
                <p className={`text-lg md:text-xl ${p}`}>
                  Wegovy NHS? Often Tier 3 only in Cambridgeshire pathways. Private? GPhC clinics, £200 plus per month. Mounjaro is similar, with 20% loss potential and titration essential.
                </p>

                <p className={p}>
                  Wegovy (semaglutide) is a weekly pen and trials often describe about 15% loss. Mounjaro (tirzepatide) is dual hormone and some trials report around 20% average loss. Ely private options often mean online GPhC registered services delivering refrigerated pens, and you should check cold chain handling.
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
                  Most successful drug? Tirzepatide leads many trial summaries, but lifestyle amplifies. Kelly Clarkson interviews often describe GLP 1 class medicines plus workouts. UK mimic needs GP oversight.
                </p>

                <p className={p}>
                  Warning: nausea is common and titration should be slow. If you have a pancreatitis history, avoid unless a clinician advises otherwise.
                </p>

                <p className={p}>
                  If cost matters, check{" "}
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

              <GuideSection darkMode={darkMode} id="global" heading="Global methods: Chinese fast loss examined">
                <p className={`text-lg md:text-xl ${p}`}>
                  Chinese way? Green tea catechins plus calorie cycling plus konjac root, not fast. Safe pace is about 0.5 kg per week. Evidence is mixed and cultural, not superior.
                </p>

                <p className={p}>
                  Traditional approaches include green tea, konjac glucomannan fibre, and cycling carbohydrates. Some summaries cite improved fat oxidation in specific contexts, but there is no magic versus a calorie deficit.
                </p>

                <p className={p}>
                  Ely adaptation: swap sugary tea for green tea and add more vegetables from local shops for a sustainable blend.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="timelines" heading="Practical timelines and local plans">
                <p className={`text-lg md:text-xl ${p}`}>
                  5 kg? About 6 weeks using Healthy You plus Ouse walks. 20 kg in 6 months? Medicines plus strength training may make it feasible for people who are Tier 3 eligible.
                </p>

                <p className={p}>
                  Week 1 to 4: Healthy You signup, 500 calorie cut, and cathedral circuits that can burn around 300 calories per hour depending on pace.
                </p>

                <p className={p}>
                  Month 3 to 6: 8 to 10% loss can be possible with consistency.
                </p>

                <p className={p}>
                  Plateaus happen. Some people use planned higher intake days. Obesity Reviews discusses plateau patterns and adherence.
                </p>

                <p className={`text-sm ${muted}`}>
                  DOI{" "}
                  <a
                    href="https://doi.org/10.1111/obr.13988"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1111/obr.13988
                  </a>
                  .
                </p>

                <p className={p}>
                  HIIT is useful for some people. Rainy fens? Use indoor bodyweight circuits.
                </p>

                <p className={p}>
                  If progress stalls, see our{" "}
                  <Link className={linkCls} href="/weight-loss-plateau">
                    weight loss plateau guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="safety" heading="Safety checklists for Ely residents">
                <p className={`text-lg md:text-xl ${p}`}>Private clinic?</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>GPhC registration you can verify</li>
                  <li>Written titration and side effect plan</li>
                  <li>Repeat blood tests policy</li>
                </ul>

                <p className={`text-lg md:text-xl ${p}`}>NHS route?</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>
                    Use the{" "}
                    <Link className={linkCls} href="/bmi-calculator">
                      BMI calculator
                    </Link>{" "}
                    to prepare, including ethnicity adjustments where relevant
                  </li>
                  <li>Lifestyle proof is often expected, around 3 months minimum</li>
                  <li>Pregnancy plans mean you should pause medicines, follow MHRA guidance</li>
                </ul>

                <p className={p}>
                  You can verify pharmacy registration at{" "}
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

              <GuideSection darkMode={darkMode} id="resources" heading="Ely Cambridgeshire resources">
                <p className={p}>
                  Nene Park trails and farmers markets can support consistency. Groups via Healthy You can improve adherence in many programs.
                </p>

                <p className={p}>
                  For comparing providers, read{" "}
                  <Link className={linkCls} href="/methodology">
                    our methodology
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/editorial-policy">
                    editorial policy
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Ely evidence path forward">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Ely? Healthy You foundations plus strategic medicines, local, monitored, proven. From cathedral climbs to smart GLP 1, Cambridgeshire access can work. Start small, stay consistent, your fenland fitter awaits.
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

              <GuideSection darkMode={darkMode} id="next-steps" heading="Practical next steps (UK wide, including Ely)">
                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>
                    Compare providers on safety checks and follow up using{" "}
                    <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                      our UK comparison page
                    </Link>
                    .
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
                  <li>
                    Build a simple baseline routine in Ely, such as River Ouse walks plus two strength sessions weekly.
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
