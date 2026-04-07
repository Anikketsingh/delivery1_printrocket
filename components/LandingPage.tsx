import Navbar from "./Navbar";
import Hero from "./Hero";
import FeaturesSection from "./sections/FeaturesSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Decorative gradients */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-fuchsia-500/25 to-transparent blur-3xl" />
        <div className="absolute bottom-[-14rem] left-[-6rem] h-[26rem] w-[26rem] rounded-full bg-gradient-to-b from-indigo-500/20 to-transparent blur-3xl" />
        <div className="absolute bottom-[-12rem] right-[-8rem] h-[24rem] w-[24rem] rounded-full bg-gradient-to-b from-emerald-500/18 to-transparent blur-3xl" />
      </div>

      <Navbar />

      <main>
        <section>
          <Hero />
        </section>

        <section id="features" className="mx-auto max-w-6xl px-4 sm:px-6">
          <FeaturesSection />
        </section>

        <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6" id="how-it-works">
          <HowItWorksSection />
        </section>

        <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
          <TestimonialsSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}

