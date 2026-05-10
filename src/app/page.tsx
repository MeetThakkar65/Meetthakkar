import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import WhyMe from "@/components/sections/WhyMe";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";

import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background bg-grid-premium">
      <Navbar />
      <Hero />
      
      <div className="max-w-7xl mx-auto">
        <StatsStrip />
        <About />
        <Services /> {/* Ensure pb-0 is set here */}
      </div>
      
      {/* This will now snap directly to the bottom of Services */}
      <Portfolio />

      <div className="max-w-7xl mx-auto">
        <WhyMe />
        <Process />
        <Testimonials />

        <Contact />
      </div>
      <Footer />
    </main>
  );
}