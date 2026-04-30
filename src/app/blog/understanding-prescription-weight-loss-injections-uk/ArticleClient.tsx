"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";
import { blogWebpPath, UK_RX_INJECTIONS_HERO_WEBP } from "./blog-assets";

const SHARE_PATH = "/blog/understanding-prescription-weight-loss-injections-uk";
const HERO_SRC = blogWebpPath(UK_RX_INJECTIONS_HERO_WEBP);

const TOC = [
  { id: "overview", label: "Introduction" },
  { id: "why", label: "Why some people consider treatments" },
  { id: "mechanism", label: "How GLP-1 treatments work" },
  { id: "options", label: "Main prescription options" },
  { id: "access", label: "NHS vs private access" },
  { id: "side-effects", label: "Side effects and risks" },
  { id: "genetics", label: "Genetics and results" },
  { id: "long-term", label: "Long-term weight maintenance" },
  { id: "also-ask", label: "Questions people also ask" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "conclusion", label: "Conclusion" },
];

const SOCIAL_HASHTAGS =
  "#UKPrescription #GLP1 #WeightLossUK #Wegovy #Mounjaro #ObesityCare";

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
            Understanding Prescription Weight Loss Treatments in the UK: What They May Actually Offer
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              25 Apr 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              14 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_SRC}
            alt="UK prescription weight loss treatment — GLP-1 class medicine used with diet, activity, and clinical follow-up"
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
              <GuideSection darkMode={darkMode} id="overview" heading="Introduction">
                <p className="text-lg md:text-xl">
                  If you have been looking into ways to manage weight, you have probably seen increasing attention
                  around{" "}
                  <span className="font-medium">uk prescription weight loss treatments</span>. They are often framed as
                  breakthrough solutions. That may be overstating it.
                </p>
                <p>
                  A more accurate view? They appear to be tools, sometimes useful ones, within a much bigger treatment
                  picture.
                </p>
                <p>
                  Most injectable weight loss medications available in the UK belong to a class known as GLP-1 receptor
                  agonists, or related incretin-based therapies. These medicines are designed to influence appetite
                  signalling, slow gastric emptying, and in some cases improve blood sugar regulation. Put simply, many
                  people feel full sooner and stay full longer.
                </p>
                <p>That can support lower calorie intake.</p>
                <p>
                  But this often gets lost in the hype—these medicines generally do not replace the boring fundamentals.
                  Nutrition still matters. Movement still matters. Sleep probably matters more than many people realise.
                </p>
                <p>And results? They vary.</p>
                <p>Some people may respond very well. Others appear to lose less than headlines suggest.</p>
                <p>
                  Sources such as NHS guidance, MHRA communications, and pharmacy information indicate these medicines
                  are intended as part of broader obesity management, not standalone fixes. For a wider view of options, see
                  our{" "}
                  <Link
                    href="/compare/best-weight-loss-injections-uk"
                    className="font-medium text-brand-primary underline"
                  >
                    UK weight loss treatments comparison hub
                  </Link>
                  , and for supply reality checks,{" "}
                  <Link
                    href="/blog/weight-loss-injection-shortages-in-the-uk-what-you-need-to-know"
                    className="font-medium text-brand-primary underline"
                  >
                    weight loss treatment shortages in the UK: what you need to know
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="why"
                heading="Why some people consider treatments"
              >
                <p>
                  For many adults, weight loss has not been a simple &ldquo;eat less, move more&rdquo; equation.
                </p>
                <p>
                  Someone may have tried calorie tracking for years. Another person might have lost weight repeatedly only
                  to regain it. Hormonal factors, insulin resistance, medications, stress, even genetics can complicate
                  things.
                </p>
                <p>That is often where injectable treatments enter the discussion.</p>
                <p>They may help reduce:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Persistent hunger</li>
                  <li>Food noise or intrusive cravings</li>
                  <li>Portion sizes</li>
                  <li>Late night snacking patterns</li>
                  <li>Compulsive eating tendencies</li>
                </ul>
                <p>
                  A weekly injection can also feel easier for some people than trying to restart another restrictive diet
                  every Monday.
                </p>
                <p>Still, it would be risky to assume they work effortlessly.</p>
                <p>
                  Weight loss medications seem most effective when they support behavioural change already underway, not
                  when they are expected to carry the whole burden.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="mechanism" heading="How GLP-1 and related treatments work">
                <p>These medicines act on pathways involved in satiety and metabolism.</p>
                <p>Broadly, they may:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Slow stomach emptying</li>
                  <li>Increase feelings of fullness</li>
                  <li>Reduce glucagon output</li>
                  <li>Support insulin response after meals</li>
                  <li>Suppress appetite signals in the brain</li>
                </ul>
                <p>That combination could lower calorie intake over time.</p>
                <p>
                  The mechanism is interesting, though real-world use is messier than the biology diagrams suggest. Someone
                  may experience reduced hunger but still eat emotionally. Someone else may tolerate treatment poorly
                  because of nausea. Both can happen.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="options" heading="Main prescription options in the UK">
                <p>Right now, two names tend to dominate discussion.</p>
                <SubHeading darkMode={darkMode}>Wegovy (semaglutide)</SubHeading>
                <p>
                  Wegovy contains semaglutide and is typically taken once weekly. Evidence suggests some users may lose
                  around 15 to 20 percent of body weight under structured conditions, though actual outcomes often differ
                  outside clinical trials.
                </p>
                <p>That &ldquo;under structured conditions&rdquo; part matters.</p>
                <p>
                  Trials involve coaching, compliance monitoring, and selection criteria that ordinary life does not. A
                  parent juggling shift work and childcare may not reproduce trial conditions. That is worth acknowledging.
                </p>
                <p>Private pricing often starts around £130+, though dose escalation can raise costs considerably.</p>
                <SubHeading darkMode={darkMode}>Mounjaro (tirzepatide)</SubHeading>
                <p>
                  Mounjaro works somewhat differently because it targets both GLP-1 and GIP pathways. That dual action may
                  partly explain why some studies report average weight reductions above 20 percent in certain groups.
                </p>
                <p>Some clinicians view it as potentially more potent. Others argue longer term outcomes are still being clarified. Both perspectives probably have merit.</p>
                <p>Starting private costs often begin near £149, but maintenance dosing can climb much higher.</p>
                <p>
                  For a direct comparison, read{" "}
                  <Link
                    href="/blog/mounjaro-vs-wegovy-key-differences-explained"
                    className="font-medium text-brand-primary underline"
                  >
                    Mounjaro vs Wegovy: the key differences explained
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="access" heading="NHS vs private access">
                <SubHeading darkMode={darkMode}>NHS access</SubHeading>
                <p>Through the NHS, access is usually limited.</p>
                <p>Patients generally need:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>BMI thresholds, often 35+, or 30+ with comorbidities</li>
                  <li>Referral into Tier 3 weight management services</li>
                  <li>Commitment to behavioural support programmes</li>
                </ul>
                <p>Availability can vary by region. Waiting times may be significant. And frankly, many people who assume they qualify may not. That can be frustrating.</p>
                <p>Still, NHS prescribing exists for people at higher clinical risk, not casual weight loss. That distinction matters.</p>
                <SubHeading darkMode={darkMode}>Private clinics</SubHeading>
                <p>Private routes offer faster access. Often much faster. Some people prefer this because consultations can feel more responsive and ongoing support may be easier to access.</p>
                <p>
                  But private treatment introduces another issue: sustainability. £150 per month can become £250. Then
                  more. Over a year, that may exceed several thousand pounds. For some patients, that may be manageable.
                  For others, it may make long term treatment unrealistic. That practical question often deserves more
                  attention than it gets.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="side-effects"
                heading="Side effects people should take seriously"
              >
                <p>Most discussions focus on weight loss. Less often, people talk enough about tolerability.</p>
                <p>Common side effects include:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Nausea</li>
                  <li>Vomiting</li>
                  <li>Constipation</li>
                  <li>Diarrhoea</li>
                  <li>Injection site irritation</li>
                </ul>
                <p>These effects often improve as dose titration progresses, though not always. Some people stop treatment because they simply do not feel well. And that is not failure. That is tolerability.</p>
                <p>
                  For practical coping ideas on a common GLP-1 option, you may also read{" "}
                  <Link
                    href="/blog/side-effects-of-wegovy-and-how-to-manage-them"
                    className="font-medium text-brand-primary underline"
                  >
                    side effects of Wegovy and how to manage them
                  </Link>
                  .
                </p>
                <SubHeading darkMode={darkMode}>More serious risks</SubHeading>
                <p>Rare but potentially significant concerns may include:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Pancreatitis</li>
                  <li>Gallbladder complications</li>
                  <li>Severe dehydration</li>
                  <li>Persistent gastrointestinal distress</li>
                </ul>
                <p>Rapid weight loss itself can sometimes contribute to gallstones. That surprises people.</p>
                <p>Counterfeit products are another concern, particularly via social media sellers and unregulated websites—something MHRA warnings have highlighted. Only licensed prescribing routes should be considered. Our{" "}
                  <Link
                    href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards"
                    className="font-medium text-brand-primary underline"
                  >
                    GPhC pharmacy safety guide
                  </Link>{" "}
                  explains how to spot regulated UK care.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="genetics" heading="Genetics may influence results">
                <p>
                  This area is still evolving, but it is intriguing. Research involving UK users suggests genetic
                  differences may affect responsiveness to medications like semaglutide and tirzepatide. Some individuals
                  appear highly responsive. Others lose comparatively little. That may suggest obesity treatment is moving,
                  slowly, toward a more personalised model.
                </p>
                <p>Not everyone is convinced genetics will become a practical prescribing tool soon. Still, the signal is worth watching. It may eventually influence treatment matching.</p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="long-term"
                heading="A realistic perspective on long term weight maintenance"
              >
                <p>This is probably the hardest part.</p>
                <p>People often ask: &ldquo;If I lose weight on treatments, will it stay off?&rdquo;</p>
                <p>Maybe. Maybe not.</p>
                <p>Stopping treatment without sustaining dietary habits often appears associated with weight regain. That is not unique to treatments. That is common across weight interventions. Which is why many specialists increasingly treat obesity less as a short term project and more as chronic disease management. That framing may be uncomfortable, but it may also be closer to reality.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="also-ask" heading="Questions people also ask">
                <SubHeading darkMode={darkMode}>What is the 3-3-3 rule for weight loss?</SubHeading>
                <p>
                  The &ldquo;3-3-3 rule&rdquo; is not a formal NHS or medical obesity treatment guideline, which is worth clarifying upfront. Different people use the phrase differently, but one popular version refers to eating 3 balanced meals a day, walking or moving for 30 minutes daily, and reducing or avoiding 3 high-calorie trigger foods. Others use it to mean eating every 3 hours, keeping portions modest, and drinking water before meals.
                </p>
                <p>It may help some people simplify habits. It should probably be viewed as a behavioural framework or motivational tool rather than a universal scientific rule.</p>
                <SubHeading darkMode={darkMode}>How did Kelly Clarkson approach weight change?</SubHeading>
                <p>
                  Kelly Clarkson has publicly discussed dietary changes, walking, and health factors, including context around insulin resistance. There has also been media speculation about GLP-1 use among celebrities, while Clarkson has described lifestyle change and, more recently, medical support under physician guidance. A realistic takeaway: public figures&apos; results usually involve multiple factors, not one single trick. That tends to be true for most people.
                </p>
                <SubHeading darkMode={darkMode}>What are common considerations for Mounjaro on the NHS?</SubHeading>
                <p>Access criteria may evolve, but discussions around eligibility often include broad considerations such as:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Meeting BMI thresholds, often linked to obesity classification</li>
                  <li>Having weight-related health risks such as type 2 diabetes, hypertension, or sleep apnoea</li>
                  <li>Assessment through specialist weight management pathways, often Tier 3 services</li>
                  <li>Evidence that conventional diet and lifestyle approaches have had limited success</li>
                  <li>Commitment to structured monitoring and behavioural support alongside treatment</li>
                </ul>
                <p>Local commissioning may also influence access, so criteria can vary. Always take guidance from your clinician, not a blog post.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="Frequently Asked Questions">
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      1. Are prescription weight loss treatments worth trying?
                    </h3>
                    <p>They may be worth considering if conventional approaches have not worked and you meet prescribing criteria. Whether they are worth it often depends on side effects, cost, and whether you can sustain changes around them.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      2. Which works better: Wegovy or Mounjaro?
                    </h3>
                    <p>Some evidence suggests Mounjaro may produce greater average weight loss than Wegovy, though individual response can vary significantly.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      3. Can I get these through the NHS?
                    </h3>
                    <p>Possibly, but eligibility is strict. Access usually requires referral into specialist weight management pathways.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      4. What happens if I stop treatments?
                    </h3>
                    <p>Weight regain may occur, particularly if appetite returns and behavioural changes have not been maintained.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      5. Are online pharmacies safe?
                    </h3>
                    <p>Some are legitimate. Some are not. Only regulated UK providers requiring proper prescribing review should be considered.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      6. Can genetics affect whether they work?
                    </h3>
                    <p>Emerging evidence suggests this may be possible, though the science is still developing.</p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  Prescription weight loss treatments may represent a meaningful option for some people. But they are not
                  magic. They are not effortless. And they are unlikely to solve every driver of obesity on their own. Used
                  carefully, with realistic expectations and medical supervision, they might support significant progress.
                  Used as a shortcut? That expectation often seems harder to defend.
                </p>
                <p>Three questions worth asking first:</p>
                <ul className="list-decimal space-y-2 pl-6">
                  <li>Can I afford this long term?</li>
                  <li>Can I tolerate the side effects?</li>
                  <li>Am I prepared to change habits alongside medication?</li>
                </ul>
                <p>Those questions may matter more than comparing headline percentages alone.</p>
                <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Health Wise does not sell medicines. This page is for general information and is not a substitute for
                  personalised medical advice, prescribing decisions, or emergency care.
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
                title="Understanding Prescription Weight Loss Treatments in the UK: What They May Actually Offer"
                description="What GLP-1 weight loss treatments may offer in the UK: Wegovy, Mounjaro, NHS vs private, risks, and realistic expectations."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
