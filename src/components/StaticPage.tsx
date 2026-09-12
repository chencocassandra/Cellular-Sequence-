import { notFound } from "next/navigation";
import { ContentBody, PageHero } from "@/components/PageHero";
import { pages } from "@/lib/pages";

export function StaticPage({ path }: { path: string }) {
  const page = pages[path];
  if (!page) notFound();
  return (
    <div>
      <PageHero kicker={page.kicker} title={page.title} intro={page.intro} image={page.image} />
      <ContentBody sections={page.sections} />
    </div>
  );
}

export function childParams(prefix: string) {
  return Object.keys(pages)
    .filter((path) => path.startsWith(`${prefix}/`))
    .map((path) => ({ slug: path.slice(prefix.length + 1) }));
}
