import Link from "next/link";
import { statusCollections } from "@/lib/peptides";
import { AREA_LABELS, PEPTIDE_AREAS, RESEARCH_TOPIC_LABELS, RESEARCH_TOPICS } from "@/lib/types";

const chip =
  "border px-3 py-2 text-[11px] uppercase tracking-[0.14em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze";

export function EncyclopaediaFilters({ currentHref }: { currentHref?: string }) {
  const primary = [
    { href: "/peptides/a-z", label: "A–Z" },
    { href: "/peptides/compare", label: "Compare" },
    ...statusCollections.map((c) => ({
      href: `/peptides/status/${c.slug}`,
      label: c.title,
    })),
    ...PEPTIDE_AREAS.map((area) => ({
      href: `/peptides/area/${area}`,
      label: AREA_LABELS[area],
    })),
  ];
  const topics = RESEARCH_TOPICS.map((topic) => ({
    href: `/peptides/topic/${topic}`,
    label: RESEARCH_TOPIC_LABELS[topic],
  }));

  return (
    <nav aria-label="Encyclopaedia filters" className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {primary.map((item) => {
          const active = currentHref === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`${chip} ${
                active ? "border-ink bg-ink text-paper" : "border-line bg-paper text-ink"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <div>
        <p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-bronze">Research topics</p>
        <div className="flex flex-wrap gap-2">
          {topics.map((item) => {
            const active = currentHref === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`${chip} ${
                  active ? "border-ink bg-ink text-paper" : "border-line bg-paper text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export function EncyclopaediaBreadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-[0.16em]">
      <ol className="flex flex-wrap items-center gap-2 text-[#c4ad7a]">
        <li>
          <Link href="/peptides" className="hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4ad7a]">
            Peptide Encyclopaedia
          </Link>
        </li>
        <li aria-hidden="true" className="text-paper/40">
          /
        </li>
        <li>
          <Link href="/peptides" className="hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4ad7a]">
            Injectables
          </Link>
        </li>
        <li aria-hidden="true" className="text-paper/40">
          /
        </li>
        <li className="text-paper" aria-current="page">
          {current}
        </li>
      </ol>
    </nav>
  );
}
