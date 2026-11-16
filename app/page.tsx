
import Navbar from "@/app/components/layout/navbar";
import Footer from "@/app/components/layout/footer";

import HeroSection from "@/app/landing/hero-section";
import StatsSection from "@/app/landing/stats-section";
import TemplatesSection from "@/app/landing/templates-section";
import FeaturesSection from "@/app/landing/features-section";
import CTASection from "@/app/landing/cta-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <Navbar />

      <HeroSection />

      <StatsSection />

      <TemplatesSection />

      <FeaturesSection />

      <CTASection />

      <Footer />
    </main>
  );
}
