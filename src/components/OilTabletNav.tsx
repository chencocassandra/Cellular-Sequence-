import Link from "next/link";
import {
  OIL_TABLET_CATEGORIES,
  OIL_TABLET_CATEGORY_LABELS,
  OIL_TABLET_FORM_LABELS,
  OIL_TABLET_FORMS,
} from "@/lib/types";

const chip =
  "border px-3 py-2 text-[11px] uppercase tracking-[0.14em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze";

export function OilTabletFilters({ currentHref }: { currentHref?: string }) {
  const items = [
    { href: "/oils-tablets/a-z", label: "A–Z" },
    ...OIL_TABLET_FORMS.map((form) => ({
      href: `/oils-tablets/form/${form}`,
      label: OIL_TABLET_FORM_LABELS[form],
    })),
    ...OIL_TABLET_CATEGORIES.map((c) => ({
      href: `/oils-tablets/category/${c}`,
      label: OIL_TABLET_CATEGORY_LABELS[c],
    })),
  ];

  return (
    <nav aria-label="Oils and tablets filters" className="flex flex-wrap gap-2">
      {items.map((item) => {
        const active = currentHref === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`${chip} ${
              active ? "border-ink bg-ink text-paper" : "border-line bg-paper text-ink"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function OilTabletBreadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-[0.16em]">
      <ol className="flex flex-wrap items-center gap-2 text-[#c4ad7a]">
        <li>
          <Link
            href="/peptides"
            className="hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4ad7a]"
          >
            Peptide Encyclopaedia
          </Link>
        </li>
        <li aria-hidden="true" className="text-paper/40">
          /
        </li>
        <li>
          <Link
            href="/oils-tablets"
            className="hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4ad7a]"
          >
            Oils / tablets
          </Link>
        </li>
        <li aria-hidden="true" className="text-paper/40">
          /
        </li>
        <li className="text-paper" aria-current="page">
          {current}
        </li>
      </ol>
    </nav>
  );
}
