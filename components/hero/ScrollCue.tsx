"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollCue() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY < window.innerHeight * 0.25);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <span className="font-ui text-xs tracking-widest uppercase text-white/50">
        Scroll
      </span>
      <motion.div
        className="w-px h-8 bg-white/40"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
