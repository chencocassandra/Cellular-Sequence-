import { EncyclopaediaBreadcrumb, EncyclopaediaFilters } from "@/components/EncyclopaediaNav";
import { EncyclopaediaHero } from "@/components/EncyclopaediaHero";
import { PeptideCard } from "@/components/PeptideCard";
import { azGroups } from "@/lib/peptides";

export const metadata = {
  title: "Peptide Encyclopaedia A–Z",
  description:
    "Every encyclopaedia entry, alphabetically. Status badges travel with the name so approved medicines never look like shop products.",
};

export default function AzPage() {
  const groups = azGroups();
  return (
    <div>
      <EncyclopaediaHero
        title="A–Z"
        library="injectables"
        intro="Every injectable / peptide encyclopaedia entry, alphabetically. Status badges travel with the name so approved medicines never look like shop products."
        breadcrumb={<EncyclopaediaBreadcrumb current="A–Z" />}
      />
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <EncyclopaediaFilters currentHref="/peptides/a-z" />
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
        {groups.length === 0 ? (
          <p className="mt-8 text-ink-soft">No encyclopaedia entries yet.</p>
        ) : (
          groups.map(([letter, list]) => (
            <section key={letter} id={`letter-${letter}`} className="scroll-mt-28 py-10">
              <h2 className="font-serif text-5xl text-bronze">{letter}</h2>
              <p className="mt-2 text-sm text-ink-soft">
                {list.length} {list.length === 1 ? "entry" : "entries"}
              </p>
              <ul className="mt-6 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((p) => (
                  <li key={p.slug}>
                    <PeptideCard peptide={p} />
                  </li>
                ))}
              </ul>
            </section>
          ))
        )}
      </div>
    </div>
  );
}
