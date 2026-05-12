import Image from "next/image";
import { TeamMember as TeamMemberType } from "@/data/team";

interface Props {
  member: TeamMemberType;
  reverse?: boolean;
}

export default function TeamMember({ member, reverse = false }: Props) {
  return (
    <div
      className={`md:flex gap-16 items-start py-16 border-b border-wdb-gray-200 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-80 aspect-[3/4] relative flex-shrink-0 overflow-hidden mb-8 md:mb-0">
        <Image
          src={member.portrait}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="(min-width: 768px) 320px, 100vw"
        />
      </div>
      <div className="flex-1">
        <h2 className="font-display text-3xl font-normal text-wdb-black mb-1">
          {member.name}
        </h2>
        <p className="font-ui text-xs tracking-widest uppercase text-wdb-warm mb-6">
          {member.title}
        </p>
        {member.bio.map((para, i) => (
          <p
            key={i}
            className="font-ui text-base font-normal leading-relaxed text-wdb-gray-600 mb-4"
          >
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
