"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FilterBar from "./FilterBar";
import { useState } from "react";
import { motion } from "framer-motion";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-12 items-stretch">
        {filtered.map((project, i) => (
          <motion.div
            key={project.slug}
            className="h-full"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
              delay: (i % 2) * 0.12,
            }}
          >
            <ProjectCard project={project} index={i} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
