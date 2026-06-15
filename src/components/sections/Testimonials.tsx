"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { 
  name: "ElevateMe", 
  role: "Career & Ed Platform", 
  text: "Meet took care of our entire content production from scratch. Whether it was short-form edits, thumbnail design, or content planning, he consistently gave us top-quality work that maximized our audience engagement and retention."
},
{ 
  name: "Merge Computer", 
  role: "Tech & PC Retail", 
  text: "We needed promotional videos for our PC sales business and Meet delivered exactly what we wanted. The product showcases look very clean and professional, which directly helped improve our customer engagement."
},
{ 
  name: "Personal Brands", 
  role: "Freelance Partnerships", 
  text: "If you want to grow your Instagram Reels or YouTube Shorts, Meet is the guy. He understands pacing, hooks, and audience retention perfectly. His clean editing style really helps the videos perform well."
},
{ 

  name: "ConnectoGrowth", 
  role: "EdTech Platform", 
  text: "Meet managed our complete video content. From course videos to marketing reels, his editing is super engaging. It really helped us get more students hooked and improved our course visibility big time."
},
{ 
  name: "PropertyValaa", 
  role: "Real Estate Brand", 
  text: "Highly recommended! Meet handled everything for us—script writing, video shoots, editing, and even posting on social media. He completely took the stress out of our brand communication."
}
  
 
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 150 : -150,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 15 : -15,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  const jumpToIndex = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = offset.x;
    if (swipe < -50) {
      paginate(1);
    } else if (swipe > 50) {
      paginate(-1);
    }
  };

  // Reusable Pagination Controls Component
  const PaginationControls = ({ className = "" }) => (
    <div className={`flex items-center gap-4 lg:gap-6 ${className}`}>
      <button 
        onClick={() => paginate(-1)}
        className="w-12 h-12 lg:w-14 lg:h-14 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all"
      >
        <ChevronLeft size={20} />
      </button>
      
      {/* Interactive Dots Array */}
      <div className="flex items-center gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => jumpToIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-6 bg-accent" : "w-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      <button 
        onClick={() => paginate(1)}
        className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-accent flex items-center justify-center text-white hover:bg-hoverAccent hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );

  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Grid */}
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Typography */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">
            [ Verified Impact ]
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
            Don't just <br className="hidden sm:block" /> take my <span className="text-mask">word.</span>
          </h2>
          <p className="text-secondaryText text-base md:text-lg mt-4 md:mt-6 max-w-md">
            Real results from real brands. Swipe through to see how strategic editing impacts the bottom line.
          </p>

          {/* Controls - ONLY visible on Desktop (lg and up) */}
          <PaginationControls className="hidden lg:flex mt-12" />
        </div>

        {/* Right Column: The 3D Swipe Stack */}
        <div className="lg:col-span-7 relative h-[420px] md:h-[450px] w-full perspective-1000">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              /* Mobile glitch fix: Reduced p-8 to p-6, adjusting rounded corners for small screens */
              className="absolute inset-0 w-full h-full glass border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 flex flex-col cursor-grab active:cursor-grabbing hover:border-white/20 transition-colors shadow-2xl bg-[#0B0B0B]/80 backdrop-blur-xl"
            >
              <Quote className="text-accent/20 mb-4 md:mb-6 flex-shrink-0" size={32} />
              
              {/* Flex-grow perfectly centers short or long text vertically */}
              <div className="flex-grow flex items-center">
                {/* Mobile glitch fix: Font size drops to 15px on mobile to prevent overflow */}
                <p className="text-[15px] sm:text-base md:text-xl text-white/90 leading-relaxed font-medium">
                  "{testimonials[currentIndex].text}"
                </p>
              </div>
              
              {/* Avatar Footer */}
              <div className="flex items-center gap-4 pt-6 md:pt-8 border-t border-white/10 mt-4 md:mt-6 flex-shrink-0">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <span className="text-white font-bold text-lg md:text-xl">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-base md:text-lg font-bold text-white tracking-tight leading-tight">{testimonials[currentIndex].name}</p>
                  <p className="text-xs md:text-sm text-accent uppercase tracking-wider mt-1 font-bold">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls - ONLY visible on Mobile (below lg) - Placed under the card */}
        <div className="lg:hidden col-span-1 flex justify-center mt-4">
          <PaginationControls />
        </div>

      </div>
    </section>
  );
}