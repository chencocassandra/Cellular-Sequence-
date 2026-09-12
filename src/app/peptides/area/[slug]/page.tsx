import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { EncyclopaediaBreadcrumb, EncyclopaediaFilters } from "@/components/EncyclopaediaNav";
import { EncyclopaediaHero } from "@/components/EncyclopaediaHero";
import { PeptideGrid } from "@/components/PeptideGrid";
import { peptidesByArea } from "@/lib/peptides";
import { AREA_LABELS, PEPTIDE_AREAS, type PeptideArea } from "@/lib/types";

export function generateStaticParams() {
  return PEPTIDE_AREAS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const label = AREA_LABELS[slug as PeptideArea];
  if (!label) return { title: "Peptides" };
  return {
    title: `${label} peptides`,
    description: `Encyclopaedia entries grouped by ${label}. Availability to purchase is determined by regulatory status, not by this filter.`,
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!PEPTIDE_AREAS.includes(slug as PeptideArea)) notFound();
  const area = slug as PeptideArea;
  const label = AREA_LABELS[area];
  const list = peptidesByArea(area);

  return (
    <div>
      <EncyclopaediaHero
        title={label}
        intro="Research-area grouping for scientific browsing. Availability to purchase is determined by regulatory status, not by this filter."
        library="injectables"
        breadcrumb={<EncyclopaediaBreadcrumb current={label} />}
      />
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <EncyclopaediaFilters currentHref={`/peptides/area/${area}`} />
        <div className="mt-12">
          <PeptideGrid
            peptides={list}
            heading="Entries"
            summary={`${list.length} ${list.length === 1 ? "entry" : "entries"} in ${label}.`}
            emptyMessage="No entries in this area yet."
          />
        </div>
      </div>
    </div>
  );
}
