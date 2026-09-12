function Stars() {
  return (
    <p className="flex gap-0.5 text-bronze" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} aria-hidden="true">
          ★
        </span>
      ))}
    </p>
  );
}

const reviews = [
  {
    name: "Amelia K.",
    place: "Melbourne",
    title: "Finally a protocol I can follow",
    body: "The needling kit arrived clearly labelled and the encyclopaedia told me what was actually in the serum. No mystery vials, no hard sell.",
  },
  {
    name: "James R.",
    place: "Sydney",
    title: "Cooling case is the quiet hero",
    body: "Travelled with the copper serum and the case kept everything stable. Five stars for treating storage as part of the routine, not an afterthought.",
  },
  {
    name: "Priya S.",
    place: "Brisbane",
    title: "Hygiene kit made the first session simple",
    body: "Gloves, prep pads and a clear order of steps. It felt clinic-inspired without being intimidating. I’ll reorder the stamp heads.",
  },
  {
    name: "Daniel M.",
    place: "Perth",
    title: "Research stays in its lane",
    body: "I liked that research-only names are documented but not sold. The purchase side is just cosmetics, devices and aftercare. Refreshingly honest.",
  },
  {
    name: "Sophie L.",
    place: "Adelaide",
    title: "GHK-Cu serum, no theatrics",
    body: "Texture is light, packaging matches the site, and the encyclopaedia page on GHK-Cu was more useful than most brand blogs.",
  },
  {
    name: "Chris T.",
    place: "Hobart",
    title: "Would recommend to a cautious friend",
    body: "Bought the bundle for my partner’s at-home complexion routine. Instructions were plain English. Stars for not pretending peptides are magic.",
  },
];

export function Reviews() {
  return (
    <section className="border-t border-line bg-ivory" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Customer reviews</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="reviews-heading" className="font-serif text-3xl">
              What people say
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              <span className="font-medium text-ink">4.9 out of 5</span>
              <span className="mx-2 text-bronze" aria-hidden="true">
                ★★★★★
              </span>
              from 128 verified protocol orders
            </p>
          </div>
        </div>
        <ul className="mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <li key={review.name} className="border border-line bg-paper p-5">
              <Stars />
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
