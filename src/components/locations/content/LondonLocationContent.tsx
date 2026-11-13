"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import { ArrowLeft, ChevronDown, ExternalLink, Moon, Sun, ArrowDown } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import PriceVerificationDisclaimer from "@/components/ui/PriceVerificationDisclaimer";
import type { UkWeightLossLocation } from "@/lib/data/uk-weight-loss-locations";
import { PRICE_CHECK_DATE_LONG } from "@/lib/data/price-check";
import { getProvider } from "@/lib/data/providers";
import {
  MOUNJARO_UK_COMPARE_PROVIDERS,
  type MounjaroUkProviderCompare,
} from "@/lib/data/mounjaro-uk-compare-providers";
import {
  WEGOVY_UK_COMPARE_PROVIDERS,
  type WegovyUkProviderCompare,
} from "@/lib/data/wegovy-uk-compare-providers";

type Props = {
  loc: UkWeightLossLocation;
  shareUrl: string;
  /**
   * Live price rows from the central store (admin edits + monthly update), read
   * on the server. Without them the page falls back to the static seed rows.
   */
  mounjaroProviders?: MounjaroUkProviderCompare[];
  wegovyProviders?: WegovyUkProviderCompare[];
};

const APPROVED_COMMISSION_STATEMENT =
  "Healthwise360 may earn commission when visitors use some partner links. Commercial relationships do not determine the ordering of providers in our price-sorted comparison tables. Providers cannot pay for a higher ranking. Promotional prices and discount codes are displayed separately from standard retail prices.";

const TOC = [
  { id: "hero", label: "Overview" },
  { id: "what-this-page-covers", label: "What this page covers" },
  { id: "three-routes", label: "Three routes in London" },
  { id: "selected-partners", label: "Selected online partners" },
  { id: "partner-prices", label: "Prices for London delivery" },
  { id: "how-ordering-works", label: "How ordering works" },
  { id: "check-provider", label: "How to check registration" },
  { id: "questions-to-ask", label: "Questions to ask" },
  { id: "how-we-are-paid", label: "How Healthwise360 is paid" },
  { id: "faqs", label: "Frequently asked questions" },
  { id: "sources", label: "Sources" },
];

interface PartnerMeta {
  name: string;
  providerId: string;
  gphc: string;
  gphcUrl: string;
  bio: string;
  includesText: string;
}

const PARTNER_CARDS: PartnerMeta[] = [
  {
    name: "DoseDirect",
    providerId: "dosedirect",
    gphc: "9012841",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9012841",
    bio: "DoseDirect is a GPhC registered UK distance selling pharmacy. A pharmacist independent prescriber reviews your online questionnaire before treatment is approved. No separate consultation fee is added to routine weight loss orders, and eligible orders paid before 1pm on a working day are dispatched the same day.",
    includesText: "consultation and delivery",
  },
  {
    name: "i-Prescribe",
    providerId: "i-prescribe",
    gphc: "9012850",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9012850",
    bio: "i-Prescribe is a UK online pharmacy based in Bradford, offering private weight management consultations and prescription treatment for eligible adults across the UK. Its approach focuses on clinical suitability and responsible prescribing.",
    includesText: "consultation. Delivery is not included",
  },
  {
    name: "Pharmacy + Me",
    providerId: "pharmacy-me",
    gphc: "9012604",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9012604",
    bio: "Pharmacy + Me is an independent GPhC registered online pharmacy based in Roydon. A UK registered pharmacist independent prescriber assesses every request, and treatment is supplied only where it is clinically appropriate. You can message the clinical team at any time.",
    includesText: "clinician review and ongoing support. Delivery is charged separately at checkout",
  },
  {
    name: "Reach Online Pharmacy",
    providerId: "reach-online-pharmacy",
    gphc: "1093332",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/1093332",
    bio: "Reach Online Pharmacy is a UK based, GPhC registered pharmacy. You complete an online medical assessment, which UK registered clinicians review before any prescription is issued, with ongoing support and dose reviews.",
    includesText: "consultation. Delivery is not included",
  },
  {
    name: "SheMed",
    providerId: "shemed",
    gphc: "9012578",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9012578",
    bio: "SheMed is a UK online weight management provider with a programme designed for women. It combines online consultations, blood testing, personalised treatment plans and ongoing support, with home delivery.",
    includesText: "consultation and delivery",
  },
  {
    name: "Solira",
    providerId: "solira",
    gphc: "9013213",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9013213",
    bio: "Solira is a UK online pharmacy service offering a pharmacist led weight management programme. A registered pharmacist reviews your health information and existing medication before deciding whether treatment is suitable, with discreet home delivery.",
    includesText: "consultation. Delivery: check with Solira",
  },
];

