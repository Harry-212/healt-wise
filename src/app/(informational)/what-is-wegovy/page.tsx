import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import WegovyPageToc from "@/components/wegovy/WegovyPageToc";
import {
  buildWegovyFaqItems,
  whatIsWegovyPageJsonLd,
} from "@/lib/seo/wegovy-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";
import {
  WHY_CHOOSE_HEALTHWISE360_ALT,
  WHY_CHOOSE_HEALTHWISE360_SRC,
} from "@/lib/site-assets";
import { getLivePriceCheckLabels, getWegovyCompareProviders } from "@/lib/data/compare-live";
import { buildWegovyPriceInsights } from "@/lib/data/wegovy-price-insights";

/** Live prices; regenerated at most every 5 minutes and when prices are saved. */
export const revalidate = 300;

export const metadata: Metadata = {
  ...buildPageShareMetadata({
    canonicalPath: "/what-is-wegovy",
    title: "What Is Wegovy? Everything You Need To Know About",
    metaDescription:
      "What is Wegovy? A weekly semaglutide injection for weight loss. See how it works, when it starts working, weight loss results, doses and UK prices.",
    openGraphTitle: "What Is Wegovy? How It Works and What to Expect",
    openGraphDescription:
      "A plain English guide to Wegovy (semaglutide): how it works, when it starts working, who can take it and what it costs in the UK.",
    imagePath: WHY_CHOOSE_HEALTHWISE360_SRC,
    imageAlt: WHY_CHOOSE_HEALTHWISE360_ALT,
  }),
  title: {
    absolute: "What Is Wegovy? Everything You Need To Know About",
  },
};

const linkClass =
  "inline-flex items-center gap-1.5 font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-950";
const h2Class =
  "text-2xl font-bold tracking-tight text-slate-900 md:text-3xl";
const primaryBtn =
  "inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-sm ring-1 ring-amber-300 transition duration-150 hover:bg-amber-300 hover:scale-[1.01] active:scale-[0.99] sm:text-base text-center";
const secondaryBtn =
  "inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition duration-150 hover:bg-slate-50 hover:text-slate-950 sm:text-base text-center";

function Row({ a, b }: { a: string; b: string }) {
  return (
    <tr>
      <td className="px-4 py-3 font-medium text-slate-900">{a}</td>
      <td className="px-4 py-3">{b}</td>
    </tr>
  );
}

