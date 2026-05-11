import Image from "next/image";
import Link from "next/link";
import { team } from "@/data/team";

export default function TeamPreview() {
  const visible = team.filter((m) => m.showOnHomepage);

  return (
    <div className="mt-12">
      <div className="md:grid md:grid-cols-2 gap-12">
        {visible.map((member) => (
          <div key={member.slug}>
            <div className="w-48 aspect-[3/4] relative overflow-hidden mb-4">
              <Image
                src={member.portrait}
                alt={member.name}
                fill
                className="object-cover object-top"
                sizes="192px"
              />
            </div>
            <p className="font-display text-xl font-light text-wdb-black">
              {member.name}
            </p>
            <p className="font-ui text-xs tracking-widest uppercase text-wdb-warm mt-1">
              {member.title}
            </p>
          </div>
        ))}
      </div>
      <Link
        href="/team"
        className="inline-block mt-8 font-ui text-sm text-wdb-black hover:text-wdb-warm transition-colors duration-200"
      >
        Meet the full team →
      </Link>
    </div>
  );
}
