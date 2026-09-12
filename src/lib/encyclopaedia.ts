import {
  AREA_LABELS,
  BADGE_LABELS,
  EVIDENCE_GRADE_LABELS,
  RESEARCH_TOPIC_LABELS,
  type EncCitation,
  type EvidenceGrade,
  type Peptide,
  type ResearchTopic,
} from "./types";

export const EDUCATIONAL_DISCLAIMER =
  "For educational and research reference only. This page summarises published scientific literature and does not constitute medical advice, prescribing information or a recommendation to use an investigational compound. Research doses shown describe doses reported in published studies and are not personalised dosing instructions.";

export const RESEARCH_COMPOUND_BANNER =
  "This compound does not have an established approved therapeutic dosing schedule. Doses below describe those reported in published scientific research and should not be interpreted as a treatment recommendation.";

export const INSUFFICIENT_EVIDENCE = "Insufficient reliable evidence identified.";

export function pubmedUrl(pmid: string) {
  return `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`;
}

export function doiUrl(doi: string) {
  return `https://doi.org/${doi}`;
}

export function citationHref(c: EncCitation) {
  if (c.url) return c.url;
  if (c.doi) return doiUrl(c.doi);
  if (c.pmid) return pubmedUrl(c.pmid);
  if (c.nct) return `https://clinicaltrials.gov/study/${c.nct}`;
  return undefined;
}

export function formatCitation(c: EncCitation) {
  const bits = [
    c.authors,
    c.title,
    c.journal && c.year ? `${c.journal}. ${c.year}.` : c.journal || (c.year ? String(c.year) : undefined),
    c.doi ? `doi:${c.doi}` : undefined,
    c.pmid ? `PMID ${c.pmid}` : undefined,
    c.nct ? c.nct : undefined,
  ].filter(Boolean);
  return bits.join(" ");
}

export function citationsFromLegacy(p: Peptide): EncCitation[] {
  if (p.citations && p.citations.length > 0) return p.citations;
  return p.references.map((ref, i) => ({
    key: `${p.slug}-ref-${i + 1}`,
    title: ref.title,
    url: ref.url,
  }));
}

export function overallEvidence(p: Peptide): EvidenceGrade {
  if (p.humanEvidenceLevel) return p.humanEvidenceLevel;
  if (p.badges.includes("APPROVED_MEDICINE")) return "A";
  if (p.badges.includes("COSMETIC")) return "C";
  if (p.badges.includes("INVESTIGATIONAL")) return "C";
  return "D";
}

export function isApprovedMedicine(p: Peptide) {
  return p.badges.includes("APPROVED_MEDICINE");
}

export function isInvestigationalListing(p: Peptide) {
  return (
    p.badges.includes("RESEARCH_ONLY") ||
    p.badges.includes("INVESTIGATIONAL") ||
    p.badges.includes("NOT_APPROVED_FOR_HUMAN_USE")
  );
}

export function glanceRows(p: Peptide) {
  const pk = p.pharmacokinetics;
  return [
    { label: "Classification", value: p.peptideClass },
    { label: "Approval status", value: p.badges.map((b) => BADGE_LABELS[b]).join(" · ") },
    { label: "Research status", value: p.researchStatus ?? (isApprovedMedicine(p) ? "Labelled indications are defined in product information." : "Investigational / reference listing.") },
    { label: "Molecular formula", value: p.molecularFormula ?? INSUFFICIENT_EVIDENCE },
    { label: "Molecular weight", value: p.molecularWeight ?? INSUFFICIENT_EVIDENCE },
    { label: "Sequence", value: p.sequence ?? p.structure },
    { label: "Primary biological target", value: p.primaryTarget ?? INSUFFICIENT_EVIDENCE },
    { label: "Half-life", value: p.halfLife ?? pk?.halfLife ?? INSUFFICIENT_EVIDENCE },
    { label: "Routes investigated", value: p.routesInvestigated?.join(", ") ?? INSUFFICIENT_EVIDENCE },
    {
      label: "Human evidence level",
      value: `${overallEvidence(p)} — ${EVIDENCE_GRADE_LABELS[overallEvidence(p)]}`,
    },
  ];
}

export function searchHaystack(p: Peptide) {
  return [
    p.name,
    p.slug,
    ...p.alternativeNames,
    p.peptideClass,
    p.structure,
    p.whatItIs,
    p.howItWorks,
    p.primaryTarget,
    p.sequence,
    p.molecularFormula,
    ...p.studiedFor,
    ...p.areas.map((a) => AREA_LABELS[a]),
    ...(p.researchAreasDetail?.map((a) => `${a.label} ${RESEARCH_TOPIC_LABELS[a.topic]}`) ?? []),
    ...p.badges.map((b) => BADGE_LABELS[b]),
    ...p.searchTerms,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function peptidesByTopic(peptides: Peptide[], topic: ResearchTopic) {
  return peptides
    .filter((p) => {
      if (p.researchAreasDetail?.some((a) => a.topic === topic)) return true;
      if (topic === "skin" || topic === "hair") return p.areas.includes("skin-hair");
      if (topic === "metabolic") return p.areas.includes("metabolic");
      if (topic === "recovery") return p.areas.includes("recovery");
      if (topic === "longevity") return p.areas.includes("healthy-ageing");
      if (topic === "cognitive" || topic === "neurological") return p.areas.includes("cognitive");
      if (topic === "body-composition") return p.areas.includes("performance") || p.areas.includes("metabolic");
      return false;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function enrichPeptide(p: Peptide, overlay?: Partial<Peptide>): Peptide {
  const merged: Peptide = overlay ? { ...p, ...overlay } : { ...p };
  const citations = citationsFromLegacy(merged);
  return {
    ...merged,
    lastReviewed: merged.lastReviewed ?? "2026-09-13",
    citations,
    references:
      merged.references.length > 0
        ? merged.references
        : citations.map((c) => ({
            title: c.title,
            citation: formatCitation(c),
            url: citationHref(c),
          })),
    humanEvidenceLevel: overallEvidence(merged),
    safetyDetail: merged.safetyDetail ?? {
      adverseEffects: merged.sideEffects,
      interactions: merged.interactions,
      unknowns: "Absence of a published harm signal is not evidence of safety.",
    },
    pharmacokinetics: merged.pharmacokinetics ?? {
      notes: merged.halfLife
        ? undefined
        : "Reliable human pharmacokinetic data were not identified for this encyclopaedia entry, or are limited to product information for approved presentations.",
      halfLife: merged.halfLife,
    },
  };
}
