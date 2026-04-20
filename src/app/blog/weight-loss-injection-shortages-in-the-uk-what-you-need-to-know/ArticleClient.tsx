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
  SHORTAGES_HERO_WEBP,
  SHORTAGES_INLINE_DEMAND_WEBP,
} from "./blog-assets";

const SHARE_PATH = "/blog/weight-loss-injection-shortages-in-the-uk-what-you-need-to-know";
const HERO_SRC = blogWebpPath(SHORTAGES_HERO_WEBP);
const INLINE_DEMAND = blogWebpPath(SHORTAGES_INLINE_DEMAND_WEBP);

const TOC = [
  { id: "overview", label: "Introduction" },
  { id: "recognise", label: "Recognise the current shortage" },
  { id: "demand", label: "Why injections are in demand" },
  { id: "factors", label: "Factors behind the shortages" },
  { id: "affect", label: "How the shortage might affect you" },
  { id: "alternatives", label: "Exploring potential alternatives" },
  { id: "steps", label: "Steps to manage supply constraints" },
  { id: "momentum", label: "Keep momentum going" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "conclusion", label: "Conclusion" },
];

const SOCIAL_HASHTAGS =
  "#GLP1 #WeightLossUK #UKPharmacy #MedicineShortage #Wegovy #Mounjaro";

