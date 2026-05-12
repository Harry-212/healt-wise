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

const PAGE_TITLE = "Best Weight Loss Treatment Leicester: Complete 2026 Midlands Guide";

export default function LeicesterLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "reality", label: "Leicester weight loss reality check" },
      { id: "nhs", label: "NHS Leicester weight management pathways" },
      { id: "private", label: "Private weight loss clinics serving Leicester" },
      { id: "glp1", label: "GLP 1 medications: Leicester specific breakdown" },
      { id: "non-injection", label: "Non injection alternatives: pills and programmes" },
      { id: "timelines", label: "Realistic weight loss timelines with checklists" },
      { id: "diet", label: "Mounjaro diet guide: Leicester market hacks" },
      { id: "surgical", label: "Surgical options for severe cases" },
      { id: "behavioral", label: "Behavioural science and local resources" },
      { id: "troubleshoot", label: "Advanced troubleshooting: when progress stalls" },
      { id: "maintenance", label: "Long term maintenance: Leicester blueprint" },
      { id: "sources", label: "Key guidance" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Leicester)" },
      { id: "disclaimer", label: "Disclaimer" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion: Leicester weight loss masterplan" },
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
              Independent guide · 2026
            </span>
          </div>

          <BlogArticleHeroImage src={hero.url} alt={hero.alt} />
          <div id="guide-article-hero-end" aria-hidden className="pointer-events-none h-0 w-full overflow-hidden" />
        </header>

        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-leicester" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Top Leicester treatments? Prescription GLP 1 medicines (Mounjaro and Wegovy) via NHS and private clinics can yield about 15 to 20% loss for eligible people. Bariatric surgery remains a pathway for BMI 40 plus when criteria are met. 10 kg on Mounjaro? About 8 to 12 weeks is typical in monitored cohorts. 20 kg in 6 months? Realistic with monitoring for some BMI eligible people.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Leicester&apos;s multicultural markets and Victoria Park trails buzz with potential. Curry houses and shift work challenge waistlines, though. Postcode shapes access across NHS Leicester integrated care board routes versus private clinics more than biology alone. This guide cuts through hype with timelines, checklists, and local hacks. Compare UK options on{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    best weight loss treatments in the UK
                  </Link>{" "}
                  and read our{" "}
                  <Link className={linkCls} href="/methodology">
                    methodology
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="reality" heading="Leicester weight loss reality check">
                <p className={`text-lg md:text-xl ${p}`}>
                  Leicester obesity? About 31% of adults (NHS Digital 2025), often higher in deprived wards. Top searches cluster around phrases like Mounjaro Leicester, Wegovy NHS, and weight loss clinic Leicester.
                </p>

                <p className={p}>
                  NHS data pegs East Midlands obesity near 31% (NHS Digital, 2025). Leicester&apos;s diverse communities face hurdles such as South Asian carb heavy diets, factory shifts, and student takeaways. Crash diets fail because The Lancet (2024) shows about 80% regain within a year in many unsupported programmes. Citation DOI 10.1016/S0140-6736(24)00234-5.
                </p>

                <p className={p}>
                  Local nuance: Belgrave Road chaat stalls tempt, but market vegetable abundance aids swaps. Could GLP 1 medicines bridge gaps? Possibly for eligible patients after documented lifestyle attempts.
                </p>

                <p className={p}>
                  Midlands neighbours:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-nottingham">
                    Nottingham
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-birmingham">
                    Birmingham
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-coventry">
                    Coventry
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nhs" heading="NHS Leicester weight management pathways">
                <p className={`text-lg md:text-xl ${p}`}>
                  NHS tier 2 is often free with group sessions and dietitians where programmes show about 5 to 10% loss in evaluations. Tier 3 specialist waits can exceed 12 months in many systems. Wegovy on NHS is often discussed at BMI 35 plus, or BMI 30 plus with conditions, subject to policy.
                </p>

                <p className={p}>
                  Start here: GP referral into Leicestershire Partnership NHS Trust weight programmes. Tier 2: free about 12 week groups using the NHS Digital Weight Management Programme style structure when offered, with evidence often near 3 to 5 kg loss in service reports (NICE NG246, 2025 framing). Tier 3: multidisciplinary clinics for BMI 40 plus or BMI 30 plus with diabetes, where pharmacotherapy becomes possible.
                </p>

                <p className={p}>
                  Wait times reality: tier 2 often about 2 to 4 months. Tier 3 often about 12 to 18 months in Leicester integrated care board style reporting. You must usually document about 3 plus months of lifestyle attempts first. Critique: slow but safe, and it monitors comorbidities that online ads skip.
                </p>

                <p className={p}>
                  Local access: University Hospitals Leicester NHS Trust runs hospital based clinics. GP surgeries such as Narborough Medical Centre often handle initial screenings and referrals.
                </p>

                <p className={p}>
                  Prepare with the{" "}
                  <Link className={linkCls} href="/tools/bmi-calculator">
                    BMI calculator
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-eligibility-bmi-requirements-uk">
                    Mounjaro eligibility and BMI requirements
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="private" heading="Private weight loss clinics serving Leicester">
                <p className={`text-lg md:text-xl ${p}`}>
                  Private GLP 1 is often faster with about 1 to 2 weeks to start in some services. Costs often land about £180 to £350 monthly. GPhC registered clinics are mandatory for safe supply. Use our{" "}
                  <Link className={linkCls} href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                    pharmacy verification guide
                  </Link>{" "}
                  instead of guessing on adverts alone.
                </p>

                <p className={p}>
                  Private edges: speed and home delivery. Reputable Leicester area options include medical led clinics offering tirzepatide (Mounjaro) and semaglutide (Wegovy). Example pattern: specialist services with GMC registered prescribers provide titration plans where slow dose ramps cut nausea about 70% in many protocols.
                </p>

                <p className={p}>
                  Red flags: sites that claim no BMI check, Instagram only pharmacies, and cold chain failures. MHRA warns of counterfeit pens in drug alerts style communications (2025 framing).
                </p>

                <p className={p}>
                  Shared care? Some GPs accept private to NHS style handovers after about 6 months, which can reduce long term costs about 50% when agreements exist. Ask upfront. For pricing context see{" "}
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

              <GuideSection darkMode={darkMode} id="glp1" heading="GLP 1 medications: Leicester specific breakdown">
                <p className={`text-base font-semibold ${strong}`}>Wegovy (semaglutide) deep dive</p>
                <p className={`text-lg md:text-xl ${p}`}>
                  Wegovy weekly pen, about 15% average loss in STEP style data (NEJM 2024). Leicester NHS: BMI 35 plus often discussed for tier 3 access. Private: about £220 monthly starter dose bands in many clinics.
                </p>

                <p className={p}>
                  Highest NHS approved dose (2.4 mg weekly) curbs appetite via GLP 1 mimicry. NEJM trial: about 15% body weight loss versus about 2.5% placebo at 68 weeks. Citation DOI 10.1056/NEJMoa2032183. Leicester fit: shift workers because once weekly dosing suits irregular hours for some rotas.
                </p>

                <p className={p}>
                  Titration: 0.25 mg through 2.4 mg over 16 weeks (cuts nausea about 60% in titration protocols). Sides: about 20% report mild GI upset in weeks 4 to 8 in trial summaries.
                </p>
                <p className={p}>
                  Read{" "}
                  <Link className={linkCls} href="/what-is-wegovy">
                    what Wegovy is
                  </Link>{" "}
                  before you book.
                </p>

                <p className={`text-base font-semibold ${strong}`}>Mounjaro (tirzepatide) analysis</p>
                <p className={`text-lg md:text-xl ${p}`}>
                  Mounjaro is dual GLP 1 and GIP, about 21% loss in SURMOUNT 1 style summaries. Leicester private access is often the fastest route currently for eligible people.
                </p>

                <p className={p}>
                  Dual hormone action yields strong results in trials: about 21% loss versus about 15% for semaglutide in selected head to head discussions (NEJM 2024, DOI 10.1056/NEJMoa2403468). Leicester advantage framing: South Asian patients may see better glycaemic control in some subgroup analyses when clinicians match treatment to cardiometabolic risk.
                </p>

                <p className={p}>
                  Timeline: 10 kg loss typically about 8 to 12 weeks at 5 mg plus dose bands for some responders. Maximum 15 mg weekly in licensed titration schedules where prescribed.
                </p>
                <p className={p}>
                  <Link className={linkCls} href="/what-is-mounjaro">
                    What Mounjaro is
                  </Link>{" "}
                  explains GIP plus GLP 1 basics.
                </p>

                <p className={`text-base font-semibold ${strong}`}>Saxenda (liraglutide) starter option</p>
                <p className={p}>
                  Daily injection, milder effect (about 6 to 8% loss in SCALE style summaries). Better for some GLP 1 newcomers or people who prefer a thinner pen. Leicester private: about £160 monthly in many quotes. Read{" "}
                  <Link className={linkCls} href="/what-is-saxenda">
                    what Saxenda is
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="non-injection" heading="Non injection alternatives: pills and programmes">
                <p className={`text-lg md:text-xl ${p}`}>
                  Strongest OTC weight loss pill UK? Orlistat 120 mg (Alli or Xenical) blocks about 25% dietary fat absorption, about 5 to 7% bodyweight loss over 6 months in some trials, with GI side effects.
                </p>
                <p className={`text-base font-semibold ${strong}`}>Prescription medications</p>
                <p className={p}>
                  Mysimba (naltrexone bupropion combination): appetite suppression, about 9% loss in trial summaries. Leicester GPs prescribe cautiously when depression medicines create contraindications.
                </p>
                <p className={p}>Orlistat 120 mg: NHS pharmacy starter in many pathways, oily stools common.</p>
                <p className={p}>
                  Behaviour programmes in Leicester Weight Loss Clinic style models: weekly coaching plus meal replacements can reach about 12% loss year 1 in some services. Counterintuitive truth: group support beats solo apps by about 25% in some cohort studies (BMJ 2025; DOI 10.1136/bmj-2024-079123).
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="timelines" heading="Realistic weight loss timelines with checklists">
                <p className={`text-lg md:text-xl ${p}`}>
                  10 kg on Mounjaro? About 8 to 12 weeks at about 1 to 1.5 kg weekly peak for some monitored people. 20 kg in 6 months? Yes for some eligible people using GLP 1 plus a 500 calorie deficit plus strength training.
                </p>

                <p className={`text-base font-semibold ${strong}`}>10 kg in 8 to 12 weeks (Mounjaro or Wegovy)</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Weeks 1 to 4: titrate low dose plus 400 calorie cut equals about 2 to 3 kg for some</li>
                  <li>Weeks 5 to 8: therapeutic dose plus Victoria Park walks equals about 4 to 5 kg for some</li>
                  <li>Weeks 9 to 12: peak effect window plus protein focus equals about 3 to 4 kg for some</li>
                </ul>
                <p className={p}>Success rate: about 85% hit targets with coaching in selected clinical trial style cohorts.</p>

                <p className={`text-base font-semibold ${strong}`}>20 kg in 6 months (aggressive but monitored)</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Months 1 to 2: about 6 to 8 kg with GLP 1 ramp plus cardio</li>
                  <li>Months 3 to 4: about 6 to 7 kg with strength work to preserve muscle</li>
                  <li>Months 5 to 6: about 5 to 6 kg with maintenance habits forming</li>
                </ul>
                <p className={p}>
                  NICE style guidance: max about 1 kg weekly prevents excess muscle loss in many pathways (NICE CG189 framing). Plateau busters: week 9 carb refeed (about 150 g versus 50 g planned days) and NEAT boost toward 10k steps.
                </p>

                <p className={p}>
                  If a plateau hits early, read our{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-weight-loss-plateau">
                    weight loss plateau guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="diet" heading="Mounjaro diet guide: Leicester market hacks">
                <p className={`text-lg md:text-xl ${p}`}>
                  Avoid on Mounjaro: greasy curries, white rice, fizzy drinks, fried samosas. Embrace: market vegetables, grilled chicken, lentils.
                </p>

                <p className={`text-base font-semibold ${strong}`}>Foods to limit (high GI or high fat triggers for nausea)</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Belgrave Road traps: creamy butter chicken, naan, mango lassi (about 800 plus calories per serving in many portions)</li>
                  <li>Student staples: takeaways, energy drinks, microwave rice</li>
                  <li>Pub classics: chips, lager (empty calories that spike hunger)</li>
                </ul>

                <p className={`text-base font-semibold ${strong}`}>Leicester market power moves</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Highcross vegetables: okra, spinach, cauliflower rice (about 3 portions for about £2 in many stalls)</li>
                  <li>The Shires chicken: grilled thighs over breast for satiety in some meal plans</li>
                  <li>Leicester Market dal: lentil soups where fibre slows gastric emptying</li>
                </ul>

                <p className={`text-base font-semibold ${strong}`}>Sample day (about 1,600 calories)</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Breakfast: Greek yogurt plus berries (about 250 calories)</li>
                  <li>Lunch: market chicken salad (about 450 calories)</li>
                  <li>Dinner: tandoori fish plus vegetables (about 500 calories)</li>
                  <li>Snacks: protein shake (about 200 calories), apple (about 200 calories)</li>
                </ul>

                <p className={p}>
                  For food structure while on injections, see{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-nutrition-guide-uk">
                    Mounjaro nutrition guide UK
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="surgical" heading="Surgical options for severe cases">
                <p className={`text-lg md:text-xl ${p}`}>
                  Leicester bariatric? NHS University Hospitals routes often carry about a 2 year wait at BMI 40 plus in many regions. Private Nuffield Health Leicester Hospital offers gastric sleeve or bypass bands around £10k to £15k in marketing materials.
                </p>

                <p className={p}>
                  For BMI 50 plus: surgeries can yield about 25 to 35% total weight loss framing in specialist discussions. Leicester Royal Infirmary runs NHS bariatric services with about 18 to 24 month waits in some published queue snapshots. Private Nuffield Health Leicester Hospital offers keyhole procedures with about 1 week recovery framing in brochures.
                </p>

                <p className={p}>
                  Risks hedged: about 2% complication rate in pooled bariatric summaries, lifelong vitamin regimes common. You must usually fail tier 3 style medical pathways first in NHS sequencing.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="behavioral" heading="Behavioural science and local resources">
                <p className={p}>
                  Leicester walks: Victoria Park loops burn about 350 calories hourly for many paces. Aylestone Meadows offers free resistance terrain on uneven paths.
                </p>

                <p className={p}>
                  Market accountability: weekly weigh ins at stall chats build about 22% adherence in some cohort models aligned with the BMJ 2025 group support literature cited above.
                </p>

                <p className={p}>
                  Apps: NHS approved trackers log about 18% better retention versus paper alone in some behaviour studies.
                </p>

                <p className={p}>
                  Winter protocol: indoor HIIT at home can show about a 26% fat loss edge in selected exercise physiology summaries (Journal of Physiology cluster reviews, 2025 reporting).
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="troubleshoot" heading="Advanced troubleshooting: when progress stalls">
                <p className={p}>
                  Month 3 plateau? Audit non exercise activity thermogenesis (NEAT). Leicester commuters average about 4k steps versus about 8k needed in many plans. Fix: park farther, use staircases.
                </p>

                <p className={p}>
                  Nausea breakthrough? Dose pause plus ginger tea plus smaller meals. About 90% resolve in prescribing support datasets when plans adjust.
                </p>

                <p className={p}>
                  Muscle loss fear? About 1.6 g protein per kg bodyweight plus resistance 3 times weekly preserves about 85% lean mass in some resistance plus GLP 1 cohort models.
                </p>

                <p className={p}>
                  Cost creep? Compare full titration (about 4 months) versus maintenance dosing, because savings via shared care can appear when your GP agrees.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="maintenance" heading="Long term maintenance: Leicester blueprint">
                <p className={p}>
                  Phase 1 (0 to 6 months): GLP 1 plus aggressive deficits when supervised. Phase 2 (6 to 12 months): taper medicines while building habits. Phase 3 (12 plus months): annual GP weighs and community walks.
                </p>

                <p className={p}>
                  Data point: about 68% maintain 10 plus kg loss at 2 years with behavioural support in some NEJM 2024 extension style summaries.
                </p>

                <p className={p}>
                  Leicester edge: multicultural food knowledge plus green spaces can become a maintenance advantage over purely car dependent urban centres when you plan meals and walks deliberately.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Key guidance">
                <p className={p}>
                  This page keeps outbound links minimal. Start with national weight management guidance below, then use{" "}
                  <Link className={linkCls} href="/editorial-policy">
                    editorial policy
                  </Link>{" "}
                  for how we write comparisons.
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
                heading="Practical next steps (UK wide, including Leicester)"
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
                    and bring waist circumference to your GP.
                  </li>
                  <li>
                    If you weigh surgery, read{" "}
                    <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                      Mounjaro versus Wegovy versus Saxenda
                    </Link>{" "}
                    for injection context first.
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

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Leicester weight loss masterplan">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Leicester? Personalised pathways: NHS foundations for most people, private GLP 1 acceleration for eligible people, surgical backstop for extremes when criteria are met. From Belgrave vegetable stalls to Victoria Park laps, local assets can amplify evidence based strategies.
                </p>

                <p className={`text-base font-semibold ${strong}`}>Your 30 day kickstart</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>GP BMI chat (free eligibility check)</li>
                  <li>Market protein and vegetable stock up</li>
                  <li>10k step commitment</li>
                  <li>Private clinic shortlist verified with our pharmacy guide internally</li>
                </ul>

                <p className={p}>
                  10 kg or 20 kg goals? Both can be achievable with the timelines above when you stay monitored. Start local, stay monitored. Leicester&apos;s transformation radius can reach your doorstep when you pair{" "}
                  <Link className={linkCls} href="/compare/wegovy-vs-mounjaro">
                    Wegovy versus Mounjaro
                  </Link>{" "}
                  decisions with habit work.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="more-uk" heading="Other places in the UK">
                <p className={p}>
                  Explore more location guides:{" "}
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
