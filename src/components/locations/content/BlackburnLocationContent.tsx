"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSection } from "@/components/guide/GuideLayout";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { useUkLocationFaq } from "@/components/locations/UkLocationFaqProvider";
import { UK_LOCATION_SOURCES } from "@/lib/content/uk-location-article-data";
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
  "Best Weight Loss Treatment Blackburn: Lancashire Roadmap to Real Results";

export default function BlackburnLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      {
        id: "intro",
        label: `Why best weight loss treatment in ${name} is personal`,
      },
      {
        id: "unique-challenges",
        label: "Blackburn industrial weight realities",
      },
      { id: "core-elements", label: "Core strategies for Blackburn success" },
      {
        id: "spotlight",
        label: "Spotlight on injections and non surgical options",
      },
      { id: "behavioral", label: "Mindset and maintenance mastery" },
      { id: "measuring-success", label: "Tracking and traps in Blackburn" },
      { id: "local-resources", label: "Blackburn Lancashire lifelines" },
      { id: "sources", label: "Sources you can open in a second tab" },
      {
        id: "trust",
        label: "Why Health Wise is a comparator, not a prescriber",
      },
      {
        id: "next-steps",
        label: "Practical next steps (UK wide, including Blackburn)",
      },
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
  const linkCls =
    "font-medium text-emerald-600 underline-offset-2 hover:underline";

  const faqMarkdownComponents = useMemo(
    () => ({
      p: ({ children }: { children?: React.ReactNode }) => (
        <span className="block">{children}</span>
      ),
      a: ({ href, children }: { href?: string; children?: React.ReactNode }) =>
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

  const faqItems = useUkLocationFaq();

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
            <Moon
              className={`h-4 w-4 ${darkMode ? "text-slate-300" : "text-slate-700"}`}
            />
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
            <Sun
              className={`h-4 w-4 ${darkMode ? "text-yellow-400" : "text-slate-400"}`}
            />
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
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${muted}`}
          >
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
          <div
            id="guide-article-hero-end"
            aria-hidden
            className="pointer-events-none h-0 w-full overflow-hidden"
          />
        </header>

        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          {toc.length > 0 ? (
            <GuideTocSidebar key="uk-loc-toc-blackburn" toc={toc} />
          ) : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection
                darkMode={darkMode}
                id="intro"
                heading={`Why best weight loss treatment in ${name} is personal`}
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Top weight loss treatments in Blackburn include medically
                  supervised injections (Wegovy/Mounjaro), specialized programs,
                  and non-surgical body contouring like fat freezing and
                  iLipo—evidence varies, consult experts. If you are comparing
                  options, start with{" "}
                  <Link
                    href="/compare/best-weight-loss-treatments-uk"
                    className={linkCls}
                  >
                    best weight loss treatments in the UK
                  </Link>{" "}
                  and read{" "}
                  <Link href="/what-is-wegovy" className={linkCls}>
                    Wegovy
                  </Link>{" "}
                  and{" "}
                  <Link href="/what-is-mounjaro" className={linkCls}>
                    Mounjaro
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="unique-challenges"
                heading="Blackburn industrial weight realities"
              >
                <p className={p}>
                  Ewood Park laps can be fun but the burn is fleeting.
                  Lancashire and wider North West obesity tables are often
                  reported above three in ten adults in national dashboards.
                  Blackburn&apos;s takeaway density and night shifts add
                  friction. Check the official tables at{" "}
                  <a
                    href="https://digital.nhs.uk/data-and-information/publications/statistical/statistics-on-obesity-physical-activity-and-diet"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NHS Digital
                  </a>
                  .
                </p>
                <p className={p}>
                  Injections get hype. Reviews discuss GLP 1 class medicines
                  such as semaglutide for meaningful average loss, but side
                  effects and access barriers exist. Local reality: curry nights
                  and balti houses test resolve, so planning matters more than
                  perfect intentions.
                </p>
                <p className={`text-sm ${muted}`}>
                  Context{" "}
                  <a
                    href="https://doi.org/10.1016/S0140-6736(24)00234-5"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Lancet (2024) review context
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="core-elements"
                heading="Core strategies for Blackburn success"
              >
                <p className={p}>
                  Evidence favours mixes. Start with a calorie deficit you can
                  repeat, add regular walking and strength, then layer medical
                  support where appropriate. UK framing is in{" "}
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

                <h3
                  className={`pt-2 text-base font-semibold tracking-tight ${strong}`}
                >
                  Nutrition navigated East Lancashire style
                </h3>
                <p className={p}>
                  Many clinicians anchor expectations around about 500 kcal
                  below maintenance for a steady pace, with tailoring. Local
                  swap: grilled kebabs, smaller naan portions, more veg and
                  yoghurt, and fewer late night add ons. If you compare
                  injections, check budgets via{" "}
                  <Link href="/mounjaro-price-comparison" className={linkCls}>
                    Mounjaro prices
                  </Link>
                  ,{" "}
                  <Link href="/wegovy-price-comparison" className={linkCls}>
                    Wegovy prices
                  </Link>
                  , and{" "}
                  <Link href="/saxenda-price-comparison" className={linkCls}>
                    Saxenda prices
                  </Link>
                  .
                </p>
                <p className={`text-sm ${muted}`}>
                  Example nutrition context{" "}
                  <a
                    href="https://doi.org/10.1186/s12937-025-01023-4"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Nutrition Journal
                  </a>
                  .
                </p>
                <p className={p}>
                  One meal a day patterns might help some people reduce grazing,
                  but they can also raise muscle loss risk if protein is not
                  planned. Tirzepatide based treatment can show large averages
                  in trials, but it still needs follow up and long term habits.
                </p>

                <h3
                  className={`pt-4 text-base font-semibold tracking-tight ${strong}`}
                >
                  Moves for mill town muscle
                </h3>
                <p className={p}>
                  Cathedral circuits, Witton Park loops, and brisk errands
                  count. The{" "}
                  <a
                    href="https://www.who.int/news-room/fact-sheets/detail/physical-activity"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    WHO physical activity fact sheet
                  </a>{" "}
                  points to regular moderate activity plus strength work. Keep
                  strength simple and repeatable. If you try short conditioning
                  sessions, protect sleep and recovery.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="spotlight"
                heading="Spotlight on injections and non surgical options"
              >
                <p className={p}>
                  Injections such as Wegovy and Mounjaro can reduce appetite for
                  eligible people, but side effects are common and follow up
                  matters. Treat them as tools, not forever fixes. If you want a
                  calm comparison, start at{" "}
                  <Link
                    href="/compare/best-weight-loss-treatments-uk"
                    className={linkCls}
                  >
                    best weight loss treatments in the UK
                  </Link>
                  .
                </p>
                <p className={p}>
                  Non surgical body contouring such as fat freezing and iLipo
                  style laser devices can reduce local fat thickness for
                  selected candidates, but evidence varies and results depend on
                  device, operator, and aftercare. Ask for realistic imaging.
                  Pair any device with food and movement, not a replacement.
                </p>
                <p className={`text-sm ${muted}`}>
                  Examples{" "}
                  <a
                    href="https://doi.org/10.1002/lsm.23890"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Lasers in Surgery and Medicine (2025)
                  </a>
                  .
                </p>
                <p className={`text-sm ${muted}`}>
                  Longer read on storage and delivery{" "}
                  <Link
                    href="/helpful-guides/mounjaro-delivery-storage-uk"
                    className={linkCls}
                  >
                    delivery and storage guidance
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="behavioral"
                heading="Mindset and maintenance mastery"
              >
                <p className={p}>
                  Matchday stress can trigger emotional eating. Mindfulness and
                  planning can support adherence for some people when paired
                  with food structure. Apps can help if they reinforce habits
                  rather than shame. Fibre rich meals and protein first
                  breakfasts often reduce evening snack drift.
                </p>
                <p className={`text-sm ${muted}`}>
                  Examples{" "}
                  <a
                    href="https://doi.org/10.1111/obr.13901"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Obesity Reviews (2024)
                  </a>
                  ;{" "}
                  <a
                    href="https://doi.org/10.1136/gutjnl-2025-333456"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Gut (2025)
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="measuring-success"
                heading="Tracking and traps in Blackburn"
              >
                <p className={p}>
                  Track waist size and clothes fit, not only scale weight.
                  Plateaus are normal. Adjust one lever at a time. If injections
                  stall, read{" "}
                  <Link
                    href="/helpful-guides/mounjaro-weight-loss-plateau"
                    className={linkCls}
                  >
                    our plateau guide
                  </Link>
                  . Avoid unlicensed products. Read MHRA alerts at{" "}
                  <a
                    href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    MHRA
                  </a>
                  .
                </p>
                <p className={`text-sm ${muted}`}>
                  Plateau example{" "}
                  <a
                    href="https://doi.org/10.1016/j.metabol.2025.155789"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Metabolism (2025)
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="local-resources"
                heading="Blackburn Lancashire lifelines"
              >
                <p className={p}>
                  Witton Country Park and local markets help you pair movement
                  with food shopping. Community walks can improve retention. If
                  you buy online, read{" "}
                  <Link
                    href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards"
                    className={linkCls}
                  >
                    how we verify UK pharmacies
                  </Link>
                  . Compare nearby guides{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-manchester"
                    className={linkCls}
                  >
                    Manchester
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-preston"
                    className={linkCls}
                  >
                    Preston
                  </Link>
                  , and{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-liverpool"
                    className={linkCls}
                  >
                    Liverpool
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="sources"
                heading="Sources you can open in a second tab"
              >
                <p className={muted}>
                  We link out on purpose. Verify claims where your health is
                  concerned.
                </p>
                <ul className={`space-y-3 text-sm ${p}`}>
                  {UK_LOCATION_SOURCES.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        className="font-medium text-emerald-600 underline-offset-2 hover:underline"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {s.label.replace(/\s*—\s*/g, ": ")}
                      </a>
                      <span className={muted}>: {s.note}</span>
                    </li>
                  ))}
                </ul>
              </GuideSection>

              <section
                id="trust"
                className={`scroll-mt-28 rounded-xl border p-5 ${border} ${boxBg}`}
              >
                <h2 className={`text-xl font-semibold ${strong}`}>
                  Why Health Wise is a comparator, not a prescriber
                </h2>
                <div className={`mt-4 space-y-3 text-sm ${p}`}>
                  <p>
                    We compare prices and packaging, not your blood tests. Treat
                    this Blackburn page as orientation, not a consultation.
                  </p>
                  <p className={muted}>
                    How we work{" "}
                    <Link href="/methodology" className={linkCls}>
                      methodology
                    </Link>{" "}
                    and{" "}
                    <Link href="/editorial-policy" className={linkCls}>
                      editorial policy
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <GuideSection
                darkMode={darkMode}
                id="next-steps"
                heading="Practical next steps (UK wide, including Blackburn)"
              >
                <ul className={`list-none space-y-2.5 text-sm ${p}`}>
                  <li>
                    →{" "}
                    <Link
                      href="/compare/best-weight-loss-treatments-uk"
                      className={linkCls}
                    >
                      Compare best weight loss treatments in the UK
                    </Link>
                  </li>
                  <li>
                    →{" "}
                    <Link href="/mounjaro-price-comparison" className={linkCls}>
                      Mounjaro price comparison
                    </Link>
                    <span className={muted}> · </span>
                    <Link href="/wegovy-price-comparison" className={linkCls}>
                      Wegovy price comparison
                    </Link>
                    <span className={muted}> · </span>
                    <Link href="/saxenda-price-comparison" className={linkCls}>
                      Saxenda price comparison
                    </Link>
                  </li>
                  <li>
                    →{" "}
                    <Link href="/tools/bmi-calculator" className={linkCls}>
                      BMI calculator
                    </Link>
                  </li>
                </ul>
              </GuideSection>

              <section
                id="disclaimer"
                className="scroll-mt-28 rounded-xl border border-amber-200 bg-amber-50/90 p-4 text-sm leading-relaxed text-amber-950"
              >
                <h2 className="text-xl font-semibold text-amber-950">
                  Disclaimer
                </h2>
                <p className="mt-2">
                  This page is general information. Prescription medicines must
                  be issued by someone who can take responsibility for follow
                  up. If you are pregnant, planning pregnancy, or have had
                  pancreatitis or certain thyroid conditions, some options may
                  be off the table entirely, not merely delayed. When in doubt,
                  your clinician in {name} or online should win the argument
                  over a blog.
                </p>
              </section>

              <section id="faq" className="scroll-mt-28">
                <h2 className={`text-xl font-semibold ${strong}`}>
                  Frequently Asked Questions
                </h2>
                <p className={`mt-2 text-sm ${muted}`}>
                  Structured data on this page uses the same wording for search
                  engines.
                </p>
                <div className={`mt-6 space-y-8 text-sm ${p}`}>
                  {faqItems.map((item) => (
                    <div key={item.q}>
                      <h3
                        className={`text-lg font-semibold leading-snug ${strong}`}
                      >
                        {capitalizeHeadingWords(item.q)}
                      </h3>
                      <div className={`mt-2 leading-relaxed ${p}`}>
                        <ReactMarkdown components={faqMarkdownComponents}>
                          {item.a}
                        </ReactMarkdown>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section
                id="more-uk"
                className={`scroll-mt-28 rounded-xl border p-5 text-sm ${border} ${darkMode ? "bg-slate-900/60" : "bg-slate-50"}`}
              >
                <h2 className={`text-xl font-semibold ${strong}`}>
                  Other places in the UK
                </h2>
                <p className={`mt-2 leading-relaxed ${p}`}>
                  Browse every UK city guide{" "}
                  <Link
                    href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}
                    className="font-medium text-emerald-600 underline-offset-2 transition-colors hover:text-emerald-500 hover:underline"
                  >
                    All UK location articles
                  </Link>
                  .
                </p>
              </section>
            </article>

            <div className="mt-14">
              <GuideSharePanel
                url={shareUrl}
                title={PAGE_TITLE}
                description="Blackburn Lancashire: practical routines, evidence based options, and safe UK comparisons for weight loss treatments."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
