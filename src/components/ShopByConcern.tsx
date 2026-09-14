import Link from "next/link";
import { shopConcernNav } from "@/lib/navigation";
import { getConcernHub } from "@/lib/hubs";

export function ShopByConcern() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-4 lg:px-6">
      <h2 className="text-[11px] uppercase tracking-[0.18em] text-bronze">Shop by concern</h2>
      <ul className="mt-4 grid list-none gap-3 p-0 sm:grid-cols-3">
        {shopConcernNav.map((link) => {
          const slug = link.href.replace("/concerns/", "");
          const hub = getConcernHub(slug);
          return (
            <li key={link.href}>
              <Link href={link.href} className="block border border-line bg-paper p-5 hover:border-ink">
                <p className="font-serif text-2xl text-ink">{link.label}</p>
                {hub ? <p className="mt-2 text-sm text-ink-soft">{hub.intro}</p> : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
