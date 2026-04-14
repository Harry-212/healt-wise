import {
  PILLAR_DIET,
  PILLAR_EXERCISE,
  PILLAR_STRESS,
  PILLAR_TIPS,
} from "@/lib/lifestyle/pillar-routes";

/** Pillar page: sleep & weight loss — copy, FAQ, internal links, Pexels images. */

const px = (id: number, w: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const SLEEP_HERO_IMAGE = px(1571453, 1400);

export const SLEEP_ZIGZAG_IMAGES = {
  connection: px(935777, 1200),
  optimise: px(164186, 1200),
} as const;

export const SLEEP_SYSTEM_IMAGE = px(3771069, 1200);

export const SLEEP_PROMO_IMAGE = px(6695773, 1200);

export const SLEEP_IMPACT_CARDS = [
  {
    title: "Hormonal disruption",
    body: "Increases hunger hormones and reduces fullness signals.",
  },
  {
    title: "Stronger cravings",
    body: "Drives desire for sugary, high-calorie foods.",
  },
  {
    title: "Slower metabolism",
    body: "Reduces your ability to burn calories efficiently.",
  },
  {
    title: "Increased fat storage",
    body: "Affects insulin sensitivity and fat regulation.",
  },
  {
    title: "Constant hunger",
    body: "Makes you feel hungry even after eating.",
  },
  {
    title: "Less movement",
    body: "Fatigue reduces physical activity levels.",
  },
] as const;

export const SLEEP_TIP_CARDS = [
  {
    title: "Reduce caffeine",
    body: "Avoid caffeine after midday to prevent sleep disruption.",
  },
  {
    title: "Limit screen time",
    body: "Reduce device use before bed to fall asleep faster.",
  },
  {
    title: "Dim the lights",
    body: "Support natural melatonin production in the evening.",
  },
  {
    title: "Avoid late meals",
    body: "Eating too late can interrupt sleep cycles.",
  },
  {
    title: "Exercise during the day",
    body: "Physical activity improves sleep quality.",
  },
  {
    title: "Stick to a routine",
    body: "Consistent sleep and wake times regulate your body clock.",
  },
] as const;

export const SLEEP_SYSTEM_PILLARS = [
  {
    title: "Nutrition",
    body: "Supports recovery and stabilises energy levels overnight.",
  },
  {
    title: "Exercise",
    body: "Improves sleep quality and regulates your rhythm.",
  },
  {
    title: "Stress management",
    body: "Helps you fall asleep faster and stay asleep longer.",
  },
] as const;

export const SLEEP_PROMO_BENEFITS = [
  "Personalised lifestyle recommendations",
  "Support for sleep, nutrition, and habits",
  "Ongoing progress tracking",
  "Expert guidance when you need it",
] as const;

export const SLEEP_RELATED = [
  {
    category: "Stress",
    readTime: "5 min",
    title: "Stress & weight gain",
    excerpt: "How cortisol affects your body and eating patterns.",
    href: PILLAR_STRESS,
  },
  {
    category: "Exercise",
    readTime: "6 min",
    title: "Exercise for weight loss",
    excerpt: "Build an effective routine that supports better sleep.",
    href: PILLAR_EXERCISE,
  },
  {
    category: "Diet",
    readTime: "5 min",
    title: "Diet & nutrition guide",
    excerpt: "What to eat for better results alongside rest.",
    href: PILLAR_DIET,
  },
] as const;

export const SLEEP_FAQ = [
  {
    q: "Does sleep really affect weight loss?",
    a: "Yes. Short or fragmented sleep is linked to changes in appetite hormones, cravings, energy, and activity—making it harder to maintain a deficit and easier to overeat. Sleep is also when recovery and many regulatory processes occur, so it supports training and adherence.",
  },
  {
    q: "How many hours of sleep should I aim for?",
    a: "Most adults do well with roughly 7–9 hours nightly, but needs vary by age, health, and training load. Consistency (similar bed and wake times) often matters as much as total hours for metabolic and appetite regulation.",
  },
  {
    q: "Can poor sleep cause weight gain even if my diet is good?",
    a: "Diet quality still matters, but sleep loss can increase hunger signals, reduce impulse control around food, and lower daytime movement—raising the risk of eating beyond your needs. Fixing sleep often makes a planned diet easier to follow.",
  },
  {
    q: "Will naps fix sleep deprivation for weight management?",
    a: "Short naps can reduce sleep pressure and improve alertness, but they don’t fully replace regular nighttime sleep for hormonal rhythms. If you rely on long daily naps because nights are poor, it’s usually better to address night-time sleep hygiene and discuss persistent insomnia with a clinician.",
  },
  {
    q: "Does alcohol help you sleep if weight loss is the goal?",
    a: "Alcohol may make you feel sleepy initially, but it commonly fragments sleep and worsens snoring or sleep apnoea risk—especially with excess weight. For weight management, moderating alcohol often improves sleep architecture and next-day energy.",
  },
] as const;

export const SLEEP_INTERNAL_LINKS = [
  { href: PILLAR_STRESS, label: "Stress and weight loss" },
  { href: PILLAR_DIET, label: "Diet for sustainable weight loss" },
  { href: PILLAR_EXERCISE, label: "Weight loss exercise guide" },
  { href: PILLAR_TIPS, label: "Weight loss tips hub" },
  { href: "/what-is-mounjaro", label: "What is Mounjaro?" },
  { href: "/what-is-wegovy", label: "What is Wegovy?" },
  { href: "/helpful-guides/mounjaro-nutrition-guide-uk", label: "Mounjaro nutrition guide UK" },
  { href: "/helpful-guides/mounjaro-side-effects-uk", label: "Mounjaro side effects UK" },
  { href: "/helpful-guides/mounjaro-weight-loss-plateau", label: "Weight loss plateaus" },
  { href: "/helpful-guides/mounjaro-early-weight-loss-why-it-slows", label: "Why early loss slows" },
  { href: "/tools/bmi-calculator", label: "BMI & calorie calculator" },
  { href: "/tools/weight-loss-tracker", label: "Weight loss tracker" },
  { href: "/blog", label: "Blog" },
  { href: "/compare/best-weight-loss-injections-uk", label: "Best weight loss injections UK" },
  { href: "/helpful-guides/mounjaro-menopause-weight-loss-uk", label: "Menopause & weight (UK guide)" },
] as const;
