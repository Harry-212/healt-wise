"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import BlogArticleColumn from "@/components/blog/BlogArticleColumn";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";
import { blogImgPath, BUY_TABLETS_CONFUSED_PNG, BUY_TABLETS_SOLUTION_PNG } from "./blog-assets";

const SHARE_PATH = "/blog/buy-weight-loss-tablets";
const HERO_SRC = blogImgPath(BUY_TABLETS_CONFUSED_PNG);
const INLINE_SRC = blogImgPath(BUY_TABLETS_SOLUTION_PNG);

const TOC = [
  { id: "what-people-mean", label: "What people mean by weight loss tablets" },
  { id: "which-tablets", label: "Which weight loss tablets can you buy" },
  { id: "wegovy-tablet-cat", label: "The new Wegovy tablet category" },
  { id: "price-cost-compare", label: "Price and cost comparisons" },
  { id: "buy-safely", label: "How to buy weight loss tablets safely online" },
  { id: "tablets-vs-injections", label: "Tablets vs injections for fat loss" },
  { id: "choose-right-tablet", label: "How to choose the right tablet" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "conclusion", label: "Conclusion" },
];

const SOCIAL_HASHTAGS =
  "#BuyWeightLossTablets #OrlistatUK #MysimbaPrice #WegovyTablets #GLP1Pills #OnlinePharmacyUK #FatLossTablets";

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

        <BlogArticleColumn toc={TOC} darkMode={darkMode}>

          <header className={`mb-8 border-b pb-8 ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            Buy Weight Loss Tablets in the UK: Compare Prices, Safety, and the Best Treatment for You
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              13 Jun 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              10 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_SRC}
            alt="Adult looking confused and trying to buy weight loss tablets online safely"
          />
          <div
            id="guide-article-hero-end"
            aria-hidden
            className="pointer-events-none h-0 w-full overflow-hidden"
          />
        </header>

            <article className={`space-y-8 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              <GuideSection darkMode={darkMode} id="intro" heading="Buy Weight Loss Tablets in the UK: Compare Prices, Safety, and the Best Treatment for You">
                <p className="text-lg md:text-xl">
                  If you want to buy weight loss tablets in the UK, you probably do not just want a product page. You want to know which tablets are actually licensed, which ones are prescription-only, how much they cost, and how to buy them safely from a regulated provider. That is especially important now, because the UK market includes prescription tablets, lower-dose pharmacy options, and a newly approved GLP-1 tablet category that is only just starting to appear across private providers.
                </p>
                <p>
                  Many people also search for weight loss treatment price, fat loss treatment, or weight loss treatment cost compare at the same time. That makes sense. If you are comparing your options, consulting our comprehensive <Link href="/blog/weight-loss-treatment-price-comparison-uk" className="font-medium text-emerald-600 hover:underline">weight loss treatment price comparison UK</Link> analysis is a great place to start. However, the cheapest option is not always the best option, and the strongest option is not always the right fit for your health profile. Therefore, before you buy weight loss tablets, it helps to compare three things first: the active ingredient, the total cost, and the safety checks behind the sale.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="what-people-mean" heading="What people usually mean when they search buy weight loss tablets">
                <p>
                  In the UK, “buy weight loss tablets” can mean a few different things. Sometimes people mean prescription oral medicines such as Orlistat, Xenical, or Mysimba. In other cases, they mean lower-dose pharmacy options such as Alli or Orlos. Besides that, some people now mean the new semaglutide tablet that the MHRA approved for weight loss on June 11, 2026, even though market rollout is still early.
                </p>
                <p>
                  That difference matters because the route to buy is not the same for every product. Orlistat 120mg and Xenical are prescription-only. Mysimba is also prescription-only. Meanwhile, Alli and Orlos are lower-dose orlistat products that can be obtained without a prescription, although a pharmacist still needs to decide whether they are suitable for you. Before checking out, it is highly recommended to <Link href="/tools/bmi-calculator" className="font-medium text-emerald-600 hover:underline">calculate your BMI before treatment</Link> so that you can understand which clinical category you belong to and have a more informed consultation with a pharmacist or prescriber.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="which-tablets" heading="Which weight loss tablets can you buy in the UK today">
                <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Orlistat and Xenical
                </h3>
                <p>
                  If your goal is to buy weight loss tablets that focus on fat absorption rather than appetite suppression, Orlistat is usually the first name you will see. NHS guidance says orlistat helps treat obesity by reducing how much fat is absorbed, and around a third of the fat from food passes out of the body instead. NICE says it can be prescribed in all settings, including primary care, when people meet the criteria.
                </p>
                <p>
                  Xenical is the brand name version of prescription-strength orlistat 120mg, while unbranded Orlistat is the generic version of the same medicine. Therefore, the real comparison is often price and service, not clinical difference. Oxford Online Pharmacy says Orlistat 120mg starts at £29.99, Boots lists Orlistat at £45, Pharmacy Online lists it from £16.95, and Superdrug lists it from £49.99. For Xenical, Oxford starts at £44.19, Pharmacy Online starts at £45.99, Boots lists £52.20, and Superdrug lists £57.99.
                </p>

                <h3 className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Alli and Orlos
                </h3>
                <p>
                  If you want a lower-barrier route, Alli and Orlos are usually the over-the-counter tablet-style products people compare first. They contain orlistat 60mg, which is half the strength of prescription-strength orlistat 120mg. Because of that, they can appeal to people who want a pharmacy route without going straight into prescription treatment.
                </p>
                <p>
                  However, lower dose does not mean no screening. Superdrug says Alli is over the counter but still requires some questions because it is not suitable for everyone. In pricing terms, Oxford lists Orlos from £18.98 and Alli from £39.98, while Asda lists Alli at £39.99 and Orlos from £35.98. Therefore, when you compare weight loss tablet price, make sure you are not accidentally comparing different strengths.
                </p>

                <h3 className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Mysimba
                </h3>
                <p>
                  Mysimba is different because it works on appetite and cravings rather than blocking fat absorption. Its UK product information says it contains naltrexone and bupropion and is used in obese or overweight adults together with a reduced-calorie diet and physical exercise. That makes it relevant for people whose main challenge is hunger, food noise, or reward-driven eating rather than high-fat meals alone.
                </p>
                <p>
                  Prices are higher than most orlistat-based products. Asda lists Mysimba from £99, Oxford lists it from £109.98, and Superdrug says prices start from £115. Therefore, Mysimba often sits in a different price bracket and should be compared as a prescription appetite-focused treatment, not as a like-for-like substitute for low-cost orlistat.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="wegovy-tablet-cat" heading="The new Wegovy tablet category">
                <p>
                  A new factor has entered the market. The MHRA announced on June 11, 2026 that the first GLP-1 tablet for weight loss was approved in the UK. At the same time, Pharmacy Online already shows a Wegovy pill pre-order entry, while Oxford lists a Wegovy pill page as out of stock. So, if you search buy weight loss tablets now, you will increasingly see both traditional tablets and newer oral GLP-1 options. If you are comparing oral and injectable routes, checking our <Link href="/wegovy-price-comparison" className="font-medium text-emerald-600 hover:underline">Wegovy price list UK</Link> can help you see what the traditional weekly pen costs across different dose strengths.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="price-cost-compare" heading="Weight loss treatment price and cost compare">
                <p>
                  When people compare weight loss treatment price, they often look only at the box price. That is understandable. However, the real cost is often wider than that. You also need to check whether consultation is included, whether delivery costs extra, whether there are repeat-prescribing fees, and whether follow-up support is included. That is one reason pharmacy pages and comparison pages can show very different “starting prices” for treatments that sound similar. To get a comprehensive view of how different pharmacy routes differ in pricing, checking our breakdown of the <Link href="/prices/cheapest-options-uk" className="font-medium text-emerald-600 hover:underline">cheapest weight loss treatment options UK</Link> will show you how they align across providers.
                </p>
                <p>
                  A simple buyer framework looks like this:
                </p>
                <ul className="list-disc space-y-3 pl-5 font-medium">
                  <li>
                    <strong className="font-semibold text-emerald-700">Low-entry over-the-counter route</strong>: Orlos or Alli, but check strength and pharmacy screening.
                  </li>
                  <li>
                    <strong className="font-semibold text-emerald-700">Lower-cost prescription route</strong>: generic Orlistat, but check consultation and pack size.
                  </li>
                  <li>
                    <strong className="font-semibold text-emerald-700">Higher-cost appetite route</strong>: Mysimba, especially if hunger and cravings are the main issue.
                  </li>
                  <li>
                    <strong className="font-semibold text-emerald-700">Emerging premium oral GLP-1 route</strong>: oral semaglutide, where approval is fresh and availability may change quickly.
                  </li>
                </ul>
                <p>
                  Therefore, the most useful question is not “What is the cheapest weight loss tablet?” The better question is “What is the lowest total cost for the right treatment, from a regulated provider, with the right support?” That is the question that protects both your budget and your safety.
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

              <GuideSection darkMode={darkMode} id="buy-safely" heading="How to buy weight loss tablets safely online">
                <p>
                  Before you buy weight loss tablets online, make sure the provider is regulated and the route is legitimate. The MHRA has warned people not to buy prescription-only weight-loss medicines without a prescription and says these products should only be supplied after a proper clinical assessment. The GPhC also tells people to check whether the pharmacy is registered on its official register before buying medicines online. To protect yourself and verify pharmacy credentials, learning how to <Link href="/pharmacy-safety-gphc-verification" className="font-medium text-emerald-600 hover:underline">verify a UK online pharmacy</Link> is the most reliable way to avoid counterfeit sellers.
                </p>
                <p>
                  In practice, that means you should look for the following:
                </p>

                <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Use a provider that requires a real consultation
                </h3>
                <p>
                  If a site offers prescription-only weight loss tablets with no health questions, that is a major red flag. Legitimate UK providers such as Asda, Boots, Oxford, and Chemist4U all describe a consultation or clinician review before prescription products are supplied.
                </p>

                <h3 className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Verify the pharmacy, not just the brand name
                </h3>
                <p>
                  A strong retail brand is not enough on its own. Check that the supplying pharmacy is registered and that the service explains how clinical review works. This matters even more now because the MHRA has recently warned against illegal online weight-loss medicines and counterfeit products. You can read our criteria explaining <Link href="/methodology" className="font-medium text-emerald-600 hover:underline">how Healthwise360 compares weight loss treatment prices</Link> to understand how we review clinical and pricing transparency across online pharmacy platforms.
                </p>

                <h3 className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Avoid fake bargains on social media or unregulated marketplaces
                </h3>
                <p>
                  If the price looks far below the market range, stop and check again. That is especially important for newer, high-demand medicine categories, because rapid demand often attracts unsafe sellers. Therefore, price comparison should always sit beside regulation checks and not replace them.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="tablets-vs-injections" heading="Are weight loss tablets better than injections for fat loss?">
                <p>
                  Not always. NHS guidance says weight-loss medicines work in different ways, including appetite reduction for GLP-1 and GIP medicines and fat-absorption reduction for orlistat. Besides that, competitor clinical pages consistently show that injections such as Mounjaro and Wegovy tend to deliver larger average weight-loss results than tablets, while tablets may suit people who prefer oral treatment, want a lower-cost option, or are not ready to self-inject. If you want to see how these categories compare in head-to-head clinical trials, you can read our guide to <Link href="/compare/wegovy-vs-mounjaro" className="font-medium text-emerald-600 hover:underline">compare Wegovy vs Mounjaro</Link> and choose the option that fits your needs.
                </p>
                <p>
                  So, if your main goal is the biggest average loss shown in clinical studies, tablets may not be the strongest route. However, if your goal is a simpler daily routine, a lower starting cost, or a treatment format you are more likely to stick with, tablets can still be a very sensible option. Therefore, “best” depends on fit, not only on headline percentages.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="choose-right-tablet" heading="How to choose the right tablet for you">
                <p>
                  Start with the question that matters most: what is actually stopping your progress right now? If high-fat eating patterns are the main issue, orlistat-based products may make more sense. If cravings and appetite feel harder to manage, Mysimba may fit better. Meanwhile, if you are specifically waiting for an oral GLP-1 route, availability and pricing may still move quickly over the next few weeks and months.
                </p>
                <p>
                  It also helps to compare by decision points rather than by branding:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>Do you want a prescription treatment or an over-the-counter product?</li>
                  <li>Is your priority lower price, appetite control, or stronger clinical innovation?</li>
                  <li>Do you want capsules with meals or a daily tablet routine?</li>
                  <li>Will you actually follow the dietary advice needed to make the tablet work well?</li>
                </ul>
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
                      Can I buy weight loss tablets online in the UK?
                    </h3>
                    <p>
                      Yes, but the route depends on the product. Prescription-only products such as Orlistat 120mg, Xenical, and Mysimba need a clinical review or prescription pathway, while lower-dose Alli and Orlos can be obtained through a pharmacy route without a standard prescription.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      What is the cheapest weight loss tablet in the UK right now?
                    </h3>
                    <p>
                      Among the major pages reviewed here on June 13, 2026, the lowest visible entry price was Pharmacy Online’s Orlistat 120mg from £16.95, followed by Oxford’s Orlistat from £29.99 and Oxford’s Orlos from £18.98. However, you should still compare consultation, delivery, and strength before deciding.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Is Alli the same as Orlistat?
                    </h3>
                    <p>
                      Alli contains orlistat, but it is a lower 60mg dose. Prescription Orlistat and Xenical use 120mg. Therefore, they are related products, but not identical in strength or buying route.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      What is the strongest prescription weight loss pill?
                    </h3>
                    <p>
                      In current UK pharmacy comparisons, Mysimba and prescription-strength orlistat products are the main prescription oral options. However, “strongest” depends on what you mean because Mysimba targets appetite, while Orlistat and Xenical target fat absorption. Superdrug also makes that distinction in its comparison page.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Are weight loss tablets available on the NHS?
                    </h3>
                    <p>
                      Some are. NHS guidance confirms that orlistat can be prescribed when eligibility criteria are met. Superdrug also notes that Orlistat and Xenical may be available on the NHS, while Mysimba is private-only in the UK.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Is it safe to buy weight loss tablets from any online shop?
                    </h3>
                    <p>
                      No. The MHRA warns against buying prescription-only weight-loss medicines without a prescription, and the GPhC says you should check the pharmacy register before buying medicines online. Therefore, a proper clinical assessment and a regulated pharmacy route matter more than a cheap headline price.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Are new oral GLP-1 weight loss tablets available yet?
                    </h3>
                    <p>
                      The MHRA approved the first GLP-1 tablet for weight loss in the UK on June 11, 2026. However, live market availability is still early and uneven. Pharmacy Online already shows a pre-order entry, while Oxford lists a Wegovy pill entry as out of stock, so you should expect rapid changes.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  If you want to buy weight loss tablets in the UK, the smartest move is not to jump straight to checkout. Instead, compare the active ingredient, whether the product is prescription-only or over the counter, the real total cost, and the regulation behind the provider. That approach helps you avoid the two biggest mistakes buyers make: choosing a product that does not match their needs, or choosing a seller that should not be trusted.
                </p>
                <p>
                  In practice, low-cost Orlistat routes may suit one person, while Mysimba may suit another, and the new oral GLP-1 category may soon change the market again. If you are comparing different medical routes to lose weight, you can read our summary <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-medium text-emerald-600 hover:underline">comparing Mounjaro vs Wegovy vs Saxenda</Link> to see what other options are approved in the UK. Therefore, the best weight loss tablet is not the one with the loudest ad. It is the one that fits your health, your budget, and a safe regulated buying route.
                </p>
              </GuideSection>

              <section id="limitations" className="scroll-mt-28">
                <h2 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Open questions and limitations
                </h2>
                <p className="mt-4">
                  This review covers the highest-confidence pages and patterns I could verify directly, but Healthwise360's locations archive and provider dossier library clearly extend beyond the sample reviewed here, so this is not a fully exhaustive URL inventory. Also, some GPhC pages returned access errors when opened directly in the browser tool, so I relied on their search-result snippets for the most current statements about the register and the discontinued online pharmacy logo scheme.
                </p>
                <p className={`text-sm leading-relaxed mt-8 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  <span className="font-semibold text-slate-600 dark:text-slate-300">Suggested hashtags:</span>{" "}
                  {SOCIAL_HASHTAGS}
                </p>
              </section>
            </article>

            <div className="mt-10">
              <GuideSharePanel
                url={shareUrl}
                title="Buy Weight Loss Tablets in the UK: Compare Prices, Safety, and the Best Treatment for You"
                description="Buy weight loss tablets in the UK. Compare prices, safety, and prescription options before you choose."
              />
            </div>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
