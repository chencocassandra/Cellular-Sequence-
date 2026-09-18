import { products } from "@/lib/products";
import type { Product } from "@/lib/types";

export const QUIZ_DISCLAIMER =
  "This is not a diagnosis. It does not recommend injectable or research peptides.";

/** Shop SKUs the quiz may ever recommend. Research encyclopaedia entries and injectables cannot appear. */
export const QUIZ_SHOP_ALLOWLIST = [
  "snap-8-serum",
  "pdrn-exo-serum",
  "nad-egf-skin-booster",
  "ghk-cu-ahk-cu-scalp-serum",
  "pdrn-ha-serum",
  "multi-peptide-scalp-serum",
  "ghk-cu-serum",
  "matrikine-serum",
  "nad-plus-patches",
  "longevity-antioxidant",
  "recovery-barrier-balm",
  "prep-hygiene-kit",
  "alcohol-prep-pads",
  "nitrile-gloves",
  "cooling-case",
  "protocol-needling-pen",
  "disposable-micro-infusion-stamps",
  "pen-cartridge-pack",
] as const;

const allowlist = new Set<string>(QUIZ_SHOP_ALLOWLIST);

export type QuizConcern =
  | "menopause"
  | "wellness"
  | "hair"
  | "mens"
  | "aftercare"
  | "general";

export type QuizNeedling = "yes" | "no" | "not_yet";

/** Faster window → pen + serum, then disposable + serum. Patches, permitted nutrients, and barrier cream are the needle-free options. */
export type QuizTimeline = "pen" | "disposable" | "tablet" | "barrier";

export type QuizAnswers = {
  concern: QuizConcern;
  needling: QuizNeedling;
  timeline: QuizTimeline;
};

export type QuizLearnLink = { label: string; href: string };

export const quizConcerns: { id: QuizConcern; label: string }[] = [
  { id: "menopause", label: "Midlife / menopause-look skin" },
  { id: "wellness", label: "Skin and wellness" },
  { id: "hair", label: "Hair and scalp appearance" },
  { id: "mens", label: "Simple men’s routine" },
  { id: "aftercare", label: "After cosmetic needling" },
  { id: "general", label: "General appearance / anti-ageing look" },
];

export const quizNeedlingOptions: { id: QuizNeedling; label: string }[] = [
  { id: "yes", label: "Yes" },
  { id: "no", label: "No" },
  { id: "not_yet", label: "Not yet" },
];

export const quizTimelineOptions: { id: QuizTimeline; label: string }[] = [
  { id: "pen", label: "As soon as possible — facial needling pen with serum" },
  { id: "disposable", label: "Sooner — disposable stamps with serum" },
  { id: "tablet", label: "A few weeks — patches and permitted nutrients (no pen, no serum)" },
  { id: "barrier", label: "No rush — barrier cream only (no pen, no serum)" },
];

function productBySlug(slug: string) {
  if (!allowlist.has(slug) || slug === "disposable-syringes" || slug === "cartridge-injector") {
    return undefined;
  }
  return products.find((p) => p.slug === slug);
}

function take(slugs: string[], limit: number) {
  const out: Product[] = [];
  const seen = new Set<string>();
  for (const slug of slugs) {
    if (out.length >= limit) break;
    if (seen.has(slug)) continue;
    const product = productBySlug(slug);
    if (!product) continue;
    seen.add(slug);
    out.push(product);
  }
  return out;
}

function serumForConcern(concern: QuizConcern): string[] {
  switch (concern) {
    case "aftercare":
      return ["pdrn-exo-serum", "pdrn-ha-serum"];
    case "hair":
      return ["ghk-cu-ahk-cu-scalp-serum", "multi-peptide-scalp-serum"];
    case "mens":
      return ["multi-peptide-scalp-serum", "snap-8-serum"];
    case "menopause":
      return ["snap-8-serum", "ghk-cu-serum"];
    case "wellness":
      return ["nad-egf-skin-booster", "pdrn-ha-serum"];
    default:
      return ["snap-8-serum", "matrikine-serum"];
  }
}

/** Serums are always used with a pen or disposable stamps — never recommended alone. */
export function effectiveTimeline(answers: QuizAnswers): QuizTimeline {
  const wantsTool = answers.timeline === "pen" || answers.timeline === "disposable";
  if (!wantsTool) return answers.timeline;
  if (answers.needling === "no") return "tablet";
  return answers.timeline;
}

