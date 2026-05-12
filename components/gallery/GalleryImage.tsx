"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  index: number;
}

export default function GalleryImage({ src, alt, width, height, priority, index }: Props) {
  return (
    <motion.div
      className="break-inside-avoid mb-1 overflow-hidden"
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: (index % 3) * 0.07,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto block"
        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        priority={priority}
      />
    </motion.div>
  );
}