function SubHeading({
  children,
  darkMode,
}: {
  children: React.ReactNode;
  darkMode: boolean;
}) {
  return (
    <p className={`mt-6 font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{children} For more context, explore our resources on <Link href="/helpful-guides/mounjaro-weight-loss-injection-uk" className="font-medium text-emerald-600 hover:underline">Mounjaro weight loss injection UK</Link>.</p>
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
            What You Should Know About Weight Loss Injection Shortages in the UK
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              23 Apr 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              12 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_SRC}
            alt="UK pharmacy counter and medicines supply — finding GLP-1 weight loss injections when stock is limited"
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
              <GuideSection darkMode={darkMode} id="overview" heading="Weight loss injection shortages in the UK">
                <p className="text-lg md:text-xl">
                  <span className="font-medium">Weight loss injection shortages in the UK: what you need to know.</span> If
                  you have been looking into weight loss injections as part of your health journey, you might already sense
                  the growing demand and the challenges of finding a steady supply. These treatments, often used alongside
                  diet and exercise, have gained considerable popularity for helping people control their appetite and
                  manage portion sizes. However, a rising shortage is making it trickier to access certain injections,
                  leaving many of you concerned about what comes next.
                </p>
                <p>
                  Since your wellbeing is the top priority, it is important to stay informed. Below, you will discover
                  what is causing these shortages, how they might impact you, and some steps you can take to navigate the
                  changing landscape of weight loss treatments.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="recognise" heading="Recognise the current shortage">
                <p>
                  Step into any pharmacy or online provider and you will likely notice that supplies of popular weight
                  loss injections are lower than usual. This shortage means you might have to visit multiple outlets to find
                  your prescription, or experience delays if you are on a waiting list. Although it can feel frustrating,
                  it is not a permanent situation and many healthcare providers are exploring solutions.
                </p>
                <p>
                  Pharmaceutical manufacturers occasionally face production gaps, such as difficulty sourcing the raw
                  materials needed to meet soaring demand. Distribution issues can also contribute. You may find that one
                  brand or dosage is easily available while others are impossible to locate. As a result, you might need to
                  explore alternatives or temporary measures while supply chains stabilise.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="demand" heading="Why weight loss injections are in demand">
                <p>
                  Over the past few years, people across the UK have become increasingly aware of the role injections can
                  play in balancing appetite, especially if you have struggled with other weight management approaches. In
                  fact, these injections first gained major attention when doctors prescribed them to patients dealing with
                  obesity related health risks. Over time, more and more individuals have turned to them for a helpful
                  nudge toward healthier daily routines.
                </p>
                <p>
                  It is no wonder then that the demand has soared. If you are curious about how weight loss injections rose
                  to prominence, you might enjoy our{" "}
                  <Link
                    href="/compare/best-weight-loss-injections-uk"
                    className="font-medium text-brand-primary underline"
                  >
                    UK weight loss injections comparison hub
                  </Link>
                  . It delves into where this trend sits in context and offers a broader picture of why surging popularity
                  can affect today&apos;s supply.
                </p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_DEMAND}
                  alt="High demand for GLP-1 weight loss medicines in the UK — why popularity strains pharmacy stock"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection darkMode={darkMode} id="factors" heading="Factors behind the shortages">
                <p>
                  A variety of factors have converged to create the shortages. For one, many companies may have
                  underestimated just how popular these medications would become once more people understood their potential
                  benefits. Sudden increases in demand can easily lead to a backlog if manufacturing pipelines were not
                  prepared for the rush.
                </p>
                <p>
                  On top of that, you have the usual logistical obstacles. Global events that disrupt shipping routes,
                  shortages of critical ingredients, and distribution hiccups can all slow down production. When you combine
                  growing public interest with these supply constraints, it creates the perfect storm for product shortfalls.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="affect" heading="How the shortage might affect you">
                <p>
                  When you rely on a weight loss injection to support your health, any supply issue can cause stress and
                  uncertainty. You may worry about missing doses or discontinuing your progress altogether. If a medication
                  you have been prescribed is momentarily unavailable, your GP or pharmacist might suggest switching to a
                  comparable alternative for a short time. However, it can take a little while to adjust to a new treatment
                  protocol.
                 For more context, explore our resources on <Link href="/blog/best-weight-loss-treatment-in-birmingham" className="font-medium text-emerald-600 hover:underline">clinics in Birmingham</Link>.</p>
                <p>
                  In addition, you might notice dosage adjustments if your preferred concentration is not on hand. Some
                  people also experience more frequent side effects when making changes, which is why you will want to keep
                  notes on any new symptoms. If you are interested in possible side effects when trying other medications,
                  see{" "}
                  <Link
                    href="/blog/side-effects-of-wegovy-and-how-to-manage-them"
                    className="font-medium text-brand-primary underline"
                  >
                    side effects of Wegovy and how to manage them
                  </Link>
                  . Staying informed helps you plan for a smoother transition should a switch be necessary.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="alternatives" heading="Exploring potential alternatives">
                <p>
                  Because supply issues can crop up unexpectedly, it pays to know what else is out there.{" "}
                  <span className="font-medium">Weight loss injection shortages in the UK: what you need to know</span> often
                  starts with knowing your options, so you do not feel stuck if your first choice is unavailable. Popular
                  injections like Mounjaro and Wegovy have garnered significant interest, but you might also come across
                  other treatments you have never considered.
                </p>
                <p>
                  Wondering how various options stack up against each other? If you are curious, you could look at{" "}
                  <Link
                    href="/blog/mounjaro-vs-wegovy-key-differences-explained"
                    className="font-medium text-brand-primary underline"
                  >
                    Mounjaro vs Wegovy: the key differences explained
                  </Link>
                  . It details how these injections work, their strengths, and why one might suit you better than another.
                  You may also benefit from learning how to properly handle certain devices, like in{" "}
                  <Link
                    href="/blog/understanding-the-mounjaro-kwikpen-a-user-guide"
                    className="font-medium text-brand-primary underline"
                  >
                    understanding the Mounjaro KwikPen: a user guide
                  </Link>
                  , to ensure you get the best out of your choice.
                </p>
                <SubHeading darkMode={darkMode}>Snapshot of some injection options</SubHeading>
                <div
                  className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}
                >
                  <GuideTable
                    headers={["Option", "What is it?", "Key consideration"]}
                    rows={[
                      {
                        cells: [
                          "Mounjaro",
                          "A newer injection gaining attention",
                          "May help with both weight loss and appetite",
                        ],
                      },
                      {
                        cells: [
                          "Wegovy",
                          "Established choice to manage long-term weight",
                          "Possible need for dose adjustments over time",
                        ],
                      },
                      {
                        cells: [
                          "Other GLP-1 meds",
                          "Similar injections that reduce hunger",
                          "Confirm availability with your GP or pharmacy",
                        ],
                      },
                    ]}
                  />
                </div>
                <p className="text-sm opacity-90">
                  While this table only touches on a few well known treatments, there are additional prescription
                  medications or methods besides injections, such as weight loss pills or medically supervised programmes.
                  If supply chains continue to stabilise, your original choice may become more accessible once again.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="steps" heading="Steps to manage supply constraints">
                <p>
                  First and foremost, keep in close contact with your GP or consultant. They will likely have up to date
                  information and can tip you off the moment your preferred medication becomes available. You can
                  also and should stay on top of pharmacy re stock updates. Pop in occasionally or make a quick phone call to
                  check if a particular dosage has arrived. For continuity tips when moving between suppliers, read our{" "}
                  <Link
                    href="/helpful-guides/switching-pharmacies-mounjaro-wegovy-uk"
                    className="font-medium text-brand-primary underline"
                  >
                    guide to switching pharmacies for Mounjaro or Wegovy in the UK
                  </Link>
                  .
                </p>
                <p>If supply issues persist, you might choose to:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Ask your GP whether lower or higher dosages are in stock.</li>
                  <li>Review possible diet or exercise tweaks to support ongoing progress.</li>
                  <li>
                    Explore nutritional counselling or group programmes that provide guidance on meal planning, mindful
                    eating, and community support.
                  </li>
                </ul>
                <p>
                  Engaging multiple strategies allows you to keep making strides toward your goals even if medications are
                  harder to come by.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="momentum" heading="Keep momentum going">
                <p>
                  A shortage does not have to signal the end of your weight loss efforts. You still hold plenty of power
                  over daily habits, and the key is to look for ways to adapt until supplies improve. If this period leaves
                  you feeling disillusioned, it can help to connect with others in a similar situation social media groups
                  or local health clubs can offer both practical advice and emotional support.
                </p>
                <p>
                  Take it one day at a time. Stock might improve quicker than you think and, in the meantime, you can
                  refine your broader wellness habits. Persistent issues with supply can be challenging, but they might also
                  open the door to new methods or tips that could serve you well in the long run.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="Frequently Asked Questions">
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      1. Why are weight loss injections sometimes out of stock in the UK?
                    </h3>
                    <p>
                      Global demand for GLP 1 medicines has risen faster than production and distribution can always
                      match. Manufacturing schedules, ingredient supply and batch release all affect what reaches pharmacy
                      shelves.
                     For more context, explore our resources on <Link href="/blog/mounjaro-weight-loss-benefits-backed-by-science" className="font-medium text-emerald-600 hover:underline">Mounjaro weight loss benefits</Link>.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      2. Can you try another pharmacy if your usual one has no stock?
                    </h3>
                    <p>
                      You may need to check several regulated pharmacies. Always follow your prescription and prescriber
                      guidance, and avoid unlicensed or informal sellers online.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      3. What should you do if you cannot get your next dose on time?
                    </h3>
                    <p>
                      Speak to your GP or pharmacist as soon as possible. Do not change brands or doses without medical
                      advice.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      4. Are all injections affected equally?
                    </h3>
                    <p>
                      No shortages can differ by product, strength and region. One option may be easier to obtain than
                      another at any given time.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      5. Can a clinician suggest an alternative if your usual medicine is unavailable?
                    </h3>
                    <p>
                      Sometimes, yes depending on your health profile and what is licensed and in stock. Only a qualified
                      prescriber should authorise a switch.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      6. How can you stay safe while chasing supply?
                    </h3>
                    <p>
                      Use GPhC registered pharmacies, verify sources, and be sceptical of “guaranteed stock” from unknown
                      websites. Counterfeit medicines are a real risk.
                    </p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  Staying informed about weight loss injection shortages in the UK is your first step. You will not be
                  caught off guard if you understand why certain brands are running low and what you can do until they
                  restock. By talking to your GP and actively seeking out resources, you can find short term alternatives
                  or strengthen the healthy routines you already have in place.
                </p>
                <p>
                  Remember, your wellbeing includes far more than just one approach. If your usual injection is scarce,
                  redefining your strategy may lead you to discover something else that works just as well or even better.
                  Ultimately, the best plan is one that aligns with your lifestyle, your goals, and what is realistically
                  accessible. You have got plenty of options at your fingertips, so keep exploring until you find what fits
                  you best.
                </p>
                <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Health Wise does not sell medicines; this article is general information and does not replace advice from
                  your prescriber or pharmacist.
                </p>
                <p
                  className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}
                >
                  <span className="font-semibold text-slate-600 dark:text-slate-300">Suggested hashtags:</span>{" "}
                  {SOCIAL_HASHTAGS}
                 For more context, explore our resources on <Link href="/blog/best-weight-loss-treatment-in-manchester" className="font-medium text-emerald-600 hover:underline">treatment in Manchester</Link>.</p>
              </GuideSection>
            </article>

            <div className="mt-10">
              <GuideSharePanel
                url={shareUrl}
                title="What You Should Know About Weight Loss Injection Shortages in the UK"
                description="GLP-1 weight loss injection shortages in the UK: causes, what to expect, and practical steps with your clinician."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
