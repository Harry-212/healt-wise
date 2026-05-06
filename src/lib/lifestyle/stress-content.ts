import {
  PILLAR_DIET,
  PILLAR_EXERCISE,
  PILLAR_SLEEP,
  PILLAR_TIPS,
} from "@/lib/lifestyle/pillar-routes";

/** Pillar page: stress & weight loss — copy, FAQ, internal links, Pexels images. */

const px = (id: number, w: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const STRESS_HERO_IMAGE = px(3771089, 1400);

export const STRESS_ZIGZAG_IMAGES = {
  connection: "https://images.pexels.com/photos/34395933/pexels-photo-34395933.jpeg",
  calm: px(4056723, 1200),
} as const;

export const STRESS_SYSTEM_IMAGE =
  "https://images.pexels.com/photos/5622219/pexels-photo-5622219.jpeg";

export const STRESS_PROMO_IMAGE =
  "https://images.pexels.com/photos/6670943/pexels-photo-6670943.jpeg";

export const STRESS_IMPACT_CARDS = [
  {
    title: "Hormonal imbalance",
    body: "Elevated cortisol increases hunger and cravings.",
  },
  {
    title: "Metabolic slowdown",
    body: "Your body can become less efficient at burning fat under chronic strain.",
  },
  {
    title: "Emotional eating",
    body: "Stress triggers cravings for comfort foods high in sugar and fat.",
  },
  {
    title: "Poor sleep",
    body: "Disrupted sleep makes weight management harder.",
  },
  {
    title: "Low motivation",
    body: "Fatigue and stress reduce physical activity levels.",
  },
  {
    title: "Weakened immunity",
    body: "Frequent illness can interrupt healthy routines.",
  },
] as const;

export const STRESS_STRATEGY_CARDS = [
  {
    title: "Exercise regularly",
    body: "Movement reduces stress hormones and boosts mood.",
  },
  {
    title: "Eat balanced meals",
    body: "Supports hormone regulation and energy stability.",
  },
  {
    title: "Prioritise sleep",
    body: "Improves recovery and helps regulate cortisol.",
  },
  {
    title: "Practice mindfulness",
    body: "Meditation and breathing calm your nervous system.",
  },
  {
    title: "Stay connected",
    body: "Social support reduces emotional pressure.",
  },
  {
    title: "Manage your time",
    body: "Structure reduces overwhelm and anxiety.",
  },
] as const;

export const STRESS_SYSTEM_PILLARS = [
  {
    title: "Nutrition",
    body: "Balanced meals stabilise energy and reduce stress-related cravings.",
  },
  {
    title: "Exercise",
    body: "Improves mood, burns calories, and builds resilience.",
  },
  {
    title: "Sleep",
    body: "Essential for recovery and hormonal balance.",
  },
] as const;

export const STRESS_PROMO_BENEFITS = [
  "Appetite and metabolism support",
  "Guidance from health professionals",
  "Behavioural and stress management tools",
  "Personalised progress tracking",
] as const;

export const STRESS_RELATED = [
  {
    category: "Exercise",
    readTime: "5 min",
    title: "Exercise for weight loss",
    excerpt: "How to build an effective routine that supports mood and fat loss.",
    href: PILLAR_EXERCISE,
  },
  {
    category: "Diet",
    readTime: "6 min",
    title: "Diet & nutrition guide",
    excerpt: "What to eat for sustainable results alongside stress care.",
    href: PILLAR_DIET,
  },
  {
    category: "Side effects",
    readTime: "4 min",
    title: "Managing Mounjaro side effects",
    excerpt: "Stay comfortable during treatment while you stabilise habits.",
    href: "/helpful-guides/mounjaro-side-effects-uk",
  },
] as const;

export const STRESS_FAQ = [
  {
    q: "Can stress really cause weight gain?",
    a: "Chronic stress is linked to hormonal shifts (notably cortisol), appetite changes, cravings, poorer sleep, and lower activity—all of which can make weight gain easier and weight loss harder. The effect varies by person, genetics, sleep, and coping habits.",
  },
  {
    q: "What is the difference between stress eating and physical hunger?",
    a: "Physical hunger tends to build gradually and can be satisfied with a range of foods. Stress-driven cravings often feel sudden, specific (commonly sweet or ultra-palatable foods), and may persist after fullness. Naming the pattern and slowing down before eating can help you choose a response rather than react automatically.",
  },
  {
    q: "Does cortisol always cause belly fat?",
    a: "Cortisol is one piece of a complex system. Chronic stress can associate with central fat storage in some people, but waist size is also influenced by sleep, alcohol intake, diet quality, genetics, and overall energy balance. A clinician can help interpret changes in the context of your health.",
  },
  {
    q: "Will mindfulness or breathing exercises help with weight loss?",
    a: "Mindfulness-based approaches can reduce perceived stress and improve self-regulation around food—supporting adherence to nutrition and movement plans. They are not a replacement for a calorie deficit or medical treatment when needed, but they can strengthen the behavioural side of weight management.",
  },
  {
    q: "How do GLP-1 medications interact with stress and eating?",
    a: "GLP-1 treatments can reduce appetite and help some people feel less driven by cravings, which may make stressful periods easier to navigate nutritionally. They do not remove the need for sleep, stress skills, or balanced meals. Always follow your prescriber’s advice and report mood changes promptly.",
  },
] as const;

export const STRESS_INTERNAL_LINKS = [
  { href: PILLAR_DIET, label: "Diet for sustainable weight loss" },
  { href: PILLAR_EXERCISE, label: "Weight loss exercise guide" },
  { href: PILLAR_SLEEP, label: "Sleep and weight loss" },
  { href: PILLAR_TIPS, label: "Weight loss tips hub" },
  { href: "/what-is-mounjaro", label: "What is Mounjaro?" },
  { href: "/what-is-wegovy", label: "What is Wegovy?" },
  { href: "/helpful-guides/mounjaro-nutrition-guide-uk", label: "Mounjaro nutrition guide UK" },
  { href: "/helpful-guides/mounjaro-side-effects-uk", label: "Mounjaro side effects UK" },
  { href: "/helpful-guides/mounjaro-weight-loss-plateau", label: "Weight loss plateaus" },
  { href: "/helpful-guides/mounjaro-calorie-cycling-weight-loss", label: "Calorie cycling & Mounjaro" },
  { href: "/tools/bmi-calculator", label: "BMI & calorie calculator" },
  { href: "/tools/weight-loss-tracker", label: "Weight loss tracker" },
  { href: "/blog", label: "Blog" },
  { href: "/compare/best-weight-loss-treatments-uk", label: "Best weight loss treatments UK" },
  { href: "/pharmacy-safety-gphc-verification", label: "Pharmacy safety (GPhC)" },
  { href: "/helpful-guides/fake-online-pharmacy-uk-how-to-spot-stay-safe", label: "Spotting fake online pharmacies" },
] as const;
