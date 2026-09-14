"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductPhoto } from "@/components/ProductPhoto";
import { TgaStatusBadge } from "@/components/TgaStatusBadge";
import { TopicalUseLabel } from "@/components/TopicalUseLabel";
import { tgaMarkForProduct } from "@/lib/compliance";
import {
  QUIZ_DISCLAIMER,
  quizConcerns,
  quizLearnLinks,
  quizNeedlingOptions,
  quizResultCopy,
  quizTimelineOptions,
  recommendQuizProducts,
  type QuizAnswers,
  type QuizConcern,
  type QuizNeedling,
  type QuizTimeline,
} from "@/lib/quiz";

const STORAGE_KEY = "lp-quiz-v2";

type Step = "intro" | "concern" | "needling" | "timeline" | "results";

export function SkinQuiz() {
  const [step, setStep] = useState<Step>("intro");
  const [concern, setConcern] = useState<QuizConcern | "">("");
  const [needling, setNeedling] = useState<QuizNeedling | "">("");
  const [timeline, setTimeline] = useState<QuizTimeline | "">("");

  const answers = useMemo((): QuizAnswers | null => {
    if (!concern || !needling || !timeline) return null;
    return { concern, needling, timeline };
  }, [concern, needling, timeline]);

  const products = answers ? recommendQuizProducts(answers) : [];
  const copy = answers ? quizResultCopy(answers) : null;
  const learn = answers ? quizLearnLinks(answers) : [];

  function persist(next: QuizAnswers) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...next, at: Date.now() }));
  }

  function restart() {
    setStep("intro");
    setConcern("");
    setNeedling("");
    setTimeline("");
  }

  if (step === "intro") {
    return (
      <div className="border border-line bg-paper px-5 py-6">
        <p className="text-[11px] uppercase tracking-[0.16em] text-bronze">Before you start</p>
        <p className="mt-3 text-sm text-ink-soft">{QUIZ_DISCLAIMER}</p>
        <button
          type="button"
          className="mt-6 bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-paper"
          onClick={() => setStep("concern")}
        >
          Start
        </button>
      </div>
    );
  }

  if (step === "results" && answers && copy) {
    return (
      <div className="space-y-8">
        <div className="border border-line bg-paper px-5 py-6">
          <p className="text-[11px] uppercase tracking-[0.16em] text-bronze">Your route</p>
          <h2 className="mt-2 font-serif text-3xl">{copy.heading}</h2>
          <p className="mt-3 text-sm text-ink-soft">{copy.body}</p>
          <p className="mt-3 text-sm text-ink-soft">{copy.timelineNote}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {products.map((product) => (
            <article key={product.slug} className="border border-line bg-paper p-5">
              <ProductPhoto
                src={product.image}
                alt={product.name}
                labelName={product.name}
                labelDetail={product.labelDetail}
                labelFooter={product.labelFooter}
              />
              {product.badge ? (
                <p className="text-[10px] uppercase tracking-[0.16em] text-bronze">{product.badge}</p>
              ) : null}
              <div className="mt-2">
                <TgaStatusBadge mark={tgaMarkForProduct(product)} />
              </div>
              <h3 className="mt-2 font-serif text-2xl">{product.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{product.summary}</p>
              {product.usageNote ? (
                <p className="mt-3 text-[10px] uppercase tracking-[0.12em] text-ink-soft">{product.usageNote}</p>
              ) : (
                <TopicalUseLabel className="mt-3" />
              )}
              <p className="mt-4 text-sm">{product.price}</p>
              <AddToCartButton slug={product.slug} />
              <Link
                href={`/shop/${product.slug}`}
                className="mt-3 inline-block text-[11px] uppercase tracking-[0.14em] underline underline-offset-2"
              >
                Product page
              </Link>
            </article>
          ))}
        </div>
        <ul className="space-y-2 text-sm">
          {learn.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="underline underline-offset-2">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="border border-line bg-paper px-6 py-3 text-[11px] uppercase tracking-[0.16em]"
          onClick={restart}
        >
          Start again
        </button>
      </div>
    );
  }

  return (
    <form
      className="space-y-8"
      onSubmit={(e) => {
        e.preventDefault();
        if (step === "concern" && concern) setStep("needling");
        else if (step === "needling" && needling) setStep("timeline");
        else if (step === "timeline" && concern && needling && timeline) {
          persist({ concern, needling, timeline });
          setStep("results");
        }
      }}
    >
      {step === "concern" ? (
        <fieldset>
          <legend className="font-serif text-2xl">What is the main concern?</legend>
          <div className="mt-4 space-y-2">
            {quizConcerns.map((c) => (
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
      ) : null}

      {step === "needling" ? (
        <fieldset>
          <legend className="font-serif text-2xl">Do you use cosmetic needling?</legend>
          <div className="mt-4 space-y-2">
            {quizNeedlingOptions.map((o) => (
              <label key={o.id} className="flex items-center gap-3 text-sm">
                <input
                  type="radio"
                  name="needling"
                  checked={needling === o.id}
                  onChange={() => setNeedling(o.id)}
                  required
                />
                {o.label}
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}

      {step === "timeline" ? (
        <fieldset>
          <legend className="font-serif text-2xl">How long do you want to see results in?</legend>
          <p className="mt-2 text-sm text-ink-soft">
            Serums are always used with the pen or disposable stamps. Tablets and barrier cream are
            the only options without a device. Cosmetic appearance only — nothing here promises a
            result in a set time.
          </p>
          <div className="mt-4 space-y-2">
            {quizTimelineOptions.map((o) => (
              <label key={o.id} className="flex items-center gap-3 text-sm">
                <input
                  type="radio"
                  name="timeline"
                  checked={timeline === o.id}
                  onChange={() => setTimeline(o.id)}
                  required
                />
                {o.label}
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <button type="submit" className="bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-paper">
          {step === "timeline" ? "See my routine" : "Continue"}
        </button>
        <button
          type="button"
          className="border border-line bg-paper px-6 py-3 text-[11px] uppercase tracking-[0.16em]"
          onClick={() => {
            if (step === "needling") setStep("concern");
            else if (step === "timeline") setStep("needling");
            else setStep("intro");
          }}
        >
          Back
        </button>
      </div>
    </form>
  );
}
