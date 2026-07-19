"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import BlogArticleColumn from "@/components/blog/BlogArticleColumn";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection, GuideTable } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  blogImgPath,
  SEMAGLUTIDE_WHERE_TO_START_HERO_PNG,
  SEMAGLUTIDE_WHERE_TO_START_INLINE_PNG,
} from "./blog-assets";

const SHARE_PATH = "/blog/semaglutide-weight-loss-where-to-start-uk";
const TITLE = "Semaglutide Weight Loss: Where to Start Safely in the UK";
const DESCRIPTION =
  "Semaglutide weight loss UK guide: learn safe routes, prescription checks, price factors and pharmacy red flags.";
const HERO_SRC = blogImgPath(SEMAGLUTIDE_WHERE_TO_START_HERO_PNG);
const INLINE_SRC = blogImgPath(SEMAGLUTIDE_WHERE_TO_START_INLINE_PNG);

const TOC = [
  { id: "intro", label: "Where to start safely?" },
  { id: "what-is", label: "What is semaglutide for weight loss?" },
  { id: "buy-online", label: "Can you buy online in the UK?" },
  { id: "wrong-question", label: "Why 'where to buy' is the wrong first question" },
  { id: "differences", label: "Wegovy, Ozempic and Rybelsus differences" },
  { id: "cost-factors", label: "How much does semaglutide treatment cost?" },
  { id: "compare-safely", label: "How to compare providers safely" },
  { id: "red-flags", label: "Red flags before seeking online" },
  { id: "injection-vs-tablet", label: "Semaglutide injection vs semaglutide tablet" },
  { id: "vs-mounjaro", label: "Is semaglutide better than Mounjaro?" },
  { id: "how-healthwise360-wins", label: "How Health Wise helps you decide" },
  { id: "faq", label: "Frequently Asked Questions" },
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

        <nav
          aria-label="Breadcrumb"
          className="mb-10 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400"
        >
          <Link href="/" className="transition-colors hover:text-emerald-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="transition-colors hover:text-emerald-600">
            Blog
          </Link>
          <span>/</span>
          <span className={darkMode ? "text-slate-200" : "text-slate-600"}>
            Semaglutide Weight Loss Where to Start
          </span>
        </nav>

        <BlogArticleColumn toc={TOC} darkMode={darkMode}>
          <header
            className={`mb-8 border-b pb-8 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
          >
            <h1
              className={`mb-6 text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl md:text-[44px] ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              Semaglutide Weight Loss: Where to Start Safely in the UK
            </h1>
            <div
              className={`mb-8 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                24 Jun 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                13 min read
              </span>
            </div>

            <BlogArticleHeroImage
              src={HERO_SRC}
              alt="Obese individual in the UK searching online for reliable, honest weight loss treatment comparison info"
            />
            <div
              id="guide-article-hero-end"
              aria-hidden
              className="pointer-events-none h-0 w-full overflow-hidden"
            />
          </header>

          <article className={`space-y-8 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
            <GuideSection darkMode={darkMode} id="intro" heading="Semaglutide Weight Loss: Where to Start Safely in the UK">
              <p className="text-lg md:text-xl">
                Many people search for &ldquo;semaglutide weight loss where to buy&rdquo; when they are ready to compare private treatment options. However, semaglutide is not an ordinary online product. It is a prescription medicine, and it should only be supplied after a proper clinical assessment.
              </p>
              <p>
                Therefore, the better question is not simply where to buy semaglutide for weight loss. The safer question is: where should you start if you want to compare regulated semaglutide weight loss treatment, understand the real price, and avoid unsafe sellers?
              </p>
              <p>
                This guide explains what semaglutide is, how it is used for weight loss, what UK users should check before starting a consultation, and how Healthwise360 can help people compare weight loss treatment prices safely.
              </p>
              <p>
                Healthwise360 does not prescribe treatment. Instead, it helps users{" "}
                <Link href="/" className="font-medium text-emerald-600 hover:underline">
                  compare weight loss treatment prices
                </Link>
                , provider safety signals, and pharmacy information before speaking to a qualified prescriber.
              </p>

              <div className={`mt-8 rounded-2xl p-6 border ${darkMode ? "border-slate-800 bg-slate-900/50" : "border-slate-200 bg-slate-50/50"}`}>
                <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">Featured Answer Overview</p>
                <h3 className={`text-lg font-bold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  What is the safest way to start semaglutide weight loss treatment?
                </h3>
                <p className="text-sm leading-relaxed">
                  The safest way is to speak to a qualified healthcare professional, use a regulated provider, check pharmacy registration, and compare the full treatment cost before paying. Users should avoid unregulated sellers, social media offers, and unusually cheap treatment claims.
                </p>
              </div>
            </GuideSection>

            <GuideSection darkMode={darkMode} id="what-is" heading="What Is Semaglutide for Weight Loss?">
              <p>
                Semaglutide is a GLP-1 receptor agonist medicine. In the UK, it is used under different brand names depending on the medical purpose. Wegovy is the semaglutide brand used for weight loss, while Ozempic and Rybelsus are used for type 2 diabetes.
              </p>
              <p>
                For weight loss, semaglutide helps reduce appetite and supports a feeling of fullness. However, it is not a fat burner, and it is not designed to replace diet, lifestyle changes, or medical support.
              </p>
              <p>
                It is usually considered for adults who meet certain BMI and health criteria. Besides that, a prescriber may need to check your medical history, current medicines, pregnancy status, previous side effects, and weight-related health risks.
              </p>
              <p>
                This is why semaglutide should not be bought casually from unregulated websites, social media sellers, or marketplaces that skip medical checks. If you are not sure of your eligibility, the ideal first step is to{" "}
                <Link href="/tools/bmi-calculator" className="font-medium text-emerald-600 hover:underline">
                  check your BMI for weight loss treatment
                </Link>{" "}
                to see if clinical guidelines typically support medical therapies for your profile.
              </p>
            </GuideSection>

            <GuideSection darkMode={darkMode} id="buy-online" heading="Can You Buy Semaglutide for Weight Loss Online in the UK?">
              <p>
                You may be able to access semaglutide weight loss treatment online in the UK through a regulated private consultation pathway. However, this should involve a proper assessment by a qualified healthcare professional.
              </p>
              <p>A legitimate route normally includes:</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>An online consultation or medical questionnaire</li>
                <li>BMI and eligibility checks</li>
                <li>Review of current medication and medical history</li>
                <li>Clinical approval if suitable</li>
                <li>Supply through a registered pharmacy</li>
                <li>Clear information about dosage, side effects, and support</li>
              </ul>
              <p>
                However, if a website offers semaglutide without a prescription or medical review, that is a serious red flag.
              </p>
              <p>
                Prescription weight loss treatment is not the same as buying a supplement. Therefore, the user journey should be clinical first and commercial second.
              </p>
            </GuideSection>

            <GuideSection darkMode={darkMode} id="wrong-question" heading="Why &ldquo;Where to Buy&rdquo; Is the Wrong First Question">
              <p>
                Searching &ldquo;where to buy semaglutide weight loss&rdquo; can
                lead toward unsafe choices if the focus is only access and
                price.
              </p>
              <p>
                A safer guide answers that intent while still pointing you
                toward proper checks.
              </p>
              <p>Instead of asking only &ldquo;where can I buy it?&rdquo;, users should ask:</p>
              <ol className="list-decimal space-y-3 pl-5">
                <li>Am I likely to be eligible?</li>
                <li>Is semaglutide suitable for my health history?</li>
                <li>Is the provider regulated?</li>
                <li>Is the pharmacy registration easy to verify?</li>
                <li>Is the price clear across all doses?</li>
                <li>Does the provider explain side effects and aftercare?</li>
                <li>What happens if treatment is not suitable?</li>
              </ol>
              <p>
                This approach builds trust. It also gives readers a clearer
                position than provider pages that focus mainly on conversion.
              </p>
            </GuideSection>

            <div className="my-10">
              <BlogArticleHeroImage
                src={INLINE_SRC}
                alt="UK woman checking reputable weight loss treatment price comparisons on her tablet at home"
                priority={false}
                showFullImage
              />
            </div>

            <GuideSection darkMode={darkMode} id="differences" heading="Wegovy, Ozempic and Rybelsus: What Is the Difference?">
              <p>This is one of the biggest areas of confusion.</p>

              <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>Wegovy</h3>
              <p>
                Wegovy contains semaglutide and is used for weight loss. It is the main semaglutide treatment UK users are usually referring to when they search for semaglutide weight loss.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>Ozempic</h3>
              <p>
                Ozempic also contains semaglutide, but it is used for type 2 diabetes. Although some people search for Ozempic weight loss, it is not the standard UK semaglutide weight loss route.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>Rybelsus</h3>
              <p>
                Rybelsus is an oral semaglutide tablet used for type 2 diabetes. It is not the same as the newer Wegovy tablet route for weight loss.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>Wegovy Tablets</h3>
              <p>
                In June 2026, the UK approved a semaglutide tablet for weight loss and weight management. However, this is still a prescription-only medicine. Therefore, users should not confuse it with GLP-1 supplements or generic &ldquo;weight loss pills.&rdquo;
              </p>
              <p>
                This distinction is important because many people searching for semaglutide may not know which form is licensed for which purpose.
              </p>
            </GuideSection>

            <GuideSection darkMode={darkMode} id="cost-factors" heading="How Much Does Semaglutide Weight Loss Treatment Cost?">
              <p>
                Semaglutide weight loss price varies by provider, dose, format, delivery, consultation model, and support level.
              </p>
              <p>
                Some providers show a &ldquo;from&rdquo; price. However, that price may only apply to the starting dose, first month, or a specific format. Later doses may cost more.
              </p>
              <p>
                Therefore, users should not compare semaglutide price based on one headline number only.
              </p>
              <p>A better comparison should include:</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>Starter dose price</li>
                <li>Higher dose prices</li>
                <li>Whether consultation is included</li>
                <li>Whether delivery is included</li>
                <li>Whether ongoing doctor support is included</li>
                <li>Whether follow-up reviews are included</li>
                <li>Whether discounts are temporary</li>
                <li>Whether the provider has a clear maintenance policy</li>
              </ul>
              <p>
                To understand how these costs accumulate over months of care, it is highly recommended to study the comprehensive{" "}
                <Link href="/wegovy-price-comparison" className="font-medium text-emerald-600 hover:underline">
                  Wegovy price list UK
                </Link>{" "}
                guide, which tracks actual private prices by dose across major online pharmacies.
              </p>
            </GuideSection>

            <GuideSection darkMode={darkMode} id="compare-safely" heading="How to Compare Semaglutide Providers Safely">
              <p>
                A strong semaglutide comparison should not focus only on cost. Because this is a prescription weight loss treatment, safety and clinical suitability must come first.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>Check the Clinical Assessment</h3>
              <p>
                A regulated provider should ask about your height, weight, BMI, medical history, current medicines, allergies, previous treatments, and relevant health conditions.
              </p>
              <p>If a seller does not ask these questions, do not continue.</p>

              <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>Check Pharmacy Registration</h3>
              <p>
                A safe provider should make the pharmacy route clear. In Great Britain, pharmacy registration can be checked through the General Pharmaceutical Council. Confirming credentials using our dedicated guide on{" "}
                <Link href="/pharmacy-safety-gphc-verification" className="font-medium text-emerald-600 hover:underline">
                  pharmacy safety and GPhC verification
                </Link>{" "}
                is essential to avoid unverified and risky suppliers online.
              </p>
              <p>If the site hides pharmacy details or only sells through private messages, that is not a safe route.</p>

              <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>Check the Price by Dose</h3>
              <p>
                Dose-based pricing is important because semaglutide treatment is usually not a one-month decision. If you only compare the first dose, you may misunderstand the real cost.
              </p>
              <p>
                Our independent comparison engine helps users evaluate the full weight loss treatment price, rather than just pointing them to the cheapest entry point.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>Check Side Effect Support</h3>
              <p>
                Semaglutide can cause side effects. A responsible provider should explain what to expect, when to ask for help, and who to contact if symptoms are severe or persistent.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>Check the Aftercare</h3>
              <p>
                Ongoing support can matter. Some people need advice on side effects, missed doses, dose changes, progress, or stopping treatment.
              </p>
              <p>
                A provider with clearer aftercare may offer better long-term value than a provider with a lower first-month price.
              </p>
            </GuideSection>

            <GuideSection darkMode={darkMode} id="red-flags" heading="Red Flags Before Seeking Semaglutide Online">
              <p>Before starting any semaglutide consultation, watch for warning signs.</p>
              <p>Avoid websites or sellers that:</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>Offer semaglutide without a prescription</li>
                <li>Sell through social media direct messages</li>
                <li>Promise miracle fat loss</li>
                <li>Use unusually low prices to pressure buyers</li>
                <li>Do not explain side effects</li>
                <li>Do not ask about BMI or medical history</li>
                <li>Do not show pharmacy registration details</li>
                <li>Use unclear packaging or no patient information</li>
                <li>Claim semaglutide is just a supplement</li>
                <li>Push Ozempic or Rybelsus for weight loss without explaining licensing</li>
              </ul>
              <p>These signs do not prove something is illegal, but they are strong reasons to stop and check carefully.</p>
            </GuideSection>

            <GuideSection darkMode={darkMode} id="injection-vs-tablet" heading="Semaglutide Injection vs Semaglutide Tablet">
              <p>
                The UK semaglutide landscape is changing. For a long time, Wegovy for weight loss was associated mainly with weekly injections. However, the approval of a semaglutide tablet for weight loss means more users are now asking whether they can choose tablets instead.
              </p>
              <p>
                That means more people are now asking whether they can choose
                tablets instead of weekly injections. Common questions include
                tablet vs injection differences, Wegovy pill pricing, and what
                oral semaglutide costs in the UK.
              </p>
              <p>
                However, the same safety principle applies. Whether injection or tablet, semaglutide for weight loss remains a prescription-only treatment. Therefore, users still need clinical assessment and regulated supply.
              </p>
            </GuideSection>

            <GuideSection darkMode={darkMode} id="vs-mounjaro" heading="Is Semaglutide Better Than Mounjaro?">
              <p>
                Many users compare semaglutide with tirzepatide, better known as Mounjaro. However, one is not automatically better for every person.
              </p>
              <p>
                Wegovy contains semaglutide. Mounjaro contains tirzepatide. They work differently, have different dosing schedules, different side effect profiles, and different prices.
              </p>
              <p>
                Therefore, a good comparison should consider:
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>Eligibility</li>
                <li>Treatment history</li>
                <li>Medical conditions</li>
                <li>Side effects</li>
                <li>Price by dose</li>
                <li>Provider support</li>
                <li>Long-term maintenance cost</li>
                <li>Personal preference</li>
              </ul>
              <p>
                This is why we encourage users to{" "}
                <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-medium text-emerald-600 hover:underline">
                  compare Mounjaro vs Wegovy vs Saxenda
                </Link>{" "}
                before committing. It helps users move from one-medicine intent into a wider treatment comparison. If you choose tirzepatide, you can also check our updated{" "}
                <Link href="/mounjaro-price-comparison" className="font-medium text-emerald-600 hover:underline">
                  Mounjaro price list UK
                </Link>{" "}
                to see dose-by-dose tier costs.
              </p>
            </GuideSection>

            <GuideSection darkMode={darkMode} id="how-healthwise360-wins" heading="How Health Wise Helps You Decide">
              <p>
                Health Wise does not act like a pharmacy. We work as an
                independent decision guide.
              </p>
              <p>
                Before you choose where to seek semaglutide weight loss
                treatment, compare safety, pharmacy checks, prices, support, and
                long-term cost.
              </p>
              <p>
                Most readers do not only want a purchase route. They want
                confidence that they are choosing safely and not overpaying.
              </p>
              <p>
                Useful Health Wise tools for that decision include:
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>Weight loss treatment price comparison</li>
                <li>Mounjaro vs Wegovy vs Saxenda comparison</li>
                <li>Wegovy price content</li>
                <li>BMI calculator</li>
                <li>Pharmacy safety and GPhC verification guide</li>
                <li>Methodology page</li>
                <li>Weight loss tracker</li>
              </ul>
              <p>
                To see exactly how we pull together and evaluate these details,
                read our guide on{" "}
                <Link href="/methodology" className="font-medium text-emerald-600 hover:underline">
                  how Health Wise compares prices
                </Link>
                . Once on a verified treatment path, you can also{" "}
                <Link href="/tools/weight-loss-tracker" className="font-medium text-emerald-600 hover:underline">
                  track your weight loss progress
                </Link>{" "}
                using our free progress tool.
              </p>
            </GuideSection>

            <section
              id="faq"
              className={`mt-16 border-t pt-10 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
            >
              <h2 className={`mb-8 text-3xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                Frequently asked questions
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                    Can I buy semaglutide for weight loss online in the UK?
                  </h3>
                  <p>
                    You may be able to access semaglutide weight loss treatment through a regulated online consultation pathway. However, it should only be supplied after clinical assessment and with a valid prescription.
                  </p>
                </div>
                <div>
                  <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                    Is semaglutide the same as Wegovy?
                  </h3>
                  <p>
                    Wegovy contains semaglutide and is used for weight loss. Ozempic and Rybelsus also contain semaglutide, but they are used for type 2 diabetes rather than standard UK weight loss treatment.
                  </p>
                </div>
                <div>
                  <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                    Is Ozempic used for weight loss in the UK?
                  </h3>
                  <p>
                    Ozempic contains semaglutide, but it is licensed for type 2 diabetes. Wegovy is the semaglutide brand used for weight loss.
                  </p>
                </div>
                <div>
                  <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                    Is Rybelsus a weight loss tablet?
                  </h3>
                  <p>
                    Rybelsus contains semaglutide, but it is used for type 2 diabetes. It should not be confused with the newer semaglutide tablet approved for weight loss.
                  </p>
                </div>
                <div>
                  <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                    How much does semaglutide weight loss treatment cost?
                  </h3>
                  <p>
                    The cost depends on provider, dose, format, delivery, consultation, and support. Therefore, users should compare dose-level pricing rather than relying only on a single &ldquo;from&rdquo; price.
                  </p>
                </div>
                <div>
                  <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                    What should I check before choosing a semaglutide provider?
                  </h3>
                  <p>
                    Check the clinical assessment process, pharmacy registration, price transparency, side effect support, delivery information, and ongoing aftercare.
                  </p>
                </div>
                <div>
                  <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                    Can semaglutide be bought without a prescription?
                  </h3>
                  <p>
                    No. Semaglutide weight loss treatment should only be supplied after a proper clinical assessment and valid prescription.
                  </p>
                </div>
                <div>
                  <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                    Is semaglutide available as a tablet for weight loss?
                  </h3>
                  <p>
                    Yes, the UK approved a semaglutide tablet for weight loss and weight management in June 2026. However, it remains prescription-only and should not be confused with supplements.
                  </p>
                </div>
                <div>
                  <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                    Is semaglutide cheaper than Mounjaro?
                  </h3>
                  <p>
                    It depends on provider, dose, format, and support package. In many cases, the starter dose price may not reflect the full long-term treatment cost.
                  </p>
                </div>
                <div>
                  <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                    What is the safest way to start semaglutide weight loss treatment?
                  </h3>
                  <p>
                    The safest way is to speak to a qualified healthcare professional, use a regulated provider, check pharmacy registration, and compare the full treatment cost before paying.
                  </p>
                </div>
              </div>
            </section>

            <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
              <p>
                People searching for &ldquo;semaglutide weight loss where to buy&rdquo; are usually looking for a safe, affordable, and trustworthy way to start treatment. However, semaglutide is a prescription medicine, not a normal online product.
              </p>
              <p>
                The safest route starts with clinical assessment, not checkout. A proper provider should check eligibility, review medical history, explain side effects, use a registered pharmacy route, and make prices clear.
              </p>
              <p>
                Health Wise works as an independent comparison layer so you can
                understand semaglutide, compare weight loss treatment prices,
                check pharmacy safety, and make a more informed decision before
                starting a consultation.
              </p>
              <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                Healthwise360 does not prescribe or supply medicines. This page is general information and is not medical advice.
              </p>
</GuideSection>
          </article>

          <div className="mt-10">
            <GuideSharePanel url={shareUrl} title={TITLE} description={DESCRIPTION} />
          </div>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
