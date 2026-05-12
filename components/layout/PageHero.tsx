import Image from "next/image";

interface Props {
  image: string;
  title?: string;
  subtitle?: string;
  alt?: string;
}

export default function PageHero({ image, title, subtitle, alt = "" }: Props) {
  return (
    <div className="h-[70vh] w-full relative overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-wdb-black/30" />
      {title && (
        <div className="absolute bottom-12 left-8 md:left-12">
          <h1 className="font-display text-4xl md:text-6xl font-light text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="font-ui text-xs tracking-widest uppercase text-white/60 mt-2">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
