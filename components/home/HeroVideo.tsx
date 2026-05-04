"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import { business, heroMedia } from "@/lib/content";

// REPLACE: When client provides their lounge footage, set heroMedia.videoSrc
// in lib/content.ts and the <video> tag below will activate automatically.

export function HeroVideo() {
  const reduced = useReducedMotion();
  const hasVideo = !!heroMedia.videoSrc;

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-espresso">
      {hasVideo ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroMedia.posterSrc}
        >
          <source src={heroMedia.videoSrc} type="video/mp4" />
        </video>
      ) : (
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            scale: reduced ? { duration: 0 } : { duration: 14, ease: "easeOut" },
            opacity: { duration: 1.2, ease: "easeOut" },
          }}
          className="absolute inset-0"
        >
          <img
            src={heroMedia.posterSrc}
            alt=""
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
        </motion.div>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-espresso/55 via-espresso/40 to-espresso/90" />
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-ivory px-6">
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 text-gold"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow text-gold">Birmingham, Alabama</span>
          <span className="h-px w-10 bg-gold" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: reduced ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-7 text-5xl md:text-7xl lg:text-8xl leading-[1] tracking-tight max-w-5xl"
        >
          Ash <span className="font-serif-italic text-gold">&amp;</span> Oak
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif-italic mt-6 text-xl md:text-2xl text-ivory/90"
        >
          {business.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ivory text-espresso text-sm uppercase tracking-[0.22em] hover:bg-gold transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Reserve Now
          </a>
          <a
            href="/menu"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-ivory/70 text-ivory text-sm uppercase tracking-[0.22em] hover:bg-ivory hover:text-espresso transition-all duration-300"
          >
            Explore the Menu
          </a>
        </motion.div>

        <motion.a
          href="#story"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="absolute bottom-10 text-ivory/70 hover:text-gold transition-colors"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
