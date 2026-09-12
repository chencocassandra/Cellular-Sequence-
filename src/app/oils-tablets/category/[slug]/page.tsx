import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EncyclopaediaHero } from "@/components/EncyclopaediaHero";
import { OilTabletBreadcrumb, OilTabletFilters } from "@/components/OilTabletNav";
import { OilTabletGrid } from "@/components/OilTabletCard";
import { oilTabletsByCategory } from "@/lib/oilsTablets";
import {
  OIL_TABLET_CATEGORIES,
  OIL_TABLET_CATEGORY_LABELS,
  type OilTabletCategory,
} from "@/lib/types";

export function generateStaticParams() {
  return OIL_TABLET_CATEGORIES.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const label = OIL_TABLET_CATEGORY_LABELS[slug as OilTabletCategory];
  if (!label) return { title: "Category" };
  return {
    title: `${label} — Oils & tablets`,
    description: "Educational category filter. These compounds are not sold.",
  };
}

export default async function OilTabletCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!OIL_TABLET_CATEGORIES.includes(slug as OilTabletCategory)) notFound();
  const category = slug as OilTabletCategory;
  const list = oilTabletsByCategory(category);
  const label = OIL_TABLET_CATEGORY_LABELS[category];
  const href = `/oils-tablets/category/${category}`;

  return (
    <div>
      <EncyclopaediaHero
        title={label}
        intro="Grouped by chemical role, not by vendor catalogue section. Nothing in this view can be added to the cart."
        breadcrumb={<OilTabletBreadcrumb current={label} />}
      />
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <OilTabletFilters currentHref={href} />
        <div className="mt-12">
          <OilTabletGrid
            entries={list}
            heading={label}
            summary={`${list.length} ${list.length === 1 ? "entry" : "entries"}. Not sold.`}
          />
        </div>
      </div>
    </div>
  );
}
