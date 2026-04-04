import { Bell } from 'lucide-react';

export default function PriceAlerts() {
  return (
    <div className="container mx-auto px-4 max-w-3xl py-20">
      <div className="bg-card border rounded-3xl p-8 md:p-12 shadow-sm text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
          <Bell className="h-8 w-8 text-emerald-600" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Set up Price Drop Alerts</h1>
        <p className="text-slate-600 mb-8 max-w-lg mx-auto">
          Medication prices change frequently, and stock issues can cause sudden price spikes. Subscribe to get notified instantly when the cheapest GPhC-verified providers alter their pricing.
        </p>

        <form className="flex flex-col gap-4 max-w-md mx-auto text-left">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Medication Interest</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer bg-slate-50 border px-4 py-2 rounded-lg flex-1">
                <input type="checkbox" className="accent-emerald-600" name="med" value="mounjaro" /> Mounjaro
              </label>
              <label className="flex items-center gap-2 cursor-pointer bg-slate-50 border px-4 py-2 rounded-lg flex-1">
                <input type="checkbox" className="accent-emerald-600" name="med" value="wegovy" /> Wegovy
              </label>
            </div>
          </div>
          <button type="submit" className="mt-4 w-full px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors">
            Activate Alerts
          </button>
        </form>
        <p className="text-xs text-slate-400 mt-6">We respect your privacy. No spam, just pure data. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
