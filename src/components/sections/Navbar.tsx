"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react"; // Import the scroll hook
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const lenis = useLenis(); // Initialize Lenis controller

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Senior Scroll Handler
  const handleScrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    
    // lenis.scrollTo handles the animation math automatically
    lenis?.scrollTo(href, {
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Premium Cinematic Easing
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-4 flex justify-center">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex items-center justify-between w-full max-w-7xl px-6 py-3 transition-all duration-500 rounded-full",
          isScrolled ? "glass shadow-2xl py-2" : "bg-transparent"
        )}
      >
        {/* Logo */}
        <div className="text-xl font-bold tracking-tighter text-white">
          MEET <span className="text-accent">THAKKAR</span>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)} // Smooth scroll click
              className="text-sm font-medium text-secondaryText hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Connected CTA Button */}
        <button 
          onClick={(e) => handleScrollTo(e, "#contact")} // Connected to Contact section
          className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          Let’s Work
        </button>
      </motion.div>
    </nav>
  );
}