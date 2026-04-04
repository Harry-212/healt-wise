import { HelpCircle } from 'lucide-react';

export default function MounjaroFaq() {
  return (
    <div className="container mx-auto px-4 max-w-4xl py-12 pb-24">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
        <HelpCircle className="h-8 w-8 text-emerald-600" />
      </div>
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Mounjaro FAQs</h1>
      
      <div className="space-y-6 mt-12">
        <div className="p-6 bg-card border rounded-xl">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Are there hidden consultation fees?</h3>
          <p className="text-slate-600">Most verified providers list the cost of consultation within the medication price, but always double-check our "Consultation" tag in the price comparison table to find out if there are separate prescription charges.</p>
        </div>
        <div className="p-6 bg-card border rounded-xl">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Can I switch doses?</h3>
          <p className="text-slate-600">Yes, the standard titration protocol starts at 2.5mg and steps up to 15mg. You must consult your prescribing doctor before changing any dose, and not all pharmacies will let you jump doses if you transfer midway.</p>
        </div>
      </div>
    </div>
  );
}
