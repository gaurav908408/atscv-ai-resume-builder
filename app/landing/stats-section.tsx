
"use client";

import { useEffect, useRef, useState } from "react";
import useReducedMotion from "@/app/landing/use-reduced-motion";

const stats = [
  { value: 98, suffix: "%", label: "ATS Pass Rate" },
  { value: 10, suffix: "x", label: "Faster Creation" },
  { value: 50, suffix: "k+", label: "Resumes Built" },
  { value: 1, suffix: "%", prefix: "Top ", label: "Industry Standards" },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startAnimation) return;
    if (prefersReducedMotion) {
      setCounts(stats.map((stat) => stat.value));
      return;
    }

    const duration = 2000;
    const startTime = performance.now();

    let animationFrame: number;

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(
        stats.map((stat) =>
          Math.floor(stat.value * easedProgress)
        )
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [prefersReducedMotion, startAnimation]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 text-center min-[360px]:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-6">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="flex h-full min-w-0 flex-col items-center justify-center rounded-xl border border-transparent px-3 py-5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-slate-200 hover:bg-slate-50 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none"
          >
            <h2 className="w-full min-w-0 whitespace-nowrap text-3xl font-extrabold text-emerald-600 sm:text-4xl lg:text-5xl xl:text-6xl">
              {stat.prefix ?? ""}
              {counts[index]}
              {stat.suffix}
            </h2>

            <p className="mt-3 min-h-12 text-sm text-slate-500 sm:text-base lg:text-lg xl:text-xl">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
