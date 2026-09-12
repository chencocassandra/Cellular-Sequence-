import { marketing, pageSeo } from "@/lib/marketing";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: pageSeo.rewards.title,
  description: pageSeo.rewards.description,
};

export default function RewardsPage() {
  return (
    <div>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-14 lg:px-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">
            {marketing.referral.navLabel}
          </p>
          <h1 className="mt-3 font-serif text-5xl">{marketing.referral.headline}</h1>
          <p className="mt-4 text-lg text-ink-soft">{marketing.referral.offerLine}</p>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-12 lg:px-6">
        <div className="flex aspect-[16/9] items-center justify-center border border-line bg-ivory text-center text-[11px] uppercase tracking-[0.16em] text-bronze">
          PLACEHOLDER: loyalty / referral image
        </div>
        <p className="mt-8 leading-relaxed text-ink-soft">{marketing.referral.body}</p>
        <p className="mt-6 text-sm text-ink-soft">
          No referral codes, points, or tracking run on this page yet. Shop products stay cosmetic and
          permitted goods only. Research-only compounds are not part of any future reward.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-flex bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-paper"
        >
          Browse the shop
        </Link>
      </div>
    </div>
  );
}
