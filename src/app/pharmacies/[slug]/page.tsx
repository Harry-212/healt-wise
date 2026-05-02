import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import CompareHereLink from "@/components/ui/CompareHereLink";
import AsdaOnlineDoctorContent from "@/components/pharmacies/content/AsdaOnlineDoctorContent";
import AshcroftPharmacyContent from "@/components/pharmacies/content/AshcroftPharmacyContent";
import AypHealthcareContent from "@/components/pharmacies/content/AypHealthcareContent";
import BoltPharmacyContent from "@/components/pharmacies/content/BoltPharmacyContent";
import BootsOnlineDoctorContent from "@/components/pharmacies/content/BootsOnlineDoctorContent";
import Click2PharmacyMounjaroContent from "@/components/pharmacies/content/Click2PharmacyMounjaroContent";
import CloudPharmacyContent from "@/components/pharmacies/content/CloudPharmacyContent";
import CuratePharmacyContent from "@/components/pharmacies/content/CuratePharmacyContent";
import CurelyPharmacyContent from "@/components/pharmacies/content/CurelyPharmacyContent";
import CuvaHealthContent from "@/components/pharmacies/content/CuvaHealthContent";
import DotorPharmacyContent from "@/components/pharmacies/content/DotorPharmacyContent";
import DrWeightmansContent from "@/components/pharmacies/content/DrWeightmansContent";
import EnvigorePharmacyContent from "@/components/pharmacies/content/EnvigorePharmacyContent";
import FarmeciPharmacyContent from "@/components/pharmacies/content/FarmeciPharmacyContent";
import FyldeClinicPharmacyContent from "@/components/pharmacies/content/FyldeClinicPharmacyContent";
import GenmedsPharmacyContent from "@/components/pharmacies/content/GenmedsPharmacyContent";
import GetADripPharmacyContent from "@/components/pharmacies/content/GetADripPharmacyContent";
import GetWeightLossPharmacyContent from "@/components/pharmacies/content/GetWeightLossPharmacyContent";
import GoodBodyClinicPharmacyContent from "@/components/pharmacies/content/GoodBodyClinicPharmacyContent";
import HappyPharmacyContent from "@/components/pharmacies/content/HappyPharmacyContent";
import HeySlimPharmacyContent from "@/components/pharmacies/content/HeySlimPharmacyContent";
import IqDoctorPharmacyContent from "@/components/pharmacies/content/IqDoctorPharmacyContent";
import JuniperPharmacyContent from "@/components/pharmacies/content/JuniperPharmacyContent";
import LiveWellWeightLossPharmacyContent from "@/components/pharmacies/content/LiveWellWeightLossPharmacyContent";
import LloydsPharmacyOnlineDoctorContent from "@/components/pharmacies/content/LloydsPharmacyOnlineDoctorContent";
import LotusWeightLossPharmacyContent from "@/components/pharmacies/content/LotusWeightLossPharmacyContent";
import MedExpressPharmacyContent from "@/components/pharmacies/content/MedExpressPharmacyContent";
import MedicineMarketplacePharmacyContent from "@/components/pharmacies/content/MedicineMarketplacePharmacyContent";
import MedicspotPharmacyContent from "@/components/pharmacies/content/MedicspotPharmacyContent";
import MedinoPharmacyContent from "@/components/pharmacies/content/MedinoPharmacyContent";
import MshWeightLossPharmacyContent from "@/components/pharmacies/content/MshWeightLossPharmacyContent";
import MyLondonPharmacyContent from "@/components/pharmacies/content/MyLondonPharmacyContent";
import NextScriptPharmacyContent from "@/components/pharmacies/content/NextScriptPharmacyContent";
import NulifePharmacyContent from "@/components/pharmacies/content/NulifePharmacyContent";
import NumanPharmacyContent from "@/components/pharmacies/content/NumanPharmacyContent";
import OnlinemedsPharmacyContent from "@/components/pharmacies/content/OnlinemedsPharmacyContent";
import OushkPharmacyContent from "@/components/pharmacies/content/OushkPharmacyContent";
import PharmacyAdvanceContent from "@/components/pharmacies/content/PharmacyAdvanceContent";
import Pharmacy2uPharmacyContent from "@/components/pharmacies/content/Pharmacy2uPharmacyContent";
import PharmicaPharmacyContent from "@/components/pharmacies/content/PharmicaPharmacyContent";
import PillSortedPharmacyContent from "@/components/pharmacies/content/PillSortedPharmacyContent";
import PillSpherePharmacyContent from "@/components/pharmacies/content/PillSpherePharmacyContent";
import Pills2uPharmacyContent from "@/components/pharmacies/content/Pills2uPharmacyContent";
import QuickmedsPharmacyContent from "@/components/pharmacies/content/QuickmedsPharmacyContent";
import SecondNaturePharmacyContent from "@/components/pharmacies/content/SecondNaturePharmacyContent";
import SimpleOnlinePharmacyContent from "@/components/pharmacies/content/SimpleOnlinePharmacyContent";
import SlimmingDirectPharmacyContent from "@/components/pharmacies/content/SlimmingDirectPharmacyContent";
import SuperdrugOnlineDoctorContent from "@/components/pharmacies/content/SuperdrugOnlineDoctorContent";
import SwiftDoctorPharmacyContent from "@/components/pharmacies/content/SwiftDoctorPharmacyContent";
import TheCarePharmacyContent from "@/components/pharmacies/content/TheCarePharmacyContent";
import TheFamilyChemistPharmacyContent from "@/components/pharmacies/content/TheFamilyChemistPharmacyContent";
import TheIndependentPharmacyContent from "@/components/pharmacies/content/TheIndependentPharmacyContent";
import TribellePharmacyContent from "@/components/pharmacies/content/TribellePharmacyContent";
import VoyPharmacyContent from "@/components/pharmacies/content/VoyPharmacyContent";
import WePrescribePharmacyContent from "@/components/pharmacies/content/WePrescribePharmacyContent";
import WellPharmacyContent from "@/components/pharmacies/content/WellPharmacyContent";
import ZavaPharmacyContent from "@/components/pharmacies/content/ZavaPharmacyContent";
import {
  getWegovyCompareProviderById,
  pharmacyProfileHref,
  startingPrice as wegovyStartingPrice,
  WEGOVY_DOSE_KEYS,
  WEGOVY_UK_COMPARE_LAST_UPDATED,
  WEGOVY_UK_COMPARE_PROVIDERS,
} from "@/lib/data/wegovy-uk-compare-providers";
import {
  getMounjaroCompareProviderById,
  startingPrice as mounjaroStartingPrice,
  MOUNJARO_DOSE_KEYS,
  MOUNJARO_UK_COMPARE_LAST_UPDATED,
  MOUNJARO_UK_COMPARE_PROVIDERS,
} from "@/lib/data/mounjaro-uk-compare-providers";
import {
  getSaxendaCompareProviderById,
  SAXENDA_COMPARE_DOSE_KEYS,
  SAXENDA_PACK_KEYS,
  SAXENDA_UK_COMPARE_LAST_UPDATED,
  SAXENDA_UK_COMPARE_PROVIDERS,
} from "@/lib/data/saxenda-uk-compare-providers";
import { allPharmacySlugs } from "@/lib/routes/all-pharmacy-slugs";
import { TrustpilotStarIcon } from "@/components/compare/TrustpilotRatingPresentation";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  asdaPharmacyLandingJsonGraph,
  ashcroftPharmacyLandingJsonGraph,
  aypPharmacyLandingJsonGraph,
  boltPharmacyLandingJsonGraph,
  bootsPharmacyLandingJsonGraph,
  click2pharmacyLandingJsonGraph,
  cloudPharmacyLandingJsonGraph,
  curatePharmacyLandingJsonGraph,
  curelyPharmacyLandingJsonGraph,
  cuvaHealthPharmacyLandingJsonGraph,
  dotorPharmacyLandingJsonGraph,
  drWeightmansPharmacyLandingJsonGraph,
  envigorePharmacyLandingJsonGraph,
  farmeciPharmacyLandingJsonGraph,
  fyldeClinicPharmacyLandingJsonGraph,
  genmedsPharmacyLandingJsonGraph,
  getADripPharmacyLandingJsonGraph,
  getWeightLossPharmacyLandingJsonGraph,
  goodBodyClinicPharmacyLandingJsonGraph,
  happyPharmacyLandingJsonGraph,
  heySlimPharmacyLandingJsonGraph,
  iqDoctorPharmacyLandingJsonGraph,
  juniperPharmacyLandingJsonGraph,
  liveWellWeightLossPharmacyLandingJsonGraph,
  lloydsPharmacyOnlineDoctorLandingJsonGraph,
  lotusWeightLossPharmacyLandingJsonGraph,
  medExpressPharmacyLandingJsonGraph,
  medicineMarketplacePharmacyLandingJsonGraph,
  medicspotPharmacyLandingJsonGraph,
  medinoPharmacyLandingJsonGraph,
  mshWeightLossPharmacyLandingJsonGraph,
  myLondonPharmacyLandingJsonGraph,
  nextScriptPharmacyLandingJsonGraph,
  nulifePharmacyLandingJsonGraph,
  numanPharmacyLandingJsonGraph,
  onlinemedsPharmacyLandingJsonGraph,
  oushkPharmacyLandingJsonGraph,
  pharmicaPharmacyLandingJsonGraph,
  pharmacy2uPharmacyLandingJsonGraph,
  pharmacyAdvancePharmacyLandingJsonGraph,
  pharmacyProfileJsonGraph,
  pillSortedPharmacyLandingJsonGraph,
  pillSpherePharmacyLandingJsonGraph,
  pills2uPharmacyLandingJsonGraph,
  quickmedsPharmacyLandingJsonGraph,
  secondNaturePharmacyLandingJsonGraph,
  simpleOnlinePharmacyLandingJsonGraph,
  slimmingDirectPharmacyLandingJsonGraph,
  superdrugOnlineDoctorLandingJsonGraph,
  swiftDoctorPharmacyLandingJsonGraph,
  theCarePharmacyLandingJsonGraph,
  theFamilyChemistPharmacyLandingJsonGraph,
  theIndependentPharmacyLandingJsonGraph,
  tribellePharmacyLandingJsonGraph,
  voyPharmacyLandingJsonGraph,
  wePrescribePharmacyLandingJsonGraph,
  wellPharmacyLandingJsonGraph,
  zavaPharmacyLandingJsonGraph,
} from "@/lib/seo/pharmacy-landing-json-ld";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allPharmacySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const canonical = `${siteOrigin()}/pharmacies/${slug}`;

  if (slug === "ayp-healthcare") {
    const title =
      "AYP Healthcare Weight Management Review — Mounjaro & Wegovy (UK)";
    const description =
      "AYP Healthcare weight management: online consultation, clinical assessment, home delivery, pricing context and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "bolt-pharmacy") {
    const title =
      "Bolt Pharmacy weight loss (UK) — Mounjaro, Wegovy, online review";
    const description =
      "Bolt Pharmacy: online weight loss, Mounjaro, Wegovy and Saxenda context, delivery, costs and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "boots-online-doctor") {
    const title =
      "Boots Online Doctor Weight Loss Review — Wegovy support (UK)";
    const description =
      "Boots Online Doctor: online consultation, clinical review, delivery or pharmacy collection, pricing context and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "click2pharmacy") {
    const title =
      "Click2Pharmacy Mounjaro review (UK) — buying Mounjaro injections online";
    const description =
      "Click2Pharmacy: Mounjaro-focused online consultation, prescription approval, delivery notes, pricing context and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "cloud-pharmacy") {
    const title =
      "Cloud Pharmacy weight loss (UK) — Mounjaro, Wegovy, online review";
    const description =
      "Cloud Pharmacy: online consultation, Mounjaro and Wegovy context, delivery and temperature handling, pricing context and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "curate") {
    const title = "Curate weight loss (UK) — Wegovy, Saxenda, online review";
    const description =
      "Curate: online consultation, Wegovy and Saxenda context, delivery or collection, pricing context and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "curely") {
    const title =
      "Curely weight loss (UK) — Mounjaro, Wegovy, online review";
    const description =
      "Curely: pharmacist-led consultation, regulated supply, tracked delivery options, pricing context and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "cuva-health") {
    const title =
      "Cuva Health weight loss (UK) — Mounjaro, Wegovy, clinician-led support";
    const description =
      "Cuva Health: clinician-led review, cold-chain delivery, pricing context and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "dotor") {
    const title =
      "Dotor weight loss (UK) — Mounjaro, Wegovy, online review";
    const description =
      "Dotor: online assessment, prescriber review, in-house dispensing, DPD tracked delivery options, pricing context and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "dr-weightmans") {
    const title =
      "Dr Weightmans weight loss (UK) — clinically supported products, delivery & review";
    const description =
      "Dr Weightmans: clinically guided weight management overview, ordering flow, delivery expectations, cost components and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "envigore") {
    const title =
      "Envigore weight loss (UK) — Mounjaro, Wegovy, clinician-led support";
    const description =
      "Envigore: online assessment, pharmacist and prescriber review, programme-style support, cold-chain delivery, pricing context and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "farmeci") {
    const title =
      "Farmeci Weight Loss Treatment Review — Mounjaro, Wegovy, UK clinician support";
    const description =
      "Farmeci: My Health Stop Ltd platform, partner pharmacies, consultations, cold-chain delivery, pricing from ~£92/dose and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "fylde-clinic") {
    const title =
      "Fylde Clinic Weight Loss Treatment Review — Mounjaro, Wegovy (UK)";
    const description =
      "Fylde Clinic: clinician-led online pharmacy, Royal Mail Tracked 24, 2–8°C packaging, Mounjaro from ~£134, Wegovy from ~£99 and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "genmeds") {
    const title =
      "Genmeds Weight Loss Review — Mounjaro & Wegovy, UK registered pharmacy";
    const description =
      "Genmeds: pharmacy-led Mounjaro and Wegovy access, listed from ~£179.99 / ~£129.99, accessories, discreet delivery and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "get-weight-loss") {
    const title =
      "Get Weight Loss Review — Wegovy, medically supervised, UK delivery";
    const description =
      "Get Weight Loss: digital clinical pathway, tracked delivery, ~£179.99/pen Wegovy example, no mandatory subscription, optional blood tests and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "getadrip") {
    const title =
      "GetADrip Weight Loss Review — Mounjaro, Wegovy, UK programme";
    const description =
      "GetADrip: programme-style GLP-1 access, app support, DPD cold-chain delivery, ~£109 / ~£159 monthly-style pricing and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "goodbody-clinic") {
    const title =
      "GoodBody Clinic Weight Loss Review — Wegovy, UK medical support";
    const description =
      "GoodBody Clinic: programme-style Wegovy access, nurse and doctor oversight, subscriptions, delivery often included, ~£129/mo examples and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "happy-pharmacy") {
    const title =
      "Happy Pharmacy Weight Loss Review — Mounjaro, Wegovy, GPhC (UK)";
    const description =
      "Happy Pharmacy: GPhC-regulated Mounjaro and Wegovy from ~£139.99 / ~£89.99, Orlistat/Alli, discreet tracked delivery and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "hey-slim") {
    const title =
      "Hey Slim Weight Loss Review — Mounjaro, Wegovy, clinician-led (UK)";
    const description =
      "Hey Slim: doctor-led programme, GLP-1 access, delivery often 1–2 days and included (stated), dose-dependent pricing and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "iq-doctor") {
    const title =
      "IQ Doctor Weight Loss Review: Mounjaro, Wegovy, Saxenda, tablets (UK)";
    const description =
      "IQ Doctor: online questionnaire, UK prescriber review, Royal Mail/DPD delivery, cold chain for injectables, indicative pricing and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "juniper") {
    const title =
      "Juniper Weight Loss Review: Mounjaro, Wegovy, UK programme & app";
    const description =
      "Juniper: eligibility check, remote clinician consultation, monthly programme with app and coaching, UK delivery and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "live-well-weight-loss") {
    const title =
      "Live Well Weight Loss Review: Mounjaro, Wegovy, GPhC pharmacy (UK)";
    const description =
      "Live Well Weight Loss: pharmacist prescriber assessment, transparent pen pricing, discreet delivery, ongoing support and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "lloyds-pharmacy-online-doctor") {
    const title =
      "Lloyds Pharmacy Online Doctor Weight Loss — Mounjaro, Wegovy, tablets (UK)";
    const description =
      "Lloyds Online Doctor: online consultation, injections and tablets, next-day and standard delivery, ParcelShop, store collection, pricing guide and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "lotus-weight-loss") {
    const title =
      "Lotus Weight Loss Review — Mounjaro, Wegovy, CQC clinic (UK)";
    const description =
      "Lotus Weight Loss: CQC-registered clinic, GLP-1 injectables, Orlistat, Lotus Programme, discreet delivery, subscriptions and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "medexpress") {
    const title =
      "MedExpress Weight Loss Review — Mounjaro, Wegovy, UK online pharmacy";
    const description =
      "MedExpress: regulated consultation, GLP-1 and oral weight loss medicines, refrigerated dispatch, delivery tiers, fees and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "medicine-marketplace") {
    const title =
      "Medicine Market Place Review — UK online pharmacy, weight loss products";
    const description =
      "Medicine Market Place: Preston-based pharmacy, weight loss range, tracked delivery, free delivery thresholds, prescription checks and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "medicspot") {
    const title =
      "Medicspot Weight Loss Review — Mounjaro, coaching, UK subscription programme";
    const description =
      "Medicspot: clinician-led assessment, NHS record checks, health coaching, 28-day medication cycles, discreet tracked delivery and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "medino") {
    const title =
      "Medino Weight Loss Review — pharmacist-led, PGD supply, UK delivery";
    const description =
      "Medino: online consultation, pharmacist review, PGD pathways where applicable, inclusive pricing, next-day delivery on many lines and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "msh-weight-loss") {
    const title =
      "MSH Weight Loss Review — Mounjaro, Wegovy, nurse support (UK)";
    const description =
      "MSH Weight Loss: 28-day subscription, DPD signed next-day delivery, cold chain, wellbeing surveys, bundled pricing and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "my-london-pharmacy") {
    const title =
      "My London Pharmacy Weight Loss Review — GLP-1, UK next-day delivery";
    const description =
      "My London Pharmacy: quick online assessment, GLP-1 pathways, discreet packaging, patient portal, nationwide delivery and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "next-script") {
    const title =
      "Next Script Weight Loss Review — Wegovy, Mounjaro, Saxenda (UK)";
    const description =
      "Next Script: online questionnaire, document checks, first-order video consult, GPhC pharmacy, discreet delivery, indicative pricing and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "nulife-pharmacy") {
    const title =
      "NuLife Pharmacy Weight Loss Review — UK programme, GLP-1, signed delivery";
    const description =
      "NuLife Pharmacy: GPhC-regulated management programme, pharmacist review, nutrition support, discreet signed delivery, timelines and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "numan") {
    const title =
      "Numan Weight Loss Review — Wegovy, Mounjaro, UK subscription & coaching";
    const description =
      "Numan: digital assessment, GLP-1 plans, coaching and app support, 28-day deliveries, discreet Royal Mail-style shipping, subscription costs and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "onlinemeds") {
    const title =
      "OnlineMeds Weight Loss Review — Wegovy, Mounjaro, UK pharmacist prescribers";
    const description =
      "OnlineMeds: specialist weight-loss pharmacy, pharmacist prescriber pathway, free tracked delivery, Orlistat and GLP-1 context, support and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "oushk") {
    const title =
      "Oushk Pharmacy Weight Loss Review — online doctor, GLP-1, UK delivery";
    const description =
      "Oushk Pharmacy: video-verified consultation, UK prescribers, injectable and oral options, DPD/Royal Mail choices, next-day claims and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "pharmacy-advance") {
    const title =
      "Pharmacy Advance Weight Loss Review — Mounjaro, Wegovy, UK consultation & delivery";
    const description =
      "Pharmacy Advance: online questionnaire, prescriber review, GLP-1 injectables, tracked discreet delivery, cold-chain claims and cost context. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "pharmacy2u") {
    const title =
      "Pharmacy2U Weight Loss Review — Mounjaro, Wegovy, online doctor, UK delivery";
    const description =
      "Pharmacy2U: online doctor assessment, GLP-1 and Orlistat options, express delivery, two-month supply notes and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "pharmica") {
    const title =
      "Pharmica Weight Loss Review — Mounjaro, Wegovy, delivery tiers & pricing (UK)";
    const description =
      "Pharmica: pharmacist-led checks, injectable and capsule ranges, discreet delivery, premium and same-day options where offered, FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "pills2u") {
    const title =
      "Pills2U Weight Loss Review — Mounjaro, Wegovy, prescriber pathway (UK)";
    const description =
      "Pills2U: medical questionnaire, licensed prescriber review, GLP-1 injectables, fast tracked delivery claims, bundled pricing context and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "pillsorted") {
    const title =
      "PillSorted Weight Loss Review — telehealth, GLP-1, NHS integration (UK)";
    const description =
      "PillSorted: personalised consultation, licensed injectable and oral options, Royal Mail delivery, subscription repeats, NHS/private themes and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "pillsphere") {
    const title =
      "PillSphere Weight Loss Review — online clinic, prescribing, UK delivery";
    const description =
      "PillSphere: consultation pathway, prescriber review, discreet tracked delivery, pricing context and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "quickmeds") {
    const title =
      "Quickmeds Weight Loss Review — GPhC clinic, Mounjaro, Wegovy, fast delivery (UK)";
    const description =
      "Quickmeds: online consultation, personalised plans, GLP-1 and oral options, same-day dispatch claims, Royal Mail tracking and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "second-nature") {
    const title =
      "Second Nature Weight Loss Review — programme, GLP-1, coaching app (UK)";
    const description =
      "Second Nature: assessment, pharmacy partner supply, app coaching, peer support, scheduled kit delivery, bundled pricing and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "care-pharmacy") {
    const title =
      "The Care Pharmacy Weight Loss Review — Mounjaro, Wegovy, UK delivery (UK)";
    const description =
      "The Care Pharmacy: GPhC-regulated online clinic, injectable and oral options, cold-chain delivery tiers, illustrative pricing and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "simple-online-pharmacy") {
    const title =
      "Simple Online Pharmacy Weight Loss Review — clinician-led, UK delivery (UK)";
    const description =
      "Simple Online Pharmacy: regulated pathway, online assessment, GLP-1 options where suitable, discreet delivery, pricing themes and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "slimming-direct") {
    const title =
      "Slimming Direct Weight Loss Review — GLP-1 programme, UK pharmacy (UK)";
    const description =
      "Slimming Direct: clinically supervised plans, Mounjaro and Wegovy context, delivery timelines, costs, Trustpilot themes and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "superdrug-online-doctor") {
    const title =
      "Superdrug Online Doctor Weight Loss Review — Wegovy, Mounjaro, collect or deliver (UK)";
    const description =
      "Superdrug Online Doctor: doctor-reviewed consultations, home delivery or pharmacy collection, cold-chain injectables, bundled pricing and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "swift-doctor") {
    const title =
      "Swift Doctor Weight Loss Review — fast GLP-1 access, tracked delivery (UK)";
    const description =
      "Swift Doctor: rapid online assessments, clinician oversight, courier delivery, cold-chain options, pricing themes and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "the-family-chemist") {
    const title =
      "The Family Chemist Weight Loss Review — delivery tiers, fridge post, pricing (UK)";
    const description =
      "The Family Chemist: regulated online pharmacy narrative, consultation steps, Royal Mail delivery bands, fridge medicines, product price anchors and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "the-independent-pharmacy") {
    const title =
      "The Independent Pharmacy Weight Loss Review — GPhC, CQC, tracked post (UK)";
    const description =
      "The Independent Pharmacy: regulated assessments, discreet packaging, delivery tiers, free postage threshold and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "tribelle") {
    const title =
      "Tribelle Weight Loss Review — Mounjaro, Wegovy, clinician-led (UK)";
    const description =
      "Tribelle: GLP-1 injectables, ~24h review claims, tracked discreet delivery, pricing themes, Trustpilot context and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "voy") {
    const title =
      "Voy Weight Loss Review — digital programme context & UK comparisons";
    const description =
      "Voy: how to evaluate regulated digital weight-loss routes, budgeting with Health Wise tables, safety checklist and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "weprescribe") {
    const title =
      "WePrescribe Weight Loss Review — pharmacist prescribers, GLP-1 delivery (UK)";
    const description =
      "WePrescribe: structured questionnaires, cold-chain injectables, Royal Mail tiers, illustrative Wegovy pricing and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "well-pharmacy") {
    const title =
      "Well Pharmacy Weight Loss Review — Mounjaro, Wegovy, pharmacist follow-ups (UK)";
    const description =
      "Well Pharmacy: online/in-store consultations, monthly monitoring themes, delivery fees, illustrative pricing and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "zava") {
    const title =
      "Zava Weight Loss Review — doctor review, BMI photos, cold delivery (UK)";
    const description =
      "Zava (ZavaMed): questionnaire plus photo verification, injectable cold courier lanes, tablet postage, pricing anchors and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  const w = getWegovyCompareProviderById(slug);
  const m = getMounjaroCompareProviderById(slug);
  const s = getSaxendaCompareProviderById(slug);
  const name = w?.name ?? m?.name ?? s?.name;
  if (!name) return { title: "Pharmacy" };

  const meds: string[] = [];
  if (m) meds.push("Mounjaro");
  if (w) meds.push("Wegovy");
  if (s) meds.push("Saxenda");

  if (slug === "asda-online-doctor") {
    const title =
      "Asda Online Doctor Weight Loss Treatment Review — Mounjaro & Wegovy (UK)";
    const description =
      "Asda Online Doctor: how online consultation and prescribing works, treatment options (Mounjaro, Wegovy, Saxenda, Orlistat), delivery and pricing context. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "ashcroft-pharmacy") {
    const title =
      "Ashcroft Pharmacy Weight Loss Treatment Review — Mounjaro & Wegovy (UK)";
    const description =
      "Ashcroft Pharmacy: online consultation, treatment range, delivery expectations, safety notes and cost context. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  return {
    title: `${name} — ${meds.join(" & ")} UK prices (2026)`,
    description: `Independent snapshot: ${name} — illustrative ${meds.join(" and ")} pen prices and delivery notes on Health Wise.`,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title: `${name} — UK pharmacy`,
      description: `Provider profile and illustrative pricing for ${name}.`,
    },
  };
}

