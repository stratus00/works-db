"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { usePageBackground } from "@/lib/usePageBackground";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Team", href: "/team" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

const workDropdown = [
  { label: "All Work", href: "/work" },
  { label: "Residential", href: "/work?filter=Residential" },
  { label: "In Progress", href: "/work?filter=In Progress" },
];

export default function Navbar() {
  const pathname = usePathname();
  const pageBackground = usePageBackground();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isLight = pageBackground === "light";
  const textColor = isLight || scrolled ? "text-wdb-black" : "text-white";
  const bgClass =
    isLight || scrolled
      ? "bg-wdb-white/95 backdrop-blur-sm shadow-sm"
      : "bg-transparent";

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${bgClass}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link
            href="/"
            className={`font-ui font-medium text-base tracking-wide transition-colors duration-200 ${textColor}`}
          >
            WORKS-db
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.label === "Work") {
                return (
                  <div
                    key="work"
                    className="relative"
                    onMouseEnter={() => setWorkOpen(true)}
                    onMouseLeave={() => setWorkOpen(false)}
                  >
                    <Link
                      href="/work"
                      className={`font-ui font-light text-base tracking-wide transition-colors duration-200 hover:text-wdb-warm ${
                        pathname.startsWith("/work") ? "text-wdb-warm" : textColor
                      }`}
                    >
                      Work
                    </Link>
                    {workOpen && (
                      <div className="absolute top-full left-0 mt-2 bg-wdb-white border border-wdb-gray-200 py-3 px-4 min-w-[160px]">
                        {workDropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block font-ui text-sm text-wdb-black py-1.5 hover:text-wdb-warm transition-colors duration-200"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-ui font-light text-base tracking-wide transition-colors duration-200 hover:text-wdb-warm ${
                    isActive ? "text-wdb-warm" : textColor
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            className={`md:hidden flex flex-col justify-between w-5 h-3.5 ${textColor}`}
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            <span className="block w-full h-px bg-current" />
            <span className="block w-full h-px bg-current" />
            <span className="block w-full h-px bg-current" />
          </button>
        </div>
      </nav>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
