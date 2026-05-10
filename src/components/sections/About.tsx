"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Using Next.js Image for better performance

export default function About() {
  const sentence = "I don’t just edit videos — I help brands build authority, increase retention, and create content that converts attention into growth.";

  const words = sentence.split(" ");

  return (
    <section id="about" className="py-24 md:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* Left Side: Typography Reveal */}
        <div className="lg:col-span-8">
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.1 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: false, amount: 0.5 }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-xl text-secondaryText max-w-2xl leading-relaxed"
          >
            With a deep understanding of modern algorithms and viewer psychology, I transform raw footage into strategic assets that tell a story and keep the audience hooked until the final frame.
          </motion.p>
        </div>

        {/* Right Side: Visual Mockup */}
        <div className="lg:col-span-4 relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 glass rounded-3xl p-4 border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden bg-neutral-900"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
              {/* Your Uploaded Image */}
              <Image
                src="/portfoliopic.jpeg"
                alt="Meet Thakkar "
                fill
                /* sizes logic:
                   - Below 768px (mobile): use 100% of viewport width
                   - Below 1200px (tablet): use 50% of viewport width
                   - Desktop: use 33% of viewport width (approx 4/12 columns)
                */
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              // If this section appears high up on the page, consider adding:
              // priority 
              />


              {/* Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <p className="text-accent font-bold text-sm mb-1 italic">Social Strategy</p>
                <h4 className="text-white text-lg font-bold tracking-tight">Engagement Mastery</h4>
              </div>
            </div>
          </motion.div>

          {/* Decorative floating cards behind for depth */}
          <div className="absolute -top-6 -left-6 w-full h-full glass rounded-3xl z-10 opacity-30 -rotate-6" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 blur-[100px] -z-10 rounded-full" />
        </div>

      </div>
    </section>
  );
}