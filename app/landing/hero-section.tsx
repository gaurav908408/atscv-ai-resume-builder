
import Link from "next/link";

const resumeSkills = ["React", "JavaScript", "Next.js", "Node.js", "SQL"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-emerald-200/40 blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        <div>
          <span className="inline-flex rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-700">
            ✦ The Next-Gen AI Resume Platform
          </span>

          <h1 className="mt-7 max-w-2xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Get Hired Faster with{" "}
            <span className="text-emerald-600">
              AI-Powered Precision.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Craft professional, ATS-friendly resumes in minutes.
            Optimize your existing resume, analyze job compatibility,
            and take the next step in your career with confidence.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/builder"
              className="rounded-xl bg-emerald-600 px-7 py-4 text-center font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
            >
              Create New Resume →
            </Link>

            <Link
              href="/ats-checker"
              className="rounded-xl border border-slate-300 bg-white px-7 py-4 text-center font-bold transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-emerald-500 hover:text-emerald-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
            >
              ◎ Analyze ATS Score
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap gap-5 text-sm text-slate-500">
            <span>✓ 100% Free</span>
            <span>✓ ATS Friendly</span>
            <span>✓ AI Powered</span>
          </div>
        </div>

        {/* Resume Preview */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-emerald-200 hover:shadow-2xl motion-reduce:transform-none motion-reduce:transition-none sm:p-9">

            <div className="flex items-center justify-between border-b border-slate-200 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                  Professional Resume
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  AI Optimized Document
                </p>
              </div>

              <span className="rounded-md bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">
                ✓ ATS Ready
              </span>
            </div>

            <div className="py-6">
              <h2 className="text-2xl font-extrabold">
                Alex Morgan
              </h2>
              <p className="mt-1 text-sm font-semibold text-emerald-600">
                Software Engineer
              </p>
              <p className="mt-2 text-xs text-slate-400">
                alex@email.com · New York · LinkedIn
              </p>
            </div>

            <div className="space-y-6">

              <div>
                <h3 className="mb-3 border-b-2 border-emerald-500 pb-2 text-xs font-extrabold uppercase tracking-widest">
                  Professional Summary
                </h3>
                <p className="text-xs leading-6 text-slate-500">
                  Results-driven software engineer experienced in
                  building scalable applications and delivering
                  quality software solutions.
                </p>
              </div>

              <div>
                <h3 className="mb-3 border-b-2 border-emerald-500 pb-2 text-xs font-extrabold uppercase tracking-widest">
                  Experience
                </h3>

                <p className="text-sm font-bold">Software Developer</p>
                <p className="mt-1 text-xs text-slate-400">
                  Tech Company · 2023 - Present
                </p>

                <div className="mt-3 space-y-2">
                  <div className="h-2 w-full bg-slate-100" />
                  <div className="h-2 w-11/12 bg-slate-100" />
                  <div className="h-2 w-4/5 bg-slate-100" />
                </div>
              </div>

              <div>
                <h3 className="mb-3 border-b-2 border-emerald-500 pb-2 text-xs font-extrabold uppercase tracking-widest">
                  Technical Skills
                </h3>

                <div className="flex flex-wrap gap-2">
                  {resumeSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7 flex justify-between border-t border-slate-100 pt-5 text-xs">
              <span className="text-slate-400">Generated with ATScV</span>
              <span className="font-bold text-emerald-600">
                ✦ AI Enhanced
              </span>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-5 hidden rounded-xl border border-emerald-100 bg-white p-4 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl motion-reduce:transform-none motion-reduce:transition-none sm:block">
            <p className="text-xs text-slate-500">Resume Quality</p>
            <p className="mt-1 text-xl font-extrabold text-emerald-600">
              Excellent ✦
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
