import { marketing, pageSeo } from "@/lib/marketing";
import { RewardsPanel } from "@/components/RewardsPanel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pageSeo.rewards.title,
  description: pageSeo.rewards.description,
};

export default function RewardsPage() {
  return (
    <div>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-14 lg:px-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">{marketing.referral.navLabel}</p>
          <h1 className="mt-3 font-serif text-5xl">Rewards</h1>
          <p className="mt-4 text-lg text-ink-soft">
            Share a demo code. Points and live discounts connect when checkout is real.
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-12 lg:px-6">
        <RewardsPanel />
      </div>
    </div>
  );
}
