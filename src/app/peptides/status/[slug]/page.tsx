import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { EncyclopaediaBreadcrumb, EncyclopaediaFilters } from "@/components/EncyclopaediaNav";
import { EncyclopaediaHero } from "@/components/EncyclopaediaHero";
import { PeptideGrid } from "@/components/PeptideGrid";
import { EmailSignup } from "@/components/EmailSignup";
import { ProtocolLandingHero } from "@/components/ProtocolCategories";
import { pageSeo } from "@/lib/marketing";
import { getStatusCollection, peptidesByStatus, statusCollections } from "@/lib/peptides";

export function generateStaticParams() {
  return statusCollections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const col = getStatusCollection(slug);
  if (!col) return { title: "Peptides" };
  if (col.slug === "cosmetic") {
    return {
      title: pageSeo.cosmetic.title,
      description: pageSeo.cosmetic.description,
    };
  }
  return {
    title: col.title,
    description: `PLACEHOLDER SEO: ${col.intro}`,
  };
}

export default async function StatusPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const col = getStatusCollection(slug);
  if (!col) notFound();
  const list = peptidesByStatus(col.badge);
  const href = `/peptides/status/${col.slug}`;

  return (
    <div>
      {col.slug === "cosmetic" ? (
        <ProtocolLandingHero />
      ) : (
        <EncyclopaediaHero
          title={col.title}
          intro={col.intro}
          library="injectables"
          breadcrumb={<EncyclopaediaBreadcrumb current={col.title} />}
        />
      )}
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <EncyclopaediaFilters currentHref={href} />
        <div className="mt-12">
          <PeptideGrid
            peptides={list}
            heading="Entries"
            summary={`${list.length} ${list.length === 1 ? "entry" : "entries"} in this status.`}
            emptyMessage="No entries in this status yet."
          />
        </div>
      </div>
      {col.slug === "cosmetic" ? <EmailSignup /> : null}
    </div>
  );
}
