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

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  summary: string;
  badge?: string;
};
