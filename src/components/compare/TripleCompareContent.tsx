import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";

/**
 * Long-form editorial content for the `/compare/mounjaro-vs-wegovy-vs-saxenda`
 * hub. Server-rendered so every paragraph, list, table and FAQ-adjacent block
 * is present in the initial HTML (crawlable — no client-gated copy).
 *
 * Informational only; not medical advice. Semantic coverage is woven into
 * headings/prose (active ingredients, receptor mechanism, dosing, eligibility,
 * cost structure) rather than a keyword list.
 */

type Props = {
  /** Human label for “Prices last checked” — today’s UK date. */
  lastCheckedLabel: string;
};

const GLANCE_ROWS = [
  {
    brand: "Mounjaro",
    ingredient: "Tirzepatide",
    target: "Dual GIP and GLP-1 receptor agonist",
    schedule: "Once weekly",
    format: "Multi-dose or single-dose pen",
  },
  {
    brand: "Wegovy",
    ingredient: "Semaglutide",
    target: "GLP-1 receptor agonist",
    schedule: "Once weekly",
    format: "Pre-filled single-dose pen",
  },
  {
    brand: "Saxenda",
    ingredient: "Liraglutide",
    target: "GLP-1 receptor agonist",
    schedule: "Once daily",
    format: "Multi-dose adjustable pen",
  },
];

const PRESCRIBER_FACTORS = [
  {
    title: "Clinical eligibility",
    body: "Whether your BMI and any weight-related conditions meet the licensed criteria for the medicine being discussed.",
  },
  {
    title: "Medical history",
    body: "Past and present conditions, pregnancy plans, and family history that a prescriber reviews before treatment.",
  },
  {
    title: "Treatment frequency",
    body: "Whether a weekly or daily schedule fits your routine and how confident you feel self-administering a pen.",
  },
  {
    title: "Potential side effects",
    body: "How the common gastrointestinal effects and rarer risks in each patient information leaflet apply to you.",
  },
  {
    title: "Previous treatment",
    body: "Any earlier weight-management medicines you have tried, including how you tolerated and responded to them.",
  },
  {
    title: "Total ongoing cost",
    body: "The maintenance price plus consultation and delivery, projected across the months you expect to stay on treatment.",
  },
  {
    title: "Follow-up requirements",
    body: "How reviews, dose changes and repeat prescriptions are handled by the provider you are considering.",
  },
  {
    title: "Personal preferences",
    body: "Practical factors such as storage, travel, injection routine and the level of coaching or app support you want.",
  },
  {
    title: "Prescriber assessment",
    body: "The final judgement belongs to a registered UK clinician after a full consultation — this page cannot make it for you.",
  },
];

const METHODOLOGY_POINTS = [
  {
    label: "Date checked",
    body: "Each dataset shows when provider information was last reviewed.",
  },
  {
    label: "Source used",
    body: "Prices are read from public provider and pharmacy pages, then recorded against a structured dataset rather than typed from memory.",
  },
  {
    label: "Delivery included?",
    body: "We note separately whether a listed price already includes standard delivery or whether postage is added at checkout.",
  },
  {
    label: "Consultation fees",
    body: "Where a provider charges an assessment or consultation fee, we flag it so a low medicine price is not mistaken for a low total.",
  },
  {
    label: "Discount codes",
    body: "Headline figures exclude time-limited voucher codes; promotions expire and eligibility rules apply, so we treat them as previews only.",
  },
  {
    label: "Unavailable doses",
    body: "When a strength is out of stock or not listed, that row is marked rather than filled with an estimated price.",
  },
  {
    label: "Provider vs dispensing pharmacy",
    body: "The brand you order from is not always the registered pharmacy that dispenses. We distinguish the two so you can verify who supplies the medicine.",
  },
  {
    label: "Trustpilot ratings",
    body: "Where shown, review scores are captured from public listings at the time of checking and can move independently of price.",
  },
  {
    label: "Update frequency",
    body: "Datasets are refreshed periodically. Private pharmacies can change prices faster than our labels, so numbers are a planning guide, not a quote.",
  },
  {
    label: "Affiliate disclosure",
    body: "Some outbound links may earn a commission. This never changes rankings, prices you pay, or which providers are included.",
  },
];

