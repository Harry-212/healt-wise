import { Bell } from 'lucide-react';

export default function PriceAlerts() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-10 sm:px-5 sm:py-16 md:py-20">
      <div className="rounded-3xl border bg-card p-5 text-center shadow-sm sm:p-8 md:p-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
          <Bell className="h-8 w-8 text-emerald-600" />
        </div>
        <h1 className="mb-3 text-balance text-2xl font-extrabold text-slate-900 sm:mb-4 sm:text-3xl">
          Set up Price Drop Alerts
        </h1>
        <p className="mx-auto mb-6 max-w-lg text-sm text-slate-600 sm:mb-8 sm:text-base">
          Medication prices change frequently, and stock issues can cause sudden price spikes. Subscribe to get notified instantly when the cheapest GPhC-verified providers alter their pricing.
        </p>

        <form className="flex flex-col gap-4 max-w-md mx-auto text-left">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input type="email" placeholder="you@example.com" className="w-full min-h-11 rounded-xl border border-slate-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-emerald-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Medication Interest</label>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <label className="flex min-h-11 flex-1 cursor-pointer items-center gap-2 rounded-lg border bg-slate-50 px-4 py-2.5 touch-manipulation">
                <input type="checkbox" className="accent-emerald-600" name="med" value="mounjaro" /> Mounjaro
              </label>
              <label className="flex min-h-11 flex-1 cursor-pointer items-center gap-2 rounded-lg border bg-slate-50 px-4 py-2.5 touch-manipulation">
                <input type="checkbox" className="accent-emerald-600" name="med" value="wegovy" /> Wegovy
              </label>
            </div>
          </div>
          <button type="submit" className="mt-4 w-full touch-manipulation rounded-xl bg-emerald-600 px-6 py-3.5 font-bold text-white transition-colors hover:bg-emerald-700 sm:py-4">
            Activate Alerts
          </button>
        </form>
        <p className="text-xs text-slate-400 mt-6">We respect your privacy. No spam, just pure data. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
