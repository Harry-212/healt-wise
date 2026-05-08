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
  HORMONES_BELLY_FAT_AFTER_40_HERO_WEBP,
  HORMONES_BELLY_FAT_AFTER_40_INLINE_WEBP,
  blogWebpPath,
} from "./blog-assets";

const SHARE_PATH = "/blog/can-hormones-cause-belly-fat-after-40";
const HERO_SRC = blogWebpPath(HORMONES_BELLY_FAT_AFTER_40_HERO_WEBP);
const INLINE_SRC = blogWebpPath(HORMONES_BELLY_FAT_AFTER_40_INLINE_WEBP);

const SOCIAL_HASHTAGS =
  "#HormoneHealth #BellyFatAfter40 #Perimenopause #Cortisol #InsulinResistance #StrengthTraining";

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);
  const shareUrl = `${siteOrigin()}${SHARE_PATH}`;

  const toc = useMemo(
    () => [
      { id: "intro", label: "Introduction" },
      { id: "four-hormones", label: "The four key hormones" },
      { id: "interactions", label: "How hormones interact" },
      { id: "signs", label: "Signs hormones are involved" },
      { id: "what-to-do", label: "What you can do" },
      { id: "testing", label: "Should you get hormones tested?" },
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
            Can Hormones Cause Belly Fat After 40
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
            alt="Hormones and belly fat after 40 — understanding the drivers and what helps"
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
                  The short answer is: yes. Hormones are among the most powerful
                  drivers of belly fat accumulation after 40 and in many cases,
                  they explain why intelligent, health conscious people suddenly
                  find their midsection changing despite no obvious lifestyle
                  shifts.
                </p>
                <p>
                  Understanding which hormones are involved, how they interact,
                  and what you can do to support hormonal balance is one of the
                  most effective routes to managing belly fat in midlife.
                </p>
                <p>
                  If you&apos;re exploring this topic because your waist has
                  changed in your 40s, our companion guide{" "}
                  <Link
                    href="/blog/why-does-belly-fat-increase-after-40"
                    className="font-medium text-brand-primary underline"
                  >
                    Why does belly fat increase after 40?
                  </Link>{" "}
                  explains the broader biology (muscle loss, metabolic changes,
                  insulin sensitivity) so you can see how hormones sit within
                  the full picture.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="four-hormones"
                heading="The Four Key Hormones Driving Belly Fat After 40"
              >
                <h3
                  className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  1. Oestrogen: The Fat Redistribution Hormone
                </h3>
                <p>
                  Oestrogen is the primary driver of body fat distribution in
                  women. When oestrogen levels are optimal, fat tends to be
                  stored in the hips, buttocks, and thighs a pattern associated
                  with lower cardiovascular risk.
                </p>
                <p>
                  As women enter perimenopause (typically 40 to 51), oestrogen
                  levels fluctuate significantly before eventually declining.
                  This hormonal shift changes where fat is stored. The body
                  redirects fat accumulation toward the abdominal region,
                  particularly visceral fat the deep fat surrounding the organs.
                </p>
                <p>
                  Research published in Obesity Reviews confirms that this
                  oestrogen related redistribution from peripheral (hip and
                  thigh) to central (abdominal) fat storage is a consistent
                  feature of the menopausal transition.
                </p>
                <p className="font-semibold">What happens:</p>
                <p>1. Less oestrogen leads to reduced peripheral fat storage</p>
                <p>2. Fat storage shifts to visceral (abdominal) depots</p>
                <p>
                  3. Abdominal fat becomes more metabolically active and
                  inflammatory
                </p>
                <p>
                  If you want a UK-focused angle on menopause and weight, this
                  guide is a helpful follow up:{" "}
                  <Link
                    href="/helpful-guides/mounjaro-menopause-weight-loss-uk"
                    className="font-medium text-brand-primary underline"
                  >
                    Menopause &amp; weight (UK guide)
                  </Link>
                  .
                </p>

                <h3
                  className={`mt-8 text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  2. Testosterone: The Muscle Protecting Hormone (Affects Both
                  Sexes)
                </h3>
                <p>
                  Testosterone is critical for maintaining lean muscle mass. In
                  men, testosterone declines gradually from around age 30 a
                  process sometimes called andropause. By the mid 40s, this
                  decline can be clinically significant.
                </p>
                <p>
                  In women, testosterone also plays a role, and its levels drop
                  across the menopause transition alongside oestrogen.
                </p>
                <p className="font-semibold">Lower testosterone means:</p>
                <p>1. Reduced ability to build and retain muscle</p>
                <p>
                  2. Lower resting metabolic rate (muscle burns more calories
                  than fat)
                </p>
                <p>
                  3. Increased fat to muscle ratio, particularly in the
                  midsection
                </p>
                <p>
                  This is why men in their 40s often develop a pronounced
                  abdominal change even with relatively stable diet and activity
                  levels.
                </p>

                <h3
                  className={`mt-8 text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  3. Cortisol: The Stress Hormone That Feeds Belly Fat
                </h3>
                <p>
                  Cortisol is released by the adrenal glands in response to
                  stress physical, emotional, or psychological. In the short
                  term, it&apos;s protective. Chronically elevated, it becomes
                  one of the most potent drivers of visceral fat accumulation.
                </p>
                <p>
                  Visceral fat cells have a high density of cortisol receptors.
                  When cortisol is chronically elevated, these cells actively
                  take up and store fat. This creates a direct hormonal pathway
                  from stress to abdominal weight gain.
                </p>
                <p>
                  After 40, the body&apos;s stress response system (the HPA axis)
                  becomes less efficient at returning to baseline, meaning
                  cortisol remains elevated for longer after stressful events.
                </p>
                <p className="font-semibold">The cortisol belly fat cycle:</p>
                <p>1. Chronic stress leads to elevated cortisol</p>
                <p>
                  2. Cortisol stimulates appetite (particularly for high calorie
                  foods)
                </p>
                <p>3. Cortisol directs fat storage to visceral depots</p>
                <p>4. Visceral fat itself produces cortisol, perpetuating the cycle</p>
                <p>
                  If stress and sleep feel intertwined for you, it may help to
                  focus on one small sleep routine first. Sleep affects hunger
                  hormones and cravings, so it often makes every other lever
                  easier.
                </p>

                <h3
                  className={`mt-8 text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  4. Insulin: The Storage Hormone
                </h3>
                <p>
                  Insulin regulates blood sugar by directing glucose into cells
                  for energy or storage. After 40, cells become progressively
                  less responsive to insulin&apos;s signals a state known as
                  insulin resistance.
                </p>
                <p>
                  When cells resist insulin&apos;s signals, the pancreas
                  compensates by producing more. Elevated insulin levels strongly
                  promote fat storage, and the abdominal region is particularly
                  sensitive to this effect.
                </p>
                <p>
                  Insulin resistance also makes it harder for fat cells to
                  release stored fat for energy which is why people with insulin
                  resistance often feel like their fat is locked in place.
                </p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_SRC}
                  alt="Hormonal belly fat after 40 — the interplay of stress, sleep, and insulin sensitivity"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection
                darkMode={darkMode}
                id="interactions"
                heading="How These Hormones Interact: The Bigger Picture"
              >
                <p>
                  These four hormones don&apos;t operate independently they form
                  an interconnected system, and imbalances in one often affect
                  the others.
                </p>
                <p>
                  1. Oestrogen and cortisol: Oestrogen has a natural cortisol
                  buffering effect. As oestrogen declines, the brain becomes more
                  reactive to stress, and cortisol responses become more
                  pronounced.
                </p>
                <p>
                  2. Cortisol and insulin: Cortisol raises blood glucose (to
                  provide energy during stress), which triggers insulin release.
                  Chronic cortisol elevation is a major contributor to insulin
                  resistance.
                </p>
                <p>
                  3. Testosterone and insulin: Testosterone improves insulin
                  sensitivity. As testosterone declines, insulin resistance tends
                  to worsen.
                </p>
                <p>
                  This hormonal web explains why belly fat after 40 can feel so
                  resistant to conventional approaches the underlying drivers are
                  systemic, not just caloric.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="signs"
                heading="Signs That Hormones Are Behind Your Belly Fat"
              >
                <p>
                  Hormonal belly fat tends to have specific characteristics that
                  distinguish it from simple overeating.
                </p>
                <p>
                  1. Fat accumulation primarily in the lower abdomen and waist,
                  with little change elsewhere
                </p>
                <p>2. Weight gain despite no obvious change in diet or activity</p>
                <p>
                  3. Difficulty losing abdominal fat even with consistent
                  exercise and dietary restriction
                </p>
                <p>
                  4. Accompanying symptoms: fatigue, disrupted sleep, mood
                  changes, hot flushes (in women), low libido
                </p>
                <p>5. A softer or more fluid feeling in the abdominal area</p>
                <p>
                  If these patterns resonate, hormonal factors are likely
                  contributing.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="what-to-do"
                heading="What You Can Do: Supporting Hormonal Balance for Belly Fat Management"
              >
                <h3
                  className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  For Oestrogen and Testosterone Decline
                </h3>
                <p>
                  1. Resistance training is the most evidence supported
                  intervention it partially compensates for declining sex
                  hormones by improving body composition and insulin sensitivity
                </p>
                <p>
                  2. HRT (Hormone Replacement Therapy) for women, HRT doesn&apos;t
                  directly burn fat, but by stabilising oestrogen, it can improve
                  sleep, reduce stress reactivity, and improve insulin
                  sensitivity, creating conditions where fat management becomes
                  easier. Discuss risks and benefits with your GP
                </p>
                <p>
                  3. Phytoestrogens (soy, flaxseed) may provide modest oestrogen
                  like effects for some women
                </p>
                <p>
                  4. Adequate dietary fat sex hormones are made from cholesterol;
                  very low fat diets can impair hormone production
                </p>

                <h3
                  className={`mt-8 text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  For Cortisol Management
                </h3>
                <p>
                  1. Prioritise sleep (7 to 9 hours) poor sleep is one of the
                  strongest drivers of cortisol elevation
                </p>
                <p>
                  2. Implement stress management practices: mindfulness, breath
                  work, nature exposure
                </p>
                <p>
                  3. Avoid excessive duration cardio long, intense cardio
                  sessions raise cortisol significantly
                </p>
                <p>
                  4. Reduce caffeine after midday caffeine stimulates cortisol
                  release
                </p>

                <h3
                  className={`mt-8 text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  For Insulin Sensitivity
                </h3>
                <p>1. Reduce refined carbohydrates and added sugars</p>
                <p>2. Increase dietary fibre slows glucose absorption</p>
                <p>
                  3. Walk after meals even 10 minutes significantly blunts the
                  post meal glucose spike
                </p>
                <p>
                  4. Resistance training muscle tissue is the body&apos;s primary
                  glucose sink
                </p>

                <div
                  className={`my-8 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}
                >
                  <GuideTable
                    headers={["Hormone", "Common midlife shift", "Most helpful lever"]}
                    rows={[
                      {
                        cells: [
                          "Oestrogen",
                          "Fluctuates then declines in perimenopause/menopause",
                          "Strength training + sleep support",
                        ],
                      },
                      {
                        cells: [
                          "Testosterone",
                          "Gradual decline affects lean mass and metabolism",
                          "Progressive resistance training",
                        ],
                      },
                      {
                        cells: [
                          "Cortisol",
                          "Stays elevated longer after stress",
                          "Sleep + stress routines, avoid overtraining",
                        ],
                      },
                      {
                        cells: [
                          "Insulin",
                          "Sensitivity declines; resistance rises",
                          "Fibre, walking after meals, strength work",
                        ],
                      },
                    ]}
                  />
                </div>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="testing"
                heading="Should You Get Your Hormones Tested?"
              >
                <p>
                  If you suspect hormonal imbalance is driving your belly fat, a
                  GP can arrange basic hormone panels. For women, this includes
                  FSH, LH, and oestradiol (particularly during the perimenopause
                  transition). For men, total and free testosterone are the key
                  markers.
                </p>
                <p>
                  A comprehensive thyroid panel (TSH, T3, T4) is also worth
                  considering underactive thyroid (hypothyroidism) is common
                  after 40 and significantly slows metabolism.
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
                      Do hormones directly cause belly fat?
                    </h3>
                    <p>
                      Yes declining oestrogen shifts fat storage to the abdomen,
                      low testosterone reduces muscle mass (raising body fat
                      percentage), chronically elevated cortisol fuels visceral
                      fat accumulation, and insulin resistance locks fat in place.
                    </p>
                  </div>
                  <div>
                    <h3
                      className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                      Can HRT help reduce belly fat?
                    </h3>
                    <p>
                      HRT doesn&apos;t directly burn fat, but by stabilising
                      oestrogen it can improve conditions (better sleep, lower
                      stress reactivity, improved insulin sensitivity) that make
                      belly fat easier to manage. Studies show women on HRT tend
                      to have lower visceral fat than those not taking it, but
                      HRT isn&apos;t appropriate for everyone.
                    </p>
                  </div>
                  <div>
                    <h3
                      className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                      Is cortisol the main hormone causing belly fat?
                    </h3>
                    <p>
                      Cortisol is a major driver, but it works in combination
                      with other hormones. The interplay between declining sex
                      hormones, cortisol, and insulin resistance explains the
                      full picture of belly fat after 40.
                    </p>
                  </div>
                  <div>
                    <h3
                      className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                      Can balancing hormones help with weight loss?
                    </h3>
                    <p>
                      Supporting hormonal balance through lifestyle, nutrition,
                      stress management, and in some cases medical intervention
                      creates conditions where the body is more responsive to
                      weight management efforts. It&apos;s not a magic solution but
                      an important foundation.
                    </p>
                  </div>
                  <div>
                    <h3
                      className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                      What foods help balance hormones after 40?
                    </h3>
                    <p>
                      A Mediterranean style diet rich in vegetables, lean
                      protein, healthy fats, fibre, and limited refined
                      carbohydrates supports hormonal health. Specific foods
                      include: oily fish (omega 3s support inflammation and
                      hormone function), flaxseed (lignans may support oestrogen
                      balance), and cruciferous vegetables (support oestrogen
                      metabolism).
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  Hormones play a central, well documented role in driving belly
                  fat after 40. Declining oestrogen redistributes fat to the
                  abdomen, lower testosterone reduces metabolically active
                  muscle, chronic cortisol pumps fat into visceral storage, and
                  insulin resistance makes it stubbornly difficult to shift.
                  These aren&apos;t separate problems they&apos;re an interconnected
                  hormonal web.
                </p>
                <p>
                  The encouraging news is that lifestyle interventions
                  particularly strength training, sleep optimisation, stress
                  management, and smart nutrition directly address this hormonal
                  picture. And for some people, medical support such as HRT or
                  testosterone therapy can make meaningful additional difference.
                </p>
                <p>
                  If your belly fat arrived with your 40s, look to your hormones.
                  That&apos;s where the conversation needs to start.
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
                title="Can Hormones Cause Belly Fat After 40"
                description="Yes — hormones directly drive belly fat after 40. Learn how oestrogen, testosterone, cortisol, and insulin interact to cause abdominal weight gain, and what to do about it."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

