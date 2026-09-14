import type { Peptide, Product } from "@/lib/types";

export const TOPICAL_USE_LABEL = "Not for injection — topical use only";

export const SHOP_POSITIONING =
  "These are leave-on cosmetics, cosmetic devices and permitted consumer products. They are not injectable research peptides, not compounded medicines, and not for injection.";

export const TGA_EXPLAINER_HREF = "/learn/tga-status";

export type TgaMark = "approved-for-sale" | "approved-not-sold" | "not-approved";

export const TGA_MARK_LABEL: Record<TgaMark, string> = {
  "approved-for-sale": "TGA approved for sale",
  "approved-not-sold": "TGA approved · not sold here",
  "not-approved": "Not TGA approved",
};

export function tgaMarkForPeptide(p: Peptide): TgaMark {
  if (p.badges.includes("APPROVED_MEDICINE")) {
    return p.availableToPurchase ? "approved-for-sale" : "approved-not-sold";
  }
  return "not-approved";
}

export function tgaMarkForProduct(p: Product): TgaMark {
  return p.tgaApprovedForSale ? "approved-for-sale" : "not-approved";
}
