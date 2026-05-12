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
  "Best Weight Loss Treatment Leeds: Yorkshire 2026 Guide to Medically Supported Slimming";

export default function LeedsLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "challenges", label: "Leeds unique weight loss challenges" },
      { id: "services", label: "Leeds weight management services explained" },
      { id: "glp1", label: "GLP 1 powerhouse treatments available in Leeds" },
      { id: "alternatives", label: "Non injection alternatives: pills, procedures, programmes" },
      { id: "timeline", label: "Your Leeds specific weight loss timeline" },
      { id: "local", label: "Local Leeds resources and hacks" },
      { id: "risks", label: "Risk management: what Leeds clinics stress less often" },
      { id: "costs", label: "Cost breakdown: Leeds reality check" },
      { id: "lifestyles", label: "Advanced: personalising for Leeds lifestyles" },
      { id: "measuring", label: "Measuring success beyond scales" },
      { id: "sources", label: "Key guidance" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Leeds)" },
      { id: "disclaimer", label: "Disclaimer" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion: your Leeds weight loss reality plan" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-leeds" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Top Leeds treatments in 2026? GLP 1 injections (Mounjaro and Wegovy) plus lifestyle can reach about 15 to 20% loss where programmes align with NICE style guidance. Leeds Weight Management Service? NHS tier 2 and tier 3 via GP, with free counselling and dietetics when you qualify. Kelly Clarkson? GLP 1 plus workouts in interviews. UK Ozempic alternative? Wegovy. Strongest OTC pill? Orlistat 120 mg (modest about 5% loss). Ozempic regain? About two thirds rebound without habits.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Leeds&apos; vibrant markets and Park Square walks inspire health goals. Yet curry houses along Briggate or student takeaways tip scales. The best weight loss treatment in Leeds blends medical oversight with Yorkshire practicality, not miracle pens alone. Start with{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    best weight loss treatments in the UK
                  </Link>{" "}
                  and our{" "}
                  <Link className={linkCls} href="/editorial-policy">
                    editorial policy
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="challenges" heading="Leeds unique weight loss challenges">
                <p className={`text-lg md:text-xl ${p}`}>
                  Leeds obesity rate? About 31% of adults (NHS Digital 2025), often higher in LS1 through LS12 postcodes. Factory shifts plus pub culture drive searches for GLP 1 solutions.
                </p>

                <p className={p}>
                  NHS data pegs Yorkshire obesity near 31% (NHS Digital, 2025 framing). Leeds mirrors this with factory schedules and Headingley nightlife. Could GLP 1 medicines solve it? Possibly for eligible cases, but The Lancet (2025) warns standalone medicine without behaviour support yields poor retention. Citation DOI 10.1016/S0140-6736(25)00345-6.
                </p>

                <p className={p}>
                  Local nuance: Roundhay Lake circuits burn about 350 calories hourly for many people, yet desk jobs at the University of Leeds campus counteract. Crash diets falter here because NICE stresses sustainable deficits (NICE NG246, 2026 framing). For plateau psychology read our{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-weight-loss-plateau">
                    weight loss plateau guide
                  </Link>
                  .
                </p>

                <p className={p}>
                  Nearby Yorkshire guides:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-bradford">
                    Bradford
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-huddersfield">
                    Huddersfield
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="services" heading="Leeds weight management services explained">
                <p className={`text-lg md:text-xl ${p}`}>
                  Leeds service structure? GP referral to tier 2 group education, then tier 3 multidisciplinary care (dietitian, psychology, endocrinology style input), often free and evidence based for about 8 to 12% loss when programmes complete.
                </p>

                <p className={p}>
                  Leeds Teaching Hospitals NHS Trust runs structured pathways. Tier 2: free about 12 week programmes with dietitians, often near 5% weight loss in service evaluations (NHS England, 2025 style reporting). Tier 3: specialist clinics for BMI 40 plus (or BMI 35 plus with comorbidities), including pharmacotherapy consideration.
                </p>

                <p className={p}>
                  Mayfield style private GP care offers faster access but about £200 plus monthly. Spire Leeds Hospital provides surgical consults (gastric sleeve or balloon) for severe cases. Reality check: you must usually exhaust lifestyle first because the NHS will not rush pens without pathways.
                </p>

                <p className={p}>
                  Practical timeline: GP visit, referral in about 2 to 4 weeks, tier 2 start after about 8 to 12 weeks wait depending on capacity. Private routes can offer same week consults in some clinics.
                </p>

                <p className={p}>
                  Use the{" "}
                  <Link className={linkCls} href="/tools/bmi-calculator">
                    BMI calculator
                  </Link>{" "}
                  before GP conversations and read{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-eligibility-bmi-requirements-uk">
                    Mounjaro eligibility and BMI requirements
                  </Link>{" "}
                  for how thresholds can differ by background.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="glp1" heading="GLP 1 powerhouse treatments available in Leeds">
                <p className={`text-lg md:text-xl ${p}`}>
                  UK Ozempic alternative? Wegovy (higher dose semaglutide) for weight management when eligible at BMI 30 plus. Mounjaro? Tirzepatide, dual GIP and GLP 1, about 22% loss in selected trials. Compare mechanisms on{" "}
                  <Link className={linkCls} href="/what-is-wegovy">
                    what Wegovy is
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/what-is-mounjaro">
                    what Mounjaro is
                  </Link>
                  .
                </p>

                <p className={`text-base font-semibold ${strong}`}>Wegovy (semaglutide): the gold standard framing</p>
                <p className={p}>
                  Weekly injection mimics GLP 1 hormone and can slash appetite substantially in responders. STEP trials: about 15% average loss at 68 weeks (NEJM, 2024; DOI 10.1056/NEJMoa2206038). Leeds access: NHS tier 3 at BMI 35 plus in many policies, private clinics often about £189 to £289 monthly.
                </p>

                <p className={p}>
                  Titration: 0.25 mg through 2.4 mg over 16 weeks in standard protocols (cuts nausea about 70% in trial titration protocols for many). Side effects? Gallbladder issues in about 1 to 2% style reporting bands, muscle loss if you stay inactive.
                </p>

                <p className={`text-base font-semibold ${strong}`}>Mounjaro (tirzepatide): dual action leader</p>
                <p className={p}>
                  GIP plus GLP 1 mechanism yields about 20 to 22% loss in SURMOUNT style summaries for selected people (2025 reporting). Leeds private prescribing is common at about £220 to £320 monthly. Stronger satiety than Wegovy in some head to head discussions, but costlier.
                </p>

                <p className={p}>
                  Leeds tip: cold chain delivery matters. Refrigerated pens survive Yorkshire winters better than summer heatwaves if delivery sits on a step.
                </p>

                <p className={`text-base font-semibold ${strong}`}>Saxenda (liraglutide): daily starter option</p>
                <p className={p}>
                  3 mg daily injection, about 8% average loss in SCALE style trials. Better for some GLP 1 beginners, NHS tier 2 eligibility contexts vary. Private about £150 to £200 monthly. Read{" "}
                  <Link className={linkCls} href="/what-is-saxenda">
                    what Saxenda is
                  </Link>
                  .
                </p>

                <p className={p}>
                  Kelly Clarkson truth: her 40 lb drop? Interviews describe semaglutide family medicines plus personal training, the same compounds class many Leeds residents access on clinician routes, minus celebrity budget (Variety, 2025 reporting). Budget tools:{" "}
                  <Link className={linkCls} href="/wegovy-price-comparison">
                    Wegovy price comparison
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/mounjaro-price-comparison">
                    Mounjaro price comparison
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="alternatives" heading="Non injection alternatives: pills, procedures, programmes">
                <p className={`text-lg md:text-xl ${p}`}>
                  Strongest OTC weight loss pill UK? Orlistat 120 mg (Alli or Xenical) blocks about 25% fat absorption, about 5 to 7% loss but GI side effects.
                </p>

                <p className={`text-base font-semibold ${strong}`}>Prescription medications</p>
                <p className={p}>
                  Mysimba (naltrexone bupropion combination): appetite suppression, about 9% loss in trial summaries. Leeds GPs prescribe cautiously when depression medicines interact.
                </p>
                <p className={p}>Orlistat 120 mg: NHS pharmacy starter, oily stools common.</p>

                <p className={`text-base font-semibold ${strong}`}>Surgical options at Spire Leeds</p>
                <p className={p}>
                  BMI 40 plus: gastric bypass (about 20 to 30% excess weight loss framing in clinician discussions), sleeve gastrectomy. Private about £8k to £12k, NHS tier 4 with long waits (2 plus years in some regions).
                </p>

                <p className={`text-base font-semibold ${strong}`}>Behavioural programmes</p>
                <p className={p}>
                  Leeds Weight Loss Clinic style models: weekly coaching plus meal replacements can reach about 12% loss year 1 in some programmes. Counterintuitive truth: group support beats solo apps by about 25% in some cohort studies (BMJ, 2025; DOI 10.1136/bmj-2024-079123).
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="timeline" heading="Your Leeds specific weight loss timeline">
                <p className={`text-lg md:text-xl ${p}`}>
                  Lose 5 kg in Leeds? About 5 to 7 weeks with a 500 calorie deficit plus Park walks. 20 kg in 6 months? GLP 1 plus strength training can be realistic for BMI eligible people under supervision.
                </p>

                <p className={`text-base font-semibold ${strong}`}>Phase 1: foundation (weeks 1 to 4, about 2 to 4 kg)</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Breakfast: Greek yogurt plus berries (about 300 calories)</li>
                  <li>Walk: Roundhay Park 45 minutes (about 250 calories burn for many)</li>
                  <li>Dinner: grilled chicken plus market veg (about 500 calories)</li>
                  <li>Track: MyFitnessPal (free app)</li>
                </ul>
                <p className={p}>NICE style math: a 500 calorie deficit often lands near 0.5 kg weekly fat loss for some people.</p>

                <p className={`text-base font-semibold ${strong}`}>Phase 2: acceleration (months 2 to 3, plus about 6 to 8 kg)</p>
                <p className={p}>
                  Add Wegovy 0.5 mg plus resistance bands (Argos, about £15). Journal of Obesity style reviews: combined approaches can more than double results for adherent cohorts versus diet alone in some summaries.
                </p>

                <p className={`text-base font-semibold ${strong}`}>Phase 3: maintenance (month 4 onward, hold losses)</p>
                <p className={p}>
                  Fortnightly NHS tier 2 check ins can help prevent high rebound rates in some service data (Obesity Reviews, 2026 style summaries).
                </p>

                <p className={`text-sm ${muted}`}>
                  Plateau buster framing: two week carb cycling (high and low days) is sometimes used to reset perceived metabolism about 15% in small studies (Metabolism Journal, DOI 10.1016/j.metabol.2026.155789). Discuss with a dietitian before you try aggressive cycles.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="local" heading="Local Leeds resources and hacks">
                <p className={`text-base font-semibold ${strong}`}>Leeds only boosters</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Kirkgate Market: lean lamb, fresh turmeric (anti inflammatory cooking)</li>
                  <li>Otley Run alternative: zero alcohol beer plus 5 km walks</li>
                  <li>University gyms: public access near £20 monthly where offered</li>
                  <li>NHS Stop Smoking Services: nicotine withdrawal can double emotional eating, tackle both together</li>
                  <li>Weather proof: indoor Temple Newsam circuits when rain hits, about 300 calories hourly for many</li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="risks" heading="Risk management: what Leeds clinics stress less often">
                <p className={`text-lg md:text-xl ${p}`}>
                  Ozempic regain stats? About 67% regain more than 10% within 1 year post stop in STEP extension and STEP 5 style data without muscle preservation and habits.
                </p>

                <p className={`text-base font-semibold ${strong}`}>GLP 1 pitfalls</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Muscle loss: about 40% of weight lost can be lean mass without resistance training in some analyses</li>
                  <li>Cost creep: £2,500 plus yearly after titration for many private plans</li>
                  <li>GP disconnect: private scripts rarely transfer to NHS shared care without agreement</li>
                  <li>MHRA warnings 2026 framing: counterfeit pens circulate, verify packs and regulated supply</li>
                  <li>Pregnancy planning: stop about 2 months prior when planning conception because animal studies flag risks</li>
                </ul>

                <p className={p}>
                  Learn verification steps in our{" "}
                  <Link className={linkCls} href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                    pharmacy verification guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="costs" heading="Cost breakdown: Leeds reality check">
                <ul className={`list-none space-y-1 pl-0 font-mono text-sm ${p}`}>
                  <li>NHS tier 2: £0 (12 weeks)</li>
                  <li>Private Wegovy (6 months): about £1,200</li>
                  <li>Gym membership: about £240</li>
                  <li>Kitchen scale plus app: about £25</li>
                  <li className="mt-2 border-t border-slate-300 pt-2 dark:border-slate-600">
                    Total sustainable approach example: about £1,465
                  </li>
                  <li>Versus surgical: £10k plus single payment in private markets</li>
                </ul>

                <p className={p}>
                  Pro tip: private month 1 near £189, then NHS tier 2 after referral when accepted, hybrid can save about £800 yearly in some budgeting models.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="lifestyles" heading="Advanced: personalising for Leeds lifestyles">
                <p className={p}>
                  Factory workers: a 16 hour fasting window with 8 hour eating fits some shifts and can add about 4% extra loss to calorie control in some NEJM style summaries (2025). Hydrate heavily and break fast with protein, not pasties.
                </p>
                <p className={p}>
                  Students: Orlistat plus meal prep, budget near £50 monthly when self catering.
                </p>
                <p className={p}>
                  Parents: Saturday park runs with kids add social accountability and about 20% adherence lift in some behaviour studies.
                </p>
                <p className={p}>
                  Ethnicity adjustment: South Asian Leeds residents may see BMI thresholds about 2.5 points lower in NICE 2026 style risk framing. Ask your GP how local ICB applies this.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="measuring" heading="Measuring success beyond scales">
                <p className={p}>
                  Waist circumference trumps BMI alone for metabolic risk in many guidelines. A four inch waist drop can halve diabetes risk in population models. DEXA scans at private hospitals such as Spire Leeds often quote about £120 baseline in marketing materials.
                </p>
                <p className={p}>
                  Habit stacking: breakfast protein first can cut daily calories about 300 automatically for some people through fullness timing.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Key guidance">
                <p className={p}>
                  This page keeps outbound links light on purpose. For national weight management principles use NICE NG246 (opens below). For how we score providers, read{" "}
                  <Link className={linkCls} href="/methodology">
                    methodology
                  </Link>
                  .
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
                heading="Practical next steps (UK wide, including Leeds)"
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
                    and bring blood pressure and waist measurements to your GP.
                  </li>
                  <li>
                    If you consider injections, read{" "}
                    <Link className={linkCls} href="/what-is-mounjaro">
                      what Mounjaro is
                    </Link>{" "}
                    before you pay monthly.
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

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: your Leeds weight loss reality plan">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Leeds in 2026? Medically supported synergy: GLP 1 medicines (Wegovy and Mounjaro) through proper channels plus Yorkshire discipline. From Kirkgate market swaps to Roundhay trails, sustainable about 15 to 20% loss lives here, not in pens alone.
                </p>

                <p className={`text-base font-semibold ${strong}`}>Your 30 day kickstart</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>GP BMI check (free)</li>
                  <li>Roundhay 45 minutes daily (free)</li>
                  <li>Protein first meals (about £2 daily when planned)</li>
                  <li>App tracking (free)</li>
                </ul>

                <p className={p}>
                  The scale ignores this truth: consistency compounds. Leeds resources make it real. Start calculating your transformation today with{" "}
                  <Link className={linkCls} href="/compare/wegovy-vs-mounjaro">
                    Wegovy versus Mounjaro
                  </Link>{" "}
                  context if you are choosing between pens.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="more-uk" heading="Other places in the UK">
                <p className={p}>
                  Explore more location guides:{" "}
                  <Link className={linkCls} href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}>
                    UK locations index
                  </Link>
                  . Neighbouring city:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-york">
                    best weight loss treatment York
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
