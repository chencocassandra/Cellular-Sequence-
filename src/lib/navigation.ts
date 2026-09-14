export type SiteCategoryTone = "purchase" | "research" | "product" | "library";

export type SiteCategory = {
  id: string;
  href: string;
  navLabel: string;
  label: string;
  copy: string;
  tone: SiteCategoryTone;
};

export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  groups: { heading?: string; links: NavLink[] }[];
};

/** Consumer shop destinations — header, hero, and footer Browse. Encyclopaedia is not here. */
export const siteCategories: SiteCategory[] = [
  {
    id: "purchase",
    href: "/shop",
    navLabel: "Shop",
    label: "Shop",
    copy: "Topical peptide serums, cosmetic needling tools, and aftercare — ready to browse.",
    tone: "purchase",
  },
  {
    id: "peptides",
    href: "/shop/peptides",
    navLabel: "Peptides",
    label: "Peptides",
    copy: "Peptides, patches, serums, and needling — leave-on cosmetics and devices. Research-only injectables are not sold.",
    tone: "purchase",
  },
  {
    id: "microneedling",
    href: "/shop/facial-needling",
    navLabel: "Microneedling",
    label: "Microneedling",
    copy: "Professional facial needling pen, disposable micro-infusion, stamp head pack, and 3 mL cartridge injector.",
    tone: "product",
  },
  {
    id: "learn",
    href: "/learn",
    navLabel: "Learn",
    label: "Learn",
    copy: "How-to guides, FAQs, and how we talk about topical peptides.",
    tone: "library",
  },
];

/** Peptides menu: four shop groups. */
export const peptidesNav: NavLink[] = [
  { label: "Peptides", href: "/shop/peptides" },
  { label: "Patches", href: "/shop/peptide-patches" },
  { label: "Serums", href: "/shop/peptide-serums" },
  { label: "Needling", href: "/shop/facial-needling" },
];

export const microneedlingNav: NavLink[] = [
  { label: "Professional facial needling pen", href: "/shop/facial-needling#protocol-needling-pen" },
  { label: "Disposable micro-infusion", href: "/shop/facial-needling#disposable-micro-infusion-stamps" },
  { label: "Disposable stamp head pack", href: "/shop/facial-needling#pen-cartridge-pack" },
  { label: "Protocol 3 mL cartridge injector", href: "/shop/facial-needling#cartridge-injector" },
];

export const shopNav: NavLink[] = [
  { label: "All", href: "/shop" },
  ...peptidesNav,
  { label: "Bundles", href: "/shop/bundles" },
  { label: "Cooling & Storage", href: "/shop/cooling-storage" },
  { label: "Preparation & Hygiene", href: "/shop/preparation-hygiene" },
];

const peptideShopHrefs = ["/shop/peptides", "/shop/peptide-patches", "/shop/peptide-serums", "/shop/patches", "/shop/tablets"];

export function isPeptidesShopPath(pathname: string) {
  return peptideShopHrefs.some((href) => pathname === href || pathname.startsWith(`${href}/`));
}

export function navItemIsActive(item: NavItem, pathname: string) {
  if (item.label === "Shop") {
    if (pathname === "/shop") return true;
    if (!pathname.startsWith("/shop/")) return false;
    if (isPeptidesShopPath(pathname)) return false;
    if (pathname === "/shop/facial-needling" || pathname.startsWith("/shop/pen-accessories")) return false;
    return true;
  }
  if (item.label === "Peptides") {
    return isPeptidesShopPath(pathname);
  }
  if (item.label === "Microneedling") {
    return pathname === "/shop/facial-needling" || pathname.startsWith("/shop/pen-accessories");
  }
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export const shopConcernNav: NavLink[] = [
  { label: "Menopause skin", href: "/concerns/menopause" },
  { label: "Hair & scalp", href: "/concerns/hair-scalp" },
  { label: "Men’s grooming", href: "/concerns/mens-grooming" },
];

export const homeShopCategories: SiteCategory[] = [
  {
    id: "cooling-storage",
    href: "/shop/cooling-storage",
    navLabel: "Cooling & Storage",
    label: "Cooling & Storage",
    copy: "Insulated cases for temperature-sensitive cosmetic serums in transit.",
    tone: "product",
  },
  {
    id: "preparation-hygiene",
    href: "/shop/preparation-hygiene",
    navLabel: "Preparation & Hygiene",
    label: "Preparation & Hygiene",
    copy: "Prep pads and gloves for a clean cosmetic protocol.",
    tone: "product",
  },
  {
    id: "shop-all",
    href: "/shop",
    navLabel: "Shop all",
    label: "Shop all",
    copy: "Browse every purchase product in one place.",
    tone: "purchase",
  },
];

/** Homepage category tabs — shop and education only. */
export const heroCategories: SiteCategory[] = [
  siteCategories[0],
  siteCategories[1],
  siteCategories[2],
  homeShopCategories[0],
  homeShopCategories[1],
  siteCategories[3],
  homeShopCategories[2],
];

/** Educational library — footer only. Not sold. */
export const libraryNav: NavLink[] = [
  { label: "Peptide encyclopaedia (not sold)", href: "/peptides" },
  { label: "Compare encyclopaedia peptides", href: "/peptides/compare" },
  { label: "Oils & tablets (not sold)", href: "/oils-tablets" },
  { label: "How we read papers", href: "/learn/research-library" },
];

export const homeFeaturedProductSlugs = [
  "protocol-needling-pen",
  "snap-8-serum",
  "nad-plus-tablets",
  "glp-1-support-patches",
  "nad-plus-patches",
  "multi-peptide-scalp-serum",
  "ghk-cu-ahk-cu-scalp-serum",
  "cooling-case",
];

export const shopPeptidesIntro =
  "Peptides, patches, serums, and needling — plus storage and hygiene. Research-only and injectable peptides are not sold.";

export const primaryNav: NavItem[] = [
  {
    label: "Shop",
    href: "/shop",
    description: shopPeptidesIntro,
    groups: [
      { heading: "Shop", links: shopNav },
      { heading: "Shop by concern", links: shopConcernNav },
    ],
  },
  {
    label: "Peptides",
    href: "/shop/peptides",
    description: siteCategories[1].copy,
    groups: [{ heading: "Peptides", links: peptidesNav }],
  },
  {
    label: "Microneedling",
    href: "/shop/facial-needling",
    description: siteCategories[2].copy,
    groups: [{ heading: "Microneedling", links: microneedlingNav }],
  },
  {
    label: "Learn",
    href: "/learn",
    description: siteCategories[3].copy,
    groups: [
      {
        links: [
          { label: "The Science", href: "/learn/the-science" },
          { label: "Guides", href: "/learn" },
          { label: "FAQs", href: "/learn/faqs" },
          { label: "Ingredient glossary", href: "/learn/glossary" },
          { label: "TGA status", href: "/learn/tga-status" },
          { label: "Documents", href: "/learn/documents" },
          { label: "Journal", href: "/journal" },
          { label: "Find a topical routine", href: "/quiz" },
          { label: "Aftercare hub", href: "/concerns/aftercare" },
        ],
      },
    ],
  },
];
