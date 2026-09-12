import { notFound } from "next/navigation";
import { PeptideCard } from "@/components/PeptideCard";
import { PageHero } from "@/components/PageHero";
import { peptidesByArea } from "@/lib/peptides";
import { AREA_LABELS, PEPTIDE_AREAS, type PeptideArea } from "@/lib/types";

export function generateStaticParams() {
  return PEPTIDE_AREAS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const label = AREA_LABELS[slug as PeptideArea];
  return { title: label ? `${label} peptides` : "Peptides" };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!PEPTIDE_AREAS.includes(slug as PeptideArea)) notFound();
  const area = slug as PeptideArea;
  const list = peptidesByArea(area);
  return (
    <div>
      <PageHero
        kicker="Peptide Encyclopaedia"
        title={AREA_LABELS[area]}
        intro="Research-area grouping for scientific browsing. Availability to purchase is determined by regulatory status, not by this filter."
      />
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-6">
        {list.map((p) => (
          <PeptideCard key={p.slug} peptide={p} />
        ))}
      </div>
    </div>
  );
}