export default async function PharmacyProfilePage({ params }: Props) {
  const { slug } = await params;

  if (slug === "ayp-healthcare") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aypPharmacyLandingJsonGraph()),
          }}
        />
        <AypHealthcareContent />
      </>
    );
  }

  if (slug === "bolt-pharmacy") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(boltPharmacyLandingJsonGraph()),
          }}
        />
        <BoltPharmacyContent />
      </>
    );
  }

  if (slug === "boots-online-doctor") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(bootsPharmacyLandingJsonGraph()),
          }}
        />
        <BootsOnlineDoctorContent />
      </>
    );
  }

  if (slug === "click2pharmacy") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(click2pharmacyLandingJsonGraph()),
          }}
        />
        <Click2PharmacyMounjaroContent />
      </>
    );
  }

  if (slug === "cloud-pharmacy") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(cloudPharmacyLandingJsonGraph()),
          }}
        />
        <CloudPharmacyContent />
      </>
    );
  }

  if (slug === "curate") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(curatePharmacyLandingJsonGraph()),
          }}
        />
        <CuratePharmacyContent />
      </>
    );
  }

  if (slug === "curely") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(curelyPharmacyLandingJsonGraph()),
          }}
        />
        <CurelyPharmacyContent />
      </>
    );
  }

  if (slug === "cuva-health") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(cuvaHealthPharmacyLandingJsonGraph()),
          }}
        />
        <CuvaHealthContent />
      </>
    );
  }

  if (slug === "dotor") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(dotorPharmacyLandingJsonGraph()),
          }}
        />
        <DotorPharmacyContent />
      </>
    );
  }

  if (slug === "dr-weightmans") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(drWeightmansPharmacyLandingJsonGraph()),
          }}
        />
        <DrWeightmansContent />
      </>
    );
  }

  if (slug === "envigore") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(envigorePharmacyLandingJsonGraph()),
          }}
        />
        <EnvigorePharmacyContent />
      </>
    );
  }

  if (slug === "farmeci") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(farmeciPharmacyLandingJsonGraph()),
          }}
        />
        <FarmeciPharmacyContent />
      </>
    );
  }

  if (slug === "fylde-clinic") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(fyldeClinicPharmacyLandingJsonGraph()),
          }}
        />
        <FyldeClinicPharmacyContent />
      </>
    );
  }

  if (slug === "genmeds") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(genmedsPharmacyLandingJsonGraph()),
          }}
        />
        <GenmedsPharmacyContent />
      </>
    );
  }

  if (slug === "get-weight-loss") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWeightLossPharmacyLandingJsonGraph()),
          }}
        />
        <GetWeightLossPharmacyContent />
      </>
    );
  }

  if (slug === "getadrip") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getADripPharmacyLandingJsonGraph()),
          }}
        />
        <GetADripPharmacyContent />
      </>
    );
  }

  if (slug === "goodbody-clinic") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(goodBodyClinicPharmacyLandingJsonGraph()),
          }}
        />
        <GoodBodyClinicPharmacyContent />
      </>
    );
  }

  if (slug === "happy-pharmacy") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(happyPharmacyLandingJsonGraph()),
          }}
        />
        <HappyPharmacyContent />
      </>
    );
  }

  if (slug === "hey-slim") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(heySlimPharmacyLandingJsonGraph()),
          }}
        />
        <HeySlimPharmacyContent />
      </>
    );
  }

  if (slug === "iq-doctor") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(iqDoctorPharmacyLandingJsonGraph()),
          }}
        />
        <IqDoctorPharmacyContent />
      </>
    );
  }

  if (slug === "juniper") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(juniperPharmacyLandingJsonGraph()),
          }}
        />
        <JuniperPharmacyContent />
      </>
    );
  }

  if (slug === "live-well-weight-loss") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(liveWellWeightLossPharmacyLandingJsonGraph()),
          }}
        />
        <LiveWellWeightLossPharmacyContent />
      </>
    );
  }

  if (slug === "lloyds-pharmacy-online-doctor") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(lloydsPharmacyOnlineDoctorLandingJsonGraph()),
          }}
        />
        <LloydsPharmacyOnlineDoctorContent />
      </>
    );
  }

  if (slug === "lotus-weight-loss") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(lotusWeightLossPharmacyLandingJsonGraph()),
          }}
        />
        <LotusWeightLossPharmacyContent />
      </>
    );
  }

  if (slug === "medexpress") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medExpressPharmacyLandingJsonGraph()),
          }}
        />
        <MedExpressPharmacyContent />
      </>
    );
  }

  if (slug === "medicine-marketplace") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicineMarketplacePharmacyLandingJsonGraph()),
          }}
        />
        <MedicineMarketplacePharmacyContent />
      </>
    );
  }

  if (slug === "medicspot") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicspotPharmacyLandingJsonGraph()),
          }}
        />
        <MedicspotPharmacyContent />
      </>
    );
  }

  if (slug === "medino") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medinoPharmacyLandingJsonGraph()),
          }}
        />
        <MedinoPharmacyContent />
      </>
    );
  }

  if (slug === "msh-weight-loss") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(mshWeightLossPharmacyLandingJsonGraph()),
          }}
        />
        <MshWeightLossPharmacyContent />
      </>
    );
  }

  if (slug === "my-london-pharmacy") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(myLondonPharmacyLandingJsonGraph()),
          }}
        />
        <MyLondonPharmacyContent />
      </>
    );
  }

  if (slug === "next-script") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(nextScriptPharmacyLandingJsonGraph()),
          }}
        />
        <NextScriptPharmacyContent />
      </>
    );
  }

  if (slug === "nulife-pharmacy") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(nulifePharmacyLandingJsonGraph()),
          }}
        />
        <NulifePharmacyContent />
      </>
    );
  }

  if (slug === "numan") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(numanPharmacyLandingJsonGraph()),
          }}
        />
        <NumanPharmacyContent />
      </>
    );
  }

  if (slug === "onlinemeds") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(onlinemedsPharmacyLandingJsonGraph()),
          }}
        />
        <OnlinemedsPharmacyContent />
      </>
    );
  }

  if (slug === "oushk") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(oushkPharmacyLandingJsonGraph()),
          }}
        />
        <OushkPharmacyContent />
      </>
    );
  }

  if (slug === "pharmacy-advance") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pharmacyAdvancePharmacyLandingJsonGraph()),
          }}
        />
        <PharmacyAdvanceContent />
      </>
    );
  }

  if (slug === "pharmacy2u") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pharmacy2uPharmacyLandingJsonGraph()),
          }}
        />
        <Pharmacy2uPharmacyContent />
      </>
    );
  }

  if (slug === "pharmica") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pharmicaPharmacyLandingJsonGraph()),
          }}
        />
        <PharmicaPharmacyContent />
      </>
    );
  }

  if (slug === "pills2u") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pills2uPharmacyLandingJsonGraph()),
          }}
        />
        <Pills2uPharmacyContent />
      </>
    );
  }

  if (slug === "pillsorted") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pillSortedPharmacyLandingJsonGraph()),
          }}
        />
        <PillSortedPharmacyContent />
      </>
    );
  }

  if (slug === "pillsphere") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pillSpherePharmacyLandingJsonGraph()),
          }}
        />
        <PillSpherePharmacyContent />
      </>
    );
  }

  if (slug === "quickmeds") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(quickmedsPharmacyLandingJsonGraph()),
          }}
        />
        <QuickmedsPharmacyContent />
      </>
    );
  }

  if (slug === "second-nature") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(secondNaturePharmacyLandingJsonGraph()),
          }}
        />
        <SecondNaturePharmacyContent />
      </>
    );
  }

  if (slug === "care-pharmacy") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(theCarePharmacyLandingJsonGraph()),
          }}
        />
        <TheCarePharmacyContent />
      </>
    );
  }

  if (slug === "simple-online-pharmacy") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(simpleOnlinePharmacyLandingJsonGraph()),
          }}
        />
        <SimpleOnlinePharmacyContent />
      </>
    );
  }

  if (slug === "slimming-direct") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(slimmingDirectPharmacyLandingJsonGraph()),
          }}
        />
        <SlimmingDirectPharmacyContent />
      </>
    );
  }

  if (slug === "superdrug-online-doctor") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(superdrugOnlineDoctorLandingJsonGraph()),
          }}
        />
        <SuperdrugOnlineDoctorContent />
      </>
    );
  }

  if (slug === "swift-doctor") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(swiftDoctorPharmacyLandingJsonGraph()),
          }}
        />
        <SwiftDoctorPharmacyContent />
      </>
    );
  }

  if (slug === "the-family-chemist") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(theFamilyChemistPharmacyLandingJsonGraph()),
          }}
        />
        <TheFamilyChemistPharmacyContent />
      </>
    );
  }

  if (slug === "the-independent-pharmacy") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(theIndependentPharmacyLandingJsonGraph()),
          }}
        />
        <TheIndependentPharmacyContent />
      </>
    );
  }

  if (slug === "tribelle") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(tribellePharmacyLandingJsonGraph()),
          }}
        />
        <TribellePharmacyContent />
      </>
    );
  }

  if (slug === "voy") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(voyPharmacyLandingJsonGraph()),
          }}
        />
        <VoyPharmacyContent />
      </>
    );
  }

  if (slug === "weprescribe") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(wePrescribePharmacyLandingJsonGraph()),
          }}
        />
        <WePrescribePharmacyContent />
      </>
    );
  }

  if (slug === "well-pharmacy") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(wellPharmacyLandingJsonGraph()),
          }}
        />
        <WellPharmacyContent />
      </>
    );
  }

  if (slug === "zava") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(zavaPharmacyLandingJsonGraph()),
          }}
        />
        <ZavaPharmacyContent />
      </>
    );
  }

  const w = getWegovyCompareProviderById(slug);
  const m = getMounjaroCompareProviderById(slug);
  const s = getSaxendaCompareProviderById(slug);
  if (!w && !m && !s) notFound();

  const displayName = w?.name ?? m?.name ?? s!.name;

  if (slug === "asda-online-doctor") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(asdaPharmacyLandingJsonGraph()),
          }}
        />
        <AsdaOnlineDoctorContent />
      </>
    );
  }

  if (slug === "ashcroft-pharmacy") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ashcroftPharmacyLandingJsonGraph()),
          }}
        />
        <AshcroftPharmacyContent />
      </>
    );
  }

  const meds: string[] = [];
  if (m) meds.push("Mounjaro");
  if (w) meds.push("Wegovy");
  if (s) meds.push("Saxenda");
  const profileTitle = `${displayName} — ${meds.join(" & ")} UK prices (2026)`;
  const profileDescription = `Independent snapshot: ${displayName} — illustrative ${meds.join(" and ")} pen prices and delivery notes on Health Wise.`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            pharmacyProfileJsonGraph({
              slug,
              name: displayName,
              title: profileTitle,
              description: profileDescription,
            }),
          ),
        }}
      />
    <article className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
      <div className="flex flex-col gap-2 border-b border-slate-200 pb-6">
        {w && (
          <Link
            href="/wegovy-price-comparison"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-800 underline-offset-2 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to Wegovy price comparison
          </Link>
        )}
        {m && (
          <Link
            href="/mounjaro-price-comparison"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-800 underline-offset-2 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to Mounjaro price comparison
          </Link>
        )}
        {s && (
          <Link
            href="/saxenda-price-comparison"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-800 underline-offset-2 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to Saxenda price comparison
          </Link>
        )}
      </div>

      <header className="mt-8 border-b border-slate-200 pb-8">
        <p className="text-sm font-medium text-slate-500">UK pharmacy profile</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          {displayName}
        </h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Illustrative pen prices from our comparison snapshots for{" "}
          <strong className="font-semibold text-slate-800">{displayName}</strong>
          . Always confirm live pricing and prescribing rules on the provider’s
          own site.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {w && (
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900">
              Wegovy from £{wegovyStartingPrice(w)}
            </span>
          )}
          {m && (
            <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-900">
              Mounjaro from £{mounjaroStartingPrice(m)}
            </span>
          )}
          {s && (
            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-900">
              Saxenda from £{s.packs["1"].packPrice.toFixed(2)} (1 pen)
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            <TrustpilotStarIcon className="h-3.5 w-3.5 shrink-0" />
            <span>Trustpilot {(w ?? m ?? s)!.rating.toFixed(1)}</span>
          </span>
        </div>
      </header>

      {w && (
        <section className="py-10" aria-labelledby="wegovy-prices-heading">
          <h2
            id="wegovy-prices-heading"
            className="text-xl font-bold text-slate-900"
          >
            Wegovy pen prices (illustrative)
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Per-strength figures — {WEGOVY_UK_COMPARE_LAST_UPDATED} snapshot.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-3">Strength</th>
                  <th className="px-4 py-3">Price</th>
                </tr>
              </thead>
              <tbody>
                {WEGOVY_DOSE_KEYS.map((k) => (
                  <tr key={k} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 py-3 text-slate-800">{k}</td>
                    <td className="px-4 py-3 tabular-nums font-medium text-slate-900">
                      £{w.prices[k]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Delivery note: {w.deliveryNote} · Updated {w.updatedLabel}
          </p>
        </section>
      )}

      {m && (
        <section className="border-t border-slate-200 py-10" aria-labelledby="mounjaro-prices-heading">
          <h2
            id="mounjaro-prices-heading"
            className="text-xl font-bold text-slate-900"
          >
            Mounjaro pen prices (illustrative)
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Per-strength figures — {MOUNJARO_UK_COMPARE_LAST_UPDATED} snapshot.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-3">Strength</th>
                  <th className="px-4 py-3">Price</th>
                </tr>
              </thead>
              <tbody>
                {MOUNJARO_DOSE_KEYS.map((k) => (
                  <tr key={k} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 py-3 text-slate-800">{k}</td>
                    <td className="px-4 py-3 tabular-nums font-medium text-slate-900">
                      £{m.prices[k]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Delivery note: {m.deliveryNote} · Updated {m.updatedLabel}
          </p>
        </section>
      )}

      {s && (
        <section className="border-t border-slate-200 py-10" aria-labelledby="saxenda-prices-heading">
          <h2
            id="saxenda-prices-heading"
            className="text-xl font-bold text-slate-900"
          >
            Saxenda pack prices (illustrative)
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            1 / 3 / 5 pens — {SAXENDA_UK_COMPARE_LAST_UPDATED} snapshot.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-3">Pack</th>
                  <th className="px-4 py-3">Pack price</th>
                  <th className="px-4 py-3">£/mg</th>
                  <th className="px-4 py-3">Repeat</th>
                </tr>
              </thead>
              <tbody>
                {SAXENDA_PACK_KEYS.map((k) => {
                  const row = s.packs[k];
                  const label =
                    k === "1" ? "1 pen" : k === "3" ? "3 pens" : "5 pens";
                  return (
                    <tr key={k} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-3 text-slate-800">{label}</td>
                      <td className="px-4 py-3 tabular-nums font-medium text-slate-900">
                        £{row.packPrice.toFixed(2)}
                      </td>
                      <td className="px-4 py-3 tabular-nums text-slate-700">
                        £{row.pricePerMg.toFixed(2)}/mg
                      </td>
                      <td className="px-4 py-3 tabular-nums text-slate-800">
                        £{row.repeatPrice.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Delivery: {s.packs["1"].deliverySummary} · GPhC ref:{" "}
            {s.packs["1"].gphcRef} · Updated {s.updatedLabel}
          </p>

          <h3 className="mt-10 text-lg font-bold text-slate-900">
            Daily dose steps (illustrative)
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Order-style prices at each titration — same snapshot as the compare
            table.
          </p>
          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-3">Daily dose</th>
                  <th className="px-4 py-3">Price</th>
                </tr>
              </thead>
              <tbody>
                {SAXENDA_COMPARE_DOSE_KEYS.map((k) => (
                  <tr key={k} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 py-3 text-slate-800">{k} mg</td>
                    <td className="px-4 py-3 tabular-nums font-medium text-slate-900">
                      £{s.doses[k]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <section className="border-t border-slate-200 py-10" aria-labelledby="ops-heading">
        <h2 id="ops-heading" className="text-xl font-bold text-slate-900">
          Consultation &amp; GPhC
        </h2>
        <p className="mt-4 text-sm text-slate-600">
          Private routes typically require an online clinical assessment before
          supply. Verify the supplying pharmacy on the{" "}
          <a
            href="https://www.pharmacyregulation.org/registers/pharmacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-slate-800 underline-offset-2 hover:underline"
          >
            GPhC register
          </a>
          .
        </p>
      </section>

      <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-6 text-slate-600">
        <p className="text-sm font-semibold text-slate-800">Profile URL</p>
        <p className="mt-2 text-sm leading-relaxed">
          Stable route:{" "}
          <code className="rounded bg-white px-1.5 py-0.5 text-xs text-slate-800">
            {pharmacyProfileHref(slug)}
          </code>
        </p>
      </section>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {w && (
          <CompareHereLink href="/wegovy-price-comparison#wegovy-compare-table" />
        )}
        {m && (
          <CompareHereLink href="/mounjaro-price-comparison#mounjaro-compare-table" />
        )}
        {s && (
          <CompareHereLink href="/saxenda-price-comparison#saxenda-compare-table" />
        )}
        <Link
          href="/helpful-guides"
          className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-300"
        >
          Check eligibility
        </Link>
      </div>
    </article>
    </>
  );
}
