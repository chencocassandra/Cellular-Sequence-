import { PeptideEncyclopaediaArticle } from "@/components/PeptideEncyclopaediaArticle";
import { getPeptide, peptides } from "@/lib/peptides";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

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

export default async function PeptideEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPeptide(slug);
  if (!p) notFound();
  return <PeptideEncyclopaediaArticle peptide={p} />;
}
