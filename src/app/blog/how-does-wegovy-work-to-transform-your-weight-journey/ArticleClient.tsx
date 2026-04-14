"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";

const TOC = [
  { id: "what-is-wegovy", label: "What Wegovy is and who it is for" },
  { id: "how-it-works", label: "How does Wegovy work inside your body?" },
  { id: "how-much-weight", label: "How much weight you might lose on Wegovy" },
  { id: "health-benefits", label: "Cardiovascular and health benefits beyond weight loss" },
  { id: "how-to-take", label: "How you take Wegovy in real life" },
  { id: "side-effects", label: "Side effects, safety and important precautions" },
  { id: "comparisons", label: "Wegovy compared with other GLP 1 options" },
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
            How Does Wegovy Work to Transform Your Weight Journey
          </h1>
          <div className={`flex flex-wrap items-center gap-6 text-sm font-medium mb-10 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              14 Apr 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              5 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src="https://i.ibb.co.com/qYntkdQh/how-does-wegovy-work.png"
            alt="How Wegovy Works Infographic"
          />
        </header>

        {/* CONTENT SPLIT LAYOUT */}
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-16">
          
          {/* LEFT: TOC */}
          {TOC.length > 0 && <GuideTocSidebar toc={TOC} />}

          {/* RIGHT: ARTICLE BODY */}
          <div className="min-w-0 flex-1 max-w-3xl">
            <article className={`space-y-8 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              <p className="text-lg md:text-xl">
                A medication like Wegovy can feel like a big step. Understanding exactly how Wegovy works helps you decide if it fits into your long term weight management plan, especially if you are also comparing it with options such as Mounjaro or other GLP 1 medications.
              </p>
              <p>
                Below, you will see how Wegovy works in your body, what the research shows about weight loss, and what you need to consider before starting.
              </p>

              <GuideSection darkMode={darkMode} id="what-is-wegovy" heading="What Wegovy Is And Who It Is For">
                <p>
                  Wegovy is a prescription weight loss medication that contains semaglutide. Semaglutide belongs to a group of medicines called GLP 1 receptor agonists. These are medicines that mimic one of your body’s natural hormones involved in appetite and blood sugar control.
                </p>
                <p>You may be offered Wegovy if:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You have obesity, with a BMI of 30 or above, or</li>
                  <li>You have overweight, with a BMI of 27 or above, and at least one weight related health problem such as high blood pressure, high cholesterol or type 2 diabetes</li>
                </ul>
                <p>
                  Wegovy is always used alongside a reduced calorie diet and increased physical activity. It is not designed as a quick fix or a stand alone solution. Instead, it is an additional tool to help you stick to lifestyle changes that may have been difficult on their own.
                </p>
                <p>
                  Wegovy is available as a once weekly injection and as a once daily tablet, depending on the licence in your country and what your prescriber recommends.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="how-it-works" heading="How Does Wegovy Work Inside Your Body?">
                <p>To understand how Wegovy works, it helps to look at the hormone it copies.</p>
                
                <h3 className={`text-xl font-semibold mt-8 mb-4 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Imitating your natural GLP 1 hormone</h3>
                <p>When you eat, your gut releases a hormone called GLP 1, which stands for glucagon like peptide 1. This hormone has several important jobs:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>It tells your brain you are getting full</li>
                  <li>It helps your pancreas release insulin after meals</li>
                  <li>It slows down how quickly food leaves your stomach</li>
                </ul>
                <p>Semaglutide in Wegovy is a GLP 1 receptor agonist. That means it attaches to the same receptors that your natural GLP 1 uses. According to Novo Nordisk, Wegovy’s manufacturer, semaglutide is about 94% similar to your natural GLP 1 hormone and acts on areas of the brain that regulate appetite.</p>
                <p>You can think of it as turning up the volume on your fullness signals. Your brain receives a stronger message that you have had enough to eat, even if your portion sizes are smaller than before.</p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Reducing hunger and cravings</h3>
                <p>One of the main reasons you may struggle with weight is constant hunger, intense cravings or feeling unsatisfied after normal portions. Wegovy targets this problem directly.</p>
                <p>By activating GLP 1 receptors in the brain, Wegovy:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Reduces feelings of hunger between meals</li>
                  <li>Helps you feel full sooner during a meal</li>
                  <li>Makes it easier to be satisfied with smaller portions</li>
                </ul>
                <p>Clinical studies and patient reports in 2023 found that people using Wegovy often noticed that they thought about food less and felt more in control of food choices. This effect can make sticking to a calorie deficit more realistic in everyday life.</p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Slowing how quickly your stomach empties</h3>
                <p>Wegovy also slows gastric emptying. This means food takes longer to move from your stomach into your intestines. As a result, you feel fuller for longer after eating.</p>
                <p>This slower movement of food contributes to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fewer spikes and crashes in hunger</li>
                  <li>Less urge to snack shortly after meals</li>
                  <li>A steadier level of energy across the day</li>
                </ul>
                <p>Because Wegovy affects how long food stays in your stomach, it can also affect how your body absorbs other oral medicines. You are advised to tell your healthcare provider about all prescription and over the counter medicines you use so they can decide if any adjustments are needed.</p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Supporting blood sugar and metabolism</h3>
                <p>Semaglutide has well established effects on blood sugar regulation. It helps your pancreas release insulin when blood sugar rises and reduces the liver’s release of glucose. This can lead to lower blood sugar levels and can be particularly useful if you have prediabetes or type 2 diabetes.</p>
                <p>Research on semaglutide for weight management has shown additional metabolic benefits such as:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Improvements in waist circumference and BMI</li>
                  <li>Better control of blood sugar and, in some cases, normalisation of prediabetes</li>
                  <li>Reduced cardiovascular risk factors such as blood pressure and cholesterol</li>
                </ul>
                <p>In some people with metabolic dysfunction associated steatohepatitis (MASH), also known as a severe form of fatty liver disease, Wegovy induced weight loss has been linked to reduced fat buildup in the liver and potential improvements in inflammation and scarring.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="how-much-weight" heading="How Much Weight You Might Lose On Wegovy">
                <p>No medication can promise a specific amount of weight loss for every person. However, large clinical trials give you a realistic picture of what is typical when Wegovy is combined with diet and activity changes.</p>
                
                <h3 className={`text-xl font-semibold mt-8 mb-4 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Weight loss with weekly Wegovy injections</h3>
                <p>In a 68 week study of 1,961 adults with obesity or overweight and weight related medical problems, but without type 2 diabetes, those using the Wegovy 2.4 mg injection lost on average about 35 pounds, which is around 15% of their starting body weight. People on placebo lost about 6 pounds, or 2.5% of their starting weight, while following similar diet and activity guidance.</p>
                <p>Other semaglutide trials, known as STEP 1 to STEP 4 and STEP 8, showed weight reductions of roughly 6.2% to 14.75% more than placebo or another treatment (liraglutide) over 68 weeks. These studies also found:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>76% of adults taking Wegovy achieved at least 5% weight loss</li>
                  <li>60% lost 10% or more</li>
                  <li>47% lost 15% or more</li>
                </ul>
                <p>These results demonstrate clinically meaningful and sustained weight loss for many people, particularly if you have struggled to lose more than a few percent of your body weight with diet and exercise alone.</p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Weight loss with daily Wegovy tablets</h3>
                <p>Wegovy is also available as an oral tablet in some regions. The tablet uses SNAC technology, a compound called salcaprozate sodium, to protect semaglutide from stomach acid and enzymes so that it can be absorbed when taken once daily.</p>
                <p>In a 64 week study of 307 adults in the United States, adults taking Wegovy tablets along with diet and exercise lost on average about 14% of their starting body weight, roughly 33 pounds from an average starting weight of 235 pounds. Those on placebo lost about 2.4% of their starting weight, around 6 pounds, under the same lifestyle advice.</p>
                <p>These figures suggest that both the injectable and oral forms can deliver double digit percentage weight loss when used correctly with lifestyle changes.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="health-benefits" heading="Cardiovascular And Health Benefits Beyond Weight Loss">
                <p>When you lose weight with Wegovy, the benefits usually go beyond the numbers on the scales.</p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Heart and blood vessel protection</h3>
                <p>Excess weight, especially around your waist, increases your risk of heart attack and stroke. Wegovy is currently the only weight loss medication that has been shown to reduce the risk of a major heart event such as heart attack, stroke or death in adults with heart disease and obesity or overweight, when used alongside a reduced calorie diet and physical activity.</p>
                <p>Wegovy can also:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Lower blood pressure</li>
                  <li>Improve cholesterol levels</li>
                  <li>Help manage blood sugar, which reduces pressure on your cardiovascular system</li>
                </ul>
                <p>The exact way Wegovy reduces cardiovascular risk is still being studied, but weight loss, improved metabolic markers and direct effects on blood vessels may all play a part.</p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Effects on liver and overall metabolic health</h3>
                <p>Obesity is closely linked with fatty liver disease. Semaglutide induced weight loss has been associated with:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Reduced fat accumulation in the liver</li>
                  <li>Less inflammation</li>
                  <li>Improvement in fibrosis in people with MASH, provided there is no cirrhosis</li>
                </ul>
                <p>In addition, clinical trials have shown improvements in physical functioning for many participants, although not every measure reached the threshold that researchers consider a minimal important difference.</p>
                <p>Taken together, these changes suggest that Wegovy can support your long term health as well as your weight.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="how-to-take" heading="How You Take Wegovy In Real Life">
                <p>Understanding how Wegovy works is only part of the picture. You also need to know how it fits into day to day life.</p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Weekly injection vs daily tablet</h3>
                <p>Depending on local approvals and your prescriber, you may be offered:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>A once weekly subcutaneous injection of 2.4 mg semaglutide at full dose, or</li>
                  <li>A once daily oral tablet, taken in the morning</li>
                </ul>
                <p>With the injection, you use a pre filled pen that delivers the dose under the skin. You usually start on a lower dose and gradually increase over several weeks so your body can adjust and side effects are more manageable.</p>
                <p>With the tablet, you are advised to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Take it once a day on an empty stomach</li>
                  <li>Swallow it whole with no more than 4 ounces (about 120 ml) of water</li>
                  <li>Wait at least 30 minutes before eating, drinking anything else or taking other oral medicines</li>
                </ul>
                <p>These instructions are important so that the tablet can dissolve and the SNAC technology can help semaglutide cross the stomach lining effectively.</p>
                <p>Your healthcare provider will advise which form suits you and how to step up your dose safely.</p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>What results feel like week by week</h3>
                <p>Wegovy starts working in your body soon after the first dose. Its half life is about 7 days, which means a single injection lasts in your system for around a week. However, noticeable changes in appetite and weight typically take several weeks.</p>
                <p>In the early weeks, you may notice:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Feeling full sooner in meals</li>
                  <li>Reduced interest in snacking</li>
                  <li>A gradual, not dramatic, drop in weight</li>
                </ul>
                <p>Over months, if you stay consistent with doses and lifestyle changes, you may see steady weight loss and improvements in energy, mobility and health markers. Regular check ins with a healthcare professional are essential to track progress and adjust your plan.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="side-effects" heading="Side Effects, Safety And Important Precautions">
                <p>Like all medicines, Wegovy can cause side effects. Knowing what to expect helps you prepare and decide if the benefits outweigh the risks for you.</p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Common side effects</h3>
                <p>The most common side effects of semaglutide, including Wegovy, are gastrointestinal. These include:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Nausea</li>
                  <li>Vomiting</li>
                  <li>Diarrhoea</li>
                  <li>Constipation</li>
                  <li>Abdominal pain</li>
                </ul>
                <p>These are typical for GLP 1 receptor agonists and often occur more frequently than in people on placebo. For many people they are mild to moderate and tend to lessen over time, especially if the dose is increased gradually. Eating smaller meals, avoiding very rich or greasy foods and staying hydrated can help.</p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Serious risks and interactions</h3>
                <p>There are important safety considerations you need to discuss with your prescriber:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Wegovy should not be used with other semaglutide products or any other GLP 1 receptor agonist medicines, to avoid doubling up on similar drugs</li>
                  <li>Wegovy has a boxed warning in its prescribing information regarding a possible risk of thyroid C cell tumours, based mainly on studies in animals. You should inform your doctor if you have a personal or family history of medullary thyroid carcinoma or multiple endocrine neoplasia syndrome type 2</li>
                  <li>Because Wegovy slows gastric emptying, it can alter how your body absorbs some oral medicines. Always inform your healthcare provider about all medicines and supplements you use</li>
                </ul>
                <p>Regular medical check ups are important to monitor your response, side effects and any impact on other health conditions.</p>
                <p>Wegovy is intended to be used in combination with a reduced calorie diet and increased physical activity for chronic weight management, not as a substitute for lifestyle changes.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="comparisons" heading="Wegovy Compared With Other GLP 1 Weight Loss Options">
                <p>If you are in the UK and exploring GLP 1 medications, you might also be considering Mounjaro (tirzepatide) or Ozempic (another semaglutide product). While this article focuses on how Wegovy works, a few key points can guide your comparisons:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>All GLP 1 based medications aim to reduce appetite and slow gastric emptying</li>
                  <li>Wegovy is specifically licensed and dosed for weight management, rather than primarily for diabetes with off label use</li>
                  <li>Clinical trials for Wegovy show clear data on average percentage weight loss and cardiovascular benefit in people with obesity and overweight</li>
                </ul>
                <p>Your choice between Wegovy, Mounjaro or other options will depend on your medical history, other conditions, previous response to treatments and what is available and approved in your region. This decision should be made with a healthcare professional who can balance risks and benefits for your situation.</p>
              </GuideSection>

              <section id="faq" className="mt-16 pt-10 border-t border-slate-200">
                <h2 className={`text-3xl font-semibold mb-8 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Frequently Asked Questions About How Wegovy Works
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>How quickly will I start losing weight on Wegovy?</h3>
                    <p>You may notice changes in appetite within the first few weeks, but weight loss usually builds gradually over several months. In clinical trials, the most significant weight loss was seen over 6 to 12 months and continued up to 68 weeks when treatment and lifestyle changes were maintained.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Can Wegovy help me keep the weight off?</h3>
                    <p>Yes, Wegovy is intended for long term weight management. In studies, people who stayed on Wegovy alongside diet and exercise were more likely to maintain clinically meaningful weight loss. However, if you stop the medication and do not continue with lifestyle changes, there is a risk of regaining weight over time.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Is Wegovy suitable if I have type 2 diabetes?</h3>
                    <p>Semaglutide is used widely for type 2 diabetes, and some people with type 2 diabetes may be offered Wegovy specifically for weight management. Your prescriber will consider any existing diabetes medications, your blood sugar control and your overall cardiovascular risk before recommending Wegovy.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Will I lose muscle as well as fat?</h3>
                    <p>Weight loss with any method can involve some loss of lean mass. However, research suggests that semaglutide reduces body weight primarily by reducing fat mass rather than lean mass. Keeping up resistance exercise and adequate protein intake while on Wegovy can help protect muscle.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Can I use Wegovy together with other weight loss medicines?</h3>
                    <p>You should not use Wegovy with other semaglutide products or any GLP 1 receptor agonists. Combining it with other types of weight loss medicines depends on your individual case and must be decided by your healthcare provider.</p>
                  </div>
                </div>
              </section>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>Wegovy works by amplifying your body’s natural appetite control system. By mimicking the GLP 1 hormone, it reduces hunger, helps you feel full on smaller portions and slows how quickly food leaves your stomach. This makes it easier to stick to a reduced calorie diet and to lose a significant amount of weight over time.</p>
                <p>Clinical trials show that many adults achieve 10% to 15% body weight loss with Wegovy, along with improvements in blood pressure, cholesterol, blood sugar and, in those with heart disease, a reduced risk of major cardiovascular events.</p>
                <p>Wegovy is not a shortcut, and it is not right for everyone. It works best as part of a structured plan that includes dietary changes, physical activity and regular medical monitoring. If you are comparing Wegovy with medicines like Mounjaro and considering cost, eligibility and providers, understanding how Wegovy works gives you a solid foundation for an informed conversation with your healthcare professional.</p>
              </GuideSection>

            </article>

            {/* Share Panel (Using the GuideSharePanel UI from the 'Guides' article context) */}
            <div className="mt-10">
              <GuideSharePanel 
                url={`${siteOrigin()}/blog/how-does-wegovy-work-to-transform-your-weight-journey`} 
                title="How Does Wegovy Work to Transform Your Weight Journey"
                description="Find out how does Wegovy work to kickstart your weight loss, with guides on eligibility, cost and UK providers."
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
