import type { Product } from "./types";

export const PRODUCT_VIAL_IMAGE = "/images/product-vial.jpg";

export const products: Product[] = [
  {
    slug: "protocol-needling-pen",
    name: "Protocol Facial Needling Pen",
    category: "facial-needling",
    price: "$189",
    summary: "Adjustable cosmetic needling system for at-home complexion routines.",
    badge: "Best seller",
    image: "/images/product-needling-pen-v2.jpg",
    labelName: "Needling Pen",
    labelDetail: "Cosmetic device",
  },
  {
    slug: "disposable-micro-infusion-stamps",
    name: "Disposable Micro-Infusion Stamps",
    category: "facial-needling",
    price: "$48",
    summary:
      "Single-use hydra stamp heads with a serum chamber and gold needle plate. Offered in 0.25 mm and 0.5 mm cosmetic depths. Do not share. Dispose as sharps.",
    badge: "Disposable",
    image: "/images/product-micro-infusion-stamps-v2.jpg",
    labelName: "Hydra Stamps",
    labelDetail: "0.25–0.5 mm",
  },
  {
    slug: "ghk-cu-serum",
    name: "GHK-Cu Copper Peptide Serum",
    category: "peptide-serums",
    price: "$78",
    summary: "Leave-on cosmetic copper tripeptide serum for the look of firm, even skin.",
    badge: "Cosmetic peptide",
    image: PRODUCT_VIAL_IMAGE,
    labelName: "GHK-Cu Serum",
    labelDetail: "30 ml · Cosmetic",
  },
  {
    slug: "matrikine-serum",
    name: "Matrikine Peptide Serum",
    category: "peptide-serums",
    price: "$72",
    summary: "Palmitoyl pentapeptide-4 and tripeptide-1 in a barrier-aware base.",
    image: PRODUCT_VIAL_IMAGE,
    labelName: "Matrikine Serum",
    labelDetail: "30 ml · Cosmetic",
  },
  {
    slug: "cooling-case",
    name: "Protocol Cooling Case",
    category: "cooling-storage",
    price: "$64",
    summary: "Insulated storage for temperature-sensitive cosmetic serums while travelling.",
    badge: "New",
    image: "/images/product-cooling-case.jpg",
    labelName: "Cooling Case",
    labelDetail: "Travel storage",
  },
  {
    slug: "pen-cartridge-pack",
    name: "Disposable Stamp Head Pack",
    category: "facial-needling",
    price: "$39",
    summary:
      "Sealed single-use micro-infusion stamp heads for the protocol. One head, one session. Do not share.",
    image: "/images/product-micro-infusion-stamps-v2.jpg",
    labelName: "Stamp Heads",
    labelDetail: "Single use",
  },
  {
    slug: "prep-hygiene-kit",
    name: "Preparation & Hygiene Kit",
    category: "preparation-hygiene",
    price: "$34",
    summary: "Cleansing, barrier wipes and aftercare essentials for cosmetic needling.",
    image: "/images/product-hygiene.png",
    labelName: "Hygiene Kit",
    labelDetail: "Prep & aftercare",
  },
  {
    slug: "alcohol-prep-pads",
    name: "Protocol Alcohol Prep Pads",
    category: "preparation-hygiene",
    price: "$12",
    summary: "Individually wrapped prep pads for cleansing skin before cosmetic needling. Not for injectable research compounds.",
    image: "/images/product-alcohol-prep-pads.jpg",
    labelName: "Prep Pads",
    labelDetail: "Single use",
  },
  {
    slug: "nitrile-gloves",
    name: "Protocol Nitrile Gloves",
    category: "preparation-hygiene",
    price: "$18",
    summary: "Disposable black nitrile gloves for a clean cosmetic needling setup.",
    image: "/images/product-nitrile-gloves.jpg",
    labelName: "Nitrile Gloves",
    labelDetail: "Cosmetic prep",
  },
  {
    slug: "disposable-syringes",
    name: "Protocol Disposable Syringes",
    category: "preparation-hygiene",
    price: "$16",
    summary: "Single-use 1 ml syringes for measuring cosmetic serums in the protocol kit. Dispose as sharps. Research-only peptides are not sold.",
    image: "/images/product-disposable-syringes.jpg",
    labelName: "Syringes 1 ml",
    labelDetail: "Single use",
  },
  {
    slug: "cartridge-injector",
    name: "Protocol 3 mL Cartridge Injector",
    category: "facial-needling",
    price: "$54",
    summary: "Disposable multi-dose 3 mL cartridge injector for protocol cosmetic use. Research-only compounds cannot be purchased here.",
    image: "/images/product-cartridge-injector.jpg",
    labelName: "3 mL Injector",
    labelDetail: "Cartridge system",
  },
  {
    slug: "recovery-barrier-balm",
    name: "Recovery Barrier Balm",
    category: "recovery",
    price: "$42",
    summary: "Post-needling cosmetic balm to support the look of a calm barrier.",
    image: PRODUCT_VIAL_IMAGE,
    labelName: "Barrier Balm",
    labelDetail: "Cosmetic",
  },
  {
    slug: "focus-theanine-capsules",
    name: "Permitted Focus Capsules",
    category: "cognitive",
    price: "$38",
    summary: "Listed-style caffeine + L-theanine blend for alertness. Not a peptide medicine.",
    image: PRODUCT_VIAL_IMAGE,
    labelName: "Focus Capsules",
    labelDetail: "Caffeine + L-theanine",
    labelFooter: "Listed supplement",
  },
  {
    slug: "longevity-antioxidant",
    name: "Antioxidant Longevity Complex",
    category: "longevity",
    price: "$54",
    summary: "Permitted antioxidant nutrients. Not NMN as an unapproved therapeutic.",
    image: PRODUCT_VIAL_IMAGE,
    labelName: "Antioxidant Complex",
    labelDetail: "Permitted nutrients",
    labelFooter: "Listed supplement",
  },
  {
    slug: "skin-protocol-bundle",
    name: "Advanced Skin Protocol Bundle",
    category: "bundles",
    price: "$248",
    summary:
      "Needling pen, disposable micro-infusion stamps, copper peptide serum, hygiene kit and cooling case.",
    badge: "Bundle",
    image: PRODUCT_VIAL_IMAGE,
    labelName: "Skin Protocol",
    labelDetail: "Complete kit",
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
    intro: "Cosmetic needling pens, hydra stamp heads, and a 3 mL cartridge injector for protocol cosmetic use.",
    filter: "facial-needling",
  },
  "peptide-serums": {
    title: "GHK-Cu / peptide serums",
    intro: "Topical copper-peptide and matrikine cosmetics. Injectable research peptides are not sold.",
    filter: "peptide-serums",
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
