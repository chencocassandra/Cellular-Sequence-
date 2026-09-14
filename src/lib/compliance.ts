import type { Peptide, Product } from "@/lib/types";

export const TOPICAL_USE_LABEL = "Not for injection — topical use only";

export const SHOP_POSITIONING =
  "These are leave-on cosmetics, cosmetic devices and permitted consumer products. They are not injectable research peptides, not compounded medicines, and not for injection.";

export const TGA_EXPLAINER_HREF = "/learn/tga-status";

export type TgaMark = "tga-approved" | "approved-medicine" | "research-only";

export const TGA_MARK_LABEL: Record<TgaMark, string> = {
  "tga-approved": "TGA approved",
  "approved-medicine": "Approved medicine",
  "research-only": "For research purposes only",
};

export function tgaMarkForPeptide(p: Peptide): TgaMark {
  if (p.badges.includes("APPROVED_MEDICINE")) return "approved-medicine";
  if (
    p.badges.includes("RESEARCH_ONLY") ||
    p.badges.includes("NOT_APPROVED_FOR_HUMAN_USE") ||
    p.badges.includes("INVESTIGATIONAL")
  ) {
    return "research-only";
  }
  if (p.badges.includes("COSMETIC") || p.availableToPurchase) return "tga-approved";
  return "research-only";
}

export function tgaMarkForProduct(_p: Product): TgaMark {
  return "tga-approved";
}
