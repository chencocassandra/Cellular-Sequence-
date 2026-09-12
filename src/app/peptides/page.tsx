import Link from "next/link";
import { PeptideCard } from "@/components/PeptideCard";
import { PeptideSearch } from "@/components/PeptideSearch";
import { peptides, searchPeptides, statusCollections } from "@/lib/peptides";
import { AREA_LABELS, PEPTIDE_AREAS } from "@/lib/types";

export const metadata = {
  title: "Peptide Encyclopaedia",
  description:
    "Searchable A–Z scientific library of approved peptide medicines, cosmetic peptides, investigational compounds and research-only peptides.",
};

export default async function PeptidesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const results = q ? searchPeptides(q) : peptides;

  return (
    <div>
      <div className="border-b border-line bg-ink text-paper">
        <div className="mx-auto max-w-5xl px-4 py-16 lg:px-6">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#c4ad7a]">
            Signature reference · SEO / AEO acquisition
          </p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl">
            Peptide Encyclopaedia
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-paper/75">
            Understand the science. A searchable library covering approved peptide
            medicines, cosmetic peptides, investigational compounds and research-only
            peptides — independent of the online store.
          </p>
          <div className="mt-8">
            <PeptideSearch autoFocus={!q} />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <div className="flex flex-wrap gap-2">
          <Link
            href="/peptides/a-z"
            className="border border-line bg-paper px-3 py-2 text-[11px] uppercase tracking-[0.14em]"
          >
            A–Z
          </Link>
          {statusCollections.map((c) => (
            <Link
              key={c.slug}
              href={`/peptides/status/${c.slug}`}
              className="border border-line bg-paper px-3 py-2 text-[11px] uppercase tracking-[0.14em]"
            >
              {c.title}
            </Link>
          ))}
          {PEPTIDE_AREAS.map((area) => (
            <Link
              key={area}
              href={`/peptides/area/${area}`}
              className="border border-line bg-paper px-3 py-2 text-[11px] uppercase tracking-[0.14em]"
            >
              {AREA_LABELS[area]}
            </Link>
          ))}
        </div>

        <h2 className="mt-12 font-serif text-3xl">
          {q ? `Results for “${q}”` : "Browse all peptides"}
        </h2>
        <p className="mt-2 text-sm text-ink-soft">
          {results.length} {results.length === 1 ? "entry" : "entries"}. Research-only
          compounds cannot be purchased.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((p) => (
            <PeptideCard key={p.slug} peptide={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
