import { childParams, StaticPage } from "@/components/StaticPage";
import { pages } from "@/lib/pages";

export function generateStaticParams() {
  return childParams("/longevity");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: pages[`/longevity/${slug}`]?.title ?? "Longevity" };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <StaticPage path={`/longevity/${slug}`} />;
}
