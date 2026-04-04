import Link from 'next/link';
import { ArrowRight, Info, CheckCircle2, AlertTriangle } from 'lucide-react';
import ProviderCard from '@/components/ui/ProviderCard';
import { PharmacyProvider } from '@/lib/types/provider';

// Mock data (we will re-export or fetch this later, duplicated for the mockup)
const MOCK_PROVIDERS: PharmacyProvider[] = [
  {
    id: "medexpress",
    name: "MedExpress",
    brandOffered: "Both",
    dose: ["2.5mg", "5.0mg", "7.5mg", "10mg", "12.5mg", "15mg"],
    totalPrice: 149.99,
    shippingCost: "Included",
    consultationCost: "Included",
    subscriptionType: "Subscription",
    stockStatus: "In Stock",
    maintenanceAllowed: true,
    minBMI: 30,
    gphcStatus: "Verified",
    deliverySpeed: "Next Day",
    supportFeatures: ["App"],
    lastCheckedDate: new Date().toISOString()
  }
];

export default function MounjaroHub() {
  return (
    <div className="flex flex-col gap-12 pb-20 pt-10">
      {/* Hero Section */}
      <section className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Mounjaro Price Comparison & Guide</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Compare the lowest prices for Mounjaro (Tirzepatide) in the UK. We check live prices daily from GPhC-verified online pharmacies.
        </p>
      </section>

      {/* Quick Navigation Tasks */}
      <section className="container mx-auto px-4 max-w-3xl">
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/mounjaro-price-list" className="flex items-center justify-between p-4 bg-card border rounded-xl hover:border-emerald-300 hover:shadow-sm transition-all text-slate-900 font-medium">
            <span>View Full Price List</span>
            <ArrowRight className="h-5 w-5 text-emerald-600" />
          </Link>
          <Link href="/mounjaro-maintenance-pharmacies" className="flex items-center justify-between p-4 bg-card border rounded-xl hover:border-emerald-300 hover:shadow-sm transition-all text-slate-900 font-medium">
            <span>Check Maintenance Policies</span>
            <ArrowRight className="h-5 w-5 text-emerald-600" />
          </Link>
        </div>
      </section>

      {/* Featured / Cheapest Provider */}
      <section className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Featured Mounjaro Offers</h2>
        <div className="flex flex-col gap-6">
          {MOCK_PROVIDERS.map(p => <ProviderCard key={p.id} provider={p} />)}
        </div>
      </section>

      {/* Guide Content structure similar to Wegovy's informational flow */}
      <section className="container mx-auto px-4 max-w-4xl bg-card border rounded-2xl p-8 md:p-12">
        <div className="prose max-w-none text-slate-600">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How do I get Mounjaro in the UK?</h2>
          <p>
            Mounjaro is available on prescription to patients who meet specific BMI and health criteria. It is dispensed via private healthcare providers or the NHS (under specific guidelines). Our verified pharmacies offer a streamlined consultation process to determine if this treatment is appropriate for you.
          </p>
          
          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Is it right for me?</h3>
          <ul className="space-y-2 list-disc pl-5">
            <li>You must have a Body Mass Index (BMI) of 30 or higher.</li>
            <li>Alternatively, a BMI of 27 or higher with a weight-related health condition.</li>
            <li>You must consult with a healthcare professional before starting.</li>
          </ul>

          <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl flex gap-3 text-amber-900 text-sm">
            <AlertTriangle className="h-5 w-5 shrink-0" />
            <p>
              Always answer health questionnaires honestly to ensure safe prescribing. Falsifying your details can lead to severe health risks.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
