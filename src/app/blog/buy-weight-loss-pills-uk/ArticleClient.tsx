"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import BlogArticleColumn from "@/components/blog/BlogArticleColumn";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection, GuideTable } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  blogImgPath,
  BUY_WEIGHT_LOSS_PILLS_HERO_WEBP,
  BUY_WEIGHT_LOSS_PILLS_INLINE_WEBP,
} from "./blog-assets";

const SHARE_PATH = "/blog/buy-weight-loss-pills-uk";
const TITLE = "Buy Weight Loss Pills UK: Safe Options, Prices and Treatment Comparison";
const DESCRIPTION =
  "Buy weight loss pills UK safely. Compare orlistat, Mysimba, GLP-1 tablets, prices, risks and pharmacy checks.";
const HERO_SRC = blogImgPath(BUY_WEIGHT_LOSS_PILLS_HERO_WEBP);
const INLINE_SRC = blogImgPath(BUY_WEIGHT_LOSS_PILLS_INLINE_WEBP);

const TOC = [
  { id: "buy-online", label: "Can you buy online in the UK?" },
  { id: "what-are-pills", label: "What are weight loss pills?" },
  { id: "best-options", label: "Best weight loss pills UK" },
  { id: "pills-vs-injections", label: "Pills vs injections" },
  { id: "costs", label: "How much do they cost?" },
  { id: "compare-price", label: "How to compare price properly" },
  { id: "pharmacy-safety", label: "Why pharmacy safety matters" },
  { id: "eligibility", label: "Who may be eligible?" },
  { id: "pills-vs-fat-burners", label: "Pills vs fat burners" },
  { id: "comparison-table", label: "Comparison table" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "conclusion", label: "Conclusion" },
];

