"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection, GuideTable } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  blogImgPath,
  MOUNJARO_PRICE_UK_HERO_WEBP,
  MOUNJARO_PRICE_UK_INLINE_WEBP,
} from "./blog-assets";

const SHARE_PATH = "/blog/mounjaro-price-uk";
const HERO_SRC = blogImgPath(MOUNJARO_PRICE_UK_HERO_WEBP);
const INLINE_SRC = blogImgPath(MOUNJARO_PRICE_UK_INLINE_WEBP);

const TOC = [
  { id: "cost-overview", label: "How much does Mounjaro cost?" },
  { id: "what-is-mounjaro", label: "What Mounjaro is" },
  { id: "price-by-dose", label: "Price by dose" },
  { id: "titration-budget", label: "Titration and budget planning" },
  { id: "yearly-cost", label: "First year and ongoing costs" },
  { id: "extra-costs", label: "Additional fees to check" },
  { id: "compare-treatments", label: "Mounjaro, Wegovy and Saxenda costs" },
  { id: "nhs-access", label: "NHS availability" },
  { id: "verify-pharmacy", label: "How to verify a pharmacy" },
  { id: "faq", label: "FAQ" },
  { id: "conclusion", label: "Conclusion" },
];

const SOCIAL_HASHTAGS =
  "#MounjaroPriceUK #TirzepatidePrice #MounjaroCost #WeightLossTreatmentUK #GLP1UK #PrivatePrescriptionUK";

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

        <header className="mb-12">
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            Mounjaro Price UK 2026: How Much Does Each Dose Cost and Where to Find It
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              28 May 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              8 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_SRC}
            alt="Mounjaro Price UK 2026 dose cost guide"
          />
          <div
            id="guide-article-hero-end"
            aria-hidden
            className="pointer-events-none h-0 w-full overflow-hidden"
          />
        </header>

        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          {TOC.length > 0 && (
            <GuideTocSidebar key={TOC.map((t) => t.id).join("-")} toc={TOC} />
          )}

          <div className="min-w-0 max-w-3xl flex-1">
            <article className={`space-y-8 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              <GuideSection darkMode={darkMode} id="cost-overview" heading="How Much Does Mounjaro Cost in the UK?">
                <p className="text-lg md:text-xl">
                  Mounjaro (tirzepatide) costs between <strong>£130 and £340 per pen</strong> in the UK private market in 2026, depending on the dose strength and pharmacy provider. The starter dose of 2.5 mg begins at approximately £130 per pen from some GPhC registered pharmacies, while the highest maintenance dose of 15 mg reaches up to £340 across the market.
                </p>
                <p>
                  Because treatment follows a titration schedule, meaning the dose usually increases every four weeks, most people will see their monthly costs rise progressively throughout their first several months. That is why the headline starter price is useful, but it should not be treated as the full cost expectation for an ongoing course.
                </p>
                <p>
                  This article is a fully independent <strong>Mounjaro price UK</strong> guide. No pharmacy or provider is being promoted, and nothing here constitutes medical advice. All treatments mentioned are prescription only medicines.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="what-is-mounjaro" heading="What Is Mounjaro and Why Does Dose Affect Price So Much?">
                <p>
                  Mounjaro is the brand name for tirzepatide, a medication that acts on two separate receptors in the body: GIP, which stands for glucose dependent insulinotropic polypeptide, and GLP 1, which stands for glucagon like peptide 1. This dual action mechanism is what distinguishes it from older single receptor treatments. Clinical data from the SURMOUNT trial programme has positioned it as one of the most effective pharmaceutical weight management options currently available.
                </p>
                <p>
                  If you want the mechanism before you compare pharmacy prices, the independent <Link href="/what-is-mounjaro" className="font-medium text-emerald-600 hover:underline">Mounjaro tirzepatide weight loss guide</Link> explains how appetite, blood sugar and dose progression fit together in plain English.
                </p>
                <p>
                  The reason dose affects price so significantly is straightforward: each pen contains a higher concentration of active ingredient at higher doses. Manufacturers price accordingly, and pharmacies usually follow the same stepped pricing structure across all available strengths.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="price-by-dose" heading="Mounjaro Price by Dose: Full UK Breakdown 2026">
                <p>
                  The table below reflects approximate pricing across GPhC registered UK pharmacies as of 2026. Prices vary between providers and are subject to change, so always confirm with the pharmacy directly before placing an order.
                </p>
                <div className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                  <GuideTable
                    headers={[
                      "Dose Strength",
                      "Injection Frequency",
                      "Approximate Price Per Pen",
                      "Estimated Monthly Cost",
                    ]}
                    rows={[
                      { cells: ["2.5 mg", "Weekly", "£130 to £180", "£130 to £180"] },
                      { cells: ["5 mg", "Weekly", "£155 to £200", "£155 to £200"] },
                      { cells: ["7.5 mg", "Weekly", "£200 to £270", "£200 to £270"] },
                      { cells: ["10 mg", "Weekly", "£220 to £305", "£220 to £305"] },
                      { cells: ["12.5 mg", "Weekly", "£245 to £315", "£245 to £315"] },
                      { cells: ["15 mg", "Weekly", "£260 to £340", "£260 to £340"] },
                    ]}
                  />
                </div>
                <p>
                  Each pen delivers four weekly doses, making the per pen cost equivalent to the monthly medication cost at most standard dose steps.
                </p>
                <p>
                  For live pharmacy data rather than static estimates, the <Link href="/mounjaro-price-comparison" className="font-medium text-emerald-600 hover:underline">Mounjaro price comparison tool for UK pharmacies</Link> shows regularly updated prices across verified providers and makes it easier to compare the same dose strength like for like.
                </p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_SRC}
                  alt="Mounjaro price by dose and monthly cost guide"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection darkMode={darkMode} id="titration-budget" heading="How Mounjaro Titration Works and What It Means for Your Budget">
                <p>
                  Understanding the Mounjaro titration schedule is essential for accurate cost planning. Most clinical guidance follows a structure similar to this:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li><strong>Weeks 1 to 4:</strong> 2.5 mg starter dose</li>
                  <li><strong>Weeks 5 to 8:</strong> 5 mg</li>
                  <li><strong>Weeks 9 to 12:</strong> 7.5 mg, although some patients may maintain here</li>
                  <li><strong>Weeks 13 to 16:</strong> 10 mg</li>
                  <li><strong>Weeks 17 to 20:</strong> 12.5 mg</li>
                  <li><strong>Week 21 and beyond:</strong> 15 mg, which is the maximum licensed dose if tolerated and required</li>
                </ul>
                <p>
                  Not every person will progress to the highest dose. Some individuals respond well at 5 mg or 7.5 mg and may remain there long term, which has a significant impact on total costs. However, titration speed and the dose at which someone stabilises is a clinical decision, not one driven by price.
                </p>
                <p>
                  Therefore, when planning for Mounjaro costs, it is more useful to estimate for the dose range most likely for you rather than to anchor on the starter price. A practical approach is to compare both your current pen cost and the possible maintenance dose cost before beginning treatment.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="yearly-cost" heading="Total Mounjaro Cost: First Year vs Ongoing">
                <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Estimated Year One Cost
                </h3>
                <p>
                  During year one, most patients spend several months on lower starter doses before reaching their maintenance dose. A rough year one projection, assuming gradual titration, looks like this:
                </p>
                <div className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                  <GuideTable
                    headers={["Scenario", "Approximate Year 1 Cost"]}
                    rows={[
                      { cells: ["Stabilise at 5 mg", "£1,860 to £2,400"] },
                      { cells: ["Stabilise at 7.5 mg", "£2,200 to £2,900"] },
                      { cells: ["Stabilise at 10 mg", "£2,600 to £3,400"] },
                      { cells: ["Stabilise at 15 mg full course", "£2,900 to £4,000"] },
                    ]}
                  />
                </div>

                <h3 className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Estimated Ongoing Annual Cost at Maintenance
                </h3>
                <div className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                  <GuideTable
                    headers={["Maintenance Dose", "Estimated Annual Cost"]}
                    rows={[
                      { cells: ["5 mg", "£1,860 to £2,400"] },
                      { cells: ["7.5 mg", "£2,400 to £3,240"] },
                      { cells: ["10 mg", "£2,640 to £3,660"] },
                      { cells: ["12.5 mg", "£2,940 to £3,780"] },
                      { cells: ["15 mg", "£3,120 to £4,080"] },
                    ]}
                  />
                </div>
                <p>
                  These are estimates only and do not include any consultation, delivery, or programme fees that may apply. For a more realistic budget, add the recurring non medication costs to the pen price rather than treating them as separate one off extras.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="extra-costs" heading="What Else Affects the Total Cost of Mounjaro?">
                <p>
                  The pen price is the largest component of your monthly spend, but it is not always the only one. Before committing to a provider, check whether any of the following apply:
                </p>
                <p>
                  <strong>Consultation fees.</strong> Some providers charge separately for the initial clinical assessment and for ongoing prescription renewals. This can range from £20 to £50 per episode, charged outside the medication cost.
                </p>
                <p>
                  <strong>Delivery charges.</strong> Mounjaro requires cold chain delivery due to refrigeration requirements. Delivery fees vary widely, from zero to around £15 per order, and on a monthly ordering cycle this adds up meaningfully.
                </p>
                <p>
                  <strong>Programme or monitoring fees.</strong> Certain providers include structured coaching or clinical check ins as part of their service, priced as a subscription layer on top of the medication cost.
                </p>
                <p>
                  <strong>Subscription vs single order pricing.</strong> Some pharmacies offer a lower per pen price for patients who commit to a monthly subscription plan rather than ordering individual pens.
                </p>
                <p>
                  For a transparent wider view of what providers charge, including medication, delivery, assessment and monitoring components, the <Link href="/compare/best-weight-loss-treatments-uk" className="font-medium text-emerald-600 hover:underline">best weight loss treatment options comparison for UK pharmacies</Link> compiles independently checked pricing data across more than 60 GPhC registered pharmacies.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="compare-treatments" heading="How Does Mounjaro Compare in Price to Wegovy and Saxenda?">
                <p>
                  At the starter dose, Mounjaro and Wegovy are priced within a broadly similar range. However, the comparison shifts at higher doses:
                </p>
                <div className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                  <GuideTable
                    headers={["Treatment", "Starter Dose Price", "Maintenance Dose Price"]}
                    rows={[
                      { cells: ["Mounjaro (tirzepatide)", "£130 to £180", "£260 to £340"] },
                      { cells: ["Wegovy (semaglutide)", "£130 to £170", "£240 to £295"] },
                      { cells: ["Saxenda (liraglutide)", "£150 to £290 per month", "£200 to £290 per month"] },
                    ]}
                  />
                </div>
                <p>
                  Mounjaro tends to be the most expensive at higher dose levels. Whether that cost difference represents good value depends on how each person responds to treatment, which is a clinical variable rather than a pricing one.
                </p>
                <p>
                  For a full comparison across all dose stages, mechanisms and practical differences, see the <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-medium text-emerald-600 hover:underline">Mounjaro vs Wegovy vs Saxenda price and treatment comparison</Link>.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nhs-access" heading="Is Mounjaro Available on the NHS?">
                <p>
                  Mounjaro received NICE approval for use in weight management in the UK and is currently being introduced into NHS commissioning through a phased rollout. However, NHS access remains limited by local clinical commissioning criteria and capacity, and the majority of UK patients still access tirzepatide through private prescriptions in 2026.
                </p>
                <p>
                  If NHS eligibility is relevant to your situation, your GP or a specialist weight management service is the right point of contact. This article covers only private market pricing.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="verify-pharmacy" heading="How to Verify a Pharmacy Before Buying Mounjaro">
                <p>
                  Because Mounjaro is a prescription only medicine, it must only be supplied following a proper clinical assessment. Before ordering from any pharmacy, verify the following:
                </p>
                <ol className="list-decimal space-y-3 pl-5">
                  <li>
                    <strong>GPhC registration:</strong> check the pharmacy registration number on the <a href="https://www.pharmacyregulation.org/registers" target="_blank" rel="noopener noreferrer" className="font-medium text-emerald-600 hover:underline">official GPhC pharmacy register</a>.
                  </li>
                  <li>
                    <strong>Prescriber credentials:</strong> the prescribing clinician should be named and GMC registered.
                  </li>
                  <li>
                    <strong>MHRA internet pharmacy logo:</strong> it should be displayed and clickable on the pharmacy homepage.
                  </li>
                  <li>
                    <strong>Full fee disclosure:</strong> all costs, including medication, consultation, delivery and monitoring, should be visible before checkout.
                  </li>
                </ol>
                <p>
                  For a structured way to evaluate online pharmacy credentials alongside pricing, the <Link href="/compare/best-weight-loss-treatments-uk" className="font-medium text-emerald-600 hover:underline">UK online pharmacy verification and GPhC safety standards guide</Link> gives useful independent context before you compare providers.
                </p>
              </GuideSection>

              <section
                id="faq"
                className={`mt-16 border-t pt-10 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
              >
                <h2 className={`mb-8 text-3xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  FAQ: Mounjaro Price UK
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      1. What is the cheapest dose of Mounjaro available in the UK?
                    </h3>
                    <p>
                      The 2.5 mg starter dose is the most affordable, available from approximately £130 per pen from some GPhC registered providers. However, this dose is only used for the first four weeks of treatment. Prices increase with each dose step through the titration schedule.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      2. How much does Mounjaro 15 mg cost in the UK?
                    </h3>
                    <p>
                      The 15 mg pen, which is the maximum licensed Mounjaro dose, ranges from approximately £260 to £340 per pen across GPhC registered pharmacies. This is the maintenance stage price for patients who progress to the highest dose level.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      3. Can I get Mounjaro cheaper with a subscription?
                    </h3>
                    <p>
                      Some pharmacies offer lower per pen pricing for patients on a monthly subscription plan versus single pen purchases. However, the savings vary and may be offset by subscription terms. Compare the total all in cost, including any subscription fees, before committing.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      4. Does Mounjaro require a prescription in the UK?
                    </h3>
                    <p>
                      Yes. Mounjaro (tirzepatide) is a prescription only medicine in the UK. A clinical assessment from a licensed prescriber is a legal requirement before it can be dispensed, regardless of where you purchase it.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      5. Why is Mounjaro more expensive than Wegovy at higher doses?
                    </h3>
                    <p>
                      At maintenance level doses, Mounjaro tends to sit at a slightly higher price point than Wegovy across most providers. This reflects manufacturer pricing for tirzepatide versus semaglutide, alongside pharmacy margin. However, the gap varies by provider and dose.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      6. Is Mounjaro price regulated in the UK?
                    </h3>
                    <p>
                      No. Unlike NHS drug pricing, which is subject to government negotiation, private market prices for Mounjaro are set by individual pharmacies. This is why prices vary between providers for the same dose.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      7. Where can I see a live comparison of Mounjaro prices from different pharmacies?
                    </h3>
                    <p>
                      The <Link href="/mounjaro-price-comparison" className="font-medium text-emerald-600 hover:underline">Mounjaro price comparison tool for UK pharmacy prices</Link> lists verified, regularly updated pricing from over 60 GPhC registered pharmacies across all dose strengths, with no commercial affiliation to any provider.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  Mounjaro (tirzepatide) costs between <strong>£130 and £340 per pen</strong> in the UK private market, with price increasing at each dose step through the titration schedule. At the starter dose of 2.5 mg, most patients will pay £130 to £180. At the 15 mg maintenance dose, the cost rises to £260 to £340.
                </p>
                <p>
                  Annual costs at maintenance range from approximately <strong>£1,860 to £4,080</strong>, depending on which dose you stabilise at and which provider you use. Additional fees such as consultation, delivery and programme charges should also be factored in for a realistic total cost picture.
                </p>
                <p>
                  For a complete, independently verified view across all doses and providers, visit the <Link href="/mounjaro-price-comparison" className="font-medium text-emerald-600 hover:underline">Mounjaro price comparison at Healthwise360</Link>. For context on how Mounjaro compares to Wegovy and Saxenda on both cost and mechanism, see the <Link href="/blog/weight-loss-treatment-price-comparison-uk" className="font-medium text-emerald-600 hover:underline">full weight loss treatment price comparison guide</Link>.
                </p>
                <p className={`mt-8 text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  This article is for informational purposes only and does not constitute medical advice. Mounjaro is a prescription only medicine in the UK. All prices are approximate and subject to change. Confirm directly with a GPhC registered pharmacy before purchasing.
                </p>
                <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  <span className="font-semibold text-slate-600 dark:text-slate-300">Suggested hashtags:</span>{" "}
                  {SOCIAL_HASHTAGS}
                </p>
              </GuideSection>
            </article>

            <div className="mt-10">
              <GuideSharePanel
                url={shareUrl}
                title="Mounjaro Price UK 2026: How Much Does Each Dose Cost and Where to Find It"
                description="How much does Mounjaro cost in the UK in 2026? Full price breakdown by dose, monthly estimates, and what to check before buying from any pharmacy."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
