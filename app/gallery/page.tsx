import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Gallery" };

// All project photography — no captions, no context, images only.
const images = [
  { src: "/images/projects/blue-ridge-house/hero.jpg",    alt: "Blue Ridge House exterior terrace",         aspect: "landscape" },
  { src: "/images/projects/cascade-house/hero.jpg",       alt: "Cascade House at dusk",                    aspect: "landscape" },
  { src: "/images/hero/hero-3.jpg",                       alt: "Blue Ridge House above the clouds",        aspect: "landscape" },
  { src: "/images/projects/birmingham-house/01.jpg",      alt: "Birmingham House roof under construction", aspect: "landscape" },
  { src: "/images/projects/cascade-house/01.jpg",         alt: "Cascade House bathroom and detail",        aspect: "square"    },
  { src: "/images/projects/blue-ridge-house/02.jpg",      alt: "Blue Ridge House from the forest",         aspect: "landscape" },
  { src: "/images/projects/birmingham-house/hero.jpg",    alt: "Birmingham House courtyard",               aspect: "landscape" },
  { src: "/images/projects/cascade-house/02.jpg",         alt: "Cascade House corridor and study",         aspect: "square"    },
  { src: "/images/projects/blue-ridge-house/03.jpg",      alt: "Blue Ridge House deck with mountain view", aspect: "landscape" },
  { src: "/images/projects/birmingham-house/02.jpg",      alt: "Birmingham House staircase",               aspect: "landscape" },
  { src: "/images/projects/cascade-house/03.jpg",         alt: "Cascade House entry",                      aspect: "landscape" },
  { src: "/images/projects/birmingham-house/03.jpg",      alt: "Birmingham House stone wall",              aspect: "landscape" },
  { src: "/images/projects/blue-ridge-house/01.jpg",      alt: "Blue Ridge House sunrise",                 aspect: "landscape" },
];

export default function GalleryPage() {
  return (
    <div className="pt-16">
      <div
        className="columns-1 md:columns-2 xl:columns-3 gap-1"
        style={{ columnFill: "balance" }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="break-inside-avoid mb-1 relative overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={1200}
              height={img.aspect === "square" ? 900 : 800}
              className="w-full h-auto block"
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              priority={i < 3}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
