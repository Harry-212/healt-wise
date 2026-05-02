"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";
import { INJECTABLE_OBESITY_TREATMENTS_HERO } from "./blog-assets";

const SHARE_PATH = "/blog/injectable-obesity-treatments-uk-what-works-and-what-doesnt";
const HERO_SRC = INJECTABLE_OBESITY_TREATMENTS_HERO;

const TOC = [
  { id: "introduction", label: "Introduction" },
  { id: "how-they-work", label: "How injectable obesity treatments work" },
  { id: "nhs-vs-private", label: "NHS or private access" },
  { id: "comparing-options", label: "Comparing the main injectable options" },
  { id: "before-starting", label: "What to consider before starting" },
  { id: "risks-side-effects", label: "Risks and side effects" },
  { id: "eligibility", label: "Eligibility" },
  { id: "cost-effectiveness", label: "Are they worth the cost?" },
  { id: "additional-faq", label: "Additional FAQs" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "final-thoughts", label: "Final thoughts" },
];

const SOCIAL_HASHTAGS =
  "#InjectableObesityTreatmentsUK #WegovyUK #MounjaroUK #GLP1UK #ObesityTreatment #WeightLossUK #SaxendaUK";

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
            Injectable Obesity Treatments UK: What Works and What Doesn&apos;t
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              20 May 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              15 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_SRC}
            alt="Injectable obesity treatments in the UK — Wegovy, Mounjaro and Saxenda under medical supervision"
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
              <GuideSection darkMode={darkMode} id="introduction" heading="Introduction">
                <p className="text-lg md:text-xl">
                  If you have struggled with obesity despite trying the usual advice—eat less, move more, try another plan
                  next Monday—injectable treatments may seem worth considering.
                </p>
                <p>For some people, they probably are.</p>
                <p>
                  These medicines can help reduce appetite, increase satiety, and in some cases make it easier to maintain a
                  calorie deficit without feeling constantly hungry. That may sound simple, but anyone who has lived with
                  persistent food cravings knows it often is not.
                </p>
                <p>Still, it helps to be realistic.</p>
                <p>
                  These injections do not override every driver of weight gain. They may help with hunger. They do not
                  necessarily fix emotional eating, stress related habits, or years of metabolic complexity.
                </p>
                <p>That distinction matters.</p>
                <p>
                  In the UK, injectable obesity treatments are generally offered when body mass index thresholds are met,
                  often a BMI of 30 or above, or 27 with weight related health conditions, though exact criteria can vary.
                  And while they can be effective, they are not usually viewed as standalone solutions.
                </p>
                <p>
                  Most clinicians would likely say they work best when paired with changes you sustain outside the
                  prescription pad.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="how-they-work" heading="How injectable obesity treatments work">
                <p>Most of these medicines act on pathways involved in appetite signalling.</p>
                <p>
                  Wegovy and Saxenda act through the GLP-1 pathway, helping you feel fuller for longer and, in many cases,
                  eat less.
                </p>
                <p>
                  Mounjaro works somewhat differently, targeting both GLP-1 and GIP receptors. Some researchers believe that
                  dual action may partly explain why outcomes can sometimes appear stronger in comparative studies.
                </p>
                <p>Possibly.</p>
                <p>Though averages can be deceptive.</p>
                <p>One person may respond very well.</p>
                <p>Another may struggle with side effects and stop early.</p>
                <p>Both scenarios happen.</p>
                <p>
                  These medicines also tend to slow gastric emptying. That may reduce hunger between meals, but it can also
                  explain why nausea shows up so often, particularly during dose escalation.
                </p>
                <p>That is not a flaw in the treatment.</p>
                <p>It is part of how it works.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nhs-vs-private" heading="NHS or private: which route makes sense?">
                <p>This is often less about medicine and more about access.</p>
                <SubHeading darkMode={darkMode}>Through the NHS</SubHeading>
                <p>
                  Treatment may be affordable, even remarkably so compared with private routes. In England, standard
                  prescription charges apply. Elsewhere in the UK, prescriptions may be free. That is a major advantage.
                </p>
                <p>But access can be slow.</p>
                <p>Very slow in some cases.</p>
                <p>
                  Eligibility criteria, specialist referrals, monitoring reviews—these can create delays that frustrate people
                  already motivated to begin treatment.
                </p>
                <SubHeading darkMode={darkMode}>Private clinics</SubHeading>
                <p>
                  That is often why private clinics appeal. Not necessarily because they offer better medicines, but because
                  they may offer faster access.
                </p>
                <p>
                  Private prescribing for Wegovy, Saxenda, or Mounjaro may run from roughly £150 to over £300 monthly. Costs can
                  rise over time.
                </p>
                <p>That adds up.</p>
                <p>Which raises a question people sometimes ignore.</p>
                <p>Can you sustain the treatment financially if it works well and you need longer use?</p>
                <p>That question deserves attention.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="comparing-options" heading="Comparing the main injectable options">
                <SubHeading darkMode={darkMode}>Mounjaro</SubHeading>
                <p>Mounjaro is taken weekly.</p>
                <p>
                  Some data suggest it may produce greater average weight reduction than some alternatives, though not
                  everyone tolerates it equally well.
                </p>
                <p>Common concerns may include nausea, constipation, and digestive discomfort.</p>
                <p>Some users do very well.</p>
                <p>Others find titration difficult.</p>

                <SubHeading darkMode={darkMode}>Wegovy</SubHeading>
                <p>Wegovy is also once weekly and widely recognised.</p>
                <p>It tends to be the reference point many patients ask about first.</p>
                <p>
                  Common side effects can include nausea, vomiting, diarrhoea, and in rare cases more serious concerns
                  requiring medical review.
                </p>

                <SubHeading darkMode={darkMode}>Saxenda</SubHeading>
                <p>Saxenda differs partly because it is taken daily.</p>
                <p>For some, daily injections feel inconvenient.</p>
                <p>Others prefer the dose flexibility.</p>
                <p>It may depend on the person.</p>
                <p>
                  And that comes up often in obesity medicine: there may not be one universally &ldquo;best&rdquo; option.
                  There may only be a best fit.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="before-starting" heading="What should you actually consider before starting?">
                <p>A few practical things matter more than glossy comparisons suggest.</p>
                <p>Frequency matters.</p>
                <p>Some people simply do better with weekly routines.</p>
                <p>Side effects matter.</p>
                <p>An effective medicine you cannot tolerate may not be effective for you.</p>
                <p>Cost matters.</p>
                <p>That seems obvious, but many underestimate long term expense.</p>
                <p>Monitoring matters too.</p>
                <p>
                  These are not really set and forget treatments. Dose changes, symptom reviews, progress assessments—all may
                  affect whether treatment continues.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="risks-side-effects" heading="Risks and side effects">
                <p>This deserves honest discussion.</p>
                <p>Because enthusiasm can sometimes outpace caution.</p>
                <p>Digestive side effects are common.</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Nausea</li>
                  <li>Constipation</li>
                  <li>Diarrhoea</li>
                  <li>Vomiting</li>
                  <li>Sometimes fatigue</li>
                </ul>
                <p>Often these improve.</p>
                <p>Sometimes they do not.</p>
                <p>
                  More serious risks, including pancreatitis or bowel complications, appear much less common, but they are
                  not theoretical.
                </p>
                <p>That is why medical supervision matters.</p>
                <p>Not as a formality.</p>
                <p>As protection.</p>
                <p>
                  Some medicines also carry warnings involving thyroid related concerns in certain contexts. Those warnings
                  should be discussed properly, not skimmed over.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="eligibility" heading="Eligibility is often stricter than people assume">
                <p>A common misunderstanding is that anyone can request these injections and receive them.</p>
                <p>Usually not.</p>
                <p>
                  NICE and NHS pathways often involve BMI criteria, obesity related conditions, previous attempts at lifestyle
                  intervention, and ongoing review requirements.
                </p>
                <p>
                  Some NHS pathways may stop prescribing if expected progress is not achieved—often around 5 percent body
                  weight loss thresholds.
                </p>
                <p>That can surprise people.</p>
                <p>But from a system perspective, it reflects treatment evaluation.</p>
                <p>Private prescribers may also screen carefully.</p>
                <p>Responsible ones should.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="cost-effectiveness" heading="Are they worth the cost?">
                <p>Possibly.</p>
                <p>
                  Some economic analyses suggest semaglutide may be cost effective compared with lifestyle intervention alone
                  when longer term health outcomes are considered.
                </p>
                <p>But cost effectiveness in a model is not always the same as affordability in real life.</p>
                <p>That difference matters.</p>
                <p>A treatment may make sense clinically and still be financially difficult.</p>
                <p>Both can be true.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="additional-faq" heading="Additional FAQs">
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Which weight loss injection is most effective in the UK?
                    </h3>
                    <p>
                      Current evidence often points to Mounjaro as producing the greatest average weight loss, though
                      effectiveness can depend on individual response, tolerability, and adherence.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Can I lose 10kg in 2 months with Ozempic?
                    </h3>
                    <p>
                      Ozempic may support substantial loss for some people, though 10kg in 8 weeks may be ambitious for many
                      and should not be assumed.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      What is the 3 3 3 rule for weight loss?
                    </h3>
                    <p>
                      It is generally a habit framework, not a clinical obesity treatment method. People often use it to refer
                      to simple routines around meals, movement, and reducing trigger foods.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      How did Kelly Clarkson really lose her weight?
                    </h3>
                    <p>
                      Kelly Clarkson has attributed her weight loss to dietary change, walking, and physician guided medical
                      support. It appears likely multiple factors were involved.
                    </p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="Frequently Asked Questions">
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Do I still need diet and exercise?
                    </h3>
                    <p>Yes.</p>
                    <p>Probably more than many advertisements imply.</p>
                    <p>Medication may help regulate appetite, but it does not replace foundational habits.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      How fast will I lose weight?
                    </h3>
                    <p>That varies.</p>
                    <p>Some people respond quickly.</p>
                    <p>Others lose steadily over longer periods.</p>
                    <p>Rapid results should not be assumed.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Can I switch between injections?
                    </h3>
                    <p>Possibly, but only with clinical supervision.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Will NHS prescriptions continue indefinitely?
                    </h3>
                    <p>Not necessarily.</p>
                    <p>Progress reviews often determine continuation.</p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="final-thoughts" heading="Final thoughts">
                <p>Injectable obesity treatments may offer real support.</p>
                <p>They may also be oversold in some conversations.</p>
                <p>Both things can be true.</p>
                <p>
                  Used carefully, with realistic expectations and proper medical oversight, they may help shift the odds in
                  your favour.
                </p>
                <p>Used as a shortcut, they may disappoint.</p>
                <p>If I were weighing them up personally, I would probably ask:</p>
                <ul className="list-decimal space-y-2 pl-6">
                  <li>Can I tolerate the side effects?</li>
                  <li>Can I sustain the cost?</li>
                  <li>Can I use this to support habits, not outsource them?</li>
                </ul>
                <p>Those may be better questions than asking which injection sounds strongest on paper.</p>
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
                title="Injectable Obesity Treatments UK: What Works and What Doesn't"
                description="Injectable obesity treatments in the UK: NHS vs private access, Wegovy, Mounjaro and Saxenda, eligibility, risks and realistic expectations."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
