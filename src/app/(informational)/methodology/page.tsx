import { Activity, Clock, Scale } from 'lucide-react';

export default function Methodology() {
  return (
    <div className="container mx-auto max-w-4xl px-4 pb-24 pt-8 sm:px-5 sm:py-12 md:px-6">
      <h1 className="mb-4 text-balance text-2xl font-extrabold text-slate-900 sm:mb-6 sm:text-3xl md:text-4xl">
        Our Methodology
      </h1>
      <p className="mb-8 text-base text-slate-600 sm:mb-12 sm:text-lg md:text-xl">
        Transparency is at the core of what we do. Here's exactly how we evaluate and rank UK GLP-1 providers.
      </p>

      <div className="space-y-10 sm:space-y-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <div className="mt-1 shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
              <Scale className="h-6 w-6 text-emerald-600" />
            </div>
          </div>
          <div className="min-w-0">
            <h2 className="mb-2 text-xl font-bold text-slate-900 sm:mb-3 sm:text-2xl">
              Independent & Unbiased
            </h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              We are not owned by any pharmacy, nor are we affiliated with the pharmaceutical manufacturers (Eli Lilly, Novo Nordisk). Our ranking lists are driven purely by price, stock availability, and safety metrics.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <div className="mt-1 shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
              <Clock className="h-6 w-6 text-emerald-600" />
            </div>
          </div>
          <div className="min-w-0">
            <h2 className="mb-2 text-xl font-bold text-slate-900 sm:mb-3 sm:text-2xl">
              Real-time Pricing Index
            </h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Weight loss medication pricing is highly volatile. We scrape and manually verify pricing from over 15 major GPhC-registered pharmacies constantly. We calculate "Total Cost," which factors in hidden consultation and delivery fees.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <div className="mt-1 shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
              <Activity className="h-6 w-6 text-emerald-600" />
            </div>
          </div>
          <div className="min-w-0">
            <h2 className="mb-2 text-xl font-bold text-slate-900 sm:mb-3 sm:text-2xl">
              Maintenance Policies Monitored
            </h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Many patients discover that their provider will abruptly stop prescriptions once their BMI drops below 30 or 27. We extensively document and track each provider's maintenance policy to highlight pharmacies that offer long-term support for keeping weight off.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
