import Link from "next/link";
import { concernHubs } from "@/lib/hubs";

const steps = [
  {
    n: "01",
    title: "Prepare",
    body: "Cleanse and set out hygiene tools. The protocol starts before any serum.",
    href: "/shop/preparation-hygiene",
  },
  {
    n: "02",
    title: "Optional cosmetic needling",
    body: "If you needle, stay in cosmetic depths. Do not share heads. Research compounds stay out of this step.",
    href: "/shop/facial-needling",
  },
  {
    n: "03",
    title: "Leave-on serum and aftercare",
    body: "Copper-peptide or matrikine serum on intact or recovering skin, then barrier balm when you have needled.",
    href: "/concerns/aftercare",
  },
];

export function HomeGuideExample() {
  return (
    <section className="border-b border-line bg-ivory">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Example layout</p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl">How the protocol works</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Three steps, then pick a concern. This is the extra homepage information — the hero
          lines above stay as they are.
        </p>

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="border border-line bg-paper p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-bronze">{step.n}</p>
              <h3 className="mt-3 font-serif text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              <Link
                href={step.href}
                className="mt-5 inline-block text-[11px] uppercase tracking-[0.16em] text-bronze-deep"
              >
                Open →
              </Link>
            </li>
          ))}
        </ol>

        <h3 className="mt-16 font-serif text-3xl">Start here, by concern</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {concernHubs.map((hub) => (
            <Link
              key={hub.slug}
              href={`/concerns/${hub.slug}`}
              className="border border-line bg-paper p-5 hover:border-bronze"
            >
              <p className="text-[10px] uppercase tracking-[0.16em] text-bronze">{hub.kicker}</p>
              <p className="mt-2 font-serif text-2xl">{hub.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{hub.intro}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border border-line bg-paper px-6 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-bronze">Not sure</p>
            <p className="mt-2 font-serif text-2xl">Find a topical routine</p>
            <p className="mt-2 max-w-xl text-sm text-ink-soft">
              A short quiz. Not a diagnosis. It will not recommend injectable or research peptides.
            </p>
          </div>
          <Link
            href="/quiz"
            className="shrink-0 bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-paper"
          >
            Take the quiz
          </Link>
        </div>
      </div>
    </section>
  );
}
