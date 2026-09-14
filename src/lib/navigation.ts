import { marketing } from "@/lib/marketing";

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
    id: "microneedling",
    href: "/shop/facial-needling",
    navLabel: "Microneedling",
    label: "Microneedling",
    copy: "Micro-infusion and facial needling for cosmetic protocols.",
    tone: "product",
  },
  {
    id: "serums",
    href: "/shop/peptide-serums",
    navLabel: "Serums",
    label: "Serums",
    copy: "Leave-on copper-peptide and matrikine cosmetics. Not for injection.",
    tone: "purchase",
  },
  {
    id: "aftercare",
    href: "/concerns/aftercare",
    navLabel: "Aftercare",
    label: "Aftercare",
    copy: "Barrier-support cosmetics for after cosmetic needling.",
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

export const shopNav: NavLink[] = [
  { label: "All", href: "/shop" },
  { label: "Compare", href: "/shop/compare" },
  { label: "Bundles", href: "/shop/bundles" },
  { label: "Needling", href: "/shop/facial-needling" },
  { label: "Serums", href: "/shop/peptide-serums" },
  { label: "Tablets", href: "/shop/tablets" },
  { label: "Patches", href: "/shop/patches" },
  { label: "Aftercare", href: "/shop/recovery" },
  { label: "Menopause skin", href: "/concerns/menopause" },
  { label: "Hair & scalp", href: "/concerns/hair-scalp" },
  { label: "Men’s grooming", href: "/concerns/mens-grooming" },
  { label: "Cooling & Storage", href: "/shop/cooling-storage" },
  { label: "Preparation & Hygiene", href: "/shop/preparation-hygiene" },
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
  siteCategories[2],
  siteCategories[1],
  siteCategories[3],
  homeShopCategories[0],
  homeShopCategories[1],
  siteCategories[4],
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
  "Leave-on peptide cosmetics, needling tools, NAD+ tablets, GLP-1 and NAD+ patches, storage and hygiene. Research-only and injectable peptides are not sold.";

export const primaryNav: NavItem[] = [
  {
    label: "Shop",
    href: "/shop",
    description: shopPeptidesIntro,
    groups: [{ heading: "Shop", links: shopNav }],
  },
  {
    label: "Microneedling",
    href: "/shop/facial-needling",
    description: siteCategories[1].copy,
    groups: [],
  },
  {
    label: "Aftercare",
    href: "/concerns/aftercare",
    description: siteCategories[3].copy,
    groups: [],
  },
  {
    label: "Learn",
    href: "/learn",
    description: siteCategories[4].copy,
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
          { label: "Skin quiz", href: "/quiz" },
          { label: "Aftercare hub", href: "/concerns/aftercare" },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    groups: [
      {
        links: [
          { label: "Our Story", href: "/about" },
          { label: "Our Standards", href: "/about/standards" },
          { label: "Packaging", href: "/about/packaging" },
          { label: "Contact", href: "/about/contact" },
          { label: "Privacy Policy", href: "/privacy" },
          { label: marketing.referral.navLabel, href: marketing.referral.href },
        ],
      },
    ],
  },
];
