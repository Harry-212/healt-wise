"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import { ArrowLeft, ChevronDown, ExternalLink, Moon, Sun } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import type { UkWeightLossLocation } from "@/lib/data/uk-weight-loss-locations";
import { PRICE_CHECK_DATE_LONG } from "@/lib/data/price-check";

type Props = {
  loc: UkWeightLossLocation;
  shareUrl: string;
};

const TOC = [
  { id: "hero", label: "Overview & Hero" },
  { id: "three-routes", label: "Three Routes at a Glance" },
  { id: "nhs-management", label: "NHS Weight Management" },
  { id: "private-clinics", label: "Private Clinics in London" },
  { id: "online-pharmacies", label: "Online Pharmacies" },
  { id: "selected-partners", label: "Our Selected Partners" },
  { id: "partner-prices", label: "Prices at Our Partners" },
  { id: "check-provider", label: "How to Check Any Provider" },
  { id: "questions-to-ask", label: "Questions to Ask" },
  { id: "how-we-are-paid", label: "How Healthwise360 Is Paid" },
  { id: "faqs", label: "Frequently Asked Questions" },
  { id: "sources-review", label: "Sources & Review Date" },
];

const PARTNER_CARDS = [
  {
    name: "DoseDirect",
    gphc: "9012841",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9012841",
    medicines: "Mounjaro and Wegovy",
    deliveryLondon: "Yes",
    href: "/go/dosedirect",
  },
  {
    name: "i-Prescribe",
    gphc: "9012850",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9012850",
    medicines: "Mounjaro and Wegovy",
    deliveryLondon: "Yes",
    href: "/go/iprescribe",
  },
  {
    name: "Pharmacy + Me",
    gphc: "9012604",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9012604",
    medicines: "Mounjaro and Wegovy",
    deliveryLondon: "Yes",
    href: "/go/pharmacy-plus-me",
  },
  {
    name: "Reach Online Pharmacy",
    gphc: "1093332",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/1093332",
    medicines: "Mounjaro and Wegovy",
    deliveryLondon: "Yes",
    href: "/go/reach",
  },
  {
    name: "SheMed",
    gphc: "9012578",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9012578",
    medicines: "Mounjaro and Wegovy",
    deliveryLondon: "Yes",
    href: "/go/shemed",
  },
  {
    name: "Solira",
    gphc: "9013213",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9013213",
    medicines: "Mounjaro and Wegovy",
    deliveryLondon: "Yes",
    href: "/go/solira",
  },
];

const MOUNJARO_PRICES = [
  { partner: "DoseDirect", p2_5: "£144.99", p5: "£165.99", p7_5: "£217.99", p10: "£241.99", p12_5: "£258.99", p15: "£278.99", fee: "Included" },
  { partner: "i-Prescribe", p2_5: "£160.00", p5: "£190.00", p7_5: "£260.00", p10: "£290.00", p12_5: "£320.00", p15: "£340.00", fee: "Included" },
  { partner: "Pharmacy + Me", p2_5: "£132.99", p5: "£149.99", p7_5: "£205.99", p10: "£232.99", p12_5: "£251.99", p15: "£272.99", fee: "Included" },
  { partner: "Reach Online Pharmacy", p2_5: "£154.99", p5: "£175.99", p7_5: "£241.99", p10: "£265.99", p12_5: "£296.99", p15: "£322.99", fee: "Included" },
  { partner: "SheMed", p2_5: "£229.00", p5: "£229.00", p7_5: "£279.00", p10: "£279.00", p12_5: "£319.00", p15: "£319.00", fee: "Included" },
  { partner: "Solira", p2_5: "£119.99", p5: "£159.99", p7_5: "£219.99", p10: "£249.99", p12_5: "£259.99", p15: "£279.99", fee: "Included" },
];

