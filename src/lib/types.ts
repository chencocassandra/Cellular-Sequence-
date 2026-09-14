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

export const EVIDENCE_GRADES = ["A", "B", "C", "D", "E"] as const;
export type EvidenceGrade = (typeof EVIDENCE_GRADES)[number];

export const EVIDENCE_GRADE_LABELS: Record<EvidenceGrade, string> = {
  A: "Approved clinical use / strong human evidence",
  B: "Multiple human clinical studies",
  C: "Limited or early human evidence",
  D: "Primarily animal / preclinical evidence",
  E: "Mechanistic / theoretical evidence only",
};

export const RESEARCH_TOPICS = [
  "metabolic",
  "body-composition",
  "muscle",
  "tendon",
  "bone",
  "inflammation",
  "gut",
  "neurological",
  "sleep",
  "hormonal",
  "skin",
  "hair",
  "longevity",
  "mitochondrial",
  "immune",
  "sexual-health",
  "recovery",
  "cardiovascular",
  "growth-hormone-axis",
  "cognitive",
  "other",
] as const;

export type ResearchTopic = (typeof RESEARCH_TOPICS)[number];

export const RESEARCH_TOPIC_LABELS: Record<ResearchTopic, string> = {
  metabolic: "Metabolic health",
  "body-composition": "Body composition",
  muscle: "Muscle",
  tendon: "Tendon / ligament research",
  bone: "Bone",
  inflammation: "Inflammation",
  gut: "Gut",
  neurological: "Neurological research",
  sleep: "Sleep",
  hormonal: "Hormonal pathways",
  skin: "Skin",
  hair: "Hair",
  longevity: "Longevity",
  mitochondrial: "Mitochondrial function",
  immune: "Immune system",
  "sexual-health": "Sexual health",
  recovery: "Recovery",
  cardiovascular: "Cardiovascular research",
  "growth-hormone-axis": "Growth-hormone axis",
  cognitive: "Cognitive",
  other: "Other",
};

export type EncCitation = {
  key: string;
  title: string;
  authors?: string;
  journal?: string;
  year?: number;
  doi?: string;
  pmid?: string;
  nct?: string;
  url?: string;
};

export type EncHumanStudy = {
  id: string;
  population: string;
  n: string;
  studyType: string;
  compound: string;
  dose: string;
  route: string;
  duration: string;
  primaryOutcome: string;
  findings: string;
  limitations: string;
  citationKey: string;
};

export type EncPreclinicalStudy = {
  id: string;
  model: string;
  studyType: string;
  findings: string;
  limitations: string;
  citationKey: string;
};

export type EncResearchDose = {
  study: string;
  model: string;
  dose: string;
  unit: string;
  route: string;
  frequency: string;
  duration: string;
  purpose: string;
  citationKey: string;
};

export type EncApprovedDose = {
  authority: "TGA" | "FDA" | "EMA";
  country: string;
  product: string;
  indication: string;
  regimen: string;
  sourceTitle: string;
  sourceUrl: string;
};

export type EncResearchArea = {
  label: string;
  topic: ResearchTopic;
  evidence: EvidenceGrade;
  summary: string;
  citationKeys: string[];
};

export type EncPharmacokinetics = {
  halfLife?: string;
  tmax?: string;
  cmax?: string;
  bioavailability?: string;
  clearance?: string;
  metabolism?: string;
  elimination?: string;
  doseResponse?: string;
  notes?: string;
};

export type EncSafety = {
  adverseEffects: string;
  seriousEvents?: string;
  interactions?: string;
  excludedPopulations?: string;
  pregnancy?: string;
  organImpairment?: string;
  longTerm?: string;
  unknowns?: string;
};

export type EncRegulatoryDetail = {
  tga: string;
  fda: string;
  ema: string;
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
  lastReviewed?: string;
  molecularFormula?: string;
  molecularWeight?: string;
  sequence?: string;
  primaryTarget?: string;
  halfLife?: string;
  routesInvestigated?: string[];
  humanEvidenceLevel?: EvidenceGrade;
  researchStatus?: string;
  origin?: string;
  mechanismDetail?: string;
  mechanismCertainty?: "established" | "proposed" | "not-fully-established";
  researchAreasDetail?: EncResearchArea[];
  humanStudies?: EncHumanStudy[];
  preclinicalStudies?: EncPreclinicalStudy[];
  researchDosesHuman?: EncResearchDose[];
  researchDosesAnimal?: EncResearchDose[];
  approvedDoses?: EncApprovedDose[];
  pharmacokinetics?: EncPharmacokinetics;
  safetyDetail?: EncSafety;
  regulatoryDetail?: EncRegulatoryDetail;
  citations?: EncCitation[];
  interactions?: string;
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
  /** True only when the SKU is a therapeutic good approved/listed for sale in Australia. */
  tgaApprovedForSale?: boolean;
  ingredientSlugs?: string[];
  /**
   * Supplier listing for dropship fulfilment only. Never show this URL on the
   * storefront — shoppers stay on this site and use the cart.
   */
  supplierUrl?: string;
  /** Replaces the default topical-use line on shop cards (oral tablets, patches). */
  usageNote?: string;
};
