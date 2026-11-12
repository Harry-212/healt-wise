"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import { ArrowLeft, ChevronDown, ExternalLink, Moon, Sun } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import type { UkWeightLossLocation } from "@/lib/data/uk-weight-loss-locations";
import { PRICE_CHECK_DATE_LONG } from "@/lib/data/price-check";
import { getProvider } from "@/lib/data/providers";
import {
  MOUNJARO_DOSE_KEYS,
  MOUNJARO_UK_COMPARE_PROVIDERS,
  type MounjaroUkProviderCompare,
} from "@/lib/data/mounjaro-uk-compare-providers";
import {
  WEGOVY_DOSE_KEYS,
  WEGOVY_UK_COMPARE_PROVIDERS,
  formatWegovyPriceCell,
  wegovyPriceAmount,
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

const TOC = [
  { id: "hero", label: "Overview" },
  { id: "what-this-page-covers", label: "What this page covers" },
  { id: "three-routes", label: "Three routes to treatment" },
  { id: "selected-partners", label: "Selected online partners" },
  { id: "partner-prices", label: "Injection prices for London delivery" },
  { id: "how-ordering-works", label: "How ordering works" },
  { id: "check-provider", label: "Check a provider is registered" },
  { id: "questions-to-ask", label: "Questions to ask" },
  { id: "how-we-are-paid", label: "How Healthwise360 is paid" },
  { id: "faqs", label: "London weight loss FAQs" },
  { id: "sources-review", label: "Sources" },
];

const PARTNER_CARDS = [
  {
    name: "DoseDirect",
    gphc: "9012841",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9012841",
    medicines: "Mounjaro and Wegovy",
    deliveryLondon: "Tracked cold-chain courier to London",
    providerId: "dosedirect",
    bio: "DoseDirect is a GPhC-registered UK distance-selling pharmacy offering weight management treatments including Mounjaro and Wegovy. Treatment involves an online clinical questionnaire reviewed by a registered prescriber, followed by tracked cold-chain delivery.",
    includes: "Consultation and tracked cold-chain delivery included",
  },
  {
    name: "i-Prescribe",
    gphc: "9012850",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9012850",
    medicines: "Mounjaro and Wegovy",
    deliveryLondon: "Tracked courier delivery to London",
    providerId: "i-prescribe",
    bio: "i-Prescribe is a registered UK online pharmacy service providing prescription weight loss treatments. Patients complete a digital consultation reviewed by a UK-registered healthcare professional, with approved medications dispatched via tracked delivery.",
    includes: "Consultation and tracked delivery included",
  },
  {
    name: "Pharmacy + Me",
    gphc: "9012604",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9012604",
    medicines: "Mounjaro and Wegovy",
    deliveryLondon: "Tracked delivery to London",
    providerId: "pharmacy-me",
    bio: "Pharmacy + Me is a digital healthcare service offering weight management support and treatments. Consultations are completed online and assessed by qualified prescribers before dispatch from a registered dispensing pharmacy.",
    includes: "Consultation included; standard delivery charged separately",
  },
  {
    name: "Reach Online Pharmacy",
    gphc: "1093332",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/1093332",
    medicines: "Mounjaro and Wegovy",
    deliveryLondon: "Tracked delivery to London",
    providerId: "reach-online-pharmacy",
    bio: "Reach Online Pharmacy is a GPhC-registered independent UK pharmacy providing weight management care. Patients complete an online assessment reviewed by prescribers, with medication delivered directly to London and UK addresses.",
    includes: "Consultation included; standard delivery charged separately",
  },
  {
    name: "SheMed",
    gphc: "9012578",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9012578",
    medicines: "Mounjaro and Wegovy",
    deliveryLondon: "Discreet tracked delivery to London",
    providerId: "shemed",
    bio: "SheMed is a dedicated UK digital health service specialising in weight management treatments. The pathway includes an online health questionnaire reviewed by registered prescribers, with medication delivered to your door.",
    includes: "Consultation and tracked delivery included",
  },
  {
    name: "Solira",
    gphc: "9013213",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9013213",
    medicines: "Mounjaro and Wegovy",
    deliveryLondon: "Discreet tracked delivery to London",
    providerId: "solira",
    bio: "Solira is a registered UK online healthcare provider providing personalised weight loss treatments. Patients complete an online medical assessment followed by prescriber review and discreet tracked delivery.",
    includes: "Consultation and delivery included",
  },
];

/** Consultation column: derived from the central price rows, never typed here. */
function consultationLabel(included: boolean): string {
  return included ? "Included" : "Not included";
}

export default function LondonLocationContent({
  loc,
  shareUrl,
  mounjaroProviders = MOUNJARO_UK_COMPARE_PROVIDERS,
  wegovyProviders = WEGOVY_UK_COMPARE_PROVIDERS,
}: Props) {
  // Partners stay A to Z (PARTNER_CARDS order); every price comes from the central rows.
  const mounjaroRows = PARTNER_CARDS.flatMap((c) => {
    const row =
      mounjaroProviders.find((p) => p.id === c.providerId) ??
      MOUNJARO_UK_COMPARE_PROVIDERS.find((p) => p.id === c.providerId);
    return row ? [{ name: c.name, row }] : [];
  });
  const wegovyRows = PARTNER_CARDS.flatMap((c) => {
    const row =
      wegovyProviders.find((p) => p.id === c.providerId) ??
      WEGOVY_UK_COMPARE_PROVIDERS.find((p) => p.id === c.providerId);
    return row ? [{ name: c.name, row }] : [];
  });

  const formatMounjaro = (n: number) => (n > 0 ? `£${n.toFixed(2)}` : "Not listed");

  const lowestWegovyStart = useMemo(() => {
    const prices = wegovyProviders
      .map((p) => wegovyPriceAmount(p.prices["0.25mg"]))
      .filter((n): n is number => n !== null && n > 0);
    return prices.length > 0 ? Math.min(...prices) : 0;
  }, [wegovyProviders]);

  const lowestWegovyTop = useMemo(() => {
    const prices = wegovyProviders
      .map((p) => wegovyPriceAmount(p.prices["2.4mg"]))
      .filter((n): n is number => n !== null && n > 0);
    return prices.length > 0 ? Math.min(...prices) : 0;
  }, [wegovyProviders]);

  const lowestMounjaroStart = useMemo(() => {
    const prices = mounjaroProviders
      .map((p) => p.prices["2.5mg"])
      .filter((n) => typeof n === "number" && n > 0);
    return prices.length > 0 ? Math.min(...prices) : 0;
  }, [mounjaroProviders]);

  const lowestMounjaroTop = useMemo(() => {
    const prices = mounjaroProviders
      .map((p) => p.prices["15mg"])
      .filter((n) => typeof n === "number" && n > 0);
    return prices.length > 0 ? Math.min(...prices) : 0;
  }, [mounjaroProviders]);

  const partnerStartingPrice = (providerId: string): string => {
    const m =
      mounjaroProviders.find((p) => p.id === providerId) ??
      MOUNJARO_UK_COMPARE_PROVIDERS.find((p) => p.id === providerId);
    const w =
      wegovyProviders.find((p) => p.id === providerId) ??
      WEGOVY_UK_COMPARE_PROVIDERS.find((p) => p.id === providerId);
    const mStart = m?.prices["2.5mg"] && m.prices["2.5mg"] > 0 ? m.prices["2.5mg"] : null;
    const wCell = w?.prices["0.25mg"];
    const wStart = wCell ? wegovyPriceAmount(wCell) : null;
    const candidates = [mStart, wStart].filter((n): n is number => n !== null && n > 0);
    if (candidates.length === 0) return "Not listed";
    return formatMounjaro(Math.min(...candidates));
  };

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
      a: `Prices are the same for London addresses as for the rest of the UK. The lowest starting price we found was ${formatMounjaro(lowestWegovyStart)} for Wegovy and ${formatMounjaro(lowestMounjaroStart)} for Mounjaro on ${PRICE_CHECK_DATE_LONG}. See section 5 and the full price pages.`,
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
      a: "Not always. The prices we show are standard prices and may not include delivery or consultation fees. Check the final total with the partner. See section 4.",
    },
    {
      q: "Does Healthwise360 recommend a provider?",
      a: "No. We compare selected partners and show their prices and details. See section 9 for how we are paid.",
    },
  ];

  const [darkMode, setDarkMode] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

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
          <BlogArticleHeroImage
            src={loc.hero.url}
            alt={loc.hero.alt}
          />
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
                If you live in London and want weight loss treatment, you can use the NHS, a private clinic
                or an online pharmacy. This page compares the selected online partner pharmacies that
                deliver to London addresses. Prices were checked on {PRICE_CHECK_DATE_LONG}.
              </p>
              <p className="mt-4 text-sm italic text-slate-500">
                Healthwise360 may earn commission when visitors use some partner links. Commercial relationships do not determine the ordering of providers in our price-sorted comparison tables. Providers cannot pay for a higher ranking. Promotional prices and discount codes are displayed separately from standard retail prices.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
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
              <div className={`mt-4 rounded-2xl border p-6 leading-relaxed ${cardBg} ${mutedText} space-y-4`}>
                <p>
                  The partners on this page are online services. They carry out the consultation online and
                  deliver to your home in London. We do not claim that any partner has a clinic in London,
                  and we do not list London clinics. If you want an in person clinic, the NHS and private clinic
                  routes below explain where to start.
                </p>
                <p>
                  We compare selected partners, not the whole UK market. Weight loss injections are
                  prescription only medicines, so a prescriber must decide if treatment is suitable for you.
                  This page is information only, not medical advice.
                </p>
              </div>
            </section>

            {/* SECTION 3: THREE ROUTES AT A GLANCE */}
            <section id="three-routes" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                Three routes to weight loss treatment in London
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className={`rounded-2xl border p-6 shadow-sm transition-all ${cardBg}`}>
                  <h3 className={`text-lg font-semibold ${headingText}`}>3.1 NHS</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${mutedText}`}>
                    The NHS offers weight management services to people who meet set criteria, and access
                    depends on your area. Ask your GP, or see NHS England weight management injections
                    for the official guidance. Our guide{" "}
                    <Link href="/blog/can-you-get-mounjaro-on-the-nhs" className="text-emerald-600 underline hover:text-emerald-700">
                      Can you get Mounjaro on the NHS?
                    </Link>{" "}
                    has more detail.
                  </p>
                </div>
                <div className={`rounded-2xl border p-6 shadow-sm transition-all ${cardBg}`}>
                  <h3 className={`text-lg font-semibold ${headingText}`}>3.2 Private clinic</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${mutedText}`}>
                    A private clinic in London offers face to face appointments, usually at a higher cost. Check
                    that the clinic and its prescriber are registered before you book (see section 7). We do not
                    compare London clinics on this page.
                  </p>
                </div>
                <div className={`rounded-2xl border p-6 shadow-sm transition-all ${cardBg}`}>
                  <h3 className={`text-lg font-semibold ${headingText}`}>3.3 Online pharmacy</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${mutedText}`}>
                    An online pharmacy carries out the consultation by form or video, and delivers the
                    medicine to your address. This is the route our selected partners offer, and it is what the
                    rest of this page compares.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: OUR SELECTED PROVIDER PARTNERS */}
            <section id="selected-partners" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                Our selected online partners that deliver to London
              </h2>
              <p className={`mt-4 text-base leading-relaxed ${mutedText}`}>
                All six partners below are online services that deliver to London addresses. Prices checked on {PRICE_CHECK_DATE_LONG}.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {PARTNER_CARDS.map((p) => (
                  <div key={p.name} className={`flex flex-col justify-between rounded-2xl border p-6 shadow-sm ${cardBg}`}>
                    <div>
                      <h3 className={`text-xl font-bold ${headingText}`}>{p.name}</h3>
                      <p className="mt-1 text-xs text-slate-500">
                        GPhC registration number{" "}
                        <a
                          href={p.gphcUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-emerald-600 underline hover:text-emerald-700"
                        >
                          {p.gphc}
                        </a>
                      </p>
                      <p className={`mt-3 text-sm leading-relaxed ${mutedText}`}>
                        {p.bio}
                      </p>
                      <div className="mt-4 space-y-1.5 rounded-xl border border-slate-200/80 bg-white/70 p-3.5 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
                        <p><span className="font-semibold text-slate-900 dark:text-slate-100">Starting price:</span> {partnerStartingPrice(p.providerId)}</p>
                        <p><span className="font-semibold text-slate-900 dark:text-slate-100">Includes:</span> {p.includes}</p>
                        <p><span className="font-semibold text-slate-900 dark:text-slate-100">Delivery:</span> {p.deliveryLondon}</p>
                      </div>
                      <div className="mt-3">
                        <Link
                          href={`/pharmacies/${p.providerId}`}
                          className="text-xs font-semibold text-emerald-600 underline hover:text-emerald-700"
                        >
                          Read full {p.name} review
                        </Link>
                      </div>
                    </div>
                    <div className="mt-6">
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
                        className="hw360-cta inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700"
                      >
                        Visit {p.name}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/pharmacies"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  See all our partners
                </Link>
              </div>
            </section>

            {/* SECTION 5: PRICES AT OUR PARTNERS */}
            <section id="partner-prices" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                Weight loss injection prices for London delivery
              </h2>
              <p className={`mt-4 text-base leading-relaxed ${mutedText}`}>
                Prices do not change by postcode, because these partners deliver across the UK. Here is a summary
                by medicine, checked on {PRICE_CHECK_DATE_LONG}. For every dose and every partner, use the full price comparison pages.
              </p>

              {/* Summary Table */}
              <div className="mt-6">
                <div className={`overflow-x-auto rounded-xl border ${cardBorder}`}>
                  <table className={`min-w-full divide-y text-left text-sm ${tableBorderCls}`}>
                    <thead className={tableHeaderBg}>
                      <tr>
                        <th className="px-4 py-3 font-semibold">Medicine</th>
                        <th className="px-4 py-3 font-semibold">Starting dose, lowest price</th>
                        <th className="px-4 py-3 font-semibold">Usual top dose, lowest price</th>
                        <th className="px-4 py-3 font-semibold">Full price page</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${tableBorderCls}`}>
                      <tr className={tableRowHover}>
                        <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">Wegovy</td>
                        <td className="px-4 py-3">{formatMounjaro(lowestWegovyStart)} (0.25 mg)</td>
                        <td className="px-4 py-3">{formatMounjaro(lowestWegovyTop)} (2.4 mg)</td>
                        <td className="px-4 py-3">
                          <Link href="/wegovy-price-comparison" className="font-semibold text-emerald-600 underline hover:text-emerald-700">
                            Wegovy price comparison
                          </Link>
                        </td>
                      </tr>
                      <tr className={tableRowHover}>
                        <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">Mounjaro</td>
                        <td className="px-4 py-3">{formatMounjaro(lowestMounjaroStart)} (2.5 mg)</td>
                        <td className="px-4 py-3">{formatMounjaro(lowestMounjaroTop)} (15 mg)</td>
                        <td className="px-4 py-3">
                          <Link href="/mounjaro-price-comparison" className="font-semibold text-emerald-600 underline hover:text-emerald-700">
                            Mounjaro price comparison
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className={`mt-4 text-sm ${mutedText}`}>
                A low price for one dose does not show the full cost of treatment, because the dose goes up over time and
                fees differ. Our comparison pages show every dose side by side.
              </p>

              {/* Detailed Breakdown Tables */}
              <div className="mt-8 space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className={`text-lg font-bold ${headingText}`}>Mounjaro, price per pen by dose</h3>
                    <span className="text-xs text-slate-500 font-medium">Checked {PRICE_CHECK_DATE_LONG}</span>
                  </div>
                  <div className={`overflow-x-auto rounded-xl border ${cardBorder}`}>
                    <table className={`min-w-full divide-y text-left text-xs sm:text-sm ${tableBorderCls}`}>
                      <thead className={tableHeaderBg}>
                        <tr>
                          <th className="px-3.5 py-3 font-semibold">Partner</th>
                          <th className="px-3 py-3 font-semibold">2.5 mg</th>
                          <th className="px-3 py-3 font-semibold">5 mg</th>
                          <th className="px-3 py-3 font-semibold">7.5 mg</th>
                          <th className="px-3 py-3 font-semibold">10 mg</th>
                          <th className="px-3 py-3 font-semibold">12.5 mg</th>
                          <th className="px-3 py-3 font-semibold">15 mg</th>
                          <th className="px-3 py-3 font-semibold">Consultation</th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${tableBorderCls}`}>
                        {mounjaroRows.map(({ name, row }) => (
                          <tr key={row.id} className={tableRowHover}>
                            <td className="px-3.5 py-3 font-medium text-slate-900 dark:text-slate-100">{name}</td>
                            {MOUNJARO_DOSE_KEYS.map((k) => (
                              <td key={k} className="px-3 py-3">{formatMounjaro(row.prices[k])}</td>
                            ))}
                            <td className="px-3 py-3 text-emerald-600 font-medium">{consultationLabel(row.consultationIncluded)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className={`text-lg font-bold ${headingText}`}>Wegovy, price per pen by dose</h3>
                    <span className="text-xs text-slate-500 font-medium">Checked {PRICE_CHECK_DATE_LONG}</span>
                  </div>
                  <div className={`overflow-x-auto rounded-xl border ${cardBorder}`}>
                    <table className={`min-w-full divide-y text-left text-xs sm:text-sm ${tableBorderCls}`}>
                      <thead className={tableHeaderBg}>
                        <tr>
                          <th className="px-3.5 py-3 font-semibold">Partner</th>
                          <th className="px-3 py-3 font-semibold">0.25 mg</th>
                          <th className="px-3 py-3 font-semibold">0.5 mg</th>
                          <th className="px-3 py-3 font-semibold">1 mg</th>
                          <th className="px-3 py-3 font-semibold">1.7 mg</th>
                          <th className="px-3 py-3 font-semibold">2.4 mg</th>
                          <th className="px-3 py-3 font-semibold">7.2 mg</th>
                          <th className="px-3 py-3 font-semibold">Consultation</th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${tableBorderCls}`}>
                        {wegovyRows.map(({ name, row }) => (
                          <tr key={row.id} className={tableRowHover}>
                            <td className="px-3.5 py-3 font-medium text-slate-900 dark:text-slate-100">{name}</td>
                            {WEGOVY_DOSE_KEYS.map((k) => (
                              <td key={k} className="px-3 py-3">
                                {row.prices[k] === "N/A" || row.prices[k] === "TBC"
                                  ? "Not listed"
                                  : formatWegovyPriceCell(row.prices[k])}
                              </td>
                            ))}
                            <td className="px-3 py-3 text-emerald-600 font-medium">{consultationLabel(row.consultationIncluded)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
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
              <p className={`mt-4 text-base leading-relaxed ${mutedText}`}>
                Ordering weight loss treatment online involves four clear steps:
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className={`rounded-xl border p-5 ${cardBg}`}>
                  <span className="inline-block rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    Step 1
                  </span>
                  <h3 className={`mt-2 font-semibold ${headingText}`}>Online consultation</h3>
                  <p className={`mt-1 text-sm ${mutedText}`}>
                    You complete a digital questionnaire about your weight, medical history and any current medications.
                  </p>
                </div>
                <div className={`rounded-xl border p-5 ${cardBg}`}>
                  <span className="inline-block rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    Step 2
                  </span>
                  <h3 className={`mt-2 font-semibold ${headingText}`}>Prescriber review</h3>
                  <p className={`mt-1 text-sm ${mutedText}`}>
                    A registered UK prescriber reviews your answers to decide if the treatment is clinically suitable and safe for you.
                  </p>
                </div>
                <div className={`rounded-xl border p-5 ${cardBg}`}>
                  <span className="inline-block rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    Step 3
                  </span>
                  <h3 className={`mt-2 font-semibold ${headingText}`}>Dispensing</h3>
                  <p className={`mt-1 text-sm ${mutedText}`}>
                    If approved, a registered UK pharmacy dispenses your prescription.
                  </p>
                </div>
                <div className={`rounded-xl border p-5 ${cardBg}`}>
                  <span className="inline-block rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    Step 4
                  </span>
                  <h3 className={`mt-2 font-semibold ${headingText}`}>Tracked delivery</h3>
                  <p className={`mt-1 text-sm ${mutedText}`}>
                    Your medication is dispatched via tracked courier (with cold-chain packaging for temperature-sensitive pens) to your London address.
                  </p>
                </div>
              </div>
              <div className={`mt-6 rounded-xl border p-5 ${cardBg}`}>
                <p className={`text-sm leading-relaxed ${mutedText}`}>
                  Always check whether the consultation fee is included, what the delivery fee is, whether the price changes on the next order and whether your dose is reviewed.
                </p>
                <p className={`mt-3 text-sm leading-relaxed ${mutedText}`}>
                  Collecting from a pharmacy in London is not something our partners offer. If you want to collect or see someone in person, ask your GP or a local registered pharmacy.
                </p>
              </div>
            </section>

            {/* SECTION 7: HOW TO CHECK ANY PROVIDER */}
            <section id="check-provider" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                How to check a weight loss provider is registered
              </h2>
              <div className={`mt-4 space-y-3 rounded-2xl border p-6 text-sm leading-relaxed sm:text-base ${cardBg} ${mutedText}`}>
                <p>
                  <strong className={headingText}>Online pharmacy:</strong> it should be registered with the General Pharmaceutical Council (GPhC), and show its registration number. Check it on the GPhC register.
                </p>
                <p>
                  <strong className={headingText}>Prescriber:</strong> check the doctor, pharmacist or nurse on their professional register: General Medical Council (GMC), General Pharmaceutical Council (GPhC) or Nursing and Midwifery Council (NMC).
                </p>
                <p>
                  <strong className={headingText}>Private clinic in England:</strong> check whether it is registered with the Care Quality Commission (CQC) at cqc.org.uk.
                </p>
                <p className="font-medium text-amber-700 dark:text-amber-400">
                  Be careful with sites that ask no health questions or show no registration number.
                </p>
              </div>
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

            {/* SECTION 8: QUESTIONS TO ASK A PROVIDER */}
            <section id="questions-to-ask" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                Questions to ask before you start
              </h2>
              <ul className={`mt-4 list-disc space-y-2.5 pl-6 text-sm sm:text-base ${mutedText}`}>
                <li>Is the pharmacy and the prescriber registered, and can I see the numbers?</li>
                <li>What does the price include: consultation, delivery, follow up?</li>
                <li>Does the price change when my dose changes, or on repeat orders?</li>
                <li>How will the medicine be delivered and kept cold?</li>
                <li>Who do I contact if I have side effects or a question?</li>
                <li>Is my dose reviewed by a prescriber?</li>
              </ul>
            </section>

            {/* SECTION 9: HOW HEALTHWISE360 IS PAID */}
            <section id="how-we-are-paid" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                How Healthwise360 is paid
              </h2>
              <p className={`mt-4 text-base leading-relaxed ${mutedText}`}>
                Healthwise360 is a comparison and information site. We do not sell, prescribe or send medicines. Our
                selected provider partners are listed A to Z. Healthwise360 may earn commission when visitors use some partner links. Commercial relationships do not determine the ordering of providers in our price-sorted comparison tables. Providers cannot pay for a higher ranking. Promotional prices and discount codes are displayed separately from standard retail prices.
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

            {/* SECTION 11: SOURCES, REVIEW DATE AND MEDICAL NOTE */}
            <section id="sources-review" className="mb-12 scroll-mt-20 border-t pt-8 border-slate-200 dark:border-slate-800">
              <h2 className={`text-xl font-bold ${headingText}`}>Sources</h2>
              <ul className={`mt-3 list-disc space-y-1.5 pl-6 text-sm leading-relaxed ${mutedText}`}>
                <li>
                  <a href="https://www.england.nhs.uk/" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600">
                    NHS England: weight management injections
                  </a>
                </li>
                <li>
                  <a href="https://www.pharmacyregulation.org/registers/pharmacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600">
                    General Pharmaceutical Council register
                  </a>
                </li>
                <li>
                  <a href="https://www.gmc-uk.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600">
                    General Medical Council register
                  </a>
                </li>
                <li>
                  <a href="https://www.nmc.org.uk/" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600">
                    Nursing and Midwifery Council register
                  </a>
                </li>
                <li>
                  <a href="https://www.cqc.org.uk/" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600">
                    Care Quality Commission
                  </a>
                </li>
              </ul>
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-900/60">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Last updated: {PRICE_CHECK_DATE_LONG}.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  This page is for information and is not medical advice. Mounjaro and Wegovy are prescription only
                  medicines. Speak to a prescriber or pharmacist about whether treatment is suitable for you.
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
