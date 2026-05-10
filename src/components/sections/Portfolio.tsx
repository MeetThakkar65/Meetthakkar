"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

  React.useEffect(() => {
    if (isInView) {
      videoRef.current?.play().catch(() => {});
    } else {
      videoRef.current?.pause();
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Text side stays consistent */}
      <motion.div 
        animate={{ opacity: isInView ? 1 : 0.3 }}
        className="lg:col-span-4 space-y-6"
      >
        <span className="text-4xl font-black text-white/10">{project.id}</span>
        <h3 className="text-4xl font-bold text-white tracking-tighter">{project.title}</h3>
        <span className="px-3 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-accent border-accent/20 inline-block">
          {project.category}
        </span>
        <p className="text-secondaryText leading-relaxed">Strategic editing focused on maximizing retention and impact.</p>
      </motion.div>

      {/* Video Window: This now adapts to the aspect ratio */}
      <motion.div 
        animate={{ 
          scale: isInView ? 1 : 0.95,
          filter: isInView ? "blur(0px)" : "blur(20px)"
        }}
        className={`lg:col-span-8 relative ${project.aspect} rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-neutral-900`}
      >
        <video
          ref={videoRef}
          src={project.video}
          poster={project.poster} // The "Magic" fix for instant loading
          muted loop playsInline
          preload="metadata" // Only loads the first bit of data, not the whole file
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}