"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSection, GuideTable } from "@/components/guide/GuideLayout";
import {
  blogImgPath,
  WEIGHT_LOSS_TREATMENT_UK_COMPLETE_GUIDE_HERO_PNG,
  WEIGHT_LOSS_TREATMENT_UK_COMPLETE_GUIDE_INLINE_PNG,
} from "./blog-assets";

const HERO_SRC = blogImgPath(WEIGHT_LOSS_TREATMENT_UK_COMPLETE_GUIDE_HERO_PNG);
const INLINE_SRC = blogImgPath(WEIGHT_LOSS_TREATMENT_UK_COMPLETE_GUIDE_INLINE_PNG);

const TOC = [
  { id: "best-treatment", label: "Best Treatment Right Now" },
  { id: "glp1-science", label: "Part 1: GLP 1 Science" },
  { id: "main-treatments", label: "Part 2: Main Treatments" },
  { id: "eligibility", label: "Part 3: Eligibility" },
  { id: "access-routes", label: "Part 4: Access Routes" },
  { id: "costs", label: "Part 5: Costs" },
  { id: "expectations", label: "Part 6: What to Expect" },
  { id: "safety", label: "Part 7: Provider Safety" },
  { id: "faq", label: "FAQ" },
  { id: "conclusion", label: "Conclusion" },
];

