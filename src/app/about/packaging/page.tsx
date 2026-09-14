import Link from "next/link";

export const metadata = {
  title: "Packaging and materials",
  description: "A short note on recyclability and packing for Longevity Protocol shop products.",
};

export default function PackagingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 lg:px-6">
      <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">About</p>
      <h1 className="mt-2 font-serif text-4xl">Packaging and materials</h1>
      <p className="mt-5 leading-relaxed text-ink-soft">
        We aim for recyclable outer cartons where local kerbside rules allow, and to keep inserts
        paper-based. Glass or PET bottles should be emptied and rinsed before recycling. Needling
        heads and syringes are sharps — do not put them in household recycling. Follow the disposal
        guide.
      </p>
      <p className="mt-5 leading-relaxed text-ink-soft">
        Cooling cases are durable goods. Keep them in use rather than discarding after one trip.
      </p>
      <p className="mt-8">
        <Link href="/learn/disposal-sharps-safety" className="text-sm uppercase tracking-[0.14em] text-bronze-deep">
          Sharps disposal →
        </Link>
      </p>
    </div>
  );
}
