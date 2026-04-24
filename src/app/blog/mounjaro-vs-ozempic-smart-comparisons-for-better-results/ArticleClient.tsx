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
  { id: "understand", label: "Understand Mounjaro and Ozempic" },
  { id: "mechanisms", label: "Compare mechanisms of action" },
  { id: "results", label: "Evaluate weight loss results" },
  { id: "safety", label: "Review safety and side effects" },
  { id: "dosing", label: "Examine dosing and administration" },
  { id: "cost", label: "Assess cost and accessibility" },
  { id: "decide", label: "Decide which suits you" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "conclusion", label: "Conclusion" },
];

const HERO_IMAGE = "/blog/guide mounjaro vs ozempic.webp";
const CONTENT_IMAGE = "/blog/mounjaro vs ozempic effect.webp";

function ComparisonTable({ darkMode }: { darkMode: boolean }) {
  const cell = darkMode ? "border-slate-700 text-slate-300" : "border-slate-200 text-slate-700";
  const head = darkMode ? "bg-slate-900 text-slate-200" : "bg-slate-50 text-slate-900";
  const wrap = darkMode ? "border-slate-700" : "border-slate-200/80";
  return (
    <div className={`my-6 w-full min-w-0 max-w-full overflow-x-auto overscroll-x-contain rounded-xl border [-webkit-overflow-scrolling:touch] ${wrap}`}>
      <table className="w-full min-w-[640px] border-collapse text-left text-xs sm:text-sm">
        <thead>
          <tr className={head}>
            <th className={`border-b px-3 py-2 font-semibold ${cell}`}>Feature</th>
            <th className={`border-b px-3 py-2 font-semibold ${cell}`}>Mounjaro (tirzepatide)</th>
            <th className={`border-b px-3 py-2 font-semibold ${cell}`}>Ozempic (semaglutide)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`border-b px-3 py-2 ${cell}`}>Receptor targets</td>
            <td className={`border-b px-3 py-2 ${cell}`}>GIP and GLP-1</td>
            <td className={`border-b px-3 py-2 ${cell}`}>GLP-1 only</td>
          </tr>
          <tr>
            <td className={`border-b px-3 py-2 ${cell}`}>Average weight loss</td>
            <td className={`border-b px-3 py-2 ${cell}`}>15 – 21% over 72 weeks</td>
            <td className={`border-b px-3 py-2 ${cell}`}>6 – 10% over 52–72 weeks</td>
          </tr>
          <tr>
            <td className={`border-b px-3 py-2 ${cell}`}>Typical dosing</td>
            <td className={`border-b px-3 py-2 ${cell}`}>5 mg → 15 mg weekly</td>
            <td className={`border-b px-3 py-2 ${cell}`}>0.25 mg → 1 mg weekly</td>
          </tr>
          <tr>
            <td className={`border-b px-3 py-2 ${cell}`}>Approval for obesity</td>
            <td className={`border-b px-3 py-2 ${cell}`}>Yes (many regions)</td>
            <td className={`border-b px-3 py-2 ${cell}`}>No (Wegovy formulation only)</td>
          </tr>
          <tr>
            <td className={`px-3 py-2 ${cell}`}>Glycaemic control (HbA1c)</td>
            <td className={`px-3 py-2 ${cell}`}>1.6–2.3% reduction</td>
            <td className={`px-3 py-2 ${cell}`}>1.5–1.8% reduction</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);
  const shareUrl = `${siteOrigin()}/blog/mounjaro-vs-ozempic-smart-comparisons-for-better-results`;

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
            Mounjaro vs Ozempic: Smart Comparisons for Better Results
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
              10 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_IMAGE}
            alt="Mounjaro vs Ozempic comparison for better diabetes and weight loss results"
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
                When you’re exploring pharmaceutical approaches to weight management, you’ve probably come across <Link href="/blog/mounjaro-vs-wegovy-key-differences-explained" className="font-semibold text-[#3562ff] underline-offset-2 hover:underline">mounjaro vs ozempic</Link>. These two injectables have reshaped the conversation around type 2 diabetes and obesity, offering benefits beyond blood sugar control. In this ultimate guide, you’ll get clear, evidence-based insights into how each works, what results you can expect, and how to choose the right option for your needs.
              </p>
              <p>
                Tirzepatide, marketed as Mounjaro, and semaglutide, sold under the Ozempic brand, both mimic hormones that regulate appetite and metabolism. Despite their similarities, important differences in mechanism, efficacy and side-effect profiles can tip the balance in your favour one way or the other. We’ll walk you through each factor in turn.
              </p>
              <p>
                By the end of this guide you’ll be better equipped to discuss these treatments with your healthcare provider, weigh the pros and cons and make an informed decision. Let’s dive into the details that matter when comparing mounjaro vs ozempic.
              </p>

              <GuideSection darkMode={darkMode} id="understand" heading="Understand Mounjaro and Ozempic">
                <p>
                  Mounjaro (tirzepatide) and Ozempic (semaglutide) both belong to a class of drugs known as incretin mimetics. They were originally developed to improve blood glucose control in adults with type 2 diabetes. Over time, clinical data revealed significant weight-loss effects, leading to off-label and, in some regions, licensed use for obesity management.
                </p>
                <p>
                  Mounjaro received approval by the UK’s Medicines and Healthcare products Regulatory Agency (MHRA) in 2023, making it one of the newest options on the market. Ozempic, in contrast, has been available since 2018 for diabetes and has seen widespread off-label use for weight loss, with a separate formulation (Wegovy) approved for obesity. Despite different release timelines, both drugs are administered via once-weekly subcutaneous injection.
                </p>
                <p>
                  Understanding the basic indications helps you frame expectations. While both improve glycaemic control, Ozempic’s primary licence remains diabetes management, whereas Mounjaro carries dual indications for diabetes and weight loss in many territories. This distinction can affect prescribing pathways and reimbursement on the NHS.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="mechanisms" heading="Compare mechanisms of action">
                <p>
                  The key difference between these drugs lies in the receptors they target. Semaglutide (Ozempic) is a glucagon-like peptide-1 (GLP-1) receptor agonist. It mimics the body’s own GLP-1 hormone, which slows gastric emptying, promotes satiety and enhances insulin secretion in response to meals.
                </p>
                <p>
                  Tirzepatide (Mounjaro) goes a step further by acting as both a GLP-1 and glucose-dependent insulinotropic polypeptide (GIP) receptor agonist. GIP is another incretin hormone that boosts insulin release. By engaging two pathways, tirzepatide can lead to greater overall metabolic benefits, including more pronounced appetite suppression and energy expenditure. For more details on this, you can read <Link href="/blog/does-mounjaro-really-work-for-weight-loss-find-out-here" className="font-semibold text-[#3562ff] underline-offset-2 hover:underline">how Mounjaro really works</Link>.
                </p>
                <p>
                  These mechanistic differences translate into variations in efficacy and tolerability. While you may respond well to a pure GLP-1 agonist like Ozempic, Mounjaro’s dual action often yields superior weight-loss outcomes in clinical trials, albeit with a potentially broader side-effect profile.
                </p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={CONTENT_IMAGE}
                  alt="Guide to Mounjaro vs Ozempic efficacy and results"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection darkMode={darkMode} id="results" heading="Evaluate weight loss results">
                <p>
                  When you compare mounjaro vs ozempic for weight reduction, clinical trial data offer a useful benchmark. In obesity-focused studies, patients on Mounjaro achieved average weight losses of 15–21% of body weight over 72 weeks, depending on dose. Ozempic users typically saw reductions of 6–10% over similar timeframes at the diabetes-treatment dose of 1 mg weekly. If you are curious about similar comparisons, check our insights on <Link href="/blog/mounjaro-weight-loss-results-change-your-life" className="font-semibold text-[#3562ff] underline-offset-2 hover:underline">Mounjaro weight loss results</Link>.
                </p>

                <ComparisonTable darkMode={darkMode} />

                <p>
                  These figures vary with dose, treatment duration and individual factors such as diet or exercise adherence. In practice, you’ll work with your clinician to titrate doses and set realistic goals, aiming for sustainable changes rather than rapid, short-lived drops.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="safety" heading="Review safety and side effects">
                <p>
                  Both Mounjaro and Ozempic share a side-effect profile common to incretin mimetics, but dual agonism can introduce differences in frequency and severity. To dive deeper, you might read about <Link href="/blog/the-surprising-mounjaro-side-effects-you-might-experience" className="font-semibold text-[#3562ff] underline-offset-2 hover:underline">Mounjaro side effects</Link>.
                </p>
                <h3 className={`mt-6 mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                  Common side effects
                </h3>
                <p>
                  Nausea, vomiting and diarrhoea top the list, particularly during dose escalation. You may also experience abdominal discomfort, decreased appetite or constipation. These symptoms often subside after a few weeks as your body adjusts. Starting at a low dose and increasing gradually can mitigate early gastrointestinal upset.
                </p>
                <p>
                  Headache and fatigue occur in a minority of users. While generally mild, they can affect daily routines, so plan dose changes when you have fewer commitments.
                </p>

                <h3 className={`mt-6 mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                  Rare serious risks
                </h3>
                <p>
                  Pancreatitis has been reported in less than 1% of cases, so it’s vital to monitor for severe abdominal pain or persistent vomiting and seek medical advice promptly. Gallbladder disease and gallstones are also possible, especially if you lose weight rapidly.
                </p>
                <p>
                  Though data on long-term safety are still evolving, thyroid C-cell tumours observed in rodent studies have not translated into clear human risk. Nevertheless, any family history of medullary thyroid carcinoma or multiple endocrine neoplasia type 2 should preclude use of these drugs.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="dosing" heading="Examine dosing and administration">
                <p>
                  Administering either drug is straightforward but must follow a strict schedule for safety and efficacy.
                </p>
                <p>
                  You inject once weekly, ideally on the same day each week. Both pens come with prefilled cartridges and are designed for subcutaneous injection into the abdomen, thigh or upper arm. Rotate injection sites to reduce discomfort and avoid lipohypertrophy.
                </p>
                <p>
                  Your clinician will guide you through a titration scheme. For Mounjaro you typically start at 2.5 mg weekly, increasing every four weeks until you reach your target dose (up to 15 mg). With Ozempic, the initial 0.25 mg serves purely to acclimatise your system, then moves to 0.5 mg and up to 1 mg weekly. It’s important not to rush increases; moving too fast can amplify side effects without boosting benefits.
                </p>
                <p>
                  If you miss a dose, administer it within five days. Beyond that window, skip the missed dose and take the next one on your usual day. Never inject two doses in the same week.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="cost" heading="Assess cost and accessibility">
                <p>
                  Cost and prescribing pathways differ markedly between NHS provision and private healthcare.
                </p>
                <h3 className={`mt-6 mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                  Prescription and availability
                </h3>
                <p>
                  Ozempic is readily available on the NHS for type 2 diabetes, making its acquisition straightforward if you meet the clinical criteria. However, NHS prescriptions for weight loss alone are rare. Mounjaro’s obesity indication is not covered across all NHS trusts, so clinicians may restrict use to patients with a BMI over 35 and at least one comorbidity.
                </p>
                <p>
                  In private clinics you can access both drugs off-label for obesity. Waiting times tend to be shorter, but you’ll pay out of pocket.
                </p>

                <h3 className={`mt-6 mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                  Cost considerations
                </h3>
                <p>
                  On the NHS, standard prescription charges apply—currently £9.65 per item in England—regardless of the drug’s price. In Scotland, Wales and Northern Ireland you benefit from free prescriptions. Private prescriptions cost significantly more: expect to pay around £300–£400 per month for a full-dose supply of either medication. You can explore a detailed <Link href="/mounjaro-price-comparison" className="font-semibold text-[#3562ff] underline-offset-2 hover:underline">Mounjaro price comparison</Link> for more UK market insights.
                </p>
                <p>
                  Factor in the need for follow-up appointments, potential blood tests and specialist consultations. While the upfront cost of private treatment can seem steep, improved health outcomes may reduce long-term healthcare expenses related to diabetes or cardiovascular complications.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="decide" heading="Decide which suits you">
                <p>
                  Choosing between mounjaro vs ozempic hinges on your priorities and medical profile.
                </p>
                <p>
                  If your main goal is maximising weight loss and you’re prepared for a potentially higher side-effect burden, Mounjaro’s dual action could deliver superior results. You’ll need to meet stricter criteria for NHS coverage, or budget for private prescriptions.
                </p>
                <p>
                  If you prioritise a well-established safety record, slower dose escalation or easier NHS access for diabetes control, Ozempic may be more appropriate. The trade-off is a more modest average weight reduction at standard dosages.
                </p>
                <p>
                  Collaborate with your healthcare provider to review your medical history, current medications and lifestyle. Regular check-ins will help you adjust doses, manage side effects and track progress, ensuring you stay on target.
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
                      How soon will you see results?
                    </h3>
                    <p>
                      Most people notice appetite suppression and slight weight changes within two to four weeks. Significant reductions often become clear after three months of consistent use.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Can you switch between Mounjaro and Ozempic?
                    </h3>
                    <p>
                      Yes, but only under medical supervision. Your clinician will recommend an appropriate equivalent starting dose and schedule to avoid overlapping side effects.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Are injections painful?
                    </h3>
                    <p>
                      The pens use very fine needles, so discomfort is minimal for most users. Applying a cold pack beforehand or injecting after a warm shower can further reduce any sting.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Do these drugs affect blood sugar if you’re not diabetic?
                    </h3>
                    <p>
                      They can lower glucose levels, so your doctor may advise periodic monitoring even if you’ve never had type 2 diabetes.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Will you regain weight after stopping treatment?
                    </h3>
                    <p>
                      Potentially, yes. These medications help reshape appetite and metabolism, but lasting change also depends on diet, activity levels and lifestyle habits once treatment ends.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Are Mounjaro and Ozempic available on the NHS for weight loss?
                    </h3>
                    <p>
                      Ozempic is available on the NHS for type 2 diabetes but rarely for weight loss alone. Mounjaro&apos;s obesity indication is not universally covered and depends on strict criteria, such as a BMI over 35 with comorbidities. Both can be accessed privately off-label for weight management.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  <strong>Summarise key takeaways</strong>
                </p>
                <ul className="list-disc space-y-2 pl-5 mt-4">
                  <li>Mounjaro offers dual GIP and GLP-1 agonism, often yielding greater weight loss than GLP-1 alone.</li>
                  <li>Ozempic is a pure GLP-1 agonist with an established safety profile and easier NHS access for diabetes.</li>
                  <li>Both drugs require once-weekly injections, gradual dose titration and monitoring for gastrointestinal side effects.</li>
                  <li>Private prescriptions can be costly, while NHS coverage depends on specific clinical criteria.</li>
                  <li>Work closely with your healthcare provider to choose and adjust treatment, aiming for sustainable, long-term success.</li>
                </ul>
                <p className="mt-4">
                  By understanding the differences in mechanism, efficacy, side effects and access, you’ll be well placed to select the injectable that aligns with your goals and circumstances.
                </p>
              </GuideSection>

            </article>

            <div className="mt-10">
              <GuideSharePanel
                url={shareUrl}
                title="Mounjaro vs Ozempic: Smart Comparisons for Better Results"
                description="Mounjaro vs Ozempic: find which treatment fits your diabetes goals in the UK with clear, confident advice."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
