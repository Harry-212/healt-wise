import { HelpCircle } from 'lucide-react';

export default function WegovyFaq() {
  return (
    <div className="container mx-auto max-w-4xl px-4 pb-24 pt-8 sm:px-5 sm:py-12 md:px-6">
      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 sm:mb-6">
        <HelpCircle className="h-8 w-8 text-emerald-600" />
      </div>
      <h1 className="text-balance text-2xl font-extrabold text-slate-900 sm:text-3xl md:text-4xl">
        Wegovy FAQs
      </h1>

      <div className="mt-8 space-y-4 sm:mt-12 sm:space-y-6">
        <div className="rounded-xl border bg-card p-4 sm:p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Why are maintenance doses more expensive?</h3>
          <p className="text-slate-600">Pharmaceutical pricing typically dictates that the 1.7mg and 2.4mg doses are priced significantly higher than the starter doses. Our price comparison tracks these tier jumps accurately.</p>
        </div>
        <div className="rounded-xl border bg-card p-4 sm:p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Do all pharmacies support Wegovy maintenance?</h3>
          <p className="text-slate-600">No. Check our Maintenance Policies section to find providers who will continue prescribing Wegovy after your BMI has dropped below clinical obesity thresholds. Without checking, you risk losing access to your treatment.</p>
        </div>
      </div>
    </div>
  );
}
