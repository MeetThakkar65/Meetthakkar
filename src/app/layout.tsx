import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Meet Thakkar | Professional Video Editor & Content Strategist",
  description: "Creating content is easy. Creating content that people remember, engage with, and trust — that’s where I add value.",
  keywords: [
    "Professional Video Editor",
    "Social Media Manager",
    "Reel Editor",
    "Short Form Content Editor",
    "YouTube Video Editor",
    "Instagram Reel Editor",
    "Content Strategist",
    "Video Editing Services",
    "Social Media Grow",
    "Content Creation Expert"
  ],
  icons: {
    icon: "logo.png", // This replaces the Vercel icon in the browser tab
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jakarta.variable} antialiased relative`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}