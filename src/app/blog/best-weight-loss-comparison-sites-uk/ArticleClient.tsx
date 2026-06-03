"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSection, GuideTable } from "@/components/guide/GuideLayout";
import {
  blogImgPath,
  BEST_WEIGHT_LOSS_COMPARISON_SITES_UK_HERO_WEBP,
  BEST_WEIGHT_LOSS_COMPARISON_SITES_UK_INLINE_WEBP,
} from "./blog-assets";

const SHARE_PATH = "/blog/best-weight-loss-comparison-sites-uk";
const HERO_SRC = blogImgPath(BEST_WEIGHT_LOSS_COMPARISON_SITES_UK_HERO_WEBP);
const INLINE_SRC = blogImgPath(BEST_WEIGHT_LOSS_COMPARISON_SITES_UK_INLINE_WEBP);

const TOC = [
  { id: "intro", label: "Introduction" },
  { id: "before-reviews", label: "The Question Nobody Asks" },
  { id: "seven-criteria", label: "The 7 Criteria We Used" },
  { id: "review-clickcompare", label: "1. Click.Compare" },
  { id: "review-medeazy", label: "2. MedEazy" },
  { id: "review-monj", label: "3. Monj" },
  { id: "review-wegocompare", label: "4. WegoCompare" },
  { id: "review-healthwise360", label: "5. Healthwise360" },
  { id: "side-by-side", label: "Side-by-Side Comparison" },
  { id: "checklist", label: "The Checklist That Matters" },
  { id: "market-wrong", label: "What This Market Gets Wrong" },
  { id: "faq", label: "FAQ" },
  { id: "conclusion", label: "Conclusion" },
];

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

        {/* Visual Breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400 font-medium">
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-emerald-600 transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className={darkMode ? "text-slate-200" : "text-slate-600"}>
            UK Weight Loss Comparison Sites
          </span>
        </nav>

        <header className="mb-12">
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            We Tested 5 UK Weight Loss Comparison Websites So You Don&apos;t Have To: Here is the Honest Verdict
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              3 Jun 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              11 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_SRC}
            alt="An analysis comparing five major UK weight loss websites with tables and criteria"
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
              
              <GuideSection darkMode={darkMode} id="intro" heading="Introduction">
                <p className="text-lg md:text-xl font-medium">
                  There are now more websites comparing UK weight loss treatment prices than there are clear answers about which one to trust.
                </p>
                <p>
                  That is not a coincidence. The UK private GLP-1 market, which includes prominent treatments such as Mounjaro, Wegovy, and Saxenda, has grown at extraordinary speed since 2023, and wherever patients go looking for information, comparison platforms follow. Some of them are genuinely useful. Some exist primarily to send you somewhere that pays them a commission. And most sit somewhere in between, doing one or two things well while leaving significant gaps in everything else.
                </p>
                <p>
                  This article is the one we wish existed when we started researching this space. It reviews five of the most prominent UK weight loss treatment comparison websites, specifically Click Compare, MedEazy, Monj, WegoCompare, and Healthwise360, against a consistent set of criteria that reflects what actually matters when making a decision about private prescription treatment. We are focusing not just on price, and not just on which pharmacy is cheapest this week, but on whether the platform gives you enough information to make a genuinely safe, fully informed choice.
                </p>
                <p>
                  The results are not what you might expect.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="before-reviews" heading="Before the Reviews: The Question Nobody Asks">
                <p>
                  Most people approach weight loss treatment comparison websites the same way they approach flight comparison sites, which is to open several tabs, find the lowest number, and book it.
                </p>
                <p>
                  That approach works for flights. It works considerably less well for prescription medications.
                </p>
                <p>
                  The reason is structural. GLP-1 treatments, all three of them, are prescription only medicines. They require a clinical assessment from a licensed prescriber before they can be dispensed. The cheapest pharmacy on a comparison site is not necessarily the one with the most rigorous clinical process, the best prescriber credentials, the most reliable delivery, or the strongest patient support. It might be, but price alone cannot tell you that.
                </p>
                <p>
                  Beyond that, the price you see on most comparison platforms is not the price you will pay. The advertised figure is almost always the starter dose, meaning the cheapest pen, used for the first four weeks of a treatment that runs for twelve months or more. By the maintenance dose, you may be paying double that number, or more. There are also consultation fees, delivery charges, programme costs, and needle costs, some of which are bundled in, some of which are not, and they are rarely disclosed at the comparison stage.
                </p>
                <p>
                  This is the context in which these five platforms operate, and it is the lens through which we reviewed them.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="seven-criteria" heading="The 7 Criteria We Used">
                <p>
                  We did not make up a scoring system designed to favour a predetermined winner. We started with the question: &quot;What would a person actually need to know before choosing a weight loss treatment provider in the UK?&quot; and we built the criteria from the answers.
                </p>
                <p>
                  For our assessment, we analyzed each site based on the following seven areas:
                </p>
                <div className="space-y-3 pl-4 border-l-2 border-emerald-500">
                  <p>
                    <strong>First: Live price comparison</strong>, to check whether it shows real, updated prices across multiple pharmacies.
                  </p>
                  <p>
                    <strong>Second: Per dose breakdown</strong>, to see if it shows prices at every titration step, not just the starter dose.
                  </p>
                  <p>
                    <strong>Third: GPhC verification</strong>, to confirm if it verifies that pharmacies are legitimately registered and explains how you can check this yourself.
                  </p>
                  <p>
                    <strong>Fourth: Trustpilot integration</strong>, checking if provider reputations are visible and filterable alongside prices.
                  </p>
                  <p>
                    <strong>Fifth: Hidden fee exposure</strong>, verifying if it discloses consultation, delivery, programme, and needle costs.
                  </p>
                  <p>
                    <strong>Sixth: NHS eligibility context</strong>, checking if it explains whether NHS access exists and how to pursue it.
                  </p>
                  <p>
                    <strong>Seventh: Clinical education and safety</strong>, to see if it explains what these treatments are, how they work, and what the risks of buying online look like.
                  </p>
                </div>
                <p className="mt-4">
                  The final comparison table reflects these criteria, but the reviews below will give you the texture behind the scores, which matters more than the scores themselves.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="review-clickcompare" heading="1. Click.Compare">
                <h3 className={`text-lg font-medium mt-4 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  The Pitch
                </h3>
                <p>
                  &quot;No bias. No fuss. No fluff.&quot; That is the Click.Compare headline, and it is a reasonably accurate description of what the platform does and does not do.
                </p>
                <h3 className={`text-lg font-medium mt-6 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  What It Actually Does Well
                </h3>
                <p>
                  Click.Compare&apos;s core proposition is refreshingly honest: they check registered UK pharmacy websites weekly, update prices for each drug and dosage, and focus on average prices across all doses rather than introductory discounts. That last point is more meaningful than it sounds: the practice of leading with a promotional starter price and burying the maintenance cost is endemic in this market, and Click.Compare&apos;s stated commitment to averaging across doses at least partially addresses it.
                </p>
                <p>
                  They also include pharmacy reviews and basic registered pharmacy verification, and they are transparent that they are not medical professionals and are not recommending any medication. In a market where the line between information and promotion is frequently blurred, that clarity has value.
                </p>
                <h3 className={`text-lg font-medium mt-6 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Where It Falls Short
                </h3>
                <p>
                  The &quot;no fluff&quot; positioning is also the limitation. There is no clinical education, no GLP-1 mechanism explanation, no side effect context, no NHS eligibility guidance, no delivery or cold chain information, and no interactive tools.
                </p>
                <p>
                  If you already know exactly which treatment you want, understand the titration schedule, have verified the pharmacy credentials independently, and just need a quick price reference, Click.Compare does that job cleanly. However, if you are researching weight loss treatment for the first time, or trying to understand whether a pharmacy is genuinely safe to use, the platform offers very little beyond the numbers.
                </p>
                <h3 className={`text-lg font-medium mt-6 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  The Honest Assessment
                </h3>
                <p>
                  Click.Compare is a useful bookmark for the price checking stage of research. It is not a platform that helps you get to the stage where price checking becomes appropriate.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="review-medeazy" heading="2. MedEazy">
                <h3 className={`text-lg font-medium mt-4 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  The Pitch
                </h3>
                <p>
                  MedEazy runs dedicated pricing pages per medication and per dose. Mounjaro, Wegovy, and Saxenda each have their own section, with prices updated daily and discount codes displayed where pharmacies offer them.
                </p>
                <h3 className={`text-lg font-medium mt-6 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  What It Actually Does Well
                </h3>
                <p>
                  The daily update frequency is genuinely valuable in a market that has seen significant price volatility: the late 2025 Mounjaro price increase caught many comparison platforms showing outdated data for weeks. MedEazy&apos;s commitment to daily refreshes addresses this in a way that weekly updated platforms cannot.
                </p>
                <p>
                  The per dose granularity is also strong. You can look at Mounjaro 7.5 mg specifically, rather than getting an averaged figure that blends the starter and maintenance extremes. This is exactly the kind of data that matters for real world cost planning.
                </p>
                <p>
                  Beyond price, MedEazy also includes Trustpilot ratings and GPhC checks alongside its comparison data, not as hidden background information but as visible columns in the interface. That combination of price, reputation, and regulatory status in one view is meaningfully more useful than price alone.
                </p>
                <h3 className={`text-lg font-medium mt-6 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Where It Falls Short
                </h3>
                <p>
                  The platform is built around price tools. Clinical education is sparse. There is no explanation of how GLP-1 medications work, what the side effect profile looks like, how to think about titration in terms of long term cost, or what lifestyle changes support GLP-1 treatment. The discount code tracking, while useful, is also the feature most likely to draw users toward the cheapest option rather than the most appropriate one.
                </p>
                <h3 className={`text-lg font-medium mt-6 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  The Honest Assessment
                </h3>
                <p>
                  MedEazy is one of the stronger pure comparison tools in the UK market, particularly for users who need current, per dose price data across multiple providers and want basic GPhC and Trustpilot context alongside it. It covers more ground than Click.Compare and does it more frequently. However, it stops at the transaction layer (the questions of what does it cost and where can I buy it) without addressing the questions of should I buy it, from whom, and how do I know it is safe that sit upstream.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="review-monj" heading="3. Monj">
                <h3 className={`text-lg font-medium mt-4 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  The Pitch
                </h3>
                <p>
                  Monj claims one of the more rigorous methodologies in the space: rather than scraping listed prices from pharmacy websites, they perform full checkout simulations on every pen strength for every provider, going through the actual purchase flow to expose fees that headline prices do not reveal.
                </p>
                <h3 className={`text-lg font-medium mt-6 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  What It Actually Does Well
                </h3>
                <p>
                  This methodology matters enormously, and it is Monj&apos;s clearest differentiator. The problem of hidden fees in UK weight loss pharmacy pricing is real and pervasive: consultation fees that appear at the prescribing stage, delivery charges that emerge at checkout, and premium dispensing fees that are never mentioned on the product page. Monj&apos;s checkout simulation approach surfaces these in a way that no platform relying purely on listed prices can.
                </p>
                <p>
                  The resulting data is divided into three views: discounted starting prices, standard prices without promotional codes, and longer term maintenance pricing. That three layer structure is the most sophisticated price presentation in the comparison market: it gives users a picture of what treatment actually costs at different stages of the journey rather than collapsing everything into a single figure.
                </p>
                <p>
                  NHS access angle and basic safety context are also present, which puts Monj ahead of Click.Compare and MedEazy in breadth.
                </p>
                <h3 className={`text-lg font-medium mt-6 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Where It Falls Short
                </h3>
                <p>
                  Monj is heavily weighted toward Mounjaro. Wegovy and Saxenda coverage is present but not the primary focus, which makes the platform less useful for users who are genuinely weighing up all three treatment options. Clinical education including mechanism, side effects, lifestyle integration, and treatment maintenance is limited. There are no interactive tools. For all the rigour of the pricing methodology, the platform&apos;s educational depth does not match its price intelligence depth.
                </p>
                <h3 className={`text-lg font-medium mt-6 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  The Honest Assessment
                </h3>
                <p>
                  For pure Mounjaro price research, specifically for users who want to know what they will actually be charged rather than what is advertised, Monj is the most thorough resource in the market. Its checkout simulation methodology closes the gap that all other platforms leave open. However, it is a specialist tool for a specific stage of research, not a platform that covers the full decision journey.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="review-wegocompare" heading="4. WegoCompare">
                <h3 className={`text-lg font-medium mt-4 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  The Pitch
                </h3>
                <p>
                  WegoCompare positions itself around Wegovy specifically, covering the NHS eligibility pathway alongside private cost comparison, and contextualising the private cost within the broader healthcare decision.
                </p>
                <h3 className={`text-lg font-medium mt-6 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  What It Actually Does Well
                </h3>
                <p>
                  The NHS eligibility framework is WegoCompare&apos;s clearest strength. For users who are asking &quot;do I qualify for Wegovy on the NHS before I consider paying privately?&quot; (a question that most comparison platforms either ignore or address superficially) WegoCompare provides structured, useful context. This includes BMI thresholds, qualifying comorbidities, the phased rollout reality, and the practical gap between NICE approval and NHS availability in 2026.
                </p>
                <p>
                  The private versus NHS cost comparison is also genuinely useful framing. Understanding that NHS Wegovy is not universally available, and that private access at £240 to £295 per month at maintenance is the current reality for most eligible patients, is context that informs the comparison rather than just showing prices in isolation.
                </p>
                <h3 className={`text-lg font-medium mt-6 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Where It Falls Short
                </h3>
                <p>
                  The Wegovy specific focus is also the limitation. Mounjaro and Saxenda coverage is minimal, which means WegoCompare is not useful as a three treatment comparison platform. There is no live price comparison tool across multiple pharmacies. For all the NHS eligibility strength, the clinical depth beyond eligibility criteria is limited, meaning mechanism, side effects, and lifestyle integration are not covered in meaningful depth.
                </p>
                <h3 className={`text-lg font-medium mt-6 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  The Honest Assessment
                </h3>
                <p>
                  WegoCompare is the most useful single platform resource for users who are specifically focused on Wegovy and want to understand NHS access before committing to private prescribing. Outside of that specific use case, it is too narrow to serve as a primary research tool for UK weight loss treatment.
                </p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_SRC}
                  alt="A professional setting with a tablet showing pricing data lists, showing a non-medical analytical environment"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection darkMode={darkMode} id="review-healthwise360" heading="5. Healthwise360">
                <h3 className={`text-lg font-medium mt-4 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  The Pitch
                </h3>
                <p>
                  Healthwise360 is the most ambitious of the five platforms, not because it does everything perfectly, but because it is the only one that appears to have asked a genuinely different question: not &quot;what is the cheapest pharmacy?&quot; but &quot;what does a person need to understand before they can make a safe, informed decision about private weight loss treatment in the UK?&quot;
                </p>
                <p>
                  The answer to that question turns out to be considerably more than a price table.
                </p>
                <h3 className={`text-lg font-medium mt-6 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  What It Actually Does Well
                </h3>
                <p>
                  <strong>The comparison interface</strong> at our independent <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-medium text-emerald-600 hover:underline">Mounjaro vs Wegovy vs Saxenda comparison hub</Link> covers all three treatments across all dose strengths, drawing from 64 verified GPhC registered pharmacies. The filter system, allowing you to filter by Trustpilot minimum rating, by individual dose strength, and by provider, sortable by cost or reputation, is the most specific in the market. You can filter to pharmacies with a 4.8 Trustpilot minimum at the 10 mg Mounjaro dose, and the interface updates accordingly. No other platform offers this combination.
                </p>
                <p>
                  <strong>The GPhC verification layer</strong> is not just a background check: it is surfaced to users as an educational element. Our dedicated <Link href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards" className="font-medium text-emerald-600 hover:underline">GPhC registered pharmacy verification guide</Link> explains how to check any pharmacy&apos;s registration independently, which means users leave the platform better equipped to evaluate providers they encounter anywhere, not just those listed on the site.
                </p>
                <p>
                  <strong>The clinical education is comprehensive</strong> in a way that no other comparison platform approaches. Our primary clinical guides, including <Link href="/what-is-mounjaro" className="font-medium text-emerald-600 hover:underline">what Mounjaro is</Link>, <Link href="/what-is-wegovy" className="font-medium text-emerald-600 hover:underline">what Wegovy is</Link>, and <Link href="/what-is-saxenda" className="font-medium text-emerald-600 hover:underline">what Saxenda is</Link>, cover mechanism, clinical trial data, eligibility context, and how to start treatment. Beyond that, there are safety guides covering fake pharmacy warnings, GP notification, pregnancy risk, KwikPen disposal, and travel with GLP-1 medication. Lifestyle content covering diet, sleep, stress, exercise, plateau management, and the realistic expectations around GLP-1 treatment completes the picture.
                </p>
                <p>
                  This matters because GLP-1 treatment is not a product purchase, it is the beginning of a clinical and lifestyle journey. A platform that treats it as the former is providing structurally incomplete information.
                </p>
                <p>
                  <strong>The interactive tools</strong> are unique to Healthwise360 in the UK comparison market:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    First, our online <Link href="/tools/bmi-calculator" className="font-medium text-emerald-600 hover:underline">BMI Calculator UK</Link> which calculates BMI with NHS aligned category context and treatment eligibility implications, in any UK measurement format, whether stone, lbs, kg, feet, or cm.
                  </li>
                  <li>
                    Second, our interactive <Link href="/tools/mounjaro-click-calculator" className="font-medium text-emerald-600 hover:underline">Mounjaro Click Calculator</Link> which calculates KwikPen clicks for any dose from any pen strength, with a complete reference chart, which is genuinely useful for anyone navigating partial doses or pen changes.
                  </li>
                  <li>
                    Third, our comprehensive <Link href="/prices/cheapest-options-uk" className="font-medium text-emerald-600 hover:underline">cheapest weight loss treatment UK prices hub</Link> provides a dose specific overview across verified providers.
                  </li>
                </ul>
                <p className="mt-4">
                  Additionally, our location level content, which covers local healthcare contexts such as <Link href="/blog/best-weight-loss-treatment-in-london" className="font-medium text-emerald-600 hover:underline">weight loss treatment in London</Link>, Birmingham, Manchester, Glasgow, Leeds, and other major UK cities, addresses local search in a way that national price comparison platforms generally do not.
                </p>
                <h3 className={`text-lg font-medium mt-6 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Where It Falls Short
                </h3>
                <p>
                  In the interest of honesty, Healthwise360 does not track individual discount codes in the way MedEazy and Click.Compare do. For users specifically hunting promotional offers, those platforms may surface codes that Healthwise360 does not feature. While our comparison interface is the most sophisticated in terms of filter capability, Monj&apos;s full checkout simulation methodology for hidden fee detection is more granular at the per checkout verification level.
                </p>
                <p>
                  These are real gaps, not minor quibbles. A genuinely complete research process would use Healthwise360 as the starting framework, for education, eligibility context, safety verification, and filtered price comparison, and then cross check specific pen prices against Monj or MedEazy for the most current, checkout verified figures before committing.
                </p>
                <h3 className={`text-lg font-medium mt-6 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  The Honest Assessment
                </h3>
                <p>
                  Healthwise360 is the platform that most closely reflects what a comprehensive, responsible weight loss treatment comparison resource should look like, combining price transparency, pharmacy safety, clinical education, and interactive tools in a single interface. It is not perfect, but it is asking a more complete question than any of the alternatives.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="side-by-side" heading="Side-by-Side: What Each Platform Actually Covers">
                <p>
                  The table below reflects how each weight loss comparison website performs across the seven core criteria and other essential evaluation factors:
                </p>
                <div className="mt-6">
                  <GuideTable
                    headers={["Criteria", "Click.Compare", "MedEazy", "Monj", "WegoCompare", "Healthwise360"]}
                    rows={[
                      { cells: ["Live price comparison", "Full Support", "Full Support", "Full Support", "Partial Support", "Full Support"], highlight: true },
                      { cells: ["Per dose breakdown (all titration steps)", "Partial Support", "Full Support", "Full Support", "Partial Support", "Full Support"] },
                      { cells: ["GPhC verification visible", "Partial Support", "Full Support", "Full Support", "Partial Support", "Full with Education"] },
                      { cells: ["Trustpilot integration and filter", "Partial Support", "Full Support", "Partial Support", "Not present", "Full Support"], highlight: true },
                      { cells: ["Discount codes", "Full Support", "Full Support", "Full Support", "Not present", "Coming Soon"] },
                      { cells: ["Hidden fee exposure", "Partial Support", "Partial Support", "Full Checkout Simulation", "Not present", "Full Support"] },
                      { cells: ["NHS eligibility context", "Not present", "Partial Support", "Full Support", "Full Support", "Full Support"] },
                      { cells: ["Delivery and cold chain info", "Not present", "Partial Support", "Full Support", "Not present", "Full Support"] },
                      { cells: ["Clinical and medical education", "Not present", "Not present", "Not present", "Partial Support", "Full Support"], highlight: true },
                      { cells: ["Safety guides (pharmacy and GPhC)", "Not present", "Not present", "Not present", "Not present", "Full Support"] },
                      { cells: ["Lifestyle and maintenance content", "Not present", "Not present", "Not present", "Not present", "Full Support"] },
                      { cells: ["Interactive tools", "Not present", "Not present", "Not present", "Not present", "Full (3 tools)"] },
                      { cells: ["All 3 treatments covered equally", "Full Support", "Full Support", "Partial Support", "Partial Support", "Full Support"] },
                      { cells: ["Location and local content", "Not present", "Not present", "Not present", "Not present", "Full Support"] },
                    ]}
                  />
                </div>
                <p className="mt-2 text-xs text-slate-500 italic">
                  Note: Full Support means comprehensive features are provided; Partial Support means limited or indirect data is offered; Not present means the aspect is not addressed.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="checklist" heading="The Checklist That Actually Matters">
                <p>
                  If you take nothing else from this article, take this: before using any comparison platform to guide a decision about private prescription treatment, run it through these seven questions.
                </p>
                
                <div className="space-y-4 mt-6">
                  <div>
                    <h4 className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      Does it show per dose prices across the full titration schedule?
                    </h4>
                    <p className="text-sm mt-1">
                      It should display not just the starter dose, and not just an average, but every single dose step. If it only shows &quot;from £X per month,&quot; it is structurally incomplete.
                    </p>
                  </div>

                  <div>
                    <h4 className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      Does it verify GPhC registration and explain how you can check yourself?
                    </h4>
                    <p className="text-sm mt-1">
                      The GPhC register is public. Any platform worth trusting should point you to it and show you how to use it, rather than just telling you they have done the check themselves.
                    </p>
                  </div>

                  <div>
                    <h4 className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      Does it show Trustpilot ratings alongside prices?
                    </h4>
                    <p className="text-sm mt-1">
                      A pharmacy with a 3.9 Trustpilot score at £10 per month less than a 4.8 rated competitor is not the better option. Platforms that show only price are removing information you need.
                    </p>
                  </div>

                  <div>
                    <h4 className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      Does it disclose all fee components before the provider comparison?
                    </h4>
                    <p className="text-sm mt-1">
                      This includes consultation fees, delivery, programme costs, and needle costs. If you cannot find this information before reaching the pharmacy&apos;s own checkout page, you are comparing incomplete numbers.
                    </p>
                  </div>

                  <div>
                    <h4 className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      Does it tell you whether NHS access exists?
                    </h4>
                    <p className="text-sm mt-1">
                      For both Mounjaro and Wegovy, NICE approved NHS pathways exist. A platform that does not mention this is missing context that could change your decision entirely.
                    </p>
                  </div>

                  <div>
                    <h4 className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      Does it explain what the treatment actually is?
                    </h4>
                    <p className="text-sm mt-1">
                      It should explain the mechanism, side effects, titration expectations, and lifestyle implications. If the answer is no (if it treats GLP-1 medications purely as products with stock codes and prices) then you are missing the educational layer that informs whether the purchase decision is appropriate in the first place.
                    </p>
                  </div>

                  <div>
                    <h4 className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      Does it disclose its commercial relationships with providers?
                    </h4>
                    <p className="text-sm mt-1">
                      Referral fees are common in comparison platforms. They are not inherently disqualifying, but they should be fully disclosed. If they are not, treat the rankings with appropriate scepticism.
                    </p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="market-wrong" heading="What This Market Gets Wrong — and What Better Looks Like">
                <p>
                  The UK weight loss treatment comparison market in 2026 has a structural problem: it has optimised for the transaction rather than the decision.
                </p>
                <p>
                  Price lists are easier to build than clinical education. Discount code aggregation is a clearer value proposition than pharmacy safety analysis. Additionally, the commercial logic of comparison platforms, which earn revenue when users click through to providers, creates incentives that point toward conversion rather than comprehension.
                </p>
                <p>
                  The result is a market where millions of people are making significant financial and health decisions with the help of platforms that show them only one dimension of a multi dimensional problem.
                </p>
                <p>
                  The better version of this market, which is the one that platforms like Healthwise360 are working toward, combines price transparency with pharmacy safety, clinical education with treatment eligibility context, and interactive tools with honest disclosure of what the data does and does not include.
                </p>
                <p>
                  It is not a perfect version, but it is closer to the one that the complexity of private prescription treatment actually requires.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="FAQ: UK Weight Loss Comparison Websites">
                <div className="space-y-6 mt-6">
                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      1. Is there one website that compares all three, Mounjaro, Wegovy, and Saxenda, equally?
                    </h4>
                    <p className="mt-2 text-sm">
                      Click.Compare, MedEazy, and Healthwise360 all cover all three treatments. Monj is weighted toward Mounjaro, and WegoCompare toward Wegovy. For a genuinely equal three treatment comparison with filtering by dose, Trustpilot, and provider, the <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-semibold text-emerald-600 hover:underline">Mounjaro vs Wegovy vs Saxenda comparison hub at Healthwise360</Link> is the most complete option.
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      2. How often are prices updated on these platforms?
                    </h4>
                    <p className="mt-2 text-sm">
                      MedEazy updates daily. Monj retests daily and removes providers that fail checks. Click.Compare updates weekly. Healthwise360 updates regularly with live data from verified pharmacies. In a market that saw significant Mounjaro price changes in late 2025, update frequency matters considerably more than it would in a stable market.
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      3. Do any of these platforms receive commissions from pharmacies?
                    </h4>
                    <p className="mt-2 text-sm">
                      The platforms reviewed here all present themselves as independent. However, commercial models are not always fully disclosed. The safest approach is to treat any comparison platform&apos;s provider rankings as one input among several, not as an objective ordering, and to verify GPhC registration, Trustpilot ratings, and full fee structures independently before committing to any provider.
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      4. Which platform is best for someone who is completely new to GLP-1 treatment research?
                    </h4>
                    <p className="mt-2 text-sm">
                      For a first time researcher who needs to understand what these treatments are, whether they qualify, what the realistic cost is across the full treatment journey, and which pharmacies are safe to use, <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-semibold text-emerald-600 hover:underline">Healthwise360</Link> provides the broadest and most contextualised starting point. Monj or MedEazy can supplement the price specific research once the broader context is established.
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      5. Which platform is best for finding the absolute cheapest current Mounjaro price?
                    </h4>
                    <p className="mt-2 text-sm">
                      Monj&apos;s checkout simulation methodology and Healthwise360&apos;s live price comparison both aim to surface accurate all in pricing. MedEazy&apos;s daily updates make it strong for current data. Cross referencing all three for a specific dose will give the most complete picture of current market pricing.
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      6. Can I use these websites to access NHS weight loss treatment?
                    </h4>
                    <p className="mt-2 text-sm">
                      No. NHS access to Wegovy and Mounjaro requires a GP referral to specialist weight management services. Comparison platforms are relevant to the private prescribing route only. WegoCompare and Healthwise360 both explain the NHS pathway context, which helps users understand whether to pursue that route before turning to private options.
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      7. What is the single most important thing to check before using any comparison site&apos;s data?
                    </h4>
                    <p className="mt-2 text-sm">
                      Whether it discloses consultation fees, delivery charges, and any programme costs alongside the pen price. If it does not, the number you are comparing is not the number you will be charged.
                    </p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  Five platforms. Seven criteria. One honest finding: no single website in the UK weight loss comparison market does everything well.
                </p>
                <p>
                  What the best research process looks like in practice is a combination, using Healthwise360 as the starting framework for education, eligibility context, safety verification, and filtered comparison, then cross referencing specific pen prices against Monj or MedEazy for checkout verified, up to the day figures.
                </p>
                <p>
                  The platforms that show you only price are not showing you enough. The platforms that show you price alongside GPhC status, Trustpilot ratings, delivery transparency, and clinical context are showing you something closer to what you actually need.
                </p>
                <p>
                  Use the former as a final check. Build your research on the latter.
                </p>
              </GuideSection>

              <hr className={`my-8 ${darkMode ? "border-slate-800" : "border-slate-200"}`} />

              <p className="text-xs text-slate-500 italic">
                This article is for informational purposes only and does not constitute medical advice. All treatments discussed are prescription only medicines in the UK that require a clinical assessment before they can be dispensed. Platform descriptions are based on independent research as of 2026 and are subject to change.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
