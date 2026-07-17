"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import BlogArticleColumn from "@/components/blog/BlogArticleColumn";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  blogImgPath,
  BEST_PLACE_HERO_PNG,
  BEST_PLACE_INLINE_PNG,
} from "./blog-assets";

const SHARE_PATH = "/blog/best-place-to-start-weight-loss-treatment-online-uk";
const TITLE =
  "Best Place to Start Weight Loss Treatment Online UK: Safety, Prices and Provider Checks";
const DESCRIPTION =
  "Compare safe UK weight loss treatment providers, prices, pharmacy checks and support before starting treatment.";
const HERO_SRC = blogImgPath(BEST_PLACE_HERO_PNG);
const INLINE_SRC = blogImgPath(BEST_PLACE_INLINE_PNG);

const TOC = [
  { id: "intro", label: "Where is the best place to start?" },
  { id: "short-answer", label: "The short answer" },
  { id: "safe-provider", label: "What makes a safe UK provider?" },
  { id: "clinical-assessment", label: "Clinical assessment checks" },
  { id: "registered-pharmacy", label: "Registered pharmacy checks" },
  { id: "transparent-pricing", label: "Transparent pricing standards" },
  {
    id: "what-to-compare",
    label: "Weight loss treatment price: What to compare",
  },
  { id: "provider-types", label: "The main types of providers" },
  { id: "why-not-cheapest", label: "Why cheapest is not always best" },
  { id: "what-to-avoid", label: "What to avoid when comparing" },
  { id: "comparison-journey", label: "The Health Wise comparison journey" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "conclusion", label: "Conclusion" },
];

