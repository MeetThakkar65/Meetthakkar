"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowUpRight, Volume2, VolumeX } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Brand Story: Cinematic Vision",
    category: "YouTube Longform",
    aspect: "aspect-video", // 16:9
    video: "https://vrh4baxttlu6myau.public.blob.vercel-storage.com/4.mp4",
    poster: "/posters/brand-story.jpg", // Saved in public/posters/
  },
  {
    id: "02",
    title: "High-Retention Reel #1",
    category: "Instagram Reel",
    aspect: "aspect-[9/16] max-w-[350px] mx-auto", // 9:16
    video: "https://vrh4baxttlu6myau.public.blob.vercel-storage.com/1.mp4",
    poster: "/posters/reel-1.jpg",
  },
  {
    id: "03",
    title: "High-Retention Reel #2",
    category: "Instagram Reel",
    aspect: "aspect-[9/16] max-w-[350px] mx-auto", // 9:16
    video: "https://vrh4baxttlu6myau.public.blob.vercel-storage.com/2.mp4",
    poster: "/posters/reel-2.jpg",
  },
  {
    id: "04",
    title: "High-Retention Reel #3",
    category: "Instagram Reel",
    aspect: "aspect-[9/16] max-w-[350px] mx-auto", // 9:16
    video: "https://vrh4baxttlu6myau.public.blob.vercel-storage.com/3.mp4",
    poster: "/posters/reel-3.jpg",
  },
  // ... Add other reels here with aspect-[9/16]
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-black relative -mt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <span className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">[ Selected Works ]</span>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
            Visual <span className="text-mask">Storytelling.</span>
          </h2>
        </div>

        <div className="space-y-[20vh]">
          {projects.map((project, index) => (
            <TimelineCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ project }: { project: any }) {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showIcon, setShowIcon] = useState(false);

  const isInView = useInView(ref, { margin: "-25% 0px -25% 0px" });

  // Handle Play/Pause on Scroll
  useEffect(() => {
    if (isInView) {
      videoRef.current?.play().catch(() => {});
    } else {
      videoRef.current?.pause();
      setIsMuted(true); // Auto-mute when scrolling away
    }
  }, [isInView]);

  // Sync Video Element with State
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleAudio = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsMuted(!isMuted);
    setShowIcon(true);
    // Hide the animation icon after 1 second
    setTimeout(() => setShowIcon(false), 1000);
  };

  return (
    <div ref={ref} className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[50vh]">
      <motion.div 
        animate={{ opacity: isInView ? 1 : 0.2, x: isInView ? 0 : -20 }} 
        className="lg:col-span-4 space-y-6 order-2 lg:order-1"
      >
        <span className="text-4xl font-black text-white/10">{project.id}</span>
        <h3 className="text-4xl font-bold text-white tracking-tighter">{project.title}</h3>
        <span className="px-4 py-1.5 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-accent border-accent/20 inline-block">
          {project.category}
        </span>
        <p className="text-secondary-text leading-relaxed max-w-sm">
          Optimized for maximum engagement using high-retention hooks and cinematic audio design.
        </p>
      </motion.div>

      <motion.div 
        animate={{ 
          scale: isInView ? 1 : 0.95,
          opacity: isInView ? 1 : 0.4,
          filter: isInView ? "blur(0px)" : "blur(15px)"
        }}
        // HOVER TO UNMUTE
        onMouseEnter={() => setIsMuted(false)}
        onMouseLeave={() => setIsMuted(true)}
        // CLICK TO TOGGLE
        onClick={toggleAudio}
        className={`lg:col-span-8 relative ${project.aspect} rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group order-1 lg:order-2 bg-neutral-900 cursor-pointer`}
      >
        <video
          ref={videoRef}
          src={project.video}
          muted={true} // Must start muted for autoplay
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />

        {/* Audio Status Overlay (Top Right) */}
        <div className="absolute top-6 right-6 z-30">
          <div className="glass p-3 rounded-full border-white/10 text-white/50 group-hover:text-white transition-colors">
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </div>
        </div>

        {/* Cinematic "Pop" Animation Icon (Center) */}
        <AnimatePresence>
          {showIcon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.2 }}
              exit={{ opacity: 0, scale: 1.5 }}
              className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none"
            >
              <div className="bg-black/20 backdrop-blur-md p-8 rounded-full border border-white/10">
                {isMuted ? (
                  <VolumeX className="text-white" size={48} />
                ) : (
                  <Volume2 className="text-white" size={48} />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Hover Hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
            {isMuted ? "Click to Unmute" : "Sound On"}
          </p>
        </div>
      </motion.div>
    </div>
  );
}