import { childParams, StaticPage } from "@/components/StaticPage";
import { pages } from "@/lib/pages";

export function generateStaticParams() {
  return childParams("/skin");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: pages[`/skin/${slug}`]?.title ?? "Skin" };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <StaticPage path={`/skin/${slug}`} />;
}
