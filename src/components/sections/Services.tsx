"use client";
import React from "react";
import { motion } from "framer-motion";
import { Video, Share2, Target, BarChart3 } from "lucide-react";

const services = [
  {
    title: "Video Editing",
    desc: "Cinematic storytelling tailored for YouTube, Reels, and Commercials. High-retention hooks and seamless pacing.",
    icon: <Video className="text-accent" size={32} />,
    grid: "md:col-span-2",
  },
  {
    title: "Social Management",
    desc: "End-to-end growth strategy and platform-specific distribution.",
    icon: <Share2 className="text-accent" size={32} />,
    grid: "md:col-span-1",
  },
  {
    title: "Retention Strategy",
    desc: "Analyzing data to keep eyes on your content longer.",
    icon: <Target className="text-accent" size={32} />,
    grid: "md:col-span-1",
  },
  {
    title: "Content Growth",
    desc: "Transforming views into loyal community members and brand authority.",
    icon: <BarChart3 className="text-accent" size={32} />,
    grid: "md:col-span-2",
  },
];

export default function Services() {
  return (
    <section id="services" className="pt-24 pb-58 bg-secondaryBg/30">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Expertise</h2>
          <p className="text-secondaryText text-lg">Strategic solutions for the modern creator economy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`glass p-10 rounded-[2.5rem] border-white/5 relative overflow-hidden group transition-all duration-500 ${service.grid}`}
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6 inline-block p-4 bg-white/5 rounded-2xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-secondaryText leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}