import { Activity, Clock, Scale } from 'lucide-react';

export default function Methodology() {
  return (
    <div className="container mx-auto px-4 max-w-4xl py-12 pb-24">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Our Methodology</h1>
      <p className="text-xl text-slate-600 mb-12">
        Transparency is at the core of what we do. Here's exactly how we evaluate and rank UK GLP-1 providers.
      </p>

      <div className="space-y-12">
        <div className="flex gap-6">
          <div className="shrink-0 mt-1">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
              <Scale className="h-6 w-6 text-emerald-600" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Independent & Unbiased</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              We are not owned by any pharmacy, nor are we affiliated with the pharmaceutical manufacturers (Eli Lilly, Novo Nordisk). Our ranking lists are driven purely by price, stock availability, and safety metrics.
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="shrink-0 mt-1">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
              <Clock className="h-6 w-6 text-emerald-600" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Real-time Pricing Index</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Weight loss medication pricing is highly volatile. We scrape and manually verify pricing from over 15 major GPhC-registered pharmacies constantly. We calculate "Total Cost," which factors in hidden consultation and delivery fees.
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="shrink-0 mt-1">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
              <Activity className="h-6 w-6 text-emerald-600" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Maintenance Policies Monitored</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Many patients discover that their provider will abruptly stop prescriptions once their BMI drops below 30 or 27. We extensively document and track each provider's maintenance policy to highlight pharmacies that offer long-term support for keeping weight off.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
