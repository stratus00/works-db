"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import ScrollCue from "./ScrollCue";

const carouselProjects = projects.filter((p) => p.heroCarousel);
const images = carouselProjects.map((p) => ({
  src: p.heroImage,
  alt: p.name,
}));

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full relative overflow-hidden">
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
        <p className="font-display text-5xl md:text-7xl font-light text-white tracking-tight">
          WORKS-db
        </p>
        <p className="font-ui text-xs md:text-sm tracking-widest uppercase text-white/70 mt-3">
          Architecture · Design · Build
        </p>
      </motion.div>

      <ScrollCue />
    </div>
  );
}
