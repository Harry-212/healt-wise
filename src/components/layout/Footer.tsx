import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50 dark:bg-[#050c08] dark:border-white/10 py-12 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-6 flex flex-col">
            <Link href="/" className="flex items-center gap-2">
              {/* Light Mode Logo */}
              <Image 
                src="/logo_hd_transparent.png" 
                alt="Health Wise Logo" 
                width={400} 
                height={125} 
                className="h-16 md:h-20 w-auto object-contain dark:hidden"
              />
              {/* Dark Mode Logo */}
              <Image 
                src="/logo_darkmode_white.png" 
                alt="Health Wise Logo" 
                width={400} 
                height={125} 
                className="h-16 md:h-20 w-auto object-contain hidden dark:block"
              />
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Independent UK comparison site for GLP-1 treatment prices, maintenance policies, pharmacy safety, and support options.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Treatments</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/mounjaro-price-comparison" className="hover:text-emerald-600">Mounjaro Pricing</Link></li>
              <li><Link href="/wegovy-price-comparison" className="hover:text-emerald-600">Wegovy Pricing</Link></li>
              <li><Link href="/weight-loss-treatment-price-comparison-uk" className="hover:text-emerald-600">Compare All</Link></li>
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
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} GLP-1 Compare UK. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Independent & unbiased. Not affiliated with Novo Nordisk or Eli Lilly.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
