import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';
import TrustSignals from '@/components/trust/TrustSignals';

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-surface py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-6 flex flex-col">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/logo_hd_transparent.png" 
                alt="Health Wise Logo" 
                width={400} 
                height={125} 
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-600">
              Independent UK comparison site for GLP-1 treatment prices, maintenance policies, pharmacy safety, and support options.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Treatments</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/mounjaro-price-comparison" className="hover:text-emerald-600">Mounjaro Pricing</Link></li>
              <li><Link href="/wegovy-price-comparison" className="hover:text-emerald-600">Wegovy Pricing</Link></li>
              <li><Link href="/" className="hover:text-emerald-600">Compare All</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Trust & Safety</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/pharmacy-safety-gphc-verification" className="hover:text-emerald-600">GPhC Verification</Link></li>
              <li><Link href="/methodology" className="hover:text-emerald-600">Our Methodology</Link></li>
              <li><Link href="/about" className="hover:text-emerald-600">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/mounjaro-faq" className="hover:text-emerald-600">Mounjaro FAQs</Link></li>
              <li><Link href="/wegovy-faq" className="hover:text-emerald-600">Wegovy FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-600">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <TrustSignals />
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} GLP-1 Compare UK. All rights reserved.
          </p>
          <div className="flex max-w-md flex-col items-center gap-2 text-sm text-slate-500 sm:max-w-none sm:flex-row sm:items-start md:max-w-xl">
            <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />
            <span className="text-balance sm:text-left">
              Independent & unbiased. Not affiliated with Novo Nordisk or Eli Lilly.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