export function quizLearnLinks(answers: QuizAnswers): QuizLearnLink[] {
  const links: QuizLearnLink[] = [];
  const topic =
    quizConcerns.find((c) => c.id === answers.concern)?.label.replace(/ look$/i, "") ?? "topical peptides";
  const rung = effectiveTimeline(answers);

  if (answers.concern === "aftercare") {
    links.push({ label: `Learn more about ${topic}`, href: "/concerns/aftercare" });
    links.push({ label: "Learn more about preparation and hygiene", href: "/learn/preparation-hygiene" });
  } else if (answers.concern === "hair") {
    links.push({ label: `Learn more about ${topic}`, href: "/concerns/hair-scalp" });
    links.push({ label: "Learn more about GHK-Cu", href: "/learn/glossary/ghk-cu" });
  } else if (answers.concern === "mens") {
    links.push({ label: `Learn more about ${topic}`, href: "/concerns/mens-grooming" });
    links.push({ label: "Learn more about SNAP-8", href: "/learn/glossary/acetyl-hexapeptide-8" });
  } else if (answers.concern === "menopause") {
    links.push({ label: `Learn more about ${topic}`, href: "/concerns/menopause" });
    links.push({ label: "Learn more about leave-on serums", href: "/learn/serum-guide" });
  } else if (answers.concern === "wellness") {
    links.push({ label: "Learn more about topical peptides and the shop protocol", href: "/learn/the-science" });
    links.push({ label: "Learn more about GHK-Cu", href: "/learn/glossary/ghk-cu" });
  } else {
    links.push({ label: `Learn more about ${topic}`, href: "/learn/serum-guide" });
    links.push({ label: "Learn more about SNAP-8", href: "/learn/glossary/acetyl-hexapeptide-8" });
    links.push({ label: "Learn more about GHK-Cu", href: "/learn/glossary/ghk-cu" });
  }

  if (rung === "pen" || rung === "disposable") {
    links.push({ label: "Learn more about cosmetic facial needling", href: "/learn/facial-needling-guide" });
    links.push({ label: "Learn more about leave-on serums", href: "/learn/serum-guide" });
    links.push({ label: "Learn more about preparation and hygiene", href: "/learn/preparation-hygiene" });
  }

  const seen = new Set<string>();
  return links.filter((l) => {
    if (seen.has(l.href)) return false;
    seen.add(l.href);
    return true;
  });
}

export function quizResultCopy(answers: QuizAnswers) {
  const concern = quizConcerns.find((c) => c.id === answers.concern)?.label ?? "topical cosmetics";
  const rung = effectiveTimeline(answers);
  const steppedDown = rung !== answers.timeline;

  const route =
    rung === "pen"
      ? "This route pairs the reusable facial needling pen with a serum. Serums are not used on their own. Nothing here is for injection."
      : rung === "disposable"
        ? "This route pairs disposable stamps with a serum. Serums are not used on their own. Nothing here is for injection."
        : rung === "tablet"
          ? "This route is needle-free — NAD+ support patches and the antioxidant complex. No pen and no serum."
          : "This route is barrier cream only — no pen and no serum.";

  const stepNote = steppedDown
    ? " You said you do not needle, so this skips the pen, stamps, and serum and starts with needle-free products."
    : "";

  return {
    heading: "A topical starting point",
    body: `${route}${stepNote} Chosen for ${concern.toLowerCase()}. Not a diagnosis and not a guaranteed timeline.`,
    timelineNote:
      "How soon appearance looks different — if it does at all — varies from person to person. Products may support the look of skin or hair with consistent use.",
  };
}

export function recommendQuizProducts(answers: QuizAnswers): Product[] {
  const rung = effectiveTimeline(answers);
  const serums = serumForConcern(answers.concern);

  if (rung === "pen") {
    return take(
      ["protocol-needling-pen", ...serums, "pen-cartridge-pack", "alcohol-prep-pads", "prep-hygiene-kit"],
      4,
    );
  }
  if (rung === "disposable") {
    return take(
      ["disposable-micro-infusion-stamps", ...serums, "pen-cartridge-pack", "alcohol-prep-pads"],
      4,
    );
  }
  if (rung === "tablet") {
    return take(["nad-plus-patches", "longevity-antioxidant"], 2);
  }
  return take(["recovery-barrier-balm"], 1);
}
