import type { Metadata } from "next";
import ProjectGrid from "@/components/work/ProjectGrid";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ProjectGrid showFilter />
      </div>
    </div>
  );
}
