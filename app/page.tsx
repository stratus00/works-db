import Link from "next/link";
import HeroCarousel from "@/components/hero/HeroCarousel";
import ProjectGrid from "@/components/work/ProjectGrid";
import TeamPreview from "@/components/home/TeamPreview";
import HomeCTA from "@/components/home/HomeCTA";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import { firmStatement, processTeaserPillars } from "@/data/content";

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
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <RevealOnScroll>
            <SectionLabel text="Selected Work" />
          </RevealOnScroll>
          <ProjectGrid featured showFilter={false} />
        </div>
      </section>

      {/* Firm Statement */}
      <section className="py-24 md:py-32 border-t border-wdb-gray-200">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <RevealOnScroll>
            <p className="font-display text-2xl md:text-3xl font-light leading-relaxed text-wdb-black">
              {firmStatement}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24 md:py-32 border-t border-wdb-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <RevealOnScroll>
            <SectionLabel text="The Team" />
          </RevealOnScroll>
          <TeamPreview />
        </div>
      </section>

      {/* Process Teaser */}
      <section className="py-24 md:py-32 border-t border-wdb-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <RevealOnScroll>
            <SectionLabel text="How We Work" />
          </RevealOnScroll>
          <div className="md:grid md:grid-cols-3 gap-16 mt-12">
            {processTeaserPillars.map((pillar, i) => (
              <RevealOnScroll key={pillar.name} delay={i * 0.1}>
                <span className="font-ui text-xs tracking-widest uppercase text-wdb-warm">
                  {pillar.name}
                </span>
                <p className="font-ui text-base font-light leading-relaxed text-wdb-gray-600 mt-3">
                  {pillar.description}
                </p>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll delay={0.3}>
            <Link
              href="/process"
              className="inline-block mt-12 font-ui text-sm text-wdb-black hover:text-wdb-warm transition-colors duration-200"
            >
              Our process →
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
