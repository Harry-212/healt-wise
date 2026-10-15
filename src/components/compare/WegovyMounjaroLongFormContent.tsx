import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  HelpCircle,
  Pill,
  Scale,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

/**
 * Editorial long-form content for `/compare/wegovy-vs-mounjaro`.
 * Fully structured to match the 2026 Mounjaro vs Wegovy Keyword Plan & Blueprint.
 * Server-rendered for 100% search crawler indexability.
 */

type Props = {
  /** Human label for “Prices last checked”. */
  lastCheckedLabel: string;
  priceGlanceSlot?: React.ReactNode;
  priceTabsSlot?: React.ReactNode;
};

const KEY_FACTS = [
  {
    title: "Different Active Ingredients",
    body: "Wegovy contains semaglutide, a single GLP-1 receptor agonist. Mounjaro contains tirzepatide, a dual receptor agonist targeting both GIP and GLP-1 receptors.",
    tint: "text-violet-600",
    bg: "bg-violet-50/50",
  },
  {
    title: "Same Weekly Injection Rhythm",
    body: "Both medicines are self-injected once weekly using pre-filled pen devices. Each pen contains four weekly doses, covering approximately four weeks of treatment.",
    tint: "text-brand-primary",
    bg: "bg-emerald-50/50",
  },
  {
    title: "Different Dose Ladders",
    body: "Wegovy titrates from 0.25 mg up to 2.4 mg (some UK pharmacies also stock 7.2 mg). Mounjaro steps up from 2.5 mg in 2.5 mg increments up to a top dose of 15 mg.",
    tint: "text-sky-600",
    bg: "bg-sky-50/50",
  },
];

const DOSE_LADDER_ROWS = [
  {
    month: "Month 1 (Starter)",
    wegovy: "0.25 mg once weekly",
    mounjaro: "2.5 mg once weekly",
    purpose: "Introduces medicine, primes receptor sensitivity",
  },
  {
    month: "Month 2",
    wegovy: "0.5 mg once weekly",
    mounjaro: "5 mg once weekly",
    purpose: "First dose escalation step; appetite suppression deepens",
  },
  {
    month: "Month 3",
    wegovy: "1 mg once weekly",
    mounjaro: "7.5 mg once weekly",
    purpose: "Intermediate strength for sustained fullness",
  },
  {
    month: "Month 4",
    wegovy: "1.7 mg once weekly",
    mounjaro: "10 mg once weekly",
    purpose: "Higher therapeutic dose; common long-term plateau breaker",
  },
  {
    month: "Month 5+",
    wegovy: "2.4 mg once weekly (usual maintenance)",
    mounjaro: "12.5 mg once weekly",
    purpose: "Near-maximum or full maintenance strength",
  },
  {
    month: "Month 6+",
    wegovy: "7.2 mg weekly (where prescribed/stocked)",
    mounjaro: "15 mg once weekly (highest maintenance)",
    purpose: "Top licensed strength for maximal trial-matched outcomes",
  },
];

const PRESCRIBER_FACTORS = [
  {
    title: "Clinical eligibility & BMI",
    body: "Whether your BMI and any weight-related conditions (such as hypertension or pre-diabetes) meet licensed UK prescribing criteria.",
  },
  {
    title: "Medical history & contraindications",
    body: "Past medical conditions, thyroid history, pancreatitis risk, pregnancy planning, and current medications reviewed by a prescriber.",
  },
  {
    title: "Treatment routine & confidence",
    body: "Whether a weekly self-injection routine suits your lifestyle and how confident you feel using the pen device correctly.",
  },
  {
    title: "Potential side effect profile",
    body: "How known gastrointestinal symptoms and rarer risks in each patient information leaflet (PIL) align with your digestive health.",
  },
  {
    title: "Previous weight-loss treatments",
    body: "Any earlier GLP-1 medicines or weight management programmes you have tried, including tolerability and weight loss achieved.",
  },
  {
    title: "Total ongoing treatment cost",
    body: "Projected monthly expenses across 6 to 12 months at maintenance doses, factoring in consultation fees and temperature-controlled postage.",
  },
  {
    title: "Follow-up & repeat prescribing",
    body: "How clinical reviews, dose adjustments, and repeat orders are managed by the specific GPhC pharmacy you choose.",
  },
  {
    title: "Storage & travel requirements",
    body: "Cold-chain fridge storage requirements before first use (2°C–8°C) and room temperature stability limits when traveling.",
  },
  {
    title: "Final prescriber assessment",
    body: "The final prescribing decision rests with a registered UK clinician after a thorough health check — this comparison is not medical advice.",
  },
];

