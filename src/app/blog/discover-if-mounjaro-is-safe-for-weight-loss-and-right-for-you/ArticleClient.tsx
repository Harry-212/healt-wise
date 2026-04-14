"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";

const TOC = [
  { id: "purpose", label: "Understand Mounjaro’s Purpose" },
  { id: "evaluate-safety", label: "Evaluate Its Safety For Weight Loss" },
  { id: "health-risks", label: "Potential Side Effects And Health Risks" },
  { id: "real-stories", label: "Real People Share Their Stories" },
  { id: "informed-use", label: "Take Steps Toward Informed Use" },
  { id: "faq", label: "FAQs About Mounjaro For Weight Loss" },
  { id: "references", label: "References" }
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
            Discover If Mounjaro Is Safe for Weight Loss and Right for You
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
              src="https://i.ibb.co.com/xqyv8wc3/image.png"
              alt="Mounjaro safety verification check"
              fill
              unoptimized
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
              
              <GuideSection id="purpose" heading="Understand Mounjaro’s Purpose">
                <p>
                  Mounjaro, known by its generic name tirzepatide, is a medication originally approved to help adults with type 2 diabetes manage their blood sugar levels. Its unique formulation targets two different hormone receptors to regulate appetite, slow digestion, and enhance insulin function [1]. Although its primary purpose is diabetes control, many people are also curious about its potential for weight management.
                </p>
                <p>
                  Recently, there has been interest in prescribing Mounjaro off-label solely for weight loss. The rationale comes from clinical observations indicating that patients often experience significant reductions in body weight along with improved blood sugar control. However, if you are considering this medication to support your weight loss goals, it is vital to understand its risks, benefits, and place in a holistic plan that includes diet and exercise.
                </p>
              </GuideSection>

              <GuideSection id="evaluate-safety" heading="Evaluate Its Safety For Weight Loss">
                <p>
                  Before starting any medication, you want to know if it is safe and effective. Mounjaro’s safety profile for weight loss is still being evaluated, but early clinical trials for people with obesity suggest promising outcomes. In one study, patients receiving higher doses lost an average of up to 21 percent of their body weight [2]. Another study comparing tirzepatide to existing treatments, such as GLP-1 receptor agonists, found that tirzepatide offered slightly enhanced weight loss results without a major spike in serious side effects [3].
                </p>
                <p>
                  However, the evidence largely comes from pharmaceutical-sponsored research and relatively short-term trials. The FDA granted Mounjaro official approval for diabetes but not initially for weight management. This changed somewhat with the recent approval of Zepbound (another form of tirzepatide) for chronic weight management, which signals increased acceptance within the medical community [4]. Nonetheless, you should speak to your GP about whether Mounjaro is appropriate for your situation, especially if you have underlying health conditions.
                </p>
              </GuideSection>

              <GuideSection id="health-risks" heading="Potential Side Effects And Health Risks">
                <p>
                  Like any medication, Mounjaro comes with risks. The most common side effects reported by patients include:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Nausea or vomiting</li>
                  <li>Diarrhoea or constipation</li>
                  <li>Reduced appetite</li>
                  <li>Indigestion or acid reflux</li>
                </ul>
                <p>
                  These gastrointestinal symptoms may ease as your body adjusts, but they can be uncomfortable in the early stages. Some individuals also experience fatigue or headaches. More serious risks, such as pancreatitis or gallbladder disease, remain relatively rare but can occur [5].
                </p>
                <p>
                  Another concern is the possibility of thyroid C-cell tumours. Animal studies discovered an increased risk of this type of tumour, although it is not confirmed in humans [6]. Mounjaro is therefore not recommended for anyone with a personal or family history of medullary thyroid cancer or Multiple Endocrine Neoplasia syndrome type 2. If you have thyroid concerns, make sure your doctor is aware before starting any injections.
                </p>
              </GuideSection>

              <GuideSection id="real-stories" heading="Real People Share Their Stories">
                <p>
                  You may find it helpful to look at the experiences of others who have taken Mounjaro for weight loss. According to user reviews, many appreciate the reduced appetite, improved energy, and steady weight decline once they reach a stable dose [7]. A 58-year-old woman reportedly lost more than 50 lbs and noticed improvements in her blood pressure, while other people have claimed triple-digit weight loss when Mounjaro was combined with lifestyle changes.
                </p>
                <p>
                  It is important to remember that everyone’s body reacts differently. Some individuals breeze through treatment with minimal side effects, while others struggle with persistent nausea. If you decide to use Mounjaro, tracking your body’s response and maintaining clear communication with your GP can improve the likelihood of a successful outcome.
                </p>
              </GuideSection>

              <GuideSection id="informed-use" heading="Take Steps Toward Informed Use">
                <p>
                  If you are thinking of starting Mounjaro, it is wise to adopt a broader, long-term plan instead of treating the medication as a quick fix. Here are a few areas to focus on:
                </p>
                <ul className="list-disc pl-5 space-y-6 mt-6">
                  <li>
                    <strong className={`block mb-1 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Consult your GP regularly.</strong>
                    Before scheduling your first dose, undergo a thorough check-up. Monitor your progress and review your results regularly to address any abnormalities right away.
                  </li>
                  <li>
                    <strong className={`block mb-1 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Incorporate lifestyle changes.</strong>
                    Medications can give you a needed boost, but sustaining weight loss long term requires balanced meals, regular movement, and stress management. Consider specific goals, such as brisk walks after dinner or adding more vegetables to your plate.
                  </li>
                  <li>
                    <strong className={`block mb-1 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Track your mental health.</strong>
                    Some medications affecting appetite can lead to disordered eating patterns if taken recklessly. Be mindful of your emotional well-being and seek professional help if you experience signs of depression, excessive anxiety, or obsessive thoughts about weight.
                  </li>
                  <li>
                    <strong className={`block mb-1 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Discuss dose adjustments.</strong>
                    Lower starting doses often help you ease into treatment with fewer side effects. If certain side effects or potential health issues develop, prompt dose adjustments can help safeguard your progress.
                  </li>
                </ul>
                <p className="mt-6">
                  A single tool rarely solves all weight concerns. Yet, if used responsibly, Mounjaro could be part of a well-rounded strategy that provides a powerful push toward a healthier future.
                </p>
              </GuideSection>

              <section id="faq" className={`mt-16 pt-10 border-t ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                <h2 className={`text-3xl font-semibold mb-8 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  FAQs About Mounjaro For Weight Loss
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>1. Is Mounjaro Officially Approved For Weight Loss?</h3>
                    <p>In the United States, Mounjaro was originally approved for managing type 2 diabetes. While it has shown promise in weight management, it is only now gaining recognition in that area, partly due to the FDA’s recent approval of Zepbound for obesity [4]. In the UK, your GP may prescribe it off-label if they believe benefits outweigh potential risks.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>2. How Does Mounjaro Cause Weight Loss?</h3>
                    <p>Mounjaro helps regulate two hormones that control how quickly food leaves your stomach and how insulin is released. You typically feel full sooner and consume fewer calories. This can translate to steady weight loss over months, especially when paired with a healthy diet and exercise.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>3. Who Should Avoid Mounjaro?</h3>
                    <p>People with a history of medullary thyroid cancer or Multiple Endocrine Neoplasia syndrome type 2 should avoid Mounjaro. It is also important to discuss any existing gallbladder or pancreatic problems with your GP beforehand [6].</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>4. Do You Need A Prescription For Mounjaro?</h3>
                    <p>Yes. Mounjaro requires a prescription from a qualified healthcare provider. Your GP will determine whether this medication is suitable based on your weight, overall health status, and medical history.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>5. Can You Stop Mounjaro After Reaching Your Goal Weight?</h3>
                    <p>You could discontinue Mounjaro after consulting your GP, but be aware that weight regain is common if you stop medication abruptly without an alternative strategy in place. A plan to maintain healthier habits is essential for sustaining any weight you have lost.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>6. Are Lifestyle Changes Still Necessary?</h3>
                    <p>Absolutely. While Mounjaro may help control hunger, lifestyle adjustments remain crucial for long-term stability. Regular physical activity, balanced nutrition, and mental health support all reinforce the medication’s benefits and reduce the likelihood of rebound weight gain.</p>
                  </div>
                </div>

                <p className="mt-8">
                  Mounjaro can be a valuable ally in your weight loss journey, but it is not a standalone solution. Working closely with your GP, setting realistic expectations, and focusing on sustainable lifestyle changes can help you decide if Mounjaro is safe for weight loss and meets your needs. If you are in doubt, seek guidance from qualified healthcare professionals who can help you choose a plan that aligns with your current health and future goals.
                </p>
              </section>

              <GuideSection id="references" heading="References">
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>(FDA)</li>
                  <li>(UCHealth)</li>
                  <li>(PLOS ONE)</li>
                  <li>(FDA)</li>
                  <li>(WebMD)</li>
                  <li>(Within Health)</li>
                  <li>(Drugs.com)</li>
                </ol>
              </GuideSection>

            </article>

            {/* Share Panel (Using the GuideSharePanel UI from the 'Guides' article context) */}
            <div className="mt-16">
              <GuideSharePanel 
                url={`${siteOrigin()}/blog/discover-if-mounjaro-is-safe-for-weight-loss-and-right-for-you`} 
                title="Discover If Mounjaro Is Safe for Weight Loss and Right for You"
                description="Wondering is mounjaro safe for weight loss? Get your UK eligibility, cost & provider insights before deciding."
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
