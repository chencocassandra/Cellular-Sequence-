import Link from "next/link";
import { ProductPhoto } from "@/components/ProductPhoto";

export function PageHero({
  kicker,
  title,
  intro,
  image,
  packLabel = false,
}: {
  kicker?: string;
  title: string;
  intro: string;
  image?: string;
  packLabel?: boolean;
}) {
  return (
    <div className="border-b border-line bg-paper">
      <div
        className={`mx-auto grid items-center gap-10 px-4 py-14 lg:px-6 ${
          image ? "max-w-7xl lg:grid-cols-2" : "max-w-4xl"
        }`}
      >
        <div>
          {kicker ? (
            <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">{kicker}</p>
          ) : null}
          <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>
        </div>
        {image ? (
          <ProductPhoto
            src={image}
            alt={title}
            className="aspect-[4/3]"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            brandSize="md"
            labelName={packLabel ? title : undefined}
            labelDetail={packLabel ? (kicker ?? "Cosmetic") : undefined}
          />
        ) : null}
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
