import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import TeamMember from "@/components/team/TeamMember";
import { team } from "@/data/team";
import { teamValuesStatement } from "@/data/content";

export const metadata: Metadata = { title: "Team" };

export default function TeamPage() {
  return (
    <>
      <PageHero
        image="/images/team/sam-and-leia.jpg"
        alt="Sam and Leia Currie"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="pt-24">
          <h1 className="font-display text-4xl md:text-5xl font-light">
            The team
          </h1>
        </div>

        {team.map((member, i) => (
          <TeamMember key={member.slug} member={member} reverse={i % 2 !== 0} />
        ))}

        <div className="mt-24 pt-16 border-t border-wdb-gray-200 max-w-2xl mx-auto text-center mb-32">
          <p className="font-display text-xl md:text-2xl font-light leading-relaxed text-wdb-gray-600 italic">
            {teamValuesStatement}
          </p>
        </div>
      </div>
    </>
  );
}
