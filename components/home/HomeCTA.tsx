import Link from "next/link";
import { homepageCTA } from "@/data/content";

export default function HomeCTA() {
  return (
    <section className="bg-wdb-black py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-normal text-white">
          {homepageCTA.headline}
        </h2>
        <p className="font-ui text-sm font-normal text-white/60 mt-4">
          {homepageCTA.subline}
        </p>
        <Link
          href={homepageCTA.buttonHref}
          className="mt-10 inline-block px-8 py-3 border border-white font-ui text-sm tracking-wider uppercase text-white hover:bg-white hover:text-wdb-black transition-colors duration-300"
        >
          {homepageCTA.buttonLabel}
        </Link>
      </div>
    </section>
  );
}
