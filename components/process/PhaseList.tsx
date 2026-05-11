import { processPhases } from "@/data/process";
import RevealOnScroll from "@/components/layout/RevealOnScroll";

export default function PhaseList() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24">
      {processPhases.map((phase) => (
        <RevealOnScroll key={phase.number}>
          <div className="border-t border-wdb-gray-200 py-12 md:grid md:grid-cols-12 gap-8">
            <div className="md:col-span-2 mb-4 md:mb-0">
              <span className="font-display text-6xl font-light text-wdb-gray-200">
                {phase.number}
              </span>
            </div>
            <div className="md:col-span-5 mb-6 md:mb-0">
              <h3 className="font-display text-2xl font-light mb-4">
                {phase.name}
              </h3>
              <p className="font-ui text-base font-light leading-relaxed text-wdb-gray-600">
                {phase.description}
              </p>
            </div>
            <div className="md:col-span-5">
              <p className="font-ui text-xs tracking-widest uppercase text-wdb-gray-400 mb-3">
                Your role
              </p>
              <p className="font-ui text-sm font-light leading-relaxed text-wdb-gray-400">
                {phase.clientRole}
              </p>
            </div>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  );
}
