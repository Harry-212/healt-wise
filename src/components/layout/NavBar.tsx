"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import MegaMenu, { MegaMenuItem } from '@/components/ui/mega-menu';
import { 
  Activity, ArrowRight, PackageSearch, RefreshCcw, FileQuestion, 
  ShieldCheck, ArrowUpRight, AlertCircle, FileText, BellRing, 
  Calculator, Stethoscope, Users, PhoneCall, HelpCircle, CreditCard, PlayCircle 
} from "lucide-react";

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const NAV_ITEMS: MegaMenuItem[] = [
    {
      id: 1,
      label: "Treatments",
      subMenus: [
        {
          title: "Mounjaro (Tirzepatide)",
          items: [
            { label: "Is Mounjaro Right for Me?", description: "Check if you meet the requirements.", icon: HelpCircle, href: "/is-mounjaro-right-for-me" },
            { label: "How Do I Get It?", description: "Understanding the prescription process.", icon: ArrowRight, href: "/how-to-get-mounjaro" },
            { label: "What Will I Pay?", description: "Cost breakdown and private options.", icon: CreditCard, href: "/what-will-i-pay-for-mounjaro" },
            { label: "Starting Mounjaro", description: "What to expect on your first dose.", icon: PlayCircle, href: "/starting-mounjaro" },
            { label: "What is Mounjaro?", description: "Learn about the Tirzepatide formulation.", icon: Activity, href: "/what-is-mounjaro" },
            { label: "Mounjaro Dosage Guide", description: "Protocols from 2.5mg to 15mg.", icon: FileText, href: "/mounjaro-dosage-guide" },
            { label: "Compare Prices", description: "Check latest UK pharmacy rates.", icon: PackageSearch, href: "/mounjaro-price-list" }
          ]
        },
        {
          title: "Wegovy (Semaglutide)",
          items: [
            { label: "Is Wegovy® Right for Me?", description: "Check if you meet the requirements.", icon: HelpCircle, href: "/is-wegovy-right-for-me" },
            { label: "How Do I Get It?", description: "Understanding the prescription process.", icon: ArrowRight, href: "/how-to-get-wegovy" },
            { label: "What Will I Pay?", description: "Cost breakdown and private options.", icon: CreditCard, href: "/what-will-i-pay-for-wegovy" },
            { label: "Starting Wegovy®", description: "What to expect on your first dose.", icon: PlayCircle, href: "/starting-wegovy" },
            { label: "What is Wegovy?", description: "Learn about the Semaglutide formulation.", icon: Activity, href: "/what-is-wegovy" },
            { label: "Wegovy Dosage Guide", description: "Protocols from 0.25mg to 2.4mg.", icon: FileText, href: "/wegovy-dosage-guide" },
            { label: "Compare Prices", description: "Check latest UK pharmacy rates.", icon: PackageSearch, href: "/wegovy-price-list" }
          ]
        },
        {
          title: "General Guides",
          items: [
            { label: "How GLP-1 Works", description: "Understand the mechanism of action.", icon: Stethoscope, href: "/how-glp-1-works" },
            { label: "Side Effects Explained", description: "Most common symptoms reported.", icon: AlertCircle, href: "/glp-1-side-effects-explained" },
            { label: "Science of Side Effects", description: "Deep clinical analysis of reactions.", icon: FileQuestion, href: "/science-of-glp-1-side-effects" },
            { label: "Safety Checklist", description: "GPhC verification guidelines.", icon: ShieldCheck, href: "/pharmacy-safety-gphc-verification" }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "Services & Tools",
      subMenus: [
        {
          title: "Tools & Resources",
          items: [
            { label: "Compare Prices", description: "Compare the latest UK pharmacy rates.", icon: PackageSearch, href: "/weight-loss-treatment-price-comparison-uk" },
            { label: "Check Eligibility", description: "Understand BMI and NHS requirements.", icon: Stethoscope, href: "/check-eligibility-weight-loss-treatment" },
            { label: "NHS vs Private", description: "Compare treatment pathways and costs.", icon: Activity, href: "/nhs-vs-private-weight-loss-treatment" }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "Helpful Guides",
      highlight: true,
      subMenus: [
        {
          title: "Getting Started",
          items: [
            { label: "How to Get Started", description: "Steps to order medication in the UK.", icon: ArrowRight, href: "/how-to-get-started-weight-loss-treatment" },
            { label: "Switching Treatments", description: "Guide to moving between Wegovy and Mounjaro.", icon: RefreshCcw, href: "/switching-treatments-wegovy-mounjaro" },
            { label: "Mounjaro FAQs", description: "Frequently asked questions about Mounjaro.", icon: FileQuestion, href: "/mounjaro-faq" },
            { label: "Wegovy FAQs", description: "Frequently asked questions about Wegovy.", icon: FileQuestion, href: "/wegovy-faq" }
          ]
        }
      ]
    },
    {
      id: 4,
      label: "Blogs",
      link: "#"
    },
    {
      id: 5,
      label: "Company",
      subMenus: [
        {
          title: "About Our Company",
          items: [
            { label: "About Us", description: "Learn about our mission and team.", icon: Users, href: "/about" },
            { label: "Why Trust Us", description: "Our commitment to independent data.", icon: ShieldCheck, href: "/methodology" },
            { label: "Contact", description: "Get in touch with our support team.", icon: PhoneCall, href: "/contact" }
          ]
        }
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b dark:border-white/10 bg-card/95 dark:bg-[#020804]/90 backdrop-blur supports-[backdrop-filter]:bg-card/60 dark:supports-[backdrop-filter]:bg-[#020804]/60 transition-colors">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2 py-1 shrink-0"
        >
          {/* Light Mode Logo */}
          <div className="relative flex items-center transition-opacity hover:opacity-90 dark:hidden">
            <Image
              src="/logo_hd_transparent.png"
              alt="Health Wise Logo"
              width={800}
              height={250}
              className="h-24 md:h-32 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
              priority
            />
          </div>
          {/* Dark Mode Logo — green accent on hover only */}
          <div className="relative hidden dark:flex items-center">
            <Image
              src="/logo_darkmode_white.png"
              alt="Health Wise Logo"
              width={800}
              height={250}
              className="h-24 md:h-32 w-auto object-contain transition-all duration-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.25)] group-hover:drop-shadow-[0_0_22px_rgba(52,211,153,0.95)] group-hover:[filter:brightness(1.08)_sepia(0.25)_hue-rotate(70deg)_saturate(1.15)]"
              priority
            />
          </div>
        </Link>
        
        {/* Desktop Mega Menu */}
        <nav className="hidden lg:flex flex-1 justify-center z-50">
          <MegaMenu items={NAV_ITEMS} />
        </nav>

        {/* Action Toggles */}
        <div className="flex items-center gap-4 shrink-0">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {mounted && theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}
