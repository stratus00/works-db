"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollCue() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY < window.innerHeight * 0.2);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <span className="font-ui text-sm tracking-widest uppercase text-white/70">
        Scroll
      </span>
      <motion.div
        className="w-px h-12 bg-white/60"
        animate={{ y: [0, 16, 0], scaleY: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
