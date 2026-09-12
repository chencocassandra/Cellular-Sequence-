import Link from "next/link";
import { EncyclopaediaHero } from "@/components/EncyclopaediaHero";
import { OilTabletFilters } from "@/components/OilTabletNav";
import { OilTabletGrid } from "@/components/OilTabletCard";
import { OilTabletSearch } from "@/components/OilTabletSearch";
import { oilTabletEntries, oilTabletPointers, searchOilTablets } from "@/lib/oilsTablets";
import { OIL_TABLET_FORM_LABELS } from "@/lib/types";

export const metadata = {
  title: "Oils & tablets reference",
  description:
    "Educational library of anabolic oils, oral steroids, SARMs and related tablets that appear on wholesale lists. Not peptides. Nothing in this library can be purchased.",
};

export default async function OilsTabletsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const results = q ? searchOilTablets(q) : oilTabletEntries;
  const countLabel = `${results.length} ${results.length === 1 ? "entry" : "entries"}`;

  return (
    <div>
      <EncyclopaediaHero
        kicker="Peptide Encyclopaedia"
        library="oils-tablets"
        title="Oils / tablets"
        intro="Anabolic oils, oral steroids, SARMs and related tablets from wholesale lists. Not peptides. Nothing in this library can be purchased."
      >
        <OilTabletSearch autoFocus={!q} />
      </EncyclopaediaHero>

      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <p className="border border-danger/30 bg-[#f6ece8] px-4 py-3 text-sm text-danger">
          Longevity Protocol does not sell anabolic steroids, SARMs, unlicensed hormones, or research tablets.
          Many of these substances are prescription-only or illegal to supply in Australia. We do not publish
          prices, SKUs, or cycling advice.
        </p>
        <div className="mt-8">
          <OilTabletFilters />
        </div>
        <div className="mt-12">
          <OilTabletGrid
            entries={results}
            heading={q ? `Results for “${q}”` : "Browse oils and tablets"}
            summary={`${countLabel}. Parent compounds only — esters and strengths are noted on each page, without a price list.`}
            emptyMessage="No oils-and-tablets entries match that search."
          />
        </div>
        {!q ? (
          <section className="mt-16 border-t border-line pt-10">
            <h2 className="font-serif text-3xl">Also on those invoices — already in the peptide library</h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-soft">
              Wellness oils, NAD+, lipotropics, and peptide tablets are documented as encyclopaedia science,
              not as steroid SKUs.
            </p>
            <ul className="mt-6 grid list-none gap-3 p-0 sm:grid-cols-2">
              {oilTabletPointers.map((p) => (
                <li key={p.href + p.name} className="border border-line p-4">
                  <Link href={p.href} className="font-medium text-ink hover:text-bronze-deep">
                    {p.name}
                  </Link>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-bronze-deep">
                    {p.forms.map((f) => OIL_TABLET_FORM_LABELS[f]).join(" · ")}
                  </p>
                  <p className="mt-2 text-sm text-ink-soft">{p.note}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </div>
  );
}
