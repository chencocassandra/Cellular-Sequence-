import { PeptideCard } from "@/components/PeptideCard";
import type { Peptide } from "@/lib/types";

export function PeptideGrid({
  peptides,
  heading,
  summary,
  emptyMessage = "No entries in this view yet.",
}: {
  peptides: Peptide[];
  heading: string;
  summary?: string;
  emptyMessage?: string;
}) {
  const countLabel = `${peptides.length} ${peptides.length === 1 ? "entry" : "entries"}`;

  return (
    <section>
      <h2 className="font-serif text-3xl">{heading}</h2>
      <p className="mt-2 text-sm text-ink-soft">{summary ?? `${countLabel}.`}</p>
      {peptides.length === 0 ? (
        <p className="mt-8 text-ink-soft">{emptyMessage}</p>
      ) : (
        <ul className="mt-8 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {peptides.map((peptide) => (
            <li key={peptide.slug}>
              <PeptideCard peptide={peptide} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
