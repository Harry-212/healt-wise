"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleColumn from "@/components/blog/BlogArticleColumn";
import { GuideSection, GuideTable } from "@/components/guide/GuideLayout";
import {
  blogImgPath,
  BEST_WEIGHT_LOSS_COMPARISON_SITES_UK_HERO_WEBP,
  BEST_WEIGHT_LOSS_COMPARISON_SITES_UK_INLINE_WEBP,
} from "./blog-assets";

const HERO_SRC = blogImgPath(BEST_WEIGHT_LOSS_COMPARISON_SITES_UK_HERO_WEBP);
const INLINE_SRC = blogImgPath(BEST_WEIGHT_LOSS_COMPARISON_SITES_UK_INLINE_WEBP);
const linkClass = "font-medium text-emerald-600 hover:underline";

const TOC = [
  { id: "intro", label: "Introduction" },
  { id: "before-reviews", label: "The Question Nobody Asks" },
  { id: "seven-criteria", label: "The 7 Criteria We Used" },
  { id: "review-healthwise360", label: "1. Healthwise360" },
  { id: "review-pencompare", label: "2. PenCompare" },
  { id: "review-clickcompare", label: "3. Click.Compare" },
  { id: "review-medeazy", label: "4. MedEazy" },
  { id: "review-monj", label: "5. Monj" },
  { id: "review-wegocompare", label: "6. WegoCompare" },
  { id: "side-by-side", label: "Side-by-Side Comparison" },
  { id: "checklist", label: "The Checklist That Matters" },
  { id: "market-wrong", label: "What This Market Gets Wrong" },
  { id: "faq", label: "FAQ" },
  { id: "conclusion", label: "Conclusion" },
];

const COMPARISON_HEADERS = [
  "Criteria",
  "Healthwise360",
  "PenCompare",
  "Click.Compare",
  "MedEazy",
  "Monj",
  "WegoCompare",
];

