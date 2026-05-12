"use client";

import { useEffect, useState } from "react";

const DARK_VARS: Record<string, string> = {
  "--color-wdb-black":    "#f7f5f1",
  "--color-wdb-white":    "#1a1916",
  "--color-wdb-gray-100": "#252320",
  "--color-wdb-gray-200": "#38352f",
  "--color-wdb-gray-400": "#7a7875",
  "--color-wdb-gray-600": "#b0ada8",
  "--color-wdb-warm":     "#c9a98b",
};

function applyMode(dark: boolean) {
  const root = document.documentElement;
  if (dark) {
    Object.entries(DARK_VARS).forEach(([k, v]) => root.style.setProperty(k, v));
    // Turbopack bakes var() refs in raw CSS rules at build time — override directly
    document.body.style.backgroundColor = "#1a1916";
    document.body.style.color = "#f7f5f1";
  } else {
    Object.keys(DARK_VARS).forEach((k) => root.style.removeProperty(k));
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
  }
}

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("wdb-dark") === "1";
    setDark(saved);
    applyMode(saved);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    applyMode(next);
    localStorage.setItem("wdb-dark", next ? "1" : "0");
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      className="ml-6 w-7 h-7 flex items-center justify-center rounded-full border border-current opacity-50 hover:opacity-100 transition-opacity duration-200 text-xs font-ui"
    >
      {dark ? "○" : "●"}
    </button>
  );
}
