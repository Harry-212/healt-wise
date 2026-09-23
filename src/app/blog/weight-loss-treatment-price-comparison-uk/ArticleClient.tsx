"use client";
import { GooglePreferredSourceButton } from "@/components/analytics/GooglePreferredSourceButton";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import BlogArticleColumn from "@/components/blog/BlogArticleColumn";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection, GuideTable } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";
import { blogImgPath, PRICE_COMPARISON_HERO_PNG } from "./blog-assets";

const SHARE_PATH = "/blog/weight-loss-treatment-price-comparison-uk";
const HERO_SRC = blogImgPath(PRICE_COMPARISON_HERO_PNG);
const COMPARE_HUB_HREF = "/compare/mounjaro-vs-wegovy-vs-saxenda";

/** In-article CTA buttons — matches the client's [BUTTON: ...] markers in the content brief. */
const CTA_BUTTON_CLASSNAME =
  "inline-flex w-full items-center justify-center rounded-md bg-gradient-to-b from-emerald-600 to-emerald-700 px-5 py-3 text-sm font-bold text-white shadow-md ring-1 ring-emerald-900/10 transition hover:from-emerald-700 hover:to-emerald-800 sm:w-auto";
const CTA_PRIMARY_BUTTON_CLASSNAME =
  "inline-flex w-full items-center justify-center rounded-md bg-gradient-to-b from-emerald-600 to-emerald-700 px-7 py-4 text-base font-bold text-white shadow-lg ring-1 ring-emerald-900/10 transition hover:from-emerald-700 hover:to-emerald-800 sm:w-auto";

function CtaButton({
  children,
  primary = false,
}: {
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <div className="my-6">
      <Link
        href={COMPARE_HUB_HREF}
        className={
          primary ? CTA_PRIMARY_BUTTON_CLASSNAME : CTA_BUTTON_CLASSNAME
        }
      >
        {children}
      </Link>
    </div>
  );
}

