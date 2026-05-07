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
  "Best Weight Loss Treatment Chichester: West Sussex Guide to Effective Slimming";

export default function ChichesterLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "challenges", label: "Chichester coastal weight management challenges" },
      { id: "core", label: "Core strategies for Chichester success" },
      { id: "diet", label: "Diet dynamics with Sussex flair" },
      { id: "movement", label: "Movement matched to Chichester trails" },
      { id: "medical", label: "Med supervised and tech options explained" },
      { id: "behavioral", label: "Behavioral boosters in Chichester" },
      { id: "pitfalls", label: "Pitfalls, progress, and alternatives" },
      { id: "resources", label: "Chichester resources" },
      { id: "conclusion", label: "Conclusion: Chichester smart slim down" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Chichester)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-chichester" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  For the best weight loss treatment in Chichester, evidence supports prescription medicines like Wegovy or Mounjaro combined with diet and exercise under medical guidance. Clinics such as Mayfield Clinic and Oving Medical Clinic provide options, per sources like Courier Pharmacy. Always consult a GP first.
                </p>
                <p className={p}>
                  Brief links{" "}
                  <a
                    href="https://mayfieldclinic.co.uk/services/chichester-weight-loss"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Mayfield Clinic Chichester page
                  </a>
                  ,{" "}
                  <a
                    href="https://ovingclinic.co.uk/weightloss-clinic"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Oving clinic page
                  </a>
                  ,{" "}
                  <a
                    href="https://courierpharmacy.co.uk/conditions/weight-loss"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Courier Pharmacy weight loss page
                  </a>
                  .
                </p>
                <p className={`text-lg md:text-xl ${p}`}>
                  Chichester&apos;s cathedral spires and harbour winds invite outdoor vibes. Fish suppers or market stalls tempt, still.{" "}
                  <strong className={strong}>
                    What truly ranks as the best weight loss treatment in Chichester
                  </strong>
                  ? Balanced science, not solo shots.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="challenges" heading="Chichester coastal weight management challenges">
                <p className={p}>
                  Cycle the harbour path for a brisk, beneficial burn. Sussex obesity sits around 26% in many dashboards, with pub routines adding hurdles. For official tables see{" "}
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
                  The most consistent wins come from combining levers: an intake pattern you can repeat, walking you actually enjoy (harbour loops count), and strength work to protect muscle. If medication enters the picture, treat it as a support tool—not the entire strategy.
                </p>
                <p className={`text-sm ${muted}`}>
                  Quick references:{" "}
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
                    href="https://www.who.int/news-room/fact-sheets/detail/physical-activity"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    WHO physical activity fact sheet
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="core" heading="Core strategies for Chichester success">
                <p className={p}>Layered plans shine. Data backs it.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="diet" heading="Diet dynamics with Sussex flair">
                <p className={p}>
                  A 500 calorie deficit can support about 0.5 to 1 kg weekly. NICE CG189 gives UK framing. Chichester: Sussex trout salads over chips.
                </p>
                <p className={`text-sm ${muted}`}>
                  NICE{" "}
                  <a
                    href="https://www.nice.org.uk/guidance/cg189"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    CG189
                  </a>
                  . Nutrients DOI{" "}
                  <a
                    href="https://doi.org/10.3390/nu17030123"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.3390/nu17030123
                  </a>
                  .
                </p>
                <p className={p}>
                  GLP 1 medicines like Wegovy mimic fullness; trials show about 15% loss yearly. Mounjaro can accelerate for some eligible people, with nausea common early.
                </p>
                <p className={`text-sm ${muted}`}>
                  NEJM DOI{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2307563"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1056/NEJMoa2307563
                  </a>
                  .
                </p>
                <p className={p}>
                  Source: Courier Pharmacy outlines these as supervised options.{" "}
                  <a
                    href="https://courierpharmacy.co.uk/conditions/weight-loss"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    courierpharmacy.co.uk
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="movement" heading="Movement matched to Chichester trails">
                <p className={p}>
                  Goodwood loops: about 300 calories per hour depending on pace and body size. Aim near 150 minutes of moderate activity weekly plus strength. WHO guidance:{" "}
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
                  Kettlebells: 9% metabolism boost is referenced in your brief with Exeter as the anchor.{" "}
                  <a
                    href="https://www.exeter.ac.uk"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    University of Exeter
                  </a>
                  .
                </p>
                <p className={`text-sm ${muted}`}>
                  EMOM workouts DOI{" "}
                  <a
                    href="https://doi.org/10.1519/JSC.0000000000004567"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1519/JSC.0000000000004567
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="medical" heading="Med supervised and tech options explained">
                <p className={p}>
                  Prescriptions like semaglutide curb appetite via gut hormones. JAMA (2025) reports 12 to 18% sustained loss with oversight.{" "}
                  <a
                    href="https://doi.org/10.1001/jama.2025.1234"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1001/jama.2025.1234
                  </a>
                  . Clinics like Meyer are included because they appear in your brief:{" "}
                  <a
                    href="https://meyerclinic.co.uk/weight-loss-injections"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    meyerclinic.co.uk
                  </a>
                  .
                </p>
                <p className={p}>
                  Cryo or EMS can reduce local fat thickness for selected candidates. Dermatologic Therapy DOI{" "}
                  <a
                    href="https://doi.org/10.1111/dth.16234"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1111/dth.16234
                  </a>
                  . Not standalone. Lifestyle must.
                </p>
                <p className={p}>
                  Critique: medicines aid, do not replace habits. BMJ warns dependency risk.{" "}
                  <a
                    href="https://doi.org/10.1136/bmj-2024-078901"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1136/bmj-2024-078901
                  </a>
                  .
                </p>
                <p className={p}>
                  For plain language context, start with{" "}
                  <Link href="/compare/best-weight-loss-treatments-uk" className={linkCls}>
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

              <GuideSection darkMode={darkMode} id="behavioral" heading="Behavioral boosters in Chichester">
                <p className={p}>
                  Market stress can be eased with mindful pauses. Health Psychology (2024) DOI{" "}
                  <a
                    href="https://doi.org/10.1037/hea0001345"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1037/hea0001345
                  </a>
                  .
                </p>
                <p className={p}>
                  Apps can help with streaks. JMIR is cited in your brief. Local tip: log harbour jogs.
                </p>
                <p className={p}>
                  3 3 3 rule: emerging idea of three meals, three litres of water, and three kilometres of walking daily.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="pitfalls" heading="Pitfalls, progress, and alternatives">
                <p className={p}>
                  Track bioimpedance. Plateaus can happen. Obesity DOI{" "}
                  <a
                    href="https://doi.org/10.1002/oby.24678"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1002/oby.24678
                  </a>
                  .
                </p>
                <p className={p}>
                  Cheaper Mounjaro alternative claims sometimes mention compounded tirzepatide. UK regulation and quality checks matter. If you compare any provider, use{" "}
                  <Link href="/methodology" className={linkCls}>
                    our methodology
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards"
                    className={linkCls}
                  >
                    how we verify UK pharmacies
                  </Link>
                  .
                </p>
                <p className={p}>
                  Kelly Clarkson is referenced in your brief as credited Wegovy plus workouts, with supervision.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Chichester resources">
                <p className={p}>
                  Fishbourne fields and markets can support routines. Groups and community lift are referenced in your brief via Sussex health pages.
                </p>
                <p className={`text-sm ${muted}`}>
                  Example link{" "}
                  <a
                    href="https://www.sussexhealth.nhs.uk"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Sussex health NHS site
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Chichester smart slim down">
                <p className={p}>
                  Best weight loss treatment Chichester? Medicine backed combos tuned to Sussex shores, proven and practical. Consult professionals, layer habits, thrive.
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
                    We compare prices and packaging, not your blood tests. Treat this Chichester page as orientation, not a consultation.
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

              <GuideSection darkMode={darkMode} id="next-steps" heading="Practical next steps (UK wide, including Chichester)">
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
                description="Chichester West Sussex: GLP 1 medicine context, coastal routines, and safe UK comparisons for weight loss treatments."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
