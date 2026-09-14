import { notFound } from "next/navigation";
import { CategoryNav, ProductGrid } from "@/components/ShopCatalog";
import { PageHero } from "@/components/PageHero";
import { Reviews } from "@/components/Reviews";
import { TgaExplainerLink } from "@/components/TgaStatusBadge";
import { productsForCategory, shopCategories } from "@/lib/products";

export function generateStaticParams() {
  return Object.keys(shopCategories).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = shopCategories[slug];
  return {
    title: cat?.title ?? "Shop",
    description: cat ? `PLACEHOLDER SEO: ${cat.intro}` : "Shop",
  };
}

export default async function ShopCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = shopCategories[slug];
  if (!cat) notFound();
  return (
    <div>
      <PageHero kicker="Shop" title={cat.title} intro={cat.intro} />
      <div className="mx-auto max-w-7xl px-4 pt-6 lg:px-6">
        <TgaExplainerLink />
      </div>
      <CategoryNav currentHref={`/shop/${slug}`} />
      <ProductGrid items={productsForCategory(slug)} />
      <Reviews />
    </div>
  );
}
