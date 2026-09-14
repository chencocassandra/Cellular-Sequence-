export type ConcernHub = {
  slug: string;
  title: string;
  kicker: string;
  intro: string;
  disclaimer: string;
  sections: { heading: string; body: string }[];
  productSlugs: string[];
};

export const concernHubs: ConcernHub[] = [
  {
    slug: "menopause",
    title: "Menopause skin",
    kicker: "Concern",
    intro:
      "A topical protocol for the look of drier, less firm, or more reactive skin around midlife. Cosmetic only — not hormone therapy.",
    disclaimer:
      "This hub is cosmetic information about the appearance of skin. It is not a diagnosis or treatment of menopause, perimenopause, or any medical condition. Speak with a registered health practitioner about hormonal health. Products here are not for injection.",
    sections: [
      {
        heading: "What this collection is for",
        body: "Leave-on copper-peptide and matrikine serums plus barrier aftercare. The aim is the look of a calmer, more comfortable surface — not replacing prescribed care.",
      },
      {
        heading: "What we will not claim",
        body: "We do not treat menopause, restore oestrogen, or reverse ageing as a medical outcome. Research-only peptides are not part of this collection.",
      },
    ],
    productSlugs: ["snap-8-serum", "pdrn-ha-serum", "ghk-cu-serum", "recovery-barrier-balm"],
  },
  {
    slug: "hair-scalp",
    title: "Hair and scalp",
    kicker: "Concern",
    intro:
      "Microneedling-compatible topical multi-peptide and copper-peptide serums for the look of scalp and hair density. Cosmetic appearance only."
    disclaimer:
      "This hub is about the appearance of hair and scalp. It is not a treatment for hair loss, alopecia, or any disease. It is not a medicine. Research peptides such as BPC-157 or TB-500 are never sold as scalp actives. Seek a registered practitioner for medical hair concerns.",
    sections: [
      {
        heading: "What is in scope",
        body: "Leave-on scalp serums and cosmetic needling tools already in the shop. There is no grey-market injectable in this collection.",
      },
      {
        heading: "Hard boundary",
        body: "If a peptide is research-only, it stays in the encyclopaedia with a For research purposes only mark and cannot be added to the cart.",
      },
    ],
    productSlugs: [
      "multi-peptide-scalp-serum",
      "ghk-cu-ahk-cu-scalp-serum",
      "ghk-cu-serum",
      "protocol-needling-pen",
      "disposable-micro-infusion-stamps",
    ],
  },
  {
    slug: "mens-grooming",
    title: "Men’s grooming",
    kicker: "Concern",
    intro: "A short protocol: cleanse, optional cosmetic needling, leave-on peptide serum, barrier balm. Less jargon.",
    disclaimer:
      "These are topical cosmetics and devices for the look of skin. Not injectable peptides. Not a medical clinic.",
    sections: [
      {
        heading: "Keep it simple",
        body: "One serum, one aftercare step, hygiene if you needle. No research vials. No steroid oils.",
      },
      {
        heading: "If you needle",
        body: "Use the facial needling tools as cosmetics. Do not share heads. Read the aftercare hub before you start.",
      },
    ],
    productSlugs: [
      "multi-peptide-scalp-serum",
      "snap-8-serum",
      "protocol-needling-pen",
      "recovery-barrier-balm",
      "alcohol-prep-pads",
    ],
  },
  {
    slug: "aftercare",
    title: "After cosmetic needling",
    kicker: "Aftercare",
    intro:
      "What goes on skin after a cosmetic needling session: hygiene, barrier balm, and when to return to serums.",
    disclaimer:
      "This is aftercare for cosmetic, at-home needling — not clinical or surgical aftercare. It is not medical advice. Stop and seek care if you have signs of infection or an unexpected reaction.",
    sections: [
      {
        heading: "The sequence",
        body: "Clean tools and skin, needle only as directed for cosmetic depths, then barrier-support cosmetics. Pause strong actives until the surface looks settled.",
      },
      {
        heading: "Cross-sell with tools",
        body: "Needling pens, stamps, prep pads and balm live in the shop. Research compounds are not part of aftercare.",
      },
    ],
    productSlugs: [
      "pdrn-exo-serum",
      "recovery-barrier-balm",
      "prep-hygiene-kit",
      "alcohol-prep-pads",
      "protocol-needling-pen",
    ],
  },
];

export function getConcernHub(slug: string) {
  return concernHubs.find((h) => h.slug === slug);
}
