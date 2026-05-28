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
  WEGOVY_PRICE_UK_HERO_WEBP,
  WEGOVY_PRICE_UK_INLINE_WEBP,
} from "./blog-assets";

const SHARE_PATH = "/blog/wegovy-price-uk";
const HERO_SRC = blogImgPath(WEGOVY_PRICE_UK_HERO_WEBP);
const INLINE_SRC = blogImgPath(WEGOVY_PRICE_UK_INLINE_WEBP);

const TOC = [
  { id: "cost-overview", label: "How much does Wegovy cost?" },
  { id: "what-is-wegovy", label: "What Wegovy is" },
  { id: "price-by-dose", label: "Price by dose" },
  { id: "titration-cost", label: "Titration and monthly costs" },
  { id: "yearly-cost", label: "First year and ongoing costs" },
  { id: "extra-costs", label: "Additional provider fees" },
  { id: "wegovy-vs-mounjaro", label: "Wegovy vs Mounjaro prices" },
  { id: "nhs-access", label: "NHS availability" },
  { id: "wegovy-vs-saxenda", label: "Wegovy vs Saxenda prices" },
  { id: "verify-pharmacy", label: "How to verify a pharmacy" },
  { id: "faq", label: "FAQ" },
  { id: "conclusion", label: "Conclusion" },
];

