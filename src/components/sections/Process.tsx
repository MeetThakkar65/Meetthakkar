"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const steps = [
  { id: "01", title: "Understanding Your Brand", desc: "Deep dive into your goals, audience, and current brand voice." },
  { id: "02", title: "Content Strategy", desc: "Developing a roadmap and hooks that drive maximum engagement." },
  { id: "03", title: "Editing & Optimization", desc: "Frame-by-frame crafting with a focus on retention and style." },
  { id: "04", title: "Delivery & Growth", desc: "Final files delivered ready for impact across all platforms." },
];

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" ref={containerRef} className="py-32 px-6 relative">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-24 text-center md:text-left">How I Work</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Progress Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-accent"
            />
          </div>

          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center mb-32 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2 flex justify-center md:justify-start px-8">
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="max-w-sm"
                >
                  <span className="text-6xl font-black text-white/5 block mb-4">{step.id}</span>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-secondaryText leading-relaxed">{step.desc}</p>
                </motion.div>
              </div>
              <div className="relative z-10 w-4 h-4 rounded-full bg-black border-2 border-accent mt-8 md:mt-0" />
              <div className="w-full md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}