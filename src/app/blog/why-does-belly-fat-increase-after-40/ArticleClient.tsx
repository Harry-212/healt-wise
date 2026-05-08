"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection, GuideTable } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  BELLY_FAT_AFTER_40_HERO_WEBP,
  BELLY_FAT_AFTER_40_INLINE_WEBP,
  blogWebpPath,
} from "./blog-assets";

const SHARE_PATH = "/blog/why-does-belly-fat-increase-after-40";
const HERO_SRC = blogWebpPath(BELLY_FAT_AFTER_40_HERO_WEBP);
const INLINE_SRC = blogWebpPath(BELLY_FAT_AFTER_40_INLINE_WEBP);

const SOCIAL_HASHTAGS =
  "#BellyFatAfter40 #VisceralFat #HormoneHealth #StrengthTraining #MetabolicHealth #HealthyAgeing";

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);
  const shareUrl = `${siteOrigin()}${SHARE_PATH}`;

  const toc = useMemo(
    () => [
      { id: "intro", label: "Introduction" },
      { id: "changes", label: "What changes in your body after 40?" },
      { id: "visceral-vs-subcutaneous", label: "Visceral vs subcutaneous fat" },
      { id: "why-old-approach-fails", label: "Why old approaches stop working" },
      { id: "summary", label: "What actually drives belly fat after 40" },
      { id: "reverse", label: "Can you reverse belly fat after 40?" },
      { id: "healthwise360", label: "How HealthWise360 can help" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion" },
    ],
    [],
  );

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

        <header className="mb-12">
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            Why Does Belly Fat Increase After 40? Causes &amp; Solutions
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              08 May 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              10 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_SRC}
            alt="Belly fat after 40 — understanding why waistlines change and what helps"
          />
          <div
            id="guide-article-hero-end"
            aria-hidden
            className="pointer-events-none h-0 w-full overflow-hidden"
          />
        </header>

        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          {toc.length > 0 && (
            <GuideTocSidebar key={toc.map((t) => t.id).join("-")} toc={toc} />
          )}

          <div className="min-w-0 max-w-3xl flex-1">
            <article
              className={`space-y-8 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}
            >
              <GuideSection darkMode={darkMode} id="intro" heading="Introduction">
                <p className="text-lg md:text-xl">
                  If you&apos;ve noticed your waistline expanding in your 40s even
                  when your diet and exercise habits haven&apos;t changed
                  you&apos;re not imagining it. Belly fat after 40 is one of the
                  most common health concerns, and it&apos;s driven by very real,
                  measurable changes in your body.
                </p>
                <p>
                  This isn&apos;t about willpower or effort. It&apos;s about biology.
                  Understanding why belly fat increases after 40 is the first
                  step to doing something meaningful about it.
                </p>
                <p>
                  If you want a practical starting point while you read, it can
                  help to track one simple metric each week (for example waist
                  circumference, not just scale weight) and pair it with a
                  sustainable routine. Many people find that consistency becomes
                  easier when they focus on strength and sleep first, not just
                  restriction.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="changes"
                heading="What Changes in Your Body After 40?"
              >
                <h3
                  className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  1. Hormonal Shifts Redirect Fat Storage
                </h3>
                <p>
                  For women, the perimenopausal transition which typically
                  begins in the early-to-mid 40s causes oestrogen levels to
                  fluctuate and gradually decline. Oestrogen plays a significant
                  role in determining where your body stores fat. When levels
                  drop, the body shifts fat storage from the hips and thighs
                  (subcutaneous fat) toward the abdomen (visceral fat).
                </p>
                <p>
                  For men, declining testosterone after 40 reduces lean muscle
                  mass and promotes fat accumulation, particularly in the
                  midsection.
                </p>
                <p>
                  If your changes line up with menopause timing, you might also
                  find the UK-focused guidance in{" "}
                  <Link
                    href="/helpful-guides/mounjaro-menopause-weight-loss-uk"
                    className="font-medium text-brand-primary underline"
                  >
                    Menopause &amp; weight (UK guide)
                  </Link>{" "}
                  useful as a broader context for how hormones can shift hunger,
                  sleep, and energy.
                </p>

                <h3
                  className={`mt-8 text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  2. Muscle Mass Declines (Sarcopenia Begins)
                </h3>
                <p>
                  From around age 30, the body starts losing muscle mass at
                  approximately 3 to 8 percent per decade a process called
                  sarcopenia. After 40, this accelerates if not actively
                  countered with resistance training. Since muscle is
                  metabolically active tissue, losing it reduces your resting
                  metabolic rate. The result: your body burns fewer calories at
                  rest, even if your diet stays the same.
                </p>

                <h3
                  className={`mt-8 text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  3. Insulin Sensitivity Decreases
                </h3>
                <p>
                  As we age, cells become less responsive to insulin, the
                  hormone that regulates blood sugar. When insulin sensitivity
                  declines, the body is more likely to convert excess glucose
                  into fat and to store it viscerally, deep in the abdomen
                  around the organs.
                </p>

                <h3
                  className={`mt-8 text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  4. Metabolic Rate Slows Naturally
                </h3>
                <p>
                  Even without muscle loss, the body&apos;s basal metabolic rate
                  (BMR) tends to decline with age due to changes in mitochondrial
                  efficiency and hormonal signalling. Eating the same number of
                  calories at 45 as you did at 25 can create a small but
                  meaningful daily surplus.
                </p>

                <h3
                  className={`mt-8 text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  5. Cortisol Becomes More Influential
                </h3>
                <p>
                  Chronic stress is common in midlife career pressures, family
                  responsibilities, financial demands. Elevated cortisol (the
                  stress hormone) directly promotes visceral fat storage,
                  particularly in the abdominal area. After 40, the body&apos;s
                  stress response system also becomes less efficient at
                  returning to baseline, meaning cortisol stays elevated longer.
                </p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_SRC}
                  alt="Belly fat after 40 — lifestyle factors like sleep, stress and strength training matter"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection
                darkMode={darkMode}
                id="visceral-vs-subcutaneous"
                heading="Visceral Fat vs. Subcutaneous Fat: Why It Matters"
              >
                <p>
                  Not all belly fat is the same. There are two distinct types.
                </p>
                <p>
                  Subcutaneous fat sits just under the skin the fat you can
                  pinch. It&apos;s visible and often cosmetically concerning, but
                  it&apos;s metabolically relatively inert.
                </p>
                <p>
                  Visceral fat sits deep inside the abdominal cavity,
                  surrounding organs like the liver, pancreas, and intestines.
                  This is the fat that accumulates most readily after 40, and
                  it&apos;s far more dangerous.
                </p>
                <p className="font-semibold">
                  Visceral fat can contribute to health risks in several ways:
                </p>
                <p>
                  1. Produces inflammatory cytokines that raise cardiovascular
                  disease risk
                </p>
                <p>
                  2. Disrupts insulin signalling, contributing to type 2
                  diabetes
                </p>
                <p>
                  3. Releases fatty acids directly into the portal blood supply
                  to the liver
                </p>
                <p>
                  4. Is associated with higher risks of certain cancers
                </p>
                <p>
                  This is why belly fat after 40 is a health issue, not just an
                  aesthetic one.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="why-old-approach-fails"
                heading="Why Your Old Approach to Weight Loss Stops Working"
              >
                <p>
                  Many people in their 40s find that the strategies that worked
                  in their 20s and 30s cutting calories, doing more cardio no
                  longer produce the same results. Here&apos;s why.
                </p>
                <p>
                  1. Hormonal changes mean fat distribution has fundamentally
                  shifted
                </p>
                <p>
                  2. Lower muscle mass means calorie cutting further depletes
                  lean tissue
                </p>
                <p>
                  3. Elevated cortisol from excessive cardio can actually
                  increase visceral fat storage
                </p>
                <p>
                  4. Reduced sleep quality (common after 40) disrupts hunger
                  hormones leptin and ghrelin
                </p>
                <p>
                  Eating less and exercising more in the conventional sense can
                  actually backfire if not approached correctly for the post 40
                  body.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="summary"
                heading="What Actually Drives Belly Fat After 40: A Summary"
              >
                <div
                  className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}
                >
                  <GuideTable
                    headers={["Factor", "How it contributes"]}
                    rows={[
                      {
                        cells: [
                          "Declining oestrogen or testosterone",
                          "Shifts fat storage to the abdomen",
                        ],
                      },
                      {
                        cells: [
                          "Sarcopenia (muscle loss)",
                          "Lowers metabolic rate",
                        ],
                      },
                      {
                        cells: [
                          "Reduced insulin sensitivity",
                          "Promotes visceral fat formation",
                        ],
                      },
                      {
                        cells: [
                          "Elevated cortisol",
                          "Directly fuels abdominal fat storage",
                        ],
                      },
                      {
                        cells: [
                          "Poor sleep quality",
                          "Disrupts hunger hormones",
                        ],
                      },
                      {
                        cells: [
                          "Lower physical activity",
                          "Reduces calorie burn and muscle maintenance",
                        ],
                      },
                    ]}
                  />
                </div>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="reverse"
                heading="Can You Reverse Belly Fat After 40?"
              >
                <p>
                  Yes but the approach needs to match the biology. Research
                  consistently shows that these evidence based strategies are
                  most effective after 40.
                </p>
                <p>
                  1. Strength and resistance training rebuilds muscle mass,
                  boosts metabolic rate, and improves insulin sensitivity
                </p>
                <p>
                  2. Moderate intensity movement daily walking has been shown
                  to reduce visceral fat without spiking cortisol
                </p>
                <p>
                  3. Protein focused nutrition higher protein intake preserves
                  muscle during a calorie deficit
                </p>
                <p>
                  4. Stress management directly addresses the cortisol visceral
                  fat connection
                </p>
                <p>
                  5. Sleep optimisation 7 to 9 hours per night normalises
                  hunger hormones and cortisol rhythms. If sleep has been the
                  hardest piece, it may help to start with simple routines and
                  keep them consistent. You can also explore the supportive
                  resources linked from our sleep hub content, which highlights
                  how sleep affects hunger hormones and cravings in everyday
                  life.
                </p>
                <p>
                  6. Reducing refined carbohydrates and sugar addresses insulin
                  resistance without extreme restriction
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="healthwise360"
                heading="How HealthWise360 Can Help"
              >
                <p>
                  At HealthWise360, we take a whole body approach to health
                  after 40. Our evidence based resources cover everything from
                  hormonal health and nutrition to exercise and mental wellbeing
                  helping you understand your body and take meaningful action.
                </p>
                <p className="font-semibold">Explore our related guides:</p>
                <p>
                  Can Hormones Cause Belly Fat After 40? If you want a practical
                  hormones first angle, start with our menopause and weight
                  guide:{" "}
                  <Link
                    href="/helpful-guides/mounjaro-menopause-weight-loss-uk"
                    className="font-medium text-brand-primary underline"
                  >
                    Menopause &amp; weight (UK guide)
                  </Link>
                  .
                </p>
                <p>
                  Is Visceral Fat Different from Belly Fat? The visceral section
                  above breaks down what matters most: where it sits, why it is
                  riskier, and which lifestyle levers are most effective.
                </p>
                <p>
                  Why Do Old Diets Stop Working After 40? If you feel stuck,
                  consider focusing on protein and strength training first
                  before you tighten calories, so you preserve lean mass.
                </p>
              </GuideSection>

              <section
                id="faq"
                className={`mt-16 border-t pt-10 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
              >
                <h2
                  className={`mb-8 text-3xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  Frequently Asked Questions
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3
                      className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                      Why does belly fat suddenly appear after 40?
                    </h3>
                    <p>
                      It&apos;s rarely sudden the changes are gradual and driven
                      by declining sex hormones, reduced muscle mass, and lower
                      insulin sensitivity. The perimenopausal transition in women
                      and declining testosterone in men both shift fat storage to
                      the abdomen.
                    </p>
                  </div>
                  <div>
                    <h3
                      className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                      Is belly fat after 40 dangerous?
                    </h3>
                    <p>
                      Visceral belly fat the deep fat around organs is associated
                      with higher risks of cardiovascular disease, type 2 diabetes,
                      and metabolic syndrome. It&apos;s not purely cosmetic.
                    </p>
                  </div>
                  <div>
                    <h3
                      className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                      Can you lose belly fat after 40?
                    </h3>
                    <p>
                      Yes, absolutely. It requires a strategy tailored to the
                      post 40 body: strength training, adequate protein, sleep,
                      stress management, and moderate activity. Extreme calorie
                      restriction and excessive cardio are often counterproductive.
                    </p>
                  </div>
                  <div>
                    <h3
                      className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                      Why doesn&apos;t eating less work anymore after 40?
                    </h3>
                    <p>
                      Because the underlying issue isn&apos;t just calorie intake
                      it&apos;s hormonal changes, muscle loss, and insulin
                      resistance. Cutting calories without addressing these
                      factors can further reduce muscle mass and elevate stress
                      hormones, worsening the problem.
                    </p>
                  </div>
                  <div>
                    <h3
                      className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                      How long does it take to lose belly fat after 40?
                    </h3>
                    <p>
                      With consistent, targeted effort, most people see measurable
                      reductions in waist circumference within 8 to 12 weeks.
                      Visceral fat is actually more metabolically responsive than
                      subcutaneous fat, so it can reduce relatively quickly with
                      the right approach.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  Belly fat after 40 isn&apos;t a failure of willpower it&apos;s
                  the result of predictable, measurable physiological changes.
                  Declining hormones shift fat to the abdomen, muscle loss slows
                  your metabolism, and rising cortisol from daily stress
                  compounds the problem. Understanding these mechanisms is
                  empowering: once you know why it&apos;s happening, you can take
                  targeted action that actually works.
                </p>
                <p>
                  The good news is that the body remains highly adaptable even
                  after 40. With the right combination of resistance training,
                  smart nutrition, stress management, and quality sleep,
                  reducing belly fat after 40 is entirely achievable.
                </p>
                <p
                  className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}
                >
                  Health Wise does not sell medicines; this article is general
                  information and does not replace advice from your clinician.
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
                title="Why Does Belly Fat Increase After 40? Causes & Solutions"
                description="Discover the real reasons belly fat increases after 40 — from hormonal shifts to metabolic changes. Evidence-based explanations and what you can actually do about it."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

