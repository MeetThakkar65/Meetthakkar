"use client";
import React from "react";
import { ArrowUp } from "lucide-react";

// Premium Brand SVGs (since Lucide went brand-neutral)
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-2xl font-bold tracking-tighter text-white">
            MEET <span className="text-accent">THAKKAR</span>
          </div>

          {/* <div className="flex gap-8 text-sm font-medium text-secondaryText">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div> */}

         <div className="flex gap-6">
  <a 
    href="https://www.instagram.com/thakkarmeeet?igsh=MWs1dmM2aXVwNzVwZg==" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-3 glass rounded-full hover:bg-white/10 transition-all text-secondaryText hover:text-white"
  >
    <InstagramIcon />
  </a>
  <a 
    href="https://www.linkedin.com/in/meet-thakkar-09261a284" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-3 glass rounded-full hover:bg-white/10 transition-all text-secondaryText hover:text-white"
  >
    <LinkedinIcon />
  </a>
  <a 
    href="https://www.youtube.com/@Meet_Thakkar098" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-3 glass rounded-full hover:bg-white/10 transition-all text-secondaryText hover:text-white"
  >
    <YoutubeIcon />
  </a>
</div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 text-xs text-secondaryText uppercase tracking-widest gap-4">
          <p>© 2026 MEET THAKKAR. ALL RIGHTS RESERVED.</p>
          <p>Turning Content Into Attention, Engagement & Growth.</p>
          <button onClick={scrollToTop} className="flex items-center gap-2 hover:text-white transition-colors">
            BACK TO TOP <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}