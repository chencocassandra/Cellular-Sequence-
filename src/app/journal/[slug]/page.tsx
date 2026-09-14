import { notFound } from "next/navigation";
import { getJournalPost, journalPosts } from "@/lib/journal";

export function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  return { title: post?.title ?? "Journal" };
}

export default async function JournalPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 lg:px-6">
      <p className="text-[11px] uppercase tracking-[0.14em] text-bronze">
        {post.track === "advisor" ? "Reviewed education" : "Creator / UGC"}
        {post.paidPartnership ? " · Advertising: paid partnership (ACCC)" : ""}
      </p>
      <h1 className="mt-3 font-serif text-5xl">{post.title}</h1>
      <p className="mt-3 text-sm text-ink-soft">{post.date}</p>
      {post.reviewer ? (
        <p className="mt-4 border border-line bg-ivory px-4 py-3 text-sm text-ink-soft">
          Reviewed by {post.reviewer}
        </p>
      ) : null}
      {post.paidPartnership ? (
        <p className="mt-4 border border-line bg-ivory px-4 py-3 text-sm text-ink-soft">
          Paid partnership. This is advertising, not an independent clinical study.
        </p>
      ) : null}
      <div className="mt-10 space-y-5 leading-relaxed text-ink-soft">
        {post.body.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>
    </article>
  );
}
