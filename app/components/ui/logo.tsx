
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="flex h-10 w-10 items-center justify-center bg-emerald-600 text-xl font-bold text-white">
        A
      </span>

      <span className="text-2xl font-extrabold tracking-tight text-slate-900">
        ATScV<span className="text-emerald-600">.</span>
      </span>
    </Link>
  );
}
