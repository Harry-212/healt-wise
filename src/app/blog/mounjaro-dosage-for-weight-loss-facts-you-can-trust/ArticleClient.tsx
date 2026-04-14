"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection, GuideTable } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";

const TOC = [
  { id: "understand-mounjaro", label: "Understand Mounjaro and Its Role in Weight Management" },
  { id: "dosage-works", label: "How Mounjaro Dosage for Weight Loss Works" },
  { id: "key-benefits", label: "Key Benefits Backed by Research" },
  { id: "side-effects", label: "Potential Side Effects and Precautions" },
  { id: "long-term", label: "Long-Term Success Strategies" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "key-takeaways", label: "Key Takeaways" },
  { id: "conclusion", label: "Conclusion" },
];

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`w-full font-sans transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-300" : "bg-white text-slate-800"}`}>
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        
        {/* TOP NAVIGATION HEADER */}
        <div className="flex justify-between items-center mb-10">
          <Link href="/blog" className={`flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-75 ${darkMode ? "text-slate-300" : "text-slate-900"}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? "bg-slate-800" : "bg-slate-100"}`}>
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back to News
          </Link>
          
          <div className="flex items-center gap-3">
            <Moon className={`w-4 h-4 ${darkMode ? "text-slate-300" : "text-slate-700"}`} />
            <button 
              onClick={toggleDarkMode}
              className={`w-12 h-6 rounded-full relative shadow-inner flex items-center p-1 transition-colors ${darkMode ? "bg-slate-700" : "bg-slate-200"}`}
            >
              <div className={`w-4 h-4 rounded-full shadow transition-all ${darkMode ? "bg-slate-900 translate-x-6" : "bg-white translate-x-0"}`} />
            </button>
            <Sun className={`w-4 h-4 ${darkMode ? "text-yellow-400" : "text-slate-400"}`} />
          </div>
        </div>

        {/* HERO HEADER */}
        <header className="mb-12">
          <h1 className={`text-4xl md:text-5xl lg:text-[54px] font-medium leading-[1.1] tracking-tight mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
            Mounjaro Dosage for Weight Loss: Facts You Can Trust
          </h1>
          <div className={`flex flex-wrap items-center gap-6 text-sm font-medium mb-10 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              14 Apr 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              6 min read
            </span>
          </div>

          <div className="relative w-full aspect-[16/9] md:aspect-[2/1] overflow-hidden rounded-[32px] sm:rounded-[40px]">
            <Image
              src="https://i.ibb.co.com/cSgqJLYC/image.png"
              alt="Mounjaro Medication Guide"
              unoptimized
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </header>

        {/* CONTENT SPLIT LAYOUT */}
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-16">
          
          {/* LEFT: TOC */}
          {TOC.length > 0 && <GuideTocSidebar toc={TOC} />}

          {/* RIGHT: ARTICLE BODY */}
          <div className="min-w-0 flex-1 max-w-3xl">
            <article className={`space-y-8 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              <p className="text-lg md:text-xl">
                Mounjaro (tirzepatide) is attracting attention as a promising medication for weight loss, particularly among those who have struggled to see results with diet and exercise alone. By slowing digestion and mimicking two hormones—GLP-1 and GIP—Mounjaro helps curb appetite and manage blood sugar. Yet the real key to its success lies in understanding the dosage journey, from your first injection to steady, long-term progress.
              </p>
              <p>
                Different people respond differently to each dose, so it is vital to learn how Mounjaro’s incremental approach supports effective and safe weight loss. Below, you will find what you need to know about dosage levels, possible side effects, and how to set yourself up for success. As always, be sure to work closely with a GP or specialist so you can tailor the plan to your needs.
              </p>

              <GuideSection id="understand-mounjaro" heading="Understand Mounjaro and Its Role in Weight Management">
                <p>
                  Originally approved by the FDA to treat type 2 diabetes, Mounjaro (also sold under the brand name Zepbound) is now widely recognised for its weight loss potential. Despite not always being FDA-approved specifically for obesity when first released, many healthcare providers prescribe it off-label for people with excess weight or weight-related conditions like high blood pressure and high cholesterol [1]. Tirzepatide slows your digestion and helps signal a feeling of fullness more quickly, which can reduce how much you eat over time.
                </p>
                <p>
                  This medication is typically injected subcutaneously once a week. Its long half-life results in persistent effects on appetite and digestion—something you will notice during your first month on Mounjaro. However, because of its potency, you will also want to ensure you are following the correct dosage path to balance effectiveness with safety.
                </p>
              </GuideSection>

              <GuideSection id="dosage-works" heading="How Mounjaro Dosage for Weight Loss Works">
                <p>
                  Mounjaro dosages are carefully structured to optimise results while limiting side effects. The journey starts low and gradually scales up, giving your body time to adapt to changing hormone levels and reduced hunger. According to guidance from Nettles Pharmacy in Tooting, London, you typically begin on 2.5 mg for four weeks to help your body acclimate before dose increases [2].
                </p>
                <p>Below is a summary of typical Mounjaro dosage stages based on recommendations for weight loss:</p>

                <div className={`mt-6 mb-8 rounded-xl overflow-hidden border ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                  <GuideTable
                    headers={["Dose Stage", "Approx. Duration", "Purpose"]}
                    rows={[
                      { cells: ["2.5 mg", "4 weeks", "Allows your body to adapt, minimising initial side effects"] },
                      { cells: ["5 mg", "4 weeks+", "Begins active weight loss phase, appetite changes often become noticeable"] },
                      { cells: ["7.5 mg & 10 mg", "Varies", "Boosts weight loss if progress plateaus, considered “main working” doses"] },
                      { cells: ["12.5 mg & 15 mg", "If needed", "Higher doses reserved for those who need additional support after 10 mg"] },
                    ]}
                  />
                </div>

                <p>
                  The dose escalation method helps manage nausea, constipation, and other gastrointestinal (GI) issues by not overwhelming your system too quickly. That said, everyone’s response is unique. You may find that 7.5 mg is enough to reach your goals, or you may discuss moving up to 10 mg if you hit a plateau.
                </p>
              </GuideSection>

              <GuideSection id="key-benefits" heading="Key Benefits Backed by Research">
                <p>
                  If you are wondering whether these dosage increments are truly worth navigating, research suggests you could see remarkable gains from sticking with the protocol. A 2024 meta-analysis of seven randomised controlled trials, involving nearly 4,800 individuals, found that once-weekly Mounjaro doses of 5 mg, 10 mg, and 15 mg led to mean weight reductions of approximately −8.07%, −10.79%, and −11.83% respectively [3]. In absolute terms, that equals around −7.5 kg of weight loss at a 5 mg dose and −11.5 kg at 15 mg.
                </p>
                <p>
                  Perhaps more impressive, when participants received the 15 mg dose, 84.3% achieved 5% or more weight loss, with nearly half losing at least 20% of their body weight [3]. Beyond the numbers on the scale, additional cardiometabolic improvements—such as lower blood pressure and better lipid profiles—were also reported. By working with your GP to find the right dose, you may reap these health benefits while minimising adverse reactions.
                </p>
              </GuideSection>

              <GuideSection id="side-effects" heading="Potential Side Effects and Precautions">
                <p>
                  Like any weight loss medication, Mounjaro has associated side effects. The most common are gastrointestinal, including nausea, diarrhoea, vomiting, and constipation, which can be more noticeable when you are starting or increasing your dose. Typically, these issues are mild to moderate and resolve within a few weeks, but they can persist if you escalate dosages too rapidly [1].
                </p>
                <p>
                  Even though serious complications are less common, you should be aware of them. Some studies indicate a possible risk of thyroid tumours in animal trials, although it is unknown whether this extends to humans. To be on the safe side, the FDA advises against using Mounjaro if you have a personal or family history of certain thyroid conditions, such as Multiple Endocrine Neoplasia syndrome type 2 [4]. Further, Mounjaro’s appetite-suppressing qualities can trigger or worsen disordered eating behaviours in vulnerable individuals. For this reason, you will want to keep a close eye on your relationship with food and seek professional help if you notice unhealthy habits.
                </p>
                <p>
                  Always inform your healthcare provider about any pre-existing conditions or current medications. If you experience troublesome side effects—especially severe nausea or symptoms like intense stomach pain—speak to a GP or pharmacist right away. They might suggest a lower dose or a slower escalation strategy to alleviate discomfort and ensure you can keep moving toward your weight loss goals.
                </p>
              </GuideSection>

              <GuideSection id="long-term" heading="Long-Term Success Strategies">
                <p>
                  Mounjaro dosage is just one piece of the puzzle. True, consistent weight loss relies on pairing medication with healthy lifestyle habits and a long-term mindset. Start by tracking what and when you eat, staying active with regular physical exercise, and prioritising sleep for optimal recovery. You might also:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Focus on lean proteins, whole grains, and nutrient-dense vegetables that help you feel full without excess calories.</li>
                  <li>Stay hydrated—drinking water throughout the day can quench thirst and manage hunger cues.</li>
                  <li>Monitor your daily energy levels, because fatigue can interfere with workouts and make it harder to maintain motivation.</li>
                  <li>Seek support if stress or emotional eating patterns emerge, whether that is through therapy, group sessions, or wellness apps.</li>
                </ul>
                <p>
                  Because your body evolves alongside each dosage, you will want to reconnect with your GP periodically. Regular check-ins can confirm you are still on the right dose or identify if you have plateaued. Armed with medical insights and a sensible routine, you can improve your likelihood of success and keep your weight off even after you finish your Mounjaro journey.
                </p>
              </GuideSection>

              <section id="faq" className={`mt-16 pt-10 border-t ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                <h2 className={`text-3xl font-semibold mb-8 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>1. Does Mounjaro Guarantee Weight Loss?</h3>
                    <p>Mounjaro can greatly assist you in reducing appetite and improving blood sugar control, but results vary. Your overall success depends on how well dosage, diet, and exercise work in harmony. Think of Mounjaro as a tool that supports (rather than replaces) a balanced lifestyle.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>2. Can You Skip Dose Increments to See Faster Results?</h3>
                    <p>It is not recommended. Jumping directly to a higher dose before your body adjusts may lead to intense nausea, vomiting, or other discomfort. Gradual increments lower the risk of side effects. Always follow the dose schedule your GP recommends.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>3. What Should You Do If You Experience Severe Nausea?</h3>
                    <p>Speak to your GP if you experience ongoing or severe nausea, especially during the early weeks. They may adjust your dose or advise a slower progression plan. Simple strategies like eating bland, low-fat foods and keeping hydrated can also help.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>4. How Long Do You Stay on Mounjaro?</h3>
                    <p>It varies by individual. Some continue treatment for several months until they reach a healthier weight, then reassess with their GP. Others remain on a maintenance dose for ongoing blood sugar control. Your provider can determine what is best for you and your health goals.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>5. Is It Safe to Use Mounjaro If You Have a Family History of Thyroid Issues?</h3>
                    <p>You should exercise extreme caution. Mounjaro is not recommended for those with a family history of thyroid cancer or Multiple Endocrine Neoplasia syndrome type 2. It is important to discuss your health history in detail with a medical professional before beginning treatment.</p>
                  </div>
                </div>
              </section>

              <GuideSection id="key-takeaways" heading="Key Takeaways">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Mounjaro dosages increase gradually, allowing your body to adjust and reducing side effects.</li>
                  <li>Research indicates significant weight loss improvements, with higher Mounjaro doses leading to greater results for many.</li>
                  <li>The most common adverse effects appear in the GI tract, but you can often manage them by pacing dosage increments and maintaining open communication with your GP.</li>
                  <li>Long-term weight management goes beyond medication—balanced nutrition, regular exercise, and mindful habits all matter.</li>
                  <li>Stay vigilant about thyroid risks and disordered eating, especially at higher doses. Speak to a healthcare professional for personalised advice.</li>
                </ul>
              </GuideSection>

              <GuideSection id="conclusion" heading="Conclusion">
                <p>
                  By understanding how Mounjaro dosage for weight loss unfolds step by step, you set yourself up for the healthiest experience possible. With thorough guidance from your GP, a supportive lifestyle, and a willingness to listen to your body’s signals, you can confidently advance through the dosage stages and move closer to the long-term well-being you seek.
                </p>
                <div className={`mt-8 pt-6 border-t ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                  <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>References</h4>
                  <ul className="text-sm space-y-2 opacity-80">
                    <li>[1] WebMD</li>
                    <li>[2] Nettles Pharmacy</li>
                    <li>[3] PMC</li>
                    <li>[4] Within Health</li>
                  </ul>
                </div>
              </GuideSection>

            </article>

            {/* Share Panel (Using the GuideSharePanel UI from the 'Guides' article context) */}
            <div className="mt-16">
              <GuideSharePanel 
                url={`${siteOrigin()}/blog/mounjaro-dosage-for-weight-loss-facts-you-can-trust`} 
                title="Mounjaro Dosage for Weight Loss: Facts You Can Trust"
                description="Learn the steps of Mounjaro dosage for optimal weight loss, from the 2.5 mg starting dose to long-term maintenance."
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
