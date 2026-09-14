/**
 * Detail copy for the leave-on serums we advertise for use with cosmetic needling.
 * Appearance language only. Depths stay inside the 0.25–0.5 mm cosmetic range and
 * always defer to the device instructions. Nothing here is for injection.
 */

export type SerumDetail = {
  /** Short line under the product name. */
  tagline: string;
  /** Which shop devices this serum is advertised with. */
  useWithSlugs: string[];
  /** Cosmetic depth guidance shown next to the device list. */
  depthNote: string;
  /** Appearance-only "may support the look of" bullets. */
  maySupport: string[];
  /** Routine steps for a needling session. */
  howToUse: string[];
  /** Explicit non-claims for this specific serum. */
  notThis: string[];
  /** Aftercare note for the hours after a session. */
  afterSession: string;
  /** Storage and shelf handling. */
  storage: string;
  /** Other shop slugs to show as a small "pairs with" row. */
  pairsWithSlugs: string[];
};

export const NEEDLING_SERUM_INTRO =
  "Applied to clean skin during or straight after a cosmetic needling session. Topical use only — never load a serum into a syringe or inject it.";

const FACE_DEVICES = ["protocol-needling-pen", "disposable-micro-infusion-stamps"];
const FACE_DEPTH =
  "Cosmetic depths only — 0.25 mm for a light pass, up to 0.5 mm if your skin is used to it. Follow the depth range in your device instructions.";
const SCALP_DEPTH =
  "Cosmetic depths only — 0.25 mm to 0.5 mm across the scalp. Follow the depth range in your device instructions.";

