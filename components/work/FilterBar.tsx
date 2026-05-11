"use client";

import { projects } from "@/data/projects";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category))), "In Progress"];

interface Props {
  activeFilter: string;
  onFilter: (f: string) => void;
}

export default function FilterBar({ activeFilter, onFilter }: Props) {
  return (
    <div
      role="group"
      aria-label="Filter projects by category"
      className="sticky top-16 z-40 bg-wdb-white/95 backdrop-blur-sm py-4 border-b border-wdb-gray-200 flex flex-wrap"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onFilter(cat)}
          aria-pressed={activeFilter === cat}
          className={`font-ui text-sm tracking-wide py-2 mr-6 transition-colors duration-200 ${
            activeFilter === cat
              ? "text-wdb-black border-b border-wdb-black pb-1.5"
              : "text-wdb-gray-400 hover:text-wdb-black"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
