import Link from "next/link";

export type EncyclopaediaLibrary = "injectables" | "oils-tablets";

const tabs: { id: EncyclopaediaLibrary; href: string; label: string }[] = [
  { id: "injectables", href: "/peptides", label: "Injectables" },
  { id: "oils-tablets", href: "/oils-tablets", label: "Oils / tablets" },
];

export function EncyclopaediaLibraryTabs({
  active,
  variant = "dark",
}: {
  active: EncyclopaediaLibrary;
  variant?: "dark" | "light";
}) {
  const dark = variant === "dark";
  return (
    <div
      role="tablist"
      aria-label="Encyclopaedia library"
      className={`mt-6 grid grid-cols-2 border ${dark ? "border-white/20" : "border-line"}`}
    >
      {tabs.map((tab) => {
        const selected = tab.id === active;
        return (
          <Link
            key={tab.id}
            href={tab.href}
            role="tab"
            aria-selected={selected}
            className={`px-4 py-3 text-center text-[11px] uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              dark
                ? "focus-visible:outline-[#c4ad7a]"
                : "focus-visible:outline-bronze"
            } ${
              selected
                ? dark
                  ? "bg-paper text-ink"
                  : "bg-ink text-paper"
                : dark
                  ? "text-paper/75 hover:bg-white/5 hover:text-paper"
                  : "text-ink-soft hover:bg-ivory hover:text-ink"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
