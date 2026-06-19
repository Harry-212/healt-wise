"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleColumn from "@/components/blog/BlogArticleColumn";
import { GuideSection, GuideTable } from "@/components/guide/GuideLayout";
import {
  blogImgPath,
  SAXENDA_MOUNJARO_WEGOVY_PRICE_UK_HERO_PNG,
  SAXENDA_MOUNJARO_WEGOVY_PRICE_UK_INLINE_PNG,
} from "./blog-assets";

const HERO_SRC = blogImgPath(SAXENDA_MOUNJARO_WEGOVY_PRICE_UK_HERO_PNG);
const INLINE_SRC = blogImgPath(SAXENDA_MOUNJARO_WEGOVY_PRICE_UK_INLINE_PNG);

const TOC = [
  { id: "cheapest-overview", label: "Which Is Cheapest?" },
  { id: "comparison-complexity", label: "Why Prices Are Complex" },
  { id: "saxenda-price", label: "Saxenda Price UK" },
  { id: "wegovy-price", label: "Wegovy Price UK" },
  { id: "mounjaro-price", label: "Mounjaro Price UK" },
  { id: "side-by-side", label: "Side by Side Price Comparison" },
  { id: "best-value", label: "Which Offers Best Value?" },
  { id: "hidden-costs", label: "Hidden Costs" },
  { id: "pharmacy-verification", label: "Verify a UK Pharmacy" },
  { id: "nhs-availability", label: "NHS Availability" },
  { id: "faq", label: "FAQ" },
  { id: "conclusion", label: "Conclusion" },
];

