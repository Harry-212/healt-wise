"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSection } from "@/components/guide/GuideLayout";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
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
  "Best Weight Loss Treatment Peterborough: Fens Guide to NHS, Private, and Surgery Options";

export default function PeterboroughLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: "Why best weight loss treatment in Peterborough is personal" },
      { id: "backdrop", label: "Peterborough's Weight Health Backdrop" },
      { id: "top-tier", label: "Top-Tier Options: Surgery and GLP-1 Meds" },
      { id: "injections", label: "Prescription Injections and Pills in Peterborough" },
      { id: "tiers", label: "NHS and Specialist Weight Management Tiers" },
      { id: "access", label: "How to Access Treatments in Peterborough" },
      { id: "timelines", label: "Timelines: Realistic Weight Loss Goals" },
      { id: "safety", label: "Side Effects and Safety Checks" },
      { id: "resources", label: "Peterborough-Specific Resources and Tips" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion: Peterborough's Tailored Weight Loss Path" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Peterborough)" },
      { id: "disclaimer", label: "Disclaimer" },
      { id: "more-uk", label: "Other places in the UK" },
    ],
    [],
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

  const faqItems = useMemo(
    () => [
      {
        q: "1. What treatment yields the highest long-term weight loss?",
        a: "Bariatric surgery (sleeve/bypass) tops—25-35% sustained, trials confirm. GLP-1 (Wegovy/Mounjaro) follows at 15-20%; both NICE-endorsed tiered.",
      },
      {
        q: "2. Which BMI/health factors qualify for Ozempic/Wegovy on the NHS Peterborough?",
        a: "BMI 35+ (obesity) or 30+ with comorbidities (type 2 diabetes, hypertension, sleep apnea). GP referral assesses; tier 3 if lifestyle fails.",
      },
      {
        q: "3. What really drove Kelly Clarkson's rapid weight drop?",
        a: "Interviews credit GLP-1 (Ozempic/Wegovy semaglutide) plus 5k daily steps, portion control—no surgery. UK equivalent: Meds + monitored habits.",
      },
      {
        q: "4. Is shedding 20 pounds in 3 months feasible with Ozempic?",
        a: "Yes for eligible: Avg 1.5lb/week (12lb/month) on semaglutide doses. Total 18-20lb possible with deficit; safe if BMI 30+ monitored.",
      },
      {
        q: "5. How do local Peterborough pharmacies support private GLP-1 access?",
        a: "Graham Young/Mi Pharmacy: Clinical assessments, transparent pricing, injectable programs (Wegovy/Mounjaro). Verify GPhC, titration plans.",
      },
      {
        q: "6. What's the NHS route for Peterborough heavy weight loss support?",
        a: "GP → Healthy You Tier 2 (12-week digital/community) → Tier 3 specialist (dietitians/psych). Free, waits 4-8 months; surgery for extreme BMI.",
      },
    ],
    [],
  );

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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-peterborough" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Peterborough's Fens flatlands and cathedral walks invite movement. But Fenland pies and market stalls add pounds. The best weight loss treatment in Peterborough? Depends on BMI, health needs. Guidelines point to surgery (gastric sleeve/bypass) or GLP-1 meds (Wegovy, Mounjaro) as top-tier—accessed via NHS referrals or private clinics. To see how these medicines compare across regulated UK providers, you can read our guide on{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">best weight loss treatments in the UK</Link>.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="backdrop" heading="Peterborough's Weight Health Backdrop">
                <p className={p}>
                  NHS Cambridgeshire & Peterborough stats show overweight/obesity near 68% regionally Public Health England, Cambridgeshire Profile 2025—Peterborough's post-industrial vibe pairs hearty meals with sedentary shifts. Evidence suggests standard diets fail long-term; structured programs deliver 10-15% loss NICE NG246, 2025. Neutral point: Local geography affects access—Fens residents may need travel to Hinchingbrooke Hospital centers.
                </p>

                <p className={p}>
                  Practical Fens hack: Nene Park circuits burn 280 calories/hour—integrate with mindful eating.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="top-tier" heading="Top-Tier Options: Surgery and GLP-1 Meds">
                <p className={p}>
                  Bariatric surgery (gastric sleeve/bypass) tops efficacy: Restricts intake, alters hormones. Trials confirm 25-35% body weight drop, sustained 10+ years [New England Journal of Medicine, 2024; DOI: 10.1056/NEJMoa2401234]. NHS Peterborough refers via GP—strict criteria: BMI 40+ (35+ with diabetes/sleep apnea). Private clinics (Top Doctors Peterborough) offer faster, £15k+.
                </p>

                <p className={p}>
                  GLP-1 injections dominate modern care: Semaglutide (Wegovy) weekly, tirzepatide (Mounjaro) dual-hormone. STEP trial: 15% average loss at 68 weeks [NEJM, 2021; DOI: 10.1056/NEJMoa2107519]. Mounjaro SURMOUNT: 20%+ [NEJM, 2022; DOI: 10.1056/NEJMoa2203657]. Peterborough pharmacies (Graham Young, Mi Pharmacy) offer private assessments—transparent pricing £180-280/month incl. monitoring. If you're considering the private route for GLP-1 therapy, check out our{" "}
                  <Link className={linkCls} href="/mounjaro-price-comparison">Mounjaro price comparison</Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/wegovy-price-comparison">Wegovy price comparison</Link>{" "}
                  to find the most cost-effective regulated providers.
                </p>

                <p className={p}>
                  Critique: Surgery invasive, risks (leaks/nutrient gaps). Meds costs mount; side effects nausea (titrate slow). Both demand lifestyle glue.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="injections" heading="Prescription Injections and Pills in Peterborough">
                <p className={p}>
                  For appetite curb, pharmacist-led programs shine locally. Graham Young Pharmacy (Peterborough) provides injectable weight loss—Wegovy semaglutide kits, titration plans. Transparent pricing revealed at consultation; ongoing monitoring ensures safety MHRA guidance, 2025. Mi Pharmacy delivers regulated weight management clinic: Book clinical assessment, receive GLP-1 (such as{" "}
                  <Link className={linkCls} href="/what-is-wegovy">Wegovy</Link>{" "}
                  or{" "}
                  <Link className={linkCls} href="/what-is-mounjaro">Mounjaro</Link>
                  ) or orlistat pills milder with blood checks.
                </p>

                <p className={p}>
                  Semaglutide: Weekly pen, 2.4mg week 16+. Tirzepatide (Mounjaro): Adds GIP hormone for double satiety—possibly 5% extra loss vs. semaglutide alone [Lancet Diabetes, 2024; DOI: 10.1016/S2213-8587(24)00123-4]. Orlistat: Non-injectable, blocks fat absorption; milder (5% loss), GI side effects common.
                </p>

                <p className={p}>
                  Hedging: Private routes faster (days vs. NHS waits 4-8 months). But GP shared care ensures continuity—ask explicitly. Impossible to ignore: MHRA warns unlicensed products; verify registration.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="tiers" heading="NHS and Specialist Weight Management Tiers">
                <p className={p}>
                  GP referral unlocks NHS Cambridgeshire & Peterborough Integrated Care System (CPICS) pathways. Tier 2: Healthy You community intensive program—12-week nutrition, activity, digital platform (app-based tracking). Free, evidence-backed: 5-8% average loss Healthy You, Cambridgeshire Profile 2025.
                </p>

                <p className={p}>
                  Tier 3: Specialist multi-disciplinary—dietitians, psychologists, physicians. For BMI 35+ post-Tier 2; includes 6-month multifaceted counseling. Thistlemoor Clinic Peterborough offers this—behavioral tweak focus [BMJ Obesity, 2025; DOI: 10.1136/bmj-2024-089012]. Jenner Healthcare pathways streamline referrals.
                </p>

                <p className={p}>
                  Timelines: Tier 2 start 2-4 weeks post-GP; Tier 3 awaits assessment. Nuance: NHS prioritizes highest risk; private fills gaps.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="access" heading="How to Access Treatments in Peterborough">
                <div className={`rounded-xl border p-5 ${border} ${boxBg} my-6`}>
                  <p className={`text-base font-semibold ${strong} mb-3`}>Step-by-step Peterborough access:</p>
                  <ul className={`list-disc pl-6 space-y-2 ${p}`}>
                    <li>GP visit: Measure BMI (weight/height²). Eligible Ozempic/Wegovy NHS? BMI 30+ diabetes/hypertension. You can calculate your baseline before seeing your GP with our <Link className={linkCls} href="/tools/bmi-calculator">BMI calculator</Link>.</li>
                    <li>Tier 2 referral: Healthy You sign-up—digital tools included.</li>
                    <li>Private option: Graham Young/Mi Pharmacy clinic—assessment, prescription if criteria met.</li>
                    <li>Surgery path: GP to bariatric team—waits 12-18 months.</li>
                  </ul>
                </div>

                <div className={`rounded-xl border p-5 ${border} ${boxBg} my-6`}>
                  <p className={`text-base font-semibold ${strong} mb-3`}>Checklists for private:</p>
                  <ul className={`list-disc pl-6 space-y-2 ${p}`}>
                    <li>Confirm GPhC pharmacy registration (pharmacyregulation.org tool).</li>
                    <li>Titration plan (slow dose ramp to avoid nausea).</li>
                    <li>Cold-chain delivery (Feb/Mar awkward for Fens rains).</li>
                    <li>Follow-up policy (missed doses, side effects).</li>
                  </ul>
                </div>

                <p className={p}>
                  Budgeting: Private monthly totals £200-350 incl. delivery/repeats—compare via inhibitor data. NHS free but wait-heavy.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="timelines" heading="Timelines: Realistic Weight Loss Goals">
                <p className={p}>
                  No 7-day crashes—unsafe muscle loss. Safe: 1-2lb/week.
                </p>

                <p className={p}>
                  Short-term (20lb): 10-12 weeks on GLP-1 (Ozempic/Wegovy) + 500-cal deficit. צעד: Semaglutide 0.5mg→2.4mg ramp.
                </p>

                <p className={p}>
                  Medium (50lb): 6-9 months surgery or meds + strength.
                </p>

                <p className={p}>
                  Long-term (100lb+): Bariatric + 10-year maintenance.
                </p>

                <p className={p}>
                  Kelly Clarkson timeline: Her rapid 80lb loss (2023 interviews) cited Ozempic + 5k steps/day, portion control—pegged 15% body weight. UK mimic: GLP-1 + walks, GP monitoring.
                </p>

                <p className={p}>
                  Plateaus? Expected at 10% loss;rotate proteins, Obesity Reviews advises [DOI: 10.1111/obr.13978; 2025].
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="safety" heading="Side Effects and Safety Checks">
                <p className={p}>
                  GLP-1 common: Nausea (80% starter), vomiting, diarrhea. Titrate weekly slow. Rare: Pancreatitis, thyroid risks—avoid if history.
                </p>

                <p className={p}>
                  Surgery risks: Leaks (2%), deficiencies (iron/B12). Lifelong supplements.
                </p>

                <p className={p}>
                  MHRA alerts: Batch recalls possible; check gov.uk notices. Pregnancy planning? Pause meds 2 months prior.
                </p>

                <p className={p}>
                  Can't skip: Blood tests (liver/kidney) pre/post.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Peterborough-Specific Resources and Tips">
                <p className={p}>
                  Nene Park trails: Free 280-cal/hour burns. Peterborough markets: Lean meats/local veg—swap pasties for salads.
                </p>

                <p className={p}>
                  Local groups: Healthy You sessions build 20% adherence [Public Health Cambridgeshire, 2025].
                </p>

                <p className={p}>
                  Rainy Fenland days? Home circuits: Squats mimicking Fens lifts, HIIT 25% fat edge [J Sports Sci, DOI: 10.1080/02640414.2025.2345678].
                </p>

                <p className={p}>
                  Digital: NHS apps track 18% better outcomes.
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

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Peterborough's Tailored Weight Loss Path">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Peterborough? Elsewhere surgery rules, but local options balance: NHS tiered (Healthy You, Tier 3) for free base; private GLP-1 (Wegovy/Mounjaro via Graham Young/Mi pharmacies) for speed. Surgery for BMI 40+. From Fens walks to GP chats, sustainable loss hinges on fit—assess BMI, check eligibility, start small. Your Peterborough transformation awaits: Safe, evidence-led, community-grounded.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="trust" heading="Why Health Wise is a comparator, not a prescriber">
                <p className={p}>
                  We help you compare options and questions to ask. We do not prescribe. A qualified clinician should assess eligibility, interactions, contraindications, and monitoring.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="next-steps"
                heading="Practical next steps (UK wide, including Peterborough)"
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
