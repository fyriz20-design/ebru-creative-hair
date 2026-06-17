import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
      {/* Hintergrundbild */}
      <Image
        src="/images/hero.jpg"
        alt="Ebru Creative Hair Salon Köln"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Dunkler Overlay damit Text lesbar bleibt */}
      <div className="absolute inset-0 bg-[#1a1a1a]/60" />

      {/* Goldene Linie oben */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#c9a96e] opacity-40" />

      {/* Inhalt */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Ornament */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-[#c9a96e]" />
          <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
            Freudenstadt
          </span>
          <div className="h-px w-16 bg-[#c9a96e]" />
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-light text-white leading-tight tracking-wide mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Schönheit,
          <br />
          <span className="italic text-[#c9a96e]">die bewegt.</span>
        </h1>

        {/* Subline */}
        <p className="text-sm sm:text-base tracking-[0.25em] uppercase text-white/60 mb-12">
          Ihr Friseursalon für moderne Haarkunst
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#kontakt"
            className="px-10 py-4 bg-[#c9a96e] text-white text-xs tracking-[0.25em] uppercase hover:bg-[#a8843a] transition-colors duration-300 min-w-[200px] text-center"
          >
            Termin buchen
          </a>
          <a
            href="#leistungen"
            className="px-10 py-4 border border-white/30 text-white text-xs tracking-[0.25em] uppercase hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300 min-w-[200px] text-center"
          >
            Leistungen entdecken
          </a>
        </div>
      </div>

      {/* Scroll-Indikator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/20 animate-pulse" />
      </div>

      {/* Goldene Linie unten */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#c9a96e] opacity-20" />
    </section>
  );
}
