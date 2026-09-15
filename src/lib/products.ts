import type { Product } from "./types";

export const PRODUCT_VIAL_IMAGE = "/images/product-vial.jpg";

/** Dropship listing for the SNAP-8 salon serum colour variants. Not shown on the storefront. */
const SALON_SERUM_SUPPLIER =
  "https://www.alibaba.com/product-detail/S-Salon-SNAP-8-Peptide-Multi_1601832343667.html";

/** Dropship listing with GLP-1 and NAD+ patch types. Not shown on the storefront. */
const PATCH_SUPPLIER =
  "https://www.alibaba.com/product-detail/GLP-1-Patches-for-Weight-Loss_1601742625652.html";

/** Dropship listing behind both the NAD+ tablets and the antioxidant complex. Not shown on the storefront. */
const NAD_COMPLEX_SUPPLIER =
  "https://www.alibaba.com/product-detail/NAD-Complex-Adult-Anti-aging-Immune_1601713969082.html";

export const products: Product[] = [
  {
    slug: "protocol-needling-pen",
    name: "Professional Facial Needling Pen",
    category: "facial-needling",
    price: "$189",
    summary: "Adjustable cosmetic needling system for at-home complexion routines.",
    badge: "Best seller",
    image: "/images/product-needling-pen-v2.jpg",
    labelName: "Needling Pen",
    labelDetail: "Cosmetic device",
    supplierUrl:
      "https://www.alibaba.com/product-detail/Authentic-Dr-pen-M8-Wireless-Derma_1601720927110.html",
  },
  {
    slug: "disposable-micro-infusion-stamps",
    name: "Disposable Micro-Infusion",
    category: "facial-needling",
    price: "$48",
    summary:
      "Single-use hydra stamp heads with a serum chamber and gold needle plate. Offered in 0.25 mm and 0.5 mm cosmetic depths. Do not share. Dispose as sharps.",
    badge: "Disposable",
    image: "/images/product-micro-infusion-stamps-v2.jpg",
    labelName: "Hydra Stamps",
    labelDetail: "0.25–0.5 mm",
    supplierUrl:
      "https://www.alibaba.com/product-detail/20-Pins-Hydra-Needle-Titanium-Derma_1601813026786.html",
  },
  {
    slug: "ghk-cu-serum",
    name: "GHK-Cu Copper Peptide Serum",
    category: "peptide-serums",
    price: "$78",
    summary: "Leave-on cosmetic copper tripeptide serum for the look of firm, even skin.",
    badge: "Cosmetic peptide",
    image: "/images/product-ghk-cu.png",
    labelName: "GHK-Cu Serum",
    labelDetail: "30 ml · Cosmetic",
    ingredientSlugs: ["ghk-cu"],
  },
  {
    slug: "matrikine-serum",
    name: "Matrikine Peptide Serum",
    category: "peptide-serums",
    price: "$72",
    summary: "Palmitoyl pentapeptide-4 and tripeptide-1 in a barrier-aware base.",
    image: "/images/product-matrikine.png",
    labelName: "Matrikine Serum",
    labelDetail: "30 ml · Cosmetic",
    ingredientSlugs: ["palmitoyl-pentapeptide-4", "palmitoyl-tripeptide-1"],
  },
  {
    slug: "snap-8-serum",
    name: "SNAP-8 Peptide Anti-Ageing Serum",
    category: "peptide-serums",
    price: "$69",
    summary:
      "Leave-on acetyl hexapeptide-8 cosmetic for the look of expression lines. Not botulinum toxin. Not for injection.",
    badge: "New",
    image: "/images/product-snap-8-serum.png",
    labelName: "SNAP-8 Serum",
    labelDetail: "Type 1 · anti-ageing",
    ingredientSlugs: ["acetyl-hexapeptide-8"],
    supplierUrl: SALON_SERUM_SUPPLIER,
  },
  {
    slug: "pdrn-exo-serum",
    name: "PDRN + Exosome Recovery Serum",
    category: "peptide-serums",
    price: "$84",
    summary:
      "Leave-on cosmetic for the look of recovering, comfortable skin. Not a stem-cell medicine. Not for injection.",
    image: "/images/product-pdrn-exo-serum.png",
    labelName: "PDRN + EXO",
    labelDetail: "Type 2 · recovery",
    supplierUrl: SALON_SERUM_SUPPLIER,
  },
  {
    slug: "ghk-cu-ahk-cu-scalp-serum",
    name: "GHK-Cu + AHK-Cu Scalp Care Serum",
    category: "peptide-serums",
    price: "$59",
    summary:
      "Leave-on copper-peptide cosmetic for the look of scalp and hair. Appearance only — not a hair-loss medicine.",
    image: "/images/product-ghk-cu-scalp-serum.png",
    labelName: "Scalp GHK-Cu",
    labelDetail: "Type 3 · scalp",
    ingredientSlugs: ["ghk-cu"],
    supplierUrl: SALON_SERUM_SUPPLIER,
  },
  {
    slug: "pdrn-ha-serum",
    name: "PDRN + HA Hydrating Serum",
    category: "peptide-serums",
    price: "$49",
    summary:
      "Leave-on hydrating cosmetic with PDRN and hyaluronic acid for the look of a plump, comfortable surface. Not for injection.",
    image: "/images/product-pdrn-ha-serum.png",
    labelName: "PDRN + HA",
    labelDetail: "Type 4 · hydrating",
    supplierUrl: SALON_SERUM_SUPPLIER,
  },
  {
    slug: "multi-peptide-scalp-serum",
    name: "Men’s Multi-Peptide Scalp Serum",
    category: "peptide-serums",
    price: "$65",
    summary:
      "Leave-on multi-peptide cosmetic for the look of scalp and hair density. Appearance only — not a hair-loss medicine. Not for injection.",
    badge: "New",
    image: "/images/product-multi-peptide-scalp-serum.png",
    labelName: "Scalp Multi-Peptide",
    labelDetail: "Men’s · scalp",
    supplierUrl:
      "https://www.alibaba.com/product-detail/Professional-Multi-Peptide-Scalp-Serum-Hair_1601935366184.html",
  },
  {
    slug: "nad-egf-skin-booster",
    name: "NAD+ EGF Skin Booster Ampoules",
    category: "peptide-serums",
    price: "$89",
    summary:
      "Leave-on NAD+ and EGF ampoules applied with cosmetic needling, for the look of fresh, even skin. Not the injectable skin booster offered in clinics. Not for injection.",
    badge: "New",
    image: "/images/product-nad-egf-skin-booster.png",
    labelName: "NAD+ EGF Booster",
    labelDetail: "Ampoules · cosmetic",
    supplierUrl:
      "https://www.alibaba.com/product-detail/OEM-Skin-Booster-NAD-Egf-Ampoules_1601705774614.html",
  },
  {
    slug: "cooling-case",
    name: "Cooling Case",
    category: "cooling-storage",
    price: "$64",
    summary: "Insulated storage for temperature-sensitive cosmetic serums while travelling.",
    badge: "New",
    image: "/images/product-cooling-case.jpg",
    labelName: "Cooling Case",
    labelDetail: "Travel storage",
    supplierUrl:
      "https://www.alibaba.com/product-detail/Peptide-Cooler-Storage-Case-with-Temperature_1601928842825.html",
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
    supplierUrl:
      "https://www.alibaba.com/product-detail/20-Pins-Hydra-Needle-Titanium-Derma_1601813026786.html",
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
    name: "Alcohol Prep Pads",
    category: "preparation-hygiene",
    price: "$12",
    summary: "Individually wrapped prep pads for cleansing skin before cosmetic needling. Not for injectable research compounds.",
    image: "/images/product-alcohol-prep-pads.jpg",
    labelName: "Prep Pads",
    labelDetail: "Single use",
    supplierUrl:
      "https://www.alibaba.com/product-detail/Portable-Home-Use-Medical-Alcohol-Swabs_1600614224234.html",
  },
  {
    slug: "nitrile-gloves",
    name: "Nitrile Gloves",
    category: "preparation-hygiene",
    price: "$18",
    summary: "Disposable black nitrile gloves for a clean cosmetic needling setup.",
    image: "/images/product-nitrile-gloves.jpg",
    labelName: "Nitrile Gloves",
    labelDetail: "Cosmetic prep",
    supplierUrl:
      "https://www.alibaba.com/product-detail/100-Box-Wholesale-Black-Disposable-Nitrile_1601521362443.html",
  },
  {
    slug: "disposable-syringes",
    name: "Disposable Syringes",
    category: "preparation-hygiene",
    price: "$16",
    summary: "Single-use 1 ml syringes for measuring cosmetic serums in the protocol kit. Dispose as sharps. Research-only peptides are not sold.",
    image: "/images/product-disposable-syringes.jpg",
    labelName: "Syringes 1 ml",
    labelDetail: "Single use",
  },
  {
    slug: "cartridge-injector",
    name: "3 mL Cartridge Injector",
    category: "facial-needling",
    price: "$54",
    summary: "Disposable multi-dose 3 mL cartridge injector for protocol cosmetic use. Research-only compounds cannot be purchased here.",
    image: "/images/product-cartridge-injector.jpg",
    labelName: "3 mL Injector",
    labelDetail: "Cartridge system",
    supplierUrl:
      "https://www.alibaba.com/product-detail/Best-selling-Medical-Automatic-Injection-Pen_1601904218231.html",
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
    supplierUrl:
      "https://www.alibaba.com/product-detail/Private-Label-Post-Procedure-Barrier-Stabilizing_1601910343650.html",
  },
  {
    slug: "focus-bacopa-capsules",
    name: "Permitted Focus Capsules",
    category: "cognitive",
    price: "$38",
    summary:
      "Listed-style Bacopa monnieri capsules, 60 per bottle. A herbal ingredient, not a peptide medicine and not a nootropic drug.",
    image: PRODUCT_VIAL_IMAGE,
    labelName: "Focus Capsules",
    labelDetail: "Bacopa monnieri",
    labelFooter: "Listed supplement",
    tgaApprovedForSale: true,
    supplierUrl:
      "https://www.alibaba.com/product-detail/OEM-ODM-60-Capsule-Bacopa-Monnieri_1601663499782.html",
  },
  {
    slug: "longevity-antioxidant",
    name: "Antioxidant Longevity Complex",
    category: "longevity",
    price: "$64",
    summary: "Permitted antioxidant nutrients. Not an injectable NAD+ drip.",
    image: PRODUCT_VIAL_IMAGE,
    labelName: "Antioxidant Complex",
    labelDetail: "Permitted nutrients",
    labelFooter: "Listed supplement",
    tgaApprovedForSale: true,
    supplierUrl: NAD_COMPLEX_SUPPLIER,
  },
  {
    slug: "nad-plus-tablets",
    name: "NAD+ High-Purity Tablets",
    category: "tablets",
    price: "$69",
    summary:
      "The legal, needle-free NAD+ format: swallowable high-purity tablets instead of boutique NAD+ injections. A stronger everyday oral dose than a clinic drip you cannot lawfully buy here. Not for injection. Not a compounded NAD+ vial.",
    badge: "New",
    image: "/images/product-nad-tablets.png",
    labelName: "NAD+ Tablets",
    labelDetail: "Oral · high purity",
    usageNote: "Not for injection — oral tablets. Not an NAD+ drip.",
    supplierUrl: NAD_COMPLEX_SUPPLIER,
  },
  {
    slug: "glp-1-support-patches",
    name: "GLP-1 Support Patches",
    category: "patches",
    price: "$44.90",
    summary:
      "Transdermal GLP-1 support patches from the same listing as the NAD+ patches. Needle-free. Not Ozempic, Wegovy, Mounjaro, or any prescription GLP-1 medicine. Not for injection.",
    badge: "New",
    image: "/images/product-glp1-patches.png",
    labelName: "GLP-1 Patches",
    labelDetail: "Transdermal",
    usageNote: "Not for injection — transdermal patch. Not a prescription GLP-1.",
    supplierUrl: PATCH_SUPPLIER,
  },
  {
    slug: "nad-plus-patches",
    name: "NAD+ Support Patches",
    category: "patches",
    price: "$44.90",
    summary:
      "Transdermal NAD+ patches — the same supplier listing as the GLP-1 patches, NAD+ colour/type. Needle-free support, not an IV NAD+ drip and not stronger than the oral tablets for daily use.",
    badge: "New",
    image: "/images/product-nad-patches.png",
    labelName: "NAD+ Patches",
    labelDetail: "Transdermal",
    usageNote: "Not for injection — transdermal patch. Not an NAD+ drip.",
    supplierUrl: PATCH_SUPPLIER,
  },
  {
    slug: "skin-protocol-bundle",
    name: "Advanced Skin Protocol Bundle",
    category: "bundles",
    price: "$349",
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
    title: "Microneedling",
    intro:
      "Professional facial needling pen, disposable micro-infusion, disposable stamp head pack, and the protocol 3 mL cartridge injector. Cosmetic devices only — not for injectable research compounds.",
    filter: "facial-needling",
  },
  "pen-accessories": {
    title: "Accessories",
    intro: "Hygiene kit, nitrile gloves, alcohol prep pads, and the peptide cooling case.",
    filter: "pen-accessories",
  },
  peptides: {
    title: "Peptides",
    intro:
      "Four shop groups: peptides, patches, serums, and needling. Oral NAD+ tablets sit here with the leave-on range. Research-only and injectable peptides stay in the encyclopaedia and are not sold.",
    filter: "peptides",
  },
  "peptide-serums": {
    title: "Peptide serums",
    intro:
      "Leave-on types including SNAP-8 anti-ageing, PDRN + EXO recovery, copper-peptide and multi-peptide scalp, and PDRN + HA hydrating. Cosmetic only — not for injection.",
    filter: "peptide-serums",
  },
  cognitive: {
    title: "Cognitive",
    intro: "Permitted nootropic products. Investigational neuropeptides are encyclopaedia-only.",
    filter: "cognitive",
  },
  tablets: {
    title: "Tablets",
    intro:
      "Swallowable NAD+ tablets — the legal, needle-free alternative to injectable NAD+ drips. Anabolic steroid tablets in the encyclopaedia are not sold.",
    filter: "tablets",
  },
  patches: {
    title: "Peptide patches",
    intro:
      "Two types from one listing: GLP-1 support patches and NAD+ support patches. Transdermal only. Not prescription GLP-1 medicines. Not NAD+ injections.",
    filter: "patches",
  },
  "peptide-patches": {
    title: "Peptide patches",
    intro:
      "Two types from one listing: GLP-1 support patches and NAD+ support patches. Transdermal only. Not prescription GLP-1 medicines. Not NAD+ injections.",
    filter: "patches",
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

export const MICRONEEDLING_PRODUCT_SLUGS = [
  "protocol-needling-pen",
  "disposable-micro-infusion-stamps",
  "pen-cartridge-pack",
  "cartridge-injector",
] as const;

export const ACCESSORIES_PRODUCT_SLUGS = [
  "prep-hygiene-kit",
  "nitrile-gloves",
  "alcohol-prep-pads",
  "cooling-case",
] as const;

export function productsForCategory(slug?: string) {
  if (!slug) return products;
  if (slug === "best-sellers") {
    return products.filter((p) => p.badge === "Best seller" || p.slug === "ghk-cu-serum");
  }
  if (slug === "new") return products.filter((p) => p.badge === "New");
  if (slug === "bundles") return products.filter((p) => p.category === "bundles");
  if (slug === "peptides") {
    return products.filter(
      (p) =>
        p.category === "peptide-serums" ||
        p.category === "patches" ||
        p.category === "tablets" ||
        MICRONEEDLING_PRODUCT_SLUGS.includes(p.slug as (typeof MICRONEEDLING_PRODUCT_SLUGS)[number]),
    );
  }
  if (slug === "facial-needling") {
    return MICRONEEDLING_PRODUCT_SLUGS.map((s) => products.find((p) => p.slug === s)).filter(
      (p): p is Product => Boolean(p),
    );
  }
  if (slug === "peptide-patches") {
    return products.filter((p) => p.category === "patches");
  }
  if (slug === "pen-accessories") {
    return ACCESSORIES_PRODUCT_SLUGS.map((s) => products.find((p) => p.slug === s)).filter(
      (p): p is Product => Boolean(p),
    );
  }
  return products.filter((p) => p.category === slug);
}
