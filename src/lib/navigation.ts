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

export const primaryNav: NavItem[] = [
  {
    label: "Shop",
    href: "/shop",
    description: "Protocol products available for consumer purchase.",
    groups: [
      {
        links: [
          { label: "Shop All", href: "/shop" },
          { label: "Best Sellers", href: "/shop/best-sellers" },
          { label: "New", href: "/shop/new" },
          { label: "Bundles", href: "/shop/bundles" },
          { label: "Facial Needling", href: "/shop/facial-needling" },
          { label: "Peptide Serums", href: "/shop/peptide-serums" },
          { label: "Longevity", href: "/shop/longevity" },
          { label: "Cognitive", href: "/shop/cognitive" },
          { label: "Recovery", href: "/shop/recovery" },
          { label: "Cooling & Storage", href: "/shop/cooling-storage" },
          { label: "Pen Accessories", href: "/shop/pen-accessories" },
          { label: "Preparation & Hygiene", href: "/shop/preparation-hygiene" },
        ],
      },
    ],
  },
  {
    label: "Peptide Encyclopaedia",
    href: "/peptides",
    description:
      "Searchable scientific reference — independent of the online store.",
    groups: [
      {
        heading: "Browse",
        links: [
          { label: "Browse All Peptides", href: "/peptides" },
          { label: "A–Z", href: "/peptides/a-z" },
        ],
      },
      {
        heading: "Regulatory class",
        links: [
          { label: "Approved Peptide Medicines", href: "/peptides/status/approved-medicine" },
          { label: "Cosmetic Peptides", href: "/peptides/status/cosmetic" },
          { label: "Investigational Peptides", href: "/peptides/status/investigational" },
          { label: "Research-Only Peptides", href: "/peptides/status/research-only" },
        ],
      },
      {
        heading: "Research areas",
        links: [
          { label: "Skin & Hair", href: "/peptides/area/skin-hair" },
          { label: "Metabolic", href: "/peptides/area/metabolic" },
          { label: "Recovery", href: "/peptides/area/recovery" },
          { label: "Healthy Ageing", href: "/peptides/area/healthy-ageing" },
          { label: "Cognitive", href: "/peptides/area/cognitive" },
          { label: "Performance", href: "/peptides/area/performance" },
        ],
      },
    ],
  },
  {
    label: "Longevity",
    href: "/longevity",
    groups: [
      {
        links: [
          { label: "NAD+ Education", href: "/longevity/nad" },
          { label: "NMN", href: "/longevity/nmn" },
          { label: "NR", href: "/longevity/nr" },
          { label: "Healthy Ageing", href: "/longevity/healthy-ageing" },
          { label: "Mitochondrial Health", href: "/longevity/mitochondrial-health" },
          { label: "Antioxidants", href: "/longevity/antioxidants" },
          { label: "Supplements", href: "/shop/longevity" },
          { label: "Longevity Library", href: "/longevity/library" },
        ],
      },
    ],
  },
  {
    label: "Skin",
    href: "/skin",
    groups: [
      {
        links: [
          { label: "Facial Needling", href: "/skin/facial-needling" },
          { label: "Micro-Infusion", href: "/skin/micro-infusion" },
          { label: "Peptide Serums", href: "/skin/peptide-serums" },
          { label: "GHK-Cu / Copper Peptide Skincare", href: "/skin/ghk-cu" },
          { label: "Skin Preparation", href: "/skin/preparation" },
          { label: "Aftercare", href: "/skin/aftercare" },
          { label: "Numbing Products", href: "/skin/numbing" },
          { label: "Skin Guides", href: "/learn/facial-needling-guide" },
        ],
      },
    ],
  },
  {
    label: "Cognitive",
    href: "/cognitive",
    groups: [
      {
        links: [
          { label: "Cognitive Performance", href: "/cognitive/performance" },
          { label: "Permitted Nootropic Products", href: "/shop/cognitive" },
          { label: "Focus", href: "/cognitive/focus" },
          { label: "Memory", href: "/cognitive/memory" },
          { label: "Energy", href: "/cognitive/energy" },
          { label: "Stress & Relaxation", href: "/cognitive/stress-relaxation" },
          { label: "Cognitive Ingredient Library", href: "/cognitive/ingredient-library" },
        ],
      },
    ],
  },
  {
    label: "Learn",
    href: "/learn",
    groups: [
      {
        links: [
          { label: "How-To Guides", href: "/learn" },
          { label: "Facial Needling Guide", href: "/learn/facial-needling-guide" },
          { label: "Serum Guide", href: "/learn/serum-guide" },
          { label: "Storage Guide", href: "/learn/storage-guide" },
          { label: "Cooling Case Guide", href: "/learn/cooling-case-guide" },
          { label: "Pen Accessory Guide", href: "/learn/pen-accessory-guide" },
          { label: "Preparation & Hygiene", href: "/learn/preparation-hygiene" },
          { label: "Disposal & Sharps Safety", href: "/learn/disposal-sharps-safety" },
          { label: "Research Library", href: "/learn/research-library" },
          { label: "Ingredient Dictionary", href: "/learn/ingredient-dictionary" },
          { label: "FAQs", href: "/learn/faqs" },
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
          { label: "The Longevity Protocol", href: "/about/the-longevity-protocol" },
          { label: "Our Standards", href: "/about/standards" },
          { label: "Science & Evidence", href: "/about/science-evidence" },
          { label: "Regulatory Approach", href: "/about/regulatory-approach" },
          { label: "Contact", href: "/about/contact" },
        ],
      },
    ],
  },
];

export const homepagePathways: {
  label: string;
  href: string;
  kicker: string;
  copy: string;
  featured?: boolean;
}[] = [
  {
    label: "Shop the Protocol",
    href: "/shop",
    kicker: "Consumer products",
    copy: "Cosmetic peptide skincare, facial needling systems, cooling and protocol accessories.",
  },
  {
    label: "Peptide Encyclopaedia",
    href: "/peptides",
    kicker: "Signature reference",
    copy: "A searchable A–Z scientific library. Distinct from the store — and built to stay that way.",
    featured: true,
  },
  {
    label: "Longevity",
    href: "/longevity",
    kicker: "Healthy ageing",
    copy: "NAD+ education, mitochondrial health, and the longevity library.",
  },
  {
    label: "Advanced Skin",
    href: "/skin",
    kicker: "Clinical-inspired care",
    copy: "Facial needling, micro-infusion, copper peptides and aftercare.",
  },
];
