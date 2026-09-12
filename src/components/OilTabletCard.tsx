import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";
import { OIL_TABLET_CATEGORY_LABELS, OIL_TABLET_FORM_LABELS, type OilTabletEntry } from "@/lib/types";

export function OilTabletCard({ entry }: { entry: OilTabletEntry }) {
  return (
    <Link
      href={`/oils-tablets/${entry.slug}`}
      className="group flex flex-col border border-line bg-paper p-5 transition hover:border-bronze focus-visible:border-bronze focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
    >
      <div className="flex flex-wrap gap-1.5">
        {entry.badges.map((b) => (
          <StatusBadge key={b} badge={b} size="sm" />
        ))}
      </div>
      <h3 className="mt-4 font-serif text-2xl text-ink group-hover:text-bronze-deep">{entry.name}</h3>
      <p className="mt-1 text-sm text-ink-soft">{entry.chemicalClass}</p>
      <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-ink-soft">
        {entry.forms.map((f) => OIL_TABLET_FORM_LABELS[f]).join(" · ")}
      </p>
      <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-bronze-deep">
        {OIL_TABLET_CATEGORY_LABELS[entry.category]}
      </p>
      <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-danger">Not sold here</p>
    </Link>
  );
}

export function OilTabletGrid({
  entries,
  heading,
  summary,
  emptyMessage = "No entries in this view yet.",
}: {
  entries: OilTabletEntry[];
  heading: string;
  summary?: string;
  emptyMessage?: string;
}) {
  const countLabel = `${entries.length} ${entries.length === 1 ? "entry" : "entries"}`;
  return (
    <section>
      <h2 className="font-serif text-3xl">{heading}</h2>
      <p className="mt-2 text-sm text-ink-soft">{summary ?? `${countLabel}.`}</p>
      {entries.length === 0 ? (
        <p className="mt-8 text-ink-soft">{emptyMessage}</p>
      ) : (
        <ul className="mt-8 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((entry) => (
            <li key={entry.slug}>
              <OilTabletCard entry={entry} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
