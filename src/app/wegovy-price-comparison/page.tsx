import Link from 'next/link';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import ProviderCard from '@/components/ui/ProviderCard';
import { PharmacyProvider } from '@/lib/types/provider';

const MOCK_PROVIDERS: PharmacyProvider[] = [
  {
    id: "boots",
    name: "Boots Online Doctor",
    brandOffered: "Wegovy",
    dose: ["0.25mg", "0.5mg", "1.0mg", "1.7mg", "2.4mg"],
    totalPrice: 199.00,
    shippingCost: "Included",
    consultationCost: "Included",
    subscriptionType: "One-off",
    stockStatus: "In Stock",
    maintenanceAllowed: false,
    minBMI: 30,
    gphcStatus: "Verified",
    deliverySpeed: "Standard",
    supportFeatures: ["In-store pickup"],
    lastCheckedDate: new Date().toISOString()
  }
];

export default function WegovyHub() {
  return (
    <div className="flex flex-col gap-12 pb-20 pt-10">
      <section className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Wegovy Price Comparison & Guide</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Compare the lowest prices for Wegovy (Semaglutide) in the UK. Track stock availability and maintenance support policies.
        </p>
      </section>

      <section className="container mx-auto px-4 max-w-3xl">
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/wegovy-price-list" className="flex items-center justify-between p-4 bg-card border rounded-xl hover:border-emerald-300 hover:shadow-sm transition-all text-slate-900 font-medium">
            <span>View Full Price List</span>
            <ArrowRight className="h-5 w-5 text-emerald-600" />
          </Link>
          <Link href="/wegovy-maintenance-pharmacies" className="flex items-center justify-between p-4 bg-card border rounded-xl hover:border-emerald-300 hover:shadow-sm transition-all text-slate-900 font-medium">
            <span>Check Maintenance Policies</span>
            <ArrowRight className="h-5 w-5 text-emerald-600" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Featured Wegovy Offers</h2>
        <div className="flex flex-col gap-6">
          {MOCK_PROVIDERS.map(p => <ProviderCard key={p.id} provider={p} />)}
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-4xl bg-card border rounded-2xl p-8 md:p-12">
        <div className="prose max-w-none text-slate-600">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How do I get Wegovy in the UK?</h2>
          <p>
            Wegovy is a prescription weight-loss medication containing Semaglutide. You can compare regulated online providers to find safely verified options at completely transparent pricing structures.
          </p>
          
          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">What will I pay?</h3>
          <p>
            Prices for Wegovy typically scale linearly as your dose increments. The starting titrations (0.25mg, 0.5mg, 1.0mg) generally cost significantly less than the maintenance doses (1.7mg, 2.4mg). Our price lists constantly update to provide exact transparency into monthly costs.
          </p>

          <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl flex gap-3 text-amber-900 text-sm">
            <AlertTriangle className="h-5 w-5 shrink-0" />
            <p>
              Always consult your doctor before starting any new medication protocol. Your body may respond differently and close monitoring is recommended.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
