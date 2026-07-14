"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleColumn from "@/components/blog/BlogArticleColumn";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  blogImgPath,
  FIBRE_GLP_HERO_WEBP,
  FIBRE_GLP_INLINE_WEBP,
} from "./blog-assets";

const SHARE_PATH = "/blog/fibre-for-glp-1-users";
const TITLE = "Fibre for GLP-1 Users: Constipation and Fullness Support";
const DESCRIPTION =
  "Fibre for GLP-1 users guide: constipation support, fullness, foods, fluids and safe supplement checks.";
const HERO_SRC = blogImgPath(FIBRE_GLP_HERO_WEBP);
const INLINE_SRC = blogImgPath(FIBRE_GLP_INLINE_WEBP);

const TOC = [
  { id: "intro", label: "Constipation and fullness support" },
  { id: "why-fibre-matters", label: "Why fibre matters" },
  { id: "key-points", label: "What GLP-1 users should know" },
  { id: "not-medicine", label: "Fibre is not a GLP-1 medicine" },
  { id: "what-is-fibre", label: "What is fibre?" },
  { id: "why-constipation", label: "Why constipation can happen" },
  { id: "food-first", label: "Food-first fibre sources" },
  { id: "protein-and-fibre", label: "Protein and fibre together" },
  { id: "fullness", label: "Fibre and fullness" },
  { id: "supplements", label: "Fibre supplements" },
  { id: "increase-safely", label: "How to increase fibre safely" },
  { id: "hydration", label: "Fibre and hydration" },
  { id: "nausea", label: "Fibre and nausea" },
  { id: "diarrhoea", label: "Fibre and diarrhoea" },
  { id: "smaller-appetites", label: "Fibre foods for smaller appetites" },
  { id: "avoid-supplements", label: "Supplement red flags" },
  { id: "medical-advice", label: "When to seek advice" },
  { id: "practical-support", label: "Practical nutrition support" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "conclusion", label: "Conclusion" },
];

