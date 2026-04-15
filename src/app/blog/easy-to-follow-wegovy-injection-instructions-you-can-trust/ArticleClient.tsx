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
  { id: "what-is", label: "Understand what Wegovy injection is for" },
  { id: "dosing-schedule", label: "Follow the Wegovy dosing schedule" },
  { id: "store", label: "Store your Wegovy pens correctly" },
  { id: "prepare", label: "Prepare for each weekly injection" },
  { id: "rotate-sites", label: "Choose and rotate your injection sites" },
  { id: "step-by-step", label: "Give yourself the Wegovy injection step by step" },
  { id: "missed-doses", label: "Handle missed Wegovy doses safely" },
  { id: "side-effects", label: "Know the common side effects and warnings" },
  { id: "disposal", label: "Dispose of used Wegovy pens correctly" },
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
            Easy-to-Follow Wegovy Injection Instructions You Can Trust
          </h1>
          <div className={`flex flex-wrap items-center gap-6 text-sm font-medium mb-10 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              14 Apr 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src="https://i.ibb.co.com/TjdVknY/image.png"
            alt="Wegovy Injection Instructions Guide"
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
                A clear set of Wegovy injection instructions can make starting treatment feel much less daunting. You use Wegovy once a week, alongside a reduced calorie diet and more physical activity, to help with weight loss and long term weight management. Below, you will find simple, step by step guidance based on current manufacturer instructions, plus safety tips to discuss with your healthcare professional.
              </p>
              <p>
                This guide supports, but does not replace, the patient leaflet that comes with your pen or the advice of your prescribing clinician. Always follow the directions you are given personally.
              </p>

              <GuideSection darkMode={darkMode} id="what-is" heading="Understand What Wegovy Injection Is For">
                <p>
                  Wegovy contains semaglutide, a GLP 1 receptor agonist that helps to regulate appetite and support weight loss in adults who are obese or overweight with at least one weight related health problem. It is available as a once weekly injection pen and as once daily tablets, both used alongside lifestyle changes.
                </p>
                <p>
                  With the injection, you give yourself a small dose of medicine under the skin. You do not inject into a vein or muscle. Because Wegovy slows stomach emptying, it can affect how quickly some other medicines are absorbed, especially diabetes treatments such as sulfonylureas or insulin, so you need to tell your prescriber about everything you take, including over the counter and herbal products.
                </p>
                <p>
                  You should not use Wegovy injection if you have severe gastroparesis, if you are taking another semaglutide product, or if you are using another GLP 1 medicine at the same time. Safety and effectiveness have not been established in people under 18 years of age, so it is not routinely used in children.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="dosing-schedule" heading="Follow The Wegovy Dosing Schedule">
                <p>
                  Your Wegovy injection instructions will include a dose escalation plan. This gradual increase helps your body adjust and lowers the chance of gastrointestinal side effects such as nausea.
                </p>
                <p>
                  Typically, your clinician will start you at 0.25 mg once weekly and increase the dose roughly every 4 weeks until you reach a maintenance dose. Current guidance suggests:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Start at 0.25 mg once a week</li>
                  <li>Increase in steps every 4 weeks</li>
                  <li>Continue up to 1.7 mg or 2.4 mg once weekly as your maintenance dose, depending on how you respond and tolerate treatment</li>
                </ul>
                <p>
                  If you do not tolerate a dose increase well, your prescriber may advise you to stay on the lower dose for an extra 4 weeks before moving up again. This flexible approach is supported in specialist resources such as novoMEDLINK, which highlight that delaying escalation can reduce gastrointestinal side effects.
                </p>
                <p>
                  It is important to use your injection on the same day each week, at any time of day you prefer. Choose a day you are likely to remember, mark it in your calendar, and set a reminder on your phone to help you stay on track.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="store" heading="Store Your Wegovy Pens Correctly">
                <p>
                  Correct storage is a key part of safe Wegovy injection use. The pens contain a liquid solution that must be kept within specific temperature ranges to remain effective.
                </p>
                <p>
                  Unopened Wegovy pens should usually be stored in the refrigerator at 36°F to 46°F, which is 2°C to 8°C, in their original carton. Keeping them in the box protects the medicine from light. Do not freeze the pens. If a pen has been frozen, you need to discard it, even if it looks normal.
                </p>
                <p>
                  You can keep an unopened pen at room temperature for flexibility. Guidance states that unopened pens with the cap on can be stored between 46°F and 86°F, which is 8°C to 30°C, for up to 28 days, as long as they are kept away from direct heat and light. After 28 days out of the fridge, the pen should be disposed of safely, even if you have not used it.
                </p>
                <p>
                  If you are travelling, an insulated case can help keep the pen within the correct temperature range. Avoid placing the pen directly against ice packs to prevent freezing, and keep it in your carry on luggage so you can control the environment.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="prepare" heading="Prepare For Each Weekly Injection">
                <p>
                  When your injection day arrives, a simple routine will make the process smoother and safer. You can inject Wegovy with or without food, as long as you stick to your weekly schedule.
                </p>
                <p>
                  Start by checking that you have the right pen and dose, especially during dose escalation. Look through the pen window to ensure the liquid is clear and colourless. If it looks cloudy, has particles, or has changed colour, do not use it and contact your pharmacy or clinician.
                </p>
                <p>
                  You can inject the medicine straight from the fridge, but some people find cold fluid uncomfortable. If that is the case for you, you can allow the pen to reach room temperature before use. Do not try to speed this up with a microwave, hot water, or direct heat.
                </p>
                <p>
                  Wash your hands thoroughly with soap and water. Gather your supplies, including the Wegovy pen, an alcohol swab or soap and water for your skin, and a sharps container for disposal afterwards. Having everything ready avoids interruptions in the middle of the injection.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="rotate-sites" heading="Choose And Rotate Your Injection Sites">
                <p>
                  Wegovy injection is given subcutaneously, which means you inject into the fatty layer just under the skin. The main areas recommended are your upper legs, lower stomach, and upper arms.
                </p>
                <p>You can use:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>The front of your thighs, avoiding the knee and groin</li>
                  <li>Your abdomen, at least a few centimetres away from the belly button</li>
                  <li>The back of your upper arms, if someone else is giving the injection for you</li>
                </ul>
                <p>
                  To reduce the risk of skin irritation, bruising, or lumps, you should rotate injection sites. That means not injecting into the exact same spot each week. You can stay within the same general area, for example your abdomen, but move at least a finger width from the previous site.
                </p>
                <p>
                  Avoid any skin that is sore, bruised, scarred, hard, or has stretch marks. If you notice persistent redness or significant pain at a particular site, speak with your healthcare professional for advice.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="step-by-step" heading="Give Yourself The Wegovy Injection Step By Step">
                <p>
                  The Wegovy pen is designed so you do not see a separate needle, and the steps are the same each week. Your Patient Information Leaflet gives detailed diagrams, but the core process is straightforward.
                </p>
                <ul className="list-decimal pl-5 space-y-4">
                  <li>Clean the skin at your chosen injection site with an alcohol swab or wash with soap and water, then let it dry completely.</li>
                  <li>Remove the pen cap and do not touch the injection end. Once the cap is off, do not put it back on.</li>
                  <li>Place the pen firmly against your skin at the chosen site.</li>
                  <li>Press and hold the pen against the skin to start the injection. With Wegovy pens, you should hear two clicks during the injection process.</li>
                  <li>Keep the pen pressed in place for about 5 to 10 seconds, or as instructed, until the yellow bar in the pen window stops moving. This shows you have received the full dose.</li>
                  <li>Lift the pen away from your skin. If a small drop of liquid appears at the site, gently press with a cotton pad if you wish, but do not rub the area.</li>
                </ul>
                <p className="mt-6">
                  You do not need to adjust the dose on the pen yourself. Each Wegovy pen is pre set to deliver the specific dose your prescriber has chosen, such as 0.25 mg, 0.5 mg, 1 mg, 1.7 mg, or 2.4 mg once weekly.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="missed-doses" heading="Handle Missed Wegovy Doses Safely">
                <p>
                  Life happens, and you may occasionally miss a dose. Clear Wegovy injection instructions cover what to do so you can return to your regular schedule safely.
                </p>
                <p>
                  If you miss one dose and your next scheduled injection is more than 48 hours away, you should take the missed dose as soon as you remember. Then continue with your usual weekly schedule.
                </p>
                <p>
                  If you miss one dose and there are less than 48 hours until your next planned injection, you should skip the missed dose. In this situation, you do not double up to catch up. Simply inject your next dose on the usual day.
                </p>
                <p>
                  If you miss two or more doses in a row, you have two main options to discuss with your prescriber. You can resume dosing as scheduled, or you can restart at the lowest dose and follow the step by step escalation again. Restarting at a lower dose can reduce the chance of gastrointestinal symptoms when you begin again, and resources such as novoMEDLINK specifically recommend this approach after multiple missed doses.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="side-effects" heading="Know The Common Side Effects And Warnings">
                <p>
                  Like all medicines, Wegovy can cause side effects. The most commonly reported problems are gastrointestinal, especially when you first start or when the dose increases.
                </p>
                <p>Typical side effects include:</p>
                <ul className="list-disc pl-5 space-y-2 grid grid-cols-1 sm:grid-cols-2">
                  <li>Nausea</li>
                  <li>Diarrhoea</li>
                  <li>Vomiting</li>
                  <li>Constipation</li>
                  <li>Stomach pain or discomfort</li>
                  <li>Bloating, belching or gas</li>
                  <li>Headache</li>
                  <li>Fatigue</li>
                  <li>Dizziness</li>
                  <li>Heartburn or upset stomach</li>
                  <li>Runny nose or sore throat</li>
                </ul>
                <p className="mt-4">
                  Nausea is the most frequently reported gastrointestinal side effect, and research indicates that it is usually mild or moderate, tends to be temporary, and rarely leads to permanent discontinuation. Eating smaller meals, avoiding rich or greasy foods, and staying well hydrated can help ease this while your body adjusts.
                </p>
                <p>
                  More serious risks exist, although they are less common. Wegovy slows stomach emptying, so it can alter the absorption and effectiveness of other medicines, particularly some diabetes drugs that carry a risk of low blood sugar. You should watch for signs of hypoglycaemia if you use sulfonylureas or insulin and discuss adjustments with your clinician.
                </p>
                <p>
                  There is also a warning about possible thyroid tumours, including medullary thyroid carcinoma, associated with semaglutide. You should not use Wegovy if you or your family have a history of medullary thyroid carcinoma or Multiple Endocrine Neoplasia syndrome type 2. If you notice a neck lump, hoarseness, difficulty swallowing, or shortness of breath, seek urgent medical advice.
                </p>
                <p>
                  Wegovy is not suitable if you have severe gastroparesis, because it can worsen gastrointestinal symptoms. You should inform your prescriber about all your medical conditions and all medicines you take, including vitamins and herbal supplements, so they can assess your risks and monitor you appropriately.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="disposal" heading="Dispose Of Used Wegovy Pens Correctly">
                <p>
                  Safe disposal is an important part of your Wegovy injection instructions. Used pens still contain a needle and must not be thrown in normal household rubbish or recycling bins.
                </p>
                <p>After each injection:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Place the used pen straight into an FDA cleared sharps disposal container if you have one, or into a strong, puncture resistant household container with a tight fitting lid.</li>
                  <li>Keep the container out of sight and reach of children and pets.</li>
                </ul>
                <p>
                  You can often request a complimentary sharps disposal container from the medicine manufacturer, and local pharmacies or council services may offer disposal schemes. Follow local guidelines for handing in full sharps containers so they are handled safely.
                </p>
                <p>
                  Never share your Wegovy pen with anyone else, even if the needle is changed. Sharing can transmit infections and is unsafe.
                </p>
              </GuideSection>

              <section id="faq" className={`mt-16 pt-10 border-t ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                <h2 className={`text-3xl font-semibold mb-8 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Frequently Asked Questions About Wegovy Injection Instructions
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Do you have to inject Wegovy with food?</h3>
                    <p>No. Wegovy injections can be given with or without food at any time of day. This is different from Wegovy tablets, which must be taken once daily on an empty stomach with a small amount of water and followed by a 30 minute wait before eating or taking other medicines.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Can you switch between Wegovy injection and tablets?</h3>
                    <p>Switching between the two forms is possible, but it needs medical supervision. Clinical information from novoMEDLINK notes that patients who do not tolerate a 25 mg once daily tablet may consider switching to a 1.7 mg once weekly pen, with dose adjustments as needed. Any change should be planned with your prescriber so dose timing and escalation are handled safely.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>What happens if you inject into the wrong place?</h3>
                    <p>If you accidentally inject into a muscle or an area that is very sore, you might experience more discomfort than usual. As long as the full dose has been given, you usually do not need to repeat it. However, if you are unsure whether you received the dose properly, contact your healthcare professional for personalised advice before using another pen.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>How long can a Wegovy pen stay out of the fridge?</h3>
                    <p>Unopened pens can be kept at room temperature, between 8°C and 30°C, for up to 28 days, provided they are protected from light and not exposed to direct heat. Once this period has passed, the pen must be discarded, even if there is still medicine left.</p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>Is it safe to inject cold Wegovy?</h3>
                    <p>You can inject Wegovy straight from the fridge, and the medicine will still work. If injecting cold fluid feels uncomfortable, you can let the pen come up to room temperature naturally before use. Do not apply external heat and do not leave the pen out longer than allowed in the storage instructions.</p>
                  </div>
                </div>
              </section>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  When you understand your Wegovy injection instructions clearly, the weekly routine becomes much more manageable. You choose a consistent injection day, follow the prescribed dose escalation, store your pens in the right temperature range, and give each subcutaneous injection using a simple, repeatable process.
                </p>
                <p>
                  You also keep track of side effects, rotate your injection sites, and handle missed doses according to the 48 hour guidance, involving your prescriber whenever you are unsure. Combined with a reduced calorie diet and increased physical activity, this careful, informed approach helps you get the most benefit from Wegovy while keeping safety at the centre of your treatment.
                </p>
              </GuideSection>

            </article>

            {/* Share Panel (Using the GuideSharePanel UI from the 'Guides' article context) */}
            <div className="mt-10">
              <GuideSharePanel 
                url={`${siteOrigin()}/blog/easy-to-follow-wegovy-injection-instructions-you-can-trust`} 
                title="Easy-to-Follow Wegovy Injection Instructions You Can Trust"
                description="Follow clear wegovy injection instructions to confidently start your UK weight loss journey today."
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
