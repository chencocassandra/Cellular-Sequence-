import { notFound } from "next/navigation";
import { CategoryNav, ProductGrid } from "@/components/ShopCatalog";
import { PageHero } from "@/components/PageHero";
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
  return { title: shopCategories[slug]?.title ?? "Shop" };
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
      <CategoryNav />
      <ProductGrid items={productsForCategory(slug)} />
    </div>
  );
}
