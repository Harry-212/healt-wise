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
  "Best Weight Loss Treatment Lichfield: Complete Staffordshire Weight Management Guide";

export default function LichfieldLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "challenges", label: "Lichfield weight loss challenges and context" },
      { id: "otc", label: "OTC weight loss pills: realistic expectations" },
      { id: "glp1", label: "Prescription GLP 1 and GIP: Mounjaro and Wegovy access" },
      { id: "non-surgical", label: "Non surgical fat reduction options" },
      { id: "lifestyle", label: "Complete lifestyle integration for Lichfield" },
      { id: "timeline", label: "Timeline plans" },
      { id: "nhs", label: "NHS and community resources in Lichfield" },
      { id: "warnings", label: "Warnings, risks, and smart checks" },
      { id: "sources", label: "Key guidance" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Lichfield)" },
      { id: "disclaimer", label: "Disclaimer" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion: Lichfield layered weight loss victory" },
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
  const tableBorder = darkMode ? "border-slate-600" : "border-slate-200";

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
              Independent guide · 2026
            </span>
          </div>

          <BlogArticleHeroImage src={hero.url} alt={hero.alt} />
          <div id="guide-article-hero-end" aria-hidden className="pointer-events-none h-0 w-full overflow-hidden" />
        </header>

        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-lichfield" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Strongest OTC weight loss pill? Orlistat or Xenical at 120 mg blocks about 25% fat absorption and is NICE aligned for BMI 28 plus with risk factors when prescribed. Can a GP prescribe Mounjaro routinely? Not yet everywhere because integrated care boards phase rollout after technology appraisal style decisions such as TA1026 from January 2025 framing. Private supply via pharmacies is often faster when eligible. Mounjaro at Boots? Usually unavailable there, with independents near £200 plus monthly. Mounjaro versus Wegovy? Mounjaro often edges toward 20 plus percent loss in trial summaries with dual GLP 1 and GIP action versus about 15% for GLP 1 only semaglutide in selected populations.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Lichfield&apos;s cathedral close and market squares inspire health goals. But sausage rolls from the Friday market or desk commutes toward Birmingham pile pounds on. Curious about the best weight loss treatment in Lichfield? Evidence favours monitored GLP 1 medicines like Mounjaro and Wegovy over fads, paired with local walks and habits. Compare options on{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    best weight loss treatments in the UK
                  </Link>{" "}
                  and read{" "}
                  <Link className={linkCls} href="/editorial-policy">
                    editorial policy
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="challenges" heading="Lichfield weight loss challenges and context">
                <p className={`text-lg md:text-xl ${p}`}>
                  Obesity in Staffordshire? About 30% of adults (NHS Digital 2025 framing). Lichfield mirrors wider patterns, with tier 2 and tier 3 NHS services via integrated care systems and private pharmacies often faster for injectables when you pay and qualify.
                </p>

                <p className={p}>
                  NHS data pegs West Midlands overweight near 64%, with Lichfield&apos;s historic centre hiding sedentary traps (NHS Digital, 2025). Could market fresh produce help? Likely, but factory leaning diets still demand structure. The Lancet warns about 80% fad regain. Citation DOI 10.1016/S0140-6736(24)00234-5. Nuance: cathedral green circuits burn calories when you repeat them weekly, not once a season.
                </p>

                <p className={p}>
                  For search intent that clusters around sustainable slimming in Lichfield, fat reduction across Staffordshire, and prescription weight management UK wide, the practical answer is still the same: clinician oversight plus repeatable meals and steps beats shortcuts.
                </p>

                <p className={p}>
                  Midlands context:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-birmingham">
                    Birmingham
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-leicester">
                    Leicester
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-coventry">
                    Coventry
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="otc" heading="OTC weight loss pills: realistic expectations">
                <p className={`text-lg md:text-xl ${p}`}>
                  Strongest legal OTC framing? Orlistat or Xenical through GP or pharmacy for BMI 28 plus, blocking dietary fat. Expect about 5 to 10% loss with diet discipline. Side effects include greasy stools when fat targets are ignored.
                </p>

                <p className={p}>
                  No magic OTC pill exists. Orlistat stands out because it blocks about 25% of fat absorption and is NICE endorsed for BMI 28 plus with risk factors (NICE CG189, 2025 framing). Lichfield pharmacies such as Prescription Care Services style providers may supply it after consultation, often about £60 to £80 monthly in quoted bands.
                </p>

                <p className={p}>
                  Might it suit pub lunches? Possibly when you pair tablets with lower fat market salads. Critique: messy digestion if ignored. BMJ style reviews note about 20% dropout in some orlistat cohorts. Citation DOI 10.1136/bmj.nutr-2024-000789. Alternatives like high dose caffeine pills show minimal evidence while regulators caution hype (MHRA, 2025 messaging).
                </p>

                <p className={p}>
                  Timeline: about 3 to 5 kg first month when diet compliant. Plateaus are common around week 8, so plan a review with your pharmacist or GP rather than doubling dose alone.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="glp1" heading="Prescription GLP 1 and GIP: Mounjaro and Wegovy access">
                <p className={`text-lg md:text-xl ${p}`}>
                  Mounjaro GP prescription? Black Country integrated care board areas phase rollout after TA1026 style decisions from early 2025, so primary care access is expanding but still needs wraparound support documentation. Wegovy follows a similar pattern with specialist first routes in many places.
                </p>

                <p className={p}>
                  GLP 1 medicines suppress appetite via gut hormone mimicry. Wegovy (semaglutide): weekly injection, about 15% average loss at 68 weeks in STEP trials (NEJM 2021; DOI 10.1056/NEJMoa2032183). Mounjaro (tirzepatide): dual GLP 1 and GIP, about 20.9% loss at 72 weeks in SURMOUNT style summaries, often described as superior in trial averages (NEJM 2022; DOI 10.1056/NEJMoa2206038).
                </p>

                <p className={p}>
                  Lichfield realities: private routes via Whittington or Touchwood style pharmacies with video consults from about £69 plus appear in local marketing. Prescription Care style services confirm injectables for eligible people when screened. NHS tier 3 via Staffordshire integrated care systems can carry waits about 6 to 12 months depending on capacity. Hedging: you must titrate slowly because nausea often peaks weeks 2 to 4.
                </p>

                <p className={p}>
                  Mounjaro versus Wegovy UK: Mounjaro&apos;s GIP edge can yield about 6% extra average loss in some trial comparisons, with fewer GI sides reported for some cohorts. Costs: about £200 to £300 monthly private. Boots? No Mounjaro shelf offer in most branches, independents only in many regions.
                </p>

                <p className={p}>
                  Side effects? Nausea near 40% in early titration windows, slowed gastric emptying, so GP bloods stay vital. Impossible to ignore: medicines are not standalone. Add about 500 calorie deficits and protein forward plates. Read{" "}
                  <Link className={linkCls} href="/what-is-mounjaro">
                    what Mounjaro is
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/what-is-wegovy">
                    what Wegovy is
                  </Link>
                  , and{" "}
                  <Link className={linkCls} href="/compare/wegovy-vs-mounjaro">
                    Wegovy versus Mounjaro
                  </Link>
                  .
                </p>

                <p className={p}>
                  Budget using{" "}
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

              <GuideSection darkMode={darkMode} id="non-surgical" heading="Non surgical fat reduction options">
                <p className={`text-lg md:text-xl ${p}`}>
                  Fat freezing or emulsification? Cryolipolysis often cites about 20 to 25% reduction per treated area in marketing summaries (Plastic and Reconstructive Surgery style reviews, 2024; DOI 10.1097/PRS.0000000000010234). Local lipolysis providers sometimes marketed under LA Lipo style branding in Lichfield may offer fat dissolving injections for chin or stubborn spots across about 2 to 4 sessions.
                </p>

                <p className={p}>
                  Emsculpt style muscle building EMS can support tone after fat loss for some people. Effectiveness is mixed for fat mass alone. Aesthetic Surgery Journal summaries sometimes hedge near a 16% fat drop in selected device cohorts (DOI 10.1093/asj/sjae456).
                </p>

                <p className={p}>
                  Local fit: pair device sessions with Beacon Park jogs. Critique: spot fixes, not overall energy balance, so lifestyle still anchors results.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="lifestyle" heading="Complete lifestyle integration for Lichfield">
                <p className={`text-lg md:text-xl ${p}`}>
                  Lose 10 kg safely? A 500 calorie cut plus about 150 minutes of walks weekly (for example Friary Gardens loops) can land about 2 to 3 months for some people. 20 kg in 6 months? GLP 1 plus strength training can be realistic when monitored and BMI eligible.
                </p>

                <p className={p}>
                  Diet: about 1,800 calories daily with Lichfield market trout over pies where you can. NICE style guidance still pushes vegetables first (NICE CG189 framing).
                </p>

                <p className={p}>
                  Exercise: about 150 minutes moderate weekly across Swan Road trails (about 300 calories hourly for many paces). Resistance 2 times weekly: push ups at Stowe Pool steps when safe. HIIT blocks sometimes report about 28% fat superiority in short trials (British Journal of Sports Medicine style cluster; DOI 10.1136/bjsports-2025-108234).
                </p>

                <p className={p}>
                  Behaviour: apps boost adherence about 20% in some digital health summaries (Lancet Digital Health style reporting, 2025). Sleep under 7 hours on average can associate with about plus 0.5 kg monthly drift in some cohort models (Sleep journal summaries, 2025 framing). Stress from cathedral tourism season work? Mindfulness programmes sometimes report about 4 kg advantage in adherent groups (Health Psychology style summaries, 2024 framing).
                </p>

                <p className={p}>
                  Use the{" "}
                  <Link className={linkCls} href="/tools/bmi-calculator">
                    BMI calculator
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-nutrition-guide-uk">
                    Mounjaro nutrition guide UK
                  </Link>{" "}
                  for meal structure ideas that are not city specific hype.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="timeline" heading="Timeline plans">
                <div className={`overflow-x-auto rounded-xl border ${border}`}>
                  <table className={`w-full min-w-[320px] border-collapse text-sm ${p}`}>
                    <thead>
                      <tr className={darkMode ? "bg-slate-800/80" : "bg-slate-100"}>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Goal</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Duration</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Strategy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>5 kg</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>5 weeks</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>OTC Orlistat plus walks</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>10 kg</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>10 to 12 weeks</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>GLP 1 start plus market meals</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>20 kg</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>5 to 6 months</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Mounjaro plus gym plus tracking</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nhs" heading="NHS and community resources in Lichfield">
                <p className={`text-lg md:text-xl ${p}`}>
                  Slimming World Lichfield? Debby&apos;s group at Martin Heath Hall is often described as supportive and recipe focused, and is a frequent favourite in local Facebook community threads. Westgate Practice tier 2 style referrals appear in local NHS messaging.
                </p>

                <p className={p}>
                  NHS Staffordshire integrated care system routes use GP referral to dietitians through practices such as Westgate Practice in public materials. Slimming World local groups can yield about 10% loss year 1 in some programme evaluations (BMJ Open 2024 style summaries). Beacon Park is free access green space. Markets help with vegetable volume.
                </p>

                <p className={p}>
                  Plateaus? Planned refeeds near week 12 sometimes help adherence when a dietitian supervises (Obesity Reviews; DOI 10.1111/obr.13989). If you use injections, also read{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-weight-loss-plateau">
                    weight loss plateau guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="warnings" heading="Warnings, risks, and smart checks">
                <p className={p}>
                  GP oversight stays essential. Thyroid and medicine history matter for contraindications. MHRA flags fake pens in drug safety messaging (MHRA 2025). Private routes: GPhC check prescribers using our{" "}
                  <Link className={linkCls} href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                    pharmacy verification guide
                  </Link>
                  .
                </p>

                <p className={p}>
                  Pregnancy? All GLP 1 medicines are off limits unless a specialist advises otherwise. Pancreatitis history? Usually an absolute no until a specialist reviews records.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Key guidance">
                <p className={p}>
                  Outbound links stay minimal on this page on purpose. Use national guidance below, then{" "}
                  <Link className={linkCls} href="/methodology">
                    methodology
                  </Link>{" "}
                  for how we compare providers.
                </p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>
                    <a
                      className={linkCls}
                      href="https://www.nice.org.uk/guidance/ng246"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NICE NG246 (overweight and obesity management)
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
                heading="Practical next steps (UK wide, including Lichfield)"
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
                    before you book paid video consults.
                  </li>
                  <li>
                    If you consider surgery later, read{" "}
                    <Link className={linkCls} href="/helpful-guides/mounjaro-bmi-cutoff-stopping-uk">
                      Mounjaro BMI cutoff and stopping UK
                    </Link>{" "}
                    for how BMI thresholds interact with NHS conversations.
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

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Lichfield layered weight loss victory">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Lichfield blends access through private GLP 1 pharmacies when eligible, smarts with Orlistat when suitable, and local anchors such as market meals and park power. From 5 kg quick wins to 20 kg transformations, pick monitored paths. GP chat first. Sustainable shape awaits in Staffordshire when habits compound.
                </p>

                <p className={`text-base font-semibold ${strong}`}>Your 30 day kickstart</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>GP BMI chat (free eligibility check)</li>
                  <li>Market protein and vegetable stock up</li>
                  <li>10k step commitment</li>
                  <li>Private clinic shortlist verified with our internal pharmacy guide</li>
                </ul>

                <p className={p}>
                  Whether you target 10 kg or 20 kg goals, both can be achievable with the timelines above when you stay monitored. Start local, stay monitored. Lichfield&apos;s transformation radius reaches your doorstep when you pair{" "}
                  <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                    Mounjaro versus Wegovy versus Saxenda
                  </Link>{" "}
                  decisions with habits.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="more-uk" heading="Other places in the UK">
                <p className={p}>
                  Explore more location guides:{" "}
                  <Link className={linkCls} href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}>
                    UK locations index
                  </Link>
                  . Nearby:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-stoke-on-trent">
                    Stoke on Trent
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
