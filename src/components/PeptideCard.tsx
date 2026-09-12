import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";
import type { Peptide } from "@/lib/types";

export function PeptideCard({ peptide }: { peptide: Peptide }) {
  return (
    <Link
      href={`/peptides/${peptide.slug}`}
      className="group flex flex-col border border-line bg-paper p-5 transition hover:border-bronze"
    >
      <div className="flex flex-wrap gap-1.5">
        {peptide.badges.map((b) => (
          <StatusBadge key={b} badge={b} size="sm" />
        ))}
      </div>
      <h3 className="mt-4 font-serif text-2xl text-ink group-hover:text-bronze-deep">
        {peptide.name}
      </h3>
      <p className="mt-1 text-sm text-ink-soft">{peptide.peptideClass}</p>
      {!peptide.availableToPurchase ? (
        <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-danger">
          Not available to purchase
        </p>
      ) : (
        <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-sage">
          Related cosmetic products in shop
        </p>
      )}
    </Link>
  );
}
