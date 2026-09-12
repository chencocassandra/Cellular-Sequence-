import { notFound } from "next/navigation";
import { PeptideCard } from "@/components/PeptideCard";
import { PageHero } from "@/components/PageHero";
import { peptidesByStatus, statusCollections } from "@/lib/peptides";

export function generateStaticParams() {
  return statusCollections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const col = statusCollections.find((c) => c.slug === slug);
  return { title: col?.title ?? "Peptides" };
}

export default async function StatusPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const col = statusCollections.find((c) => c.slug === slug);
  if (!col) notFound();
  const list = peptidesByStatus(col.badge);
  return (
    <div>
      <PageHero kicker="Peptide Encyclopaedia" title={col.title} intro={col.intro} />
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-6">
        {list.map((p) => (
          <PeptideCard key={p.slug} peptide={p} />
        ))}
      </div>
    </div>
  );
}
