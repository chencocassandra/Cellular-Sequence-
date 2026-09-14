export type JournalTrack = "advisor" | "ugc";

export type JournalPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
  track: JournalTrack;
  reviewer?: string;
  paidPartnership?: boolean;
};

export const journalPosts: JournalPost[] = [
  {
    slug: "topical-peptides-are-not-injectables",
    title: "Topical peptides are not injectables",
    date: "2026-09-14",
    excerpt: "How this shop talks about serums without sliding into research-vial language.",
    body: [
      "If you searched “peptides,” you have seen injectable marketing. This journal is for leave-on cosmetics and devices we actually sell.",
      "Encyclopaedia pages may name research compounds. Those names carry a Not TGA approved mark and cannot go in the cart.",
    ],
    track: "advisor",
    reviewer: "Editorial science desk (internal). Not a named clinician until one is engaged.",
  },
  {
    slug: "after-needling-keep-the-barrier-simple",
    title: "After needling, keep the barrier simple",
    date: "2026-09-10",
    excerpt: "Hygiene, balm, and patience — not more research chemicals.",
    body: [
      "Cosmetic needling is still a barrier event. Aftercare is the protocol.",
      "Use the aftercare hub. Do not put unapproved injectables on skin.",
    ],
    track: "advisor",
    reviewer: "Editorial science desk (internal). Not a named clinician until one is engaged.",
  },
  {
    slug: "unboxing-the-skin-protocol-kit",
    title: "Unboxing the skin protocol kit",
    date: "2026-09-08",
    excerpt: "A creator-style note about packing and routine — not clinical results.",
    body: [
      "This is a lifestyle note about the kit layout, not a before-and-after medical claim.",
      "If this style of post is ever paid, the partnership line stays on the card.",
    ],
    track: "ugc",
    paidPartnership: true,
  },
];

export function getJournalPost(slug: string) {
  return journalPosts.find((p) => p.slug === slug);
}