function TwoColTable({
  head,
  rows,
}: {
  head: [string, string];
  rows: [string, string][];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[460px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="w-2/5 px-4 py-3 font-semibold text-slate-900">
              {head[0]}
            </th>
            <th className="w-3/5 px-4 py-3 font-semibold text-slate-900">
              {head[1]}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-800">
          {rows.map(([a, b]) => (
            <Row key={a} a={a} b={b} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function WhatIsWegovyPage() {
  const WEGOVY_UK_COMPARE_PROVIDERS = getWegovyCompareProviders();
  const WEGOVY_UK_COMPARE_LAST_UPDATED = getLivePriceCheckLabels().wegovy;
  const providerCount = WEGOVY_UK_COMPARE_PROVIDERS.length;
  const insights = buildWegovyPriceInsights(WEGOVY_UK_COMPARE_PROVIDERS);
  const starterPrice = `£${insights?.starter.low ?? 76.94}`;
  const dose24Low = `£${insights?.top.low ?? 135}`;
  const dose24Typical = `£${insights?.top.median ?? 200}`;
  const dose24High = `£${insights?.top.high ?? 290}`;
  const faqItems = buildWegovyFaqItems({
    starterLow: starterPrice,
    dose24Typical,
  });
  const pageJsonLd = whatIsWegovyPageJsonLd(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      <article className="w-full">
        {/* Section 1: Hero */}
        <section
          id="what-is-wegovy"
          className="scroll-mt-28 w-full border-b border-slate-200/80 bg-gradient-to-b from-[#f4f7f5] to-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-5 sm:py-12 md:px-8 md:py-16">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 ring-1 ring-emerald-200/70">
                UK Treatment Guide
              </span>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.12]">
                What Is Wegovy?
              </h1>
              <p
                id="hero-answer"
                className="mt-4 text-base font-medium leading-relaxed text-slate-800 sm:text-lg"
              >
                Wegovy is a once-weekly weight loss injection. The medicine
                inside it is called semaglutide. It copies a hormone called
                GLP-1 that your gut makes when you eat. This hormone helps you
                feel full, so you eat less. In the UK, Wegovy is used for weight
                loss and to lower the risk of heart attack and stroke in some
                people. You need a prescription to get it.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                So, what is Wegovy in simple words? It is a prescription pen
                that helps some adults eat less and lose weight. This guide
                explains how Wegovy works, when it starts working, who can take
                it and what it costs.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/wegovy-price-comparison" className={primaryBtn}>
                  Compare Wegovy prices
                </Link>
                <Link
                  href="/tools/wegovy-click-calculator"
                  className={secondaryBtn}
                >
                  Open the click calculator
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-200/80 pt-4 text-xs font-semibold text-slate-600 sm:text-sm">
                {[
                  `Last reviewed ${WEGOVY_UK_COMPARE_LAST_UPDATED}`,
                  "No paid rankings",
                  `${providerCount} GPhC pharmacies tracked`,
                ].map((chip) => (
                  <div key={chip} className="inline-flex items-center gap-1.5">
                    <Check
                      className="h-4 w-4 shrink-0 text-emerald-600"
                      strokeWidth={2.5}
                    />
                    <span>{chip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:px-6 lg:flex-row lg:gap-12 lg:py-14">
          <WegovyPageToc />

          <div className="min-w-0 flex-1 space-y-16 lg:space-y-20">
            {/* Section 2: Facts at a glance */}
            <section
              id="wegovy-facts-at-a-glance"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className={h2Class}>Wegovy facts at a glance</h2>
              <TwoColTable
                head={["Fact", "Answer"]}
                rows={[
                  ["Brand name", "Wegovy"],
                  ["Medicine inside", "Semaglutide (say sem uh GLOO tide)"],
                  ["Made by", "Novo Nordisk"],
                  ["What it copies", "One gut hormone, GLP-1"],
                  ["How you take it", "One injection a week, under the skin"],
                  [
                    "The pen",
                    "FlexTouch. One pen holds 4 doses, so it lasts 4 weeks",
                  ],
                  ["Starter dose", "0.25 mg"],
                  [
                    "Usual long term dose",
                    "2.4 mg. A 7.2 mg dose exists for some adults",
                  ],
                  [
                    "Strengths",
                    "6 (0.25, 0.5, 1, 1.7, 2.4 and 7.2 mg)",
                  ],
                  [
                    "Used in the UK for",
                    "Weight loss, and lowering heart attack and stroke risk in some adults",
                  ],
                  ["Prescription needed", "Yes. Wegovy is prescription only"],
                  [
                    "Same as Ozempic?",
                    "Same medicine, different brand. Ozempic is for type 2 diabetes",
                  ],
                ]}
              />
            </section>

            {/* Section 3: Words explained */}
            <section
              id="wegovy-words-explained"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className={h2Class}>Wegovy words explained</h2>
              <p className="leading-relaxed text-slate-600">
                New to this? Here are the words you will see most.
              </p>
              <TwoColTable
                head={["Word", "What it means"]}
                rows={[
                  ["How to pronounce Wegovy", "Say we GO vee."],
                  [
                    "Wegovy meaning",
                    "Wegovy is the brand name of a medicine. The medicine inside is semaglutide.",
                  ],
                  [
                    "What is the Wegovy injection?",
                    "It is the weekly shot you give yourself with a pen.",
                  ],
                  [
                    "Wegovy jab",
                    "Another name for the weekly injection.",
                  ],
                  [
                    "Wegovy weight loss injection",
                    "A common name for Wegovy, because it is used for weight loss.",
                  ],
                  [
                    "Wegovy weight loss treatment",
                    "Using Wegovy with a lower calorie diet and more activity to lose weight, under a prescriber's care.",
                  ],
                  [
                    "Wegovy drug",
                    "A drug is a medicine. Wegovy is a prescription drug.",
                  ],
                  ["Dose", "The strength of the pen, such as 0.25 mg."],
                ]}
              />
            </section>

            {/* Section 4: How it works */}
            <section
              id="how-wegovy-works"
              className="scroll-mt-28 space-y-8 text-slate-700"
            >
              <div className="space-y-3">
                <h2 className={h2Class}>How does Wegovy work?</h2>
                <p id="how-it-works-answer" className="text-base leading-relaxed">
                  Wegovy works by copying GLP-1, a hormone your gut makes after
                  you eat. GLP-1 tells your brain you are full. It slows down how
                  fast food leaves your stomach. It also helps your body control
                  blood sugar. Doctors call this the Wegovy mechanism of action.
                </p>
              </div>

              <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">
                  How Wegovy works for weight loss
                </h3>
                <p className="leading-relaxed">
                  Wegovy helps you eat less. You feel full sooner. You stay full
                  for longer. You think about food less.
                </p>
                <div>
                  <p className="font-semibold text-slate-900">
                    How does Wegovy help you lose weight, step by step?
                  </p>
                  <ol className="mt-3 list-inside list-decimal space-y-2 text-slate-700">
                    <li>You inject Wegovy once a week.</li>
                    <li>The medicine acts on your brain and your gut.</li>
                    <li>You feel less hungry and have fewer cravings.</li>
                    <li>You eat smaller meals.</li>
                    <li>Over time, your body uses stored fat for energy.</li>
                  </ol>
                </div>
                <p className="leading-relaxed">
                  Wegovy mostly lowers your appetite. It does not burn fat by
                  itself. Some of the weight you lose can be muscle, so eat
                  enough protein and stay active.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  What does Wegovy do to your body?
                </h3>
                <TwoColTable
                  head={["Part of the body", "What Wegovy does"]}
                  rows={[
                    ["Brain", "You feel full sooner and less hungry"],
                    [
                      "Stomach",
                      "Food leaves your stomach more slowly, so you stay full for longer",
                    ],
                    [
                      "Pancreas",
                      "Helps your body make insulin when blood sugar is high",
                    ],
                    ["Heart", "Lowers the risk of heart attack and stroke in some adults"],
                  ]}
                />
              </div>
            </section>

            {/* Section 5: What it is used for */}
            <section
              id="what-wegovy-is-used-for"
              className="scroll-mt-28 space-y-6 text-slate-700"
            >
              <div className="space-y-3">
                <h2 className={h2Class}>What is Wegovy used for?</h2>
                <p className="text-base leading-relaxed">
                  In the UK, Wegovy is licensed for weight loss and weight
                  management in adults. Licensed means the UK medicines
                  regulator, the MHRA, has checked it for this use.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  What does Wegovy treat in the UK?
                </h3>
                <div className="space-y-3 leading-relaxed">
                  <p>
                    <strong>Weight loss.</strong> Wegovy is for adults with a BMI
                    of 30 or more, or a BMI of 27 to under 30 with at least one
                    weight related health problem. You use it with a lower
                    calorie diet and more activity.
                  </p>
                  <p>
                    <strong>Heart health.</strong> In some adults with heart
                    disease who are overweight, Wegovy also lowers the risk of
                    heart attack and stroke.
                  </p>
                </div>
              </div>

              <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">
                  Wegovy benefits
                </h3>
                <ul className="space-y-2.5 text-slate-800">
                  {[
                    "Weight loss",
                    "Less hunger and fewer cravings",
                    "Lower risk of heart attack and stroke in some adults",
                    "One injection a week, not every day",
                    "In studies, many people also saw lower blood pressure and better blood sugar",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                        strokeWidth={2.5}
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  These benefits depend on the person. Wegovy can help the right
                  person, but it is not right for everyone. A prescriber decides.
                </p>
              </div>
            </section>

            {/* Section 6: Semaglutide and ingredients */}
            <section
              id="semaglutide-and-ingredients"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className={h2Class}>
                What is in Wegovy, and what type of drug is it?
              </h2>
              <div className="space-y-3 text-base leading-relaxed text-slate-800">
                <p>
                  Semaglutide is the medicine inside Wegovy. Wegovy is the brand
                  name.
                </p>
                <p>
                  <strong>What does Wegovy contain?</strong> One active medicine,
                  semaglutide, in a liquid. The leaflet in the box lists the
                  other ingredients. The pen is ready to use. You do not mix
                  anything.
                </p>
                <p>
                  <strong>What type of drug is Wegovy?</strong> A GLP-1 receptor
                  agonist. In plain words, it copies one gut hormone. Mounjaro
                  copies two.
                </p>
                <p>
                  <strong>Is Wegovy a prescription drug?</strong> Yes. It is
                  prescription only in the UK.
                </p>
              </div>
            </section>

            {/* Section 7: Doses and the FlexTouch pen */}
            <section
              id="doses-and-flextouch"
              className="scroll-mt-28 space-y-6 text-slate-700"
            >
              <div className="space-y-3">
                <h2 className={h2Class}>Wegovy doses and the FlexTouch pen</h2>
                <p className="text-base leading-relaxed">
                  The Wegovy FlexTouch pen holds four doses. You take one
                  injection a week, so one pen lasts four weeks. Wegovy comes in
                  six strengths.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full min-w-[460px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="w-1/4 px-4 py-3 font-semibold text-slate-900">
                        Step
                      </th>
                      <th className="w-3/4 px-4 py-3 font-semibold text-slate-900">
                        Strength
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-800">
                    {[
                      "0.25 mg (starter dose, first 4 weeks)",
                      "0.5 mg",
                      "1 mg",
                      "1.7 mg",
                      "2.4 mg (usual long term dose)",
                      "7.2 mg (only for some adults, after treatment at 2.4 mg)",
                    ].map((strength, i) => (
                      <tr key={strength}>
                        <td className="px-4 py-3 font-medium text-slate-900">
                          {i + 1}
                        </td>
                        <td className="px-4 py-3">{strength}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-3 leading-relaxed">
                <p>
                  Everyone starts on 0.25 mg. If the prescriber agrees, the dose
                  goes up every 4 weeks to 2.4 mg. Not everyone needs the top
                  dose. The starter dose helps your body get used to the
                  medicine.
                </p>
                <p>
                  <strong>How you use the Wegovy injection:</strong> once a
                  week, on the same day, into the skin of your tummy, thigh or
                  upper arm. Keep unused pens in the fridge. Always follow the
                  leaflet in the box.
                </p>
                <p>Need to check your dose on the pen?</p>
                <Link href="/tools/wegovy-click-calculator" className={linkClass}>
                  Open the click calculator →
                </Link>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  Is there a Wegovy pill?
                </h3>
                <p className="leading-relaxed">
                  Yes. There is a daily Wegovy tablet that contains the same
                  medicine. It is a separate product from the weekly injection on
                  this page.
                </p>
                <div className="flex flex-wrap gap-4 pt-1">
                  <Link href="/what-is-wegovy-pill" className={linkClass}>
                    What is the Wegovy pill? →
                  </Link>
                  <Link href="/wegovy-tablet-faqs" className={linkClass}>
                    Wegovy tablet FAQ →
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 8: When it starts working */}
            <section
              id="when-wegovy-starts-working"
              className="scroll-mt-28 space-y-6 text-slate-700"
            >
              <div className="space-y-3">
                <h2 className={h2Class}>When does Wegovy start working?</h2>
                <p className="text-base leading-relaxed">
                  Wegovy starts working in your body after the first dose. Some
                  people feel less hungry in the first weeks. Weight loss is slow
                  and steady, and it speeds up as the dose goes up. Everyone is
                  different.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Wegovy timeline
                </h3>
                <TwoColTable
                  head={["Time", "What may happen"]}
                  rows={[
                    [
                      "Weeks 1 to 4",
                      "Starter dose of 0.25 mg. Your body gets used to the medicine. You may feel full sooner. Feeling sick is most common now.",
                    ],
                    [
                      "Weeks 5 to 16",
                      "The dose goes up every 4 weeks, from 0.5 mg to 1 mg and then 1.7 mg. Hunger often drops more. Weight may start to fall.",
                    ],
                    [
                      "Week 17 onwards",
                      "Most people reach 2.4 mg, the usual long term dose. Weight loss is usually clearest at this stage.",
                    ],
                    [
                      "Months 6 to 16",
                      "In trials, weight kept falling for about 68 weeks (about 16 months).",
                    ],
                  ]}
                />
                <p className="text-xs italic text-slate-500">
                  These are typical steps, not promises. Your prescriber decides
                  when to raise your dose.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  Wegovy weight loss results
                </h3>
                <p className="leading-relaxed">
                  In the main trial (STEP 1), adults on Wegovy 2.4 mg lost about
                  15% of their body weight on average after 68 weeks, against
                  about 2.4% on placebo. If you weigh 100 kg, that is about 15 kg.
                  Some people lose less and some lose more.
                </p>
                <p className="leading-relaxed">
                  In a head to head trial, people lost more weight on Mounjaro
                  than on Wegovy (20.2% against 13.7% after 72 weeks).
                </p>
                <Link href="/compare/wegovy-vs-mounjaro" className={linkClass}>
                  Read our full Mounjaro vs Wegovy comparison →
                </Link>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  Is Wegovy effective?
                </h3>
                <p className="leading-relaxed">
                  Yes, for most people in trials it lowered weight. But Wegovy is
                  not a magic pill. It works best with healthy food, enough
                  protein and activity. If you stop, hunger and weight often come
                  back.
                </p>
              </div>
            </section>

            {/* Section 9: Who can take it */}
            <section
              id="who-can-take-it"
              className="scroll-mt-28 space-y-6 text-slate-700"
            >
              <div className="space-y-3">
                <h2 className={h2Class}>Who can take Wegovy in the UK?</h2>
                <p className="text-base leading-relaxed">
                  Adults can take Wegovy if a UK prescriber checks their health
                  and says it is suitable. You cannot buy it without a
                  prescription.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  Is Wegovy good for you?
                </h3>
                <p className="font-semibold text-slate-900">
                  You may be able to use Wegovy if:
                </p>
                <ul className="list-inside list-disc space-y-1.5">
                  <li>you are 18 or older</li>
                  <li>
                    you have a BMI of 30 or more, or a BMI of 27 or more with a
                    weight related health problem
                  </li>
                  <li>a prescriber says it is right for you</li>
                </ul>
                <p className="mt-4 font-semibold text-slate-900">
                  Wegovy may not be right if:
                </p>
                <ul className="list-inside list-disc space-y-1.5">
                  <li>you are pregnant, trying to get pregnant or breastfeeding</li>
                  <li>you have had pancreatitis (a swollen pancreas)</li>
                  <li>you are allergic to semaglutide</li>
                  <li>you take another medicine that contains semaglutide</li>
                </ul>
                <div className="mt-4 space-y-2 rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-sm text-slate-800">
                  <p>
                    <strong>Pregnancy:</strong> The NHS says to stop Wegovy at
                    least 2 months before you try to get pregnant.
                  </p>
                  <p>
                    <strong>Other medicines:</strong> Tell your prescriber about
                    all your medicines, especially insulin and other diabetes
                    medicines.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  How to get Wegovy in the UK
                </h3>
                <p className="leading-relaxed">There are two routes.</p>
                <div className="space-y-3 leading-relaxed">
                  <p>
                    <strong>NHS.</strong> Wegovy is available on the NHS for some
                    people, through specialist weight management services. You
                    usually need a BMI of 35 or more and a weight related health
                    problem. NHS treatment lasts up to 2 years.
                  </p>
                  <p>
                    <strong>Private.</strong> After an online or in person health
                    check, a prescriber can write a private prescription. A GPhC
                    registered pharmacy then sends the pen.
                  </p>
                </div>
                <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="font-semibold text-slate-900">
                    How to get a Wegovy prescription if you go private:
                  </p>
                  <ol className="list-inside list-decimal space-y-2">
                    <li>Fill in a health form with your weight, height and health history.</li>
                    <li>A prescriber checks it. They may ask more questions.</li>
                    <li>If it is suitable, you get a prescription.</li>
                    <li>A GPhC registered pharmacy sends your pen.</li>
                  </ol>
                </div>
              </div>

              <div className="space-y-3 rounded-2xl border border-emerald-900/15 bg-emerald-50/50 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Check that a pharmacy is safe
                </h3>
                <ol className="list-inside list-decimal space-y-2 text-slate-800">
                  <li>
                    <strong>Find the GPhC number:</strong> on the pharmacy&apos;s
                    website. It is usually in the footer.
                  </li>
                  <li>
                    <strong>Check the official register:</strong> on the official
                    GPhC register. The name and address should match.
                  </li>
                  <li>
                    <strong>Expect a health questionnaire:</strong> A real online
                    pharmacy will always ask about your weight, health and other
                    medicines.
                  </li>
                </ol>
                <Link href="/pharmacy-safety-gphc-verification" className={linkClass}>
                  Read our pharmacy safety guide →
                </Link>
                <p className="text-sm leading-relaxed text-slate-700">
                  Looking for a provider?{" "}
                  <Link href="/pharmacies" className={linkClass}>
                    Browse the pharmacies we review
                  </Link>
                  , or read our{" "}
                  <Link
                    href="/helpful-guides/category/pharmacy-safety"
                    className={linkClass}
                  >
                    pharmacy safety guides
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 10: Is Wegovy safe? */}
            <section
              id="is-wegovy-safe"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className={h2Class}>Is Wegovy safe?</h2>
              <p className="text-base leading-relaxed text-slate-800">
                Wegovy is a licensed UK medicine, and many people use it safely
                under a prescriber&apos;s care. Like all medicines, it can cause
                side effects. The most common are feeling sick, being sick,
                diarrhoea, constipation and stomach pain. They are often mild and
                often ease as your body gets used to the dose. They are most
                likely when you start or when the dose goes up.
              </p>
              <p className="text-base leading-relaxed">
                <strong>What can help:</strong> eat small meals, stop eating when
                you feel full, drink water, and tell your prescriber if it does
                not get better.
              </p>
              <div className="space-y-2 rounded-xl border border-red-200 bg-red-50/70 p-5 text-sm text-red-950">
                <p className="font-bold text-red-900">
                  When to get urgent medical help:
                </p>
                <p>
                  Get help at once, from your prescriber or NHS 111, if you have
                  severe stomach pain that does not go away, or vomiting you
                  cannot stop. Call 999 if you have trouble breathing or your face
                  swells.
                </p>
              </div>
              <p className="text-sm text-slate-600">
                You can report side effects to the Yellow Card scheme.
              </p>
              <Link
                href="/blog/side-effects-of-wegovy-and-how-to-manage-them"
                className={linkClass}
              >
                Read our Wegovy side effects guide →
              </Link>
              <p className="text-sm leading-relaxed text-slate-700">
                Struggling with a setback on treatment? Browse all our{" "}
                <Link
                  href="/helpful-guides/category/side-effects"
                  className={linkClass}
                >
                  side effects guides
                </Link>
                .
              </p>
            </section>

            {/* Section 11: Compare prices */}
            <section
              id="compare-wegovy-prices"
              className="scroll-mt-28 space-y-6 text-slate-700"
            >
              <div className="space-y-3">
                <h2 className={h2Class}>Compare Wegovy prices before you buy</h2>
                <p className="text-base leading-relaxed">
                  Prices are different at every pharmacy. At our latest check (
                  {WEGOVY_UK_COMPARE_LAST_UPDATED}), a 0.25 mg starter pen
                  started from <strong>{starterPrice}</strong>. A 2.4 mg pen cost
                  from <strong>{dose24Low}</strong> to{" "}
                  <strong>{dose24High}</strong> across {providerCount} GPhC
                  registered pharmacies. Prices are for the pen only. Delivery is
                  usually extra.
                </p>
              </div>

              <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-lg font-bold text-slate-900">
                  Why use Healthwise360:
                </p>
                <ul className="space-y-3 text-slate-800">
                  {[
                    [
                      "Independent:",
                      "We compare. We do not sell, prescribe or send medicines.",
                    ],
                    [
                      "GPhC registered pharmacies only:",
                      `${providerCount} of them tracked for Wegovy.`,
                    ],
                    [
                      "The price of every dose:",
                      "not just the headline starter pen.",
                    ],
                    [
                      "No paid rankings:",
                      "Price, safety and our 5 checks decide the order.",
                    ],
                    [
                      "Free tools:",
                      "Use our Wegovy click calculator for your pen.",
                    ],
                  ].map(([lead, rest]) => (
                    <li key={lead} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                        strokeWidth={2.5}
                      />
                      <span>
                        <strong>{lead}</strong> {rest}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                  <Link href="/wegovy-price-comparison" className={primaryBtn}>
                    Compare Wegovy prices
                  </Link>
                  <Link
                    href="/tools/wegovy-click-calculator"
                    className={secondaryBtn}
                  >
                    Open the click calculator
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 12: Questions to ask */}
            <section
              id="questions-to-ask"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className={h2Class}>
                Is Wegovy right for me? Questions to ask your prescriber
              </h2>
              <p className="leading-relaxed">
                A good prescriber will be happy to answer these. Write them down
                before your check.
              </p>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <ol className="list-inside list-decimal space-y-3 font-medium leading-relaxed text-slate-800">
                  <li>Is Wegovy suitable for my health and my other medicines?</li>
                  <li>Which dose will I start on, and when will it go up?</li>
                  <li>What side effects should I watch for, and who do I call?</li>
                  <li>How much weight should I aim to lose, and when will you check my progress?</li>
                  <li>What happens if I miss a dose or want to stop?</li>
                  <li>How long will I need to take it?</li>
                </ol>
              </div>
            </section>

            {/* Section 13: FAQ */}
            <section id="faq" className="scroll-mt-28 space-y-6">
              <h2 className={h2Class}>Wegovy questions answered</h2>
              <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="group p-5 transition hover:bg-slate-50/50"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                      <h3 className="inline text-base font-semibold text-slate-900">
                        {item.question}
                      </h3>
                      <span className="ml-2 text-slate-400 transition-transform group-open:rotate-180">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">
                      {item.answer}
                    </p>
                    {item.question === "What does Wegovy cost in the UK?" && (
                      <div className="mt-2.5">
                        <Link href="/wegovy-price-comparison" className={linkClass}>
                          Compare Wegovy prices →
                        </Link>
                      </div>
                    )}
                    {item.question === "Is Wegovy the same as Mounjaro?" && (
                      <div className="mt-2.5">
                        <Link href="/compare/wegovy-vs-mounjaro" className={linkClass}>
                          Read our full Mounjaro vs Wegovy comparison →
                        </Link>
                      </div>
                    )}
                  </details>
                ))}
              </div>
            </section>

            <p className="text-base leading-relaxed text-slate-700">
              Want to read more about semaglutide? Browse all our{" "}
              <Link href="/blog/topic/wegovy" className={linkClass}>
                Wegovy articles
              </Link>
              . Our guides are prepared by our{" "}
              <Link href="/editorial-team" className={linkClass}>
                editorial team
              </Link>
              .
            </p>

            <div className="space-y-2 border-t border-slate-200 pt-8 text-xs text-slate-500">
              <p>
                <strong>Medical Disclaimer:</strong> Healthwise360 is an
                independent comparison and health information provider, not a
                pharmacy or prescribing clinic. All content is for educational
                transparency only. Always consult a qualified UK healthcare
                professional for clinical decisions. Source:{" "}
                <a
                  href="https://www.nhs.uk/medicines/semaglutide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  NHS: semaglutide
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
