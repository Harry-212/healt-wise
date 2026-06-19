"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import BlogArticleColumn from "@/components/blog/BlogArticleColumn";
import { GuideSection } from "@/components/guide/GuideLayout";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import {
  UK_WEIGHT_LOSS_FLAT_INDEX_PATH,
  type UkWeightLossLocation,
} from "@/lib/data/uk-weight-loss-locations";
import { capitalizeHeadingWords } from "@/lib/text/heading-case";

type Props = {
  loc: UkWeightLossLocation;
  shareUrl: string;
};

const PAGE_TITLE =
  "Best Weight Loss Treatment Middlesbrough: Medical, NHS, and Lifestyle Options Explained";

export default function MiddlesbroughLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Best weight loss treatment in ${name}` },
      { id: "meaning", label: "What best weight loss treatment means" },
      { id: "nhs", label: "How NHS weight management services work" },
      { id: "glp1", label: "Medical weight loss injections and GLP-1 drugs" },
      { id: "highest-success", label: "Which injection has the highest success rate?" },
      { id: "prescriptions", label: "What doctors can prescribe in the UK" },
      { id: "private-clinics", label: "Private clinics, aesthetics, and body-contouring" },
      { id: "advanced", label: "Bariatric surgery and body-contouring" },
      { id: "timelines", label: "Realistic timelines and success" },
      { id: "sources", label: "Key guidance" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps" },
      { id: "disclaimer", label: "Disclaimer" },
      { id: "faq", label: "Middlesbrough-focused FAQs" },
      { id: "conclusion", label: "Conclusion" },
      { id: "more-uk", label: "Other places in the UK" },
    ],
    [name],
  );

  const p = darkMode ? "text-slate-300" : "text-slate-700";
  const muted = darkMode ? "text-slate-400" : "text-slate-600";
  const strong = darkMode ? "text-white" : "text-slate-900";
  const border = darkMode ? "border-slate-700" : "border-slate-200";
  const boxBg = darkMode ? "bg-slate-900/80" : "bg-slate-50/90";
  const linkCls = "font-medium text-emerald-600 underline-offset-2 hover:underline";

  return (
    <div
      className={`w-full font-sans transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-300" : "bg-white text-slate-800"}`}
    >
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/blog?topic=locations"
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
          <p className="mb-2 text-xs font-semibold tracking-wide text-emerald-600">
            {capitalizeHeadingWords("Locations in UK")}
          </p>
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            {PAGE_TITLE}
          </h1>
          <div className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${muted}`}>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {nation}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Independent guide · 2026
            </span>
          </div>

          <BlogArticleHeroImage src={hero.url} alt={hero.alt} />
          <div id="guide-article-hero-end" aria-hidden className="pointer-events-none h-0 w-full overflow-hidden" />
        </header>
        <BlogArticleColumn toc={toc} darkMode={darkMode}>
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Best Weight Loss Treatment ${name}: medical, NHS, and lifestyle options explained`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  The most successful weight loss treatment in Middlesbrough usually combines medically supervised support (NHS or private clinics), lifestyle change, and, where appropriate, prescription medications like GLP-1 injections. There is no single &quot;best&quot; treatment for everyone; success depends on individual health, eligibility, and long-term behaviour change rather than pills alone. NHS-funded weight management programmes in England focus on structured lifestyle support, while private clinics can offer GLP-1 injections and body-contouring as add-ons, always under qualified clinicians.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Middlesbrough, sitting in the North East of England between the Tees and the North Sea, shares many of the same health challenges as the wider Tees Valley and the North East region. Obesity and overweight levels are above the national average, and many people in Middlesbrough and the surrounding areas wonder how they can actually lose weight in a way that is safe, realistic, and sustainable.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  If you have started searching for the best weight loss treatment in Middlesbrough, you have likely seen a mix of NHS-style advice, social-media-advertised injections, and local clinics promising &quot;fast weight loss&quot;. This article aims to cut through the noise and explain, in a clear, evidence-based way, what options really exist for people living in Middlesbrough:
                </p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>
                    Medical weight loss injections (like{" "}
                    <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                      GLP-1 drugs
                    </Link>
                    ).
                  </li>
                  <li>NHS-funded weight management programmes.</li>
                  <li>Local specialist clinics and support services.</li>
                  <li>Surgery and aesthetic body-contouring options (for very specific cases).</li>
                  <li>Realistic timelines and what &quot;success&quot; actually looks like.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  We will not be pushing any clinic or product. Instead, we will help you understand how to judge different options, what to ask, and what to expect from the NHS versus private providers in the Middlesbrough area. You can also compare broader routes in our{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    UK weight loss treatment comparison
                  </Link>{" "}
                  and check how we review information in our{" "}
                  <Link className={linkCls} href="/editorial-policy">
                    editorial policy
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="meaning" heading="What “best weight loss treatment” means in Middlesbrough">
                <p className={`text-lg md:text-xl ${p}`}>
                  The most successful weight loss treatment is not a brand-name injection or a one-week &quot;intensive&quot; - it is a combination of medically supervised support, a calorie-controlled diet, regular physical activity, and long-term behaviour change. For people in Middlesbrough, this often means starting with the NHS weight management services, then considering prescription weight-loss medication (such as GLP-1 injections) if your BMI and health meet the criteria. Surgery and body-contouring are only relevant for a small group of patients with severe obesity or after major weight loss.
                </p>

                <p className={p}>When people search for the best weight loss treatment Middlesbrough, they are often hoping for a quick answer like:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>&quot;Just book this injection at this clinic.&quot;</li>
                  <li>&quot;Use this drug and lose 20 kg in 3 months.&quot;</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  However, real clinical practice - and NHS guidance - is more cautious. The most successful weight loss treatment is usually the one that a person can follow, afford, and keep up over months and years. Crash diets and extreme injections may give short-term drops on the scale, but they often fail to change long-term habits and can carry health risks.
                </p>

                <p className={p}>In the North East, including Middlesbrough, many people also face structural barriers:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Long-term weight gain linked to shift work, caring responsibilities, and limited access to green space.</li>
                  <li>Use of antidepressants or other medications that can increase appetite.</li>
                  <li>Local food environments where fast food and cheap high-calorie meals are easier to access than cooking from scratch.</li>
                </ul>

                <p className={`mt-4 ${p}`}>Because of these factors, the best approach for many people in Middlesbrough is:</p>

                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>First, use NHS-funded weight management support.</li>
                  <li>
                    If eligible, add medically supervised prescription weight-loss treatment (such as{" "}
                    <Link className={linkCls} href="/what-is-wegovy">
                      GLP-1 injections
                    </Link>
                    ).
                  </li>
                  <li>Supplement with local exercise options (parks, walking routes, gyms, leisure centres).</li>
                  <li>Avoid &quot;magic-solution&quot; clinics that promise rapid loss without realistic follow-up, blood tests, or ongoing monitoring.</li>
                </ol>

                <p className={`mt-4 ${p}`}>
                  In the next sections, we will explain how NHS and private options work in practice and what you can realistically expect if you live in Middlesbrough.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nhs" heading="How NHS weight management services work in Middlesbrough">
                <p className={`text-lg md:text-xl ${p}`}>
                  NHS-funded weight loss programmes in England are usually tiered services that offer group-based lifestyle support, diet advice, and physical activity guidance. To access these in Middlesbrough, you typically need a referral from your GP based on your BMI and health needs. These services do not offer GLP-1 injections directly but may consider medication later if lifestyle changes alone are not enough. They represent one of the safest and most cost-effective options for many people in the North East.
                </p>

                <p className={p}>In England, the NHS refers to weight management services as tiered systems:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Tier 1: General advice and support from GPs, practice nurses, or online tools (NHS-style apps and calculators).</li>
                  <li>Tier 2: More structured lifestyle programmes (often group-based), sometimes run by local councils or specialist health providers.</li>
                  <li>Tier 3: Specialist obesity clinics (multidisciplinary teams of dietitians, psychologists, and doctors) for people with more complex health needs.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Middlesbrough falls under the NHS Tees and North Yorkshire Integrated Care Board (ICB), which oversees local health services. Within this system, residents can be referred to:
                </p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Local weight management programmes - often community-based or online-hybrid, aimed at helping people lose 5-10% of their body weight through diet, activity, and behaviour change.</li>
                  <li>Hospital-based specialist obesity services for people with very high BMI or obesity-related conditions like type 2 diabetes, high blood pressure, or severe joint problems.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  These programmes are usually free for eligible patients and are grounded in NICE guidance NG246 (&quot;Obesity: identification, assessment and management&quot;), which emphasises:
                </p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Individualised lifestyle change.</li>
                  <li>Behavioural support.</li>
                  <li>Long-term follow-up, not one-off courses.</li>
                </ul>

                <p className={`mt-4 ${p}`}>In practice, access to NHS weight services in Middlesbrough can be affected by:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Waiting lists (often several months).</li>
                  <li>Eligibility rules (BMI thresholds, presence of other conditions).</li>
                  <li>Patient motivation and ability to attend regular sessions.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Because of this, some people in Middlesbrough look to private clinics as an alternative, especially if they want to explore GLP-1 weight-loss injections (like Wegovy or Ozempic) more quickly. However, the NHS pathway still represents the safest starting point for most people, especially if you are unsure whether you would benefit from medication or surgery. Before an appointment, use the{" "}
                  <Link className={linkCls} href="/tools/bmi-calculator">
                    BMI calculator
                  </Link>{" "}
                  as a preparation aid.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="glp1" heading="Medical weight loss injections and GLP-1 drugs in Middlesbrough">
                <p className={`text-lg md:text-xl ${p}`}>
                  Among prescription weight-loss options, GLP-1 receptor agonists (such as semaglutide/Wegovy and tirzepatide-class drugs) have shown some of the highest success rates in clinical trials, with average weight loss of around 12-18% over 60 weeks. In the UK, these drugs are usually only prescribed when your BMI and health meet strict criteria and after lifestyle measures have been tried. They are not automatically available &quot;on demand&quot; via every clinic, and careful monitoring is essential due to side effects and safety risks.
                </p>

                <p className={p}>
                  In Middlesbrough, as elsewhere in the UK, private clinics and larger aesthetic or medical-aesthetic practices are increasingly offering prescription weight-loss injections. These are not over-the-counter products; they are prescription-only medicines regulated by the MHRA (Medicines and Healthcare products Regulatory Agency).
                </p>

                <p className={p}>The most commonly discussed options include:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>
                    GLP-1 receptor agonists such as semaglutide (Wegovy is the brand used for weight loss; Ozempic is used for diabetes, though sometimes repurposed off-label). Read{" "}
                    <Link className={linkCls} href="/what-is-wegovy">
                      what Wegovy is
                    </Link>{" "}
                    for licensed weight-management context.
                  </li>
                  <li>
                    Tirzepatide-type drugs (dual GIP/GLP-1 action, similar to Mounjaro for weight-loss use). Read{" "}
                    <Link className={linkCls} href="/what-is-mounjaro">
                      what Mounjaro is
                    </Link>
                    .
                  </li>
                  <li>
                    Liraglutide (Saxenda), an older GLP-1 agent also used for weight management. Read{" "}
                    <Link className={linkCls} href="/what-is-saxenda">
                      what Saxenda is
                    </Link>
                    .
                  </li>
                </ul>

                <p className={`mt-4 ${p}`}>These drugs work by:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Reducing appetite and cravings.</li>
                  <li>Slowing stomach emptying, which makes you feel fuller for longer.</li>
                  <li>Influencing blood sugar and insulin patterns, which can help with type 2 diabetes and other metabolic issues.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  In large clinical trials, patients on GLP-1-based treatments typically lose around 12-20% of their body weight over 60-72 weeks, compared with 4-6% in lifestyle-only groups. However, trials are usually done on highly motivated patients under close supervision. In real life, weight loss can be less dramatic, and not everyone tolerates the side effects (especially nausea, vomiting, and gastrointestinal discomfort).
                </p>

                <p className={p}>For people in Middlesbrough, key points to understand:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Access via NHS usually requires meeting BMI and health-risk thresholds (often BMI &ge;35 with obesity-related complications, or BMI &ge;30 plus diabetes or hypertension), and then progressing through tiered lifestyle support first.</li>
                  <li>Private clinics in or near Middlesbrough may offer these injections more quickly, but:</li>
                  <li>They must still be prescribed by registered doctors.</li>
                  <li>They must follow legal and safety rules (correct titration, repeat blood tests, monitoring for side effects).</li>
                  <li>They must not ignore contraindications (e.g., pregnancy plans, a history of pancreatitis, certain thyroid conditions).</li>
                </ul>

                <p className={`mt-4 ${p}`}>When choosing a clinic in the Middlesbrough area, you should check:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Whether the prescriber is GMC-registered and working through a CQC-registered clinic.</li>
                  <li>Whether the clinic uses a GPhC-registered pharmacy to supply the medication.</li>
                  <li>Whether they have a clear titration plan (slow dose increases) and a written policy for dealing with nausea, dehydration, or missed doses.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  These checks are crucial because not all &quot;online clinics&quot; or aesthetics-only practices take the same care when prescribing high-risk medicines. Your local GP surgery may also be hesitant to share care with some providers, so it is wise to have an honest conversation about who will be responsible for your follow-up. Our{" "}
                  <Link className={linkCls} href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                    pharmacy verification guide
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/helpful-guides/fake-online-pharmacy-uk-how-to-spot-stay-safe">
                    fake online pharmacy UK guide
                  </Link>{" "}
                  can help with that first check.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="highest-success" heading="Which weight loss injection has the highest success rate?">
                <p className={`text-lg md:text-xl ${p}`}>
                  In clinical trials, GLP-1-based injections such as semaglutide (Wegovy) and dual-action drugs like tirzepatide (Mounjaro-type preparations) tend to have some of the highest success rates, with average weight loss of about 15-20% over a year in carefully monitored groups. However, success rates in real-world clinics can be lower, and side effects and long-term adherence are important factors. No single injection works for everyone, and the &quot;best&quot; choice depends on your health, side-effect tolerance, and whether you can be monitored safely by your GP or a specialist team.
                </p>

                <p className={p}>If you are searching &quot;which weight loss injection has the highest success rate in Middlesbrough?&quot;, the answer is complicated:</p>

                <p className={`font-semibold ${strong}`}>Semaglutide (Wegovy):</p>
                <p className={p}>
                  In trials, many patients lose around 15% of body weight over 68 weeks, with some losing more. It is usually given as a weekly injection, with doses slowly increased over several months to reduce nausea. Side effects often improve over time, but some people cannot tolerate higher doses at all.
                </p>

                <p className={`font-semibold ${strong}`}>Tirzepatide-type (Mounjaro-style):</p>
                <p className={p}>
                  These drugs act on both GLP-1 and GIP receptors. In trials, patients often lose around 18-24% of body weight, which is impressive but not guaranteed. Availability in UK clinics can vary, and supply is sometimes limited.
                </p>

                <p className={`font-semibold ${strong}`}>Liraglutide (Saxenda):</p>
                <p className={p}>
                  An older GLP-1, usually given daily. It typically produces around 8-12% weight loss on average, which is still significant but generally less dramatic than newer options.
                </p>

                <p className={p}>Success rates depend on several factors:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>How well patients stick to the injections and dose-increase schedule.</li>
                  <li>Whether they also change their diet, activity, and sleep habits.</li>
                  <li>Whether they have underlying conditions (e.g., diabetes, heart disease, kidney problems) that affect how the drug works.</li>
                </ul>

                <p className={`mt-4 ${p}`}>Therefore, no single injection can be declared &quot;the best&quot; for everyone. What matters is:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Your medical history.</li>
                  <li>Your BMI and risk factors.</li>
                  <li>Your ability to tolerate side effects.</li>
                  <li>Whether you will have proper follow-up and monitoring.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  This is why clinicians often prefer to start with the NHS-recommended pathway before moving to private GLP-1 injections, and why many clinics in Middlesbrough will insist on blood tests, BMI calculations, and regular reviews. For direct medicine comparison, see{" "}
                  <Link className={linkCls} href="/compare/wegovy-vs-mounjaro">
                    Wegovy versus Mounjaro
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                    Mounjaro versus Wegovy versus Saxenda
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="prescriptions" heading="What can doctors prescribe for weight loss in the UK?">
                <p className={`text-lg md:text-xl ${p}`}>
                  In the UK, doctors can prescribe licensed weight-loss medicines only to patients who meet specific criteria, often after attempting lifestyle changes. The most prominent options are GLP-1 receptor agonists such as semaglutide (Wegovy) and liraglutide (Saxenda), plus some older drugs like orlistat. Most of these are only available after a proper assessment, including blood tests, BMI calculation, and consideration of other health conditions. Non-medication pathways (NHS weight-management programmes, specialist obesity services, and bariatric surgery) are also part of the picture, and many GPs will try these before writing a prescription.
                </p>

                <p className={p}>For people in Middlesbrough, the question &quot;what can doctors actually prescribe for weight loss here?&quot; can be broken down into three main categories:</p>

                <p className={`font-semibold ${strong}`}>Pharmaceutical weight-loss medications:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>GLP-1 receptor agonists (semaglutide, liraglutide, tirzepatide-type):</li>
                  <li>Used for chronic weight management in eligible adults.</li>
                  <li>Require careful titration and monitoring.</li>
                  <li>Orlistat (Xenical):</li>
                  <li>An older drug that reduces fat absorption in the gut.</li>
                  <li>Typically used for people who cannot tolerate GLP-1s or when they are not appropriate.</li>
                  <li>Can cause oily stools and other GI side effects.</li>
                </ul>

                <p className={`mt-4 font-semibold ${strong}`}>Referrals and non-drug options:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Referral to NHS-funded weight-management programmes (group-based or online-hybrid).</li>
                  <li>Referral to specialist obesity clinics (for very high BMI or complex conditions).</li>
                  <li>Exercise and lifestyle prescriptions (e.g., referral to local leisure centres, walking groups, or online activity programmes).</li>
                </ul>

                <p className={`mt-4 font-semibold ${strong}`}>Surgical options (in selected cases):</p>

                <p className={p}>
                  Bariatric surgery (for example, gastric sleeve or gastric bypass) is only considered for people with very high BMI and obesity-related health problems. This is a separate pathway, usually managed through hospital-based specialist teams.
                </p>

                <p className={p}>Doctors in Middlesbrough will normally:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Review your BMI, medical history, blood tests, and current medications.</li>
                  <li>Check for contraindications (e.g., pregnancy, pancreatitis, certain thyroid issues).</li>
                  <li>Discuss risks, benefits, and realistic expectations.</li>
                  <li>Decide whether lifestyle-only, medication-assisted, or surgery-referral is the safest and most appropriate next step.</li>
                </ul>

                <p className={`mt-4 ${p}`}>If you are considering GLP-1 or other weight-loss injections in Middlesbrough, it is important to:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Ask your GP whether they think you are a good candidate.</li>
                  <li>Ask what monitoring (blood tests, dose increases, side-effect checks) will be required.</li>
                  <li>Decide whether you trust the clinic and pharmacy that will supply the medication.</li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="private-clinics" heading="Private clinics, aesthetics, and body-contouring around Middlesbrough">
                <p className={`text-lg md:text-xl ${p}`}>
                  In and around Middlesbrough, some private clinics offer medical weight loss programmes with GLP-1 injections and body-contouring (such as fat-freezing or ultrasound fat-reduction) as add-ons. These are not substitutes for proper medical weight-management support, and they should only be used alongside lifestyle change. Body-contouring procedures can help reshape stubborn areas after significant weight loss, but they are not shortcuts to slimming, and they carry risks like every surgical or procedural treatment.
                </p>

                <p className={p}>
                  Private clinics in urban areas like Middlesbrough and nearby Cleveland often market themselves as providing &quot;medical weight loss & injections&quot; combined with aesthetic body-contouring. For example:
                </p>

                <p className={p}>Some clinics describe metabolic weight-loss programmes that include:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Comprehensive blood tests.</li>
                  <li>Personalised diet plans.</li>
                  <li>Prescription GLP-1 injections (Wegovy-style, Ozempic-style, or Saxenda-style).</li>
                  <li>Follow-up appointments and dose adjustments.</li>
                </ul>

                <p className={`mt-4 ${p}`}>Others focus more on aesthetic body-contouring after weight loss:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Fat-freezing (cryolipolysis).</li>
                  <li>Ultrasound-guided fat-dissolving treatments.</li>
                  <li>Non-surgical skin-tightening procedures.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  These services can be helpful after major weight loss, when someone has lost 10-20 kg or more through lifestyle changes or medication, and still has stubborn pockets of fat (on the tummy, hips, or thighs, for example). However, they are not:
                </p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>A replacement for healthy eating and physical activity.</li>
                  <li>A way to bypass the need for behaviour change.</li>
                  <li>Always safe for everyone (for example, people with certain skin conditions, cardiovascular issues, or poor healing may be unsuitable candidates).</li>
                </ul>

                <p className={`mt-4 ${p}`}>When evaluating a clinic in or near Middlesbrough, consider:</p>

                <p className={`font-semibold ${strong}`}>Professional regulation:</p>
                <p className={p}>Check that the doctors are GMC-registered and that the clinic is CQC-registered where applicable.</p>
                <p className={p}>Check that the pharmacy supplying the medication is GPhC-registered.</p>

                <p className={`mt-4 font-semibold ${strong}`}>Transparency:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Clear pricing that includes all consultations, blood tests, and repeat doses.</li>
                  <li>Clear information about side effects (nausea, vomiting, gallbladder risk, pancreatitis risk).</li>
                  <li>Clear explanation of what happens if you experience side effects or miss a dose.</li>
                </ul>

                <p className={`mt-4 font-semibold ${strong}`}>Continuity of care:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Does the clinic try to involve your GP in shared care?</li>
                  <li>Do they keep proper records and follow-up notes?</li>
                  <li>Are they realistic about how much weight you can expect to lose?</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Many patients in Middlesbrough will find that the best approach is to start with NHS-based support, then consider private GLP-1 or body-contouring only if they meet the criteria and feel comfortable with the risks and costs. For budgeting, compare{" "}
                  <Link className={linkCls} href="/mounjaro-price-comparison">
                    Mounjaro prices
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/wegovy-price-comparison">
                    Wegovy prices
                  </Link>
                  , and{" "}
                  <Link className={linkCls} href="/saxenda-price-comparison">
                    Saxenda prices
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="advanced" heading="Bariatric surgery and body-contouring as advanced options">
                <p className={`text-lg md:text-xl ${p}`}>
                  Bariatric surgery (such as gastric sleeve or gastric bypass) is reserved for people with severe obesity (usually BMI 40+ or 35+ with obesity-related conditions) who have tried and failed to lose weight through lifestyle and medication. These procedures can lead to substantial weight loss but are major surgeries with risks and long-term nutritional implications. Aesthetic body-contouring (such as fat-freezing, skin-tightening, or surgical lifts) may be considered after major weight loss to reshape the body, but these are cosmetic procedures and not first-line treatments.
                </p>

                <p className={p}>
                  For some people in Middlesbrough, weight has reached a level where lifestyle changes, diet and exercise, and even GLP-1 injections may not be enough to reach a safer, healthier weight. In these cases, bariatric surgery can be an option, but it is only offered under strict criteria.
                </p>

                <p className={p}>Typical NHS-relevant criteria might include:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>BMI &ge;40, or BMI &ge;35 with serious obesity-related conditions (e.g., type 2 diabetes, sleep apnoea, severe joint problems).</li>
                  <li>Evidence that non-surgical approaches (diet, activity, behaviour support) have been tried and have not produced enough change.</li>
                  <li>Confirmation from a multidisciplinary team (including dietitians, psychologists, and surgeons) that the patient can follow the required lifestyle changes after surgery.</li>
                </ul>

                <p className={`mt-4 ${p}`}>Common procedures include:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Sleeve gastrectomy (gastric-sleeve surgery): A large portion of the stomach is removed, reducing its size and capacity.</li>
                  <li>Roux-en-Y gastric bypass: The stomach is made smaller, and the small intestine is re-routed to change how food is absorbed.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  These procedures can lead to 25-30% or more total body weight loss over 1-2 years, but they come with significant risks and long-term commitments:
                </p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Vitamin and mineral deficiencies (patients often require lifelong supplements).</li>
                  <li>Dumping syndrome (rapid stomach emptying after meals, causing nausea, sweating, and dizziness).</li>
                  <li>The need for follow-up, sometimes for life.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Body-contouring treatments (non-surgical or surgical) usually come after someone has already lost a large amount of weight, either through surgery, medication, or lifestyle changes. Examples include:
                </p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Liposuction to remove stubborn fat.</li>
                  <li>Tummy tucks (abdominoplasty) to remove excess skin and tighten abdominal muscles.</li>
                  <li>Non-surgical fat-freezing (cryolipolysis) or ultrasound-based fat-reduction procedures.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  These are not weight-loss treatments in the traditional sense; they are body-shaping procedures that may help someone feel more confident, but they will not fix underlying obesity if lifestyle issues remain unaddressed.
                </p>

                <p className={p}>In Middlesbrough, as in the rest of the UK, these advanced options should only be considered after a thorough discussion with:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Your GP.</li>
                  <li>A specialist obesity team (if available).</li>
                  <li>Qualified surgeons and aesthetic specialists.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Always ensure that the clinic and surgeon are properly regulated, and that you understand the risks and long-term follow-up requirements.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="timelines" heading="Realistic timelines and what “success” looks like">
                <p className={`text-lg md:text-xl ${p}`}>
                  Realistic weight loss in Middlesbrough usually means losing around 0.5-1 kg per week, which can lead to 5-10 kg in 3-6 months and 15-20 kg in about a year, depending on starting weight and adherence. Success is not just a number on the scale; it also includes better blood pressure, improved blood sugar control, increased mobility, and better mental wellbeing. No injection or clinic can guarantee rapid, effortless weight loss without ongoing lifestyle change.
                </p>

                <p className={p}>When people in Middlesbrough start searching for the best weight loss treatment, many of them secretly hope for:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Lose 5 kg in 1 week.</li>
                  <li>Lose 20 kg in 2 months.</li>
                </ul>

                <p className={`mt-4 ${p}`}>Unfortunately, guidance from the NHS, NICE, and major medical bodies is clear: safe, sustainable weight loss happens gradually. A realistic pace is:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>0.5-1 kg per week under medical supervision.</li>
                  <li>5-10% of body weight over 6-12 months.</li>
                  <li>Higher absolute losses (15-20 kg) for people with larger amounts of weight to lose, but still over months, not days.</li>
                </ul>

                <p className={`mt-4 ${p}`}>If you are on GLP-1 injections, you might lose weight faster than with lifestyle alone, but:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>The most dramatic drops often come in the first few months.</li>
                  <li>Longer-term success depends on maintaining new habits once treatment stops or dose changes.</li>
                </ul>

                <p className={`mt-4 ${p}`}>Success should be measured in more than just weight:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Health markers: Improved blood pressure, blood sugar, and cholesterol.</li>
                  <li>Physical ability: Walking further, climbing stairs without breathlessness.</li>
                  <li>Mental health: Less fatigue, better mood, and more confidence.</li>
                </ul>

                <p className={`mt-4 ${p}`}>Be suspicious of any clinic or advert that promises:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>&quot;Lose 1 stone in 2 weeks without side effects.&quot;</li>
                  <li>&quot;No need to change your diet or exercise.&quot;</li>
                  <li>&quot;Results guaranteed.&quot;</li>
                </ul>

                <p className={`mt-4 ${p}`}>These are almost always overstating what is possible and safe.</p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Key guidance">
                <p className={p}>
                  Outbound links stay minimal on this page to avoid duplicating other city pages. Use national guidance below, then return to Health Wise comparisons for prices, safety, and medicine explainers.
                </p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>
                    <a
                      className={linkCls}
                      href="https://www.nice.org.uk/guidance/ng246"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NICE NG246 (overweight and obesity management)
                    </a>
                  </li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="trust" heading="Why Health Wise is a comparator, not a prescriber">
                <p className={p}>
                  We publish educational comparisons. We do not prescribe or dispense. A registered prescriber must decide eligibility, monitoring, and dose changes.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="next-steps"
                heading="Practical next steps (UK wide, including Middlesbrough)"
              >
                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>
                    Compare treatment types on{" "}
                    <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                      best weight loss treatments in the UK
                    </Link>
                    .
                  </li>
                  <li>
                    Review medicine basics on{" "}
                    <Link className={linkCls} href="/what-is-mounjaro">
                      Mounjaro
                    </Link>
                    ,{" "}
                    <Link className={linkCls} href="/what-is-wegovy">
                      Wegovy
                    </Link>
                    , and{" "}
                    <Link className={linkCls} href="/what-is-saxenda">
                      Saxenda
                    </Link>
                    .
                  </li>
                  <li>
                    Verify sellers with our{" "}
                    <Link className={linkCls} href="/helpful-guides/fake-online-pharmacy-uk-how-to-spot-stay-safe">
                      fake online pharmacy UK guide
                    </Link>
                    .
                  </li>
                </ol>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="disclaimer" heading="Disclaimer">
                <p className={p}>
                  This article is informational and not medical advice. Seek help from a clinician for diagnosis, prescriptions, and personalised monitoring.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="FAQ section: Middlesbrough-focused weight-loss questions">
                <p className={p}>
                  Below are rewritten versions of the questions you provided, with the same meaning but expressed in different words. The answers are informative, clear, and E-E-A-T-friendly, so they can be picked up by search engines while still reading naturally to humans.
                </p>

                <div className="mt-6 space-y-6">
                  <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                    <p className={`text-base font-semibold ${strong}`}>1. What is the most effective weight loss treatment for adults in Middlesbrough?</p>
                    <p className={`mt-2 text-sm leading-relaxed ${p}`}>
                      The most effective treatment for weight loss in adults in Middlesbrough is usually a combination of medically supervised lifestyle change, support groups, and, where appropriate, prescription weight-loss medications like GLP-1 injections. Simply relying on pills or injections without changing diet, activity, and sleep habits rarely leads to long-term success.
                    </p>
                    <p className={`mt-3 text-sm leading-relaxed ${p}`}>For most adults in Middlesbrough, the best-evidence-based approach is:</p>
                    <ul className={`mt-3 list-disc space-y-2 pl-6 text-sm ${p}`}>
                      <li>Start with NHS-funded weight-management support (dietitian-led or lifestyle-based groups).</li>
                      <li>If your BMI and health risks meet the criteria, work with your GP to consider GLP-1 injections or other weight-loss medicines under careful monitoring.</li>
                      <li>Commit to long-term changes (better food choices, more movement, stress management), because no medicine works forever if old habits return.</li>
                    </ul>
                    <p className={`mt-3 text-sm leading-relaxed ${p}`}>
                      There is no universal &quot;best&quot; treatment, but the safest and most effective patterns are those that combine medical oversight with behaviour change.
                    </p>
                  </div>

                  <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                    <p className={`text-base font-semibold ${strong}`}>2. Which prescription weight-loss injection tends to produce the greatest average weight loss in UK trials?</p>
                    <p className={`mt-2 text-sm leading-relaxed ${p}`}>
                      In UK and international trials, GLP-1-based injections such as semaglutide (Wegovy) and tirzepatide-type drugs show some of the highest average weight-loss results, often around 12-20% of body weight after about a year when combined with lifestyle changes. However, real-world outcomes can differ, and not everyone can tolerate the side effects. No single injection is guaranteed to work for everyone, and the &quot;best&quot; choice depends on your health, risk factors, and whether you can be monitored correctly.
                    </p>
                    <p className={`mt-3 text-sm leading-relaxed ${p}`}>
                      These questions are usually asked in a slightly more direct way, such as:
                    </p>
                    <p className={`mt-3 text-sm leading-relaxed ${p}`}>
                      &quot;Which weight loss injection has the highest success rate?&quot;
                    </p>
                    <p className={`mt-3 text-sm leading-relaxed ${p}`}>
                      In that form, the answer is similar: the newer GLP-1 options (Semaglutide-Wegovy, and tirzepatide-type) tend to show the largest average weight loss in trials, but they also come with more side effects and stricter eligibility rules than older options like Saxenda.
                    </p>
                  </div>

                  <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                    <p className={`text-base font-semibold ${strong}`}>3. What can UK doctors legally prescribe for weight loss, and under what conditions?</p>
                    <p className={`mt-2 text-sm leading-relaxed ${p}`}>
                      In the UK, doctors can prescribe weight-loss medicines only when certain criteria are met, often after attempts at lifestyle change. The main options are GLP-1 receptor agonists (such as semaglutide for Wegovy, or liraglutide for Saxenda) and the older drug orlistat. These are usually only suitable for adults with higher BMI and obesity-related health risks, and treatment must be accompanied by proper monitoring, including blood tests and dose-titration. Doctors can also refer patients to NHS weight-management and specialist obesity services rather than prescribing medication.
                    </p>
                    <p className={`mt-3 text-sm leading-relaxed ${p}`}>
                      This question maps to &quot;What can doctors prescribe for weight loss in the UK?&quot; in your original list. The key points for someone in Middlesbrough considering treatment are:
                    </p>
                    <ul className={`mt-3 list-disc space-y-2 pl-6 text-sm ${p}`}>
                      <li>Medication is not the first line; lifestyle programmes are preferred.</li>
                      <li>When medication is used, it must be prescribed appropriately and monitored regularly.</li>
                      <li>Some patients may be better suited for non-drug options or surgical pathways.</li>
                    </ul>
                  </div>

                  <div className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                    <p className={`text-base font-semibold ${strong}`}>4. What is the NHS-funded weight loss programme, and how can someone in Middlesbrough access it?</p>
                    <p className={`mt-2 text-sm leading-relaxed ${p}`}>
                      NHS-funded weight loss programmes are structured lifestyle services that help adults lose 5-10% of their body weight over 6-12 months through diet, activity, and behaviour change support. In Middlesbrough, access is usually via a referral from your GP, based on your BMI and health needs. These services do not typically offer GLP-1 injections directly, but they may consider them later if lifestyle changes are not enough. They are often free or low-cost, making them one of the safest starting points for many people in the North East.
                    </p>
                    <p className={`mt-3 text-sm leading-relaxed ${p}`}>
                      This question corresponds to &quot;What is the NHS funded weight loss program?&quot; in your list. For Middlesbrough residents, practical steps are:
                    </p>
                    <ul className={`mt-3 list-disc space-y-2 pl-6 text-sm ${p}`}>
                      <li>Talk to your GP about your weight, any health issues, and your motivation.</li>
                      <li>Ask specifically about NHS weight-management referrals (tier 2 or tier 3).</li>
                      <li>Be prepared for a waiting list and a structured plan rather than instant injections.</li>
                    </ul>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion: How to choose the best weight loss treatment in Middlesbrough">
                <p className={`text-lg md:text-xl ${p}`}>
                  The best weight loss treatment in Middlesbrough is not a single product, injection, or clinic; it is a personalised, evidence-based pathway that fits your health, your lifestyle, and your access to support. For many people in Middlesbrough, the safest and most sustainable route is:
                </p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Start with NHS-funded weight-management services (GP referral, local lifestyle groups, specialist obesity support where appropriate).</li>
                  <li>If you meet the criteria and feel comfortable with the risks, consider GLP-1 weight-loss injections under medical supervision, with proper follow-up and blood tests.</li>
                  <li>Combine this with local physical activity (Tees-side paths, local parks, gyms, community centres).</li>
                  <li>Be cautious of over-promising adverts, especially those that downplay side effects, costs, or follow-up requirements.</li>
                  <li>Only consider bariatric surgery or advanced body-contouring after thorough discussion with specialists, and only if you are ready for the long-term commitment.</li>
                </ul>

                <p className={`mt-4 text-lg md:text-xl ${p}`}>
                  By understanding your options, asking the right questions, and focusing on long-term behaviour change, you can move towards a healthier weight in a way that is realistic, evidence-based, and safe.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="more-uk" heading="Other places in the UK">
                <p className={p}>
                  Browse the{" "}
                  <Link className={linkCls} href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}>
                    UK locations index
                  </Link>
                  . Nearby:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-durham">
                    Durham
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-newcastle-upon-tyne">
                    Newcastle upon Tyne
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-york">
                    York
                  </Link>
                  .
                </p>
              </GuideSection>
            </article>

            <div className="mt-12">
              <GuideSharePanel shareUrl={shareUrl} title={PAGE_TITLE} />
            </div>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
