"use client";
import { GooglePreferredSourceButton } from "@/components/analytics/GooglePreferredSourceButton";
import ArticleSources from "@/components/blog/ArticleSources";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock, Star, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
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
const TITLE = "Best Online Weight Loss Providers UK (2026)";
const DESCRIPTION =
  "Looking for the best online weight loss provider in the UK? See our shortlist of GPhC registered pharmacies with prices, support and delivery compared.";
const HERO_SRC = blogImgPath(BEST_PLACE_HERO_PNG);
const INLINE_SRC = blogImgPath(BEST_PLACE_INLINE_PNG);

const TOC = [
  { id: "shortlist", label: "Our shortlist of online weight loss providers" },
  { id: "how-to-choose", label: "How to choose a provider" },
  { id: "how-we-rank", label: "How we rank providers" },
  { id: "is-it-safe", label: "Is it safe to buy online?" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "conclusion", label: "Conclusion" },
];

interface ShortlistProvider {
  rank: number;
  name: string;
  slug: string;
  rating: number;
  gphcRegNo: string;
  whyOnList: string;
  mounjaroFrom: number;
  wegovyFrom: number;
}

const SHORTLIST_PROVIDERS: ShortlistProvider[] = [
  {
    rank: 1,
    name: "Pharmacy Express",
    slug: "pharmacy-express",
    rating: 5.0,
    gphcRegNo: "9012468",
    whyOnList: "Top-rated 5.0 customer satisfaction on our platform with low starter pricing and fast tracked cold-chain dispatch.",
    mounjaroFrom: 144.99,
    wegovyFrom: 119.99,
  },
  {
    rank: 2,
    name: "Swift Doctor",
    slug: "swift-doctor",
    rating: 4.9,
    gphcRegNo: "9012809",
    whyOnList: "Outstanding 4.9 customer feedback with fast prescriber assessment times and responsive clinician support.",
    mounjaroFrom: 149.00,
    wegovyFrom: 129.00,
  },
  {
    rank: 3,
    name: "Pharmica",
    slug: "pharmica",
    rating: 4.9,
    gphcRegNo: "9012030",
    whyOnList: "Established London pharmacy premises with extensive clinical staff, same-day processing, and reliable cold-chain packaging.",
    mounjaroFrom: 159.99,
    wegovyFrom: 149.00,
  },
  {
    rank: 4,
    name: "Dr Weightmans",
    slug: "dr-weightmans",
    rating: 4.9,
    gphcRegNo: "1092500",
    whyOnList: "Doctor-led clinical service dedicated specifically to medical weight management consultations and careful dose titration.",
    mounjaroFrom: 145.00,
    wegovyFrom: 139.00,
  },
  {
    rank: 5,
    name: "The Care Pharmacy",
    slug: "care-pharmacy",
    rating: 4.9,
    gphcRegNo: "9010308",
    whyOnList: "Highly regarded patient support, transparent single-pen list pricing, and dependable pharmacist follow-up reviews.",
    mounjaroFrom: 149.99,
    wegovyFrom: 140.00,
  },
  {
    rank: 6,
    name: "Ashcroft Pharmacy",
    slug: "ashcroft-pharmacy",
    rating: 4.8,
    gphcRegNo: "9011964",
    whyOnList: "Consistent 4.8 rating, competitive starter pen rates, and prompt clinician review on all initial applications.",
    mounjaroFrom: 149.99,
    wegovyFrom: 120.00,
  },
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
            Best Online Weight Loss Providers UK
          </span>
        </nav>

        <BlogArticleColumn toc={TOC} darkMode={darkMode}>
          <header
            className={`mb-8 border-b pb-8 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
          >
            <h1
              className={`mb-6 text-3xl font-black leading-[1.15] tracking-tight sm:text-4xl md:text-[44px] ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              Best Online Weight Loss Providers UK (2026)
            </h1>
            <div
              className={`mb-8 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Updated October 2026
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
                The best online weight loss provider for you depends on price, support and delivery. Every provider on this list is a GPhC registered UK pharmacy, and a prescriber checks your health before any medicine is sent. Price, safety and our 5 checks decide the order. No pharmacy can pay to change its place.
              </p>
            </div>

            {/* Section 1: Ranked Shortlist */}
            <GuideSection
              darkMode={darkMode}
              id="shortlist"
              heading="Our Shortlist of Online Weight Loss Providers"
            >
              <p>
                Our shortlist is ranked by independent user satisfaction scores and verified regulatory records already tracked on Healthwise360. Prices reflect our 20 September 2026 price check for standard starter doses.
              </p>

              <div className="mt-6 space-y-6">
                {SHORTLIST_PROVIDERS.map((p) => (
                  <div
                    key={p.slug}
                    className={`rounded-2xl border p-5 sm:p-6 transition-shadow hover:shadow-md ${
                      darkMode
                        ? "border-slate-800 bg-slate-900/60"
                        : "border-slate-200 bg-white shadow-xs"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 dark:border-slate-800">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700 font-bold text-white text-sm">
                          #{p.rank}
                        </span>
                        <div>
                          <h3
                            className={`text-lg font-bold sm:text-xl ${
                              darkMode ? "text-white" : "text-slate-900"
                            }`}
                          >
                            {p.name}
                          </h3>
                          <span className="text-xs text-slate-500 font-mono">
                            GPhC Reg: {p.gphcRegNo}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800 dark:bg-amber-950/40 dark:text-amber-300">
                        <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                        <span>{p.rating.toFixed(1)} / 5</span>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      {p.whyOnList}
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 dark:border-slate-800 dark:bg-slate-900/40 sm:grid-cols-2">
                      <div>
                        <div className="text-xs text-slate-500 font-medium">Starting Mounjaro:</div>
                        <div className="text-base font-extrabold text-slate-900 dark:text-white">
                          £{p.mounjaroFrom.toFixed(2)}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-medium">Starting Wegovy:</div>
                        <div className="text-base font-extrabold text-slate-900 dark:text-white">
                          £{p.wegovyFrom.toFixed(2)}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-3 pt-2">
                      <Link
                        href={`/pharmacies/${p.slug}`}
                        className="inline-flex items-center gap-1 rounded-lg bg-emerald-700 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-emerald-800 transition"
                      >
                        Read {p.name} review →
                      </Link>
                      <Link
                        href="/mounjaro-price-comparison"
                        className="inline-flex items-center gap-1 rounded-lg border border-slate-300 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:text-white transition"
                      >
                        Compare prices
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
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

            {/* Section 3: How we rank providers */}
            <GuideSection
              darkMode={darkMode}
              id="how-we-rank"
              heading="How We Rank Providers"
            >
              <p>
                Our shortlist is ranked using verified GPhC registration status, published customer feedback scores from independent platforms, transparent list pricing without hidden mandatory subscriptions, and demonstrated cold-chain handling compliance. Healthwise360 operates under strict editorial neutrality: no pharmacy or telehealth service can pay, sponsor, or bid to improve their placement on our shortlist. Learn more on our{" "}
                <Link
                  href="/methodology"
                  className="font-semibold text-emerald-700 underline hover:text-emerald-900 dark:text-emerald-400"
                >
                  ranking methodology page
                </Link>
                .
              </p>
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
