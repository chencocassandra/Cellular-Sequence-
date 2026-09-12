import Link from "next/link";
import { primaryNav } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div>
          <p className="font-serif text-2xl">Longevity Protocol</p>
          <p className="mt-3 max-w-xs text-sm text-paper/70">
            Peptide literacy as a signature feature. Consumer products stay on the lawful side of the line.
          </p>
        </div>
        {primaryNav.slice(0, 3).map((item) => (
          <div key={item.href}>
            <Link href={item.href} className="text-[11px] uppercase tracking-[0.18em] text-[#c4ad7a]">
              {item.label}
            </Link>
            <ul className="mt-3 space-y-1.5">
              {item.groups
                .flatMap((g) => g.links)
                .slice(0, 8)
                .map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-paper/75 hover:text-paper">
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-paper/50">
        Educational information is not medical advice. Approved medicines require a registered prescriber.
        Research-only compounds are not offered for sale. © {new Date().getFullYear()} Longevity Protocol.
      </div>
    </footer>
  );
}
