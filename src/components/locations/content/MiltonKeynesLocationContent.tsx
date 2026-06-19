"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import BlogArticleColumn from "@/components/blog/BlogArticleColumn";
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
  "Best Weight Loss Treatment Milton Keynes: What Actually Works, What It Costs, and How to Choose Wisely";

export default function MiltonKeynesLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Best weight loss treatment in ${name}` },
      { id: "best-means", label: "What best really means" },
      { id: "categories", label: "The main treatment categories" },
      { id: "mk-context", label: "Why Milton Keynes is different" },
      { id: "injections", label: "Weight loss injections in Milton Keynes" },
      { id: "private-nhs", label: "Private clinics versus NHS routes" },
      { id: "clinic-quality", label: "How to judge a good weight loss clinic" },
      { id: "overlooked", label: "What most people overlook" },
      { id: "successful", label: "What is the most successful treatment?" },
      { id: "kelly-clarkson", label: "How did Kelly Clarkson really lose weight?" },
      { id: "pill", label: "Most successful weight loss pill in the UK" },
      { id: "cheaper", label: "Cheaper alternative to Mounjaro" },
      { id: "decision", label: "A practical way to choose in Milton Keynes" },
      { id: "mistakes", label: "Common mistakes people make" },
      { id: "support", label: "What helpful support should look like" },
      { id: "local", label: "Local lifestyle factors in Milton Keynes" },
      { id: "sources", label: "Key guidance" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps" },
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
        <BlogArticleColumn toc={toc} darkMode={darkMode}>
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Best weight loss treatment ${name}: what actually works`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  The best weight loss treatment in Milton Keynes depends on your goals and health profile. In practice, the strongest options are usually a mix of medically supervised weight loss injections, structured NHS or private lifestyle support, and, for some people, bariatric surgery; cosmetic fat reduction can help shape specific areas, but it is not a full weight-loss solution. If you want the most successful option overall, the evidence usually favors treatments that combine appetite control, nutrition support, activity changes, and regular follow-up rather than a single quick fix.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Milton Keynes has a lot going for it: good roads, plenty of green space, and a layout that can make walking easier than in some cities. That said, modern routines still get in the way. Long commutes, desk work, family schedules, and takeaway culture can make weight creep up quietly.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  If you are comparing options in Milton Keynes, the useful question is not just &quot;what is available?&quot; It is &quot;what is safe, realistic, and likely to work for me long term?&quot; That is where most people get more value from a well-matched plan than from the newest trending product. Compare broader routes on{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    best weight loss treatments in the UK
                  </Link>{" "}
                  and read our{" "}
                  <Link className={linkCls} href="/editorial-policy">
                    editorial policy
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="best-means" heading="What “best” really means">
                <p className={p}>
                  The best treatment is not the same for everyone. A person with a BMI in the high 20s and no medical problems may do well with a structured lifestyle programme. Someone with obesity plus diabetes, sleep apnoea, or joint pain may need a more medical route. Someone else may have already tried several diets and need a stronger appetite-suppressing option.
                </p>

                <p className={p}>In other words, &quot;best&quot; usually means the treatment that fits three things:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Your current health risks.</li>
                  <li>Your willingness to stick with the plan.</li>
                  <li>Your budget and access to follow-up.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  That sounds obvious, but it matters because many people search for one perfect answer. In reality, weight management works more like a ladder than a single button. Some people start with food and movement. Some add medicine. A smaller group eventually needs surgery. Use the{" "}
                  <Link className={linkCls} href="/tools/bmi-calculator">
                    BMI calculator
                  </Link>{" "}
                  as a preparation aid before appointments.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="categories" heading="The main treatment categories">
                <p className={`font-semibold ${strong}`}>1) Lifestyle-based weight loss</p>
                <p className={p}>
                  This is the foundation of almost every successful plan. It includes calorie control, better meal structure, more movement, sleep improvement, and support for habits like stress eating or evening snacking. For many people, this can produce meaningful weight loss on its own, especially when the plan is specific rather than vague.
                </p>

                <p className={p}>A vague plan sounds like &quot;eat better and move more.&quot; A useful plan sounds like:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Protein at breakfast.</li>
                  <li>Planned lunch instead of grabbing something random.</li>
                  <li>A 30-minute walk after dinner.</li>
                  <li>Smaller portions on weekdays.</li>
                  <li>A consistent sleep schedule.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  That kind of structure may not sound glamorous, but it tends to work better than short-lived detoxes or extreme rules.
                </p>

                <p className={`mt-6 font-semibold ${strong}`}>2) Weight loss injections</p>
                <p className={p}>
                  This is one of the biggest areas of interest in the UK right now. GLP-1 medicines such as semaglutide-based and tirzepatide-based treatments are often used for people who need more help controlling appetite and food noise. They can be very effective when prescribed appropriately and monitored properly.
                </p>

                <p className={p}>These medicines do not &quot;burn fat&quot; by magic. They usually help by:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Reducing appetite.</li>
                  <li>Helping you feel full sooner.</li>
                  <li>Making it easier to stick to a calorie deficit.</li>
                  <li>Supporting more predictable eating patterns.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  For some people, that can be a major turning point. For others, side effects, cost, or supply issues make them less suitable. They also work best when combined with habit changes. Without that, some of the benefit may fade after treatment ends. Read{" "}
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
                  for medicine basics.
                </p>

                <p className={`mt-6 font-semibold ${strong}`}>3) Surgery</p>
                <p className={p}>
                  Bariatric surgery is the most intensive option and is usually considered for people with more severe obesity or weight-related conditions. It is not a shortcut, and it is not right for everyone. But for appropriate patients, it can produce the largest and most durable weight loss.
                </p>

                <p className={p}>Surgery is usually considered when:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Weight is significantly affecting health.</li>
                  <li>Other treatments have not worked.</li>
                  <li>A clinician believes the benefits outweigh the risks.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  It also requires long-term commitment. You are not just choosing a procedure; you are choosing a lifelong change in eating, monitoring, and follow-up.
                </p>

                <p className={`mt-6 font-semibold ${strong}`}>4) Cosmetic fat reduction</p>
                <p className={p}>
                  This includes treatments that aim at stubborn areas rather than overall weight loss. These may appeal to people who are already fairly close to goal weight but want help with areas like the stomach, flanks, thighs, or chin.
                </p>

                <p className={p}>
                  This category is often misunderstood. It can improve shape, but it does not usually solve obesity. So if someone wants to lose a large amount of weight, cosmetic fat reduction is usually not the main answer. It is more of a finishing tool than a core treatment.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="mk-context" heading="Why Milton Keynes is a slightly different case">
                <p className={p}>
                  Milton Keynes is a commuter city, and that changes how people manage weight. A lot of residents are balancing work, travel, family, and time pressure. That means the &quot;best&quot; treatment often needs to be practical, not complicated.
                </p>

                <p className={p}>People in Milton Keynes often do better with plans that:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Fit around a car-based or mixed commute.</li>
                  <li>Allow simple meal prep.</li>
                  <li>Include remote follow-up.</li>
                  <li>Can be maintained without constant clinic visits.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  The city also has the kind of urban design that can help people stay active if they use it well. Flat routes, parks, and cycle paths can make walking more realistic than in hillier places. That matters more than people think. The easier movement feels, the more likely it is to happen repeatedly.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="injections" heading="Weight loss injections in Milton Keynes">
                <p className={p}>
                  This is the area many people mean when they ask about the best weight loss treatment. In a practical sense, weight loss injections can be a strong option for people who have struggled with appetite, bingeing, or repeated regain after dieting.
                </p>

                <p className={p}>
                  The main appeal is not just the weight loss itself. It is the change in relationship with food. Some people describe less constant thinking about snacks, smaller portions feeling adequate, and fewer dramatic hunger swings. That can make the whole process feel more manageable.
                </p>

                <p className={p}>Still, there are trade-offs:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Nausea can happen, especially early on.</li>
                  <li>Dose increases may need to be slow.</li>
                  <li>Not everyone is a candidate.</li>
                  <li>Results vary.</li>
                  <li>Costs can be significant if using private care.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  A good clinic should not just sell a pen. It should ask about your health history, current medication, weight history, and goals. It should also explain follow-up clearly. If those basics are missing, that is a warning sign. For side effect context, read{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-side-effects-uk">
                    Mounjaro side effects UK
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="private-nhs" heading="Private clinics versus NHS routes">
                <p className={p}>In Milton Keynes, as in most UK cities, people often compare private treatment with NHS pathways.</p>

                <p className={p}>Private routes tend to offer:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Faster access.</li>
                  <li>More choice.</li>
                  <li>More direct contact.</li>
                  <li>Clearer timelines.</li>
                </ul>

                <p className={`mt-4 ${p}`}>NHS routes tend to offer:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Lower cost or no cost.</li>
                  <li>More emphasis on clinical need.</li>
                  <li>Structured support over time.</li>
                  <li>A broader medical review.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Neither is automatically better. It depends on urgency, eligibility, and your comfort with paying privately. If someone is looking for support quickly and can afford it, private care may feel more responsive. If someone needs a more comprehensive assessment and can wait, NHS pathways may be more suitable.
                </p>

                <p className={p}>
                  One important point: the &quot;best&quot; option is not always the fastest. Sometimes the slower route is safer and more appropriate. If you are checking private access, use our{" "}
                  <Link className={linkCls} href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                    pharmacy verification guide
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/helpful-guides/fake-online-pharmacy-uk-how-to-spot-stay-safe">
                    fake online pharmacy UK guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="clinic-quality" heading="How to judge a good weight loss clinic">
                <p className={p}>
                  A strong provider should make the process feel clear, not confusing. You should know:
                </p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>What the treatment is meant to do.</li>
                  <li>What the expected timeline is.</li>
                  <li>What the side effects might be.</li>
                  <li>What happens if it does not suit you.</li>
                  <li>Who reviews you and how often.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  A good clinic also explains that medicines are not a free pass. They work better when paired with proper eating habits and some form of activity. That may sound basic, but it is where many people get better results than they expected.
                </p>

                <p className={p}>
                  Watch out for marketing that sounds too certain. If a clinic makes big promises with no nuance, that is usually a bad sign. Weight loss is not a perfect straight line. A credible provider should sound measured, not breathless.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="overlooked" heading="What most people overlook">
                <p className={p}>
                  People often focus on the medicine and ignore the boring bits. But the boring bits are often where the real progress comes from.
                </p>

                <p className={`font-semibold ${strong}`}>Sleep</p>
                <p className={p}>
                  Poor sleep can increase hunger, reduce impulse control, and make it harder to stick to a plan. A person who sleeps badly may eat more, move less, and crave quick energy foods. Fixing sleep will not replace treatment, but it can make treatment work better.
                </p>

                <p className={`font-semibold ${strong}`}>Protein</p>
                <p className={p}>
                  Many people undereat protein. That can make them feel less full and lose muscle along with fat. A decent protein intake helps preserve lean mass and often makes dieting more bearable.
                </p>

                <p className={`font-semibold ${strong}`}>Routine</p>
                <p className={p}>
                  A predictable routine often beats motivation. If you know when you will eat, when you will walk, and what your fallback meal is, you reduce the number of decisions you have to make. That matters when life gets busy.
                </p>

                <p className={`font-semibold ${strong}`}>Stress</p>
                <p className={p}>
                  Stress eating is common. It does not mean lack of willpower. It usually means food has become a fast coping tool. If that pattern is present, a plan should address it rather than pretending it is not there.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="successful" heading="What is the most successful weight loss treatment?">
                <p className={p}>
                  The most successful treatment is usually the one that combines medical support, food structure, and follow-up. If you are asking which single approach tends to produce the strongest results overall, surgery usually produces the largest weight loss for the right patients. If you are asking which non-surgical approach is most effective for many people, GLP-1 weight loss injections often rank highly.
                </p>

                <p className={p}>But &quot;successful&quot; needs context:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>For speed, injections may help more than lifestyle alone.</li>
                  <li>For long-term change in severe obesity, surgery may be strongest.</li>
                  <li>For mild to moderate weight concerns, a structured lifestyle programme may be enough.</li>
                  <li>For shaping specific areas, cosmetic fat reduction can help, but only in a limited way.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  So the best answer is not one product. It is the right treatment for the right person.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="kelly-clarkson" heading="How did Kelly Clarkson really lose weight?">
                <p className={p}>
                  Public discussion around Kelly Clarkson&apos;s weight loss has often focused on medications, especially GLP-1-type treatments, but celebrity weight loss is usually more complicated than the headlines suggest. In general, when public figures lose weight quickly, it is often a combination of factors rather than one single method.
                </p>

                <p className={p}>That usually includes:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Medical support if needed.</li>
                  <li>Diet changes.</li>
                  <li>More activity.</li>
                  <li>Better routine.</li>
                  <li>Life stage changes.</li>
                  <li>Sometimes stress changes or work changes.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  The useful lesson is not to copy a celebrity&apos;s exact path. It is to notice that visible weight loss often reflects a broader system, not one miracle product.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="pill" heading="What is the most successful weight loss pill in the UK?">
                <p className={p}>
                  If by &quot;pill&quot; you mean oral medication that supports weight loss, the reality is more limited than many people expect. In the UK, the strongest evidence for prescription weight management tends to be with medicines that are not pills, especially injectable GLP-1 treatments. Oral options exist, but they are generally less dramatic.
                </p>

                <p className={p}>So the honest answer is:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>The most effective prescription options overall are often injections.</li>
                  <li>Oral weight loss medicines may help in specific cases.</li>
                  <li>Over-the-counter &quot;fat burners&quot; are usually far less convincing.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  That is why people comparing treatments should look beyond the word &quot;pill&quot; and focus on evidence, eligibility, and supervision.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="cheaper" heading="What is a cheaper alternative to Mounjaro?">
                <p className={p}>
                  A cheaper alternative depends on what you mean by cheaper and what level of effect you need. If you mean a lower-cost treatment with similar goals, possibilities include:
                </p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>A different GLP-1 medicine with a lower monthly price.</li>
                  <li>A structured lifestyle programme.</li>
                  <li>NHS weight management support if eligible.</li>
                  <li>A treatment plan that focuses on calorie control and activity rather than medication.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  In broad terms, cheaper often means less potent, slower, or more effort-based. That does not make it bad. For some people, a lower-cost programme that they can stick with is better than a more expensive option they cannot maintain. Compare{" "}
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
                  </Link>{" "}
                  before deciding.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="decision" heading="A practical way to choose in Milton Keynes">
                <p className={p}>A sensible decision process would look like this:</p>

                <ol className={`list-decimal space-y-3 pl-6 ${p}`}>
                  <li>
                    <span className={`font-semibold ${strong}`}>Decide your goal.</span>
                    <br />
                    Do you want to lose a little, a moderate amount, or a large amount?
                  </li>
                  <li>
                    <span className={`font-semibold ${strong}`}>Decide your timeframe.</span>
                    <br />
                    Are you looking for a short-term reset or a long-term change?
                  </li>
                  <li>
                    <span className={`font-semibold ${strong}`}>Think about your appetite pattern.</span>
                    <br />
                    Is hunger the main issue, or is it more habit and routine?
                  </li>
                  <li>
                    <span className={`font-semibold ${strong}`}>Review your health conditions.</span>
                    <br />
                    Do you have diabetes, high blood pressure, sleep apnoea, PCOS, or joint pain?
                  </li>
                  <li>
                    <span className={`font-semibold ${strong}`}>Set your budget.</span>
                    <br />
                    Private medicine and follow-up can add up quickly.
                  </li>
                  <li>
                    <span className={`font-semibold ${strong}`}>Choose the least complicated plan that still makes sense.</span>
                    <br />
                    The best plan is often the one you can actually follow.
                  </li>
                </ol>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="mistakes" heading="Common mistakes people make">
                <p className={p}>A lot of people get stuck by doing one of these:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Starting too aggressively and quitting.</li>
                  <li>Relying on injections without changing habits.</li>
                  <li>Choosing the cheapest option without checking quality.</li>
                  <li>Expecting rapid loss every week.</li>
                  <li>Ignoring sleep and protein.</li>
                  <li>Comparing their journey to someone else&apos;s highlight reel.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Weight loss is often more about consistency than intensity. That is a boring answer, but it is usually the true one.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="support" heading="What helpful support should look like">
                <p className={p}>
                  Good support should feel specific. Not motivational poster specific. Practical specific.
                </p>

                <p className={p}>That means:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Clear calorie or meal guidance.</li>
                  <li>Realistic expectations.</li>
                  <li>Side effect management if medication is involved.</li>
                  <li>Follow-up that does not disappear after the first appointment.</li>
                  <li>Support for maintenance, not just weight loss.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  If a provider only talks about the first month, that is a problem. Maintenance is where many people struggle.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="local" heading="Local lifestyle factors in Milton Keynes">
                <p className={p}>Milton Keynes has some advantages that can support weight loss:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Flat walking routes.</li>
                  <li>Green spaces.</li>
                  <li>Cycle-friendly layout in many areas.</li>
                  <li>Easy access to supermarkets for meal planning.</li>
                </ul>

                <p className={`mt-4 ${p}`}>That said, the city also has the usual pressures:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Driving habits.</li>
                  <li>Office routines.</li>
                  <li>Fast-food convenience.</li>
                  <li>Busy family schedules.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  A realistic plan should work with both sides of that reality.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Key guidance">
                <p className={p}>
                  Outbound links stay minimal on this page to avoid duplicating other city pages. Use national guidance below, then return to Health Wise comparisons for pricing, medicine explainers, and safety checks.
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
                heading="Practical next steps (UK wide, including Milton Keynes)"
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
                    Compare medicines on{" "}
                    <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                      Mounjaro versus Wegovy versus Saxenda
                    </Link>
                    .
                  </li>
                  <li>
                    If private treatment is involved, check timing and shared-care context with{" "}
                    <Link className={linkCls} href="/helpful-guides/mounjaro-prescription-timeline-uk">
                      Mounjaro prescription timeline UK
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
                  The best weight loss treatment in Milton Keynes is usually the one that matches your health needs, your budget, and your ability to keep going. For some people, that will be a structured lifestyle plan. For others, it may be a medically supervised injection programme. For a smaller group, surgery is the right path. Cosmetic fat reduction has a place too, but it is not a substitute for real weight management.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  If you want the safest and most useful result, choose the plan that is clear, clinically grounded, and sustainable rather than the one that sounds the most dramatic.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="more-uk" heading="Other places in the UK">
                <p className={p}>
                  Browse the{" "}
                  <Link className={linkCls} href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}>
                    UK locations index
                  </Link>
                  . Nearby:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-luton">
                    Luton
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-london">
                    London
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-oxford">
                    Oxford
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
