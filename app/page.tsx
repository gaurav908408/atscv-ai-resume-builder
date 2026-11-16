
import { Suspense } from "react";
import Navbar from "@/app/components/layout/navbar";
import Footer from "@/app/components/layout/footer";

import HeroSection from "@/app/landing/hero-section";
import StatsSection from "@/app/landing/stats-section";
import TemplatesSection from "@/app/landing/templates-section";
import TestimonialsSection from "@/app/landing/testimonials-section";
import FeaturesSection from "@/app/landing/features-section";
import CTASection from "@/app/landing/cta-section";

const carouselFallback = (
  <section
    className="bg-slate-50 px-5 py-20 sm:px-8"
    aria-hidden="true"
  >
    <div className="mx-auto max-w-7xl">
      <div className="h-10 w-2/3 rounded-xl bg-slate-200 motion-safe:animate-pulse" />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className="h-80 rounded-2xl border border-slate-200 bg-white motion-safe:animate-pulse"
          />
        ))}
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-slate-50 text-slate-900">
      <Navbar />

      <HeroSection />

      <StatsSection />

      <Suspense fallback={carouselFallback}>
        <TemplatesSection />
      </Suspense>

      <Suspense fallback={carouselFallback}>
        <TestimonialsSection />
      </Suspense>

      <FeaturesSection />

      <CTASection />

      <Suspense
        fallback={
          <div
            className="min-h-[20rem] border-t border-slate-200 bg-white"
            aria-hidden="true"
          />
        }
      >
        <Footer />
      </Suspense>
    </main>
  );
}
