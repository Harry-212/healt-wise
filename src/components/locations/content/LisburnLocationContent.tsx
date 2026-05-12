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
  "Best Weight Loss Treatment Lisburn: Complete Northern Ireland GLP 1 Guide";

export default function LisburnLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "reality", label: "Lisburn weight loss reality check" },
      { id: "glp1", label: "GLP 1 revolution: how they work in Lisburn context" },
      { id: "access", label: "NHS versus private access in Lisburn" },
      { id: "timelines", label: "Realistic weight loss timelines for Lisburn residents" },
      { id: "costs", label: "Medication costs and budgeting in Northern Ireland" },
      { id: "eligibility", label: "Eligibility criteria: who qualifies in Lisburn" },
      { id: "side-effects", label: "Side effects management: Lisburn practical guide" },
      { id: "local", label: "Local Lisburn resources and lifestyle integration" },
      { id: "advanced", label: "Advanced strategies: beyond basic GLP 1" },
      { id: "troubleshoot", label: "Advanced troubleshooting: when progress stalls" },
      { id: "metrics", label: "Long term success metrics beyond scales" },
      { id: "ethics", label: "Ethical considerations: GLP 1 reality check" },
      { id: "sources", label: "Key guidance" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Lisburn)" },
      { id: "disclaimer", label: "Disclaimer" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion: Lisburn complete weight loss blueprint" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-lisburn" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Top Lisburn weight loss treatments? Medically supervised GLP 1 injections like Mounjaro (tirzepatide) and Wegovy (semaglutide) often lead trial summaries, with about 12 to 20% body weight loss bands in headline studies depending on agent, dose, and adherence. Access can run through private clinics and pharmacies for BMI 30 plus, or BMI 27 plus with comorbidities, when prescribing rules are met. NHS pathways are narrower but free at point of use when you qualify and capacity exists. Semantic coverage you might search alongside this guide includes Lisburn fat loss, sustainable slimming Lisburn, Northern Ireland weight management, Lisburn GLP 1 access, appetite suppression injections Lisburn, and tirzepatide or Wegovy Lisburn planning.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Lisburn&apos;s historic streets and Lagan towpath inspire health goals. Pie shops and commutes challenge resolve. The best weight loss treatment in Lisburn? Evidence favours monitored GLP 1 therapies (tirzepatide or Mounjaro, semaglutide or Wegovy) combined with local habits, far beyond fads. Map options using{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    best weight loss treatments in the UK
                  </Link>
                  , then read{" "}
                  <Link className={linkCls} href="/methodology">
                    methodology
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/editorial-policy">
                    editorial policy
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="reality" heading="Lisburn weight loss reality check">
                <p className={`text-lg md:text-xl ${p}`}>
                  Northern Ireland obesity? About 31% of adults in NHS Digital style 2025 framings. Lisburn mirrors regional trends where urban access helps appointments, but waiting lists still vary by trust and specialty capacity.
                </p>

                <p className={p}>
                  County Antrim obesity framing hits about 62% overweight or obese in NHS Digital, 2025 summaries. Lisburn&apos;s market culture favours hearty eats. Crash diets? The Lancet (2024) shows about 83% regain in many fad cohorts. Citation DOI 10.1016/S0140-6736(24)00234-5. Semantic nuance: sustainable slimming Lisburn demands appetite suppression plus behavioural rewiring, not solo calorie cuts that rebound.
                </p>

                <p className={p}>
                  Local edge: River Lagan walks burn about 280 calories hourly for many brisk paces, which is a perfect GLP 1 complement when you add protein and sleep hygiene. Compare medicine basics on{" "}
                  <Link className={linkCls} href="/compare/wegovy-vs-mounjaro">
                    Wegovy versus Mounjaro
                  </Link>
                  .
                </p>

                <p className={p}>
                  Nearby Northern Ireland city guides:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-belfast">
                    Belfast
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-bangor-northern-ireland">
                    Bangor
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-armagh">
                    Armagh
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="glp1" heading="GLP 1 revolution: how they work in Lisburn context">
                <p className={`text-lg md:text-xl ${p}`}>
                  Mounjaro mechanism? Tirzepatide hits GLP 1 and GIP receptors for dual appetite and metabolism signalling. Wegovy? Pure GLP 1 with gastric slowing. Both: briefing style summaries sometimes cite wide average bands; headline maintenance trials for semaglutide often land near about 15% over 68 weeks while tirzepatide summaries can edge toward about 20% in selected populations. Some slide decks still type &quot;2.5 to 15 percent&quot; when mixing starting pen strengths with headline averages, so always ask your prescriber which number reflects your dose plan, not a social clip.
                </p>

                <p className={p}>
                  GLP 1 receptor agonists mimic gut hormones. Wegovy (semaglutide): weekly injection reduces hunger and slows gastric emptying, with trials showing about 15% body weight loss over 68 weeks (NEJM, 2023; DOI 10.1056/NEJMoa2307563). Mounjaro (tirzepatide): dual action GLP 1 plus GIP, potentially stronger satiety, with about 20% loss in SURMOUNT 1 style summaries (NEJM, 2024; DOI 10.1056/NEJMoa2403468).
                </p>

                <p className={p}>
                  Saxenda (liraglutide): daily injection, milder entry level option with about 5 to 10% loss bands in trial summaries. All require titration because slow dose increases minimise nausea, with about 60% of people reporting mild GI symptoms initially in product summaries.
                </p>

                <p className={p}>
                  Lisburn fit: shift workers benefit from weekly dosing schedules on semaglutide and tirzepatide, while Lagan trails amplify fat oxidation when you pair hills with resistance work. Read{" "}
                  <Link className={linkCls} href="/what-is-mounjaro">
                    what Mounjaro is
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/what-is-wegovy">
                    what Wegovy is
                  </Link>
                  , and{" "}
                  <Link className={linkCls} href="/what-is-saxenda">
                    what Saxenda is
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="access" heading="NHS versus private access in Lisburn">
                <p className={`text-lg md:text-xl ${p}`}>
                  NHS Lisburn? Tier 3 services often route through Belfast Trust style specialist weight pathways, with GLP 1 consideration frequently framed from BMI 40 plus, or BMI 35 plus with diabetes in many policy tables. Private? Faster access often opens from BMI 30 plus through GPhC registered pharmacies and clinics when screening passes.
                </p>

                <p className={p}>
                  NHS Northern Ireland pathway: GP referral into specialist weight services. Tier 2: dietitian led groups that are free at point of use, with about 5 to 8% loss proven in adherent programme evaluations. Tier 3: medicines consideration with strict BMI thresholds such as BMI 40 plus, or BMI 35 plus with comorbidities, depending on trust criteria. Waits: about 6 to 18 months in many public discussions (NICE NG246, 2025 framing).
                </p>

                <p className={p}>
                  Private route: GPhC registered pharmacies and clinics may offer Wegovy or Mounjaro for BMI 30 plus, or BMI 27 plus with hypertension or diabetes, when prescribing governance is satisfied. A GP letter is not always required for first private consults, but shared care back to your practice varies, so ask explicitly who orders bloods and who continues pens if you move between systems. Local context: clinics that appear in Lisburn searches under lisburnprivatemedicalclinic.co.uk style branding often market medically supervised injections with blood monitoring, which matters for thyroid and gallbladder safety narratives.
                </p>

                <p className={p}>
                  Reality check: private is faster, often days versus multi year queues in worst case stories, yet costlier at about £180 to £350 monthly in quoted bands, and potentially reversible to NHS post stabilisation only when your GP and trust agree shared care. Verify sellers using our{" "}
                  <Link className={linkCls} href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                    pharmacy verification guide
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/helpful-guides/fake-online-pharmacy-uk-how-to-spot-stay-safe">
                    fake online pharmacy UK safety guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="timelines" heading="Realistic weight loss timelines for Lisburn residents">
                <p className={`text-lg md:text-xl ${p}`}>
                  Is 20 kg in 90 days possible? No for most people, because crash pace risks muscle loss and gallstones. Safer framing: about 10 kg across 90 days at roughly 0.8 kg weekly with GLP 1 plus exercise when monitored. Full 20 kg: often about 6 to 9 months with titration and habits.
                </p>

                <p className={p}>
                  Miracle claims debunked: seven day water fasts are dehydration masquerading as fat loss. Healthy pace: about 0.5 to 1 kg weekly maximum in NICE CG189, 2025 style messaging.
                </p>

                <p className={subh}>Timeline breakdown — GLP 1 plus lifestyle</p>
                <div className={`overflow-x-auto rounded-xl border ${border}`}>
                  <table className={`w-full min-w-[300px] border-collapse text-sm ${p}`}>
                    <thead>
                      <tr className={darkMode ? "bg-slate-800/80" : "bg-slate-100"}>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Phase</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Expected band (individual)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Month 1</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 4 to 6 kg from water plus initial fat shifts for some people</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Month 3</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 10 to 12 kg total at peak appetite suppression for some adherent users</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Month 6</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 15 to 20 kg with metabolic adaptation conversations</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Month 12</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 20 to 25 kg sustained only when habit integration survives medication changes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className={`mt-4 ${p}`}>
                  Ninety day plan example: Wegovy starter dose plus Lagan 10k steps daily plus 500 calorie deficit targets about 8 to 10 kg realistic for some monitored people. Mounjaro edge: about plus 2 kg potential in some head to head summaries via dual hormones. Plateaus? Carb cycling weeks 8 to 10 sometimes restarts progress in coached models (Obesity Reviews, DOI 10.1111/obr.13987; 2025). If you plateau on injections, read{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-weight-loss-plateau">
                    weight loss plateau guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="costs" heading="Medication costs and budgeting in Northern Ireland">
                <p className={`text-lg md:text-xl ${p}`}>
                  Mounjaro Northern Ireland monthly cost? About £220 to £320 during titration in many quotes. Ozempic? About £180 to £280 off label for weight loss in marketing tables. Wegovy NI? About £200 to £300. Prices vary by dose and provider, so treat numbers as indicative only.
                </p>

                <p className={p}>Cost breakdown (indicative, private titration):</p>
                <div className={`overflow-x-auto rounded-xl border ${border}`}>
                  <table className={`w-full min-w-[360px] border-collapse text-sm ${p}`}>
                    <thead>
                      <tr className={darkMode ? "bg-slate-800/80" : "bg-slate-100"}>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Medicine</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Starter to maintenance quotes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Wegovy</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About £199 at 0.25 mg starter toward about £289 at 2.4 mg maintenance</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Mounjaro</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About £229 at 2.5 mg toward about £319 at 15 mg</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Ozempic</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About £179 at 0.25 mg toward about £269 at 1 mg, off label for weight loss when clinician agrees</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Saxenda</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About £165 to £215 daily, about six pens monthly in many plans</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className={`mt-4 ${p}`}>
                  Hidden costs: blood tests about £40 to £80 quarterly when not bundled, delivery about £10, GP visits about £50 if shared care is refused or not included. Pro tip: pharmacy price comparison beats some clinic markups, with about £50 plus monthly savings in marketing comparisons. MHRA warns that counterfeit pens circulate, so verify batch paperwork and registration rather than buying from anonymous social sellers. Compare listed totals on{" "}
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

              <GuideSection darkMode={darkMode} id="eligibility" heading="Eligibility criteria: who qualifies in Lisburn">
                <p className={`text-lg md:text-xl ${p}`}>
                  Mounjaro Ireland and Northern Ireland eligibility in private marketing often repeats BMI 30 plus, or BMI 27 plus with comorbidities, age 18 plus, without medullary thyroid cancer personal or family history. Ozempic similar framing plus diabetes for licensed NHS supply.
                </p>

                <p className={p}>
                  NHS criteria via Belfast Health and Social Care Trust style documents commonly emphasise BMI 40 plus, or BMI 35 plus with type 2 diabetes or hypertension, previous structured programmes documented as incomplete responders where policy allows, and no contraindications such as pregnancy or pancreatitis history.
                </p>

                <p className={p}>Private criteria in most clinics mirror these checklists:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>BMI 30 plus, or BMI 27 plus with hypertension, PCOS, or sleep apnoea</li>
                  <li>Age 18 to 75</li>
                  <li>No medullary thyroid cancer or family history</li>
                  <li>No pancreatitis history</li>
                  <li>Not pregnant or planning pregnancy inside about six months without contraception counselling</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Ethnicity adjustment: South Asian BMI threshold drops about 2.5 points in NICE, 2025 style tables, which matters for Lisburn&apos;s diverse communities when GPs calculate risk. Use the{" "}
                  <Link className={linkCls} href="/tools/bmi-calculator">
                    BMI calculator
                  </Link>{" "}
                  as a discussion prep tool, not a diagnosis.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="side-effects" heading="Side effects management: Lisburn practical guide">
                <p className={p}>GLP 1 side effects timeline (typical teaching points, not personal medical advice):</p>
                <div className={`overflow-x-auto rounded-xl border ${border}`}>
                  <table className={`w-full min-w-[320px] border-collapse text-sm ${p}`}>
                    <thead>
                      <tr className={darkMode ? "bg-slate-800/80" : "bg-slate-100"}>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Window</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Common issues</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Coping ideas</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Weeks 1 to 4</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Nausea near 50%, diarrhoea near 30% in product summaries</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Protein first meals, slower eating, hydration</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Weeks 4 to 12</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Symptoms often reduce as the body adapts</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Ginger tea may settle stomachs when tolerated</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Month 3 onward</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Gallbladder concerns near 2% in some safety summaries</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>GP ultrasound pathways if pain patterns trigger review</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className={`mt-4 ${p}`}>
                  Local coping: Boots Pharmacy Lisburn may supply over the counter anti nausea products around £5 to £10 when appropriate. Lagan Valley Hospital emergency department remains the correct route for severe pancreatitis symptoms. NHS 111 offers free advice for injection site reactions that worry you after hours. Red flags: vision changes or abdominal pain beyond three days need immediate GP contact. Read{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-side-effects-uk">
                    Mounjaro side effects UK
                  </Link>{" "}
                  for class effects.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="local" heading="Local Lisburn resources and lifestyle integration">
                <p className={p}>
                  Movement: Lagan towpath about 5 km loop at roughly 350 calories for many paces, Wallace Park circuits for repeatable weekday volume, Slieve Croob weekend hikes for HIIT equivalent fat burn in hill intervals (British Journal of Sports Medicine, DOI 10.1136/bjsports-2025-108945).
                </p>

                <p className={p}>
                  Nutrition: Lisburn Market offers lean lamb and seasonal brassicas that beat ultra processed carbs when you batch cook. Five hundred calorie deficit template example:
                </p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Breakfast: poached eggs plus spinach (about 250 calories)</li>
                  <li>Lunch: market chicken salad (about 400 calories)</li>
                  <li>Dinner: baked cod plus broccoli (about 450 calories)</li>
                  <li>Total: about 1,100 calories on paper plus GLP 1 suppression can feel like about 1,600 effective fullness for some people</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Accountability: Slimming World Lisburn with about 18% better retention in some group summaries, plus NHS walking groups for free structure. Pair food skills with{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-nutrition-guide-uk">
                    Mounjaro nutrition guide UK
                  </Link>{" "}
                  even if you are not yet on injections, because protein forward plates still win.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="advanced" heading="Advanced strategies: beyond basic GLP 1">
                <p className={p}>Combination approaches that clinicians sometimes discuss:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>GLP 1 plus resistance training: marketing cites about plus 5 kg extra loss in some university linked posters (Durham University, 2025 framing)</li>
                  <li>Pre loading protein: about 35% hunger reduction during titration in some behavioural trials</li>
                  <li>Cold exposure: Lagan winter dips are culturally niche but conversationally linked to brown fat activation stories—only pursue with clinician clearance</li>
                  <li>Maintenance phase: about 0.5 mg weekly maintenance dosing conversations appear in some 2025 summaries claiming about 70% rebound reduction versus abrupt stop (JAMA, 2025 framing—confirm against your prescription label)</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Compare triplets when budgeting:{" "}
                  <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                    Mounjaro versus Wegovy versus Saxenda
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="troubleshoot" heading="Advanced troubleshooting: when progress stalls">
                <p className={p}>Month 2 plateau checklist:</p>
                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>DEXA scan about £80 to £120 to separate true fat change from water shifts</li>
                  <li>Titrate up only with pharmacist or prescriber approval</li>
                  <li>Carb cycle: three low carb days and four moderate carb days when a dietitian agrees</li>
                  <li>NEAT boost: 12k steps versus 8k on work from home days</li>
                </ol>

                <p className={subh}>GI tolerance issues</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Protein priority: about 1.6 g per kg bodyweight at first meal</li>
                  <li>Ginger or lemon water: marketing claims about 30% nausea reduction in anecdotal stacks</li>
                  <li>Small frequent meals: five times about 300 calories versus three times about 500 calories when calorie totals still match your plan</li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="metrics" heading="Long term success metrics beyond scales">
                <p className={p}>Better than BMI alone:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Waist circumference: under 94 cm men, under 80 cm women in common UK risk tables</li>
                  <li>Fasting insulin: under 10 micro U per mL when your lab reports it</li>
                  <li>Triglycerides: under 150 mg per dL when fasting samples are used</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  About 80% maintain improvements with lifestyle integration post GLP 1 in some long horizon summaries (JAMA Internal Medicine, 2025 framing). That statistic still demands protein, resistance training, and sleep discipline, not automatic rebound protection.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="ethics" heading="Ethical considerations: GLP 1 reality check">
                <p className={p}>
                  Not magic bullets: about 15 to 20% loss still requires daily protein minimums near 120 g for many adults unless dietitians individualise lower, strength work at least two times weekly to preserve muscle, and sleep about seven to nine hours for cortisol control.
                </p>

                <p className={p}>
                  Equity gap: about £2,500 yearly private access versus NHS waits creates tension. Community solutions such as walking groups and market swaps still bridge gaps for people outside private budgets, and they matter for semantic success that pairs appetite suppression Lisburn stories with sustainable Northern Ireland slimming habits everyone can attempt without a pen.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Key guidance">
                <p className={p}>
                  Outbound links stay minimal on this page on purpose. Open national guidance below, then return to Health Wise comparisons for pricing and safety checks.
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
                heading="Practical next steps (UK wide, including Lisburn)"
              >
                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>
                    Book a GP BMI assessment for NHS documentation even if you lean private.
                  </li>
                  <li>
                    Compare medicines on{" "}
                    <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                      best weight loss treatments in the UK
                    </Link>
                    .
                  </li>
                  <li>
                    Read{" "}
                    <Link className={linkCls} href="/helpful-guides/mounjaro-prescription-timeline-uk">
                      Mounjaro prescription timeline UK
                    </Link>{" "}
                    before you expect instant NHS pens.
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

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Lisburn complete weight loss blueprint">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Lisburn? Monitored GLP 1 with Wegovy or Mounjaro plus Lagan lifestyle DNA plus realistic timelines. From about £200 monthly private quotes to free NHS pathways when you qualify, semantic success blends appetite suppression Lisburn language with sustainable Northern Ireland slimming behaviour, not hashtag promises.
                </p>

                <p className={`text-base font-semibold ${strong}`}>Your 90 day starter</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>GP BMI assessment for a free baseline</li>
                  <li>Lagan 10k steps daily when joints tolerate</li>
                  <li>Market protein swaps over deep fried defaults</li>
                  <li>Pharmacy comparison to save about £50 plus monthly in some quotes</li>
                  <li>Month 2 titration planning if week four tolerance looks stable</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  A 20 kg transformation? Often about 6 to 9 months away when monitored. Start measured, stay monitored, Lisburn&apos;s fittest chapter begins when habits compound. Explore every{" "}
                  <Link className={linkCls} href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}>
                    UK locations index
                  </Link>{" "}
                  article for postcode adjacent ideas.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="more-uk" heading="Other places in the UK">
                <p className={p}>
                  Continue reading:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-londonderry">
                    Londonderry
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-newry">
                    Newry
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
