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
  WEGOVY_PILL_HERO_PNG,
  WEGOVY_PILL_INLINE_PNG,
} from "./blog-assets";

const SHARE_PATH = "/blog/wegovy-pill-uk";
const TITLE = "Wegovy Pill UK: Price, Availability, Results and Safety Guide";
const DESCRIPTION =
  "Wegovy Pill UK guide: compare price, availability, results, dosage, side effects and tablet vs injection options.";
const HERO_SRC = blogImgPath(WEGOVY_PILL_HERO_PNG);
const INLINE_SRC = blogImgPath(WEGOVY_PILL_INLINE_PNG);

const TOC = [
  { id: "intro", label: "Wegovy Pill UK guide" },
  { id: "what-is-wegovy-pill", label: "What is Wegovy Pill?" },
  { id: "why-matters", label: "Why Wegovy Pill matters" },
  { id: "approved-uk", label: "Is it approved in the UK?" },
  { id: "nhs-availability", label: "NHS availability" },
  { id: "how-it-works", label: "How does it work?" },
  { id: "price-uk", label: "Wegovy Pill price UK" },
  { id: "price-context", label: "Price comparison context" },
  { id: "results", label: "Wegovy Pill results" },
  { id: "trial-oversold", label: "Why trial data should not be oversold" },
  { id: "vs-pen", label: "Wegovy Pill vs Wegovy Pen" },
  { id: "vs-mounjaro", label: "Wegovy Pill vs Mounjaro" },
  { id: "vs-rybelsus", label: "Wegovy Pill vs Rybelsus" },
  { id: "vs-supplements", label: "Wegovy Pill vs GLP-1 supplements" },
  {
    id: "oral-injectable-together",
    label: "Oral and injectable GLP-1s together",
  },
  { id: "dosage-schedule", label: "Dosage schedule UK" },
  { id: "how-to-take", label: "How to take Wegovy Pill" },
  { id: "coffee-tea-food", label: "Coffee, tea and food" },
  { id: "side-effects", label: "Side effects" },
  { id: "sick-after-taking", label: "If you are sick after taking it" },
  { id: "alcohol", label: "Alcohol while taking Wegovy Pill" },
  { id: "pregnancy", label: "Pregnancy and breastfeeding" },
  { id: "diet", label: "Do you need to follow a diet?" },
  { id: "weight-return", label: "Will weight return if you stop?" },
  { id: "pharmacy-safety", label: "Pharmacy safety checks" },
  { id: "how-healthwise360", label: "How Health Wise can help" },
  { id: "reference-notes", label: "Reference notes" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "conclusion", label: "Conclusion" },
];

const SOCIAL_HASHTAGS =
  "#WegovyPill #WegovyUK #OralSemaglutide #WeightLossUK #GLP1UK #PharmacySafety #HealthWise #ComparePrices";

