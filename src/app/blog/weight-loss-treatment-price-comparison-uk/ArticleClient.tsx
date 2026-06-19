"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import BlogArticleColumn from "@/components/blog/BlogArticleColumn";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection, GuideTable } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";
import { blogImgPath, PRICE_COMPARISON_HERO_PNG } from "./blog-assets";

const SHARE_PATH = "/blog/weight-loss-treatment-price-comparison-uk";
const HERO_SRC = blogImgPath(PRICE_COMPARISON_HERO_PNG);

const TOC = [
  { id: "cost-overview", label: "How much does weight loss treatment cost?" },
  { id: "treatments-available", label: "What treatments are available privately?" },
  { id: "price-comparison", label: "Price comparison by dose" },
  { id: "actual-vs-advertised", label: "Actual cost vs advertised price" },
  { id: "how-to-compare", label: "How to compare prices properly" },
  { id: "annual-cost", label: "Estimated annual cost of treatment" },
  { id: "best-value", label: "Which treatment offers the best value?" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "conclusion", label: "Conclusion" },
];

const SOCIAL_HASHTAGS =
  "#WeightLossUK #MounjaroPrice #WegovyPrice #SaxendaCost #GLP1Costs #PrivateHealthcareUK #WeightLossTreatmentPrice";

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);
  const shareUrl = `${siteOrigin()}${SHARE_PATH}`;

  return (
    <div
      className={`w-full font-sans transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-300" : "bg-white text-slate-800"}`}
    >
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/blog"
            className={`flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-75 ${darkMode ? "text-slate-300" : "text-slate-900"}`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${darkMode ? "bg-slate-800" : "bg-slate-100"}`}
            >
              <ArrowLeft className="h-4 w-4" />
            </div>
            Back to Blog
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

        <BlogArticleColumn toc={TOC} darkMode={darkMode}>

          <header className={`mb-8 border-b pb-8 ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            Weight Loss Treatment Price Comparison UK 2026: Mounjaro and Wegovy
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              27 May 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              8 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_SRC}
            alt="Weight Loss Treatment Price Comparison UK 2026 — Mounjaro and Wegovy pricing details"
          />
          <div
            id="guide-article-hero-end"
            aria-hidden
            className="pointer-events-none h-0 w-full overflow-hidden"
          />
        </header>

            <article className={`space-y-8 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              <GuideSection darkMode={darkMode} id="cost-overview" heading="How Much Does Weight Loss Treatment Cost in the UK?">
                <p className="text-lg md:text-xl">
                  Private weight loss treatment in the UK typically costs between <strong>£130 and £350 per month</strong>, depending on the medication, dose, and pharmacy provider you choose. Mounjaro (tirzepatide) starts from around £130 per pen at the lowest dose, while Wegovy (semaglutide) and Saxenda (liraglutide) each follow their own pricing structure across the titration journey.
                </p>
                <p>
                  However, the headline price is rarely the full picture. Beyond the medication itself, there are consultation fees, delivery charges, and ongoing programme costs that can significantly affect your total spend. Therefore, understanding the complete cost landscape before you start is essential.
                </p>
                <p>
                  This article provides an independent, informational comparison of the three main GLP-1 treatments available privately in the UK. Please note that this is not medical advice, and all treatments mentioned are prescription-only medicines.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="treatments-available" heading="What Weight Loss Treatments Are Available Privately in the UK?">
                <p>
                  Currently, three injectable GLP-1-based treatments are most widely compared in the UK private market:
                </p>
                <ol className="list-decimal space-y-3 pl-5">
                  <li>
                    <strong>Mounjaro (tirzepatide)</strong>, which is a dual GIP and GLP-1 receptor agonist.
                  </li>
                  <li>
                    <strong>Wegovy (semaglutide)</strong>, which is a once-weekly GLP-1 receptor agonist injection.
                  </li>
                  <li>
                    <strong>Saxenda (liraglutide)</strong>, which is a daily GLP-1 receptor agonist injection.
                  </li>
                </ol>
                <p>
                  All three are prescription-only medicines (POM), meaning they can only be supplied following a clinical assessment by a licensed prescriber. Consequently, any meaningful price comparison must account for the full cost pathway and not just the pen price advertised.
                </p>
                <p>
                  To help you understand how each medication works before comparing costs, we recommend reading a detailed clinical comparison that explores the differences between the treatments. You can access the independent <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-medium text-emerald-600 hover:underline">mounjaro vs wegovy vs saxenda comparison</Link> to see how they stack up side by side in terms of efficacy and administration.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="price-comparison" heading="Weight Loss Treatment Price Comparison: Mounjaro, Wegovy & Saxenda">
                <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Mounjaro (Tirzepatide) Price by Dose
                </h3>
                <p>
                  Mounjaro is available in six dose strengths: 2.5 mg, 5 mg, 7.5 mg, 10 mg, 12.5 mg, and 15 mg. Prices increase as the dose escalates through the titration plan.
                </p>
                <p>
                  Based on independent monitoring of GPhC-registered pharmacies across the UK:
                </p>
                <div className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                  <GuideTable
                    headers={["Dose", "Price Range (per pen)"]}
                    rows={[
                      { cells: ["2.5 mg (starter)", "£130 to £180"] },
                      { cells: ["5 mg", "£155 to £200"] },
                      { cells: ["7.5 mg", "£200 to £270"] },
                      { cells: ["10 mg", "£220 to £305"] },
                      { cells: ["12.5 mg", "£245 to £315"] },
                      { cells: ["15 mg", "£260 to £340"] },
                    ]}
                  />
                </div>
                <p className="text-sm italic opacity-90">
                  *Prices are illustrative based on independent monitoring. Always confirm live rates directly with a registered pharmacy before purchasing.*
                </p>
                <p>
                  For those looking for real-time rates and the ability to filter by provider, visiting our dedicated <Link href="/mounjaro-price-comparison" className="font-medium text-emerald-600 hover:underline">Mounjaro price comparison</Link> page is highly recommended, as it features a fully interactive live price table updated with the latest pharmacy data.
                </p>

                <h3 className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Wegovy (Semaglutide) Price by Dose
                </h3>
                <p>
                  Wegovy also follows a step-up titration schedule, beginning at 0.25 mg and progressing toward a 2.4 mg maintenance dose. Most users remain on the lower doses for several weeks before increasing.
                </p>
                <div className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                  <GuideTable
                    headers={["Dose", "Price Range (per pen)"]}
                    rows={[
                      { cells: ["0.25 mg (starter)", "£130 to £170"] },
                      { cells: ["0.5 mg", "£145 to £185"] },
                      { cells: ["1 mg", "£175 to £220"] },
                      { cells: ["1.7 mg", "£215 to £270"] },
                      { cells: ["2.4 mg (maintenance)", "£240 to £295"] },
                    ]}
                  />
                </div>
                <p>
                  Before comparing Wegovy costs, it helps to understand how the medication works. Our comprehensive <Link href="/what-is-wegovy" className="font-medium text-emerald-600 hover:underline">Wegovy weight loss guide</Link> covers the GLP-1 mechanism, clinical trial results, and eligibility criteria in detail to help you understand what this treatment offers.
                </p>

                <h3 className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Saxenda (Liraglutide) Price Overview
                </h3>
                <p>
                  Saxenda differs from both treatments above because it requires a <strong>daily injection</strong> rather than weekly. As a result, each pack contains more individual doses spread across the month, which affects how pricing is structured.
                </p>
                <div className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                  <GuideTable
                    headers={["Daily Dose Range", "Estimated Monthly Cost"]}
                    rows={[
                      { cells: ["0.6 mg to 3 mg (titration)", "£150 to £290 per month"] },
                    ]}
                  />
                </div>
                <p>
                  Because of the daily injection schedule, some users find Saxenda less convenient than the weekly alternatives. However, in certain dose ranges and across some providers, it may represent a lower entry cost. For a side-by-side comparison and deeper clinical context, you can read our detailed <Link href="/what-is-saxenda" className="font-medium text-emerald-600 hover:underline">Saxenda treatment overview</Link> to see how it compares to weekly pens.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="actual-vs-advertised" heading="Actual Cost vs Advertised Price: What People Often Miss">
                <p>
                  Many people are surprised to find their final bill is considerably higher than the price displayed on a pharmacy's product page. Therefore, it is worth breaking down all the cost components that contribute to your real monthly spend:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>
                    <strong>Initial consultation fee</strong>: some providers charge this separately, outside the medication cost.
                  </li>
                  <li>
                    <strong>Delivery charges</strong>: this is especially relevant for treatments requiring specialized cold chain handling.
                  </li>
                  <li>
                    <strong>Follow-up or monitoring fees</strong>: certain programmes require periodic clinical check-ins at an additional cost.
                  </li>
                  <li>
                    <strong>Dose escalation price increases</strong>: moving from a starter pen to a maintenance dose can significantly raise monthly costs.
                  </li>
                  <li>
                    <strong>Subscription vs single purchase pricing</strong>: some providers offer lower per-pen prices on a monthly subscription plan.
                  </li>
                </ul>
                <p>
                  For this reason, comparing the <em>total cost of treatment</em> across providers is far more informative than comparing starter pen prices alone. Our <Link href="/" className="font-medium text-emerald-600 hover:underline">independent price comparison platform</Link> is designed to support exactly this kind of transparent, full-picture comparison, helping you see the actual fees upfront.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="how-to-compare" heading="How to Compare Weight Loss Treatment Prices Properly">
                <p>
                  Comparing private weight loss treatment costs in the UK requires a structured approach. Here are five steps that help ensure you are comparing like for like:
                </p>

                <h3 className={`mt-6 text-base font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}>
                  Step 1: Verify the Pharmacy's GPhC Registration
                </h3>
                <p>
                  Always confirm that a pharmacy is registered with the General Pharmaceutical Council (GPhC). This is the minimum regulatory requirement for a legally operating online pharmacy in the UK. Registration numbers can be checked directly on the GPhC public register.
                </p>

                <h3 className={`mt-6 text-base font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}>
                  Step 2: Compare Cost Per Dose, Not Per Package
                </h3>
                <p>
                  Package deals can appear cheaper on the surface. However, make sure you are comparing the same dose strength across providers, such as Mounjaro 5 mg from Provider A versus Mounjaro 5 mg from Provider B, rather than mixing starter and maintenance packages.
                </p>

                <h3 className={`mt-6 text-base font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}>
                  Step 3: Account for Hidden Fees
                </h3>
                <p>
                  Look carefully for consultation fees, shipping costs, and any programme monitoring charges that may appear separately during checkout. A lower headline pen price can quickly become more expensive once these are added.
                </p>

                <h3 className={`mt-6 text-base font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}>
                  Step 4: Check Provider Ratings and Support
                </h3>
                <p>
                  Price is not the only consideration. A provider's Trustpilot rating, access to licensed prescribers, and quality of ongoing support all contribute to the overall value of the service.
                </p>

                <h3 className={`mt-6 text-base font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}>
                  Step 5: Use an Independent Comparison Platform
                </h3>
                <p>
                  Using a comprehensive <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-medium text-emerald-600 hover:underline">Mounjaro vs Wegovy vs Saxenda comparison</Link> allows you to compare prices across more than 60 GPhC-registered pharmacies in a single interactive table, with no affiliation or preference towards any particular provider.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="annual-cost" heading="Estimated Annual Cost of GLP-1 Treatment in the UK">
                <p>
                  Understanding the annual cost is particularly important because GLP-1 treatments are generally intended as long-term interventions. The table below provides rough estimates based on maintenance-range doses:
                </p>
                <div className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                  <GuideTable
                    headers={["Treatment", "Estimated Monthly Cost", "Estimated Annual Cost"]}
                    rows={[
                      { cells: ["Mounjaro (higher dose)", "£260 to £340", "£3,120 to £4,080"] },
                      { cells: ["Wegovy (maintenance dose)", "£240 to £295", "£2,880 to £3,540"] },
                      { cells: ["Saxenda (full dose)", "£200 to £290", "£2,400 to £3,480"] },
                    ]}
                  />
                </div>
                <p>
                  It is worth noting that most users start on lower doses for the first four to six months of titration, which means the average spend in year one may be somewhat lower than these maintenance-stage estimates suggest.
                </p>
                <p>
                  For a broader view of how private GLP-1 costs compare across providers and dose stages, our detailed page highlighting the <Link href="/prices/cheapest-options-uk" className="font-medium text-emerald-600 hover:underline">cheapest weight loss treatment UK</Link> options provides a highly useful independent snapshot.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="best-value" heading="Which Treatment Offers the Best Value?">
                <p>
                  There is no single answer that applies to every person, as clinical suitability and individual response vary. That said, the general cost landscape looks like this:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>
                    <strong>Mounjaro</strong> is frequently cited as having the strongest clinical weight loss data from the SURMOUNT trials, but tends to carry the highest costs at higher maintenance doses. You can learn more about its efficacy and mechanisms in our comprehensive <Link href="/what-is-mounjaro" className="font-medium text-emerald-600 hover:underline">Mounjaro weight loss guide</Link>.
                  </li>
                  <li>
                    <strong>Wegovy</strong> offers a robust long-term evidence base and is widely available through private routes in the UK, with pricing that is broadly competitive at maintenance doses.
                  </li>
                  <li>
                    <strong>Saxenda</strong> may represent a lower entry point in some cases, though the daily injection schedule is a practical consideration for many users.
                  </li>
                </ul>
                <p>
                  Value, therefore, depends on your starting dose, how long you remain on the treatment, and which provider you access it through. Comparing across all three using a live price tool is the most reliable way to assess your specific cost scenario.
                </p>
              </GuideSection>

              <section
                id="faq"
                className={`mt-16 border-t pt-10 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
              >
                <h2 className={`mb-8 text-3xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  FAQ: Weight Loss Treatment Prices in the UK
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      1. What is the cheapest weight loss treatment in the UK?
                    </h3>
                    <p>
                      Based on independent monitoring, Mounjaro 2.5 mg (starter dose) from some GPhC-registered pharmacies begins from around £130 per pen. Wegovy starter doses follow a similar range. Saxenda pricing is structured differently due to its daily dosing. However, "cheapest" at the starter stage may not reflect the most cost-effective option over the full treatment course, as dose escalation significantly affects monthly costs.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      2. Is Wegovy cheaper than Mounjaro in the UK?
                    </h3>
                    <p>
                      At lower doses, both treatments are priced within a similar range. The difference becomes more apparent at higher doses: Mounjaro at 12.5 mg to 15 mg tends to cost more per pen than Wegovy at its 2.4 mg maintenance dose across most providers. However, this varies and should be checked against live pharmacy pricing.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      3. Can I get weight loss treatment free on the NHS?
                    </h3>
                    <p>
                      Wegovy is now available through a limited NHS specialist weight management pathway. Mounjaro has received NICE approval and is in the process of being rolled out through NHS commissioning. However, access remains constrained by local availability and eligibility criteria. Most people in the UK currently access these treatments privately due to NHS capacity limitations.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      4. Are there additional costs beyond the medication price?
                    </h3>
                    <p>
                      Yes. Consultation fees, delivery charges, and in some cases ongoing monitoring or programme fees are commonly charged separately. These can add a meaningful amount to the total monthly cost. Reviewing the full pricing structure of a provider, and not just the pen price, is strongly recommended before committing.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      5. How do I know if an online pharmacy is safe and legitimate?
                    </h3>
                    <p>
                      Check that the pharmacy holds a valid GPhC registration number, which can be verified on the official GPhC register. Our platform only lists pharmacies that have been verified against this standard, and also include Trustpilot ratings to support further due diligence.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      6. Will treatment costs increase as my dose goes up?
                    </h3>
                    <p>
                      Yes. All three GLP-1 treatments use a titration model in which the dose is gradually increased over several months. Because higher-strength pens carry higher prices, your monthly cost will typically rise as you move through the titration schedule. Planning for this cost progression from the outset is an important part of budgeting for treatment.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      7. Where can I compare prices from multiple pharmacies in one place?
                    </h3>
                    <p>
                      Our interactive <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-medium text-emerald-600 hover:underline">weight loss treatment comparison hub</Link> is an independent UK platform that displays live-updated prices from over 60 GPhC-registered pharmacies in a single interactive table. This covers Mounjaro, Wegovy, and Saxenda across all dose strengths, with no preference shown to any provider.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  Understanding the true cost of private weight loss treatment in the UK requires looking beyond the headline pen price. Consultation fees, delivery charges, and the significant price increases that come with dose escalation all contribute to your actual monthly and annual spend.
                </p>
                <p>
                  To summarise the current landscape:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>
                    <strong>Mounjaro (tirzepatide)</strong>: approximately £130 to £340 per month depending on the dose
                  </li>
                  <li>
                    <strong>Wegovy (semaglutide)</strong>: approximately £130 to £295 per month depending on the dose
                  </li>
                  <li>
                    <strong>Saxenda (liraglutide)</strong>: approximately £150 to £290 per month across the daily dosing range
                  </li>
                </ul>
                <p>
                  Therefore, a thorough, like-for-like comparison across verified providers, accounting for all cost components, is the most reliable way to understand what weight loss treatment will actually cost you over time.
                </p>
                <p>
                  For a complete, live price comparison across all three treatments and more than 60 GPhC-registered UK pharmacies, you can explore the <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-medium text-emerald-600 hover:underline">mounjaro vs wegovy vs saxenda comparison</Link> hub to find the best rates.
                </p>
                <p className={`text-sm leading-relaxed mt-8 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  <span className="font-semibold text-slate-600 dark:text-slate-300">Suggested hashtags:</span>{" "}
                  {SOCIAL_HASHTAGS}
                </p>
              </GuideSection>
            </article>

            <div className="mt-10">
              <GuideSharePanel
                url={shareUrl}
                title="Weight Loss Treatment Price Comparison UK 2026: Mounjaro and Wegovy"
                description="Compare weight loss treatment prices in the UK 2026 — Mounjaro, Wegovy & Saxenda. Cost per dose, monthly estimates & what to check before you start."
              />
            </div>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
