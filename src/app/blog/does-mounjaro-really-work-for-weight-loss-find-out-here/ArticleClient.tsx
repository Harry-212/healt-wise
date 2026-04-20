"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";

const INLINE_MOUNT_WORK_IMG_JOGGING = "/blog/jogging.webp";
const INLINE_MOUNT_WORK_IMG_CONSULTATION = "/blog/consultaion.webp";

const TOC = [
  { id: "explore", label: "Explore Mounjaro For Weight Loss" },
  { id: "mechanism", label: "Understand Its Mechanism Of Action" },
  { id: "side-effects", label: "Review Potential Side Effects" },
  { id: "eligibility", label: "Determine Eligibility And Usage" },
  { id: "lifestyle-changes", label: "Make Lifestyle Changes For Long-Term Results" },
  { id: "faq", label: "Frequently Asked Questions" },
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
            Does Mounjaro Really Work for Weight Loss? Find Out Here
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

          <BlogArticleHeroImage
            src="https://i.ibb.co.com/k2NjLMfp/image.png"
            alt="Mounjaro effectiveness and mechanisms"
          />
          <div
            id="guide-article-hero-end"
            aria-hidden
            className="pointer-events-none h-0 w-full overflow-hidden"
          />
        </header>

        {/* CONTENT SPLIT LAYOUT */}
        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          
          {/* LEFT: TOC */}
          {TOC.length > 0 && (
            <GuideTocSidebar key={TOC.map((t) => t.id).join("-")} toc={TOC} />
          )}

          {/* RIGHT: ARTICLE BODY */}
          <div className="min-w-0 flex-1 max-w-3xl">
            <article className={`space-y-8 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              
              <p className="text-lg md:text-xl">
                You may have seen tirzepatide, sold under the brand name Mounjaro, generating buzz lately as a promising diabetes medication that some people also use off label for significant weight reduction. But how does Mounjaro work for weight loss, and is it right for you? Before jumping in, it is helpful to understand its effects on your body, potential side effects, and the importance of pairing any medical treatment with healthy lifestyle choices.
               For more context, explore our resources on <Link href="/blog/best-weight-loss-treatment-in-london" className="font-medium text-emerald-600 hover:underline">treatment in London</Link>.</p>
              <p>
                Mounjaro was approved by the US Food and Drug Administration (FDA) in 2022 as a treatment for type 2 diabetes, although many adults use it to help with weight management. Mounjaro contains tirzepatide, which is unique because it targets two hormones (GLP 1 and GIP) that regulate blood sugar and appetite. This dual action approach has shown notable results when combined with a balanced diet, exercise, and ongoing support from healthcare professionals.
              </p>

              <GuideSection darkMode={darkMode} id="explore" heading="Explore Mounjaro For Weight Loss">
                <p>
                  Although Mounjaro is officially licensed for type 2 diabetes, you might encounter doctors prescribing it off label for weight loss. This is because clinical studies suggest tirzepatide may lead to significant reductions in body weight for people with obesity or related health risks. According to a meta analysis of 10 randomized controlled trials involving 9,873 patients between 2018 and 2022, individuals taking Mounjaro (tirzepatide) once weekly at 5 mg, 10 mg, or 15 mg experienced dose dependent weight loss that ranged from  7.52 kg to  10.91 kg, which was greater than placebo [1].
                </p>
                <p>
                  This medication works best under close supervision from a healthcare provider. You will usually inject it once a week, and your doctor will monitor dosage adjustments based on your progress and any side effects. Because each person’s needs are different, it is crucial to work with your GP if you are seriously considering Mounjaro as part of your weight management plan.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="mechanism" heading="Understand Its Mechanism Of Action">
                <p>
                  Mounjaro mimics your body’s natural satiety and blood sugar regulating hormones, known as GLP 1 and GIP. Both hormones reduce food intake by signaling the brain that you feel full, and they help slow the speed at which your digestive system empties the stomach. Clinical trials showed that by activating these pathways simultaneously, Mounjaro significantly improves insulin release, enhances insulin sensitivity, curbs appetite, and stabilises blood sugar levels [2].
                </p>
                <p>
                  Because of its effect on gastric emptying, you are likely to stay satisfied longer after eating, which can help you reduce overall calorie intake without feeling too deprived. This dual hormone combination sets Mounjaro apart from other injectables that act on only one hormone, such as semaglutide based medications. In fact, one 2024 study comparing it to Ozempic showed people taking the highest Mounjaro dose (15 mg) lost up to 21% of their body weight, which was around 12 pounds more than those on semaglutide [3].
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="side-effects" heading="Review Potential Side Effects">
                <p>
                  As with any prescription, Mounjaro does not come without risks. Gastrointestinal symptoms are the most commonly reported and tend to occur during the first few weeks of treatment. Mild to moderate side effects can often be managed with dose adjustments, monitoring, and small tweaks to your diet.
                </p>
                <p>Frequent reported side effects include: For more context, explore our resources on <Link href="/blog/mounjaro-weight-loss-benefits-backed-by-science" className="font-medium text-emerald-600 hover:underline">Mounjaro weight loss benefits</Link>.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Nausea</li>
                  <li>Vomiting</li>
                  <li>Diarrhea</li>
                  <li>Reduced appetite</li>
                </ul>
                <p>
                  These digestive issues usually improve as your body adapts. Rare but serious concerns may involve thyroid tumors (observed in animal studies) and potential overdose risks if the dosage is not followed precisely [2]. Always keep an open line of communication with your GP to discuss any ongoing or severe side effects.
                </p>
                <p>
                  When using Mounjaro off label purely for weight management, it is essential to remember that it remains unapproved by the FDA specifically for that purpose. If you experience persistent unpleasant effects, or if you notice changes in your wellbeing that worry you, contact your healthcare provider promptly.
                </p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_MOUNT_WORK_IMG_JOGGING}
                  alt="Exercise and activity alongside Mounjaro for weight loss"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection darkMode={darkMode} id="eligibility" heading="Determine Eligibility And Usage">
                <p>
                  You will typically be considered for Mounjaro if you have type 2 diabetes and need better blood sugar control. However, you might also explore Mounjaro for weight loss if you have a body mass index (BMI) over 30, or over 27 with other obesity related complications like high blood pressure or elevated cholesterol. This aligns with guidelines suggesting that medical weight management should be reserved for individuals who have unsuccessfully tried lifestyle changes alone [4].
                </p>
                <p>
                  In practice, you are likely to begin treatment with a low dose (for instance, 2.5 mg per week) and build up as needed under medical supervision. Because Mounjaro’s effect wears off when it is discontinued, you should look at it as a longer term commitment. If you stop without ongoing lifestyle changes, there is a possibility of regaining lost weight.
                </p>
                <p>
                  Check your GP’s advice on frequency of follow up appointments, along with any recommended blood tests to monitor your response. Consistent check ins help you see if you are on track with your goals and ensure you are tolerating the medication as expected.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="lifestyle-changes" heading="Make Lifestyle Changes For Long-Term Results">
                <p>
                  Mounjaro can provide a helpful push toward your weight management goals, but it does not replace the foundations of good health: balanced nutrition, regular activity, and self care. You might feel fuller faster, yet quality and portion control of your meals remain key to losing weight safely. Focus on high protein foods, complex carbohydrates, and plenty of vegetables to keep both your energy levels and digestion well regulated.
                </p>
                <p>
                  Along with diet, consistent physical exercise is one of your best allies for improved cardiovascular health and sustained weight management. This could take many forms: brisk walks, swimming, or cycling at a moderate pace. Ultimately, find an activity that you enjoy enough to stick with it. To reinforce healthier eating patterns, you may also want to speak with a registered dietitian or therapist, especially if you are prone to emotional eating or have a history of disordered eating habits [2].
                </p>
                <p>
                  If you choose to stop taking Mounjaro eventually, those same healthy routines become even more important. Without medication, you will need to rely on lifestyle strategies and your body’s natural appetite signals for weight control, which can be easier if you have already built consistent eating, exercise, and stress management habits.
                 For more context, explore our resources on <Link href="/wegovy-price-comparison" className="font-medium text-emerald-600 hover:underline">Wegovy price comparison</Link>.</p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_MOUNT_WORK_IMG_CONSULTATION}
                  alt="Consult your GP or specialist about Mounjaro for weight loss"
                  priority={false}
                  showFullImage
                />
              </div>

              <section id="faq" className={`mt-16 pt-10 border-t ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                <h2 className={`text-3xl font-semibold mb-8 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Q: Do I need a prescription to try Mounjaro for weight loss?</h3>
                    <p>A: Yes. Mounjaro is a prescription medication that is typically prescribed for type 2 diabetes. Using it off label for weight loss should always be done under a doctor’s close supervision.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Q: How quickly will I notice results once I start?</h3>
                    <p>A: Many participants in clinical trials began seeing changes in their appetite and initial weight loss within the first few weeks. However, individual progress varies, and you might need adjustments to achieve steady results [1].</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Q: Is Mounjaro FDA-approved for losing weight?</h3>
                    <p>A: Currently, Mounjaro is only FDA approved for type 2 diabetes. Its weight loss benefits come from its mechanism of action, but it remains an off label treatment for obesity and overweight. Guidelines may change with further research and regulatory review.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Q: What if I stop taking Mounjaro?</h3>
                    <p>A: You may experience a return of appetite and a gradual reversal of weight loss if you do not maintain the lifestyle habits that initially supported your progress. This is one reason Mounjaro is considered a longer term therapy by many patients.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Q: How do I manage the digestive side effects?</h3>
                    <p>A: You can often reduce nausea, heartburn, and other gastrointestinal symptoms by opting for smaller, more frequent meals. Focus on a high fibre, protein rich diet, and be sure to stay well hydrated.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Q: When should I see my GP?</h3>
                    <p>A: Consult your GP before starting or stopping Mounjaro. You should also speak with them if you experience any severe side effects, or if you have any questions about dose changes, managing cravings, or your general health.</p>
                  </div>
                </div>
              </section>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  Mounjaro, or tirzepatide, can offer a valuable boost if you struggle with weight management, keeping you fuller for longer and helping lower blood sugar levels in the process. While it shows encouraging results, it is important to remember that any medication is just one part of a healthier, more balanced lifestyle. If you do choose Mounjaro, work closely with your healthcare provider, adopt beneficial eating and exercise habits, and monitor your well being to help ensure lasting success. This information is not a substitute for professional medical advice. If you have further questions or concerns, always seek personalised guidance from your GP or a specialist.
                 For more context, explore our resources on <Link href="/blog/best-weight-loss-treatment-in-manchester" className="font-medium text-emerald-600 hover:underline">treatment in Manchester</Link>.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="references" heading="References">
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>(PLOS ONE)</li>
                  <li>(Within Health)</li>
                  <li>(UCHealth)</li>
                  <li>(The Independent Pharmacy)</li>
                </ol>
              </GuideSection>

            </article>

            {/* Share Panel (Using the GuideSharePanel UI from the 'Guides' article context) */}
            <div className="mt-10">
              <GuideSharePanel 
                url={`${siteOrigin()}/blog/does-mounjaro-really-work-for-weight-loss-find-out-here`} 
                title="Does Mounjaro Really Work for Weight Loss? Find Out Here"
                description="How does Mounjaro work for weight loss? Discover your eligibility, costs and UK providers in one guide."
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
