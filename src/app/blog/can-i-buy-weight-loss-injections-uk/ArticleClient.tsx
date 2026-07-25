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
  CAN_I_BUY_HERO_PNG,
} from "./blog-assets";

const SHARE_PATH = "/blog/can-i-buy-weight-loss-injections-uk";
const TITLE = "Can I Buy Weight Loss Injections in the UK? Safe Provider and Price Guide";
const DESCRIPTION =
  "Can I buy weight loss injections in the UK? Learn safe routes, provider checks, prices and red flags before treatment.";
const HERO_SRC = blogImgPath(CAN_I_BUY_HERO_PNG);

const TOC = [
  { id: "intro", label: "Can I buy weight loss injections in the UK?" },
  { id: "can-i-buy-online", label: "Can I buy weight loss injections online?" },
  { id: "what-are-they", label: "What are weight loss injections?" },
  { id: "why-search", label: "Why people ask this question" },
  { id: "private-vs-nhs", label: "Private access vs NHS access" },
  { id: "cost", label: "How much do they cost?" },
  { id: "safe-provider", label: "What makes a safe provider?" },
  { id: "warning-signs", label: "Warning signs before you buy" },
  { id: "not-a-quick-fix", label: "Weight loss injections are not a quick fix" },
  { id: "which-is-best", label: "Which weight loss injection is best?" },
  { id: "how-to-compare", label: "How to compare providers properly" },
  { id: "why-healthwise360", label: "Why independent comparison helps" },
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
            Can I Buy Weight Loss Injections UK
          </span>
        </nav>

        <BlogArticleColumn toc={TOC} darkMode={darkMode}>
          <header
            className={`mb-8 border-b pb-8 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
          >
            <h1
              className={`mb-6 text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl md:text-[44px] ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              Can I Buy Weight Loss Injections in the UK? Safe Provider and Price Guide
            </h1>
            <div
              className={`mb-8 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                29 Jun 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                10 min read
              </span>
            </div>

            <BlogArticleHeroImage
              src={HERO_SRC}
              alt="An adult sitting in a cozy UK home, looking with hope at a tablet screen showcasing a trustworthy weight loss treatment comparison portal"
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
              heading="Can I Buy Weight Loss Injections in the UK? Safe Provider and Price Guide"
            >
              <p className="text-lg md:text-xl">
                Yes, you may be able to buy weight loss injections in the UK through a regulated online or in-person consultation pathway. However, weight loss injections are prescription medicines, so they should only be supplied after a proper clinical assessment.
              </p>
              <p>
                This means the safest question is not simply &ldquo;can I buy weight loss injections?&rdquo; A better question is: &ldquo;Can I access weight loss treatment safely, legally, and at a fair long-term price?&rdquo;
              </p>
              <p>
                This guide explains how weight loss injections work in the UK, what checks should happen before treatment, how to compare provider prices, and what red flags to avoid. It is written for people who want clear, practical information before starting a consultation.
              </p>
              <p>
                This is where platforms like Healthwise360 play a vital role. Healthwise360 helps users{" "}
                <Link
                  href="/"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  compare weight loss treatment prices
                </Link>
                , review pharmacy checks, evaluate ongoing provider support, and verify safety information before choosing where to speak to a prescriber.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="can-i-buy-online"
              heading="Can I Buy Weight Loss Injections Online?"
            >
              <p>
                You may be able to access weight loss injections online in the UK, but only through a regulated healthcare route. A legitimate provider should ask health questions, check your suitability, and arrange clinician review before any treatment is approved.
              </p>
              <p>
                In most cases, the process should include:
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>A medical questionnaire or consultation</li>
                <li>BMI and eligibility checks</li>
                <li>Review of your medical history</li>
                <li>Review of current medicines</li>
                <li>Clinical approval if suitable</li>
                <li>Supply through a registered pharmacy</li>
                <li>Information about side effects and aftercare</li>
              </ul>
              <p>
                However, if a website offers prescription injections without proper checks, it should be treated as unsafe. You should also be careful with social media sellers, private message offers, and websites that promise instant fat loss.
              </p>
              <p>
                Therefore, the answer is yes, but only if the route includes proper assessment and regulated supply.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="what-are-they"
              heading="What Are Weight Loss Injections?"
            >
              <p>
                Weight loss injections are prescription treatments used to support weight management in eligible adults. In the UK, the most commonly discussed options include Wegovy, Mounjaro, and Saxenda-style treatments.
              </p>
              <p>
                These medicines may help reduce appetite and support fullness. However, they are not quick fixes, and they should usually be used alongside diet, physical activity, and clinical guidance.
              </p>
              <p>
                Besides that, weight loss injections are not suitable for everyone. A prescriber may need to consider your BMI, weight-related conditions, medical history, current medicines, pregnancy status, and previous treatment experience.
              </p>
              <p>
                To understand your starting baseline, you can{" "}
                <Link
                  href="/tools/bmi-calculator"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  check your BMI for weight loss treatment
                </Link>{" "}
                to see if your measurements align with the medical criteria established for these advanced prescription treatments.
              </p>
              <p>
                This is why a proper consultation matters. The goal is not just to access treatment. The goal is to check whether treatment is appropriate and safe for you.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="why-search"
              heading="Why People Ask “Can I Buy Weight Loss Injections”"
            >
              <p>
                People asking this are often close to taking action, but they may
                still be unsure about legality, safety, price, or provider
                choice.
              </p>
              <p>
                Some users want to know whether they can buy privately. Others
                want to know whether they can get injections on the NHS.
                Meanwhile, many people want to compare Mounjaro, Wegovy, price,
                delivery, and reviews before deciding.
              </p>
              <p>
                Provider pages often answer with quick eligibility quizzes,
                product cards, reviews, delivery promises, and headline prices.
                However, many pages focus mainly on their own service.
              </p>
              <p>
                Health Wise takes a comparison-led approach. Instead of pushing
                one provider, we help users compare the wider market more
                carefully. Having tools to{" "}
                <Link
                  href="/tools/weight-loss-tracker"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  track your weight loss progress
                </Link>{" "}
                also gives patients support once they begin therapy.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="private-vs-nhs"
              heading="Private Access vs NHS Access"
            >
              <p>
                There are two broad routes for weight loss injections in the UK: NHS access and private access.
              </p>
              <p>
                NHS access depends on eligibility, local services, and clinical need. In many cases, NHS treatment may involve specialist weight management services or phased rollout through primary care for people who meet strict criteria.
              </p>
              <p>
                Private access may be faster for some users, but it usually involves ongoing monthly cost. Therefore, the decision should not be based only on speed or convenience.
              </p>
              <p>
                Before paying privately, users should ask:
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>Am I likely to meet eligibility criteria?</li>
                <li>Do I understand the monthly cost?</li>
                <li>Does the provider use a proper clinical process?</li>
                <li>Is the pharmacy route verifiable?</li>
                <li>What support is included after approval?</li>
                <li>What happens if I have side effects?</li>
                <li>What happens when I reach my goal weight?</li>
              </ul>
              <p>
                To make the best-informed decision, it is wise to{" "}
                <Link
                  href="/compare/mounjaro-vs-wegovy-vs-saxenda"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  compare Mounjaro vs Wegovy vs Saxenda
                </Link>{" "}
                to check the key differences in dosing structures, monthly cost, and expected health benefits across each medication.
              </p>
              <p>
                This is where a comparison site can add value. It helps users think beyond the first payment.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="cost"
              heading="How Much Do Weight Loss Injections Cost?"
            >
              <p>
                Weight loss treatment price varies by medicine, dose, provider, delivery fee, consultation model, and support level. Therefore, one &ldquo;from&rdquo; price rarely tells the full story.
              </p>
              <p>
                A provider may show a low starting price, but that may only apply to the first dose or first month. Later doses may cost more, and some providers include extra support while others focus mainly on prescribing and dispensing.
              </p>
              <p>
                To get a clearer long-term outlook, reviewing an up-to-date{" "}
                <Link
                  href="/mounjaro-price-comparison"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  Mounjaro price list UK
                </Link>{" "}
                or consulting a detailed{" "}
                <Link
                  href="/wegovy-price-comparison"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  Wegovy price list UK
                </Link>{" "}
                helps clarify how monthly expenses scale as you transition to higher maintenance dosages.
              </p>
              <p>
                When comparing weight loss injection prices, check:
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  <strong className={darkMode ? "text-slate-200" : "text-slate-800"}>Starter dose price:</strong> This is often the number shown in adverts.
                </li>
                <li>
                  <strong className={darkMode ? "text-slate-200" : "text-slate-800"}>Higher dose prices:</strong> The real monthly cost may change as treatment progresses.
                </li>
                <li>
                  <strong className={darkMode ? "text-slate-200" : "text-slate-800"}>Consultation fee:</strong> Some providers include this, while others may separate it.
                </li>
                <li>
                  <strong className={darkMode ? "text-slate-200" : "text-slate-800"}>Delivery fee:</strong> Discreet or tracked delivery may be included or added later.
                </li>
                <li>
                  <strong className={darkMode ? "text-slate-200" : "text-slate-800"}>Support level:</strong> Coaching, app support, and pharmacist access may change value.
                </li>
                <li>
                  <strong className={darkMode ? "text-slate-200" : "text-slate-800"}>Maintenance policy:</strong> Long-term treatment or maintenance may have different rules.
                </li>
              </ul>
              <p>
                As a result, the cheapest headline price is not always the best weight loss treatment price.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="safe-provider"
              heading="What Makes a Safe Provider?"
            >
              <p>
                A safe provider should make its process clear. It should not make prescription treatment look like a simple checkout product.
              </p>
              
              <h3 className={`text-xl font-bold mt-6 mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                Proper Clinical Review
              </h3>
              <p>
                The provider should ask about your health, weight, medicines, and medical history. If the questionnaire is too basic or treatment is approved too easily, that may be a concern.
              </p>

              <h3 className={`text-xl font-bold mt-6 mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                Registered Pharmacy Route
              </h3>
              <p>
                The pharmacy or supply route should be clear and checkable. A trustworthy provider should not hide who supplies the medicine. To stay secure, read about{" "}
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  pharmacy safety and GPhC verification
                </Link>{" "}
                to check registration badges and protect yourself from illegitimate operators.
              </p>

              <h3 className={`text-xl font-bold mt-6 mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                Clear Price Information
              </h3>
              <p>
                A good provider should show pricing in a way that helps users understand the full cost. Ideally, this means dose-level pricing, delivery information, and repeat prescription rules.
              </p>

              <h3 className={`text-xl font-bold mt-6 mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                Side Effect Guidance
              </h3>
              <p>
                A responsible provider should explain possible side effects and tell users when to seek medical advice. Weight loss injections may cause digestive symptoms, fatigue, or other effects depending on the medicine.
              </p>

              <h3 className={`text-xl font-bold mt-6 mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                Ongoing Support
              </h3>
              <p>
                Support matters because users may have questions about dose changes, missed doses, side effects, diet, and long-term weight management.
              </p>
              <p>
                Therefore, a provider with better support may be better value than a cheaper provider with limited aftercare.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="warning-signs"
              heading="Warning Signs Before You Buy"
            >
              <p>
                Before using any online service, watch for red flags. Some warning signs are obvious, while others are more subtle.
              </p>
              <p>
                Avoid sellers that:
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>Offer injections without a prescription</li>
                <li>Sell through social media messages only</li>
                <li>Promise guaranteed fat loss</li>
                <li>Avoid asking medical questions</li>
                <li>Hide pharmacy or company details</li>
                <li>Use unusually cheap prices to create urgency</li>
                <li>Do not explain side effects</li>
                <li>Do not offer aftercare information</li>
                <li>Say no consultation is needed</li>
                <li>Make the treatment sound risk-free</li>
              </ul>
              <p>
                If something feels too easy, too cheap, or too fast, pause before paying.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="not-a-quick-fix"
              heading="Weight Loss Injections Are Not a Quick Fix"
            >
              <p>
                Weight loss injections can support eligible users, but they are not a replacement for healthy routines. Most people still need to focus on food quality, protein intake, hydration, movement, and long-term habit change.
              </p>
              <p>
                This point is important because some pages make treatment sound like a shortcut. However, a more responsible page should explain that treatment works best as part of a broader plan.
              </p>
              <p>
                Useful support habits include:
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>Eating enough protein</li>
                <li>Staying hydrated</li>
                <li>Increasing fibre gradually</li>
                <li>Doing regular physical activity</li>
                <li>Adding resistance training where suitable</li>
                <li>Tracking progress calmly</li>
                <li>Speaking to a clinician about side effects</li>
              </ul>
              <p>
                Besides that, users should not stop, restart, or change dose without following clinical instructions.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="which-is-best"
              heading="Which Weight Loss Injection Is Best?"
            >
              <p>
                There is no single best weight loss injection for everyone. The right option depends on clinical suitability, health history, weight goals, side effect risk, cost, and prescriber advice.
              </p>
              <p>
                Common options include:
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>Wegovy</li>
                <li>Mounjaro</li>
                <li>Saxenda-style or liraglutide-based treatment</li>
              </ul>
              <p>
                However, the user should not choose based only on popularity. A medicine may be suitable for one person but not another.
              </p>
              <p>
                That is why Healthwise360 links users to a comprehensive comparison page to{" "}
                <Link
                  href="/compare/mounjaro-vs-wegovy-vs-saxenda"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  compare Mounjaro vs Wegovy vs Saxenda
                </Link>
                . This helps readers move from a general buying question into a structured, evidence-based treatment comparison.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="how-to-compare"
              heading="How to Compare Providers Properly"
            >
              <p>
                A useful comparison should not only ask, &ldquo;Who is cheapest?&rdquo;
              </p>
              <p>
                Instead, compare the full provider experience.
              </p>
              
              <h3 className={`text-xl font-bold mt-6 mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                Step 1: Check Eligibility
              </h3>
              <p>
                Use a BMI calculator or complete a proper consultation. If you are not eligible, a responsible provider should not approve treatment.
              </p>

              <h3 className={`text-xl font-bold mt-6 mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                Step 2: Compare Treatment Options
              </h3>
              <p>
                Understand whether you are comparing Mounjaro, Wegovy, Saxenda, or another route. These are not identical treatments.
              </p>

              <h3 className={`text-xl font-bold mt-6 mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                Step 3: Compare Price by Dose
              </h3>
              <p>
                Look at starter dose, higher dose, delivery, and consultation costs. This gives a more honest view of long-term affordability.
              </p>

              <h3 className={`text-xl font-bold mt-6 mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                Step 4: Check Pharmacy Safety
              </h3>
              <p>
                Make sure the provider uses a regulated pharmacy route. Do not rely only on reviews or discount codes.
              </p>

              <h3 className={`text-xl font-bold mt-6 mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                Step 5: Review Support
              </h3>
              <p>
                Check whether you can contact a clinician, pharmacist, or support team if you have a problem.
              </p>

              <h3 className={`text-xl font-bold mt-6 mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                Step 6: Plan for Maintenance
              </h3>
              <p>
                Weight loss treatment is not only about starting. You also need to understand what happens after several months, or when you reach your goal.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="why-healthwise360"
              heading="Why Independent Comparison Helps"
            >
              <p>
                Many provider pages naturally focus on their own pricing,
                consultation funnel, testimonials, and service benefits.
              </p>
              <p>
                Health Wise works as an independent comparison layer so you can
                weigh options before you start.
              </p>
              <p>The practical approach is:</p>
              <blockquote className={`border-l-4 p-4 my-4 italic ${darkMode ? "border-emerald-500 bg-slate-900 text-slate-300" : "border-emerald-600 bg-slate-50 text-slate-700"}`}>
                Before you buy weight loss injections, compare safe providers, pharmacy checks, dose-level prices, and support options.
              </blockquote>
              <p>
                This matches what most readers need: confidence before they
                start, ways to avoid unsafe sellers, and a clearer sense of why
                one provider may cost more or less than another.
              </p>
              <p>
                To see how we operate, you can read about{" "}
                <Link
                  href="/methodology"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  how Healthwise360 compares prices
                </Link>{" "}
                using our independent data model. We aim to offer the most comprehensive{" "}
                <Link
                  href="/compare/mounjaro-vs-wegovy-vs-saxenda"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  weight loss treatment price comparison UK
                </Link>{" "}
                to help patients make informed, budget-friendly choices. For
                long-term planning, see our{" "}
                <Link
                  href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  pharmacy verification guide
                </Link>{" "}
                so maintenance providers meet the same GPhC checks as titration
                routes.
              </p>
              <p>
                Healthwise360 can support this journey with:
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>Weight loss treatment price comparison</li>
                <li>Mounjaro vs Wegovy vs Saxenda comparison</li>
                <li>Mounjaro price list UK</li>
                <li>Wegovy price list UK</li>
                <li>BMI calculator</li>
                <li>Weight loss tracker</li>
                <li>GPhC pharmacy safety guide</li>
                <li>Provider methodology</li>
                <li>Maintenance pharmacy pages</li>
              </ul>
              <p>
                These tools help you compare prices, check provider safety, and
                plan long-term treatment access in one place.
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
                    Can I buy weight loss injections in the UK?
                  </h3>
                  <p>
                    Yes, you may be able to access weight loss injections in the UK through a regulated consultation pathway. However, they are prescription medicines and should only be supplied after clinical assessment.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    Can I buy weight loss injections online?
                  </h3>
                  <p>
                    Online access may be available through regulated UK providers. However, a legitimate service should include a medical questionnaire, clinician review, and regulated pharmacy supply.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    Do I need a prescription for weight loss injections?
                  </h3>
                  <p>
                    Yes. Prescription weight loss injections require proper clinical assessment and a valid prescription before supply.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    Can I get weight loss injections on the NHS?
                  </h3>
                  <p>
                    Some people may be eligible through NHS pathways, but access depends on clinical criteria, local services, and the treatment pathway. Private access is different and usually involves ongoing cost.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    What is the cheapest weight loss injection?
                  </h3>
                  <p>
                    The cheapest option depends on the medicine, dose, provider, delivery fee, consultation model, and support package. Therefore, users should compare full treatment cost, not only the starting price.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    Are weight loss injections safe?
                  </h3>
                  <p>
                    They can be suitable for some eligible adults when prescribed and monitored properly. However, they may cause side effects and are not right for everyone.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    Which is better, Mounjaro or Wegovy?
                  </h3>
                  <p>
                    There is no single best answer. The right option depends on clinical suitability, price, side effects, medical history, and prescriber advice.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    What should I check before paying?
                  </h3>
                  <p>
                    Check the clinical assessment process, pharmacy registration, dose-level prices, delivery fees, side effect guidance, support options, and maintenance rules.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    Can I buy weight loss injections without seeing a doctor?
                  </h3>
                  <p>
                    You may not need an in-person appointment, but you still need clinical assessment. A remote consultation or questionnaire should be reviewed by an appropriate healthcare professional.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    Should I choose the cheapest provider?
                  </h3>
                  <p>
                    Not necessarily. A cheaper provider may not include the same support, delivery, review process, or maintenance guidance. Compare total value, not only price.
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
                So, can you buy weight loss injections in the UK? Yes, but only through a safe and regulated route. These treatments are prescription medicines, not ordinary online products.
              </p>
              <p>
                A proper provider should check eligibility, review your medical history, explain side effects, use a regulated pharmacy route, and make the full treatment price clear. Besides that, users should avoid social media sellers, miracle claims, and websites that skip medical assessment.
              </p>
              <p>
                Health Wise focuses on independent comparison, safety checks,
                price transparency, and clear guidance before you start a
                consultation — rather than pushing a single treatment funnel.
              </p>
              <p
                className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}
              >
                Health Wise does not prescribe or supply medicines. This page is general information and is not medical advice.
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
