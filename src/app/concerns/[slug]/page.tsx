import { notFound } from "next/navigation";
import { ConcernHubPage } from "@/components/ConcernHubPage";
import { concernHubs, getConcernHub } from "@/lib/hubs";

export function generateStaticParams() {
  return concernHubs.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hub = getConcernHub(slug);
  return {
    title: hub?.title ?? "Concern",
    description: hub?.intro,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hub = getConcernHub(slug);
  if (!hub) notFound();
  return <ConcernHubPage hub={hub} />;
}
