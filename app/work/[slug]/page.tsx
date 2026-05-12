import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import PageHero from "@/components/layout/PageHero";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project?.name ?? "Project" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.indexOf(project);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <PageHero image={project.heroImage} alt={project.name} />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Metadata bar */}
        <div className="pt-12 pb-8 border-b border-wdb-gray-200">
          <div className="flex gap-6 flex-wrap font-ui text-xs tracking-widest uppercase text-wdb-gray-400">
            <span>{project.location}</span>
            <span>{project.category}</span>
            <span>{project.year}</span>
            <span>{project.status}</span>
            <span>With {project.collaborator}</span>
          </div>
        </div>

        {/* Description */}
        <div className="pt-12 max-w-2xl">
          {project.description.map((para, i) => (
            <p
              key={i}
              className="font-ui text-base font-normal leading-relaxed text-wdb-gray-600 mb-6"
            >
              {para}
            </p>
          ))}
        </div>

        {/* Photo gallery */}
        <div className="mt-16 space-y-3">
          {project.images.slice(1).map((src, i) => (
            <div key={i} className="w-full relative aspect-[4/3]">
              <Image
                src={src}
                alt={`${project.name} — photo ${i + 2}`}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 1280px, 100vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Next project */}
      <div className="mt-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="pt-12 border-t border-wdb-gray-200">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block relative h-64 overflow-hidden"
          >
            <Image
              src={nextProject.heroImage}
              alt={nextProject.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(min-width: 1280px) 1280px, 100vw"
            />
            <div className="absolute inset-0 bg-wdb-black/40" />
            <div className="absolute bottom-6 left-6">
              <p className="font-ui text-xs tracking-widest uppercase text-white/60 mb-2">
                Next project
              </p>
              <p className="font-display text-2xl font-normal text-white">
                {nextProject.name}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