const COMPARISON_ROWS = [
  {
    cells: [
      "Live price comparison",
      "✅",
      "✅",
      "✅",
      "✅",
      "✅",
      "⚠️",
    ],
  },
  {
    cells: [
      "Per-dose breakdown (all steps)",
      "✅",
      "✅",
      "⚠️",
      "✅",
      "✅",
      "⚠️",
    ],
  },
  {
    cells: [
      "Provider pool size",
      "64+ providers",
      "48 providers",
      "Medium",
      "Large",
      "Large (Mounjaro)",
      "Small",
    ],
  },
  {
    cells: [
      "GPhC verification visible",
      "✅ + Education",
      "✅",
      "⚠️",
      "✅",
      "✅",
      "⚠️",
    ],
  },
  {
    cells: [
      "Trustpilot integration + filter",
      "✅",
      "⚠️",
      "⚠️",
      "✅",
      "⚠️",
      "❌",
    ],
  },
  {
    cells: [
      "Discount codes",
      "Soon / TBA",
      "❌",
      "✅",
      "✅",
      "✅",
      "❌",
    ],
  },
  {
    cells: [
      "Hidden fee exposure",
      "✅",
      "⚠️",
      "⚠️",
      "⚠️",
      "✅ Checkout sim",
      "❌",
    ],
  },
  {
    cells: [
      "Eligibility checker / NHS context",
      "✅",
      "✅",
      "❌",
      "⚠️",
      "✅",
      "✅",
    ],
  },
  {
    cells: [
      "Delivery & cold chain info",
      "✅",
      "⚠️",
      "❌",
      "⚠️",
      "✅",
      "❌",
    ],
  },
  {
    cells: [
      "Clinical / medical education",
      "✅ Full",
      "⚠️",
      "❌",
      "❌",
      "❌",
      "⚠️",
    ],
  },
  {
    cells: [
      "Safety guides (pharmacy, GPhC)",
      "✅",
      "❌",
      "❌",
      "❌",
      "❌",
      "❌",
    ],
  },
  {
    cells: [
      "Lifestyle & maintenance content",
      "✅",
      "❌",
      "❌",
      "❌",
      "❌",
      "❌",
    ],
  },
  {
    cells: [
      "Interactive tools",
      "✅ (3 tools)",
      "Eligibility only",
      "❌",
      "❌",
      "❌",
      "❌",
    ],
  },
  {
    cells: [
      "All 3 treatments covered equally",
      "✅",
      "✅",
      "✅",
      "✅",
      "⚠️",
      "⚠️",
    ],
  },
  {
    cells: [
      "Location / local content",
      "✅",
      "❌",
      "❌",
      "❌",
      "❌",
      "❌",
    ],
  },
  {
    cells: [
      "Independent / non-pharmacy",
      "✅",
      "✅",
      "✅",
      "✅",
      "✅",
      "✅",
    ],
  },
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
            <Moon
              className={`h-4 w-4 ${darkMode ? "text-slate-300" : "text-slate-700"}`}
            />
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
            <Sun
              className={`h-4 w-4 ${darkMode ? "text-yellow-400" : "text-slate-400"}`}
            />
          </div>
        </div>

        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-400"
        >
          <Link href="/" className="transition-colors hover:text-emerald-600">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/blog"
            className="transition-colors hover:text-emerald-600"
          >
            Blog
          </Link>
          <span>/</span>
          <span className={darkMode ? "text-slate-200" : "text-slate-600"}>
            UK Weight Loss Comparison Sites
          </span>
        </nav>

        <BlogArticleColumn toc={TOC} darkMode={darkMode}>
          <header
            className={`mb-8 border-b pb-8 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
          >
            <h1
              className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              We Tested 6 UK Weight Loss Treatment Comparison Websites So You
              Don&apos;t Have To: Here&apos;s the Honest Verdict
            </h1>
            <div
              className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                19 Jul 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                14 min read
              </span>
            </div>

            <BlogArticleHeroImage
              src={HERO_SRC}
              alt="Honest review of six UK weight loss treatment comparison websites including Healthwise360 and PenCompare"
            />
            <div
              id="guide-article-hero-end"
              aria-hidden
              className="pointer-events-none h-0 w-full overflow-hidden"
            />
          </header>

          <article
            className={`space-y-8 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}
          >
            <GuideSection darkMode={darkMode} id="intro" heading="Introduction">
              <p className="text-lg md:text-xl font-medium">
                There are now more websites comparing UK weight loss treatment
                prices than there are clear answers about which one to trust.
              </p>
              <p>
                That is not a coincidence. The UK private GLP-1 market for
                Mounjaro, Wegovy, and Saxenda has grown at extraordinary speed
                since 2023, and wherever patients go looking for information,
                comparison platforms follow. Some of them are genuinely useful.
                Some exist primarily to send you somewhere that pays them a
                commission. And most sit somewhere in between, doing one or two
                things well while leaving significant gaps in everything else.
              </p>
              <p>
                This article reviews six of the most prominent UK weight loss
                treatment comparison websites, Healthwise360, PenCompare,
                Click.Compare, MedEazy, Monj, and WegoCompare, against a
                consistent set of criteria that reflects what actually matters
                when making a decision about private prescription treatment. Not
                just price. Not just which pharmacy is cheapest this week. But
                whether the platform gives you enough information to make a
                genuinely safe, fully informed choice.
              </p>
              <p>The results are not what you might expect.</p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="before-reviews"
              heading="Before the Reviews: The Question Nobody Asks"
            >
              <p>
                Most people approach weight loss treatment comparison websites
                the same way they approach flight comparison sites: open several
                tabs, find the lowest number, book it.
              </p>
              <p>
                That approach works for flights. It works considerably less well
                for prescription medications.
              </p>
              <p>
                The reason is structural. GLP-1 treatments, all three of them,
                are prescription-only medicines. They require a clinical
                assessment from a licensed prescriber before they can be
                dispensed. The cheapest pharmacy on a comparison site is not
                necessarily the one with the most rigorous clinical process, the
                best prescriber credentials, the most reliable delivery, or the
                strongest patient support. It might be. But price alone cannot
                tell you that.
              </p>
              <p>
                Beyond that, the price you see on most comparison platforms is
                not the price you will pay. The advertised figure is almost
                always the starter dose, the cheapest pen, used for the first
                four weeks of a treatment that runs for twelve months or more.
                By the maintenance dose, you may be paying double that number, or
                more. And then there are consultation fees, delivery charges,
                programme costs, and needle costs, some bundled in, some not,
                rarely disclosed at the comparison stage.
              </p>
              <p>
                This is the context in which these six platforms operate. And it
                is the lens through which we reviewed them.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="seven-criteria"
              heading="The 7 Criteria We Used"
            >
              <p>
                We didn&apos;t make up a scoring system designed to favour a
                predetermined winner. We started with the question: &ldquo;What
                would a person actually need to know before choosing a weight
                loss treatment provider in the UK?&rdquo; and built the criteria
                from the answers.
              </p>
              <ol className="list-decimal space-y-3 pl-5">
                <li>
                  <strong>Live price comparison</strong>: does it show real,
                  updated prices across multiple pharmacies?
                </li>
                <li>
                  <strong>Per-dose breakdown</strong>: does it show prices at
                  every titration step, not just the starter?
                </li>
                <li>
                  <strong>GPhC verification</strong>: does it confirm pharmacies
                  are legitimately registered, and explain how to check?
                </li>
                <li>
                  <strong>Trustpilot integration</strong>: are provider
                  reputations visible and filterable alongside prices?
                </li>
                <li>
                  <strong>Hidden fee exposure</strong>: does it disclose
                  consultation, delivery, programme, and needle costs?
                </li>
                <li>
                  <strong>NHS eligibility context</strong>: does it explain
                  whether NHS access exists and how to pursue it?
                </li>
                <li>
                  <strong>Clinical education and safety</strong>: does it explain
                  what these treatments are, how they work, and what the risks of
                  buying online look like?
                </li>
              </ol>
              <p>
                The final comparison table reflects these criteria. But the
                reviews below will give you the texture behind the scores, which
                matters more than the scores themselves.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="review-healthwise360"
              heading="1. Healthwise360: Most Complete: Price + Safety + Education + Tools in One Platform"
            >
              <h3
                className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                The Pitch
              </h3>
              <p>
                Healthwise360 is the most ambitious of the six platforms, not
                because it does everything perfectly, but because it is the only
                one that appears to have asked a genuinely different question:
                not &ldquo;what is the cheapest pharmacy?&rdquo; but &ldquo;what
                does a person need to understand before they can make a safe,
                informed decision about private weight loss treatment in the
                UK?&rdquo;
              </p>
              <p>
                The answer to that question turns out to be considerably more
                than a price table.
              </p>

              <h3
                className={`mb-3 mt-6 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                What It Actually Does Well
              </h3>
              <p>
                <strong>The comparison interface</strong> at{" "}
                <Link
                  href="/compare/mounjaro-vs-wegovy-vs-saxenda"
                  className={linkClass}
                >
                  Healthwise360&apos;s Mounjaro vs Wegovy vs Saxenda hub
                </Link>{" "}
                covers all three treatments across all dose strengths, drawing
                from 64 verified GPhC-registered pharmacies. The filter system,
                by Trustpilot minimum rating, by individual dose strength, by
                provider, sortable by cost or reputation, is the most specific in
                the market. You can filter to pharmacies with a minimum
                Trustpilot rating of 4.8 at the 10 mg Mounjaro dose specifically,
                and the interface updates accordingly. No other platform offers
                this combination in a single interface.
              </p>
              <p>
                <strong>The GPhC verification layer</strong> is not just a
                background check. It is surfaced to users as an educational
                element. The{" "}
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className={linkClass}
                >
                  GPhC verification guide at Healthwise360
                </Link>{" "}
                explains how to check any pharmacy&apos;s registration
                independently, which means users leave the platform better
                equipped to evaluate providers they encounter anywhere, not just
                those listed on the site. This is the correct approach: curated
                verification tells you the platform checked; educational
                verification tells you how to check yourself.
              </p>
              <p>
                <strong>The clinical education is comprehensive</strong> in a way
                that no other comparison platform approaches. The treatment
                guides,{" "}
                <Link href="/what-is-mounjaro" className={linkClass}>
                  What is Mounjaro
                </Link>
                ,{" "}
                <Link href="/what-is-wegovy" className={linkClass}>
                  What is Wegovy
                </Link>
                , and{" "}
                <Link href="/what-is-saxenda" className={linkClass}>
                  What is Saxenda
                </Link>
                , cover mechanism, clinical trial data, eligibility context, and
                how to start treatment. Beyond that, there are safety guides
                covering fake pharmacy warnings, GP notification, pregnancy risk,
                KwikPen disposal, and travel with GLP-1 medication. Lifestyle
                content covering diet, sleep, stress, exercise, plateau
                management, and the realistic expectations around GLP-1 treatment
                completes the picture.
              </p>
              <p>
                This matters because GLP-1 treatment is not a product purchase.
                It is the beginning of a clinical and lifestyle journey. A
                platform that treats it as the former is providing structurally
                incomplete information.
              </p>
              <p>
                <strong>The interactive tools</strong> are unique to
                Healthwise360 in the UK comparison market:
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  The{" "}
                  <Link href="/tools/bmi-calculator" className={linkClass}>
                    BMI Calculator UK
                  </Link>{" "}
                  calculates BMI with NHS-aligned category context and treatment
                  eligibility implications, in any UK measurement format: stone,
                  lbs, kg, feet, cm
                </li>
                <li>
                  The{" "}
                  <Link
                    href="/tools/mounjaro-click-calculator"
                    className={linkClass}
                  >
                    Mounjaro Click Calculator
                  </Link>{" "}
                  calculates KwikPen clicks for any dose from any pen strength,
                  with a complete reference chart. This is genuinely useful for
                  anyone navigating partial doses or pen changes
                </li>
                <li>
                  The{" "}
                  <Link
                    href="/prices/cheapest-options-uk"
                    className={linkClass}
                  >
                    price comparison hub
                  </Link>{" "}
                  provides a dose-specific, verified lowest-cost overview across
                  all three treatments
                </li>
              </ul>
              <p>
                <strong>Location-level content</strong> covering the best weight
                loss treatment options in London, Birmingham, Manchester,
                Glasgow, Leeds, and other major UK cities addresses local search
                in a way that national comparison platforms generally do not.
              </p>

              <h3
                className={`mb-3 mt-6 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                Where It Falls Short
              </h3>
              <p>
                In the interest of honesty: Healthwise360 does not track
                individual discount codes in the way MedEazy and Click.Compare
                do. And while the comparison interface is the most sophisticated
                in terms of filter capability, Monj&apos;s full-checkout
                simulation methodology for hidden fee detection is more granular
                at the per-transaction verification level.
              </p>
              <p>
                A genuinely complete research process would use Healthwise360 as
                the starting framework for education, eligibility context, safety
                verification, and filtered price comparison, and then
                cross-check specific pen prices against Monj or MedEazy for the
                most current, checkout-verified figures before committing.
              </p>

              <h3
                className={`mb-3 mt-6 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                The Honest Assessment
              </h3>
              <p>
                Healthwise360 is the platform that most closely reflects what a
                comprehensive, responsible weight loss treatment comparison
                resource should look like, combining price transparency, pharmacy
                safety, clinical education, and interactive tools in a single
                interface. It is not perfect. But it is asking a more complete
                question than any of the alternatives.
              </p>
            </GuideSection>

            <div className="my-10">
              <BlogArticleHeroImage
                src={INLINE_SRC}
                alt="Side-by-side comparison criteria for UK weight loss treatment comparison websites"
                priority={false}
                showFullImage
              />
            </div>

            <GuideSection
              darkMode={darkMode}
              id="review-pencompare"
              heading="2. PenCompare"
            >
              <h3
                className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                The Pitch
              </h3>
              <p>
                <a
                  href="https://www.pencompare.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  PenCompare
                </a>{" "}
                positions itself as the &ldquo;Compare the Market&rdquo; for UK
                weight loss injections: a direct, functional comparison tool
                designed to aggregate regulated pharmacy pricing for
                tirzepatide, semaglutide, and liraglutide treatments before a
                patient commits to any consultation.
              </p>

              <h3
                className={`mb-3 mt-6 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                What It Actually Does Well
              </h3>
              <p>
                PenCompare&apos;s core comparison tool covers 48 providers, one
                of the largest verified provider pools in the UK comparison
                market, with results paginated and sortable by price, reviews, or
                provider name. The interface is clean and functionally focused:
                if your primary need is to scan what regulated providers
                currently charge for a specific treatment at a specific dose,
                PenCompare delivers that efficiently.
              </p>
              <p>
                The GPhC registration check is surfaced visibly in the comparison
                interface. A provider&apos;s registration status is displayed as
                part of the listing rather than buried in footnotes. This is the
                correct design approach; pharmacy credential information belongs
                next to price data, not on a separate lookup page.
              </p>
              <p>
                PenCompare also covers tirzepatide, semaglutide, and liraglutide
                across its comparison tool, giving users the ability to compare
                all three treatment types rather than being locked into a
                single-medication view. The eligibility checker is a practical
                addition: before a user visits a provider, they can get a basic
                sense of whether they are likely to meet standard clinical
                criteria, which reduces the risk of going through a consultation
                only to be declined.
              </p>
              <p>
                Educational content on eligibility, side effects, dosage
                schedules, and NHS versus private treatment options is present,
                covering the informational layer that pure price aggregators
                typically skip. This positions PenCompare meaningfully ahead of
                Click.Compare in informational breadth.
              </p>

              <h3
                className={`mb-3 mt-6 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                Where It Falls Short
              </h3>
              <p>
                With 48 providers listed, PenCompare&apos;s coverage is
                substantial but still below the 64+ GPhC-registered pharmacies
                covered by Healthwise360&apos;s comparison hub. Trustpilot rating
                integration, visible and filterable alongside price, is not as
                prominently surfaced as on MedEazy or Healthwise360. The clinical
                education layer, while present, is lighter than the comprehensive
                treatment guides, safety content, and lifestyle integration
                material available on platforms that have invested more heavily
                in editorial depth.
              </p>
              <p>
                There are also no interactive tools beyond the eligibility
                checker: no BMI calculator with treatment eligibility context, no
                dose calculation tool, no click calculator for KwikPen users.
              </p>

              <h3
                className={`mb-3 mt-6 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                The Honest Assessment
              </h3>
              <p>
                PenCompare is a genuinely capable entrant in the UK weight loss
                treatment comparison market. Its 48-provider pool,
                three-treatment coverage, visible GPhC status, eligibility
                checker, and sortable interface make it one of the more complete
                functional comparison tools currently available. It is strongest
                as a price-scanning resource for users who already have basic
                treatment knowledge and want a broad provider view before making
                contact with a pharmacy. For users who need deeper clinical
                education, Trustpilot-filtered comparison, or interactive tools,
                it sits just below the most comprehensive platforms, but
                considerably ahead of pure price aggregators that offer nothing
                beyond a number and a link.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="review-clickcompare"
              heading="3. Click.Compare"
            >
              <h3
                className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                The Pitch
              </h3>
              <p>
                &ldquo;No bias. No fuss. No fluff.&rdquo; That is the
                Click.Compare headline, and it is a reasonably accurate
                description of what the platform does and doesn&apos;t do.
              </p>

              <h3
                className={`mb-3 mt-6 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                What It Actually Does Well
              </h3>
              <p>
                Click.Compare&apos;s core proposition is refreshingly honest:
                they check registered UK pharmacy websites weekly, update prices
                for each drug and dosage, and focus on average prices across all
                doses rather than introductory discounts. That last point is more
                meaningful than it sounds. The practice of leading with a
                promotional starter price and burying the maintenance cost is
                endemic in this market, and Click.Compare&apos;s stated
                commitment to averaging across doses at least partially addresses
                it.
              </p>
              <p>
                They also include pharmacy reviews and basic registered pharmacy
                verification, and they are transparent that they are not medical
                professionals and are not recommending any medication. In a
                market where the line between information and promotion is
                frequently blurred, that clarity has value.
              </p>

              <h3
                className={`mb-3 mt-6 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                Where It Falls Short
              </h3>
              <p>
                The &ldquo;no fluff&rdquo; positioning is also the limitation.
                There is no clinical education. No GLP-1 mechanism explanation.
                No side effect context. No NHS eligibility guidance. No delivery
                or cold chain information. No interactive tools.
              </p>
              <p>
                If you already know exactly which treatment you want, understand
                the titration schedule, have verified the pharmacy credentials
                independently, and just need a quick price reference,
                Click.Compare does that job cleanly. But if you are researching
                weight loss treatment for the first time, or trying to understand
                whether a pharmacy is genuinely safe to use, the platform offers
                very little beyond the numbers.
              </p>

              <h3
                className={`mb-3 mt-6 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                The Honest Assessment
              </h3>
              <p>
                Click.Compare is a useful bookmark for the price-checking stage
                of research. It is not a platform that helps you get to the stage
                where price-checking becomes appropriate.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="review-medeazy"
              heading="4. MedEazy"
            >
              <h3
                className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                The Pitch
              </h3>
              <p>
                MedEazy runs dedicated pricing pages per medication and per dose.
                Mounjaro, Wegovy, and Saxenda each have their own section, with
                prices updated daily and discount codes displayed where
                pharmacies offer them.
              </p>

              <h3
                className={`mb-3 mt-6 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                What It Actually Does Well
              </h3>
              <p>
                The daily update frequency is genuinely valuable in a market that
                has seen significant price volatility. The late 2025 Mounjaro
                price increase caught many comparison platforms showing outdated
                data for weeks. MedEazy&apos;s commitment to daily refreshes
                addresses this in a way that weekly-updated platforms cannot.
              </p>
              <p>
                The per-dose granularity is also strong. You can look at Mounjaro
                7.5 mg specifically, rather than getting an averaged figure that
                blends the starter and maintenance extremes. This is exactly the
                kind of data that matters for real-world cost planning.
              </p>
              <p>
                Beyond price, MedEazy also includes Trustpilot ratings and GPhC
                checks alongside its comparison data, not as hidden background
                information but as visible columns in the interface. That
                combination of price, reputation, and regulatory status in one
                view is meaningfully more useful than price alone.
              </p>

              <h3
                className={`mb-3 mt-6 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                Where It Falls Short
              </h3>
              <p>
                The platform is built around price tools. Clinical education is
                sparse. There is no explanation of how GLP-1 medications work,
                what the side effect profile looks like, or what lifestyle
                changes support GLP-1 treatment. The discount code tracking,
                while useful, is also the feature most likely to draw users
                toward the cheapest option rather than the most appropriate one.
              </p>

              <h3
                className={`mb-3 mt-6 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                The Honest Assessment
              </h3>
              <p>
                MedEazy is one of the stronger pure comparison tools in the UK
                market, particularly for users who need current, per-dose price
                data across multiple providers and want basic GPhC and Trustpilot
                context alongside it. However, it stops at the transaction layer
                without addressing the upstream questions that should come first.
              </p>
            </GuideSection>

            <GuideSection darkMode={darkMode} id="review-monj" heading="5. Monj">
              <h3
                className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                The Pitch
              </h3>
              <p>
                Monj claims one of the more rigorous methodologies in the space:
                rather than scraping listed prices from pharmacy websites, they
                perform full checkout simulations on every pen strength for every
                provider, going through the actual purchase flow to expose fees
                that headline prices do not reveal.
              </p>

              <h3
                className={`mb-3 mt-6 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                What It Actually Does Well
              </h3>
              <p>
                This methodology matters enormously, and it is Monj&apos;s
                clearest differentiator. The problem of hidden fees in UK weight
                loss pharmacy pricing is real and pervasive: consultation fees
                that appear at the prescribing stage, delivery charges that
                emerge at checkout, premium dispensing fees that are never
                mentioned on the product page. Monj&apos;s checkout simulation
                approach surfaces these in a way that no platform relying purely
                on listed prices can.
              </p>
              <p>
                The resulting data is divided into three views: discounted
                starting prices, standard prices without promotional codes, and
                longer-term maintenance pricing. That three-layer structure is
                the most sophisticated price presentation in the comparison
                market. It gives users a picture of what treatment actually costs
                at different stages of the journey.
              </p>

              <h3
                className={`mb-3 mt-6 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                Where It Falls Short
              </h3>
              <p>
                Monj is heavily weighted toward Mounjaro. Wegovy and Saxenda
                coverage is present but not the primary focus, which makes the
                platform less useful for users genuinely weighing up all three
                treatment options. Clinical education is limited. There are no
                interactive tools.
              </p>

              <h3
                className={`mb-3 mt-6 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                The Honest Assessment
              </h3>
              <p>
                For pure Mounjaro price research, specifically for users who want
                to know what they will actually be charged rather than what is
                advertised, Monj is the most thorough resource in the market.
                However, it is a specialist tool for a specific stage of
                research, not a platform that covers the full decision journey.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="review-wegocompare"
              heading="6. WegoCompare"
            >
              <h3
                className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                The Pitch
              </h3>
              <p>
                WegoCompare positions itself around Wegovy specifically, covering
                the NHS eligibility pathway alongside private cost comparison,
                and contextualising the private cost within the broader
                healthcare decision.
              </p>

              <h3
                className={`mb-3 mt-6 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                What It Actually Does Well
              </h3>
              <p>
                The NHS eligibility framework is WegoCompare&apos;s clearest
                strength. For users asking &ldquo;do I qualify for Wegovy on the
                NHS before I consider paying privately?&rdquo;, a question that
                most comparison platforms either ignore or address superficially,
                WegoCompare provides structured, useful context: BMI thresholds,
                qualifying comorbidities, the phased rollout reality, and the
                practical gap between NICE approval and NHS availability in 2026.
              </p>

              <h3
                className={`mb-3 mt-6 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                Where It Falls Short
              </h3>
              <p>
                The Wegovy-specific focus is also the limitation. Mounjaro and
                Saxenda coverage is minimal, which means WegoCompare is not
                useful as a three-treatment comparison platform. There is no live
                price comparison tool across multiple pharmacies.
              </p>

              <h3
                className={`mb-3 mt-6 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
              >
                The Honest Assessment
              </h3>
              <p>
                WegoCompare is the most useful single-platform resource for users
                who are specifically focused on Wegovy and want to understand NHS
                access before committing to private prescribing. Outside of that
                specific use case, it is too narrow to serve as a primary
                research tool.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="side-by-side"
              heading="Side-by-Side: What Each Platform Actually Covers"
            >
              <GuideTable
                headers={COMPARISON_HEADERS}
                rows={COMPARISON_ROWS}
              />
              <p className="mt-4 text-sm">
                ✅ = Full | ⚠️ = Partial | ❌ = Not present | Soon / TBA = In
                development
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="checklist"
              heading="The Checklist That Actually Matters"
            >
              <p>
                If you take nothing else from this article, take this: before
                using any comparison platform to guide a decision about private
                prescription treatment, run it through these seven questions.
              </p>
              <p>
                <strong>
                  Does it show per-dose prices across the full titration
                  schedule?
                </strong>
              </p>
              <p>
                Not just the starter. Not an average. Every dose step. If it only
                shows &ldquo;from £X/month,&rdquo; it is structurally incomplete.
              </p>
              <p>
                <strong>
                  Does it verify GPhC registration, and explain how you can check
                  yourself?
                </strong>
              </p>
              <p>
                The GPhC register is public. Any platform worth trusting should
                point you to it and show you how to use it, not just tell you
                they have done the check. Our{" "}
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className={linkClass}
                >
                  pharmacy safety and GPhC verification guide
                </Link>{" "}
                walks through that process step by step.
              </p>
              <p>
                <strong>
                  Does it show Trustpilot ratings alongside prices?
                </strong>
              </p>
              <p>
                A pharmacy with a 3.9 Trustpilot score at £10/month less than a
                4.8-rated competitor is not the better option. Platforms that
                show only price are removing information you need.
              </p>
              <p>
                <strong>
                  Does it disclose all fee components before the provider
                  comparison?
                </strong>
              </p>
              <p>
                Consultation fees. Delivery. Programme costs. Needle costs. If
                you cannot find this information before reaching the
                pharmacy&apos;s own checkout, you are comparing incomplete
                numbers.
              </p>
              <p>
                <strong>Does it tell you whether NHS access exists?</strong>
              </p>
              <p>
                For both Mounjaro and Wegovy, NICE-approved NHS pathways exist. A
                platform that does not mention this is missing context that could
                change your decision entirely.
              </p>
              <p>
                <strong>
                  Does it explain what the treatment actually is?
                </strong>
              </p>
              <p>
                Mechanism. Side effects. Titration expectations. Lifestyle
                implications. If the answer is no, if it treats GLP-1 medications
                purely as products with SKUs and prices, you are missing the
                educational layer that informs whether the purchase decision is
                appropriate in the first place.
              </p>
              <p>
                <strong>
                  Does it disclose its commercial relationships with providers?
                </strong>
              </p>
              <p>
                Referral fees are common in comparison platforms. They are not
                inherently disqualifying. But they should be disclosed. If they
                are not, treat the rankings with appropriate scepticism.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="market-wrong"
              heading="What This Market Gets Wrong, and What Better Looks Like"
            >
              <p>
                The UK weight loss treatment comparison market in 2026 has a
                structural problem: it has optimised for the transaction rather
                than the decision.
              </p>
              <p>
                Price lists are easier to build than clinical education. Discount
                code aggregation is a clearer value proposition than pharmacy
                safety analysis. And the commercial logic of comparison
                platforms, which earn revenue when users click through to
                providers, creates incentives that point toward conversion, not
                comprehension.
              </p>
              <p>
                The result is a market where millions of people are making
                significant financial and health decisions with the help of
                platforms that show them one dimension of a multi-dimensional
                problem.
              </p>
              <p>
                The better version of this market, the one that platforms like
                Healthwise360 are working toward, combines price transparency
                with pharmacy safety, clinical education with treatment
                eligibility context, and interactive tools with honest disclosure
                of what the data does and does not include.
              </p>
              <p>
                It is not a perfect version. But it is closer to the one that the
                complexity of private prescription treatment actually requires.
              </p>
            </GuideSection>

            <section
              id="faq"
              className={`mt-16 border-t pt-10 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
            >
              <h2
                className={`mb-8 text-3xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                FAQ: UK Weight Loss Comparison Websites 2026
              </h2>
              <div className="space-y-8">
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    1. Is there one website that compares all three, Mounjaro,
                    Wegovy, and Saxenda, equally?
                  </h3>
                  <p>
                    Click.Compare, MedEazy, PenCompare, and Healthwise360 all
                    cover all three treatments. Monj is weighted toward Mounjaro,
                    and WegoCompare toward Wegovy. For a genuinely equal
                    three-treatment comparison with filtering by dose,
                    Trustpilot, and provider, the{" "}
                    <Link
                      href="/compare/mounjaro-vs-wegovy-vs-saxenda"
                      className={linkClass}
                    >
                      Mounjaro vs Wegovy vs Saxenda hub at Healthwise360
                    </Link>{" "}
                    is the most complete option. PenCompare&apos;s 48-provider
                    pool also gives broad three-treatment coverage.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    2. What is PenCompare and how does it differ from other
                    comparison sites?
                  </h3>
                  <p>
                    <a
                      href="https://www.pencompare.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      PenCompare
                    </a>{" "}
                    is a UK comparison site for prescription weight loss
                    treatments, covering Mounjaro (tirzepatide), Wegovy
                    (semaglutide), and Saxenda (liraglutide) across 48 regulated
                    providers. It allows users to sort by price, reviews, or
                    provider name, check GPhC registration status, use an
                    eligibility checker, and read basic educational content. It
                    is positioned as a &ldquo;Compare the Market&rdquo; for
                    weight loss injections: functional and broad rather than
                    deeply editorial.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    3. How often are prices updated on these platforms?
                  </h3>
                  <p>
                    MedEazy and Monj update daily. Click.Compare updates weekly.
                    Healthwise360 and PenCompare update regularly. In a market
                    that saw significant Mounjaro price changes in late 2025,
                    update frequency matters considerably more than it would in a
                    stable market.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    4. Do any of these platforms receive commissions from
                    pharmacies?
                  </h3>
                  <p>
                    The platforms reviewed here all present themselves as
                    independent. However, commercial models are not always fully
                    disclosed. The safest approach is to treat any comparison
                    platform&apos;s provider rankings as one input among several,
                    not as an objective ordering, and to verify GPhC
                    registration, Trustpilot ratings, and full fee structures
                    independently before committing to any provider.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    5. Which platform is best for finding the absolute cheapest
                    current Mounjaro price?
                  </h3>
                  <p>
                    Monj&apos;s checkout simulation methodology and
                    Healthwise360&apos;s live price comparison both aim to
                    surface accurate all-in pricing. MedEazy&apos;s daily updates
                    make it strong for current data. Cross-referencing all three
                    for a specific dose will give the most complete picture of
                    current market pricing. You can also start with the{" "}
                    <Link
                      href="/mounjaro-price-comparison"
                      className={linkClass}
                    >
                      Mounjaro price comparison
                    </Link>{" "}
                    for dose-level UK provider data.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    6. Which comparison site is best for someone completely new
                    to GLP-1 research?
                  </h3>
                  <p>
                    For a first-time researcher who needs to understand what
                    these treatments are, whether they qualify, what the
                    realistic cost is across the full treatment journey, and
                    which pharmacies are safe to use,{" "}
                    <Link
                      href="/compare/mounjaro-vs-wegovy-vs-saxenda"
                      className={linkClass}
                    >
                      Healthwise360
                    </Link>{" "}
                    provides the broadest and most contextualised starting point.
                    PenCompare&apos;s eligibility checker is also a useful
                    first-step tool before engaging with any provider.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    7. What is the single most important thing to check before
                    using any comparison site&apos;s data?
                  </h3>
                  <p>
                    Whether it discloses consultation fees, delivery charges, and
                    any programme costs alongside the pen price. If it does not,
                    the number you are comparing is not the number you will be
                    charged.
                  </p>
                </div>
              </div>
            </section>

            <GuideSection
              darkMode={darkMode}
              id="conclusion"
              heading="Conclusion"
            >
              <p>
                Six platforms. Seven criteria. One honest finding: no single
                website in the UK weight loss comparison market does everything
                well.
              </p>
              <p>
                What the best research process looks like in practice is a
                combination: using Healthwise360 as the starting framework for
                education, eligibility context, safety verification, and filtered
                comparison, cross-referencing with PenCompare for a broad
                provider view across 48 registered pharmacies, then verifying
                specific pen prices against Monj or MedEazy for checkout-verified,
                up-to-the-day figures.
              </p>
              <p>
                The platforms that show you only price are not showing you
                enough. The platforms that show you price alongside GPhC status,
                Trustpilot ratings, delivery transparency, and clinical context
                are showing you something closer to what you actually need.
              </p>
              <p>
                Use the former as a final check. Build your research on the
                latter.
              </p>
              <p
                className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}
              >
                This article is for informational purposes only and does not
                constitute medical advice. All treatments discussed are
                prescription-only medicines in the UK that require a clinical
                assessment before they can be dispensed. Platform descriptions
                are based on independent research as of 2026 and are subject to
                change.
              </p>
            </GuideSection>
          </article>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
