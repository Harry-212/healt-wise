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
  { id: "understanding", label: "Understanding Mounjaro" },
  { id: "mechanism", label: "Mounjaro mechanism of action" },
  { id: "common", label: "Common side effects" },
  { id: "less-common", label: "Less common side effects" },
  { id: "rare", label: "Rare side effects" },
  { id: "strategies", label: "Strategies for managing side effects" },
  { id: "when-to-seek-help", label: "When to seek medical help" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "conclusion", label: "Conclusion" },
];

const HERO_IMAGE = "/blog/mounjaro side effects.webp";
const CONTENT_IMAGE = "/blog/mounjaro effect.webp";

function SideEffectsTable({ darkMode }: { darkMode: boolean }) {
  const cell = darkMode ? "border-slate-700 text-slate-300" : "border-slate-200 text-slate-700";
  const head = darkMode ? "bg-slate-900 text-slate-200" : "bg-slate-50 text-slate-900";
  const wrap = darkMode ? "border-slate-700" : "border-slate-200/80";
  return (
    <div
      className={`my-6 w-full min-w-0 max-w-full overflow-x-auto overscroll-x-contain rounded-xl border [-webkit-overflow-scrolling:touch] ${wrap}`}
    >
      <table className="w-full min-w-[640px] border-collapse text-left text-xs sm:text-sm">
        <thead>
          <tr className={head}>
            <th className={`border-b px-3 py-2 font-semibold ${cell}`}>Side effect category</th>
            <th className={`border-b px-3 py-2 font-semibold ${cell}`}>Frequency</th>
            <th className={`border-b px-3 py-2 font-semibold ${cell}`}>Typical management</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`border-b px-3 py-2 ${cell}`}>Gastrointestinal issues</td>
            <td className={`border-b px-3 py-2 ${cell}`}>Very common</td>
            <td className={`border-b px-3 py-2 ${cell}`}>Small meals, hydration, dose adjustment</td>
          </tr>
          <tr>
            <td className={`border-b px-3 py-2 ${cell}`}>Injection site reactions</td>
            <td className={`border-b px-3 py-2 ${cell}`}>Common</td>
            <td className={`border-b px-3 py-2 ${cell}`}>Rotate sites, cool compress</td>
          </tr>
          <tr>
            <td className={`border-b px-3 py-2 ${cell}`}>Headache and fatigue</td>
            <td className={`border-b px-3 py-2 ${cell}`}>Common</td>
            <td className={`border-b px-3 py-2 ${cell}`}>Monitor glucose, rest, hydrate</td>
          </tr>
          <tr>
            <td className={`border-b px-3 py-2 ${cell}`}>Hypoglycaemia</td>
            <td className={`border-b px-3 py-2 ${cell}`}>Less common</td>
            <td className={`border-b px-3 py-2 ${cell}`}>Adjust insulin, regular glucose monitoring</td>
          </tr>
          <tr>
            <td className={`border-b px-3 py-2 ${cell}`}>Gallbladder disorders</td>
            <td className={`border-b px-3 py-2 ${cell}`}>Less common</td>
            <td className={`border-b px-3 py-2 ${cell}`}>Seek medical evaluation</td>
          </tr>
          <tr>
            <td className={`border-b px-3 py-2 ${cell}`}>Pancreatitis</td>
            <td className={`border-b px-3 py-2 ${cell}`}>Rare</td>
            <td className={`border-b px-3 py-2 ${cell}`}>Stop treatment, emergency care</td>
          </tr>
          <tr>
            <td className={`px-3 py-2 ${cell}`}>Kidney impairment</td>
            <td className={`px-3 py-2 ${cell}`}>Rare</td>
            <td className={`px-3 py-2 ${cell}`}>Hydration, renal function monitoring</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);
  const shareUrl = `${siteOrigin()}/blog/the-surprising-mounjaro-side-effects-you-might-experience`;

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`w-full font-sans transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-300" : "bg-white text-slate-800"}`}
    >
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        {/* TOP NAVIGATION HEADER */}
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
              onClick={toggleDarkMode}
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

        {/* HERO HEADER */}
        <header className="mb-12">
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            The Surprising Mounjaro Side Effects You Might Experience
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              24 Apr 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              11 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_IMAGE}
            alt="Mounjaro side effects and how to manage them"
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
                Since its approval for treating type 2 diabetes in adults, Mounjaro has become a popular option both for blood sugar control and weight management in the UK. Like all medications, it carries a range of possible adverse reactions, known as mounjaro side effects, that you should be aware of before and during treatment. In this ultimate guide, we unpack the most common side effects you might experience, explore less frequent and rare reactions, and outline practical strategies for managing any discomfort. By understanding what to expect, you can make informed decisions and get the most benefit from your treatment.
              </p>
              <p>
                We will explain <Link href="/blog/does-mounjaro-really-work-for-weight-loss-find-out-here" className="font-semibold text-[#3562ff] underline-offset-2 hover:underline">how Mounjaro works</Link>, walk through gastrointestinal, injection site and other reactions, and advise when to seek medical help. Keep reading to learn how to stay on track with your therapy and minimise unwanted effects.
              </p>

              <GuideSection darkMode={darkMode} id="understanding" heading="Understanding Mounjaro">
                <p>
                  Mounjaro is the brand name for tirzepatide, a prescription injection approved for managing type 2 diabetes in adults. It belongs to a class of drugs called incretin mimetics and is administered once a week under the skin. Your healthcare team will start you on a low dose and gradually increase it over several weeks to minimise unwanted reactions.
                </p>
                <p>
                  Many people also appreciate Mounjaro for its appetite-suppressing properties, which can support healthier eating habits and <Link href="/blog/mounjaro-weight-loss-benefits-backed-by-science" className="font-semibold text-[#3562ff] underline-offset-2 hover:underline">weight loss</Link>. However, this same effect on your digestive pace can trigger gastrointestinal side effects, especially during the initial weeks of therapy.
                </p>
                <p>
                  Your healthcare team usually starts you on a 2.5 mg dose once a week, increasing to 5 mg after four weeks if tolerated. Further escalations to 10 mg and up to 15 mg may follow, depending on your treatment goals and side effect profile. This gradual approach helps your body adapt to the drug’s effects while keeping adverse reactions manageable.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="mechanism" heading="Mounjaro mechanism of action">
                <p>
                  Mounjaro works by activating two key hormones in your body: glucose-dependent insulinotropic polypeptide (GIP) and glucagon-like peptide-1 (GLP-1). These incretin hormones naturally help regulate blood sugar and appetite after meals. By mimicking their action, tirzepatide enhances insulin secretion, reduces glucagon levels, slows gastric emptying and increases feelings of fullness. The dual action differentiates it from older GLP-1 agonists, offering more pronounced blood sugar control and weight loss. That same delay in gastric emptying, however, is what often causes nausea, bloating and other digestive reactions. Recognising this link between mechanism and side effects can reassure you that many symptoms are a normal part of the drug’s effect.
                </p>
                <p>
                  Beyond blood sugar control, tirzepatide influences your central nervous system by interacting with appetite centres in the hypothalamus. This dual effect not only curbs excess eating but also extends the feeling of fullness between meals. While beneficial for weight management, these neural signals contribute to the early gastrointestinal symptoms you may notice.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="common" heading="Common side effects">
                <p>
                  Most people experience at least one mild to moderate side effect when they begin Mounjaro. These reactions usually surface early and most often relate to your digestive system or <Link href="/blog/understanding-the-mounjaro-kwikpen-a-user-guide" className="font-semibold text-[#3562ff] underline-offset-2 hover:underline">injection technique</Link>.
                </p>
                <p>
                  When you begin treatment or move to a new dose level, your body adapts to shifts in blood sugar and digestive pace. Many people find that transient queasiness or mild discomfort is a sign that Mounjaro is exerting its intended effect. In clinical practice, most gastrointestinal symptoms tend to resolve within two to three months as tolerance builds.
                </p>
                
                <h3 className={`mt-6 mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                  Gastrointestinal reactions
                </h3>
                <p>
                  Nausea is the most frequently reported side effect, and many people also notice vomiting, diarrhoea or constipation. These reactions stem from slowed gastric emptying and changes in gut hormones. Symptoms tend to peak shortly after a dose increase and then subside as your digestive system adapts.
                </p>
                <p>
                  To reduce discomfort, try eating smaller meals more frequently and choosing low-fat, bland foods on injection days. Staying hydrated and eating slowly can also ease queasiness. If symptoms persist or worsen, discuss <Link href="/blog/mounjaro-dosage-for-weight-loss-facts-you-can-trust" className="font-semibold text-[#3562ff] underline-offset-2 hover:underline">adjusting your dosage</Link> schedule with your healthcare provider.
                </p>
                
                <h3 className={`mt-6 mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                  Injection site reactions
                </h3>
                <p>
                  You may notice redness, itching or slight swelling at the injection site. These local reactions are common and usually mild, resolving within a few days without intervention. Rotating your injection site each week can greatly reduce irritation.
                </p>
                
                <h3 className={`mt-6 mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                  Other common effects
                </h3>
                <p>
                  Besides gastrointestinal and injection site reactions, Mounjaro can cause headache, fatigue and dizziness. Some people report mild hypoglycaemia if they combine it with other glucose-lowering medications. Feeling tired or lightheaded often reflects low blood sugar or dehydration from vomiting and diarrhoea. Monitoring your glucose levels and keeping salts and fluids balanced can help maintain your energy.
                </p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={CONTENT_IMAGE}
                  alt="Understanding Mounjaro effects and monitoring reactions"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection darkMode={darkMode} id="less-common" heading="Less common side effects">
                <p>
                  A smaller proportion of people experience less frequent side effects, but it is still important to be aware of them. Although these reactions occur in fewer patients, recognising the signs early can prevent complications.
                </p>

                <h3 className={`mt-6 mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                  Hypoglycaemia risk
                </h3>
                <p>
                  If you are on insulin or sulfonylureas alongside Mounjaro, your risk of low blood sugar increases. Symptoms include sweating, tremors, irritability and rapid heartbeat. Adjusting your other diabetes medications and closely monitoring your levels can mitigate this risk.
                </p>

                <h3 className={`mt-6 mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                  Gallbladder disorders
                </h3>
                <p>
                  Mounjaro’s impact on gallbladder function can occasionally lead to gallstones or cholecystitis. Rapid weight loss and changes in bile composition are thought to contribute. If you develop severe pain in the right upper abdomen, especially after fatty meals, seek medical advice promptly. Early ultrasound assessment can detect gallbladder issues before they become serious.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="rare" heading="Rare side effects">
                <p>
                  Though uncommon, some people may experience serious adverse reactions that warrant immediate attention. Acute pancreatitis has been reported, presenting with intense abdominal pain that may radiate to your back, nausea and vomiting. Kidney injury can occur secondary to dehydration from prolonged vomiting or diarrhoea. Rare allergic reactions with swelling of the lips, tongue or throat demand urgent medical care. While these events are infrequent, knowing the warning signs can be lifesaving.
                </p>
                <p>
                  Although serious allergic reactions are extremely rare, you should be alert for rash, hives or sudden shortness of breath. Anaphylaxis can develop quickly, so if you notice swelling around your face or difficulty swallowing, treat this as an emergency. Keeping injectable treatments in a cool, stable environment helps reduce the risk of product degradation and unexpected immune responses.
                </p>
                
                <p className="mt-6 mb-2 font-medium">The table below provides a quick overview of common, less common and rare mounjaro side effects, along with basic management suggestions.</p>
                <SideEffectsTable darkMode={darkMode} />
              </GuideSection>

              <GuideSection darkMode={darkMode} id="strategies" heading="Strategies for managing side effects">
                <p>
                  Adjusting your routine and making simple lifestyle tweaks can lessen many of the discomforts associated with Mounjaro. The following approaches have helped people stay on track with their therapy without compromising their quality of life.
                </p>
                <p>
                  Consulting a dietitian or diabetes specialist nurse can provide personalised guidance on nutrition and hydration. They can help you tailor your meal plan to match your treatment schedule and minimise digestive upset.
                </p>
                <ul className="list-disc space-y-2 pl-5 mt-4">
                  <li>Take Mounjaro with or without food based on tolerance, experimenting to see which causes less nausea.</li>
                  <li>Start on the lowest recommended dose and only increase after settling in with the prior dose.</li>
                  <li>Eat smaller, more frequent meals focusing on bland, low-fat foods such as porridge, toast or steamed vegetables.</li>
                  <li>Sip water slowly throughout the day to maintain hydration, especially if you experience diarrhoea or vomiting.</li>
                  <li>Rotate injection sites between thighs, abdomen and upper arms to avoid local irritation.</li>
                  <li>Keep a symptom diary to track patterns and discuss any persistent issues with your healthcare team.</li>
                  <li>Report any severe or unexpected reactions promptly rather than letting symptoms accumulate.</li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="when-to-seek-help" heading="When to seek medical help">
                <p>
                  Most side effects ease within weeks, but some signals should never be ignored. If you experience persistent severe abdominal pain, especially with nausea or fever, suspect pancreatitis and seek urgent care.
                </p>
                <p>
                  Signs of dehydration, such as dark urine, confusion or extreme thirst, also require prompt attention. Similarly, if you notice swelling of the lips, face or throat, or have difficulty breathing, treat this as a medical emergency.
                </p>
                <p>
                  Never discontinue Mounjaro abruptly; always consult your doctor before stopping or altering your dose. If you find side effects intolerable, your clinician may suggest an alternative regimen or supportive medications to ease symptoms.
                </p>
              </GuideSection>

              <section
                id="faq"
                className={`mt-16 border-t pt-10 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
              >
                <h2 className={`mb-8 text-3xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Will side effects subside over time?
                    </h3>
                    <p>
                      Yes, most side effects diminish as your body adapts, typically within four to eight weeks. Gastrointestinal reactions in particular tend to peak after dose increases and then taper off. Maintaining your prescribed titration schedule can help make this adjustment easier.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Can Mounjaro affect my mood?
                    </h3>
                    <p>
                      While mood changes are not a direct pharmacological effect of tirzepatide, you might notice fluctuations in energy or appetite that influence your emotional state. Feeling light-headed during hypoglycaemia or fatigued from digestive upset can leave you irritable. Always discuss significant mood shifts with your doctor, especially if you have a history of depression or anxiety.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Do side effects differ by dose?
                    </h3>
                    <p>
                      Yes, increasing the dose often correlates with a temporary rise in side effect intensity, particularly gastrointestinal symptoms. Your clinician will balance the benefits of a higher dose against potential discomfort, adjusting the schedule if needed. If you struggle with a particular dose, a slower titration may be advised.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      How can I report side effects?
                    </h3>
                    <p>
                      In the UK you can notify suspected adverse reactions to your healthcare provider or directly through the MHRA Yellow Card scheme. Reporting helps regulators monitor safety and may improve guidance for other patients. Always keep a clear record of your symptoms, doses and any interventions.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Can Mounjaro side effects cause hair loss?
                    </h3>
                    <p>
                      Hair loss is not directly listed as a common side effect of Mounjaro. However, rapid weight loss from any cause can sometimes trigger temporary hair thinning. If you experience significant hair loss, speak with your healthcare provider to ensure you are meeting your nutritional needs.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Are there long-term side effects of taking Mounjaro?
                    </h3>
                    <p>
                      Mounjaro is relatively new, but long-term trials have shown it is generally well-tolerated. However, continuous monitoring by your healthcare team is advised to manage any potential changes in organ function or ongoing gastrointestinal discomfort over the long term.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  Understanding potential Mounjaro side effects is an essential step before beginning treatment to ensure <Link href="/blog/discover-if-mounjaro-is-safe-for-weight-loss-and-right-for-you" className="font-semibold text-[#3562ff] underline-offset-2 hover:underline">Mounjaro is safe</Link> for you. While gastrointestinal issues and injection site reactions are common, they are usually manageable with simple adjustments to your diet and routine. By staying informed, communicating openly with your healthcare team, and knowing when to seek medical help, you can navigate your treatment with confidence and focus on your long-term health goals.
                </p>
              </GuideSection>

            </article>

            <div className="mt-10">
              <GuideSharePanel
                url={shareUrl}
                title="The Surprising Mounjaro Side Effects You Might Experience"
                description="Discover surprising mounjaro side effects you might experience and how you can manage them with confidence."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
