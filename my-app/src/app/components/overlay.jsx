"use client";

export default function OverlayHero() {
  return (
    <main className="relative min-h-[100dvh] flex items-center justify-center text-[#f0ede8] overflow-hidden">

      {/* FONDO */}
      <div className="absolute inset-0 -z-10 bg-[#0e0c0b]">
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>

        <div className="absolute bottom-0 right-[-80px] w-[380px] h-[380px] bg-[#b91c1c]/10 blur-[130px] rounded-full" />
        <div className="absolute top-1/2 left-0 right-0 h-[0.5px] bg-white/10" />
      </div>

      {/* CONTENIDO */}
      <div className="flex flex-col items-center text-center px-6 -mt-8">
        <p
          className="text-[10px] tracking-[0.45em] uppercase text-white/40 mb-8 opacity-0"
          style={{ animation: "fadeDown 0.8s ease forwards" }}
        >
          Bogotá · Marcas premium
        </p>

        <h1
          className="text-[40px] font-extralight tracking-[0.28em] leading-none opacity-0"
          style={{ animation: "fadeUp 0.9s 0.15s ease forwards" }}
        >
          <span className="text-[#b91c1c]">PVT</span>
          <span className="text-white/80"> STORE</span>
        </h1>

        <div
          className="mt-8 mb-8 flex items-center gap-3 opacity-0"
          style={{ animation: "fadeUp 0.8s 0.3s ease forwards" }}
        >
          <div className="w-16 h-[0.5px] bg-[#b91c1c]/45" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#b91c1c]/60" />
          <div className="w-16 h-[0.5px] bg-[#b91c1c]/45" />
        </div>

        <h2
          className="text-[52px] leading-[1.0] font-light tracking-tight text-[#f0ede8] opacity-0"
          style={{ animation: "fadeUp 1s 0.4s ease forwards" }}
        >
          Ropa importada
        </h2>
      </div>

      {/* SCROLL INDICATOR */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
        style={{ animation: "fadeUp 0.8s 0.6s ease forwards" }}
      >
        <span className="text-[9px] tracking-[0.35em] uppercase text-white/30">scroll</span>

        <svg
          width="16"
          height="22"
          viewBox="0 0 16 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="scroll-bounce"
        >
          <line x1="8" y1="0" x2="8" y2="16" stroke="#b91c1c" strokeOpacity="0.55" strokeWidth="1" strokeLinecap="round" />
          <polyline points="2,11 8,18 14,11" fill="none" stroke="#b91c1c" strokeOpacity="0.55" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Detalle editorial */}
      <div
        className="absolute bottom-8 left-8 text-[10px] tracking-[0.3em] text-white/20 uppercase opacity-0"
        style={{ animation: "fadeUp 0.8s 0.8s ease forwards" }}
      >
        SS 2025
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
        .scroll-bounce {
          animation: scrollBounce 1.6s 1s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}