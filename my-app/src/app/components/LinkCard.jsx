"use client";

import Link from "next/link";

export default function LinkCard({ href = "#", label, sub, index = 0 }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card-anim group relative w-full overflow-hidden rounded-2xl bg-white/[0.04] backdrop-blur-xl px-5 py-4 border border-white/[0.08] transition-all duration-300 hover:bg-[#b91c1c]/[0.07] hover:border-[#b91c1c]/30 hover:-translate-y-0.5"
      style={{ animationDelay: `${600 + index * 100}ms` }}
    >
      {/* shimmer */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />

      <div className="relative flex flex-col gap-0.5">
        {sub && (
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
            {sub}
          </p>
        )}
        <p className="text-[15px] font-light tracking-wide text-white/85">
          {label}
        </p>
      </div>

      {/* flecha */}
      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#b91c1c]/70">
        →
      </span>

      <style>{`
        .card-anim {
          opacity: 0;
          transform: translateY(16px);
          animation: cardSlideUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes cardSlideUp {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Link>
  );
}