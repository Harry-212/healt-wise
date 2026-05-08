"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";

const SHARE_PATH = "/blog/discover-the-powerful-benefits-of-prescription-slimming-injections-uk";
const HERO_SRC =
  "/blog/Discover%20the%20Powerful%20Benefits%20of%20Prescription%20Slimming%20Injections%20UK.webp";

const TOC = [
  { id: "understanding", label: "Understanding prescription slimming injections" },
  { id: "how-they-work", label: "How they work in your body" },
  { id: "options", label: "What are your options in the UK?" },
  { id: "eligibility", label: "Are you eligible?" },
  { id: "benefits-drawbacks", label: "Potential benefits and drawbacks" },
  { id: "provider", label: "Choosing a reputable provider" },
  { id: "costs", label: "NHS vs private costs" },
  { id: "additional-faq", label: "Additional FAQs" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "conclusion", label: "Final thoughts" },
];

const SOCIAL_HASHTAGS =
  "#SlimmingInjectionsUK #PrescriptionWeightLoss #Mounjaro #Wegovy #Saxenda #UKHealth";

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

        <header className="mb-12">
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            Discover the Powerful Benefits of Prescription Slimming Treatments UK
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              22 May 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              14 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_SRC}
            alt="Prescription slimming injections in the UK — Wegovy, Mounjaro and Saxenda under clinical oversight"
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
              <GuideSection darkMode={darkMode} id="understanding" heading="Understanding prescription slimming injections">
                <p className="text-lg md:text-xl">
                  If you have been wrestling with weight for years, not weeks, prescription slimming injections may sound less
                  like a trend and more like something worth looking into.
                </p>
                <p>For some people, they may be.</p>
                <p>
                  These medicines are designed to support weight management by influencing appetite, satiety, and in some cases
                  blood sugar regulation. Put simply, they may help you feel full sooner and think about food less often.
                </p>
                <p>That can matter more than it sounds.</p>
                <p>
                  People often focus on kilograms lost. But sometimes the first noticeable change is quieter. Fewer cravings
                  in the evening. Smaller portions without effort. Less constant negotiation with hunger.
                </p>
                <p>That may be where the real shift starts.</p>
                <p>
                  In the UK, prescription slimming injections generally refer to regulated medicines such as Wegovy,
                  Mounjaro, and Saxenda. These are not over the counter products. They require prescribing oversight.
                </p>
                <p>And that distinction matters.</p>
                <p>A licensed medicine is not the same as a supplement marketed online.</p>
                <p>It has evidence behind it, eligibility criteria, and monitoring requirements.</p>
                <p>Still, these injections are not a shortcut.</p>
                <p>They may support progress.</p>
                <p>They do not replace the fundamentals.</p>
                <p>Nutrition still matters.</p>
                <p>Movement still matters.</p>
                <p>Sleep, stress, habits, those still matter too.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="how-they-work" heading="How they work in your body">
                <p>Most prescription slimming injections act through hormone pathways linked to appetite.</p>
                <p>Wegovy and Saxenda work through GLP-1 receptor activity.</p>
                <p>Mounjaro acts on GLP-1 and GIP pathways.</p>
                <p>
                  That extra mechanism may partly explain why some researchers think tirzepatide could produce stronger weight
                  loss effects for some people.
                </p>
                <p>Possibly.</p>
                <p>Though outcomes vary.</p>
                <p>A lot.</p>
                <p>One person may lose significant weight.</p>
                <p>Another may see slower progress but improved appetite control.</p>
                <p>That still counts.</p>
                <p>
                  These medicines also tend to slow gastric emptying, which may help people stay full longer after eating.
                </p>
                <p>That is often why cravings change.</p>
                <p>Not because willpower suddenly improves.</p>
                <p>Because physiology may be shifting.</p>
                <p>That is different.</p>
                <p>
                  Some evidence suggests people may lose anywhere from modest amounts to more significant percentages of body
                  weight when injections are combined with sustained lifestyle change.
                </p>
                <p>Combined is doing a lot of work in that sentence.</p>
                <p>It matters.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="options" heading="What are your options in the UK?">
                <p>Three names dominate most conversations.</p>

                <SubHeading darkMode={darkMode}>Saxenda</SubHeading>
                <p>Saxenda is taken daily.</p>
                <p>Some people dislike daily injections.</p>
                <p>Others prefer the routine.</p>
                <p>It depends.</p>
                <p>Weight loss outcomes may be moderate, though for some patients it can still be clinically meaningful.</p>

                <SubHeading darkMode={darkMode}>Wegovy</SubHeading>
                <p>Wegovy is taken weekly and has become one of the most recognised options.</p>
                <p>Some data suggest average weight loss around 10 to 15 percent in some settings.</p>
                <p>Though averages are not promises.</p>
                <p>Worth remembering.</p>

                <SubHeading darkMode={darkMode}>Mounjaro</SubHeading>
                <p>Mounjaro has generated attention because of its dual action mechanism.</p>
                <p>Some clinicians see it as potentially the strongest injectable option available right now.</p>
                <p>Others would say long term comparisons are still developing.</p>
                <p>Both views have merit.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="eligibility" heading="Are you eligible?">
                <p>Not everyone can simply request these medicines and receive them.</p>
                <p>Usually eligibility involves some mix of:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>BMI thresholds</li>
                  <li>Weight related health conditions</li>
                  <li>Previous attempts at supervised weight loss</li>
                  <li>Clinical review</li>
                  <li>Sometimes NHS pathway requirements</li>
                </ul>
                <p>Private clinics may screen differently, but responsible prescribing should still involve assessment.</p>
                <p>If it does not, that may be a warning sign.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="benefits-drawbacks" heading="Potential benefits and drawbacks">
                <p>There are real potential upsides.</p>
                <p>These may include:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Reduced appetite</li>
                  <li>Improved portion control</li>
                  <li>Weight loss</li>
                  <li>Better blood sugar markers</li>
                  <li>Possible reductions in obesity related risk</li>
                </ul>
                <p>Some people also describe reduced food obsession.</p>
                <p>That is harder to quantify.</p>
                <p>Still important.</p>
                <p>On the downside, side effects are not rare.</p>
                <p>Nausea.</p>
                <p>Constipation.</p>
                <p>Diarrhoea.</p>
                <p>Vomiting.</p>
                <p>Sometimes fatigue.</p>
                <p>Often temporary.</p>
                <p>Sometimes enough to stop treatment.</p>
                <p>That possibility deserves honest discussion.</p>
                <p>Rare complications like pancreatitis may also need to be considered.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="provider" heading="Choosing a reputable provider">
                <p>This part gets underestimated.</p>
                <p>Please do not treat social media sellers as healthcare.</p>
                <p>Seriously.</p>
                <p>Use regulated prescribers.</p>
                <p>Use licensed pharmacies.</p>
                <p>Use providers willing to monitor you.</p>
                <p>A cheap shortcut with an unverified pen is not a bargain.</p>
                <p>It may be a risk.</p>
                <p>
                  Read{" "}
                  <Link
                    href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards"
                    className="font-medium text-brand-primary underline"
                  >
                    how we verify UK pharmacies (GPhC)
                  </Link>{" "}
                  for safer sourcing habits.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="costs" heading="NHS vs private costs">
                <p>This is often where enthusiasm meets reality.</p>
                <p>NHS access may be far cheaper.</p>
                <p>But access can be restricted.</p>
                <p>Private prescriptions may offer speed, but costs can easily reach thousands annually.</p>
                <p>That raises a practical question.</p>
                <p>Can you sustain treatment if you respond well?</p>
                <p>That matters more than people think.</p>
                <p>Because stopping due to cost can still mean stopping.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="additional-faq" heading="Additional FAQs">
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      What is the best slimming injection in the UK?
                    </h3>
                    <p>
                      Right now, many clinicians would point to Mounjaro as one of the most effective prescription slimming
                      injections available, largely because some evidence suggests stronger average weight loss compared with
                      alternatives. But &ldquo;best&rdquo; may depend on effectiveness, tolerability, cost, and access.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      How did Kelly Clarkson really lose her weight?
                    </h3>
                    <p>
                      Kelly Clarkson has spoken publicly about dietary changes, walking, and physician guided medical support.
                      There has been speculation around weight loss medications, but her own explanation suggests multiple
                      factors were involved—which sounds realistic.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      What is the strongest weight loss prescription injection?
                    </h3>
                    <p>
                      Many would currently consider Mounjaro among the strongest prescription injections based on available
                      comparative outcomes. Though &ldquo;strongest&rdquo; should not be confused with &ldquo;best for
                      everyone.&rdquo;
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      What is the strongest weight loss prescription pill in the UK?
                    </h3>
                    <p>
                      Among prescription pills, options like Orlistat have long been used, though they work differently from
                      injections. Injectable therapies currently appear to outperform oral options in many comparisons.
                    </p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="Frequently Asked Questions">
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Are Prescription Slimming Injections Available Over The Counter?
                    </h3>
                    <p>No. These medicines require a prescription and clinical supervision.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      How Much Do They Cost?
                    </h3>
                    <p>
                      Private costs may range from around £150 to £300 monthly, though this varies. NHS access may be much
                      cheaper if you qualify.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Are There Serious Side Effects?
                    </h3>
                    <p>Serious complications appear uncommon, but they can occur. That is why monitoring matters.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Who Is Eligible On The NHS?
                    </h3>
                    <p>Eligibility often depends on BMI thresholds, health risks, and local service criteria.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Do You Still Need Diet And Exercise?
                    </h3>
                    <p>Yes. Absolutely. Medication may support progress, but it does not replace foundational habits.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      How Long Must You Take Them?
                    </h3>
                    <p>Possibly months. Sometimes longer. Progress and medical review often shape duration.</p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Final thoughts">
                <p>Prescription slimming injections may be genuinely useful.</p>
                <p>They may also be oversimplified online.</p>
                <p>Both things can be true.</p>
                <p>Used carefully, they may help support appetite regulation and meaningful weight loss.</p>
                <p>Used as a shortcut, they may disappoint.</p>
                <p>If I were weighing them up personally, I would probably ask:</p>
                <ul className="list-decimal space-y-2 pl-6">
                  <li>Can I tolerate the side effects?</li>
                  <li>Can I sustain the cost?</li>
                  <li>Can I use this to build habits, not outsource them?</li>
                </ul>
                <p>Those questions may matter more than asking which injection sounds strongest.</p>
                <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Health Wise does not sell medicines. This page is general information and is not medical advice.
                </p>
                <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  <span className="font-semibold text-slate-600 dark:text-slate-300">Suggested hashtags:</span>{" "}
                  {SOCIAL_HASHTAGS}
                </p>
              </GuideSection>
            </article>

            <div className="mt-10">
              <GuideSharePanel
                url={shareUrl}
                title="Discover the Powerful Benefits of Prescription Slimming Treatments UK"
                description="Prescription slimming injections in the UK: how Wegovy, Mounjaro and Saxenda work, eligibility, benefits, risks and costs."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
