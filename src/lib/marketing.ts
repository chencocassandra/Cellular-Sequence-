/**
 * Marketing copy and settings — edit THIS FILE to update banners, offers, social links,
 * trust numbers, and default review stats without hunting through components.
 *
 * Search the site (and this file) for the word PLACEHOLDER to find every item that
 * still needs a real value from you.
 */

export const marketing = {
  promoBanner: {
    /** Set to false to hide the top promo strip. */
    enabled: true,
    // PLACEHOLDER: confirm shipping threshold or replace with a real announcement.
    text: "PLACEHOLDER: Free shipping over $XX — confirm threshold",
    href: "/shop",
  },

  emailCapture: {
    headline: "Join the protocol list",
    // PLACEHOLDER: confirm discount percentage and code before launch.
    offerLine: "PLACEHOLDER: Get 10% off your first shop order — confirm offer",
    discountCode: "PLACEHOLDER-CODE",
    buttonLabel: "Sign up",
    successLine: "Thanks. If this list is live, you will hear from us about shop news only.",
    finePrint:
      "Shop and protocol notes only. Not medical advice. Research-only compounds are never sold and are not part of this list.",
  },

  trustBar: {
    // PLACEHOLDER: replace X with a real, honest customer count.
    customerCountLabel: "PLACEHOLDER: Trusted by X customers",
    supportingLine:
      "PLACEHOLDER: Short non-medical trust line (cosmetics, devices and permitted products — not a clinic).",
  },

  social: {
    // PLACEHOLDER: swap these URLs for the live profiles.
    instagram: "https://PLACEHOLDER.example/instagram",
    tiktok: "https://PLACEHOLDER.example/tiktok",
    facebook: "https://PLACEHOLDER.example/facebook",
  },

  reviews: {
    // PLACEHOLDER: real average and count once reviews are collected.
    averageLabel: "PLACEHOLDER: 5.0 out of 5",
    countLabel: "PLACEHOLDER: review count",
    homepageHeading: "What people say",
    productHeading: "Customer notes",
    items: [
      {
        name: "PLACEHOLDER name",
        place: "PLACEHOLDER city",
        title: "PLACEHOLDER review title",
        body: "PLACEHOLDER: A real customer quote about the shop protocol (cosmetics, devices, aftercare). No clinical or medical claims.",
      },
      {
        name: "PLACEHOLDER name",
        place: "PLACEHOLDER city",
        title: "PLACEHOLDER review title",
        body: "PLACEHOLDER: A second real quote. Keep it about packing, clarity, or routine — not treatment results.",
      },
      {
        name: "PLACEHOLDER name",
        place: "PLACEHOLDER city",
        title: "PLACEHOLDER review title",
        body: "PLACEHOLDER: A third real quote.",
      },
    ],
  },

  referral: {
    navLabel: "Rewards",
    href: "/rewards",
    headline: "PLACEHOLDER: Refer a friend",
    offerLine: "PLACEHOLDER: Refer a friend, get $X off — confirm amount",
    body: "PLACEHOLDER: Describe the referral or loyalty programme when you are ready. No codes, points, or tracking run on this page yet.",
  },

  openGraphImage: {
    // PLACEHOLDER: dedicated square/landscape share image when you have one.
    path: "/images/hero-protocol-kit.jpg",
    alt: "PLACEHOLDER: Open Graph image — swap for a dedicated share graphic",
  },
} as const;

export const pageSeo = {
  home: {
    title: "Longevity Protocol — Peptide Encyclopaedia & Shop",
    description:
      "PLACEHOLDER SEO: Refine this. Cosmetic protocol shop plus a citation-first peptide encyclopaedia. Research-only compounds are not sold.",
  },
  shop: {
    title: "Shop",
    description:
      "PLACEHOLDER SEO: Cosmetic peptide serums, needling, cooling and hygiene tools. Research peptides are not sold.",
  },
  peptides: {
    title: "Peptide Encyclopaedia",
    description:
      "PLACEHOLDER SEO: Searchable encyclopaedia of approved, cosmetic, investigational and research-only peptides. Educational only.",
  },
  cosmetic: {
    title: "Cosmetic peptides",
    description:
      "PLACEHOLDER SEO: Cosmetic peptide ingredients and the shop protocol for topical use. Not injectable medicines.",
  },
  rewards: {
    title: "Rewards",
    description: "PLACEHOLDER SEO: Future referral and loyalty programme. Not active yet.",
  },
  about: {
    title: "About",
    description: "PLACEHOLDER SEO: Longevity Protocol — encyclopaedia and cosmetic shop.",
  },
  privacy: {
    title: "Privacy Policy",
    description: "PLACEHOLDER SEO: How Longevity Protocol handles personal information.",
  },
} as const;
