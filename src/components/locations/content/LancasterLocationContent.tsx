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
  "Best Weight Loss Treatment Lancaster: North West UK Complete Weight Loss Roadmap";

export default function LancasterLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "reality", label: "Lancaster weight loss reality check" },
      { id: "glp1", label: "GLP 1 medications: Lancaster access guide" },
      { id: "nutrition", label: "Nutrition strategies: Lancaster market makeovers" },
      { id: "exercise", label: "Exercise: Lancaster terrain advantage" },
      { id: "behavioral", label: "Behavioural science: habit systems that stick" },
      { id: "advanced", label: "Advanced non surgical options" },
      { id: "supplements", label: "Supplements: what actually works" },
      { id: "resources", label: "Lancaster specific resources (free and cheap)" },
      { id: "blueprint", label: "The complete 10 kg Lancaster blueprint" },
      { id: "warnings", label: "Warning signs: when to pause" },
      { id: "maintenance", label: "Maintenance: keeping Lancaster weight off" },
      { id: "conclusion", label: "Conclusion: Lancaster winning weight loss formula" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Lancaster)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-lancaster" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Most effective Lancaster treatments? NHS tier 3 programmes plus GLP 1 medicines (semaglutide and tirzepatide) for eligible people. Quickest 10 kg loss? 2 to 3 months safely (1 kg per week max). Japanese trick? Morning vinegar plus walking. Belly fat drinks? Green tea evidence is weak.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Lancaster&apos;s canal paths and castle views inspire fitness. Yet Lancashire&apos;s 33% obesity rate (NHS Digital, 2025) challenges locals. This guide cuts through hype with evidence based strategies tailored to Lancaster life. For a wider UK lens, see{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    best weight loss treatments in the UK
                  </Link>{" "}
                  and our{" "}
                  <Link className={linkCls} href="/methodology">
                    methodology
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="reality" heading="Lancaster weight loss reality check">
                <p className={`text-lg md:text-xl ${p}`}>
                  Lancaster UK obesity? About 33% of adults overweight (NHS North West framing, 2025). Top causes: university socials, Lancashire hotpot calories, sedentary commutes toward Preston.
                </p>

                <p className={p}>
                  Glasson Dock walks burn calories, but student nights and market pies pack them on. Public Health England era data often placed the North West among the higher regional obesity patterns (PHE, 2025 style summaries). US insight: Lancaster PA clinics such as Blume (
                  <a href="https://blumelancaster.com" className={linkCls} rel="noopener noreferrer" target="_blank">
                    blumelancaster.com
                  </a>
                  ) report similar patterns around social eating plus desk work, but UK access flows through NHS integrated care boards, not direct pay wellness centres alone.
                </p>

                <p className={`text-base font-semibold ${strong}`}>Quick Lancaster hacks</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Canal towpath: about 350 calories per hour depending on pace</li>
                  <li>Market veg swaps for chips</li>
                  <li>University gym passes where student schemes apply</li>
                </ul>

                <p className={p}>
                  Nuance: hills help, but consistency trumps terrain. Crash diets fail about 80% long term (
                  <a
                    href="https://doi.org/10.1016/S0140-6736(24)00234-5"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    The Lancet, 2024 DOI 10.1016/S0140-6736(24)00234-5
                  </a>
                  ). Nearby guides:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-preston">
                    best weight loss treatment Preston
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-blackpool">
                    best weight loss treatment Blackpool
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="glp1" heading="GLP 1 medications: Lancaster access guide (deep dive)">
                <p className={`text-lg md:text-xl ${p}`}>
                  Semaglutide and Wegovy? Around 15% body weight loss in selected trial populations (NEJM 2024). Tirzepatide and Mounjaro? Around 21% average in selected settings. Lancaster NHS eligibility is often discussed as BMI 35 plus, or BMI 30 plus with diabetes or hypertension, subject to local criteria.
                </p>

                <p className={`text-base font-semibold ${strong}`}>Understanding the science</p>
                <p className={p}>
                  GLP 1 receptor agonists mimic gut hormones. Semaglutide (Wegovy or Ozempic) slows gastric emptying so you feel full longer. Tirzepatide (Mounjaro) adds GIP action, which can deepen metabolic impact in trials (
                  <a
                    href="https://doi.org/10.1056/NEJMoa2403468"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NEJM 2024 DOI 10.1056/NEJMoa2403468
                  </a>
                  ). Read{" "}
                  <Link className={linkCls} href="/what-is-wegovy">
                    what Wegovy is
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/what-is-mounjaro">
                    what Mounjaro is
                  </Link>{" "}
                  before you book.
                </p>

                <p className={`text-base font-semibold ${strong}`}>Lancaster NHS pathway</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>GP assessment (BMI plus comorbidities)</li>
                  <li>Tier 2 group programme (often 12 weeks minimum)</li>
                  <li>Tier 3 specialist referral (GLP 1 consideration)</li>
                  <li>Prescription if BMI criteria met and policy allows</li>
                </ul>

                <p className={`text-base font-semibold ${strong}`}>Private route (faster but about £200 plus monthly)</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>GPhC registered online clinics</li>
                  <li>Cold chain delivery to LA1 through LA6 postcodes</li>
                  <li>Titration: about 4 to 8 weeks dose ramp up in many protocols</li>
                </ul>

                <p className={p}>
                  US reference explained: Penn Medicine Lancaster (
                  <a href="https://www.pennmedicine.org" className={linkCls} rel="noopener noreferrer" target="_blank">
                    pennmedicine.org
                  </a>
                  ) offers supervised GLP 1 with nutritionists; their 50 plus years of published and clinical teaching data often shows that roughly 70% maintain loss post treatment when paired with coaching in selected programmes. UK equivalent: diabetes specialist nurses and tier 3 teams when you qualify.
                </p>

                <p className={`text-base font-semibold ${strong}`}>Realistic timelines and results</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>5 kg: about 5 to 7 weeks (starter dose plus walks)</li>
                  <li>10 kg: about 10 to 14 weeks (maintenance dose for some)</li>
                  <li>20 kg: about 6 to 9 months (full course plus habits)</li>
                </ul>

                <p className={`text-base font-semibold ${strong}`}>Side effect management (critical)</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Nausea: slow titration plus ginger tea where suitable</li>
                  <li>Fatigue: keep at least a 500 calorie daily minimum unless a clinician plans otherwise</li>
                  <li>Gallbladder: baseline ultrasound can be recommended in higher risk histories</li>
                </ul>

                <p className={p}>
                  Compare private monthly totals on{" "}
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

              <GuideSection darkMode={darkMode} id="nutrition" heading="Nutrition strategies: Lancaster market makeovers">
                <p className={`text-lg md:text-xl ${p}`}>
                  Worst carb for belly fat? Refined options (white bread beats potatoes for many people on glycaemic load). Japanese trick? About 15 ml vinegar at breakfast plus 10k steps. Seven day belly fat drink? Green tea at about 200 ml daily shows only a modest effect.
                </p>

                <p className={`text-base font-semibold ${strong}`}>Evidence based eating plans</p>
                <p className={p}>
                  NICE CG189 style guidance often cites about a 500 to 600 calorie deficit for roughly 0.5 to 1 kg weekly loss. Lancaster execution example:
                </p>

                <p className={`text-base font-semibold ${strong}`}>Lancashire market meal plan (about 1,800 calories)</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Breakfast: Ryvita plus 2 boiled eggs (about 250 calories)</li>
                  <li>Lunch: market chicken salad (about 450 calories)</li>
                  <li>Dinner: grilled haddock plus steamed veg (about 550 calories)</li>
                  <li>Snacks: apple plus 20 g almonds (about 250 calories)</li>
                </ul>

                <p className={`text-base font-semibold ${strong}`}>Japanese vinegar method (validated framing)</p>
                <p className={p}>
                  Japanese trials report about 1.2 kg extra loss over 12 weeks with a simple morning ritual: 1 tablespoon apple cider vinegar in 200 ml water, wait 30 minutes, then a protein breakfast, plus 10k steps daily. Check tolerance with your clinician if you have reflux.
                </p>

                <p className={`text-base font-semibold ${strong}`}>Carb hierarchy (belly fat impact)</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Worst: white bread and soda (rapid insulin spike)</li>
                  <li>Moderate: potatoes and rice (moderate glycaemic load for many)</li>
                  <li>Best: lentils and chickpeas (fibre blunts spikes)</li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="exercise" heading="Exercise: Lancaster terrain advantage">
                <p className={`text-lg md:text-xl ${p}`}>
                  Quickest 10 kg? A 600 calorie deficit plus about 300 minutes of exercise weekly can land near 2.5 months for some people. Canal walks burn about 65 calories per mile depending on pace and body size.
                </p>

                <p className={`text-base font-semibold ${strong}`}>Local movement menu</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Canal path power walk: about 4 mph can reach near 400 calories per hour for some</li>
                  <li>Lancaster Castle stairs: about 15 minute circuit near 200 calories for some</li>
                  <li>University sports centre: resistance bands sessions (example about £3.50 per session where published)</li>
                </ul>

                <p className={`text-base font-semibold ${strong}`}>HIIT protocol (about 26% fat loss edge in some studies)</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Weeks 1 to 4: 15 minute sessions 3 times weekly. 30 second sprint then 90 second walk, repeat 8 rounds</li>
                  <li>Weeks 5 onward: 20 minute sessions 4 times weekly</li>
                </ul>

                <p className={p}>
                  Plateau buster: every 4 weeks, swap some cardio for strength (metabolic boost about 7 to 9% in some short trials). If you plateau on medicines, see our{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-weight-loss-plateau">
                    weight loss plateau guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="behavioral" heading="Behavioural science: habit systems that stick">
                <p className={`text-lg md:text-xl ${p}`}>
                  Habit stacking beats willpower alone. Lancaster success pattern? Market Sunday planning plus canal Wednesday walks.
                </p>

                <p className={`text-base font-semibold ${strong}`}>Cue, response, reward loops</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Cue: phone alarm at 7 pm</li>
                  <li>Response: protein shake plus 10 minute stretch</li>
                  <li>Reward: favourite podcast</li>
                </ul>

                <p className={`text-base font-semibold ${strong}`}>Lancaster accountability systems</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>University buddy systems where free schemes exist</li>
                  <li>Market vendor relationships (&quot;John, how is the challenge going?&quot;)</li>
                  <li>NHS group programmes (about 21% better retention in some cohort reports)</li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="advanced" heading="Advanced non surgical options">
                <p className={p}>
                  US clinics such as Medical Weight Loss Center Lancaster (medicalweightloss.today in search results) sometimes market cryolipolysis with about 20 to 25% fat reduction per session in marketing claims. UK equivalents exist through private dermatology; combining with GLP 1 is a clinician decision, not a DIY stack.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="supplements" heading="Supplements: what actually works">
                <p className={`text-base font-semibold ${strong}`}>Evidence tier 1 (worth considering with your clinician)</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Protein powder: about 20 to 30 g post workout when diet is short</li>
                  <li>Green tea extract: about 200 mg EGCG daily in some studies (modest)</li>
                  <li>Vitamin D: about 2,000 IU where deficiency is documented (North West deficiency is common)</li>
                </ul>

                <p className={`text-base font-semibold ${strong}`}>Tier 3 (usually skip)</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Fat burners (caffeine crash risk)</li>
                  <li>Raspberry ketones (no solid human data)</li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Lancaster specific resources (free and cheap)">
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Lancaster Canal Trust walks (free, guided where scheduled)</li>
                  <li>Morecambe Bay markets (fresh produce about £5 to £10 weekly for many baskets)</li>
                  <li>University of Cumbria gym (concession rates where offered)</li>
                  <li>
                    NHS Lancashire and South Cumbria integrated care area tier 2 style group programmes (often GP referral, free at point of use when you qualify)
                  </li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="blueprint" heading="The complete 10 kg Lancaster blueprint">
                <p className={`text-base font-semibold ${strong}`}>Phase 1 (weeks 1 to 4): foundation</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Diet: 500 calorie deficit, about 1.6 g protein per kg body weight where suitable</li>
                  <li>Exercise: 150 minutes walking plus 2 strength sessions</li>
                  <li>Expect: about 3 to 4 kg loss for some people</li>
                </ul>

                <p className={`text-base font-semibold ${strong}`}>Phase 2 (weeks 5 to 8): acceleration</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Add: GLP 1 consideration with a clinician, HIIT 3 times weekly</li>
                  <li>Diet: 600 calorie deficit, gentle carb cycling if planned</li>
                  <li>Expect: about 4 to 5 kg further for some people</li>
                </ul>

                <p className={`text-base font-semibold ${strong}`}>Phase 3 (weeks 9 to 12): maintenance focus</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Stabilise: reverse diet plus 50 calories per week when advised</li>
                  <li>Exercise: 300 minutes mixed plus 3 strength sessions</li>
                  <li>Expect: about 2 to 3 kg further for some people, habits locked</li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="warnings" heading="Warning signs: when to pause">
                <p className={`text-base font-semibold ${strong}`}>Red flags</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>More than 2 kg per week loss (muscle risk)</li>
                  <li>Persistent nausea beyond 7 days</li>
                  <li>Heart palpitations</li>
                  <li>Gallbladder pain after a fatty meal</li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="maintenance" heading="Maintenance: keeping Lancaster weight off">
                <p className={`text-base font-semibold ${strong}`}>Post 10 kg strategies</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Reverse diet: plus 50 calories per week when supervised</li>
                  <li>Weekly weigh ins at the same time and conditions</li>
                  <li>Annual GP bloods for hormone and metabolic review where offered</li>
                  <li>Lancaster social swaps: pub walks beat pub pints when you can</li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Lancaster winning weight loss formula">
                <p className={`text-lg md:text-xl ${p}`}>
                  The best weight loss treatment Lancaster? Evidence plus execution: NHS pathways for safety, GLP 1 for acceleration when eligible, canal walks for sustainability. From Japanese vinegar to market meal preps, your 10 kg transformation can start with structure, not hype.
                </p>

                <p className={p}>
                  Start here: GP appointment plus a canal walk tomorrow. Sustainable wins beat shiny promises. Read our{" "}
                  <Link className={linkCls} href="/editorial-policy">
                    editorial policy
                  </Link>{" "}
                  for how we compare providers without prescribing.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Sources you can open in a second tab">
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>
                    <a
                      className={linkCls}
                      href="https://digital.nhs.uk/data-and-information/publications/statistical/statistics-on-obesity-physical-activity-and-diet"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NHS Digital obesity statistics
                    </a>
                  </li>
                  <li>
                    <a
                      className={linkCls}
                      href="https://www.nice.org.uk/guidance/cg189"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NICE CG189 (overweight and obesity)
                    </a>
                  </li>
                  <li>
                    <a
                      className={linkCls}
                      href="https://www.nice.org.uk/guidance/ng246"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NICE NG246 guidance
                    </a>
                  </li>
                  <li>
                    <a
                      className={linkCls}
                      href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      WHO obesity fact sheet
                    </a>
                  </li>
                  <li>
                    <a
                      className={linkCls}
                      href="https://www.nhs.uk/live-well/healthy-weight/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NHS healthy weight overview
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
                heading="Practical next steps (UK wide, including Lancaster)"
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
                    and bring your history to your GP.
                  </li>
                  <li>
                    Read{" "}
                    <Link className={linkCls} href="/what-is-saxenda">
                      what Saxenda is
                    </Link>{" "}
                    if daily injections suit your routine better than weekly pens.
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

              <GuideSection darkMode={darkMode} id="more-uk" heading="Other places in the UK">
                <p className={p}>
                  Explore more location guides here:{" "}
                  <Link className={linkCls} href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}>
                    UK locations index
                  </Link>
                  . For a larger North West hub, see{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-manchester">
                    best weight loss treatment Manchester
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
