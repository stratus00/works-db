"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import HeroLogo from "./HeroLogo";
import { projects } from "@/data/projects";
import ScrollCue from "./ScrollCue";

const carouselProjects = projects.filter((p) => p.heroCarousel);
const images = carouselProjects.map((p) => ({
  src: p.heroImage,
  alt: p.name,
}));

const INTERVAL = 5000;
const PAUSE_DURATION = 10000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const pauseUntil = useRef<number>(0);

  const advance = useCallback((dir: 1 | -1) => {
    pauseUntil.current = Date.now() + PAUSE_DURATION;
    setIndex((i) => (i + dir + images.length) % images.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() >= pauseUntil.current) {
        setIndex((i) => (i + 1) % images.length);
      }
    }, INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-wdb-black/25" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-16 left-8 md:left-12"
      >
        <HeroLogo />
        <p className="font-ui text-xs md:text-sm tracking-wide text-white/70 mt-3 italic">
          designed around life. built without compromise.
        </p>
      </motion.div>

      {/* Arrow navigation — desktop only */}
      <button
        onClick={() => advance(-1)}
        aria-label="Previous image"
        className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-200 text-5xl font-light leading-none"
      >
        ‹
      </button>
      <button
        onClick={() => advance(1)}
        aria-label="Next image"
        className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-200 text-5xl font-light leading-none"
      >
        ›
      </button>

      <ScrollCue />
    </div>
  );
}