function SubHeading({
  children,
  darkMode,
}: {
  children: React.ReactNode;
  darkMode: boolean;
}) {
  return (
    <h3 className={`mt-6 text-lg font-medium ${darkMode ? "text-white" : "text-slate-900"}`}>
      {children}
    </h3>
  );
}

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);

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

        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-400">
          <Link href="/" className="transition-colors hover:text-emerald-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="transition-colors hover:text-emerald-600">
            Blog
          </Link>
          <span>/</span>
          <span className={darkMode ? "text-slate-200" : "text-slate-600"}>
            Saxenda vs Mounjaro vs Wegovy Price UK
          </span>
        </nav>

        <BlogArticleColumn toc={TOC} darkMode={darkMode}>

          <header className={`mb-8 border-b pb-8 ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            Saxenda vs Mounjaro vs Wegovy: Which Is the Cheapest Weight Loss Treatment in the UK?
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              5 Jun 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              12 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_SRC}
            alt="Saxenda vs Mounjaro vs Wegovy UK price comparison guide with lifestyle planning visuals"
          />
          <div
            id="guide-article-hero-end"
            aria-hidden
            className="pointer-events-none h-0 w-full overflow-hidden"
          />
        </header>

            <article className={`space-y-8 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              <GuideSection darkMode={darkMode} id="cheapest-overview" heading="Which Weight Loss Injection Is Cheapest in the UK?">
                <p className="text-lg md:text-xl">
                  At the starter dose, all three treatments are priced within a similar range, approximately <strong>£128 to £180 per month</strong>. However, at the maintenance dose, the picture changes significantly.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong>Saxenda (liraglutide):</strong> £150 to £290 per month with daily use.
                  </li>
                  <li>
                    <strong>Wegovy (semaglutide):</strong> £240 to £295 per month at 2.4 mg.
                  </li>
                  <li>
                    <strong>Mounjaro (tirzepatide):</strong> £249 to £375 per month at 15 mg.
                  </li>
                </ul>
                <p>
                  On headline maintenance cost alone, Saxenda is often the most affordable option, but its daily injection requirement, lower average weight loss benchmarks, and different dosing structure mean that &quot;cheapest&quot; does not automatically mean &quot;best value.&quot; This article unpacks all three in full so you can make a properly informed comparison.
                </p>
                <blockquote className={`rounded-r-xl border-l-4 p-4 text-sm ${darkMode ? "border-amber-500 bg-slate-900/40 text-slate-300" : "border-amber-500 bg-amber-50/50 text-slate-700"}`}>
                  <strong>Important:</strong> All three are prescription only medicines. A clinical assessment from a licensed prescriber is required before any of them can be dispensed. This article is for informational purposes only.
                </blockquote>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="comparison-complexity" heading="Why Comparing GLP 1 Treatment Prices Is More Complex Than It Looks">
                <p>
                  Before getting into the numbers, it is worth understanding what makes GLP 1 treatment price comparison structurally tricky, because it is not like comparing the price of two identical products.
                </p>
                <p>
                  <strong>All three treatments use dose titration.</strong> You start at the lowest dose and increase gradually. Prices rise at each dose step. The starter price that most pharmacies advertise applies only to the first four weeks. For Mounjaro, moving from the 2.5 mg starter to the 15 mg maintenance dose means the price can more than double over five to six months.
                </p>
                <p>
                  <strong>Saxenda is used daily, while the other two are weekly.</strong> This means Saxenda&apos;s dosing frequency is fundamentally different. You use more pens per month, and the dose escalation works differently. Monthly costs for Saxenda reflect daily dosing, while Mounjaro and Wegovy costs reflect four weekly doses per pen.
                </p>
                <p>
                  <strong>Hidden fees vary by provider.</strong> Consultation fees, delivery charges, programme subscriptions, and needle costs can add £30 to £95 per month on top of the pen price across different pharmacies, and these costs are not always visible at the comparison stage.
                </p>
                <p>
                  With those caveats clearly stated, here is the full price comparison.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="saxenda-price" heading="Saxenda (Liraglutide) Price UK 2026">
                <SubHeading darkMode={darkMode}>How Saxenda Is Dosed</SubHeading>
                <p>
                  Saxenda uses a six week starter schedule, beginning at 0.6 mg daily and increasing by 0.6 mg each week until reaching the full 3 mg daily maintenance dose.
                </p>
                <GuideTable
                  headers={["Week", "Daily Dose", "Estimated Monthly Cost"]}
                  rows={[
                    { cells: ["Week 1", "0.6 mg", "£79 to £120"] },
                    { cells: ["Week 2", "1.2 mg", "£100 to £150"] },
                    { cells: ["Week 3", "1.8 mg", "£130 to £180"] },
                    { cells: ["Week 4", "2.4 mg", "£140 to £200"] },
                    { cells: ["Week 5", "3.0 mg", "£150 to £230"] },
                    { cells: ["Week 6 onward", "3.0 mg (maintenance)", "£150 to £290 per month"], highlight: true },
                  ]}
                />
                <p>
                  Because Saxenda is used daily, you go through medication faster than with weekly treatments. Each Saxenda pen contains 18 mg of liraglutide, which is approximately 6 doses at 3 mg, meaning patients on full maintenance dose typically require approximately four to five pens per month.
                </p>

                <SubHeading darkMode={darkMode}>Saxenda Annual Cost Estimate</SubHeading>
                <GuideTable
                  headers={["Scenario", "Monthly Cost", "Annual Estimate"]}
                  rows={[
                    { cells: ["Stabilise at 1.8 mg daily", "£130 to £180", "£1,560 to £2,160"] },
                    { cells: ["Full 3 mg maintenance", "£150 to £290", "£1,800 to £3,480"], highlight: true },
                  ]}
                />

                <SubHeading darkMode={darkMode}>What Saxenda Offers</SubHeading>
                <p>
                  Saxenda was the first GLP 1 treatment to be approved for weight management in the UK and has the longest safety record of the three. Clinical data from the SCALE trial programme showed average weight loss of approximately 5 to 8% of body weight over 56 weeks at the 3 mg dose. For context on the mechanism and evidence base, see the <Link href="/what-is-saxenda" className="font-semibold text-emerald-600 hover:underline">Saxenda weight loss treatment guide</Link> at Healthwise360.
                </p>
                <p>
                  The daily schedule is the key practical trade off. For some people this is manageable; for others, the weekly schedule of Mounjaro or Wegovy represents a meaningful quality of life difference.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="wegovy-price" heading="Wegovy (Semaglutide) Price UK 2026">
                <SubHeading darkMode={darkMode}>How Wegovy Is Dosed</SubHeading>
                <p>
                  Wegovy follows a five step weekly titration from 0.25 mg to the 2.4 mg maintenance dose.
                </p>
                <GuideTable
                  headers={["Dose", "Weeks", "Monthly Cost (Per Pen)"]}
                  rows={[
                    { cells: ["0.25 mg", "1 to 4", "£128 to £170"] },
                    { cells: ["0.5 mg", "5 to 8", "£145 to £185"] },
                    { cells: ["1 mg", "9 to 12", "£175 to £220"] },
                    { cells: ["1.7 mg", "13 to 16", "£215 to £270"] },
                    { cells: ["2.4 mg", "17 onward", "£240 to £295"], highlight: true },
                  ]}
                />
                <p>
                  Each Wegovy pen contains four weekly doses, with 0.5 mL per dose, making one pen equivalent to one month of treatment.
                </p>

                <SubHeading darkMode={darkMode}>Wegovy Annual Cost Estimate</SubHeading>
                <GuideTable
                  headers={["Stabilisation Dose", "Year 1 Total", "Ongoing Annual"]}
                  rows={[
                    { cells: ["1 mg", "£2,025 to £2,555", "£2,100 to £2,640"] },
                    { cells: ["1.7 mg", "£2,385 to £3,005", "£2,580 to £3,240"] },
                    { cells: ["2.4 mg (full)", "£2,585 to £3,205", "£2,880 to £3,540"], highlight: true },
                  ]}
                />

                <SubHeading darkMode={darkMode}>What Wegovy Offers</SubHeading>
                <p>
                  Wegovy (semaglutide 2.4 mg) is NICE approved for weight management in the UK and is backed by the STEP clinical trial programme, which demonstrated average weight loss of approximately 12 to 15% of body weight over 68 weeks at the maintenance dose. It is currently the most established weekly GLP 1 option in the UK private market in terms of prescription volume and evidence base.
                </p>
                <p>
                  NICE approval also means Wegovy has an NHS access pathway, though availability remains constrained by local commissioning in 2026. For those who may qualify for NHS access, this is worth exploring before committing to private prescribing.
                </p>
                <p>
                  For a full overview of the clinical evidence and NHS eligibility context, see the <Link href="/what-is-wegovy" className="font-semibold text-emerald-600 hover:underline">Wegovy weight loss treatment guide</Link> at Healthwise360.
                </p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_SRC}
                  alt="Lifestyle planning table with price comparisons and annual budget notes"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection darkMode={darkMode} id="mounjaro-price" heading="Mounjaro (Tirzepatide) Price UK 2026">
                <SubHeading darkMode={darkMode}>How Mounjaro Is Dosed</SubHeading>
                <p>
                  Mounjaro has the most dose steps of the three, with six strengths from 2.5 mg to 15 mg, all taken weekly.
                </p>
                <GuideTable
                  headers={["Dose", "Weeks", "Monthly Cost (Per Pen)"]}
                  rows={[
                    { cells: ["2.5 mg", "1 to 4", "£128 to £180"] },
                    { cells: ["5 mg", "5 to 8", "£149 to £209"] },
                    { cells: ["7.5 mg", "9 to 12", "£179 to £249"] },
                    { cells: ["10 mg", "13 to 16", "£209 to £279"] },
                    { cells: ["12.5 mg", "17 to 20", "£229 to £315"] },
                    { cells: ["15 mg", "21 onward", "£249 to £375"], highlight: true },
                  ]}
                />
                <p>
                  Each Mounjaro KwikPen delivers four weekly doses, with 0.6 mL each, making one pen equivalent to approximately one month of treatment.
                </p>

                <SubHeading darkMode={darkMode}>Mounjaro Annual Cost Estimate</SubHeading>
                <GuideTable
                  headers={["Stabilisation Dose", "Year 1 Total", "Ongoing Annual"]}
                  rows={[
                    { cells: ["7.5 mg", "£2,285 to £3,080", "£2,148 to £2,988"] },
                    { cells: ["10 mg", "£2,445 to £3,340", "£2,508 to £3,348"] },
                    { cells: ["15 mg (full)", "£2,770 to £3,970", "£2,988 to £4,500"], highlight: true },
                  ]}
                />

                <SubHeading darkMode={darkMode}>What Mounjaro Offers</SubHeading>
                <p>
                  Mounjaro (tirzepatide) is a dual GIP and GLP 1 receptor agonist, and it is the only treatment in this category to act on two separate receptor pathways simultaneously. Clinical data from the SURMOUNT trial programme showed average weight loss of approximately 15 to 20% of body weight, making it the highest efficacy GLP 1 treatment currently available in the UK private market.
                </p>
                <p>
                  It is also the most expensive at maintenance doses. Whether the higher average efficacy justifies the higher cost is a clinical question, because individual response varies significantly, and some patients achieve similar results on Wegovy at a lower monthly spend.
                </p>
                <p>
                  For the full mechanism and clinical evidence overview, see the <Link href="/what-is-mounjaro" className="font-semibold text-emerald-600 hover:underline">Mounjaro tirzepatide guide</Link> at Healthwise360.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="side-by-side" heading="Side by Side Price Comparison: All Three Treatments">
                <SubHeading darkMode={darkMode}>Starter Dose (Month 1)</SubHeading>
                <GuideTable
                  headers={["Treatment", "Starter Dose", "Monthly Cost"]}
                  rows={[
                    { cells: ["Saxenda", "0.6 mg daily", "£79 to £120"], highlight: true },
                    { cells: ["Wegovy", "0.25 mg weekly", "£128 to £170"] },
                    { cells: ["Mounjaro", "2.5 mg weekly", "£128 to £180"] },
                  ]}
                />

                <SubHeading darkMode={darkMode}>Mid Titration (Month 3)</SubHeading>
                <GuideTable
                  headers={["Treatment", "Dose", "Monthly Cost"]}
                  rows={[
                    { cells: ["Saxenda", "3.0 mg daily (maintenance)", "£150 to £290"] },
                    { cells: ["Wegovy", "1 mg weekly", "£175 to £220"] },
                    { cells: ["Mounjaro", "7.5 mg weekly", "£179 to £249"] },
                  ]}
                />

                <SubHeading darkMode={darkMode}>Maintenance Dose</SubHeading>
                <GuideTable
                  headers={["Treatment", "Maintenance Dose", "Monthly Cost", "Annual Cost"]}
                  rows={[
                    { cells: ["Saxenda", "3.0 mg daily", "£150 to £290", "£1,800 to £3,480"], highlight: true },
                    { cells: ["Wegovy", "2.4 mg weekly", "£240 to £295", "£2,880 to £3,540"] },
                    { cells: ["Mounjaro", "15 mg weekly", "£249 to £375", "£2,988 to £4,500"] },
                  ]}
                />
                <p className="text-sm italic text-slate-500">
                  All prices are approximate, based on independent monitoring of GPhC registered UK pharmacies in 2026. Always confirm directly with the pharmacy before ordering.
                </p>

                <SubHeading darkMode={darkMode}>Average Weight Loss Benchmark (Clinical Trial Data)</SubHeading>
                <GuideTable
                  headers={["Treatment", "Average % Body Weight Loss", "Trial Programme"]}
                  rows={[
                    { cells: ["Saxenda", "5 to 8%", "SCALE"] },
                    { cells: ["Wegovy", "12 to 15%", "STEP"] },
                    { cells: ["Mounjaro", "15 to 20%", "SURMOUNT"], highlight: true },
                  ]}
                />
                <p className="text-sm italic text-slate-500">
                  Clinical outcomes vary significantly between individuals. These are population level averages from trial data, not guaranteed outcomes.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="best-value" heading="Which Treatment Offers the Best Value?">
                <p>
                  &quot;Best value&quot; is not the same as &quot;cheapest.&quot; It requires considering both the cost and what that cost is delivering, which varies significantly between these three treatments.
                </p>

                <SubHeading darkMode={darkMode}>When Saxenda May Represent Good Value</SubHeading>
                <p>
                  Saxenda has the lowest entry cost in most scenarios and the longest track record of the three treatments. For patients for whom the daily schedule is manageable, and particularly for those who have not previously tried GLP 1 treatment and want to begin with a well established option, Saxenda can represent a lower financial commitment.
                </p>
                <p>
                  However, the lower average weight loss benchmark of 5 to 8% compared with 12 to 20% for the newer agents means the clinical return per pound spent may be lower for some patients. The calculation changes if you stabilise at a partial dose and achieve satisfactory outcomes at a lower monthly cost.
                </p>

                <SubHeading darkMode={darkMode}>When Wegovy May Represent Good Value</SubHeading>
                <p>
                  Wegovy sits in the middle of the three on both price and efficacy. Its NICE approval, established evidence base, and NHS access pathway are meaningful differentiators, particularly for patients who may qualify for NHS access and want to exhaust that route before committing to private prescribing costs. At the 1 mg or 1.7 mg stabilisation dose, Wegovy&apos;s annual cost can be considerably lower than the full maintenance figure suggests.
                </p>

                <SubHeading darkMode={darkMode}>When Mounjaro May Represent Good Value</SubHeading>
                <p>
                  Mounjaro&apos;s higher average weight loss efficacy means that for patients who respond strongly to tirzepatide&apos;s dual receptor mechanism, the higher monthly cost may translate to outcomes that justify the difference. Patients who have previously tried and had limited success with a GLP 1 single receptor agent, such as Wegovy or Saxenda, are sometimes switched to Mounjaro precisely because the dual mechanism produces better individual response.
                </p>
                <p>
                  The value calculation for Mounjaro is most straightforward for patients with a larger initial weight loss goal, where the higher average efficacy translates directly into meaningful progress that lower efficacy options might not produce at any price.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="hidden-costs" heading="The Hidden Costs That Affect All Three Comparisons">
                <p>
                  Whichever treatment you are researching, the following additional costs apply across the market and must be factored into any genuine price comparison.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong>Consultation fees:</strong> some providers bundle this into the pen price; others charge £20 to £50 separately per prescription cycle.
                  </li>
                  <li>
                    <strong>Cold chain delivery:</strong> all three treatments require refrigerated delivery. Fees range from £0 to £15 per order depending on provider.
                  </li>
                  <li>
                    <strong>Needles and consumables:</strong> these are not always included in pen price listings.
                  </li>
                  <li>
                    <strong>Programme or monitoring fees:</strong> some providers charge a monthly subscription for structured support above the medication cost.
                  </li>
                  <li>
                    <strong>Dose escalation cost increases:</strong> all three treatments increase in cost as the dose rises. Budget for the maintenance dose, not the starter.
                  </li>
                </ul>
                <p>
                  For the most complete and up to date provider by provider cost comparison across all three treatments, the <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-semibold text-emerald-600 hover:underline">Mounjaro vs Wegovy vs Saxenda comparison hub</Link> at Healthwise360 aggregates verified pricing from more than 64 GPhC registered pharmacies with Trustpilot filtering, covering all dose strengths in a single interface.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="pharmacy-verification" heading="How to Verify a UK Pharmacy Before Buying Any of These Treatments">
                <p>
                  Regardless of which treatment you research, the same safety verification applies across all three.
                </p>
                <div className={`rounded-2xl border p-5 ${darkMode ? "border-slate-800 bg-slate-900/40" : "border-slate-200 bg-slate-50"}`}>
                  <ol className="list-decimal space-y-3 pl-5">
                    <li>
                      <strong>GPhC registration:</strong> verify the pharmacy&apos;s registration number at pharmacyregulation.org.
                    </li>
                    <li>
                      <strong>MHRA internet pharmacy logo:</strong> this should be displayed and linked on the homepage.
                    </li>
                    <li>
                      <strong>Named GMC registered prescriber:</strong> the prescriber should be identifiable and verifiable.
                    </li>
                    <li>
                      <strong>Full fee disclosure before checkout:</strong> all costs should be visible before payment.
                    </li>
                    <li>
                      <strong>Independent Trustpilot rating:</strong> verify this on the Trustpilot platform, not just through provider curated testimonials.
                    </li>
                  </ol>
                </div>
                <p>
                  For a structured guide to pharmacy verification alongside live price comparison, see the <Link href="/compare/best-weight-loss-treatments-uk" className="font-semibold text-emerald-600 hover:underline">best weight loss treatment comparison guide</Link> at Healthwise360.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nhs-availability" heading="NHS Availability: Does It Affect the Comparison?">
                <p>
                  Both Wegovy and Mounjaro have NICE approved NHS access pathways in 2026. Saxenda is also available through NHS weight management services in some regions.
                </p>
                <p>
                  NHS access criteria typically include:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>BMI 30 plus, or BMI 35 plus in some pathways.</li>
                  <li>At least one qualifying weight related health condition, such as type 2 diabetes, hypertension, dyslipidaemia, or sleep apnoea.</li>
                  <li>Referral through a specialist weight management service.</li>
                </ul>
                <p>
                  In practice, NHS access remains constrained by local commissioning and service capacity, and most eligible patients in 2026 are still accessing treatment privately. However, for patients who may qualify, pursuing NHS access first is worth exploring with a GP before committing to private prescribing costs.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="FAQ: Saxenda vs Mounjaro vs Wegovy Price UK">
                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      1. Is Saxenda cheaper than Mounjaro and Wegovy in the UK?
                    </h4>
                    <p className="mt-2 text-sm">
                      At the starter dose, Saxenda is typically the cheapest option, beginning at around £79 to £120 per month versus £128 to £180 for Mounjaro and Wegovy starters. At maintenance doses, Saxenda&apos;s monthly cost of £150 to £290 is generally lower than Wegovy (£240 to £295) and Mounjaro (£249 to £375). However, Saxenda requires daily use and has lower average clinical weight loss benchmarks than the newer weekly options.
                    </p>
                  </div>
                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      2. Is Wegovy or Mounjaro cheaper in the UK?
                    </h4>
                    <p className="mt-2 text-sm">
                      At starter doses, both are priced similarly. At maintenance doses, Wegovy (£240 to £295 at 2.4 mg) is typically cheaper than Mounjaro (£249 to £375 at 15 mg) across most UK providers. The gap widened following the Mounjaro price increase in late 2025, which made Wegovy the cheaper weekly option at equivalent treatment stages.
                    </p>
                  </div>
                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      3. Which treatment produces the most weight loss?
                    </h4>
                    <p className="mt-2 text-sm">
                      Based on clinical trial data, Mounjaro (tirzepatide) shows the highest average weight loss, approximately 15 to 20% of body weight in the SURMOUNT trials. Wegovy shows approximately 12 to 15% in the STEP trials. Saxenda shows approximately 5 to 8% in the SCALE trials. Individual outcomes vary significantly and are not guaranteed to match trial averages.
                    </p>
                  </div>
                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      4. Can I switch between treatments if I find a cheaper option?
                    </h4>
                    <p className="mt-2 text-sm">
                      Switching between GLP 1 treatments is clinically possible but requires prescriber guidance. The titration schedules and dosing protocols differ between Saxenda (daily), Wegovy (weekly), and Mounjaro (weekly), and the switch process needs clinical oversight. Do not switch treatments without discussing it with a licensed prescriber.
                    </p>
                  </div>
                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      5. Are there cheaper alternatives to all three?
                    </h4>
                    <p className="mt-2 text-sm">
                      Orlistat, a non injectable weight loss medication, and Mysimba (bupropion and naltrexone) are available at lower price points through some UK private pharmacies, though with significantly different mechanisms and average efficacy profiles. NHS prescribing of these options through GP services is also available in some cases. These are not GLP 1 treatments and are outside the scope of this comparison.
                    </p>
                  </div>
                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      6. Where can I compare all three treatments side by side with live prices?
                    </h4>
                    <p className="mt-2 text-sm">
                      The <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-semibold text-emerald-600 hover:underline">Mounjaro vs Wegovy vs Saxenda comparison</Link> at Healthwise360 covers all three treatments across all dose strengths with live pricing from more than 64 GPhC registered pharmacies. The <Link href="/prices/cheapest-options-uk" className="font-semibold text-emerald-600 hover:underline">cheapest options UK hub</Link> provides a verified lowest cost snapshot updated regularly.
                    </p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  On pure headline price at maintenance dose, Saxenda is typically the cheapest of the three UK weight loss injections, followed by Wegovy, then Mounjaro. However, price alone does not determine value.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong>Saxenda:</strong> lowest headline cost, daily schedule, and 5 to 8% average weight loss.
                  </li>
                  <li>
                    <strong>Wegovy:</strong> mid range cost, weekly schedule, 12 to 15% average weight loss, and NICE approved NHS pathway.
                  </li>
                  <li>
                    <strong>Mounjaro:</strong> highest cost, weekly schedule, 15 to 20% average weight loss, and dual receptor mechanism.
                  </li>
                </ul>
                <p>
                  For patients primarily focused on cost, Saxenda or Wegovy at a partial stabilisation dose may represent the lowest sustainable annual spend. For patients prioritising efficacy and tolerating the higher cost, Mounjaro&apos;s clinical data supports its price premium for many users.
                </p>
                <p>
                  The right comparison is not which is cheapest, it is which delivers the best outcome for your specific situation at a cost that is sustainable for your circumstances. That question belongs in a conversation with a licensed prescriber, informed by the pricing context this article provides.
                </p>
                <p>
                  To compare live prices across all three treatments and verify pharmacy credentials before starting any conversation, visit the <Link href="/blog/weight-loss-treatment-price-comparison-uk" className="font-semibold text-emerald-600 hover:underline">weight loss treatment price comparison guide</Link> at Healthwise360.
                </p>
              </GuideSection>

              <hr className={`my-8 ${darkMode ? "border-slate-800" : "border-slate-200"}`} />

              <p className="text-xs italic text-slate-500">
                This article is for informational purposes only and does not constitute medical advice. All three treatments are prescription only medicines in the UK. All prices are approximate and subject to change. Confirm directly with a GPhC registered pharmacy before purchasing.
              </p>
            </article>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
