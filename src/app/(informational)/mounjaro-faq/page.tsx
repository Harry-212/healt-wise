import { HelpCircle } from 'lucide-react';

export default function MounjaroFaq() {
  return (
    <div className="container mx-auto max-w-4xl px-4 pb-24 pt-8 sm:px-5 sm:py-12 md:px-6">
      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 sm:mb-6">
        <HelpCircle className="h-8 w-8 text-emerald-600" />
      </div>
      <h1 className="text-balance text-2xl font-extrabold text-slate-900 sm:text-3xl md:text-4xl">
        Mounjaro FAQs
      </h1>

      <div className="mt-8 space-y-4 sm:mt-12 sm:space-y-6">
        <div className="rounded-xl border bg-card p-4 sm:p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Are there hidden consultation fees?</h3>
          <p className="text-slate-600">Most verified providers list the cost of consultation within the medication price, but always double-check our "Consultation" tag in the price comparison table to find out if there are separate prescription charges.</p>
        </div>
        <div className="rounded-xl border bg-card p-4 sm:p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Can I switch doses?</h3>
          <p className="text-slate-600">Yes, the standard titration protocol starts at 2.5mg and steps up to 15mg. You must consult your prescribing doctor before changing any dose, and not all pharmacies will let you jump doses if you transfer midway.</p>
        </div>
      </div>
    </div>
  );
}
