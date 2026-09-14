import Link from "next/link";

export const metadata = {
  title: "Order note",
  robots: { index: false, follow: false },
};

export default async function ConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>;
}) {
  const { order } = await searchParams;
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 lg:px-6">
      <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Demo</p>
      <h1 className="mt-2 font-serif text-4xl">Nothing was charged</h1>
      <p className="mt-4 text-ink-soft">
        Reference {order ?? "DEMO"} is a local test only. Payment and shipping are not connected.
      </p>
      <Link href="/shop" className="mt-8 inline-flex bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-paper">
        Back to shop
      </Link>
    </div>
  );
}
