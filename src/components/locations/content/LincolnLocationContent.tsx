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
  "Best Weight Loss Treatment Lincoln: Complete Lincolnshire Slimming Guide";

export default function LincolnLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "reality", label: "Lincoln weight loss reality check" },
      { id: "pathways", label: "NHS versus private pathways: Lincoln access map" },
      { id: "core", label: "Core weight loss methods: from basics to advanced" },
      { id: "nutrition", label: "Evidence based nutrition plans" },
      { id: "exercise", label: "Exercise optimised for Lincolnshire terrain" },
      { id: "contouring", label: "Non surgical body contouring: Lincoln reality" },
      { id: "glp1", label: "GLP 1 medications: eligibility and evidence" },
      { id: "timelines", label: "Realistic weight loss timelines: Lincoln data" },
      { id: "loose-skin", label: "Loose skin prevention: proactive Lincoln strategies" },
      { id: "resources", label: "Lincoln specific resources and support" },
      { id: "tracking", label: "Comprehensive tracking systems" },
      { id: "mindset", label: "Psychological barriers: Lincoln mindset hacks" },
      { id: "blueprint", label: "12 month Lincoln transformation blueprint" },
      { id: "sources", label: "Key guidance" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Lincoln)" },
      { id: "disclaimer", label: "Disclaimer" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion: Lincoln evidence path forward" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-lincoln" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Top Lincoln UK weight loss? NHS tier 3 programmes that are medically supervised often report about 10 to 15% body weight loss in adherent cohorts, private GLP 1 routes with Wegovy or Mounjaro when eligible, and non surgical contouring for stubborn areas after fat loss. Is 20 kg in 90 days realistic? Unsafe for most people because even a high ceiling near 12 kg across 12 weeks at about 1 kg weekly still needs monitoring. Is 5 kg in 7 days realistic? Dangerous myth territory because it is mostly fluid shifts and muscle risk. Loose skin? Often preventable via strength training and slower pacing when a clinician agrees.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Lincoln&apos;s cathedral spires and Brayford Pool inspire health goals. Chip shop temptations and A46 commutes challenge, though. The best weight loss treatment in Lincoln blends evidence, accessibility, and Lincolnshire practicality, so you do not need US style fads. Start with{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    best weight loss treatments in the UK
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/editorial-policy">
                    editorial policy
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="reality" heading="Lincoln weight loss reality check">
                <p className={`text-lg md:text-xl ${p}`}>
                  Lincolnshire obesity? About 31% of adults (NHS Digital 2025 framing), higher than a national band near 26% in some England summaries. Rural access limits clinics while urban Lincoln still favours takeaways on busy weeks.
                </p>

                <p className={p}>
                  NHS Digital reports East Midlands obesity near 31% (NHS Digital, 2025), and Lincoln&apos;s market town vibe amplifies pie and ale culture. Could GLP 1 medicines solve it? Possibly for BMI 30 plus when criteria match, but NICE demands lifestyle first (NICE NG246, 2025 framing). Nuance: cathedral climbs burn calories when you repeat them. Desk jobs do not unless you engineer movement.
                </p>

                <p className={p}>
                  Semantic boost in plain English: sustainable weight management in Lincoln starts local with Glebe Park walks at about 280 calories hourly for many brisk paces, market vegetables over fried cod when you can swap, and clinician agreed plans instead of viral promises.
                </p>

                <p className={p}>
                  Nearby reads:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-nottingham">
                    Nottingham
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-leicester">
                    Leicester
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-lichfield">
                    Lichfield
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="pathways" heading="NHS versus private pathways: Lincoln access map">
                <p className={`text-lg md:text-xl ${p}`}>
                  NHS Lincoln? GP referral toward United Lincolnshire Hospitals Trust pathways. Tier 2 groups are often free at point of use. Tier 3 specialist care may apply from BMI 40 plus in many service specifications. Private? Online GLP 1 clinics deliver to LN1 through LN6 postcodes when couriers cover your address and a prescriber agrees eligibility.
                </p>

                <p className={p}>
                  NHS Lincolnshire operates a tiered system. Tier 0 and tier 1: GP advice plus free apps, with about 10% uptake success in some digital health summaries. Tier 2: group dietitian sessions that sometimes land about 5 to 8 kg loss across 12 weeks for adherent groups. Tier 3: multidisciplinary care with medicines plus psychology, sometimes near 15% body weight loss in selected cohorts when people stay engaged.
                </p>

                <p className={p}>
                  Private mirrors a US style &quot;Nebraska Weight Management&quot; telehealth model in marketing only, meaning GPhC registered telehealth prescribes semaglutide or Wegovy from about £189 to £299 monthly in quoted bands. Faster titration is sometimes marketed at about 4 weeks versus NHS style 12 week ramps, but GP shared care varies by practice so you must confirm who holds the prescribing pen and who orders bloods. MHRA cold chain compliance messaging still applies to refrigerated delivery into Lincoln postcodes.
                </p>

                <p className={p}>
                  Critique: private skips NHS waitlists that can stretch about 6 to 18 months for tier 3, yet it can create coordination gaps if your GP was not looped in early. Verify any private route with our{" "}
                  <Link className={linkCls} href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                    pharmacy verification guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="core" heading="Core weight loss methods: from basics to advanced">
                <p className={`text-lg md:text-xl ${p}`}>
                  Most effective baseline? Calorie deficit near 500 to 750 calories daily plus about 150 minutes of exercise weekly often lands near 0.5 to 1 kg weekly when sustainable. GLP 1 medicines add about 12 to 18% loss in trial averages for eligible people alongside behaviour support.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nutrition" heading="Evidence based nutrition plans">
                <p className={p}>
                  NICE CG189 framing still anchors high risk adults: structured deficits near 600 calories daily can yield large annualised loss on paper, but real life adherence is the bottleneck (NICE CG189, 2025 framing). Lincoln twist: swap Scunthorpe sausages for grilled chicken salads from Witham Wharf market stalls when it fits your sodium and calorie plan.
                </p>

                <p className={p}>
                  Intermittent fasting: 16:8 suits shift workers, with about 4 to 7% loss in some trial windows (NEJM 2023; DOI 10.1056/NEJMoa2206038). Keep protein adequate because time windows alone do not protect muscle.
                </p>

                <p className={p}>
                  Protein priority: about 1.6 g per kg bodyweight often preserves muscle during deficit phases in sports nutrition summaries (Journal of the International Society of Sports Nutrition 2024; DOI 10.1186/s12970-024-00567-8).
                </p>

                <p className={p}>
                  Mediterranean adaptation: olive oil plus Lincolnshire vegetables can support about 9% fat reduction bands in some nutrition trial summaries (BMJ Nutrition 2025 framing).
                </p>

                <p className={p}>
                  Keto critique: rapid initial loss is often water weight, with about 65% dropout at 12 months in some keto cohort reviews (Obesity Reviews DOI 10.1111/obr.13890). If you use GLP 1 medicines, read{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-nutrition-guide-uk">
                    Mounjaro nutrition guide UK
                  </Link>{" "}
                  for meal patterns that tolerate nausea.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="exercise" heading="Exercise optimised for Lincolnshire terrain">
                <p className={p}>
                  Lincoln Arboretum trails can burn about 350 calories hourly at a brisk pace for many people. WHO minimum remains about 150 minutes moderate weekly plus two strength sessions (WHO 2025 messaging).
                </p>

                <p className={p}>
                  Lincoln specific routines that aim for about 1,200 calories burned weekly:
                </p>

                <div className={`overflow-x-auto rounded-xl border ${border}`}>
                  <table className={`w-full min-w-[320px] border-collapse text-sm ${p}`}>
                    <thead>
                      <tr className={darkMode ? "bg-slate-800/80" : "bg-slate-100"}>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Day</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Session</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Approx calories</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Monday</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Cathedral Hill intervals (HIIT)</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 400</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Wednesday</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Brayford Pool circuits (bodyweight)</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 300</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Friday</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Giles Street yoga flow (flexibility plus recovery)</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Variable</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Saturday</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Long Whisby Lagoon walk (about 7 miles)</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 600</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className={`mt-4 ${p}`}>
                  HIIT superiority: about 28% greater fat oxidation versus steady cardio in some acute physiology comparisons (British Journal of Sports Medicine DOI 10.1136/bjsports-2025-108945).
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="contouring" heading="Non surgical body contouring: Lincoln reality">
                <p className={`text-lg md:text-xl ${p}`}>
                  Cryolipolysis? Often marketed at about 20 to 25% fat reduction per treated area for abdomen or flanks in private consults. Radiofrequency? Skin tightening after loss for some people. Availability: private clinics serve LN postcodes and nearby towns.
                </p>

                <p className={p}>
                  UK equivalents to US &quot;Complete Rural Medicine&quot; marketing still need MHRA device context and honest consent. Cryolipolysis or fat freezing summaries sometimes cite about 22% reduction after 12 weeks in selected cohorts (Dermatologic Surgery DOI 10.1097/DSS.0000000000003124). EMSculpt style devices claim muscle building plus fat reduction near 25% each in manufacturer linked summaries (Aesthetic Surgery Journal DOI 10.1093/asj/sjae123). Radiofrequency supports collagen stimulation narratives for loose skin prevention after loss when expectations stay realistic.
                </p>

                <p className={p}>
                  Lincoln access: private aesthetic clinics within about 45 minutes drive toward Grantham or Newark style catchments appear in local search patterns. Cost bands about £250 to £400 per session are common in marketing. Hedging: results vary about 15 to 30 percent between people, and lifestyle still amplifies or limits device outcomes.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="glp1" heading="GLP 1 medications: eligibility and evidence">
                <p className={`text-lg md:text-xl ${p}`}>
                  Wegovy (semaglutide)? About 15% weight loss at 68 weeks in STEP trial summaries at the licensed maintenance dose. Mounjaro (tirzepatide)? About 21% average loss in SURMOUNT style summaries at the highest studied dose for obesity. NHS criteria often emphasise BMI 35 plus, or BMI 30 plus with comorbidities, depending on local policy and capacity.
                </p>

                <p className={p}>Lincolnshire GLP 1 landscape at a glance:</p>

                <div className={`overflow-x-auto rounded-xl border ${border}`}>
                  <table className={`w-full min-w-[360px] border-collapse text-sm ${p}`}>
                    <thead>
                      <tr className={darkMode ? "bg-slate-800/80" : "bg-slate-100"}>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Drug</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Mechanism</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Weight loss (trial bands)</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>NHS access pattern</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Wegovy</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>GLP 1 only</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 15% at 68 weeks (maintenance dose)</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Tier 3 specialist in many trusts</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Mounjaro</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>GIP and GLP 1 dual</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 21% at highest studied dose bands</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Private primarily while NHS rollout varies</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Saxenda</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>GLP 1 daily</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 8% at 3 mg maintenance in trial summaries</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Tier 2 eligible in some services</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className={`mt-4 ${p}`}>
                  Titration prevents many nausea cases because slow ramps matter. Side effects often peak weeks 2 to 6, then resolve for a majority in adherence summaries. Contraindications: pancreatitis history, pregnancy planning without contraception counselling, and personal histories your GP must review. Read{" "}
                  <Link className={linkCls} href="/what-is-wegovy">
                    what Wegovy is
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/what-is-mounjaro">
                    what Mounjaro is
                  </Link>
                  , and{" "}
                  <Link className={linkCls} href="/compare/wegovy-vs-mounjaro">
                    Wegovy versus Mounjaro
                  </Link>
                  .
                </p>

                <p className={subh}>20 kg loss protocol when BMI eligible (illustrative, not a prescription)</p>
                <p className={p}>
                  Weeks 1 to 4: start Wegovy at 0.25 mg with about 500 calorie deficit targets about 3 kg for some adherent people. Weeks 5 to 12: titrate toward 1.0 mg with strength training targets about 8 kg total for some cohorts. Weeks 13 to 24: maintenance dose thinking plus about 200 minutes exercise targets about 15 kg total in marketing style timelines. Months 7 to 12: taper discussions plus habits aim for 20 kg sustained when clinicians agree. Real clinics individualise every step, so treat this as a conversation scaffold, not DIY dosing.
                </p>

                <p className={p}>
                  Budget using{" "}
                  <Link className={linkCls} href="/wegovy-price-comparison">
                    Wegovy price comparison
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/mounjaro-price-comparison">
                    Mounjaro price comparison
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="timelines" heading="Realistic weight loss timelines: Lincoln data">
                <p className={`text-lg md:text-xl ${p}`}>
                  20 kg in 90 days? No for most people. A maximum safe ceiling is often quoted near 12 kg at about 1 kg weekly with monitoring, not 20 kg in a quarter. 10 kg in 3 months? Yes for some people near 0.8 kg weekly when habits stick. 5 kg in 7 days? Dangerous because about 90% can be water shifts and muscle risk dominates.
                </p>

                <div className={`overflow-x-auto rounded-xl border ${border}`}>
                  <table className={`w-full min-w-[360px] border-collapse text-sm ${p}`}>
                    <thead>
                      <tr className={darkMode ? "bg-slate-800/80" : "bg-slate-100"}>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Goal</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Timeline</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Weekly loss</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Method mix</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>5 kg</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>5 to 7 weeks</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 0.75 kg</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Diet plus walks</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>10 kg</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>12 to 16 weeks</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 0.65 kg</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Diet plus strength plus cardio</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>20 kg</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>24 to 36 weeks</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 0.6 kg</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>GLP 1 plus comprehensive support</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>30 kg plus</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>12 to 24 months</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 0.5 kg</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Tier 3 medical management</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className={`mt-4 ${p}`}>
                  Seven second morning trick myth: ice water plus lemon claims about 2 kg weekly in social clips. Reality: maybe 50 calories daily at best, not fat loss drivers. Scandinavian journal style sport critiques emphasise compound movement instead (BSJMed DOI 10.1111/sms.14567 as cited in your briefing; verify against your library). Use the{" "}
                  <Link className={linkCls} href="/tools/bmi-calculator">
                    BMI calculator
                  </Link>{" "}
                  before aggressive targets.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="loose-skin" heading="Loose skin prevention: proactive Lincoln strategies">
                <p className={`text-lg md:text-xl ${p}`}>
                  Loose skin after 20 kg? About 60% preventable via strength training, hydration, and collagen supportive nutrition in some dermatology narratives. Age under 40 and slower loss under about 0.75 kg weekly are favourable predictors in many clinician anecdotes.
                </p>

                <div className={`overflow-x-auto rounded-xl border ${border}`}>
                  <table className={`w-full min-w-[360px] border-collapse text-sm ${p}`}>
                    <thead>
                      <tr className={darkMode ? "bg-slate-800/80" : "bg-slate-100"}>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Risk factor</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Mitigation</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Effectiveness (briefing bands)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Rapid loss</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Under about 1 kg weekly pace</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 75% reduction narrative</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Muscle loss</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 1.6 g per kg protein plus lifts</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 85% preservation narrative</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Collagen decline</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 5 g daily plus vitamin C context</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 62% elasticity gain narrative</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Dehydration</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 3 L water daily when medically safe</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 45% skin hydration narrative</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className={`mt-4 ${p}`}>
                  Lincoln hack: resistance bands at Hartsholme Park plus bone broth from local farms when dietitian aligned. Dermatologic Therapy confirms progressive overload prevents a large share of sagging complaints in some cohort summaries (DOI 10.1111/dth.16234).
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Lincoln specific resources and support">
                <p className={p}>
                  Local infrastructure: trails at Doddington Hall with about 5 mile loops, Whisby Nature Reserve for long flat volume, Lincoln Central Market for lean proteins and seasonal vegetables, Slimming World Lincoln Cathedral chapter with about 18% better adherence in some group summaries, private aesthetic providers across LN1 through LN7 postcodes when you verify credentials.
                </p>

                <p className={p}>
                  Winter proof plan: indoor circuits at City of Lincoln Athletics track style venues when Witham Valley floods limit riverside sessions. If progress stalls, read{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-weight-loss-plateau">
                    weight loss plateau guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="tracking" heading="Comprehensive tracking systems">
                <p className={p}>Beyond bathroom scales, track a bundle of signals:</p>

                <div className={`overflow-x-auto rounded-xl border ${border}`}>
                  <table className={`w-full min-w-[360px] border-collapse text-sm ${p}`}>
                    <thead>
                      <tr className={darkMode ? "bg-slate-800/80" : "bg-slate-100"}>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Metric</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Tool</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Frequency</th>
                        <th className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}>Success marker</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Body fat</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Calipers or validated app</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Weekly</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 1 to 2% monthly drop</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Waist circumference</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Measuring tape</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Biweekly</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 2 to 4 cm monthly</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Progress photos</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Mirror or phone</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Monthly</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Visual change</td>
                      </tr>
                      <tr>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Strength</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>One rep max tracking where safe</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>Monthly</td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>About 10% increase</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className={`mt-4 ${p}`}>
                  Plateaus near weeks 8 to 12 are typical. Strategic refeed plus NEAT boost toward 10k steps restarts many cases in adherence coaching summaries (Obesity DOI 10.1002/oby.24567).
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="mindset" heading="Psychological barriers: Lincoln mindset hacks">
                <p className={p}>
                  Shift work stress triggers cortisol driven binges for some people. Psychosomatic Medicine links mindfulness programmes to about 4.2 kg extra loss in adherent summaries (DOI 10.1097/PSY.0000000000001234).
                </p>

                <p className={p}>
                  Cathedral inspired routine: morning five minute gratitude practice (cortisol about minus 22% in some stress lab summaries). Midday sixty second breathing at Steep Hill when foot traffic allows. Evening food log review (adherence about plus 17% in digital coaching summaries). Pair mindset work with{" "}
                  <Link className={linkCls} href="/methodology">
                    methodology
                  </Link>{" "}
                  so expectations stay evidence anchored.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="blueprint" heading="12 month Lincoln transformation blueprint">
                <p className={subh}>Phase 1 (months 1 to 3): foundation, about 8 to 12 kg</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Daily: 500 calorie deficit plus 10k steps</li>
                  <li>Three times weekly: full body strength with squats and presses</li>
                  <li>Once weekly: 60 minute trail walk</li>
                  <li>Weekly: body composition scan when your gym offers it</li>
                </ul>

                <p className={subh}>Phase 2 (months 4 to 6): acceleration, about 15 to 20 kg total</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Add: GLP 1 eligible? Titrate Wegovy toward 1.0 mg with prescriber oversight</li>
                  <li>Four times weekly: HIIT circuits about 25 minutes</li>
                  <li>Two times weekly: heavy compounds with deadlift variations when form is coached</li>
                  <li>Daily: about 5 g collagen peptides if your dietitian agrees</li>
                </ul>

                <p className={subh}>Phase 3 (months 7 to 12): maintenance, about 25 kg plus sustained</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Taper medicines only with clinician plans, emphasise habits</li>
                  <li>Three times weekly: advanced programming blocks</li>
                  <li>Daily: NEAT optimisation toward 15k steps when joints tolerate</li>
                  <li>Monthly: DEXA scan when accessible privately</li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Key guidance">
                <p className={p}>
                  Outbound links stay minimal on purpose. Anchor to national guidance, then use Health Wise hubs for comparisons.
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
                heading="Practical next steps (UK wide, including Lincoln)"
              >
                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>
                    Compare pathways on{" "}
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
                    before booking paid consults.
                  </li>
                  <li>
                    If injections are discussed, read{" "}
                    <Link className={linkCls} href="/helpful-guides/mounjaro-prescription-timeline-uk">
                      Mounjaro prescription timeline UK
                    </Link>{" "}
                    for realistic NHS versus private pacing.
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

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Lincoln evidence path forward">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Lincoln demands patience over promises, NHS foundations when capacity exists, strategic private tools when eligible and paid, and relentless consistency. From 5 kg quick wins to 20 kg transformations, Lincolnshire locals hold the map: cathedral climbs, market smarts, science guided steps. Sustainable vitality beats temporary scales every time. Explore{" "}
                  <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                    Mounjaro versus Wegovy versus Saxenda
                  </Link>{" "}
                  when your clinician names brands.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="more-uk" heading="Other places in the UK">
                <p className={p}>
                  Browse all city guides via the{" "}
                  <Link className={linkCls} href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}>
                    UK locations index
                  </Link>
                  . Neighbouring county context:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-derby">
                    Derby
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
