"use client";

import { usePathname } from "next/navigation";

export function usePageBackground(): "light" | "dark" {
  const pathname = usePathname();
  // Pages with white backgrounds and no dark hero image at top
  const lightPages = ["/work", "/process", "/gallery", "/contact"];
  return lightPages.includes(pathname) ? "light" : "dark";
}