const SOCIAL_HASHTAGS =
  "#BuyWeightLossPills #OrlistatUK #MysimbaUK #WegovyPill #GLP1Tablets #OnlinePharmacyUK #WeightLossPillsUK";

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);
  const shareUrl = `${siteOrigin()}${SHARE_PATH}`;

  return (
    <div
      className={`w-full font-sans transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-300" : "bg-white text-slate-800"}`}
    >
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
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

        <nav
          aria-label="Breadcrumb"
          className="mb-10 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400"
        >
          <Link href="/" className="transition-colors hover:text-emerald-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="transition-colors hover:text-emerald-600">
            Blog
          </Link>
          <span>/</span>
          <span className={darkMode ? "text-slate-200" : "text-slate-600"}>
            Buy Weight Loss Pills UK
          </span>
        </nav>

        <BlogArticleColumn toc={TOC} darkMode={darkMode}>
          <header
            className={`mb-8 border-b pb-8 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
          >
              <h1
                className={`mb-6 text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl md:text-[44px] ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Buy Weight Loss Pills UK: Safe Options, Prices and Treatment Comparison
              </h1>
              <div
                className={`mb-8 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  19 Jun 2026
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  12 min read
                </span>
              </div>

              <BlogArticleHeroImage
                src={HERO_SRC}
                alt="Buy weight loss pills UK safely with options, prices and treatment comparison guidance"
              />
              <div
                id="guide-article-hero-end"
                aria-hidden
                className="pointer-events-none h-0 w-full overflow-hidden"
              />
            </header>

            <article className={`space-y-8 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              <GuideSection darkMode={darkMode} id="intro" heading="Buy Weight Loss Pills UK: Safe Options, Prices and Treatment Comparison">
                <p className="text-lg md:text-xl">
                  Buying weight loss pills in the UK can feel confusing because the phrase covers several different types of treatment. Some people are looking for prescription weight loss tablets, while others are searching for pharmacy weight loss capsules, appetite support, or a non-injection alternative to GLP-1 weight loss treatment.
                </p>
                <p>
                  However, the safest decision is not simply choosing the lowest price. A good weight loss treatment should be legal, clinically suitable, supplied by a registered pharmacy, and matched to your health profile.
                </p>
                <p>
                  Healthwise360 helps UK users compare weight loss treatment options, prices, provider policies, and pharmacy safety checks in one place. Therefore, this guide explains how to buy weight loss pills safely in the UK, what options may be available, how prices can vary, and how tablets compare with injections.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="buy-online" heading="Can You Buy Weight Loss Pills Online in the UK?">
                <p>
                  Yes, adults in the UK may be able to buy certain weight loss pills online, but the route depends on the medicine. Some treatments require a private prescription after an online consultation, while lower-dose options may be available through a pharmacy after suitability checks.
                </p>
                <p>
                  For example, the NHS explains that orlistat is used to treat obesity and can be available as prescription Xenical or at a lower dose as Alli or Orlos from a pharmacy. It also notes that orlistat should be bought from a registered pharmacy because fake weight loss medicines are sold online.
                </p>
                <p>
                  This is why a proper weight loss pill comparison should look beyond the headline price. Instead, you should compare:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>Whether the treatment is prescription-only</li>
                  <li>Whether a clinical consultation is required</li>
                  <li>Whether the pharmacy is properly registered</li>
                  <li>Whether delivery and consultation fees are included</li>
                  <li>Whether the treatment suits your BMI and medical history</li>
                  <li>Whether the monthly price is realistic long term</li>
                </ul>
                <p>
                  In short, you can buy weight loss pills online in the UK, but you should avoid unregulated sellers, social media offers, and websites that promise fast fat loss without a medical review. Before you compare providers, it helps to <Link href="/tools/bmi-calculator" className="font-medium text-emerald-600 hover:underline">check your BMI for weight loss treatment</Link> so you know whether a consultation is likely to be realistic.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="what-are-pills" heading="What Are Weight Loss Pills?">
                <p>
                  Weight loss pills are oral treatments that may support weight management when combined with diet, activity, and ongoing lifestyle changes. However, they do not all work in the same way.
                </p>
                <p>
                  Some weight loss pills reduce how much fat your body absorbs from food. Others may work on appetite, cravings, or fullness. Besides that, the UK market is now moving toward oral GLP-1 options, which may appeal to people who want a non-injection treatment.
                </p>
                <p>
                  The main categories include:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>Fat absorption blockers, such as orlistat</li>
                  <li>Appetite-focused tablets, such as Mysimba</li>
                  <li>Lower-dose pharmacy options, such as Alli or Orlos</li>
                  <li>New oral GLP-1 tablets, such as semaglutide tablets approved for weight management</li>
                  <li>Non-prescription slimming aids, which are usually not the same as regulated obesity medicines</li>
                </ul>
                <p>
                  Therefore, when people search for &ldquo;buy weight loss pills&rdquo;, they may not all mean the same thing. Some want the cheapest weight loss price. Others want a clinically proven weight loss treatment. Meanwhile, some want to compare pills against injections such as Mounjaro or Wegovy. If you are at that stage, you can <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-medium text-emerald-600 hover:underline">compare Mounjaro vs Wegovy vs Saxenda</Link> to see how the main injection routes compare before you decide on a pill.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="best-options" heading="Best Weight Loss Pills UK: What Options Are Commonly Compared?">
                <p>
                  There is no single best weight loss pill for everyone. The right option depends on your BMI, health conditions, current medicines, eating habits, budget, and whether you want a prescription treatment or a pharmacy option.
                </p>

                <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Orlistat
                </h3>
                <p>
                  Orlistat is one of the most established oral weight loss medicines in the UK. It works by reducing how much fat is absorbed by the body. According to the NHS, around a third of the fat from food is passed out instead of being absorbed.
                </p>
                <p>
                  Orlistat is usually considered when someone has a BMI of 30 or above, or a BMI of 28 or above with a weight-related condition such as high blood pressure or type 2 diabetes. However, eligibility can vary depending on whether you are using NHS services or a private provider.
                </p>
                <p>
                  One reason people compare orlistat is price. It is often cheaper than GLP-1 injections, especially at entry level. However, it may not suit everyone because it is linked to digestive side effects and must be used with a suitable diet.
                </p>
                <p>
                  For Healthwise360 users, this is where a weight loss treatment price comparison becomes useful. Comparing orlistat should include the number of capsules, the treatment duration, consultation fees, and whether the provider offers follow-up support. You can start on the homepage to <Link href="/" className="font-medium text-emerald-600 hover:underline">compare weight loss treatment prices</Link> across providers before you commit to one option.
                </p>

                <h3 className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Alli and Orlos
                </h3>
                <p>
                  Alli and Orlos are lower-dose orlistat products that may be available through a pharmacy. However, they are still not casual &ldquo;diet pills&rdquo; in the way many people imagine.
                </p>
                <p>
                  The NHS states that lower-dose orlistat can be bought from a pharmacy, but users should check the medicine leaflet and speak to a pharmacist or doctor if unsure.
                </p>
                <p>
                  This matters because buyers often compare pharmacy weight loss pills with prescription treatment without understanding the difference. A lower-dose pharmacy option may be easier to access, but it may also have different suitability rules, different strength, and different expectations.
                </p>
                <p>
                  Therefore, if you are comparing fat loss pills, always check:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>Active ingredient</li>
                  <li>Strength</li>
                  <li>Suitability rules</li>
                  <li>Side effects</li>
                  <li>Whether pharmacist advice is included</li>
                  <li>Total cost for a realistic treatment period</li>
                </ul>

                <h3 className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Mysimba
                </h3>
                <p>
                  Mysimba is a prescription weight management tablet containing naltrexone and bupropion. The European Medicines Agency explains that it is used with diet and exercise to help manage weight in adults with obesity, or overweight adults with weight-related complications.
                </p>
                <p>
                  Unlike orlistat, Mysimba does not work mainly by reducing fat absorption. Instead, it acts on areas involved in appetite and food intake. Therefore, it is often compared by people who want tablet-based appetite support.
                </p>
                <p>
                  However, Mysimba is not suitable for everyone. Because it contains active medicines that may interact with health conditions or other medicines, it requires proper clinical assessment.
                </p>
                <p>
                  When comparing Mysimba prices, do not only look at the first-month cost. Instead, check whether the provider includes clinical review, follow-up, delivery, and guidance on what happens if the treatment is not suitable. For a deeper look at how one major provider handles weight loss treatment, read our <Link href="/pharmacies/zava" className="font-medium text-emerald-600 hover:underline">Zava weight loss review</Link>.
                </p>

                <h3 className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Semaglutide Tablets
                </h3>
                <p>
                  The UK weight loss pill market changed in June 2026 when the MHRA approved the UK&rsquo;s first GLP-1 receptor agonist tablet for weight loss and weight management. The approved semaglutide tablet may be prescribed to adults with obesity, or adults who are overweight with at least one weight-related comorbidity. It is prescription-only.
                </p>
                <p>
                  This is important because many people who search &ldquo;buy weight loss pills&rdquo; are now looking for a non-injection alternative to GLP-1 treatment. However, it is not the same as a standard slimming tablet.
                </p>
                <p>
                  The MHRA explains that the semaglutide tablet should be taken on an empty stomach after fasting, with no food or drink for at least 30 minutes after taking it. It is also not currently available through the NHS at the time of the MHRA announcement.
                </p>
                <p>
                  Therefore, Healthwise360 should treat this as a major new content opportunity. A dedicated page for Wegovy pill UK or semaglutide tablet weight loss UK could support the main &ldquo;buy weight loss pills&rdquo; page and help build topical authority. If you want to see how the injectable version is priced while oral supply develops, check the <Link href="/wegovy-price-comparison" className="font-medium text-emerald-600 hover:underline">Wegovy price list UK</Link> for dose-by-dose comparison.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="pills-vs-injections" heading="Weight Loss Pills vs Weight Loss Injections">
                <p>
                  Many buyers compare tablets against injections before choosing a weight loss treatment. This is sensible because the best option is not always the cheapest or newest one.
                </p>
                <p>
                  Weight loss pills may appeal if you:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>Prefer an oral treatment</li>
                  <li>Do not want to use injections</li>
                  <li>Want a lower starting price</li>
                  <li>Want easier storage</li>
                  <li>Prefer a familiar tablet or capsule format</li>
                </ul>
                <p>
                  However, injections may appeal if you:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>Want a once-weekly routine</li>
                  <li>Are eligible for GLP-1 or GIP/GLP-1 treatment</li>
                  <li>Want a treatment with stronger average weight loss results</li>
                  <li>Are already comparing Mounjaro, Wegovy, or Saxenda</li>
                  <li>Want a more structured private weight loss programme</li>
                </ul>
                <p>
                  However, convenience is personal. A weekly injection may be easier for one person, while a daily tablet may feel simpler for someone else.
                </p>
                <p>
                  Therefore, the smarter question is not &ldquo;Which is best?&rdquo; but &ldquo;Which weight loss treatment fits my health profile, budget, and lifestyle?&rdquo; If injections are still on your shortlist, the <Link href="/mounjaro-price-comparison" className="font-medium text-emerald-600 hover:underline">Mounjaro price list UK</Link> is a practical next step alongside this pill comparison.
                </p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_SRC}
                  alt="Comparing weight loss pill options, prices and pharmacy safety checks in the UK"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection darkMode={darkMode} id="costs" heading="How Much Do Weight Loss Pills Cost in the UK?">
                <p>
                  Weight loss pill prices in the UK vary depending on the medicine, strength, provider, pack size, consultation model, and delivery fee.
                </p>
                <p>
                  Orlistat is often one of the lower-cost prescription options. Meanwhile, Mysimba may cost more because it is a different type of prescription tablet. Newer oral GLP-1 tablets may sit closer to GLP-1 pricing, although real-world private prices can vary as availability develops.
                </p>
                <p>
                  When comparing weight loss price, always check whether the price includes:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>Online consultation</li>
                  <li>Prescription review</li>
                  <li>Delivery</li>
                  <li>Follow-up support</li>
                  <li>Dose changes</li>
                  <li>Ongoing monitoring</li>
                  <li>Repeat prescription rules</li>
                </ul>
                <p>
                  For example, a provider may advertise a low starting price, but the total monthly cost may be higher once consultation, delivery, or follow-up is included. Besides that, some treatments may require review after a set period, which affects long-term cost planning.
                </p>
                <p>
                  This is where Healthwise360 can win against competitors. Instead of only showing &ldquo;from&rdquo; prices, Healthwise360 can help users compare weight loss treatment cost in a more practical way. For GLP-1 routes specifically, our guide to the <Link href="/prices/cheapest-options-uk" className="font-medium text-emerald-600 hover:underline">cheapest GLP-1 weight loss treatment options</Link> shows how injection pricing compares when you are weighing pills against pens.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="compare-price" heading="How to Compare Weight Loss Treatment Price Properly">
                <p>
                  A strong comparison should not only ask, &ldquo;Which provider is cheapest?&rdquo;
                </p>
                <p>
                  Instead, ask:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>
                    <strong className="font-semibold">What medicine is included?</strong> Orlistat, Alli, Mysimba, or semaglutide tablets are not the same.
                  </li>
                  <li>
                    <strong className="font-semibold">What strength or dose is being compared?</strong> A lower-dose option may look cheaper but may not be equivalent.
                  </li>
                  <li>
                    <strong className="font-semibold">How long does the pack last?</strong> Capsule count matters when comparing real cost.
                  </li>
                  <li>
                    <strong className="font-semibold">Is consultation included?</strong> Some online doctors include assessment in the treatment price, while others may separate costs.
                  </li>
                  <li>
                    <strong className="font-semibold">Is the pharmacy registered?</strong> Safety should come before price.
                  </li>
                  <li>
                    <strong className="font-semibold">What happens after the first month?</strong> Some treatments involve reviews, dose changes, or repeat prescription checks.
                  </li>
                  <li>
                    <strong className="font-semibold">Is lifestyle support included?</strong> Weight loss treatment usually works best when combined with diet, activity, and support.
                  </li>
                </ul>
                <p>
                  Because of this, the cheapest weight loss pill may not always be the best-value treatment. However, a transparent price comparison can help you avoid overpaying. To see exactly how we score providers on price and safety, read <Link href="/methodology" className="font-medium text-emerald-600 hover:underline">how Healthwise360 compares prices</Link> before you choose where to buy.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="pharmacy-safety" heading="Why Pharmacy Safety Matters Before Buying Weight Loss Pills">
                <p>
                  Weight loss pills are often targeted by unsafe online sellers because the demand is high. As a result, people may find fake products, unlicensed medicines, or websites that avoid proper clinical checks.
                </p>
                <p>
                  The NHS specifically warns that there are websites selling fake weight loss medicines and says private orlistat should be bought from a registered pharmacy.
                </p>
                <p>
                  Therefore, before buying any weight loss treatment online, check:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>The pharmacy is registered with the General Pharmaceutical Council</li>
                  <li>The website provides a real UK pharmacy name</li>
                  <li>There is a proper consultation or suitability check</li>
                  <li>The provider does not promise unrealistic results</li>
                  <li>The medicine is not being sold casually through social media</li>
                  <li>The site explains side effects and eligibility clearly</li>
                </ul>
                <p>
                  A safe provider should not make weight loss pills look like a quick cosmetic shortcut. Instead, they should explain who the treatment is for, who should avoid it, and when to speak to a clinician. The most reliable first step is to <Link href="/pharmacy-safety-gphc-verification" className="font-medium text-emerald-600 hover:underline">check pharmacy safety and GPhC verification</Link> before you pay.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="eligibility" heading="Who May Be Eligible for Weight Loss Pills?">
                <p>
                  Eligibility depends on the medicine. However, many regulated weight loss treatments are linked to BMI and weight-related health risks.
                </p>
                <p>
                  For orlistat, the NHS says it is usually prescribed for adults with a BMI of 30 or more, or 28 or more with a weight-related condition.
                </p>
                <p>
                  For Mysimba, the EMA describes use in adults with obesity or overweight adults with weight-related complications, alongside diet and exercise.
                </p>
                <p>
                  For semaglutide tablets, the MHRA says the treatment may be prescribed to adults with obesity, or adults who are overweight with at least one weight-related comorbidity.
                </p>
                <p>
                  However, BMI is only part of the decision. A clinician may also consider:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>Age</li>
                  <li>Pregnancy or breastfeeding</li>
                  <li>Existing conditions</li>
                  <li>Current medicines</li>
                  <li>Eating disorder history</li>
                  <li>Previous side effects</li>
                  <li>Blood pressure</li>
                  <li>Diabetes status</li>
                  <li>Liver, kidney, or heart health</li>
                </ul>
                <p>
                  Therefore, an online questionnaire is not just a formality. It is part of the safety process. Once you know your likely category, using our <Link href="/tools/weight-loss-tracker" className="font-medium text-emerald-600 hover:underline">weight loss tracker UK</Link> can help you monitor progress alongside any pill or injection route you choose.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="pills-vs-fat-burners" heading="Are Weight Loss Pills Better Than Fat Burners?">
                <p>
                  This is a major gap in competitor content. Many people searching for &ldquo;buy weight loss pills&rdquo; may also see supplement-style fat burners, carb blockers, binders, teas, or appetite gummies.
                </p>
                <p>
                  However, these are not the same as regulated weight loss medicines.
                </p>
                <p>
                  A prescription weight loss pill has a defined active ingredient, clinical suitability rules, and regulated supply. A supplement-style fat burner may be sold as a wellness product, but that does not mean it offers the same evidence, clinical oversight, or medical suitability checks.
                </p>
                <p>
                  Therefore, Healthwise360 should separate the two clearly:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>Weight loss medicines are regulated treatments used for obesity or weight management.</li>
                  <li>Weight loss supplements are wellness products and may not be suitable for medical weight management.</li>
                  <li>Fat loss results usually depend on a calorie deficit, long-term behaviour change, and medical support where appropriate.</li>
                </ul>
                <p>
                  This distinction helps Healthwise360 build trust and avoid looking like a generic diet-pill website.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="comparison-table" heading="Suggested Comparison Table">
                <div className="my-6 overflow-x-auto">
                  <GuideTable
                    headers={[
                      "Treatment type",
                      "Example options",
                      "Main purpose",
                      "Prescription needed?",
                      "Best for",
                    ]}
                    rows={[
                      {
                        cells: [
                          "Fat absorption pill",
                          "Orlistat, Xenical",
                          "Reduces fat absorption",
                          "Usually yes",
                          "People wanting an oral medicine",
                        ],
                      },
                      {
                        cells: [
                          "Lower-dose pharmacy option",
                          "Alli, Orlos",
                          "Lower-dose orlistat support",
                          "Pharmacy suitability check",
                          "Adults wanting pharmacy access",
                        ],
                      },
                      {
                        cells: [
                          "Appetite-focused tablet",
                          "Mysimba",
                          "Helps manage appetite and cravings",
                          "Yes",
                          "People needing appetite support",
                        ],
                      },
                      {
                        cells: [
                          "GLP-1 tablet",
                          "Semaglutide tablet",
                          "Helps reduce appetite and support weight loss",
                          "Yes",
                          "People wanting non-injection GLP-1 treatment",
                        ],
                      },
                      {
                        cells: [
                          "Injection treatment",
                          "Mounjaro, Wegovy, Saxenda",
                          "Stronger medical weight loss support",
                          "Yes",
                          "Eligible adults wanting structured treatment",
                        ],
                      },
                    ]}
                  />
                </div>
              </GuideSection>

              <section
                id="faq"
                className={`mt-16 border-t pt-10 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
              >
                <h2 className={`mb-8 text-3xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Frequently asked questions
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Can I buy weight loss pills online in the UK?
                    </h3>
                    <p>
                      Yes, some weight loss pills can be bought online in the UK, but regulated treatments should come from a registered pharmacy and may require a prescription or pharmacist suitability check. Avoid unregulated websites, social media sellers, and offers that skip medical assessment.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      What is the best weight loss pill in the UK?
                    </h3>
                    <p>
                      There is no single best weight loss pill for everyone. Orlistat may suit people looking for a fat absorption treatment, Mysimba may suit some people looking for appetite support, and semaglutide tablets may suit eligible adults looking for an oral GLP-1 option.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Are weight loss pills cheaper than injections?
                    </h3>
                    <p>
                      Often, older oral options such as orlistat may have a lower starting price than GLP-1 injections. However, the total weight loss treatment price depends on pack size, provider fees, delivery, follow-up, and how long the treatment continues.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Can I buy orlistat without a prescription?
                    </h3>
                    <p>
                      Lower-dose orlistat products such as Alli or Orlos may be available from a pharmacy. However, prescription-strength options such as Xenical or prescription orlistat usually require a private or NHS prescription.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Is Mysimba the same as orlistat?
                    </h3>
                    <p>
                      No. Orlistat mainly reduces fat absorption from food, while Mysimba acts on appetite and food intake pathways. Therefore, the right choice depends on your health profile, eating habits, suitability, and clinical review.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Is there a weight loss pill version of Wegovy?
                    </h3>
                    <p>
                      The MHRA approved a semaglutide tablet for weight loss and weight management in the UK on 11 June 2026. However, it is prescription-only and availability may depend on private providers and future NHS decisions.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Are fat burners the same as weight loss pills?
                    </h3>
                    <p>
                      No. Many fat burners are supplements, not regulated obesity medicines. They should not be treated as equal to prescription weight loss treatment.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      What should I check before buying weight loss pills?
                    </h3>
                    <p>
                      Check the pharmacy registration, consultation process, active ingredient, treatment suitability, side effects, total cost, delivery fees, and follow-up support. Also, use a BMI calculator before comparing treatment options.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  Buying weight loss pills in the UK should be a careful, safety-first decision. The best option is not always the cheapest pill or the most advertised treatment. Instead, the right choice depends on your BMI, health history, goals, budget, and whether tablets or injections fit your lifestyle better.
                </p>
                <p>
                  For some adults, orlistat may be a practical and lower-cost starting point. For others, Mysimba may be worth discussing with a clinician. Meanwhile, the approval of semaglutide tablets has created a new oral GLP-1 pathway for eligible adults who want a non-injection option.
                </p>
                <p>
                  However, every serious weight loss treatment should be supplied through a regulated route with proper checks. Therefore, before you buy weight loss pills online, compare the treatment type, price, provider safety, and pharmacy registration.
                </p>
                <p>
                  Healthwise360 can help UK users compare weight loss treatment prices, understand provider differences, and make safer decisions before choosing where to buy.
                </p>
              </GuideSection>

              <section id="limitations" className="scroll-mt-28">
                <h2 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Suggested hashtags
                </h2>
                <p className={`mt-4 text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  {SOCIAL_HASHTAGS}
                </p>
              </section>
            </article>

            <div className="mt-10">
              <GuideSharePanel url={shareUrl} title={TITLE} description={DESCRIPTION} />
            </div>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
