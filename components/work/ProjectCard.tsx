import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const isWide = index % 5 === 0;

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group cursor-pointer overflow-hidden block relative ${
        isWide ? "md:col-span-2" : ""
      }`}
    >
      <div className={`relative w-full overflow-hidden ${isWide ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes={isWide ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wdb-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
          <p className="font-display text-xl font-light text-white">
            {project.name}
          </p>
          <p className="font-ui text-xs tracking-widest uppercase text-white/70 mt-1">
            {project.category}
          </p>
        </div>
      </div>
      <div className="md:hidden mt-2">
        <p className="font-display text-base text-wdb-black">{project.name}</p>
        <p className="font-ui text-xs text-wdb-gray-400 uppercase tracking-wide">
          {project.category}
        </p>
      </div>
    </Link>
  );
}
