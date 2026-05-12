import type { Metadata } from "next";
import GalleryImage from "@/components/gallery/GalleryImage";

export const metadata: Metadata = { title: "Gallery" };

const images = [
  { src: "/images/projects/blue-ridge-house/hero.jpg",    alt: "Blue Ridge House exterior terrace",         w: 1836, h: 1350 },
  { src: "/images/projects/cascade-house/hero.jpg",       alt: "Cascade House at dusk",                    w: 1840, h: 1092 },
  { src: "/images/hero/hero-3.jpg",                       alt: "Blue Ridge House above the clouds",        w: 2400, h: 1350 },
  { src: "/images/projects/birmingham-house/01.jpg",      alt: "Birmingham House roof under construction", w: 1296, h: 972  },
  { src: "/images/projects/cascade-house/01.jpg",         alt: "Cascade House bathroom and detail",        w: 761,  h: 704  },
  { src: "/images/projects/blue-ridge-house/02.jpg",      alt: "Blue Ridge House from the forest",         w: 2400, h: 1350 },
  { src: "/images/projects/birmingham-house/hero.jpg",    alt: "Birmingham House courtyard",               w: 2400, h: 1056 },
  { src: "/images/projects/cascade-house/02.jpg",         alt: "Cascade House corridor and study",         w: 770,  h: 705  },
  { src: "/images/projects/blue-ridge-house/03.jpg",      alt: "Blue Ridge House deck with mountain view", w: 1333, h: 1350 },
  { src: "/images/projects/birmingham-house/02.jpg",      alt: "Birmingham House staircase",               w: 2265, h: 1508 },
  { src: "/images/projects/cascade-house/03.jpg",         alt: "Cascade House entry",                      w: 450,  h: 703  },
  { src: "/images/projects/birmingham-house/03.jpg",      alt: "Birmingham House stone wall",              w: 1296, h: 972  },
  { src: "/images/projects/blue-ridge-house/01.jpg",      alt: "Blue Ridge House sunrise",                 w: 2400, h: 1350 },
];

export default function GalleryPage() {
  return (
    <div className="pt-16">
      <div className="columns-1 md:columns-2 xl:columns-3 gap-1" style={{ columnFill: "balance" }}>
        {images.map((img, i) => (
          <GalleryImage
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={img.w}
            height={img.h}
            priority={i < 3}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
