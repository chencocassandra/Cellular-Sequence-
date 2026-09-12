import type { ReactNode } from "react";
import {
  EncyclopaediaLibraryTabs,
  type EncyclopaediaLibrary,
} from "@/components/EncyclopaediaLibraryTabs";

export function EncyclopaediaHero({
  kicker = "Peptide Encyclopaedia",
  title,
  intro,
  breadcrumb,
  library,
  children,
}: {
  kicker?: string;
  title: string;
  intro: string;
  breadcrumb?: ReactNode;
  library?: EncyclopaediaLibrary;
  children?: ReactNode;
}) {
  return (
    <div className="border-b border-line bg-ink text-paper">
      <div className="mx-auto max-w-5xl px-4 py-16 lg:px-6">
        {breadcrumb}
        {kicker && !breadcrumb ? (
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#c4ad7a]">{kicker}</p>
        ) : null}
        {library ? <EncyclopaediaLibraryTabs active={library} /> : null}
        <h1 className={`font-serif text-5xl md:text-6xl ${breadcrumb || kicker || library ? "mt-4" : ""}`}>
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-paper/75">{intro}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </div>
  );
}