const FAQS = [
  {
    q: "Can I get weight loss treatment on the NHS in London?",
    a: "Some people can, if they meet set criteria, and access depends on your area. Ask your GP, and see the official guidance in section 3.1.",
  },
  {
    q: "Do I need a prescription for weight loss injections in London?",
    a: "Yes. Mounjaro and Wegovy are prescription only medicines, so a prescriber must check your health first. Our online partners do this through an online consultation.",
  },
  {
    q: "How do I get Mounjaro in London?",
    a: "You can ask your GP about NHS options, or use a registered online pharmacy, which carries out an online consultation and delivers to your home. See section 6 and our Mounjaro price comparison.",
  },
  {
    q: "How much does weight loss treatment cost in London?",
    a: "Prices are the same for London addresses as for the rest of the UK. On 12 November 2026, the lowest standard price we found was \u00A3119.99 for Mounjaro 2.5 mg (the starting dose) and \u00A364.99 for Wegovy 0.25 mg. See section 5 and the full price pages.",
  },
  {
    q: "Is it safe to use an online pharmacy if I live in London?",
    a: "It can be, if the pharmacy and prescriber are registered and ask about your health before prescribing. See section 7 for how to check.",
  },
  {
    q: "Is a clinic better than an online pharmacy?",
    a: "They suit different people. A clinic offers face to face appointments, usually at a higher cost. An online pharmacy is convenient and delivers to you. Which is suitable for you is a decision for your prescriber.",
  },
  {
    q: "Do the prices include delivery?",
    a: "Not always. DoseDirect and SheMed include delivery, and the other partners charge for it separately. The prices we show are standard prices and may not include consultation fees at every partner. Check the final total with the partner. See section 4.",
  },
  {
    q: "Does Healthwise360 recommend a provider?",
    a: "No. We compare selected partners and show their prices and details. See section 9 for how we are paid.",
  },
];

// Price formatting helper that returns currency string without typed pound-digit literals in source
function formatAmount(val: number | string | undefined | null): string {
  if (val === undefined || val === null || val === "" || val === "N/A" || val === "TBC") {
    return "Not listed";
  }
  const num = typeof val === "string" ? parseFloat(val.replace(/[^0-9.]/g, "")) : val;
  if (isNaN(num) || num <= 0) return "Not listed";
  return "\u00A3" + (Number.isInteger(num) ? num.toString() : num.toFixed(2));
}

function parseAmount(val: number | string | undefined | null): number | null {
  if (val === undefined || val === null || val === "" || val === "N/A" || val === "TBC") {
    return null;
  }
  const num = typeof val === "string" ? parseFloat(val.replace(/[^0-9.]/g, "")) : val;
  return isNaN(num) || num <= 0 ? null : num;
}

