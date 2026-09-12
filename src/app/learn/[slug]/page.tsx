import { childParams, StaticPage } from "@/components/StaticPage";
import { pages } from "@/lib/pages";

export function generateStaticParams() {
  return childParams("/learn");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: pages[`/learn/${slug}`]?.title ?? "Learn" };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <StaticPage path={`/learn/${slug}`} />;
}
