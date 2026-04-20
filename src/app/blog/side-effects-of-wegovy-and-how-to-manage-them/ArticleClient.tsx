"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  blogWebpPath,
  WEGOVY_SIDE_HERO_WEBP,
  WEGOVY_SIDE_INLINE_WEGOVY_WEBP,
  WEGOVY_SIDE_INLINE_SIDE_WEBP,
} from "./blog-assets";

const SHARE_PATH = "/blog/side-effects-of-wegovy-and-how-to-manage-them";
const HERO_SRC = blogWebpPath(WEGOVY_SIDE_HERO_WEBP);
const INLINE_WEGOVY = blogWebpPath(WEGOVY_SIDE_INLINE_WEGOVY_WEBP);
const INLINE_SIDE = blogWebpPath(WEGOVY_SIDE_INLINE_SIDE_WEBP);

const TOC = [
  { id: "overview", label: "Get to know Wegovy" },
  { id: "typical", label: "Identify typical side effects" },
  { id: "digestive", label: "Ease digestive discomfort" },
  { id: "appetite", label: "Maintain balanced appetite" },
  { id: "energy", label: "Boost daily energy" },
  { id: "wellbeing", label: "Watch your mental wellbeing" },
  { id: "professional", label: "Seek professional advice" },
  { id: "on-track", label: "Stay on track" },
  { id: "practical", label: "Take practical steps" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "conclusion", label: "Conclusion" },
];

const SOCIAL_HASHTAGS =
  "#WegovySideEffects #SemaglutideUK #GLP1 #WeightLossUK #WegovyTips #UKHealth";

