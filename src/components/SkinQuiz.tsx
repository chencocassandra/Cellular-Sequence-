"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const concerns = [
  { id: "menopause", label: "Midlife / menopause-look skin", href: "/concerns/menopause" },
  { id: "hair", label: "Hair and scalp appearance", href: "/concerns/hair-scalp" },
  { id: "mens", label: "Simple men’s routine", href: "/concerns/mens-grooming" },
  { id: "aftercare", label: "After cosmetic needling", href: "/concerns/aftercare" },
  { id: "general", label: "General appearance / anti-ageing look", href: "/shop/peptide-serums" },
] as const;

export function SkinQuiz() {
  const [concern, setConcern] = useState<(typeof concerns)[number]["id"] | "">("");
  const [needling, setNeedling] = useState<"yes" | "no" | "">("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const result = useMemo(() => concerns.find((c) => c.id === concern), [concern]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!result) return;
    window.localStorage.setItem(
      "lp-quiz-v1",
      JSON.stringify({ concern, needling, email, at: Date.now() }),
    );
    setDone(true);
  }

  if (done && result) {
    return (
      <div className="border border-line bg-paper px-5 py-6">
        <p className="text-[11px] uppercase tracking-[0.16em] text-bronze">Your route</p>
        <h2 className="mt-2 font-serif text-3xl">{result.label}</h2>
        <p className="mt-3 text-sm text-ink-soft">
          {needling === "yes"
            ? "Pair the hub with aftercare if you needle. Nothing here is an injectable."
            : "Start with leave-on serums. Needling is optional."}
        </p>
        <Link
          href={result.href}
          className="mt-6 inline-flex bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-paper"
        >
          Open this hub
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-8">
      <fieldset>
        <legend className="font-serif text-2xl">What is the main concern?</legend>
        <div className="mt-4 space-y-2">
          {concerns.map((c) => (
            <label key={c.id} className="flex items-center gap-3 text-sm">
              <input
                type="radio"
                name="concern"
                checked={concern === c.id}
                onChange={() => setConcern(c.id)}
                required
              />
              {c.label}
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend className="font-serif text-2xl">Do you use cosmetic needling?</legend>
        <div className="mt-4 space-y-2">
          {(["yes", "no"] as const).map((v) => (
            <label key={v} className="flex items-center gap-3 text-sm">
              <input
                type="radio"
                name="needling"
                checked={needling === v}
                onChange={() => setNeedling(v)}
                required
              />
              {v === "yes" ? "Yes" : "No / not yet"}
            </label>
          ))}
        </div>
      </fieldset>
      <div>
        <label htmlFor="quiz-email" className="text-sm">
          Email for shop notes only (stored on this device until an ESP is connected)
        </label>
        <input
          id="quiz-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full border border-line bg-paper px-3 py-2 text-sm"
          placeholder="you@example.com"
        />
      </div>
      <button type="submit" className="bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-paper">
        See my routine
      </button>
    </form>
  );
}