function SubHeading({
  children,
  darkMode,
}: {
  children: React.ReactNode;
  darkMode: boolean;
}) {
  return (
    <h3 className={`mt-6 text-lg font-medium ${darkMode ? "text-white" : "text-slate-900"}`}>
      {children}
    </h3>
  );
}

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);

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

        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-400">
          <Link href="/" className="transition-colors hover:text-emerald-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="transition-colors hover:text-emerald-600">
            Blog
          </Link>
          <span>/</span>
          <span className={darkMode ? "text-slate-200" : "text-slate-600"}>
            Weight Loss Treatment UK Complete Guide
          </span>
        </nav>

        <header className="mb-12">
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            The Complete Guide to Weight Loss Treatment in the UK (2026): GLP 1, How It Works, Costs & What to Expect
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              9 Jun 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              14 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_SRC}
            alt="Complete UK weight loss treatment guide with health planning and cost comparison visuals"
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
              <GuideSection darkMode={darkMode} id="best-treatment" heading="What Is the Best Weight Loss Treatment Available in the UK Right Now?">
                <p className="text-lg md:text-xl">
                  The most clinically effective prescription weight loss treatments currently available in the UK are GLP 1 receptor agonists, a class of medicines that work by regulating appetite, slowing digestion, and influencing the brain&apos;s satiety signals. The three principal options available privately are <strong>Mounjaro (tirzepatide)</strong>, <strong>Wegovy (semaglutide)</strong>, and <strong>Saxenda (liraglutide)</strong>.
                </p>
                <p>Based on clinical trial data:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Mounjaro produces average weight loss of <strong>15 to 20%</strong> of body weight, based on SURMOUNT trials.</li>
                  <li>Wegovy produces average weight loss of <strong>12 to 15%</strong> of body weight, based on STEP trials.</li>
                  <li>Saxenda produces average weight loss of <strong>5 to 8%</strong> of body weight, based on SCALE trials.</li>
                </ul>
                <p>
                  Both Mounjaro and Wegovy are NICE approved and available through NHS specialist services for eligible patients. All three are available privately through GPhC registered UK pharmacies following a clinical assessment.
                </p>
                <p>
                  This guide covers everything you need to understand about weight loss treatment in the UK: what these medications are, how they work, who is eligible, what they cost, how to access them safely, and what to realistically expect from treatment.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="glp1-science" heading="Part 1: Understanding GLP 1, The Science Behind Modern Weight Loss Treatment">
                <SubHeading darkMode={darkMode}>What Is GLP 1?</SubHeading>
                <p>
                  GLP 1 stands for glucagon like peptide 1, a hormone produced naturally in the gut in response to eating. When you consume food, your intestinal cells release GLP 1, which performs several functions simultaneously.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>It signals the pancreas to release insulin, lowering blood glucose.</li>
                  <li>It suppresses glucagon production, reducing glucose release from the liver.</li>
                  <li>It slows gastric emptying, so food leaves the stomach more slowly and produces sustained fullness.</li>
                  <li>It signals the hypothalamus in the brain to reduce appetite and increase satiety.</li>
                </ul>
                <p>
                  In people with obesity or excess weight, this natural GLP 1 signalling system is often dysregulated, meaning the body does not receive or respond to these satiety and appetite signals as effectively as it should. GLP 1 receptor agonists are designed to mimic and amplify this system, producing stronger and more sustained appetite regulation than the body achieves naturally.
                </p>

                <SubHeading darkMode={darkMode}>How GLP 1 Receptor Agonists Work for Weight Loss</SubHeading>
                <p>
                  When a GLP 1 medication is used, it binds to GLP 1 receptors throughout the body, including in the pancreas, gut, and brain. It activates the same pathways as natural GLP 1, but with significantly greater potency and duration.
                </p>
                <p>
                  The result is a combination of effects that work together to reduce food intake and support weight loss.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li><strong>Reduced appetite:</strong> the hypothalamus receives stronger satiety signals, meaning the desire to eat is suppressed between meals and portion sizes naturally decrease.</li>
                  <li><strong>Slower gastric emptying:</strong> food stays in the stomach longer, sustaining the physical sensation of fullness and reducing the speed at which hunger returns after eating.</li>
                  <li><strong>Reduced food reward signalling:</strong> GLP 1 receptors in the brain&apos;s reward centres, including the nucleus accumbens, are also activated, reducing the psychological drive toward high calorie, high reward foods.</li>
                  <li><strong>Improved blood glucose regulation:</strong> insulin is released more effectively in response to food, and glucose production between meals is reduced. This is particularly relevant for patients with type 2 diabetes or prediabetes.</li>
                </ul>
                <p>
                  These mechanisms do not require dietary restriction to activate, but clinical evidence consistently shows that they work most effectively when combined with lifestyle changes. GLP 1 treatment is not a replacement for a sustainable diet and activity approach. It is a pharmacological tool that makes those approaches more achievable for people whose biology works against them.
                </p>

                <SubHeading darkMode={darkMode}>The Difference Between GLP 1 and GIP plus GLP 1</SubHeading>
                <p>
                  Mounjaro (tirzepatide) differs from Wegovy and Saxenda in one clinically significant way: it acts on two receptors simultaneously.
                </p>
                <p>
                  In addition to the GLP 1 receptor, tirzepatide also activates the <strong>GIP (glucose dependent insulinotropic polypeptide)</strong> receptor. GIP is another gut hormone involved in energy metabolism and fat storage. By activating both pathways together, Mounjaro produces a synergistic effect that exceeds the appetite and weight loss response seen with GLP 1 alone, which is reflected in the higher average weight loss benchmarks from the SURMOUNT trials compared to the STEP (Wegovy) and SCALE (Saxenda) data.
                </p>
                <p>
                  This dual mechanism is why Mounjaro is considered a next generation GLP 1 treatment. It operates on the same fundamental biological system but with an additional receptor target that enhances the overall effect.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="main-treatments" heading="Part 2: The Three Main Weight Loss Treatments Available in the UK">
                <SubHeading darkMode={darkMode}>Mounjaro (Tirzepatide)</SubHeading>
                <GuideTable
                  headers={["Feature", "Detail"]}
                  rows={[
                    { cells: ["Manufacturer", "Eli Lilly"] },
                    { cells: ["Mechanism", "Dual GIP plus GLP 1 receptor agonist"] },
                    { cells: ["Frequency", "Once weekly"] },
                    { cells: ["Available doses", "2.5 mg, 5 mg, 7.5 mg, 10 mg, 12.5 mg, 15 mg"] },
                    { cells: ["NICE approved", "Yes (TA878)"] },
                    { cells: ["NHS available", "Yes, phased rollout through specialist services"] },
                    { cells: ["Average weight loss", "15 to 20% of body weight"], highlight: true },
                  ]}
                />
                <p>
                  Mounjaro is the most recently approved and highest efficacy GLP 1 option currently available in the UK. The SURMOUNT 1 trial demonstrated average weight loss of 20.9% in participants without diabetes who reached the 15 mg maintenance dose, a result that significantly exceeded what had been seen with any previous pharmacological weight management intervention.
                </p>
                <p>
                  The KwikPen delivery device delivers a fixed 0.6 mL dose per weekly treatment, with four doses per pen. The titration protocol runs from 2.5 mg to 15 mg across six dose steps, each held for a minimum of four weeks before escalation.
                </p>
                <p>
                  For deeper clinical context, read our full <Link href="/what-is-mounjaro" className="font-semibold text-emerald-600 hover:underline">Mounjaro tirzepatide guide</Link>. For current provider pricing, the <Link href="/mounjaro-price-comparison" className="font-semibold text-emerald-600 hover:underline">Mounjaro price comparison</Link> page gives a focused view across UK pharmacies.
                </p>

                <SubHeading darkMode={darkMode}>Wegovy (Semaglutide)</SubHeading>
                <GuideTable
                  headers={["Feature", "Detail"]}
                  rows={[
                    { cells: ["Manufacturer", "Novo Nordisk"] },
                    { cells: ["Mechanism", "GLP 1 receptor agonist"] },
                    { cells: ["Frequency", "Once weekly"] },
                    { cells: ["Available doses", "0.25 mg, 0.5 mg, 1 mg, 1.7 mg, 2.4 mg"] },
                    { cells: ["NICE approved", "Yes (TA875)"] },
                    { cells: ["NHS available", "Yes, phased rollout through specialist services"] },
                    { cells: ["Average weight loss", "12 to 15% of body weight"], highlight: true },
                  ]}
                />
                <p>
                  Wegovy is the established weekly semaglutide treatment for weight management, distinct from Ozempic (semaglutide 1 mg), which is approved for type 2 diabetes management but not licensed for weight management in the UK. The STEP trials demonstrated average weight loss of 14.9% over 68 weeks at the 2.4 mg maintenance dose, with a significant proportion of participants achieving 15% or more.
                </p>
                <p>
                  Wegovy uses a single use auto injector pen. There is no dial or click mechanism. Each pen delivers one dose, making it simpler in operation than the multi dose Mounjaro KwikPen.
                </p>
                <p>
                  For a complete clinical overview, see the <Link href="/what-is-wegovy" className="font-semibold text-emerald-600 hover:underline">Wegovy weight loss guide</Link>.
                </p>

                <SubHeading darkMode={darkMode}>Saxenda (Liraglutide)</SubHeading>
                <GuideTable
                  headers={["Feature", "Detail"]}
                  rows={[
                    { cells: ["Manufacturer", "Novo Nordisk"] },
                    { cells: ["Mechanism", "GLP 1 receptor agonist"] },
                    { cells: ["Frequency", "Once daily"] },
                    { cells: ["Available doses", "0.6 mg, 1.2 mg, 1.8 mg, 2.4 mg, 3.0 mg"] },
                    { cells: ["NICE approved", "Yes"] },
                    { cells: ["NHS available", "Yes, available through some NHS weight management services"] },
                    { cells: ["Average weight loss", "5 to 8% of body weight"], highlight: true },
                  ]}
                />
                <p>
                  Saxenda is the original GLP 1 weight loss treatment and has the longest clinical track record of the three. It was approved in the UK before Wegovy and Mounjaro and remains an established option, particularly for patients whose prescribers prefer a more conservative starting point or for whom daily dosing is clinically preferable.
                </p>
                <p>
                  The lower average weight loss benchmark relative to the newer weekly options reflects both the older generation of the compound and the single receptor mechanism. However, individual responses vary, and some patients achieve significant outcomes on liraglutide.
                </p>
                <p>
                  For a complete clinical guide, see the <Link href="/what-is-saxenda" className="font-semibold text-emerald-600 hover:underline">Saxenda weight loss treatment guide</Link>.
                </p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_SRC}
                  alt="Wellness planning desk with charts, notes and a laptop for researching UK weight loss treatment options"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection darkMode={darkMode} id="eligibility" heading="Part 3: Who Is Eligible for Weight Loss Treatment in the UK?">
                <SubHeading darkMode={darkMode}>NHS Eligibility Criteria</SubHeading>
                <p>
                  For NHS access to Mounjaro or Wegovy through specialist weight management services, NICE guidance sets the following general criteria.
                </p>
                <GuideTable
                  headers={["Criteria", "Detail"]}
                  rows={[
                    { cells: ["BMI threshold", "30 kg/m² or above in most pathways"] },
                    { cells: ["With comorbidities", "BMI 27 to 29.9 with at least one weight related health condition"] },
                    { cells: ["Qualifying conditions", "Type 2 diabetes, hypertension, dyslipidaemia, sleep apnoea, cardiovascular disease, prediabetes"] },
                    { cells: ["Access route", "GP referral to specialist weight management service (Tier 3)"] },
                    { cells: ["Availability", "Phased rollout, not universally available in all regions in 2026"], highlight: true },
                  ]}
                />
                <p>
                  <strong>The practical gap:</strong> NICE approval does not mean universal NHS availability. Local commissioning groups implement the guidance at different speeds and with different criteria. Many patients who qualify under NICE thresholds find that NHS access in their area is limited or has significant waiting times, which is the primary reason most UK patients continue to access these treatments privately in 2026.
                </p>

                <SubHeading darkMode={darkMode}>Private Eligibility Criteria</SubHeading>
                <p>
                  Private prescribers generally follow similar BMI thresholds to NHS guidance, though the specific criteria can vary by provider.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li><strong>BMI 30 or above:</strong> typically eligible for private GLP 1 prescribing without additional conditions.</li>
                  <li><strong>BMI 27 to 29.9:</strong> may be eligible with at least one qualifying weight related health condition.</li>
                  <li><strong>BMI below 27:</strong> prescription GLP 1 treatment is not typically appropriate; lifestyle and non pharmacological approaches are usually recommended first.</li>
                </ul>
                <p>
                  A licensed prescriber makes the final eligibility determination following a full clinical assessment, which includes reviewing medical history, current medications, and any contraindications, not just calculating BMI.
                </p>
                <p>
                  To understand your BMI category and its implications for treatment eligibility, the <Link href="/tools/bmi-calculator" className="font-semibold text-emerald-600 hover:underline">BMI calculator with NHS eligibility context</Link> provides an NHS aligned result in any UK measurement format.
                </p>

                <SubHeading darkMode={darkMode}>Who Should Not Use GLP 1 Treatments</SubHeading>
                <p>
                  GLP 1 medications are not appropriate for everyone. Common contraindications include:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Personal or family history of medullary thyroid carcinoma (MTC).</li>
                  <li>Multiple endocrine neoplasia syndrome type 2 (MEN 2).</li>
                  <li>Severe gastrointestinal conditions, for example gastroparesis.</li>
                  <li>Pregnancy or breastfeeding.</li>
                  <li>Certain concurrent medications that interact with GLP 1 drugs.</li>
                  <li>Severe kidney or liver impairment, assessed case by case.</li>
                </ul>
                <p>
                  A thorough clinical assessment by a licensed prescriber is essential, not optional, before starting any of these treatments.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="access-routes" heading="Part 4: How Weight Loss Treatment Is Accessed in the UK">
                <SubHeading darkMode={darkMode}>Route 1: NHS (Specialist Weight Management Service)</SubHeading>
                <p>The NHS route for GLP 1 treatment involves:</p>
                <ol className="list-decimal space-y-2 pl-5">
                  <li><strong>GP consultation:</strong> discuss weight management and request referral.</li>
                  <li><strong>Referral to Tier 3 weight management service:</strong> specialist multidisciplinary service.</li>
                  <li><strong>Assessment:</strong> BMI, comorbidities, previous weight management attempts, clinical suitability.</li>
                  <li><strong>Prescription initiation:</strong> if eligible, treatment begins under specialist supervision.</li>
                  <li><strong>Ongoing monitoring:</strong> regular review by the specialist team.</li>
                </ol>
                <p>
                  <strong>Advantages:</strong> no medication cost to the patient, although standard NHS prescription charge applies where relevant.
                </p>
                <p>
                  <strong>Disadvantages:</strong> availability varies significantly by region, waiting times can be lengthy, and eligibility criteria may be applied more strictly than the minimum NICE thresholds.
                </p>

                <SubHeading darkMode={darkMode}>Route 2: Private Online Pharmacy (Most Common Route in 2026)</SubHeading>
                <p>The private online route involves:</p>
                <ol className="list-decimal space-y-2 pl-5">
                  <li><strong>Research and comparison:</strong> understanding options, comparing providers and prices.</li>
                  <li><strong>Online clinical assessment:</strong> questionnaire based assessment reviewed by a licensed prescriber.</li>
                  <li><strong>Prescription issued:</strong> if clinically suitable, the prescriber issues a private prescription.</li>
                  <li><strong>Medication dispensed:</strong> GPhC registered pharmacy fulfils and delivers the prescription.</li>
                  <li><strong>Ongoing renewal:</strong> periodic prescription renewal reviews, with frequency varying by provider.</li>
                </ol>
                <p>
                  <strong>Advantages:</strong> no waiting list, accessible without GP involvement, and competitive pricing across multiple providers.
                </p>
                <p>
                  <strong>Disadvantages:</strong> cost, variable quality of clinical assessment process, need for careful pharmacy verification, and less clinical oversight than the NHS specialist route.
                </p>

                <SubHeading darkMode={darkMode}>Route 3: Private Clinic</SubHeading>
                <p>
                  Some patients access GLP 1 treatment through private weight management clinics, either face to face or via telehealth, which typically offer more comprehensive clinical assessment and monitoring than standard online pharmacy pathways.
                </p>
                <p>
                  <strong>Advantages:</strong> higher quality clinical oversight, in person assessment available, and better access to a prescriber if complications arise.
                </p>
                <p>
                  <strong>Disadvantages:</strong> higher cost than the online pharmacy route, and not all clinics cover all treatments.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="costs" heading="Part 5: What Weight Loss Treatment Costs in the UK">
                <SubHeading darkMode={darkMode}>Private Market Pricing Overview (2026)</SubHeading>
                <p>
                  All three treatments follow a titration pricing structure. Costs increase with each dose step.
                </p>
                <GuideTable
                  headers={["Treatment", "Starter Monthly Cost", "Maintenance Monthly Cost", "Annual (Maintenance)"]}
                  rows={[
                    { cells: ["Saxenda", "£79 to £120", "£150 to £290", "£1,800 to £3,480"] },
                    { cells: ["Wegovy", "£128 to £170", "£240 to £295", "£2,880 to £3,540"] },
                    { cells: ["Mounjaro", "£128 to £180", "£249 to £375", "£2,988 to £4,500"], highlight: true },
                  ]}
                />
                <p className="text-sm italic text-slate-500">
                  Prices are approximate, based on independent monitoring of GPhC registered UK pharmacies in 2026.
                </p>

                <SubHeading darkMode={darkMode}>Additional Costs to Factor In</SubHeading>
                <p>
                  Beyond the pen price, the following components commonly affect total monthly spend:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li><strong>Consultation fees:</strong> £0 to £50 per prescription cycle, varying by provider.</li>
                  <li><strong>Delivery:</strong> £0 to £15 per order, because cold chain handling is required.</li>
                  <li><strong>Programme or monitoring fees:</strong> £0 to £40 per month where applicable.</li>
                  <li><strong>Needles and consumables:</strong> variable, depending on provider package.</li>
                </ul>
                <p>
                  For the most complete and current provider by provider price comparison, including Trustpilot ratings and GPhC verification status, see the <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-semibold text-emerald-600 hover:underline">Mounjaro vs Wegovy vs Saxenda price comparison</Link>.
                </p>
                <p>
                  For verified lowest cost options across all three treatments, see the <Link href="/prices/cheapest-options-uk" className="font-semibold text-emerald-600 hover:underline">cheapest weight loss treatment options UK hub</Link>.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="expectations" heading="Part 6: What to Realistically Expect From Treatment">
                <SubHeading darkMode={darkMode}>Timeline: When Does Weight Loss Begin?</SubHeading>
                <p>
                  Most patients on GLP 1 treatment notice appetite changes within the first two to four weeks. The biological mechanisms are active from the first dose. Visible weight loss typically begins during the first month, though the rate of loss varies significantly by individual.
                </p>
                <p>A general timeline:</p>
                <GuideTable
                  headers={["Timeframe", "What Typically Happens"]}
                  rows={[
                    { cells: ["Weeks 1 to 4", "Appetite reduction begins; early weight loss possible; side effects most common at starter dose"] },
                    { cells: ["Months 2 to 3", "Dose increasing; appetite suppression strengthening; consistent weight loss in most patients"] },
                    { cells: ["Months 4 to 6", "Approaching or at maintenance dose; weight loss rate typically peaks"], highlight: true },
                    { cells: ["Months 6 to 12", "Ongoing maintenance dose; weight loss continues but may plateau"] },
                    { cells: ["Year 2 plus", "Weight maintenance phase; ongoing treatment usually required"] },
                  ]}
                />

                <SubHeading darkMode={darkMode}>Side Effects: What Is Normal?</SubHeading>
                <p>
                  The most common side effects of GLP 1 treatment are gastrointestinal and are most pronounced during the first weeks of treatment and at each dose increase:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li><strong>Nausea:</strong> the most commonly reported side effect; typically reduces after the first 2 to 4 weeks at each dose step.</li>
                  <li><strong>Vomiting:</strong> less common than nausea; usually occurs if eating too quickly or in excessive amounts.</li>
                  <li><strong>Diarrhoea or constipation:</strong> one or the other is commonly reported; typically resolves as the body adjusts.</li>
                  <li><strong>Reduced appetite:</strong> technically the intended mechanism, not a side effect, but it can feel dramatic initially.</li>
                  <li><strong>Fatigue:</strong> reported by some patients, particularly in early weeks.</li>
                </ul>
                <p>Less common but more serious side effects that require medical review:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Severe persistent nausea or vomiting.</li>
                  <li>Signs of pancreatitis, including severe abdominal pain.</li>
                  <li>Gallbladder issues.</li>
                  <li>Rapid heart rate.</li>
                  <li>Injection site reactions that do not resolve.</li>
                </ul>
                <p>
                  Always report any concerning symptoms to your prescriber promptly.
                </p>

                <SubHeading darkMode={darkMode}>The Role of Lifestyle: Why Treatment Works Best With It</SubHeading>
                <p>
                  GLP 1 medications are not a standalone solution. Clinical trial data consistently shows better outcomes when treatment is combined with meaningful lifestyle changes, and the biological mechanisms of GLP 1 drugs actually make lifestyle changes more achievable.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li><strong>Diet:</strong> appetite suppression from GLP 1 treatment makes reducing calorie intake significantly easier. Most patients naturally reduce portion sizes and find high calorie foods less appealing. Prioritising protein and vegetables, and reducing ultra processed food intake, supports better outcomes.</li>
                  <li><strong>Exercise:</strong> GLP 1 medications do not selectively preserve muscle mass during weight loss. This requires deliberate effort. Resistance training during treatment helps ensure that weight loss comes from fat tissue rather than muscle, which matters for long term metabolic health.</li>
                  <li><strong>Sleep:</strong> poor sleep quality affects cortisol and ghrelin levels, both of which influence appetite and weight. Addressing sleep quality alongside GLP 1 treatment supports better outcomes.</li>
                  <li><strong>Stress management:</strong> chronic stress elevates cortisol, which promotes fat storage particularly around the abdomen. Managing psychological stress is a relevant component of a holistic weight management approach.</li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="safety" heading="Part 7: Safety, Choosing a Provider Responsibly">
                <SubHeading darkMode={darkMode}>The GPhC Verification Checklist</SubHeading>
                <p>
                  Every GPhC registered pharmacy in the UK has a public registration number verifiable at pharmacyregulation.org. This is the minimum baseline for any online pharmacy dispensing prescription medicines. Before using any provider:
                </p>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>Verify GPhC registration at pharmacyregulation.org.</li>
                  <li>Check the MHRA internet pharmacy logo, making sure it is displayed and linked on the homepage.</li>
                  <li>Confirm that a named GMC registered prescriber is identified.</li>
                  <li>Verify the Trustpilot rating independently at trustpilot.com.</li>
                  <li>Confirm full cost disclosure before checkout, including all visible fees.</li>
                  <li>Check that delivery confirms cold chain handling.</li>
                </ol>

                <SubHeading darkMode={darkMode}>Red Flags to Avoid</SubHeading>
                <ul className="list-disc space-y-2 pl-5">
                  <li>No GPhC registration number visible.</li>
                  <li>No named prescriber on the clinical team.</li>
                  <li>Clinical &quot;assessment&quot; is purely a questionnaire with no human review.</li>
                  <li>Prices significantly below market range with no explanation.</li>
                  <li>No cold chain delivery confirmation.</li>
                  <li>No mechanism for contacting a prescriber after purchase.</li>
                </ul>

                <SubHeading darkMode={darkMode}>Notifying Your GP</SubHeading>
                <p>
                  Whether you access treatment privately or through NHS, it is good practice to inform your GP that you are taking a GLP 1 medication. This ensures your medical records are complete, avoids potential drug interactions with any other medications your GP prescribes, and allows your GP to monitor relevant health markers such as blood glucose, blood pressure, and kidney function as part of routine care.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="FAQ: Weight Loss Treatment UK">
                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>1. What is the most effective weight loss treatment in the UK?</h4>
                    <p className="mt-2 text-sm">
                      Based on clinical trial data, Mounjaro (tirzepatide) currently shows the highest average weight loss of any MHRA approved weight loss medication in the UK, approximately 15 to 20% of body weight in the SURMOUNT trials. However, individual responses vary, and &quot;most effective&quot; for any specific person depends on their biology, health history, and tolerance. Wegovy is the second highest efficacy option, followed by Saxenda.
                    </p>
                  </div>
                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>2. How do I know if I qualify for weight loss treatment in the UK?</h4>
                    <p className="mt-2 text-sm">
                      The general eligibility threshold is BMI 30 or above. Patients with a BMI of 27 to 29.9 may qualify if they have a weight related health condition such as type 2 diabetes, high blood pressure, or sleep apnoea. The <Link href="/tools/bmi-calculator" className="font-semibold text-emerald-600 hover:underline">BMI calculator at Healthwise360</Link> provides an NHS aligned BMI result with eligibility context. Final eligibility is always determined by a licensed prescriber following a clinical assessment.
                    </p>
                  </div>
                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>3. Can I get weight loss injections on the NHS?</h4>
                    <p className="mt-2 text-sm">
                      Yes. Both Wegovy and Mounjaro are NICE approved and have NHS access pathways through specialist weight management services. However, availability is subject to local commissioning and service capacity. In 2026, many eligible patients still access treatment privately due to NHS waiting times and regional availability constraints. Discuss NHS eligibility with your GP.
                    </p>
                  </div>
                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>4. How long do you stay on weight loss treatment?</h4>
                    <p className="mt-2 text-sm">
                      GLP 1 treatments are generally intended as long term interventions. Clinical data shows that weight regain commonly occurs when treatment stops, because the underlying biological factors driving excess weight, including appetite dysregulation, are not permanently resolved by medication. Most clinical guidance treats GLP 1 treatment similarly to blood pressure medication: effective while taken, with return of the underlying condition when stopped. The long term use question is one to discuss with a prescriber.
                    </p>
                  </div>
                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>5. What happens when you stop weight loss treatment?</h4>
                    <p className="mt-2 text-sm">
                      Studies show that weight regain is common after stopping GLP 1 treatment, often recovering a significant proportion of lost weight within twelve months. This is not a failure of willpower; it reflects the ongoing biological mechanisms that GLP 1 treatment was managing. Stopping should be done with prescriber guidance and ideally with a plan for maintaining lifestyle changes that support weight management.
                    </p>
                  </div>
                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>6. How do I compare weight loss treatment prices safely?</h4>
                    <p className="mt-2 text-sm">
                      Use an independent comparison platform that covers all dose steps, not just starter prices, shows GPhC verification and Trustpilot ratings alongside prices, and discloses hidden fees. The <Link href="/blog/weight-loss-treatment-price-comparison-uk" className="font-semibold text-emerald-600 hover:underline">weight loss treatment price comparison guide</Link> covers more than 64 GPhC registered pharmacies across all three treatments and all dose strengths. The <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-semibold text-emerald-600 hover:underline">Mounjaro vs Wegovy vs Saxenda comparison hub</Link> includes Trustpilot filtering and dose specific pricing.
                    </p>
                  </div>
                  <div>
                    <h4 className={`text-base font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>7. Is weight loss treatment safe to buy online in the UK?</h4>
                    <p className="mt-2 text-sm">
                      Yes, when purchased from a GPhC registered pharmacy following a proper clinical assessment from a GMC registered prescriber. The risks arise from unregistered providers or platforms that issue prescriptions without genuine clinical assessment. Always verify GPhC registration independently before purchasing.
                    </p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  Weight loss treatment in the UK in 2026 is more clinically effective, more accessible, and better evidenced than at any previous point. The GLP 1 class of medications, particularly Mounjaro and Wegovy, represents a genuine advance in pharmacological weight management, producing outcomes that were not achievable with older treatment options.
                </p>
                <p>However, accessing treatment well requires understanding:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li><strong>What these medications are and how they work:</strong> not just what they cost.</li>
                  <li><strong>Whether you are clinically eligible:</strong> BMI, comorbidities, and contraindications.</li>
                  <li><strong>Which route is appropriate:</strong> NHS, private online pharmacy, or private clinic.</li>
                  <li><strong>What the realistic total cost is:</strong> across the full titration schedule, not just the starter price.</li>
                  <li><strong>How to choose a safe, legitimate provider:</strong> GPhC verification, Trustpilot, and prescriber credentials.</li>
                  <li><strong>What to expect from treatment:</strong> timeline, side effects, lifestyle integration, and long term maintenance.</li>
                </ul>
                <p>
                  This guide has covered all of those dimensions. For the next steps in your research, compare current prices across all three treatments through the <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-semibold text-emerald-600 hover:underline">Healthwise360 comparison hub</Link>, calculate your BMI with the <Link href="/tools/bmi-calculator" className="font-semibold text-emerald-600 hover:underline">BMI calculator with eligibility context</Link>, or read the full treatment guide most relevant to you: <Link href="/what-is-mounjaro" className="font-semibold text-emerald-600 hover:underline">Mounjaro</Link>, <Link href="/what-is-wegovy" className="font-semibold text-emerald-600 hover:underline">Wegovy</Link>, or <Link href="/what-is-saxenda" className="font-semibold text-emerald-600 hover:underline">Saxenda</Link>.
                </p>
              </GuideSection>

              <hr className={`my-8 ${darkMode ? "border-slate-800" : "border-slate-200"}`} />

              <p className="text-xs italic text-slate-500">
                This article is for informational purposes only and does not constitute medical advice. All treatments discussed are prescription only medicines in the UK that require a clinical assessment before they can be dispensed. All prices are approximate and subject to change.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
