import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhaseList from "@/components/process/PhaseList";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import { processIntro, servicesList } from "@/data/process";

export const metadata: Metadata = { title: "Process" };

export default function ProcessPage() {
  return (
    <>
      {/* Intro */}
      <div className="pt-40 max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl">
          <RevealOnScroll>
            <h1 className="font-display text-4xl md:text-5xl font-normal mb-12">
              {processIntro.headline}
            </h1>
            {processIntro.body.map((para, i) => (
              <p
                key={i}
                className="font-ui text-base font-normal leading-relaxed text-wdb-gray-600 mb-6"
              >
                {para}
              </p>
            ))}
          </RevealOnScroll>
        </div>
      </div>

      {/* Phase list */}
      <PhaseList />

      {/* Photo break */}
      <div className="mt-24 w-full aspect-[21/9] relative overflow-hidden">
        <Image
          src="/images/projects/birmingham-house/hero.jpg"
          alt="Birmingham House construction"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Services list */}
      <div className="mt-24 max-w-7xl mx-auto px-6 md:px-12">
        <RevealOnScroll>
          <p className="font-ui text-xs tracking-widest uppercase text-wdb-gray-400 mb-8">
            What we offer
          </p>
          <div className="md:grid md:grid-cols-2 gap-x-16 gap-y-3 mt-8">
            {servicesList.map((service) => (
              <p key={service} className="font-ui text-base font-normal text-wdb-gray-600 flex items-center gap-3">
                <span className="text-wdb-warm">—</span>
                {service}
              </p>
            ))}
          </div>
        </RevealOnScroll>

        {/* CTA */}
        <div className="mt-24 text-center mb-32">
          <RevealOnScroll>
            <h2 className="font-display text-2xl font-normal mb-6">
              Ready to start a project?
            </h2>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border border-wdb-black font-ui text-sm tracking-wider uppercase text-wdb-black hover:bg-wdb-black hover:text-wdb-white transition-colors duration-300"
            >
              Get in touch
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </>
  );
}
