import { ShieldCheck, Cross, Building2, SearchCheck } from 'lucide-react';

export default function PharmacySafetyGphc() {
  return (
    <div className="container mx-auto px-4 max-w-4xl py-12 pb-24">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
          <ShieldCheck className="h-8 w-8 text-emerald-600" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Pharmacy Safety & GPhC Verification</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          We only compare online pharmacies that are fully regulated and verified by the General Pharmaceutical Council (GPhC) in the UK.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="p-8 bg-card border border-slate-200 rounded-2xl shadow-sm">
          <Building2 className="h-6 w-6 text-emerald-600 mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mb-3">What is the GPhC?</h2>
          <p className="text-slate-600 leading-relaxed">
            The General Pharmaceutical Council is the independent regulator for pharmacists, pharmacy technicians, and pharmacy premises in Great Britain. Registration ensures that the pharmacy meets strict safety and professional standards.
          </p>
        </div>
        <div className="p-8 bg-card border border-slate-200 rounded-2xl shadow-sm">
          <SearchCheck className="h-6 w-6 text-emerald-600 mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mb-3">Our Verification Process</h2>
          <p className="text-slate-600 leading-relaxed">
            Before adding any provider to our comparison lists, we manually cross-reference their regulatory number with the official GPhC registry. We routinely re-scan these registries to ensure ongoing compliance.
          </p>
        </div>
      </div>

      <div className="prose max-w-none text-slate-600">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">How to verify a pharmacy yourself</h2>
        <p>
          You should always check the credentials of an online pharmacy before purchasing any medication.
        </p>
        <ol className="list-decimal pl-5 space-y-4">
          <li><strong>Look for the voluntary internet pharmacy logo:</strong> This logo contains the GPhC registration number and a link to the GPhC website.</li>
          <li><strong>Check the registration number:</strong> Click the logo or search the registration number directly on the <a href="https://www.pharmacyregulation.org/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">GPhC website</a>.</li>
          <li><strong>Ensure physical presence:</strong> Legitimate UK pharmacies must list a physical address within the UK.</li>
          <li><strong>Beware of missing consultations:</strong> GLP-1 medications are prescription-only. If a website offers them without an ID check or medical questionnaire, they are operating illegally and dangerously.</li>
        </ol>
      </div>
    </div>
  );
}
