"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSection } from "@/components/guide/GuideLayout";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { buildLocationFaq } from "@/lib/content/uk-location-article-data";
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
  "Best Weight Loss Treatment Manchester: Evidence-Based Options, Local Access, and What Actually Works";

export default function ManchesterLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "hub", label: "Why Manchester has become a weight loss hub" },
      { id: "what-counts", label: "What counts as the best weight loss treatment?" },
      { id: "glp1", label: "GLP-1 injections in Manchester" },
      { id: "mounjaro-gm", label: "Is Mounjaro available in Greater Manchester?" },
      { id: "six-months", label: "How much weight can you lose on Mounjaro in 6 months?" },
      { id: "who-benefits", label: "Who is most likely to benefit from GLP-1 treatment?" },
      { id: "surgery", label: "Bariatric surgery in Manchester" },
      { id: "lasers", label: "Fat-reduction lasers and body contouring" },
      { id: "clinics", label: "Manchester clinics and what they usually offer" },
      { id: "supervision", label: "Why supervision matters" },
      { id: "sustainable", label: "What makes weight loss sustainable?" },
      { id: "choose", label: "How to choose the right treatment in Manchester" },
      { id: "ask-before", label: "What to ask before starting treatment" },
      { id: "sources", label: "Key guidance" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Manchester)" },
      { id: "disclaimer", label: "Disclaimer" },
      { id: "faq", label: "Frequently Asked Questions" },
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

  const faqMarkdownComponents = useMemo(
    () => ({
      p: ({ children }: { children?: React.ReactNode }) => (
        <span className="block">{children}</span>
      ),
      a: ({
        href,
        children,
      }: {
        href?: string;
        children?: React.ReactNode;
      }) =>
        href?.startsWith("/") ? (
          <Link href={href} className={linkCls}>
            {children}
          </Link>
        ) : (
          <a
            href={href}
            className={linkCls}
            rel="noopener noreferrer"
            target="_blank"
          >
            {children}
          </a>
        ),
      strong: ({ children }: { children?: React.ReactNode }) => (
        <strong className={strong}>{children}</strong>
      ),
    }),
    [linkCls, strong],
  );

  const faqItems = useMemo(() => buildLocationFaq(loc), [loc]);

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

        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-manchester" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  AI Overview: The best weight loss treatment in Manchester usually depends on medical need, body mass index, lifestyle, and access to supervised care. In the UK, the strongest evidence tends to support medically guided GLP-1 treatments such as Mounjaro, Wegovy, or Saxenda for eligible patients, while bariatric surgery remains the most effective option for people with severe obesity and related health conditions. Some clinics in Manchester also offer non-surgical fat reduction technologies, but these are usually better understood as body-contouring tools rather than core weight loss solutions.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Manchester has become one of the UK&apos;s most visible cities for weight management, and that is not surprising. It has a large private healthcare market, strong NHS pathways, and a population that is already searching for realistic answers rather than quick-fix promises. If you live in the city or wider Greater Manchester area, the real question is not simply which treatment sounds best. It is which treatment is actually suitable, safe, and sustainable for your situation. Compare pathways on{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    best weight loss treatments in the UK
                  </Link>{" "}
                  and read our{" "}
                  <Link className={linkCls} href="/editorial-policy">
                    editorial policy
                  </Link>
                  .
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  That distinction matters more than many people expect. A treatment can be popular, expensive, and heavily marketed, yet still be the wrong fit. Another can look slower or less exciting, but deliver better long-term outcomes because it is medically supervised and matched to your health needs.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="hub" heading="Why Manchester has become a weight loss hub">
                <p className={p}>
                  Manchester is one of those cities where health services, private clinics, university hospitals, and lifestyle support all sit relatively close together. That creates choice, but also confusion. People often compare GLP-1 injections, surgical options, and laser-based treatments as if they were interchangeable. They are not.
                </p>

                <p className={p}>
                  The city&apos;s healthcare landscape also reflects a wider UK trend. More adults are looking for treatment paths that go beyond diet advice alone. They want help with appetite control, metabolic health, and practical support that fits work, family life, and commuting. That is especially relevant in a city like Manchester, where many people are balancing long workdays, hybrid schedules, student life, and family responsibilities.
                </p>

                <p className={p}>
                  A second reason Manchester stands out is that the area has a very active private clinic market. That does not automatically mean better care, but it does mean more access to medically supervised weight management options than many smaller towns. In practice, that can shorten waiting times for eligible people. It also means the quality of advice varies more than it should. Some providers are excellent. Others are mainly selling convenience. If you are weighing brands, start with{" "}
                  <Link className={linkCls} href="/what-is-mounjaro">
                    what Mounjaro is
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/what-is-wegovy">
                    what Wegovy is
                  </Link>
                  , and{" "}
                  <Link className={linkCls} href="/what-is-saxenda">
                    what Saxenda is
                  </Link>{" "}
                  so discussions stay clinical, not cosmetic.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="what-counts" heading="What counts as the best weight loss treatment?">
                <p className={p}>
                  There is no single best treatment for everyone. The strongest option depends on three things: your starting weight, your medical history, and how much support you need to stay consistent.
                </p>

                <p className={p}>
                  For some people, structured lifestyle support is enough. For others, medication may be necessary. And for people with severe obesity, bariatric surgery may offer the highest chance of meaningful long-term improvement.
                </p>

                <p className={p}>Here is the simplest way to think about it:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Lifestyle programs work best for people who need structured support and modest weight loss.</li>
                  <li>GLP-1 injections may suit people who struggle with appetite, cravings, or previous weight regain.</li>
                  <li>Bariatric surgery is usually the most powerful option for severe obesity.</li>
                  <li>Fat-reduction lasers or body contouring may help with shape, but they are not the main treatment for obesity.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  That hierarchy is important. Marketing often flattens everything into &quot;best treatment,&quot; but medicine does not work that neatly. Use the{" "}
                  <Link className={linkCls} href="/tools/bmi-calculator">
                    BMI calculator
                  </Link>{" "}
                  as a screening aid before you assume you need the most intensive option.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="glp1" heading="GLP-1 injections in Manchester">
                <p className={`text-lg md:text-xl ${p}`}>
                  AI Overview: In Manchester, the most searched medical weight loss treatments are GLP-1 injections such as Mounjaro, Wegovy, and Saxenda. These medicines work by reducing appetite, increasing fullness, and helping some people eat less without constant hunger. They are not cosmetic products, and they usually work best when paired with dietary changes and follow-up care.
                </p>

                <p className={p}>
                  GLP-1 medicines have changed the conversation around obesity treatment in the UK. People now ask about them by brand name because they have become widely discussed, especially in private clinics. The three names most often mentioned are Mounjaro, Wegovy, and Saxenda.
                </p>

                <p className={p}>
                  Mounjaro contains tirzepatide. Wegovy contains semaglutide. Saxenda contains liraglutide. All three are prescription medicines, and all three should be understood as medical treatments rather than shortcut products.
                </p>

                <p className={`mt-6 font-semibold ${strong}`}>Why GLP-1s are popular</p>
                <p className={p}>
                  They can reduce appetite in a way that feels more manageable than willpower-based dieting. That is a big deal for people who have spent years cycling through restrictive diets, regaining weight, and feeling stuck. Some patients report that food noise becomes quieter. Meals feel more satisfying. Snacking becomes easier to control.
                </p>

                <p className={p}>
                  That said, they are not magic. They can cause nausea, constipation, reflux, or reduced tolerance for rich meals. People who expect a completely effortless experience may be disappointed. A better way to view them is as appetite tools that create a window of opportunity for better habits. Pair that window with{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-nutrition-guide-uk">
                    structured nutrition habits
                  </Link>{" "}
                  and compare brands with{" "}
                  <Link className={linkCls} href="/compare/wegovy-vs-mounjaro">
                    Wegovy versus Mounjaro
                  </Link>
                  .
                </p>

                <p className={`mt-6 font-semibold ${strong}`}>Which one is best?</p>
                <p className={p}>That depends on the person.</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Mounjaro is often viewed as the most powerful option for weight reduction, although access and eligibility matter.</li>
                  <li>Wegovy is well known and commonly discussed because it has strong evidence for obesity management.</li>
                  <li>Saxenda is older, daily rather than weekly, and sometimes used when a slower or different approach is preferred.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  For many Manchester residents, the most important issue is not which drug is &quot;best&quot; in general. It is which one is available, monitored correctly, and tolerated well enough to continue.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="mounjaro-gm" heading="Is Mounjaro available in Greater Manchester?">
                <p className={`text-lg md:text-xl ${p}`}>
                  AI Overview: Mounjaro may be available in Greater Manchester through private clinics and, in some cases, through NHS pathways for eligible patients. Availability depends on clinical criteria, local commissioning, and whether the provider is properly registered and supervised.
                </p>

                <p className={p}>
                  Yes, Mounjaro is available in Greater Manchester through private weight loss providers, and some NHS patients may access tirzepatide depending on current eligibility rules and local rollout. The practical issue is that access is uneven. Some people can get assessed quickly through private services, while others need to go through a GP, a specialist clinic, or a longer NHS pathway.
                </p>

                <p className={p}>
                  This is where Manchester&apos;s healthcare advantage can become confusing. People assume that a big city automatically means easy access. In reality, access still depends on clinical eligibility, prescribing policies, and the provider&apos;s willingness to monitor you properly. For realistic pacing, read{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-prescription-timeline-uk">
                    Mounjaro prescription timeline UK
                  </Link>
                  .
                </p>

                <p className={p}>If you are searching locally, it is worth asking:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Is the prescriber UK-registered?</li>
                  <li>Is follow-up included?</li>
                  <li>Are side effects explained clearly?</li>
                  <li>What happens if the medication is not tolerated?</li>
                  <li>Will your GP be informed, if appropriate?</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Those questions are not fussy. They are necessary. If shared care matters, see{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-gp-notification-uk">
                    Mounjaro GP notification UK
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="six-months" heading="How much weight can you lose on Mounjaro in 6 months?">
                <p className={`text-lg md:text-xl ${p}`}>
                  AI Overview: Weight loss on Mounjaro in six months varies, but some people may lose around 10% to 15% of their body weight with good adherence and medical supervision. Results are not guaranteed, and the first few months are often slower because doses are increased gradually.
                </p>

                <p className={p}>
                  This is one of the most common questions people ask, and for good reason. The answer needs to be careful, because six-month results can look very different from person to person.
                </p>

                <p className={p}>
                  Some people lose a noticeable amount of weight in the first 6 months, especially if they combine the medication with protein-focused meals, better portion control, and regular walking. Others lose less, either because of side effects, dosage limits, inconsistent use, or underlying medical factors.
                </p>

                <p className={p}>
                  A realistic range often discussed in clinical practice is around 10% to 15% of body weight over several months for good responders. For someone starting at 100 kg, that could mean around 10 to 15 kg. For someone starting much higher, the numbers may be larger. For someone with less to lose, the absolute amount may be smaller.
                </p>

                <p className={p}>
                  The key point is that the medication is not a shortcut around behavior. It is more like a support system that makes behavior change more achievable. If progress stalls, read{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-weight-loss-plateau">
                    weight loss plateau guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="who-benefits" heading="Who is most likely to benefit from GLP-1 treatment?">
                <p className={p}>GLP-1 treatment tends to be most useful for people who:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Have struggled with appetite control for years.</li>
                  <li>Have regained weight after previous diets.</li>
                  <li>Have obesity-related health risks.</li>
                  <li>Need medical support rather than advice alone.</li>
                  <li>Can commit to follow-up and gradual dose adjustment.</li>
                </ul>

                <p className={`mt-6 ${p}`}>It may be less suitable for people who:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Want rapid cosmetic change without medical oversight.</li>
                  <li>Cannot tolerate nausea or digestive side effects.</li>
                  <li>Are pregnant, trying to conceive, or have certain contraindications.</li>
                  <li>Expect the medicine to replace all lifestyle change.</li>
                  <li>Need a treatment that is cheap and completely hands-off.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  That last point matters. A lot of online marketing sells the idea of easy access without responsibility. In real clinical care, the responsibility is part of the package. For class effects, read{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-side-effects-uk">
                    Mounjaro side effects UK
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="surgery" heading="Bariatric surgery in Manchester">
                <p className={`text-lg md:text-xl ${p}`}>
                  AI Overview: Bariatric surgery is usually the most effective weight loss treatment for severe obesity, especially when there are related health conditions such as type 2 diabetes or sleep apnea. In Manchester, it is typically considered after structured medical assessment and when other approaches have not worked well enough.
                </p>

                <p className={p}>
                  If you are looking for the strongest treatment by outcome, surgery remains the benchmark for severe obesity. Procedures such as gastric bypass or sleeve gastrectomy can produce large and sustained weight loss when carefully selected and followed properly.
                </p>

                <p className={p}>
                  That does not mean surgery is the right answer for everyone. It is invasive. It requires recovery. It changes eating habits permanently. And it demands long-term nutritional monitoring. People sometimes talk about surgery as though it is the &quot;final boss&quot; of weight loss, but the truth is more serious. It is a major medical intervention, not an upgraded diet plan.
                </p>

                <p className={p}>
                  In Manchester, surgical pathways are usually tied to specialist assessment and eligibility criteria. For the right patient, surgery may offer the most significant improvement in mobility, diabetes control, and quality of life. For someone with moderate weight concerns, it is usually too much.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="lasers" heading="Fat-reduction lasers and body contouring">
                <p className={p}>
                  Manchester clinics also advertise laser fat reduction, cryolipolysis, radiofrequency, and other non-surgical body-contouring options. These can be useful, but only if they are understood correctly.
                </p>

                <p className={p}>
                  They are not obesity treatments in the same sense as GLP-1 medication or surgery. They usually target stubborn areas such as the abdomen, flanks, or thighs. That can make them appealing for people who are already near a healthy weight but want shape improvement.
                </p>

                <p className={p}>
                  The risk is that people confuse contouring with weight loss. The number on the scale may not change much. What changes is body shape, not necessarily total body mass.
                </p>

                <p className={p}>That makes them best suited to a narrow group:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>People close to goal weight.</li>
                  <li>People wanting shape refinement.</li>
                  <li>People who understand results are gradual and modest.</li>
                  <li>People who are not expecting them to solve appetite or metabolic issues.</li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="clinics" heading="Manchester clinics and what they usually offer">
                <p className={p}>
                  Several Manchester providers are known for weight management and obesity-related care, including medically supervised programs and specialist hospital-based services. The names people most often search for include Bodyline, Manchester Weight Loss Clinic, and Spire Manchester Hospital. Some focus on prescribing and follow-up, while others offer broader surgical or consultant-led pathways.
                </p>

                <p className={p}>
                  When you compare providers, the important difference is not the marketing tone. It is the clinical model.
                </p>

                <p className={p}>A strong clinic usually offers:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Proper eligibility screening.</li>
                  <li>A medical history review.</li>
                  <li>Follow-up appointments.</li>
                  <li>Side effect management.</li>
                  <li>Clear guidance on diet, hydration, and protein intake.</li>
                  <li>Referral pathways if something looks unsafe.</li>
                </ul>

                <p className={`mt-6 ${p}`}>
                  A weaker clinic often focuses on speed and sales language. It may promise convenience, but leave out the boring parts that actually protect you. That is usually where the problems start. Before you pay, read{" "}
                  <Link className={linkCls} href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                    how we verify UK pharmacies
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/helpful-guides/fake-online-pharmacy-uk-how-to-spot-stay-safe">
                    fake online pharmacy UK
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="supervision" heading="Why supervision matters">
                <p className={p}>
                  Weight loss treatment can look simple from the outside. In reality, it affects digestion, hunger, blood sugar, and sometimes mood. That is why supervision matters.
                </p>

                <p className={p}>A supervised plan can help identify problems early:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Persistent nausea.</li>
                  <li>Reflux or dehydration.</li>
                  <li>Too-rapid weight loss.</li>
                  <li>Gallbladder symptoms.</li>
                  <li>Not eating enough protein.</li>
                  <li>Losing muscle instead of fat.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  People sometimes assume these issues are minor. They are not always minor. For example, if someone loses weight too quickly without enough protein and strength work, they may feel tired and weaker instead of healthier. That is not a win.
                </p>

                <p className={p}>
                  A good provider does not just hand over treatment. It helps you stay safe while the treatment is working.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sustainable" heading="What makes weight loss sustainable?">
                <p className={p}>
                  This is where many articles become too shallow. Sustainable weight loss is not about motivation alone. It usually depends on a system that makes healthy choices easier to repeat.
                </p>

                <p className={p}>The foundations are simple, even if they are not easy:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Eat enough protein.</li>
                  <li>Keep meals structured.</li>
                  <li>Walk more than you think you need to.</li>
                  <li>Add resistance exercise if possible.</li>
                  <li>Sleep well.</li>
                  <li>Reduce liquid calories.</li>
                  <li>Watch weekend drift.</li>
                  <li>Plan for setbacks.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Manchester life can either help or hinder this. If you commute, you may need portable meals. If you work shifts, appetite timing becomes more important. If you live near the city centre, walking can do more heavy lifting than many people realize.
                </p>

                <p className={p}>
                  This is also where local context matters. A person living in Didsbury, Salford, or Stockport may have a slightly different routine from someone in central Manchester. The biology is the same. The habits are not.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="choose" heading="How to choose the right treatment in Manchester">
                <p className={p}>A sensible choice starts with honesty.</p>

                <p className={p}>Ask yourself:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Do I need help with appetite, or mostly with structure?</li>
                  <li>Am I looking for fat loss, weight loss, or body shaping?</li>
                  <li>Do I want the fastest medical option, or the best long-term one?</li>
                  <li>Can I commit to follow-up?</li>
                  <li>Do I have any health conditions that change the decision?</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  A person with severe obesity and related complications may need a very different plan from someone who simply wants to lose the last 6 kg. That may seem obvious, but online searches often blur those differences.
                </p>

                <p className={p}>
                  If your main issue is hunger and repeated regain, GLP-1 medication may be worth discussing. If your condition is more severe, surgery may be the more effective route. If you are close to goal weight and want shape refinement, contouring might be enough. There is no prize for choosing the most dramatic option. For a fuller comparator view, open{" "}
                  <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                    Mounjaro versus Wegovy versus Saxenda
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/methodology">
                    methodology
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="ask-before" heading="What to ask before starting treatment">
                <p className={p}>Before starting any weight loss treatment in Manchester, ask:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>What are the expected benefits?</li>
                  <li>What side effects should I expect?</li>
                  <li>How long will treatment last?</li>
                  <li>What follow-up is included?</li>
                  <li>What happens if I stop treatment?</li>
                  <li>Will I need blood tests or monitoring?</li>
                  <li>Is this treatment suitable for my medical history?</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  These questions are useful because they reveal whether the provider is genuinely clinical or mostly commercial. A trustworthy clinic answers clearly. A weaker one tends to sound vague and overconfident at the same time. For pricing context without choosing a seller for you, use{" "}
                  <Link className={linkCls} href="/mounjaro-price-comparison">
                    Mounjaro price comparison
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/wegovy-price-comparison">
                    Wegovy price comparison
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Key guidance">
                <p className={p}>
                  Outbound links stay minimal on this page on purpose. Use national guidance below, then return to Health Wise comparisons for pricing and safety.
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
                heading="Practical next steps (UK wide, including Manchester)"
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
                    Verify private sellers with our{" "}
                    <Link className={linkCls} href="/helpful-guides/fake-online-pharmacy-uk-how-to-spot-stay-safe">
                      fake online pharmacy UK guide
                    </Link>
                    .
                  </li>
                  <li>
                    If your GP mentions shared care, read{" "}
                    <Link className={linkCls} href="/helpful-guides/mounjaro-gp-notification-uk">
                      Mounjaro GP notification UK
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

              <GuideSection darkMode={darkMode} id="faq" heading="Frequently Asked Questions">
                <div className="space-y-6">
                  {faqItems.map((item) => (
                    <div key={item.q} className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                      <p className={`text-base font-semibold ${strong}`}>{item.q}</p>
                      <div className={`mt-2 text-sm leading-relaxed ${p}`}>
                        <ReactMarkdown components={faqMarkdownComponents}>{item.a}</ReactMarkdown>
                      </div>
                    </div>
                  ))}
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p className={`text-lg md:text-xl ${p}`}>
                  Best weight loss treatment Manchester is not one fixed product or one trendy clinic. It is the option that fits your health profile, your goals, and the level of support you actually need.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  For many people, GLP-1 injections are the most practical medical option. For others, bariatric surgery offers the biggest long-term change. And for a smaller group, contouring treatments may help shape rather than weight. The right answer is not the loudest one. It is the one that is medically sound, properly supervised, and realistic enough to sustain.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="more-uk" heading="Other places in the UK">
                <p className={p}>
                  Browse the{" "}
                  <Link className={linkCls} href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}>
                    UK locations index
                  </Link>
                  . Nearby:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-bolton">
                    Bolton
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-liverpool">
                    Liverpool
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-leeds">
                    Leeds
                  </Link>
                  .
                </p>
              </GuideSection>
            </article>

            <div className="mt-12">
              <GuideSharePanel shareUrl={shareUrl} title={PAGE_TITLE} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