const listClass = "list-disc space-y-3 pl-5";
const linkClass = "font-medium text-emerald-600 hover:underline";

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);
  const shareUrl = `${siteOrigin()}${SHARE_PATH}`;

  return (
    <div
      className={`w-full font-sans transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-slate-300" : "bg-white text-slate-800"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/blog"
            className={`flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-75 ${
              darkMode ? "text-slate-300" : "text-slate-900"
            }`}
          >
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                darkMode ? "bg-slate-800" : "bg-slate-100"
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
            </span>
            Back to Blog
          </Link>

          <div className="flex items-center gap-3">
            <Moon
              className={`h-4 w-4 ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            />
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`relative flex h-6 w-12 items-center rounded-full p-1 shadow-inner transition-colors ${
                darkMode ? "bg-slate-700" : "bg-slate-200"
              }`}
              aria-label="Toggle dark mode"
            >
              <span
                className={`h-4 w-4 rounded-full shadow transition-all ${
                  darkMode
                    ? "translate-x-6 bg-slate-900"
                    : "translate-x-0 bg-white"
                }`}
              />
            </button>
            <Sun
              className={`h-4 w-4 ${
                darkMode ? "text-yellow-400" : "text-slate-400"
              }`}
            />
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
          <Link
            href="/blog"
            className="transition-colors hover:text-emerald-600"
          >
            Blog
          </Link>
          <span>/</span>
          <span className={darkMode ? "text-slate-200" : "text-slate-600"}>
            Fibre for GLP-1 Users
          </span>
        </nav>

        <BlogArticleColumn toc={TOC} darkMode={darkMode}>
          <header
            className={`mb-8 border-b pb-8 ${
              darkMode ? "border-slate-800" : "border-slate-200"
            }`}
          >
            <h1
              className={`mb-6 text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl md:text-[44px] ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Fibre for GLP-1 Users: Constipation and Fullness Support
            </h1>
            <div
              className={`mb-8 flex flex-wrap items-center gap-6 text-sm font-medium ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                14 Jul 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                12 min read
              </span>
            </div>
            <BlogArticleHeroImage
              src={HERO_SRC}
              alt="Fibre-rich foods for GLP-1 users seeking constipation and fullness support"
            />
            <div
              id="guide-article-hero-end"
              aria-hidden
              className="pointer-events-none h-0 w-full overflow-hidden"
            />
          </header>

          <article
            className={`space-y-8 leading-relaxed ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            <GuideSection
              darkMode={darkMode}
              id="intro"
              heading="Fibre for GLP-1 Users: Constipation and Fullness Support"
            >
              <p className="text-lg md:text-xl">
                Fibre can be helpful for many GLP-1 users because appetite can
                reduce, digestion may slow, and constipation can become a common
                concern. However, fibre is not a quick fix, and it should not be
                treated as a replacement for medical advice, prescribed
                treatment, or balanced meals.
              </p>
              <p>
                For UK users taking{" "}
                <Link href="/what-is-wegovy" className={linkClass}>
                  Wegovy
                </Link>
                ,{" "}
                <Link href="/what-is-mounjaro" className={linkClass}>
                  Mounjaro
                </Link>
                , semaglutide, tirzepatide, or{" "}
                <Link href="/blog/wegovy-pill-uk" className={linkClass}>
                  Wegovy Pill
                </Link>
                , the safest approach is usually simple: increase fibre
                gradually, drink enough fluids, and choose food-first options
                before buying supplements.
              </p>
              <p>
                This guide explains why fibre matters during GLP-1 weight loss
                treatment, how it may support fullness and digestion, what foods
                to prioritise, and when fibre supplements may or may not be
                useful.
              </p>
              <p>
                Healthwise360 does not prescribe medication or provide personal
                diet plans. Instead, it helps users{" "}
                <Link
                  href="/compare/best-weight-loss-treatments-uk"
                  className={linkClass}
                >
                  compare weight loss treatment prices
                </Link>
                , provider safety, pharmacy checks, and practical support before
                choosing where to start a consultation.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="why-fibre-matters"
              heading="Why Fibre Matters for GLP-1 Users"
            >
              <p>
                GLP-1 medicines may help reduce appetite and support fullness. As
                a result, many users eat smaller meals and fewer snacks.
              </p>
              <p>
                However, eating less can also mean eating less fibre. This matters
                because fibre supports digestion, bowel regularity, and fullness.
              </p>
              <p>
                Besides that, constipation is often discussed by users taking
                GLP-1 weight loss treatment. If food intake drops, fluid intake
                drops, and movement reduces, digestion may become more
                uncomfortable.
              </p>
              <p>
                Therefore, fibre should be part of the wider support plan. It is
                not the whole plan, but it can be an important part of eating
                well during treatment.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="key-points"
              heading="What Should GLP-1 Users Know About Fibre?"
            >
              <p>
                Fibre can support digestion and fullness, but it needs to be
                introduced carefully.
              </p>
              <p>The key points are:</p>
              <ul className={listClass}>
                <li>Food-first fibre is usually better than supplement-first fibre.</li>
                <li>Increase fibre gradually to reduce bloating and discomfort.</li>
                <li>Drink enough water when increasing fibre.</li>
                <li>
                  Fibre may help constipation, but it can make symptoms worse if
                  increased too quickly.
                </li>
                <li>Protein and fibre should work together, not compete.</li>
                <li>
                  Severe or persistent constipation should be discussed with a
                  pharmacist, prescriber, or clinician.
                </li>
                <li>Fibre supplements are optional and not suitable for everyone.</li>
              </ul>
              <p>In simple terms, fibre can help, but more is not always better.</p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="not-medicine"
              heading="Fibre Is Not a GLP-1 Medicine"
            >
              <p>
                Fibre supplements are not GLP-1 medicines. They do not replace
                Wegovy, Mounjaro, semaglutide, tirzepatide, or Wegovy Pill.
              </p>
              <p>
                This matters because supplement marketing often uses phrases such
                as &ldquo;natural GLP-1,&rdquo; &ldquo;appetite
                control,&rdquo; &ldquo;food noise support,&rdquo; or
                &ldquo;Ozempic alternative.&rdquo; However, those phrases can
                confuse users.
              </p>
              <p>
                A fibre supplement may support bowel regularity or fullness.
                However, it should not be presented as a prescription-style
                weight loss treatment.
              </p>
              <p>
                For more context, Healthwise360 users should read the{" "}
                <Link
                  href="/blog/glp-1-supplements-uk"
                  className={linkClass}
                >
                  GLP-1 supplements UK guide
                </Link>{" "}
                and{" "}
                <Link
                  href="/blog/are-glp-1-supplements-real"
                  className={linkClass}
                >
                  Are GLP-1 supplements real?
                </Link>{" "}
                articles.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="what-is-fibre"
              heading="What Is Fibre?"
            >
              <p>
                Fibre is a type of carbohydrate found in plant foods. Unlike
                sugars and starches, fibre is not fully digested in the small
                intestine.
              </p>
              <p>
                Instead, it helps support digestion in different ways. Some types
                of fibre add bulk to stools, while other types feed gut bacteria
                or help slow digestion.
              </p>
              <p>Food sources of fibre include:</p>
              <ul className={listClass}>
                <li>Vegetables</li>
                <li>Fruit</li>
                <li>Beans</li>
                <li>Lentils</li>
                <li>Chickpeas</li>
                <li>Oats</li>
                <li>Wholegrain bread</li>
                <li>Brown rice</li>
                <li>Wholewheat pasta</li>
                <li>Nuts and seeds</li>
                <li>Potatoes with skin</li>
              </ul>
              <p>
                However, not all fibre foods feel the same in the body. Some are
                gentle and easy to tolerate, while others can cause gas or
                bloating if introduced too quickly.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="why-constipation"
              heading="Why Constipation Can Happen During GLP-1 Treatment"
            >
              <p>
                Constipation can happen for several reasons during weight loss
                treatment.
              </p>
              <p>
                First, appetite may reduce, so total food intake falls. As a
                result, there may be less bulk moving through the digestive
                system.
              </p>
              <p>
                Second, some users drink less because they feel less hungry or
                forget to hydrate. However, fibre needs fluid to work well.
              </p>
              <p>
                Third, some users focus heavily on protein but forget vegetables,
                pulses, oats, fruit, and wholegrains.
              </p>
              <p>
                Finally, reduced movement may also affect bowel regularity.
                Therefore, constipation support should include food, fluids, and
                activity where suitable.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="food-first"
              heading="Food-First Fibre Sources for GLP-1 Users"
            >
              <p>For most people, the best place to start is normal food.</p>
              <p>
                Food-first fibre is useful because it also brings vitamins,
                minerals, water, texture, and satisfaction. Besides that, food is
                usually easier to adjust than supplements.
              </p>
              <h3
                className={`mt-6 mb-3 text-xl font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Gentle Fibre Foods
              </h3>
              <p>These may be easier for some users:</p>
              <ul className={listClass}>
                <li>Oats</li>
                <li>Berries</li>
                <li>Apples or pears</li>
                <li>Carrots</li>
                <li>Soups with vegetables</li>
                <li>Potatoes with skin</li>
                <li>Lentil soup in small portions</li>
                <li>Chia seeds in small amounts</li>
                <li>Ground flaxseed in small amounts</li>
              </ul>
              <h3
                className={`mt-6 mb-3 text-xl font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Higher-Fibre Foods That May Need Gradual Introduction
              </h3>
              <p>
                Some foods are very useful but may cause gas or bloating if added
                too fast:
              </p>
              <ul className={listClass}>
                <li>Beans</li>
                <li>Chickpeas</li>
                <li>Lentils</li>
                <li>Bran cereal</li>
                <li>Large salads</li>
                <li>Broccoli</li>
                <li>Cabbage</li>
                <li>Wholegrain bread</li>
                <li>Large portions of seeds</li>
              </ul>
              <p>
                Therefore, users should increase these slowly and pay attention
                to tolerance.
              </p>
            </GuideSection>

            <div className="my-10">
              <BlogArticleHeroImage
                src={INLINE_SRC}
                alt="Food-first fibre choices for GLP-1 users supporting digestion and fullness"
                priority={false}
                showFullImage
              />
            </div>

            <GuideSection
              darkMode={darkMode}
              id="protein-and-fibre"
              heading="Protein and Fibre Should Work Together"
            >
              <p>
                Many GLP-1 users are told to eat more protein. That can be
                helpful, especially for muscle maintenance and fullness.
              </p>
              <p>
                However, if protein increases while fibre and fluids stay low,
                constipation may become worse.
              </p>
              <p>A balanced GLP-1 meal should often include:</p>
              <ul className={listClass}>
                <li>A protein source</li>
                <li>A fibre source</li>
                <li>Fluids across the day</li>
                <li>Vegetables or fruit</li>
                <li>A portion size that feels manageable</li>
              </ul>
              <p>
                For example, Greek yoghurt with berries and oats may work better
                than a plain protein shake. Chicken with vegetables and lentils
                may be more balanced than chicken alone.
              </p>
              <p>
                For more food-first guidance, read{" "}
                <Link
                  href="/blog/protein-for-glp-1-users-uk"
                  className={linkClass}
                >
                  Protein for GLP-1 Users UK
                </Link>
                .
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="fullness"
              heading="Fibre and Fullness"
            >
              <p>
                Fibre may help support fullness because high-fibre foods can take
                longer to eat and digest. This may support appetite control,
                especially when combined with protein.
              </p>
              <p>
                However, GLP-1 users often already feel fuller than usual.
                Therefore, the goal is not to force large amounts of fibre into
                every meal.
              </p>
              <p>
                A better goal is to choose fibre-rich foods that fit smaller
                appetites.
              </p>
              <p>Examples include:</p>
              <ul className={listClass}>
                <li>A small bowl of oats with yoghurt</li>
                <li>Soup with lentils and vegetables</li>
                <li>Berries with Greek yoghurt</li>
                <li>Wholegrain crackers with tuna or cottage cheese</li>
                <li>Beans added to a small salad</li>
                <li>Roasted vegetables with fish or tofu</li>
              </ul>
              <p>
                These options support fullness without relying on extreme diet
                rules.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="supplements"
              heading="Fibre Supplements: Helpful or Hype?"
            >
              <p>
                Fibre supplements may help some people, but they are not always
                necessary.
              </p>
              <p>They may be useful when:</p>
              <ul className={listClass}>
                <li>Food intake is very low</li>
                <li>Constipation continues despite better food choices</li>
                <li>A person struggles to eat enough fibre</li>
                <li>A pharmacist or clinician recommends them</li>
                <li>A user needs a simple, predictable option</li>
              </ul>
              <p>However, they may not be suitable if:</p>
              <ul className={listClass}>
                <li>You do not drink enough fluid</li>
                <li>You already feel very bloated</li>
                <li>You have severe constipation</li>
                <li>You have bowel disease or swallowing problems</li>
                <li>You take medicines affected by timing</li>
                <li>You are unsure how to use them safely</li>
              </ul>
              <p>
                Therefore, fibre supplements should be treated as support tools,
                not miracle products.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="increase-safely"
              heading="How to Increase Fibre Safely"
            >
              <p>
                Increasing fibre too quickly may cause bloating, gas, cramps, or
                worse constipation. Therefore, gradual change is usually better.
              </p>
              <p>A simple approach:</p>
              <ol className="list-decimal space-y-3 pl-5">
                <li>Add one fibre-rich food at a time.</li>
                <li>Increase water intake.</li>
                <li>Keep meals small if appetite is low.</li>
                <li>Add walking or movement if suitable.</li>
                <li>Track symptoms for a few days.</li>
                <li>Speak to a pharmacist if constipation continues.</li>
              </ol>
              <p>
                For example, start with berries at breakfast or vegetables in
                soup. Then, add oats, lentils, beans, or seeds later if tolerated.
              </p>
              <p>
                This approach is more sustainable than suddenly doubling fibre
                intake overnight.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="hydration"
              heading="Fibre and Hydration"
            >
              <p>
                Fibre needs fluid. Without enough water, fibre may make stools
                harder or more uncomfortable.
              </p>
              <p>
                For GLP-1 users, hydration can be easy to forget because appetite
                and routine may change. Some people also feel nauseous, which can
                reduce fluid intake.
              </p>
              <p>Practical hydration ideas include:</p>
              <ul className={listClass}>
                <li>Keep water visible during the day</li>
                <li>Sip rather than drink large amounts at once</li>
                <li>Add herbal tea if tolerated</li>
                <li>
                  Eat water-rich foods such as soup, cucumber, melon, or berries
                </li>
                <li>Avoid relying too much on alcohol</li>
                <li>
                  Ask a clinician if vomiting or diarrhoea causes dehydration
                  concerns
                </li>
              </ul>
              <p>
                If constipation is severe or comes with pain, vomiting, or a
                swollen abdomen, users should seek professional medical advice.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="nausea"
              heading="Fibre and Nausea"
            >
              <p>
                Some high-fibre foods may feel heavy if nausea is present.
                Therefore, users should choose gentler options during difficult
                periods.
              </p>
              <p>Examples may include:</p>
              <ul className={listClass}>
                <li>Small portions of oats</li>
                <li>Vegetable soup</li>
                <li>Soft fruit</li>
                <li>Smoothies with small amounts of fibre</li>
                <li>Yoghurt with berries</li>
                <li>Cooked vegetables instead of raw salad</li>
              </ul>
              <p>
                However, if nausea is severe or persistent, the user should speak
                to a prescriber or pharmacist. Food changes may help, but they
                should not replace medical support.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="diarrhoea"
              heading="Fibre and Diarrhoea"
            >
              <p>
                Some GLP-1 users may experience diarrhoea instead of constipation.
                In that case, suddenly increasing fibre may not be helpful.
              </p>
              <p>
                Different types of fibre affect the gut differently. For example,
                some people tolerate soluble fibre better, while large amounts of
                roughage may worsen urgency.
              </p>
              <p>
                If diarrhoea continues, users should focus on hydration and seek
                advice. This is especially important if they feel weak, dizzy, or
                unable to keep fluids down.
              </p>
              <p>
                Therefore, fibre guidance should be personalised where symptoms
                are significant.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="smaller-appetites"
              heading="Best Fibre Foods for Smaller Appetites"
            >
              <p>
                If appetite is low, fibre choices should be compact and easy to
                eat.
              </p>
              <h3
                className={`mt-6 mb-3 text-xl font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Breakfast
              </h3>
              <ul className={listClass}>
                <li>Oats with Greek yoghurt</li>
                <li>Berries with cottage cheese</li>
                <li>Porridge with ground flaxseed</li>
                <li>Wholegrain toast with eggs</li>
                <li>Smoothie with berries and yoghurt</li>
              </ul>
              <h3
                className={`mt-6 mb-3 text-xl font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Lunch
              </h3>
              <ul className={listClass}>
                <li>Lentil soup</li>
                <li>Tuna with wholegrain crackers</li>
                <li>Chickpea salad in a small portion</li>
                <li>Chicken and vegetable soup</li>
                <li>Tofu and vegetable bowl</li>
              </ul>
              <h3
                className={`mt-6 mb-3 text-xl font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Dinner
              </h3>
              <ul className={listClass}>
                <li>Fish with vegetables and potatoes</li>
                <li>Turkey with beans and salad</li>
                <li>Tofu stir-fry with vegetables</li>
                <li>Lean meat with lentils and roasted vegetables</li>
                <li>Omelette with spinach and wholegrain toast</li>
              </ul>
              <h3
                className={`mt-6 mb-3 text-xl font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Snacks
              </h3>
              <ul className={listClass}>
                <li>Apple slices with peanut butter</li>
                <li>Greek yoghurt with berries</li>
                <li>Carrot sticks with hummus</li>
                <li>Edamame</li>
                <li>Small handful of nuts and fruit</li>
              </ul>
              <p>
                These are general ideas, not a personalised meal plan. When time
                or appetite makes cooking difficult, browse our{" "}
                <Link href="/time-saver" className={linkClass}>
                  quick complete meal options
                </Link>{" "}
                for practical alternatives that still provide structured
                nutrition.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="avoid-supplements"
              heading="What to Avoid When Buying Fibre Supplements"
            >
              <p>
                Some fibre products are useful, but others are over-marketed.
              </p>
              <p>Be careful with products that claim to:</p>
              <ul className={listClass}>
                <li>Replace GLP-1 medicines</li>
                <li>&ldquo;Activate&rdquo; medical weight loss</li>
                <li>Work like Ozempic</li>
                <li>Replace Mounjaro or Wegovy</li>
                <li>Guarantee fat loss</li>
                <li>Remove food noise like prescription treatment</li>
                <li>Cure constipation instantly</li>
                <li>Work without diet or hydration</li>
              </ul>
              <p>
                A responsible fibre product should explain ingredients, serving
                size, and directions clearly. It should not make medical-style
                claims.
              </p>
              <p>If a product sounds too powerful, pause before buying.</p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="medical-advice"
              heading="When to Speak to a Pharmacist or Doctor"
            >
              <p>
                Most mild constipation can often be managed with food, fluids,
                and movement. However, some symptoms need professional advice.
              </p>
              <p>
                Users should speak to a pharmacist, prescriber, or doctor if:
              </p>
              <ul className={listClass}>
                <li>Constipation does not improve</li>
                <li>Side effects are bothering them</li>
                <li>They have severe stomach pain</li>
                <li>They are vomiting</li>
                <li>They see blood in stool</li>
                <li>They feel dehydrated</li>
                <li>They have bowel disease</li>
                <li>They are taking multiple medicines</li>
                <li>
                  They want to start a fibre supplement but are unsure
                </li>
              </ul>
              <p>
                Besides that, users should always tell their prescriber about
                supplements, vitamins, and herbal products they use.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="practical-support"
              heading="Practical Nutrition Support for Smaller Appetites"
            >
              <p>
                Food-first fibre remains the best starting point for most people.
                However, smaller appetites and busy routines can make balanced
                meals harder to prepare every day.
              </p>
              <p>
                Healthwise360&apos;s{" "}
                <Link href="/eat-healthier" className={linkClass}>
                  healthier eating collection
                </Link>{" "}
                includes complete nutrition options for building more consistent
                routines. If your focus is appetite management and portion
                control, explore products designed to{" "}
                <Link href="/support-weight-management" className={linkClass}>
                  support weight management
                </Link>
                .
              </p>
              <p>
                Fibre works best alongside enough protein, so our{" "}
                <Link href="/protein-and-fitness" className={linkClass}>
                  high-protein nutrition collection
                </Link>{" "}
                may also help when whole meals feel too large. These products are
                practical nutrition support, not substitutes for prescribed
                treatment or professional advice.
              </p>
              <p>
                Treatment choice should still be based on clinical suitability.
                Readers can{" "}
                <Link
                  href="/compare/mounjaro-vs-wegovy-vs-saxenda"
                  className={linkClass}
                >
                  compare Mounjaro vs Wegovy vs Saxenda
                </Link>
                , review the{" "}
                <Link href="/wegovy-price-comparison" className={linkClass}>
                  Wegovy price comparison
                </Link>
                , or check the{" "}
                <Link href="/mounjaro-price-comparison" className={linkClass}>
                  Mounjaro price list UK
                </Link>{" "}
                before speaking to a prescriber.
              </p>
              <p>
                Before choosing a provider, use our{" "}
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className={linkClass}
                >
                  pharmacy safety and GPhC verification guide
                </Link>
                . You can also{" "}
                <Link href="/tools/bmi-calculator" className={linkClass}>
                  check your BMI for weight loss treatment
                </Link>{" "}
                and{" "}
                <Link href="/tools/weight-loss-tracker" className={linkClass}>
                  track your weight loss progress
                </Link>{" "}
                as part of a broader, clinician-led plan.
              </p>
            </GuideSection>

            <section
              id="faq"
              className={`mt-16 border-t pt-10 ${
                darkMode ? "border-slate-800" : "border-slate-200"
              }`}
            >
              <h2
                className={`mb-8 text-3xl font-semibold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Frequently asked questions
              </h2>
              <div className="space-y-8">
                {[
                  [
                    "Do GLP-1 users need more fibre?",
                    "Some GLP-1 users may need to pay more attention to fibre because appetite and food intake can reduce. However, fibre should usually be increased gradually and alongside enough fluids.",
                  ],
                  [
                    "Can fibre help constipation on Wegovy or Mounjaro?",
                    "Fibre may help support bowel regularity, especially when combined with fluids and movement. However, severe or persistent constipation should be discussed with a pharmacist, prescriber, or doctor.",
                  ],
                  [
                    "What are good fibre foods for GLP-1 users?",
                    "Good options include oats, berries, vegetables, lentils, beans, chickpeas, wholegrains, potatoes with skin, nuts, and seeds. Start with smaller portions if appetite is low or digestion feels sensitive.",
                  ],
                  [
                    "Should I take a fibre supplement on GLP-1 treatment?",
                    "Not everyone needs a fibre supplement. Food-first fibre is usually a better starting point, but supplements may help some people if food intake is low or a clinician recommends them.",
                  ],
                  [
                    "Can too much fibre make constipation worse?",
                    "Yes. Increasing fibre too quickly or taking fibre without enough fluid may worsen bloating or constipation. Therefore, gradual changes are usually safer.",
                  ],
                  [
                    "Is fibre the same as a GLP-1 supplement?",
                    "No. Fibre is a nutrition support tool, not a prescription GLP-1 medicine. It should not be presented as a replacement for Wegovy, Mounjaro, semaglutide, tirzepatide, or Wegovy Pill.",
                  ],
                  [
                    "What should I drink when increasing fibre?",
                    "Plain water is usually the simplest option. Soups, herbal teas, and water-rich foods may also help, but users should ask a clinician if they have fluid restrictions or ongoing vomiting or diarrhoea.",
                  ],
                  [
                    "Can fibre help fullness during weight loss treatment?",
                    "Yes, fibre-rich foods may support fullness, especially when paired with protein. However, GLP-1 users should avoid forcing large portions if they already feel very full.",
                  ],
                ].map(([question, answer]) => (
                  <div key={question}>
                    <h3
                      className={`mb-3 text-xl font-bold ${
                        darkMode ? "text-slate-200" : "text-slate-800"
                      }`}
                    >
                      {question}
                    </h3>
                    <p>{answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <GuideSection
              darkMode={darkMode}
              id="conclusion"
              heading="Conclusion"
            >
              <p>
                Fibre can be useful for GLP-1 users, especially for constipation
                support, fullness, and general diet quality. However, it works
                best when introduced gradually and paired with enough fluid.
              </p>
              <p>
                For people using Wegovy, Mounjaro, semaglutide, tirzepatide, or
                Wegovy Pill, the goal should not be extreme fibre intake. The
                better goal is a steady food-first routine that includes
                vegetables, fruit, oats, pulses, wholegrains, and hydration in a
                way that feels manageable.
              </p>
              <p>
                Fibre supplements may help some users, but they are optional and
                should not be marketed as GLP-1 replacements. If symptoms are
                severe, persistent, or worrying, professional advice is the safer
                route.
              </p>
              <p>
                Healthwise360 can support this journey with a practical,
                safety-first approach that connects nutrition support with
                weight loss treatment comparison, pharmacy checks, and long-term
                healthy habits.
              </p>
              <p
                className={`text-sm ${
                  darkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Health Wise does not prescribe or supply medicines. This page is
                general information and is not medical advice.
              </p>
            </GuideSection>
          </article>

          <div className="mt-10">
            <GuideSharePanel
              url={shareUrl}
              title={TITLE}
              description={DESCRIPTION}
            />
          </div>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
