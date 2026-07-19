import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import WegovyClickCalculatorClient from '@/components/tools/WegovyClickCalculatorClient';
import { buildPageShareMetadata } from '@/lib/seo/share-metadata';
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = buildPageShareMetadata({
  canonicalPath: '/tools/wegovy-click-calculator',
  title: 'Wegovy Click Calculator UK & Dose Chart',
  metaDescription: 'Use our UK Wegovy click calculator and dose chart to view mathematical estimates for FlexTouch pens, prescribed doses and the new 7.2 mg option.',
  openGraphTitle: 'Wegovy Click Calculator UK: FlexTouch Dose Guide',
  openGraphDescription: 'Understand the mathematical relationship between UK Wegovy FlexTouch pen strengths, prescribed doses and the 7.2 mg update.',
  imagePath: '/window.svg',
  imageAlt: 'Health Wise — Wegovy Click Calculator',
});

export default function WegovyClickCalculatorPage() {
  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Tools"
        sectionPath="/tools"
        pageName="Wegovy Click Calculator"
        pagePath="/tools/wegovy-click-calculator"
      />
      
      <WegovyClickCalculatorClient />
      
      <article className="relative z-20 border-t border-slate-200/80 bg-background">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-5 md:px-8 md:py-20">
          <p id="wegovy-calculator-guide" className="scroll-mt-28 text-xs font-semibold uppercase tracking-wide text-emerald-800">
            Safety Context
          </p>
          
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Understanding the Wegovy FlexTouch Pen</h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Wegovy contains semaglutide and is supplied in the UK as a prescription-only medicine. The standard FlexTouch range includes pens labelled 0.25 mg, 0.5 mg, 1 mg, 1.7 mg and 2.4 mg.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            Each FlexTouch pen contains four labelled doses. Patients should check the label before every injection and use the dose displayed on the pen’s dose counter.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            Although the selector makes clicking sounds when it is turned, the official patient leaflet explains that the sound may differ depending on the direction in which the selector is moved. It specifically instructs patients not to set a dose by counting those clicks.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            Each Wegovy FlexTouch pen contains four doses. The patient leaflet also clarifies that the solution left in the pen after the four labelled doses is not sufficient for another full dose, and the pen should be safely discarded.
          </p>

          <div className="relative mt-12 aspect-16/10 w-full overflow-hidden rounded-2xl bg-slate-200 shadow-lg ring-1 ring-slate-200/80">
            <Image
              src="/wegovy healt wise.png"
              alt="Wegovy FlexTouch pens and official packaging UK"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">How this Wegovy click calculator works</h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            This calculator compares the dose entered with the labelled strength of the selected pen. It then expresses that relationship as a percentage and, where applicable, as a mathematical click estimate.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            For example, a prescribed amount equal to half of the selected pen strength represents 50% of a labelled full dose.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
            <p className="font-mono text-lg font-bold text-slate-900">Estimated clicks = prescribed dose ÷ pen strength × 74</p>
          </div>
          <p className="mt-4 leading-relaxed text-slate-700">
            This is an educational mathematical model. It is not a manufacturer-approved method of selecting or administering a Wegovy dose.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Official Wegovy dose schedule</h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Wegovy treatment normally starts at a lower weekly dose. A qualified prescriber then decides whether and when the dose should increase.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            The current UK patient leaflet describes the following dose-escalation schedule for adult weight management.
          </p>
          
          <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-4 py-3 font-semibold">Treatment period</th>
                  <th className="px-4 py-3 font-semibold">Weekly dose</th>
                </tr>
              </thead>
              <tbody className="bg-white text-slate-700">
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-900">Weeks 1–4</td>
                  <td className="px-4 py-3">0.25 mg</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-900">Weeks 5–8</td>
                  <td className="px-4 py-3">0.5 mg</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-900">Weeks 9–12</td>
                  <td className="px-4 py-3">1 mg</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-900">Weeks 13–16</td>
                  <td className="px-4 py-3">1.7 mg</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-900">From week 17</td>
                  <td className="px-4 py-3 font-medium text-emerald-800">2.4 mg</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">From week 21, for some adults with obesity if needed</td>
                  <td className="px-4 py-3 font-medium text-emerald-800">7.2 mg</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-4">
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Note:</strong> This table explains the licensed schedule. It is not a personal treatment plan. Dose increases must be decided by the prescribing healthcare professional.
            </p>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              The UK patient leaflet, revised in June 2026, indicates that dose escalation to 7.2 mg is only recommended if needed for adult patients with obesity, following at least four weeks on the 2.4 mg dose. Doses above 2.4 mg are not recommended for adolescent patients.
            </p>
          </div>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">What changed with Wegovy 7.2 mg?</h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            In January 2026, the MHRA approved a maximum weekly dose of 7.2 mg for certain adult patients with obesity.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            The original approved administration method involved three consecutive injections of 2.4 mg on the same day. In April 2026, the MHRA also approved a dedicated single-dose 7.2 mg pen.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            The product you receive, its availability and the correct administration method may differ. Always follow the label on the product supplied and the instructions given by your prescriber.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            The 7.2 mg dose is not a starting dose and is not automatically suitable for everyone taking Wegovy.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            The 7.2 mg weekly dose is approved for obesity management in adults under specific clinical criteria. Currently, NICE is developing a dedicated appraisal of semaglutide 7.2 mg, so this dose option is not automatically available or funded on the NHS.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Why Healthwise360 does not show 222 clicks</h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Multiplying 74 clicks by three would produce the number 222. However, this does not represent an approved way to set a Wegovy dose.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            A 7.2 mg prescription relates to a complete weekly treatment dose and not to one continuous turn of a standard FlexTouch selector.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            For that reason, the calculator stops the click calculation at the labelled strength of the selected FlexTouch pen and displays separate official context for 7.2 mg.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            This represents a safer, medically responsible approach to providing patient information.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Can the medicine left in the pen be used?</h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            No extra dose should be assumed from medicine that appears to remain in a Wegovy FlexTouch pen.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            Each FlexTouch pen is designed to provide four labelled doses. The official leaflet states that some solution may remain after the fourth dose, but that the amount is insufficient for another dose and the pen should be disposed of.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            Healthwise360 therefore does not include a “fifth dose” or overfill option in this calculator.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            Unlike discussions in weight-loss communities concerning other medications like Mounjaro, the official Wegovy guidelines strictly state that residual solution is not enough for another full dose.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Cost and supply estimates</h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            When a pen cost is entered, the calculator can display a simple mathematical estimate based on the four labelled doses contained in a standard FlexTouch pen.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700 font-semibold">
            Standard labelled cost per dose:
          </p>
          <div className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
            <p className="font-mono text-lg font-bold text-slate-900">Cost Per Dose = Pen price ÷ 4</p>
          </div>
          <p className="mt-4 leading-relaxed text-slate-700">
            The calculator should not assume that partial dosing extends the official life of a pen. Storage limits, sterility, device operation and prescribing instructions still apply. We do not assume a pen will last eight, twelve, or sixteen weeks simply because the mathematical dose is smaller. Doing so could lead to using the device outside its official guidelines.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Important safety information</h2>
          <p className="mt-4 leading-relaxed text-slate-700 font-medium">
            Always use Wegovy exactly as prescribed.
          </p>
          <p className="mt-2 leading-relaxed text-slate-700">
            Contact your doctor, pharmacist or nurse if:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-slate-700">
            <li>you are unsure which pen strength you have;</li>
            <li>the dose counter stops before your prescribed dose appears;</li>
            <li>you think the full dose was not delivered;</li>
            <li>you are considering changing or delaying a dose;</li>
            <li>you experience side effects that concern you.</li>
          </ul>
          <p className="mt-4 leading-relaxed text-slate-700">
            Seek urgent medical help for severe and persistent abdominal pain, serious allergic symptoms or sudden significant changes in eyesight.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            Suspected side effects can also be reported through the MHRA Yellow Card scheme.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            The official leaflet lists serious risks, including pancreatitis, severe allergic reactions, and sudden changes in eyesight, and requests patients to report suspected side effects to the MHRA.
          </p>

          <h2 className="mt-20 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-6 divide-y divide-slate-200">
            
            <div className="py-6">
              <h3 className="text-base font-semibold text-slate-900">1. What is a Wegovy click calculator?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                A Wegovy click calculator compares a dose entered by the user with the labelled strength of a selected FlexTouch pen. It provides a mathematical estimate only. It does not prescribe a dose or replace the dose counter, patient leaflet or instructions from a healthcare professional.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-base font-semibold text-slate-900">2. Is counting Wegovy clicks an official dosing method?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                No. The official Wegovy patient leaflet instructs users not to set a dose by counting clicks. Patients should turn the selector until their prescribed dose appears on the dose counter.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-base font-semibold text-slate-900">3. How many clicks are in a full Wegovy dose?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                The manufacturer does not instruct patients to identify a full dose by counting clicks. This calculator uses 74 as a mathematical reference, but that number must not be treated as an official dosing instruction.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-base font-semibold text-slate-900">4. What Wegovy pen strengths are available in the UK?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                The standard FlexTouch range includes 0.25 mg, 0.5 mg, 1 mg, 1.7 mg and 2.4 mg pens. A 7.2 mg weekly dose has also been approved for certain adults with obesity, including a dedicated single-dose pen approved in April 2026.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-base font-semibold text-slate-900">5. Does each Wegovy FlexTouch pen contain four doses?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Yes. Each standard Wegovy FlexTouch pen contains four labelled doses of the strength printed on the pen.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-base font-semibold text-slate-900">6. Is there a fifth dose in a Wegovy pen?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                No additional dose should be assumed. The patient leaflet says that some solution may remain after four doses, but the amount is insufficient for another dose and the pen should be disposed of.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-base font-semibold text-slate-900">7. Can I use a 2.4 mg pen to take a smaller dose?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Only follow the dose and method approved by your prescriber. Using clicks or partial pen settings to create a different dose is not the manufacturer’s instructed method and should not be attempted without specific clinical guidance.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-base font-semibold text-slate-900">8. Can I use this calculator to change my Wegovy dose?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                No. Only a qualified prescriber should decide whether your dose should stay the same, increase, decrease or stop. The calculator is informational and does not provide individual medical advice.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-base font-semibold text-slate-900">9. Is Wegovy 7.2 mg equal to 222 clicks?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                No. Healthwise360 does not represent 7.2 mg as 222 clicks. The 7.2 mg dose is a complete prescribed weekly regimen and must be administered using the product and instructions supplied by the prescriber.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-base font-semibold text-slate-900">10. How is Wegovy 7.2 mg administered?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                The 7.2 mg dose was initially authorised as three consecutive 2.4 mg injections on the same day. A dedicated single-dose 7.2 mg pen was subsequently approved. Patients must follow the instructions for the exact product they receive.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-base font-semibold text-slate-900">11. Can someone start Wegovy at 7.2 mg?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                No. Wegovy normally starts at 0.25 mg once weekly and is increased gradually when instructed by the prescriber. The 7.2 mg option is only considered for certain adults with obesity after treatment at 2.4 mg.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-base font-semibold text-slate-900">12. Is Wegovy 7.2 mg available through the NHS?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                MHRA approval does not automatically mean a treatment is routinely funded by the NHS. NICE is currently developing its appraisal of semaglutide 7.2 mg for managing obesity. Patients should confirm current access with their healthcare provider.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-base font-semibold text-slate-900">13. What happens if the dose counter stops early?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                The official instructions say that if the counter stops before the prescribed dose is reached, there is not enough medicine left for a full dose. The pen should be disposed of and a new pen used according to the supplied instructions.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-base font-semibold text-slate-900">14. Is Wegovy the same as Mounjaro?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                No. Wegovy contains semaglutide, while Mounjaro contains tirzepatide. The medicines, pen mechanisms, labelled strengths and dosing instructions are different. A click calculation from one product must never be transferred to the other. MHRA explains that Wegovy is semaglutide (a GLP-1 receptor agonist) while Mounjaro contains tirzepatide which targets both GLP-1 and GIP receptors.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-base font-semibold text-slate-900">15. Does Healthwise360 store the dose I enter?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                No. Calculations are completed in your browser and the dose entered is not saved or used to create a personal profile.
              </p>
            </div>
            
          </div>

          <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
            <p className="text-sm font-semibold text-slate-900">Continue your journey</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-slate-700 sm:flex-row sm:flex-wrap sm:gap-x-6">
              <li>
                <Link href="/what-is-wegovy" className="font-medium text-emerald-800 underline underline-offset-2 hover:text-emerald-950">
                  What is Wegovy?
                </Link>
              </li>
              <li>
                <Link href="/wegovy-price-comparison" className="font-medium text-emerald-800 underline underline-offset-2 hover:text-emerald-950">
                  Compare Wegovy Prices UK
                </Link>
              </li>
              <li>
                <Link href="/compare/wegovy-vs-mounjaro" className="font-medium text-emerald-800 underline underline-offset-2 hover:text-emerald-950">
                  Wegovy vs Mounjaro
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}
