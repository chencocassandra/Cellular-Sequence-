"use client";

import { useState } from "react";
import Link from "next/link";

const DEMO_CODE = "PROTOCOL10";

export function RewardsPanel() {
  const [copied, setCopied] = useState(false);
  const [friend, setFriend] = useState("");
  const [saved, setSaved] = useState(false);

  return (
    <div className="mt-8 space-y-6">
      <p className="border border-line bg-ivory px-4 py-3 text-sm text-ink-soft">
        Demo rewards only. Codes are not validated at a payment provider yet.
      </p>
      <div>
        <p className="text-[11px] uppercase tracking-[0.14em] text-bronze">Your demo code</p>
        <p className="mt-2 font-serif text-3xl">{DEMO_CODE}</p>
        <button
          type="button"
          className="mt-3 border border-line px-4 py-2 text-[11px] uppercase tracking-[0.14em]"
          onClick={() => {
            void navigator.clipboard.writeText(DEMO_CODE);
            setCopied(true);
          }}
        >
          {copied ? "Copied" : "Copy code"}
        </button>
      </div>
      <form
        className="space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          window.localStorage.setItem("lp-referral-demo", JSON.stringify({ friend, at: Date.now() }));
          setFriend("");
          setSaved(true);
        }}
      >
        <label htmlFor="ref-email" className="text-sm">
          Refer a friend’s email (demo)
        </label>
        <input
          id="ref-email"
          type="email"
          required
          value={friend}
          onChange={(e) => setFriend(e.target.value)}
          className="block w-full border border-line bg-paper px-3 py-2"
        />
        <button type="submit" className="bg-ink px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-paper">
          Save referral locally
        </button>
        {saved ? <p className="text-sm text-ink-soft">Saved on this device only. No email was sent.</p> : null}
      </form>
      <Link href="/shop" className="inline-block text-sm uppercase tracking-[0.14em] text-bronze-deep">
        Shop topical products →
      </Link>
    </div>
  );
}