export default function TripleCompareContent({ lastCheckedLabel }: Props) {
  const methodology = METHODOLOGY_POINTS.map((point) =>
    point.label === "Date checked"
      ? {
          ...point,
          body: `Each dataset shows when provider information was last reviewed. Current figures reflect a ${lastCheckedLabel} snapshot.`,
        }
      : point,
  );

  return (
    <>
      {/* At a glance */}
      <section
        id="at-a-glance"
        className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Mounjaro vs Wegovy vs Saxenda at a Glance
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              Mounjaro, Wegovy and Saxenda are three prescription-only weight
              management treatments licensed for use in the UK. They belong to
              the same broad family of injectable medicines that act on gut
              hormone pathways, but they use different active ingredients, follow
              different dosing schedules and are priced differently by each
              provider. This hub is built to compare those practical differences
              side by side so you can prepare for a consultation, not to decide
              which medicine is right for you.
            </p>
            <p>
              The table below summarises the core distinctions. Everything after
              it explains the mechanism, dosing, evidence, safety, eligibility
              and cost structure in more depth, followed by how we check provider
              information and the factors worth discussing with a prescriber.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200/90 shadow-sm">
            <table className="w-full min-w-160 border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="px-4 py-3 font-semibold">Treatment</th>
                  <th className="px-4 py-3 font-semibold">Active ingredient</th>
                  <th className="px-4 py-3 font-semibold">Receptor target</th>
                  <th className="px-4 py-3 font-semibold">Typical schedule</th>
                  <th className="px-4 py-3 font-semibold">Pen format</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {GLANCE_ROWS.map((row) => (
                  <tr key={row.brand} className="align-top">
                    <th
                      scope="row"
                      className="px-4 py-3 font-semibold text-slate-900"
                    >
                      {row.brand}
                    </th>
                    <td className="px-4 py-3">{row.ingredient}</td>
                    <td className="px-4 py-3">{row.target}</td>
                    <td className="px-4 py-3">{row.schedule}</td>
                    <td className="px-4 py-3">{row.format}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Schedules and formats reflect typical UK licensing after titration.
            Your prescriber confirms the exact dose and product for your
            situation.
          </p>
        </div>
      </section>

      {/* Active ingredients */}
      <section
        id="active-ingredients"
        className="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/60 py-12 md:py-16"
      >
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Active Ingredients and How They Work
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              The clearest way to understand these treatments is by their active
              ingredient. Mounjaro contains tirzepatide, Wegovy contains
              semaglutide, and Saxenda contains liraglutide. Each ingredient
              works on receptors that the body normally uses to regulate hunger
              and blood sugar after eating.
            </p>
            <p>
              Semaglutide and liraglutide are GLP-1 receptor agonists. They mimic
              glucagon-like peptide-1, a hormone released from the gut, to support
              appetite regulation, increase the feeling of fullness known as
              satiety, and slow gastric emptying so that meals feel satisfying for
              longer. Tirzepatide adds a second action: it engages the GIP
              receptor as well as the GLP-1 receptor. This dual mechanism is the
              main pharmacological difference between Mounjaro and the two GLP-1
              only medicines.
            </p>
            <p>
              In everyday terms, all three reduce appetite and help people feel
              full on smaller portions, but the receptor profile, the pace of
              dose escalation and individual tolerability differ. None of these
              medicines works in isolation — they are intended to support diet,
              activity and behavioural change under clinical supervision, not to
              replace them.
            </p>
          </div>
        </div>
      </section>

      {/* Dosing schedules */}
      <section
        id="dosing"
        className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
      >
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Dosing Schedules and Treatment Formats
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              Dosing is where the practical routine of each treatment diverges.
              Mounjaro and Wegovy are weekly treatments: after an introductory
              period you inject once a week. Saxenda is a daily treatment,
              injected once every day at a similar time. Whether a weekly or
              daily schedule suits you is a genuine lifestyle question worth
              raising in a consultation.
            </p>
            <p>
              All three follow a titration plan. You begin at a low starting dose
              to help the body adjust and reduce early side effects, then move
              through a structured dose escalation over several weeks until you
              reach a maintenance dose. The starting dose is not the dose most
              people stay on, which matters when you compare cost: early months
              on a low dose can be cheaper than later maintenance months.
            </p>
            <p>
              The pen format also varies. Wegovy is commonly supplied as
              pre-filled single-dose pens tied to a specific strength, Saxenda as
              a multi-dose adjustable pen, and Mounjaro in pen formats that depend
              on strength and supplier. Because of this, some pharmacies quote a
              price per pen and others per pack, so it helps to translate any
              quote into a monthly treatment cost for the dose you expect to use.
            </p>
          </div>
        </div>
      </section>

      {/* Clinical evidence */}
      <section
        id="clinical-evidence"
        className="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/60 py-12 md:py-16"
      >
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Clinical Evidence and Expected Results
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              Each medicine has been studied in its own clinical trial programme,
              and published results describe average weight change across large
              groups of participants over many months alongside diet and activity
              support. Those averages are useful context, but they are not
              promises, and individual results vary widely.
            </p>
            <p>
              It is also important to be cautious about direct comparisons.
              Separate trials enrol different populations, run for different
              durations and use different dosing, so lining up a headline figure
              from one study against another rarely produces a fair like-for-like
              conclusion. Clinical evidence describes what happened on average in
              a study — it is not a ranking of which treatment will work best for
              a particular person.
            </p>
            <p>
              A prescriber weighs the evidence together with your history,
              tolerability and goals. Read published outcomes as background for a
              conversation rather than as a scoreboard.
            </p>
          </div>
        </div>
      </section>

      {/* Side effects */}
      <section
        id="side-effects"
        className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
      >
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Common Side Effects and Safety Considerations
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              Across all three medicines, the most commonly reported side effects
              are gastrointestinal: nausea, diarrhoea, constipation, indigestion
              and reduced appetite, especially in the early weeks and when the
              dose increases. For many people these ease over time, which is part
              of why treatment starts low and builds gradually.
            </p>
            <p>
              Each product also carries less common but more serious risks — such
              as pancreatitis and gallbladder problems — which are listed in the
              summary of product characteristics and patient information leaflet
              for that specific medicine. There are contraindications and
              cautions, including certain personal or family medical histories,
              that make a treatment unsuitable for some people.
            </p>
            <p>
              Because these are prescription-only medicines, safety monitoring is
              part of proper care. Always read the leaflet for the product you are
              actually prescribed, report side effects to your clinician, and seek
              urgent advice for severe or persistent symptoms. Our{" "}
              <Link
                href="/helpful-guides"
                className="font-semibold text-brand-primary underline-offset-2 hover:underline"
              >
                helpful guides
              </Link>{" "}
              add general context, but they do not replace medical advice.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section
        id="eligibility"
        className="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/60 py-12 md:py-16"
      >
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            UK Eligibility and Clinical Assessment
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              Eligibility for these treatments in the UK generally rests on BMI
              thresholds together with clinical judgement. They are typically
              considered for adults living with obesity, or for those who are
              overweight with a weight-related condition such as high blood
              pressure, raised blood sugar or sleep apnoea. Exact BMI eligibility
              can differ by medicine and by provider.
            </p>
            <p>
              Before any prescription, a registered clinician carries out a
              clinical assessment. This reviews your medical history, current
              medicines, and any contraindications, and confirms that a weight
              management medicine is appropriate for you. Because these are
              prescription-only medicines, they cannot be bought without this
              step, and a legitimate UK provider will always assess you first.
            </p>
            <p>
              Meeting a BMI cut-off does not guarantee suitability, and being
              close to one does not automatically exclude you. The assessment
              exists to weigh benefits against risks for your individual
              circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* NHS and private access */}
      <section
        id="nhs-private"
        className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
      >
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            NHS and Private Treatment Access
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              There are two broad routes to these medicines in the UK. NHS access,
              where it is available, follows national and local pathway rules,
              specific eligibility criteria and service capacity, and can involve
              waiting lists or specialist clinic referral. Availability differs by
              region and by medicine.
            </p>
            <p>
              Private access is usually faster and is self-funded through a
              registered online pharmacy or clinic after a consultation. This hub
              focuses on private provider pricing because that is where costs vary
              most and where a clear comparison helps. If you want to explore NHS
              options, speak to your GP or an NHS weight-management service about
              whether you qualify.
            </p>
          </div>
        </div>
      </section>

      {/* Compare current UK provider prices */}
      <section
        id="provider-prices"
        className="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/60 py-12 md:py-16"
      >
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Compare Current UK Provider Prices
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              The price matrix higher up this page lets you switch between
              Mounjaro, Wegovy and Saxenda and sort UK weight-management providers
              by dose and price. Provider pricing is not uniform: the same medicine
              and strength can carry very different figures depending on how a
              pharmacy packages consultations, follow-up and delivery.
            </p>
            <p>
              When you read the tables, separate the starting price from the
              maintenance price. The introductory dose is often cheaper, so a low
              first-month figure can look more attractive than the repeat price you
              will actually pay once you reach your maintenance dose. Comparing the
              maintenance price gives a more realistic view of ongoing cost.
            </p>
            <p>
              Use the matrix to shortlist providers for the dose band you expect to
              discuss, then confirm the live total on the provider&rsquo;s own
              checkout before paying — listed figures are an illustrative snapshot,
              not a quote.
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="#compare-med-tabs"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
            >
              Open the price matrix
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation, delivery and total cost */}
      <section
        id="total-cost"
        className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
      >
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Consultation, Delivery and Total Treatment Costs
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              The headline pen or pack price is only part of what you pay. A
              realistic monthly treatment cost usually combines the medicine
              itself with any consultation fee, a delivery charge for tracked or
              temperature-controlled shipping, and the repeat price on future
              orders. Some providers bundle these into one figure; others list
              them separately.
            </p>
            <p>
              This is why the cheapest headline medicine is not always the lowest
              total cost. A provider with a slightly higher pen price but no
              consultation fee and free delivery can work out cheaper over several
              months than one with a low medicine price and added charges at
              checkout. Projecting the total cost across the months you expect to
              be on your maintenance dose is the fairest way to compare.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section
        id="methodology"
        className="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/60 py-12 md:py-16"
      >
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="flex items-start gap-3">
            <span className="mt-1 rounded-xl bg-emerald-50 p-2 text-emerald-700 ring-1 ring-emerald-200/80">
              <ClipboardList className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                How Healthwise360 Checks Provider Information
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Healthwise360 is an independent comparison publisher. We do not
                sell medicines and we do not provide medical advice. Here is how
                the pricing and provider details on this page are recorded.
              </p>
            </div>
          </div>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {methodology.map((point) => (
              <div
                key={point.label}
                className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm"
              >
                <dt className="flex items-center gap-2 font-semibold text-slate-900">
                  <BadgeCheck
                    className="h-4 w-4 text-brand-primary"
                    aria-hidden
                  />
                  {point.label}
                </dt>
                <dd className="mt-1 text-sm text-slate-600 leading-relaxed">
                  {point.body}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/methodology"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
            >
              Read our full methodology
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/pharmacy-safety-gphc-verification"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
            >
              <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden />
              How we verify pharmacies
            </Link>
          </div>
        </div>
      </section>

      {/* Factors to discuss with a prescriber */}
      <section
        id="prescriber-factors"
        className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
      >
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="flex items-start gap-3">
            <span className="mt-1 rounded-xl bg-violet-50 p-2 text-violet-700 ring-1 ring-violet-200/80">
              <CalendarCheck className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Factors to Discuss With a Prescriber
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                This page does not give personal medical recommendations. Use the
                points below to prepare for a consultation — the decision about
                whether any treatment is right for you belongs to a registered UK
                clinician.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRESCRIBER_FACTORS.map((factor) => (
              <div
                key={factor.title}
                className="rounded-2xl border border-slate-200/90 bg-linear-to-br from-slate-50 to-white p-5 shadow-sm"
              >
                <p className="font-semibold text-slate-900">{factor.title}</p>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
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