function EvidenceTable({ darkMode }: { darkMode: boolean }) {
  const cell = darkMode
    ? "border-slate-700 text-slate-300"
    : "border-slate-200 text-slate-700";
  const head = darkMode
    ? "bg-slate-900 text-slate-200"
    : "bg-slate-50 text-slate-900";
  const wrap = darkMode ? "border-slate-700" : "border-slate-200/80";

  return (
    <div
      className={`my-6 w-full min-w-0 max-w-full overflow-x-auto overscroll-x-contain rounded-xl border [-webkit-overflow-scrolling:touch] ${wrap}`}
    >
      <table className="w-full min-w-[720px] border-collapse text-left text-xs sm:text-sm">
        <thead>
          <tr className={head}>
            <th className={`border-b px-3 py-2 font-semibold ${cell}`}>
              Treatment
            </th>
            <th className={`border-b px-3 py-2 font-semibold ${cell}`}>
              Study Reference
            </th>
            <th className={`border-b px-3 py-2 font-semibold ${cell}`}>
              Format
            </th>
            <th className={`border-b px-3 py-2 font-semibold ${cell}`}>
              Study Length
            </th>
            <th className={`border-b px-3 py-2 font-semibold ${cell}`}>
              Reported Average Result
            </th>
            <th className={`border-b px-3 py-2 font-semibold ${cell}`}>
              Important Note
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`border-b px-3 py-2 font-medium ${cell}`}>
              Wegovy Pill
            </td>
            <td className={`border-b px-3 py-2 ${cell}`}>OASIS 4</td>
            <td className={`border-b px-3 py-2 ${cell}`}>
              Daily oral semaglutide 25mg
            </td>
            <td className={`border-b px-3 py-2 ${cell}`}>64 weeks</td>
            <td className={`border-b px-3 py-2 ${cell}`}>
              Around 16.6% average body weight loss
            </td>
            <td className={`border-b px-3 py-2 ${cell}`}>
              Alongside lifestyle changes
            </td>
          </tr>
          <tr>
            <td className={`border-b px-3 py-2 font-medium ${cell}`}>
              Wegovy Pen
            </td>
            <td className={`border-b px-3 py-2 ${cell}`}>STEP UP</td>
            <td className={`border-b px-3 py-2 ${cell}`}>
              Semaglutide injection study
            </td>
            <td className={`border-b px-3 py-2 ${cell}`}>72 weeks</td>
            <td className={`border-b px-3 py-2 ${cell}`}>
              Reported in competitor comparisons as strong average weight loss
            </td>
            <td className={`border-b px-3 py-2 ${cell}`}>
              Not directly compared with OASIS 4
            </td>
          </tr>
          <tr>
            <td className={`px-3 py-2 font-medium ${cell}`}>Mounjaro</td>
            <td className={`px-3 py-2 ${cell}`}>SURMOUNT-1</td>
            <td className={`px-3 py-2 ${cell}`}>
              Weekly tirzepatide injection
            </td>
            <td className={`px-3 py-2 ${cell}`}>72 weeks</td>
            <td className={`px-3 py-2 ${cell}`}>
              Strong average weight loss at higher doses
            </td>
            <td className={`px-3 py-2 ${cell}`}>
              Different medicine and study design
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

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
            Wegovy Pill UK
          </span>
        </nav>

        <BlogArticleColumn toc={TOC} darkMode={darkMode}>
          <header
            className={`mb-8 border-b pb-8 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
          >
            <h1
              className={`mb-6 text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl md:text-[44px] ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              Wegovy Pill UK: Price, Availability, Results and Safety Guide
            </h1>
            <div
              className={`mb-8 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />1 Jul 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                14 min read
              </span>
            </div>

            <BlogArticleHeroImage
              src={HERO_SRC}
              alt="Wegovy Pill UK guide covering price, availability, results and safety for oral semaglutide weight loss treatment"
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
              heading="Wegovy Pill UK: Price, Availability, Results and Safety Guide"
            >
              <p className="text-lg md:text-xl">
                Wegovy Pill is one of the most important new developments in UK
                weight loss treatment. For many people, Wegovy has been known as
                a once-weekly injection. However, the new oral semaglutide
                tablet gives eligible adults a needle-free option that may fit
                better into daily routines.
              </p>
              <p>
                However, Wegovy Pill is not a normal diet tablet, fat burner, or
                GLP-1 supplement. It is a prescription-only GLP-1 medicine
                designed for medically supervised weight loss and weight
                management.
              </p>
              <p>
                Therefore, the safest way to understand Wegovy Pill is not just
                to ask, &ldquo;Where can I buy it?&rdquo; A better question is:
                &ldquo;How does Wegovy Pill compare with Wegovy Pen and
                Mounjaro, what might it cost, how is it taken, and how can I
                check a regulated provider before starting treatment?&rdquo;
              </p>
              <p>
                This Healthwise360 guide explains Wegovy Pill. It covers price,
                availability, results, dosage, side effects, pharmacy safety,
                and how it compares with other UK weight loss treatment options.
              </p>
              <p>
                Healthwise360 does not prescribe treatment. Instead, it helps UK
                users{" "}
                <Link
                  href="/"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  compare weight loss treatment prices
                </Link>
                , provider safety, pharmacy checks, and support options before
                choosing where to speak to a qualified prescriber.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="what-is-wegovy-pill"
              heading="What Is Wegovy Pill?"
            >
              <p>
                Wegovy Pill is a prescription-only GLP-1 medication in tablet
                form. It contains semaglutide, the same active ingredient
                associated with Wegovy injectable treatment, but it is taken as
                a daily oral tablet instead of a weekly injection.
              </p>
              <p>
                Semaglutide belongs to a class of medicines called GLP-1
                receptor agonists. These medicines work by mimicking a natural
                hormone involved in appetite, fullness, and food intake.
              </p>
              <p>
                In simple terms, Wegovy Pill may help some people feel fuller
                for longer, reduce hunger, and lower cravings. However, it
                should still be used alongside diet, movement, and lifestyle
                support.
              </p>
              <p>
                This is important because Wegovy Pill is not a shortcut. It is
                part of a structured weight management plan for people who meet
                clinical suitability criteria.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="why-matters"
              heading="Why Wegovy Pill Matters for UK Weight Loss Treatment"
            >
              <p>
                The launch of an oral GLP-1 tablet changes the way many people
                think about weight loss treatment. Until now, some people
                avoided GLP-1 treatment because they disliked injections,
                worried about storage, or did not want to use a pen.
              </p>
              <p>
                Therefore, Wegovy Pill may appeal to people who prefer tablets,
                travel often, or want a routine that avoids needles. Besides
                that, it may open up more searches around oral Wegovy UK, Wegovy
                tablet UK, semaglutide tablet weight loss UK, and GLP-1 pill UK.
              </p>
              <p>
                However, the tablet also comes with a different routine. It must
                be taken on an empty stomach with specific timing. So, it is not
                automatically easier for everyone.
              </p>
              <p>
                Some people may prefer a daily tablet. Others may prefer a
                weekly injection. A clinician can help decide what is more
                suitable based on medical history, routine, side effect risk,
                and weight loss goals.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="approved-uk"
              heading="Is Wegovy Pill Approved in the UK?"
            >
              <p>
                Yes. Wegovy Pill has been approved in the UK as an oral
                semaglutide tablet for weight loss and weight management.
              </p>
              <p>
                However, approval does not mean it can be bought like a normal
                supplement. It remains a prescription-only medicine. That means
                a healthcare professional must assess whether it is suitable
                before it is supplied.
              </p>
              <p>
                Eligibility may depend on BMI, weight-related health conditions,
                current medicines, previous treatment history, pregnancy status,
                and other safety factors.
              </p>
              <p>
                Therefore, any website offering Wegovy Pill without a medical
                assessment should be treated as a red flag.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="nhs-availability"
              heading="Is Wegovy Pill Available on the NHS?"
            >
              <p>
                At the time of approval, Wegovy Pill was approved in the UK but
                not currently available through the NHS. NHS availability
                usually depends on separate review and funding processes.
              </p>
              <p>
                This means some people may see private providers discussing
                pre-order, availability, or future delivery. However, private
                access and NHS access are not the same.
              </p>
              <p>
                If someone wants NHS weight loss treatment, they should speak to
                their GP or relevant NHS service. If someone is considering
                private treatment, they should compare provider safety, total
                cost, and pharmacy registration before paying.
              </p>
              <p>
                Healthwise360 should also build a support page called Is Wegovy
                Pill Available on the NHS? and link it back to this main guide.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="how-it-works"
              heading="How Does Wegovy Pill Work?"
            >
              <p>
                Wegovy Pill works by mimicking GLP-1, a natural hormone involved
                in appetite regulation. This may help reduce food noise,
                increase fullness, and make it easier for some people to eat
                less.
              </p>
              <p>
                However, Wegovy Pill does not work in isolation. It is intended
                to support a reduced-calorie diet, increased physical activity,
                and long-term lifestyle changes.
              </p>
              <p>
                That means food choices, protein intake, fibre, hydration,
                sleep, and movement still matter. In fact, these habits may
                become even more important if appetite drops and food intake
                becomes smaller.
              </p>
              <p>
                For this reason, Healthwise360 should connect Wegovy Pill
                content with lifestyle support pages, BMI tools, weight tracking
                tools, and supplement education. Before starting any treatment
                pathway, you can{" "}
                <Link
                  href="/tools/bmi-calculator"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  check your BMI for weight loss treatment
                </Link>{" "}
                to see whether your measurements align with typical clinical
                eligibility criteria.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="price-uk"
              heading="Wegovy Pill Price UK: What Affects the Cost?"
            >
              <p>
                Wegovy Pill price in the UK may vary depending on provider,
                dose, consultation process, delivery fees, and support level.
                Some providers may show a first-month or starter price, but that
                does not always reflect the full treatment cost.
              </p>
              <p>
                Therefore, users should avoid comparing treatment based only on
                one &ldquo;from&rdquo; price.
              </p>
              <p>Before choosing a provider, compare:</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>Starter dose price</li>
                <li>Higher dose price</li>
                <li>Monthly treatment cost</li>
                <li>Consultation fees</li>
                <li>Delivery charges</li>
                <li>Repeat prescription rules</li>
                <li>Support included</li>
                <li>Maintenance policy</li>
                <li>Pharmacy safety checks</li>
                <li>Cancellation or refund terms</li>
              </ul>
              <p>
                For a better price-led journey, Healthwise360 should link users
                to the{" "}
                <Link
                  href="/wegovy-price-comparison"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  Wegovy price comparison
                </Link>{" "}
                page rather than a simple price list. This is more useful
                because users need to compare the total cost, not just one dose.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="price-context"
              heading="Why Wegovy Pill Price Comparison Needs Context"
            >
              <p>
                A low first-month price can look attractive. However, Wegovy
                Pill treatment may involve dose increases over time. As a
                result, the cost may change after the first month.
              </p>
              <p>
                Besides that, one provider may include support, app features,
                clinician review, or delivery. Another provider may offer a
                lower price but less aftercare.
              </p>
              <p>
                This is why Healthwise360 should frame its price content around
                value, not only cheapness.
              </p>
              <p>A strong comparison should answer:</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>What is the starting price?</li>
                <li>What is the maintenance dose price?</li>
                <li>Is delivery included?</li>
                <li>Is consultation included?</li>
                <li>Is support included?</li>
                <li>Is the pharmacy route clear?</li>
                <li>
                  Does the provider explain what happens after weight loss?
                </li>
              </ul>
              <p>
                This gives users a more realistic view of weight loss treatment
                price and long-term affordability.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="results"
              heading="Wegovy Pill Results: What Do the Studies Suggest?"
            >
              <p>
                Clinical evidence is one reason Wegovy Pill is getting
                attention. However, the results should be explained carefully.
              </p>
              <p>
                Some competitor pages compare Wegovy Pill, Wegovy Pen, and
                Mounjaro using trial results such as:
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>OASIS 4: oral semaglutide 25mg over 64 weeks</li>
                <li>STEP UP: Wegovy semaglutide study over 72 weeks</li>
                <li>SURMOUNT-1: tirzepatide study over 72 weeks</li>
              </ul>
              <p>
                These studies are useful, but they are not a direct head-to-head
                comparison. They involved different study designs, different
                populations, and different treatment formats.
              </p>
              <p>
                Therefore, Healthwise360 should include the evidence but explain
                it more responsibly.
              </p>

              <h3
                className={`text-xl font-bold mt-6 mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Evidence Snapshot
              </h3>
              <EvidenceTable darkMode={darkMode} />

              <p>
                The key message is simple: these treatments can support
                meaningful weight loss for eligible people, but results vary.
                Besides that, group averages do not predict individual outcomes.
              </p>
            </GuideSection>

            <div className="my-10">
              <BlogArticleHeroImage
                src={INLINE_SRC}
                alt="Clinical trial data comparison chart for Wegovy Pill oral semaglutide weight loss results"
                priority={false}
                showFullImage
              />
            </div>

            <GuideSection
              darkMode={darkMode}
              id="trial-oversold"
              heading="Why the Trial Data Should Not Be Oversold"
            >
              <p>
                Weight loss studies are helpful, but they do not guarantee
                personal results. Real-life outcomes depend on many factors,
                including suitability, side effects, adherence, dose
                progression, diet, activity, and support.
              </p>
              <p>
                For example, a person who cannot tolerate the maintenance dose
                may have a different outcome from someone who reaches and stays
                on that dose. Similarly, someone who struggles to take a daily
                tablet correctly may not get the same results as someone who
                follows the timing instructions consistently.
              </p>
              <p>
                Therefore, Healthwise360 should use trial data as education, not
                as a promise.
              </p>
              <p>Suggested wording:</p>
              <blockquote
                className={`border-l-4 p-4 my-4 italic ${darkMode ? "border-emerald-500 bg-slate-900 text-slate-300" : "border-emerald-600 bg-slate-50 text-slate-700"}`}
              >
                Clinical studies show meaningful average weight loss in selected
                groups when treatment is used alongside lifestyle changes.
                However, these studies are not head-to-head comparisons, and
                individual results vary.
              </blockquote>
              <p>
                This wording is safer, more trustworthy, and more suitable for
                YMYL SEO.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="vs-pen"
              heading="Wegovy Pill vs Wegovy Pen"
            >
              <p>
                Wegovy Pill and Wegovy Pen both involve semaglutide for weight
                loss. However, the format and routine are different.
              </p>

              <h3
                className={`text-xl font-bold mt-6 mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                How You Take It
              </h3>
              <p>
                Wegovy Pill is taken once daily as a tablet. Wegovy Pen is taken
                once weekly as an injection.
              </p>
              <p>
                For people who dislike needles, the tablet may feel more
                appealing. However, the daily routine must be followed
                carefully.
              </p>

              <h3
                className={`text-xl font-bold mt-6 mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Timing
              </h3>
              <p>
                Wegovy Pill must be taken on an empty stomach. Users need to
                wait before eating, drinking, or taking other oral medicines.
              </p>
              <p>
                Wegovy Pen does not have the same fasting rule. Therefore, some
                people may find the weekly injection easier even if they
                initially prefer tablets.
              </p>

              <h3
                className={`text-xl font-bold mt-6 mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Storage
              </h3>
              <p>
                Wegovy Pill can usually be stored at room temperature, based on
                product instructions. Wegovy Pen usually requires refrigeration
                before use.
              </p>
              <p>
                This may make tablets more convenient for travel or storage, but
                users should still follow the patient leaflet.
              </p>

              <h3
                className={`text-xl font-bold mt-6 mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Absorption
              </h3>
              <p>
                The injection is absorbed under the skin. The tablet is absorbed
                through the digestive system. Because of this, oral semaglutide
                has stricter instructions to help absorption.
              </p>
              <p>
                This is why coffee, food, tea, and other medicines too soon
                after the tablet may affect how well it works.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="vs-mounjaro"
              heading="Wegovy Pill vs Mounjaro"
            >
              <p>
                Wegovy Pill contains semaglutide. Mounjaro contains tirzepatide.
              </p>
              <p>
                Both belong to the wider GLP-1 treatment conversation, but they
                are not the same medicine. Mounjaro is a dual GIP and GLP-1
                receptor agonist, while Wegovy is a GLP-1 receptor agonist.
              </p>
              <p>
                Mounjaro is taken as an injection. Wegovy Pill is taken as a
                daily tablet.
              </p>
              <p>Therefore, the right comparison should include:</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>Medicine type</li>
                <li>Format</li>
                <li>Dose schedule</li>
                <li>Side effect profile</li>
                <li>Price</li>
                <li>Provider support</li>
                <li>Eligibility</li>
                <li>Personal routine</li>
                <li>Prescriber advice</li>
              </ul>
              <p>
                Healthwise360 should link this section to{" "}
                <Link
                  href="/compare/mounjaro-vs-wegovy-vs-saxenda"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  compare Mounjaro vs Wegovy vs Saxenda
                </Link>{" "}
                and the{" "}
                <Link
                  href="/mounjaro-price-comparison"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  Mounjaro price list UK
                </Link>{" "}
                so readers can weigh tablet versus injection options alongside
                full dose-level pricing.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="vs-rybelsus"
              heading="Wegovy Pill vs Rybelsus"
            >
              <p>This is a very important SEO and safety point.</p>
              <p>
                Wegovy Pill and Rybelsus are both connected to semaglutide
                tablets. However, they are not the same treatment route.
              </p>
              <p>
                Wegovy is used for obesity and weight management. Rybelsus is
                used for type 2 diabetes.
              </p>
              <p>
                Therefore, people should not treat Rybelsus as a casual
                substitute for Wegovy Pill. They should also avoid using
                diabetes medicines for weight loss without proper medical
                advice.
              </p>
              <p>
                Healthwise360 should create a support article called Wegovy Pill
                vs Rybelsus: Weight Loss vs Diabetes Use because this is likely
                to become a strong AEO query.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="vs-supplements"
              heading="Wegovy Pill vs GLP-1 Supplements"
            >
              <p>
                Wegovy Pill is not a GLP-1 supplement. It is a prescription-only
                medicine.
              </p>
              <p>
                This distinction is important because many users are now
                searching for GLP-1 supplements, natural GLP-1 boosters,
                appetite capsules, and supplement alternatives to Ozempic or
                Wegovy.
              </p>
              <p>
                However, a supplement does not become a GLP-1 medicine just
                because the label uses GLP-1 language.
              </p>
              <p>
                If users want more context, Healthwise360 should internally link
                to:
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  <Link
                    href="/blog/are-glp-1-supplements-real"
                    className="font-medium text-emerald-600 hover:underline"
                  >
                    Are GLP-1 supplements real?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/glp-1-supplements-uk"
                    className="font-medium text-emerald-600 hover:underline"
                  >
                    GLP-1 supplements UK guide
                  </Link>
                </li>
              </ul>
              <p>
                These links help Healthwise360 own the wider semantic topic
                around GLP-1 medicines, supplement marketing, weight loss
                treatment, and pharmacy safety.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="oral-injectable-together"
              heading="Can You Take Oral and Injectable GLP-1s Together?"
            >
              <p>
                No. Users should not take oral Wegovy alongside injectable
                Wegovy, Mounjaro, Ozempic, Saxenda, or another GLP-1 treatment
                unless specifically advised by a qualified healthcare
                professional.
              </p>
              <p>
                Taking more than one GLP-1-style treatment may increase the risk
                of side effects. It may also make it harder for a prescriber to
                monitor safety.
              </p>
              <p>
                Therefore, users should always tell their prescriber about any
                current weight loss treatment, diabetes medicine, supplement,
                herbal remedy, or prescription medication.
              </p>
              <p>
                This is especially important for people using insulin, blood
                sugar medication, thyroid medication, blood thinners, or
                medicines that need careful timing.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="dosage-schedule"
              heading="Wegovy Pill Dosage Schedule UK"
            >
              <p>
                People new to Wegovy Pill usually start on the lowest dose. The
                dose may then increase gradually if the clinician confirms it is
                suitable.
              </p>
              <p>A typical dose schedule is:</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>Days 1–30: 1.5mg once daily</li>
                <li>Days 31–60: 4mg once daily</li>
                <li>Days 61–90: 9mg once daily</li>
                <li>Days 91 onward: 25mg once daily maintenance dose</li>
              </ul>
              <p>
                However, this schedule should always be guided by a clinician.
                Some people may stay on a lower dose for longer because of side
                effects, tolerability, or personal progress.
              </p>
              <p>
                The gradual increase helps the body adjust and may reduce the
                chance of side effects. Therefore, users should not increase
                their dose early or restart after a break without advice.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="how-to-take"
              heading="How to Take Wegovy Pill"
            >
              <p>
                Wegovy Pill should be taken once daily, usually in the morning.
                It should be taken on an empty stomach, swallowed whole, and
                taken with a small amount of plain water.
              </p>
              <p>A simple routine is:</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>Take the tablet when you wake up.</li>
                <li>Use plain water only.</li>
                <li>Do not split, crush, or chew the tablet.</li>
                <li>Wait at least 30 minutes before eating or drinking.</li>
                <li>
                  Wait before taking other oral medicines unless your clinician
                  advises otherwise.
                </li>
              </ul>
              <p>
                This routine matters because oral semaglutide absorption is
                sensitive. Eating, drinking coffee, drinking tea, or taking
                other medicines too soon may reduce absorption.
              </p>
              <p>
                Therefore, the tablet may be easier for some people and less
                convenient for others. It depends on the person&apos;s morning
                routine.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="coffee-tea-food"
              heading="Can You Take Wegovy Pill With Coffee, Tea or Food?"
            >
              <p>
                Users should follow the administration instructions supplied
                with their medication.
              </p>
              <p>
                In general, oral semaglutide needs to be taken on an empty
                stomach with plain water. Users are normally advised to wait
                before having coffee, tea, food, or other oral medicines.
              </p>
              <p>
                This is a strong long-tail SEO opportunity. Healthwise360 should
                create a separate support article called Can You Take Wegovy
                Pill With Coffee?
              </p>
              <p>That article can answer related questions such as:</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>Can you take Wegovy Pill with tea?</li>
                <li>Can you drink water after Wegovy Pill?</li>
                <li>Can you take vitamins after Wegovy Pill?</li>
                <li>Can you take other medicines after Wegovy Pill?</li>
                <li>What happens if you eat too soon after Wegovy Pill?</li>
              </ul>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="side-effects"
              heading="What Are Wegovy Pill Side Effects?"
            >
              <p>
                Like all medicines, Wegovy Pill can cause side effects. Not
                everyone will get them, and many side effects may improve as the
                body adjusts.
              </p>
              <p>Commonly discussed side effects include:</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>Nausea</li>
                <li>Vomiting</li>
                <li>Diarrhoea</li>
                <li>Constipation</li>
                <li>Stomach pain</li>
                <li>Headache</li>
                <li>Fatigue</li>
              </ul>
              <p>
                Side effects may be more noticeable when starting treatment or
                when the dose increases. Therefore, dose progression should be
                reviewed by a clinician.
              </p>
              <p>
                Users should seek medical advice if symptoms are severe,
                persistent, or worsening. They should seek urgent help if they
                experience difficulty breathing, swelling of the face or throat,
                severe stomach pain, or signs of a serious allergic reaction.
              </p>
              <p>
                Healthwise360 should also link this section to a full page
                called Wegovy Pill Side Effects: What UK Users Should Know.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="sick-after-taking"
              heading="What Should You Do If You Are Sick After Taking Wegovy Pill?"
            >
              <p>
                If someone vomits shortly after taking Wegovy Pill, they should
                not automatically take another dose unless advised by a
                healthcare professional.
              </p>
              <p>
                The safer approach is to continue the normal dosing schedule and
                contact the clinical team if unsure. If vomiting continues,
                medical advice may be needed to prevent dehydration or other
                problems.
              </p>
              <p>
                This is another good FAQ-style support section because it
                answers a practical user concern that many provider pages only
                cover briefly.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="alcohol"
              heading="Can You Drink Alcohol While Taking Wegovy Pill?"
            >
              <p>
                Alcohol may be allowed for some people, but it can worsen
                nausea, vomiting, dizziness, dehydration, and stomach
                discomfort.
              </p>
              <p>
                Therefore, people who choose to drink should do so moderately
                and stay hydrated. However, users with diabetes, liver issues,
                pancreatitis risk, or other medical conditions should ask their
                clinician for advice.
              </p>
              <p>
                Healthwise360 should avoid giving a blanket yes or no. The
                better answer is: alcohol depends on medical history, side
                effects, and prescriber guidance.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="pregnancy"
              heading="Can You Take Wegovy Pill While Pregnant or Breastfeeding?"
            >
              <p>
                Wegovy should not be used during pregnancy. It is also not
                generally recommended while breastfeeding.
              </p>
              <p>
                If someone becomes pregnant while using treatment, they should
                stop and contact a healthcare professional. If they are planning
                pregnancy, pregnant, or breastfeeding, they should speak to a
                clinician before starting any GLP-1 treatment.
              </p>
              <p>
                This topic should be covered clearly because it is a high-risk
                safety area.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="diet"
              heading="Do You Need to Follow a Diet on Wegovy Pill?"
            >
              <p>
                Yes. Wegovy Pill works best when used as part of a structured
                weight management plan. It is not a standalone treatment.
              </p>
              <p>Users should focus on:</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>Enough protein</li>
                <li>Gradual fibre intake</li>
                <li>Smaller balanced meals</li>
                <li>Hydration</li>
                <li>Strength training where suitable</li>
                <li>Regular movement</li>
                <li>Sleep and stress support</li>
                <li>Long-term habit building</li>
              </ul>
              <p>
                This is where Healthwise360 can connect medical treatment with
                practical support content. For example, GLP-1 users may also
                need help understanding protein, fibre, constipation, hydration,
                and supplement claims.
              </p>
              <p>
                That is why internal links to the GLP-1 supplement education
                pages are useful, as long as the article clearly states that
                supplements do not replace prescription treatment.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="weight-return"
              heading="Will Weight Return If You Stop Wegovy Pill?"
            >
              <p>
                Weight regain can happen after stopping GLP-1 treatment,
                especially if lifestyle habits are not maintained.
              </p>
              <p>
                Wegovy Pill may support weight loss while it is being taken, but
                long-term success often depends on sustainable food choices,
                activity, and maintenance planning.
              </p>
              <p>
                Users should speak to their clinician before stopping treatment.
                They should also ask providers about maintenance policies, dose
                changes, and support after reaching a target weight.
              </p>
              <p>
                Healthwise360 can link this section to weight tracking tools and
                future maintenance pages. A practical starting point is to{" "}
                <Link
                  href="/tools/weight-loss-tracker"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  track your weight loss progress
                </Link>{" "}
                so you can spot early changes and discuss maintenance with your
                clinical team.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="pharmacy-safety"
              heading="Pharmacy Safety: What to Check Before Paying"
            >
              <p>
                Demand for GLP-1 treatments is high. Therefore, unsafe sellers
                may try to take advantage of users searching for Wegovy Pill
                online.
              </p>
              <p>Before paying, check:</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>Is there a proper clinical assessment?</li>
                <li>Is the pharmacy or provider clearly named?</li>
                <li>Can pharmacy registration be checked?</li>
                <li>Are prices transparent?</li>
                <li>Are side effects explained?</li>
                <li>Is aftercare available?</li>
                <li>Is there a real contact route?</li>
                <li>Are miracle claims avoided?</li>
                <li>Is the offer too cheap to trust?</li>
                <li>Is the seller using social media messages only?</li>
              </ul>
              <p>
                For safety, Healthwise360 should link to{" "}
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  pharmacy safety and GPhC verification
                </Link>
                .
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="how-healthwise360"
              heading="How Healthwise360 Can Help Users Compare Wegovy Pill"
            >
              <p>
                Provider-owned pages naturally focus on their own service,
                pricing, and sign-up funnel. Healthwise360 can win by becoming
                the independent comparison layer.
              </p>
              <p>The winning angle is:</p>
              <blockquote
                className={`border-l-4 p-4 my-4 italic ${darkMode ? "border-emerald-500 bg-slate-900 text-slate-300" : "border-emerald-600 bg-slate-50 text-slate-700"}`}
              >
                Before choosing Wegovy Pill, compare price, provider safety,
                pharmacy checks, tablet vs injection options, and long-term
                support.
              </blockquote>
              <p>
                Healthwise360 already has strong internal pages for this
                journey:
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  <Link
                    href="/wegovy-price-comparison"
                    className="font-medium text-emerald-600 hover:underline"
                  >
                    Wegovy price comparison
                  </Link>
                </li>
                <li>
                  <Link
                    href="/compare/mounjaro-vs-wegovy-vs-saxenda"
                    className="font-medium text-emerald-600 hover:underline"
                  >
                    compare Mounjaro vs Wegovy vs Saxenda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pharmacy-safety-gphc-verification"
                    className="font-medium text-emerald-600 hover:underline"
                  >
                    pharmacy safety and GPhC verification
                  </Link>
                </li>
                <li>
                  <Link
                    href="/methodology"
                    className="font-medium text-emerald-600 hover:underline"
                  >
                    how Healthwise360 compares prices
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/bmi-calculator"
                    className="font-medium text-emerald-600 hover:underline"
                  >
                    check your BMI for weight loss treatment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/are-glp-1-supplements-real"
                    className="font-medium text-emerald-600 hover:underline"
                  >
                    Are GLP-1 supplements real?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/glp-1-supplements-uk"
                    className="font-medium text-emerald-600 hover:underline"
                  >
                    GLP-1 supplements UK guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/weight-loss-tracker"
                    className="font-medium text-emerald-600 hover:underline"
                  >
                    track your weight loss progress
                  </Link>
                </li>
              </ul>
              <p>
                This internal linking structure helps build topical authority
                around Wegovy Pill, oral semaglutide, GLP-1 treatment, weight
                loss price comparison, provider safety, and long-term fat loss
                support.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="reference-notes"
              heading="Reference Notes for Readers"
            >
              <p>The evidence discussed in this guide includes:</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  OASIS 4, a 64-week study of adults with obesity using oral
                  semaglutide 25mg alongside lifestyle changes. Individual
                  results vary.
                </li>
                <li>
                  STEP UP, a 72-week study involving Wegovy semaglutide
                  treatment. Individual results vary.
                </li>
                <li>
                  SURMOUNT-1, a 72-week study of adults with obesity using
                  Mounjaro tirzepatide 15mg. Individual results vary.
                </li>
              </ul>
              <p>
                Important note: these are separate studies with different
                designs and populations. They are not direct head-to-head
                trials. Therefore, figures should be used for context, not as a
                guarantee of personal results.
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
                    What is Wegovy Pill?
                  </h3>
                  <p>
                    Wegovy Pill is a prescription-only GLP-1 medication in
                    tablet form. It contains semaglutide and is designed to
                    support medically supervised weight loss and weight
                    management. Unlike Wegovy Pen, which is injected weekly,
                    Wegovy Pill is taken once daily as an oral tablet.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    How is Wegovy Pill different from the Wegovy injection?
                  </h3>
                  <p>
                    Wegovy Pill is taken once daily as a tablet, while Wegovy
                    Pen is taken once weekly as an injection. The tablet avoids
                    needles and may be stored differently, but it must be taken
                    on an empty stomach with strict timing. The injection does
                    not require the same daily fasting routine.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    What dose of Wegovy Pill do new users usually start with?
                  </h3>
                  <p>
                    New users usually start with the lowest dose, 1.5mg once
                    daily. The dose may then increase gradually to 4mg, 9mg, and
                    25mg if suitable. However, dose changes should always be
                    reviewed by a clinician, and some people may stay on a lower
                    dose for longer.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    How effective is Wegovy Pill for weight loss?
                  </h3>
                  <p>
                    In OASIS 4, oral semaglutide 25mg was studied over 64 weeks
                    alongside lifestyle changes, with average weight loss
                    reported around 16.6%. However, individual results vary, and
                    the study does not guarantee what one person will lose.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    How do you take Wegovy Pill correctly?
                  </h3>
                  <p>
                    Wegovy Pill is usually taken once daily in the morning on an
                    empty stomach. It should be swallowed whole with a small
                    amount of plain water. Users should wait before eating,
                    drinking, or taking other oral medicines, and they should
                    not split, crush, or chew the tablet.
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
                Wegovy Pill is a major development in UK weight loss treatment
                because it gives eligible adults a prescription-only oral
                semaglutide option. For people who dislike injections, this may
                feel like a more convenient route. However, the tablet still
                requires clinical assessment, correct timing, and careful safety
                checks.
              </p>
              <p>
                The most important point is that Wegovy Pill should not be
                treated like a normal diet pill or supplement. It is a regulated
                medicine, and users should compare providers carefully before
                paying.
              </p>
              <p>
                For Healthwise360, this topic is a strong SEO, AEO, and GEO
                opportunity. Most provider pages focus on pre-order, price, and
                conversion. Healthwise360 can win by offering something more
                helpful: independent comparison, trial context, price
                transparency, pharmacy safety, GLP-1 supplement clarity, and
                long-term support.
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
