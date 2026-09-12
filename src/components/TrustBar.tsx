import { marketing } from "@/lib/marketing";

export function TrustBar() {
  return (
    <aside className="mt-6 border border-line bg-ivory px-4 py-3 sm:mt-8">
      {/* PLACEHOLDER: honest customer count — edit marketing.trustBar */}
      <p className="text-[11px] uppercase tracking-[0.16em] text-bronze">{marketing.trustBar.customerCountLabel}</p>
      <p className="mt-1 text-sm text-ink-soft">{marketing.trustBar.supportingLine}</p>
    </aside>
  );
}
