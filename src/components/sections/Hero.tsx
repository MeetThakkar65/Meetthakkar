"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react"; // Import the scroll hook
import { Play } from "lucide-react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const lenis = useLenis(); // Initialize Lenis controller

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Premium Scroll Handler (Matches Navbar easing)
  const handleScrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    lenis?.scrollTo(href, {
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6">
      {/* Dynamic Spotlight */}
      <div className="spotlight" />

      <div className="container max-w-6xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top Badge */}
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-accent border border-accent/30 rounded-full bg-accent/5">
            AVAILABLE FOR PROJECTS
          </span>

          {/* Cinematic Title with Gradient Mask */}
          <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.8] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20">
            MEET <br /> THAKKAR
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-light tracking-tight text-secondary-text max-w-3xl mx-auto mb-10">
            Professional Video Editing & <br /> 
            <span className="text-white italic">Social Media Management.</span>
          </h2>
        </motion.div>

        {/* Connected Action Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {/* Scrolls to Portfolio Section */}
          <button 
            onClick={(e) => handleScrollTo(e, "#portfolio")}
            className="relative group px-10 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              VIEW PORTFOLIO <Play size={14} fill="currentColor" />
            </span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          
          {/* Scrolls to Contact Section */}
          <button 
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="px-10 py-4 glass text-white font-bold rounded-xl border-white/10 hover:bg-white/5 transition-all"
          >
            LET'S TALK
          </button>
        </motion.div>
      </div>

      {/* Background Typography (Ghost Text) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full overflow-hidden whitespace-nowrap opacity-[0.02] select-none pointer-events-none">
        <span className="text-[15vw] font-black tracking-tighter uppercase">Retention • Growth • Authority •</span>
      </div>
    </section>
  );
}