const WEGOVY_PRICES = [
  { partner: "DoseDirect", p0_25: "£99.99", p0_5: "£114.99", p1: "£119.99", p1_7: "£149.99", p2_4: "£199.99", p7_2: "Not listed", fee: "Included" },
  { partner: "i-Prescribe", p0_25: "£129.99", p0_5: "£149.99", p1: "£169.99", p1_7: "£199.99", p2_4: "£229.99", p7_2: "Not listed", fee: "Included" },
  { partner: "Pharmacy + Me", p0_25: "£80.99", p0_5: "£80.99", p1: "£80.99", p1_7: "£136.99", p2_4: "£192.99", p7_2: "£194.99", fee: "Included" },
  { partner: "Reach Online Pharmacy", p0_25: "£94.99", p0_5: "£99.99", p1: "£103.99", p1_7: "£174.99", p2_4: "£228.99", p7_2: "£272.99", fee: "Included" },
  { partner: "SheMed", p0_25: "£139.00", p0_5: "£139.00", p1: "£139.00", p1_7: "£159.00", p2_4: "£159.00", p7_2: "£239.00", fee: "Included" },
  { partner: "Solira", p0_25: "£64.99", p0_5: "£87.99", p1: "£99.99", p1_7: "£139.99", p2_4: "£189.99", p7_2: "£229.00", fee: "Included" },
];

const FAQS = [
  {
    q: "Can I get weight loss treatment on the NHS in London?",
    a: "Possibly. It depends on your GP, your borough, your integrated care board and whether you meet the criteria. Ask your GP what is available near you.",
  },
  {
    q: "Do I need a prescription for weight loss injections in London?",
    a: "Yes. Mounjaro and Wegovy are prescription only medicines in the UK, wherever you live.",
  },
  {
    q: "How do I get Mounjaro in London?",
    a: "Mounjaro is a prescription only medicine. You can ask your GP about NHS access, or complete an online health check with a registered pharmacy, or see a private clinic. A prescriber decides whether it is suitable for you.",
  },
  {
    q: "How much does weight loss treatment cost in London?",
    a: "It depends on the route. NHS treatment is free at the point of use for people who qualify. Private clinics and online pharmacies set their own prices. Section 7 shows the dated pen prices of our selected partners, with the consultation fee beside them.",
  },
  {
    q: "Is it safe to use an online pharmacy if I live in London?",
    a: "It can be, if the pharmacy is registered with the GPhC and a prescriber reviews your health first. Check the register before you order.",
  },
  {
    q: "Is a clinic better than an online pharmacy?",
    a: "Not necessarily. It depends on how you prefer to be assessed and supported. Either should be registered, and either should check your health before treatment.",
  },
  {
    q: "Can I collect from a pharmacy in London?",
    a: "Most of our partners deliver to your home. Collection depends on the partner.",
  },
  {
    q: "How quickly will my medicine arrive?",
    a: "It differs by provider. Many send by tracked courier within a few days of approval.",
  },
  {
    q: "Do the prices include delivery?",
    a: "Not always. Delivery charges differ by partner, so check them on the partner's site. The consultation fee is shown in the tables above.",
  },
  {
    q: "How do I check a clinic or pharmacy?",
    a: "Use the steps in section 8. Pharmacies are on the GPhC register, and clinics that give medical treatment in England are on the CQC register.",
  },
  {
    q: "Does Healthwise360 recommend a provider?",
    a: "No. We list selected partners from A to Z and do not rank them. A prescriber decides what is suitable for you.",
  },
];

