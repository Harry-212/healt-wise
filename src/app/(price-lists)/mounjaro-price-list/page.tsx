import Link from 'next/link';
import { ArrowLeft, Stethoscope } from 'lucide-react';
import ProviderCard from '@/components/ui/ProviderCard';
import { PharmacyProvider } from '@/lib/types/provider';

const MOCK_PROVIDERS: PharmacyProvider[] = [
  {
    id: "medexpress", name: "MedExpress", brandOffered: "Both", dose: ["2.5mg"], totalPrice: 149.99,
    shippingCost: "Included", consultationCost: "Included", subscriptionType: "Subscription", stockStatus: "In Stock", maintenanceAllowed: true, minBMI: 30, gphcStatus: "Verified", deliverySpeed: "Next Day", supportFeatures: [], lastCheckedDate: new Date().toISOString()
  }
];

export default function MounjaroPriceList() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-12">
      <Link href="/mounjaro-price-comparison" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Mounjaro Hub
      </Link>
      
      <div className="mb-10 lg:w-2/3">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Complete Mounjaro Price List UK</h1>
        <p className="text-slate-600 text-lg">
          Live index of Mounjaro prices across registered UK pharmacies. Prices typically increase as your dosage titrates up from 2.5mg to 15mg.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {MOCK_PROVIDERS.map(p => <ProviderCard key={p.id} provider={p} />)}
      </div>

      <div className="mt-12 p-6 bg-slate-900 text-white rounded-xl flex gap-4">
        <Stethoscope className="h-6 w-6 text-emerald-400 shrink-0" />
        <p className="text-sm text-slate-300">
          <strong>Note:</strong> Price comparison data is independently monitored. Always verify final totals including shipping directly at checkout.
        </p>
      </div>
    </div>
  );
}
