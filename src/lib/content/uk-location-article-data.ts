import type { UkNation, UkWeightLossLocation } from "@/lib/data/uk-weight-loss-locations";

/** `a` may include markdown links `[label](/path)` for on-page rendering; JSON-LD uses plain text. */
export type FaqItem = { q: string; a: string };

export function faqAnswerPlain(markdown: string): string {
  return markdown
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

/** First sentence of place snapshot — hook for SERP without recycling the shared health paragraph opening. */
export function placeSnapshotLeadingSentence(snapshot: string): string {
  const trimmed = snapshot.replace(/\s+/g, " ").trim();
  const match = trimmed.match(/^.{1,350}?[.!?](?=\s|$)/);
  if (match) return match[0].trim();
  return trimmed.length > 120 ? `${trimmed.slice(0, 117)}…` : trimmed;
}

/** Generate unique 5W1H style titles for SERP */
export function buildUkLocationTitle(loc: UkWeightLossLocation): string {
  if (loc.slug === "armagh") {
    return "Best Weight Loss Treatment Armagh: Proven Strategies for the Orchard County";
  }
  if (loc.slug === "belfast") {
    return "Best Weight Loss Treatment Belfast: Northern Ireland’s Top Evidence Based Options";
  }
  if (loc.slug === "birmingham") {
    return "Best Weight Loss Treatment Birmingham: West Midlands Weight Mastery";
  }
  if (loc.slug === "blackburn") {
    return "Best Weight Loss Treatment Blackburn: Lancashire Roadmap to Real Results";
  }
  if (loc.slug === "blackpool") {
    return "Best Weight Loss Treatment Blackpool: Top Lancashire Strategies Revealed";
  }
  if (loc.slug === "bolton") {
    return "Best Weight Loss Treatment Bolton: Greater Manchester's Top Evidence Backed Paths";
  }
  if (loc.slug === "bournemouth") {
    return "Best Weight Loss Treatment Bournemouth: Dorset's Top Evidence Based Strategies";
  }
  if (loc.slug === "bradford") {
    return "Best Weight Loss Treatment Bradford: Yorkshire Strategies for Effective Slimming";
  }
  if (loc.slug === "brighton-and-hove") {
    return "Best Weight Loss Treatment Brighton and Hove: Sussex Seafront Slimming Guide";
  }
  if (loc.slug === "cambridge") {
    return "Best Weight Loss Treatment Cambridge: Cambs Strategies for Real Results";
  }
  if (loc.slug === "bangor-northern-ireland") {
    return "Best Weight Loss Treatment Bangor: Coastal Strategies for Northern Ireland Slimming";
  }
  if (loc.slug === "bangor-wales") {
    return "Best Weight Loss Treatment Bangor Wales: North Wales Paths to Lasting Slimming";
  }
  if (loc.slug === "basildon") {
    return "Best Weight Loss Treatment Basildon: Essex Edge for Everyday Slimming";
  }
  if (loc.slug === "bath") {
    return "Best Weight Loss Treatment Bath: Somerset Secrets to Sustainable Shape";
  }
  if (loc.slug === "aberdeen") {
    return "Best Weight Loss Treatment Aberdeen: Top Non-Surgical Slimming Clinics in the Granite City";
  }
  
  // Rotate titles based on name length to ensure variety
  const templates = [
    `Best Weight Loss Treatment in ${loc.name}: Top Non-Surgical Slimming Clinics`,
    `Discover the Best Weight Loss Treatment in ${loc.name} | Safe & Effective Options`,
    `${loc.name} Weight Loss Clinics: Compare the Best Non-Surgical Treatments Today`,
    `How to Find the Best Weight Loss Treatment in ${loc.name} | Expert Guide`,
    `Top Weight Loss Treatments in ${loc.name}: What Works & Where to Go`,
  ];
  return templates[loc.name.length % templates.length];
}

/** SERP snippet: lead with place-specific hook, then standard disclaimer tail. */
export function buildUkLocationMetaDescription(loc: UkWeightLossLocation): string {
  if (loc.slug === "armagh") {
    return "Explore the best weight loss treatment options in Armagh: evidence-based strategies, local tips, and expert insights for sustainable fat loss in Northern Ireland.";
  }
  if (loc.slug === "belfast") {
    return "Best weight loss treatment Belfast: evidence based options, clinic and lifestyle choices, plus UK tools to compare safe treatment pathways in Belfast.";
  }
  if (loc.slug === "birmingham") {
    return "Best weight loss treatment Birmingham: West Midlands options, canal inspired tips, evidence on injections and surgeries for sustainable fat loss UK.";
  }
  if (loc.slug === "blackburn") {
    return "Best weight loss treatment Blackburn: Lancashire options, practical meal swaps, and UK tools to compare injections and clinics for sustainable fat loss.";
  }
  if (loc.slug === "blackpool") {
    return "Best weight loss treatment Blackpool: NHS programs, lifestyle tips, and Lancashire strategies for Fylde Coast fat loss success.";
  }
  if (loc.slug === "bolton") {
    return "Best weight loss treatment Bolton: NHS programs, ABL Health support, and UK tools to compare safe options for Greater Manchester fat loss.";
  }
  if (loc.slug === "bournemouth") {
    return "Best weight loss treatment Bournemouth: Dorset beach strategies, evidence on injections like semaglutide, and top UK tips for sustainable fat loss.";
  }
  if (loc.slug === "bradford") {
    return "Best weight loss treatment Bradford: Yorkshire strategies, evidence on Mounjaro and Wegovy, and local tips for sustainable fat loss in West Yorkshire.";
  }
  if (loc.slug === "brighton-and-hove") {
    return "Best weight loss treatment Brighton and Hove: Sussex strategies, pier powered plans, and evidence for sustainable fat loss in Brighton UK.";
  }
  if (loc.slug === "cambridge") {
    return "Best weight loss treatment Cambridge: GLP 1 insights, clinic overviews, Cambridge Diet tips, and evidence for Cambs fat loss success.";
  }
  if (loc.slug === "bangor-northern-ireland") {
    return "Uncover the best weight loss treatment in Bangor, Northern Ireland: Local strategies, science-backed tips, and coastal-inspired plans for lasting fat reduction.";
  }
  if (loc.slug === "bangor-wales") {
    return "What is the best weight loss treatment in Bangor Wales? Practical meals, North Wales trails, and UK tools to compare slimming options safely with Health Wise.";
  }
  if (loc.slug === "basildon") {
    return "Best weight loss treatment Basildon: Essex strategies, commuter hacks, and proven tips for sustainable fat reduction in Basildon UK.";
  }
  if (loc.slug === "bath") {
    return "Best weight loss treatment Bath: Somerset strategies, spa town food smarts, and UK tools to compare lasting slimming options in Bath.";
  }
  if (loc.slug === "aberdeen") {
    return "Discover the best weight loss treatment in Aberdeen—non-surgical fat reduction at top slimming clinics. Tailored plans for Granite City locals. Results-driven, safe.";
  }
  
  // Rotate meta descriptions based on name length to ensure variety (5W1H style)
  const templates = [
    `Discover the best weight loss treatment in ${loc.name}. Compare local slimming clinics, safe non-surgical options, and tailored plans for ${loc.name} residents.`,
    `Looking for the best weight loss treatment in ${loc.name}? Explore expert-reviewed clinics, proven non-surgical methods, and safe results near you.`,
    `Who offers the best weight loss treatment in ${loc.name}? Read our independent guide to local clinics, non-surgical fat reduction, and medical support.`,
    `Find safe and effective weight loss treatments in ${loc.name}. We review top local clinics, non-surgical options, and what to expect from your journey.`,
    `When diets stall, discover the best weight loss treatment in ${loc.name}. See top-rated slimming clinics and non-surgical fat reduction options tailored for you.`,
  ];
  return templates[loc.name.length % templates.length];
}

export function nationCareContext(nation: UkNation): {
  nhsFrame: string;
  postcodeNote: string;
} {
  switch (nation) {
    case "Northern Ireland":
      return {
        nhsFrame:
          "HSC Northern Ireland pathways can look quite different from NHS England on paper, even when the underlying medicines are the same class.",
        postcodeNote:
          "Postcode checks still matter for courier cold-chain, especially if you live between smaller towns.",
      };
    case "Scotland":
      return {
        nhsFrame:
          "NHS Scotland routes often run through health boards rather than English-style ICBs; waiting lists and eligibility wording can shift between boards.",
        postcodeNote:
          "Rural postcodes around Scotland sometimes narrow delivery windows for refrigerated pens.",
      };
    case "Wales":
      return {
        nhsFrame:
          "Welsh health boards publish their own obesity service arrangements; what your GP in Wales can offer this month may not mirror a cousin’s surgery in Leeds.",
        postcodeNote:
          "Coastal and valley postcodes can still be served by national couriers, but cut-off times vary.",
      };
    default:
      return {
        nhsFrame:
          "In England, much of the gatekeeping sits with GP practices and integrated care boards (ICBs), so two people with similar BMIs might still hear different answers depending on postcode.",
        postcodeNote:
          "Same-day courier maps rarely follow council borders; a practice just outside {name} might still count as “local” for delivery.",
      };
  }
}

export function buildLocationFaq(loc: UkWeightLossLocation): FaqItem[] {
  if (loc.slug === "armagh") {
    return [
      {
        q: "What’s the most effective diet for Armagh locals?",
        a: `Balanced calorie deficits that you can keep up usually beat extreme rules. NICE-style weight-management guidance favours sustainable eating patterns over crash diets—see our [comparison of the best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk) for how medicines like [Mounjaro](/what-is-mounjaro), [Wegovy](/what-is-wegovy), or [Saxenda](/what-is-saxenda) sit *beside* food habits, not instead of them. If you are budgeting privately, check [Mounjaro prices](/mounjaro-price-comparison), [Wegovy prices](/wegovy-price-comparison), and [Saxenda prices](/saxenda-price-comparison).`,
      },
      {
        q: "How much exercise is needed for weight loss in Armagh?",
        a: `Most adults are pointed toward roughly **150 minutes** of moderate activity weekly (plus strength work) as a public-health baseline—walking the Mall, Palace Demesne, or farm tracks all counts. Use our [BMI calculator](/tools/bmi-calculator) only as a screening tool alongside waist circumference and how you feel day to day.`,
      },
      {
        q: "Do fat reduction treatments work for Armagh residents?",
        a: `Non-surgical body contouring can change **local** fat thickness for suitable candidates, but it is not a substitute for overall energy balance. If you are also exploring prescription options, read [what Mounjaro is](/what-is-mounjaro), [what Wegovy is](/what-is-wegovy), and [what Saxenda is](/what-is-saxenda)—then compare [Mounjaro](/mounjaro-price-comparison), [Wegovy](/wegovy-price-comparison), and [Saxenda](/saxenda-price-comparison) costs with your clinician’s follow-up plan in mind.`,
      },
      {
        q: "Can mindset alone drive weight loss here?",
        a: `Mindset does not replace physics, but stress, sleep, and planning strongly influence adherence—especially around busy seasons. If motivation wobbles, our [Mounjaro weight-loss plateau guide](/helpful-guides/mounjaro-weight-loss-plateau) explains why progress stalls and what sensible tweaks look like (whether you use injections or not).`,
      },
      {
        q: "How to beat winter weight gain in the Orchard County?",
        a: `Prioritise sleep, keep protein and vegetables easy to reach on dark evenings, and schedule short indoor workouts when the weather turns. Pair those basics with realistic medical support if you qualify—neighbours often compare notes with guides for [Belfast](/blog/best-weight-loss-treatment-in-belfast) or [Newry](/blog/best-weight-loss-treatment-in-newry) because HSC pathways and courier access can feel similar across Northern Ireland.`,
      },
      {
        q: "Are supplements essential for the best results?",
        a: `Rarely. Most people do better with consistent meals, movement, and—where appropriate—prescribed medicines overseen by a clinician. Treat “miracle” pills with the same scepticism we outline in our [methodology](/methodology); for injection context, start with [Mounjaro in the UK](/helpful-guides/mounjaro-weight-loss-injection-uk).`,
      },
    ];
  }

  if (loc.slug === "belfast") {
    return [
      {
        q: "What is the most successful weight loss treatment in Belfast?",
        a: `For many people, success looks like a layered plan: a calorie deficit you can repeat, strength and walking you can sustain, and medical support when appropriate. If a clinician discusses injections, start with [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk), then read [Mounjaro](/what-is-mounjaro), [Wegovy](/what-is-wegovy), and [Saxenda](/what-is-saxenda). Compare monthly totals via [Mounjaro prices](/mounjaro-price-comparison), [Wegovy prices](/wegovy-price-comparison), and [Saxenda prices](/saxenda-price-comparison).`,
      },
      {
        q: "Can I get Ozempic in Northern Ireland?",
        a: `Semaglutide is used for diabetes and, in some forms, weight management. In practice, access depends on indication, supply, and clinician judgement. If your goal is weight loss, discussions usually focus on approved weight management pathways and follow up, not a single brand name. Start with [what Wegovy is](/what-is-wegovy) for context and use our [methodology](/methodology) when comparing providers.`,
      },
      {
        q: "Can I get weight loss injections on the NHS in Northern Ireland?",
        a: `HSC Northern Ireland pathways can differ from NHS England, and access may be limited to specialist criteria and capacity. Many people still begin with lifestyle and dietitian supported programmes. If you consider private routes, compare safety and follow up, not just speed, using [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk).`,
      },
      {
        q: "How did celebrities lose weight quickly, and should I copy it?",
        a: `Fast change often involves medication plus lifestyle and a high support environment. It does not mean the same pace is safe for everyone in Belfast. If you consider medicines, read [Mounjaro](/what-is-mounjaro) and [Wegovy](/what-is-wegovy) first, then focus on monitoring, side effects, and long term habits.`,
      },
      {
        q: "Dietitian programmes versus medicines, which is better?",
        a: `Dietitians help with food structure, relapse prevention, and sustainability. Medicines can reduce appetite for some people, but pairing them with diet and movement usually improves outcomes. Use the [UK comparator hub](/compare/best-weight-loss-treatments-uk) to understand how options stack, then compare [Mounjaro](/mounjaro-price-comparison), [Wegovy](/wegovy-price-comparison), and [Saxenda](/saxenda-price-comparison) costs with a follow up plan.`,
      },
      {
        q: "What are the risks of bariatric surgery in Belfast?",
        a: `Surgery can be effective for severe obesity, but it needs lifelong follow up, nutrition monitoring, and realistic expectations. It is not a casual alternative to meal planning. If you are considering it, ask for a structured pathway, not a headline promise.`,
      },
      {
        q: "What local exercise fits a busy Belfast schedule?",
        a: `Aim near 150 minutes of moderate activity weekly plus strength work. Short park loops, brisk errands, and simple home circuits add up. Use our [BMI calculator](/tools/bmi-calculator) as a screening aid with waist size and energy, not as the only score.`,
      },
      {
        q: "Is fasting safe with Belfast nightlife and winter routines?",
        a: `Fasting can work for some people, but late nights, alcohol, and poor sleep can trigger rebound eating. If you try it, keep protein and hydration steady and do not use fasting to compensate for binge cycles. If you use injections, read our [plateau guide](/helpful-guides/mounjaro-weight-loss-plateau) when progress slows.`,
      },
      {
        q: "Do tracking apps really help?",
        a: `They can improve awareness and adherence when used as feedback rather than judgement. Pair tracking with movement and a food plan. If you are comparing clinics, read [our methodology](/methodology) so you evaluate follow up, eligibility checks, and support.`,
      },
      {
        q: "What causes winter weight gain in Belfast?",
        a: `Comfort foods, shorter days, and lower steps are common drivers. Use indoor strength sessions, planned meals, and short daylight walks to protect consistency. Build routines that survive dark evenings rather than perfect plans that collapse.`,
      },
    ];
  }

  if (loc.slug === "birmingham") {
    return [
      {
        q: "What is the most successful weight loss treatment in Birmingham?",
        a: `Many people do best with a layered plan: a repeatable calorie deficit, strength and walking, and medical support when appropriate. Start with [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk), then read [Mounjaro](/what-is-mounjaro), [Wegovy](/what-is-wegovy), and [Saxenda](/what-is-saxenda). Compare costs via [Mounjaro prices](/mounjaro-price-comparison), [Wegovy prices](/wegovy-price-comparison), and [Saxenda prices](/saxenda-price-comparison).`,
      },
      {
        q: "Are injections safe long term?",
        a: `They can be effective for some people, but they still need monitoring for side effects and suitability. Read [what Wegovy is](/what-is-wegovy) and [what Mounjaro is](/what-is-mounjaro), then judge providers using [our methodology](/methodology) rather than adverts.`,
      },
      {
        q: "What is the best weight loss aid in the UK?",
        a: `There is no single best for everyone, but evidence supports certain medicines for eligible people alongside lifestyle changes. Our [UK comparator](/compare/best-weight-loss-treatments-uk) maps options and what to check before you pay.`,
      },
      {
        q: "What is the 3 3 3 rule for losing weight?",
        a: `People use it as a simple structure, such as three meals a day, a daily water target, and a short walk. It can help as a routine, but it is light on clinical evidence. If you want a more evidence based baseline, start with a calorie deficit, protein, and regular movement.`,
      },
      {
        q: "How long are Birmingham NHS wait times for weight services?",
        a: `They vary by service and eligibility. Many routes begin with lifestyle and dietitian support, and specialist options may have capacity limits. If you consider private routes, compare follow up and safety using [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk).`,
      },
      {
        q: "What should I do if I plateau?",
        a: `Plateaus are normal. Adjust one lever at a time, such as steps, portions, protein, or sleep. If you use injections, read our [plateau guide](/helpful-guides/mounjaro-weight-loss-plateau) before you chase dose changes alone.`,
      },
    ];
  }

  if (loc.slug === "blackburn") {
    return [
      {
        q: "How did Kelly Clarkson lose weight so quickly?",
        a: `Media reports often point to GLP 1 class medicines plus diet and activity changes, but you cannot safely copy celebrity timelines. If you are considering medicines, start with [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk), then read [what Wegovy is](/what-is-wegovy) and [what Mounjaro is](/what-is-mounjaro) so you focus on monitoring and follow up, not hype.`,
      },
      {
        q: "What is the 3 3 3 rule for weight loss?",
        a: `People describe it as three meals per day, a daily water target, and a short walk. It can help as simple structure, but evidence is lighter than for a repeatable calorie deficit plus strength and walking. Use it as a routine, not a rigid rule.`,
      },
      {
        q: "What is the most successful weight loss pill in the UK?",
        a: `There is no single winner for everyone. In UK discussions, many people compare tirzepatide and semaglutide based options, but eligibility, side effects, and follow up matter more than rankings. Read [Mounjaro](/what-is-mounjaro) and [Wegovy](/what-is-wegovy), then compare ongoing costs on [Mounjaro prices](/mounjaro-price-comparison) and [Wegovy prices](/wegovy-price-comparison).`,
      },
      {
        q: "What is the most successful weight loss treatment?",
        a: `For severe obesity, surgery can be effective but it requires lifelong follow up and nutrition monitoring. For many people, medically supervised medicines plus lifestyle changes offer meaningful loss with less invasiveness. The practical goal is a safe plan you can sustain, not the fastest number.`,
      },
      {
        q: "Are injections safe for Blackburn locals?",
        a: `Potentially, under supervision. Gastrointestinal side effects are common, so monitoring and follow up matter. Start with [what Wegovy is](/what-is-wegovy) and [what Mounjaro is](/what-is-mounjaro), then use [our methodology](/methodology) to compare providers.`,
      },
      {
        q: "Do non surgical options like iLipo work?",
        a: `Some devices can reduce local fat thickness for selected candidates, but results vary and they do not replace energy balance. Treat them as add ons to food and movement, not a substitute. Ask clinics for realistic imaging and aftercare, and be wary of overpromises.`,
      },
    ];
  }

  if (loc.slug === "blackpool") {
    return [
      {
        q: "What is the most successful weight loss treatment in Blackpool?",
        a: `For many eligible people, prescription injections can drive meaningful average loss when supervised, especially when paired with food and movement habits. Start with [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk), then read [Mounjaro](/what-is-mounjaro) and [Wegovy](/what-is-wegovy). Compare ongoing costs using [Mounjaro prices](/mounjaro-price-comparison) and [Wegovy prices](/wegovy-price-comparison).`,
      },
      {
        q: "How did Kelly Clarkson lose weight so quickly?",
        a: `Reports often mention medication plus lifestyle changes, but celebrity timelines do not translate safely to everyone in Blackpool. If you are considering medicines, focus on eligibility, side effects, and follow up. Start with [what Wegovy is](/what-is-wegovy) and [our methodology](/methodology).`,
      },
      {
        q: "What is the weight management service in Blackpool?",
        a: `NHS routes usually begin via your GP and may include tiered support, assessments, dietitian input, and specialist referral for eligible people. Availability and waiting times vary. If you compare private routes, use [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk) to evaluate safety and follow up, not just speed.`,
      },
      {
        q: "How can I lose 20 kg in 5 months safely?",
        a: `That pace can be risky for some people. A safer approach is to set a realistic deficit, increase weekly movement, and monitor health markers with a clinician. If you are trying for faster loss, medical oversight matters. Our [BMI calculator](/tools/bmi-calculator) can be a screening tool, not a decision on its own.`,
      },
      {
        q: "Are injections safe for Blackpool residents?",
        a: `They can be safe for eligible people under supervision, but nausea and other side effects are common. Read [what Mounjaro is](/what-is-mounjaro) and [what Wegovy is](/what-is-wegovy), then compare providers using [our methodology](/methodology).`,
      },
      {
        q: "What are the best beach walks for fat loss?",
        a: `Promenade walks are effective when you make them routine. Aim near 150 minutes of moderate activity weekly plus strength work. A brisk daily Promenade loop can add steps without needing a gym. Use our [plateau guide](/helpful-guides/mounjaro-weight-loss-plateau) if progress stalls and you are tempted to panic change plans.`,
      },
    ];
  }

  if (loc.slug === "bolton") {
    return [
      {
        q: "Most successful weight loss treatment?",
        a: `Many people do best with a layered plan: NHS behaviour support plus food structure, walking and strength, and medication for eligible people. Start with [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk), then read [what Wegovy is](/what-is-wegovy) and [what Mounjaro is](/what-is-mounjaro).`,
      },
      {
        q: "How to lose 5kg in 7 days?",
        a: `Rapid loss in a week is usually water and glycogen, and it can raise rebound risk. A safer target is about 0.5 to 1 kg per week with a repeatable calorie deficit, more steps, and sleep. If you want faster loss, medical oversight matters.`,
      },
      {
        q: "How did Kelly Clarkson lose her weight?",
        a: `Reports often mention medication plus lifestyle changes, but celebrity timelines do not translate safely to everyone. Focus on eligibility, side effects, and follow up, not speed.`,
      },
      {
        q: "Best weight loss aid UK?",
        a: `There is no single best for everyone. Evidence supports certain medicines for eligible people, but NHS behaviour services suit many people first. Use our [UK comparator](/compare/best-weight-loss-treatments-uk) to understand options and what to check before paying.`,
      },
      {
        q: "Free options in Bolton?",
        a: `Bolton residents may be offered local NHS and council supported services, including providers such as ABL Health for eligible referrals. Ask your GP or local service directory what is available now, since eligibility and capacity vary.`,
      },
      {
        q: "Medication side effects?",
        a: `Nausea and other gastrointestinal effects are common for some injections, so monitoring matters. Read [our methodology](/methodology) before choosing a provider, and make sure follow up is clear.`,
      },
    ];
  }

  if (loc.slug === "bournemouth") {
    return [
      {
        q: "Most successful weight loss treatment?",
        a: `For eligible people, injections can drive strong average loss in trials, but long term results usually improve when you add food structure, steps, and strength. Compare options in [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk), then read [what Wegovy is](/what-is-wegovy) and [what Mounjaro is](/what-is-mounjaro).`,
      },
      {
        q: "How did Kelly Clarkson lose weight so quickly?",
        a: `Reports often mention medication plus diet and activity changes. Treat celebrity stories as motivation, not a protocol. Focus on eligibility, side effects, and follow up, then use [our methodology](/methodology) to compare providers safely.`,
      },
      {
        q: "What is the 3 3 3 rule for losing weight?",
        a: `People describe it as a simple habit stack: a water target, several short walks, and vegetables each meal. It can help as structure, but a repeatable calorie deficit plus strength work has stronger evidence. Use the rule to build routine, not guilt.`,
      },
      {
        q: "Best weight loss aid in the UK?",
        a: `There is no single best for everyone, but evidence supports certain prescription medicines for eligible people. Start with [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk), then review [Wegovy](/what-is-wegovy) and costs on [Wegovy prices](/wegovy-price-comparison).`,
      },
      {
        q: "Injections safe for Bournemouth beachgoers?",
        a: `They can be safe for eligible people under supervision, but nausea and other gastrointestinal side effects are common. Read [what Wegovy is](/what-is-wegovy) and [what Mounjaro is](/what-is-mounjaro), then compare follow up standards using [our methodology](/methodology).`,
      },
      {
        q: "Beach workouts enough?",
        a: `Beach walks and pier circuits are a solid start. For better fat loss, add resistance training two or three times per week. If progress stalls, use our [plateau guide](/helpful-guides/mounjaro-weight-loss-plateau) before making big changes.`,
      },
      {
        q: "Meds vs natural methods?",
        a: `Medicines can accelerate early loss for eligible people, but habits protect maintenance. A hybrid plan usually wins: a sustainable food pattern, steps and strength, plus medication with monitoring if you qualify.`,
      },
      {
        q: "Holiday weight pitfalls?",
        a: `Tourist routines can add calories from alcohol and snack meals. Decide portions early, walk the pier daily, and keep protein at breakfast. Systems beat willpower when schedules shift.`,
      },
      {
        q: "Gut health role?",
        a: `Some studies explore microbiome and weight changes, but practical wins still come from calories, protein, fibre, and sleep. Fermented foods can be part of a balanced pattern, not a shortcut.`,
      },
      {
        q: "Long term med use?",
        a: `Some people stay on medicines for long periods, and stopping can lead to regain. If you ever taper, build habits first and plan monitoring with a clinician.`,
      },
    ];
  }

  if (loc.slug === "bradford") {
    return [
      {
        q: "Most successful treatment?",
        a: `For eligible people, medicines like [Wegovy](/what-is-wegovy) and [Mounjaro](/what-is-mounjaro) can drive large average loss in trials, but most people do better when medication is paired with food structure, steps, and strength. Start with [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk).`,
      },
      {
        q: "Lose 20kg in 5 months?",
        a: `It can be possible for some people, but steep deficits can increase rebound risk. A safer plan is clinician guided and focuses on a repeatable calorie deficit, higher daily steps, strength work, and sleep. Use our [BMI calculator](/tools/bmi-calculator) as a screening aid, not a diagnosis.`,
      },
      {
        q: "Top UK weight loss pill?",
        a: `Orlistat is a long standing option with modest average loss for some people and known gastrointestinal side effects. Many people now compare injection medicines, but eligibility and follow up matter more than rankings.`,
      },
      {
        q: "Kelly Clarkson quick loss?",
        a: `Reports often mention medication plus lifestyle changes, but celebrity stories do not translate safely to everyone. Focus on medical oversight and a plan you can keep.`,
      },
      {
        q: "Meds safe long term?",
        a: `Some people use medicines for long periods and stopping can lead to regain. Side effects are possible, so supervision and follow up matter. Use [our methodology](/methodology) to compare providers.`,
      },
      {
        q: "Local exercise spots?",
        a: `Moorland walks and park laps can add steps without a gym. Aim near 150 minutes of moderate activity weekly plus strength work, and keep it repeatable.`,
      },
      {
        q: "Diet for Curry Mile?",
        a: `You can keep flavour while controlling portions. Choose higher protein mains, add vegetables, and reduce bread and fried sides. Consistency beats perfection.`,
      },
      {
        q: "Beginner pitfalls?",
        a: `Over restriction can backfire. Start with moderate changes you can repeat for weeks, not days. If progress stalls, our [plateau guide](/helpful-guides/mounjaro-weight-loss-plateau) can help you troubleshoot calmly.`,
      },
      {
        q: "Tracking best practice?",
        a: `Use weekly weigh ins plus waist measurements and a simple food log. Apps help when they make patterns obvious, not when they punish you.`,
      },
      {
        q: "Winter motivation?",
        a: `Indoor classes, short home strength sessions, and group accountability can keep you moving when weather reduces moorland walks.`,
      },
    ];
  }

  if (loc.slug === "brighton-and-hove") {
    return [
      {
        q: "Most successful weight loss treatment?",
        a: `For eligible people, GLP 1 medicines can drive strong average loss, but results are usually best when you pair injections with food structure, steps, and strength. Start at [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk), then read [what Wegovy is](/what-is-wegovy) and [what Mounjaro is](/what-is-mounjaro).`,
      },
      {
        q: "How to lose 20kg in 5 months?",
        a: `Some people can do it, but it is aggressive and rebound risk can rise. A safer plan uses a repeatable calorie deficit, strength training, and clinician oversight if you use medicines. Use our [BMI calculator](/tools/bmi-calculator) as a screening tool, not a diagnosis.`,
      },
      {
        q: "Most successful weight loss pill in UK?",
        a: `There is no single winner for everyone. Orlistat is a long standing oral option with modest average loss for some people and known gastrointestinal side effects. Many people now compare injection medicines, but eligibility and follow up matter more than rankings.`,
      },
      {
        q: "How did Kelly Clarkson lose weight quickly?",
        a: `Reports often mention medication plus lifestyle changes. Treat celebrity stories as motivation, not a protocol. Focus on eligibility, side effects, and follow up.`,
      },
      {
        q: "Injections safe for Brighton active life?",
        a: `They can be safe for eligible people under supervision, but nausea and other gastrointestinal side effects are common. Compare provider standards with [our methodology](/methodology).`,
      },
      {
        q: "Beach workouts enough alone?",
        a: `Beach walking and volleyball help, but pairing movement with nutrition and two or three strength sessions weekly tends to improve results. If progress stalls, use our [plateau guide](/helpful-guides/mounjaro-weight-loss-plateau).`,
      },
    ];
  }

  if (loc.slug === "cambridge") {
    return [
      {
        q: "What is the most successful weight loss treatment?",
        a: `For eligible people, injection medicines can drive large average loss, but most people sustain results best when medication is paired with food structure, steps, and strength. Start with [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk), then read [what Wegovy is](/what-is-wegovy) and [what Mounjaro is](/what-is-mounjaro).`,
      },
      {
        q: "How much does a Cambridge weight plan cost?",
        a: `Costs vary by provider. Meal replacement programmes can be lower monthly cost, while private injections can be higher and may include follow up fees. Compare ongoing totals on [Wegovy prices](/wegovy-price-comparison) and [Mounjaro prices](/mounjaro-price-comparison).`,
      },
      {
        q: "How to lose weight fast on Cambridge Diet?",
        a: `Meal replacement plans can use shakes and structured portions. They can work quickly for some people when supervised, but they are not right for everyone. If you try a rapid plan, prioritise safety and follow up, not speed.`,
      },
      {
        q: "How did Kelly Clarkson lose weight so quickly?",
        a: `Reports often mention medication plus lifestyle changes, but celebrity stories do not translate safely to everyone. Focus on eligibility, side effects, and a plan you can keep.`,
      },
      {
        q: "Are injections safe for Cambridge locals?",
        a: `They can be safe for eligible people under supervision, but nausea and other gastrointestinal side effects are common. Compare provider standards using [our methodology](/methodology).`,
      },
      {
        q: "NHS vs private in Cambs?",
        a: `NHS routes can be free for eligible people but waiting times and criteria vary. Private routes can be faster but cost more. Use [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk) to compare safety, follow up, and total cost.`,
      },
    ];
  }

  if (loc.slug === "bangor-northern-ireland") {
    return [
      {
        q: "What’s the ideal diet for Bangor coastal life?",
        a: `Seafood-forward, calorie-aware patterns often fit harbour-town routines—grilled oily fish, vegetables, and portions you can repeat midweek without “starting again Monday.” Evidence on omega-rich patterns and adiposity is mixed at population level, but the bigger win is usually a deficit you can sustain. Map how that sits next to prescription options via our [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk) hub, then read [Mounjaro](/what-is-mounjaro), [Wegovy](/what-is-wegovy), and [Saxenda](/what-is-saxenda) if a clinician mentions them. Budgeting? Compare [Mounjaro](/mounjaro-price-comparison), [Wegovy](/wegovy-price-comparison), and [Saxenda](/saxenda-price-comparison) totals.`,
      },
      {
        q: "What’s the minimum exercise for Bangor weight loss?",
        a: `Public-health baselines still centre on roughly **150 minutes** of moderate activity weekly, plus strength work—walking the prom, coastal path loops, and marina circuits all count. Use our [BMI calculator](/tools/bmi-calculator) as a screening aid alongside waist circumference and energy levels, not as the only scorecard.`,
      },
      {
        q: "How effective is fat freezing in Northern Ireland?",
        a: `Cryolipolysis and similar devices can reduce **local** fat thickness for suitable candidates; they are not a substitute for overall energy balance. Results depend on device, operator, and aftercare. If you are also weighing GLP-1 options, compare mechanisms first ([Mounjaro](/what-is-mounjaro), [Wegovy](/what-is-wegovy), [Saxenda](/what-is-saxenda)) and costs ([Mounjaro prices](/mounjaro-price-comparison), [Wegovy prices](/wegovy-price-comparison), [Saxenda prices](/saxenda-price-comparison)).`,
      },
      {
        q: "What role does sleep play in slimming around Bangor?",
        a: `Short sleep tends to nudge hunger, impulsivity, and skipped movement—bad news beside pub-heavy weekends or long Belfast commutes. Aim toward **7–9 hours** where life allows; if weight stalls on injections, our [plateau guide](/helpful-guides/mounjaro-weight-loss-plateau) explains common non-mystery causes.`,
      },
      {
        q: "How should I handle pub temptations?",
        a: `Pre-decide drinks and snacks, eat a protein-rich meal beforehand, and log choices without moralising—habit evidence favours systems over willpower theatre. For prescription context, keep [our methodology](/methodology) in mind: compare follow-up, not just headlines.`,
      },
      {
        q: "Are apps enough on their own?",
        a: `They can sharpen awareness, but most people still need real-world movement and a food environment that makes the deficit plausible. Pair apps with walking the coast and structured medical support if you qualify—start from [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk) when you want the full comparator view.`,
      },
    ];
  }

  if (loc.slug === "bangor-wales") {
    return [
      {
        q: "What is the top diet for Bangor hikers?",
        a: `Protein forward meals with Welsh lamb, leeks, and vegetables you can repeat after a trail day usually beat weekend only rules. See how food habits pair with medicines in our [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk) overview, then read [Mounjaro](/what-is-mounjaro), [Wegovy](/what-is-wegovy), and [Saxenda](/what-is-saxenda) if a clinician brings them up. Compare costs on [Mounjaro prices](/mounjaro-price-comparison), [Wegovy prices](/wegovy-price-comparison), and [Saxenda prices](/saxenda-price-comparison).`,
      },
      {
        q: "What is the exercise minimum in Bangor?",
        a: `Most adults still aim near **150 minutes** of moderate activity weekly plus strength work. Snowdonia access makes walks feel like leisure; use our [BMI calculator](/tools/bmi-calculator) as a screening aid alongside waist size and energy on the hills.`,
      },
      {
        q: "Are cryo style treatments viable in North Wales?",
        a: `They may reduce **local** fat thickness for suitable candidates but will not replace overall energy balance. Ask clinics for realistic imaging and aftercare. If you also weigh GLP 1 options, compare [Mounjaro](/what-is-mounjaro), [Wegovy](/what-is-wegovy), and [Saxenda](/what-is-saxenda), then budgets via [Mounjaro](/mounjaro-price-comparison), [Wegovy](/wegovy-price-comparison), and [Saxenda](/saxenda-price-comparison).`,
      },
      {
        q: "How does stress affect weight goals here?",
        a: `Exam seasons, shift work, and hospitality hours nudge late snacking and short sleep. Skills like planning meals, sleep regularity, and compassionate logging help. If injections stall, read our [plateau guide](/helpful-guides/mounjaro-weight-loss-plateau) before you change dose alone.`,
      },
      {
        q: "What home workouts help on rainy Welsh days?",
        a: `Short circuits with squats, lunges, push ups, and carries need little kit. Pair indoor work with a dry window walk when you can. For delivery practicalities on pens, bookmark [Mounjaro delivery and storage](/helpful-guides/mounjaro-delivery-storage-uk).`,
      },
      {
        q: "Are tracking tools worth using?",
        a: `Often yes when they support habits rather than shame. Pair apps with real steps and structured medical follow up if you qualify. Start from [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk) when you want the full comparator picture, and read [our methodology](/methodology) for how we review providers.`,
      },
    ];
  }

  if (loc.slug === "basildon") {
    return [
      {
        q: "What are the best eats for Basildon commuters?",
        a: `Market vegetables and lean protein, batch cooked grains, and repeat weekday lunches beat station grab bags most weeks. See how habits pair with medicines in [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk), then read [Mounjaro](/what-is-mounjaro), [Wegovy](/what-is-wegovy), and [Saxenda](/what-is-saxenda) if your clinician mentions them. Compare costs via [Mounjaro prices](/mounjaro-price-comparison), [Wegovy prices](/wegovy-price-comparison), and [Saxenda prices](/saxenda-price-comparison).`,
      },
      {
        q: "What is the exercise baseline in Basildon?",
        a: `Aim near **150 minutes** of moderate activity weekly plus strength work. Park loops, Wat Tyler paths, and station walks all count. Use our [BMI calculator](/tools/bmi-calculator) as a screening aid with waist size, not as the only score.`,
      },
      {
        q: "How effective is fat reduction tech?",
        a: `Devices may trim **local** fat for suitable candidates but will not replace overall habits. Ask for realistic imaging and aftercare. If you also weigh GLP 1 options, compare [Mounjaro](/what-is-mounjaro), [Wegovy](/what-is-wegovy), and [Saxenda](/what-is-saxenda) plus [Mounjaro](/mounjaro-price-comparison), [Wegovy](/wegovy-price-comparison), and [Saxenda](/saxenda-price-comparison) budgets.`,
      },
      {
        q: "How important is sleep for weight loss here?",
        a: `Very. Short sleep nudges hunger and skipped movement, which hurts commuters hardest. If progress stalls on injections, read our [plateau guide](/helpful-guides/mounjaro-weight-loss-plateau) before you chase dose changes alone.`,
      },
      {
        q: "How do I beat takeaway traps?",
        a: `Meal prep, protein first dinners, and a boringly repeatable shopping list beat willpower at 9pm. Pair systems with [our methodology](/methodology) when comparing online clinics.`,
      },
      {
        q: "Should I go solo or join a group?",
        a: `Either works; groups add accountability for many people. Start from [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk) when you want the full comparator view, then add community walks or apps that reward consistency, not shame.`,
      },
    ];
  }

  if (loc.slug === "bath") {
    return [
      {
        q: "What is the prime plan for Bath foodies?",
        a: `Veggie forward plates with Somerset dairy or lean protein, sensible portions near the abbey, and repeat weekday breakfasts beat tourist only discipline. Map habits beside medicines via [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk), then read [Mounjaro](/what-is-mounjaro), [Wegovy](/what-is-wegovy), and [Saxenda](/what-is-saxenda). Compare [Mounjaro prices](/mounjaro-price-comparison), [Wegovy prices](/wegovy-price-comparison), and [Saxenda prices](/saxenda-price-comparison).`,
      },
      {
        q: "What are the motion musts in Bath?",
        a: `Aim near **150 minutes** of moderate weekly activity plus strength work. Hills around Pulteney and Lansdown make easy NEAT if you build loops. Use our [BMI calculator](/tools/bmi-calculator) with waist size, not vanity alone.`,
      },
      {
        q: "What results can cooling tech give?",
        a: `Cryolipolysis style devices may trim **local** fat for suitable candidates; marketing percentages need consent context. Pair any device with food and sleep basics. If you weigh GLP 1 options, compare [Mounjaro](/what-is-mounjaro), [Wegovy](/what-is-wegovy), and [Saxenda](/what-is-saxenda) plus price pages.`,
      },
      {
        q: "Does hydration really matter for weight loss?",
        a: `It supports energy, training quality, and mistaking thirst for hunger less often. It is not a magic calorie eraser. For fair provider reviews read [our methodology](/methodology).`,
      },
      {
        q: "How do I handle social eating in Bath?",
        a: `Pre choose portions, prioritise protein and vegetables, and enjoy buns or puddings as planned joys rather than sneak cycles. Flexible planning beats shame logging.`,
      },
      {
        q: "Do mindful practices help slimming here?",
        a: `They can support adherence when paired with food skills and sleep. If injections stall, read our [plateau guide](/helpful-guides/mounjaro-weight-loss-plateau) before dose chasing.`,
      },
    ];
  }

  const { name, nation } = loc;
  const icbOrBoard =
    nation === "England"
      ? "your integrated care board (ICB)"
      : nation === "Northern Ireland"
        ? "HSC structures"
        : "your health board";

  return [
    {
      q: `What counts as the “best” weight loss treatment if you live in ${name}?`,
      a: `There isn’t a single winner on a chart. For some people in ${name}, the strongest option will still be an NHS dietitian-led programme with no injection at all. For others—after assessment—GLP-1-class medicines may become appropriate: tirzepatide ([Mounjaro](/what-is-mounjaro)), semaglutide ([Wegovy](/what-is-wegovy)), or liraglutide ([Saxenda](/what-is-saxenda)), but only where monitoring exists. Compare indicative monthly totals on our [Mounjaro price comparison](/mounjaro-price-comparison), [Wegovy price comparison](/wegovy-price-comparison), and [Saxenda price comparison](/saxenda-price-comparison). “Best” should probably mean “safest fit for you this year,” not “trendiest molecule.”`,
    },
    {
      q: `Could I get Mounjaro, Wegovy, or Saxenda without going through my GP in ${name}?`,
      a: `You might, through a private prescriber or a GPhC-registered online clinic, if you meet their clinical criteria—that can apply to [Mounjaro](/what-is-mounjaro), [Wegovy](/what-is-wegovy), or [Saxenda](/what-is-saxenda) where appropriate. That route can be faster on paper; it can also leave your GP surgery out of the loop unless you explicitly ask for shared care, which many practices will not agree to. On the NHS side, access often stays narrower than social media suggests, and ${icbOrBoard} may apply its own criteria on top of national guidance. If you are weighing costs, start with our [Mounjaro price comparison](/mounjaro-price-comparison), [Wegovy price comparison](/wegovy-price-comparison), and [Saxenda price comparison](/saxenda-price-comparison).`,
    },
    {
      q: `Is NHS weight management in ${nation} actually realistic for ${name} residents?`,
      a: `It can be, but it isn’t guaranteed. Services might be oversubscribed, or they might insist on documented lifestyle steps first. If you are told to wait, that delay doesn’t automatically mean private treatment is “necessary”—it may simply reflect capacity. You should be able to ask what the next milestone is, in writing if you want clarity.`,
    },
    {
      q: `What would I need to check before paying for an online clinic that ships to ${name}?`,
      a: `At minimum: the prescriber’s professional registration, the pharmacy’s GPhC registration, a clear titration plan, and a written policy for nausea, dehydration, or missed doses. You cannot safely infer quality from Instagram ads alone. If a website won’t name its superintendent pharmacist, that alone might be reason to pause.`,
    },
    {
      q: `Why do search results around ${name} mention “cheap” GLP-1s?`,
      a: `Price is visible; clinical risk is harder to google. A low headline fee might exclude follow-up, or it might bundle blood tests you do not need. We tend to treat “cheap” as a signal to read the small print, not as proof of value. Comparing monthly totals—including repeats and delivery—usually paints a fairer picture for households in ${name}; try our [Mounjaro price comparison](/mounjaro-price-comparison), [Wegovy price comparison](/wegovy-price-comparison), and [Saxenda price comparison](/saxenda-price-comparison).`,
    },
    {
      q: `Where should scepticism go—not cynicism, just healthy doubt?`,
      a: `Toward any claim that a single injection removes the need for food planning forever, or that BMI thresholds are “flexible” without documentation. UK regulators have repeatedly warned consumers about unlicensed products; if a seller cannot show an MHRA-style UK supply chain for a prescription-only medicine, you should probably walk away regardless of how local they claim to be to ${name}.`,
    },
  ];
}

export const UK_LOCATION_SOURCES: { label: string; href: string; note: string }[] = [
  {
    label: "NHS — healthy weight overview",
    href: "https://www.nhs.uk/live-well/healthy-weight/",
    note: "Public-facing lifestyle and weight management context.",
  },
  {
    label: "NICE NG246 — overweight and obesity management",
    href: "https://www.nice.org.uk/guidance/ng246",
    note: "National guidance that may influence local formularies; not a substitute for your clinician.",
  },
  {
    label: "MHRA",
    href: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
    note: "UK medicines regulator; useful background on alerts and licensed products.",
  },
  {
    label: "General Pharmaceutical Council (GPhC)",
    href: "https://www.pharmacyregulation.org/",
    note: "Use their register tools to confirm a UK pharmacy before you pay.",
  },
];

export function locationFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: faqAnswerPlain(a) },
    })),
  };
}
