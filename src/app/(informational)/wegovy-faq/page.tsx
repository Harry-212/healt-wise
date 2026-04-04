import { HelpCircle } from 'lucide-react';

export default function WegovyFaq() {
  return (
    <div className="container mx-auto px-4 max-w-4xl py-12 pb-24">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
        <HelpCircle className="h-8 w-8 text-emerald-600" />
      </div>
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Wegovy FAQs</h1>
      
      <div className="space-y-6 mt-12">
        <div className="p-6 bg-card border rounded-xl">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Why are maintenance doses more expensive?</h3>
          <p className="text-slate-600">Pharmaceutical pricing typically dictates that the 1.7mg and 2.4mg doses are priced significantly higher than the starter doses. Our price comparison tracks these tier jumps accurately.</p>
        </div>
        <div className="p-6 bg-card border rounded-xl">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Do all pharmacies support Wegovy maintenance?</h3>
          <p className="text-slate-600">No. Check our Maintenance Policies section to find providers who will continue prescribing Wegovy after your BMI has dropped below clinical obesity thresholds. Without checking, you risk losing access to your treatment.</p>
        </div>
      </div>
    </div>
  );
}