export const serumDetails: Record<string, SerumDetail> = {
  "snap-8-serum": {
    tagline: "Acetyl hexapeptide-8 leave-on serum for the look of expression lines.",
    useWithSlugs: FACE_DEVICES,
    depthNote: FACE_DEPTH,
    maySupport: [
      "The look of expression lines across the forehead and around the eyes",
      "A smoother-looking surface on areas that crease when you move",
      "The appearance of skin that looks tired or a little slack",
    ],
    howToUse: [
      "Cleanse, then dry the skin completely. Use a fresh prep pad on the area you plan to work on.",
      "Work in one section at a time with your pen or a single-use stamp at a cosmetic depth.",
      "Apply a thin layer of the serum to that section while the skin is still slightly damp.",
      "Finish the remaining sections the same way, then leave the serum on. Do not rinse.",
      "Patch test on a small area first, and keep sessions well spaced rather than daily.",
    ],
    notThis: [
      "Not botulinum toxin, not Botox, and not a muscle-freezing injection.",
      "Not for injection. It is a leave-on cosmetic.",
      "Not a wrinkle treatment or a medicine — it works on appearance only.",
    ],
    afterSession:
      "Leave the serum on and skip actives, acids, retinoids and fragrance for the rest of the day. Barrier balm is the only thing we suggest layering over it.",
    storage:
      "Keep the bottle capped, out of direct sun and away from heat. Use the cooling case if you travel with it.",
    pairsWithSlugs: ["recovery-barrier-balm", "alcohol-prep-pads", "pdrn-ha-serum"],
  },

  "pdrn-exo-serum": {
    tagline: "PDRN and exosome leave-on serum for the look of skin that is settling down.",
    useWithSlugs: FACE_DEVICES,
    depthNote: FACE_DEPTH,
    maySupport: [
      "The look of skin that appears flushed or stressed after a cosmetic session",
      "A calmer, more comfortable-looking surface",
      "The appearance of even tone across the cheeks and jaw",
    ],
    howToUse: [
      "Cleanse and dry the skin, then wipe the area with a fresh prep pad.",
      "Work one section at a time at a cosmetic depth with your pen or a single-use stamp.",
      "Smooth a thin layer over the section immediately afterwards.",
      "Leave it on. Sleep on a clean pillowcase if you worked in the evening.",
      "Patch test first, and space sessions out rather than needling daily.",
    ],
    notThis: [
      "Not a stem-cell therapy and not a stem-cell medicine.",
      "Not for injection, and not the injectable 'skin booster' offered in clinics.",
      "Not a wound treatment — it is a leave-on cosmetic for appearance only.",
    ],
    afterSession:
      "This is the serum we suggest on the evening of a session. Leave it on, keep the skin bare otherwise, and add barrier balm if the skin feels tight.",
    storage:
      "Store capped and cool, away from sun and heat. The cooling case keeps it stable while travelling.",
    pairsWithSlugs: ["recovery-barrier-balm", "prep-hygiene-kit", "cooling-case"],
  },

  "pdrn-ha-serum": {
    tagline: "PDRN and hyaluronic acid leave-on serum for the look of a plump surface.",
    useWithSlugs: FACE_DEVICES,
    depthNote: FACE_DEPTH,
    maySupport: [
      "The look of hydrated, plump-looking skin",
      "A softer appearance where fine dehydration lines show",
      "Skin that looks more comfortable through the day",
    ],
    howToUse: [
      "Cleanse and dry the skin, then wipe the area with a fresh prep pad.",
      "Work in sections at a cosmetic depth with your pen or a single-use stamp.",
      "Apply a thin layer while the skin is still slightly damp so it spreads easily.",
      "Leave it on, then add barrier balm over the top if you want to seal it in.",
      "This is the gentlest serum in the range, so it suits a first session.",
    ],
    notThis: [
      "Not a dermal filler and not an injectable hyaluronic acid.",
      "Not for injection — the 'HA vials' sold for injection elsewhere are a different thing entirely.",
      "Not a medicine. It affects how skin looks, not how it functions.",
    ],
    afterSession:
      "Safe to keep using on the days between sessions. Leave it on and layer barrier balm over it if the skin feels tight.",
    storage: "Keep capped, cool and out of the sun. Use the cooling case for travel.",
    pairsWithSlugs: ["recovery-barrier-balm", "snap-8-serum", "alcohol-prep-pads"],
  },

  "nad-egf-skin-booster": {
    tagline: "NAD+ and EGF ampoules for the look of fresh, even skin.",
    useWithSlugs: FACE_DEVICES,
    depthNote: FACE_DEPTH,
    maySupport: [
      "The look of brighter, fresher-looking skin",
      "The appearance of even tone across the cheeks and forehead",
      "Skin that photographs as dull or flat",
    ],
    howToUse: [
      "Cleanse and dry the skin, then wipe the area with a fresh prep pad.",
      "Open one ampoule per session and use it within that session — there is no preservative once opened.",
      "Work a section at a time at a cosmetic depth with your pen or a single-use stamp.",
      "Smooth the ampoule over each section as you finish it and leave it on.",
      "Patch test first, and discard any unused liquid rather than saving it.",
    ],
    notThis: [
      "Not the injectable 'skin booster' or NAD+ drip offered in clinics.",
      "Not for injection — do not draw an ampoule into a syringe.",
      "Not a growth-factor medicine. It is a leave-on cosmetic for appearance only.",
    ],
    afterSession:
      "Leave it on and keep the skin bare for the rest of the day. Barrier balm can go over the top if the skin feels tight.",
    storage:
      "Store the sealed ampoules cool and out of the sun, and use the cooling case in transit. Once opened, an ampoule is single use.",
    pairsWithSlugs: ["recovery-barrier-balm", "cooling-case", "alcohol-prep-pads"],
  },

  "ghk-cu-serum": {
    tagline: "Copper tripeptide leave-on serum for the look of firm, even skin.",
    useWithSlugs: FACE_DEVICES,
    depthNote: FACE_DEPTH,
    maySupport: [
      "The look of firmer, more even-toned skin",
      "The appearance of texture across the cheeks and jaw",
      "Skin that looks less dull or weathered",
    ],
    howToUse: [
      "Cleanse and dry the skin, then wipe the area with a fresh prep pad.",
      "Work one section at a time at a cosmetic depth with your pen or a single-use stamp.",
      "Apply a thin layer to that section straight afterwards and leave it on.",
      "Keep copper peptides away from strong acids and vitamin C in the same session.",
      "Patch test first — copper peptides can leave a light blue-green tint on a cloth.",
    ],
    notThis: [
      "Not an injectable copper peptide and not a compounded GHK-Cu vial.",
      "Not for injection. This is a leave-on cosmetic.",
      "Not a scar, wound or anti-ageing medicine — appearance only.",
    ],
    afterSession:
      "Leave it on and skip acids, vitamin C and retinoids for the rest of the day. Barrier balm can go over the top.",
    storage:
      "Copper peptides prefer cool and dark. Keep the bottle capped, out of sun, and use the cooling case in transit.",
    pairsWithSlugs: ["recovery-barrier-balm", "matrikine-serum", "cooling-case"],
  },

  "matrikine-serum": {
    tagline: "Palmitoyl pentapeptide-4 and tripeptide-1 in a barrier-aware base.",
    useWithSlugs: FACE_DEVICES,
    depthNote: FACE_DEPTH,
    maySupport: [
      "The look of fine lines and crepey-looking areas",
      "A firmer-looking surface across the cheeks and around the mouth",
      "The appearance of skin that has lost some bounce",
    ],
    howToUse: [
      "Cleanse and dry the skin, then wipe the area with a fresh prep pad.",
      "Work in sections at a cosmetic depth with your pen or a single-use stamp.",
      "Apply a thin layer to each section as you finish it, and leave it on.",
      "Alternate with the copper peptide serum on separate sessions rather than mixing both in one pass.",
      "Patch test on a small area before a full session.",
    ],
    notThis: [
      "Not a collagen injection and not an injectable peptide.",
      "Not for injection — it is a leave-on cosmetic.",
      "Not a medicine and not a treatment for ageing skin.",
    ],
    afterSession:
      "Leave it on, keep the skin otherwise bare for the day, and use barrier balm if it feels tight.",
    storage: "Keep capped, cool and out of direct sun. The cooling case suits travel.",
    pairsWithSlugs: ["ghk-cu-serum", "recovery-barrier-balm", "prep-hygiene-kit"],
  },

  "ghk-cu-ahk-cu-scalp-serum": {
    tagline: "Copper-peptide scalp serum for the look of scalp and hair.",
    useWithSlugs: ["protocol-needling-pen"],
    depthNote: SCALP_DEPTH,
    maySupport: [
      "The look of a healthier-appearing scalp",
      "The appearance of fuller-looking hair at the hairline and part",
      "Hair that looks flat or thin in photos",
    ],
    howToUse: [
      "Start on a clean, dry scalp and part the hair into sections so you can reach the skin.",
      "Work section by section with the pen at a cosmetic depth, keeping the tip moving.",
      "Apply the serum along each part line as you go and massage it in lightly.",
      "Leave it on and do not rinse. Let the scalp dry before you sleep on it.",
      "Use a fresh single-use cartridge each session and never share a head.",
    ],
    notThis: [
      "Not a hair-loss medicine — not minoxidil and not finasteride.",
      "Not for injection and not a scalp injection or 'hair mesotherapy'.",
      "Not a treatment for alopecia or any diagnosed hair condition.",
    ],
    afterSession:
      "Skip shampoo, dry shampoo and styling product until the next day so the scalp stays clean and bare.",
    storage: "Keep capped, cool and out of the sun. Copper peptides can tint light fabric.",
    pairsWithSlugs: ["multi-peptide-scalp-serum", "pen-cartridge-pack", "alcohol-prep-pads"],
  },

  "multi-peptide-scalp-serum": {
    tagline: "Men's multi-peptide scalp serum for the look of hair density.",
    useWithSlugs: ["protocol-needling-pen"],
    depthNote: SCALP_DEPTH,
    maySupport: [
      "The look of denser-appearing hair through the crown and part",
      "The appearance of a receding-looking hairline",
      "A scalp that looks and feels cleaner day to day",
    ],
    howToUse: [
      "Start on a clean, dry scalp and part the hair so the skin is exposed.",
      "Work each section with the pen at a cosmetic depth, keeping the tip moving.",
      "Apply the serum along the part lines as you finish each section and massage it in.",
      "Leave it on overnight. Do not rinse.",
      "Use a fresh single-use cartridge every session.",
    ],
    notThis: [
      "Not minoxidil, not finasteride, and not a prescription hair medicine.",
      "Not for injection and not a scalp injection.",
      "Not a treatment for male-pattern baldness — it works on appearance only.",
    ],
    afterSession:
      "Leave the scalp bare until the next day — no shampoo, dry shampoo, wax or spray.",
    storage: "Keep capped, cool and out of direct sun.",
    pairsWithSlugs: ["ghk-cu-ahk-cu-scalp-serum", "pen-cartridge-pack", "prep-hygiene-kit"],
  },
};

export const NEEDLING_SERUM_SLUGS = Object.keys(serumDetails);

export function serumDetailFor(slug: string): SerumDetail | undefined {
  return serumDetails[slug];
}
