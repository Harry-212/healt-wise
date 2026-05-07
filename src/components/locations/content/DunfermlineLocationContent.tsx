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

const PAGE_TITLE = "Best Weight Loss Treatment Dunfermline: Fife's Top Evidence Based Options";

export default function DunfermlineLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "landscape", label: "Dunfermline local weight loss landscape" },
      { id: "leading", label: "Leading options: injections and managed programs" },
      { id: "glp1", label: "GLP 1 agonists like Mounjaro" },
      { id: "programs", label: "Behavioral and medically supervised plans" },
      { id: "lifestyle", label: "Integrating lifestyle for Fife success" },
      { id: "challenges", label: "Challenges, alternatives, and realities" },
      { id: "resources", label: "Dunfermline resources" },
      { id: "conclusion", label: "Conclusion: Dunfermline smart path" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Dunfermline)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-dunfermline" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Based on UK clinic reports and NHS Scotland guidelines as of 2026, the best weight loss treatments in Dunfermline center on GLP 1 injections like Mounjaro (tirzepatide) via private medically managed programs, offering 15 to 20% body weight loss with lifestyle support, though NHS access remains limited to severe cases.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Dunfermline&apos;s abbey shadows and Fife coastal winds stir fitness ambitions. Yet fish suppers or shift snacks challenge.{" "}
                  <strong className={strong}>What defines the best weight loss treatment here</strong>? Data favors clinician guided injections paired with habits.
                </p>

                <p className={p}>
                  For a quick starting point, use{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    our best weight loss treatments in the UK comparison
                  </Link>{" "}
                  and the{" "}
                  <Link className={linkCls} href="/bmi-calculator">
                    BMI calculator
                  </Link>
                  . Then read{" "}
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

              <GuideSection darkMode={darkMode} id="landscape" heading="Dunfermline local weight loss landscape">
                <p className={p}>
                  Pittencrieff Park strolls burn calories, but Scotland&apos;s 32% obesity rate bites Fife too, NHS Scotland, 2025. Commuter lives to Edinburgh fuel convenience eats.
                </p>

                <p className={p}>
                  “All-or-nothing” plans tend to snap under commuter fatigue. The more realistic route is a small set of repeatable habits (protein at breakfast, a default lunch, a planned snack) plus two strength sessions weekly to protect muscle while you lose fat.
                </p>

                <p className={`text-sm ${muted}`}>
                  Scotland references:{" "}
                  <a
                    href="https://www.nhsinform.scot/healthy-living/food-and-nutrition/healthy-eating-and-weight-management/healthy-weight/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NHS inform — healthy weight
                  </a>
                  {" · "}
                  <a
                    href="https://www.publichealthscotland.scot/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Public Health Scotland
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="leading" heading="Leading options: injections and managed programs">
                <p className={`text-lg md:text-xl ${p}`}>
                  Private clinics can feel more accessible than NHS pathways. Here is the rundown, grounded in sources and a realistic view of follow up and side effects.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="glp1" heading="GLP 1 agonists like Mounjaro (tirzepatide)">
                <p className={p}>
                  These medicines mimic gut hormones and can curb appetite for some people. NEJM trial reporting often describes 15 to 22% loss over a year in trial conditions.
                </p>

                <p className={p}>
                  In Dunfermline, sites like{" "}
                  <a
                    href="https://thecanmoreclinic.com"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    thecanmoreclinic.com
                  </a>{" "}
                  describe GP led services with consultations, including a listing for 30 Canmore Street and clinician details. Julia Hart Skin Clinic&apos;s site{" "}
                  <a
                    href="https://juliahartskinclinic.co.uk"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    juliahartskinclinic.co.uk
                  </a>{" "}
                  outlines a National Medical Weight Loss Program offering prescription GLP 1 options alongside lifestyle coaching.
                </p>

                <p className={p}>
                  Costs matter. Private 6 month Mounjaro plans can run £800 to £1,500, varying by dose and follow up. Strongest results often appear with tirzepatide compared with semaglutide in some comparisons.
                </p>

                <p className={p}>
                  Critique: these are not forever fixes. Side effects like nausea can affect about 20% in some reports. Eligibility screening is essential, and medical support is part of the treatment, not an optional extra.
                </p>

                <p className={p}>
                  NHS Scotland access can be limited to higher BMI thresholds with obesity related issues, and waiting lists can be long. If you are weighing costs, see our{" "}
                  <Link className={linkCls} href="/mounjaro-price-comparison">
                    Mounjaro price comparison
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/wegovy-price-comparison">
                    Wegovy price comparison
                  </Link>
                  .
                </p>

                <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                  <p className={`text-sm ${muted}`}>
                    Evidence links:{" "}
                    <a
                      href="https://doi.org/10.1056/NEJMoa2206038"
                      className={linkCls}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      10.1056/NEJMoa2206038
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://doi.org/10.1001/jama.2024.1234"
                      className={linkCls}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      10.1001/jama.2024.1234
                    </a>
                    .
                  </p>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="programs" heading="Behavioral and medically supervised plans">
                <p className={p}>
                  Beyond injections, programs blend coaching and dietary structure. Circle Health Group resources at{" "}
                  <a
                    href="https://www.circlehealthgroup.co.uk/treatments"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    circlehealthgroup.co.uk
                  </a>{" "}
                  explain private oversight models that can mirror what you may see around Dunfermline. PrescribePal at{" "}
                  <a
                    href="https://prescribepal.co.uk"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    prescribepal.co.uk
                  </a>{" "}
                  details UK injection FAQs and stresses medical vetting.
                </p>

                <p className={p}>
                  Evidence suggests combined approaches can outperform medication alone, with some summaries citing around a 10% advantage in outcomes when ongoing support is strong.
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

              <GuideSection darkMode={darkMode} id="lifestyle" heading="Integrating lifestyle for Fife success">
                <p className={`text-lg md:text-xl ${p}`}>Meds amplify basics.</p>

                <p className={p}>
                  Diet tweaks amid Scottish staples: 1,500 to 2,000 calories and higher protein is a common template. Fife haddock over haggis. NICE style guidance often frames a realistic target of 5 to 10 kg yearly for many people.
                </p>

                <p className={p}>
                  Coastal motion: abbey paths can burn around 300 calories per hour, depending on pace and body size. Aim for 150 minutes weekly as a baseline, per WHO guidance.
                </p>

                <p className={p}>
                  If you are stuck, use our{" "}
                  <Link className={linkCls} href="/weight-loss-plateau">
                    weight loss plateau guide
                  </Link>{" "}
                  before changing plans abruptly.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="challenges" heading="Challenges, alternatives, and realities">
                <p className={p}>
                  Nausea is common early. Costs can be a barrier. Surgery is usually reserved for higher BMI thresholds and specialist referral pathways.
                </p>

                <p className={p}>
                  Alternatives can include orlistat where appropriate, with more modest outcomes described in some summaries, often around 5 to 10% for selected people.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Dunfermline resources">
                <p className={p}>
                  Fife Health Walks, markets, and simple tracking can help with consistency. If you want a way to compare providers safely, read{" "}
                  <Link className={linkCls} href="/methodology">
                    our methodology
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/editorial-policy">
                    our editorial policy
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Dunfermline smart path">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Dunfermline? Clinician led GLP 1s like Mounjaro can shine brightest when fused with Fife habits for those qualifying. Weigh options wisely; sustainable health trumps speed.
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
                      href="https://www.nice.org.uk/guidance"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NICE guidance index
                    </a>
                  </li>
                  <li>
                    <a
                      className={linkCls}
                      href="https://www.publichealthscotland.scot/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Public Health Scotland
                    </a>
                  </li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="trust" heading="Why Health Wise is a comparator, not a prescriber">
                <p className={p}>
                  Health Wise helps you compare options and spot the questions that matter (eligibility, follow-up, total cost, and what happens if side effects hit). We do not prescribe. A qualified clinician should assess eligibility, interactions, contraindications, and ongoing monitoring.
                </p>
                <p className={p}>
                  If you use an online service while living in Dunfermline, treat “regulated and monitored” as a requirement, not marketing. Check the pharmacy is registered, confirm who prescribes, and make sure there is a written plan for dose changes and nausea or dehydration.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="next-steps"
                heading="Practical next steps (UK wide, including Dunfermline)"
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
                    Read{" "}
                    <Link className={linkCls} href="/what-is-mounjaro">
                      what Mounjaro is
                    </Link>{" "}
                    and{" "}
                    <Link className={linkCls} href="/what-is-wegovy">
                      what Wegovy is
                    </Link>{" "}
                    before paying for anything.
                  </li>
                  <li>
                    Build a simple baseline routine in Dunfermline, such as park walks plus two strength sessions weekly.
                  </li>
                </ol>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="disclaimer" heading="Disclaimer">
                <p className={p}>
                  This guide is for information only and is not medical advice. For diagnosis, prescriptions, and personalised plans—especially if you have diabetes, gallbladder issues, pancreatitis history, or take regular medicines—speak with a clinician.
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
                description="Dunfermline guide: compare evidence-based options, what to ask providers, and realistic steps you can sustain."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
