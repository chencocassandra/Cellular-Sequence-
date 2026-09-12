import { PeptideCard } from "@/components/PeptideCard";
import { PageHero } from "@/components/PageHero";
import { azGroups } from "@/lib/peptides";

export const metadata = { title: "Peptide Encyclopaedia A–Z" };

export default function AzPage() {
  const groups = azGroups();
  return (
    <div>
      <PageHero
        kicker="Peptide Encyclopaedia"
        title="A–Z"
        intro="Every encyclopaedia entry, alphabetically. Status badges travel with the name so approved medicines never look like shop products."
      />
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="flex flex-wrap gap-2 border-b border-line pb-6">
          {groups.map(([letter]) => (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className="px-2 text-sm text-bronze-deep"
            >
              {letter}
            </a>
          ))}
        </div>
        {groups.map(([letter, list]) => (
          <section key={letter} id={`letter-${letter}`} className="scroll-mt-28 py-10">
            <h2 className="font-serif text-5xl text-bronze">{letter}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p) => (
                <PeptideCard key={p.slug} peptide={p} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
