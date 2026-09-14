import { SkinQuiz } from "@/components/SkinQuiz";

export const metadata = {
  title: "Skin quiz",
  description: "A short quiz that routes you to a topical hub. Not a medical assessment.",
};

export default function QuizPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 lg:px-6">
      <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Quiz</p>
      <h1 className="mt-2 font-serif text-4xl">Find a topical routine</h1>
      <p className="mt-4 text-ink-soft">
        This is not a diagnosis. It does not recommend injectable research peptides.
      </p>
      <div className="mt-10">
        <SkinQuiz />
      </div>
    </div>
  );
}
