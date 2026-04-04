import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import ProviderCard from '@/components/ui/ProviderCard';
import { PharmacyProvider } from '@/lib/types/provider';

const MOCK_PROVIDERS: PharmacyProvider[] = [];

export default function WegovyMaintenanceList() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-12">
      <Link href="/wegovy-price-comparison" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Wegovy Hub
      </Link>
      
      <div className="mb-10 p-8 bg-emerald-50 rounded-2xl border border-emerald-100">
        <h1 className="text-3xl font-bold text-emerald-950 mb-4">Wegovy Maintenance Policies</h1>
        <p className="text-emerald-800 text-lg mb-6">
          Wegovy is indicated for weight management, but long-term maintenance is critical to avoid regaining weight. Below are pharmacies that explicitly support Wegovy maintenance protocols once you hit your goal weight.
        </p>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 text-sm text-emerald-900 font-medium">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Explicit maintenance protocol
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {MOCK_PROVIDERS.length > 0 ? (
          MOCK_PROVIDERS.map(p => <ProviderCard key={p.id} provider={p} />)
        ) : (
          <div className="text-center py-12 bg-card rounded-xl border border-slate-200">
            <h3 className="text-lg font-medium text-slate-800">We are currently auditing Wegovy maintenance providers.</h3>
            <p className="text-slate-500 mt-2">Check back soon for updated policies.</p>
          </div>
        )}
      </div>
    </div>
  );
}
