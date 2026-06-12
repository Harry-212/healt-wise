"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";
import { blogImgPath, BUY_INJECTIONS_CONFUSED_PNG, BUY_INJECTIONS_SOLUTION_PNG } from "./blog-assets";

const SHARE_PATH = "/blog/buy-weight-loss-injections-uk";
const HERO_SRC = blogImgPath(BUY_INJECTIONS_CONFUSED_PNG);
const INLINE_SRC = blogImgPath(BUY_INJECTIONS_SOLUTION_PNG);

const TOC = [
  { id: "why-buy", label: "Why people buy weight loss injections" },
  { id: "which-injections", label: "Which injections can you buy in the UK" },
  { id: "compare-prices", label: "How to compare prices before you buy" },
  { id: "what-to-check", label: "What to check before checkout" },
  { id: "buy-safely", label: "Where to buy weight loss injections safely" },
  { id: "which-option", label: "Which option may suit you best" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "conclusion", label: "Conclusion" },
];

const SOCIAL_HASHTAGS =
  "#BuyWeightLossInjections #WeightLossUK #MounjaroPrice #WegovyPrice #SaxendaCost #UKOnlinePharmacy #WeightLossTreatmentPrice";

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);
  const shareUrl = `${siteOrigin()}${SHARE_PATH}`;

  return (
    <div
      className={`w-full font-sans transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-300" : "bg-white text-slate-800"}`}
    >
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
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

        <header className="mb-12">
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            Buy Weight Loss Injections UK: Compare Weight Loss Treatment Prices Safely
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              12 Jun 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              9 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_SRC}
            alt="Adult looking confused and trying to buy weight loss injections online safely"
          />
          <div
            id="guide-article-hero-end"
            aria-hidden
            className="pointer-events-none h-0 w-full overflow-hidden"
          />
        </header>

        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          {TOC.length > 0 && (
            <GuideTocSidebar key={TOC.map((t) => t.id).join("-")} toc={TOC} />
          )}

          <div className="min-w-0 max-w-3xl flex-1">
            <article className={`space-y-8 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              <GuideSection darkMode={darkMode} id="why-buy" heading="Why people buy weight loss injections">
                <p className="text-lg md:text-xl">
                  If you want to buy weight loss injections in the UK, the smartest move is not to rush to the first deal you see. Instead, compare the treatment, the full monthly cost, the pharmacy regulation, and the support you will get after approval. In the UK, effective weight loss injections are prescription-only medicines, so the real decision is where to buy safely and what your total treatment cost will look like over time.
                </p>
                <p>
                  Most people who search buy weight loss injections are not looking for a basic diet article. Usually, they have tried lifestyle change before, they want appetite control, or they want a medically supported weight loss treatment that feels more realistic than another short-lived plan. NICE now treats overweight and obesity management as a structured pathway that can include behaviour change, medicines, and in some cases surgery, which is why the search journey is no longer “diet or nothing.”
                </p>
                <p>
                  However, weight loss and fat loss are not exactly the same thing. Good treatment can help reduce appetite and make a calorie deficit easier, but lasting fat loss still depends on food quality, protein intake, strength work, sleep, and consistency. That wider message already appears across Healthwise360’s exercise and lifestyle pages, and competitors such as Juniper and Boots also pair medication with coaching, movement, and habit support rather than treating a pen like a stand-alone solution. A successful transformation requires keeping tabs on your journey, and you can use our digital tools to <Link href="/tools/weight-loss-tracker" className="font-medium text-emerald-600 hover:underline">track your weight loss progress</Link> as you adjust your dietary and exercise habits.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="which-injections" heading="Which weight loss injections can you buy in the UK">
                <p>
                  The main prescription injections discussed in the UK private market are Mounjaro, Wegovy, and liraglutide-based options such as Nevolat or Saxenda-style treatments. Mounjaro contains tirzepatide, which works on GIP and GLP-1 pathways. Wegovy contains semaglutide, which works on GLP-1. Liraglutide is an older GLP-1 medicine and usually requires daily injections rather than weekly dosing. To see how these therapies match up clinically, you can <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-medium text-emerald-600 hover:underline">compare Mounjaro vs Wegovy vs Saxenda</Link> to inspect their dosing frequency, metabolic pathways, and clinical trial results in detail.
                </p>
                <p>
                  All of these routes require a proper medical assessment before supply. Because eligibility for these prescription-only medicines is strictly based on clinical indicators, you should <Link href="/tools/bmi-calculator" className="font-medium text-emerald-600 hover:underline">calculate your BMI before treatment</Link> to see if you fall within the recommended NHS or private prescribing categories. Therefore, if you want to compare weight loss treatment prices, make sure you compare like for like: the actual medicine, the dose, the consultation, the delivery, and the follow-up support. Price without context is not a fair comparison.
                </p>

                <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Mounjaro
                </h3>
                <p>
                  Mounjaro is a once-weekly injection used for weight management in eligible adults. In the SURMOUNT-1 trial, tirzepatide produced substantial weight loss over 72 weeks, and the 15 mg dose is widely cited for around 22.5% average body-weight reduction in clinical-trial reporting. That is why Mounjaro now sits at the top of many “best weight loss injection” comparisons.
                </p>

                <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Wegovy
                </h3>
                <p>
                  Wegovy is also a once-weekly injection, but it uses semaglutide rather than tirzepatide. NICE recommends semaglutide for weight management on the NHS pathway within specialist services, and the UK has now approved a higher 7.2 mg option as well. Published semaglutide evidence shows strong and clinically meaningful weight loss, although the exact percentage depends on the study design and dose being discussed.
                </p>

                <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Liraglutide
                </h3>
                <p>
                  Liraglutide-based treatment still matters, especially for people comparing older options, daily-injection routes, or different price points. It is usually less convenient because it is taken daily, and the weight-loss effect is generally lower than Mounjaro or newer Wegovy dosing. Still, liraglutide remains a legitimate weight loss treatment for some patients, particularly when suitability, tolerance, or provider choice leads the decision.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="compare-prices" heading="How to compare weight loss treatment prices before you buy">
                <p>
                  When people search weight loss price or weight loss treatment price, they usually want one simple answer. The problem is that there is no single answer. To browse different price points, checking our summary of the <Link href="/prices/cheapest-options-uk" className="font-medium text-emerald-600 hover:underline">cheapest weight loss treatment options UK</Link> can show you which GPhC-registered online pharmacies have the lowest rates. For absolute transparency, you can read our guidelines explaining <Link href="/methodology" className="font-medium text-emerald-600 hover:underline">how Healthwise360 compares weight loss treatment prices</Link> in an objective manner, verifying GPhC registration and highlighting pricing transparency. Our dedicated <Link href="/blog/weight-loss-treatment-price-comparison-uk" className="font-medium text-emerald-600 hover:underline">weight loss treatment price comparison UK</Link> guide explains that dose escalation, monitoring fees, and hidden extras can change the real total very quickly.
                </p>
                <p>
                  As of the pages available on June 12, 2026, the market examples below show why weight loss treatment cost compare is a better query than simply “cheapest weight loss injections”:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>
                    Our live-updated <Link href="/mounjaro-price-list" className="font-medium text-emerald-600 hover:underline">Mounjaro price list UK</Link> shows Mounjaro starting from £130 for the 2.5 mg strength in its latest snapshot, while our <Link href="/wegovy-price-list" className="font-medium text-emerald-600 hover:underline">Wegovy price list UK</Link> has listed Wegovy 0.25 mg starting from £79.99.
                  </li>
                  <li>
                    Boots listed Wegovy 0.25 mg at £79.97 and Mounjaro 2.5 mg at £176.97 on its weight loss service page.
                  </li>
                  <li>
                    Asda listed Wegovy from £88.97 and Mounjaro from £148.97, alongside tablets and ongoing doctor support.
                  </li>
                  <li>
                    Superdrug listed Wegovy from £99 and Mounjaro from £176 on its category page.
                  </li>
                  <li>
                    Juniper’s public pricing guide started Wegovy at £164 per month and Mounjaro at £199 per month.
                  </li>
                  <li>
                    Numan advertised a first-month programme price from £57.20, yet its help-centre pricing showed Wegovy 0.25 mg at £129 and Mounjaro 2.5 mg at £209.
                  </li>
                </ul>
                <p>
                  So, the cheapest starting price is not always the cheapest full course. Besides, treatment costs usually rise as the dose goes up. Our comprehensive <Link href="/blog/weight-loss-treatment-price-comparison-uk" className="font-medium text-emerald-600 hover:underline">weight loss treatment price comparison UK</Link> analysis estimates private treatment at roughly £130 to £350 per month depending on medicine, dose, and provider, and it also notes that higher maintenance doses can raise annual treatment costs into the several-thousand-pound range.
                </p>
                <p>
                  Another important point is long-term support. Our guidelines outlining <Link href="/methodology" className="font-medium text-emerald-600 hover:underline">how Healthwise360 compares weight loss treatment prices</Link> highlight that we monitor maintenance policies because some providers may stop prescribing once BMI falls below a threshold. Therefore, if your goal is fat loss plus long-term maintenance, you should compare not only starter price but also whether a provider supports continued treatment, review appointments, and dose changes later on.
                </p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_SRC}
                  alt="Adult smiling with relief and looking at a clean price comparison solution on their laptop"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection darkMode={darkMode} id="what-to-check" heading="What to check before checkout">
                <p>
                  Before you buy weight loss injections, ask five practical questions:
                </p>
                <ol className="list-decimal space-y-3 pl-5">
                  <li>
                    Is the consultation included in the quoted price, or is it added later?
                  </li>
                  <li>
                    Is delivery included, and does the provider explain cold-chain handling where needed?
                  </li>
                  <li>
                    What happens when the dose increases after the starter month?
                  </li>
                  <li>
                    Does the provider offer follow-up support and coaching, or do they offer only medicine supply?
                  </li>
                  <li>
                    Will the provider continue support if you need maintenance after early success?
                  </li>
                </ol>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="buy-safely" heading="Where to buy weight loss injections safely">
                <p>
                  If you want to buy weight loss injections online in the UK, buy only through a regulated provider that requires a real clinical questionnaire and prescriber review. To protect yourself from counterfeit sites, you can learn how to <Link href="/pharmacy-safety-gphc-verification" className="font-medium text-emerald-600 hover:underline">verify a UK online pharmacy</Link> using the General Pharmaceutical Council registration details, which should appear on the website homepage or About section. Meanwhile, the MHRA has warned against buying weight loss medicines online without a prescription.
                </p>
                <p>
                  That is why a comparison site like Healthwise360 can be useful before purchase. Our platform compares but does not prescribe, and we verify GPhC registration and pricing transparency. Therefore, it can sit one step before the actual purchase decision and help users narrow the field before they begin a consultation with a regulated seller.
                </p>
                <p>
                  Good signs are easy to spot if you know what to look for. A safer provider will show regulated status, explain how the assessment works, make clear which medicine you may receive, outline dose progression, and state whether delivery, aftercare, and repeat prescribing are included. Boots, Asda, Superdrug, Numan, and Juniper all explain their service model in different ways, which is one reason their pages match buying intent so well.
                </p>
                <p>
                  Red flags matter just as much. Avoid sellers that offer instant checkout without a health review, do not show pharmacy regulation, make miracle-style claims, or hide the total monthly cost until late in the process. Also remember that GLP-1 medicines can cause common gastrointestinal side effects, and the MHRA says these may affect more than 1 in 10 patients. So, safety is not just about whether the medicine is real. It is also about whether the care process is real.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="which-option" heading="Which option may suit you best">
                <p>
                  If your main goal is the strongest headline weight-loss data, Mounjaro is often the treatment people compare first. The clinical data are strong, and many private providers now offer it widely. However, it can become more expensive at higher doses, so the best-value choice depends on both response and budget.
                </p>
                <p>
                  If you want an established semaglutide route, Wegovy remains a serious option. It has strong evidence, it is recognised in NICE guidance, and it now has a higher approved dose in the UK as well. If you are stuck between the two weekly treatments, you can read our head-to-head analysis to <Link href="/compare/wegovy-vs-mounjaro" className="font-medium text-emerald-600 hover:underline">compare Wegovy vs Mounjaro</Link> and choose the one that aligns with your specific goals. Besides, it is often easier to compare across large pharmacy pages because more retailers openly publish entry pricing and dose tables.
                </p>
                <p>
                  If you care most about coaching, accountability, and wider behaviour change, then a programme model may suit you better than a pharmacy-only route. Numan and Juniper both lean into coaching and structured support, while Boots adds broad aftercare and store support. On the other hand, if you mainly want to compare regulated providers and keep control of your spend, a comparison-first route is often more efficient.
                </p>
                <p>
                  And if your goal is real fat loss rather than fast scale movement, think beyond the injection alone. Juniper explicitly talks about fat loss and muscle maintenance, while Healthwise360’s own exercise content stresses strength, metabolism, and long-term sustainability. Therefore, the best treatment is usually the one that improves appetite control while still letting you build habits that protect muscle and support maintenance.
                </p>
              </GuideSection>

              <section
                id="faq"
                className={`mt-16 border-t pt-10 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
              >
                <h2 className={`mb-8 text-3xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  FAQs
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Can I legally buy weight loss injections online in the UK?
                    </h3>
                    <p>
                      Yes, but only through a regulated route that includes a prescription assessment. These medicines are prescription-only, and the GPhC keeps the official register for pharmacy premises, while the MHRA warns against buying weight loss medicines online without a prescription.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Do I need a prescription for Mounjaro or Wegovy?
                    </h3>
                    <p>
                      Yes. Mounjaro and Wegovy are not over-the-counter products. A clinician has to assess your eligibility, medical history, and current medicines before supply.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      What is the cheapest weight loss treatment price right now?
                    </h3>
                    <p>
                      Prices change often, so no fixed answer lasts long. In Healthwise360’s latest snapshot, the lowest listed entry prices were £130 for Mounjaro 2.5 mg and £79.99 for Wegovy 0.25 mg, while Boots, Asda, and Superdrug showed nearby starting prices on their own pages. Therefore, compare current listings before you pay.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Is Mounjaro cheaper than Wegovy?
                    </h3>
                    <p>
                      Sometimes at the starter level the difference is small, but Mounjaro often becomes more expensive at higher doses. Our dedicated <Link href="/blog/weight-loss-treatment-price-comparison-uk" className="font-medium text-emerald-600 hover:underline">weight loss treatment price comparison UK</Link> guide says the gap usually becomes clearer when comparing higher-dose Mounjaro pens with Wegovy maintenance pricing. So, compare the whole dose journey, not just month one.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Can I get weight loss injections on the NHS?
                    </h3>
                    <p>
                      Some people can, but access is limited and rule-based. NICE recommends semaglutide within specialist weight-management services, and NHS England says tirzepatide is being rolled out in phases with defined criteria. Therefore, many users still compare private routes while NHS eligibility and availability remain restricted.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Are weight loss injections better than pills for fat loss?
                    </h3>
                    <p>
                      They can be very effective, but “better” depends on the medicine, your health profile, and what you can stick with. Also, the page you are reading should stay focused on injections, because the MHRA only approved the first GLP-1 tablet for weight loss in the UK on June 11, 2026, which is creating a separate search path of its own. For sustainable fat loss, the strongest plan still combines treatment with food quality, movement, and consistency.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      What should I compare before payment?
                    </h3>
                    <p>
                      Compare the medicine, the dose, the consultation fee, delivery cost, aftercare, maintenance policy, and pharmacy regulation. Our methodology is useful here because it focuses on total cost rather than headline price alone. Besides, regulation and follow-up support are part of value, and not optional extras.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  If you want to buy weight loss injections in the UK, compare before you commit. The best page for this keyword should not act like a rushed product ad. Instead, it should help people compare weight loss treatment prices, understand the real cost over time, verify provider safety, and choose the route that supports real fat loss rather than short-term hype.
                </p>
                <p>
                  That is exactly where Healthwise360 can win. Sellers like Boots, Asda, Superdrug, Numan, and Juniper are strong because they match buying intent. However, Healthwise360 can compete by being the clearest compare before you buy resource in the market. If the new page leads with direct answers, visible price comparisons, regulation checks, and honest guidance, it will be much closer to owning the searches around buy weight loss injections, weight loss treatment, weight loss treatment price, and weight loss treatment cost compare.
                </p>
                <p className={`text-sm leading-relaxed mt-8 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  <span className="font-semibold text-slate-600 dark:text-slate-300">Suggested hashtags:</span>{" "}
                  {SOCIAL_HASHTAGS}
                </p>
              </GuideSection>
            </article>

            <div className="mt-10">
              <GuideSharePanel
                url={shareUrl}
                title="Buy Weight Loss Injections UK: Compare Weight Loss Treatment Prices Safely"
                description="If you want to buy weight loss injections UK safely, compare weight loss treatment prices, check UK pharmacy registration, and understand the full cost pathway."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