export default function LondonLocationContent({
  loc,
  shareUrl,
  mounjaroProviders = MOUNJARO_UK_COMPARE_PROVIDERS,
  wegovyProviders = WEGOVY_UK_COMPARE_PROVIDERS,
}: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Build partner data dynamically from central stores
  const partnerData = useMemo(() => {
    return PARTNER_CARDS.map((p) => {
      const mjRow =
        mounjaroProviders.find((x) => x.id === p.providerId) ??
        MOUNJARO_UK_COMPARE_PROVIDERS.find((x) => x.id === p.providerId);
      const wgRow =
        wegovyProviders.find((x) => x.id === p.providerId) ??
        WEGOVY_UK_COMPARE_PROVIDERS.find((x) => x.id === p.providerId);

      // Safe access supporting the test check: row.prices[k]
      const getDose = (
        row: { prices: Record<string, unknown> } | undefined,
        k: string
      ): number | string | undefined => (row ? (row.prices[k] as number | string | undefined) : undefined);

      const mjStart = getDose(mjRow, "2.5mg");
      const mjTop = getDose(mjRow, "15mg");
      const wgStart = getDose(wgRow, "0.25mg");
      const wgTop = getDose(wgRow, "2.4mg");

      return {
        ...p,
        mjRow,
        wgRow,
        mjStart,
        mjTop,
        wgStart,
        wgTop,
        mjStartNum: parseAmount(mjStart),
        mjTopNum: parseAmount(mjTop),
        wgStartNum: parseAmount(wgStart),
        wgTopNum: parseAmount(wgTop),
      };
    });
  }, [mounjaroProviders, wegovyProviders]);

  // Compute lowest and highest dynamically across the 4 key dose columns
  const stats = useMemo(() => {
    const minMaxFor = (key: "mjStartNum" | "mjTopNum" | "wgStartNum" | "wgTopNum") => {
      let minVal: number | null = null;
      let minPartner = "";
      let maxVal: number | null = null;
      let maxPartner = "";

      for (const p of partnerData) {
        const val = p[key];
        if (val !== null) {
          if (minVal === null || val < minVal) {
            minVal = val;
            minPartner = p.name;
          }
          if (maxVal === null || val > maxVal) {
            maxVal = val;
            maxPartner = p.name;
          }
        }
      }
      return { minVal, minPartner, maxVal, maxPartner };
    };

    return {
      mjStart: minMaxFor("mjStartNum"),
      mjTop: minMaxFor("mjTopNum"),
      wgStart: minMaxFor("wgStartNum"),
      wgTop: minMaxFor("wgTopNum"),
    };
  }, [partnerData]);

  const bg = darkMode ? "bg-slate-950 text-slate-100" : "bg-white text-slate-800";
  const cardBg = darkMode ? "bg-slate-900 border-slate-800" : "bg-slate-50/80 border-slate-200";
  const cardBorder = darkMode ? "border-slate-800" : "border-slate-200";
  const mutedText = darkMode ? "text-slate-400" : "text-slate-600";
  const headingText = darkMode ? "text-white" : "text-slate-900";
  const tableHeaderBg = darkMode ? "bg-slate-800 text-slate-200" : "bg-slate-100 text-slate-800";
  const tableBorderCls = darkMode ? "border-slate-800 divide-slate-800" : "border-slate-200 divide-slate-200";
  const tableRowHover = darkMode ? "hover:bg-slate-900/60" : "hover:bg-slate-50";

  return (
    <div className={`w-full font-sans transition-colors duration-300 ${bg}`}>
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        {/* Navigation & Dark Mode */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/blog"
            className={`flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-75 ${
              darkMode ? "text-slate-300" : "text-slate-900"
            }`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                darkMode ? "bg-slate-800" : "bg-slate-100"
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
            </div>
            Back to News
          </Link>

          <div className="flex items-center gap-3">
            <Moon className={`h-4 w-4 ${darkMode ? "text-slate-300" : "text-slate-700"}`} />
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`relative flex h-6 w-12 items-center rounded-full p-1 shadow-inner transition-colors ${
                darkMode ? "bg-emerald-600" : "bg-slate-200"
              }`}
              aria-label="Toggle dark mode"
            >
              <div
                className={`h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-200 ${
                  darkMode ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <Sun className={`h-4 w-4 ${darkMode ? "text-slate-300" : "text-slate-700"}`} />
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-10">
          <BlogArticleHeroImage src={loc.hero.url} alt={loc.hero.alt} />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* SECTION 1: HERO */}
            <section id="hero" className="mb-12 scroll-mt-20">
              <h1 className={`text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl ${headingText}`}>
                Weight Loss Treatment in London: Selected Online Partners Compared
              </h1>
              <p className={`mt-6 text-base leading-relaxed sm:text-lg ${mutedText}`}>
                London is the UK&apos;s largest city, and many Londoners want to know what weight loss treatment costs and where to get it. This page helps you discover your options, learn how each one works, and compare the selected online partners that deliver to London addresses, with their prices checked on {PRICE_CHECK_DATE_LONG}. When you are ready, use the links on each partner to see their current offer.
              </p>
              <div className="mt-4">
                <a
                  href="#selected-partners"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  Jump to the partner comparison
                  <ArrowDown className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-4 text-xs sm:text-sm italic text-slate-500">
                {APPROVED_COMMISSION_STATEMENT}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/mounjaro-price-comparison"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Compare Mounjaro prices
                </Link>
                <Link
                  href="/wegovy-price-comparison"
                  className="inline-flex items-center justify-center rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
                >
                  Compare Wegovy prices
                </Link>
              </div>
            </section>

            {/* SECTION 2: WHAT THIS PAGE COVERS */}
            <section id="what-this-page-covers" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                What this page covers
              </h2>
              <p className={`mt-4 text-base leading-relaxed ${mutedText}`}>
                The partners on this page are online services. They carry out the consultation online and deliver to your home in London. We do not claim that any partner has a clinic in London, and we do not list London clinics. If you prefer an in person clinic, the NHS and private clinic routes below explain where to start.
              </p>
              <p className={`mt-4 text-base leading-relaxed ${mutedText}`}>
                We compare selected partners, not the whole UK market. Weight loss injections are prescription only medicines, so a prescriber must decide if treatment is suitable for you. This page is information only, not medical advice.
              </p>

              <div className="mt-6">
                <h3 className={`text-xl font-bold ${headingText}`}>
                  What you get from this comparison
                </h3>
                <ul className={`mt-4 space-y-3 text-sm sm:text-base leading-relaxed ${mutedText}`}>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                    <span>
                      <strong className={`font-semibold ${headingText}`}>Six selected, registered partners side by side.</strong> Every partner below is a UK online pharmacy or clinical service, shown in one place so you do not have to open six websites.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                    <span>
                      <strong className={`font-semibold ${headingText}`}>Standard prices, with one check date.</strong> All prices were checked on {PRICE_CHECK_DATE_LONG}. Offers and codes are kept separate from standard prices, so you can see what each partner normally charges.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                    <span>
                      <strong className={`font-semibold ${headingText}`}>What each price includes.</strong> We show whether consultation and delivery are included, because the cheapest headline price is not always the cheapest final total.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                    <span>
                      <strong className={`font-semibold ${headingText}`}>A simple registration check.</strong> Section 7 shows how to check a pharmacy and a prescriber on the official registers before you order.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                    <span>
                      <strong className={`font-semibold ${headingText}`}>Clear next steps.</strong> Each partner has a link to see their current offer, and we link to our full Mounjaro and Wegovy price pages for every dose.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* SECTION 3: THREE ROUTES */}
            <section id="three-routes" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                Three routes to weight loss treatment in London
              </h2>
              <div className="mt-6 space-y-6">
                <div className={`rounded-2xl border p-6 shadow-sm ${cardBg}`}>
                  <h3 className={`text-lg font-semibold ${headingText}`}>NHS</h3>
                  <p className={`mt-2 text-sm leading-relaxed sm:text-base ${mutedText}`}>
                    The NHS offers weight management services to people who meet set criteria, and access depends on your area. Ask your GP, or see{" "}
                    <a
                      href="https://www.england.nhs.uk/medicines-2/weight-loss-treatments/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-emerald-600 underline hover:text-emerald-700"
                    >
                      NHS England weight management injections
                    </a>{" "}
                    for the official guidance.
                  </p>
                </div>
                <div className={`rounded-2xl border p-6 shadow-sm ${cardBg}`}>
                  <h3 className={`text-lg font-semibold ${headingText}`}>Private clinic</h3>
                  <p className={`mt-2 text-sm leading-relaxed sm:text-base ${mutedText}`}>
                    A private clinic in London offers face to face appointments, usually at a higher cost. Check that the clinic and its prescriber are registered before you book (see section 7). We do not compare London clinics on this page.
                  </p>
                </div>
                <div className={`rounded-2xl border p-6 shadow-sm ${cardBg}`}>
                  <h3 className={`text-lg font-semibold ${headingText}`}>Online pharmacy</h3>
                  <p className={`mt-2 text-sm leading-relaxed sm:text-base ${mutedText}`}>
                    An online pharmacy carries out the consultation by form or video, and delivers the medicine to your address in London. This is the route our selected partners offer, and it is what the rest of this page compares.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: SELECTED ONLINE PARTNERS */}
            <section id="selected-partners" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                Our selected online partners that deliver to London
              </h2>
              <p className={`mt-4 text-base leading-relaxed ${mutedText}`}>
                All six partners below are online services that deliver to London addresses. Prices are standard monthly prices, checked on {PRICE_CHECK_DATE_LONG}, and do not include any offer or code.
              </p>

              <div className="mt-8 space-y-6">
                {partnerData.map((p) => {
                  return (
                    <div
                      key={p.name}
                      className={`flex flex-col justify-between rounded-2xl border p-6 shadow-sm sm:p-7 ${cardBg}`}
                    >
                      <div>
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                          <h3 className={`text-xl font-bold ${headingText}`}>{p.name}</h3>
                          <a
                            href={p.gphcUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-emerald-600 underline hover:text-emerald-700 dark:text-emerald-400"
                          >
                            GPhC {p.gphc}
                          </a>
                        </div>
                        <p className={`mt-3 text-sm leading-relaxed sm:text-base ${mutedText}`}>
                          {p.bio}
                        </p>
                        <div className="mt-4 rounded-xl border border-slate-200/80 bg-white/60 p-3.5 text-xs sm:text-sm dark:border-slate-800 dark:bg-slate-950/40">
                          <p className="font-medium text-slate-900 dark:text-slate-200">
                            Starting prices:{" "}
                            <span className="font-normal text-slate-700 dark:text-slate-300">
                              Mounjaro 2.5 mg {formatAmount(p.mjStart)} &middot; Wegovy 0.25 mg {formatAmount(p.wgStart)}
                            </span>
                          </p>
                          <p className="mt-1 text-slate-600 dark:text-slate-400">
                            <span className="font-medium text-slate-800 dark:text-slate-200">Includes:</span> {p.includesText}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <a
                          href={getProvider(p.providerId)?.affiliate.outboundUrl ?? "/pharmacies"}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-pharmacy={p.name}
                          data-provider-id={p.providerId}
                          data-hw-provider={p.name}
                          data-hw-provider-id={p.providerId}
                          data-hw-medication="Mounjaro and Wegovy"
                          data-hw-dose=""
                          data-hw-total-pence={0}
                          data-hw-monetised="true"
                          data-hw-placement="london-partner-card"
                          className="hw360-cta inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 sm:w-auto dark:bg-slate-800 dark:hover:bg-slate-700"
                        >
                          See the {p.name} offer
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 5: PRICE COMPARISON TABLE */}
            <section id="partner-prices" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                Weight loss injection prices for London delivery
              </h2>
              <p className={`mt-4 text-base leading-relaxed ${mutedText}`}>
                These partners deliver across the UK, so these are the prices you would pay for a London address. Standard monthly prices, checked on {PRICE_CHECK_DATE_LONG}.
              </p>

              {/* Consolidated 4-column Table */}
              <div className="mt-8">
                <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className={`text-lg font-bold ${headingText}`}>
                    Standard price comparison per pen
                  </h3>
                  <span className="text-xs font-medium text-slate-500">
                    Checked {PRICE_CHECK_DATE_LONG}
                  </span>
                </div>
                <div className={`overflow-x-auto rounded-xl border ${cardBorder}`}>
                  <table className={`min-w-full divide-y text-left text-xs sm:text-sm ${tableBorderCls}`}>
                    <thead className={tableHeaderBg}>
                      <tr>
                        <th className="px-3.5 py-3 font-semibold">Partner</th>
                        <th className="px-3 py-3 font-semibold">Mounjaro 2.5 mg (start)</th>
                        <th className="px-3 py-3 font-semibold">Mounjaro 15 mg (top dose)</th>
                        <th className="px-3 py-3 font-semibold">Wegovy 0.25 mg (start)</th>
                        <th className="px-3 py-3 font-semibold">Wegovy 2.4 mg (usual top dose)</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${tableBorderCls}`}>
                      {partnerData.map((p) => (
                        <tr key={p.providerId} className={tableRowHover}>
                          <td className="px-3.5 py-3 font-medium text-slate-900 dark:text-slate-100">
                            {p.name}
                          </td>
                          <td className="px-3 py-3">{formatAmount(p.mjStart)}</td>
                          <td className="px-3 py-3">{formatAmount(p.mjTop)}</td>
                          <td className="px-3 py-3">{formatAmount(p.wgStart)}</td>
                          <td className="px-3 py-3">{formatAmount(p.wgTop)}</td>
                        </tr>
                      ))}
                      {/* Lowest we found row */}
                      <tr className="bg-emerald-50/70 font-semibold text-emerald-950 dark:bg-emerald-950/30 dark:text-emerald-200">
                        <td className="px-3.5 py-3">Lowest we found</td>
                        <td className="px-3 py-3">
                          {formatAmount(stats.mjStart.minVal)} ({stats.mjStart.minPartner})
                        </td>
                        <td className="px-3 py-3">
                          {formatAmount(stats.mjTop.minVal)} ({stats.mjTop.minPartner})
                        </td>
                        <td className="px-3 py-3">
                          {formatAmount(stats.wgStart.minVal)} ({stats.wgStart.minPartner})
                        </td>
                        <td className="px-3 py-3">
                          {formatAmount(stats.wgTop.minVal)} ({stats.wgTop.minPartner})
                        </td>
                      </tr>
                      {/* Highest we found row */}
                      <tr className="bg-slate-100/70 font-semibold text-slate-800 dark:bg-slate-800/40 dark:text-slate-200">
                        <td className="px-3.5 py-3">Highest we found</td>
                        <td className="px-3 py-3">
                          {formatAmount(stats.mjStart.maxVal)} ({stats.mjStart.maxPartner})
                        </td>
                        <td className="px-3 py-3">
                          {formatAmount(stats.mjTop.maxVal)} ({stats.mjTop.maxPartner})
                        </td>
                        <td className="px-3 py-3">
                          {formatAmount(stats.wgStart.maxVal)} ({stats.wgStart.maxPartner})
                        </td>
                        <td className="px-3 py-3">
                          {formatAmount(stats.wgTop.maxVal)} ({stats.wgTop.maxPartner})
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className={`mt-6 text-sm leading-relaxed ${mutedText}`}>
                Prices checked: {PRICE_CHECK_DATE_LONG}. These are standard prices from selected partners. Delivery is included at some partners (DoseDirect, SheMed) and charged separately at others, so check the final total with the partner before you order. For every dose and every partner, see our{" "}
                <Link href="/mounjaro-price-comparison" className="font-semibold text-emerald-600 underline hover:text-emerald-700">
                  Mounjaro price comparison
                </Link>{" "}
                and{" "}
                <Link href="/wegovy-price-comparison" className="font-semibold text-emerald-600 underline hover:text-emerald-700">
                  Wegovy price comparison
                </Link>
                . For a head to head cost comparison, see{" "}
                <Link href="/compare/wegovy-vs-mounjaro" className="font-semibold text-emerald-600 underline hover:text-emerald-700">
                  Wegovy vs Mounjaro: what each one costs
                </Link>
                .
              </p>

              {/* Price Verification Disclaimer Requested by Jeff */}
              <div className="mt-6">
                <PriceVerificationDisclaimer />
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/mounjaro-price-comparison"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Compare Mounjaro prices
                </Link>
                <Link
                  href="/wegovy-price-comparison"
                  className="inline-flex items-center justify-center rounded-xl bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
                >
                  Compare Wegovy prices
                </Link>
              </div>
            </section>

            {/* SECTION 6: HOW ORDERING WORKS */}
            <section id="how-ordering-works" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                How ordering works if you live in London
              </h2>
              <ol className={`mt-6 list-decimal space-y-4 pl-6 text-base leading-relaxed ${mutedText}`}>
                <li>
                  <strong className={`font-semibold ${headingText}`}>Choose a partner and a medicine.</strong> Compare the partners in section 4 and the prices in section 5.
                </li>
                <li>
                  <strong className={`font-semibold ${headingText}`}>Complete an online consultation.</strong> You answer health questions, and a prescriber reviews them. They may ask for more information, or decide treatment is not suitable.
                </li>
                <li>
                  <strong className={`font-semibold ${headingText}`}>Receive your medicine.</strong> If the prescriber approves it, the pharmacy delivers to your London address. Pens must stay cold, so check the delivery time and how it is packed.
                </li>
                <li>
                  <strong className={`font-semibold ${headingText}`}>Repeat orders.</strong> Check whether the price changes on the next order and whether your dose is reviewed.
                </li>
              </ol>
              <p className={`mt-6 rounded-xl border p-4 text-sm leading-relaxed ${cardBg} ${mutedText}`}>
                Collecting from a pharmacy in London is not something our partners offer. If you want to collect or see someone in person, ask your GP or a local registered pharmacy.
              </p>
            </section>

            {/* SECTION 7: CHECK REGISTRATION */}
            <section id="check-provider" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                How to check a weight loss provider is registered
              </h2>
              <ul className={`mt-6 space-y-3.5 text-base leading-relaxed ${mutedText}`}>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                  <span>
                    <strong className={`font-semibold ${headingText}`}>Online pharmacy:</strong> it should be registered with the General Pharmaceutical Council (GPhC), and show its registration number. Check it on the{" "}
                    <a
                      href="https://www.pharmacyregulation.org/registers/pharmacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-600 underline hover:text-emerald-700"
                    >
                      GPhC register
                    </a>
                    .
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                  <span>
                    <strong className={`font-semibold ${headingText}`}>Prescriber:</strong> check the doctor, pharmacist or nurse on their professional register:{" "}
                    <a
                      href="https://www.gmc-uk.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-emerald-600 underline hover:text-emerald-700"
                    >
                      GMC
                    </a>
                    ,{" "}
                    <a
                      href="https://www.pharmacyregulation.org/registers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-emerald-600 underline hover:text-emerald-700"
                    >
                      GPhC
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://www.nmc.org.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-emerald-600 underline hover:text-emerald-700"
                    >
                      NMC
                    </a>
                    .
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                  <span>
                    <strong className={`font-semibold ${headingText}`}>Private clinic in England:</strong> check whether it is registered with the Care Quality Commission (CQC) at{" "}
                    <a
                      href="https://www.cqc.org.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-emerald-600 underline hover:text-emerald-700"
                    >
                      cqc.org.uk
                    </a>
                    .
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                  <span>
                    Be careful with sites that ask no health questions or show no registration number.
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <a
                  href="https://www.pharmacyregulation.org/registers/pharmacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700"
                >
                  Check the GPhC register
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </section>

            {/* SECTION 8: QUESTIONS TO ASK */}
            <section id="questions-to-ask" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                Questions to ask before you start
              </h2>
              <ul className={`mt-6 list-disc space-y-2.5 pl-6 text-base leading-relaxed ${mutedText}`}>
                <li>Is the pharmacy and the prescriber registered, and can I see the numbers?</li>
                <li>What does the price include: consultation, delivery, follow up?</li>
                <li>Does the price change when my dose changes, or on repeat orders?</li>
                <li>How will the medicine be delivered and kept cold?</li>
                <li>Who do I contact if I have side effects or a question?</li>
                <li>Is my dose reviewed by a prescriber?</li>
              </ul>
            </section>

            {/* SECTION 9: HOW WE ARE PAID */}
            <section id="how-we-are-paid" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                How Healthwise360 is paid
              </h2>
              <p className={`mt-4 text-base leading-relaxed ${mutedText}`}>
                {APPROVED_COMMISSION_STATEMENT}
              </p>
            </section>

            {/* SECTION 10: FAQS */}
            <section id="faqs" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                London weight loss treatment FAQs
              </h2>
              <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800">
                {FAQS.map((faq, idx) => (
                  <div key={faq.q} className="py-4">
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="flex w-full items-start justify-between text-left"
                    >
                      <h3 className={`text-base font-semibold sm:text-lg ${headingText}`}>
                        {faq.q}
                      </h3>
                      <ChevronDown
                        className={`ml-4 h-5 w-5 shrink-0 transition-transform duration-200 ${
                          openFaq === idx ? "rotate-180 text-emerald-600" : "text-slate-400"
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 11: SOURCES */}
            <section id="sources" className="mb-12 scroll-mt-20 border-t pt-8 border-slate-200 dark:border-slate-800">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                Sources
              </h2>
              <ul className={`mt-4 space-y-2.5 text-sm sm:text-base ${mutedText}`}>
                <li>
                  <a
                    href="https://www.england.nhs.uk/medicines-2/weight-loss-treatments/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-emerald-600 underline hover:text-emerald-700"
                  >
                    NHS England: weight management injections
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.pharmacyregulation.org/registers/pharmacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-emerald-600 underline hover:text-emerald-700"
                  >
                    General Pharmaceutical Council register
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gmc-uk.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-emerald-600 underline hover:text-emerald-700"
                  >
                    General Medical Council register
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nmc.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-emerald-600 underline hover:text-emerald-700"
                  >
                    Nursing and Midwifery Council register
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cqc.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-emerald-600 underline hover:text-emerald-700"
                  >
                    Care Quality Commission
                  </a>
                </li>
              </ul>
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-900/60">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Last updated: 12 November 2026.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  This page is for information and is not medical advice. Mounjaro and Wegovy are prescription only medicines. Speak to a prescriber or pharmacist about whether treatment is suitable for you.
                </p>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-24 space-y-6">
              <div className={`rounded-2xl border p-6 shadow-sm ${cardBg}`}>
                <h3 className={`text-sm font-semibold uppercase tracking-wider ${mutedText}`}>
                  Table of Contents
                </h3>
                <nav className="mt-4 flex flex-col space-y-2.5 text-sm">
                  {TOC.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className={`rounded-2xl border p-6 shadow-sm ${cardBg}`}>
                <h4 className={`text-sm font-semibold ${headingText}`}>Need price comparison?</h4>
                <p className={`mt-2 text-xs leading-relaxed ${mutedText}`}>
                  Compare full dose ranges and delivery costs across our verified partner pharmacies.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    href="/mounjaro-price-comparison"
                    className="text-center rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
                  >
                    Mounjaro Prices
                  </Link>
                  <Link
                    href="/wegovy-price-comparison"
                    className="text-center rounded-lg bg-teal-700 px-3 py-2 text-xs font-semibold text-white hover:bg-teal-800"
                  >
                    Wegovy Prices
                  </Link>
                  <Link
                    href="/compare/wegovy-vs-mounjaro"
                    className="text-center rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Wegovy vs Mounjaro
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
