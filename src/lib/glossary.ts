export type GlossaryEvidence = "Well-established" | "Emerging evidence" | "Early research";

export type GlossaryEntry = {
  slug: string;
  name: string;
  inci: string;
  what: string;
  mechanism: string;
  evidence: GlossaryEvidence;
  peptideSlug: string;
};

export const glossaryEntries: GlossaryEntry[] = [
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    inci: "Copper Tripeptide-1",
    what: "A copper-binding tripeptide used in leave-on cosmetics for the look of firm, even skin.",
    mechanism: "Described in cosmetic and laboratory literature as a signal related to matrix appearance. Not a registered injectable medicine.",
    evidence: "Emerging evidence",
    peptideSlug: "ghk-cu",
  },
  {
    slug: "palmitoyl-pentapeptide-4",
    name: "Palmitoyl pentapeptide-4",
    inci: "Palmitoyl Pentapeptide-4",
    what: "A matrikine-style cosmetic peptide used in anti-ageing appearance serums.",
    mechanism: "Marketed as a fragment related to collagen-appearance signalling in topical products.",
    evidence: "Emerging evidence",
    peptideSlug: "palmitoyl-pentapeptide-4",
  },
  {
    slug: "palmitoyl-tripeptide-1",
    name: "Palmitoyl tripeptide-1",
    inci: "Palmitoyl Tripeptide-1",
    what: "A cosmetic tripeptide often paired with pentapeptide-4 in matrikine blends.",
    mechanism: "Topical cosmetic signalling narrative; not an injectable drug.",
    evidence: "Early research",
    peptideSlug: "palmitoyl-tripeptide-1",
  },
  {
    slug: "acetyl-hexapeptide-8",
    name: "Acetyl hexapeptide-8",
    inci: "Acetyl Hexapeptide-8",
    what: "A topical cosmetic peptide explored for the look of expression lines. Not botulinum toxin.",
    mechanism: "Proposed SNARE-related topical story; outcomes are modest versus prescription neuromodulators.",
    evidence: "Emerging evidence",
    peptideSlug: "acetyl-hexapeptide-8",
  },
];

export function getGlossaryEntry(slug: string) {
  return glossaryEntries.find((e) => e.slug === slug);
}
