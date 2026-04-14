import {
  PILLAR_DIET,
  PILLAR_EXERCISE,
  PILLAR_SLEEP,
  PILLAR_STRESS,
  PILLAR_TIPS,
} from "@/lib/lifestyle/pillar-routes";

export type NavLink = { label: string; href: string; icon?: string };

export type NavColumn = { title: string; links: NavLink[] };

export type NavPanel = {
  id: string;
  label: string;
  /** If set, nav item is a direct link (no mega menu). */
  directHref?: string;
  columns?: NavColumn[];
  /** Desktop mega menu width: `content` / `content-md` = shrink to fit. */
  menuWidth?: "wide" | "content" | "content-md";
};

export const NAV_PANELS: NavPanel[] = [
  {
    id: "treatments",
    label: "Treatments",
    menuWidth: "wide",
    columns: [
      {
        title: "By Medication",
        links: [
          { label: "Wegovy", href: "/what-is-wegovy", icon: "pill" },
          { label: "Mounjaro", href: "/what-is-mounjaro", icon: "syringe" },
          { label: "Saxenda", href: "/what-is-saxenda", icon: "pill" },
        ],
      },
      {
        title: "Compare Treatments",
        links: [
          {
            label: "Wegovy vs Mounjaro",
            href: "/compare/wegovy-vs-mounjaro",
            icon: "compare",
          },
          {
            label: "Mounjaro vs Saxenda",
            href: "/compare/mounjaro-vs-saxenda",
            icon: "compare",
          },
          {
            label: "Best Weight Loss Injections UK",
            href: "/compare/best-weight-loss-injections-uk",
            icon: "sparkles",
          },
        ],
      },
      {
        title: "Pricing",
        links: [
          {
            label: "Compare Wegovy prices UK",
            href: "/wegovy-price-comparison",
            icon: "pound",
          },
          {
            label: "Compare Mounjaro prices UK",
            href: "/mounjaro-price-comparison",
            icon: "pound",
          },
          {
            label: "Compare Saxenda prices UK",
            href: "/saxenda-price-comparison",
            icon: "pound",
          },
          { label: "Cheapest Options UK", href: "/prices/cheapest-options-uk", icon: "pound" },
        ],
      },
      {
        title: "Lifestyle",
        links: [
          { label: "Weight loss tips", href: PILLAR_TIPS, icon: "sparkles" },
          { label: "Diet & nutrition", href: PILLAR_DIET, icon: "apple" },
          { label: "Exercise", href: PILLAR_EXERCISE, icon: "activity" },
          { label: "Sleep & weight", href: PILLAR_SLEEP, icon: "moon" },
          { label: "Stress & weight", href: PILLAR_STRESS, icon: "brain" },
        ],
      },
    ],
  },
  {
    id: "guides",
    label: "Helpful Guides",
    directHref: "/helpful-guides",
  },
  {
    id: "tools",
    label: "Tools",
    menuWidth: "content",
    columns: [
      {
        title: "Tools",
        links: [
          {
            label: "BMI, BMR & Calorie Calculator",
            href: "/tools/bmi-calculator",
            icon: "scale",
          },
          {
            label: "Weight Loss Tracker",
            href: "/tools/weight-loss-tracker",
            icon: "activity",
          },
        ],
      },
    ],
  },
  {
    id: "blog",
    label: "Blog",
    directHref: "/blog",
  },
  {
    id: "about-us",
    label: "About Us",
    directHref: "/about",
  },
];
