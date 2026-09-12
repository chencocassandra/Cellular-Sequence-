import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StatusBadge } from "@/components/StatusBadge";
import { getOilTablet, oilTabletEntries } from "@/lib/oilsTablets";
import { OIL_TABLET_CATEGORY_LABELS, OIL_TABLET_FORM_LABELS } from "@/lib/types";

export function generateStaticParams() {
  return oilTabletEntries.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const e = getOilTablet(slug);
  if (!e) return { title: "Oils & tablets" };
  return {
    title: `${e.name} — Oils & tablets reference`,
    description: e.whatItIs,
  };
}

function Block({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="border-t border-line py-8">
      <h2 className="text-[11px] uppercase tracking-[0.2em] text-bronze">{heading}</h2>
      <div className="mt-3 leading-relaxed text-ink-soft">{children}</div>
    </section>
  );
}

export default async function OilTabletEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const e = getOilTablet(slug);
  if (!e) notFound();

  return (
    <article>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-14 lg:px-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">
            Oils & tablets reference · not a peptide
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {e.badges.map((b) => (
              <StatusBadge key={b} badge={b} />
            ))}
          </div>
          <h1 className="mt-5 font-serif text-5xl">{e.name}</h1>
          {e.alternativeNames.length > 0 ? (
            <p className="mt-3 text-ink-soft">Also known as {e.alternativeNames.join(", ")}.</p>
          ) : null}
          <p className="mt-6 border border-danger/30 bg-[#f6ece8] px-4 py-3 text-sm text-danger">
            Not sold. This page is literacy only — not a product listing, not medical advice, and not a
            protocol for use.
            {e.peptideHref ? (
              <>
                {" "}
                Related peptide encyclopaedia page:{" "}
                <Link href={e.peptideHref} className="underline">
                  open entry
                </Link>
                .
              </>
            ) : null}
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-6 lg:px-6">
        <Block heading="Chemical class">{e.chemicalClass}</Block>
        <Block heading="How catalogues listed it">
          {e.forms.map((f) => OIL_TABLET_FORM_LABELS[f]).join(" · ")}
        </Block>
        <Block heading="Presentations named on lists">
          <ul className="list-disc space-y-1 pl-5">
            {e.cataloguePresentations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>
        <Block heading="What it is">{e.whatItIs}</Block>
        <Block heading="Risks">{e.risks}</Block>
        <Block heading="Regulatory status">{e.regulatoryStatus}</Block>
        <Block heading="Australian regulatory status">{e.australianRegulatoryStatus}</Block>
        <p className="border-t border-line py-8 text-sm text-ink-soft">
          Category:{" "}
          <Link href={`/oils-tablets/category/${e.category}`} className="text-bronze-deep">
            {OIL_TABLET_CATEGORY_LABELS[e.category]}
          </Link>
          {" · "}
          {e.forms.map((f, i) => (
            <span key={f}>
              {i > 0 ? ", " : ""}
              <Link href={`/oils-tablets/form/${f}`} className="text-bronze-deep">
                {OIL_TABLET_FORM_LABELS[f]}
              </Link>
            </span>
          ))}
        </p>
      </div>
    </article>
  );
}
