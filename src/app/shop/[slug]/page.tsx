import { notFound } from "next/navigation";
import { CategoryNav, ProductGrid } from "@/components/ShopCatalog";
import { PageHero } from "@/components/PageHero";
import { ProductDetail } from "@/components/ProductDetail";
import { Reviews } from "@/components/Reviews";
import { TgaExplainerLink } from "@/components/TgaStatusBadge";
import { products, productsForCategory, shopCategories } from "@/lib/products";
import { serumDetailFor } from "@/lib/serumDetails";

export function generateStaticParams() {
  return [
    ...Object.keys(shopCategories).map((slug) => ({ slug })),
    ...products.map((p) => ({ slug: p.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = shopCategories[slug];
  if (cat) {
    return {
      title: cat.title,
      description: `PLACEHOLDER SEO: ${cat.intro}`,
    };
  }
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Shop" };
  const detail = serumDetailFor(product.slug);
  return {
    title: product.name,
    description: detail ? `${detail.tagline} ${product.summary}` : product.summary,
  };
}

export default async function ShopCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = shopCategories[slug];

  if (!cat) {
    const product = products.find((p) => p.slug === slug);
    if (!product) notFound();
    return <ProductDetail product={product} />;
  }

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
