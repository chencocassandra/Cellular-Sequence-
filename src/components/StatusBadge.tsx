import { BADGE_LABELS, type RegulatoryBadge } from "@/lib/types";

const styles: Record<RegulatoryBadge, string> = {
  APPROVED_MEDICINE:
    "bg-sage text-paper border-sage",
  COSMETIC:
    "bg-[#c4ad7a] text-ink border-[#b79b64]",
  INVESTIGATIONAL:
    "bg-[#3d4f63] text-paper border-[#3d4f63]",
  RESEARCH_ONLY:
    "bg-[#9a6b32] text-paper border-[#9a6b32]",
  NOT_APPROVED_FOR_HUMAN_USE:
    "bg-danger text-paper border-danger",
};

export function StatusBadge({
  badge,
  size = "md",
}: {
  badge: RegulatoryBadge;
  size?: "sm" | "md";
}) {
  return (
    <span
      className={`inline-flex items-center rounded-sm border font-medium uppercase tracking-[0.14em] ${styles[badge]} ${
        size === "sm" ? "px-1.5 py-0.5 text-[9px]" : "px-2 py-1 text-[10px]"
      }`}
    >
      {BADGE_LABELS[badge]}
    </span>
  );
}
