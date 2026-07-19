"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleColumn from "@/components/blog/BlogArticleColumn";
import { GuideSection, GuideTable } from "@/components/guide/GuideLayout";
import {
  blogImgPath,
  WEGOVY_CLICK_CALCULATOR_UK_HERO_WEBP,
} from "./blog-assets";

const HERO_SRC = blogImgPath(WEGOVY_CLICK_CALCULATOR_UK_HERO_WEBP);
const linkClass = "font-medium text-emerald-600 hover:underline";

const TOC = [
  { id: "how-many-clicks", label: "How many clicks is a dose?" },
  { id: "flextouch", label: "What is the Wegovy FlexTouch?" },
  { id: "74-reference", label: "The 74-click reference" },
  { id: "click-chart", label: "Wegovy click chart (all strengths)" },
  { id: "7-2-update", label: "The Wegovy 7.2 mg update" },
  { id: "titration", label: "UK titration schedule" },
  { id: "vs-mounjaro", label: "Wegovy clicks vs Mounjaro clicks" },
  { id: "patient-leaflet", label: "What the patient leaflet says" },
  { id: "cost-per-dose", label: "Cost per dose estimates" },
  { id: "uk-vs-us", label: "UK FlexTouch vs US pen" },
  { id: "safe-use", label: "Safe use reminders" },
  { id: "faq", label: "FAQ" },
  { id: "conclusion", label: "Conclusion" },
];

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);
  const h3 = `mb-3 mt-6 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`;

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
            Wegovy Click Calculator UK
          </span>
        </nav>

        <BlogArticleColumn toc={TOC} darkMode={darkMode}>
          <header
            className={`mb-8 border-b pb-8 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
          >
            <h1
              className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              Wegovy Click Calculator UK: How Many Clicks Per Dose? FlexTouch
              Guide 2026
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
                12 min read
              </span>
            </div>

            <BlogArticleHeroImage
              src={HERO_SRC}
              alt="Wegovy FlexTouch click calculator UK guide showing dose clicks and pen strengths"
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
              id="how-many-clicks"
              heading="How Many Clicks Is a Wegovy Dose in the UK?"
            >
              <p className="text-lg md:text-xl font-medium">
                The Wegovy FlexTouch pen in the UK uses{" "}
                <strong>74 clicks as the mathematical reference for one full
                prescribed dose</strong>
                , regardless of which pen strength you are using. This means that
                a full 2.4 mg maintenance dose delivered from a 2.4 mg FlexTouch
                pen corresponds to 74 selector clicks, and a full 0.25 mg starter
                dose from a 0.25 mg pen also corresponds to 74 clicks.
              </p>
              <p>
                However, and this is the critical safety point that every Wegovy
                click calculator must make clear,{" "}
                <strong>
                  Novo Nordisk&apos;s official patient leaflet instructs users
                  not to set a Wegovy dose by counting clicks
                </strong>
                . The selector on the FlexTouch pen makes a clicking sound when
                turned, but this sound can vary depending on the direction in
                which the selector is moved. The correct method is always to use
                the dose counter displayed on the pen, following the instructions
                from your prescriber.
              </p>
              <p>
                The{" "}
                <Link href="/tools/wegovy-click-calculator" className={linkClass}>
                  Wegovy click calculator at Healthwise360
                </Link>{" "}
                provides mathematical dose estimates only, for educational
                understanding of how FlexTouch pen mechanics work, not as a
                dosing instruction. For broader treatment context, you can also
                read{" "}
                <Link href="/what-is-wegovy" className={linkClass}>
                  what Wegovy is
                </Link>{" "}
                before using any dose estimate tools.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="flextouch"
              heading="What Is the Wegovy FlexTouch Pen and How Does It Work?"
            >
              <p>
                The Wegovy FlexTouch pen is the delivery device used in the UK
                for semaglutide weight management treatment. It differs
                fundamentally from the Mounjaro KwikPen in one important way:{" "}
                <strong>
                  the Wegovy FlexTouch is not a multi-dose dial pen in the same
                  sense
                </strong>
                .
              </p>
              <p>
                Understanding the distinction is essential for anyone researching
                click calculations:
              </p>

              <h3 className={h3}>FlexTouch vs KwikPen: The Key Difference</h3>
              <GuideTable
                headers={["Feature", "Wegovy FlexTouch (UK)", "Mounjaro KwikPen (UK)"]}
                rows={[
                  {
                    cells: ["Manufacturer", "Novo Nordisk", "Eli Lilly"],
                  },
                  {
                    cells: [
                      "Doses per pen",
                      "4 labelled doses",
                      "4 labelled doses",
                    ],
                  },
                  {
                    cells: ["Volume per dose", "0.5 mL", "0.6 mL"],
                  },
                  {
                    cells: [
                      "Dose selector mechanism",
                      "Rotating selector with clicks",
                      "Rotating dial with clicks",
                    ],
                  },
                  {
                    cells: [
                      "Mathematical click reference",
                      "74 clicks per full dose",
                      "60 clicks per full dose",
                    ],
                  },
                  {
                    cells: [
                      "Official click-counting guidance",
                      "NOT recommended. Use dose counter",
                      "Not primary method. Use dose counter",
                    ],
                  },
                  {
                    cells: [
                      "Pen strengths available",
                      "5 (0.25 mg–2.4 mg + 7.2 mg)",
                      "6 (2.5 mg–15 mg)",
                    ],
                  },
                  {
                    cells: ["Injection frequency", "Weekly", "Weekly"],
                  },
                ]}
              />
              <p>
                The FlexTouch selector makes clicking sounds when rotated, which
                leads many users to assume clicks can be counted to measure a
                dose. Novo Nordisk specifically addresses this in the patient
                leaflet, noting that the clicking sound may vary depending on the
                direction the selector is turned. The dose counter, not click
                counting, is the authorised dosing method.
              </p>

              <h3 className={h3}>How Each Wegovy Pen Contains Four Doses</h3>
              <p>
                Each standard Wegovy FlexTouch pen contains four labelled doses
                of the pen&apos;s stated strength. The pen is used once weekly,
                making one pen approximately one month of treatment. After four
                injections, the pen is discarded, even if a small amount of
                solution appears to remain. Novo Nordisk&apos;s patient leaflet
                confirms this residual amount is insufficient for another full
                dose.
              </p>
              <p>
                This is distinct from discussions about a &ldquo;fifth
                dose&rdquo; that circulate in some GLP-1 communities. For Wegovy
                specifically, the official guidance is unambiguous: the residual
                solution after four doses is not a usable fifth dose.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="74-reference"
              heading="The 74-Click Mathematical Reference: Explained"
            >
              <p>
                The Healthwise360 Wegovy click calculator uses{" "}
                <strong>74 as the mathematical reference</strong> for a full
                dose from any standard FlexTouch pen. This number is used in the
                calculation formula:
              </p>
              <blockquote
                className={`border-l-4 p-4 my-4 ${darkMode ? "border-emerald-500 bg-slate-900" : "border-emerald-600 bg-slate-50"}`}
              >
                <strong>
                  Estimated clicks = (Prescribed dose ÷ Pen strength) × 74
                </strong>
              </blockquote>
              <p>For example:</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  Prescribed dose of 0.25 mg from a 0.5 mg pen: (0.25 ÷ 0.5) × 74
                  = <strong>37 clicks</strong>
                </li>
                <li>
                  Prescribed dose of 1 mg from a 2.4 mg pen: (1 ÷ 2.4) × 74 ={" "}
                  <strong>30.8 clicks</strong> (≈ 31)
                </li>
                <li>
                  Full dose of 2.4 mg from a 2.4 mg pen: (2.4 ÷ 2.4) × 74 ={" "}
                  <strong>74 clicks</strong>
                </li>
              </ul>

              <h3 className={h3}>Why 74, Not 60 Like Mounjaro?</h3>
              <p>
                The Mounjaro KwikPen uses 60 clicks for a full dose (based on
                0.6 mL × 100 units/mL = 60 units = 60 clicks on a U-100 scale).
                Wegovy&apos;s FlexTouch uses a different reference because the
                volume per dose is different: 0.5 mL per injection. The FlexTouch
                mechanism and concentration structure produce a 74-click
                mathematical reference point rather than 60.
              </p>
              <p>
                This is why Wegovy click calculations must never be transferred
                to Mounjaro calculations, and vice versa. The two devices are
                mechanically different, deliver different volumes, and use
                different click references.
              </p>
              <blockquote
                className={`border-l-4 p-4 my-4 italic ${darkMode ? "border-amber-500 bg-slate-900" : "border-amber-500 bg-amber-50"}`}
              >
                <strong>Important:</strong> The 74-click figure is a mathematical
                reference for educational understanding. It is not an official
                Novo Nordisk dosing instruction. Always use the dose counter on
                the pen and follow your prescriber&apos;s instructions.
              </blockquote>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="click-chart"
              heading="Wegovy Click Chart: All UK Pen Strengths (2026)"
            >
              <p>
                The following table shows mathematical click estimates for
                standard and common partial doses across all Wegovy FlexTouch pen
                strengths available in the UK. All values use the formula: Clicks
                = (Desired dose ÷ Pen strength) × 74.
              </p>

              <h3 className={h3}>Wegovy 0.25 mg Pen</h3>
              <GuideTable
                headers={[
                  "Prescribed Dose",
                  "Clicks (Mathematical Estimate)",
                  "% of Full Pen Dose",
                ]}
                rows={[
                  {
                    cells: ["0.25 mg (full dose)", "74", "100%"],
                  },
                  {
                    cells: ["0.125 mg (half)", "37", "50%"],
                  },
                ]}
              />
              <p className="text-sm italic">
                The 0.25 mg pen is the standard starter pen used during weeks
                1–4 of the UK titration schedule.
              </p>

              <h3 className={h3}>Wegovy 0.5 mg Pen</h3>
              <GuideTable
                headers={[
                  "Prescribed Dose",
                  "Clicks (Mathematical Estimate)",
                  "% of Full Pen Dose",
                ]}
                rows={[
                  {
                    cells: ["0.5 mg (full dose)", "74", "100%"],
                  },
                  {
                    cells: ["0.25 mg", "37", "50%"],
                  },
                ]}
              />

              <h3 className={h3}>Wegovy 1 mg Pen</h3>
              <GuideTable
                headers={[
                  "Prescribed Dose",
                  "Clicks (Mathematical Estimate)",
                  "% of Full Pen Dose",
                ]}
                rows={[
                  {
                    cells: ["1 mg (full dose)", "74", "100%"],
                  },
                  {
                    cells: ["0.5 mg", "37", "50%"],
                  },
                  {
                    cells: ["0.25 mg", "18.5", "25%"],
                  },
                ]}
              />

              <h3 className={h3}>Wegovy 1.7 mg Pen</h3>
              <GuideTable
                headers={[
                  "Prescribed Dose",
                  "Clicks (Mathematical Estimate)",
                  "% of Full Pen Dose",
                ]}
                rows={[
                  {
                    cells: ["1.7 mg (full dose)", "74", "100%"],
                  },
                  {
                    cells: ["1 mg", "43.5", "59%"],
                  },
                  {
                    cells: ["0.5 mg", "21.8", "29%"],
                  },
                ]}
              />

              <h3 className={h3}>Wegovy 2.4 mg Pen</h3>
              <GuideTable
                headers={[
                  "Prescribed Dose",
                  "Clicks (Mathematical Estimate)",
                  "% of Full Pen Dose",
                ]}
                rows={[
                  {
                    cells: ["2.4 mg (full dose)", "74", "100%"],
                  },
                  {
                    cells: ["1.7 mg", "52.4", "71%"],
                  },
                  {
                    cells: ["1 mg", "30.8", "42%"],
                  },
                  {
                    cells: ["0.5 mg", "15.4", "21%"],
                  },
                ]}
              />

              <p className="text-sm italic">
                All click estimates are mathematical calculations for
                informational understanding only. They do not constitute dosing
                instructions. The official method is to use the dose counter on
                the pen. Never set a Wegovy dose by counting clicks unless a
                qualified prescriber has specifically instructed otherwise.
              </p>
              <p>
                For an interactive calculator where you can input any dose and
                any pen strength and get an instant mathematical estimate, use
                the{" "}
                <Link href="/tools/wegovy-click-calculator" className={linkClass}>
                  Wegovy click calculator at Healthwise360
                </Link>
                .
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="7-2-update"
              heading="The Wegovy 7.2 mg Update: What Changed in 2026"
            >
              <p>
                This is the element of Wegovy click calculation that most
                competitor resources do not yet cover accurately, because it is a
                recent development specific to the UK and EU regulatory pathway.
              </p>

              <h3 className={h3}>What the MHRA Approved</h3>
              <p>
                In <strong>January 2026</strong>, the MHRA approved a maximum
                weekly dose of <strong>7.2 mg</strong> for certain adult patients
                with obesity who have been on Wegovy 2.4 mg for at least four
                weeks and require further weight management support.
              </p>

              <h3 className={h3}>Two Administration Methods</h3>
              <p>
                The 7.2 mg dose was approved in two stages:
              </p>
              <p>
                <strong>Method 1 (Original, early 2026):</strong> Three
                consecutive injections of 2.4 mg on the same day using standard
                2.4 mg FlexTouch pens.
              </p>
              <p>
                <strong>Method 2 (From April 2026):</strong> A dedicated
                single-dose 7.2 mg pen, approved by MHRA in April 2026, providing
                the full 7.2 mg in a single injection.
              </p>

              <h3 className={h3}>
                Why Healthwise360 Does Not Show &ldquo;222 Clicks&rdquo; for 7.2
                mg
              </h3>
              <p>
                A mathematically naïve approach would calculate: 74 clicks × 3
                injections = 222 clicks. Healthwise360 deliberately does not
                display this figure, for an important reason:
              </p>
              <p>
                222 clicks does not represent an approved way to set a Wegovy 7.2
                mg dose. The 7.2 mg prescription relates to a complete weekly
                treatment dose, not one continuous turn of a standard FlexTouch
                selector. The three-injection method requires three separate pen
                uses, not 222 consecutive clicks on one device.
              </p>
              <p>
                Displaying &ldquo;222 clicks&rdquo; would be both technically
                misleading and clinically irresponsible. The dedicated 7.2 mg pen,
                where applicable, has its own separate device and dosing
                instructions that do not involve click counting at all.
              </p>

              <h3 className={h3}>Who Is 7.2 mg Appropriate For?</h3>
              <p>The 7.2 mg dose is:</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  <strong>Only for adults with obesity</strong> (not adolescent
                  patients)
                </li>
                <li>
                  <strong>Not a starting dose</strong>, and requires at least
                  four weeks at 2.4 mg first
                </li>
                <li>
                  <strong>Decided by a prescriber</strong>, not self-initiated
                </li>
                <li>
                  <strong>Not yet NHS-funded</strong>. NICE is developing a
                  dedicated appraisal of semaglutide 7.2 mg; it is not
                  automatically available or funded through NHS pathways in 2026
                </li>
              </ul>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="titration"
              heading="UK Wegovy Titration Schedule: Which Pen at Which Stage"
            >
              <p>
                The standard UK Wegovy titration schedule, as described in the
                current patient leaflet (revised June 2026):
              </p>
              <GuideTable
                headers={[
                  "Treatment Period",
                  "Weekly Dose",
                  "Pen Strength",
                  "Clicks (Full Dose)",
                ]}
                rows={[
                  {
                    cells: ["Weeks 1–4", "0.25 mg", "0.25 mg pen", "74"],
                  },
                  {
                    cells: ["Weeks 5–8", "0.5 mg", "0.5 mg pen", "74"],
                  },
                  {
                    cells: ["Weeks 9–12", "1 mg", "1 mg pen", "74"],
                  },
                  {
                    cells: ["Weeks 13–16", "1.7 mg", "1.7 mg pen", "74"],
                  },
                  {
                    cells: ["From week 17", "2.4 mg", "2.4 mg pen", "74"],
                  },
                  {
                    cells: [
                      "From week 21 (if needed, adults with obesity only)",
                      "7.2 mg",
                      "Dedicated 7.2 mg pen or 3×2.4 mg pens",
                      "See note",
                    ],
                  },
                ]}
              />
              <p className="text-sm italic">
                Note: The 7.2 mg dose requires a dedicated single-dose pen (from
                April 2026) or three separate 2.4 mg injections on the same day.
                Click counting is not the appropriate reference for the 7.2 mg
                dose.
              </p>
              <p>
                In the standard protocol, every dose step uses the matching pen
                strength, meaning every full dose is always 74 clicks on the
                matching pen. The click calculator becomes most relevant when a
                prescriber recommends a <strong>partial or reduced dose</strong>{" "}
                from a higher-strength pen, or when users want to understand the
                mathematical relationship between dose and pen mechanics.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="vs-mounjaro"
              heading="How Wegovy Clicks Differ From Mounjaro Clicks: Side-by-Side"
            >
              <p>
                Because many UK patients research both treatments simultaneously,
                understanding the difference between the two click systems is
                important.
              </p>
              <GuideTable
                headers={["", "Wegovy (FlexTouch)", "Mounjaro (KwikPen)"]}
                rows={[
                  {
                    cells: [
                      "Click reference (full dose)",
                      "74 clicks",
                      "60 clicks",
                    ],
                  },
                  {
                    cells: [
                      "Volume per full dose",
                      "0.5 mL",
                      "0.6 mL",
                    ],
                  },
                  {
                    cells: [
                      "Volume per click",
                      "~0.00676 mL",
                      "0.01 mL",
                    ],
                  },
                  {
                    cells: [
                      "Formula for partial dose",
                      "(Desired mg ÷ Pen mg) × 74",
                      "(Desired mg ÷ Pen mg) × 60",
                    ],
                  },
                  {
                    cells: [
                      "Official click guidance",
                      "Not recommended. Use dose counter",
                      "Not recommended. Use dose counter",
                    ],
                  },
                  {
                    cells: ["Manufacturer", "Novo Nordisk", "Eli Lilly"],
                  },
                ]}
              />
              <p>
                The two formulas are <strong>not interchangeable</strong>. If you
                have been reading about Mounjaro click calculations (which use
                60), those numbers do not apply to your Wegovy FlexTouch pen.
              </p>
              <p>
                For Mounjaro click calculations, the{" "}
                <Link
                  href="/tools/mounjaro-click-calculator"
                  className={linkClass}
                >
                  Mounjaro click calculator at Healthwise360
                </Link>{" "}
                covers all six Mounjaro pen strengths with a complete dose chart.
                There is also a full editorial walkthrough in our{" "}
                <Link
                  href="/blog/mounjaro-click-calculator-uk"
                  className={linkClass}
                >
                  Mounjaro click calculator UK guide
                </Link>
                .
              </p>
              <p>
                For a broader comparison of how Wegovy and Mounjaro differ in
                mechanism, clinical evidence, and pricing, see the{" "}
                <Link
                  href="/compare/wegovy-vs-mounjaro"
                  className={linkClass}
                >
                  Wegovy vs Mounjaro comparison at Healthwise360
                </Link>
                .
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="patient-leaflet"
              heading="What the Official Wegovy Patient Leaflet Says About Clicks"
            >
              <p>
                This is where the UK Wegovy experience differs from what you
                might read on US-based or India-based GLP-1 websites, and it is
                the most important safety context in this entire article.
              </p>
              <p>
                The official Wegovy patient leaflet, issued by Novo Nordisk and
                approved by the MHRA for the UK market, states:
              </p>
              <blockquote
                className={`border-l-4 p-4 my-4 ${darkMode ? "border-emerald-500 bg-slate-900" : "border-emerald-600 bg-slate-50"}`}
              >
                <strong>
                  Do not count the number of clicks to measure your dose.
                </strong>{" "}
                The selector makes a clicking sound when turned, but this sound
                may differ depending on the direction in which the selector is
                moved. The dose counter on the pen is the only authorised
                measurement of the dose.
              </blockquote>
              <p>
                This is not a minor caveat. It is a primary instruction in the
                official leaflet. Any Wegovy click calculator, including the one
                at Healthwise360, exists to provide{" "}
                <strong>mathematical understanding</strong> of how dose volumes
                relate to pen mechanics, not to replace the dose counter or the
                prescriber&apos;s instructions.
              </p>
              <p>
                Why do patients search for click information despite this
                guidance? Several reasons:
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  Patients switching from insulin pens or other GLP-1 devices
                  that do require click counting naturally expect the same from
                  Wegovy
                </li>
                <li>
                  Some non-UK resources incorrectly describe the FlexTouch as a
                  click-counted device
                </li>
                <li>
                  Patients prescribed a partial dose by a UK prescriber want to
                  understand what that means mechanically
                </li>
                <li>
                  Users want to cross-check that their pen is delivering what
                  they expect
                </li>
              </ul>
              <p>
                All of these are legitimate reasons to seek click information.
                None of them override the instruction to use the dose counter and
                follow prescriber guidance.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="cost-per-dose"
              heading="Wegovy Cost Per Dose: Using the Click Calculator for Price Estimates"
            >
              <p>
                One practical application of the Wegovy click calculator that
                goes beyond dose verification is{" "}
                <strong>cost-per-dose estimation</strong>.
              </p>
              <p>
                When a pen cost is entered into the{" "}
                <Link href="/tools/wegovy-click-calculator" className={linkClass}>
                  Healthwise360 Wegovy click calculator
                </Link>
                , it provides a simple mathematical cost estimate based on the
                four labelled doses per standard FlexTouch pen:
              </p>
              <blockquote
                className={`border-l-4 p-4 my-4 ${darkMode ? "border-emerald-500 bg-slate-900" : "border-emerald-600 bg-slate-50"}`}
              >
                <strong>Cost per dose = Pen price ÷ 4</strong>
              </blockquote>
              <p>
                For example, a 2.4 mg pen priced at £269 contains four doses ={" "}
                <strong>£67.25 per weekly injection</strong>.
              </p>
              <p>
                This is useful for comparing providers who quote prices
                differently, some per pen, some per month, some as a programme
                package. Understanding the per-dose cost makes comparison more
                meaningful.
              </p>
              <p>
                For current verified pricing across all five Wegovy dose
                strengths from 64+ GPhC-registered UK pharmacies, see the{" "}
                <Link href="/wegovy-price-comparison" className={linkClass}>
                  Wegovy price comparison at Healthwise360
                </Link>{" "}
                and the{" "}
                <Link
                  href="/compare/mounjaro-vs-wegovy-vs-saxenda"
                  className={linkClass}
                >
                  full weight loss treatment comparison hub
                </Link>
                .
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="uk-vs-us"
              heading="Why the Wegovy FlexTouch Is Different From What Most Online Resources Describe"
            >
              <p>
                Here is the critical competitive gap in the information landscape
                for this keyword:
              </p>
              <p>
                <strong>
                  Most articles about &ldquo;Wegovy clicks&rdquo;, including the
                  top US-based results, describe a single-dose autoinjector where
                  &ldquo;one click&rdquo; delivers the entire dose.
                </strong>{" "}
                This is the US Wegovy pen design.
              </p>
              <p>
                <strong>
                  The UK Wegovy FlexTouch pen works differently.
                </strong>{" "}
                It has a rotating selector mechanism that allows dose setting and
                produces multiple clicks during rotation, which is precisely why
                UK patients search for click information. The UK FlexTouch has a
                selector, a dose counter, and produces clicking sounds during
                use. This is fundamentally different from the US single-dose
                device described in many of the top Google results for this
                query.
              </p>
              <p>
                This distinction matters enormously for UK patients who find
                US-based content and assume it describes their device. It does
                not. The UK FlexTouch is a multi-dose pen with a selector
                mechanism. The US Wegovy device is a single-injection
                autoinjector. They require different usage instructions.
              </p>
              <p>
                The{" "}
                <Link href="/tools/wegovy-click-calculator" className={linkClass}>
                  Wegovy click calculator at Healthwise360
                </Link>{" "}
                is specifically designed for the{" "}
                <strong>UK FlexTouch pen</strong>, covering all five standard
                strengths (0.25 mg, 0.5 mg, 1 mg, 1.7 mg, 2.4 mg) and the new 7.2
                mg option, with UK-specific regulatory context from the MHRA and
                the current UK patient leaflet (revised June 2026).
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="safe-use"
              heading="Safe Use of the Wegovy FlexTouch Pen: Key Reminders"
            >
              <p>
                Regardless of click calculations, the following safety guidance
                from the UK patient leaflet applies to all Wegovy FlexTouch
                users:
              </p>
              <p>
                <strong>Always use the dose counter</strong>, not click sounds,
                to confirm your dose before injecting.
              </p>
              <p>
                <strong>Contact your prescriber or pharmacist if:</strong>
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>You are unsure which pen strength you have received</li>
                <li>
                  The dose counter stops before your prescribed dose appears
                </li>
                <li>You think the full dose was not delivered</li>
                <li>You are considering changing or delaying a dose</li>
                <li>You experience side effects that concern you</li>
              </ul>
              <p>
                <strong>Seek urgent medical help for:</strong>
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  Severe and persistent abdominal pain (possible pancreatitis)
                </li>
                <li>Signs of serious allergic reaction</li>
                <li>Sudden significant changes in eyesight</li>
              </ul>
              <p>
                <strong>Report suspected side effects</strong> through the MHRA
                Yellow Card scheme.
              </p>
              <p>
                The residual solution remaining after four labelled doses from a
                standard FlexTouch pen{" "}
                <strong>is not a fifth dose</strong> and should not be used. The
                pen should be safely discarded after the fourth injection.
              </p>
            </GuideSection>

            <section
              id="faq"
              className={`mt-16 border-t pt-10 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
            >
              <h2
                className={`mb-8 text-3xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                FAQ: Wegovy Click Calculator UK
              </h2>
              <div className="space-y-8">
                {[
                  [
                    "1. What is a Wegovy click calculator?",
                    <>
                      A Wegovy click calculator compares a prescribed dose with
                      the labelled strength of the selected FlexTouch pen and
                      expresses that relationship as a mathematical click
                      estimate. It uses 74 as the reference for a full dose on
                      the UK FlexTouch pen. It is an educational mathematical
                      tool, not a dosing instruction and not a replacement for
                      the dose counter or prescriber guidance.
                    </>,
                  ],
                  [
                    "2. How many clicks is a full Wegovy dose in the UK?",
                    <>
                      The mathematical reference for a full Wegovy dose on the UK
                      FlexTouch pen is 74 clicks, regardless of which pen
                      strength is used. However, Novo Nordisk instructs patients
                      not to set a dose by counting clicks. Always use the dose
                      counter on the pen and follow your prescriber&apos;s
                      instructions.
                    </>,
                  ],
                  [
                    "3. How many clicks is 0.25 mg Wegovy from a 0.5 mg pen?",
                    <>
                      Using the formula (0.25 ÷ 0.5) × 74 ={" "}
                      <strong>37 clicks</strong>. This represents 50% of the full
                      dose volume from a 0.5 mg pen. Note: this is a mathematical
                      estimate only, not a prescribing instruction.
                    </>,
                  ],
                  [
                    "4. How many clicks is a 2.4 mg full dose?",
                    <>
                      From a 2.4 mg FlexTouch pen, a full dose corresponds to 74
                      clicks, the standard reference for the UK device. The 2.4
                      mg dose is the standard Wegovy maintenance dose, reached at
                      week 17 of the UK titration schedule.
                    </>,
                  ],
                  [
                    "5. Why is the Wegovy click reference 74 and not 60 like Mounjaro?",
                    <>
                      The two pens have different dose volumes: Wegovy FlexTouch
                      delivers 0.5 mL per full dose, while the Mounjaro KwikPen
                      delivers 0.6 mL. The different volumes produce different
                      click references, 74 for Wegovy and 60 for Mounjaro. The
                      two figures are not interchangeable.
                    </>,
                  ],
                  [
                    "6. Is the Wegovy 7.2 mg dose equal to 222 clicks?",
                    <>
                      No. Healthwise360 specifically does not represent 7.2 mg as
                      222 clicks. The 7.2 mg dose is a complete prescribed weekly
                      regimen, either using a dedicated 7.2 mg single-dose pen
                      (from April 2026) or three separate 2.4 mg injections on
                      the same day. It does not represent 222 consecutive clicks
                      on one device.
                    </>,
                  ],
                  [
                    "7. What Wegovy pen strengths are available in the UK in 2026?",
                    <>
                      The standard UK FlexTouch range includes: 0.25 mg, 0.5 mg,
                      1 mg, 1.7 mg, and 2.4 mg. Additionally, a 7.2 mg weekly
                      dose has been approved by the MHRA for certain adult
                      patients with obesity, available as a dedicated single-dose
                      pen (from April 2026) or as three consecutive 2.4 mg
                      injections.
                    </>,
                  ],
                  [
                    "8. Does the Healthwise360 Wegovy click calculator store my dose information?",
                    <>
                      No. Calculations are completed in the browser and the dose
                      entered is not saved or used to create a personal profile.
                      See the{" "}
                      <Link
                        href="/tools/wegovy-click-calculator"
                        className={linkClass}
                      >
                        Wegovy click calculator at Healthwise360
                      </Link>
                      .
                    </>,
                  ],
                  [
                    "9. Is Wegovy the same as Ozempic for click calculation purposes?",
                    <>
                      No. While both contain semaglutide, Wegovy and Ozempic use
                      different pen devices, different doses, and have different
                      labelled strengths. Ozempic is a multi-dose diabetes pen
                      with a rotating dose dial; Wegovy is a weight management
                      treatment with a FlexTouch selector. Click calculations
                      from one must never be transferred to the other.
                    </>,
                  ],
                  [
                    "10. How is the Wegovy FlexTouch different from the US Wegovy pen?",
                    <>
                      The UK Wegovy FlexTouch pen has a rotating selector
                      mechanism that produces multiple clicks during use and
                      contains four labelled doses. Many US-focused online
                      resources describe a single-injection autoinjector pen
                      where &ldquo;one click&rdquo; delivers the entire dose.
                      These descriptions do not apply to the UK FlexTouch device.
                      UK patients should use UK-specific resources and the
                      current MHRA-approved patient leaflet.
                    </>,
                  ],
                ].map(([q, a]) => (
                  <div key={String(q)}>
                    <h3
                      className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                      {q}
                    </h3>
                    <p>{a}</p>
                  </div>
                ))}
              </div>
            </section>

            <GuideSection
              darkMode={darkMode}
              id="conclusion"
              heading="Conclusion"
            >
              <p>
                The Wegovy FlexTouch pen in the UK uses{" "}
                <strong>
                  74 clicks as the mathematical reference for one full prescribed
                  dose
                </strong>{" "}
                across all five standard pen strengths. The formula for any dose
                calculation is:
              </p>
              <blockquote
                className={`border-l-4 p-4 my-4 ${darkMode ? "border-emerald-500 bg-slate-900" : "border-emerald-600 bg-slate-50"}`}
              >
                <strong>
                  Estimated clicks = (Prescribed dose mg ÷ Pen strength mg) × 74
                </strong>
              </blockquote>
              <p>Key reference points for UK patients:</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  Full dose from any standard pen = <strong>74 clicks</strong>
                </li>
                <li>
                  Half dose from any pen = <strong>37 clicks</strong>
                </li>
                <li>
                  0.25 mg from a 0.5 mg pen = <strong>37 clicks</strong>
                </li>
                <li>
                  The <strong>7.2 mg dose is not 222 clicks</strong>. It requires
                  a dedicated pen or three separate injections
                </li>
              </ul>
              <p>
                However, the most important fact about Wegovy click calculations
                remains the official guidance:{" "}
                <strong>do not set your dose by counting clicks</strong>. Use the
                dose counter on the pen, follow your prescriber&apos;s
                instructions, and contact your pharmacist or prescriber if you
                have any uncertainty about your dose.
              </p>
              <p>
                For an interactive mathematical estimate at any dose and pen
                combination, use the{" "}
                <Link href="/tools/wegovy-click-calculator" className={linkClass}>
                  Wegovy click calculator at Healthwise360
                </Link>
                .
              </p>
              <p>
                For Wegovy pricing across verified UK pharmacies:{" "}
                <Link href="/wegovy-price-comparison" className={linkClass}>
                  Wegovy price comparison at Healthwise360
                </Link>
                . For how Wegovy compares to Mounjaro:{" "}
                <Link
                  href="/compare/wegovy-vs-mounjaro"
                  className={linkClass}
                >
                  Wegovy vs Mounjaro comparison at Healthwise360
                </Link>
                . For the Mounjaro equivalent:{" "}
                <Link
                  href="/tools/mounjaro-click-calculator"
                  className={linkClass}
                >
                  Mounjaro click calculator at Healthwise360
                </Link>
                .
              </p>
              <p
                className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}
              >
                This article is for informational purposes only and does not
                constitute medical advice. All click estimates are mathematical
                calculations only. They do not replace the dose counter, the
                patient leaflet, or instructions from a licensed prescriber.
                Wegovy is a prescription-only medicine in the UK. Always follow
                the dosage instructions confirmed by your prescriber.
              </p>
            </GuideSection>
          </article>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
