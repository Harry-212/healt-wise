"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";

const INLINE_WEGOVY_COST_IMG_1 =
  "/blog/The%20Truth%20About%20Wegovy%20Weight%20Loss%20Medication%20Costs%20in%20the%20UK%202.webp";
const INLINE_WEGOVY_COST_IMG_2 =
  "/blog/The%20Truth%20About%20Wegovy%20Weight%20Loss%20Medication%20Costs%20in%20the%20UK.webp";

const TOC = [
  { id: "what-is-wegovy", label: "What Wegovy weight loss medication is" },
  { id: "how-prescribed", label: "How Wegovy is prescribed and taken" },
  { id: "factors-costs", label: "Factors that affect Wegovy costs in the UK" },
  { id: "benefits-risks", label: "Benefits, risks, and what you are really paying for" },
  { id: "comparing-options", label: "Comparing Wegovy with other options" },
  { id: "how-to-decide", label: "How to decide if Wegovy is worth the cost for you" },
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
            The Truth About Wegovy Weight Loss Medication Costs in the UK
          </h1>
          <div className={`flex flex-wrap items-center gap-6 text-sm font-medium mb-10 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              14 Apr 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              9 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src="https://i.ibb.co.com/Ndr2MsY9/image.png"
            alt="The Truth About Wegovy Weight Loss Medication Costs in the UK"
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
                A new weight loss medication like Wegovy® can sound promising, but the costs, eligibility rules, and UK availability are often confusing. If you are comparing Wegovy weight loss medication with other options and trying to work out what you might really pay, it helps to break things down step by step.
               For more context, explore our resources on <Link href="/blog/mounjaro-weight-loss-benefits-backed-by-science" className="font-medium text-emerald-600 hover:underline">Mounjaro weight loss benefits</Link>.</p>
              <p>
                This guide walks you through how Wegovy works, what affects the price you pay in the UK, and how to decide if it is a good fit for you financially as well as medically.
              </p>

              <GuideSection darkMode={darkMode} id="what-is-wegovy" heading="What Wegovy Weight Loss Medication Is">
                <p>
                  Wegovy® (semaglutide) is a prescription weight loss medicine used alongside a reduced calorie diet and increased physical activity. It is licensed for adults with obesity, or who are overweight with at least one weight related medical problem.
                </p>
                <p>
                  Semaglutide is a GLP 1 receptor agonist. It mimics a hormone that helps regulate appetite and calorie intake, so you tend to feel full sooner and less interested in snacking. Wegovy is available as a once weekly self injected pen, and in some studies as a once daily pill, although the approved formats and availability can differ by country.
                </p>
                <p>
                  In major clinical trials, adults taking Wegovy along with lifestyle changes lost significantly more weight than those on placebo. For example, in the STEP 5 trial, adults on Wegovy injection 2.4 mg lost an average of 15.2% of their body weight at 104 weeks, compared with 2.6% for placebo. Around 36.1% of people taking Wegovy maintained at least 20% weight loss at 2 years, compared with 2.3% of those on placebo.
                </p>
                <p>
                  Other trials of Wegovy tablets have shown similar patterns. In the OASIS 4 trial of once daily Wegovy tablets 25 mg plus diet and exercise, adults with obesity or overweight and weight related medical problems lost 13.6% of their starting weight at 64 weeks, compared with 2.4% in the placebo group. In a 64 week US study, adults taking the Wegovy pill lost on average 14% of their starting weight, compared with 2.4% on placebo.
                </p>
                <p>
                  Wegovy also has evidence for cardiometabolic benefits, for example reduced waist circumference, lower systolic blood pressure, and improvements in triglycerides and A1c in STEP 5. It is the only weight loss medication proven to help reduce the risk of major heart events, such as heart attack, stroke, or death in adults with heart disease and obesity or overweight, when used with diet and increased physical activity. However, it is not licensed specifically to treat high blood pressure, type 2 diabetes, or high cholesterol, so those conditions still need their own management.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="how-prescribed" heading="How Wegovy Is Prescribed And Taken">
                <p>
                  The way you take Wegovy affects cost, because the dose is increased gradually. You start lower and build up to a maintenance dose that controls appetite effectively, which means your prescription strength and therefore price change over time.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Typical Wegovy injection schedule</h3>
                <p>
                  Wegovy injection is given once a week using a prefilled pen. The dose usually starts at 0.25 mg once weekly and increases every 4 weeks as your body adapts, until you reach a maintenance dose of 1.7 mg or 2.4 mg, if tolerated. Common injection sites include the upper legs, lower stomach, or upper arms. You are advised to rotate injection sites to reduce irritation, and the injection itself usually takes around 5 to 10 seconds.
                </p>
                <p>
                  Because the pens contain different fixed doses, the cost during the first few months can be lower. Once you move onto the higher maintenance dose, the monthly cost typically rises.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Wegovy pill dosing</h3>
                <p>
                  In trials, Wegovy pill is a once daily tablet that you take with a reduced calorie diet and increased physical activity. The dose starts at 1.5 mg once daily, then increases about every 30 days until reaching 25 mg, again to help your body adjust and reduce side effects.
                </p>
                <p>
                  The tablet uses SNAC technology, salcaprozate sodium, which protects semaglutide from stomach acid and enzymes so it can be absorbed into the bloodstream when taken by mouth.
                </p>
                <p>
                  As of now, Wegovy tablets are not as widely available as the treatment in all markets, so you will usually find more pricing information for the weekly pen.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="factors-costs" heading="Factors That Affect Wegovy Costs In The UK">
                <p>
                  The truth is that there is no single “Wegovy price” in the UK. What you pay depends on several moving parts that include your eligibility, where you get your prescription, and your dose.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>1. NHS eligibility versus private treatment</h3>
                <p>The biggest cost difference is whether you are eligible on the NHS or paying privately.</p>
                <p>
                  On the NHS, patients do not typically see the full list price. Instead, you pay standard prescription charges in England, or no charge in Scotland, Wales, and Northern Ireland, if Wegovy is prescribed for you. However, Wegovy access on the NHS is limited and prioritised for people with obesity and specific health risks, according to local criteria and NICE guidance. Not everyone who wants Wegovy for weight loss will meet those thresholds, even if they are struggling with their weight.
                 For more context, explore our resources on <Link href="/helpful-guides/mounjaro-weight-loss-injection-uk" className="font-medium text-emerald-600 hover:underline">Mounjaro weight loss treatment UK</Link>.</p>
                <p>
                  If you do not qualify, you are likely to look at private weight management clinics or online prescribing services, which set their own pricing structures.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>2. Starting dose versus maintenance dose</h3>
                <p>
                  You will usually spend less during the titration phase when you are on lower doses such as 0.25 mg or 0.5 mg once a week. Costs usually rise once you reach a higher weekly dose such as 1.7 mg or 2.4 mg, because you are using more medicine each month.
                </p>
                <p>
                  This is why some people are surprised when their first 1 or 2 months feel relatively affordable, but then the monthly cost increases as soon as they reach maintenance dosing. When you budget, it helps to base your figures on the price of the likely long term dose, not the starting one.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>3. Provider and package type</h3>
                <p>
                  Private providers sometimes offer Wegovy as part of a structured programme rather than a medicine only subscription. You might see:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Medication only packages</li>
                  <li>Medication plus online check ins</li>
                  <li>Full weight management programmes with dietitian or health coach support</li>
                </ul>
                <p>
                  The more hands on support you receive, the higher the overall monthly price is likely to be, even if the medicine itself costs the same. On the other hand, extra support may help you use Wegovy more effectively and safely, so it is worth weighing value, not just headline price.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>4. Monitoring and additional tests</h3>
                <p>
                  Although not always mandatory, some clinicians will recommend blood tests or health checks before and during treatment, especially if you have conditions such as type 2 diabetes, sleep apnoea, or cardiovascular disease. These checks can add to overall costs, especially if they are not covered by the NHS or private insurance.
                </p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_WEGOVY_COST_IMG_1}
                  alt="Wegovy weight loss medication costs in the UK — pricing and factors"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection darkMode={darkMode} id="benefits-risks" heading="Benefits, Risks, And What You Are Really Paying For">
                <p>
                  When you look at monthly costs in isolation, Wegovy weight loss medication can seem expensive. To get a clearer picture, it helps to understand what you are actually buying and the potential trade offs.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Evidence for weight loss and health improvements</h3>
                <p>Compared with lifestyle changes alone, Wegovy has shown:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Average weight loss of around 13.6% to 15.2% in long term trials, compared with about 2% to 3% on placebo</li>
                  <li>A higher chance of losing at least 5%, 10%, 15%, and even 20% of your starting weight</li>
                </ul>
                <p>In the 64 week pill study:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>76% of adults on Wegovy pill lost 5% or more of their body weight, compared with 31% on placebo</li>
                  <li>60% lost 10% or more, compared with 14% on placebo</li>
                  <li>47% lost 15% or more, compared with 6% on placebo</li>
                  <li>Around 28% achieved 20% or more weight loss, compared with 3% in the placebo group</li>
                </ul>
                <p>
                  Similar patterns are seen with the treatment, and real world observational data from the WeGoTogether® study suggests that people in clinical practice can also lose a significant amount of weight, although that study relies on self reported data and has no control group.
                </p>
                <p>
                  Some of the STEP 5 participants also saw improvements in waist circumference, blood pressure, triglycerides, and A1c, although Wegovy is not indicated to treat hypertension, diabetes, or dyslipidaemia. Wegovy is unique as the only weight loss medication proven to reduce the risk of major cardiovascular events, such as heart attack, stroke, or death in adults who already have heart disease with obesity or overweight.
                </p>
                <p>
                  In practice, this means that while you are paying for the medicine, you may also be gaining better control of appetite, improved mobility, and a lower risk profile for serious heart related events, especially if you are in a higher risk group.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Side effects and safety considerations</h3>
                <p>Cost is not just financial. You also need to factor in how Wegovy may affect how you feel day to day. Common side effects include:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Nausea, vomiting, diarrhoea or constipation</li>
                  <li>Abdominal or stomach pain, bloating, gas, belching, heartburn</li>
                  <li>Headache, fatigue, dizziness, upset stomach</li>
                  <li>Changes in skin sensations</li>
                  <li>Low blood sugar in people with type 2 diabetes</li>
                  <li>Hair loss</li>
                  <li>Symptoms similar to a mild cold such as runny nose or sore throat in some safety reports</li>
                </ul>
                <p>
                  Most side effects are gastrointestinal and tend to improve over time as your dose increases gradually. However, serious side effects can occur such as pancreatitis, gallbladder problems, and possible thyroid tumours. In animal studies, semaglutide and similar medicines caused thyroid tumours, including cancer. It is not known if this happens in humans, but Wegovy is contraindicated if you or a family member has medullary thyroid carcinoma or Multiple Endocrine Neoplasia syndrome type 2.
                </p>
                <p>
                  Wegovy slows stomach emptying, which can affect the absorption and effectiveness of some medicines, particularly diabetes drugs like sulfonylureas or insulin, and this may increase the risk of low blood sugar. If you are on these medicines, you will need close medical supervision and education on recognising and managing hypoglycaemia.
                 For more context, explore our resources on <Link href="/blog/best-weight-loss-treatment-in-birmingham" className="font-medium text-emerald-600 hover:underline">clinics in Birmingham</Link>.</p>
                <p>
                  Wegovy should not be used with any other semaglutide containing products or GLP 1 receptor agonists, and it is not known to be safe or effective in people under 18 years for weight management.
                </p>
                <p>
                  Considering all of this, part of what you pay for with a reputable UK provider is careful assessment of your medical history, regular monitoring, and guidance on side effects, not just the box of pens.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="comparing-options" heading="Comparing Wegovy With Other Options">
                <p>
                  You may be weighing up Wegovy against other medications such as tirzepatide (for example Mounjaro) or older weight loss drugs, or even against lifestyle change alone.
                </p>
                <p>A simple way to think about it is:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You are not just comparing monthly prices, you are comparing likely results, side effect profiles, medical oversight, and how sustainable each approach feels for you.</li>
                </ul>
                <p>
                  Some people will achieve similar weight loss through structured lifestyle programmes without medication, especially if they are able to commit time and support to those changes. Others find that a GLP 1 medicine helps them control appetite enough to make long term changes stick.
                </p>
                <p>
                  If you have known heart disease as well as obesity or overweight, the additional evidence that Wegovy can reduce major cardiovascular events might be highly relevant to you, and may justify a higher price than a drug that does not carry that benefit.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="how-to-decide" heading="How To Decide If Wegovy Is Worth The Cost For You">
                <p>Working out whether Wegovy is “worth it” is a personal decision, but there are some sensible questions to ask yourself.</p>

                <ul className="list-disc pl-5 space-y-6 mt-6">
                  <li>
                    <strong className={`block mb-1 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Do you meet medical criteria?</strong>
                    You will usually need a BMI in the obesity range, or overweight with at least one weight related medical problem, to be considered for Wegovy. A healthcare professional will assess this.
                  </li>
                  <li>
                    <strong className={`block mb-1 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Can you afford the maintenance dose price long term?</strong>
                    Assuming you respond well and tolerate the medicine, you may need to stay on it for an extended period to maintain weight loss. In trials like STEP 4, people who continued Wegovy after an initial 20 week run in period saw additional weight loss of 14.8% between week 20 and week 68, compared with a shift towards weight regain in the placebo group. Stopping suddenly may lead to weight regain, so it is sensible to budget for more than just a few months.
                  </li>
                  <li>
                    <strong className={`block mb-1 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Are you ready to make lifestyle changes alongside medication?</strong>
                    Clinical trials are based on Wegovy plus diet and exercise. Real patients using Wegovy since 2023 have reported significant weight loss and better appetite control, such as losing around 50 pounds, or 17% of starting body weight over two years, when they combined the medicine with lifestyle changes. Without those changes, you may not see the full benefit.
                  </li>
                  <li>
                    <strong className={`block mb-1 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Do you understand the side effects and risks?</strong>
                    You should feel comfortable discussing nausea, digestive issues, and rarer but serious risks with your clinician. If you already have complex health conditions, this conversation is particularly important.
                  </li>
                  <li>
                    <strong className={`block mb-1 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>How does Wegovy fit with your long term health goals?</strong>
                    If your main priority is reducing your risk of heart attack or stroke and you already live with heart disease, Wegovy’s cardiovascular data may be a key factor. If your priority is losing a small amount of weight quickly, it may be less suitable.
                  </li>
                </ul>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_WEGOVY_COST_IMG_2}
                  alt="The truth about Wegovy costs — NHS versus private and budgeting"
                  priority={false}
                  showFullImage
                />
              </div>

              <section id="faq" className={`mt-16 pt-10 border-t ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                <h2 className={`text-3xl font-semibold mb-8 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Frequently Asked Questions About Wegovy And Cost
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Is Wegovy available on the NHS for weight loss?</h3>
                    <p>Wegovy can be prescribed in the UK under NHS criteria for adults with obesity and specific health risks, in line with guidelines. Access is limited and prioritised, and waiting lists or strict eligibility rules may apply. If you do not meet the criteria, you would usually need to seek private treatment.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>How long will I need to stay on Wegovy?</h3>
                    <p>Trials such as STEP 4 and STEP 5 have followed people for 1 to 2 years or more, and show that staying on Wegovy helps sustain and further improve weight loss, while stopping it tends to increase the risk of weight regain. Your clinician will review progress regularly, but you should prepare for Wegovy to be a medium to long term treatment, not a short course.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Can I switch between Wegovy injection and pill?</h3>
                    <p>Both injectable and tablet forms contain semaglutide and have shown weight loss benefits in trials, but they are not simply interchangeable, and availability of the pill differs across countries. Any switch would need to be supervised by a clinician who can adjust the dose safely and monitor side effects.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>What if I miss a dose?</h3>
                    <p>Treatment instructions can vary slightly, so your prescribing information will give the exact steps. In general, missing an occasional dose might cause some fluctuations in appetite or side effects once you restart. If you miss doses regularly, your clinician may need to adjust your plan.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Is Wegovy safe if I have diabetes or heart disease?</h3>
                    <p>Wegovy has been studied in adults with obesity or overweight, including many with type 2 diabetes and cardiovascular risk factors. It may reduce the risk of major heart events in adults with known heart disease and excess weight. However, if you are on other diabetes medicines such as insulin or sulfonylureas, your risk of low blood sugar can increase, so you need careful monitoring and dose adjustments. It is essential to discuss your full medical history with your clinician before starting.</p>
                  </div>
                </div>
              </section>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  Wegovy weight loss medication offers strong evidence for significant and sustained weight loss, along with unique data on reducing major heart events in people with heart disease and excess weight. For many adults in the UK, especially those who have tried for years to lose weight, that can be life changing.
                </p>
                <p>
                  However, the full truth about Wegovy’s cost is that you are paying for more than a pen or pill. You are investing in a long term medical treatment, ongoing monitoring, and support to change your lifestyle. Your final monthly spend depends on whether you access it via the NHS or privately, which dose you are on, and how comprehensive the programme around it is.
                </p>
                <p>
                  If you are considering Wegovy, a practical next step is to speak to a healthcare professional about your eligibility, medical history, and budget. With clear information and realistic expectations, you can decide whether this particular medication fits your health goals and your finances, or whether another weight management route might serve you better.
                 For more context, explore our resources on <Link href="/blog/best-weight-loss-treatment-in-manchester" className="font-medium text-emerald-600 hover:underline">treatment in Manchester</Link>.</p>
              </GuideSection>

            </article>

            {/* Share Panel (Using the GuideSharePanel UI from the 'Guides' article context) */}
            <div className="mt-10">
              <GuideSharePanel 
                url={`${siteOrigin()}/blog/the-truth-about-wegovy-weight-loss-medication-costs-in-the-uk`} 
                title="The Truth About Wegovy Weight Loss Medication Costs in the UK"
                description="Discover real UK costs for wegovy weight loss medication, see if you qualify and compare providers today."
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
