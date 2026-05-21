"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
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
  "Best Weight Loss Treatment Nottingham: East Midlands Guide to Medically Supported Slimming";

export default function NottinghamLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: "Best weight loss treatment Nottingham" },
      { id: "why-nottingham", label: "Why Nottingham needs smart strategies" },
      { id: "diet", label: "Diet and nutrition strategies" },
      { id: "exercise", label: "Exercise and movement plans" },
      { id: "medical", label: "GLP-1 injections and pharmacotherapy" },
      { id: "timelines", label: "Timelines, myths, and realistic goals" },
      { id: "resources", label: "Nottingham resources and support" },
      { id: "sources", label: "Key guidance" },
      { id: "trust", label: "Why Health Wise is a comparator" },
      { id: "next-steps", label: "Practical next steps" },
      { id: "disclaimer", label: "Disclaimer" },
      { id: "faq", label: "FAQs" },
      { id: "conclusion", label: "Conclusion" },
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
  const subh = `mt-6 text-base font-semibold ${strong}`;

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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-nottingham" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading="Best Weight Loss Treatment Nottingham: East Midlands Guide to Medically Supported Slimming">
                <p className={`text-lg md:text-xl ${p}`}>
                  Most effective weight loss treatment in Nottingham? Medically supervised lifestyle programs combined with prescription injections like Mounjaro (tirzepatide) or Wegovy (semaglutide) - managed via specialist clinics or registered pharmacies, not one &quot;best&quot; center. Successful outcomes blend lifestyle tweaks (500-cal deficit, 150min exercise weekly) with drugs for eligible (BMI 35+ or 30+ comorbidities), per NICE/UK guidelines. Realistic loss: 10-15% body weight over 6-12 months.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  What is the most successful weight loss treatment overall? Combination approaches - NICE-backed diet + exercise + GLP-1 meds (e.g., semaglutide/Wegovy, tirzepatide/Mounjaro) - yield 10-20% loss long-term (trials like SELECT/STEP). Fads fail 80% long-run (The Lancet 2024).
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  How did Kelly Clarkson really lose weight? She credits GLP-1 agonist (likely Wegovy/Ozempic-class) plus lifestyle - per Variety interviews (2023-2024): portion control, 30min cardio daily, no sugar sweets. Not &quot;magic shot&quot;; requires monitoring, UK equivalent needs NHS/private assessment.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  What qualifies for Ozempic on the NHS? BMI &gt;=35 (or &gt;=30 with comorbidities like diabetes, hypertension); failed lifestyle 3-6mo; prescription by GP/specialist. NHS criteria stricter than private (NICE NG246 2025).
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  What is the 3-3-3 rule for losing weight? Popular heuristic: 3 small meals/day (under 500cals each), 3 servings veggies/fruit, 30min movement daily. Simple, sustainable - supports 0.5-1kg/week loss (NICE CG189). Not medically proven alone but aids calorie tracking.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Nottingham&apos;s historic lace markets and Castle Park walks set a vibrant backdrop for health goals. Yet, hearty pie-and-pastries from the city center or late-shift factory work can tip scales up. The best weight loss treatment in Nottingham? It&apos;s not a single magic bullet - it&apos;s medically supervised lifestyle programs paired with prescription injections like{" "}
                  <Link className={linkCls} href="/what-is-mounjaro">
                    Mounjaro
                  </Link>{" "}
                  or{" "}
                  <Link className={linkCls} href="/what-is-wegovy">
                    Wegovy
                  </Link>
                  , managed through specialist clinics or registered local pharmacies rather than one oversized &quot;best&quot; center. Combining evidence-based habits (500-calorie deficits, 150 minutes weekly exercise) with GLP-1 medicines for eligible patients (BMI 35+, or 30+ with comorbidities) leads to 10-15% body weight loss over 6-12 months, per NICE UK guidance. This guide dives deep into Nottingham-specific pathways, safe access, timelines (like losing 5kg in 5 weeks or 20kg in 5 months), and practical tips tailored to East Midlands life - making it your definitive, helpful resource for sustainable slimming.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Whether you&apos;re a commuter on the tram to Nottingham Station, a local in Beeston or Sutton, or someone exploring NHS vs. private options in the East Midlands, this article breaks down the science, access routes, and real-world strategies without fluff. We&apos;ll cover everything from Nottingham weight loss clinics and obesity management to local tricks like using the Wollaton Park trails for fat-burning walks. With expert-level nuance on GLP-1 drugs (tirzepatide/Mounjaro, semaglutide/Wegovy/Saxenda), safety checks, and celebrity insight like Kelly Clarkson&apos;s journey, you&apos;ll get the full picture to make informed decisions. No hype - just grounded, E-E-A-T-backed info to help you thrive. For wider UK context, compare the main routes in our{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    best weight loss treatments in the UK
                  </Link>{" "}
                  guide.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="why-nottingham" heading="Why Nottingham Demands Smart Weight Strategies: Local Challenges and Health Backdrop">
                <p className={`text-lg md:text-xl ${p}`}>
                  Nottingham obesity rates? ~30% adults overweight/obese (NHS Digital 2025) - East Midlands mirrors UK average (62% adults excess weight). Challenges: urban sedentary jobs, food hubs, transport to clinics. Access via NHS Nottinghamshire ICB or private clinics; waits vary 3-6 months.
                </p>

                <p className={p}>
                  Nottingham sits in the heart of the East Midlands, a mix of urban buzz and green spaces like the在国家 Forest. Yet, health data paints a challenging picture: According to NHS Digital 2025 reports, over 30% of Nottingham adults fall into obesity categories (BMI 30+), aligning with the wider UK average where 62% of adults carry excess weight. The East Midlands region, including Nottinghamshire, publishes intelligence at a national level via Public Health England tools, but local nuances matter - textile factory shifts, long commutes on the A52, and weekend trips to the Bullring can lead to calorie-heavy habits without intentional movement. Treat these figures as context for service design, not a verdict on personal choices; your clinician&apos;s assessment always trumps stats.
                </p>

                <p className={p}>
                  What makes Nottingham unique? The city&apos;s industrial heritage means shift work is common - think logistics at the East Midlands Airport or retail in the Victoria Centre. This creates barriers: irregular eating times, reliance on quick takeaways from the Goosegate, or limited gym access after late hours. Seasonal weather adds too; rainy winters curb outdoor activities like the Riverside Trail along the River Trent. However, Nottingham&apos;s assets shine: Premier League-level fitness culture at the City Ground, free walks in Wollaton Hall&apos;s 500-acre deer park (burning 300 calories/hour), and vibrant farmers&apos; markets in the Lace Market offering fresh, lean meats to offset heavier stews.
                </p>

                <p className={p}>
                  Fad diets, like detox teas or keto shakes, might promise quick fixes, but they often backfire. A 2024 review in The Lancet dashed hopes, showing 80% of people regain weight within months due to unsustainable restrictions. The nuance here is real: What works in London clinics may falter here without local tweaks. For instance, Nottingham&apos;s gaming scene (e.g., arcade nights) triggers snacking, so strategies must account for social triggers. Access to care shapes success more than biology - postcode in Nottingham influences who answers the phone at clinics, wait times for NHS referrals, and whether your GP knows about private injections started online. Location changes logistics, not the chemistry of drugs like semaglutide.
                </p>

                <h3 className={subh}>Key Nottingham-Specific Challenges to Address</h3>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Urban Lifestyle: Desktop-heavy jobs in the financial district reduce incidental movement; pair with standing desk breaks.</li>
                  <li>Food Environment: Abundance of pubs on Parliament Street; opt for grilled chicken plates over roast beef with gravy.</li>
                  <li>Transport Gaps: Rural outskirts like East Leake need coach access to clinics; online pharmacies help but check cold-chain delivery for refrigerated pens.</li>
                  <li>Seasonal Slumps: Winter brings shorter days; indoor circuits at the Nottingham Sports Centre counteract.</li>
                  <li>Health Equity: Lower-income areas face higher rates; NHS programs aim for fairness, but private options may speed up for those who can afford.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  By understanding this backdrop, Nottingham residents can approach weight loss with eyes wide open, blending city perks with science.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="diet" heading="Proven Diet and Nutrition Strategies for Nottingham Residents">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best diet for weight loss? Calorie deficit (500-1000 fewer/day) for 0.5-1kg/week loss. Mediterranean-style (veggies, fish, lean meats) yields 7-10% fat drop yearly. Nottingham twist: Local produce from the Borough Market - swap pasties for grilled duck from East Midlands farms.
                </p>

                <p className={p}>
                  Diet forms the bedrock of any weight loss treatment in Nottingham, and evidence overwhelmingly points to calorie control as the most reliable driver. NICE guidelines (CG189, updated 2025) recommend a daily deficit of 500-1000 calories, leading to steady losses of 0.5-1kg per week - far safer than crash attempts like losing 5kg in 7 days, which risks dehydration and muscle wasting. For Nottingham folks, this means mindful swaps: Instead of the traditional pie-and-potato from a Shankly&apos;s pub, try grilled lean beef from local Nottinghamshire farms, paired with roasted root veggies. The American Journal of Clinical Nutrition (2024) links high-protein, fiber-rich diets to 8-10% body fat reductions, proving that quality matters alongside quantity.
                </p>

                <p className={p}>
                  Intermittent fasting has gained traction, especially among shift workers in Nottingham&apos;s manufacturing hubs. The 16:8 method (eat within an 8-hour window, fast 16 hours) might suit night shifts at the NHS trusts, showing 4-7% loss over 12 weeks in NEJM trials (2023). However, it&apos;s not a one-size-fits-all; energy dips could hinder morning commutes on the NET tram. Another approach, time-restricted eating, aligns with weekends for social meals - perhaps a lighter midweek routine followed by a controlled Sunday roast at home.
                </p>

                <p className={p}>
                  Critiques abound for extreme diets like keto or vegan-only shifts. Keto slashes carbs for quick water weight loss but often leads to high dropout rates; Obesity Reviews (2024) notes adherence issues persist beyond 3 months. For vegans, nutrient gaps (e.g., B12) risk stalls, per Nutrients journal. The nuance: What &quot;qualifies&quot; as best depends on your lifestyle - keto might help short-term for a Nottingham event, but Mediterranean-style eating (olive oil, fish, veggies) offers sustainability, with trials showing 5-15% loss over 6 months.
                </p>

                <h3 className={subh}>Practical Nottingham Diet Plan</h3>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Breakfast: Porridge with local berries (from Cotgrave Farmers&apos; Market) instead of full English fry-up.</li>
                  <li>Lunch: Packed salad with smoked salmon (sourced from Nottingham Shinfield Farm) for omega-3 boosts.</li>
                  <li>Dinner: Stir-fry lean pork with veggies, avoiding heavy sauces.</li>
                  <li>Snacks: Nuts or fruit, not chippy chips - aim for 200 calories max.</li>
                  <li>Hydration: 2 liters water daily; curbs overeating, per Annals of Nutrition (2025).</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  This approach integrates seamlessly into Nottingham life, leveraging local markets for fresh ingredients while avoiding the trap of &quot;diet beauty&quot; myths. If you use medication, our{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-nutrition-guide-uk">
                    Mounjaro nutrition guide UK
                  </Link>{" "}
                  can help structure meals.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="exercise" heading="Exercise and Movement Plans Tailored to Nottingham's Urban and Rural Mix">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best exercise for weight loss? 150 minutes moderate activity weekly (e.g., walks in Wollaton Park) + strength training 2x/week - yields 5-10kg yearly (WHO). Nottingham hacks: Trek the Underground Caves trails or cycle the A60 for fat burn.
                </p>

                <p className={p}>
                  Movement amplifies diet, and Nottingham&apos;s geography offers unique opportunities for sustainable activity. The World Health Organization (WHO) mandates 150 minutes of moderate activity weekly (like brisk walking) for 4-6kg annual loss, plus strength training twice weekly to boost metabolism by 7-10%, per Harvard Health (2025). For Nottingham residents, this isn&apos;t about marathons - it&apos;s about weaving motion into daily life. Imagine strolling the 300-acre Wollaton Park, where deer grazing paths torch 300-400 calories/hour, or cycling the A60 route to Loughborough for varied terrain. These local spots make exercise feel less like a chore and more like exploration.
                </p>

                <p className={p}>
                  High-Intensity Interval Training (HIIT) shines for time-poor schedules, common in Nottingham&apos;s busy retail sector. Short bursts - like 30 seconds sprinting on the Trent Bridge followed by 90 seconds walking - show 25-30% superior fat burn compared to steady cardio, per British Journal of Sports Medicine (2025). Home circuits work too: Bodyweight squats mimicking factory lifts, or planks while watching Nottingham Forest games. Resistance bands from local sports shops add variety, preventing plateaus.
                </p>

                <p className={p}>
                  Nuance is key: Overtraining risks injury, especially on Nottingham&apos;s uneven cobbled streets. Start slow, build consistency. For rural outskirts like Arnold, downhill walks in Sherwood Forest engage more muscles, aiding fat loss. Critics might say gyms are best, but free outdoor options often sustain better long-term.
                </p>

                <h3 className={subh}>Nottingham-Specific Exercise Routine</h3>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Morning: 30min walk around Castle Park (burns 250 cals).</li>
                  <li>Midday: Stair climbs at the Victoria Centre (10 floors = 150 cals).</li>
                  <li>Evening: HIIT session - burpees, jumping jacks (20min total).</li>
                  <li>Weekend: Hike Clumber Park trails (1 hour, 400 cals).</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  This plan counters sedentary shifts, building endurance without gym fees.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="medical" heading="Advanced Medical Options: GLP-1 Injections and Pharmacotherapy in Nottingham">
                <p className={`text-lg md:text-xl ${p}`}>
                  GLP-1 drugs like Mounjaro/Wegovy effective? Yes - 12-20% loss (trials). Mounjaro (tirzepatide) dual-action; Wegovy (semaglutide) weekly. Nottingham access: Clinics/pharmacies, BMI criteria. Side effects: Nausea (titrate slow).
                </p>

                <p className={p}>
                  For those seeking faster results, prescription injections like Mounjaro (tirzepatide) or Wegovy (semaglutide) represent the forefront of weight management in Nottingham. These GLP-1 receptor agonists mimic gut hormones, slowing gastric emptying and curbing appetite - leading to 12-20% body weight loss in trials, per NEJM (2024). Tirzepatide adds a GIP mechanism for extra satiety, potentially outperforming semaglutide slightly. In Nottingham, these are managed through specialist clinics or registered pharmacies, not a single center, ensuring personalized monitoring.
                </p>

                <p className={p}>
                  Access pathways vary: NHS Nottinghamshire ICB covers eligible patients (BMI 35+, or 30+ with comorbidities like type 2 diabetes), following NICE NG246 guidance (2025). Private options offer faster starts via GPhC-approved online clinics, delivering refrigerated pens to Nottingham addresses. However, safety matters - titration (slow dose ramp) minimizes nausea, a common side effect. MHRA alerts occasionally shift batch advice, so verify supply chains.
                </p>

                <p className={p}>
                  Critique: These aren&apos;t standalone cures; pair with lifestyle for long-term gains. Celebrities like Kelly Clarkson exemplify: Her rapid loss (per Variety interviews) combined GLP-1 with daily cardio and no sugar - replicable in Nottingham with GP oversight. Compare{" "}
                  <Link className={linkCls} href="/compare/wegovy-vs-mounjaro">
                    Wegovy versus Mounjaro
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/mounjaro-price-comparison">
                    Mounjaro price comparison
                  </Link>
                  , and{" "}
                  <Link className={linkCls} href="/wegovy-price-comparison">
                    Wegovy price comparison
                  </Link>{" "}
                  before budgeting.
                </p>

                <h3 className={subh}>Nottingham GLP-1 Access Checklist</h3>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Eligibility: BMI 35+ (30+ comorbidities); failed lifestyle.</li>
                  <li>Providers: Local pharmacies (e.g., GPhC-registered in the city center).</li>
                  <li>Cost: NHS free; private £150-350/month.</li>
                  <li>Monitoring: Blood tests, follow-ups.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Verify private sellers with our{" "}
                  <Link className={linkCls} href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                    pharmacy verification guide
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/helpful-guides/fake-online-pharmacy-uk-how-to-spot-stay-safe">
                    fake online pharmacy UK guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="timelines" heading="Timelines, Myths, and Realistic Goals for Nottingham Weight Loss">
                <p className={`text-lg md:text-xl ${p}`}>
                  Lose 5kg safely? 5-10 weeks (0.5-1kg/week). 20kg in 5 months? Yes, with meds/lifestyle. Kelly Clarkson: 20kg in months via GLP-1. 3-3-3 rule: 3 meals &lt;500cals, 3 veggies, 30min movement.
                </p>

                <p className={p}>
                  Timelines set expectations: Losing 5kg in 7 days is unsafe (dehydration risk); aim 0.5-1kg weekly for 5-10 weeks. 20kg in 5 months? Feasible at 1kg/week with GLP-1 support. Kelly Clarkson lost ~20kg in months via GLP-1 + habits. The 3-3-3 rule - 3 meals under 500cals, 3 veggie servings, 30min movement - supports 0.5-1kg/week (NICE).
                </p>

                <p className={p}>
                  Plateaus? Common at 10% loss; tweak carbs. If progress slows while using medication, read our{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-weight-loss-plateau">
                    weight loss plateau guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Nottingham Resources and Community Support">
                <p className={p}>
                  Leverage NHS Nottinghamshire sessions, Wollaton walks, markets. Groups boost 18% adherence.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Key guidance">
                <p className={p}>
                  External links are kept minimal on this page to avoid duplicating other location articles. Use national guidance below, then return to Health Wise for medicine explainers, price comparisons, and pharmacy safety checks.
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
                  Health Wise compares treatment routes, pharmacy information, and practical next steps. We do not prescribe or dispense medication. A registered clinician must decide whether any treatment is suitable for your health profile.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="next-steps" heading="Practical next steps (UK wide, including Nottingham)">
                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>
                    Compare treatment categories on{" "}
                    <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                      best weight loss treatments in the UK
                    </Link>
                    .
                  </li>
                  <li>
                    Compare GLP-1 medicines on{" "}
                    <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                      Mounjaro versus Wegovy versus Saxenda
                    </Link>
                    .
                  </li>
                  <li>
                    Use the{" "}
                    <Link className={linkCls} href="/tools/bmi-calculator">
                      BMI calculator
                    </Link>{" "}
                    before a GP or private prescriber consultation.
                  </li>
                </ol>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="disclaimer" heading="Disclaimer">
                <p className={p}>
                  This article is informational and not medical advice. Speak to a GP, pharmacist prescriber, or other qualified clinician before starting, stopping, or changing any treatment.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="FAQs on Best Weight Loss Treatment Nottingham">
                <div className="space-y-6">
                  <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                    <p className={`text-base font-semibold ${strong}`}>1. What is the most successful weight loss treatment overall?</p>
                    <p className={`mt-2 text-sm leading-relaxed ${p}`}>
                      Combination programs (NICE-backed diet + exercise + GLP-1 meds like Wegovy/Mounjaro) yield 10-20% loss long-term; fads fail 80% (The Lancet 2024).
                    </p>
                  </div>

                  <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                    <p className={`text-base font-semibold ${strong}`}>2. How did Kelly Clarkson really lose her weight?</p>
                    <p className={`mt-2 text-sm leading-relaxed ${p}`}>
                      GLP-1 agonist (likely Wegovy) plus lifestyle: Portion control, 30min daily cardio, no sugar - per Variety (2023-2024); not just a shot.
                    </p>
                  </div>

                  <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                    <p className={`text-base font-semibold ${strong}`}>3. What qualifies you for Ozempic on the NHS?</p>
                    <p className={`mt-2 text-sm leading-relaxed ${p}`}>
                      BMI &gt;=35 (or &gt;=30 with comorbidities like diabetes); lifestyle failure 3-6mo; GP prescription (NICE NG246).
                    </p>
                  </div>

                  <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                    <p className={`text-base font-semibold ${strong}`}>4. What is the 3-3-3 rule for losing weight?</p>
                    <p className={`mt-2 text-sm leading-relaxed ${p}`}>
                      Heuristic: 3 meals &lt;500cals, 3 veggie/fruit servings, 30min activity daily - supports 0.5-1kg/week (NICE CG189); simple tracking aid.
                    </p>
                  </div>

                  <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                    <p className={`text-base font-semibold ${strong}`}>5. Best Nottingham clinics for injections?</p>
                    <p className={`mt-2 text-sm leading-relaxed ${p}`}>
                      Specialist/pharmacy-managed (e.g., GPhC-registered); no single &quot;best&quot; - compare access.
                    </p>
                  </div>

                  <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                    <p className={`text-base font-semibold ${strong}`}>6. Safe 20kg loss timeline?</p>
                    <p className={`mt-2 text-sm leading-relaxed ${p}`}>
                      5 months at 1kg/week with meds/lifestyle; monitor via GP.
                    </p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Nottingham's Empowered Weight Loss Journey">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Nottingham? Medically guided lifestyle + GLP-1 injections where eligible - tailored to East Midlands life. From Wollaton hikes to pharmacy checks, sustainable results await. Start smart, stay safe - your Nottingham transformation begins now.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="more-uk" heading="Other places in the UK">
                <p className={p}>
                  Browse the{" "}
                  <Link className={linkCls} href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}>
                    UK locations index
                  </Link>
                  . Nearby:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-leicester">
                    Leicester
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-derby">
                    Derby
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-lincoln">
                    Lincoln
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
