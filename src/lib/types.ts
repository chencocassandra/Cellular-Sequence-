export const REGULATORY_BADGES = [
  "APPROVED_MEDICINE",
  "COSMETIC",
  "INVESTIGATIONAL",
  "RESEARCH_ONLY",
  "NOT_APPROVED_FOR_HUMAN_USE",
] as const;

export type RegulatoryBadge = (typeof REGULATORY_BADGES)[number];

export const BADGE_LABELS: Record<RegulatoryBadge, string> = {
  APPROVED_MEDICINE: "Approved medicine",
  COSMETIC: "Cosmetic",
  INVESTIGATIONAL: "Investigational",
  RESEARCH_ONLY: "Research only",
  NOT_APPROVED_FOR_HUMAN_USE: "Not approved for human use",
};

export const PEPTIDE_AREAS = [
  "skin-hair",
  "metabolic",
  "recovery",
  "healthy-ageing",
  "cognitive",
  "performance",
] as const;

export type PeptideArea = (typeof PEPTIDE_AREAS)[number];

export const AREA_LABELS: Record<PeptideArea, string> = {
  "skin-hair": "Skin & Hair",
  metabolic: "Metabolic",
  recovery: "Recovery",
  "healthy-ageing": "Healthy Ageing",
  cognitive: "Cognitive",
  performance: "Performance",
};

export type PeptideReference = {
  title: string;
  citation: string;
  url?: string;
};

export type Peptide = {
  slug: string;
  name: string;
  alternativeNames: string[];
  peptideClass: string;
  structure: string;
  whatItIs: string;
  howItWorks: string;
  whatItDoesInBody: string;
  studiedFor: string[];
  potentialBenefits: string[];
  mayNotBeUsefulFor: string[];
  humanEvidence: string;
  preclinicalEvidence: string;
  sideEffects: string;
  contraindications: string;
  regulatoryStatus: string;
  australianRegulatoryStatus: string;
  badges: RegulatoryBadge[];
  areas: PeptideArea[];
  availableToPurchase: boolean;
  productHref?: string;
  searchTerms: string[];
  references: PeptideReference[];
};

export const OIL_TABLET_FORMS = ["oil", "tablet"] as const;
export type OilTabletForm = (typeof OIL_TABLET_FORMS)[number];

export const OIL_TABLET_FORM_LABELS: Record<OilTabletForm, string> = {
  oil: "Oil / injectable",
  tablet: "Tablet / capsule",
};

export const OIL_TABLET_CATEGORIES = [
  "anabolic-steroid",
  "sarm-secretagogue",
  "endocrine-accessory",
  "thyroid-stimulant",
  "sexual-health",
  "other-medicine",
  "industrial-poison",
] as const;

export type OilTabletCategory = (typeof OIL_TABLET_CATEGORIES)[number];

export const OIL_TABLET_CATEGORY_LABELS: Record<OilTabletCategory, string> = {
  "anabolic-steroid": "Anabolic–androgenic steroids",
  "sarm-secretagogue": "SARMs and related research agents",
  "endocrine-accessory": "Anti-oestrogens and endocrine accessories",
  "thyroid-stimulant": "Thyroid and stimulants",
  "sexual-health": "Sexual-health medicines",
  "other-medicine": "Other listed medicines",
  "industrial-poison": "Industrial / metabolic poisons",
};

export type OilTabletEntry = {
  slug: string;
  name: string;
  alternativeNames: string[];
  forms: OilTabletForm[];
  category: OilTabletCategory;
  chemicalClass: string;
  cataloguePresentations: string[];
  whatItIs: string;
  risks: string;
  regulatoryStatus: string;
  australianRegulatoryStatus: string;
  badges: RegulatoryBadge[];
  searchTerms: string[];
  peptideHref?: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  summary: string;
  badge?: string;
  image: string;
  labelName?: string;
  labelDetail?: string;
  labelFooter?: string;
};
