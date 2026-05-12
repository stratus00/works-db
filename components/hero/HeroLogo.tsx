"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroLogo() {
  const [collapsed, setCollapsed] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setCollapsed(true), 1800);
    return () => clearTimeout(t);
  }, []);

  const expanded = !collapsed || hovered;
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <div
      className="inline-flex items-baseline cursor-default select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="font-ui text-5xl md:text-7xl font-medium text-white tracking-tight">
        Works.
      </span>
      <motion.span
        layout
        className="inline-block overflow-hidden"
        transition={{ layout: { duration: 0.65, ease } }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {expanded ? (
            <motion.span
              key="long"
              className="block whitespace-nowrap font-ui text-5xl md:text-7xl font-medium text-white tracking-tight pb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ duration: 0.35 }}
            >
              design &amp; build
            </motion.span>
          ) : (
            <motion.span
              key="short"
              className="block whitespace-nowrap font-ui text-5xl md:text-7xl font-medium text-white tracking-tight pb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ duration: 0.35, delay: 0.15 }}
            >
              db
            </motion.span>
          )}
        </AnimatePresence>
      </motion.span>
    </div>
  );
}
