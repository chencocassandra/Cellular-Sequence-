"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { marketing } from "@/lib/marketing";

const STORAGE_KEY = "cs-promo-banner-dismissed";

export function PromoBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!marketing.promoBanner.enabled) return;
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === "1") setVisible(false);
    } catch {
      /* private mode */
    }
  }, []);

  if (!marketing.promoBanner.enabled || !visible) return null;

  function dismiss() {
    setVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* private mode */
    }
  }

  return (
    <div className="relative flex h-10 items-center justify-center bg-bronze px-10 text-center">
      <Link
        href={marketing.promoBanner.href}
        className="text-[11px] font-medium uppercase tracking-[0.14em] text-paper hover:underline"
      >
        {marketing.promoBanner.text}
      </Link>
      <button
        type="button"
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-paper/80 hover:text-paper"
        aria-label="Dismiss announcement"
      >
        <span aria-hidden="true" className="block text-base leading-none">
          ×
        </span>
      </button>
    </div>
  );
}