const SOCIAL_HASHTAGS =
  "#WegovyPriceUK #SemaglutidePrice #WegovyCost #WeightLossTreatmentUK #GLP1UK #WegovyVsMounjaro";

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
            Wegovy Price UK 2026: How Much Does Each Dose Cost and Is It Worth It?
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
            alt="Wegovy Price UK 2026 dose cost guide"
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
              <GuideSection darkMode={darkMode} id="cost-overview" heading="How Much Does Wegovy Cost in the UK?">
                <p className="text-lg md:text-xl">
                  Wegovy (semaglutide) costs between <strong>£130 and £295 per pen</strong> in the UK private market in 2026, depending on the dose strength and the pharmacy provider. The 0.25 mg starter dose begins at around £130 per pen from some GPhC registered pharmacies, while the 2.4 mg maintenance dose reaches up to £295 across the market.
                </p>
                <p>
                  Like all GLP 1 treatments, Wegovy follows a step up titration schedule, meaning the dose, and therefore the cost, increases every four weeks. Most people will not be paying the starter price beyond the first month. Therefore, planning for the full cost curve is more useful than focusing on the headline figure alone.
                </p>
                <p>
                  This article is fully independent. No pharmacy or provider is promoted here, and nothing in this piece constitutes medical advice. Wegovy is a prescription only medicine in the UK.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="what-is-wegovy" heading="What Is Wegovy and Why Does It Require a Titration Schedule?">
                <p>
                  Wegovy is the brand name for semaglutide 2.4 mg, a GLP 1 receptor agonist manufactured by Novo Nordisk. It works by mimicking the GLP 1 hormone naturally produced in the gut, which regulates appetite, slows gastric emptying, and influences satiety signals in the brain.
                </p>
                <p>
                  The reason Wegovy uses a titration schedule is tolerability. Starting at the full 2.4 mg dose would cause significant gastrointestinal side effects in most people. Instead, patients begin at 0.25 mg and increase gradually, giving the body time to adjust before each dose step.
                </p>
                <p>
                  If you want clinical context before comparing prices, the <Link href="/what-is-wegovy" className="font-medium text-emerald-600 hover:underline">Wegovy semaglutide injection UK guide</Link> explains how semaglutide works, its trial background, and who it is typically prescribed for.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="price-by-dose" heading="Wegovy Price by Dose: Full UK Breakdown 2026">
                <p>
                  The table below reflects approximate pricing across GPhC registered UK pharmacies as of 2026. Prices vary between providers and are subject to change, so always confirm directly with the pharmacy before ordering.
                </p>
                <div className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                  <GuideTable
                    headers={[
                      "Dose Strength",
                      "Injection Frequency",
                      "Approximate Price Per Pen",
                      "Duration Per Pen",
                    ]}
                    rows={[
                      { cells: ["0.25 mg starter", "Weekly", "£130 to £170", "4 weeks"] },
                      { cells: ["0.5 mg", "Weekly", "£145 to £185", "4 weeks"] },
                      { cells: ["1 mg", "Weekly", "£175 to £220", "4 weeks"] },
                      { cells: ["1.7 mg", "Weekly", "£215 to £270", "4 weeks"] },
                      { cells: ["2.4 mg maintenance", "Weekly", "£240 to £295", "4 weeks"] },
                    ]}
                  />
                </div>
                <p>
                  Each Wegovy pen contains four pre filled doses, making the per pen cost equivalent to one month of medication at each dose step.
                </p>
                <p>
                  For a live, regularly updated comparison across verified providers for all dose strengths, the <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-medium text-emerald-600 hover:underline">Wegovy price comparison across UK weight loss treatments</Link> helps you compare semaglutide costs alongside Mounjaro and Saxenda.
                </p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_SRC}
                  alt="Wegovy price by dose and monthly titration cost guide"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection darkMode={darkMode} id="titration-cost" heading="Wegovy Titration Schedule and What It Means for Monthly Costs">
                <p>
                  The standard Wegovy titration schedule runs across five dose steps over approximately 17 weeks before reaching the maintenance dose:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li><strong>Month 1, weeks 1 to 4:</strong> 0.25 mg with an estimated cost of £130 to £170</li>
                  <li><strong>Month 2, weeks 5 to 8:</strong> 0.5 mg with an estimated cost of £145 to £185</li>
                  <li><strong>Month 3, weeks 9 to 12:</strong> 1 mg with an estimated cost of £175 to £220</li>
                  <li><strong>Month 4, weeks 13 to 16:</strong> 1.7 mg with an estimated cost of £215 to £270</li>
                  <li><strong>Month 5 and beyond, week 17 onwards:</strong> 2.4 mg with an estimated cost of £240 to £295 per month</li>
                </ul>
                <p>
                  Some patients stabilise at 1 mg or 1.7 mg rather than progressing to the full 2.4 mg dose. In those cases, the ongoing monthly cost is correspondingly lower. However, this is a clinical decision based on individual response and tolerability, not a financial one to make independently.
                </p>
                <p>
                  The key implication for budgeting is that the advertised from £130 per month figure applies to the first four weeks only. By month five, most patients on the standard schedule will be paying between £240 and £295 per month for the medication alone.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="yearly-cost" heading="Total Wegovy Cost: First Year vs Ongoing">
                <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Estimated Year One Cost Including Titration Phase
                </h3>
                <div className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                  <GuideTable
                    headers={["Stabilisation Dose", "Approximate Year 1 Cost"]}
                    rows={[
                      { cells: ["1 mg mid titration stabilisation", "£1,880 to £2,440"] },
                      { cells: ["1.7 mg", "£2,260 to £2,880"] },
                      { cells: ["2.4 mg full maintenance", "£2,670 to £3,380"] },
                    ]}
                  />
                </div>
                <p>
                  These estimates include the lower costs of the titration phase in months one through four, then project ongoing costs at the maintenance dose.
                </p>

                <h3 className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Estimated Ongoing Annual Cost at Maintenance
                </h3>
                <div className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                  <GuideTable
                    headers={["Maintenance Dose", "Estimated Annual Cost"]}
                    rows={[
                      { cells: ["1 mg", "£2,100 to £2,640"] },
                      { cells: ["1.7 mg", "£2,580 to £3,240"] },
                      { cells: ["2.4 mg", "£2,880 to £3,540"] },
                    ]}
                  />
                </div>
                <p>
                  All figures are estimates and do not include consultation fees, delivery charges, or programme costs where applicable.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="extra-costs" heading="What Additional Costs Are Commonly Charged on Top of the Pen Price?">
                <p>
                  The medication pen is the primary cost, but several additional fees frequently apply depending on the provider:
                </p>
                <p>
                  <strong>Consultation and prescription fees.</strong> Some providers include initial and renewal consultations in the medication price. Others charge £20 to £50 per clinical episode separately. Over a year, this can add £100 to £300 or more to total costs.
                </p>
                <p>
                  <strong>Delivery charges.</strong> Wegovy requires cold chain handling and refrigerated delivery. Delivery fees vary from zero to approximately £15 per order. On a monthly ordering cycle, this adds up noticeably across a year.
                </p>
                <p>
                  <strong>Monitoring or programme fees.</strong> Certain providers bundle structured coaching, progress tracking, or clinical check in programmes into the service, charging these as a subscription layer on top of the medication cost.
                </p>
                <p>
                  <strong>Dose step price increases.</strong> As detailed in the titration table above, each dose step carries a higher pen price. Budgeting only for the starter price will underestimate true costs considerably.
                </p>
                <p>
                  Therefore, the most accurate comparison between providers involves totalling all fee components, not just the pen price. The <Link href="/compare/best-weight-loss-treatments-uk" className="font-medium text-emerald-600 hover:underline">best weight loss treatment options comparison for all in UK pharmacy pricing</Link> aggregates verified data across more than 60 GPhC registered pharmacies, making it easier to conduct a genuine like for like comparison without visiting dozens of individual pharmacy sites.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="wegovy-vs-mounjaro" heading="Wegovy vs Mounjaro: How Do the Prices Compare?">
                <p>
                  Price comparison between Wegovy and Mounjaro is one of the most common questions people have when researching GLP 1 treatments. Here is how the two sit side by side across their dose ranges:
                </p>
                <div className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                  <GuideTable
                    headers={["Dose Stage", "Wegovy (Semaglutide)", "Mounjaro (Tirzepatide)"]}
                    rows={[
                      { cells: ["Starter", "£130 to £170 (0.25 mg)", "£130 to £180 (2.5 mg)"] },
                      { cells: ["Mid titration", "£175 to £220 (1 mg)", "£200 to £270 (7.5 mg)"] },
                      { cells: ["Maintenance", "£240 to £295 (2.4 mg)", "£260 to £340 (15 mg)"] },
                    ]}
                  />
                </div>
                <p>
                  At the starter dose, the two treatments are broadly comparable in price. However, the gap widens at higher doses, and Mounjaro at its maximum 15 mg dose tends to be the more expensive option across most providers.
                </p>
                <p>
                  Whether that price difference is meaningful depends on individual clinical response, a factor that cannot be determined from price data alone. For a full three way comparison including Saxenda, see the <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-medium text-emerald-600 hover:underline">Mounjaro vs Wegovy vs Saxenda comparison for UK treatment prices</Link>.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nhs-access" heading="Is Wegovy Available on the NHS?">
                <p>
                  Yes, but access is currently limited. Wegovy received NICE approval for use in weight management in England in 2023, and NHS commissioning has begun through specialist weight management services. However, eligibility is subject to specific clinical criteria, and the rollout is phased rather than universal.
                </p>
                <p>
                  In practice, most people in the UK still access Wegovy through private prescriptions in 2026, either because they do not meet NHS eligibility criteria or because NHS waiting times and regional availability make private access the more realistic route.
                </p>
                <p>
                  This article covers only private market pricing. For NHS eligibility information, speaking with a GP or specialist weight management service is the appropriate route.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="wegovy-vs-saxenda" heading="Wegovy vs Saxenda: Is There a Price Difference?">
                <p>
                  Saxenda (liraglutide) is the third main injectable weight loss option in the UK private market. Unlike Wegovy and Mounjaro, which are weekly injections, Saxenda is injected daily, which changes how pricing is structured.
                </p>
                <p>
                  Approximate monthly costs for Saxenda across the titration range run from around £150 to £290. At some dose levels and with some providers, this sits slightly below Wegovy pricing. However, the daily injection frequency and generally lower average clinical weight loss benchmarks compared to Wegovy are factors that affect the overall value equation.
                </p>
                <p>
                  For an independent overview of how Saxenda compares on mechanism and evidence, see the <Link href="/what-is-saxenda" className="font-medium text-emerald-600 hover:underline">Saxenda liraglutide treatment guide for UK patients</Link>.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="verify-pharmacy" heading="How to Verify a UK Pharmacy Before Buying Wegovy">
                <p>
                  Because Wegovy is a prescription only medicine, purchasing it without a proper clinical assessment is both illegal and clinically unsafe. Before ordering from any online pharmacy, confirm the following:
                </p>
                <ol className="list-decimal space-y-3 pl-5">
                  <li>
                    <strong>GPhC registration:</strong> verify the pharmacy registration number on the <a href="https://www.pharmacyregulation.org/registers" target="_blank" rel="noopener noreferrer" className="font-medium text-emerald-600 hover:underline">official GPhC pharmacy register</a>.
                  </li>
                  <li>
                    <strong>MHRA internet pharmacy logo:</strong> it should be displayed and clickable on the pharmacy homepage.
                  </li>
                  <li>
                    <strong>Named GMC registered prescriber:</strong> the clinician issuing the prescription should be identifiable and verifiable.
                  </li>
                  <li>
                    <strong>Full fee transparency before checkout:</strong> all costs including consultation, delivery, and monitoring fees should be disclosed before payment.
                  </li>
                  <li>
                    <strong>Verified independent reviews:</strong> check Trustpilot ratings rather than curated testimonials on the pharmacy website.
                  </li>
                </ol>
                <p>
                  For a structured guide to evaluating pharmacy credentials alongside pricing, the <Link href="/compare/best-weight-loss-treatments-uk" className="font-medium text-emerald-600 hover:underline">UK online pharmacy verification and GPhC safety standards guide</Link> is a useful independent reference point.
                </p>
              </GuideSection>

              <section
                id="faq"
                className={`mt-16 border-t pt-10 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
              >
                <h2 className={`mb-8 text-3xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  FAQ: Wegovy Price UK
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      1. What is the cheapest dose of Wegovy available in the UK?
                    </h3>
                    <p>
                      The 0.25 mg starter dose is the most affordable, available from approximately £130 per pen at some GPhC registered pharmacies. This dose is used only during the first four weeks of treatment. Prices increase with each subsequent dose step.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      2. How much does Wegovy 2.4 mg cost in the UK?
                    </h3>
                    <p>
                      The 2.4 mg maintenance dose, which is the highest licensed Wegovy dose for weight management, ranges from approximately £240 to £295 per pen across GPhC registered pharmacies in 2026. This is the price most long term users will pay on a monthly basis.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      3. Is Wegovy cheaper than Mounjaro?
                    </h3>
                    <p>
                      At starter doses, both treatments are priced within a similar range. At maintenance doses, Wegovy tends to be slightly less expensive than Mounjaro, approximately £240 to £295 versus £260 to £340, though the gap varies by provider. However, individual clinical response and suitability are more important than price alone in determining which treatment is appropriate.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      4. Can I get Wegovy on the NHS for free?
                    </h3>
                    <p>
                      Wegovy is available through NHS specialist weight management services for patients who meet specific eligibility criteria. However, the rollout is phased and access depends on location and clinical suitability. Most UK patients currently access Wegovy privately. For NHS eligibility information, speak with your GP.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      5. Why does Wegovy price increase with each dose?
                    </h3>
                    <p>
                      Each pen contains a higher concentration of semaglutide at higher doses. Novo Nordisk prices each dose strength differently at the manufacturing level, and pharmacies follow the same stepped pricing structure. The price you pay at 2.4 mg reflects the higher active ingredient concentration compared to the 0.25 mg starter pen.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      6. Are there hidden fees when buying Wegovy privately?
                    </h3>
                    <p>
                      Yes, in many cases. Consultation fees, delivery charges, and programme or monitoring fees are commonly charged separately from the pen price. Always request a full cost breakdown, including all fees, before placing an order with any provider.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      7. Where can I compare Wegovy prices from multiple UK pharmacies at once?
                    </h3>
                    <p>
                      The <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-medium text-emerald-600 hover:underline">Wegovy and weight loss treatment price comparison for UK pharmacies</Link> displays independently verified pricing from over 60 GPhC registered pharmacies across all dose strengths, with no commercial affiliation to any provider. The <Link href="/blog/weight-loss-treatment-price-comparison-uk" className="font-medium text-emerald-600 hover:underline">full weight loss treatment price comparison guide</Link> also covers all three treatments side by side.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  Wegovy (semaglutide) costs between <strong>£130 and £295 per pen</strong> in the UK private market in 2026, with prices rising at each step of the dose titration schedule. At the 0.25 mg starter dose, most patients pay £130 to £170. By the 2.4 mg maintenance dose, the monthly cost rises to £240 to £295, not including any additional consultation, delivery, or programme fees.
                </p>
                <p>
                  Annual costs at maintenance range from approximately <strong>£2,880 to £3,540</strong> for patients who progress to the full 2.4 mg dose, with lower figures for those who stabilise at 1 mg or 1.7 mg.
                </p>
                <p>
                  To compare Wegovy pricing against Mounjaro and Saxenda across all dose steps and providers, visit the <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-medium text-emerald-600 hover:underline">Mounjaro vs Wegovy vs Saxenda comparison at Healthwise360</Link>. For the full cross provider price breakdown, the <Link href="/blog/weight-loss-treatment-price-comparison-uk" className="font-medium text-emerald-600 hover:underline">weight loss treatment price comparison guide</Link> covers all three treatments in detail.
                </p>
                <p className={`mt-8 text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  This article is for informational purposes only and does not constitute medical advice. Wegovy is a prescription only medicine in the UK. All prices are approximate and subject to change. Always confirm directly with a GPhC registered pharmacy before purchasing.
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
                title="Wegovy Price UK 2026: How Much Does Each Dose Cost and Is It Worth It?"
                description="How much does Wegovy cost in the UK in 2026? Full price breakdown by dose, monthly estimates, NHS vs private, and how it compares to Mounjaro."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
