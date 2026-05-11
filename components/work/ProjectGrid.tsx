"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FilterBar from "./FilterBar";
import { useState } from "react";

interface Props {
  featured?: boolean;
  showFilter?: boolean;
  initialFilter?: string;
}

export default function ProjectGrid({
  featured = false,
  showFilter = false,
  initialFilter = "All",
}: Props) {
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  const filtered = projects.filter((p) => {
    if (featured && !p.featured) return false;
    if (activeFilter === "All") return true;
    if (activeFilter === "In Progress") return p.status === "In Progress";
    return p.category === activeFilter;
  });

  return (
    <div>
      {showFilter && (
        <FilterBar activeFilter={activeFilter} onFilter={setActiveFilter} />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-12">
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
