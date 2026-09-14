import { marketing } from "@/lib/marketing";

function Stars({ label }: { label: string }) {
  return (
    <p className="flex gap-0.5 text-bronze" aria-label={label}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} aria-hidden="true">
          ★
        </span>
      ))}
    </p>
  );
}

export function Reviews() {
  return (
    <section className="border-t border-line bg-ivory" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Customer reviews</p>
        <div className="mt-2">
          <h2 id="reviews-heading" className="font-serif text-3xl">
            {marketing.reviews.homepageHeading}
          </h2>
          <p className="mt-2 text-sm text-ink-soft">
            <span className="font-medium text-ink">{marketing.reviews.averageLabel}</span>
            <span className="mx-2 text-bronze" aria-hidden="true">
              ★★★★★
            </span>
            {marketing.reviews.countLabel}
          </p>
        </div>
        <ul className="mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {marketing.reviews.items.map((review, i) => (
            <li key={`${review.title}-${i}`} className="border border-line bg-paper p-5">
              <Stars label={marketing.reviews.averageLabel} />
              <h3 className="mt-3 font-serif text-xl">{review.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{review.body}</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-ink">
                {review.name}
                <span className="text-ink-soft"> · {review.place}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
