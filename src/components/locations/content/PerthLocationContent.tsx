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
  "Best Weight Loss Treatment Perth: Scotland's NHS Guide, Private Options, and Local Paths";

export default function PerthLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: "Perth practical overview" },
      { id: "landscape", label: "Perth access landscape" },
      { id: "nhs", label: "NHS Tayside services" },
      { id: "private", label: "Private clinical options" },
      { id: "glp1", label: "GLP 1 deep dive" },
      { id: "timelines", label: "Realistic timelines" },
      { id: "safety", label: "Safety checks" },
      { id: "resources", label: "Perth resources and hacks" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Perth slimming route" },
      { id: "trust", label: "Why Health Wise is a comparator" },
      { id: "next-steps", label: "Practical next steps" },
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
  const linkCls =
    "font-medium text-emerald-600 underline-offset-2 hover:underline";

  return (
    <div
      className={`w-full font-sans transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-slate-300" : "bg-white text-slate-800"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/blog?topic=locations"
            className={`flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-75 ${
              darkMode ? "text-slate-300" : "text-slate-900"
            }`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                darkMode ? "bg-slate-800" : "bg-slate-100"
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
            </div>
            Back to News
          </Link>

          <div className="flex items-center gap-3">
            <Moon
              className={`h-4 w-4 ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            />
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`relative flex h-6 w-12 items-center rounded-full p-1 shadow-inner transition-colors ${
                darkMode ? "bg-slate-700" : "bg-slate-200"
              }`}
              aria-label="Toggle dark mode"
            >
              <div
                className={`h-4 w-4 rounded-full shadow transition-all ${
                  darkMode
                    ? "translate-x-6 bg-slate-900"
                    : "translate-x-0 bg-white"
                }`}
              />
            </button>
            <Sun
              className={`h-4 w-4 ${
                darkMode ? "text-yellow-400" : "text-slate-400"
              }`}
            />
          </div>
        </div>

        <nav
          aria-label="Breadcrumb"
          className={`mb-8 flex flex-wrap items-center gap-2 text-xs font-medium ${muted}`}
        >
          <Link href="/" className={linkCls}>
            Home
          </Link>
          <span>/</span>
          <Link href="/blog?topic=locations" className={linkCls}>
            Locations
          </Link>
          <span>/</span>
          <span className={strong}>Perth</span>
        </nav>

        <header className="mb-12">
          <p className="mb-2 text-xs font-semibold tracking-wide text-emerald-600">
            {capitalizeHeadingWords("Locations in UK")}
          </p>
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            {PAGE_TITLE}
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${muted}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {nation}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Independent guide · June 2026
            </span>
          </div>

          <BlogArticleHeroImage src={hero.url} alt={hero.alt} />
          <div
            id="guide-article-hero-end"
            aria-hidden
            className="pointer-events-none h-0 w-full overflow-hidden"
          />
        </header>

        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          <GuideTocSidebar key="uk-loc-toc-perth" toc={toc} />

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection
                darkMode={darkMode}
                id="intro"
                heading="Best weight loss treatment Perth: Scotland's NHS guide, private options, and local paths"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Perth&apos;s Riverside walks and historic streets inspire
                  health shifts. Yet hearty suppers or shift work add layers.
                  The best weight loss treatment in Perth is a balanced mix of
                  NHS Tayside support, private GLP 1 medicines if eligible, and
                  local Highland habits. This guide cuts confusion with no sales
                  pitches, just facts.
                </p>
                <p className={p}>
                  Best weight loss treatment Perth Scotland means understanding
                  NHS Tayside referrals, private GLP 1 options such as Mounjaro,
                  Wegovy, and Saxenda, realistic timelines for 2 stone loss, and
                  local Perth habits for safe slimming. If you are comparing
                  national options before booking locally, start with our{" "}
                  <Link
                    href="/compare/best-weight-loss-treatments-uk"
                    className={linkCls}
                  >
                    UK weight loss treatment comparison
                  </Link>{" "}
                  and use the{" "}
                  <Link href="/tools/bmi-calculator" className={linkCls}>
                    BMI calculator
                  </Link>{" "}
                  before a GP or clinic conversation.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="landscape"
                heading="Perth, Scotland: weight loss landscape and access"
              >
                <p className={p}>
                  Perth sits in NHS Tayside&apos;s footprint. Regional public
                  health profiles put Scotland&apos;s adult obesity around 32%,
                  and Perth reflects the same broad pressure through Tayside
                  access patterns. Urban access points such as Dickies Pharmacy
                  at PH2 0JF or other local chemists can help with referrals,
                  pharmacy advice, and private route questions.
                </p>
                <p className={p}>
                  Could private speed things up? Yes, but NHS care adds safety
                  through GP oversight, referral rules, and shared records. The
                  nuance is that remote suburbs and nearby communities, including
                  Pitlochry outskirts, may need transport planning for clinics,
                  blood tests, or follow up appointments.
                </p>
                <p className={p}>
                  A local hack is the Tay River path, which can burn roughly 300
                  calories per hour depending on pace and body size. Pairing that
                  with market vegetables from Perth Farmers&apos; Market gives
                  simple food swaps a local anchor. The walk is not a treatment
                  by itself, but it helps make a treatment plan repeatable.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="nhs"
                heading="NHS Tayside services: free, specialist access"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  NHS Tayside offers two core paths for Perth residents: a
                  specialist Adult Weight Management Service and a free 12 week
                  digital programme for people who need structured support at a
                  lower intensity.
                </p>

                <h3
                  className={`pt-2 text-base font-semibold tracking-tight ${strong}`}
                >
                  Adult Weight Management Service
                </h3>
                <p className={p}>
                  The Adult Weight Management Service is specialist and
                  multi disciplinary, with dietitians, psychologists, and
                  physiotherapists involved where appropriate. Eligibility often
                  centres on BMI 35 or higher, or BMI 30 or higher with
                  conditions such as Type 2 diabetes or high blood pressure.
                  Access is usually through GP referral, for example via Perth
                  City Medical Centre or another local practice.
                </p>
                <p className={p}>
                  Waits of 3 to 6 months can be typical. The programme may
                  include fortnightly sessions and can support 5 to 10% loss for
                  people who engage consistently. The value is not only weight
                  loss. It is the combination of dietetic advice, psychology,
                  physiotherapy, and GP oversight.
                </p>

                <h3
                  className={`pt-4 text-base font-semibold tracking-tight ${strong}`}
                >
                  12 week digital programme
                </h3>
                <p className={p}>
                  The 12 week digital programme is a free structured app style
                  route for people with BMI 25 or higher. It may be accessed
                  through NHS digital enrolment routes and is designed for people
                  who need structure, tracking, and behavioural prompts rather
                  than specialist clinic intensity. Average losses of about 4 to
                  7% over 12 weeks can be realistic for some people.
                </p>
                <p className={p}>
                  The trade off is that NHS waits require patience, but they add
                  shared care and GP tracking after a course. Private routes can
                  skip waits, yet they risk missing blood checks or joined up
                  records if the provider does not communicate properly. Digital
                  support suits busy lives, while the specialist pathway is more
                  appropriate for higher BMI or more complex health profiles.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="private"
                heading="Private clinical options: GLP 1s and medical weight management"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Private paths in Perth often involve GPhC registered online
                  clinics offering medical weight management and injection based
                  treatment. Scotland based or UK wide clinics may deliver
                  refrigerated pens to Perth postcodes after an online
                  consultation.
                </p>
                <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                  <li>
                    Mounjaro, or tirzepatide, is a dual GLP 1 and GIP hormone
                    mimic. Trials have reported around 20% loss in selected
                    groups.
                  </li>
                  <li>
                    Wegovy, or semaglutide, is a weekly pen with around 15%
                    average loss reported in selected weight management studies.
                  </li>
                  <li>
                    Saxenda, or liraglutide, is a daily option that may feel
                    milder or more starter friendly for some patients.
                  </li>
                </ul>
                <p className={p}>
                  Costs often sit around GBP150 to GBP350 per month including
                  delivery and titration, with Mounjaro commonly around GBP200 to
                  GBP300, Wegovy around GBP150 to GBP250, and Saxenda around
                  GBP180 to GBP280 depending on dose and provider. Access usually
                  starts with an online consultation, BMI 30 or higher, and no
                  contraindication such as pancreatitis history. Cold chain
                  shipping matters because temperature handling can affect
                  refrigerated medicines.
                </p>
                <p className={p}>
                  Hedging matters here. These medicines should pair with a
                  calorie deficit, often around 500 calories per day for people
                  aiming near 1kg per week, plus physical activity and enough
                  protein. Side effects such as nausea can often be managed by
                  slow titration, while gallstone risk and dehydration should be
                  discussed. GP blood tests are wise when private care is used.
                </p>
                <p className={p}>
                  Dickies Pharmacy Perth at PH2 0JF is an example of a local
                  pharmacy access point that may support guided refills or
                  validation through the GPhC register. Before choosing a route,
                  compare wider private pricing through our{" "}
                  <Link href="/mounjaro-price-comparison" className={linkCls}>
                    Mounjaro price comparison
                  </Link>
                  ,{" "}
                  <Link href="/wegovy-price-comparison" className={linkCls}>
                    Wegovy price comparison
                  </Link>
                  , and{" "}
                  <Link href="/saxenda-price-comparison" className={linkCls}>
                    Saxenda price comparison
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="glp1"
                heading="GLP 1 deep dive: what works in Perth life?"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  GLP 1 medicines such as semaglutide, tirzepatide, and
                  liraglutide mimic gut hormones, slowing gastric emptying and
                  curbing appetite. Mounjaro adds GIP activity for extra satiety
                  and can reach up to 20% loss in selected trial settings.
                  Wegovy is weekly and may be NHS eligible at BMI 35 or higher,
                  or BMI 30 or higher with comorbidities in some pathways.
                  Saxenda uses a daily dose ramp.
                </p>
                <p className={p}>
                  Mounjaro versus Wegovy is not a simple winner takes all
                  question. Mounjaro may have a dual action edge for some people,
                  but Wegovy can suit others, and Saxenda remains useful for
                  selected patients. GP prescribing is usually tied to BMI,
                  comorbidities, and post lifestyle assessment. Private access is
                  easier, but it still needs proper screening.
                </p>
                <p className={p}>
                  Side effects can be manageable. Nausea affects some people,
                  especially during dose increases, and dehydration risk can rise
                  when appetite drops sharply. Batch recalls and supply alerts
                  can happen, so supply chain checks matter. If you are new to
                  these medicines, read{" "}
                  <Link href="/what-is-mounjaro" className={linkCls}>
                    what Mounjaro is
                  </Link>{" "}
                  and{" "}
                  <Link href="/what-is-wegovy" className={linkCls}>
                    what Wegovy is
                  </Link>{" "}
                  before paying privately.
                </p>
                <p className={p}>
                  Kelly Clarkson style weight loss is often discussed as a GLP 1
                  plus lifestyle story, but the UK version needs monitoring,
                  eligibility checks, and realistic expectations. It is
                  impossible to ignore that these medicines are not forever for
                  everyone. Pairing treatment with protein meals, walking, and
                  strength work is what protects the result after the initial
                  drop.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="timelines"
                heading="Realistic timelines: losing 5kg, 2 stones, and 20kg"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  No 7 day 5kg miracles. That kind of promise usually means
                  water loss, muscle loss, or unsafe restriction. A safe pace is
                  commonly 0.5 to 1kg weekly for many adults, though the right
                  pace depends on medical history, starting weight, medication,
                  and consistency.
                </p>
                <p className={p}>
                  A short target such as 5kg, or about 11lb, can take about 5
                  weeks at 0.75kg per week with a 400 calorie daily deficit,
                  Inverneil Park circuits, and basic food tracking. A medium
                  target of 2 stones, or 12.7kg, is not safely squeezed into 12
                  weeks for most people. Aim closer to 13 weeks at 1kg per week,
                  using NHS digital support or GLP 1 treatment plus 150 minutes
                  of exercise if clinically suitable.
                </p>
                <p className={p}>
                  A longer target such as 20kg may take about 5 months with BMI
                  eligible medicines, strength training, and close monitoring.
                  Sustainable guidance often frames 10% yearly loss as a strong
                  result, not a failure. Plateaus are normal. Some people use
                  post carb cycling or planned refeed days with clinician or
                  coach guidance, but the basics still matter most.
                </p>
                <p className={p}>
                  Local accountability helps. Tay runs, walk routes, and repeated
                  weigh ins can turn a plan into a routine. If medication
                  progress stalls, our{" "}
                  <Link
                    href="/helpful-guides/mounjaro-weight-loss-plateau"
                    className={linkCls}
                  >
                    Mounjaro plateau guide
                  </Link>{" "}
                  explains how to review dose, habits, and expectations.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="safety"
                heading="Safety checks: prescriptions and pharmacy validation"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  A GP may prescribe or refer for GLP 1 treatment when BMI and
                  comorbidities fit the pathway after lifestyle work. Private
                  care can be appropriate, but it should be GPhC verified, clear
                  on titration, and honest about side effect management.
                </p>
                <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                  <li>
                    Verify the prescriber and pharmacy registration before
                    paying. Dickies and other legitimate pharmacies should be
                    traceable through the relevant register.
                  </li>
                  <li>
                    Ask for the titration plan, nausea policy, constipation
                    advice, and repeat blood test schedule.
                  </li>
                  <li>
                    Budget at least GBP200 per month if private delivery and
                    follow up are included.
                  </li>
                  <li>
                    Consider NHS first through GP BMI and ethnicity adjusted
                    threshold calculation, then ask whether shared care is
                    possible.
                  </li>
                  <li>
                    Avoid GLP 1 medicines during pregnancy or when planning
                    pregnancy unless a clinician gives clear stopping advice.
                  </li>
                  <li>
                    Treat pancreatitis history, certain thyroid conditions, and
                    serious gastrointestinal problems as major warning signs.
                  </li>
                </ul>
                <p className={p}>
                  Unlicensed products remain a real risk. Demand a clear supply
                  chain and read our guide on{" "}
                  <Link
                    href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards"
                    className={linkCls}
                  >
                    UK pharmacy safety standards
                  </Link>{" "}
                  before choosing an online provider.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="resources"
                heading="Perth specific resources and hacks"
              >
                <p className={p}>
                  Inverneil Park loops can burn around 350 calories per hour for
                  some people depending on pace and body size. Markets can make
                  fresh salmon and vegetables easier to choose. Group support can
                  improve adherence because it turns weight loss from a private
                  struggle into a scheduled routine.
                </p>
                <p className={p}>
                  Rainy Highland days do not need to stop the plan. Home HIIT,
                  bodyweight circuits, or short resistance sessions can cover the
                  gap when outdoor movement is not appealing. Farmers&apos; Market
                  produce also gives practical swaps, such as replacing pasties
                  with grilled trout, vegetables, or simpler protein based meals.
                </p>
                <p className={p}>
                  Perth&apos;s best advantage is not one clinic or one medicine.
                  It is the ability to combine NHS foundations, regulated private
                  options when appropriate, and local movement routes in a way
                  that fits normal life.
                </p>
              </GuideSection>

              <section id="faq" className="scroll-mt-28">
                <h2 className={`text-xl font-semibold ${strong}`}>
                  FAQs on best weight loss treatment Perth
                </h2>
                <div className={`mt-6 space-y-8 text-sm ${p}`}>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      How to access Mounjaro via NHS Scotland in Perth?
                    </h3>
                    <p className="mt-2">
                      Access usually starts via GP referral to Tayside Adult
                      Weight Management Service. BMI 35 or higher, or BMI 30 or
                      higher with conditions such as diabetes or high blood
                      pressure, may trigger assessment. Treatment is free if
                      approved through the NHS pathway.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      Can I lose 2 stones in 12 weeks safely on NHS?
                    </h3>
                    <p className="mt-2">
                      It is not recommended for most people. A safer goal is
                      around 1kg per week, which puts 2 stones, or 12.7kg, closer
                      to 13 weeks. NHS digital support is designed for steady
                      progress rather than crash loss.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      What is the cost of weight loss injections in Scotland and
                      Perth?
                    </h3>
                    <p className="mt-2">
                      Private routes often cost around GBP150 to GBP350 per
                      month for Mounjaro, Wegovy, or Saxenda including delivery,
                      titration, and follow up depending on provider. NHS
                      treatment is free when eligibility and pathway approval are
                      met.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      What does a GP typically prescribe for weight loss?
                    </h3>
                    <p className="mt-2">
                      A GP may consider GLP 1 treatment such as Wegovy or
                      Mounjaro after lifestyle work and when BMI plus
                      comorbidities meet local rules. Diet programmes,
                      behavioural support, and referral pathways usually come
                      first.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      How safe are online pharmacies delivering to Perth?
                    </h3>
                    <p className="mt-2">
                      Online pharmacies can be safe when they are GPhC verified,
                      use proper cold chain delivery, explain titration, and
                      offer follow up. They should not hide who prescribes or
                      what happens if side effects occur.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      What local Perth activities boost fat loss?
                    </h3>
                    <p className="mt-2">
                      Tay walks can burn roughly 300 calories per hour for some
                      people, and market vegetable swaps can reduce calorie
                      density without making meals feel tiny. Group support can
                      improve adherence because it adds structure and
                      accountability.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection
                darkMode={darkMode}
                id="conclusion"
                heading="Conclusion: Perth's empowered slimming route"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Perth means NHS foundations through
                  free specialist care plus private GLP 1s if eligible. The
                  safest route is monitored, realistic, and local enough to
                  continue after the first burst of motivation fades.
                </p>
                <p className={p}>
                  From Tay trails to market eats, sustainable Highland wins are
                  possible. Assess access wisely. Your fitter Perth life starts
                  with the right referral, a regulated provider when medicine is
                  involved, and habits that still make sense months from now.
                </p>
              </GuideSection>

              <section
                id="trust"
                className={`scroll-mt-28 rounded-xl border p-5 ${border} ${boxBg}`}
              >
                <h2 className={`text-xl font-semibold ${strong}`}>
                  Why Health Wise is a comparator, not a prescriber
                </h2>
                <div className={`mt-4 space-y-3 text-sm ${p}`}>
                  <p>
                    We compare UK weight loss providers, price signals, and
                    safety standards. This Perth guide is educational
                    information, not a prescription, diagnosis, or replacement
                    for your GP.
                  </p>
                  <p className={muted}>
                    Read our{" "}
                    <Link href="/methodology" className={linkCls}>
                      methodology
                    </Link>{" "}
                    and{" "}
                    <Link href="/editorial-policy" className={linkCls}>
                      editorial policy
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <GuideSection
                darkMode={darkMode}
                id="next-steps"
                heading="Practical next steps for Perth residents"
              >
                <ul className={`list-none space-y-2.5 text-sm ${p}`}>
                  <li>
                    <Link
                      href="/compare/best-weight-loss-treatments-uk"
                      className={linkCls}
                    >
                      Compare best weight loss treatments in the UK
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/bmi-calculator" className={linkCls}>
                      Check your BMI before a GP or clinic appointment
                    </Link>
                  </li>
                  <li>
                    <Link href="/mounjaro-price-comparison" className={linkCls}>
                      Mounjaro price comparison
                    </Link>
                    <span className={muted}> · </span>
                    <Link href="/wegovy-price-comparison" className={linkCls}>
                      Wegovy price comparison
                    </Link>
                    <span className={muted}> · </span>
                    <Link href="/saxenda-price-comparison" className={linkCls}>
                      Saxenda price comparison
                    </Link>
                  </li>
                </ul>
              </GuideSection>

              <section
                id="disclaimer"
                className="scroll-mt-28 rounded-xl border border-amber-200 bg-amber-50/90 p-4 text-sm leading-relaxed text-amber-950"
              >
                <h2 className="text-xl font-semibold text-amber-950">
                  Disclaimer
                </h2>
                <p className="mt-2">
                  This page is general information. Prescription medicines must
                  be issued by a qualified clinician who can take responsibility
                  for follow up. If you are pregnant, planning pregnancy, or have
                  a history of pancreatitis, gallbladder symptoms, or certain
                  thyroid conditions, some options may not be suitable.
                </p>
              </section>

              <section
                id="more-uk"
                className={`scroll-mt-28 rounded-xl border p-5 text-sm ${border} ${
                  darkMode ? "bg-slate-900/60" : "bg-slate-50"
                }`}
              >
                <h2 className={`text-xl font-semibold ${strong}`}>
                  Other places in the UK
                </h2>
                <p className={`mt-2 leading-relaxed ${p}`}>
                  Browse every UK city guide{" "}
                  <Link
                    href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}
                    className={linkCls}
                  >
                    All UK location articles
                  </Link>
                  , or compare nearby guides for{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-dundee"
                    className={linkCls}
                  >
                    Dundee
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-edinburgh"
                    className={linkCls}
                  >
                    Edinburgh
                  </Link>
                  , and{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-glasgow"
                    className={linkCls}
                  >
                    Glasgow
                  </Link>
                  .
                </p>
              </section>
            </article>

            <div className="mt-14">
              <GuideSharePanel
                url={shareUrl}
                title={PAGE_TITLE}
                description="Best weight loss treatment Perth Scotland: NHS Tayside referrals, private GLP 1 costs, timelines, and local slimming tips."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
