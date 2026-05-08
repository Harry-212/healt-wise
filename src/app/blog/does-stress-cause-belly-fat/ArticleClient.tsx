"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  STRESS_BELLY_FAT_HERO_WEBP,
  STRESS_BELLY_FAT_INLINE_WEBP,
  blogWebpPath,
} from "./blog-assets";

const SHARE_PATH = "/blog/does-stress-cause-belly-fat";
const HERO_SRC = blogWebpPath(STRESS_BELLY_FAT_HERO_WEBP);
const INLINE_SRC = blogWebpPath(STRESS_BELLY_FAT_INLINE_WEBP);

const SOCIAL_HASHTAGS =
  "#StressAndWeight #Cortisol #BellyFat #VisceralFat #SleepHealth #MentalHealth";

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);
  const shareUrl = `${siteOrigin()}${SHARE_PATH}`;

  const toc = useMemo(
    () => [
      { id: "intro", label: "Introduction" },
      { id: "stress-response", label: "What happens when you are stressed?" },
      { id: "cortisol-belly", label: "How cortisol drives belly fat" },
      { id: "after-40", label: "Why it gets worse after 40" },
      { id: "cycle", label: "The stress belly fat cycle" },
      { id: "strategies", label: "Evidence-based strategies" },
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
            Does Stress Cause Belly Fat?
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              09 May 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              11 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_SRC}
            alt="Stress, cortisol and belly fat: how chronic stress links to abdominal weight gain"
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
                  If you&apos;ve noticed that your most stressful life periods
                  have coincided with weight gain particularly around the middle
                  that&apos;s not coincidence. Stress triggers a cascade of
                  hormonal changes that directly promote belly fat storage, and
                  this effect becomes more pronounced after 40.
                </p>
                <p>
                  The mechanism is well understood: chronic stress elevates
                  cortisol, and cortisol is one of the most potent drivers of
                  visceral (abdominal) fat accumulation. This article explains
                  exactly how and why this happens, and what you can do to break
                  the cycle.
                </p>
                <p>
                  If you are also curious how cortisol fits with other midlife
                  hormones, our guide{" "}
                  <Link
                    href="/blog/can-hormones-cause-belly-fat-after-40"
                    className="font-medium text-brand-primary underline"
                  >
                    Can hormones cause belly fat after 40?
                  </Link>{" "}
                  walks through oestrogen, testosterone, insulin and stress in
                  one place. For the broader picture of waist changes in your 40s,{" "}
                  <Link
                    href="/blog/why-does-belly-fat-increase-after-40"
                    className="font-medium text-brand-primary underline"
                  >
                    Why does belly fat increase after 40?
                  </Link>{" "}
                  is a useful companion read.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="stress-response"
                heading="What Happens in Your Body When You're Stressed?"
              >
                <p>
                  When you encounter a stressor whether it&apos;s a work
                  deadline, a difficult conversation, or a near miss in traffic
                  your body initiates the fight or flight response.
                </p>
                <p className="font-semibold">What happens in that response:</p>
                <p>
                  1. The hypothalamus signals the adrenal glands to release
                  adrenaline (epinephrine)
                </p>
                <p>
                  2. The HPA axis activates, triggering the release of cortisol
                </p>
                <p>
                  3. Cortisol raises blood glucose (to fuel the anticipated
                  physical response)
                </p>
                <p>4. Heart rate and blood pressure increase</p>
                <p>
                  5. Non essential processes (digestion, immune function) are
                  temporarily suppressed
                </p>
                <p>
                  This response is designed for short term, physical threats. The
                  problem is that modern stressors work pressure, financial worry,
                  relationship stress, social media are chronic and persistent
                  rather than brief and physical. And the body responds to
                  psychological stress with the same hormonal cascade as physical
                  danger.
                </p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_SRC}
                  alt="Managing stress, sleep and movement to support a healthier waistline"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection
                darkMode={darkMode}
                id="cortisol-belly"
                heading="How Cortisol Directly Causes Belly Fat"
              >
                <h3
                  className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  Visceral Fat Cells Are Rich in Cortisol Receptors
                </h3>
                <p>
                  Visceral fat the deep fat surrounding your abdominal organs
                  contains a significantly higher density of cortisol receptors
                  than subcutaneous fat (the fat under your skin). This means
                  visceral fat is particularly responsive to cortisol signals.
                </p>
                <p>
                  When cortisol is chronically elevated, it actively signals
                  visceral fat cells to take up circulating fats and glucose from
                  the bloodstream, store them as triglycerides, and resist
                  releasing stored fat during periods of calorie restriction.
                </p>
                <p>
                  This creates a direct, biologically driven connection between
                  chronic stress and abdominal fat gain.
                </p>

                <h3
                  className={`mt-8 text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  Cortisol Increases Appetite Especially for High Calorie Foods
                </h3>
                <p>
                  Cortisol stimulates appetite through multiple pathways. It
                  increases the production of neuropeptide Y (a hunger promoting
                  brain chemical) and reduces the effectiveness of leptin (the
                  satiety hormone). The result is increased hunger and a specific
                  craving for calorie dense, high fat, high sugar foods the
                  classic stress eating pattern.
                </p>
                <p>
                  Research from University College London found that higher
                  cortisol levels measured in hair samples (a reliable marker of
                  long term cortisol exposure) were significantly associated with
                  greater abdominal obesity.
                </p>

                <h3
                  className={`mt-8 text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  Cortisol Disrupts Sleep, Which Further Drives Fat Storage
                </h3>
                <p>
                  Elevated cortisol makes it harder to fall asleep and stay
                  asleep, particularly in the second half of the night. Poor
                  sleep independently raises cortisol the following day,
                  disrupts the hunger hormones leptin and ghrelin, and impairs
                  glucose metabolism. This creates a vicious cycle: stress leads
                  to poor sleep, then higher cortisol, then more belly fat, then
                  more stress about body changes.
                </p>

                <h3
                  className={`mt-8 text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  Cortisol Promotes Insulin Resistance
                </h3>
                <p>
                  Cortisol raises blood glucose by stimulating glucose production
                  in the liver and reducing the sensitivity of cells to insulin.
                  Over time, chronically elevated cortisol contributes to insulin
                  resistance a state where the body needs to produce more insulin
                  to manage blood sugar, which further promotes fat storage in
                  the visceral compartment.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="after-40"
                heading="Why Stress-Driven Belly Fat Gets Worse After 40"
              >
                <p>
                  After 40, several compounding factors make the stress belly fat
                  connection more pronounced.
                </p>
                <p>
                  1. Declining oestrogen (in women) means the natural cortisol
                  buffering effect of oestrogen is reduced. The brain becomes
                  more reactive to stressors, and cortisol responses are more
                  intense and prolonged.
                </p>
                <p>
                  2. Reduced HPA axis efficiency the regulatory system that
                  brings cortisol back to baseline becomes less effective with
                  age, meaning cortisol stays elevated longer after stressful
                  events.
                </p>
                <p>
                  3. Higher baseline life stress midlife typically coincides with
                  peak career pressure, caregiving responsibilities, financial
                  complexity, and relationship transitions. The total stress load is
                  often at its lifetime maximum.
                </p>
                <p>
                  4. Less recovery time fewer leisure hours, poorer sleep
                  quality, and reduced time for movement all mean fewer cortisol
                  clearing opportunities.
                </p>
                <p>
                  Many people in this life stage find it helpful to treat sleep
                  and stress as non negotiable foundations, not extras. Our{" "}
                  <Link
                    href="/helpful-guides/mounjaro-menopause-weight-loss-uk"
                    className="font-medium text-brand-primary underline"
                  >
                    Menopause and weight (UK guide)
                  </Link>{" "}
                  touches on overlapping hormonal and lifestyle themes if you
                  want UK focused context alongside this stress focused piece.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="cycle"
                heading="The Stress-Belly Fat Cycle: Why It's Hard to Break"
              >
                <p className="font-semibold">The cycle step by step:</p>
                <p>1. Chronic stress</p>
                <p>2. Elevated cortisol</p>
                <p>3. Increased appetite plus visceral fat storage</p>
                <p>4. Poor sleep, insulin resistance</p>
                <p>5. More fatigue, less motivation to exercise</p>
                <p>6. Less movement, then more fat gain</p>
                <p>7. More stress about body image and health</p>
                <p>8. The cycle repeats</p>
                <p>
                  This cycle explains why addressing only diet and exercise is
                  often insufficient. Without reducing the underlying cortisol
                  load, the body continues to resist fat loss even in a calorie
                  deficit.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="strategies"
                heading="Evidence-Based Strategies to Break the Cortisol-Belly Fat Cycle"
              >
                <h3
                  className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  1. Prioritise Sleep Above Almost Everything Else
                </h3>
                <p>
                  Sleep is the most powerful cortisol regulating intervention
                  available. Even one night of poor sleep measurably elevates
                  cortisol the next day. Aim for 7 to 9 hours, with consistent
                  sleep and wake times.
                </p>
                <p className="font-semibold">Sleep hygiene essentials:</p>
                <p>1. No screens for 60 minutes before bed</p>
                <p>2. Cool, dark room (18 to 20°C)</p>
                <p>
                  3. Limit alcohol it fragments sleep architecture
                </p>
                <p>4. Consistent wake time, even at weekends</p>

                <h3
                  className={`mt-8 text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  2. Choose Movement That Lowers Cortisol, Not Raises It
                </h3>
                <p>
                  Not all exercise reduces belly fat. High intensity, long
                  duration cardio can significantly raise cortisol the opposite of
                  what you need. Walking, on the other hand, is one of the most
                  cortisol friendly forms of exercise.
                </p>
                <p>
                  1. A 30 minute walk in nature has been shown to reduce cortisol
                  by up to 20 percent
                </p>
                <p>
                  2. Regular walking improves HPA axis regulation over time
                </p>
                <p>
                  3. Two weekly short, high intensity intervals can be
                  metabolically beneficial without excessive cortisol burden
                </p>
                <p>
                  Avoid training hard when severely sleep deprived or highly
                  stressed this adds physiological stress on top of existing
                  stress.
                </p>

                <h3
                  className={`mt-8 text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  3. Targeted Stress Reduction Practices
                </h3>
                <p>The evidence base for specific stress reduction techniques is substantial.</p>
                <p>
                  1. Mindfulness meditation even 10 to 15 minutes daily has
                  shown measurable reductions in cortisol levels in multiple
                  randomised controlled trials
                </p>
                <p>
                  2. Diaphragmatic breathing activates the parasympathetic
                  nervous system, directly counteracting the stress response
                  within minutes
                </p>
                <p>
                  3. Progressive muscle relaxation proven to reduce cortisol and
                  improve sleep quality
                </p>
                <p>
                  4. Nature exposure 20 to 30 minutes in natural environments
                  (parks, woodland) reduces cortisol and self reported stress
                </p>

                <h3
                  className={`mt-8 text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  4. Reduce Caffeine and Alcohol
                </h3>
                <p>
                  Caffeine stimulates cortisol release and has a half life of 5
                  to 6 hours. A coffee at 2pm can still be affecting cortisol
                  levels at bedtime. Limit caffeine after midday if stress and
                  sleep quality are concerns.
                </p>
                <p>
                  Alcohol may feel stress relieving in the short term but
                  disrupts deep sleep, impairs cortisol regulation, and adds
                  calories that are preferentially stored as abdominal fat.
                </p>

                <h3
                  className={`mt-8 text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  5. Eat to Support Cortisol Regulation
                </h3>
                <p>
                  1. Prioritise protein protein at each meal stabilises blood
                  sugar, reducing the blood glucose swings that trigger cortisol
                  release
                </p>
                <p>
                  2. Include magnesium rich foods magnesium (found in leafy
                  greens, nuts, seeds) supports the HPA axis and has a natural
                  calming effect
                </p>
                <p>
                  3. Omega 3 fatty acids (oily fish, flaxseed, walnuts) shown to
                  reduce cortisol reactivity and inflammatory responses
                </p>
                <p>
                  4. Reduce sugar and refined carbs these cause blood glucose
                  spikes and crashes, each of which triggers cortisol release
                </p>

                <h3
                  className={`mt-8 text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  6. Address the Stress Source, Not Just the Symptoms
                </h3>
                <p>
                  Breathing exercises and walks are valuable, but if the source
                  of stress is structural a toxic work environment, unresolved
                  relationship conflict, financial insecurity these practices
                  provide temporary relief without addressing the root cause.
                  Longer term strategies include boundary setting, cognitive
                  behavioural therapy (CBT), lifestyle simplification, and
                  professional support.
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
                      Can stress really make you gain belly fat?
                    </h3>
                    <p>
                      Yes. Chronic stress elevates cortisol, which directly
                      promotes visceral fat storage in the abdominal area. This is
                      a well documented hormonal mechanism, not a generalisation.
                    </p>
                  </div>
                  <div>
                    <h3
                      className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                      How long does it take for stress belly fat to go away?
                    </h3>
                    <p>
                      When the cortisol load is reduced (through consistent
                      sleep, stress management, and appropriate movement), many
                      people see measurable reductions in waist circumference
                      within 8 to 12 weeks. Visceral fat is actually more
                      metabolically responsive than subcutaneous fat.
                    </p>
                  </div>
                  <div>
                    <h3
                      className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                      Is stress belly different from regular belly fat?
                    </h3>
                    <p>
                      Yes, in a sense. Stress driven belly fat tends to be
                      visceral (deeper) rather than subcutaneous, feels harder or
                      more solid, and is particularly resistant to exercise only
                      approaches. It responds well to cortisol lowering
                      strategies.
                    </p>
                  </div>
                  <div>
                    <h3
                      className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                      Does exercise help with stress belly fat?
                    </h3>
                    <p>
                      Yes but the type matters. Moderate exercise (walking, yoga,
                      cycling) lowers cortisol and reduces visceral fat. Excessive
                      high intensity training can raise cortisol and worsen the
                      problem if the body is already under significant stress.
                    </p>
                  </div>
                  <div>
                    <h3
                      className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                      What supplements help with cortisol?
                    </h3>
                    <p>
                      Some evidence supports adaptogens like ashwagandha for
                      cortisol reduction, and magnesium glycinate for stress and
                      sleep. However, these should complement not replace the
                      foundational lifestyle strategies of sleep, exercise, and
                      stress management.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  Stress isn&apos;t just bad for your mental health it actively
                  reshapes your body composition by driving cortisol mediated
                  visceral fat accumulation. After 40, this connection becomes
                  even more pronounced as hormonal buffers decline and life stress
                  tends to peak.
                </p>
                <p>
                  The good news is that the cortisol belly fat cycle is genuinely
                  breakable. Prioritising sleep, choosing cortisol friendly
                  exercise, practising targeted stress reduction techniques, and
                  eating to support blood sugar stability are all evidence based
                  steps that directly address the hormonal root cause.
                </p>
                <p>
                  Managing belly fat after 40 isn&apos;t purely a nutrition and
                  exercise problem. For many people, it&apos;s fundamentally a
                  stress management problem. Start there.
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
                title="Does Stress Cause Belly Fat?"
                description="Chronic stress raises cortisol, and cortisol directly fuels belly fat storage. Understand the stress-belly fat link and evidence-based strategies to break the cycle."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
