"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah J.", role: "YouTube Creator", text: "Meet transformed my retention rates. We went from 30% to over 55% in just three videos. Highly professional and intuitive.", size: "col-span-1 md:col-span-2" },
  { name: "Alpha Tech", role: "SaaS Startup", text: "The cinematic feel he brings to our ads is unmatched. Real agency-level quality.", size: "col-span-1" },
  { name: "David Chen", role: "Social Media Manager", text: "Finally an editor who understands pacing and hooks. The growth we've seen on Reels is insane.", size: "col-span-1" },
  { name: "Elena Rossi", role: "Lifestyle Brand", text: "A pleasure to work with. He takes the stress out of content creation.", size: "col-span-1 md:col-span-2" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-secondaryBg/20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-16 text-center">Client Success</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[2.5rem] glass border-white/5 relative group hover:bg-white/5 transition-all ${t.size}`}
            >
              <Quote className="text-accent/20 absolute top-8 right-8" size={40} />
              <p className="text-xl text-white/90 leading-relaxed italic mb-8">"{t.text}"</p>
              <div>
                <p className="text-lg font-bold text-white">{t.name}</p>
                <p className="text-sm text-secondaryText">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}