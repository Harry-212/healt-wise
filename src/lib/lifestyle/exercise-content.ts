import {
  PILLAR_DIET,
  PILLAR_SLEEP,
  PILLAR_STRESS,
  PILLAR_TIPS,
} from "@/lib/lifestyle/pillar-routes";

/** Pillar page: weight loss exercise — copy, FAQ, internal links, Pexels images. */

const px = (id: number, w: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const EXERCISE_HERO_IMAGE =
  "https://images.pexels.com/photos/6285189/pexels-photo-6285189.jpeg";

export const EXERCISE_ZIGZAG_IMAGES = {
  role: "https://images.pexels.com/photos/6455814/pexels-photo-6455814.jpeg",
  intensity: "https://images.pexels.com/photos/6551098/pexels-photo-6551098.jpeg",
  cardioStrength: px(3823039, 1200),
} as const;

export const EXERCISE_SYSTEM_IMAGE =
  "https://images.pexels.com/photos/9171160/pexels-photo-9171160.jpeg";

export const EXERCISE_PROMO_IMAGE =
  "https://images.pexels.com/photos/5750469/pexels-photo-5750469.jpeg";

export const EXERCISE_BENEFITS = [
  {
    title: "Stronger bones",
    body: "Weight-bearing movements increase bone density and reduce fracture risk.",
  },
  {
    title: "Lower disease risk",
    body: "Supports heart health, blood sugar control, and immune function.",
  },
  {
    title: "Better mood",
    body: "Releases endorphins that reduce stress and anxiety.",
  },
  {
    title: "Improved fitness",
    body: "Boosts strength, endurance, flexibility, and balance.",
  },
  {
    title: "Better sleep",
    body: "Helps regulate sleep cycles for deeper rest.",
  },
  {
    title: "Weight control",
    body: "Burns calories and supports long-term fat loss.",
  },
] as const;

export const EXERCISE_SIMPLE_MOVES = [
  {
    title: "Desk movement",
    body: "Small movements throughout the day reduce sedentary time.",
  },
  {
    title: "Standing more",
    body: "Replacing sitting improves metabolic health.",
  },
  {
    title: "Walking",
    body: "Accessible, low-impact, and highly effective.",
  },
  {
    title: "Running",
    body: "Powerful for fat loss and cardiovascular health.",
  },
  {
    title: "Cycling",
    body: "Great for endurance and joint-friendly cardio.",
  },
  {
    title: "Bodyweight training",
    body: "Builds strength without equipment.",
  },
] as const;

export const EXERCISE_SYSTEM_PILLARS = [
  {
    title: "Nutrition",
    body: "Fuel your body with balanced meals to support performance and recovery.",
  },
  {
    title: "Sleep",
    body: "Recovery is where progress happens—poor sleep slows results.",
  },
  {
    title: "Stress management",
    body: "High stress can disrupt hormones and increase cravings.",
  },
  {
    title: "Consistency",
    body: "Small habits, repeated daily, outperform extreme efforts.",
  },
] as const;

export const EXERCISE_PROMO_BENEFITS = [
  "Tailored exercise recommendations",
  "Nutrition guidance aligned with your goals",
  "Progress tracking and adjustments",
  "Support from professionals",
] as const;

export const EXERCISE_RELATED = [
  {
    category: "Diet",
    readTime: "5 min",
    title: "Diet for weight loss",
    excerpt: "Learn how to structure meals for fat loss.",
    href: PILLAR_DIET,
  },
  {
    category: "Side effects",
    readTime: "6 min",
    title: "Managing Mounjaro side effects",
    excerpt: "Practical tips for staying comfortable on treatment.",
    href: "/helpful-guides/mounjaro-side-effects-uk",
  },
  {
    category: "Hydration",
    readTime: "4 min",
    title: "Hydration & weight loss",
    excerpt: "Why water matters more than you think while losing weight.",
    href: "/helpful-guides/mounjaro-nutrition-guide-uk#hydration",
  },
] as const;

export const EXERCISE_FAQ = [
  {
    q: "How much exercise do I need for weight loss?",
    a: "UK public-health guidance often cites roughly 150 minutes of moderate activity per week (or 75 minutes vigorous), plus strength work on major muscle groups at least two days a week. For fat loss, consistency matters more than occasional intense sessions—especially when paired with adequate protein and sleep.",
  },
  {
    q: "Is cardio or strength training better for losing weight?",
    a: "Cardio tends to burn more calories per session; strength training helps preserve or build muscle, which supports metabolism and shape. Most people get the best long-term results by combining both: regular walking or cycling plus progressive resistance training.",
  },
  {
    q: "Can I lose weight with exercise alone?",
    a: "Exercise increases energy expenditure and improves health markers, but weight loss still usually requires a sustainable calorie deficit—often achieved through food choices, portion habits, and sometimes medical support. Exercise makes maintaining loss easier and improves body composition.",
  },
  {
    q: "What is NEAT and why does it matter?",
    a: "NEAT (non-exercise activity thermogenesis) is the energy you burn through daily movement that isn’t structured exercise—standing, fidgeting, walking between rooms, taking stairs. Increasing NEAT is one of the most realistic ways to raise total daily energy burn without adding long gym sessions.",
  },
  {
    q: "Should I exercise every day when trying to lose weight?",
    a: "Daily light movement (like walking) is generally safe and helpful. Hard training every day without recovery can increase injury risk and fatigue. A practical approach is most days of easy activity plus 2–4 structured workouts weekly, adjusted to your fitness level and clinician advice.",
  },
] as const;

export const EXERCISE_INTERNAL_LINKS = [
  { href: PILLAR_DIET, label: "Diet for sustainable weight loss" },
  { href: PILLAR_STRESS, label: "Stress and weight loss" },
  { href: PILLAR_SLEEP, label: "Sleep and weight loss" },
  { href: PILLAR_TIPS, label: "Weight loss tips hub" },
  { href: "/what-is-mounjaro", label: "What is Mounjaro?" },
  { href: "/what-is-wegovy", label: "What is Wegovy?" },
  { href: "/compare/best-weight-loss-injections-uk", label: "Best weight loss injections UK" },
  { href: "/helpful-guides/mounjaro-nutrition-guide-uk", label: "Mounjaro nutrition guide UK" },
  { href: "/helpful-guides/mounjaro-weight-loss-plateau", label: "Weight loss plateaus" },
  { href: "/helpful-guides/mounjaro-calorie-cycling-weight-loss", label: "Calorie cycling & Mounjaro" },
  { href: "/helpful-guides/mounjaro-early-weight-loss-why-it-slows", label: "Why early loss slows" },
  { href: "/tools/bmi-calculator", label: "BMI & calorie calculator" },
  { href: "/tools/weight-loss-tracker", label: "Weight loss tracker" },
  { href: "/blog", label: "Blog" },
  { href: "/blog/how-does-wegovy-work-to-transform-your-weight-journey", label: "How Wegovy works" },
  { href: "/wegovy-price-comparison", label: "Compare Wegovy prices UK" },
  { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
] as const;