const SOCIAL_HASHTAGS =
  "#WeightLossUK #MounjaroUK #WegovyUK #OnlinePharmacyUK #WeightLossTreatment #PharmacySafety #HealthWise #ComparePrices";

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);
  const shareUrl = `${siteOrigin()}${SHARE_PATH}`;

  return (
    <div
      className={`w-full font-sans transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-300" : "bg-white text-slate-800"}`}
    >
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
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
          className="mb-10 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400"
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
            Best Place to Start Weight Loss Treatment
          </span>
        </nav>

        <BlogArticleColumn toc={TOC} darkMode={darkMode}>
          <header
            className={`mb-8 border-b pb-8 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
          >
            <h1
              className={`mb-6 text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl md:text-[44px] ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              Best Place to Start Weight Loss Treatment Online UK: Safety,
              Prices and Provider Checks
            </h1>
            <div
              className={`mb-8 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                23 Jun 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                12 min read
              </span>
            </div>

            <BlogArticleHeroImage
              src={HERO_SRC}
              alt="An adult searching for weight loss comparison information online, looking focused and hopeful"
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
            <GuideSection
              darkMode={darkMode}
              id="intro"
              heading="Best Place to Start Weight Loss Treatment Online UK: Safety, Prices and Provider Checks"
            >
              <p className="text-lg md:text-xl">
                Finding the best place to start weight loss treatment online in
                the UK can feel confusing. Many websites talk about weight loss
                injections, weight loss price, fast online consultations,
                monthly plans, and private pharmacy delivery. However, the
                safest choice is not simply the cheapest provider or the
                quickest checkout.
              </p>
              <p>
                The better question is:{" "}
                <strong
                  className={darkMode ? "text-slate-200" : "text-slate-800"}
                >
                  which provider offers regulated treatment, proper clinical
                  assessment, transparent pricing, clear safety checks, and
                  ongoing support?
                </strong>
              </p>
              <p>
                This is where Health Wise can help. Instead of pushing users
                toward one provider, Health Wise helps people{" "}
                <Link
                  href="/"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  compare weight loss treatment prices
                </Link>
                , pharmacy safety, delivery, support, and provider differences
                before they make a decision.
              </p>

              <div
                className={`mt-8 rounded-2xl p-6 border ${darkMode ? "border-slate-800 bg-slate-900/50" : "border-slate-200 bg-slate-50/50"}`}
              >
                <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">
                  Featured Answer Overview
                </p>
                <h3
                  className={`text-lg font-bold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  What is the best place to start weight loss treatment online
                  in the UK?
                </h3>
                <p className="text-sm leading-relaxed">
                  The best place to start is a regulated UK provider or
                  comparison service that checks eligibility, uses a proper
                  clinical assessment, works with a registered pharmacy,
                  explains full treatment prices clearly, and provides support
                  after approval. Users should avoid unregulated sellers, social
                  media offers, and unusually cheap treatment claims.
                </p>
              </div>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="short-answer"
              heading="The Short Answer"
            >
              <p>
                The best place to start weight loss treatment is a regulated UK
                provider that uses a proper clinical assessment, verifies
                suitability, supplies treatment through a registered pharmacy,
                explains the full cost clearly, and offers support if side
                effects or treatment questions arise.
              </p>
              <p>
                This matters because weight loss injections such as Mounjaro and
                Wegovy are prescription-only medicines. They should not be
                treated like normal online shopping products. Therefore, the
                safest provider is not always the cheapest provider.
              </p>
              <p>
                A good provider should make the process feel professional, not
                rushed. It should also explain who treatment may suit, who
                should avoid it, what the monthly cost includes, and what
                happens after the starting dose.
              </p>
            </GuideSection>

            <div className="my-10">
              <BlogArticleHeroImage
                src={INLINE_SRC}
                alt="Hopeful individual looking at tablet interface for weight loss treatment comparisons"
                priority={false}
                showFullImage
              />
            </div>

            <GuideSection
              darkMode={darkMode}
              id="safe-provider"
              heading="What Makes a Safe UK Weight Loss Treatment Provider?"
            >
              <p>
                A safe provider should not make weight loss treatment feel like
                a simple product checkout. It should treat the process as a
                clinical service.
              </p>
              <p>
                The most important signals include proper assessment, clear
                eligibility checks, pharmacy registration, prescription review,
                transparent pricing, safe delivery, and access to support.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="clinical-assessment"
              heading="Clinical Assessment"
            >
              <p>
                A proper clinical assessment should happen before treatment is
                approved. This may include questions about BMI, medical history,
                current medication, diabetes status, pregnancy, previous
                reactions, eating disorder history, and other health conditions.
              </p>
              <p>
                This step is important because weight loss treatment is not
                suitable for everyone. Besides, side effects and medicine
                interactions can vary from person to person.
              </p>
              <p>
                If a website appears to offer treatment without proper
                assessment, that is a warning sign. A responsible provider
                should slow the user down enough to check suitability.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="registered-pharmacy"
              heading="Registered Pharmacy Checks"
            >
              <p>
                A safe route should involve a registered UK pharmacy or a
                legitimate regulated service. The pharmacy should be easy to
                verify, and the site should provide clear details about who
                supplies the treatment.
              </p>
              <p>
                This is where you should confirm credentials using our detailed
                guide on{" "}
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  pharmacy safety and GPhC verification
                </Link>
                , which details the GPhC registry checks that every genuine UK
                supplier must pass. That verification page is a key resource for
                every high-intent weight loss treatment article.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="transparent-pricing"
              heading="Transparent Pricing"
            >
              <p>
                A good provider should explain the full weight loss treatment
                price, not just the first-month headline price.
              </p>
              <p>
                Many private providers show a &ldquo;from&rdquo; price. However,
                this may only apply to a starter dose, a first-month promotion,
                or a lower-strength option. Therefore, readers need to compare
                total cost across the full treatment journey.
              </p>
              <p>A proper price comparison should include:</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>Starter dose price</li>
                <li>Higher dose price</li>
                <li>Consultation cost</li>
                <li>Prescription review</li>
                <li>Delivery fees</li>
                <li>Support or coaching fees</li>
                <li>Maintenance cost</li>
                <li>Repeat prescription rules</li>
              </ul>
              <p>
                This is one of Health Wise&apos;s strongest opportunities. The
                site can compete by helping readers compare real monthly cost,
                not only the lowest advertised number.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="what-to-compare"
              heading="Weight Loss Treatment Price: What Users Should Compare"
            >
              <p>
                When users search for weight loss price or weight loss treatment
                cost, they usually want a practical answer. They want to know
                what they may pay each month and whether one provider is better
                value than another.
              </p>
              <p>
                However, weight loss treatment prices vary because providers
                package their services differently.
              </p>
              <p>
                Some providers focus on low medicine prices. Others include
                coaching, app support, pharmacist contact, or follow-up reviews.
                Meanwhile, some show a cheaper starting dose but become more
                expensive later.
              </p>
              <p>Therefore, a fair comparison should ask:</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  Is the price for Mounjaro, Wegovy, Saxenda, or another
                  treatment?
                </li>
                <li>Is the price based on the starter dose only?</li>
                <li>Does the price increase at higher doses?</li>
                <li>Is delivery included?</li>
                <li>Is clinical support included?</li>
                <li>What happens if the treatment is not suitable?</li>
                <li>Is maintenance pricing clear?</li>
                <li>Can the user compare the provider against alternatives?</li>
              </ul>
              <p>
                This is why users find it highly valuable to cross-reference
                with the latest{" "}
                <Link
                  href="/mounjaro-price-comparison"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  Mounjaro price list UK
                </Link>{" "}
                and the{" "}
                <Link
                  href="/wegovy-price-comparison"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  Wegovy price list UK
                </Link>{" "}
                summaries, which track actual dose-level tiers across major
                clinics.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="provider-types"
              heading="The Main Types of Weight Loss Treatment Providers"
            >
              <p>
                Not every provider works in the same way. Users should
                understand the different models before choosing where to start.
              </p>

              <h3
                className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Online Pharmacy Services
              </h3>
              <p>
                Online pharmacy services usually focus on consultation,
                prescription review, and delivery. These services may be
                convenient for users who already understand the treatment
                options and want a regulated online pathway.
              </p>
              <p>
                However, users should still check the pharmacy registration,
                clinical process, delivery policy, and support options.
              </p>

              <h3
                className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Online Doctor Services
              </h3>
              <p>
                Online doctor services may provide a more structured
                consultation process. They may include clinician review, medical
                history checks, and follow-up advice.
              </p>
              <p>
                This can be useful for users who have health questions or need
                more guidance before deciding whether treatment is suitable.
              </p>

              <h3
                className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Programme-Based Weight Loss Services
              </h3>
              <p>
                Some providers offer treatment as part of a wider programme.
                This may include coaching, nutrition support, app tracking,
                behavioural guidance, or ongoing check-ins.
              </p>
              <p>
                These services may cost more, but they can offer extra support.
                However, the user should still compare the total monthly cost
                against a pharmacy-only route.
              </p>

              <h3
                className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Independent Comparison Sites
              </h3>
              <p>
                Independent comparison sites such as Health Wise do not
                prescribe treatment directly. Instead, they help users compare
                provider options, price structures, pharmacy safety, support,
                and treatment differences.
              </p>
              <p>
                This role is important because provider-owned pages usually
                present only their own service. An independent comparison page
                can help users make a more informed decision before starting a
                consultation.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="why-not-cheapest"
              heading="Why Cheapest Is Not Always Best"
            >
              <p>
                It is natural to look for the cheapest weight loss treatment
                price. However, the cheapest provider may not always be the best
                choice.
              </p>
              <p>
                A very low price may exclude support, delivery, or follow-up. It
                may also only apply to the starting dose. Besides, unusually low
                prices can sometimes be a red flag if the seller is not properly
                regulated.
              </p>
              <p>A safer value comparison should balance price with:</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>Pharmacy registration</li>
                <li>Clinical checks</li>
                <li>Provider transparency</li>
                <li>Delivery process</li>
                <li>Support quality</li>
                <li>Dose-level pricing</li>
                <li>Maintenance rules</li>
                <li>User reviews</li>
                <li>Clear refund or cancellation information</li>
              </ul>
              <p>
                Therefore, Health Wise avoids positioning the article as
                &ldquo;cheap weight loss injections.&rdquo; Instead, the
                stronger and more useful approach is focusing on safe weight
                loss treatment price comparison.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="what-to-avoid"
              heading="What to Avoid When Comparing Providers"
            >
              <p>
                Users should be careful with any seller that makes weight loss
                treatment look too easy.
              </p>
              <p>Avoid websites or sellers that:</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>Offer prescription treatment without proper assessment</li>
                <li>Sell through social media messages</li>
                <li>Promise miracle results</li>
                <li>Advertise unusually low prices</li>
                <li>Offer bulk deals without clinical review</li>
                <li>Hide pharmacy registration details</li>
                <li>Do not explain side effects or suitability</li>
                <li>Make the checkout feel faster than the safety process</li>
              </ul>
              <p>
                This guidance helps readers avoid scams and protects their
                health, which is a key part of our focus on clinical safety.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="comparison-journey"
              heading="Best Place to Start: The Health Wise Comparison Journey"
            >
              <p>
                For users who are not sure where to begin, the safest journey is
                not to choose a provider immediately. Instead, they should
                compare treatment options first.
              </p>
              <p>A strong Health Wise journey could look like this:</p>
              <ol className="list-decimal space-y-3 pl-5">
                <li>
                  <strong
                    className={darkMode ? "text-slate-200" : "text-slate-800"}
                  >
                    Check your BMI for weight loss treatment:
                  </strong>{" "}
                  First, use our tool to{" "}
                  <Link
                    href="/tools/bmi-calculator"
                    className="font-medium text-emerald-600 hover:underline"
                  >
                    check your BMI for weight loss treatment
                  </Link>{" "}
                  to understand whether you are likely to meet typical
                  eligibility criteria before starting a consultation.
                </li>
                <li>
                  <strong
                    className={darkMode ? "text-slate-200" : "text-slate-800"}
                  >
                    Compare Mounjaro vs Wegovy vs Saxenda:
                  </strong>{" "}
                  This helps users understand the main treatment differences and
                  mechanisms before focusing only on price.
                </li>
                <li>
                  <strong
                    className={darkMode ? "text-slate-200" : "text-slate-800"}
                  >
                    Review Mounjaro price list UK:
                  </strong>{" "}
                  This helps users compare dose-level prices if they are
                  researching tirzepatide.
                </li>
                <li>
                  <strong
                    className={darkMode ? "text-slate-200" : "text-slate-800"}
                  >
                    Review Wegovy price list UK:
                  </strong>{" "}
                  This helps users compare semaglutide prices and provider
                  options.
                </li>
                <li>
                  <strong
                    className={darkMode ? "text-slate-200" : "text-slate-800"}
                  >
                    Check pharmacy safety and GPhC verification:
                  </strong>{" "}
                  This helps users verify regulated online chemists and avoid
                  fake sellers.
                </li>
                <li>
                  <strong
                    className={darkMode ? "text-slate-200" : "text-slate-800"}
                  >
                    Read how Health Wise compares prices:
                  </strong>{" "}
                  Understand the independent methodology and checks behind our
                  price database.
                </li>
              </ol>
              <p>
                Once you select a suitable and safe clinical path, you can also
                easily{" "}
                <Link
                  href="/tools/weight-loss-tracker"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  track your weight loss progress
                </Link>{" "}
                over the coming weeks to monitor your clinical goals.
              </p>
            </GuideSection>

            <section
              id="faq"
              className={`mt-16 border-t pt-10 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
            >
              <h2
                className={`mb-8 text-3xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Frequently asked questions
              </h2>
              <div className="space-y-8">
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    What is the best place to start weight loss treatment online
                    in the UK?
                  </h3>
                  <p>
                    The best place to start is a regulated service that uses
                    proper clinical assessment, checks eligibility, works with a
                    registered pharmacy, explains full pricing, and provides
                    clear support. Health Wise helps users compare these factors
                    before choosing a consultation route.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    Can I buy weight loss injections online in the UK?
                  </h3>
                  <p>
                    Some people may access private weight loss treatment online
                    after a clinical assessment and valid prescription. However,
                    users should only use regulated providers and should avoid
                    unregulated websites or social media sellers.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    Is the cheapest weight loss treatment provider the best
                    option?
                  </h3>
                  <p>
                    Not always. The cheapest provider may not include delivery,
                    support, consultation, or clear maintenance pricing.
                    Therefore, users should compare full monthly cost, safety
                    checks, and provider support before deciding.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    What should I check before starting weight loss treatment
                    online?
                  </h3>
                  <p>
                    Check the pharmacy registration, clinical assessment
                    process, treatment suitability, total monthly price,
                    delivery policy, support options, maintenance pricing, and
                    whether the provider explains side effects clearly.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    Why do weight loss treatment prices vary so much?
                  </h3>
                  <p>
                    Prices vary because providers may include different
                    services. Some include consultation, delivery, coaching, app
                    support, or follow-up reviews. Others may show a lower
                    medicine-only or starter-dose price.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    Should I compare Mounjaro and Wegovy before choosing a
                    provider?
                  </h3>
                  <p>
                    Yes. Mounjaro and Wegovy are different treatments with
                    different pricing, dose structures, and suitability factors.
                    Comparing treatment options first can help users make a more
                    informed provider decision.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    What are the warning signs of an unsafe seller?
                  </h3>
                  <p>
                    Warning signs include no clinical assessment, no pharmacy
                    registration details, social media sales, miracle-result
                    claims, unusually low prices, bulk offers, and no clear side
                    effect or suitability information.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    Why use Health Wise before choosing a provider?
                  </h3>
                  <p>
                    Health Wise helps users compare weight loss treatment
                    prices, pharmacy safety, provider differences, and support
                    features. This gives users a clearer picture before they
                    start a private consultation.
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
                The best place to start weight loss treatment online in the UK
                is not necessarily the cheapest website or the fastest checkout.
                A safer choice is a regulated provider with proper clinical
                checks, transparent prices, pharmacy verification, and ongoing
                support.
              </p>
              <p>
                Users should compare weight loss treatment price carefully
                because headline prices can be misleading. A low
                &ldquo;from&rdquo; price may only apply to the first dose or may
                exclude support and delivery. Therefore, the full monthly cost
                matters more than the lowest advertised number.
              </p>
              <p>
                Instead of simply telling you where to buy, Health Wise explains
                how to choose safely, compare providers properly, avoid unsafe
                sellers, and understand the real cost of treatment.
              </p>
              <p>
                If you want to know exactly how we gather and verify online
                provider fees, read about{" "}
                <Link
                  href="/methodology"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  how Health Wise compares prices
                </Link>{" "}
                so you can understand our editorial and research checks before
                starting your own consultation journey.
              </p>
              <p
                className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}
              >
                Health Wise does not prescribe or supply medicines. This page is
                general information and is not medical advice.
              </p>
              <p
                className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}
              >
                <span className="font-semibold text-slate-600 dark:text-slate-300">
                  Suggested hashtags:
                </span>{" "}
                {SOCIAL_HASHTAGS}
              </p>
            </GuideSection>
          </article>

          <div className="mt-10">
            <GuideSharePanel
              url={shareUrl}
              title={TITLE}
              description={DESCRIPTION}
            />
          </div>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
