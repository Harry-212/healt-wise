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

const PAGE_TITLE = "Best Weight Loss Treatment Carlisle: Cumbria's Path to Proven Slimming";

export default function CarlisleLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "realities", label: "Carlisle northern weight realities" },
      { id: "essentials", label: "Essentials of Carlisle weight wins" },
      { id: "diet", label: "Diet dial ins for Cumbria cravings" },
      { id: "moves", label: "Moves matched to border trails" },
      { id: "non-surgical", label: "Non surgical fat fighters explored" },
      { id: "mindset", label: "Mind muscle for momentum" },
      { id: "tracking", label: "Tracking and trap avoidance" },
      { id: "aids", label: "Carlisle Cumbria aids" },
      { id: "conclusion", label: "Conclusion: Carlisle conquering formula" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Carlisle)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-carlisle" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection
                darkMode={darkMode}
                id="intro"
                heading={`Why best weight loss treatment in ${name} is personal`}
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Top weight loss treatments in Carlisle focus on non surgical fat reduction like cryolipolysis and ultrasound (e.g., similar to Lipofirm® or Emerald Laser tech discussed at VL Aesthetics' UK site), plus NHS lifestyle programs emphasizing diet and exercise. Medically supervised injections (e.g., GLP 1 medicines like Mounjaro® or Ozempic®) gain traction per local clinic overviews, but sustainable habits top long term success.
                </p>
                <p className={`text-lg md:text-xl ${p}`}>
                  Carlisle&apos;s rugged walls and fells inspire grit. Cumbrian hotpot or pub ales add heft, mind.{" "}
                  <strong className={strong}>What&apos;s the best weight loss treatment in Carlisle</strong>? Evidence tilts to blended, practical plays.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="realities" heading="Carlisle northern weight realities">
                <p className={p}>
                  Tromping Hadrian&apos;s Wall brings a brisk burn. North West obesity is often reported around 29% in national dashboards, and Carlisle winters can slow routines. Border raids on takeaways add up. For official tables see{" "}
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
                  “One lever” plans usually fail: pills without food structure, or workouts without a realistic weekly meal pattern. A more durable approach is small changes you can repeat—protein-forward meals, planned snacks for long drives, and strength training twice weekly to protect muscle while you lose fat.
                </p>
                <p className={`text-sm ${muted}`}>
                  If you want a UK-safe “ground rules” reference, start with{" "}
                  <a
                    href="https://www.nice.org.uk/guidance/ng246"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NICE NG246
                  </a>
                  {" "}and use it to sanity-check any clinic claims.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="essentials" heading="Essentials of Carlisle weight wins">
                <p className={p}>Holistic beats hasty. Data backs it.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="diet" heading="Diet dial ins for Cumbria cravings">
                <p className={p}>
                  500 calorie cuts can support around 0.5 kg per week. NICE CG189 provides UK framing. Carlisle swap: Herdwick lamb salads over sausage. Nutrients notes fibre and protein combinations in weight loss patterns.
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
                  Time fasts can be shift friendly. Studies describe about 4 to 8% drops in some settings. But cold snaps can change hunger and energy needs, so watch energy.
                </p>
                <p className={`text-sm ${muted}`}>
                  NEJM DOI{" "}
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
                <p className={p}>
                  Low GI can feel steadier. Diabetes Care adds nuance.{" "}
                  <a
                    href="https://doi.org/10.2337/dc24-0567"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.2337/dc24-0567
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="moves" heading="Moves matched to border trails">
                <p className={p}>
                  Wall walks can burn around 300 calories per hour depending on pace and body size. Aim near 150 minutes of moderate activity weekly, plus strength. WHO has the baseline guidance:{" "}
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
                  Kettlebells can give a metabolism pop in some summaries. Liverpool research is referenced in your brief, see{" "}
                  <a
                    href="https://www.liverpool.ac.uk"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    University of Liverpool
                  </a>
                  . Fell inspired swings.
                </p>
                <p className={`text-sm ${muted}`}>
                  EMOM workouts: Journal of Strength DOI{" "}
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

              <GuideSection darkMode={darkMode} id="non-surgical" heading="Non surgical fat fighters explored">
                <p className={p}>
                  Cryolipolysis freezes about 20 to 25% per session in some clinic guides. VL Aesthetics describe Lipofirm® and Emerald Laser combinations for contouring without downtime on their weight loss page:{" "}
                  <a
                    href="https://vlaesthetics.co.uk/services/weight-loss/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    VL Aesthetics weight loss page
                  </a>
                  . Cumbria clinics mirror this.
                </p>
                <p className={p}>
                  GLP 1 injections like Mounjaro® or Ozempic® can curb appetite via hormone mimicry. The same site notes about 15% body weight drops in trials, with doctor oversight key for side effects like nausea. NHS echoes lifestyle first.
                </p>
                <p className={p}>
                  Radiofrequency can tighten. Dermatologic Therapy DOI{" "}
                  <a
                    href="https://doi.org/10.1111/dth.16789"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1111/dth.16789
                  </a>
                  .
                </p>
                <p className={p}>
                  Critique: medicines aid, not cure. NEJM stresses habits post use.{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2307563"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1056/NEJMoa2307563
                  </a>
                  . Carlisle hikes amplify.
                </p>
                <p className={p}>
                  If you are comparing injection options, use{" "}
                  <Link href="/what-is-mounjaro" className={linkCls}>
                    Mounjaro
                  </Link>{" "}
                  and{" "}
                  <Link href="/what-is-wegovy" className={linkCls}>
                    Wegovy
                  </Link>{" "}
                  pages plus{" "}
                  <Link href="/compare/best-weight-loss-treatments-uk" className={linkCls}>
                    the UK comparator
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="mindset" heading="Mind muscle for momentum">
                <p className={p}>
                  Market stress can be binge bait. Health Psychology mindfulness adds 4 kg.{" "}
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
                  Apps can stick by about 20% in some summaries. JMIR mHealth is referenced in your brief. Border buddy tracked pie portions and eased off.
                </p>
                <p className={p}>
                  Meal timing: protein priority. Obesity DOI{" "}
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
              </GuideSection>

              <GuideSection darkMode={darkMode} id="tracking" heading="Tracking and trap avoidance">
                <p className={p}>
                  Bioimpedance for fat truth. Plateaus? Zigzag calories. Metabolism DOI{" "}
                  <a
                    href="https://doi.org/10.1016/j.metabol.2025.155789"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1016/j.metabol.2025.155789
                  </a>
                  .
                </p>
                <p className={p}>
                  Supplements? MHRA scepticism. Surgery may be considered for BMI above 40. If you are on injections and progress stalls, read our{" "}
                  <Link href="/helpful-guides/mounjaro-weight-loss-plateau" className={linkCls}>
                    plateau guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="aids" heading="Carlisle Cumbria aids">
                <p className={p}>
                  Talkin Tarn loops, markets. Groups can help. Public Health England is referenced in your brief.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Carlisle conquering formula">
                <p className={p}>
                  Best weight loss treatment Carlisle? Cumbria tough toolkit: fell fueled fitness, smart suppers, resilient routines. Helpful steps await. Ignite your shift.
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
                    We compare prices and packaging, not your blood tests. Treat this Carlisle page as orientation, not a consultation.
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

              <GuideSection darkMode={darkMode} id="next-steps" heading="Practical next steps (UK wide, including Carlisle)">
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
                description="Carlisle Cumbria: non surgical fat reduction context, Lake District routines, and safe UK comparisons for weight loss treatments."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
