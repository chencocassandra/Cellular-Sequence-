import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/ShopCatalog";
import { TgaStatusBadge } from "@/components/TgaStatusBadge";
import { tgaMarkForPeptide } from "@/lib/compliance";
import { getGlossaryEntry, glossaryEntries } from "@/lib/glossary";
import { peptides } from "@/lib/peptides";
import { products } from "@/lib/products";

export function generateStaticParams() {
  return glossaryEntries.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getGlossaryEntry(slug);
  return { title: entry ? `${entry.name} glossary` : "Glossary" };
}

export default async function GlossaryEntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getGlossaryEntry(slug);
  if (!entry) notFound();
  const peptide = peptides.find((p) => p.slug === entry.peptideSlug);
  const related = products.filter((p) => p.ingredientSlugs?.includes(entry.slug));

  return (
    <div>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-14 lg:px-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Glossary</p>
          {peptide ? (
            <div className="mt-4">
              <TgaStatusBadge mark={tgaMarkForPeptide(peptide)} size="md" />
            </div>
          ) : null}
          <h1 className="mt-4 font-serif text-5xl">{entry.name}</h1>
          <p className="mt-3 text-ink-soft">INCI: {entry.inci}</p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-bronze">{entry.evidence}</p>
        </div>
      </header>
      <div className="mx-auto max-w-3xl space-y-8 px-4 py-12 lg:px-6">
        <section>
          <h2 className="font-serif text-2xl">What it is</h2>
          <p className="mt-3 leading-relaxed text-ink-soft">{entry.what}</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">Mechanism</h2>
          <p className="mt-3 leading-relaxed text-ink-soft">{entry.mechanism}</p>
        </section>
        {peptide ? (
          <p>
            <Link href={`/peptides/${peptide.slug}`} className="text-sm uppercase tracking-[0.14em] text-bronze-deep">
              Full encyclopaedia entry →
            </Link>
          </p>
        ) : null}
      </div>
      {related.length > 0 ? <ProductGrid items={related} /> : null}
    </div>
  );
}
