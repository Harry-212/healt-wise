import {
  PILLAR_EXERCISE,
  PILLAR_SLEEP,
  PILLAR_STRESS,
  PILLAR_TIPS,
} from "@/lib/lifestyle/pillar-routes";

/** Pillar page: diet + weight loss — copy, FAQ, internal links, Pexels images. */

const px = (id: number, w: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const DIET_HERO_IMAGE = px(1153370, 1400);

export const DIET_ZIGZAG_IMAGES = {
  balanced: "https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg",
  calories: px(842571, 1200),
  consistency: px(1640772, 1200),
} as const;

export const DIET_SUPPORT_IMAGE =
  "https://images.pexels.com/photos/10714032/pexels-photo-10714032.jpeg";

export const DIET_PROMO_IMAGE =
  "https://images.pexels.com/photos/6942017/pexels-photo-6942017.jpeg";

export const DIET_PRINCIPLES = [
  {
    title: "Prioritise protein",
    body: "Helps preserve muscle mass and keeps you fuller for longer.",
  },
  {
    title: "Increase fibre intake",
    body: "Supports digestion and reduces hunger spikes.",
  },
  {
    title: "Stay hydrated",
    body: "Drinking enough water can reduce unnecessary snacking.",
  },
  {
    title: "Limit ultra-processed foods",
    body: "Highly processed foods are often calorie-dense and less filling.",
  },
] as const;

export const DIET_SUPPORT_PILLARS = [
  {
    title: "Exercise",
    body: "Movement enhances fat loss and improves overall health. Even light daily activity can support your diet.",
  },
  {
    title: "Sleep",
    body: "Poor sleep disrupts hunger hormones, making it harder to stick to your diet.",
  },
  {
    title: "Stress management",
    body: "Stress can trigger emotional eating. Managing it helps maintain consistency.",
  },
  {
    title: "Routine",
    body: "Eating at consistent times can improve digestion and appetite control.",
  },
] as const;

export const DIET_PROMO_BENEFITS = [
  "Reduces appetite and cravings",
  "Helps maintain a calorie deficit",
  "Supports long-term weight management",
  "Backed by clinical research",
] as const;

export const DIET_RELATED = [
  {
    category: "Nutrition",
    readTime: "5 min",
    title: "High-protein diet: benefits and how to start",
    excerpt: "Learn how protein supports fat loss and muscle retention.",
    href: "/helpful-guides/mounjaro-nutrition-guide-uk#protein",
  },
  {
    category: "Meal planning",
    readTime: "6 min",
    title: "Simple meal prep ideas for weight loss",
    excerpt: "Easy, realistic meals you can stick to long-term.",
    href: "/helpful-guides/mounjaro-nutrition-guide-uk#balanced-meals",
  },
  {
    category: "Medication",
    readTime: "7 min",
    title: "Do weight loss medications affect diet?",
    excerpt: "Understand how treatments like GLP-1 work with nutrition.",
    href: "/blog/how-does-wegovy-work-to-transform-your-weight-journey",
  },
] as const;

export const DIET_FAQ = [
  {
    q: "Do crash diets work for long-term weight loss?",
    a: "Crash diets often produce rapid early weight loss, mostly from water and glycogen. Research consistently shows that very restrictive plans are hard to sustain and frequently lead to regain. A moderate, consistent calorie deficit with adequate protein and fibre is more likely to support lasting results—especially alongside habits you can keep.",
  },
  {
    q: "What is a calorie deficit—and how big should it be?",
    a: "A calorie deficit means you consume slightly fewer calories than you burn over time. Typical medically supervised weight-loss plans use modest deficits rather than extremes, to protect muscle, energy, and adherence. A BMI and energy calculator can give a starting estimate, but personalised targets should come from a clinician or dietitian.",
  },
  {
    q: "Should I cut out carbohydrates to lose weight?",
    a: "You do not need to eliminate carbohydrates. Quality matters: whole grains, legumes, vegetables, and fruit provide fibre and micronutrients. Many people do well by reducing refined carbs and sugary drinks while keeping balanced portions of higher-fibre carbs.",
  },
  {
    q: "Do GLP-1 medications replace a healthy diet?",
    a: "No. Medications like GLP-1s can reduce appetite and support adherence to a deficit, but nutrition quality still affects muscle, energy, micronutrients, and long-term health. The strongest outcomes combine medical treatment where appropriate with structured eating, movement, sleep, and stress care.",
  },
  {
    q: "How much protein should I aim for when losing weight?",
    a: "Higher protein intakes are often recommended during weight loss to support satiety and lean mass—commonly in the range of roughly 1.2–1.6g per kg body weight daily in clinical weight-management contexts, though individual needs vary with age, activity, and medical conditions. A registered dietitian can set a safe, personalised target.",
  },
  {
    q: "Is skipping meals bad for metabolism?",
    a: "Occasional meal skipping is not inherently harmful for everyone, but erratic patterns can make hunger, energy, and medication timing harder to manage—especially on GLP-1s. Many people do better with regular meals, predictable protein distribution, and mindful portioning rather than long fasts without clinical guidance.",
  },
] as const;

/** Strategic internal linking — pillar to treatments, guides, tools, and lifestyle hub. */
export const DIET_INTERNAL_LINKS = [
  { href: PILLAR_TIPS, label: "Weight loss tips hub" },
  { href: PILLAR_EXERCISE, label: "Weight loss exercise guide" },
  { href: PILLAR_STRESS, label: "Stress and weight loss" },
  { href: PILLAR_SLEEP, label: "Sleep and weight loss" },
  { href: "/what-is-mounjaro", label: "What is Mounjaro?" },
  { href: "/what-is-wegovy", label: "What is Wegovy?" },
  { href: "/what-is-saxenda", label: "What is Saxenda?" },
  { href: "/compare/wegovy-vs-mounjaro", label: "Wegovy vs Mounjaro" },
  { href: "/compare/best-weight-loss-treatments-uk", label: "Best weight loss treatments UK" },
  { href: "/helpful-guides/mounjaro-nutrition-guide-uk", label: "Mounjaro nutrition guide UK" },
  { href: "/helpful-guides/mounjaro-side-effects-uk", label: "Mounjaro side effects UK" },
  { href: "/helpful-guides/mounjaro-calorie-cycling-weight-loss", label: "Calorie cycling & Mounjaro" },
  { href: "/helpful-guides/mounjaro-weight-loss-plateau", label: "Weight loss plateaus" },
  { href: "/helpful-guides/mounjaro-early-weight-loss-why-it-slows", label: "Why early loss slows" },
  { href: "/tools/bmi-calculator", label: "BMI & calorie calculator" },
  { href: "/blog", label: "Blog" },
  { href: "/wegovy-price-comparison", label: "Compare Wegovy prices UK" },
  { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
] as const;
