import Link from "next/link";
import { journalPosts } from "@/lib/journal";

export const metadata = {
  title: "Journal",
  description: "Advisor-reviewed notes and clearly labelled creator content.",
};

export default function JournalIndexPage() {
  return (
    <div>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-14 lg:px-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Journal</p>
          <h1 className="mt-3 font-serif text-5xl">Notes from the protocol</h1>
          <p className="mt-5 text-lg text-ink-soft">
            Advisor-style education is labelled. Creator or UGC pieces disclose paid partnerships.
          </p>
        </div>
      </header>
      <ul className="mx-auto max-w-3xl divide-y divide-line">
        {journalPosts.map((post) => (
          <li key={post.slug} className="px-4 py-8 lg:px-6">
            <p className="text-[11px] uppercase tracking-[0.14em] text-bronze">
              {post.track === "advisor" ? "Reviewed education" : "Creator / UGC"}
              {post.paidPartnership ? " · Paid partnership" : ""}
            </p>
            <Link href={`/journal/${post.slug}`} className="mt-2 block font-serif text-3xl hover:text-bronze-deep">
              {post.title}
            </Link>
            <p className="mt-2 text-sm text-ink-soft">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
