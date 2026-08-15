"use client";
import Image from "next/image";

const links = [
  {
    label: "Ubicación",
    sub: "San Andresito · Av. Calle 68",
    detail: "Cl 72 #70-35, Engativá",
    href: "https://www.google.com/maps/place/San+Andresito+Avenida+Calle+68/@4.6840054,-74.0921532,17z/data=!4m6!3m5!1s0x8e3f9b16fb786849:0x92631a1bfd577d9f!8m2!3d4.6840054!4d-74.0921532!16s%2Fg%2F11rynprjb7?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D",
    icon: "location",
  },
  {
    label: "Línea por unidad",
    sub: "WhatsApp directo",
    href: "https://api.whatsapp.com/send?phone=573208374937&text=Hola%20estoy%20interesado%20en%20el%20siguiente%20producto%20",
    icon: "whatsapp",
  },
  {
    label: "Línea al por mayor",
    sub: "WhatsApp directo",
    href: "https://api.whatsapp.com/send?phone=573507695776&text=Hola%20estoy%20interesado%20en%20el%20siguiente%20producto%20",
    icon: "whatsapp",
  },
  {
    label: "TikTok",
    sub: "Make Your Day",
    href: "https://www.tiktok.com/@pvtstore.co?_t=ZS-8ulseDR8Hzj&_r=1",
    icon: "tiktok",
  },
  {
    label: "Instagram",
    sub: "Ropa & colecciones",
    href: "https://www.instagram.com/pvt_storee?igsh=MXE5Z3Zpb2psdHBkcA%3D%3D",
    icon: "instagram",
  },
  {
    label: "Grupo Telegram",
    sub: "Únete · Novedades exclusivas",
    href: "https://t.me/pvtstore",
    icon: "telegram",
  },
];

const ICONS = {
  location: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  whatsapp: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  tiktok: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
    </svg>
  ),
  instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  telegram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  ),
};

function LinkCard({ href, label, sub, detail, icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="linkcard">
      
      <span className="linkcard-icon">
        {ICONS[icon]}
      </span>

      <div className="linkcard-text">
        <span className="linkcard-title">{label}</span>
        {sub && <span className="linkcard-sub">{sub}</span>}
        {detail && <span className="linkcard-detail">{detail}</span>}
      </div>

      <span className="linkcard-arrow">→</span>
    </a>
  );
}
export default function LinksPage() {
  return (
    <main className="pb-24 font-cormorant relative min-h-screen flex flex-col items-center justify-center px-8 py-16 text-[#f0ede8]">

      {/* CONTENEDOR CENTRAL */}
      <div className="w-full max-w-sm flex flex-col items-center gap-6">

        {/* HEADER */}
        <header className="flex flex-col items-center text-center mb-10">
          <div className="mb-6 w-20 h-20 rounded-full border border-[#b91c1c]/40 flex items-center justify-center overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="PVT Store logo"
              width={80}
              height={80}
              className="object-cover"
              priority
            />
          </div>

          <p className="text-[11px] tracking-[0.42em] uppercase text-white/30 mb-4">
            PVT STORE
          </p>

          <h1 className="text-[42px] font-light tracking-tight leading-none text-[#f0ede8] mb-4">
            Ropa importada
          </h1>

          <div className="flex items-center gap-3 mb-4">
            <span className="block w-12 h-[0.5px] bg-[#b91c1c]/45" />
            <span className="block w-1 h-1 rounded-full bg-[#b91c1c]/60" />
            <span className="block w-12 h-[0.5px] bg-[#b91c1c]/45" />
          </div>

          <p className="text-[14px] text-white/40 tracking-wide leading-relaxed max-w-xs">
            Importadores de marcas de lujo · Punto físico en Bogotá
          </p>
        </header>

        {/* LINKS */}
        <nav className="flex flex-col gap-4 w-full">
          {links.map((link, i) => (
            <LinkCard key={link.label} {...link} index={i} />
          ))}
        </nav>

        {/* FOOTER */}
        <footer className="mt-12 text-[11px] tracking-[0.3em] uppercase text-white/20">
          Bogotá · Marcas premium
        </footer>

      </div>
    </main>
  );
}