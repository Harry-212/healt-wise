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
  KWIKPEN_HERO_WEBP,
  KWIKPEN_INLINE_HEALTHY_WEBP,
  KWIKPEN_INLINE_HUMAN_WEBP,
} from "./blog-assets";

const SHARE_PATH = "/blog/understanding-the-mounjaro-kwikpen-a-user-guide";
const HERO_SRC = blogWebpPath(KWIKPEN_HERO_WEBP);
const INLINE_HEALTHY = blogWebpPath(KWIKPEN_INLINE_HEALTHY_WEBP);
const INLINE_HUMAN = blogWebpPath(KWIKPEN_INLINE_HUMAN_WEBP);

const TOC = [
  { id: "overview", label: "Get to know Mounjaro KwikPen" },
  { id: "support", label: "How it supports weight loss" },
  { id: "safe-use", label: "Use it correctly and safely" },
  { id: "compare", label: "Compare with other injections" },
  { id: "decision", label: "Make your purchase decision easier" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "conclusion", label: "Conclusion" },
];

const SOCIAL_HASHTAGS =
  "#MounjaroKwikPen #TirzepatideUK #GLP1 #WeightLossInjection #UKHealth #InjectableWeightLoss";

function SubHeading({
  children,
  darkMode,
}: {
  children: React.ReactNode;
  darkMode: boolean;
}) {
  return (
    <p className={`mt-6 font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{children}</p>
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
            Feel Confident with Understanding the Mounjaro Kwikpen: A User Guide
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              21 Apr 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              10 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_SRC}
            alt="Woman focusing on wellbeing — building confidence before using the Mounjaro KwikPen for UK weight management"
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
              <GuideSection darkMode={darkMode} id="overview" heading="Get to know Mounjaro KwikPen">
                <p className="text-lg md:text-xl">
                  When you hear about weight loss injection options in the UK, you might immediately think of products like
                  Wegovy or Saxenda. However, Mounjaro KwikPen is another contender that has recently drawn attention among
                  people looking to manage their weight more effectively. If you are interested in understanding the
                  Mounjaro KwikPen, a user guide can help you build confidence before deciding whether this medication is
                  right for you.
                </p>
                <p>
                  Unlike some other treatments that require complicated mixing or manual dosing, Mounjaro comes in a
                  prefilled injector pen, designed to simplify your experience. Its ease of use appeals to those who find
                  regular needles intimidating or who have hectic schedules that do not accommodate lengthy prep time. By
                  offering a straightforward way to self-administer a precise dose, Mounjaro aims to make your weight loss
                  journey less stressful.
                </p>
                <p>
                  You will want to remember that any kind of injectable treatment should be discussed with a qualified
                  healthcare professional. While the KwikPen design is intended to be user-friendly, everyone&apos;s
                  medical needs differ. Getting expert advice on dosage, frequency and potential interactions can make a
                  tremendous difference in the success of your overall programme.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="support" heading="Understand how it supports weight loss">
                <p>
                  Like other weight loss injections in the UK, Mounjaro is designed to assist people who are struggling
                  with obesity or weight-related health concerns. The active ingredients in this medication help regulate
                  certain hormonal processes in your body, with the goal of moderating appetite. In some cases, you may
                  feel satisfied after smaller meals, so you are less likely to overeat or snack between them.
                </p>
                <p>
                  In addition to potentially reduced hunger, you might also experience better blood sugar control. People
                  who have issues maintaining stable glucose levels could see an improvement in their metabolic markers.
                  Regardless of whether you have pre-existing conditions or not, it is always important to note that
                  results will vary. Genetics, lifestyle and individual response can all play a part in how effectively
                  Mounjaro works for you.
                </p>
                <p>
                  If you are curious about new trends in injectable treatments, you might find it helpful to check out our{" "}
                  <Link
                    href="/compare/best-weight-loss-injections-uk"
                    className="font-medium text-brand-primary underline"
                  >
                    UK weight loss injections comparison hub
                  </Link>
                  . This can give you more context around the popularity of injections like Mounjaro, as well as options
                  that aim to support long-term weight management.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="safe-use" heading="Use it correctly and safely">
                <p>
                  One of the most common concerns about injection-based treatments is whether you will be able to
                  administer them correctly. Fortunately, Mounjaro KwikPen includes features that make preparation as simple
                  as possible, and you will soon feel more at ease with the process. Here are a few basic points you will
                  want to keep in mind:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Consult a healthcare professional about your specific dosing schedule.</li>
                  <li>Store the pen in a refrigerator if recommended, but never freeze it.</li>
                  <li>Inspect the medication visually before use and do not inject if it looks discoloured.</li>
                  <li>Rotate your injection sites (such as your abdomen, thigh, or upper arm).</li>
                  <li>
                    Dispose of used pens according to local medical waste guidelines — see also our{" "}
                    <Link
                      href="/helpful-guides/kwikpen-disposal-recycling-uk"
                      className="font-medium text-brand-primary underline"
                    >
                      KwikPen disposal and recycling (UK)
                    </Link>{" "}
                    guide.
                  </li>
                </ul>
                <p>
                  Following these precautions helps you stay safe and get the most out of your Mounjaro KwikPen. If you
                  notice any unusual side effects, be sure to bring them up with your doctor. You can also read about
                  possible adverse reactions that come with similar medications by checking out{" "}
                  <Link
                    href="/blog/easy-to-follow-wegovy-injection-instructions-you-can-trust"
                    className="font-medium text-brand-primary underline"
                  >
                    Wegovy injection instructions and side effects
                  </Link>
                  . Even though these two injections differ, some side effects can overlap.
                </p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_HEALTHY}
                  alt="Healthy balanced meal with vegetables — pairing Mounjaro KwikPen treatment with nutrition and lifestyle habits"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection darkMode={darkMode} id="compare" heading="Compare Mounjaro with other injections">
                <p>
                  You may wonder if Mounjaro stands out from other treatments on the market. To begin with, it is believed
                  to work in a unique way compared to Wegovy, although both are used to tackle weight management issues. If
                  you would like more details, you can explore{" "}
                  <Link
                    href="/blog/mounjaro-vs-wegovy-key-differences-explained"
                    className="font-medium text-brand-primary underline"
                  >
                    Mounjaro vs Wegovy: the key differences explained
                  </Link>{" "}
                  to see how they might align with your personal health goals.
                </p>
                <p>
                  Beyond active ingredients, you could also look at potential supply issues. As interest in medical weight
                  loss grows, availability of popular brands has sometimes been limited. You will find practical help in{" "}
                  <Link
                    href="/helpful-guides/switching-pharmacies-mounjaro-wegovy-uk"
                    className="font-medium text-brand-primary underline"
                  >
                    switching pharmacies for Mounjaro or Wegovy in the UK
                  </Link>
                  . Checking current inventory before you start any injection will help you plan ahead, avoiding unexpected
                  gaps in your treatment.
                </p>
                <SubHeading darkMode={darkMode}>Cost and convenience</SubHeading>
                <p>
                  Cost may be another deciding factor. Different brands come with varying prices, and the KwikPen&apos;s
                  built-in usability might be reflected in its price tag. Always compare not just the upfront cost, but
                  also any hidden fees such as consultation or delivery charges.
                </p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_HUMAN}
                  alt="Person reflecting on health goals — informed choices for Mounjaro KwikPen and UK weight loss support"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection darkMode={darkMode} id="decision" heading="Make your purchase decision easier">
                <p>
                  Taking the step toward injection-based weight management is never trivial, so it is crucial you feel
                  confident about your choice. By learning how Mounjaro KwikPen works, understanding its benefits, and
                  comparing it with other injections, you give yourself the chance to make a fully informed decision.
                </p>
                <p>
                  Keep in mind that Mounjaro is designed to aid your weight loss, not completely replace a healthy
                  lifestyle. You will want to combine its benefits with balanced meals, regular physical activity, and any
                  advice your doctor has provided. Everyone&apos;s journey is unique, and injections can offer extra
                  support when you need it most.
                </p>
                <p>
                  If you are ready to get started, your next step may involve consulting a medical professional or a
                  specialised weight loss clinic. Talk through your health history, any existing medications, and your
                  overall goals. By carefully pairing Mounjaro KwikPen with a comprehensive plan, you set yourself up for a
                  more confident start on your weight loss journey.
                </p>
                <p>
                  Above all, remember that weight management is a gradual process. It is natural to have a few questions,
                  and seeking answers helps you feel empowered. By exploring options like Mounjaro, alongside other
                  trusted treatments, you can take practical steps toward a healthier, more comfortable life.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="Frequently Asked Questions">
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      1. What is the Mounjaro KwikPen?
                    </h3>
                    <p>
                      It is a prefilled pen used to deliver tirzepatide under the skin, so you do not have to mix medicine
                      yourself. Always follow your prescriber&apos;s instructions and the official patient information for
                      your region.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      2. How often do you inject Mounjaro?
                    </h3>
                    <p>
                      Mounjaro is typically given once per week on a consistent day. Dose changes should only happen when
                      your clinician tells you to—do not adjust the strength or timing on your own.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      3. How should you store the KwikPen?
                    </h3>
                    <p>
                      Follow the storage instructions on your pack. If refrigeration is advised, keep the pen in the
                      fridge as directed and never freeze it. When in doubt, ask your pharmacist.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      4. Can you reuse or refill a KwikPen?
                    </h3>
                    <p>
                      No. KwikPens are single-patient devices designed for a set number of doses. Reusing or refilling a
                      pen is unsafe and can lead to wrong doses or contamination.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      5. Where should you inject?
                    </h3>
                    <p>
                      Common sites include the abdomen, thigh, or upper arm, with rotation to reduce soreness. A trained
                      professional should show you the technique the first time.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      6. Do you still need diet and exercise on Mounjaro?
                    </h3>
                    <p>
                      Yes. Medication works best as part of a broader plan that includes nutrition, activity, sleep, and
                      follow-up with your care team. It is not a substitute for healthy habits.
                    </p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  Understanding the Mounjaro KwikPen: a user guide is really about pairing clear expectations with
                  professional support. The pen is built to simplify injections, but your dosing, storage, and monitoring
                  still belong in conversation with a qualified prescriber. Compare options, plan for supply and cost,
                  and keep lifestyle change at the centre of your programme.
                </p>
                <p>
                  Health Wise does not sell medicines; use our guides to compare regulated UK pathways and ask your clinician
                  what is appropriate for you.
                </p>
                <p
                  className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}
                >
                  <span className="font-semibold text-slate-600 dark:text-slate-300">Suggested hashtags:</span>{" "}
                  {SOCIAL_HASHTAGS}
                </p>
              </GuideSection>
            </article>

            <div className="mt-10">
              <GuideSharePanel
                url={shareUrl}
                title="Feel Confident with Understanding the Mounjaro Kwikpen: A User Guide"
                description="Mounjaro KwikPen UK: how it works, safe use, comparisons, and planning your weight-management journey."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
