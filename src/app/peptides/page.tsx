import { PeptideSearch } from "@/components/PeptideSearch";
import { EncyclopaediaFilters } from "@/components/EncyclopaediaNav";
import { EncyclopaediaHero } from "@/components/EncyclopaediaHero";
import { PeptideGrid } from "@/components/PeptideGrid";
import { peptides, searchPeptides } from "@/lib/peptides";

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
  const countLabel = `${results.length} ${results.length === 1 ? "entry" : "entries"}`;

  return (
    <div>
      <EncyclopaediaHero
        kicker="Peptide Encyclopaedia"
        library="injectables"
        title="Injectables"
        intro="Peptide vials, approved peptide medicines, cosmetic peptide ingredients, and research-only lyophilised compounds. Independent of the shop. Grey-market injectables are never sold here."
      >
        <PeptideSearch autoFocus={!q} />
      </EncyclopaediaHero>

      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <EncyclopaediaFilters />
        <div className="mt-12">
          <PeptideGrid
            peptides={results}
            heading={q ? `Results for “${q}”` : "Browse injectables"}
            summary={`${countLabel}. Research-only compounds cannot be purchased.`}
            emptyMessage="No encyclopaedia entries match that search."
          />
        </div>
      </div>
    </div>
  );
}
