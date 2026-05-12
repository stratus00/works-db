import Link from "next/link";
import HeroCarousel from "@/components/hero/HeroCarousel";
import ProjectGrid from "@/components/work/ProjectGrid";
import TeamPreview from "@/components/home/TeamPreview";
import HomeCTA from "@/components/home/HomeCTA";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import { firmStatement, processTeaserPillars } from "@/data/content";
import { parallaxFade } from "@/lib/motion";

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="font-ui text-xs tracking-widest uppercase text-wdb-gray-400 mb-8">
      {text}
    </p>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      {/* Selected Work */}
      <RevealOnScroll variants={parallaxFade}>
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <RevealOnScroll>
              <SectionLabel text="Selected Work" />
            </RevealOnScroll>
            <ProjectGrid featured showFilter={false} />
          </div>
        </section>
      </RevealOnScroll>

      {/* Firm Statement */}
      <RevealOnScroll variants={parallaxFade}>
        <section className="py-24 md:py-32 border-t border-wdb-gray-200">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <p className="font-display text-2xl md:text-3xl font-normal leading-relaxed text-wdb-black">
              {firmStatement}
            </p>
          </div>
        </section>
      </RevealOnScroll>

      {/* Team Preview */}
      <RevealOnScroll variants={parallaxFade}>
        <section className="py-24 md:py-32 border-t border-wdb-gray-200">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="font-display text-3xl md:text-4xl font-normal mb-12">
              The Team
            </h2>
            <TeamPreview />
          </div>
        </section>
      </RevealOnScroll>

      {/* How We Work */}
      <RevealOnScroll variants={parallaxFade}>
        <section className="py-24 md:py-32 border-t border-wdb-gray-200">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <RevealOnScroll>
              <SectionLabel text="How We Work" />
              <h2 className="font-display text-3xl md:text-4xl font-normal mb-12">
                Design and build, under one roof.
              </h2>
            </RevealOnScroll>
            <div className="md:grid md:grid-cols-3 gap-10 mt-4">
              {processTeaserPillars.map((pillar, i) => (
                <RevealOnScroll key={pillar.name} delay={i * 0.1}>
                  <div className="bg-wdb-gray-100 border border-wdb-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
                    <span className="font-ui text-xl tracking-widest uppercase text-wdb-warm block mb-4">
                      {pillar.name}
                    </span>
                    <p className="font-ui text-base font-normal leading-relaxed text-wdb-gray-600">
                      {pillar.description}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
            <RevealOnScroll delay={0.3}>
              <Link
                href="/process"
                className="inline-block mt-12 font-ui text-sm text-wdb-black hover:text-wdb-warm transition-colors duration-200"
              >
                Learn more →
              </Link>
            </RevealOnScroll>
          </div>
        </section>
      </RevealOnScroll>

      <HomeCTA />
    </>
  );
}
