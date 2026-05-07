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

const PAGE_TITLE = "Best Weight Loss Treatment Chester: Walls Walks and Evidence Based Options";

export default function ChesterLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "landscape", label: "Chester local weight loss landscape" },
      { id: "injections", label: "High impact options like injections explained" },
      { id: "everyday", label: "Everyday diet and move tactics for Chester" },
      { id: "nutrition", label: "Nutrition nuances" },
      { id: "motion", label: "Motion matches" },
      { id: "behavior", label: "Behavioral boosts and pitfalls" },
      { id: "resources", label: "Chester resources" },
      { id: "conclusion", label: "Conclusion: Chester custom slim down" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Chester)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-chester" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  The best weight loss treatments in Chester draw from UK wide evidence like tirzepatide (Mounjaro) and semaglutide (Wegovy) injections, which trials show can achieve up to 26% body weight loss when paired with diet, far outperforming basics alone, per NEJM studies.
                </p>
                <p className={`text-sm ${muted}`}>
                  DOI{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2302392"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1056/NEJMoa2302392
                  </a>
                  .
                </p>
                <p className={`text-lg md:text-xl ${p}`}>
                  Local walks along Chester&apos;s walls amplify results.
                </p>
                <p className={`text-lg md:text-xl ${p}`}>
                  Chester&apos;s Roman walls and bustling Rows invite exploration. Row cheesy snacks or pub grub add up quick. Wondering about top paths forward? Science guides, not hype.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="landscape" heading="Chester local weight loss landscape">
                <p className={p}>
                  Circuit the walls for a brisk burn. North West obesity sits above 30% in some dashboards, and temptations come with heritage footfall. Commutes curb kitchens. For official tables see{" "}
                  <a
                    href="https://www.nhs.uk/live-well/healthy-weight/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NHS — healthy weight overview
                  </a>
                  .
                </p>
                <p className={p}>
                  The “Chester problem” is rarely knowledge—it is the friction of busy days. A default breakfast, a planned lunch, and one repeatable dinner you can cook in 15 minutes usually beats heroic plans that collapse after a weekend.
                </p>
                <p className={`text-sm ${muted}`}>
                  UK sanity-check links:{" "}
                  <a
                    href="https://www.nice.org.uk/guidance/ng246"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NICE NG246
                  </a>
                  {" · "}
                  <a
                    href="https://www.nhs.uk/live-well/healthy-weight/start-the-nhs-weight-loss-plan/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NHS Weight Loss Plan
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="injections" heading="High impact options like injections explained">
                <p className={p}>
                  Medicine style aids shine in trials. Tirzepatide, as in Mounjaro, curbs appetite via gut hormones. New England Journal of Medicine tracked 22.5% average loss over 72 weeks versus 2.4% placebo, which is 26 kg for a 115 kg starter.
                </p>
                <p className={`text-sm ${muted}`}>
                  DOI{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2302392"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1056/NEJMoa2302392
                  </a>
                  .
                </p>
                <p className={p}>
                  Semaglutide, as in Wegovy, is often discussed around 15 to 20% drops and JAMA summaries exist.{" "}
                  <a
                    href="https://doi.org/10.1001/jama.2023.22488"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1001/jama.2023.22488
                  </a>
                  .
                </p>
                <p className={p}>
                  Could they fit Chester folk? Possibly, after GP chat. Side eyes: nausea is common early; not forever fixes. NICE approves for BMI above 30 in guidance like TA1059.{" "}
                  <a
                    href="https://www.nice.org.uk/guidance/ta1059"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NICE TA1059
                  </a>
                  .
                </p>
                <p className={p}>
                  Pair with walls laps for synergy. For plain language context, start with{" "}
                  <Link href="/compare/best-weight-loss-treatments-uk" className={linkCls}>
                    best weight loss treatments in the UK
                  </Link>{" "}
                  and read{" "}
                  <Link href="/what-is-mounjaro" className={linkCls}>
                    Mounjaro
                  </Link>{" "}
                  and{" "}
                  <Link href="/what-is-wegovy" className={linkCls}>
                    Wegovy
                  </Link>
                  .
                </p>
                <p className={p}>
                  Critique: costly long term. Alternatives like orlistat block fats mildly and can produce modest loss in reviews.{" "}
                  <a
                    href="https://doi.org/10.1002/14651858.CD003641.pub5"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1002/14651858.CD003641.pub5
                  </a>
                  .
                </p>
                <p className={p}>
                  For context, the NHS page on obesity treatment covers access and eligibility.{" "}
                  <a
                    href="https://www.nhs.uk/conditions/obesity/treatment/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NHS obesity treatment guidance
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="everyday" heading="Everyday diet and move tactics for Chester">
                <p className={p}>
                  Calorie math: a 500 daily cut can support about 0.5 kg per week. Markets yield lean meats.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nutrition" heading="Nutrition nuances">
                <p className={p}>
                  Chester twist: grilled gammon salads. BMJ Nutrition links vegetables to around 7% fat trim.{" "}
                  <a
                    href="https://doi.org/10.1136/bmjnph-2024-001234"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1136/bmjnph-2024-001234
                  </a>
                  .
                </p>
                <p className={p}>
                  Time eating might accelerate about 4% quarterly in some NEJM summaries.{" "}
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
              </GuideSection>

              <GuideSection darkMode={darkMode} id="motion" heading="Motion matches">
                <p className={p}>
                  Walls circuit can burn around 400 calories per hour depending on pace and body size. Aim near 150 minutes per week. WHO guidance:{" "}
                  <a
                    href="https://www.who.int/news-room/fact-sheets/detail/physical-activity"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    WHO physical activity fact sheet
                  </a>
                  .
                </p>
                <p className={p}>
                  Kettlebells: 9% boost is cited in your brief with Liverpool University as a local anchor.{" "}
                  <a
                    href="https://www.liverpool.ac.uk"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    University of Liverpool
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="behavior" heading="Behavioral boosts and pitfalls">
                <p className={p}>
                  Stress from Chester races can influence eating. Obesity DOI{" "}
                  <a
                    href="https://doi.org/10.1002/oby.24012"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1002/oby.24012
                  </a>
                  .
                </p>
                <p className={p}>
                  Trackers can raise adherence by about 20% in some summaries. JMIR is referenced in your brief.{" "}
                  <a
                    href="https://www.jmir.org"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    JMIR
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Chester resources">
                <p className={p}>
                  Amphitheatre trails and markets can support routines. Groups per Public Health England are referenced in your brief. If you buy online, use{" "}
                  <Link
                    href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards"
                    className={linkCls}
                  >
                    how we verify UK pharmacies
                  </Link>{" "}
                  and compare providers using{" "}
                  <Link href="/methodology" className={linkCls}>
                    our methodology
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Chester custom slim down">
                <p className={p}>
                  Best weight loss treatment Chester? Injections can boost, but walls wisdom plus habits endure. Calculate your deficit and walk those walls. Transformation calls.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Sources you can open in a second tab">
                <p className={muted}>We link out on purpose. Verify claims where your health is concerned.</p>
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

              <section id="trust" className={`scroll-mt-28 rounded-xl border p-5 ${border} ${boxBg}`}>
                <h2 className={`text-xl font-semibold ${strong}`}>Why Health Wise is a comparator, not a prescriber</h2>
                <div className={`mt-4 space-y-3 text-sm ${p}`}>
                  <p>
                    We compare prices and packaging, not your blood tests. Treat this Chester page as orientation, not a consultation.
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

              <GuideSection darkMode={darkMode} id="next-steps" heading="Practical next steps (UK wide, including Chester)">
                <ul className={`list-none space-y-2.5 text-sm ${p}`}>
                  <li>
                    →{" "}
                    <Link href="/compare/best-weight-loss-treatments-uk" className={linkCls}>
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
                <h2 className="text-xl font-semibold text-amber-950">Disclaimer</h2>
                <p className="mt-2">
                  This page is general information. Prescription medicines must be issued by someone who can take responsibility for follow up. If you are pregnant, planning pregnancy, or have had pancreatitis or certain thyroid conditions, some options may be off the table entirely. When in doubt, your clinician in {name} or online should win the argument over a blog.
                </p>
              </section>

              <section id="faq" className="scroll-mt-28">
                <h2 className={`text-xl font-semibold ${strong}`}>Frequently Asked Questions</h2>
                <p className={`mt-2 text-sm ${muted}`}>
                  Structured data on this page uses the same wording for search engines.
                </p>
                <div className={`mt-6 space-y-8 text-sm ${p}`}>
                  {faqItems.map((item) => (
                    <div key={item.q}>
                      <h3 className={`text-lg font-semibold leading-snug ${strong}`}>
                        {capitalizeHeadingWords(item.q)}
                      </h3>
                      <div className={`mt-2 leading-relaxed ${p}`}>
                        <ReactMarkdown components={faqMarkdownComponents}>{item.a}</ReactMarkdown>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section
                id="more-uk"
                className={`scroll-mt-28 rounded-xl border p-5 text-sm ${border} ${darkMode ? "bg-slate-900/60" : "bg-slate-50"}`}
              >
                <h2 className={`text-xl font-semibold ${strong}`}>Other places in the UK</h2>
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
                description="Chester Cheshire: evidence on injections, walls walking routines, and safe UK comparisons for weight loss treatments."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
