import Link from "next/link";
import { contactInfo, footerTagline } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-wdb-black text-white/70 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="md:grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-display text-xl font-normal text-white mb-3">
              Works.db
            </p>
            <p className="font-ui text-sm font-normal leading-relaxed mb-6">
              {footerTagline}
            </p>
            <div className="flex flex-col gap-2">
              {contactInfo.instagram && (
                <a
                  href="#"
                  className="font-ui text-sm hover:text-wdb-warm transition-colors duration-200"
                >
                  {contactInfo.instagram}
                </a>
              )}
              {contactInfo.linkedin && (
                <a
                  href="#"
                  className="font-ui text-sm hover:text-wdb-warm transition-colors duration-200"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          <div>
            <p className="font-ui text-xs tracking-widest uppercase text-white/40 mb-4">
              Work
            </p>
            <div className="flex flex-col gap-2">
              {[
                { label: "All Work", href: "/work" },
                { label: "Residential", href: "/work?filter=Residential" },
                { label: "In Progress", href: "/work?filter=In Progress" },
                { label: "Team", href: "/team" },
                { label: "Process", href: "/process" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-ui text-sm font-normal hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-ui text-xs tracking-widest uppercase text-white/40 mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <p className="font-ui text-sm font-normal">{contactInfo.address}</p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="font-ui text-sm font-normal hover:text-wdb-warm transition-colors duration-200"
              >
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="font-ui text-sm font-normal hover:text-wdb-warm transition-colors duration-200"
              >
                {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="font-ui text-xs text-white/30">© 2025 Works.db</p>
        </div>
      </div>
    </footer>
  );
}
