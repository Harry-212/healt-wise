"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";
import { WEEKLY_INJECTIONS_HERO_URL } from "./blog-assets";

const SHARE_PATH = "/blog/weekly-weight-loss-injections-uk-what-they-may-actually-do";

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "options", label: "The main options people compare" },
  { id: "hunger", label: "How these treatments affect hunger" },
  { id: "access", label: "NHS or private access?" },
  { id: "side-effects", label: "Side effects and safety" },
  { id: "after", label: "What happens after weight loss?" },
  { id: "beyond", label: "Benefits beyond weight" },
  { id: "practical", label: "Practical things that may help" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "conclusion", label: "Conclusion" },
];

const SOCIAL_HASHTAGS =
  "#WeeklyWeightLossInjections #WeightLossUK #GLP1 #WegovyUK #MounjaroUK #UKPrescription";

function SubHeading({
  children,
  darkMode,
}: {
  children: React.ReactNode;
  darkMode: boolean;
}) {
  return (
    <p className={`mt-6 font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
      {children}
    </p>
  );
}

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);
  const shareUrl = `${siteOrigin()}${SHARE_PATH}`;

  return (
    <div
      className={`w-full font-sans transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-slate-300" : "bg-white text-slate-800"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/blog"
            className={`flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-75 ${
              darkMode ? "text-slate-300" : "text-slate-900"
            }`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                darkMode ? "bg-slate-800" : "bg-slate-100"
              }`}
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
              className={`relative flex h-6 w-12 items-center rounded-full p-1 shadow-inner transition-colors ${
                darkMode ? "bg-slate-700" : "bg-slate-200"
              }`}
              aria-label="Toggle dark mode"
            >
              <div
                className={`h-4 w-4 rounded-full shadow transition-all ${
                  darkMode ? "translate-x-6 bg-slate-900" : "translate-x-0 bg-white"
                }`}
              />
            </button>
            <Sun className={`h-4 w-4 ${darkMode ? "text-yellow-400" : "text-slate-400"}`} />
          </div>
        </div>

        <header className="mb-12">
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Weekly Weight Loss Treatments in the UK: What They May Actually Do
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              25 Apr 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              13 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={WEEKLY_INJECTIONS_HERO_URL}
            alt="Weekly weight loss treatments in the UK — prescription GLP-1 support alongside lifestyle change"
          />
          <div
            id="guide-article-hero-end"
            aria-hidden
            className="pointer-events-none h-0 w-full overflow-hidden"
          />
        </header>

        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          {TOC.length > 0 && <GuideTocSidebar key={TOC.map((t) => t.id).join("-")} toc={TOC} />}

          <div className="min-w-0 max-w-3xl flex-1">
            <article className={`space-y-8 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              <GuideSection darkMode={darkMode} id="overview" heading="Overview">
                <p className="text-lg md:text-xl">
                  Weekly weight loss treatments have moved from niche treatment to mainstream conversation rather quickly.
                  A few years ago, most people outside obesity medicine probably had not heard of them. Now they show up
                  everywhere, from GP discussions to WhatsApp groups to celebrity headlines.
                </p>
                <p>That rise in attention makes sense.</p>
                <p>
                  For people who have spent years cycling through diets, losing weight and regaining it, or struggling
                  with hunger that feels constant, medicines like Wegovy and Mounjaro may look less like trend products and
                  more like practical help.
                </p>
                <p>And for some, they may be.</p>
                <p>
                  These treatments appear to work mainly by influencing appetite signalling, slowing digestion, and
                  increasing satiety. Put simply, many users report feeling full sooner, thinking about food less often,
                  and finding it easier to maintain a calorie deficit.
                </p>
                <p>That could support meaningful weight loss.</p>
                <p>
                  But it probably helps to resist the “miracle fix” framing. Medication may assist the process. It does
                  not erase the complexity of weight management. Sleep still matters. Stress still matters. So do eating
                  patterns you may have built over decades.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="options" heading="The main options people compare">
                <p>Most conversations come back to two medicines.</p>

                <SubHeading darkMode={darkMode}>Wegovy</SubHeading>
                <p>
                  Wegovy contains semaglutide and is prescribed as a once-weekly injection. Evidence suggests it may
                  support average body weight reductions around 14 percent over extended treatment periods under structured
                  conditions.
                </p>
                <p>
                  “Structured conditions” matters. Clinical trials do not look much like ordinary life. Participants often
                  receive coaching, monitoring, and tighter adherence than someone balancing work, children, and takeaway
                  meals.
                </p>
                <p>
                  Still, Wegovy has fairly broad recognition, and for some patients that familiarity may count in its
                  favour. If you want a practical side-effect guide, see{" "}
                  <Link href="/blog/side-effects-of-wegovy-and-how-to-manage-them" className="font-medium text-brand-primary underline">
                    side effects of Wegovy and how to manage them
                  </Link>
                  .
                </p>

                <SubHeading darkMode={darkMode}>Mounjaro</SubHeading>
                <p>
                  Mounjaro has attracted attention partly because it acts on both GLP-1 and GIP pathways. Some researchers
                  think that dual mechanism may explain why certain studies report greater average weight loss, in some
                  cases around 20 percent.
                </p>
                <p>
                  Potentially—because averages can obscure variation. Some users may respond exceptionally well. Others may
                  not. That is true across obesity treatment.
                </p>
                <p>
                  Some clinicians increasingly see Mounjaro as the stronger option. Others caution that longer-term
                  comparative evidence is still evolving. Both positions seem reasonable.
                </p>
                <p>
                  For a head-to-head overview, read{" "}
                  <Link href="/blog/mounjaro-vs-wegovy-key-differences-explained" className="font-medium text-brand-primary underline">
                    Mounjaro vs Wegovy: the key differences explained
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="hunger" heading="How these treatments affect hunger">
                <p>A lot of the benefit appears to come down to appetite regulation.</p>
                <p>These medicines may:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Slow stomach emptying</li>
                  <li>Increase satiety</li>
                  <li>Support insulin regulation</li>
                  <li>Reduce hunger signalling</li>
                  <li>Potentially reduce cravings or “food noise”</li>
                </ul>
                <p>
                  That last point gets talked about more now. Many users describe it in emotional rather than medical
                  terms: “I stopped thinking about snacks all afternoon.”
                </p>
                <p>
                  Still, appetite suppression does not automatically change emotional eating, reward-driven habits, or
                  convenience eating. Someone may feel less hungry and still order a takeaway out of routine. That can
                  happen—which may be why behavioural support often seems to improve outcomes.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="access" heading="NHS or private access?">
                <p>This is usually where theory meets reality.</p>
                <p>NHS access exists, but it can be limited. Eligibility often depends on:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>BMI thresholds</li>
                  <li>Weight-related conditions</li>
                  <li>Referral into specialist services</li>
                  <li>Clinical risk level</li>
                  <li>Ongoing lifestyle support engagement</li>
                </ul>
                <p>
                  Many people who assume they qualify may find they do not. That can be frustrating. Private routes are
                  often faster, though much more expensive. Roughly £100 to £300 per pen is commonly cited, though pricing
                  varies.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="side-effects" heading="Side effects deserve more attention">
                <p>
                  This part is often downplayed. Nausea, diarrhoea, constipation, fatigue—these are not rare oddities. They
                  may be part of the adjustment process. Many people tolerate them. Some do not. That distinction matters.
                </p>
                <p>Commonly reported issues include:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Nausea</li>
                  <li>Digestive disruption</li>
                  <li>Headaches</li>
                  <li>Fatigue during dose escalation</li>
                  <li>Injection site irritation</li>
                </ul>
                <p>
                  More serious risks, while uncommon, may include pancreatitis or gallbladder complications. That is why
                  supervision matters—this is not really a self-experiment.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="after" heading="What happens after weight loss?">
                <p>Possibly the hardest question: what happens when treatment stops?</p>
                <p>
                  Evidence suggests weight regain may occur, and in some cases quickly. If the biological appetite pressure
                  returns, maintaining previous losses may become harder.
                </p>
                <p>
                  Some obesity specialists increasingly frame this less as short-term dieting and more as chronic condition
                  management. Not everyone likes that framing. Still, it may explain why long-term strategy matters as much
                  as the treatments themselves.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="beyond" heading="There may be benefits beyond weight">
                <p>
                  Emerging research suggests these medicines could have wider metabolic and cardiovascular effects. Some
                  studies have reported possible reductions in heart-related risks in certain populations. Others have
                  explored liver-health links.
                </p>
                <p>
                  Encouraging, yes. Conclusive for everyone? Probably not. Many findings are population-specific, so
                  generalising too broadly would be premature.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="practical" heading="Practical things that may help">
                <p>Sometimes the small habits around the injection matter just as much as the injection itself.</p>
                <p>A few things that may help:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Eat slower than usual</li>
                  <li>Keep protein intake consistent</li>
                  <li>Hydrate more than you think you need</li>
                  <li>Track symptoms, not just scale weight</li>
                  <li>Use coaching if available</li>
                </ul>
                <p>
                  Symptom tracking is often overlooked—then people struggle to explain why they suddenly feel worse at dose
                  changes. A simple notes app can be enough.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="Frequently Asked Questions">
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      1. Which weekly weight loss treatment is most effective in the UK?
                    </h3>
                    <p>
                      Current trial averages often show higher weight loss with Mounjaro (tirzepatide) than Wegovy
                      (semaglutide), but “most effective” depends on response, side effects, access, and what you can
                      realistically sustain.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      2. Can I lose 10kg in 2 months with Ozempic?
                    </h3>
                    <p>
                      Possibly, but it is ambitious for many people. Early loss depends on starting weight, dose, eating
                      habits and response. Also note Ozempic is primarily licensed for type 2 diabetes, while Wegovy is
                      licensed for weight management.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      3. What is the 3-3-3 rule for weight loss?
                    </h3>
                    <p>
                      It is not an official NHS guideline. One common version is 3 balanced meals, 30 minutes of daily
                      movement, and reducing 3 trigger foods. It can be a useful habit structure, but it is not a medical
                      rule.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      4. How did Kelly Clarkson really lose her weight?
                    </h3>
                    <p>
                      She has discussed dietary changes, walking, health factors and medical support under clinician
                      guidance. Celebrity transformations usually involve multiple factors rather than one single trick.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      5. Can I get these treatments on the NHS?
                    </h3>
                    <p>
                      Possibly, but criteria are strict and vary by region. It often involves BMI thresholds, weight-related
                      risks, and specialist pathway referral.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      6. What happens if I stop weekly treatments?
                    </h3>
                    <p>
                      Appetite may return and weight regain can happen, especially if habits and support are not maintained.
                      Plan any stop or switch with your prescriber.
                    </p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  Weekly weight loss treatments may genuinely help some people—especially when persistent hunger and appetite
                  signals make calorie control feel unmanageable. But they are not a miracle fix. They support the process;
                  they do not replace it.
                </p>
                <p>
                  The strongest results usually come when medication sits inside a broader plan: realistic nutrition,
                  manageable movement, better sleep, and regular clinical follow-up.
                </p>
                <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Health Wise does not sell medicines. This article is general information and is not medical advice.
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
                title="Weekly Weight Loss Treatments in the UK: What They May Actually Do"
                description="A realistic UK guide to weekly treatments (Wegovy, Mounjaro): appetite effects, access, side effects, and long-term expectations."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

