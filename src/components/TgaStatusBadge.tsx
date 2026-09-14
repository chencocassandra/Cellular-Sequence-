import Link from "next/link";
import { TGA_EXPLAINER_HREF, TGA_MARK_LABEL, type TgaMark } from "@/lib/compliance";

const markClass: Record<TgaMark, string> = {
  "tga-approved": "border-sage bg-sage text-paper",
  "approved-medicine": "border-ink bg-ink text-paper",
  "research-only": "border-danger bg-[#f6ece8] text-danger",
};

export function TgaStatusBadge({
  mark,
  size = "sm",
}: {
  mark: TgaMark;
  size?: "sm" | "md";
}) {
  return (
    <span
      className={`inline-flex items-center border font-medium uppercase tracking-[0.14em] ${markClass[mark]} ${
        size === "sm" ? "px-1.5 py-0.5 text-[9px]" : "px-2 py-1 text-[10px]"
      }`}
    >
      {TGA_MARK_LABEL[mark]}
    </span>
  );
}

export function TgaExplainerLink({ className = "" }: { className?: string }) {
  return (
    <Link
      href={TGA_EXPLAINER_HREF}
      className={`text-[11px] uppercase tracking-[0.14em] text-ink underline decoration-line underline-offset-2 hover:text-bronze-deep ${className}`.trim()}
    >
      What TGA status means
    </Link>
  );
}
