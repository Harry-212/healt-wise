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
  "Best Weight Loss Treatment Cardiff: Top Options Including Mounjaro and Wegovy in 2026";

export default function CardiffLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "landscape", label: "Cardiff 2026 weight loss landscape" },
      { id: "leading", label: "Leading treatments: Mounjaro and Wegovy breakdown" },
      { id: "access", label: "Where to access Mounjaro in Cardiff?" },
      { id: "comparisons", label: "Non med routes and comparisons" },
      { id: "evidence", label: "Evidence, risks, and real talk" },
      { id: "resources", label: "Cardiff Bay resources" },
      { id: "conclusion", label: "Conclusion: Cardiff smart slim down choice" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Cardiff)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-cardiff" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection
                darkMode={darkMode}
                id="intro"
                heading={`Why best weight loss treatment in ${name} is personal`}
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  The best weight loss treatments in Cardiff as of May 2026 feature pharmacy led GLP 1 injections like Mounjaro (tirzepatide) and Wegovy (semaglutide), often via private clinics for quicker access than NHS waits. Standouts include Mayfield Clinic for personalized plans and Cyncoed Pharmacy for convenient scripts, backed by NICE approvals showing 15 to 20% body weight loss.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Cardiff&apos;s castle shadows and bay breezes motivate change. Yet bay fish suppers add up.{" "}
                  <strong className={strong}>
                    What tops the best weight loss treatment in Cardiff
                  </strong>
                  ? Medically supervised injectables lead, per recent data. Compare options in{" "}
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
              </GuideSection>

              <GuideSection darkMode={darkMode} id="landscape" heading="Cardiff 2026 weight loss landscape">
                <p className={p}>
                  NHS Wales reports high adult obesity, with commutes and cafes contributing. Private options have surged amid GLP 1 demand. For the Welsh health statistics source referenced in your brief, see{" "}
                  <a
                    href="https://nhs.wales/services/wales-informatics-service"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NHS Wales Informatics Service
                  </a>
                  .
                </p>

                <p className={p}>
                  Fads falter. An NEJM paper in your brief describes supervised medicines outperforming diets alone. Local nuance: Cardiff&apos;s active scene and bay trails can amplify results when you build routine.
                </p>

                <p className={`text-sm ${muted}`}>
                  DOI{" "}
                  <a
                    href="https://doi.org/10.1056/NEJMoa2501234"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    10.1056/NEJMoa2501234
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="leading"
                heading="Leading treatments: Mounjaro and Wegovy breakdown"
              >
                <p className={p}>
                  Most successful? Tirzepatide (Mounjaro) can edge semaglutide (Wegovy) in some summaries, with up to 22% loss versus about 15% at year one in comparisons. A Lancet meta analysis link appears in your brief, see it here for the full text page:{" "}
                  <a
                    href="https://www.lancet.com/journals/lancet/article/PIIS0140-6736(26)00123-4/fulltext"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Lancet full text page
                  </a>
                  .
                </p>

                <p className={p}>
                  Both mimic gut hormones, curbing appetite. NICE updates appear in your brief. For the guidance page, see{" "}
                  <a
                    href="https://www.nice.org.uk/guidance/ta1025"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NICE TA1025
                  </a>
                  . Side effects such as nausea can happen early and fade for many people.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="access" heading="Where to access Mounjaro in Cardiff?">
                <p className={p}>
                  Private spots like Mayfield Clinic and Cyncoed Pharmacy are included because they appear in your brief, not as endorsements. Your brief also mentions Cardiff Weight Loss Clinic and Mayberry Pharmacy. NHS routes can have longer waits, while private can be faster but pricier, such as 150 to 300 pounds per month.
                </p>
                <p className={p}>
                  Reference pages from your brief include{" "}
                  <a
                    href="https://mayfieldclinic.co.uk"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Mayfield Clinic
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://cyncoedpharmacy.com"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Cyncoed Pharmacy
                  </a>
                  . Before paying anywhere, use{" "}
                  <Link
                    href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards"
                    className={linkCls}
                  >
                    how we verify UK pharmacies
                  </Link>{" "}
                  and review{" "}
                  <Link href="/methodology" className={linkCls}>
                    our methodology
                  </Link>
                  .
                </p>

                <p className={p}>
                  Can you lose 10 kg in 2 months with Ozempic? It can be possible for some people early on, with trials showing about 5 to 12 kg in early phases, but it varies widely by dose and adherence. A JAMA link in your brief is here:{" "}
                  <a
                    href="https://jamanetwork.com/journals/jama/fullarticle/2834567"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    JAMA real world data page
                  </a>
                  . It is not guaranteed and medical oversight is essential.
                </p>

                <p className={p}>
                  Your brief states UK best medicine in 2026 rankings and MHRA endorsement. For regulatory updates, see{" "}
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
              </GuideSection>

              <GuideSection darkMode={darkMode} id="comparisons" heading="Non med routes and comparisons">
                <p className={p}>
                  Diet alone can produce about 5 to 10% loss for many people, and pairing with medicines can improve results. Surgery may be an option for severe obesity, but waiting lists and eligibility apply. For the UK overview, see{" "}
                  <a
                    href="https://www.nhs.uk/conditions/bariatric-surgery/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NHS bariatric surgery guidance
                  </a>
                  .
                </p>
                <p className={p}>
                  Local hack from your brief: Roath Park jogs can burn around 400 calories per hour depending on pace and body size.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="evidence" heading="Evidence, risks, and real talk">
                <p className={p}>
                  Diabetes Care (2026) in your brief describes high sustain rates with support. See the journal site here:{" "}
                  <a
                    href="https://diabetesjournals.org/care"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Diabetes Care
                  </a>
                  . Critiques include cost and access inequities. Plateau? Dose tweaks may help and should be clinician led. If you stall, read our{" "}
                  <Link href="/helpful-guides/mounjaro-weight-loss-plateau" className={linkCls}>
                    plateau guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Cardiff Bay resources">
                <p className={p}>Markets for vegetables and trails for motion can support consistency.</p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="conclusion"
                heading="Conclusion: Cardiff smart slim down choice"
              >
                <p className={p}>
                  Best weight loss treatment Cardiff 2026? GLP 1 medicines like Mounjaro and Wegovy via trusted local routes can be evidence backed for real results. Consult professionals and pair with bay walks for max impact.
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
                    We compare prices and packaging, not your blood tests. Treat this Cardiff page as orientation, not a consultation.
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
                heading="Practical next steps (UK wide, including Cardiff)"
              >
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
                description="Cardiff Wales: Mounjaro and Wegovy evidence, access considerations, and safe UK comparisons for weight loss treatments."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
