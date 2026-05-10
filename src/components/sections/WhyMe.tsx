"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Eye, Zap, MousePointerClick, Clock, Lightbulb } from "lucide-react";

const features = [
  {
    title: "Fast Communication",
    icon: <MessageSquare size={20} />,
    desc: "Professional and seamless updates throughout the project.",
  },
  {
    title: "Attention to Detail",
    icon: <Eye size={20} />,
    desc: "Frame-by-frame perfection to ensure the highest quality output.",
  },
  {
    title: "Modern Editing Style",
    icon: <Zap size={20} />,
    desc: "Utilizing current trends and cinematic techniques that perform.",
  },
  {
    title: "Retention Focus",
    icon: <MousePointerClick size={20} />,
    desc: "Strategically designed hooks to keep viewers watching longer.",
  },
  {
    title: "Reliable Delivery",
    icon: <Clock size={20} />,
    desc: "Deadlines are sacred. I ensure your content is ready when you need it.",
  },
  {
    title: "Creative Growth",
    icon: <Lightbulb size={20} />,
    desc: "A long-term mindset focused on elevating your brand authority.",
  },
];

export default function WhyMe() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">Why Work With Me</h2>
          <p className="text-secondaryText text-lg">Combining creative artistry with technical strategy to deliver results that matter.</p>
        </div>

        {/* Uniform 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 overflow-hidden"
            >
              {/* Reference-style Icon Box */}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                  {f.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{f.title}</h3>
                <p className="text-secondaryText text-sm leading-relaxed opacity-80">
                  {f.desc}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}