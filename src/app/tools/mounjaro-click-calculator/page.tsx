import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import MounjaroClickCalculatorClient from '@/components/tools/MounjaroClickCalculatorClient';
import { buildPageShareMetadata } from '@/lib/seo/share-metadata';

export const metadata: Metadata = buildPageShareMetadata({
  canonicalPath: '/tools/mounjaro-click-calculator',
  title: 'Mounjaro Click Calculator & Dose Chart UK (2026)',
  metaDescription: 'Free Mounjaro KwikPen click calculator and dosage chart for UK patients. Calculate clicks for any dose and view a complete reference chart for all pen strengths.',
  openGraphTitle: 'Mounjaro Click Calculator & Chart UK',
  openGraphDescription: 'Easily calculate how many clicks are needed for your specific Mounjaro dose using our free tool. Includes a full dosage chart for UK KwikPens.',
  imagePath: '/window.svg',
  imageAlt: 'Health Wise — Mounjaro Click Calculator',
});

export default function MounjaroClickCalculatorPage() {
  return (
    <>
      <MounjaroClickCalculatorClient />
      <article className="relative z-20 border-t border-slate-200/80 bg-background">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-5 md:px-8 md:py-20">
          <p id="mounjaro-calculator-guide" className="scroll-mt-28 text-xs font-semibold uppercase tracking-wide text-emerald-800">
            Safety Context
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Understanding the Mounjaro KwikPen Clicks</h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            The UK Mounjaro KwikPen is designed as a multi-dose device that delivers exactly four full doses of the prescribed strength. A standard full dose is achieved by turning the dial until it stops, which corresponds to exactly{' '}
            <strong>60 clicks</strong>.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            This tool is provided for informational purposes, to help patients visually understand how the volume translates into clicks. Attempting to extract partial doses or &quot;split&quot; a pen is considered an{' '}
            <strong>off-label use</strong>. We strongly advise that you only follow the dosage prescribed by your healthcare provider and consult them before making any adjustments to your treatment plan.
          </p>

          <h3 className="mt-10 text-lg font-bold text-slate-900">Important Warnings</h3>
          <ul className="mt-3 list-inside list-disc space-y-2 text-slate-700">
            <li>
              <strong>Always follow your prescription:</strong> Do not change your dosage without speaking to your clinician.
            </li>
            <li>
              <strong>Sterility and device mechanics:</strong> The KwikPen is built for a specific usage pattern. Reusing needles or manipulating the dial for partial doses may affect the sterility of the medication or the accuracy of the
              pen.
            </li>
            <li>
              <strong>The &quot;5th dose&quot; myth:</strong> While some residual liquid remains in the pen after 4 doses, Eli Lilly does not endorse extracting it. The concentration and sterility cannot be guaranteed.
            </li>
          </ul>

          <div className="relative mt-12 aspect-16/10 w-full overflow-hidden rounded-2xl bg-slate-200 shadow-lg ring-1 ring-slate-200/80">
            <Image
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=75&w=1600"
              alt="Patient consultation and medical care context"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">How the calculation works</h2>
          <p className="mt-4 leading-relaxed text-slate-700">The math behind the click calculator is simple. Since a full dose is always 60 clicks, you divide your desired dose by the total pen strength, and then multiply by 60.</p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
            <p className="font-mono text-lg font-bold text-slate-900">Clicks = (Desired Dose ÷ Pen Strength) × 60</p>
          </div>
          <p className="mt-4 leading-relaxed text-slate-700">
            For example, if you have a 5mg pen but want a 2.5mg dose: <strong>(2.5 ÷ 5) × 60 = 30 clicks</strong>.
          </p>

          <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
            <p className="text-sm font-semibold text-slate-900">Continue your journey</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-slate-700 sm:flex-row sm:flex-wrap sm:gap-x-6">
              <li>
                <Link href="/what-is-mounjaro" className="font-medium text-violet-800 underline underline-offset-2">
                  What is Mounjaro?
                </Link>
              </li>
              <li>
                <Link href="/mounjaro-price-comparison" className="font-medium text-violet-800 underline underline-offset-2">
                  Compare Mounjaro Prices UK
                </Link>
              </li>
              <li>
                <Link href="/compare/wegovy-vs-mounjaro" className="font-medium text-violet-800 underline underline-offset-2">
                  Wegovy vs Mounjaro
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}
