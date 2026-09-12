import { EncyclopaediaHero } from "@/components/EncyclopaediaHero";
import { OilTabletBreadcrumb, OilTabletFilters } from "@/components/OilTabletNav";
import { OilTabletCard } from "@/components/OilTabletCard";
import { oilTabletAzGroups } from "@/lib/oilsTablets";

export const metadata = {
  title: "Oils & tablets A–Z",
  description: "Alphabetical reference of oil and tablet compounds. Nothing in this library is for sale.",
};

export default function OilTabletAzPage() {
  const groups = oilTabletAzGroups();
  return (
    <div>
      <EncyclopaediaHero
        title="A–Z"
        intro="Parent compounds from oil and tablet catalogues, alphabetically. Esters are grouped under the hormone, not listed as separate shop SKUs."
        breadcrumb={<OilTabletBreadcrumb current="A–Z" />}
      />
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <OilTabletFilters currentHref="/oils-tablets/a-z" />
        <div className="mt-12 flex flex-wrap gap-2 border-b border-line pb-6">
          {groups.map(([letter]) => (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className="px-2 text-sm text-bronze-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
            >
              {letter}
            </a>
          ))}
        </div>
        {groups.map(([letter, list]) => (
          <section key={letter} id={`letter-${letter}`} className="scroll-mt-28 py-10">
            <h2 className="font-serif text-5xl text-bronze">{letter}</h2>
            <p className="mt-2 text-sm text-ink-soft">
              {list.length} {list.length === 1 ? "entry" : "entries"}
            </p>
            <ul className="mt-6 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((e) => (
                <li key={e.slug}>
                  <OilTabletCard entry={e} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
