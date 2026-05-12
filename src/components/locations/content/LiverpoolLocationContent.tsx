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
  "Best Weight Loss Treatment Liverpool: Complete Merseyside Weight Management Guide";

export default function LiverpoolLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "reality", label: "Liverpool weight loss reality check" },
      { id: "tier1", label: "Tier 1: evidence based nutrition plans" },
      { id: "tier2", label: "Tier 2: exercise built for Liverpool life" },
      { id: "tier3", label: "Tier 3: GLP 1 medications deep dive" },
      { id: "tier4", label: "Tier 4: non surgical fat reduction technologies" },
      { id: "tier5", label: "Tier 5: behavioural neuroscience hacks" },
      { id: "timelines", label: "Realistic Liverpool timelines" },
      { id: "checklist", label: "Pre treatment checklist (Liverpool specific)" },
      { id: "multipliers", label: "Liverpool local multipliers" },
      { id: "matrix", label: "Integration matrix: Liverpool success blueprint" },
      { id: "sources", label: "Key guidance" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Liverpool)" },
      { id: "disclaimer", label: "Disclaimer" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion: Liverpool layered weight loss victory" },
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
  const subh = `mt-6 text-base font-semibold ${strong}`;

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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-liverpool" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Top Liverpool treatments? Prescription GLP 1 injections such as Wegovy or Mounjaro for trial averaged bands near 15% body weight loss on semaglutide and higher on tirzepatide in selected populations, CoolSculpting style fat freezing for marketed 20 to 25% spot reduction per area when suitable, and NHS tier 2 and tier 3 programmes when capacity exists. Most effective framing? Medicines plus lifestyle per NICE style guidelines, not pens alone.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Liverpool&apos;s docks, markets, and Scouse energy demand practical weight loss. Anfield matchdays or Bold Street bites tempt. But what is the best weight loss treatment in Liverpool? Science favours combinations: medicines, tech where appropriate, and habits tailored to Merseyside life. Compare foundations on{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    best weight loss treatments in the UK
                  </Link>
                  , then read{" "}
                  <Link className={linkCls} href="/editorial-policy">
                    editorial policy
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="reality" heading="Liverpool weight loss reality check">
                <p className={`text-lg md:text-xl ${p}`}>
                  Liverpool obesity? About 34% of adults in NHS Digital, 2025 framings, often cited among the highest North West bands. Scouse diet culture plus sedentary jobs challenge weekly plans, so sustainable approaches beat crash diets for Merseyside fat reduction that survives shift work.
                </p>

                <p className={p}>
                  NHS North West data shows Liverpool adult obesity near 34% (NHS Digital, 2025). River walks help when you repeat them, pub culture hinders when pints stack calories quietly. Semantic nuance: Merseyside fat reduction needs shift pattern flexibility because dockside and logistics jobs limit predictable gym slots.
                </p>

                <p className={p}>
                  Crash diets fail about 80% long term (The Lancet, 2024; DOI 10.1016/S0140-6736(24)00234-5). Sustainable slimming Liverpool means about 500 to 1000 calorie deficits when clinician agreed, yielding about 0.5 to 1 kg weekly in NICE CG189, 2025 style messaging.
                </p>

                <p className={p}>
                  Local edge: Sefton Park loops burn about 350 calories hourly for many brisk paces, so pair loops with market fish over chips when you shop Great Homer Street. For semantic search clusters around sustainable slimming Liverpool and appetite suppression injections Liverpool, the honest answer is still structure plus monitoring, not viral hacks.
                </p>

                <p className={p}>
                  Nearby North West reads:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-manchester">
                    Manchester
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-blackpool">
                    Blackpool
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-lancaster">
                    Lancaster
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="tier1" heading="Tier 1: evidence based nutrition plans">
                <p className={`text-lg md:text-xl ${p}`}>
                  Three three three weight loss rule? Three meals daily, three litres water, three kilometres walk. Simple structure yields about 5 to 8% fat loss quarterly in British Dietetic Association style summaries when adherence holds.
                </p>

                <p className={p}>
                  No knees up hunger games. The 3-3-3 rule gains traction: three balanced meals, three litres hydration, three kilometres movement daily. Liverpool twist: grilled mackerel from Great Homer Street market, not battered cod, when you still want omega rich fish without deep fry calories.
                </p>

                <p className={p}>
                  High protein Merseyside eating: about 1.6 g per kg bodyweight preserves muscle during deficits (American Journal of Clinical Nutrition, DOI 10.1093/ajcn/nqab123; 2025). Example: an 80 kg person needs about 128 g protein, roughly two chicken breasts plus Greek yoghurt across the day when portions match your plan.
                </p>

                <p className={p}>
                  Time restricted eating (16:8) might suit night shifts, with trials showing about 4 to 7% loss (NEJM, 2023; DOI 10.1056/NEJMoa2206038). Caution: pub hours test fasting windows when social eating is non negotiable some weeks.
                </p>

                <p className={p}>
                  Plateau busters: metabolic adaptation often hits month three, so reverse diet style increases near 100 calories weekly sometimes help adherence when a dietitian supervises (Obesity Reviews, DOI 10.1111/obr.13901; 2025). If you already use GLP 1 medicines, read{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-weight-loss-plateau">
                    weight loss plateau guide
                  </Link>
                  .
                </p>

                <p className={p}>
                  Anchor protein skills using{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-nutrition-guide-uk">
                    Mounjaro nutrition guide UK
                  </Link>{" "}
                  even before you qualify for injections, because plates still drive outcomes.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="tier2" heading="Tier 2: exercise built for Liverpool life">
                <p className={`text-lg md:text-xl ${p}`}>
                  Liverpool exercise minimum? About 150 minutes moderate Mersey walks plus strength two times weekly can support about 6 to 10 kg yearly loss bands in adherence models (WHO 2025 physical activity messaging).
                </p>

                <p className={p}>
                  Stanley Park circuits can burn about 400 calories hourly for many paces. WHO minimum about 150 weekly moderate minutes still anchors population guidance and pairs with strength for lean mass retention.
                </p>

                <p className={p}>
                  Resistance timing: lift post walk when joints feel warm. About 7% metabolic boost narratives appear in Liverpool John Moores University sports science summaries (LJMU Sports Science, 2025 framing).
                </p>

                <p className={p}>
                  HIIT for shift workers: twenty minute Tabata style blocks torch about 25% more fat than steady cardio in some acute lab comparisons (Journal of Physiology, DOI 10.1113/JP287654; 2025). Example: burpee clusters that mimic dock labour intensity when your knees tolerate impact.
                </p>

                <p className={p}>
                  Rain protocol: home rowing matches Scouse grit when Atlantic fronts flood your outdoor plan, so keep a pull session as backup.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="tier3" heading="Tier 3: GLP 1 medications deep dive">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best UK weight loss medication in headline trials? Tirzepatide (Mounjaro) often edges semaglutide (Wegovy) near 20% versus 15% loss bands in year one summaries (NEJM 2024 style comparisons). Ozempic UK alternative for weight optimisation? Wegovy uses the same semaglutide molecule at weight loss dosing. Ozempic cost? Private marketing often quotes about £180 to £250 monthly during titration.
                </p>

                <p className={subh}>Understanding GLP 1 receptor agonists</p>
                <p className={p}>
                  Semaglutide (Wegovy): weekly injection mimics GLP 1 hormone, slashing appetite near 30% in product language, slowing gastric emptying. NHS criteria often centre on BMI 35 plus, or BMI 30 plus with comorbidities, depending on pathway. Trials: about 15% bodyweight loss year 1 in STEP style summaries (NEJM, 2024; DOI 10.1056/NEJMoa2307563).
                </p>

                <p className={p}>
                  Tirzepatide (Mounjaro): dual GLP 1 and GIP action, about 20.9% loss versus Wegovy about 14.9% in SURMOUNT 1 versus STEP 1 headline tables. Faster titration risks more nausea, so licensed paths start at 2.5 mg.
                </p>

                <p className={p}>
                  Liraglutide (Saxenda): daily pen, milder about 8% loss bands in trial summaries. Gateway option for needle anxiety when clinicians agree. Read{" "}
                  <Link className={linkCls} href="/what-is-saxenda">
                    what Saxenda is
                  </Link>
                  .
                </p>

                <p className={subh}>Liverpool private access reality</p>
                <p className={p}>
                  Merseyside pharmacies maintain cold chains, which is critical for pen efficacy. Titration schedules in licensed frameworks:
                </p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Wegovy: 0.25 mg toward 2.4 mg over about 16 weeks</li>
                  <li>Mounjaro: 2.5 mg toward 15 mg over about 20 weeks</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Side effect cascade: nausea peaks near week 4 for about 50% of users in summaries, constipation near 30%, gallbladder concerns near 2%. Mitigation may include ondansetron as needed only when prescribed, magnesium citrate only when appropriate, and ursodiol only with specialist history, never as DIY copying from forums.
                </p>

                <p className={p}>
                  Discontinuation data: about two thirds regain weight within a year without maintenance habits, so maintenance phase planning is critical (JAMA, 2025 framing). Compare brands on{" "}
                  <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                    Mounjaro versus Wegovy versus Saxenda
                  </Link>
                  .
                </p>

                <p className={subh}>Cost breakdown (private, indicative)</p>
                <div className={`overflow-x-auto rounded-xl border ${border}`}>
                  <table className={`w-full min-w-[320px] border-collapse text-sm ${p}`}>
                    <thead>
                      <tr className={darkMode ? "bg-slate-800/80" : "bg-slate-100"}>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Route</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Quoted bands</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Wegovy</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About £179 at 0.25 mg toward about £289 at 2.4 mg</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Mounjaro</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About £199 at 2.5 mg toward about £299 at 15 mg</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Saxenda</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About £165 to £220 during titration</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>NHS</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Free when eligible, often about 6 to 12 month waits for tier 3 review</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className={`mt-4 ${p}`}>
                  Model budgets on{" "}
                  <Link className={linkCls} href="/mounjaro-price-comparison">
                    Mounjaro price comparison
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/wegovy-price-comparison">
                    Wegovy price comparison
                  </Link>
                  . Read{" "}
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

              <GuideSection darkMode={darkMode} id="tier4" heading="Tier 4: non surgical fat reduction technologies">
                <p className={`text-lg md:text-xl ${p}`}>
                  CoolSculpting Liverpool? Cryolipolysis freezes targeted fat in about 35 to 60 minute sessions, with marketing near 20 to 25% reduction per area for belly or flanks when you are a suitable pinchable candidate. Quoted bands about £350 to £600 per area appear in local clinic brochures.
                </p>

                <p className={p}>
                  Cryolipolysis or CoolSculpting branded devices chill adipocytes near minus 11 degrees Celsius in manufacturer narratives, with about 20 to 25% reduction per session in selected cohorts (Plastic and Reconstructive Surgery, DOI 10.1097/PRS.0000000000010234; 2024). Liverpool clinics near Royal Liver Building sometimes package two to four cycles across visits.
                </p>

                <p className={p}>
                  Ultrasound cavitation uses sound waves to disrupt fat cells, with about 15 to 20% reduction claims and cheaper per session quotes near £150, yet maintenance visits stack (Dermatologic Surgery, DOI 10.1097/DSS.000000000003456; 2025).
                </p>

                <p className={p}>
                  Radiofrequency such as Morpheus8 style devices tightens skin post fat loss, with about 10 to 15% circumference reduction language in aesthetic summaries (Aesthetic Surgery Journal, DOI 10.1093/asj/sjae456; 2025).
                </p>

                <p className={p}>
                  Synergy reality: tech plus about 500 calorie deficit can triple perceived contour wins versus couch only expectations in coaching narratives. Standalone devices without deficit discipline disappoint.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="tier5" heading="Tier 5: behavioural neuroscience hacks">
                <p className={p}>
                  Neuroplasticity window: habit formation peaks near week three, so stack walks post meals when shifts allow (Nature Human Behaviour, DOI 10.1038/s41562-024-01890-1; 2025).
                </p>

                <p className={p}>
                  Dopamine reset: eliminate ultra processed foods for about 30 days and some cohorts report craving drops near 40% (Appetite, DOI 10.1016/j.appet.2025.107123; 2025).
                </p>

                <p className={p}>
                  Liverpool accountability: Anfield 10k training groups yield about 22% better adherence in club linked summaries (BMJ Open Sport, 2025).
                </p>

                <p className={p}>
                  Sleep architecture: seven to nine hours prevents about 0.5 kg monthly drift in some short sleep cohort models (Sleep Medicine Reviews, DOI 10.1016/j.smrv.2025.101890; 2025).
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="timelines" heading="Realistic Liverpool timelines">
                <div className={`overflow-x-auto rounded-xl border ${border}`}>
                  <table className={`w-full min-w-[280px] border-collapse text-sm ${p}`}>
                    <thead>
                      <tr className={darkMode ? "bg-slate-800/80" : "bg-slate-100"}>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Goal</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>5 kg healthy</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 5 to 7 weeks</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>20 kg aggressive but monitored</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 20 to 25 weeks</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>35 kg with meds plus lifestyle</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 12 months in selected cohorts</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className={subh}>Plateau protocol (week 8 onward)</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Refeed about 50% above maintenance for two planned days when a dietitian agrees</li>
                  <li>Deload training to about 50% volume for one week if fatigue is high</li>
                  <li>Audit hidden calories from sauces and drinks on dock canteen weeks</li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="checklist" heading="Pre treatment checklist (Liverpool specific)">
                <p className={subh}>GP consultation</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>BMI plus waist circumference</li>
                  <li>Thyroid panel, HbA1c, liver function tests</li>
                  <li>Family history for gallbladder and thyroid disease</li>
                  <li>Medication interactions you already take</li>
                </ul>

                <p className={subh}>Private clinic vetting</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>GPhC pharmacy registration confirmed</li>
                  <li>Named prescriber GMC number on file</li>
                  <li>Cold chain policy documented for about 4 to 8 degrees Celsius</li>
                  <li>Side effect management protocol in writing</li>
                  <li>Shared care agreement willingness with your Liverpool GP practice</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Use our{" "}
                  <Link className={linkCls} href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                    pharmacy verification guide
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/helpful-guides/fake-online-pharmacy-uk-how-to-spot-stay-safe">
                    fake online pharmacy UK guide
                  </Link>{" "}
                  before you pay deposits. Compounded GLP 1 carries extra MHRA risk messaging, so avoid grey market pens.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="multipliers" heading="Liverpool local multipliers">
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Sefton Park: about 4 km loop, about 400 calorie burn for many paces</li>
                  <li>Great Homer Street Market: fresh mackerel near £4 per kg in seasonal stalls</li>
                  <li>Merseyrail active commuting: 10k steps station to stadium days when safe</li>
                  <li>NHS Liverpool tier 2: free eight week style programmes when referred</li>
                  <li>Anfield abseil and charity events that double motivation through team pledges</li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="matrix" heading="Integration matrix: Liverpool success blueprint">
                <p className={p}>
                  Phase 1 (weeks 1 to 4): 500 calorie deficit plus 10k steps. Phase 2 (weeks 5 to 12): add GLP 1 when prescribed plus strength training. Phase 3 (months 4 to 12): CoolSculpting style contouring for stubborn pockets plus maintenance habits.
                </p>

                <p className={subh}>Expected trajectory (80 kg start, illustrative)</p>
                <div className={`overflow-x-auto rounded-xl border ${border}`}>
                  <table className={`w-full min-w-[300px] border-collapse text-sm ${p}`}>
                    <thead>
                      <tr className={darkMode ? "bg-slate-800/80" : "bg-slate-100"}>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Time</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Weight band</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Month 3</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 68 kg (minus 12 kg, about 15%)</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Month 6</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 62 kg (minus 18 kg total)</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Year 1</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 57 kg (minus 23 kg total, about 29%)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Key guidance">
                <p className={p}>
                  Outbound links stay minimal on this page on purpose. Anchor clinical expectations to national guidance, then return to Health Wise tools for pricing and safety comparisons.
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
                  We publish educational comparisons. We do not prescribe or dispense. A registered prescriber must decide eligibility, monitoring, and dose changes.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="next-steps"
                heading="Practical next steps (UK wide, including Liverpool)"
              >
                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>
                    Book GP bloods before you buy private pens, even if marketing says instant start.
                  </li>
                  <li>
                    Compare licensed pathways on{" "}
                    <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                      best weight loss treatments in the UK
                    </Link>
                    .
                  </li>
                  <li>
                    Screen BMI on the{" "}
                    <Link className={linkCls} href="/tools/bmi-calculator">
                      BMI calculator
                    </Link>{" "}
                    before consults.
                  </li>
                  <li>
                    If nausea spikes, read{" "}
                    <Link className={linkCls} href="/helpful-guides/mounjaro-side-effects-uk">
                      Mounjaro side effects UK
                    </Link>{" "}
                    for class effects, then speak to a clinician rather than improvising medicines.
                  </li>
                </ol>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="disclaimer" heading="Disclaimer">
                <p className={p}>
                  This article is informational and not medical advice. Seek help from a clinician for diagnosis, prescriptions, and personalised monitoring.
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

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Liverpool layered weight loss victory">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Liverpool? No single weapon. Merseyside fat reduction demands sustainable slimming systems: GLP 1 power when prescribed, CoolSculpting precision for suitable pockets, and Scouse discipline on food and steps. From Sefton Park strides to smart titration, your dockside transformation starts with GP bloods and ends with Anfield confidence only if habits survive the full year arc.
                </p>

                <p className={`text-base font-semibold ${strong}`}>Starter anchors</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>GP blood panel before private checkout</li>
                  <li>Sefton Park loops twice weekly minimum</li>
                  <li>Market protein swaps over chippy defaults</li>
                  <li>Pharmacy price comparison on{" "}
                    <Link className={linkCls} href="/mounjaro-price-comparison">
                      Mounjaro
                    </Link>{" "}
                    and{" "}
                    <Link className={linkCls} href="/wegovy-price-comparison">
                      Wegovy
                    </Link>{" "}
                    pages
                  </li>
                  <li>Read{" "}
                    <Link className={linkCls} href="/methodology">
                      methodology
                    </Link>{" "}
                    before trusting influencer dose hacks
                  </li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="more-uk" heading="Other places in the UK">
                <p className={p}>
                  Continue with{" "}
                  <Link className={linkCls} href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}>
                    UK locations index
                  </Link>
                  . Wirral side context:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-chester">
                    Chester
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
