"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection, GuideTable } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  blogWebpPath,
  MOUWEG_HERO_WEBP,
  MOUWEG_INLINE_1_WEBP,
  MOUWEG_INLINE_2_WEBP,
} from "./blog-assets";

const SHARE_PATH = "/blog/mounjaro-vs-wegovy-key-differences-explained";
const HERO_SRC = blogWebpPath(MOUWEG_HERO_WEBP);
const INLINE_1 = blogWebpPath(MOUWEG_INLINE_1_WEBP);
const INLINE_2 = blogWebpPath(MOUWEG_INLINE_2_WEBP);

const TOC = [
  { id: "understand", label: "Understand each medication" },
  { id: "mechanism", label: "Mechanism of action" },
  { id: "trials", label: "Compare weight loss results" },
  { id: "dosing", label: "Review dosage schedules" },
  { id: "side-effects", label: "Evaluate side effects" },
  { id: "cost", label: "Consider cost and access" },
  { id: "experience", label: "Assess patient experience" },
  { id: "choose", label: "Choose your ideal option" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "conclusion", label: "Conclusion" },
];

const SOCIAL_HASHTAGS =
  "#MounjaroVsWegovy #GLP1 #WeightLossUK #Tirzepatide #Semaglutide #UKHealth";

function SubHeading({
  children,
  darkMode,
}: {
  children: React.ReactNode;
  darkMode: boolean;
}) {
  return (
    <p className={`mt-6 font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{children} For more context, explore our resources on <Link href="/blog/side-effects-of-wegovy-and-how-to-manage-them" className="font-medium text-emerald-600 hover:underline">managing Wegovy side effects</Link>.</p>
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
            Back to News
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

        <header className="mb-12">
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            How Mounjaro vs Wegovy: The Key Differences Explained Help You Choose
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              20 Apr 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              12 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_SRC}
            alt="Mounjaro vs Wegovy — comparing UK GLP-1 weight loss treatments"
          />
          <div
            id="guide-article-hero-end"
            aria-hidden
            className="pointer-events-none h-0 w-full overflow-hidden"
          />
        </header>

        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          {TOC.length > 0 && (
            <GuideTocSidebar key={TOC.map((t) => t.id).join("-")} toc={TOC} />
          )}

          <div className="min-w-0 max-w-3xl flex-1">
            <article className={`space-y-8 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              <p className="text-lg md:text-xl">
                When you are weighing up Mounjaro vs Wegovy: The Key Differences Explained, you are looking at two of
                the most talked about weight loss treatments in the UK right now. Both medications fall into the growing
                category of GLP 1 receptor agonists, designed to help you shed pounds by curbing appetite, slowing gastric
                emptying and improving blood sugar control. Yet despite these similarities, important distinctions in
                efficacy, dosing schedules, cost and side effects can make one option feel like a better fit for your
                lifestyle and goals. In this guide you will find everything you need from how each drug works to
                real world results to help you decide which treatment could work best for you.
              </p>
              <p>
                If you are new to this class of therapies, you may also want to explore our{" "}
                <Link
                  href="/compare/best-weight-loss-injections-uk"
                  className="font-medium text-brand-primary underline"
                >
                  UK weight loss treatments comparison hub
                </Link>
                . Once you have narrowed your choice, our linked articles on{" "}
                <Link
                  href="/helpful-guides/mounjaro-weight-loss-injection-uk"
                  className="font-medium text-brand-primary underline"
                >
                  Mounjaro weight loss treatment (UK)
                </Link>{" "}
                and{" "}
                <Link
                  href="/blog/easy-to-follow-wegovy-injection-instructions-you-can-trust"
                  className="font-medium text-brand-primary underline"
                >
                  Wegovy injection instructions and side effects
                </Link>{" "}
                will walk you through the finer details.
              </p>

              <GuideSection darkMode={darkMode} id="understand" heading="Understand Each Medication">
                <p>
                  Before comparing outcomes and costs, it helps to know what sits behind each brand name. Mounjaro and
                  Wegovy share some features but differ in core ingredients and approvals.
                </p>
                <SubHeading darkMode={darkMode}>What is Mounjaro?</SubHeading>
                <p>
                  Mounjaro is the trade name for tirzepatide, a dual action peptide that targets two hormones GLP 1
                  (glucagon like peptide 1) and GIP (glucose dependent insulinotropic polypeptide). By engaging both
                  receptors, Mounjaro can amplify feelings of fullness and improve insulin response. Initially approved
                  for type 2 diabetes management, it earned a UK indication for weight loss in adults with obesity or
                  overweight plus at least one weight related condition.
                </p>
                <SubHeading darkMode={darkMode}>What is Wegovy?</SubHeading>
                <p>
                  Wegovy contains semaglutide, a GLP 1 receptor agonist that mimics the natural GLP 1 hormone. This
                  encourages satiety, reduces hunger driven snacking and supports better blood sugar control. First
                  authorised specifically for weight management, Wegovy has become a leading choice for those who need
                  to lose 5 percent or more of their body weight.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="mechanism" heading="Mechanism Of Action">
                <p>
                  While both drugs slow gastric emptying and reduce appetite, Mounjaro&apos;s dual GIP/GLP 1 action may
                  deliver a slightly different metabolic response than Wegovy&apos;s GLP 1 only profile. Some research
                  suggests tirzepatide users experience faster weight loss, especially during the initial titration phase.
                  However, individual results vary based on dosage, diet, exercise and metabolic factors.
                </p>
                <SubHeading darkMode={darkMode}>Key characteristics at a glance</SubHeading>
                <div
                  className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}
                >
                  <GuideTable
                    headers={["Attribute", "Mounjaro (tirzepatide)", "Wegovy (semaglutide)"]}
                    rows={[
                      { cells: ["Active ingredient", "Tirzepatide", "Semaglutide"] },
                      { cells: ["Hormone targets", "GIP + GLP-1", "GLP-1"] },
                      {
                        cells: [
                          "Typical weekly dose range",
                          "2.5 mg to 15 mg",
                          "0.25 mg to 2.4 mg",
                        ],
                      },
                      { cells: ["Injection frequency", "Once weekly", "Once weekly"] },
                      {
                        cells: [
                          "Average 6-month weight loss (illustrative)",
                          "Up to ~15% of body weight¹",
                          "Up to ~10% of body weight²",
                        ],
                      },
                      {
                        cells: [
                          "UK weight-loss context (broad narrative)",
                          "Recent UK weight-management licensing trajectory",
                          "Earlier UK weight-management use in this class",
                        ],
                      },
                    ]}
                  />
                </div>
                <p className="text-sm opacity-90">
                  ¹ Source narrative: SELECT trial (cardiovascular outcomes trial with semaglutide context)   use for
                  general class education only. ² Source narrative: STEP programme   illustrative; not a direct
                  head to head at identical time points. Always follow your clinician&apos;s judgement.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="trials" heading="Compare Weight Loss Results">
                <p>
                  You naturally want to know which option will help you lose more weight, in what timeframe and with
                  what consistency.
                </p>
                <SubHeading darkMode={darkMode}>Clinical trial outcomes</SubHeading>
                <p>
                  In head to head studies, tirzepatide often edges out semaglutide on average weight reduction. In the
                  SURPASS 2 trial, participants taking 15 mg of Mounjaro lost an average of 13 percent of their body weight
                  over 40 weeks, while those on 1 mg semaglutide lost about 10 percent in the STEP 2 study. Even at lower
                  doses, many Mounjaro users report steeper early declines on the scale.
                </p>
                <p>
                  Yet semaglutide trials show strong cardiovascular benefits and sustained weight maintenance. If you
                  prioritise long term health markers alongside weight loss, Wegovy&apos;s track record backed by
                  large scale STEP research may appeal.
                </p>
                <SubHeading darkMode={darkMode}>Real-world effectiveness</SubHeading>
                <p>
                  Clinical figures do not always translate fully outside trial settings. In everyday UK practice, your
                  diet, exercise habits and support system play a pivotal role. Some clinics report similar real world
                  results for both drugs, with average losses of 8 to 12 percent after six months when combined with
                  lifestyle coaching.
                </p>
                <p>
                  The key takeaway is that whichever treatment you choose, a structured plan regular check ins,
                  nutritional guidance and an exercise regimen maximises your odds of success.
                 For more context, explore our resources on <Link href="/blog/best-weight-loss-treatment-in-manchester" className="font-medium text-emerald-600 hover:underline">treatment in Manchester</Link>.</p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_1}
                  alt="Mounjaro KwikPen and Wegovy pens — weekly GLP-1 treatments compared"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection darkMode={darkMode} id="dosing" heading="Review Dosage Schedules">
                <p>Dosing strategies can influence how quickly you ramp up, how many treatments you administer and how manageable your routine feels.</p>
                <SubHeading darkMode={darkMode}>Mounjaro dosing</SubHeading>
                <p>
                  You will start Mounjaro at 2.5 mg once weekly, usually on the same day each week. Every four weeks you
                  can escalate the dose (5 mg, 7.5 mg, 10 mg, 12.5 mg and up to 15 mg) until you reach the dose that
                  delivers optimal weight loss with tolerable side effects. Some people stay on 10 mg, while others find
                  15 mg more effective.
                </p>
                <SubHeading darkMode={darkMode}>Wegovy dosing</SubHeading>
                <p>
                  Wegovy titration is more gradual. You begin at 0.25 mg weekly and step up every four weeks through 0.5
                  mg, 1 mg, 1.7 mg and eventually 2.4 mg. This cautious approach helps your body acclimatise to
                  gastrointestinal changes. Once you hit 2.4 mg, that becomes your maintenance dose for as long as
                  needed.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="side-effects" heading="Evaluate Side Effects">
                <p>
                  No medication is without trade offs. Understanding side effect profiles helps you plan for discomfort
                  and decide how much you can tolerate.
                </p>
                <SubHeading darkMode={darkMode}>Common reactions</SubHeading>
                <p>
                  Both Mounjaro and Wegovy share gastrointestinal complaints: nausea, diarrhoea, constipation and
                  occasional vomiting. You might also experience mild headache, fatigue or injection site irritation.
                  With Wegovy&apos;s slower titration, some users report fewer early stage symptoms, while
                  Mounjaro&apos;s dual hormone activity can heighten GI effects during dose increases.
                </p>
                <SubHeading darkMode={darkMode}>Managing side effects</SubHeading>
                <p>
                  To keep side effects at bay, start with small sips of water, eat slowly and favour low fat, modest fibre meals in the first few weeks. Ginger tea can settle nausea, and over the counter remedies like loperamide can help with diarrhoea. For a deeper dive, read our{" "}
                  <Link
                    href="/blog/easy-to-follow-wegovy-injection-instructions-you-can-trust"
                    className="font-medium text-brand-primary underline"
                  >
                    Wegovy injection instructions
                  </Link>{" "}
                  section on side effects and safety.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="cost" heading="Consider Cost And Access">
                <p>Price and availability often determine which therapy you choose, especially in a private pay environment.</p>
                <div
                  className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}
                >
                  <GuideTable
                    headers={["Option", "Illustrative UK private pricing (verify live)"]}
                    rows={[
                      {
                        cells: [
                          "Mounjaro",
                          "Retail costs often quoted around £200–£300 per four-week supply, depending on dose.",
                        ],
                      },
                      {
                        cells: [
                          "Wegovy",
                          "Monthly supply often quoted around £250–£350 at full private-pay rates.",
                        ],
                      },
                    ]}
                  />
                </div>
                <p className="text-sm opacity-90">
                  Prices fluctuate with imports, currency shifts and pharmacy markups. Always request an upfront quote
                  from your clinic or pharmacy.
                </p>
                <SubHeading darkMode={darkMode}>NHS and private prescriptions</SubHeading>
                <p>
                  Currently neither Mounjaro nor Wegovy is routinely prescribed on the NHS for weight loss alone. Some NHS
                  trusts run pilot programmes, but coverage is limited and often focused on patients with type 2 diabetes
                  or severe obesity. Most people access these treatments via private clinics, medical spas or online
                  telehealth providers.
                </p>
                <SubHeading darkMode={darkMode}>Treatment shortages and supply</SubHeading>
                <p>
                  Global demand has occasionally outpaced supply, leading to intermittent shortages. Before committing,
                  read our{" "}
                  <Link
                    href="/helpful-guides/switching-pharmacies-mounjaro-wegovy-uk"
                    className="font-medium text-brand-primary underline"
                  >
                    guide to switching pharmacies for Mounjaro or Wegovy in the UK
                  </Link>{" "}
                  for strategies to maintain continuity and avoid gaps in treatment.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="experience" heading="Assess Patient Experience">
                <p>
                  Choosing an treatment is not just about the molecule it is about how you will live with it week after
                  week.
                </p>
                <SubHeading darkMode={darkMode}>Administration methods</SubHeading>
                <p>
                  Both medications come in pre filled disposable pens. You administer a subcutaneous shot usually in the
                  abdomen, thigh or upper arm on the same day each week at any time that suits you. Rotating sites
                  prevents irritation.
                 For more context, explore our resources on <Link href="/mounjaro-price-comparison" className="font-medium text-emerald-600 hover:underline">Mounjaro price comparison</Link>.</p>
                <SubHeading darkMode={darkMode}>Pen devices</SubHeading>
                <p>
                  Mounjaro&apos;s KwikPen delivers doses from 2.5 mg up to 15 mg in one device. If you need multiple pen
                  strengths, you may use two pens in a week when stepping between doses. Learn more about safe pen
                  handling in our{" "}
                  <Link href="/helpful-guides/kwikpen-disposal-recycling-uk" className="font-medium text-brand-primary underline">
                    KwikPen disposal and recycling (UK)
                  </Link>{" "}
                  guide and practical use context in{" "}
                  <Link
                    href="/helpful-guides/mounjaro-weight-loss-injection-uk"
                    className="font-medium text-brand-primary underline"
                  >
                    Mounjaro weight loss treatment UK
                  </Link>
                  .
                </p>
                <p>
                  Wegovy pens come in single dose increments that match each titration stage, so you swap pens as you
                  advance. The simplicity of one dose per pen means fewer dosing errors.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="choose" heading="Choose Your Ideal Option">
                <p>
                  By now you have seen how Mounjaro vs Wegovy: The Key Differences Explained can steer you toward the
                  best fit for your weight loss journey. Here are some final pointers.
                </p>
                <SubHeading darkMode={darkMode}>Suitability considerations</SubHeading>
                <ul className="list-disc space-y-3 pl-5">
                  <li>
                    If you prioritise faster initial weight loss and can handle titration, Mounjaro might suit you
                    better.
                  </li>
                  <li>
                    If you prefer a gradual ramp up and emphasise cardiovascular evidence from large trials, Wegovy
                    could be your pick.
                  </li>
                  <li>For milder early side effects, Wegovy&apos;s five step dosing may feel gentler.</li>
                  <li>
                    If you do not mind juggling pen strengths for a potential efficacy boost, Mounjaro&apos;s dual
                    action could pay dividends.
                  </li>
                </ul>
                <SubHeading darkMode={darkMode}>Tips for starting</SubHeading>
                <ul className="list-disc space-y-3 pl-5">
                  <li>
                    Synchronise your injection day with a routine task like Monday morning breakfast to build
                    consistency.
                  </li>
                  <li>Keep a diary or app reminder for dose escalations and appointment check ins.</li>
                  <li>
                    Pair your injection plan with a balanced diet rich in vegetables, protein and whole grains, plus
                    around 150 minutes of moderate exercise weekly.
                  </li>
                  <li>
                    Stay in touch with your prescribing clinic, especially during the first 8 weeks when most dose
                    changes and side effect troubleshooting occur.
                  </li>
                  <li>Celebrate each milestone whether it is 5 percent weight loss or two weeks of steadier mornings.</li>
                  <li>
                    Reach out to support groups or online communities many people share tips on meal planning and
                    mindset shifts.
                  </li>
                </ul>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_2}
                  alt="Private cost and NHS access — budgeting for Mounjaro or Wegovy in the UK"
                  priority={false}
                  showFullImage
                />
              </div>

              <section
                id="faq"
                className={`mt-16 border-t pt-10 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
              >
                <h2 className={`mb-8 text-3xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      1. Is Mounjaro more effective than Wegovy on average in trials?
                    </h3>
                    <p>
                      Head to head and class comparisons often show greater average weight loss with tirzepatide than
                      semaglutide at commonly used doses, but individual response, tolerability and medical eligibility
                      vary. Your prescriber should interpret trial data for you.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      2. Do Mounjaro and Wegovy both use weekly treatments?
                    </h3>
                    <p>
                      Both are typically given as once weekly subcutaneous treatments with gradual dose titration, though
                      formats and strengths differ by product and market.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      3. Which drug has a gentler titration schedule?
                    </h3>
                    <p>
                      Wegovy&apos;s semaglutide pens often use smaller incremental steps from a very low starting dose.
                      Mounjaro&apos;s tirzepatide schedule uses different mg strengths both require medical oversight
                      during increases.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      4. Are Mounjaro and Wegovy routinely available for weight loss on the NHS in the UK?
                    </h3>
                    <p>
                      Access varies by nation, trust and eligibility criteria. Many people obtain these medicines
                      privately; NHS availability for obesity alone is often limited and criteria based.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      5. What side effects are common to both Mounjaro and Wegovy?
                    </h3>
                    <p>
                      Gastrointestinal symptoms such as nausea, diarrhoea or constipation, and vomiting are frequently
                      reported, especially after dose increases. Injection site reactions and headache can also occur.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      6. How do private costs for Mounjaro and Wegovy typically compare in the UK?
                    </h3>
                    <p>
                      Prices change with dose, pharmacy and bundled services. Use our{" "}
                      <Link href="/mounjaro-price-comparison" className="font-medium text-brand-primary underline">
                        Mounjaro price comparison
                      </Link>{" "}
                      and{" "}
                      <Link href="/wegovy-price-comparison" className="font-medium text-brand-primary underline">
                        Wegovy price comparison
                      </Link>{" "}
                      for structured UK snapshots and always verify quotes with regulated providers.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  Selecting between Mounjaro and Wegovy comes down to your personal goals, how your body responds and
                  practical factors like cost and supply. By understanding mechanism, trial data, dosing and side
                  effects, you are better equipped to make an informed choice with your clinician. Remember that
                  medication is one piece of the puzzle pairing it with a healthy lifestyle and professional guidance
                  will help you achieve lasting success.
                </p>
                <p>
                  Good luck on your journey to a healthier you and compare regulated UK options before you pay; Health
                  Wise does not sell medicines.
                </p>
                <p
                  className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}
                >
                  <span className="font-semibold text-slate-600 dark:text-slate-300">Suggested hashtags:</span>{" "}
                  {SOCIAL_HASHTAGS}
                 For more context, explore our resources on <Link href="/wegovy-price-comparison" className="font-medium text-emerald-600 hover:underline">Wegovy price comparison</Link>.</p>
              </GuideSection>
            </article>

            <div className="mt-10">
              <GuideSharePanel
                url={shareUrl}
                title="How Mounjaro vs Wegovy: The Key Differences Explained Help You Choose"
                description="Mounjaro vs Wegovy UK: mechanisms, dosing, costs, and how to choose with your clinician."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
