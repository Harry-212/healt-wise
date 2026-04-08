/** NHS/WHO-style bands (adults, UK). */

export type BmiCategoryKey =
  | "underweight"
  | "healthy"
  | "overweight"
  | "obese";

export type BmiCategory = {
  key: BmiCategoryKey;
  label: string;
  shortLabel: string;
};

const CATEGORIES: Record<BmiCategoryKey, BmiCategory> = {
  underweight: {
    key: "underweight",
    label: "Underweight",
    shortLabel: "Underweight",
  },
  healthy: {
    key: "healthy",
    label: "Healthy weight",
    shortLabel: "Healthy",
  },
  overweight: {
    key: "overweight",
    label: "Overweight",
    shortLabel: "Overweight",
  },
  obese: {
    key: "obese",
    label: "Obese",
    shortLabel: "Obese",
  },
};

export function categoryFromBmi(bmi: number): BmiCategory {
  if (bmi < 18.5) return CATEGORIES.underweight;
  if (bmi < 25) return CATEGORIES.healthy;
  if (bmi < 30) return CATEGORIES.overweight;
  return CATEGORIES.obese;
}

/** Height in metres, weight in kilograms. */
export function computeBmi(heightM: number, weightKg: number): number | null {
  if (
    !Number.isFinite(heightM) ||
    !Number.isFinite(weightKg) ||
    heightM <= 0 ||
    weightKg <= 0
  ) {
    return null;
  }
  const v = weightKg / (heightM * heightM);
  if (!Number.isFinite(v)) return null;
  return Math.round(v * 10) / 10;
}

export function projectedBmiAfterWeightLossFraction(
  bmi: number,
  lossFraction: number,
): number | null {
  if (!Number.isFinite(bmi) || !Number.isFinite(lossFraction)) return null;
  if (lossFraction <= 0 || lossFraction >= 1) return null;
  return Math.round(bmi * (1 - lossFraction) * 10) / 10;
}

export type TreatmentEligibilityBand = "below27" | "maybe27" | "likely30";

export function treatmentEligibilityBand(bmi: number): TreatmentEligibilityBand {
  if (bmi >= 30) return "likely30";
  if (bmi >= 27) return "maybe27";
  return "below27";
}

export function treatmentEligibilityCopy(bmi: number): string {
  const band = treatmentEligibilityBand(bmi);
  if (band === "likely30") {
    return "You may be eligible for prescription weight loss treatments in the UK—such as Wegovy (semaglutide) or Mounjaro (tirzepatide)—if a qualified prescriber agrees treatment is appropriate.";
  }
  if (band === "maybe27") {
    return "With a BMI of 27 or above, you may qualify for some prescription weight loss treatments in the UK only if you also have certain weight-related health conditions. A clinician must assess you—BMI alone is not enough.";
  }
  return "Most UK prescribing pathways focus on BMI 27+ (with qualifying conditions) or BMI 30+. If you're concerned about your weight, a clinician can advise on safe next steps.";
}

export function recommendedNextStep(bmi: number): {
  title: string;
  body: string;
  emphasis: "lifestyle" | "balance" | "treatment" | "strong";
} {
  if (bmi < 25) {
    return {
      title: "Focus on sustainable habits",
      body: "Your BMI sits in a range where lifestyle measures—nutrition, movement, sleep, and stress care—are usually the first line. Ask your GP if you have symptoms or risk factors to review.",
      emphasis: "lifestyle",
    };
  }
  if (bmi < 27) {
    return {
      title: "Stay proactive about your health",
      body: "You're in the overweight range. Many people benefit from structured habits and follow-up with a healthcare professional, especially if waist circumference, blood pressure, or blood sugar are elevated.",
      emphasis: "balance",
    };
  }
  if (bmi < 30) {
    return {
      title: "Explore whether medical support fits your situation",
      body: "At BMI 27–29.9, prescription options like Wegovy or Mounjaro may be possible only with qualifying conditions. Compare pathways and private prices when you're ready—but always prioritise clinician-led assessment.",
      emphasis: "treatment",
    };
  }
  return {
    title: "You may be a candidate to discuss GLP-1 treatment",
    body: "At BMI 30+, many UK private pathways will consider GLP-1 medicines where appropriate. Your prescriber still needs your full medical history—use our comparisons to prepare questions, not to self-prescribe.",
    emphasis: "strong",
  };
}

export function insightCallout(bmi: number): string {
  const cat = categoryFromBmi(bmi);
  if (cat.key === "obese" || cat.key === "overweight") {
    return `Based on your BMI, you may qualify for weight loss injections like Wegovy or Mounjaro in the UK if a prescriber confirms you meet the criteria and it's safe for you.`;
  }
  if (cat.key === "healthy") {
    return `Your BMI is in the healthy range. If you're still looking for metabolic support, speak to a clinician—treatment eligibility is never based on BMI alone.`;
  }
  return `Your BMI is below the usual thresholds for obesity medicines. If weight or appetite is affecting your health, your GP can guide appropriate next steps.`;
}

/** Bar marker position 0–100 for BMI between min and max. */
export function bmiBarPercent(bmi: number, min = 15, max = 40): number {
  const t = (bmi - min) / (max - min);
  return Math.max(0, Math.min(100, Math.round(t * 1000) / 10));
}

/** Gauge needle angle in degrees, 0 = left end of semicircle, 180 = right. */
export function bmiGaugeDegrees(bmi: number, min = 16, max = 42): number {
  const t = (bmi - min) / (max - min);
  return Math.max(0, Math.min(180, t * 180));
}