function SubHeading({
  children,
  darkMode,
}: {
  children: React.ReactNode;
  darkMode: boolean;
}) {
  return (
    <p className={`mt-6 font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{children} For more context, explore our resources on <Link href="/mounjaro-price-comparison" className="font-medium text-emerald-600 hover:underline">Mounjaro price comparison</Link>.</p>
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
            Effective Tips for Handling Side Effects of Wegovy Yourself
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              22 Apr 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              11 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_SRC}
            alt="Feeling tired on Wegovy — managing fatigue and low energy while losing weight in the UK"
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
              <GuideSection darkMode={darkMode} id="overview" heading="Get to know Wegovy">
                <p className="text-lg md:text-xl">
                  Wegovy is an injectable prescription medication that many people like you use to support weight
                  management goals. As part of the growing popularity of weight loss injections in the UK, Wegovy can be a
                  helpful tool if you are looking to control your appetite and reach a healthier size. However, it is
                  important to understand the side effects of Wegovy and how to manage them. With the right knowledge, you
                  can keep discomfort to a minimum while staying on track with your progress.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="typical" heading="Identify typical side effects">
                <p>
                  Before you worry about unexpected symptoms, it helps to note that every individual responds differently
                  to medication. Still, there are a few side effects that many people experience when starting Wegovy,
                  especially in the early stages:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Mild digestive distress, such as nausea or diarrhoea</li>
                  <li>Changes in appetite, including taste alterations</li>
                  <li>Periods of fatigue or low energy</li>
                  <li>Occasional dizziness or headaches</li>
                  <li>Shifts in mood or mental clarity</li>
                </ul>
                <p>
                  Most of these issues tend to improve over time as your body adapts to the medication. If you are
                  concerned about any particular symptom, speak with your healthcare professional so they can help you
                  adjust your dose, diet or approach.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="digestive" heading="Ease digestive discomfort">
                <p>
                  One of the most common challenges relates to your digestive system. You might notice bloating,
                  constipation or nausea, all of which are fairly normal responses as your system gets used to Wegovy. One
                  way to get relief is to drink plenty of water. Aim for small but frequent sips if you are feeling queasy.
                  Herbal teas containing ingredients like ginger and peppermint can also calm your stomach.
                </p>
                <p>
                  Another tip is to keep your meals light and balanced. Large, heavy meals might trigger more discomfort,
                  so try to focus on smaller portions of protein sources, vegetables and whole grains. Think of it as giving
                  your stomach a gentler workload. If you notice that certain foods worsen your digestive symptoms, you can
                  note them down and adjust accordingly. Over time, you will learn which meals and snacks keep you feeling
                  your best.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="appetite" heading="Maintain balanced appetite">
                <p>
                  Wegovy works in part by regulating your appetite, which can be a welcome change if you are hoping to
                  reduce your food intake. Still, it is possible to swing between feeling too full and experiencing hunger
                  pangs. Try having a balanced meal routine with appropriate portion sizes rather than skipping meals or
                  waiting until you are ravenous.
                </p>
                <p>
                  You might find it helpful to eat more slowly, giving your brain and body time to register that you are
                  satisfied. If your appetite fluctuates, opt for nutrient dense foods like fresh produce, lean proteins
                  and moderate amounts of healthy fats. Slow releasing carbohydrates, such as oats or brown rice, can
                  provide steady energy and reduce sudden cravings.
                </p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_WEGOVY}
                  alt="Wegovy (semaglutide) weight-loss injection — context for prescription use and managing common side effects in the UK"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection darkMode={darkMode} id="energy" heading="Boost daily energy">
                <p>
                  It is not unusual to feel drained once you begin a new weight loss routine, and Wegovy may contribute
                  to that tired sensation. Finding the right balance of moderate exercise can help boost your overall
                  energy levels. Going for a short walk in the morning or doing gentle stretching in the evening could make
                  a big difference in your stamina.
                </p>
                <p>
                  In addition, consider checking your sleep schedule. Consistent rest plays a vital role in how
                  energised you feel throughout the day. If you find yourself feeling more fatigued than usual, build
                  regular breaks into your schedule or try brief power naps. Processed foods and sugary snacks might give
                  you quick bursts of energy, but these can lead to crashes. Instead, emphasise whole foods that supply
                  stable energy and support your health goals.
                 For more context, explore our resources on <Link href="/blog/mounjaro-weight-loss-benefits-backed-by-science" className="font-medium text-emerald-600 hover:underline">Mounjaro weight loss benefits</Link>.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="wellbeing" heading="Watch your mental wellbeing">
                <p>
                  When your body undergoes changes in appetite or energy, it is not surprising that mood might shift too.
                  While most users do not experience serious changes in mental health, it is wise to keep an eye on how you
                  are feeling. If you ever notice persistent sadness, irritability or anxiety, it is worth mentioning it to
                  a healthcare professional, friend or family member.
                </p>
                <p>
                  You can also support your mood by maintaining social connections. Sometimes, a simple chat with a
                  friend or a shared activity can reset your outlook. Additionally, a brief relaxation or mindfulness
                  session each day can calm any stressors. Pausing for five minutes to focus on your breathing, for example,
                  can bring immediate relief from anxious thoughts.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="professional" heading="Seek professional advice">
                <p>
                  Any ongoing or severe side effect is a signal that you should speak with your doctor. They might
                  recommend adjusting your dosage or providing a more personalised plan for you. If you ever feel uncertain
                  about combining Wegovy with other treatments or supplements, simply ask for a professional opinion. That
                  includes exploring other weight loss injections and how they compare in terms of benefits and drawbacks.
                </p>
                <p>
                  For a deeper comparison of injection based treatments, check out{" "}
                  <Link
                    href="/blog/mounjaro-vs-wegovy-key-differences-explained"
                    className="font-medium text-brand-primary underline"
                  >
                    Mounjaro vs Wegovy: the key differences explained
                  </Link>
                  . You might also find it helpful to read{" "}
                  <Link
                    href="/blog/understanding-the-mounjaro-kwikpen-a-user-guide"
                    className="font-medium text-brand-primary underline"
                  >
                    understanding the Mounjaro KwikPen: a user guide
                  </Link>
                  . Having a broader picture can empower you to make more informed decisions about your current routine.
                </p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_SIDE}
                  alt="Managing Wegovy side effects at home — rest, hydration and gentle routines alongside your UK treatment plan"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection darkMode={darkMode} id="on-track" heading="Stay on track">
                <p>
                  Alongside Wegovy, you have other factors to consider in your weight management journey. With weight loss
                  injections in high demand, it is worth keeping up with supply and continuity   our{" "}
                  <Link
                    href="/helpful-guides/switching-pharmacies-mounjaro-wegovy-uk"
                    className="font-medium text-brand-primary underline"
                  >
                    guide to switching pharmacies for Mounjaro or Wegovy in the UK
                  </Link>{" "}
                  can help you plan ahead. If you are new to this approach, you may also appreciate our{" "}
                  <Link
                    href="/compare/best-weight-loss-injections-uk"
                    className="font-medium text-brand-primary underline"
                  >
                    UK weight loss injections comparison hub
                  </Link>
                  , which offers insight into options, cost context and availability.
                </p>
                <SubHeading darkMode={darkMode}>Movement and consistency</SubHeading>
                <p>
                  Beyond that, staying active is a crucial piece in your success. Light aerobic exercises, strength
                  training and regular walks can all support healthy weight loss. Remember that consistency matters more
                  than intensity. Rather than overdoing it in a single workout session, aim for short, daily activity that
                  fits your lifestyle so you can sustain your progress long term.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="practical" heading="Take practical steps for success">
                <p>
                  When you combine mindful eating, consistent exercise, medical support and an awareness of Wegovy&apos;s
                  potential side effects, you are setting yourself up for success. Whether you are new to weight loss
                  injections or have been exploring different paths for a while, small adjustments can add up to major
                  improvements in how you feel daily. For instance, if you find that early mornings are when you have the
                  most energy, schedule a quick workout or walk during that time. If you are prone to late night snacking,
                  plan a satisfying snack that does not derail your goals. Over time, you will discover strategies and
                  routines that align with your body&apos;s shifts on Wegovy.
                </p>
                <p>
                  Knowing how to respond to mild symptoms helps you stay in control. When your stomach feels unsettled,
                  you have a plan for soothing it. If fatigue creeps in, you are already prepared with restful breaks and
                  better food choices. That kind of flexibility allows your life to stay joyful even as your body adjusts
                  to a new medication.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="Frequently Asked Questions">
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      1. What are the most common Wegovy side effects when you start?
                    </h3>
                    <p>
                      Nausea, diarrhoea, constipation and other digestive symptoms are frequently reported, especially
                      after dose increases. Headache, fatigue and dizziness also occur for some people. Tell your prescriber
                      if symptoms are severe or do not improve.
                     For more context, explore our resources on <Link href="/wegovy-price-comparison" className="font-medium text-emerald-600 hover:underline">Wegovy price comparison</Link>.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      2. How can you reduce nausea on Wegovy?
                    </h3>
                    <p>
                      Try smaller meals, slower eating, hydration, and avoiding very large or high fat meals. Ginger or
                      peppermint tea helps some people. Do not change your prescribed dose without medical advice.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      3. Can your clinician adjust your dose if side effects are difficult?
                    </h3>
                    <p>
                      Yes   dose changes should only be directed by a qualified prescriber. Contact your healthcare team
                      rather than adjusting the pen yourself.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      4. When should you seek urgent medical advice?
                    </h3>
                    <p>
                      Seek urgent care for severe or persistent abdominal pain, continuous vomiting, allergic reactions, or
                      any symptom that frightens you. Always read your patient information leaflet for warning signs.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      5. Does tiredness from Wegovy usually improve?
                    </h3>
                    <p>
                      Many people feel more settled over time. Prioritise sleep, hydration and balanced meals; if fatigue
                      is extreme or prolonged, ask your doctor to review other possible causes.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      6. Can Wegovy affect mood or mental wellbeing?
                    </h3>
                    <p>
                      Physical changes can coincide with mood shifts. If you notice persistent low mood, anxiety, or thoughts
                      of self harm, seek help immediately and inform your prescriber.
                    </p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  Learning how to tackle the side effects of Wegovy and how to manage them is an essential part of
                  succeeding in your weight management. By being proactive, listening to your body and collaborating with
                  healthcare professionals, you can keep side effects to a manageable level. Make sure you track what
                  works best for you and celebrate the improvements along the way. With each small victory, you are gaining
                  insight and motivation for the long run. After all, the aim is not just to lose weight but to do it in a
                  way that feels balanced, sustainable and beneficial for your overall wellbeing.
                </p>
                <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Health Wise does not sell medicines; this article is for general information and does not replace advice
                  from your prescriber or pharmacist.
                </p>
                <p
                  className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}
                >
                  <span className="font-semibold text-slate-600 dark:text-slate-300">Suggested hashtags:</span>{" "}
                  {SOCIAL_HASHTAGS}
                 For more context, explore our resources on <Link href="/blog/best-weight-loss-treatment-in-london" className="font-medium text-emerald-600 hover:underline">treatment in London</Link>.</p>
              </GuideSection>
            </article>

            <div className="mt-10">
              <GuideSharePanel
                url={shareUrl}
                title="Effective Tips for Handling Side Effects of Wegovy Yourself"
                description="Practical UK-focused tips for Wegovy side effects—digestion, energy, mood—and when to get medical help."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
