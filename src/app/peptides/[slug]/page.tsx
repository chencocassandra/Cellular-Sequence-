import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StatusBadge } from "@/components/StatusBadge";
import { getPeptide, peptides } from "@/lib/peptides";
import { AREA_LABELS } from "@/lib/types";

export function generateStaticParams() {
  return peptides.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPeptide(slug);
  if (!p) return { title: "Peptide" };
  return {
    title: `${p.name} — Peptide Encyclopaedia`,
    description: p.whatItIs,
  };
}

function Block({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="border-t border-line py-8">
      <h2 className="text-[11px] uppercase tracking-[0.2em] text-bronze">{heading}</h2>
      <div className="mt-3 leading-relaxed text-ink-soft">{children}</div>
    </section>
  );
}

export default async function PeptideEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPeptide(slug);
  if (!p) notFound();

  return (
    <article>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-14 lg:px-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">
            Peptide Encyclopaedia
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.badges.map((b) => (
              <StatusBadge key={b} badge={b} />
            ))}
          </div>
          <h1 className="mt-5 font-serif text-5xl">{p.name}</h1>
          {p.alternativeNames.length > 0 ? (
            <p className="mt-3 text-ink-soft">
              Also known as {p.alternativeNames.join(", ")}.
            </p>
          ) : null}
          {!p.availableToPurchase ? (
            <p className="mt-6 border border-danger/30 bg-[#f6ece8] px-4 py-3 text-sm text-danger">
              Research / medicine listing only. This compound is not available for
              consumer purchase from Longevity Protocol and must not be confused with
              shop products.
            </p>
          ) : (
            <p className="mt-6 border border-sage/30 bg-[#eef3ef] px-4 py-3 text-sm text-sage">
              Cosmetic / topical context. Related products may appear in the shop —
              they are leave-on cosmetics, not injectable medicines.
              {p.productHref ? (
                <>
                  {" "}
                  <Link href={p.productHref} className="underline">
                    View related products
                  </Link>
                </>
              ) : null}
            </p>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-6 lg:px-6">
        <Block heading="Peptide class">{p.peptideClass}</Block>
        <Block heading="Amino-acid / structural information">{p.structure}</Block>
        <Block heading="What it is">{p.whatItIs}</Block>
        <Block heading="How it works">{p.howItWorks}</Block>
        <Block heading="What it does in the body">{p.whatItDoesInBody}</Block>
        <Block heading="What it has been studied for">
          <ul className="list-disc space-y-1 pl-5">
            {p.studiedFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>
        <Block heading="Potential benefits being researched">
          <ul className="list-disc space-y-1 pl-5">
            {p.potentialBenefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>
        <Block heading="What it may not be useful for">
          <ul className="list-disc space-y-1 pl-5">
            {p.mayNotBeUsefulFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>
        <Block heading="Human evidence">{p.humanEvidence}</Block>
        <Block heading="Preclinical evidence">{p.preclinicalEvidence}</Block>
        <Block heading="Side effects and known risks">{p.sideEffects}</Block>
        <Block heading="Contraindications">{p.contraindications}</Block>
        <Block heading="Regulatory status">{p.regulatoryStatus}</Block>
        <Block heading="Australian regulatory status">{p.australianRegulatoryStatus}</Block>
        <Block heading="Published studies and references">
          <ul className="space-y-3">
            {p.references.map((ref) => (
              <li key={ref.title}>
                <p className="font-medium text-ink">{ref.title}</p>
                <p className="text-sm">{ref.citation}</p>
                {ref.url ? (
                  <a href={ref.url} className="text-sm text-bronze-deep underline" rel="noreferrer">
                    Open source
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </Block>
        <p className="border-t border-line py-8 text-sm text-ink-soft">
          Research areas:{" "}
          {p.areas.map((a, i) => (
            <span key={a}>
              {i > 0 ? ", " : ""}
              <Link href={`/peptides/area/${a}`} className="text-bronze-deep">
                {AREA_LABELS[a]}
              </Link>
            </span>
          ))}
        </p>
      </div>
    </article>
  );
}
