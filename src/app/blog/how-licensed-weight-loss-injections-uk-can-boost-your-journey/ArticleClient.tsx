"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";

const SHARE_PATH = "/blog/how-licensed-weight-loss-injections-uk-can-boost-your-journey";
const HERO_SRC =
  "/blog/How%20Licensed%20Weight%20Loss%20Injections%20UK%20Can%20Boost%20Your%20Journey.webp";

const TOC = [
  { id: "understanding", label: "Understanding licensed weight loss injections" },
  { id: "how-they-work", label: "How these injections work" },
  { id: "mounjaro-wegovy", label: "Exploring Mounjaro and Wegovy" },
  { id: "access", label: "NHS and private prescriptions" },
  { id: "benefits-risks", label: "Benefits and potential side effects" },
  { id: "lifestyle", label: "Pairing injections with lifestyle change" },
  { id: "maintenance", label: "Maintaining progress" },
  { id: "additional-faq", label: "Additional FAQs" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "conclusion", label: "Final thoughts" },
];

const SOCIAL_HASHTAGS =
  "#LicensedWeightLossInjections #UKWeightLoss #Mounjaro #Wegovy #MHRA #GLP1";

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
            How Licensed Weight Loss Injections UK Can Boost Your Journey
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              21 May 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              14 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_SRC}
            alt="Licensed MHRA-authorised weight loss injections in the UK — Mounjaro and Wegovy with clinical oversight"
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
              <GuideSection darkMode={darkMode} id="understanding" heading="Understanding licensed weight loss injections">
                <p className="text-lg md:text-xl">
                  If you have found yourself struggling to manage weight through diet changes, gym memberships, or another
                  round of &ldquo;starting fresh on Monday,&rdquo; licensed weight loss injections may seem worth exploring.
                </p>
                <p>For some people, they probably are.</p>
                <p>
                  These prescription treatments can help regulate appetite, reduce persistent hunger, and make portion
                  control feel less difficult. That may sound modest, but for someone dealing with constant cravings, that can
                  be meaningful.
                </p>
                <p>Still, it helps to keep expectations grounded.</p>
                <p>
                  These medicines are not magic. They may support weight loss, but they do not erase emotional eating, poor
                  sleep, stress-driven habits, or years of metabolic complexity.
                </p>
                <p>That part still matters.</p>
                <p>
                  In the UK, the term &ldquo;licensed&rdquo; matters too. It means medicines such as Mounjaro and Wegovy have
                  been authorised by the MHRA for defined use cases, with prescribing rules, safety oversight, and monitoring
                  requirements.
                </p>
                <p>That does not guarantee they are right for everyone.</p>
                <p>It means they have a regulated place in treatment.</p>
                <p>And that is different.</p>
                <p>
                  In practice, they tend to be considered for adults with obesity, often around BMI thresholds of 30 or above,
                  or lower if significant weight-related conditions exist. Exact access can vary.
                </p>
                <p>Which is why a conversation with a clinician usually comes before a prescription.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="how-they-work" heading="How these injections work">
                <p>Most licensed weight loss injections work by affecting appetite signalling pathways.</p>
                <p>Wegovy acts through GLP-1 receptors.</p>
                <p>Mounjaro acts on GLP-1 and GIP pathways.</p>
                <p>That difference may matter.</p>
                <p>
                  Some researchers believe dual pathway activity may partly explain why tirzepatide sometimes appears
                  associated with greater average weight reduction.
                </p>
                <p>Possibly.</p>
                <p>Though averages do not predict individuals.</p>
                <p>One person may respond remarkably well.</p>
                <p>Another may struggle with nausea and stop treatment early.</p>
                <p>Both outcomes exist.</p>
                <p>
                  These medicines also slow gastric emptying, which can increase satiety and reduce frequent hunger. That may
                  be one reason some people describe less &ldquo;food noise.&rdquo;
                </p>
                <p>Interestingly, many patients talk about that before they mention kilos lost.</p>
                <p>Not thinking about snacks all afternoon can feel like a bigger win than a number on a scale.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="mounjaro-wegovy" heading="Exploring Mounjaro and Wegovy">
                <SubHeading darkMode={darkMode}>Mounjaro</SubHeading>
                <p>Mounjaro has attracted considerable attention.</p>
                <p>Some studies suggest average weight reductions near 20 percent over extended treatment periods.</p>
                <p>Impressive.</p>
                <p>But again, averages.</p>
                <p>Not guarantees.</p>
                <p>Some users may experience strong appetite reduction and improved metabolic markers.</p>
                <p>Others may find dose escalation difficult.</p>
                <p>Common side effects can include nausea, constipation, and digestive discomfort.</p>
                <p>There may be broader metabolic benefits too, though evidence is still evolving.</p>

                <SubHeading darkMode={darkMode}>Wegovy</SubHeading>
                <p>Wegovy remains one of the most recognised obesity medications in the UK.</p>
                <p>Reported average weight reductions around 14 percent have made it a major reference point in treatment discussions.</p>
                <p>For some people, its longer prescribing history may feel reassuring.</p>
                <p>That familiarity can matter.</p>
                <p>Especially when deciding between options.</p>
                <p>Like Mounjaro, it requires prescription oversight, and costs may be significant without NHS access.</p>
                <p>
                  See{" "}
                  <Link href="/blog/mounjaro-vs-wegovy-key-differences-explained" className="font-medium text-brand-primary underline">
                    Mounjaro vs Wegovy: the key differences explained
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="access" heading="NHS and private prescriptions">
                <p>This is often where interest runs into logistics.</p>
                <p>NHS access may be affordable, but limited.</p>
                <p>Eligibility often depends on BMI, health risks, and specialist referral pathways.</p>
                <p>Some patients qualify.</p>
                <p>Many do not.</p>
                <p>That surprises people.</p>
                <p>
                  Private routes offer faster access, though usually at a much higher cost. Monthly treatment may run into
                  hundreds of pounds depending on dose and provider.
                </p>
                <p>That raises a practical question people sometimes overlook.</p>
                <p>Can you sustain the cost if treatment works and you need longer use?</p>
                <p>Worth asking.</p>
                <p>Because stopping due to cost is still stopping.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="benefits-risks" heading="Benefits and potential side effects">
                <p>There may be several benefits beyond weight reduction alone.</p>
                <p>Some users may see:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Lower appetite</li>
                  <li>Reduced cravings</li>
                  <li>Improved blood sugar control</li>
                  <li>Possible blood pressure improvements</li>
                  <li>Potential metabolic or cardiovascular advantages in certain groups</li>
                </ul>
                <p>
                  Some evidence suggests GLP-1 therapies may have broader protective effects, though conclusions outside studied
                  populations should probably remain cautious.
                </p>
                <p>On the risk side, digestive side effects are common.</p>
                <p>Nausea.</p>
                <p>Constipation.</p>
                <p>Diarrhoea.</p>
                <p>Vomiting.</p>
                <p>Often temporary.</p>
                <p>Not always.</p>
                <p>
                  More serious risks, such as pancreatitis or gallbladder complications, appear uncommon but should not be
                  ignored.
                </p>
                <p>This is where supervision matters.</p>
                <p>Not as a box ticking exercise.</p>
                <p>As protection.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="lifestyle" heading="Pairing injections with lifestyle change">
                <p>This part may be less glamorous, but arguably matters more.</p>
                <p>Medication can help regulate appetite.</p>
                <p>It does not build habits for you.</p>
                <p>That part still belongs to you.</p>
                <p>A balanced reduced calorie diet still matters.</p>
                <p>Movement still matters.</p>
                <p>Sleep likely matters more than many people realise.</p>
                <p>Sometimes small changes carry more weight than dramatic ones.</p>
                <p>Cooking at home twice more per week.</p>
                <p>Walking after dinner.</p>
                <p>Swapping sugary drinks for water.</p>
                <p>That may not sound revolutionary.</p>
                <p>But it is often how long term change looks.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="maintenance" heading="Maintaining progress">
                <p>Losing weight is one phase.</p>
                <p>Keeping it off may be harder.</p>
                <p>
                  Evidence suggests weight regain can occur after stopping treatment, particularly if behavioural patterns have
                  not shifted.
                </p>
                <p>That is not failure.</p>
                <p>That is biology meeting behaviour.</p>
                <p>Some people may need longer treatment.</p>
                <p>Others may transition off successfully with strong support.</p>
                <p>It depends.</p>
                <p>Which is not a satisfying answer.</p>
                <p>But it may be the honest one.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="additional-faq" heading="Additional FAQs">
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      What are the benefits of weight loss injections UK?
                    </h3>
                    <p>
                      The main benefits often include appetite suppression, reduced cravings, support for weight loss, and
                      possible improvements in blood sugar and metabolic health. For some people, reduced &ldquo;food
                      noise&rdquo; may be one of the most noticeable benefits—and honestly, that can be life changing.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      What is the 3 3 3 rule for weight loss?
                    </h3>
                    <p>
                      The 3 3 3 rule is generally a habit framework, not a medical obesity protocol. It often refers to 3
                      balanced meals daily, 30 minutes of movement, and reducing 3 trigger foods. It may help simplify behaviour.
                      It should not be confused with evidence based obesity treatment.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Can I lose 10kg in 2 months with Ozempic?
                    </h3>
                    <p>
                      Possibly, though that may be ambitious for many. Ozempic may support substantial loss, but results depend
                      on starting weight, dose, eating habits, and individual response. Slower loss may sometimes be more
                      sustainable.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      How did Kelly Clarkson really lose her weight?
                    </h3>
                    <p>
                      Kelly Clarkson has discussed dietary changes, walking, and physician guided medical support. Her results
                      appear likely linked to multiple factors, not a single intervention—which is usually how major weight loss
                      happens.
                    </p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="Frequently Asked Questions">
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Are Licensed Weight Loss Injections in the UK Safe?
                    </h3>
                    <p>
                      Yes, though they do carry risks. Used under medical supervision, they can be appropriate for many people.
                      Used casually or sourced from unregulated channels, that is a different story.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      How Do I Know If I Am Eligible?
                    </h3>
                    <p>
                      Eligibility often depends on BMI, health conditions, and prescribing pathway criteria. A clinician can help
                      assess this.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      What Is The Difference Between Mounjaro And Wegovy?
                    </h3>
                    <p>Mounjaro targets GLP-1 and GIP. Wegovy targets GLP-1. That may influence outcomes, though response varies.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Can I Use Them During Pregnancy?
                    </h3>
                    <p>Generally no. These medicines are not usually recommended during pregnancy or breastfeeding.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      How Long Will I Need The Injections?
                    </h3>
                    <p>Possibly months. Sometimes longer. Review and progress usually shape duration.</p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Will I Experience Side Effects?
                    </h3>
                    <p>Mild digestive effects are relatively common. Serious complications are rare, but should be taken seriously.</p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Final thoughts">
                <p>Licensed weight loss injections may offer meaningful support.</p>
                <p>They may also be oversimplified in online discussions.</p>
                <p>Both things can be true.</p>
                <p>Used carefully, with realistic expectations, they may help shift the odds in your favour.</p>
                <p>Used as a shortcut, they may disappoint.</p>
                <p>If I were weighing them up personally, I would probably ask:</p>
                <ul className="list-decimal space-y-2 pl-6">
                  <li>Can I tolerate the side effects?</li>
                  <li>Can I sustain the cost?</li>
                  <li>Can I use this to support habits rather than outsource them?</li>
                </ul>
                <p>
                  Those may be better questions than asking whether the injections work in theory—because in practice, what
                  matters is whether they work for you.
                </p>
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
                title="How Licensed Weight Loss Injections UK Can Boost Your Journey"
                description="Licensed UK weight loss injections: how Mounjaro and Wegovy work, NHS vs private access, benefits, risks and long-term expectations."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
