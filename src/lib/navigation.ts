export type SiteCategoryTone = "purchase" | "research" | "product" | "library";

export type SiteCategory = {
  id: string;
  href: string;
  navLabel: string;
  label: string;
  copy: string;
  tone: SiteCategoryTone;
};

/** Five primary destinations — used in the header, hero, and footer. */
export const siteCategories: SiteCategory[] = [
  {
    id: "purchase",
    href: "/shop",
    navLabel: "Peptides for Purchase",
    label: "Peptides for Purchase",
    copy: "Cosmetic and health-use peptide serums, ready to buy.",
    tone: "purchase",
  },
  {
    id: "research",
    href: "/peptides/status/research-only",
    navLabel: "Research Peptides",
    label: "Research Peptides",
    copy: "Research-only compounds, kept clearly separate from the purchase category above.",
    tone: "research",
  },
  {
    id: "microneedling",
    href: "/shop/facial-needling",
    navLabel: "Microneedling",
    label: "Microneedling",
    copy: "Micro-infusion and facial needling protocols.",
    tone: "product",
  },
  {
    id: "tablets",
    href: "/oils-tablets/form/tablet",
    navLabel: "Tablets",
    label: "Tablets",
    copy: "Tablet and oral names from the reference line. Educational — not sold here.",
    tone: "product",
  },
  {
    id: "encyclopaedia",
    href: "/peptides",
    navLabel: "Encyclopaedia",
    label: "Encyclopaedia",
    copy: "Searchable reference explaining the science behind ingredients and labels.",
    tone: "library",
  },
];

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

export const shopNav: NavLink[] = [
  { label: "All", href: "/shop" },
  { label: "Bundles", href: "/shop/bundles" },
  { label: "Needling", href: "/shop/facial-needling" },
  { label: "Serums", href: "/shop/peptide-serums" },
  { label: "Cooling & Storage", href: "/shop/cooling-storage" },
  { label: "Preparation & Hygiene", href: "/shop/preparation-hygiene" },
];

/** Shop destinations featured on the homepage alongside the five primary categories. */
export const homeShopCategories: SiteCategory[] = [
  {
    id: "serums",
    href: "/shop/peptide-serums",
    navLabel: "Serums",
    label: "Serums",
    copy: "Topical copper-peptide and matrikine cosmetics.",
    tone: "purchase",
  },
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
    copy: "Prep pads, gloves and single-use syringes for a clean cosmetic protocol.",
    tone: "product",
  },
];

/** Homepage category tabs, in display order. */
export const heroCategories: SiteCategory[] = [
  siteCategories[0],
  siteCategories[1],
  siteCategories[3],
  homeShopCategories[0],
  siteCategories[2],
  homeShopCategories[1],
  siteCategories[4],
  {
    id: "shop-all",
    href: "/shop",
    navLabel: "Shop all",
    label: "Shop all",
    copy: "Browse every purchase product in one place.",
    tone: "purchase",
  },
];

export const homeFeaturedProductSlugs = [
  "protocol-needling-pen",
  "ghk-cu-serum",
  "cooling-case",
  "alcohol-prep-pads",
  "nitrile-gloves",
  "disposable-syringes",
];

export const shopPeptidesIntro =
  "Cosmetic and health peptides, needling systems, storing and hygiene tools, and permitted supplements — all available to purchase. Research-only peptides are documented for reference in the encyclopaedia.";

export const primaryNav: NavItem[] = [
  ...siteCategories.map((c) => ({
    label: c.navLabel,
    href: c.href,
    description: c.copy,
    groups: [] as NavItem["groups"],
  })),
  {
    label: "Shop",
    href: "/shop",
    description: shopPeptidesIntro,
    groups: [{ heading: "Shop the Peptides", links: shopNav }],
  },
  {
    label: "About",
    href: "/about",
    groups: [
      {
        links: [
          { label: "Our Story", href: "/about" },
          { label: "Our Standards", href: "/about/standards" },
          { label: "Contact", href: "/about/contact" },
          { label: "Privacy Policy", href: "/privacy" },
        ],
      },
    ],
  },
];
