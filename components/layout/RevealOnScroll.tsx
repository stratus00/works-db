"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function RevealOnScroll({
  children,
  delay = 0,
  className = "",
  variants,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variants?: Variants;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants ?? fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
