"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleColumn from "@/components/blog/BlogArticleColumn";
import { GuideSection, GuideTable } from "@/components/guide/GuideLayout";
import {
  blogImgPath,
  MOUNJARO_CLICK_CALCULATOR_UK_HERO_WEBP,
  MOUNJARO_CLICK_CALCULATOR_UK_INLINE_WEBP,
} from "./blog-assets";

const HERO_SRC = blogImgPath(MOUNJARO_CLICK_CALCULATOR_UK_HERO_WEBP);
const INLINE_SRC = blogImgPath(MOUNJARO_CLICK_CALCULATOR_UK_INLINE_WEBP);

const TOC = [
  { id: "clicks-per-dose", label: "How Many Clicks is a Dose?" },
  { id: "what-is-kwikpen", label: "What is the Mounjaro KwikPen?" },
  { id: "click-chart", label: "Complete Click Chart (All Strengths)" },
  { id: "maths-behind", label: "The Maths & Formulas" },
  { id: "units-conversion", label: "Units, mL, and mg Conversions" },
  { id: "titration-schedule", label: "Titration Schedule & Pens" },
  { id: "fifth-dose", label: "The Fifth Dose Question" },
  { id: "dose-splitting", label: "Off-Label Dose Splitting" },
  { id: "compare-wegovy", label: "Mounjaro KwikPen vs Wegovy Pen" },
  { id: "faq", label: "FAQs" },
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
            Mounjaro Click Calculator UK
          </span>
        </nav>

        <BlogArticleColumn toc={TOC} darkMode={darkMode}>

          <header className={`mb-8 border-b pb-8 ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            Mounjaro Click Calculator UK: How Many Clicks Is Your Dose? (KwikPen Guide 2026)
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              2 Jun 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              11 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_SRC}
            alt="Mounjaro Click Calculator UK Guide: Visualizing clicks on a KwikPen device"
          />
          <div
            id="guide-article-hero-end"
            aria-hidden
            className="pointer-events-none h-0 w-full overflow-hidden"
          />
        </header>

            <article className={`space-y-8 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              
              <GuideSection darkMode={darkMode} id="clicks-per-dose" heading="How Many Clicks Is a Mounjaro Dose?">
                <p className="text-lg md:text-xl">
                  A full, prescribed Mounjaro dose on the UK KwikPen is always <strong>60 clicks</strong>, regardless of which pen strength you are using. The KwikPen delivers a fixed volume of 0.6 mL per full turn of the dial, and turning the dial until it stops corresponds to exactly 60 clicks.
                </p>
                <p>
                  However, if your prescriber has recommended a partial or titration dose from a higher strength pen, the number of clicks changes. The formula is:
                </p>
                <div className={`p-4 rounded-xl border font-mono text-center text-sm ${darkMode ? "bg-slate-900 border-slate-800 text-emerald-400" : "bg-slate-50 border-slate-200 text-emerald-800"}`}>
                  Clicks = (Desired dose in mg ÷ Pen strength in mg) × 60
                </div>
                <p>
                  For example: if you have a 5 mg pen but your prescribed dose is 2.5 mg:
                </p>
                <div className={`p-3 rounded-lg border font-mono text-center text-xs ${darkMode ? "bg-slate-900/60 border-slate-800" : "bg-slate-100 border-slate-200"}`}>
                  (2.5 ÷ 5) × 60 = 30 clicks
                </div>
                <p>
                  To make this process seamless, you can use our interactive{" "}
                  <Link href="/tools/mounjaro-click-calculator" className="font-semibold text-emerald-600 hover:underline">
                    Mounjaro KwikPen click calculator
                  </Link>
                  , which performs this calculation instantly for any dose and any pen strength, and also includes a full reference chart for all six UK pen strengths.
                </p>
                <blockquote className={`border-l-4 p-4 rounded-r-xl text-sm ${darkMode ? "bg-slate-900/40 border-amber-500 text-slate-300" : "bg-amber-50/50 border-amber-500 text-slate-700"}`}>
                  <strong>Important:</strong> Adjusting your Mounjaro dose by counting clicks is considered off-label use. Always follow the dosage your prescriber has given you. Do not change your dose without clinical guidance.
                </blockquote>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="what-is-kwikpen" heading="What Is the Mounjaro KwikPen and How Does It Work?">
                <p>
                  The Mounjaro KwikPen is the pre-filled, multi-dose injection device used in the UK for all tirzepatide doses. It is manufactured by Eli Lilly and is approved by the MHRA for use in the UK under the brand name Mounjaro.
                </p>
                <p>
                  Key technical facts about the UK Mounjaro KwikPen:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Total volume per pen:</strong> 2.4 mL</li>
                  <li><strong>Volume per full dose:</strong> 0.6 mL</li>
                  <li><strong>Doses per pen:</strong> 4 doses at the prescribed full dose</li>
                  <li><strong>Clicks per full dose:</strong> 60 clicks</li>
                  <li><strong>Available strengths:</strong> 2.5 mg, 5 mg, 7.5 mg, 10 mg, 12.5 mg, and 15 mg</li>
                  <li><strong>Injection frequency:</strong> Once weekly</li>
                </ul>
                <p>
                  The dial on the KwikPen is designed to be turned clockwise until it stops, and this delivers exactly one full prescribed dose of 0.6 mL. Each click of the dial represents one unit in a U-100 measurement context, and 60 clicks equals 60 units, which is exactly 0.6 mL.
                </p>
                <p>
                  This is important to understand when converting between clicks, units, and millilitres, because all three refer to the same volume, just expressed differently.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="click-chart" heading="Complete Mounjaro Click Chart: All Pen Strengths (UK 2026)">
                <p>
                  The tables below show the full click count for standard and common partial doses across all six UK KwikPen strengths. All values are based on the UK KwikPen standard of 60 clicks, which equals 0.6 mL or one full dose.
                </p>

                <div className="mt-8 space-y-8">
                  <div>
                    <h3 className={`text-base font-semibold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                      Mounjaro 2.5 mg Pen: Clicks per Dose
                    </h3>
                    <GuideTable
                      headers={["Dose", "Clicks", "Volume (mL)"]}
                      rows={[
                        { cells: ["2.5 mg (full dose)", "60", "0.60"], highlight: true },
                        { cells: ["1.25 mg (half dose)", "30", "0.30"] },
                      ]}
                    />
                    <p className="mt-2 text-xs text-slate-500 italic">
                      The 2.5 mg pen is the standard starter pen. The full 60-click dose is the only dose typically prescribed from this pen.
                    </p>
                  </div>

                  <div>
                    <h3 className={`text-base font-semibold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                      Mounjaro 5 mg Pen: Clicks per Dose
                    </h3>
                    <GuideTable
                      headers={["Dose", "Clicks", "Volume (mL)"]}
                      rows={[
                        { cells: ["5 mg (full dose)", "60", "0.60"], highlight: true },
                        { cells: ["3.75 mg", "45", "0.45"] },
                        { cells: ["2.5 mg (half dose)", "30", "0.30"] },
                      ]}
                    />
                  </div>

                  <div>
                    <h3 className={`text-base font-semibold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                      Mounjaro 7.5 mg Pen: Clicks per Dose
                    </h3>
                    <GuideTable
                      headers={["Dose", "Clicks", "Volume (mL)"]}
                      rows={[
                        { cells: ["7.5 mg (full dose)", "60", "0.60"], highlight: true },
                        { cells: ["5 mg", "40", "0.40"] },
                        { cells: ["3.75 mg", "30", "0.30"] },
                        { cells: ["2.5 mg", "20", "0.20"] },
                      ]}
                    />
                  </div>

                  <div>
                    <h3 className={`text-base font-semibold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                      Mounjaro 10 mg Pen: Clicks per Dose
                    </h3>
                    <GuideTable
                      headers={["Dose", "Clicks", "Volume (mL)"]}
                      rows={[
                        { cells: ["10 mg (full dose)", "60", "0.60"], highlight: true },
                        { cells: ["7.5 mg", "45", "0.45"] },
                        { cells: ["5 mg", "30", "0.30"] },
                        { cells: ["2.5 mg", "18", "0.18"] },
                      ]}
                    />
                  </div>

                  <div>
                    <h3 className={`text-base font-semibold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                      Mounjaro 12.5 mg Pen: Clicks per Dose
                    </h3>
                    <GuideTable
                      headers={["Dose", "Clicks", "Volume (mL)"]}
                      rows={[
                        { cells: ["12.5 mg (full dose)", "60", "0.60"], highlight: true },
                        { cells: ["10 mg", "48", "0.48"] },
                        { cells: ["7.5 mg", "36", "0.36"] },
                        { cells: ["5 mg", "24", "0.24"] },
                        { cells: ["2.5 mg", "12", "0.12"] },
                      ]}
                    />
                  </div>

                  <div>
                    <h3 className={`text-base font-semibold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                      Mounjaro 15 mg Pen: Clicks per Dose
                    </h3>
                    <GuideTable
                      headers={["Dose", "Clicks", "Volume (mL)"]}
                      rows={[
                        { cells: ["15 mg (full dose)", "60", "0.60"], highlight: true },
                        { cells: ["12.5 mg", "50", "0.50"] },
                        { cells: ["10 mg", "40", "0.40"] },
                        { cells: ["7.5 mg", "30", "0.30"] },
                        { cells: ["5 mg", "24", "0.24"] },
                        { cells: ["2.5 mg", "12", "0.12"] },
                      ]}
                    />
                  </div>
                </div>

                <p className="mt-6 text-sm">
                  All values are calculated using the standard dose proportion formula. To perform an instant interactive calculation for any specific dose and pen, you can access our dedicated{" "}
                  <Link href="/tools/mounjaro-click-calculator" className="font-semibold text-emerald-600 hover:underline">
                    Mounjaro KwikPen click calculator
                  </Link>
                  .
                </p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_SRC}
                  alt="An illustrative guide detailing Mounjaro KwikPen clicks and dose titration configurations"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection darkMode={darkMode} id="maths-behind" heading="The Maths Behind the Mounjaro Click Calculator">
                <p>
                  Understanding why the formula works helps you verify your own calculations and catch errors before injecting.
                </p>
                <h3 className={`text-lg font-medium mt-6 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Why 60 Clicks?
                </h3>
                <p>
                  The UK KwikPen always delivers 0.6 mL per full dose. On a U-100 measurement scale, where 100 units is equal to 1 mL, 0.6 mL equals exactly 60 units, and 60 units corresponds to 60 clicks on the dial.
                </p>
                <p>
                  The relationship holds for all pen strengths because the volume per click is constant at 0.01 mL. What changes between pen strengths is the concentration, which dictates how many milligrams of tirzepatide are dissolved in that 0.6 mL.
                </p>

                <h3 className={`text-lg font-medium mt-6 mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Concentration by Pen Strength (UK KwikPen)
                </h3>
                <GuideTable
                  headers={["Pen Strength", "mg per full dose", "Volume per dose", "Concentration (mg/mL)"]}
                  rows={[
                    { cells: ["2.5 mg", "2.5 mg", "0.6 mL", "4.17 mg/mL"] },
                    { cells: ["5 mg", "5 mg", "0.6 mL", "8.33 mg/mL"] },
                    { cells: ["7.5 mg", "7.5 mg", "0.6 mL", "12.5 mg/mL"] },
                    { cells: ["10 mg", "10 mg", "0.6 mL", "16.67 mg/mL"] },
                    { cells: ["12.5 mg", "12.5 mg", "0.6 mL", "20.83 mg/mL"] },
                    { cells: ["15 mg", "15 mg", "0.6 mL", "25 mg/mL"] },
                  ]}
                />

                <p className="mt-4">
                  Because the volume per click is always 0.01 mL, calculating partial doses is simply a matter of finding the right proportion of 60 clicks.
                </p>

                <h3 className={`text-lg font-medium mt-6 mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  The Core Formula
                </h3>
                <div className={`p-4 rounded-xl border font-mono text-center text-sm ${darkMode ? "bg-slate-900 border-slate-800 text-emerald-400" : "bg-slate-50 border-slate-200 text-emerald-800"}`}>
                  Clicks = (Desired dose mg ÷ Pen strength mg) × 60
                </div>
                <p className="mt-3">
                  And the reverse, if you know the click count and want to verify the dose:
                </p>
                <div className={`p-4 rounded-xl border font-mono text-center text-sm ${darkMode ? "bg-slate-900 border-slate-800 text-emerald-400" : "bg-slate-50 border-slate-200 text-emerald-800"}`}>
                  Dose (mg) = (Clicks ÷ 60) × Pen strength (mg)
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="units-conversion" heading="Mounjaro Units to mL to mg: UK Conversion Table">
                <p>
                  Because U-100 syringes show units rather than mL, and because some patients cross-reference click counts with syringe markings, understanding the unit to mL to mg conversion is practically useful.
                </p>
                <p>
                  On a U-100 syringe, 1 unit is equal to 0.01 mL. Therefore, for the UK KwikPen, turning the dial to 60 clicks represents 60 units, which is exactly 0.6 mL, representing one full prescribed dose.
                </p>
                <p>
                  The mg delivered per unit depends on which pen strength you are using:
                </p>

                <div className="mt-6">
                  <GuideTable
                    headers={["Pen Strength", "mg per unit (U-100)", "mg per 10 units", "mg per 30 units", "mg per 60 units (full dose)"]}
                    rows={[
                      { cells: ["2.5 mg", "0.042 mg", "0.42 mg", "1.25 mg", "2.5 mg"] },
                      { cells: ["5 mg", "0.083 mg", "0.83 mg", "2.5 mg", "5 mg"] },
                      { cells: ["7.5 mg", "0.125 mg", "1.25 mg", "3.75 mg", "7.5 mg"] },
                      { cells: ["10 mg", "0.167 mg", "1.67 mg", "5 mg", "10 mg"] },
                      { cells: ["12.5 mg", "0.042 mg", "2.08 mg", "6.25 mg", "12.5 mg"] },
                      { cells: ["15 mg", "0.25 mg", "2.5 mg", "7.5 mg", "15 mg"] },
                    ]}
                  />
                </div>

                <p className="mt-4">
                  This table is particularly useful for patients whose prescribers specify doses in units or mL rather than mg, or for those cross-checking their dose against a U-100 syringe for reference purposes.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="titration-schedule" heading="Mounjaro Dose Titration Schedule UK: Which Pen for Which Stage?">
                <p>
                  The Mounjaro titration schedule in the UK follows a step-up protocol, with each pen strength designed to align with a specific stage of treatment:
                </p>

                <div className="mt-6">
                  <GuideTable
                    headers={["Week", "Prescribed Dose", "Standard Pen Used", "Clicks"]}
                    rows={[
                      { cells: ["1 to 4", "2.5 mg", "2.5 mg pen", "60"] },
                      { cells: ["5 to 8", "5 mg", "5 mg pen", "60"] },
                      { cells: ["9 to 12", "7.5 mg", "7.5 mg pen", "60"] },
                      { cells: ["13 to 16", "10 mg", "10 mg pen", "60"] },
                      { cells: ["17 to 20", "12.5 mg", "12.5 mg pen", "60"] },
                      { cells: ["21+", "15 mg", "15 mg pen", "60"] },
                    ]}
                  />
                </div>

                <p className="mt-4">
                  In the standard titration protocol, each stage uses the pen strength matching the prescribed dose, which is always 60 clicks. The click calculator becomes most relevant when:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>A prescriber recommends a partial dose</strong> from a higher strength pen, such as 2.5 mg from a 5 mg pen during a slow titration protocol</li>
                  <li><strong>Pen supply issues</strong> require using a different strength than usual</li>
                  <li><strong>A prescriber adjusts mid-cycle</strong> and you need to confirm the click count for the new dose</li>
                </ul>
                <p className="mt-4">
                  For extensive details on the full titration pathway, private costs at each treatment stage, and a live pricing table across multiple pharmacies, feel free to use our independent{" "}
                  <Link href="/mounjaro-price-comparison" className="font-semibold text-emerald-600 hover:underline">
                    Mounjaro private pharmacy price comparison
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="fifth-dose" heading="The &quot;5th Dose&quot; Question: Is There Extra Medication Left in the Pen?">
                <p>
                  One of the most common questions from Mounjaro users in the UK is whether there is residual medication left in the KwikPen after four full doses have been administered.
                </p>
                <p>
                  The factual answer is yes, a small amount of residual liquid typically remains in the pen after four 60-click doses. This is a deliberate feature of the pen design, where a small overfill is included to ensure that all four prescribed doses can be delivered reliably, accounting for priming and dead volume.
                </p>
                <p>
                  However, <strong>Eli Lilly does not endorse or recommend attempting to extract a fifth dose</strong> for several reasons:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>The residual volume is not a guaranteed full dose, since its volume and concentration cannot be verified by the user.</li>
                  <li>Manipulating the pen beyond its designed usage pattern may compromise sterility.</li>
                  <li>The dial mechanism is not calibrated to accurately measure the small residual amount.</li>
                  <li>Attempting a fifth dose is off-label use and carries clinical risk.</li>
                </ul>
                <p>
                  Therefore, while the fifth dose question is understandable from a cost-management perspective, the consistent guidance from Eli Lilly, prescribers, and independent pharmacies is to use four full doses as prescribed and dispose of the pen safely.
                </p>
                <p>
                  For essential safety details on safe KwikPen disposal in the UK, we suggest reviewing our comprehensive{" "}
                  <Link href="/helpful-guides/kwikpen-disposal-recycling-uk" className="font-semibold text-emerald-600 hover:underline">
                    KwikPen disposal and recycling guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="dose-splitting" heading="Off-Label Dose Splitting: What UK Patients Need to Know">
                <p>
                  Some prescribers in the UK recommend a slow or modified titration protocol, in which a patient uses a higher strength pen to deliver a lower dose over a longer period, such as using a 5 mg pen to deliver 2.5 mg doses over eight weeks instead of four.
                </p>
                <p>
                  This approach, while used in clinical practice, is considered off-label because:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>The KwikPen is designed and licensed for single full-dose use per injection.</li>
                  <li>Partial dosing by counting clicks introduces a small margin of mechanical error.</li>
                  <li>Sterility protocols assume one full dose per needle attachment, not multiple partial uses.</li>
                </ul>
                <p>
                  If your prescriber has specifically recommended partial dosing, they will provide guidance on the exact click count and the protocol for sterile technique between doses. You should never begin a partial dosing protocol without explicit clinical instruction.
                </p>
                <p>
                  Our online{" "}
                  <Link href="/tools/mounjaro-click-calculator" className="font-semibold text-emerald-600 hover:underline">
                    Mounjaro click calculator
                  </Link>{" "}
                  is provided for informational reference only, designed to help patients understand how dose volumes translate to click counts without constituting dosing advice.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="compare-wegovy" heading="How the Mounjaro KwikPen Compares to the Wegovy Pen">
                <p>
                  Because many UK patients research both Mounjaro and Wegovy before starting treatment, a brief comparison of the delivery devices is useful:
                </p>

                <div className="mt-6">
                  <GuideTable
                    headers={["Feature", "Mounjaro KwikPen", "Wegovy Pen"]}
                    rows={[
                      { cells: ["Manufacturer", "Eli Lilly", "Novo Nordisk"] },
                      { cells: ["Doses per pen", "4", "1 single dose"] },
                      { cells: ["Volume per dose", "0.6 mL", "0.5 mL"] },
                      { cells: ["Click mechanism", "Yes, with 60 clicks per full dose", "No, it is a single-use auto-injector"] },
                      { cells: ["Pen strengths available", "6 strengths from 2.5 mg to 15 mg", "5 strengths from 0.25 mg to 2.4 mg"] },
                      { cells: ["Injection frequency", "Weekly", "Weekly"] },
                    ]}
                  />
                </div>

                <p className="mt-4">
                  The key difference relevant to click calculations is that Wegovy uses a single-dose auto-injector with no dial, so there is no equivalent click-counting concept. The Mounjaro KwikPen's multi-dose design is what makes the click calculator relevant.
                </p>
                <p>
                  For a full clinical and cost comparison between these two treatments, see our detailed{" "}
                  <Link href="/compare/wegovy-vs-mounjaro" className="font-semibold text-emerald-600 hover:underline">
                    Wegovy vs Mounjaro treatment comparison
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="FAQ: Mounjaro Click Calculator UK">
                <div className="space-y-6 mt-6">
                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      1. How many clicks is a full Mounjaro dose?
                    </h4>
                    <p className="mt-2 text-sm">
                      A full prescribed Mounjaro dose on the UK KwikPen is always <strong>60 clicks</strong>, regardless of the pen strength. This corresponds to 0.6 mL (60 units on a U-100 scale), which is the fixed volume of one complete injection.
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      2. How many clicks is 2.5 mg on a 5 mg Mounjaro pen?
                    </h4>
                    <p className="mt-2 text-sm">
                      Using the formula (2.5 ÷ 5) × 60 = <strong>30 clicks</strong>. This represents half the pen's full dose volume.
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      3. How many clicks is 2.5 mg on a 7.5 mg Mounjaro pen?
                    </h4>
                    <p className="mt-2 text-sm">
                      (2.5 ÷ 7.5) × 60 = <strong>20 clicks</strong>. This is one third of the full dose volume from the 7.5 mg pen.
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      4. How many clicks is 5 mg on a 10 mg Mounjaro pen?
                    </h4>
                    <p className="mt-2 text-sm">
                      (5 ÷ 10) × 60 = <strong>30 clicks</strong>. Half the full dose from a 10 mg pen.
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      5. How many clicks is 7.5 mg on a 15 mg Mounjaro pen?
                    </h4>
                    <p className="mt-2 text-sm">
                      (7.5 ÷ 15) × 60 = <strong>30 clicks</strong>. Half the full dose volume from a 15 mg pen.
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      6. How many mL is one Mounjaro dose in the UK?
                    </h4>
                    <p className="mt-2 text-sm">
                      One full Mounjaro dose on the UK KwikPen is <strong>0.6 mL</strong>, regardless of pen strength. This is different from the US single-dose pen, which delivers 0.5 mL per dose.
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      7. How many units is a Mounjaro dose on a U-100 syringe?
                    </h4>
                    <p className="mt-2 text-sm">
                      On a U-100 syringe (100 units = 1 mL), 0.6 mL = <strong>60 units</strong>. This holds for all UK KwikPen strengths.
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      8. Is counting Mounjaro clicks safe?
                    </h4>
                    <p className="mt-2 text-sm">
                      Counting clicks to measure a partial dose is considered off-label use. The KwikPen is designed for full doses, and partial dosing by clicks introduces a small mechanical margin of error. The{" "}
                      <Link href="/tools/mounjaro-click-calculator" className="font-semibold text-emerald-600 hover:underline">
                        Mounjaro click calculator
                      </Link>{" "}
                      at Healthwise360 is provided for informational understanding only. Always follow your prescriber's dosing instructions.
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      9. Does Mounjaro have a 5th dose hidden in the pen?
                    </h4>
                    <p className="mt-2 text-sm">
                      There is typically a small residual volume after four full doses, but it is not a reliable fifth dose. Eli Lilly does not endorse extracting it. The pen is designed and licensed for four prescribed doses.
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      10. Can I use the same formula for Wegovy click calculations?
                    </h4>
                    <p className="mt-2 text-sm">
                      No. Wegovy is a single-dose auto-injector with no dial or click mechanism. The click calculator concept is specific to the Mounjaro multi-dose KwikPen format.
                    </p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  The Mounjaro KwikPen delivers a full prescribed dose with <strong>60 clicks</strong> across all six UK pen strengths, including 2.5 mg, 5 mg, 7.5 mg, 10 mg, 12.5 mg, and 15 mg. Each click equals 0.01 mL, and 60 clicks equals 0.6 mL, which is the fixed UK dose volume.
                </p>
                <p>
                  For partial or off-label doses prescribed by a clinician, the click count is calculated as:
                </p>
                <div className={`p-4 rounded-xl border font-mono text-center text-sm ${darkMode ? "bg-slate-900 border-slate-800 text-emerald-400" : "bg-slate-50 border-slate-200 text-emerald-800"}`}>
                  Clicks = (Desired dose mg ÷ Pen strength mg) × 60
                </div>
                <p className="mt-4">
                  Key reference points:
                </p>
                <ul className="list-disc pl-5 space-y-2 font-medium">
                  <li>2.5 mg from a 5 mg pen equals <strong>30 clicks</strong></li>
                  <li>5 mg from a 10 mg pen equals <strong>30 clicks</strong></li>
                  <li>7.5 mg from a 15 mg pen equals <strong>30 clicks</strong></li>
                  <li>Full dose from any pen always equals <strong>60 clicks</strong></li>
                </ul>
                <p className="mt-4">
                  Use our interactive{" "}
                  <Link href="/tools/mounjaro-click-calculator" className="font-semibold text-emerald-600 hover:underline">
                    Mounjaro click calculator
                  </Link>{" "}
                  for any custom dose and pen combination. For broader context on Mounjaro treatment, including how it works, UK eligibility, and pricing, see our comprehensive{" "}
                  <Link href="/what-is-mounjaro" className="font-semibold text-emerald-600 hover:underline">
                    what is Mounjaro guide
                  </Link>{" "}
                  and our independent{" "}
                  <Link href="/mounjaro-price-comparison" className="font-semibold text-emerald-600 hover:underline">
                    Mounjaro price comparison tool
                  </Link>
                  .
                </p>
              </GuideSection>

              <hr className={`my-8 ${darkMode ? "border-slate-800" : "border-slate-200"}`} />

              <p className="text-xs text-slate-500 italic">
                This article is for informational purposes only and does not constitute medical advice. All dose calculations are illustrative. Always follow the dosing instructions given by your licensed prescriber. Do not adjust your Mounjaro dose without clinical guidance.
              </p>
            </article>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
