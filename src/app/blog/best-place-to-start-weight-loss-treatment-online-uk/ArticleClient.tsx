"use client";
import { GooglePreferredSourceButton } from "@/components/analytics/GooglePreferredSourceButton";
import ArticleSources from "@/components/blog/ArticleSources";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
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
  { id: "compare-providers", label: "Compare providers on Healthwise360" },
  { id: "how-to-choose", label: "How to choose a provider" },
  { id: "is-it-safe", label: "Is it safe to buy online?" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "conclusion", label: "Conclusion" },
];

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
            Best Place to Start Weight Loss Treatment Online UK
          </span>
        </nav>

        <BlogArticleColumn toc={TOC} darkMode={darkMode}>
          <header
            className={`mb-8 border-b pb-8 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
          >
            <h1
              className={`mb-6 text-3xl font-black leading-[1.15] tracking-tight sm:text-4xl md:text-[44px] ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              {TITLE}
            </h1>
            <div
              className={`mb-8 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Updated November 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                8 min read
              </span>
            </div>

            <BlogArticleHeroImage
              src={HERO_SRC}
              alt="Comparing online weight loss providers and pharmacy checks UK"
            />
            <div
              id="guide-article-hero-end"
              aria-hidden
              className="pointer-events-none h-0 w-full overflow-hidden"
            />
          </header>

          <article
            className={`space-y-10 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}
          >
            {/* Opening under H1 */}
            <div
              className={`rounded-2xl border p-6 sm:p-7 ${darkMode ? "border-emerald-800/40 bg-emerald-950/20" : "border-emerald-900/15 bg-emerald-50/70"}`}
            >
              <p className="text-base sm:text-lg leading-relaxed text-slate-800 dark:text-slate-200">
                The best online weight loss provider for you depends on price, support and delivery. Check that the pharmacy is GPhC registered and that a prescriber reviews your health before any medicine is sent.
              </p>
            </div>

            {/* Section 1: Where to compare providers (no ranking) */}
            <GuideSection
              darkMode={darkMode}
              id="compare-providers"
              heading="Compare Providers on Healthwise360"
            >
              <p>
                Healthwise360 compares selected partner providers, not the whole UK market. Providers are listed A–Z, and the order is never influenced by commission, affiliate status or discount codes. See the{" "}
                <Link href="/pharmacies" className="font-semibold text-emerald-700 underline hover:text-emerald-900 dark:text-emerald-400">
                  partner pharmacy directory
                </Link>
                , or compare dated prices by dose on the{" "}
                <Link href="/mounjaro-price-comparison" className="font-semibold text-emerald-700 underline hover:text-emerald-900 dark:text-emerald-400">
                  Mounjaro
                </Link>{" "}
                and{" "}
                <Link href="/wegovy-price-comparison" className="font-semibold text-emerald-700 underline hover:text-emerald-900 dark:text-emerald-400">
                  Wegovy
                </Link>{" "}
                price comparison pages.
              </p>
            </GuideSection>

            <div className="my-8">
              <BlogArticleHeroImage
                src={INLINE_SRC}
                alt="Checking provider ratings, GPhC safety, and weight loss treatment costs"
                priority={false}
                showFullImage
              />
            </div>

            {/* Section 2: How to choose a provider */}
            <GuideSection
              darkMode={darkMode}
              id="how-to-choose"
              heading="How to Choose a Provider"
            >
              <p>
                When selecting an online weight loss provider, look beyond introductory headlines. We recommend assessing providers across four core criteria:
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div
                  className={`rounded-xl border p-4 shadow-xs ${
                    darkMode ? "border-slate-800 bg-slate-900/40" : "border-slate-200 bg-white"
                  }`}
                >
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    1. Price for your exact dose
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Weight loss injections like Mounjaro and Wegovy follow weekly titration schedules. Lower starter dose rates (e.g., 2.5 mg) do not reflect the ongoing cost at 10 mg or 15 mg. Check prices for every strength before committing.
                  </p>
                </div>

                <div
                  className={`rounded-xl border p-4 shadow-xs ${
                    darkMode ? "border-slate-800 bg-slate-900/40" : "border-slate-200 bg-white"
                  }`}
                >
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    2. Prescriber support & clinical access
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Side effects like nausea and digestive symptoms can occur during dose escalation. Choose a service that provides direct access to qualified pharmacist independent prescribers or UK doctors for ongoing guidance.
                  </p>
                </div>

                <div
                  className={`rounded-xl border p-4 shadow-xs ${
                    darkMode ? "border-slate-800 bg-slate-900/40" : "border-slate-200 bg-white"
                  }`}
                >
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    3. Cold-chain delivery standards
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Injectables require 2°C to 8°C chilled transit before use. Reputable pharmacies use insulated thermal pouches and ice packs with tracked 24-hour couriers (Royal Mail or DPD) to maintain temperature integrity.
                  </p>
                </div>

                <div
                  className={`rounded-xl border p-4 shadow-xs ${
                    darkMode ? "border-slate-800 bg-slate-900/40" : "border-slate-200 bg-white"
                  }`}
                >
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    4. Verified GPhC registration
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Always confirm that the dispensing premises holds a valid 7-digit registration number on the official General Pharmaceutical Council register matching the business name and address shown on their site.
                  </p>
                </div>
              </div>
            </GuideSection>

            {/* Section 4: Is it safe to buy online? */}
            <GuideSection
              darkMode={darkMode}
              id="is-it-safe"
              heading="Is It Safe to Buy Online?"
            >
              <p>
                Yes, provided you use an established UK online pharmacy registered with the General Pharmaceutical Council (GPhC) that requires a comprehensive clinical consultation before dispensing. Never buy GLP-1 weight loss injections from social media, unregulated overseas sellers, or websites that omit medical screening. Learn how to independently verify any pharmacy in our{" "}
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className="font-semibold text-emerald-700 underline hover:text-emerald-900 dark:text-emerald-400"
                >
                  GPhC verification safety guide
                </Link>
                .
              </p>
            </GuideSection>

            {/* FAQ */}
            <section
              id="faq"
              className={`mt-12 border-t pt-8 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
            >
              <h2
                className={`mb-6 text-2xl font-bold sm:text-3xl ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Frequently asked questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3
                    className={`text-lg font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    What is the best place to start weight loss treatment online in the UK?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    The best place to start is a regulated UK provider that checks eligibility through a comprehensive clinical assessment, works with an authentic GPhC-registered pharmacy, displays clear pen-by-pen pricing, and offers qualified prescriber support after dispatch.
                  </p>
                </div>
                <div>
                  <h3
                    className={`text-lg font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    Can I buy weight loss injections online without a prescription?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    No. Mounjaro (tirzepatide) and Wegovy (semaglutide) are legally classified as Prescription-Only Medicines (POM) in the UK. Any seller offering them without an independent clinician consultation and formal prescription is operating illegally.
                  </p>
                </div>
                <div>
                  <h3
                    className={`text-lg font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    Is the cheapest weight loss treatment provider the best option?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    Not necessarily. An unusually low starter price may exclude consultation charges, prescription fees, tracked cold-chain delivery, or ongoing clinical follow-up. Always evaluate the total monthly cost across titration and maintenance doses.
                  </p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <GuideSection
              darkMode={darkMode}
              id="conclusion"
              heading="Conclusion"
            >
              <p>
                Starting medical weight loss online in the UK is a healthcare decision that requires balancing cost with safety and clinical support. Always verify that your chosen provider is listed on the official GPhC register, that prescribers review your health history thoroughly, and that pricing remains clear at every dose level.
              </p>
              <p>
                To compare live prices across all registered providers, explore our full{" "}
                <Link
                  href="/mounjaro-price-comparison"
                  className="font-semibold text-emerald-700 underline hover:text-emerald-900 dark:text-emerald-400"
                >
                  Mounjaro price comparison
                </Link>{" "}
                and{" "}
                <Link
                  href="/wegovy-price-comparison"
                  className="font-semibold text-emerald-700 underline hover:text-emerald-900 dark:text-emerald-400"
                >
                  Wegovy price comparison
                </Link>{" "}
                tables.
              </p>
            </GuideSection>

            <ArticleSources slug="best-place-to-start-weight-loss-treatment-online-uk" darkMode={darkMode} />
          </article>

          <div className="mt-10">
            <GuideSharePanel
              url={shareUrl}
              title={TITLE}
              description={DESCRIPTION}
            />
          </div>

          <div className="mt-6">
            <GooglePreferredSourceButton />
          </div>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
