import { TOPICAL_USE_LABEL } from "@/lib/compliance";

export function TopicalUseLabel({ className = "" }: { className?: string }) {
  return (
    <p className={`text-[10px] uppercase tracking-[0.12em] text-ink-soft ${className}`.trim()}>
      {TOPICAL_USE_LABEL}
    </p>
  );
}
