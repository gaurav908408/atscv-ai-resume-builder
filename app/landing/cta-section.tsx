
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="px-5 pb-24 sm:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden bg-emerald-700 px-7 py-20 text-center sm:px-16">

        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-emerald-400/30 blur-3xl" />

        <div className="relative">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-200">
            Your next opportunity starts here
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">
            Ready to Upgrade Your Career?
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-emerald-100">
            Build your professional resume, optimize your experience,
            and get ready for your next big opportunity.
          </p>

          <Link
            href="/builder"
            className="mt-9 inline-flex bg-white px-8 py-4 font-bold text-emerald-700 transition hover:bg-emerald-50"
          >
            Start For Free Today →
          </Link>
        </div>

      </div>
    </section>
  );
}
