"use client";

import { useEffect, useState } from "react";
import OverlayHero from "./components/overlay";
import LinksPage from "./components/Contenido";

export default function Page() {
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowHero(window.scrollY < 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">

      {/* OVERLAY */}
      <div
        className={`
          fixed inset-0 z-50
          transition-transform duration-500 ease-[cubic-bezier(0.32,0,0.67,0)]
          ${showHero ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <OverlayHero />
      </div>

      {/* SPACER PARA HABILITAR SCROLL */}
      <div className="h-[10dvh]" />

      {/* CONTENIDO REAL */}
      <LinksPage />

    </div>
  );
}