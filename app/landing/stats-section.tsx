
"use client";

import { useEffect, useRef, useState } from "react";

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
  }, [startAnimation]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 text-center md:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={stat.label}>
            <h2 className="text-4xl font-extrabold text-emerald-600 md:text-6xl">
              {stat.prefix ?? ""}
              {counts[index]}
              {stat.suffix}
            </h2>

            <p className="mt-3 text-base text-slate-500 md:text-xl">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
