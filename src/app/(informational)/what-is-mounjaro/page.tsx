import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import MounjaroPageToc from "@/components/mounjaro/MounjaroPageToc";
import {
  mounjaroArticleJsonLd,
  mounjaroFaqJsonLd,
  MOUNJARO_FAQ_ITEMS,
} from "@/lib/seo/mounjaro-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import {
  WHY_CHOOSE_HEALTHWISE360_ALT,
  WHY_CHOOSE_HEALTHWISE360_SRC,
} from "@/lib/site-assets";
import {
  MOUNJARO_UK_COMPARE_PROVIDERS,
  MOUNJARO_UK_COMPARE_LAST_UPDATED,
} from "@/lib/data/mounjaro-uk-compare-providers";
import { buildMounjaroPriceInsights } from "@/lib/data/mounjaro-price-insights";

export const metadata: Metadata = {
  ...buildPageShareMetadata({
    canonicalPath: "/what-is-mounjaro",
    title: "What Is Mounjaro? UK Guide to Doses, Results & Prices",
    metaDescription:
      "What is Mounjaro (tirzepatide)? UK guide covering how it works, licensed uses, doses, results, side effects and price comparison across 67 GPhC pharmacies.",
    openGraphTitle: "What Is Mounjaro? UK Guide to Doses, Results & Prices",
    openGraphDescription:
      "What is Mounjaro (tirzepatide)? UK guide covering how it works, licensed uses, doses, results, side effects and price comparison across 67 GPhC pharmacies.",
    imagePath: WHY_CHOOSE_HEALTHWISE360_SRC,
    imageAlt: WHY_CHOOSE_HEALTHWISE360_ALT,
  }),
  title: {
    absolute: "What Is Mounjaro? UK Guide to Doses, Results & Prices",
  },
};

