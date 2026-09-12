import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { EncyclopaediaBreadcrumb, EncyclopaediaFilters } from "@/components/EncyclopaediaNav";
import { EncyclopaediaHero } from "@/components/EncyclopaediaHero";
import { PeptideGrid } from "@/components/PeptideGrid";
import { peptidesByTopic } from "@/lib/encyclopaedia";
import { peptides } from "@/lib/peptides";
import { RESEARCH_TOPIC_LABELS, RESEARCH_TOPICS, type ResearchTopic } from "@/lib/types";

export function generateStaticParams() {
  return RESEARCH_TOPICS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const label = RESEARCH_TOPIC_LABELS[slug as ResearchTopic];
  if (!label) return { title: "Peptides" };
  return {
    title: `${label} — Peptide Encyclopaedia`,
    description: `Entries grouped by ${label}. Grouping is scientific, not a shop filter.`,
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!RESEARCH_TOPICS.includes(slug as ResearchTopic)) notFound();
  const topic = slug as ResearchTopic;
  const label = RESEARCH_TOPIC_LABELS[topic];
  const list = peptidesByTopic(peptides, topic);

  return (
    <div>
      <EncyclopaediaHero
        title={label}
        intro="Topic grouping for scientific browsing. Availability to purchase is determined by regulatory status, not by this filter."
        library="injectables"
        breadcrumb={<EncyclopaediaBreadcrumb current={label} />}
      />
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <EncyclopaediaFilters currentHref={`/peptides/topic/${topic}`} />
        <div className="mt-12">
          <PeptideGrid
            peptides={list}
            heading="Entries"
            summary={`${list.length} ${list.length === 1 ? "entry" : "entries"} tagged or mapped to ${label}.`}
            emptyMessage="No entries in this topic yet."
          />
        </div>
      </div>
    </div>
  );
}
