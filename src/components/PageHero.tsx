import Link from "next/link";

export function PageHero({
  kicker,
  title,
  intro,
}: {
  kicker?: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="border-b border-line bg-paper">
      <div className="mx-auto max-w-4xl px-4 py-14 lg:px-6">
        {kicker ? (
          <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">{kicker}</p>
        ) : null}
        <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>
      </div>
    </div>
  );
}

export function ContentBody({
  sections,
}: {
  sections: { heading: string; body: string }[];
}) {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 py-12 lg:px-6">
      {sections.map((s) => (
        <section key={s.heading}>
          <h2 className="font-serif text-2xl">{s.heading}</h2>
          <p className="mt-3 leading-relaxed text-ink-soft">{s.body}</p>
        </section>
      ))}
      <p>
        <Link href="/peptides" className="text-sm uppercase tracking-[0.16em] text-bronze-deep">
          Open the Peptide Encyclopaedia →
        </Link>
      </p>
    </div>
  );
}
