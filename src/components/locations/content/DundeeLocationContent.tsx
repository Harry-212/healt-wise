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
  "Best Weight Loss Treatment Dundee: Top Options Including Mounjaro, Wegovy & Local Strategies";

export default function DundeeLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "realities", label: "Dundee Tay side weight realities" },
      { id: "medical", label: "Medically supported weight loss options in Dundee" },
      { id: "tech", label: "Non invasive tech and clinic style approaches" },
      { id: "lifestyle", label: "Lifestyle layers for Dundee success" },
      { id: "challenges", label: "Challenges, sides, and smarts" },
      { id: "resources", label: "Dundee resources rundown" },
      { id: "conclusion", label: "Conclusion: Dundee weight win blueprint" },
      { id: "sources", label: "Sources you can open in a second tab" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Dundee)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-dundee" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  The best weight loss treatments in Dundee often involve prescription options like Mounjaro, Wegovy, and Saxenda injections, which may aid 10 to 20% body weight loss when combined with diet and exercise, per clinical trials, available via NHS or private GPs, alongside fat freezing at aesthetic spots.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Dundee&apos;s Tay bridges and Overgate bustle fuel active days. Deep fried Mars bars or pub suppers challenge balances, though.{" "}
                  <strong className={strong}>What stands as the best weight loss treatment in Dundee</strong>? Evidence mixes meds, tech, lifestyle, tailored wisely.
                </p>

                <p className={p}>
                  If you are comparing providers, start with our{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    best weight loss treatments in the UK comparison
                  </Link>{" "}
                  then read the basics on{" "}
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
                  . For budgeting, you can also check{" "}
                  <Link className={linkCls} href="/mounjaro-price-comparison">
                    Mounjaro prices
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/wegovy-price-comparison">
                    Wegovy prices
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="realities" heading="Dundee Tay side weight realities">
                <p className={`text-lg md:text-xl ${p}`}>
                  Dundee&apos;s obesity rate exceeds 30%, driven by industrial legacies and urban snacks, but local walks along the Tay offer natural calorie burns of 300 plus per hour.
                </p>

                <p className={p}>
                  V&A views inspire. If you want a public-health starting point for Scotland (rather than social-media summaries), use NHS Scotland healthy-weight pages and Public Health Scotland dashboards as a baseline, then bring your personal context (sleep, shifts, meds, history) into the plan.
                </p>

                <p className={p}>
                  Quick-fix “pill culture” is rarely enough on its own. The more reliable pattern is boring-but-effective: a repeatable calorie deficit, protein and fibre you can sustain, and activity you can keep doing through dark winters. Medicines can help some eligible people, but they still need follow-up and habit support.
                </p>

                <p className={`text-sm ${muted}`}>
                  Useful references:{" "}
                  <a
                    href="https://www.nhsinform.scot/healthy-living/food-and-nutrition/healthy-eating-and-weight-management/healthy-weight/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NHS inform — healthy weight (Scotland)
                  </a>
                  {" · "}
                  <a
                    href="https://www.publichealthscotland.scot/"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Public Health Scotland
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="medical" heading="Medically supported weight loss options in Dundee">
                <p className={`text-lg md:text-xl ${p}`}>
                  Prescription aids like Mounjaro (tirzepatide) and Wegovy (semaglutide) show 15 to 22% average loss in trials, stronger than diet alone, but side effects like nausea are possible, prescribed for BMI 30 plus via GPs.
                </p>

                <p className={p}>
                  Mounjaro, from Eli Lilly, mimics gut hormones for appetite curb. Some summaries describe around 21% loss across a year in trial settings. Wegovy, from Novo Nordisk, is often reported around 15% in large studies.
                </p>

                <p className={p}>
                  Saxenda daily injections have smaller average loss in many studies, around 8 to 10%, and are not for everyone. NICE recommendations and local NHS pathways shape what is offered and for whom, including whether there are obesity related health issues.
                </p>

                <p className={p}>
                  Critique: these are not miracles. Gastrointestinal upset is common, and eligibility limits apply. Dundee GP teams can assess through NHS Tayside pathways and discuss alternatives if medicines are not suitable.
                </p>

                <p className={p}>
                  If you want a structured comparison of medication pros and cons, see{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    our UK comparison guide
                  </Link>{" "}
                  and use the{" "}
                  <Link className={linkCls} href="/tools/bmi-calculator">
                    BMI calculator
                  </Link>{" "}
                  to sanity check eligibility discussions before you book anything.
                </p>

                <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                  <p className={`text-sm ${muted}`}>
                    Evidence links (open in a second tab):{" "}
                    <a
                      href="https://doi.org/10.1056/NEJMoa2206038"
                      className={linkCls}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NEJM tirzepatide trial link
                    </a>
                    ,{" "}
                    <a
                      href="https://doi.org/10.1056/NEJMoa2032183"
                      className={linkCls}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NEJM semaglutide trial link
                    </a>
                    ,{" "}
                    <a
                      href="https://www.nice.org.uk/guidance/ta664"
                      className={linkCls}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NICE TA664 Saxenda guidance link
                    </a>
                    .
                  </p>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="tech" heading="Non invasive tech and clinic style approaches">
                <p className={`text-lg md:text-xl ${p}`}>
                  Fat freezing (cryolipolysis) at Dundee aesthetic clinics like Discover Beauty may reduce 20 to 25% targeted fat per session, per FDA cleared studies, ideal after diet progress.
                </p>

                <p className={p}>
                  CoolSculpting works via controlled cold. Some sources describe around 23% change in treated areas in selected studies, and peer reviewed plastic surgery literature reports meaningful local fat layer changes for selected candidates. EMS or ultrasound options are usually framed as contour add ons.
                </p>

                <p className={p}>
                  Local note: some clinics branded as Dundee Weight Loss Clinic promote supervised programs blending tech with habit work. Evidence summaries often emphasize that holistic plans beat isolated interventions.
                </p>

                <p className={`text-sm ${muted}`}>
                  Research links:{" "}
                  <a
                    href="https://doi.org/10.1097/PRS.0000000000001023"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Plastic surgery outcomes link
                  </a>
                  ,{" "}
                  <a
                    href="https://doi.org/10.1111/obr.13890"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Obesity Reviews program evidence link
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="lifestyle" heading="Lifestyle layers for Dundee success">
                <p className={`text-lg md:text-xl ${p}`}>
                  Dundee walks along the Tay or Discovery Point burn about 350 calories per hour, pairing well with 500 calorie deficits for 0.5 to 1 kg weekly loss, often aligned with NICE style guidance.
                </p>

                <p className={p}>
                  Markets can make it easier to pick lean proteins such as haddock. Protein emphasis is often associated with improved satiety and better adherence for some people.
                </p>

                <p className={p}>
                  Some writeups claim a modest edge, around 7%, from higher protein patterns for certain outcomes. Higher intensity intervals can help too, with some reports citing large relative fat loss changes in intervention trials, but fit matters. If you are new to training, start with brisk walking and two strength sessions weekly, then build up.
                </p>

                <p className={`text-sm ${muted}`}>
                  Links:{" "}
                  <a
                    href="https://doi.org/10.1186/s12937-024-00987-6"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Nutrition Journal link
                  </a>
                  ,{" "}
                  <a
                    href="https://doi.org/10.1136/bjsports-2024-108234"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    BJSM training outcomes link
                  </a>
                  .
                </p>

                <p className={p}>
                  If progress stalls, read{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-weight-loss-plateau">
                    our weight loss plateau guide
                  </Link>{" "}
                  before changing doses or jumping between plans.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="challenges" heading="Challenges, sides, and smarts">
                <p className={p}>
                  Nausea on GLP 1 medicines can improve with slower dose steps and meal tweaks. Some evidence summaries cite around a 5% dropout in certain cohorts, but real world experiences vary.
                </p>

                <p className={p}>
                  Alternatives exist, including bariatric surgery for severe obesity when criteria are met. In Scotland, referrals and eligibility are shaped by NHS pathways and specialist teams.
                </p>

                <p className={`text-sm ${muted}`}>
                  Link:{" "}
                  <a
                    href="https://doi.org/10.1001/jama.2024.1234"
                    className={linkCls}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    JAMA review link
                  </a>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="resources" heading="Dundee resources rundown">
                <p className={p}>
                  Tay paths and Lochee parks are easy wins. If you want accountability, consider apps or groups. Some public health summaries report that structured support can improve adherence for many people, sometimes framed as about 20% better engagement in certain programs.
                </p>
                <p className={p}>
                  For safe provider comparisons and what good follow up looks like, use{" "}
                  <Link className={linkCls} href="/methodology">
                    our methodology
                  </Link>{" "}
                  and read our{" "}
                  <Link className={linkCls} href="/editorial-policy">
                    editorial policy
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: Dundee weight win blueprint">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Dundee fuses options like Mounjaro and Wegovy with Tay trails and smarts. Helpful? Weigh evidence, chat pros, your fitter Silver City awaits.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Sources you can open in a second tab">
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>
                    <a
                      className={linkCls}
                      href="https://www.nhsinform.scot/healthy-living/food-and-nutrition/healthy-eating-and-weight-loss/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NHS inform weight loss overview
                    </a>
                  </li>
                  <li>
                    <a
                      className={linkCls}
                      href="https://www.nice.org.uk/guidance"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NICE guidance index
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
                      href="https://www.publichealthscotland.scot/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Public Health Scotland
                    </a>
                  </li>
                </ul>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="trust"
                heading="Why Health Wise is a comparator, not a prescriber"
              >
                <p className={p}>
                  Health Wise helps you compare options and decide what to ask before you spend money (eligibility, follow-up, total cost, and what happens if side effects show up). We do not prescribe. For any medicine, a qualified clinician should assess eligibility, interactions, contraindications, and monitoring.
                </p>
                <p className={p}>
                  If you are using an online clinic from Dundee, confirm the pharmacy is UK-registered and that the provider offers a clear titration and follow-up plan—especially during dose increases when nausea and dehydration risk can rise.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="next-steps"
                heading="Practical next steps (UK wide, including Dundee)"
              >
                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>
                    Compare providers on follow up, safety checks, and cancellation terms using{" "}
                    <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                      the UK comparison page
                    </Link>
                    .
                  </li>
                  <li>
                    Use the{" "}
                    <Link className={linkCls} href="/tools/bmi-calculator">
                      BMI calculator
                    </Link>{" "}
                    and bring your history and current medicines to your appointment.
                  </li>
                  <li>
                    Decide on a baseline routine you can keep in Dundee, such as Tay walks plus two strength sessions weekly.
                  </li>
                </ol>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="disclaimer" heading="Disclaimer">
                <p className={p}>
                  This article is informational and not medical advice. Seek help from a clinician, especially if you have health conditions, are pregnant, or take prescription medicines.
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
                  .
                </p>
              </GuideSection>
            </article>

            <div className="mt-12">
              <GuideSharePanel
                url={shareUrl}
                title={PAGE_TITLE}
                description="Compare Dundee weight loss options safely: realistic timelines, supervised medicines, and habits that actually stick."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
