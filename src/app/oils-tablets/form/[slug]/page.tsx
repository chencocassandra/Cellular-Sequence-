import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EncyclopaediaHero } from "@/components/EncyclopaediaHero";
import { OilTabletBreadcrumb, OilTabletFilters } from "@/components/OilTabletNav";
import { OilTabletGrid } from "@/components/OilTabletCard";
import { oilTabletsByForm } from "@/lib/oilsTablets";
import { OIL_TABLET_FORM_LABELS, OIL_TABLET_FORMS, type OilTabletForm } from "@/lib/types";

export function generateStaticParams() {
  return OIL_TABLET_FORMS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!OIL_TABLET_FORMS.includes(slug as OilTabletForm)) return { title: "Form" };
  return {
    title: `${OIL_TABLET_FORM_LABELS[slug as OilTabletForm]} — Oils & tablets`,
    description: "Educational form filter. These compounds are not sold.",
  };
}

export default async function OilTabletFormPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!OIL_TABLET_FORMS.includes(slug as OilTabletForm)) notFound();
  const form = slug as OilTabletForm;
  const list = oilTabletsByForm(form);
  const label = OIL_TABLET_FORM_LABELS[form];
  const href = `/oils-tablets/form/${form}`;

  return (
    <div>
      <EncyclopaediaHero
        title={label}
        intro="How the compound appeared on wholesale lists — oil/injectable versus tablet/capsule. Neither form is sold here."
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