const TOC = [
  { id: "cost-overview", label: "How much does weight loss treatment cost?" },
  { id: "treatments-compared", label: "What treatments are compared here?" },
  { id: "price-comparison", label: "Price comparison by dose" },
  { id: "quick-comparison", label: "Quick cost comparison" },
  { id: "actual-vs-advertised", label: "Actual cost vs advertised price" },
  { id: "how-to-compare", label: "How to compare prices properly" },
  { id: "annual-cost", label: "Estimated annual cost of treatment" },
  { id: "cheapest", label: "Which treatment is cheapest?" },
  { id: "wegovy-vs-mounjaro", label: "Is Wegovy cheaper than Mounjaro?" },
  { id: "nhs", label: "Can you get treatment on the NHS?" },
  { id: "methodology", label: "How we compare prices" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "best-value", label: "Does the cheapest provider win?" },
  { id: "conclusion", label: "Conclusion" },
  { id: "important-information", label: "Important information" },
];

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);
  const shareUrl = `${siteOrigin()}${SHARE_PATH}`;

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

        <BlogArticleColumn toc={TOC} darkMode={darkMode}>
          <header
            className={`mb-8 border-b pb-8 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
          >
            <h1
              className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              Weight Loss Treatment Price Comparison UK 2026: Mounjaro, Wegovy
              &amp; Saxenda
            </h1>
            <div
              className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Updated 13 September 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />9 min read
              </span>
            </div>

            <BlogArticleHeroImage
              src={HERO_SRC}
              alt="Weight Loss Treatment Price Comparison UK 2026 — Mounjaro, Wegovy and Saxenda pricing details"
            />
            <div
              id="guide-article-hero-end"
              aria-hidden
              className="pointer-events-none h-0 w-full overflow-hidden"
            />
          </header>

          <div
            className={`space-y-4 pb-4 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}
          >
            <p className="text-lg md:text-xl">
              Private weight loss treatment in the UK can cost anywhere from
              around <strong>£130 to £350+ per month</strong>, depending on the
              medication, dose and provider.
            </p>
            <p>
              But the cheapest advertised starter price does not always mean the
              lowest overall cost. Prices can increase as your dose changes,
              while consultation fees, delivery charges, subscriptions and
              ongoing clinical support can all affect what you actually pay.
            </p>
            <p>
              This guide compares typical UK private prices for Mounjaro, Wegovy
              and Saxenda, including dose-level costs and the additional charges
              worth checking before choosing a provider. Healthwise360 also
              tracks advertised prices across more than 60 UK weight-management
              providers, allowing you to compare the same medication and dose
              between different providers rather than relying only on headline
              offers.
            </p>
            <CtaButton>
              Compare Current UK Weight Loss Treatment Prices
            </CtaButton>
            <p className="text-sm italic opacity-90">
              Prices change regularly. Always confirm the latest price,
              availability, consultation requirements and delivery costs
              directly with the provider before paying.
            </p>
            <p className="text-sm italic opacity-90">
              Prescription weight-management medicines can only be supplied
              following an appropriate clinical assessment. This page compares
              costs and provider information; it does not recommend a particular
              medicine or replace advice from a qualified healthcare
              professional.
            </p>
          </div>

          <article
            className={`space-y-8 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}
          >
            <GuideSection
              darkMode={darkMode}
              id="cost-overview"
              heading="How Much Does Weight Loss Treatment Cost in the UK?"
            >
              <p className="text-lg md:text-xl">
                Private weight loss treatment typically costs between{" "}
                <strong>£130 and £350+ per month</strong> in the UK. The amount
                you pay depends mainly on which medicine you are prescribed,
                your current dose, the provider you use, consultation charges,
                delivery costs, subscription or programme fees, and what ongoing
                clinical support is included.
              </p>
              <p>
                This makes straightforward price comparison more difficult than
                it first appears. A pharmacy may advertise a competitive starter
                price, for example, but that does not necessarily tell you how
                much you could pay once your dose increases. For that reason,
                one of the most useful ways to compare providers is to check the
                same medication at the same dose.
              </p>
              <p>
                If you are comparing Mounjaro 5 mg, for example, compare 5 mg
                prices between providers rather than comparing a Mounjaro
                starter offer with the cost of a higher-dose treatment
                elsewhere. Our live comparison matrix tracks provider pricing by
                dose to make this type of like-for-like comparison easier — see
                the{" "}
                <Link
                  href={COMPARE_HUB_HREF}
                  className="font-medium text-emerald-600 hover:underline"
                >
                  live UK weight loss treatment price comparison
                </Link>
                .
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="treatments-compared"
              heading="What Weight Loss Treatments Are Compared in This Guide?"
            >
              <p>
                This guide focuses on three prescription injectable
                weight-management treatments commonly compared through UK
                private providers. The treatment and dose appropriate for an
                individual should be determined through a clinical assessment
                rather than by price alone.
              </p>
              <ol className="list-decimal space-y-3 pl-5">
                <li>
                  <strong>Mounjaro</strong> contains tirzepatide and is
                  administered once weekly. It acts on both GIP and GLP-1
                  receptors and is available in several dose strengths ranging
                  from 2.5 mg to 15 mg.
                </li>
                <li>
                  <strong>Wegovy</strong> contains semaglutide and is also
                  administered once weekly. Treatment normally begins at a low
                  dose before gradually increasing according to the prescribed
                  dosing schedule.
                </li>
                <li>
                  <strong>Saxenda</strong> contains liraglutide. Unlike Mounjaro
                  and Wegovy, Saxenda is normally injected once daily rather
                  than once weekly.
                </li>
              </ol>
              <p>
                All three are prescription-only medicines. If you want to
                compare the medicines themselves rather than simply their cost,
                see our independent{" "}
                <Link
                  href="/compare/mounjaro-vs-wegovy-vs-saxenda"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  Mounjaro vs Wegovy vs Saxenda comparison
                </Link>
                .
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="price-comparison"
              heading="Weight Loss Treatment Price Comparison: Mounjaro, Wegovy & Saxenda"
            >
              <p>
                Prices vary considerably between providers and can change
                frequently. The figures below should be treated as indicative
                market ranges, not guaranteed prices. For provider-by-provider
                prices checked against our latest dataset, use the{" "}
                <Link
                  href={COMPARE_HUB_HREF}
                  className="font-medium text-emerald-600 hover:underline"
                >
                  live comparison
                </Link>{" "}
                instead.
              </p>
              <CtaButton>Compare Live Provider Prices</CtaButton>

              <h3
                className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Mounjaro Price by Dose
              </h3>
              <p>
                Mounjaro is available in six dose strengths: 2.5 mg, 5 mg, 7.5
                mg, 10 mg, 12.5 mg, and 15 mg. The cost usually increases as the
                dose rises. When comparing Mounjaro prices, check your actual
                dose alongside the standard price, introductory discount,
                repeat-order price, delivery, consultation charges and
                subscription requirements.
              </p>
              <div
                className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}
              >
                <GuideTable
                  headers={["Dose", "Indicative price per pen"]}
                  rows={[
                    { cells: ["2.5 mg (starter)", "£130 to £180"] },
                    { cells: ["5 mg", "£155 to £200"] },
                    { cells: ["7.5 mg", "£200 to £270"] },
                    { cells: ["10 mg", "£220 to £305"] },
                    { cells: ["12.5 mg", "£245 to £315"] },
                    { cells: ["15 mg", "£260 to £340"] },
                  ]}
                />
              </div>
              <p className="text-sm italic opacity-90">
                Indicative prices based on Healthwise360 monitoring of UK
                providers. Provider prices, discounts and availability can
                change — check the{" "}
                <Link
                  href="/mounjaro-price-comparison"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  live Mounjaro price comparison
                </Link>{" "}
                before purchasing.
              </p>
              <p>
                The difference between the lowest and highest provider price
                becomes particularly noticeable at higher doses. That means
                someone comparing only introductory 2.5 mg prices may get a very
                different picture from someone comparing the expected cost later
                in treatment.
              </p>

              <h3
                className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Wegovy Price by Dose
              </h3>
              <p>
                Wegovy follows a gradual dose-escalation schedule. Treatment
                normally starts at 0.25 mg once weekly before increasing through
                0.5 mg, 1 mg, 1.7 mg and the standard 2.4 mg weekly dose where
                clinically appropriate.
              </p>
              <div
                className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}
              >
                <GuideTable
                  headers={["Dose", "Indicative price"]}
                  rows={[
                    { cells: ["0.25 mg (starter)", "£130 to £170"] },
                    { cells: ["0.5 mg", "£145 to £185"] },
                    { cells: ["1 mg", "£175 to £220"] },
                    { cells: ["1.7 mg", "£215 to £270"] },
                    { cells: ["2.4 mg (maintenance)", "£240 to £295"] },
                  ]}
                />
              </div>
              <p>
                Patients should not increase their dose independently — the
                appropriate dose and escalation schedule must be determined by
                the prescribing healthcare professional. For more detailed
                information about Wegovy, see our{" "}
                <Link
                  href="/what-is-wegovy"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  Wegovy weight loss guide
                </Link>
                , or compare provider pricing on our{" "}
                <Link
                  href="/wegovy-price-comparison"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  Wegovy prices UK
                </Link>{" "}
                page.
              </p>

              <h3
                className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Saxenda Price in the UK
              </h3>
              <p>
                Saxenda differs from Mounjaro and Wegovy because it is normally
                administered once daily. This means its pricing structure cannot
                always be compared directly with the cost of a single weekly
                treatment pen.
              </p>
              <div
                className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}
              >
                <GuideTable
                  headers={["Dosing", "Indicative monthly cost"]}
                  rows={[
                    {
                      cells: [
                        "0.6 mg–3 mg (titration range)",
                        "£150 to £290 per month",
                      ],
                    },
                  ]}
                />
              </div>
              <p>
                The exact monthly cost depends on dose, pack quantity and
                provider — a seemingly lower package price does not necessarily
                mean Saxenda will be less expensive over an equivalent treatment
                period. When comparing Saxenda with weekly medicines, look at
                the estimated monthly cost, not simply the price of an
                individual pack. For further treatment information, see our{" "}
                <Link
                  href="/what-is-saxenda"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  Saxenda treatment overview
                </Link>
                .
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="quick-comparison"
              heading="Quick Weight Loss Treatment Cost Comparison"
            >
              <p>
                For a simple overview, the current private-market picture looks
                approximately like this:
              </p>
              <div
                className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}
              >
                <GuideTable
                  headers={[
                    "Treatment",
                    "Approximate monthly range",
                    "Dosing frequency",
                  ]}
                  rows={[
                    { cells: ["Mounjaro", "£130 to £340+", "Weekly"] },
                    { cells: ["Wegovy", "£130 to £295+", "Weekly"] },
                    { cells: ["Saxenda", "£150 to £290", "Daily"] },
                  ]}
                />
              </div>
              <p>
                These ranges are useful for budgeting, but they should not be
                used to decide which medicine is clinically appropriate. The
                price you personally pay will depend on your prescription, dose
                and provider.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="actual-vs-advertised"
              heading="Actual Cost vs Advertised Price: What Can Increase the Total?"
            >
              <p>
                One of the most important things to understand when comparing
                weight loss treatment prices is that the advertised medication
                price may not be the final amount you pay. Several additional
                costs can change the total:
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  <strong>Consultation fees</strong>: some providers include the
                  clinical consultation within the advertised treatment price,
                  others charge separately. Check whether initial and repeat
                  consultations are included before comparing one provider with
                  another.
                </li>
                <li>
                  <strong>Delivery charges</strong>: delivery may be included or
                  charged separately. A provider with a slightly cheaper
                  medicine price can become more expensive once delivery is
                  added.
                </li>
                <li>
                  <strong>Dose increases</strong>: for medicines using dose
                  escalation, your monthly spend may rise as your prescribed
                  dose increases — one of the biggest reasons not to compare
                  providers using starter prices alone.
                </li>
                <li>
                  <strong>Subscription pricing</strong>: some providers offer
                  one-off purchases, while others use recurring subscriptions or
                  treatment programmes. Check whether the advertised price
                  depends on signing up to a subscription.
                </li>
                <li>
                  <strong>Introductory discounts</strong>: a discounted first
                  order can make one provider appear considerably cheaper. Check
                  what you will pay on your second and subsequent orders.
                </li>
                <li>
                  <strong>Monitoring or programme fees</strong>: some services
                  include additional clinical monitoring, coaching or
                  weight-management support, which may be included within the
                  medicine price or charged separately.
                </li>
              </ul>
              <p>
                For a fair comparison, calculate the total expected monthly
                cost, rather than comparing one number from an advert. See our{" "}
                <Link
                  href="/compare/mounjaro-vs-wegovy-vs-saxenda"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  current UK provider prices
                </Link>{" "}
                for a full breakdown.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="how-to-compare"
              heading="How to Compare Weight Loss Treatment Prices Properly"
            >
              <p>
                A useful price comparison involves more than sorting providers
                from cheapest to most expensive. Here are five checks worth
                making.
              </p>

              <h3
                className={`mt-6 text-base font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}
              >
                1. Check the Supplying Pharmacy
              </h3>
              <p>
                Confirm which pharmacy will actually dispense the medicine. You
                can independently check pharmacy registration using the General
                Pharmaceutical Council register. Healthwise360 records pharmacy
                and regulatory information within its comparison data to make
                provider checking easier — see our{" "}
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  guide to verifying pharmacies
                </Link>
                .
              </p>

              <h3
                className={`mt-6 text-base font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}
              >
                2. Compare the Same Medication and Dose
              </h3>
              <p>
                Make sure you are comparing like with like. Mounjaro 10 mg vs
                Mounjaro 10 mg is a meaningful provider price comparison;
                comparing a discounted 2.5 mg starter pen with a different
                provider&apos;s 10 mg price is not. Dose-level comparison
                becomes increasingly important as treatment progresses.
              </p>

              <h3
                className={`mt-6 text-base font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}
              >
                3. Look Beyond the Headline Price
              </h3>
              <p>
                Before deciding which provider appears cheaper, check
                consultation charges, delivery, subscriptions, repeat-order
                prices, introductory promotions, and additional programme fees.
                A £5 saving on the advertised treatment price can disappear
                quickly if another provider includes delivery or consultations.
              </p>

              <h3
                className={`mt-6 text-base font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}
              >
                4. Consider the Service as Well as Price
              </h3>
              <p>
                Price matters, but it should not be the only factor. Also check
                how the clinical assessment works, who supplies the
                prescription, the dispensing pharmacy, access to clinical
                support, delivery arrangements, independent customer reviews,
                and how clearly the provider explains its fees. For prescription
                treatment, the cheapest price is not automatically the
                best-value service.
              </p>

              <h3
                className={`mt-6 text-base font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}
              >
                5. Use Current Data
              </h3>
              <p>
                Weight loss treatment prices can change frequently. A comparison
                article published several months ago can become outdated even if
                the treatment information remains accurate. Healthwise360
                maintains a live provider matrix separately from this guide,
                covering more than 60 UK weight-management providers at the time
                this page was last updated, so you can check current prices by
                treatment and dose.
              </p>
              <CtaButton>Compare Current Provider Prices</CtaButton>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="annual-cost"
              heading="How Much Could Weight Loss Treatment Cost Per Year?"
            >
              <p>
                The annual cost can be significantly higher than the number
                suggested by an introductory monthly offer. As a rough
                illustration, based on higher and maintenance-range doses:
              </p>
              <div
                className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}
              >
                <GuideTable
                  headers={[
                    "Treatment",
                    "Approximate monthly cost",
                    "Approximate annual cost",
                  ]}
                  rows={[
                    { cells: ["Mounjaro", "£260 to £340", "£3,120 to £4,080"] },
                    { cells: ["Wegovy", "£240 to £295", "£2,880 to £3,540"] },
                    { cells: ["Saxenda", "£200 to £290", "£2,400 to £3,480"] },
                  ]}
                />
              </div>
              <p>
                These figures are estimates rather than quotes. Your actual
                first-year cost may also differ because treatment commonly
                involves a period of dose escalation rather than spending an
                entire year at one dose. Provider prices can also change during
                treatment. For this reason, it is sensible to consider potential
                longer-term affordability, not simply whether the first month
                fits your budget.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="cheapest"
              heading="Which Weight Loss Treatment Is Cheapest?"
            >
              <p>
                There is no single treatment that is always cheapest for every
                person or every stage of treatment. At starter doses, Mounjaro
                and Wegovy can sometimes appear relatively close in price. At
                higher doses, the gap between providers and medicines can become
                much larger. Saxenda uses a different daily dosing structure,
                making direct pen-to-pen comparisons less useful.
              </p>
              <p>
                More importantly, medication should not be selected primarily
                according to price — the appropriate treatment depends on
                clinical factors that need to be assessed by a qualified
                prescriber. A more useful question is: &ldquo;What does the
                treatment I have been prescribed cost across reputable UK
                providers at my current dose?&rdquo; That is the comparison our{" "}
                <Link
                  href="/prices/cheapest-options-uk"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  cheapest weight loss treatment UK cost comparison guide
                </Link>{" "}
                is designed to answer.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="wegovy-vs-mounjaro"
              heading="Is Wegovy Cheaper Than Mounjaro?"
            >
              <p>
                Sometimes — but not consistently. At lower dose levels, prices
                for Mounjaro and Wegovy can overlap considerably. As doses rise,
                Mounjaro can become more expensive at some providers,
                particularly at its higher strengths.
              </p>
              <p>
                However, provider pricing changes regularly, so a fixed
                statement that one medicine is always cheaper than the other
                would be misleading. If you have already been prescribed a
                treatment, compare the exact dose across several providers
                rather than relying on general averages.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="nhs"
              heading="Can You Get Weight Loss Treatment on the NHS?"
            >
              <p>
                Some prescription weight-management medicines are available
                through NHS pathways for eligible patients, but access is
                subject to clinical criteria and local service arrangements. In
                England, access to Mounjaro for weight management is being
                introduced through a phased NHS rollout, including specialist
                weight-management services and prioritised groups in primary
                care.
              </p>
              <p>
                Eligibility is therefore different from simply being medically
                licensed to use the medicine privately. Wegovy may also be
                prescribed through eligible NHS weight-management pathways. If
                you want to explore NHS treatment, speak to your GP or relevant
                NHS weight-management service rather than assuming that private
                eligibility automatically means NHS eligibility.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="methodology"
              heading="How Healthwise360 Compares Weight Loss Treatment Prices"
            >
              <p>
                Healthwise360 is an independent comparison platform. We do not
                prescribe weight loss medication — our purpose is to make
                provider information easier to compare before someone begins a
                consultation. Our comparison process considers:
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  <strong>Pharmacy registration</strong>: we check supplying
                  pharmacy information against the General Pharmaceutical
                  Council register.
                </li>
                <li>
                  <strong>Dose-specific pricing</strong>: where possible, we
                  record prices at individual dose levels rather than publishing
                  only an introductory &ldquo;from&rdquo; price.
                </li>
                <li>
                  <strong>Additional costs</strong>: we look for charges such as
                  delivery or other fees that may affect the total amount paid.
                </li>
                <li>
                  <strong>Provider information</strong>: we record provider and
                  dispensing-pharmacy information to help users understand who
                  is supplying the service.
                </li>
                <li>
                  <strong>Data updates</strong>: weight loss treatment prices
                  change frequently, so our live comparison data is reviewed and
                  updated separately from longer-form guides such as this
                  article.
                </li>
              </ul>
              <p>
                Read more about our approach in the{" "}
                <Link
                  href="/methodology"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  Healthwise360 comparison methodology
                </Link>
                .
              </p>
            </GuideSection>

            <section
              id="faq"
              className={`mt-16 border-t pt-10 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
            >
              <h2
                className={`mb-8 text-3xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                FAQ: Weight Loss Treatment Prices UK
              </h2>
              <div className="space-y-8">
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    1. What is the cheapest weight loss treatment in the UK?
                  </h3>
                  <p>
                    There is no single cheapest option in every situation.
                    Starter doses of some private treatments can begin at around
                    £130, but introductory pricing does not necessarily
                    represent the cost later in treatment. The most meaningful
                    comparison is usually the price of the treatment and dose
                    you have actually been prescribed across several providers.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    2. How much does Mounjaro cost per month in the UK?
                  </h3>
                  <p>
                    Private Mounjaro prices can range from roughly £130 at lower
                    doses to £340 or more at higher doses, depending on the
                    provider. Prices frequently change, so check current
                    provider-level data on our{" "}
                    <Link
                      href="/mounjaro-price-comparison"
                      className="font-medium text-emerald-600 hover:underline"
                    >
                      Mounjaro price comparison
                    </Link>{" "}
                    page before purchasing.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    3. How much does Wegovy cost privately in the UK?
                  </h3>
                  <p>
                    Typical private prices for the commonly prescribed Wegovy
                    dose range can run from approximately £130 to £295+,
                    depending on dose and provider. Additional charges can
                    increase the overall monthly cost.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    4. Is Wegovy cheaper than Mounjaro?
                  </h3>
                  <p>
                    It can be at some dose levels and with some providers,
                    particularly when comparing higher Mounjaro doses. However,
                    neither treatment is universally cheaper — provider prices
                    and promotions change, so compare the specific doses
                    relevant to you.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    5. Do weight loss treatment prices increase when the dose
                    increases?
                  </h3>
                  <p>
                    Often, yes. Higher-strength Mounjaro and Wegovy doses can
                    cost substantially more than starter doses. This is why
                    comparing only the first month&apos;s price can give an
                    unrealistic idea of longer-term costs.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    6. Are there costs in addition to the medication?
                  </h3>
                  <p>
                    There can be. Depending on the provider, additional costs
                    may include consultations, delivery, subscriptions, clinical
                    monitoring, and other programme charges. Check the complete
                    pricing structure before committing to treatment.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    7. How do I check whether an online pharmacy is legitimate?
                  </h3>
                  <p>
                    Check the details of the pharmacy supplying your medicine
                    and confirm its registration through the General
                    Pharmaceutical Council register. Do not rely only on
                    branding or an online review score — you should also expect
                    an appropriate clinical assessment before prescription-only
                    weight-management medicine is supplied.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    8. Where can I compare weight loss treatment prices from
                    different UK providers?
                  </h3>
                  <p>
                    Healthwise360 maintains an interactive{" "}
                    <Link
                      href={COMPARE_HUB_HREF}
                      className="font-medium text-emerald-600 hover:underline"
                    >
                      comparison matrix
                    </Link>{" "}
                    covering more than 60 UK weight-management providers. You
                    can filter and compare provider prices at individual dose
                    levels and review corresponding pharmacy and provider
                    information.
                  </p>
                </div>
              </div>
              <CtaButton>Compare UK Weight Loss Treatment Prices</CtaButton>
            </section>

            <GuideSection
              darkMode={darkMode}
              id="best-value"
              heading="Does the Cheapest Provider Offer the Best Value?"
            >
              <p>
                Not necessarily. Price is useful when you are comparing
                equivalent services, but it should be considered alongside
                pharmacy regulation, prescribing process, clinical support,
                delivery, transparency, provider reputation, and the total cost
                rather than the introductory price.
              </p>
              <p>
                For prescription medicines, a provider being £5 or £10 cheaper
                should not outweigh concerns about the quality or legitimacy of
                the service. The aim should be to make a safe, informed and
                financially realistic comparison.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="conclusion"
              heading="Conclusion: Compare the Full Cost, Not Just the Starter Price"
            >
              <p>
                Weight loss treatment prices in the UK can vary considerably
                between medicines, dose levels and providers. As a broad guide:
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  <strong>Mounjaro</strong>: approximately £130 to £340+
                  depending on dose
                </li>
                <li>
                  <strong>Wegovy</strong>: approximately £130 to £295+ across
                  the commonly compared standard dose range
                </li>
                <li>
                  <strong>Saxenda</strong>: approximately £150 to £290 per month
                  depending on dose and provider
                </li>
              </ul>
              <p>
                But those numbers only tell part of the story. Consultation
                fees, delivery charges, subscriptions, introductory discounts
                and dose increases can all change the actual amount you pay. The
                most useful approach is to compare the same treatment at the
                same dose, check the total cost, and verify the provider and
                supplying pharmacy.
              </p>
              <p>
                Healthwise360 tracks current advertised prices across more than
                60 UK weight-management providers to make that comparison
                easier.
              </p>
              <CtaButton primary>
                Compare Current Weight Loss Treatment Prices
              </CtaButton>
              <p>
                Before starting or changing any prescription weight-management
                treatment, speak to an appropriately qualified healthcare
                professional.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="important-information"
              heading="Important Information"
            >
              <p className="text-sm italic opacity-90">
                This article is provided for general informational and
                price-comparison purposes only and does not constitute medical
                advice.
              </p>
              <p className="text-sm italic opacity-90">
                Mounjaro, Wegovy and Saxenda are prescription-only medicines in
                the UK. Suitability, eligibility, dose and ongoing treatment
                must be assessed by an appropriate healthcare professional.
              </p>
              <p className="text-sm italic opacity-90">
                Prices shown on this page are indicative and may change without
                notice. Promotions, eligibility requirements, delivery costs and
                provider terms can also vary.
              </p>
              <p className="text-sm italic opacity-90">
                Always confirm the current price and supplying pharmacy directly
                before making a purchase.
              </p>
              <p className="text-sm font-medium opacity-90">
                Last reviewed: 13 September 2026
              </p>
            </GuideSection>
          </article>

          <div className="mt-10">
            <GuideSharePanel
              url={shareUrl}
              title="Weight Loss Treatment Price Comparison UK 2026: Mounjaro, Wegovy & Saxenda"
              description="Compare UK weight loss treatment prices in 2026. See Mounjaro, Wegovy and Saxenda costs by dose, plus consultation, delivery and ongoing fees."
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