const METHODOLOGY_POINTS = [
  {
    label: "Price check frequency",
    body: "Every pharmacy price in our comparison is independently reviewed and recorded against public website listings at regular intervals.",
  },
  {
    label: "GPhC pharmacy registration",
    body: "We verify each provider against the General Pharmaceutical Council (GPhC) register to confirm they are authorized to dispense in Great Britain.",
  },
  {
    label: "Cold-chain delivery fees included",
    body: "We explicitly flag whether tracked temperature-controlled cold-chain delivery is included in the listed price or added at checkout.",
  },
  {
    label: "Consultation & prescriber fees",
    body: "Where clinics charge separate consultation or clinical assessment fees, we highlight them clearly so you see true total costs.",
  },
  {
    label: "No paid ranking bias",
    body: "Providers cannot pay to appear higher in our tables. Default sorting is strictly by lowest verified price for your chosen dose.",
  },
  {
    label: "Independent comparisons",
    body: "Healthwise360 does not dispense medicines or provide clinical consultations. We publish objective price and safety information.",
  },
];

export default function WegovyMounjaroLongFormContent({
  lastCheckedLabel,
  priceGlanceSlot,
  priceTabsSlot,
}: Props) {
  return (
    <>
      {/* ============================================================== */}
      {/* SECTION 3: DIFFERENCE */}
      {/* ============================================================== */}
      <section
        id="difference"
        className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
        aria-labelledby="difference-heading"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-800">
              <Scale className="h-3.5 w-3.5" aria-hidden />
              Mechanism & Evidence
            </span>
            <h2
              id="difference-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
            >
              What is the difference between Mounjaro and Wegovy?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              The fundamental difference between Mounjaro and Wegovy lies in their active ingredients and the biological hormone receptors they target. Wegovy contains semaglutide, which acts solely as a GLP-1 receptor agonist. Mounjaro contains tirzepatide, a dual-action molecule that stimulates both GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 receptors.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-violet-200/90 bg-violet-50/30 p-6 md:p-8">
              <div className="flex items-center gap-2">
                <span className="rounded-lg bg-violet-600 p-1.5 text-white">
                  <Pill className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Wegovy (Semaglutide)
                </h3>
              </div>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-violet-700">
                Single GLP-1 Receptor Agonist
              </p>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
                <p>
                  Semaglutide mimics natural glucagon-like peptide-1 produced in the gut. By binding to GLP-1 receptors in the brain's appetite control centres (the hypothalamus), it sends signals of fullness, reduces cravings, and slows gastric emptying so you remain satisfied on smaller portions.
                </p>
                <p>
                  In the landmark STEP-1 clinical trial (published in the <em>New England Journal of Medicine</em>), adults taking Wegovy 2.4 mg alongside lifestyle intervention achieved an average weight loss of approximately <strong>14.9% to 15.8%</strong> of their starting body weight over 68 weeks.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-200/90 bg-emerald-50/30 p-6 md:p-8">
              <div className="flex items-center gap-2">
                <span className="rounded-lg bg-emerald-600 p-1.5 text-white">
                  <Zap className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Mounjaro (Tirzepatide)
                </h3>
              </div>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-primary">
                Dual GIP & GLP-1 Receptor Agonist
              </p>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
                <p>
                  Tirzepatide engages both GIP and GLP-1 receptors simultaneously. GIP enhances metabolic regulation, fat storage utilisation, and works synergistically with GLP-1 to suppress appetite and prevent nausea while improving insulin secretion.
                </p>
                <p>
                  In the SURMOUNT-1 clinical trial, adults taking the highest 15 mg dose of Mounjaro achieved an average weight loss of <strong>20.9% to 22.5%</strong> over 72 weeks. In the SURMOUNT-5 head-to-head trial, tirzepatide demonstrated superior percentage weight reduction compared directly with semaglutide.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Key Fact Cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {KEY_FACTS.map((fact) => (
              <div
                key={fact.title}
                className={`rounded-2xl border border-slate-200/90 ${fact.bg} p-5 shadow-sm transition`}
              >
                <BadgeCheck className={`h-6 w-6 ${fact.tint}`} aria-hidden />
                <h4 className="mt-3 font-semibold text-slate-900">{fact.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 md:text-sm">
                  {fact.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200/80 bg-amber-50/50 p-5 text-sm leading-relaxed text-amber-900">
            <p className="font-semibold">Important Clinical Context:</p>
            <p className="mt-1">
              While clinical trials report average percentage weight reduction across large cohorts, your personal response depends on individual biological factors, tolerability, lifestyle support, and adherence. A registered UK prescriber must evaluate your medical history before recommending either medicine.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 4: COST */}
      {/* ============================================================== */}
      <section
        id="cost"
        className="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/60 py-12 md:py-16"
        aria-labelledby="cost-heading"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-primary">
              <Zap className="h-3.5 w-3.5" aria-hidden />
              Pricing & Value
            </span>
            <h2
              id="cost-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
            >
              Wegovy vs Mounjaro cost UK
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Comparing Wegovy vs Mounjaro cost in the UK requires looking beyond the introductory starter pen. While Wegovy currently has the cheapest starter pen (£83 at Slinic for 0.25 mg), monthly costs escalate significantly as you progress through titration to your long-term maintenance dose.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">
                Wegovy Pricing Profile (UK)
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                  <span><strong>Starter pen (0.25 mg):</strong> Starts from £83/month; median ~£100 across 62 pharmacies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                  <span><strong>Maintenance pen (2.4 mg):</strong> Starts from £135/month; median ~£200; can reach £290.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                  <span><strong>First 6 months titration:</strong> Approximately £639.96 (lowest) to £914 (typical).</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/wegovy-price-comparison"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:underline underline-offset-2"
                >
                  View all 62 Wegovy pharmacy prices
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">
                Mounjaro Pricing Profile (UK)
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                  <span><strong>Starter pen (2.5 mg):</strong> Starts from ~£119–£129/month; median ~£145 across 60+ pharmacies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                  <span><strong>Maintenance pen (10–15 mg):</strong> Starts from ~£150–£180/month; median ~£200–£230.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                  <span><strong>First 6 months titration:</strong> Approximately £850 to £1,150 across typical titration schedules.</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/mounjaro-price-comparison"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:underline underline-offset-2"
                >
                  View all 60+ Mounjaro pharmacy prices
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>

          {priceGlanceSlot ? (
            <div className="mt-10">{priceGlanceSlot}</div>
          ) : null}

          {priceTabsSlot ? (
            <div id="compare-med-tabs" className="mt-10 scroll-mt-28">
              {priceTabsSlot}
            </div>
          ) : null}

          {/* Practical comparison guide */}
          <div className="mt-10 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">
              How to Avoid Overpaying on Ongoing Treatment
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3 text-sm text-slate-600">
              <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
                <p className="font-semibold text-slate-900">1. Compare Maintenance Cost</p>
                <p className="mt-1">
                  You spend most of your treatment on maintenance doses (2.4 mg for Wegovy or 10–15 mg for Mounjaro). A cheap month 1 pen is no saving if month 5 jumps by £100.
                </p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
                <p className="font-semibold text-slate-900">2. Include Delivery & Cold Chain</p>
                <p className="mt-1">
                  Both pens require insulated cold-chain transport (2°C–8°C). Some pharmacies charge £4.95 to £9.95 for shipping, while others include tracked courier delivery free.
                </p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
                <p className="font-semibold text-slate-900">3. Switch Between GPhC Pharmacies</p>
                <p className="mt-1">
                  You are not locked into one pharmacy. If another GPhC-registered provider offers your maintenance strength for less, you can transfer after completing their clinical check.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 5: DOSE */}
      {/* ============================================================== */}
      <section
        id="dose"
        className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
        aria-labelledby="dose-heading"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-800">
              <Pill className="h-3.5 w-3.5" aria-hidden />
              Dosing & Titration
            </span>
            <h2
              id="dose-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
            >
              Wegovy and Mounjaro dose comparison
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Both Wegovy and Mounjaro follow a mandatory dose escalation schedule (titration) where you begin at a low introductory dose and step up every 4 weeks. This gradual transition gives your gastrointestinal system time to adapt to gut hormone receptor stimulation, substantially lowering the incidence and severity of nausea, reflux, and digestive upset. You should only advance to a higher strength if your current dose is well tolerated and approved by your prescriber.
            </p>
          </div>

          {/* Dose Ladder Table */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-140 border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-900">
                    <th scope="col" className="px-5 py-3.5 font-bold">Titration Stage</th>
                    <th scope="col" className="px-5 py-3.5 font-bold text-violet-900 bg-violet-50/50">Wegovy Dose Ladder</th>
                    <th scope="col" className="px-5 py-3.5 font-bold text-brand-primary bg-emerald-50/50">Mounjaro Dose Ladder</th>
                    <th scope="col" className="px-5 py-3.5 font-bold text-slate-700">Clinical Objective</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {DOSE_LADDER_ROWS.map((row) => (
                    <tr key={row.month} className="hover:bg-slate-50/80 transition-colors">
                      <th scope="row" className="px-5 py-3.5 font-semibold text-slate-900">
                        {row.month}
                      </th>
                      <td className="px-5 py-3.5 bg-violet-50/20 font-medium text-slate-800">
                        {row.wegovy}
                      </td>
                      <td className="px-5 py-3.5 bg-emerald-50/20 font-medium text-slate-800">
                        {row.mounjaro}
                      </td>
                      <td className="px-5 py-3.5 text-xs text-slate-600">
                        {row.purpose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dose calculation tools links */}
          <div className="mt-6 flex flex-wrap gap-4 items-center">
            <span className="text-sm font-semibold text-slate-700">Need dose or click calculation help?</span>
            <Link
              href="/tools/wegovy-click-calculator"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-xs hover:bg-slate-50"
            >
              Wegovy click calculator
              <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
            </Link>
            <Link
              href="/tools/mounjaro-click-calculator"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-xs hover:bg-slate-50"
            >
              Mounjaro click calculator
              <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 6: SIDE EFFECTS */}
      {/* ============================================================== */}
      <section
        id="side-effects"
        className="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/60 py-12 md:py-16"
        aria-labelledby="side-effects-heading"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-800">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
              Safety & Tolerance
            </span>
            <h2
              id="side-effects-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
            >
              Wegovy vs Mounjaro side effects
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Because both Wegovy and Mounjaro act on gut hormone pathways that regulate gastric motility, they share a very similar gastrointestinal side effect profile. Most side effects are mild to moderate and peak during the first 1 to 2 weeks of starting a new dose step before settling.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">
                Most Common Side Effects (Both Medicines)
              </h3>
              <p className="mt-2 text-xs text-slate-500">
                Reported by more than 1 in 10 patients in clinical trials:
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                  <span><strong>Nausea:</strong> Especially when eating too quickly or having fatty meals.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                  <span><strong>Diarrhoea or Constipation:</strong> Caused by altered intestinal transit times.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                  <span><strong>Vomiting:</strong> Usually linked to overeating beyond fullness cues.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                  <span><strong>Indigestion & Acid Reflux:</strong> From delayed stomach emptying.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                  <span><strong>Fatigue & Headache:</strong> Common early in titration as calorie intake drops.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">
                Tolerability Comparison & Rare Risks
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600">
                <p>
                  <strong>Dual vs Single Agonist:</strong> In clinical head-to-head comparisons, overall rates of gastrointestinal events were broadly comparable, though some patients find tirzepatide's dual mechanism produces slightly less intense nausea, while others tolerate semaglutide better.
                </p>
                <p>
                  <strong>Rare Serious Risks:</strong> Pancreatitis (severe persistent stomach pain radiating to the back), gallbladder disease (gallstones), and acute kidney injury from severe dehydration.
                </p>
                <p>
                  Always review the official Patient Information Leaflet (PIL) inside your medicine box and report adverse reactions to the MHRA Yellow Card scheme.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 items-center">
            <Link
              href="/helpful-guides"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:underline underline-offset-2"
            >
              Read our side-effect management guides
              <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              href="/pharmacy-safety-gphc-verification"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:underline underline-offset-2"
            >
              How we verify GPhC pharmacy safety
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 7: NHS ACCESS */}
      {/* ============================================================== */}
      <section
        id="nhs"
        className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
        aria-labelledby="nhs-heading"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
              <HelpCircle className="h-3.5 w-3.5" aria-hidden />
              NHS Pathways
            </span>
            <h2
              id="nhs-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
            >
              Mounjaro or Wegovy on the NHS
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Both Wegovy and Mounjaro have received approval from the National Institute for Health and Care Excellence (NICE) for NHS prescribing, but strict clinical criteria and severe specialist capacity constraints mean most patients face substantial waiting times or turn to private GPhC pharmacies.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6">
              <h3 className="text-lg font-bold text-slate-900">
                Wegovy on the NHS (NICE TA875)
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                  <span><strong>Eligibility:</strong> BMI of at least 35 kg/m² (or 30 kg/m² for people from South Asian, Chinese, Black African or African-Caribbean backgrounds) plus at least one weight-related condition.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                  <span><strong>Service Tier:</strong> Prescribed only within specialist Tier 3 / Tier 4 multidisciplinary weight management clinics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                  <span><strong>2-Year Maximum:</strong> NHS treatment is capped at a maximum of 2 years under current NICE guidance.</span>
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/what-is-wegovy"
                  className="text-xs font-semibold text-brand-primary hover:underline"
                >
                  Learn more in What is Wegovy guide →
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6">
              <h3 className="text-lg font-bold text-slate-900">
                Mounjaro on the NHS (NICE TA1005)
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                  <span><strong>Eligibility:</strong> Recommended for adults with a BMI of 35 kg/m² and at least one weight-related comorbidity (with ethnic minority threshold reductions).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                  <span><strong>Phased Rollout:</strong> NHS England is implementing a structured multi-year rollout, prioritising patients with highest clinical urgency.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                  <span><strong>Capacity Reality:</strong> Tier 3 waiting lists across most NHS integrated care boards often exceed 12 to 24 months.</span>
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/what-is-mounjaro"
                  className="text-xs font-semibold text-brand-primary hover:underline"
                >
                  Learn more in What is Mounjaro guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 8: METHODOLOGY & PRESCRIBER FACTORS */}
      {/* ============================================================== */}
      <section
        id="methodology"
        className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
        aria-labelledby="methodology-heading"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="flex items-start gap-3">
            <span className="mt-1 rounded-xl bg-emerald-50 p-2 text-brand-primary ring-1 ring-emerald-200/80">
              <ClipboardList className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h2
                id="methodology-heading"
                className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
              >
                How Healthwise360 Checks Provider Information
              </h2>
              <p className="mt-2 text-slate-600 leading-relaxed max-w-3xl">
                Healthwise360 is an independent UK comparison publisher. Current data reflects a {lastCheckedLabel} audit across 60+ regulated pharmacies. Here is how our verification safeguards accuracy:
              </p>
            </div>
          </div>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {METHODOLOGY_POINTS.map((point) => (
              <div
                key={point.label}
                className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs"
              >
                <dt className="flex items-center gap-2 font-semibold text-slate-900">
                  <BadgeCheck
                    className="h-4 w-4 text-brand-primary"
                    aria-hidden
                  />
                  {point.label}
                </dt>
                <dd className="mt-2 text-xs leading-relaxed text-slate-600 md:text-sm">
                  {point.body}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/methodology"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Read our full methodology
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/prices/cheapest-options-uk"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
            >
              Cheapest options hub
            </Link>
          </div>
        </div>
      </section>

      {/* Factors to discuss with prescriber */}
      <section
        id="prescriber-factors"
        className="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/60 py-12 md:py-16"
        aria-labelledby="prescriber-heading"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="flex items-start gap-3">
            <span className="mt-1 rounded-xl bg-violet-50 p-2 text-violet-700 ring-1 ring-violet-200/80">
              <CalendarCheck className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h2
                id="prescriber-heading"
                className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
              >
                Factors to Discuss With a Prescriber
              </h2>
              <p className="mt-2 text-slate-600 leading-relaxed max-w-3xl">
                This comparison provides pricing and trial context, not medical recommendations. Use the checklist below to prepare for your online or in-person consultation:
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRESCRIBER_FACTORS.map((factor) => (
              <div
                key={factor.title}
                className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs"
              >
                <p className="font-semibold text-slate-900">{factor.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 md:text-sm">
                  {factor.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
