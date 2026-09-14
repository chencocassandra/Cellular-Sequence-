import type { MetadataRoute } from "next";
import { journalPosts } from "@/lib/journal";
import { glossaryEntries } from "@/lib/glossary";
import { peptides, statusCollections } from "@/lib/peptides";
import { oilTabletEntries } from "@/lib/oilsTablets";
import { pages } from "@/lib/pages";
import { products, shopCategories } from "@/lib/products";
import { SITE_URL } from "@/lib/site";
import { OIL_TABLET_CATEGORIES, OIL_TABLET_FORMS, PEPTIDE_AREAS, RESEARCH_TOPICS } from "@/lib/types";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const paths = [
    "",
    "/shop",
    "/shop/compare",
    "/quiz",
    "/journal",
    "/learn/the-science",
    "/learn/glossary",
    "/learn/documents",
    "/about/packaging",
    "/concerns/menopause",
    "/concerns/hair-scalp",
    "/concerns/mens-grooming",
    "/concerns/aftercare",
    "/peptides",
    "/rewards",
    "/peptides/a-z",
    "/peptides/compare",
    ...statusCollections.map((c) => `/peptides/status/${c.slug}`),
    ...PEPTIDE_AREAS.map((a) => `/peptides/area/${a}`),
    ...RESEARCH_TOPICS.map((t) => `/peptides/topic/${t}`),
    ...peptides.map((p) => `/peptides/${p.slug}`),
    ...journalPosts.map((p) => `/journal/${p.slug}`),
    ...glossaryEntries.map((e) => `/learn/glossary/${e.slug}`),
    "/oils-tablets",
    "/oils-tablets/a-z",
    ...OIL_TABLET_FORMS.map((f) => `/oils-tablets/form/${f}`),
    ...OIL_TABLET_CATEGORIES.map((c) => `/oils-tablets/category/${c}`),
    ...oilTabletEntries.map((e) => `/oils-tablets/${e.slug}`),
    ...Object.keys(shopCategories).map((s) => `/shop/${s}`),
    ...products.map((p) => `/shop/${p.slug}`),
    ...Object.keys(pages),
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path.startsWith("/peptides") ? "weekly" : "monthly",
    priority: path === "/peptides" || path === "" ? 1 : 0.7,
  }));
}
