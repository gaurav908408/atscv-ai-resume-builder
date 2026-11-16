
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-xl font-bold text-white">
        A
      </span>

      <span className="text-2xl font-extrabold tracking-tight text-slate-900">
        ATScV<span className="text-emerald-600">.</span>
      </span>
    </Link>
  );
}
