"use client";

import { useState } from "react";
import { marketing } from "@/lib/marketing";

export function EmailSignup({ variant = "page" }: { variant?: "page" | "footer" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");
  const footer = variant === "footer";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/email-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong.");
        return;
      }
      setStatus("done");
      setMessage(marketing.emailCapture.successLine);
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong.");
    }
  }

  return (
    <section
      className={footer ? "" : "border-t border-line bg-paper"}
      aria-labelledby={footer ? "footer-signup-heading" : "signup-heading"}
    >
      <div className={footer ? "" : "mx-auto max-w-7xl px-4 py-16 lg:px-6"}>
        <p className={`text-[11px] uppercase tracking-[0.22em] ${footer ? "text-[#c4ad7a]" : "text-bronze"}`}>
          Email list
        </p>
        <h2
          id={footer ? "footer-signup-heading" : "signup-heading"}
          className={`mt-2 ${footer ? "font-serif text-2xl text-paper" : "font-serif text-3xl"}`}
        >
          {marketing.emailCapture.headline}
        </h2>
        {/* PLACEHOLDER: first-order offer — edit marketing.emailCapture */}
        <p className={`mt-2 text-sm ${footer ? "text-paper/70" : "text-ink-soft"}`}>
          {marketing.emailCapture.offerLine}
        </p>
        <p className={`mt-1 text-[11px] uppercase tracking-[0.14em] ${footer ? "text-paper/50" : "text-bronze"}`}>
          Code: {marketing.emailCapture.discountCode}
        </p>
        <form onSubmit={onSubmit} className="mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
          <label className="sr-only" htmlFor={footer ? "footer-email" : "signup-email"}>
            Email address
          </label>
          <input
            id={footer ? "footer-email" : "signup-email"}
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={`flex-1 border px-3 py-3 text-sm outline-none ${
              footer
                ? "border-white/20 bg-ink text-paper placeholder:text-paper/40 focus:border-paper"
                : "border-line bg-paper text-ink focus:border-bronze"
            }`}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className={
              footer
                ? "bg-paper px-5 py-3 text-[11px] uppercase tracking-[0.16em] text-ink"
                : "bg-ink px-5 py-3 text-[11px] uppercase tracking-[0.16em] text-paper"
            }
          >
            {status === "loading" ? "Sending…" : marketing.emailCapture.buttonLabel}
          </button>
        </form>
        {message ? (
          <p className={`mt-3 text-sm ${footer ? "text-paper/80" : "text-ink-soft"}`}>{message}</p>
        ) : null}
        <p className={`mt-3 max-w-lg text-xs ${footer ? "text-paper/50" : "text-ink-soft"}`}>
          {marketing.emailCapture.finePrint}
        </p>
      </div>
    </section>
  );
}
