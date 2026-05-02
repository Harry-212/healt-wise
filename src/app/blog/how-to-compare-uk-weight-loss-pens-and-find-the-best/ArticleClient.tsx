"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";

const SHARE_PATH = "/blog/how-to-compare-uk-weight-loss-pens-and-find-the-best";
const HERO_SRC =
  "/blog/How%20to%20Compare%20UK%20Weight%20Loss%20Pens%20and%20Find%20the%20Best.webp";

const TOC = [
  { id: "understand-pens", label: "Understand weight loss pens" },
  { id: "how-they-work", label: "How these pens work" },
  { id: "compare-options", label: "Compare the main options" },
  { id: "what-to-compare", label: "What should you compare?" },
  { id: "safety", label: "Safety and legality" },
  { id: "dosing-pricing", label: "Dosing and pricing" },
  { id: "side-effects-benefits", label: "Side effects and potential health benefits" },
  { id: "practical-tips", label: "Practical tips for better results" },
  { id: "additional-faq", label: "Additional FAQs" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "conclusion", label: "Final thoughts" },
];

const SOCIAL_HASHTAGS =
  "#WeightLossPensUK #CompareWeightLossPens #Mounjaro #Wegovy #Saxenda #GLP1";

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
            How to Compare UK Weight Loss Pens and Find the Best
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              23 May 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              15 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_SRC}
            alt="Compare UK weight loss pens — Saxenda, Wegovy and Mounjaro with regulated prescribing"
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
              <GuideSection darkMode={darkMode} id="understand-pens" heading="Understand weight loss pens">
                <p className="text-lg md:text-xl">
                  Weight loss pens have become much more mainstream in the UK. A few years ago, many people had never heard
                  of them. Now they come up in GP appointments, news stories, and probably in conversations with friends who
                  have tried everything from calorie counting to meal replacements.
                </p>
                <p>That shift says something.</p>
                <p>People are looking for support beyond traditional advice.</p>
                <p>And sometimes, they may need it.</p>
                <p>
                  Weight loss pens, including Saxenda, Wegovy, and Mounjaro, are injectable medicines that may help regulate
                  appetite, slow digestion, and reduce hunger.
                </p>
                <p>In simple terms, they may help you eat less without feeling deprived all the time.</p>
                <p>That can matter more than people realise.</p>
                <p>Still, not all pens work the same.</p>
                <p>And not every person responds the same way.</p>
                <p>That is where comparison matters.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="how-they-work" heading="How these pens work">
                <p>Most weight loss pens work through incretin hormones, particularly GLP-1, and in some cases GIP as well.</p>
                <p>That sounds technical.</p>
                <p>What it often means in practice is:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>You may feel full faster.</li>
                  <li>You may stay full longer.</li>
                  <li>You may think about food less often.</li>
                </ul>
                <p>Some people now call this reduced &ldquo;food noise.&rdquo;</p>
                <p>Odd phrase.</p>
                <p>Useful description.</p>
                <p>
                  These medicines also tend to slow gastric emptying, which may help reduce appetite but may also explain
                  common side effects like nausea.
                </p>
                <p>That is often part of the trade off.</p>
                <p>Not a flaw.</p>
                <p>Part of the mechanism.</p>
                <p>
                  Some users may see significant weight reduction over time, particularly when injections are paired with
                  sustained lifestyle changes.
                </p>
                <p>Paired with is important.</p>
                <p>Medication alone is rarely the whole story.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="compare-options" heading="Compare the main options">
                <p>Three pens dominate most UK comparisons.</p>

                <SubHeading darkMode={darkMode}>Saxenda</SubHeading>
                <p>Saxenda is the older daily injection option.</p>
                <p>Some people like the predictability of daily dosing.</p>
                <p>Others find it inconvenient.</p>
                <p>Both reactions make sense.</p>
                <p>Average weight loss may be more modest than newer agents, often around 5 to 7 percent in some data.</p>
                <p>Still, modest does not mean irrelevant.</p>
                <p>A clinically meaningful loss can still improve health markers.</p>

                <SubHeading darkMode={darkMode}>Wegovy</SubHeading>
                <p>Wegovy is a weekly injection and has become a major reference point in obesity treatment.</p>
                <p>Some higher dose studies suggest substantial results, in some cases approaching 20 percent or more.</p>
                <p>Though again, averages.</p>
                <p>Not guarantees.</p>
                <p>For many people, weekly dosing feels simpler.</p>
                <p>That matters more than people think.</p>
                <p>Convenience affects adherence.</p>
                <p>Adherence affects outcomes.</p>

                <SubHeading darkMode={darkMode}>Mounjaro</SubHeading>
                <p>Mounjaro is often discussed as the most potent option currently available.</p>
                <p>Some evidence suggests average reductions up to 22.5 percent in some settings.</p>
                <p>That has driven a lot of attention.</p>
                <p>And a lot of expectations.</p>
                <p>Possibly too many.</p>
                <p>Because stronger does not automatically mean better for every person.</p>
                <p>Tolerance matters.</p>
                <p>Cost matters.</p>
                <p>Suitability matters.</p>
                <p>
                  For a structured comparison, see{" "}
                  <Link href="/blog/mounjaro-vs-wegovy-key-differences-explained" className="font-medium text-brand-primary underline">
                    Mounjaro vs Wegovy: the key differences explained
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="what-to-compare" heading="What should you compare?">
                <p>People often compare only weight loss percentages.</p>
                <p>That is too narrow.</p>
                <p>You may want to compare:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Dosing frequency</li>
                  <li>Side effect tolerance</li>
                  <li>Monthly cost</li>
                  <li>NHS availability</li>
                  <li>Appetite control</li>
                  <li>Long term sustainability</li>
                </ul>
                <p>Sometimes the &ldquo;best&rdquo; pen is simply the one you can stay on consistently.</p>
                <p>That may sound obvious.</p>
                <p>It often gets overlooked.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="safety" heading="Safety and legality matter">
                <p>This part deserves emphasis.</p>
                <p>Do not buy these from social media sellers.</p>
                <p>Do not buy them from beauty salons.</p>
                <p>Do not trust a &ldquo;cheap pen&rdquo; without proper prescribing.</p>
                <p>The MHRA warnings exist for a reason.</p>
                <p>Counterfeit products are a real concern.</p>
                <p>And this is not the sort of thing worth gambling on.</p>
                <p>Use regulated pharmacies.</p>
                <p>Use licensed prescribers.</p>
                <p>Use medical supervision.</p>
                <p>That is the safer path.</p>
                <p>
                  For pharmacy checks, see{" "}
                  <Link
                    href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards"
                    className="font-medium text-brand-primary underline"
                  >
                    how we verify UK pharmacies (GPhC)
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="dosing-pricing" heading="Dosing and pricing">
                <p>This is where comparison gets practical.</p>
                <p>Saxenda may sometimes appear cheaper upfront, though daily dosing can change the maths.</p>
                <p>Wegovy often sits in a middle range.</p>
                <p>Mounjaro may be the most expensive, particularly at higher doses.</p>
                <p>And costs can change.</p>
                <p>Quite a lot.</p>
                <p>Which raises a question worth asking early.</p>
                <p>If treatment works well, can you afford to continue it?</p>
                <p>Because continuity matters.</p>
                <p>Stopping because of cost may affect results just as much as stopping because of side effects.</p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="side-effects-benefits"
                heading="Side effects and potential health benefits"
              >
                <p>Most people hear about nausea first.</p>
                <p>For good reason.</p>
                <p>It is common.</p>
                <p>So are:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Constipation</li>
                  <li>Diarrhoea</li>
                  <li>Fatigue</li>
                  <li>Headaches</li>
                </ul>
                <p>Often these improve.</p>
                <p>Sometimes they do not.</p>
                <p>Rare complications, including pancreatitis or gallbladder issues, may also need discussion.</p>
                <p>
                  On the positive side, some research suggests broader metabolic or cardiovascular benefits may exist in some
                  groups.
                </p>
                <p>Though much of that evidence still has boundaries.</p>
                <p>And those boundaries matter.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="practical-tips" heading="Practical tips for better results">
                <p>A pen is not a full plan.</p>
                <p>It is one part of a plan.</p>
                <p>What may help:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Prioritise protein</li>
                  <li>Stay hydrated</li>
                  <li>Eat slowly</li>
                  <li>Track symptoms</li>
                  <li>Keep follow up appointments</li>
                  <li>Walk after meals if you can</li>
                </ul>
                <p>Honestly, symptom tracking alone is underrated.</p>
                <p>People often overlook it, and then struggle to explain why they suddenly feel worse at dose changes.</p>
                <p>A simple notes app can sometimes be enough.</p>
                <p>It does not need to be complicated.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="additional-faq" heading="Additional FAQs">
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      What is the most effective weight loss pen?
                    </h3>
                    <p>
                      At the moment, Mounjaro is often viewed as the most effective prescription weight loss pen available in
                      the UK, at least based on current comparative trial data. Some studies suggest average weight reduction
                      of around 20 percent with Mounjaro, compared with roughly 14 percent for Wegovy under similar study
                      conditions. That said, &ldquo;most effective&rdquo; can be misleading—effectiveness may depend on total
                      weight lost, appetite control, tolerability, cost, or long-term maintenance.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      What is the most successful weight loss pill in the UK?
                    </h3>
                    <p>
                      Among oral prescription options, Orlistat has been widely used, though it works very differently from
                      injections. Some clinicians may discuss other medicines depending on the case. Injectable therapies often
                      appear stronger in overall weight loss comparisons.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      What is the 3 3 3 rule for weight loss?
                    </h3>
                    <p>
                      The 3 3 3 rule is generally a behavioural framework, not a clinical obesity treatment model. It often
                      refers to 3 balanced meals, 30 minutes movement, and reducing 3 high calorie trigger foods. It may help
                      some people simplify habits. It should not be mistaken for a medical protocol.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      What is a cheaper alternative to Mounjaro?
                    </h3>
                    <p>
                      Depending on availability and response, Wegovy or Saxenda may sometimes be considered alternatives.
                      Whether they are cheaper can depend on dose, provider, and NHS eligibility. Price alone probably should
                      not decide the choice.
                    </p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="Frequently Asked Questions">
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Are Weight Loss Pens Safe For Everyone?
                    </h3>
                    <p>No. Not universally. They require individual assessment.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Do I Need A Prescription?
                    </h3>
                    <p>Yes. These medicines require proper prescribing and should not be sourced informally.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Which Pen Leads To The Most Weight Loss?
                    </h3>
                    <p>Current evidence often favours Mounjaro, though individual response varies.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      How Long Do I Have To Use Them?
                    </h3>
                    <p>Possibly months. Sometimes longer. Progress reviews often guide duration.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      What If I Experience Side Effects?
                    </h3>
                    <p>Discuss them early. Do not just &ldquo;push through&rdquo; severe symptoms without advice.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Can I Buy These Pens From Social Media Or A Salon?
                    </h3>
                    <p>No. And honestly, that should be an automatic no.</p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Final thoughts">
                <p>Comparing UK weight loss pens is not really about finding a winner on paper.</p>
                <p>It is about finding a fit.</p>
                <p>The strongest option may not be the right one.</p>
                <p>The cheapest option may not be sustainable.</p>
                <p>The most talked about option may not suit you.</p>
                <p>All of that can be true.</p>
                <p>If I were weighing options personally, I would probably ask:</p>
                <ul className="list-decimal space-y-2 pl-6">
                  <li>Can I tolerate this?</li>
                  <li>Can I afford this long term?</li>
                  <li>Can I realistically stay consistent with this?</li>
                </ul>
                <p>Those questions may matter more than chasing the highest percentage in a headline.</p>
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
                title="How to Compare UK Weight Loss Pens and Find the Best"
                description="Compare Saxenda, Wegovy and Mounjaro: dosing, side effects, cost, NHS access and safe prescribing in the UK."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