export default function WhatIsMounjaroPage() {
  const articleLd = mounjaroArticleJsonLd();
  const faqLd = mounjaroFaqJsonLd();

  // Dynamic price insights from 67 GPhC-registered UK providers
  const insights = buildMounjaroPriceInsights(MOUNJARO_UK_COMPARE_PROVIDERS);
  const providerCount = insights?.providerCount ?? 67;
  const starterPrice = insights?.starter.low ? `£${insights.starter.low}` : "£99";
  const topPrice = insights?.top.high ? `£${insights.top.high}` : "£359.95";

  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Information"
        sectionPath="/helpful-guides"
        pageName="What is Mounjaro?"
        pagePath="/what-is-mounjaro"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <article className="w-full">
        {/* =========================================================================
            Section 1: Hero
            ========================================================================= */}
        <section
          id="what-is-mounjaro"
          className="scroll-mt-28 w-full border-b border-slate-200/80 bg-gradient-to-b from-[#f4f7f5] to-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-5 sm:py-12 md:px-8 md:py-16">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 ring-1 ring-emerald-200/70">
                UK Treatment Guide
              </span>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.12]">
                What Is Mounjaro?
              </h1>
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-800 sm:text-lg">
                Mounjaro is a once weekly injection. The medicine inside it is
                called tirzepatide. It copies two hormones that your gut makes
                when you eat. These hormones help you feel full and help control
                blood sugar. In the UK, Mounjaro is used for type 2 diabetes and
                for weight loss. You need a prescription to get it.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                So, what&apos;s Mounjaro in simple words? It is a prescription
                pen that helps some adults eat less and control their blood
                sugar. This Mounjaro guide has the Mounjaro information you
                need: how it works, how long it takes, who can take it and what
                it costs.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/mounjaro-price-comparison"
                  className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-sm ring-1 ring-amber-300 transition duration-150 hover:bg-amber-300 hover:scale-[1.01] active:scale-[0.99] sm:text-base text-center"
                >
                  Compare Mounjaro prices
                </Link>
                <Link
                  href="/tools/mounjaro-click-calculator"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition duration-150 hover:bg-slate-50 hover:text-slate-950 sm:text-base text-center"
                >
                  Open the click calculator
                </Link>
              </div>

              {/* Trust Chips */}
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-200/80 pt-4 text-xs font-semibold text-slate-600 sm:text-sm">
                <div className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" strokeWidth={2.5} />
                  <span>Last reviewed {MOUNJARO_UK_COMPARE_LAST_UPDATED}</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" strokeWidth={2.5} />
                  <span>No paid rankings</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" strokeWidth={2.5} />
                  <span>{providerCount} GPhC pharmacies tracked</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            Main Content Layout with Sticky TOC
            ========================================================================= */}
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:px-6 lg:flex-row lg:gap-12 lg:py-14">
          <MounjaroPageToc />

          <div className="min-w-0 flex-1 space-y-16 lg:space-y-20">
            {/* =========================================================================
                Section 2: Mounjaro facts at a glance
                ========================================================================= */}
            <section
              id="mounjaro-facts-at-a-glance"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Mounjaro facts at a glance
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full min-w-[480px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="w-2/5 px-4 py-3 font-semibold text-slate-900">
                        Fact
                      </th>
                      <th className="w-3/5 px-4 py-3 font-semibold text-slate-900">
                        Answer
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-800">
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">Brand name</td>
                      <td className="px-4 py-3">Mounjaro</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">Medicine inside</td>
                      <td className="px-4 py-3">Tirzepatide (say tir ZEP uh tide)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">Made by</td>
                      <td className="px-4 py-3">Eli Lilly (Lilly)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">What it copies</td>
                      <td className="px-4 py-3">Two gut hormones, GIP and GLP-1</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">How you take it</td>
                      <td className="px-4 py-3">One injection a week, under the skin</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">The pen</td>
                      <td className="px-4 py-3">KwikPen. One pen holds 4 doses, so it lasts 4 weeks</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">Starter dose</td>
                      <td className="px-4 py-3">2.5 mg</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">Top dose</td>
                      <td className="px-4 py-3">15 mg</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">Strengths</td>
                      <td className="px-4 py-3">6 (2.5, 5, 7.5, 10, 12.5 and 15 mg)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">Used in the UK for</td>
                      <td className="px-4 py-3">Type 2 diabetes and weight loss in adults</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">Prescription needed</td>
                      <td className="px-4 py-3">Yes. Mounjaro is prescription only</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">Same as Zepbound?</td>
                      <td className="px-4 py-3">Same medicine. Zepbound is the US brand name</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* =========================================================================
                Section 3: Mounjaro words explained
                ========================================================================= */}
            <section
              id="mounjaro-words-explained"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Mounjaro words explained
              </h2>
              <p className="text-slate-600 leading-relaxed">
                New to this? Here are the words you will see most.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full min-w-[500px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="w-2/5 px-4 py-3 font-semibold text-slate-900">
                        Word
                      </th>
                      <th className="w-3/5 px-4 py-3 font-semibold text-slate-900">
                        What it means
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-800">
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">How to pronounce Mounjaro</td>
                      <td className="px-4 py-3">Say mown JAR oh.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">Mounjaro meaning</td>
                      <td className="px-4 py-3">Mounjaro is the brand name of a medicine. The medicine inside is tirzepatide.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">What is Mounjaro injection?</td>
                      <td className="px-4 py-3">It is the weekly shot you give yourself with a pen.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">What are Mounjaro injections?</td>
                      <td className="px-4 py-3">They are the weekly doses. One KwikPen holds four of them.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">Mounjaro jab</td>
                      <td className="px-4 py-3">Another name for the weekly injection.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">Mounjaro weight loss injection</td>
                      <td className="px-4 py-3">A common name for Mounjaro when it is used for weight loss.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">What is Mounjaro weight loss treatment?</td>
                      <td className="px-4 py-3">Using Mounjaro with a lower calorie diet and more activity to lose weight, under a prescriber&apos;s care.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">Mounjaro drug</td>
                      <td className="px-4 py-3">A drug is a medicine. Mounjaro is a prescription drug.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">Dose</td>
                      <td className="px-4 py-3">The strength of the pen, such as 2.5 mg.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* =========================================================================
                Section 4: How it works
                ========================================================================= */}
            <section
              id="how-mounjaro-works"
              className="scroll-mt-28 space-y-8 text-slate-700"
            >
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  How does Mounjaro work?
                </h2>
                <p className="text-base leading-relaxed">
                  Mounjaro works by copying two hormones your gut makes after you
                  eat. They are called GIP and GLP-1. They tell your brain you
                  are full. They slow down how fast food leaves your stomach.
                  They also help your body control blood sugar. Doctors call this
                  the Mounjaro mechanism of action.
                </p>
              </div>

              {/* Sub-section 4.1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  How does Mounjaro work for weight loss?
                </h3>
                <p className="leading-relaxed">
                  Mounjaro helps you eat less. You feel full sooner. You stay
                  full for longer. You think about food less.
                </p>
                <div className="mt-3">
                  <p className="font-semibold text-slate-900">
                    How does Mounjaro help you lose weight, step by step?
                  </p>
                  <ol className="mt-3 list-decimal list-inside space-y-2 text-slate-700">
                    <li>You inject Mounjaro once a week.</li>
                    <li>The medicine acts on your brain and your gut.</li>
                    <li>You feel less hungry and have fewer cravings.</li>
                    <li>You eat smaller meals.</li>
                    <li>Over time, your body uses stored fat for energy.</li>
                  </ol>
                </div>
              </div>

              {/* Sub-section 4.2 */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  Does Mounjaro burn fat or just suppress appetite?
                </h3>
                <p className="leading-relaxed">
                  Mostly it lowers your appetite. It does not burn fat by
                  itself.
                </p>
                <p className="leading-relaxed">
                  <strong>How does Mounjaro make you lose weight?</strong> You
                  eat less, so your body uses stored fat for energy.{" "}
                  <strong>
                    How does Mounjaro cause weight loss in the long run?
                  </strong>{" "}
                  Small, steady drops in calories add up over many months. Some
                  of the weight you lose can be muscle, so eat enough protein
                  and stay active.
                </p>
              </div>

              {/* Sub-section 4.3 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  What does Mounjaro do to your body?
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[460px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50">
                        <th className="w-1/3 px-4 py-3 font-semibold text-slate-900">
                          Part of the body
                        </th>
                        <th className="w-2/3 px-4 py-3 font-semibold text-slate-900">
                          What Mounjaro does
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-900">Brain</td>
                        <td className="px-4 py-3">You feel full sooner and less hungry</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-900">Stomach</td>
                        <td className="px-4 py-3">Food leaves your stomach more slowly, so you stay full for longer</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-900">Pancreas</td>
                        <td className="px-4 py-3">Helps your body make insulin when blood sugar is high</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-900">Liver</td>
                        <td className="px-4 py-3">Helps your liver release less sugar</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  <strong>What does Mounjaro do overall?</strong> It lowers
                  blood sugar and appetite.{" "}
                  <strong>What does the Mounjaro injection do each week?</strong>{" "}
                  It tops up the medicine in your body so these effects keep
                  going.
                </p>
              </div>
            </section>

            {/* =========================================================================
                Section 5: What it is used for
                ========================================================================= */}
            <section
              id="what-mounjaro-is-used-for"
              className="scroll-mt-28 space-y-6 text-slate-700"
            >
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  What is Mounjaro used for?
                </h2>
                <p className="text-base leading-relaxed">
                  In the UK, Mounjaro is licensed for two things: type 2
                  diabetes and weight loss in adults. Licensed means the UK
                  medicines regulator, the MHRA, has checked it for these uses.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  What is Mounjaro licensed to treat in the UK?
                </h3>
                <div className="space-y-3 text-slate-700 leading-relaxed">
                  <p>
                    <strong>Type 2 diabetes.</strong> Mounjaro for type 2
                    diabetes helps lower blood sugar. Adults can take it alone
                    or with other diabetes medicines.
                  </p>
                  <p>
                    <strong>Weight loss.</strong> What is Mounjaro for weight
                    loss? It is a once weekly injection that lowers hunger so you
                    can eat less. Mounjaro for weight loss is for adults with a
                    BMI of 30 or more, or a BMI of 27 to under 30 with at least
                    one weight related health problem. You use it with a lower
                    calorie diet and more activity.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  Mounjaro benefits
                </h3>
                <ul className="space-y-2.5 text-slate-800">
                  {[
                    "Lower blood sugar for people with type 2 diabetes",
                    "Weight loss",
                    "Less hunger and fewer cravings",
                    "One injection a week, not every day",
                    "In studies, many people also saw lower blood pressure and better cholesterol",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" strokeWidth={2.5} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  These Mounjaro health benefits depend on the person. Is
                  Mounjaro good for you? It can help the right person, but it is
                  not right for everyone. A prescriber decides.
                </p>
              </div>
            </section>

            {/* =========================================================================
                Section 6: Tirzepatide and ingredients
                ========================================================================= */}
            <section
              id="tirzepatide-and-ingredients"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                What is tirzepatide, and what is in Mounjaro?
              </h2>
              <div className="space-y-3 text-base leading-relaxed text-slate-800">
                <p>
                  Tirzepatide is the medicine inside Mounjaro. Mounjaro is the
                  brand name. Mounjaro tirzepatide means the brand and the
                  medicine in it.
                </p>
                <p>
                  <strong>What&apos;s in Mounjaro?</strong> One active medicine,
                  tirzepatide, in a liquid. The leaflet in the box lists the other
                  ingredients.
                </p>
                <p>
                  <strong>What is Mounjaro made of?</strong> It is made by Eli
                  Lilly. Tirzepatide is made in a lab to copy gut hormones.
                </p>
                <p>
                  <strong>What does Mounjaro contain?</strong> Tirzepatide in a
                  pen that is ready to use. You do not mix anything.
                </p>
                <p>
                  <strong>What drug is Mounjaro?</strong> A prescription
                  medicine.
                </p>
                <p>
                  <strong>What type of drug is Mounjaro?</strong> A GIP and
                  GLP-1 receptor agonist. In plain words, it copies two gut
                  hormones.
                </p>
                <p>
                  <strong>What class of drug is Mounjaro?</strong> The same
                  class: a dual GIP and GLP-1 receptor agonist. Some other weight
                  loss injections, such as Wegovy, copy only GLP-1.
                </p>
              </div>
            </section>

            {/* =========================================================================
                Section 7: Doses and the KwikPen
                ========================================================================= */}
            <section
              id="doses-and-kwikpen"
              className="scroll-mt-28 space-y-6 text-slate-700"
            >
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  Mounjaro doses and the KwikPen
                </h2>
                <p className="text-base leading-relaxed">
                  The Mounjaro KwikPen holds four doses. You take one injection a
                  week, so one pen lasts four weeks. Mounjaro comes in six
                  strengths.
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
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">1</td>
                      <td className="px-4 py-3">2.5 mg (starter dose, first 4 weeks)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">2</td>
                      <td className="px-4 py-3">5 mg</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">3</td>
                      <td className="px-4 py-3">7.5 mg</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">4</td>
                      <td className="px-4 py-3">10 mg</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">5</td>
                      <td className="px-4 py-3">12.5 mg</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">6</td>
                      <td className="px-4 py-3">15 mg (top dose)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-3 text-slate-700 leading-relaxed">
                <p>
                  Most people start on 2.5 mg. If the prescriber agrees, the
                  dose goes up every 4 weeks. Not everyone needs the top dose.
                  The 2.5 mg dose is a starter dose. It helps your body get used
                  to the medicine.
                </p>
                <p>
                  <strong>How you use the Mounjaro injection:</strong> once a
                  week, on the same day, into the skin of your tummy, thigh or
                  the back of your upper arm. Keep unused pens in the fridge.
                  Always follow the leaflet in the box.
                </p>
                <p>
                  Need to work out your dose on the pen?
                </p>
                <div className="pt-2">
                  <Link
                    href="/tools/mounjaro-click-calculator"
                    className="inline-flex items-center gap-1.5 font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-950"
                  >
                    Open the Mounjaro click calculator →
                  </Link>
                </div>
              </div>
            </section>

            {/* =========================================================================
                Section 8: How long it takes
                ========================================================================= */}
            <section
              id="how-long-it-takes"
              className="scroll-mt-28 space-y-6 text-slate-700"
            >
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  How long does Mounjaro take to work?
                </h2>
                <p className="text-base leading-relaxed">
                  Some people feel less hungry soon after the first doses.
                  Weight loss is slow and steady. In studies, weight kept
                  falling for about 16 months. Everyone is different.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  When does Mounjaro start working?
                </h3>
                <p className="leading-relaxed">
                  Mounjaro starts working in your body after the first dose. You
                  may not notice much at first, because 2.5 mg is a starter dose.
                  Most people notice more as the dose goes up.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Mounjaro timeline
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[500px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50">
                        <th className="w-1/3 px-4 py-3 font-semibold text-slate-900">
                          Time
                        </th>
                        <th className="w-2/3 px-4 py-3 font-semibold text-slate-900">
                          What may happen
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-900">Weeks 1 to 4</td>
                        <td className="px-4 py-3">
                          Starter dose of 2.5 mg. Your body gets used to the medicine. You may feel full sooner. Side effects such as feeling sick are most common now.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-900">Weeks 5 to 12</td>
                        <td className="px-4 py-3">
                          The dose may go up every 4 weeks. Hunger often drops more. Weight may start to fall.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-900">Months 3 to 6</td>
                        <td className="px-4 py-3">
                          Regular check ins with your prescriber. Your dose may reach the level that suits you.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-900">Month 6</td>
                        <td className="px-4 py-3">
                          Many prescribers check you have lost at least 5% of your weight. The NHS says treatment should stop if you have not, after 6 months on the highest dose you can manage.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-900">Months 6 to 16</td>
                        <td className="px-4 py-3">
                          In trials, weight kept falling up to 72 weeks (about 16 months).
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic">
                  These are typical steps, not promises.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  What to expect
                </h3>
                <p className="leading-relaxed">
                  Expect a weekly injection, a slow rise in dose, some tummy side
                  effects and regular check ins. Eat enough protein and stay
                  active.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  Mounjaro weight loss results
                </h3>
                <p className="leading-relaxed">
                  In the biggest trial (SURMOUNT-1), people on the 15 mg dose
                  lost 20.9% of their body weight on average after 72 weeks. If
                  you weigh 100 kg, that is about 21 kg. Some people lose less
                  and some lose more.
                </p>
                <p className="leading-relaxed">
                  In a head to head trial, Mounjaro led to more weight loss than
                  Wegovy (20.2% against 13.7% after 72 weeks).
                </p>
                <div className="pt-2">
                  <Link
                    href="/compare/wegovy-vs-mounjaro"
                    className="inline-flex items-center gap-1.5 font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-950"
                  >
                    Read our full Mounjaro vs Wegovy comparison →
                  </Link>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  Does Mounjaro work?
                </h3>
                <p className="leading-relaxed">
                  Yes, for most people in trials it lowered weight and blood
                  sugar. But Mounjaro is not a magic pill. It works best with
                  healthy food, enough protein and activity. If you stop, weight
                  often comes back.
                </p>
              </div>
            </section>

            {/* =========================================================================
                Section 9: Who can take it
                ========================================================================= */}
            <section
              id="who-can-take-it"
              className="scroll-mt-28 space-y-6 text-slate-700"
            >
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  Who can take Mounjaro in the UK?
                </h2>
                <p className="text-base leading-relaxed">
                  Adults can take Mounjaro if a UK prescriber checks their health
                  and says it is suitable. You cannot buy it without a
                  prescription.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  Can I use Mounjaro?
                </h3>
                <p className="font-semibold text-slate-900">
                  You may be able to use Mounjaro if:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-slate-700">
                  <li>you are 18 or older</li>
                  <li>
                    you have type 2 diabetes, or a BMI of 30 or more, or a BMI of
                    27 or more with a weight related health problem
                  </li>
                  <li>a prescriber says it is right for you</li>
                </ul>

                <p className="mt-4 font-semibold text-slate-900">
                  Mounjaro may not be right if:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-slate-700">
                  <li>you are pregnant, trying to get pregnant or breastfeeding</li>
                  <li>you have had pancreatitis (a swollen pancreas)</li>
                  <li>you are allergic to tirzepatide</li>
                  <li>you have severe stomach or gut problems</li>
                </ul>

                <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-sm text-slate-800 space-y-2">
                  <p>
                    <strong>Safety note on medicines:</strong> Tell your prescriber
                    about all your medicines, especially insulin.
                  </p>
                  <p>
                    <strong>Contraception:</strong> If you take the contraceptive
                    pill, the NHS says to use extra contraception, such as a
                    condom, for 4 weeks after you start and after each dose
                    increase.
                  </p>
                  <p>
                    <strong>Surgery:</strong> Tell your care team before any
                    operation, because Mounjaro slows how fast your stomach
                    empties.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  Is Mounjaro prescription only?
                </h3>
                <p className="leading-relaxed">
                  Yes. Mounjaro is prescription only in the UK. A real UK pharmacy
                  will always ask about your health first. Be careful with any site
                  that sells it without questions.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  How to get Mounjaro in the UK
                </h3>
                <p className="leading-relaxed">There are two routes.</p>
                <div className="space-y-3 text-slate-700 leading-relaxed">
                  <p>
                    <strong>NHS.</strong> Since June 2025, GPs in England can
                    prescribe Mounjaro for weight loss to people with the greatest
                    need. At first, that means a BMI of 40 or more and at least
                    four weight related health conditions. About 220,000 people
                    are expected to get it in three years. More people will
                    qualify over time.
                  </p>
                  <p>
                    <strong>Private.</strong> After an online or in person health
                    check, a prescriber can write a private prescription. A GPhC
                    registered pharmacy then sends the pen.
                  </p>
                </div>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
                  <p className="font-semibold text-slate-900">
                    How to get Mounjaro prescription for weight loss, if you go
                    private:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-slate-700">
                    <li>Fill in a health form with your weight, height and health history.</li>
                    <li>A prescriber checks it. They may ask more questions.</li>
                    <li>If it is suitable, you get a prescription.</li>
                    <li>A GPhC registered pharmacy sends your pen.</li>
                  </ol>
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-900/15 bg-emerald-50/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  Check that a pharmacy is safe
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-slate-800">
                  <li>
                    <strong>Find the GPhC number:</strong> on the pharmacy&apos;s
                    website. It is usually in the footer.
                  </li>
                  <li>
                    <strong>Check official register:</strong> on the official
                    GPhC register. The name and address should match.
                  </li>
                  <li>
                    <strong>Expect a health questionnaire:</strong> A real online
                    pharmacy will always ask about your weight, health and other
                    medicines.
                  </li>
                </ol>
                <div className="pt-2">
                  <Link
                    href="/pharmacy-safety-gphc-verification"
                    className="inline-flex items-center gap-1.5 font-semibold text-emerald-800 underline decoration-emerald-500 underline-offset-4 hover:text-emerald-950"
                  >
                    Read our pharmacy safety guide →
                  </Link>
                </div>
              </div>
            </section>

            {/* =========================================================================
                Section 10: Side effects
                ========================================================================= */}
            <section
              id="mounjaro-side-effects"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Mounjaro side effects
              </h2>
              <p className="text-base leading-relaxed text-slate-800">
                Mounjaro can cause side effects. The most common are feeling sick,
                being sick, diarrhoea, constipation, stomach pain and
                indigestion. They are often mild and often ease as your body gets
                used to the dose. They are most likely when you start or when the
                dose goes up.
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                <strong>What can help:</strong> eat small meals, stop eating when
                you feel full, drink water, and tell your prescriber if it does
                not get better.
              </p>

              <div className="rounded-xl border border-red-200 bg-red-50/70 p-5 text-sm text-red-950 space-y-2">
                <p className="font-bold text-red-900">When to get urgent medical help:</p>
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
              <div className="pt-1">
                <Link
                  href="/helpful-guides/mounjaro-side-effects-uk"
                  className="inline-flex items-center gap-1.5 font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-950"
                >
                  Read our Mounjaro side effects guide →
                </Link>
              </div>
            </section>

            {/* =========================================================================
                Section 11: Compare prices
                ========================================================================= */}
            <section
              id="compare-mounjaro-prices"
              className="scroll-mt-28 space-y-6 text-slate-700"
            >
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  Compare Mounjaro prices before you buy
                </h2>
                <p className="text-base leading-relaxed">
                  Prices are different at every pharmacy. At our latest check (
                  {MOUNJARO_UK_COMPARE_LAST_UPDATED}), a 2.5 mg pen started from{" "}
                  <strong>{starterPrice}</strong> and a 15 mg pen cost up to{" "}
                  <strong>{topPrice}</strong> across {providerCount} GPhC
                  registered pharmacies. Prices are for the pen only. Delivery
                  is usually extra.
                </p>
                <p className="text-base leading-relaxed">
                  Looking for Mounjaro weight loss injection UK prices? See every
                  dose and pharmacy in our price comparison.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Why use Healthwise360:
                </h3>
                <ul className="space-y-3 text-slate-800">
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" strokeWidth={2.5} />
                    <span>
                      <strong>Independent:</strong> We compare. We do not sell,
                      prescribe or send medicines.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" strokeWidth={2.5} />
                    <span>
                      <strong>GPhC registered pharmacies only:</strong>{" "}
                      {providerCount} of them tracked for Mounjaro.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" strokeWidth={2.5} />
                    <span>
                      <strong>The price of every dose:</strong> not just the
                      headline starter pen.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" strokeWidth={2.5} />
                    <span>
                      <strong>Your first 6 months:</strong> See what the full
                      titration cost can be.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" strokeWidth={2.5} />
                    <span>
                      <strong>No paid rankings:</strong> Price, safety and our 5
                      checks decide the order.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" strokeWidth={2.5} />
                    <span>
                      <strong>Free tools:</strong> Use our Mounjaro click
                      calculator for your pen.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
                  <Link
                    href="/mounjaro-price-comparison"
                    className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-sm ring-1 ring-amber-300 transition duration-150 hover:bg-amber-300 hover:scale-[1.01] active:scale-[0.99] sm:text-base text-center"
                  >
                    Compare Mounjaro prices
                  </Link>
                  <Link
                    href="/tools/mounjaro-click-calculator"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition duration-150 hover:bg-slate-50 hover:text-slate-950 sm:text-base text-center"
                  >
                    Open the click calculator
                  </Link>
                </div>
              </div>
            </section>

            {/* =========================================================================
                Section 12: Questions to ask
                ========================================================================= */}
            <section
              id="questions-to-ask"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Is Mounjaro right for me? Questions to ask your prescriber
              </h2>
              <p className="leading-relaxed">
                A good prescriber will be happy to answer these. Write them down
                before your check.
              </p>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <ol className="list-decimal list-inside space-y-3 text-slate-800 leading-relaxed font-medium">
                  <li>Is Mounjaro suitable for my health and my other medicines?</li>
                  <li>Which dose will I start on, and when will it go up?</li>
                  <li>What side effects should I watch for, and who do I call?</li>
                  <li>How much weight should I aim to lose, and when will you check my progress?</li>
                  <li>What happens if I miss a dose or want to stop?</li>
                  <li>How long will I need to take it?</li>
                </ol>
              </div>
            </section>

            {/* =========================================================================
                Section 13: FAQ
                ========================================================================= */}
            <section id="faq" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Mounjaro questions answered
              </h2>
              <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                {MOUNJARO_FAQ_ITEMS.map((item) => (
                  <details key={item.question} className="group p-5 hover:bg-slate-50/50 transition">
                    <summary className="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between [&::-webkit-details-marker]:hidden">
                      <span>{item.question}</span>
                      <span className="ml-2 text-slate-400 group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Editorial Footer Reference */}
            <div className="border-t border-slate-200 pt-8 text-xs text-slate-500 space-y-2">
              <p>
                <strong>Medical Disclaimer:</strong> Healthwise360 is an
                independent comparison and health information provider, not a
                pharmacy or prescribing clinic. All content is for educational
                transparency only. Always consult a qualified UK healthcare
                professional for clinical decisions.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
