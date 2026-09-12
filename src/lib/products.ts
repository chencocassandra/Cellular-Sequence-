import type { Product } from "./types";

export const products: Product[] = [
  {
    slug: "protocol-needling-pen",
    name: "Protocol Facial Needling Pen",
    category: "facial-needling",
    price: "$189",
    summary: "Adjustable cosmetic needling system for at-home complexion routines.",
    badge: "Best seller",
  },
  {
    slug: "ghk-cu-serum",
    name: "GHK-Cu Copper Peptide Serum",
    category: "peptide-serums",
    price: "$78",
    summary: "Leave-on cosmetic copper tripeptide serum for the look of firm, even skin.",
    badge: "Cosmetic peptide",
  },
  {
    slug: "matrikine-serum",
    name: "Matrikine Peptide Serum",
    category: "peptide-serums",
    price: "$72",
    summary: "Palmitoyl pentapeptide-4 and tripeptide-1 in a barrier-aware base.",
  },
  {
    slug: "cooling-case",
    name: "Protocol Cooling Case",
    category: "cooling-storage",
    price: "$64",
    summary: "Insulated storage for temperature-sensitive cosmetic serums while travelling.",
    badge: "New",
  },
  {
    slug: "pen-cartridge-pack",
    name: "Needling Cartridge Pack",
    category: "pen-accessories",
    price: "$39",
    summary: "Single-use cartridges for the Protocol pen. Do not share devices.",
  },
  {
    slug: "prep-hygiene-kit",
    name: "Preparation & Hygiene Kit",
    category: "preparation-hygiene",
    price: "$34",
    summary: "Cleansing, barrier wipes and aftercare essentials for cosmetic needling.",
  },
  {
    slug: "recovery-barrier-balm",
    name: "Recovery Barrier Balm",
    category: "recovery",
    price: "$42",
    summary: "Post-needling cosmetic balm to support the look of a calm barrier.",
  },
  {
    slug: "focus-theanine-capsules",
    name: "Permitted Focus Capsules",
    category: "cognitive",
    price: "$38",
    summary: "Listed-style caffeine + L-theanine blend for alertness. Not a peptide medicine.",
  },
  {
    slug: "longevity-antioxidant",
    name: "Antioxidant Longevity Complex",
    category: "longevity",
    price: "$54",
    summary: "Permitted antioxidant nutrients. Not NMN as an unapproved therapeutic.",
  },
  {
    slug: "skin-protocol-bundle",
    name: "Advanced Skin Protocol Bundle",
    category: "bundles",
    price: "$248",
    summary: "Needling pen, copper peptide serum, hygiene kit and cooling case.",
    badge: "Bundle",
  },
];

export const shopCategories: Record<
  string,
  { title: string; intro: string; filter?: string }
> = {
  "best-sellers": {
    title: "Best sellers",
    intro: "The protocol products customers return to.",
    filter: "best",
  },
  new: {
    title: "New",
    intro: "Recent additions to the consumer range.",
    filter: "new",
  },
  bundles: {
    title: "Bundles",
    intro: "Complete cosmetic protocol kits — never research chemicals.",
    filter: "bundles",
  },
  "facial-needling": {
    title: "Facial needling",
    intro: "Cosmetic needling devices and systems for complexion routines.",
    filter: "facial-needling",
  },
  "peptide-serums": {
    title: "Peptide serums",
    intro: "Topical cosmetic peptides only. Injectable research peptides are not sold.",
    filter: "peptide-serums",
  },
  longevity: {
    title: "Longevity",
    intro: "Permitted antioxidant and healthy-ageing supplements — not unapproved peptide drugs.",
    filter: "longevity",
  },
  cognitive: {
    title: "Cognitive",
    intro: "Permitted nootropic products. Investigational neuropeptides are encyclopaedia-only.",
    filter: "cognitive",
  },
  recovery: {
    title: "Recovery",
    intro: "Barrier recovery and aftercare cosmetics.",
    filter: "recovery",
  },
  "cooling-storage": {
    title: "Cooling & storage",
    intro: "Keep cosmetic serums stable in transit.",
    filter: "cooling-storage",
  },
  "pen-accessories": {
    title: "Pen accessories",
    intro: "Cartridges and parts for the Protocol needling pen.",
    filter: "pen-accessories",
  },
  "preparation-hygiene": {
    title: "Preparation & hygiene",
    intro: "Cleanse, prep and dispose of sharps-equivalent cartridges responsibly.",
    filter: "preparation-hygiene",
  },
};

export function productsForCategory(slug?: string) {
  if (!slug) return products;
  if (slug === "best-sellers") {
    return products.filter((p) => p.badge === "Best seller" || p.slug === "ghk-cu-serum");
  }
  if (slug === "new") return products.filter((p) => p.badge === "New");
  if (slug === "bundles") return products.filter((p) => p.category === "bundles");
  return products.filter((p) => p.category === slug);
}
