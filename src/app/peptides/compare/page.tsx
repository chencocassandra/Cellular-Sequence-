import { EncyclopaediaBreadcrumb, EncyclopaediaFilters } from "@/components/EncyclopaediaNav";
import { EncyclopaediaHero } from "@/components/EncyclopaediaHero";
import { PeptideCompareTool, type CompareItem } from "@/components/PeptideCompareTool";
import { INSUFFICIENT_EVIDENCE, overallEvidence } from "@/lib/encyclopaedia";
import { peptides } from "@/lib/peptides";
import { BADGE_LABELS } from "@/lib/types";

export const metadata = {
  title: "Compare peptides",
  description:
    "Compare 2–4 encyclopaedia entries on mechanism, evidence, half-life, approval and safety — educational only.",
};

export default async function ComparePage({
  searchParams,
}: {
  searchParams: Promise<{ ids?: string }>;
}) {
  const { ids } = await searchParams;
  const initial = ids
    ? ids
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  const items: CompareItem[] = peptides.map((p) => ({
    slug: p.slug,
    name: p.name,
    peptideClass: p.peptideClass,
    howItWorks: p.howItWorks,
    studiedFor: p.studiedFor.join("; "),
    evidence: overallEvidence(p),
    halfLife: p.halfLife ?? p.pharmacokinetics?.halfLife ?? INSUFFICIENT_EVIDENCE,
    approval: p.badges.map((b) => BADGE_LABELS[b]).join(" · "),
    human: p.humanEvidence,
    routes: p.routesInvestigated?.join(", ") ?? INSUFFICIENT_EVIDENCE,
    safety: p.sideEffects,
  }));

  return (
    <div>
      <EncyclopaediaHero
        title="Compare"
        library="injectables"
        intro="Select 2–4 peptides. This table summarises encyclopaedia fields. It is not medical advice and does not rank products for purchase."
        breadcrumb={<EncyclopaediaBreadcrumb current="Compare" />}
      />
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <EncyclopaediaFilters currentHref="/peptides/compare" />
        <PeptideCompareTool items={items} initial={initial} />
      </div>
    </div>
  );
}
