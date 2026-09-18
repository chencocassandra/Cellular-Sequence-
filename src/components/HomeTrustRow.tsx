import Link from "next/link";
import { TGA_EXPLAINER_HREF } from "@/lib/compliance";

const points = [
  {
    title: "TGA status on every shop item",
    body: "Each listing carries a colour mark. Open the explainer to see what it means.",
    href: TGA_EXPLAINER_HREF,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3 4.5 6.5v5c0 5 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.5 7.5-9.5v-5L12 3Z" />
        <path d="m8.5 12 2.2 2.2L15.5 9.5" />
      </svg>
    ),
  },
  {
    title: "Free express shipping",
    body: "Australia-wide, with no minimum spend.",
    href: "/shop",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 7h11v10H3z" />
        <path d="M14 10h4l3 3v4h-7" />
        <circle cx="7" cy="18" r="1.5" />
        <circle cx="17" cy="18" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Research peptides not sold",
    body: "Encyclopaedia names stay educational. Nothing injectable is in the cart.",
    href: "/peptides",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 4h9l3 3v13H6z" />
        <path d="M15 4v4h4" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    title: "An Australian house",
    body: "Written for Australian cosmetic and device shopping, not a clinic.",
    href: "/about",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="m3 11 9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </svg>
    ),
  },
];

export function HomeTrustRow() {
  return (
    <section className="border-b border-line bg-ivory">
      <ul className="mx-auto grid max-w-7xl gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
        {points.map((point) => (
          <li key={point.title} className="bg-ivory">
            <Link href={point.href} className="flex gap-3 px-4 py-5 lg:px-6 hover:bg-paper">
              <span className="mt-0.5 text-bronze">{point.icon}</span>
              <span>
                <span className="block text-[11px] font-medium uppercase tracking-[0.14em]">{point.title}</span>
                <span className="mt-1 block text-sm text-ink-soft">{point.body}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