export default function LondonLocationContent({ loc, shareUrl }: Props) {
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
                Weight Loss Treatment in London: NHS, Clinics and Online Pharmacies
              </h1>
              <p className={`mt-6 text-base leading-relaxed sm:text-lg ${mutedText}`}>
                If you live in London, there are three main routes to weight loss treatment, including weight loss injections:
                the NHS, a private clinic and an online pharmacy that delivers to your home. They differ in cost, how you are
                assessed and how much support you get. This guide explains each route, how to check a provider is
                registered, and what our selected provider partners charge. Healthwise360 compares providers. We do not
                prescribe, dispense or deliver medicines.
              </p>
              <p className="mt-4 text-sm italic text-slate-500">
                Healthwise360 may earn commission when visitors use some partner links. Providers cannot pay for a higher ranking.
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

            {/* SECTION 2: THREE ROUTES AT A GLANCE */}
            <section id="three-routes" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                Three routes to weight loss treatment in London
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className={`rounded-2xl border p-6 shadow-sm transition-all ${cardBg}`}>
                  <h3 className={`text-lg font-semibold ${headingText}`}>NHS</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${mutedText}`}>
                    Free at the point of use. Access depends on your GP, your borough and your integrated care board, and there can be a wait.
                  </p>
                </div>
                <div className={`rounded-2xl border p-6 shadow-sm transition-all ${cardBg}`}>
                  <h3 className={`text-lg font-semibold ${headingText}`}>Private clinic</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${mutedText}`}>
                    You are assessed by a clinician, sometimes in person. Costs vary, and clinics that give medical treatment in England should be registered with the Care Quality Commission.
                  </p>
                </div>
                <div className={`rounded-2xl border p-6 shadow-sm transition-all ${cardBg}`}>
                  <h3 className={`text-lg font-semibold ${headingText}`}>Online pharmacy</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${mutedText}`}>
                    You complete an online health check, a prescriber reviews it, and a registered pharmacy sends the medicine to you. The pharmacy should be on the General Pharmaceutical Council register.
                  </p>
                </div>
              </div>
              <p className={`mt-6 text-sm font-medium ${mutedText}`}>
                None of these is right for everyone. A prescriber decides whether a medicine is suitable for you.
              </p>
            </section>

            {/* SECTION 3: NHS WEIGHT MANAGEMENT IN LONDON */}
            <section id="nhs-management" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                NHS weight management in London
              </h2>
              <p className={`mt-4 text-base leading-relaxed ${mutedText}`}>
                Your GP is the first step. They can tell you about NHS weight management support in your area, and refer
                you to a specialist service if you qualify. Support differs between London boroughs, because services are
                arranged by five integrated care boards.
              </p>
              <p className={`mt-4 text-base leading-relaxed ${mutedText}`}>
                In England, GPs can prescribe Mounjaro for weight management to people with the greatest need, following
                NICE guidance. At first this meant people with a BMI of 40 or more and several weight related health
                conditions, and more people will qualify over time. Wegovy is also available through NHS specialist services
                for eligible people.
              </p>
              <p className={`mt-4 text-base leading-relaxed ${mutedText}`}>
                The NHS Digital Weight Management Programme is a free 12 week online programme for adults with
                obesity who also have type 2 diabetes, high blood pressure or both. Your GP can refer you.
              </p>
              <div className="mt-6">
                <Link
                  href="/tools/bmi-calculator"
                  className="inline-flex items-center justify-center rounded-xl border border-emerald-600 bg-transparent px-5 py-2.5 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50 dark:hover:bg-emerald-950/30"
                >
                  Check your BMI
                </Link>
              </div>
            </section>

            {/* SECTION 4: PRIVATE CLINICS IN LONDON */}
            <section id="private-clinics" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                Private weight loss clinics in London
              </h2>
              <p className={`mt-4 text-base leading-relaxed ${mutedText}`}>
                A private weight loss clinic in London may offer weight management with an in person or video consultation.
                Clinics are found across central, north, south, east and west London, from Harley Street and Mayfair to the
                outer boroughs. Before you book, ask:
              </p>
              <ul className={`mt-4 list-disc space-y-2.5 pl-6 text-sm sm:text-base ${mutedText}`}>
                <li>Is the clinic registered with the Care Quality Commission? You can check this on the CQC website.</li>
                <li>Who will assess you, and what is their professional registration?</li>
                <li>Which pharmacy supplies the medicine, and what is its GPhC number?</li>
                <li>What is included in the price, and what is charged extra?</li>
                <li>How often are you reviewed, and who do you contact with a side effect?</li>
              </ul>
              <p className={`mt-4 text-sm italic ${mutedText}`}>
                Prices at clinics differ from online pharmacy prices, and they are not tracked on Healthwise360.
              </p>
            </section>

            {/* SECTION 5: ONLINE PHARMACIES THAT DELIVER TO LONDON */}
            <section id="online-pharmacies" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                Online pharmacies that deliver to London
              </h2>
              <p className={`mt-4 text-base leading-relaxed ${mutedText}`}>
                An online weight loss pharmacy works the same way wherever you live in London. You answer health
                questions, a prescriber reviews your answers, and, if treatment is suitable, a registered pharmacy dispenses
                and sends it. Delivery to London is usually by tracked courier, and many providers deliver within a few days
                of approval. Timing differs by provider.
              </p>
              <p className={`mt-4 text-base leading-relaxed ${mutedText}`}>
                In Great Britain, all pharmacies, including online ones, must be registered with the General Pharmaceutical
                Council. See section 8 for how to check.
              </p>
            </section>

            {/* SECTION 6: OUR SELECTED PROVIDER PARTNERS */}
            <section id="selected-partners" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                Our selected provider partners that deliver to London
              </h2>
              <p className={`mt-4 text-base leading-relaxed ${mutedText}`}>
                These are our selected provider partners, listed from A to Z. The order is never set by commission, affiliate
                status or discount codes. Each was GPhC registered when we last checked on 3 November 2026.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {PARTNER_CARDS.map((p) => (
                  <div key={p.name} className={`flex flex-col justify-between rounded-2xl border p-6 shadow-sm ${cardBg}`}>
                    <div>
                      <h3 className={`text-xl font-bold ${headingText}`}>{p.name}</h3>
                      <p className="mt-2 text-sm text-slate-500">
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
                      <div className="mt-4 space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                        <p><span className="font-medium text-slate-900 dark:text-slate-200">Medicines supplied:</span> {p.medicines}</p>
                        <p><span className="font-medium text-slate-900 dark:text-slate-200">Delivery to London:</span> {p.deliveryLondon}</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link
                        href={p.href}
                        className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700"
                      >
                        Visit {p.name}
                      </Link>
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

            {/* SECTION 7: PRICES AT OUR PARTNERS */}
            <section id="partner-prices" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                Weight loss injection prices in London at our selected partners
              </h2>
              <p className={`mt-4 text-base leading-relaxed ${mutedText}`}>
                These are the prices our partners listed in their price schedules, checked on {PRICE_CHECK_DATE_LONG}.
                Each price is for one pen (four weekly doses) at that strength. The consultation fee is shown for each partner. Delivery charges differ
                by partner, so check them on the partner's site. Prices change, so confirm the current price on the partner's
                site before you pay. Partners are listed A to Z.
              </p>

              {/* Mounjaro Table */}
              <div className="mt-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className={`text-xl font-bold ${headingText}`}>Mounjaro, price per pen by dose</h3>
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
                      {MOUNJARO_PRICES.map((r) => (
                        <tr key={r.partner} className={tableRowHover}>
                          <td className="px-3.5 py-3 font-medium text-slate-900 dark:text-slate-100">{r.partner}</td>
                          <td className="px-3 py-3">{r.p2_5}</td>
                          <td className="px-3 py-3">{r.p5}</td>
                          <td className="px-3 py-3">{r.p7_5}</td>
                          <td className="px-3 py-3">{r.p10}</td>
                          <td className="px-3 py-3">{r.p12_5}</td>
                          <td className="px-3 py-3">{r.p15}</td>
                          <td className="px-3 py-3 text-emerald-600 font-medium">{r.fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Wegovy Table */}
              <div className="mt-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className={`text-xl font-bold ${headingText}`}>Wegovy, price per pen by dose</h3>
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
                      {WEGOVY_PRICES.map((r) => (
                        <tr key={r.partner} className={tableRowHover}>
                          <td className="px-3.5 py-3 font-medium text-slate-900 dark:text-slate-100">{r.partner}</td>
                          <td className="px-3 py-3">{r.p0_25}</td>
                          <td className="px-3 py-3">{r.p0_5}</td>
                          <td className="px-3 py-3">{r.p1}</td>
                          <td className="px-3 py-3">{r.p1_7}</td>
                          <td className="px-3 py-3">{r.p2_4}</td>
                          <td className="px-3 py-3">{r.p7_2}</td>
                          <td className="px-3 py-3 text-emerald-600 font-medium">{r.fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className={`mt-6 text-sm ${mutedText}`}>
                A low price for one dose does not show the full cost of treatment, because the dose goes up over time and
                fees differ. Our comparison pages show every dose side by side.
              </p>
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

            {/* SECTION 8: HOW TO CHECK ANY PROVIDER */}
            <section id="check-provider" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                How to check a weight loss provider is registered
              </h2>
              <ol className={`mt-4 list-decimal space-y-3 pl-6 text-sm sm:text-base ${mutedText}`}>
                <li>Find the pharmacy's legal name and GPhC number on its website, usually in the footer.</li>
                <li>Look it up on the GPhC register and check that the name and address match.</li>
                <li>Check a clinic on the CQC register, if it gives medical treatment in England.</li>
                <li>Check the prescriber. A doctor, pharmacist or nurse prescriber has a professional registration you can search.</li>
                <li>Look for a health check. A real provider asks about your weight, health and medicines before any medicine is supplied.</li>
                <li>Walk away from sellers on social media, messaging apps or beauty salons, and from anyone who offers prescription medicine without a prescription.</li>
              </ol>
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

            {/* SECTION 9: QUESTIONS TO ASK A PROVIDER */}
            <section id="questions-to-ask" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                Questions to ask before you start
              </h2>
              <ul className={`mt-4 list-disc space-y-2.5 pl-6 text-sm sm:text-base ${mutedText}`}>
                <li>Who will assess me, and how can I check their registration?</li>
                <li>Which pharmacy will dispense my medicine?</li>
                <li>What is the full cost, including delivery and any consultation fee?</li>
                <li>Will the price change when my dose goes up?</li>
                <li>How often will I be reviewed?</li>
                <li>Who can I contact about a side effect?</li>
                <li>Will you tell my GP?</li>
                <li>What happens if my application is declined?</li>
              </ul>
            </section>

            {/* SECTION 10: HOW HEALTHWISE360 IS PAID */}
            <section id="how-we-are-paid" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                How Healthwise360 is paid
              </h2>
              <p className={`mt-4 text-base leading-relaxed ${mutedText}`}>
                Healthwise360 is a comparison and information site. We do not sell, prescribe or send medicines. Our
                selected provider partners are listed A to Z. Healthwise360 may earn commission when visitors use some partner links. Commercial relationships do not determine the ordering of providers in our price-sorted comparison tables. Providers cannot pay for a higher ranking. Promotional prices and discount codes are displayed separately from standard retail prices.
              </p>
            </section>

            {/* SECTION 11: FAQS */}
            <section id="faqs" className="mb-12 scroll-mt-20">
              <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingText}`}>
                Frequently asked questions
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

            {/* SECTION 12: SOURCES, REVIEW DATE AND MEDICAL NOTE */}
            <section id="sources-review" className="mb-12 scroll-mt-20 border-t pt-8 border-slate-200 dark:border-slate-800">
              <h2 className={`text-xl font-bold ${headingText}`}>Sources</h2>
              <p className={`mt-3 text-sm leading-relaxed ${mutedText}`}>
                General Pharmaceutical Council, register of pharmacies. Care Quality Commission, find a service. NHS,
                weight management and the NHS Digital Weight Management Programme. NICE, tirzepatide for managing
                overweight and obesity (TA1026). NICE, semaglutide for managing overweight and obesity (TA875). MHRA,
                buying medicines safely online.
              </p>
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-900/60">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Last updated: 3 November 2026.
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
