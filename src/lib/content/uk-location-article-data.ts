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
  if (loc.slug === "canterbury") {
    return "Best Weight Loss Treatment Canterbury: Kent's Top Evidence Based Strategies";
  }
  if (loc.slug === "cardiff") {
    return "Best Weight Loss Treatment Cardiff: Top Options Including Mounjaro and Wegovy in 2026";
  }
  if (loc.slug === "carlisle") {
    return "Best Weight Loss Treatment Carlisle: Cumbria's Path to Proven Slimming";
  }
  if (loc.slug === "chelmsford") {
    return "Best Weight Loss Treatment Chelmsford: Essex Guide to Proven Slimming";
  }
  if (loc.slug === "chester") {
    return "Best Weight Loss Treatment Chester: Walls Walks and Evidence Based Options";
  }
  if (loc.slug === "chichester") {
    return "Best Weight Loss Treatment Chichester: West Sussex Guide to Effective Slimming";
  }
  if (loc.slug === "colchester") {
    return "Best Weight Loss Treatment Colchester: Essex's Top Evidence Backed Options";
  }
  if (loc.slug === "coventry") {
    return "Best Weight Loss Treatment Coventry: West Midlands Guide to Effective Slimming";
  }
  if (loc.slug === "craigavon") {
    return "Best Weight Loss Treatment Craigavon: Northern Ireland Options Explained";
  }
  if (loc.slug === "crawley") {
    return "Best Weight Loss Treatment Crawley: Sussex Strategies and Insights";
  }
  if (loc.slug === "cumbernauld") {
    return "Best Weight Loss Treatment Cumbernauld: Top Scotland Strategies for North Lanarkshire";
  }
  if (loc.slug === "derby") {
    return "Best Weight Loss Treatment Derby: Non Surgical Insights for Derbyshire";
  }
  if (loc.slug === "doncaster") {
    return "Best Weight Loss Treatment Doncaster: Yorkshire Strategies for Real Results";
  }
  if (loc.slug === "dundee") {
    return "Best Weight Loss Treatment Dundee: Top Options Including Mounjaro, Wegovy & Local Strategies";
  }
  if (loc.slug === "dunfermline") {
    return "Best Weight Loss Treatment Dunfermline: Fife's Top Evidence Based Options";
  }
  if (loc.slug === "durham") {
    return "Best Weight Loss Treatment Durham: North East UK Guide to Real Results";
  }
  if (loc.slug === "east-kilbride") {
    return "Best Weight Loss Treatment East Kilbride: Practical Scotland Access Guide";
  }
  if (loc.slug === "edinburgh") {
    return "Best Weight Loss Treatment Edinburgh: NHS and Practical Pathways";
  }
  if (loc.slug === "ely") {
    return "Best Weight Loss Treatment Ely: Cambridgeshire's Complete Weight Loss Roadmap";
  }
  if (loc.slug === "exeter") {
    return "Best Weight Loss Treatment Exeter: Devon Access Roadmap";
  }
  if (loc.slug === "glasgow") {
    return "Best Weight Loss Treatment Glasgow: NHS and Private Pathways Explained";
  }
  if (loc.slug === "gloucester") {
    return "Best Weight Loss Treatment Gloucester: Gloucestershire Access Guide";
  }
  if (loc.slug === "hereford") {
    return "Best Weight Loss Treatment Hereford: NHS and Local Access Guide";
  }
  if (loc.slug === "huddersfield") {
    return "Best Weight Loss Treatment Huddersfield: Yorkshire Access & Strategies Guide";
  }
  if (loc.slug === "inverness") {
    return "Best Weight Loss Treatment Inverness: Highland Scotland Weight Loss Reality";
  }
  if (loc.slug === "kingston-upon-hull") {
    return "Best Weight Loss Treatment Hull: Humber Side Access and Strategies";
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
  if (loc.slug === "canterbury") {
    return "Best weight loss treatment Canterbury: Kent insights on GLP 1 medicines like Mounjaro and Wegovy, cryolipolysis, plus local tips for sustainable fat reduction in the UK.";
  }
  if (loc.slug === "cardiff") {
    return "Best weight loss treatment Cardiff 2026: Mounjaro and Wegovy options, evidence, and local tips for fast, safe fat loss in Wales.";
  }
  if (loc.slug === "carlisle") {
    return "Best weight loss treatment Carlisle: Lake District tips, non surgical insights, and proven fat loss for North West UK.";
  }
  if (loc.slug === "chelmsford") {
    return "Best weight loss treatment Chelmsford: Essex options like injections (Wegovy, Mounjaro), laser lipo, surgery, pros, cons, costs, success rates revealed.";
  }
  if (loc.slug === "chester") {
    return "Best weight loss treatment Chester: evidence on Mounjaro and Wegovy, Cheshire walking routines, and safe UK tips for sustainable fat loss.";
  }
  if (loc.slug === "chichester") {
    return "Best weight loss treatment Chichester: West Sussex options like Wegovy and Mounjaro, clinic context, and local tips for safe, sustainable fat loss.";
  }
  if (loc.slug === "colchester") {
    return "Best weight loss treatment Colchester: top options like Mounjaro, Wegovy, fat freezing, Essex clinic context, costs, and results explained.";
  }
  if (loc.slug === "coventry") {
    return "Best weight loss treatment Coventry: top UK medications, NHS options, surgical insights, and local West Midlands strategies for real results.";
  }
  if (loc.slug === "craigavon") {
    return "Best weight loss treatment Craigavon: doctor led options, Mounjaro and Wegovy insights, NHS facts, and Northern Ireland tips for safe fat loss.";
  }
  if (loc.slug === "crawley") {
    return "Best weight loss treatments Crawley: injections like Wegovy and Mounjaro via private clinics, cryolipolysis options, plus evidence based tips for sustainable Sussex slimming.";
  }
  if (loc.slug === "cumbernauld") {
    return "Best weight loss treatment Cumbernauld: Scotland options like Saxenda and CoolSculpting, NHS programs, costs, eligibility, and local tips for North Lanarkshire.";
  }
  if (loc.slug === "derby") {
    return "Best weight loss treatment Derby: non surgical options like Mounjaro and Wegovy, Derby clinic insights, and safe fat loss strategies for lasting results.";
  }
  if (loc.slug === "doncaster") {
    return "Top weight loss treatments Doncaster: injections like Mounjaro and Wegovy, clinic insights, Yorkshire tips for fast, sustainable fat loss UK.";
  }
  if (loc.slug === "dundee") {
    return "Best weight loss treatment Dundee: explore Mounjaro, Wegovy options, clinic insights, and Tay side tips for sustainable slimming in Scotland.";
  }
  if (loc.slug === "dunfermline") {
    return "Best weight loss treatment Dunfermline: Fife insights on injections like Mounjaro, programs, and evidence based tips for sustainable slimming Scotland.";
  }
  if (loc.slug === "durham") {
    return "Best weight loss treatment Durham UK: evidence based tips, local hacks, timelines for 5kg and 20kg loss, and UK insights for County Durham slimming.";
  }
  if (loc.slug === "east-kilbride") {
    return "Best weight loss treatment East Kilbride: NHS and private access guide, GLP 1 tips (Mounjaro, Wegovy, Saxenda), timelines, and local Scotland hacks for safe slimming.";
  }
  if (loc.slug === "edinburgh") {
    return "Best weight loss treatment Edinburgh: NHS Lothian programs, Mounjaro and Wegovy access, 10kg timelines, Ozempic reality, complete Scotland guide.";
  }
  if (loc.slug === "ely") {
    return "Best weight loss treatment Ely: NHS Healthy You guide, Wegovy and Mounjaro access, timelines, Chinese methods, Kelly Clarkson tips, Cambridgeshire slimming made simple.";
  }
  if (loc.slug === "exeter") {
    return "Best weight loss treatment Exeter: NHS Devon tiers, private clinic guide, Mounjaro and Wegovy access, Adele methods, and Devon slimming timelines.";
  }
  if (loc.slug === "glasgow") {
    return "Best weight loss treatment Glasgow: NHSGGC programs, Mounjaro and Wegovy costs, Kelly Clarkson method, cheaper alternatives, plus a local Scotland slimming guide.";
  }
  if (loc.slug === "gloucester") {
    return "Best weight loss treatment Gloucester: NHS Healthy Lifestyles (free), GLP 1 access, Mounjaro and Wegovy timelines, Kelly Clarkson insights, and Gloucestershire slimming hacks.";
  }
  if (loc.slug === "hereford") {
    return "Best weight loss treatment Hereford: NHS lifestyle programs, referral options, and private injection access explained for Herefordshire.";
  }
  if (loc.slug === "huddersfield") {
    return "Best weight loss treatment Huddersfield: NHS Kirklees programs, bariatric options, GLP 1 access, timelines and local Yorkshire hacks for safe, sustainable slimming.";
  }
  if (loc.slug === "inverness") {
    return "Best weight loss treatment Inverness: NHS Highland programs, private GLP 1 access, local trails, and proven timelines for Highland slimming success.";
  }
  if (loc.slug === "kingston-upon-hull") {
    return "Best weight loss treatment Hull: Humber access, CHCP specialist routes, GLP 1 options, and practical timelines for safe, sustainable slimming.";
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

  if (loc.slug === "canterbury") {
    return [
      {
        q: "What is the most successful weight loss treatment?",
        a: `GLP 1 medicines like [Wegovy](/what-is-wegovy) and [Mounjaro](/what-is-mounjaro) can drive strong average loss for eligible people, but supervised use with habits helps sustainability. See [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk) to compare options.`,
      },
      {
        q: "What is the alternative to Ozempic in New Zealand?",
        a: `Similar semaglutide options may be available via local routes, and some people compare alternatives such as liraglutide or oral semaglutide depending on approvals. Always check official New Zealand regulations on [Medsafe](https://www.medsafe.govt.nz).`,
      },
      {
        q: "How did Kelly Clarkson lose weight so quickly?",
        a: `Reports often mention GLP 1 medicines, plus diet and exercise, and she has referenced medical guidance. Rapid change can be monitored and individual results vary. A media summary is available at [People](https://people.com).`,
      },
      {
        q: "What is the 3 3 3 rule for weight loss?",
        a: `Eat three meals per day, three hours apart, under three handfuls per meal. It may help portion control, but it is not a substitute for a repeatable calorie deficit and regular movement. Background reading is available at [Intuitive Eating](https://www.intuitiveeating.org).`,
      },
      {
        q: "Are Canterbury GLP 1 medicines safe long term?",
        a: `They can be promising, but monitor gastrointestinal side effects and follow up closely. Ongoing outcomes studies exist, including large cardiovascular outcome studies such as SELECT. If you compare providers, use [our methodology](/methodology).`,
      },
      {
        q: "Best free local exercise for fat loss?",
        a: `Cathedral loops and riverside walks can help you hit around 150 minutes per week. Add strength work for better long term maintenance.`,
      },
    ];
  }

  if (loc.slug === "cardiff") {
    return [
      {
        q: "Most successful weight loss treatment?",
        a: `Many 2026 discussions highlight tirzepatide and semaglutide based injections for eligible people, but the best results usually come with medical supervision plus repeatable food and movement habits. Start with [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk), then read [what Mounjaro is](/what-is-mounjaro) and [what Wegovy is](/what-is-wegovy).`,
      },
      {
        q: "Where can I get Mounjaro in Cardiff?",
        a: `People often look at private clinics and pharmacies for quicker access than NHS waiting times. If you use a private route, prioritise registration, cold chain delivery, and follow up. Use [how we verify UK pharmacies](/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards) and [our methodology](/methodology) before you pay.`,
      },
      {
        q: "Can I lose 10kg in 2 months with Ozempic?",
        a: `It can be possible for some people early on, but results vary widely by dose, adherence, and side effects. It is not guaranteed and medical oversight matters. Focus on a safe deficit, steps, and strength alongside medication when eligible.`,
      },
      {
        q: "Best UK weight loss medication?",
        a: `There is no single best for everyone, but efficacy rankings often put tirzepatide and semaglutide near the top for eligible people. Compare options and ongoing costs on [Mounjaro prices](/mounjaro-price-comparison) and [Wegovy prices](/wegovy-price-comparison).`,
      },
      {
        q: "NHS vs private in Cardiff?",
        a: `NHS routes can be lower cost but criteria and waiting times vary. Private routes can be quicker but pricier. Use the [UK comparator](/compare/best-weight-loss-treatments-uk) to compare safety and follow up, not just speed.`,
      },
      {
        q: "Side effects of Wegovy?",
        a: `Nausea is common for some people, especially early. Other gastrointestinal effects can occur, so monitoring matters. Read [what Wegovy is](/what-is-wegovy) and compare providers using [our methodology](/methodology).`,
      },
    ];
  }

  if (loc.slug === "carlisle") {
    return [
      {
        q: "What is the most successful weight loss treatment?",
        a: `Sustainable lifestyle shifts often lead long term outcomes, and medicines can add extra loss for eligible people when supervised. Start with [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk), then read [what Mounjaro is](/what-is-mounjaro) and [what Wegovy is](/what-is-wegovy).`,
      },
      {
        q: "How did Kelly Clarkson lose weight so quickly?",
        a: `Media reports often mention GLP 1 medicines plus lifestyle changes, and she has referenced medical guidance. Treat celebrity stories as motivation, not a protocol. Focus on eligibility, side effects, and follow up.`,
      },
      {
        q: "How to lose 20 kg in 5 months?",
        a: `Some people can do it with an aggressive deficit and consistent training, but rebound risk can rise. Aim for a safe, repeatable plan and clinician oversight if you use medication. Use our [BMI calculator](/tools/bmi-calculator) as a screening tool, not a diagnosis.`,
      },
      {
        q: "What is the 3 3 3 rule for losing weight?",
        a: `People describe it as a simple routine combining hydration, walking, and vegetables. It can help as structure, but it is not a substitute for a repeatable calorie deficit plus strength and walking. Use it to build routine, not guilt.`,
      },
      {
        q: "Non surgical options for Carlisle fat loss?",
        a: `Some clinics discuss cryolipolysis, ultrasound, and radiofrequency for local fat thickness and skin firmness. Results vary and these tools do not replace energy balance. Treat them as add ons to food and movement.`,
      },
      {
        q: "Winter motivation in Cumbria?",
        a: `Use indoor sessions when weather is harsh, keep walks short and consistent, and plan meals earlier in the day. Group accountability can help when daylight is low.`,
      },
    ];
  }

  if (loc.slug === "chelmsford") {
    return [
      {
        q: "Most successful weight loss treatment?",
        a: `For many people, lifestyle changes sustain long term results, while medicines can add extra loss for eligible people when supervised. Start with [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk), then read [what Wegovy is](/what-is-wegovy) and [what Mounjaro is](/what-is-mounjaro).`,
      },
      {
        q: "Weight loss injections cost UK?",
        a: `Costs vary by provider and follow up. Many people compare ongoing totals using [Wegovy prices](/wegovy-price-comparison) and [Mounjaro prices](/mounjaro-price-comparison), rather than a single monthly headline.`,
      },
      {
        q: "How did Kelly Clarkson lose weight?",
        a: `Reports often mention medication plus diet and exercise changes. Treat celebrity stories as motivation, not a protocol. Focus on eligibility, side effects, and follow up.`,
      },
      {
        q: "What is the 3 3 3 rule for weight loss?",
        a: `People describe it as a simple routine around meals, water, and daily walking. It can help as structure, but it is not a substitute for a repeatable calorie deficit plus strength and walking.`,
      },
      {
        q: "Are Chelmsford fat injections safe?",
        a: `Some clinics offer fat dissolving injections for small areas, but suitability and side effects vary. Treat it as a medical procedure and prioritise assessment and aftercare.`,
      },
      {
        q: "Laser lipo vs surgery in Essex?",
        a: `Non surgical options can target local fat thickness and recovery is usually easier, while surgery can produce much larger total loss but with higher risk and lifelong commitments. If you are comparing routes, use [our methodology](/methodology) and consider NHS guidance for eligibility.`,
      },
    ];
  }

  if (loc.slug === "chester") {
    return [
      {
        q: "What’s the most successful weight loss treatment?",
        a: `For eligible people, injection medicines can drive large average loss in trials, but long term sustainability usually improves when you pair treatment with food structure, steps, and strength. Start with [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk), then read [what Mounjaro is](/what-is-mounjaro) and [what Wegovy is](/what-is-wegovy).`,
      },
      {
        q: "How to lose 20kg in 5 months realistically?",
        a: `It can be possible for some people with a steep deficit and consistent training, but it is hard and plateaus are common. For safety, focus on a repeatable plan and consider clinician oversight. Use our [BMI calculator](/tools/bmi-calculator) as a screening tool, not a diagnosis.`,
      },
      {
        q: "How did Kelly Clarkson really lose her weight?",
        a: `Reports often mention semaglutide plus diet and walking changes. Treat celebrity stories as motivation, not a protocol. Focus on eligibility and follow up.`,
      },
      {
        q: "What’s the 3 3 3 rule for losing weight?",
        a: `People describe it as three higher protein meals, a daily water target, and a daily walk. It can help as structure, but it is not a substitute for a calorie deficit plus strength and walking.`,
      },
      {
        q: "Can Chester walls walks alone suffice?",
        a: `They are a great start and can add steps consistently. Most evidence still favours a combined plan that includes nutrition changes and some strength training for best results.`,
      },
      {
        q: "Injections side effects worth it?",
        a: `Nausea and other gastrointestinal issues are common early for some people, while average loss can be meaningful for eligible people. The decision should include eligibility, side effects, and follow up quality. Use [our methodology](/methodology) to compare providers.`,
      },
    ];
  }

  if (loc.slug === "chichester") {
    return [
      {
        q: "Most successful weight loss treatment overall?",
        a: `For eligible people, medicines like [Wegovy](/what-is-wegovy) and [Mounjaro](/what-is-mounjaro) can drive strong average loss in trials, but outcomes are usually best when paired with food structure, steps, and strength. Start with [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk).`,
      },
      {
        q: "How did Kelly Clarkson achieve rapid weight loss?",
        a: `Reports often mention semaglutide plus diet and walking changes. Treat celebrity stories as motivation, not a protocol. Focus on eligibility, side effects, and follow up.`,
      },
      {
        q: "Explain the 3 3 3 rule for weight loss?",
        a: `People describe it as three balanced meals, a daily water target, and a daily walk. It can help as a simple rhythm, but it is not a substitute for a calorie deficit plus strength and walking.`,
      },
      {
        q: "Cheaper alternative to Mounjaro?",
        a: `Always be careful with claims about compounded or unlicensed versions. In the UK, prescriptions should come from appropriately regulated routes with monitoring. Use [our methodology](/methodology) and [how we verify UK pharmacies](/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards) before paying.`,
      },
      {
        q: "Do harbour walks suffice for fat loss?",
        a: `They help and they are a great base for consistency, but adding strength work often improves results and maintenance.`,
      },
      {
        q: "Meds safe long term in West Sussex?",
        a: `They can be safe for eligible people under supervision, but nausea and other gastrointestinal side effects are common. Follow up matters. Compare providers using [our methodology](/methodology).`,
      },
    ];
  }

  if (loc.slug === "colchester") {
    return [
      {
        q: "Which treatment yields fastest Colchester results?",
        a: `Some trials show strong average loss for eligible people on medicines like [Mounjaro](/what-is-mounjaro), but sustainability still depends on habits. Start at [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk) and compare options safely.`,
      },
      {
        q: "Typical UK injection costs near Colchester?",
        a: `Costs vary by provider, dosing, and follow up. Compare ongoing totals on [Mounjaro prices](/mounjaro-price-comparison) and [Wegovy prices](/wegovy-price-comparison) rather than a single headline figure.`,
      },
      {
        q: "Kelly Clarkson rapid loss secrets?",
        a: `Reports often mention medicines plus diet and activity changes, but celebrity stories do not translate safely to everyone. Focus on eligibility, side effects, and follow up.`,
      },
      {
        q: "Mounjaro 6 month Colchester expectations?",
        a: `Average losses vary widely. If you use medicines, monitoring matters and side effects are possible. Pair medication with food structure, steps, and strength for better maintenance.`,
      },
      {
        q: "Non injection alternatives in Essex?",
        a: `Some clinics offer cryolipolysis and laser based body sculpting for local fat thickness. Results vary and these tools do not replace energy balance. Treat them as add ons to food and movement.`,
      },
      {
        q: "Combining treatments for max effect?",
        a: `Some people combine medicines with non surgical contouring, but evidence quality varies and claims can be marketing led. Prioritise safety and keep expectations realistic.`,
      },
    ];
  }

  if (loc.slug === "coventry") {
    return [
      {
        q: "Most successful weight loss treatment overall?",
        a: `For eligible people, medicines like [Wegovy](/what-is-wegovy) and [Mounjaro](/what-is-mounjaro) can drive strong average loss in trials, but long term outcomes are usually best when paired with food structure, steps, and strength. Start with [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk).`,
      },
      {
        q: "Top UK weight loss medication right now?",
        a: `Many comparisons highlight tirzepatide and semaglutide based injections for eligible people, but there is no single best for everyone. Compare options and ongoing costs on [Mounjaro prices](/mounjaro-price-comparison) and [Wegovy prices](/wegovy-price-comparison).`,
      },
      {
        q: "NHS Ozempic eligibility criteria?",
        a: `Eligibility depends on clinical criteria and local service pathways. It often involves a BMI threshold plus health conditions and clinician oversight. Start with NHS guidance and discuss with your GP.`,
      },
      {
        q: "How did Kelly Clarkson achieve rapid weight loss?",
        a: `Reports often mention medicines plus diet and walking changes, and she has referenced medical guidance. Treat celebrity stories as motivation, not a protocol.`,
      },
      {
        q: "Local Coventry walking routes for fat burn?",
        a: `Canal paths and park routes can add consistent steps. Aim near 150 minutes of moderate activity weekly plus strength work for better maintenance.`,
      },
      {
        q: "Meds vs surgery long term?",
        a: `Medicines can be less invasive, while surgery can be more transformative for severe obesity. Both require long term habit changes and follow up.`,
      },
    ];
  }

  if (loc.slug === "craigavon") {
    return [
      {
        q: "NHS coverage for injections like Wegovy in NI?",
        a: `Coverage can be limited and pathways vary. Many people use private or pharmacy routes after clinician assessment. Check local pathways on [HSCNI](https://online.hscni.net) and use [our methodology](/methodology) to compare providers.`,
      },
      {
        q: "Monthly Mounjaro costs around Craigavon?",
        a: `Costs vary by dose, supply, and follow up. Many people compare totals on [Mounjaro prices](/mounjaro-price-comparison) and [Wegovy prices](/wegovy-price-comparison) rather than relying on one headline number.`,
      },
      {
        q: "Ozempic eligibility criteria in Northern Ireland?",
        a: `Eligibility depends on clinical criteria and commissioning, and it is often prioritised for diabetes pathways. Discuss eligibility with your clinician and follow local guidance.`,
      },
      {
        q: "Realistic 10kg loss timeline with semaglutide?",
        a: `Some people can lose weight quickly early on, but results vary widely. A safer approach is supervised medication plus a repeatable calorie deficit, steps, and strength.`,
      },
      {
        q: "20kg in 5 months feasible near Lough Neagh?",
        a: `It may be feasible for some people, especially with supervised medication plus lifestyle change, but it is aggressive and rebound risk can rise. Focus on safety and monitoring.`,
      },
      {
        q: "Private vs pharmacy for Craigavon access?",
        a: `Both routes can be viable when appropriately regulated. Prioritise assessment, follow up, and safe delivery. Use [how we verify UK pharmacies](/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards) before you pay.`,
      },
    ];
  }

  if (loc.slug === "crawley") {
    return [
      {
        q: "NHS weight loss injections in West Sussex?",
        a: `Availability can be limited and pathways vary. If you are considering private or pharmacy routes, prioritise regulation and follow up. Start with [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk) and use [our methodology](/methodology) to compare providers safely.`,
      },
      {
        q: "Top fruit slashing pounds?",
        a: `Berries are often suggested because they are fibre rich and lower energy density, but no single fruit drives fat loss alone. The bigger driver is a repeatable calorie deficit with protein and fibre.`,
      },
      {
        q: "That viral Japanese slimming hack?",
        a: `Breathing and stress management techniques may help some people reduce stress eating, but they do not replace nutrition and movement. Treat viral hacks as add ons, not the plan.`,
      },
      {
        q: "Realistic 5kg in a week?",
        a: `Usually not sustainable. Rapid drops are often water and glycogen and can increase rebound risk. A safer target is about 0.5 to 1 kg per week.`,
      },
      {
        q: "Belly fat carb villain?",
        a: `Highly refined carbohydrates can be easy to overeat. The bigger issue is overall calories and low fibre meals. Prioritise protein and fibre and reduce ultra processed snack cycles.`,
      },
      {
        q: "Ozempic toughest organ hit?",
        a: `Rare pancreatitis risk is discussed in warnings, and gastrointestinal side effects are common for some people. Monitoring and follow up matter.`,
      },
      {
        q: "Ozempic prime downside?",
        a: `Gastrointestinal side effects such as nausea can occur, often early. Many people improve over time, but tolerability varies.`,
      },
      {
        q: "Why Amy Schumer stopped Ozempic?",
        a: `She has publicly discussed side effects. Individual tolerance varies and your plan should be clinician led, not celebrity led.`,
      },
    ];
  }

  if (loc.slug === "cumbernauld") {
    return [
      {
        q: "Typical private Mounjaro pricing in Scotland?",
        a: `Pricing varies by dose, supply, and follow up. Many people compare totals on [Mounjaro prices](/mounjaro-price-comparison) and [Wegovy prices](/wegovy-price-comparison) rather than relying on a single number.`,
      },
      {
        q: "NHS Scotland weight loss prescriptions available?",
        a: `Some prescriptions may be available for eligible people depending on local pathways and supply. Your GP or local service can explain current criteria and waiting times.`,
      },
      {
        q: "Scotland Mounjaro eligibility basics?",
        a: `Eligibility depends on BMI, health risks, and local commissioning. Discuss criteria with your clinician, and compare private providers using [our methodology](/methodology) if you go outside NHS routes.`,
      },
      {
        q: "Private bariatric surgery expenses in Scotland?",
        a: `Private surgery costs can be high and vary by provider and procedure. NHS routes can be free for eligible people but involve criteria and waiting times. Always consider long term follow up requirements.`,
      },
      {
        q: "CoolSculpting sessions near Cumbernauld?",
        a: `Many people need multiple sessions and results take weeks. Ask clinics for realistic outcomes and aftercare plans. Treat it as a body contouring add on, not a replacement for overall fat loss habits.`,
      },
      {
        q: "Combining meds with local walks effective?",
        a: `Often yes. Movement and strength work help maintain results and support health markers. Aim near 150 minutes of moderate activity weekly plus strength, and keep nutrition repeatable.`,
      },
    ];
  }

  if (loc.slug === "derby") {
    return [
      {
        q: "Which Derby area treatment yields fastest results?",
        a: `Many clinic pathways emphasise supervised injection medicines for eligible people, but sustainability still depends on habits. Start with [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk) and read [what Mounjaro is](/what-is-mounjaro) and [what Wegovy is](/what-is-wegovy).`,
      },
      {
        q: "Realistic plan to drop 14kg in 3 months safely?",
        a: `That pace is aggressive. Some people do it with an energy deficit and structured training, but muscle loss risk rises without protein and strength. Aim for clinician oversight if using medicines, and make the plan repeatable.`,
      },
      {
        q: "Quick 7 day weight dip without harm?",
        a: `Most rapid drops are water and glycogen, not fat. Hydration, lower sodium, and routine sleep can reduce water weight, but it is not a long term strategy.`,
      },
      {
        q: "Top over the counter pill for Derby users?",
        a: `Orlistat is commonly discussed as an oral option with modest average loss for some people and known gastrointestinal side effects. It is not a substitute for diet changes.`,
      },
      {
        q: "How do Derby clinics ensure safe injections?",
        a: `Safety usually depends on eligibility screening, dose titration, side effect monitoring, and follow up. Compare provider standards using [our methodology](/methodology) before you pay.`,
      },
      {
        q: "Lifestyle tweaks to boost medicine effects locally?",
        a: `Daily walking plus two or three strength sessions per week can improve maintenance. Derbyshire trails and market shopping can make the plan easier to keep.`,
      },
    ];
  }

  if (loc.slug === "doncaster") {
    return [
      {
        q: "Realistic for 10kg in 2 months on Ozempic?",
        a: `Some people can lose weight quickly early on, but results vary widely and side effects are possible. If you are comparing options, read [what Wegovy is](/what-is-wegovy) and [what Mounjaro is](/what-is-mounjaro), then use [our methodology](/methodology) to compare provider follow up.`,
      },
      {
        q: "Safe path to 20kg in 5 months?",
        a: `That pace is aggressive for many people. If you attempt it, clinician oversight matters. Build a repeatable deficit, add strength, and track health markers. Use our [BMI calculator](/tools/bmi-calculator) as a screening tool, not a diagnosis.`,
      },
      {
        q: "Healthy 5kg drop in 7 days?",
        a: `Usually not sustainable. Rapid drops are often water and glycogen, not fat. A safer target is about 0.5 to 1 kg per week.`,
      },
      {
        q: "Japanese weight loss ritual explained?",
        a: `Hydration and morning routines can reduce mindless snacking for some people, but evidence is thin for large losses. Treat rituals as add ons to food and movement.`,
      },
      {
        q: "Kelly Clarkson actual method?",
        a: `Reports often mention GLP 1 medicines plus lifestyle changes. Treat celebrity stories as motivation, not a protocol.`,
      },
      {
        q: "Strongest OTC weight loss pill UK?",
        a: `Orlistat is commonly discussed as an over the counter option with modest average loss for some people and known gastrointestinal side effects. It is not a substitute for diet changes.`,
      },
      {
        q: "Fat burning foods for quicker results?",
        a: `Foods like chilli and green tea may have a small effect, but the main driver is a repeatable calorie deficit with protein and fibre. Avoid overpromises.`,
      },
      {
        q: "Cheapest weight loss prescription UK?",
        a: `Prices vary by provider and supply. Compare totals on [Wegovy prices](/wegovy-price-comparison) and [Mounjaro prices](/mounjaro-price-comparison) rather than relying on a single headline.`,
      },
    ];
  }

  if (loc.slug === "dundee") {
    return [
      {
        q: "Who might avoid Mounjaro in Dundee?",
        a: `People with certain thyroid histories or gastrointestinal conditions may not be suitable for some medicines. Eligibility and contraindications are clinician decisions. Use [our methodology](/methodology) to compare follow up standards if you go private.`,
      },
      {
        q: "Strongest OTC weight loss aid available?",
        a: `Orlistat is commonly discussed as an oral option with modest average loss for some people and known gastrointestinal side effects. Treat it as an add on to diet changes, not a substitute.`,
      },
      {
        q: "When does Mounjaro typically kick in?",
        a: `Some people notice appetite changes early, but timelines vary and dose titration matters. A safer approach is supervised medication plus a repeatable calorie deficit and movement.`,
      },
      {
        q: "Pairing injections with Tay walks?",
        a: `Often helpful. Regular walking and strength work can improve maintenance and health markers. Aim near 150 minutes of moderate activity weekly plus strength.`,
      },
      {
        q: "Fat freezing downtime in Tayside?",
        a: `Many people can return to routine quickly, but redness and soreness can happen. Ask for realistic outcomes and aftercare and treat fat freezing as a contouring add on, not overall fat loss on its own.`,
      },
      {
        q: "Clinic programs vs solo in Dundee?",
        a: `Supervision can help with adherence, side effect monitoring, and realistic targets. A plan that includes follow up often beats a plan that relies on willpower alone.`,
      },
    ];
  }

  if (loc.slug === "dunfermline") {
    return [
      {
        q: "What's a realistic 6 month Mounjaro budget in Fife?",
        a: `Many private plans cluster around £1,000 to £1,600 across 6 months depending on dose and follow up. If you are comparing providers, use [our methodology](/methodology) to check safety and monitoring, not only price.`,
      },
      {
        q: "Which NHS Scotland injections can Dunfermline residents access?",
        a: `Access is usually reserved for specific eligibility criteria and severe cases, with clinician assessment and waiting lists. If you are exploring options, compare NHS pathways with private programs using our [best weight loss treatments in the UK guide](/compare/best-weight-loss-treatments-uk).`,
      },
      {
        q: "How do Scotland Mounjaro prices compare UK wide?",
        a: `Private pricing is often similar across the UK for comparable doses and support. To get a clearer picture, see our [Mounjaro price comparison](/mounjaro-price-comparison) and [Wegovy price comparison](/wegovy-price-comparison).`,
      },
      {
        q: "UK's most potent prescription weight aid?",
        a: `Trial data frequently highlights tirzepatide and semaglutide as leading options, but the best choice depends on your risks, side effects, and follow up. Start with [what Mounjaro is](/what-is-mounjaro) and [what Wegovy is](/what-is-wegovy).`,
      },
      {
        q: "Do Fife clinics combine injections with coaching?",
        a: `Many private programs pair medication with coaching and habit support. Combined approaches often help with adherence compared with medication alone, especially once the novelty fades.`,
      },
      {
        q: "Injection side effects common locally?",
        a: `Gastrointestinal effects like nausea are commonly reported, especially during dose increases. A slow titration plan and clinician monitoring can reduce risk. If side effects stall progress, see our [weight loss plateau guide](/helpful-guides/mounjaro-weight-loss-plateau) for next steps that do not involve unsafe changes.`,
      },
    ];
  }

  if (loc.slug === "durham") {
    return [
      {
        q: "Fastest safe 5kg loss?",
        a: `A safer pace is often around 0.5 to 1 kg per week through a consistent calorie deficit and activity. A 7 day target is typically unsafe for fat loss and can reflect water and muscle loss. If you want a structured comparison of options, start at [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk).`,
      },
      {
        q: "20kg in 5 months plan?",
        a: `It can be possible for some people with consistent deficits and training, but it usually requires medical oversight and careful monitoring. Pair strength training with steady movement and realistic intake targets.`,
      },
      {
        q: "Kelly Clarkson method in the UK?",
        a: `Public interviews often mention medication plus lifestyle changes. In the UK, access depends on eligibility and clinician assessment. If you are comparing medicines, read [what Wegovy is](/what-is-wegovy) and [what Mounjaro is](/what-is-mounjaro).`,
      },
      {
        q: "Top local activity in Durham?",
        a: `Long walks on local routes can be a strong baseline. Consistency usually matters more than the perfect workout. Aim for WHO style targets and build from there.`,
      },
      {
        q: "Are medicines necessary?",
        a: `Not always. Lifestyle changes are the foundation. Medicines can help for some people, particularly when BMI and health risks meet criteria and a clinician can monitor side effects.`,
      },
      {
        q: "Winter motivation tips?",
        a: `Short indoor circuits, step targets, and tracking apps can help maintain consistency. If progress stalls, see our [weight loss plateau guide](/helpful-guides/mounjaro-weight-loss-plateau).`,
      },
    ];
  }

  if (loc.slug === "east-kilbride") {
    return [
      {
        q: "NHS realistic here?",
        a: `Yes. Many people start with NHS dietitian or group programs via GP referral. Medicines may be considered after assessment and eligibility checks. Compare routes using [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk).`,
      },
      {
        q: "Private GLP 1 without GP?",
        a: `It can be possible via regulated services, but you should verify prescriber and pharmacy registration and ensure cold chain delivery for injections. Use [our methodology](/methodology) to compare provider standards.`,
      },
      {
        q: "Wegovy vs Mounjaro?",
        a: `Some trial summaries suggest similar broad averages for semaglutide and tirzepatide, with tirzepatide sometimes showing higher average loss in study settings. A clinician should match the option to your history and side effects.`,
      },
      {
        q: "Cost monthly?",
        a: `NHS access is free at point of care. Private pricing often ranges roughly £150 to £350 per month depending on dose and support. See [Mounjaro prices](/mounjaro-price-comparison) and [Wegovy prices](/wegovy-price-comparison).`,
      },
      {
        q: "Side effects management?",
        a: `A slow titration plan, hydration, and meal adjustments can help. GP follow up is ideal, especially if symptoms are significant.`,
      },
      {
        q: "Long term success?",
        a: `Habits drive maintenance after medication stops. Focus on repeatable food structure, steps, and strength work, and use our [weight loss plateau guide](/helpful-guides/mounjaro-weight-loss-plateau) if progress stalls.`,
      },
    ];
  }

  if (loc.slug === "edinburgh") {
    return [
      {
        q: "What is the most successful weight loss treatment?",
        a: `Many people do best with structured, supervised programs plus habits they can maintain. In Edinburgh, NHS Lothian specialist pathways may be the most evidence aligned starting point, and medicines can be an add on for eligible people. Compare options using [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk).`,
      },
      {
        q: "How to get Mounjaro in Edinburgh?",
        a: `One route is GP referral into NHS Lothian pathways if you meet BMI and risk criteria. Another route is a regulated private clinic. If you go private, verify prescriber and pharmacy registration and look for a clear titration and monitoring plan. Start with [what Mounjaro is](/what-is-mounjaro).`,
      },
      {
        q: "Can I lose 10kg in 2 months with Ozempic?",
        a: `It is an aggressive pace and can increase the risk of muscle loss and side effects. Some people can lose quickly early on, but it needs clinician oversight, strength training, and adequate protein. A safer baseline is often 0.5 to 1 kg per week.`,
      },
      {
        q: "How did Kelly Clarkson lose weight so quickly?",
        a: `Public interviews often mention medication plus lifestyle changes such as portion control and training. In the UK, any similar approach depends on eligibility and clinician monitoring. Read [what Wegovy is](/what-is-wegovy) for background.`,
      },
      {
        q: "NHS vs private speed?",
        a: `NHS pathways can involve waiting lists but provide structured monitoring. Private clinics can start faster but are self funded. Use [our methodology](/methodology) to compare safety checks and follow up quality.`,
      },
      {
        q: "Side effects management?",
        a: `A slow dose increase, hydration, and smaller meals can help nausea. Monitoring matters, especially if symptoms persist. If progress stalls, see our [weight loss plateau guide](/helpful-guides/mounjaro-weight-loss-plateau).`,
      },
    ];
  }

  if (loc.slug === "ely") {
    return [
      {
        q: "Most successful treatment?",
        a: `Many people do best with a structured behavioural program plus habits they can maintain. In Ely, Healthy You style support is often a strong first step, with GLP 1 medicines considered for eligible people. Compare options using [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk).`,
      },
      {
        q: "Chinese fast weight loss?",
        a: `Green tea, fibre such as glucomannan, and calorie cycling can support adherence for some people, but they are not magic. A safer pace is often around 0.5 kg per week. If you get stuck, see our [weight loss plateau guide](/helpful-guides/mounjaro-weight-loss-plateau).`,
      },
      {
        q: "Kelly Clarkson method?",
        a: `Public interviews often describe medication plus lifestyle changes such as portion control and training. In the UK, any similar approach depends on eligibility and clinician monitoring. Read [what Wegovy is](/what-is-wegovy) for background.`,
      },
      {
        q: "Top weight loss drug?",
        a: `Trial summaries often highlight tirzepatide and semaglutide as leading options, but the best choice depends on side effects, risks, and follow up. Start with [what Mounjaro is](/what-is-mounjaro) and [what Wegovy is](/what-is-wegovy).`,
      },
      {
        q: "Healthy You vs private?",
        a: `NHS foundations can build long term skills. Private medication routes can start faster for some people, but self funded care still needs proper screening and cold chain delivery. Use [our methodology](/methodology) to compare standards.`,
      },
      {
        q: "Tier 3 wait in Cambridgeshire?",
        a: `Waiting times can be long for specialist services, so it can help to start Tier 2 style habit work in parallel. Use [the BMI calculator](/tools/bmi-calculator) to prepare for eligibility discussions.`,
      },
    ];
  }

  if (loc.slug === "exeter") {
    return [
      {
        q: "How did Adele really lose all that weight?",
        a: `Public interviews commonly describe training and gradual calorie changes over time, without confirmed use of GLP 1 medicines. Treat celebrity stories as inspiration, not a prescription, and focus on repeatable habits.`,
      },
      {
        q: "What is the number one fruit for weight loss?",
        a: `Many people choose berries because they are lower calorie, high fibre, and can support satiety. The best choice is the one you can keep eating while staying in a consistent deficit.`,
      },
      {
        q: "Do people regain weight after Ozempic?",
        a: `Regain is common when medication stops if habits and food structure do not stick. Use the medication window to build routines you can maintain. If progress stalls, see our [weight loss plateau guide](/helpful-guides/mounjaro-weight-loss-plateau).`,
      },
      {
        q: "What is a cheaper alternative to Mounjaro?",
        a: `Some people compare daily liraglutide options with weekly pens, but the cheapest route can be an NHS lifestyle program if you qualify. Compare options using [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk).`,
      },
      {
        q: "NHS Tier 3 realistic in Exeter?",
        a: `It can be for higher BMI thresholds and complex needs, typically with GP referral and waiting lists. Starting Tier 2 style lifestyle support while you wait can still move the needle.`,
      },
      {
        q: "Private vs NHS long term cost?",
        a: `NHS care is free at point of access when you qualify, while private care can add up monthly. If you go private, use [our methodology](/methodology) to check safety, follow up, and refund terms, not only price.`,
      },
    ];
  }

  if (loc.slug === "glasgow") {
    return [
      {
        q: "What delivers top long term weight loss results?",
        a: `Structured support plus habits you can maintain often wins long term. In Glasgow, NHSGGC pathways can provide a free foundation, and GLP 1 medicines may be an add on for eligible people. Compare options using [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk).`,
      },
      {
        q: "What is the typical monthly cost for Mounjaro in Scotland?",
        a: `Private costs vary by dose and follow up, but many people see monthly pricing in the low hundreds. If you are comparing providers, check what is included in monitoring and support, not only the sticker price.`,
      },
      {
        q: "How did Kelly Clarkson achieve such rapid weight loss?",
        a: `Public interviews often describe medication plus lifestyle changes such as portion control and training. In the UK, any similar approach depends on eligibility and clinician monitoring. Read [what Wegovy is](/what-is-wegovy) for background.`,
      },
      {
        q: "What are cost effective alternatives to Mounjaro?",
        a: `Some people compare daily liraglutide options with weekly pens, and NHS lifestyle pathways can be the lowest cost route if you qualify. For pricing context, see [Mounjaro prices](/mounjaro-price-comparison) and [Wegovy prices](/wegovy-price-comparison).`,
      },
      {
        q: "How do I access NHS weight loss support in Glasgow?",
        a: `Many people start with community programs and self referral routes where available, and GP referral for specialist pathways. Use [the BMI calculator](/tools/bmi-calculator) to prepare for eligibility discussions.`,
      },
      {
        q: "Are private clinics safe for Glasgow residents?",
        a: `They can be, if the provider is regulated and has clear screening, titration, and follow up. Use [our methodology](/methodology) to compare safety standards and support quality.`,
      },
    ];
  }

  if (loc.slug === "gloucester") {
    return [
      {
        q: "What delivers top Gloucester weight loss results?",
        a: `For many people, a structured NHS lifestyle program plus repeatable habits is the most reliable base. If you are comparing options, start at [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk) and check follow up quality using [our methodology](/methodology).`,
      },
      {
        q: "Kelly Clarkson rapid loss: Gloucester equivalent?",
        a: `Public interviews often mention medication plus lifestyle changes such as portion control and training. In the UK, any similar approach depends on eligibility and clinician monitoring. For background, read [what Wegovy is](/what-is-wegovy) and [what Mounjaro is](/what-is-mounjaro).`,
      },
      {
        q: "Mounjaro weight loss in 6 months?",
        a: `Some people can lose significant weight with medication plus a consistent deficit and activity, but results vary. A safer pace is often around 0.5 to 1 kg per week with monitoring.`,
      },
      {
        q: "Budget friendly Mounjaro alternative?",
        a: `Many people start with NHS lifestyle support first. Some compare daily liraglutide options with weekly pens. For pricing context, see [Mounjaro prices](/mounjaro-price-comparison) and [Wegovy prices](/wegovy-price-comparison).`,
      },
      {
        q: "NHS program wait times?",
        a: `Waits vary by service and capacity. Starting the lifestyle phase early can still deliver progress while you wait for specialist options.`,
      },
      {
        q: "Private clinic red flags?",
        a: `No named prescriber, no written titration plan, and unclear refrigeration or cold chain handling are warning signs. Verify registration at [pharmacyregulation.org](https://www.pharmacyregulation.org/registers) before paying.`,
      },
    ];
  }

  if (loc.slug === "hereford") {
    return [
      {
        q: "What is the best weight loss treatment in Hereford to start with?",
        a: `For many people, the best starting point is an NHS lifestyle program with coaching and accountability. Use [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk) to compare options and [our methodology](/methodology) to check follow up quality.`,
      },
      {
        q: "How can I access free support in Hereford?",
        a: `Look for the Healthy Lifestyle Service and local community programs. Many services allow self referral or GP referral depending on eligibility and capacity.`,
      },
      {
        q: "When would a GP referral make sense?",
        a: `If you have medical complexity, higher BMI, or obesity related conditions, a GP can refer you into structured NHS pathways or specialist teams.`,
      },
      {
        q: "What about specialist surgery pathways?",
        a: `For severe obesity and when criteria are met, referrals may involve specialist bariatric teams. Treat surgery as a pathway with assessments and follow up, not a quick fix.`,
      },
      {
        q: "Are private injections like Mounjaro and Wegovy available?",
        a: `Private pharmacies and clinics may offer injections for eligible people, usually with ongoing monitoring and monthly costs. Start with [what Mounjaro is](/what-is-mounjaro) and [what Wegovy is](/what-is-wegovy), then compare prices via [Mounjaro](/mounjaro-price-comparison) and [Wegovy](/wegovy-price-comparison).`,
      },
      {
        q: "How do I check if an online pharmacy is legitimate?",
        a: `Verify registration and look for a named prescriber and cold storage guidance. You can use the register tool at [pharmacyregulation.org](https://www.pharmacyregulation.org/registers).`,
      },
    ];
  }

  if (loc.slug === "huddersfield") {
    return [
      {
        q: "Free weight loss programs available locally?",
        a: `Yes. Kirklees Wellness style services often offer free coaching for eligible adults. Start by comparing your options using [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk) and prepare for eligibility chats with the [BMI calculator](/tools/bmi-calculator).`,
      },
      {
        q: "When does NHS bariatric surgery become realistic here?",
        a: `Surgery pathways are usually reserved for higher BMI thresholds and obesity related conditions, and often require evidence that lifestyle support has been tried. Treat surgery as a monitored pathway with long term follow up, not a quick fix.`,
      },
      {
        q: "Wegovy vs Mounjaro: which works faster in Kirklees?",
        a: `Both can be effective when paired with diet and movement. Some trial comparisons suggest tirzepatide can produce higher average loss than semaglutide for selected people, but the best choice depends on side effects and monitoring. Read [what Wegovy is](/what-is-wegovy) and [what Mounjaro is](/what-is-mounjaro).`,
      },
      {
        q: "Cost range for private GLP 1 treatments?",
        a: `Pricing varies by dose and support. Many plans cluster in the low hundreds per month. For budgeting, see [Mounjaro prices](/mounjaro-price-comparison) and [Wegovy prices](/wegovy-price-comparison).`,
      },
      {
        q: "How to avoid common GLP 1 side effects?",
        a: `Slow dose increases, hydration, and protein forward meals can help. Monitoring matters, especially early on. If progress stalls, see our [weight loss plateau guide](/helpful-guides/mounjaro-weight-loss-plateau).`,
      },
      {
        q: "Best timeline for 10kg loss in Huddersfield?",
        a: `A realistic target for many people is 2 to 3 months with consistent deficit, daily steps, and structured support. Faster paces can raise rebound risk.`,
      },
    ];
  }

  if (loc.slug === "inverness") {
    return [
      {
        q: "Quickest NHS weight loss access here?",
        a: `Many people start with local dietetic or community weight management routes. Availability changes over time, but an NHS pathway with coaching can be a strong first step. Compare approaches using [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk).`,
      },
      {
        q: "Private Mounjaro and Wegovy without referral?",
        a: `Some regulated private clinics can prescribe for eligible people with screening and monitoring. If you go private, verify prescriber and pharmacy registration and insist on a written titration plan. Read [what Mounjaro is](/what-is-mounjaro) and [what Wegovy is](/what-is-wegovy).`,
      },
      {
        q: "Most effective GLP 1 for Highland life?",
        a: `Trial summaries often show higher average loss for tirzepatide compared with semaglutide in selected settings, but the best choice depends on side effects and follow up. A clinician should match the option to your health profile.`,
      },
      {
        q: "Safe 10kg loss timeline?",
        a: `A realistic target for many people is about 2 to 3 months with a consistent deficit, adequate protein, and movement, especially if medication is used under supervision. Faster paces raise muscle loss risk.`,
      },
      {
        q: "Complement treatments with local activity?",
        a: `Walking routes such as Ness Islands and steady strength work can support maintenance. Consistency usually matters more than a perfect plan.`,
      },
      {
        q: "Winter motivation in Inverness?",
        a: `Short indoor circuits, step targets, and a simple plan you can repeat can help. If progress stalls, see our [weight loss plateau guide](/helpful-guides/mounjaro-weight-loss-plateau).`,
      },
    ];
  }

  if (loc.slug === "kingston-upon-hull") {
    return [
      {
        q: "How do I access NHS specialist care in Hull?",
        a: `Some Hull services allow self referral for specialist weight management at higher BMI thresholds, while other routes need GP referral. Use the [BMI calculator](/tools/bmi-calculator) to prepare for eligibility discussions and compare options using [best weight loss treatments in the UK](/compare/best-weight-loss-treatments-uk).`,
      },
      {
        q: "Where to get Wegovy and Mounjaro prescriptions locally?",
        a: `Private hospitals, pharmacies, and regulated online clinics may offer prescriptions for eligible people. If you go private, verify registration and insist on a written titration plan. Read [what Wegovy is](/what-is-wegovy) and [what Mounjaro is](/what-is-mounjaro).`,
      },
      {
        q: "What is the fastest safe weight loss pace here?",
        a: `A safer baseline is often around 0.5 to 1 kg per week through a consistent deficit, steps, and strength work. Faster paces can increase rebound risk and muscle loss.`,
      },
      {
        q: "Does Hull offer gastric surgery options?",
        a: `Surgery pathways exist for severe obesity when criteria are met, usually after lifestyle support has been tried. Treat surgery as a monitored pathway with long term follow up, not a quick fix.`,
      },
      {
        q: "Can I combine NHS and private treatments?",
        a: `Often yes, but shared care varies by GP and provider. If you use private prescriptions, confirm who monitors side effects and blood tests and what happens if you stop.`,
      },
      {
        q: "How to manage GLP 1 side effects effectively?",
        a: `Slow dose increases, hydration, and protein forward meals can help. A weekend start can be easier for some shift patterns. If progress stalls, see our [weight loss plateau guide](/helpful-guides/mounjaro-weight-loss-plateau).`,
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
