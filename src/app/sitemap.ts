import type { MetadataRoute } from "next";
import { peptides, statusCollections } from "@/lib/peptides";
import { pages } from "@/lib/pages";
import { shopCategories } from "@/lib/products";
import { SITE_URL } from "@/lib/site";
import { PEPTIDE_AREAS } from "@/lib/types";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const paths = [
    "",
    "/shop",
    "/peptides",
    "/peptides/a-z",
    ...statusCollections.map((c) => `/peptides/status/${c.slug}`),
    ...PEPTIDE_AREAS.map((a) => `/peptides/area/${a}`),
    ...peptides.map((p) => `/peptides/${p.slug}`),
    ...Object.keys(shopCategories).map((s) => `/shop/${s}`),
    ...Object.keys(pages),
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path.startsWith("/peptides") ? "weekly" : "monthly",
    priority: path === "/peptides" || path === "" ? 1 : 0.7,
  }));
}
