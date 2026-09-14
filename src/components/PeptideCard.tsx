import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";
import { TgaStatusBadge } from "@/components/TgaStatusBadge";
import { tgaMarkForPeptide } from "@/lib/compliance";
import { peptideAvailability } from "@/lib/peptides";
import type { Peptide } from "@/lib/types";

export function PeptideCard({ peptide }: { peptide: Peptide }) {
  const availability = peptideAvailability(peptide);
  const toneClass =
    availability.tone === "shop"
      ? "text-sage"
      : availability.tone === "cosmetic"
        ? "text-ink-soft"
        : "text-danger";

  return (
    <Link
      href={`/peptides/${peptide.slug}`}
      className="group flex flex-col border border-line bg-paper p-5 transition hover:border-bronze focus-visible:border-bronze focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
    >
      <div className="flex flex-wrap gap-1.5">
        <TgaStatusBadge mark={tgaMarkForPeptide(peptide)} />
        {peptide.badges.map((b) => (
          <StatusBadge key={b} badge={b} size="sm" />
        ))}
      </div>
      <h3 className="mt-4 font-serif text-2xl text-ink group-hover:text-bronze-deep">
        {peptide.name}
      </h3>
      <p className="mt-1 text-sm text-ink-soft">{peptide.peptideClass}</p>
      <p className={`mt-4 text-[11px] uppercase tracking-[0.16em] ${toneClass}`}>
        {availability.card}
      </p>
    </Link>
  );
}
