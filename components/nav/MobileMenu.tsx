"use client";

import Link from "next/link";
import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export default function MobileMenu({ open, onClose, links }: Props) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-40 bg-wdb-white flex flex-col items-center justify-center transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={onClose}
        aria-label="Close menu"
        className="absolute top-5 right-6 text-wdb-black font-ui text-sm tracking-wide"
      >
        Close
      </button>
      <nav className="flex flex-col items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="font-display text-4xl font-normal text-wdb-black hover:text-wdb-warm transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
