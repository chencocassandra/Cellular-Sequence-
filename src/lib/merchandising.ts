/** Cross-sells and device-page copy. Only existing shop SKUs. No invented specs. */

export const COMPLETE_SEQUENCE: Record<string, string[]> = {
  "protocol-needling-pen": [
    "skin-protocol-bundle",
    "pen-cartridge-pack",
    "prep-hygiene-kit",
    "alcohol-prep-pads",
    "recovery-barrier-balm",
    "ghk-cu-serum",
  ],
  "disposable-micro-infusion-stamps": [
    "protocol-needling-pen",
    "alcohol-prep-pads",
    "recovery-barrier-balm",
    "pdrn-ha-serum",
  ],
  "pen-cartridge-pack": [
    "protocol-needling-pen",
    "needling-starter-protocol",
    "alcohol-prep-pads",
    "recovery-barrier-balm",
  ],
  "ghk-cu-serum": ["matrikine-serum", "recovery-barrier-balm", "cooling-case", "peptide-skin-protocol"],
  "matrikine-serum": ["ghk-cu-serum", "recovery-barrier-balm", "peptide-skin-protocol"],
  "snap-8-serum": ["pdrn-ha-serum", "recovery-barrier-balm", "peptide-skin-protocol"],
  "pdrn-exo-serum": ["recovery-barrier-balm", "prep-hygiene-kit", "cooling-case"],
  "pdrn-ha-serum": ["snap-8-serum", "recovery-barrier-balm", "peptide-skin-protocol"],
  "nad-egf-skin-booster": ["recovery-barrier-balm", "cooling-case", "alcohol-prep-pads"],
  "ghk-cu-ahk-cu-scalp-serum": [
    "cellular-hair-protocol",
    "multi-peptide-scalp-serum",
    "pen-cartridge-pack",
    "protocol-needling-pen",
  ],
  "multi-peptide-scalp-serum": [
    "cellular-hair-protocol",
    "ghk-cu-ahk-cu-scalp-serum",
    "pen-cartridge-pack",
    "protocol-needling-pen",
  ],
  "glp-1-support-patches": ["longevity-protocol", "nad-plus-patches", "longevity-antioxidant"],
  "nad-plus-patches": ["longevity-protocol", "longevity-antioxidant", "glp-1-support-patches"],
  "longevity-antioxidant": ["nad-plus-patches", "longevity-protocol", "glp-1-support-patches"],
  "recovery-barrier-balm": ["protocol-needling-pen", "ghk-cu-serum", "prep-hygiene-kit"],
  "prep-hygiene-kit": ["protocol-needling-pen", "alcohol-prep-pads", "nitrile-gloves"],
  "alcohol-prep-pads": ["protocol-needling-pen", "nitrile-gloves", "prep-hygiene-kit"],
  "nitrile-gloves": ["prep-hygiene-kit", "alcohol-prep-pads", "protocol-needling-pen"],
  "cooling-case": ["ghk-cu-serum", "nad-egf-skin-booster", "pdrn-exo-serum"],
};

export const NEEDLING_PEN_PAGE = {
  tagline: "Premium at-home microneedling designed to support a considered skin-renewal routine.",
  upgradeSlug: "skin-protocol-bundle",
  included: [
    "Professional Facial Needling Pen as shown.",
    "Stamp heads, preparation products and aftercare are sold separately, or as part of a protocol kit.",
  ],
  features: [
    "Professional-inspired design for an at-home complexion routine.",
    "Adjustable cosmetic needling — follow the depth range in the device instructions.",
    "Replaceable single-use cartridges. One head, one session. Do not share.",
    "Fits the Cellular Sequence leave-on serum, preparation and aftercare steps.",
  ],
  howItWorks: [
    "Cosmetic needling is used on clean, dry skin at a shallow cosmetic depth.",
    "Leave-on serums are applied to the surface during or after a session. They are not sterile and are not for injection.",
    "A fresh cartridge, prep pads and barrier aftercare complete a considered routine.",
  ],
  howToUse: [
    "Cleanse and dry the skin. Wipe the area with a fresh alcohol prep pad.",
    "Fit a new single-use cartridge. Do not reuse or share heads.",
    "Work in sections at a cosmetic depth — 0.25 mm for a light pass, up to 0.5 mm if your skin is used to it. Follow the device instructions.",
    "Apply a thin layer of a compatible leave-on serum if you are using one. Leave it on.",
    "Finish with barrier balm if the skin feels tight. Skip acids, vitamin C and retinoids for the rest of the day.",
  ],
  cartridges: [
    "Use a fresh sealed stamp head for every session.",
    "Dispose of used heads as sharps. Do not share.",
    "The Disposable Stamp Head Pack and Disposable Micro-Infusion stamps are the replacement options in this shop.",
  ],
  preparation: [
    "Set up a clean field: gloves, prep pads, and the Needling Preparation Kit if you want the pieces together.",
    "Never load a cosmetic serum into a syringe or inject it.",
  ],
  aftercare: [
    "Leave serums on. Barrier balm can go over the top.",
    "Keep the skin otherwise bare for the rest of the day.",
  ],
  faqs: [
    {
      q: "Is this a medical device for injection?",
      a: "No. It is a cosmetic facial needling system for at-home complexion routines. Research-only and injectable peptides are not sold here.",
    },
    {
      q: "Can I use any serum with it?",
      a: "Use the leave-on Cellular Sequence serums advertised for cosmetic needling. They are topical cosmetics, not sterile injectables.",
    },
    {
      q: "What depth should I use?",
      a: "Cosmetic depths only — 0.25 mm for a light pass, up to 0.5 mm if your skin is used to it. Always follow the depth range in the device instructions.",
    },
    {
      q: "Why is this an introductory price?",
      a: "This is the current selling price while the range launches. It is not a discounted RRP and there is no crossed-out comparison price.",
    },
  ],
};

export function sequenceSlugsFor(slug: string, extra: string[] = []): string[] {
  const fromMap = COMPLETE_SEQUENCE[slug] ?? [];
  const seen = new Set<string>();
  const out: string[] = [];
  for (const item of [...extra, ...fromMap]) {
    if (item === slug || seen.has(item)) continue;
    seen.add(item);
    out.push(item);
  }
  return out;
}
