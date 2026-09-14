import Link from "next/link";
import { concernHubs } from "@/lib/hubs";

const steps = [
  {
    n: "01",
    title: "Prepare",
    body: "Cleanse and set up a hygienic field before anything touches skin.",
    href: "/shop/preparation-hygiene",
    label: "Prep & hygiene",
  },
  {
    n: "02",
    title: "Optional cosmetic needling",
    body: "Facial needling tools for a cosmetic protocol — not an injectable research route.",
    href: "/shop/facial-needling",
    label: "Needling",
  },
  {
    n: "03",
    title: "Peptide products",
    body: "Leave-on copper-peptide and matrikine cosmetics. Not for injection.",
    href: "/shop/peptides",
    label: "Peptides",
  },
  {
    n: "04",
    title: "Aftercare",
    body: "Barrier support after cosmetic needling. Pause harsh actives if the surface is open.",
    href: "/concerns/aftercare",
    label: "Aftercare hub",
  },
];

export function HomeStartHere() {
  return (
    <>
      <section className="border-b border-line bg-ivory">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">The protocol</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">How it works</h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n} className="border border-line bg-paper p-6">
                <p className="text-[11px] uppercase tracking-[0.16em] text-bronze">{step.n}</p>
                <h3 className="mt-3 font-serif text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.body}</p>
                <Link
                  href={step.href}
                  className="mt-5 inline-block text-[11px] uppercase tracking-[0.16em] text-bronze-deep"
                >
                  {step.label} →
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Start here</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Shop by concern</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {concernHubs.map((hub) => (
              <Link
                key={hub.slug}
                href={`/concerns/${hub.slug}`}
                className="border border-line bg-ivory p-5 hover:border-bronze"
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-bronze">{hub.kicker}</p>
                <h3 className="mt-3 font-serif text-2xl">{hub.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{hub.intro}</p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.16em]">Open hub →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-ivory">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-16 md:flex-row md:items-center lg:px-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Quiz</p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl">Not sure where to start?</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
              A short quiz routes you to a topical hub. It is not a diagnosis and does not recommend
              injectable research peptides.
            </p>
          </div>
          <Link
            href="/quiz"
            className="inline-flex bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-paper"
          >
            Take the skin quiz
          </Link>
        </div>
      </section>
    </>
  );
}
