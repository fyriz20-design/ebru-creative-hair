"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const bilder = [
  { id: 1, src: "/gallery/foto1.jpg", alt: "Styling", span: "md:col-span-2 md:row-span-2" },
  { id: 2, src: "/gallery/foto3.jpg", alt: "Schnitt", span: "" },
  { id: 3, src: "/gallery/foto4.jpg", alt: "Coloration", span: "" },
  { id: 4, src: "/gallery/foto5.jpg", alt: "Haarpflege", span: "md:col-span-1" },
  { id: 5, src: "/gallery/foto2.jpg", alt: "Balayage", span: "md:col-span-2" },
  { id: 6, src: "/gallery/foto6.jpg", alt: "Hochsteckfrisur", span: "" },
  { id: 7, src: "/gallery/foto7.jpg", alt: "Kreation", span: "md:col-span-2" },
  { id: 8, src: "/gallery/foto8.jpg", alt: "Styling", span: "" },
];

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prevImage = useCallback(
    () => setLightboxIdx((i) => (i !== null ? (i - 1 + bilder.length) % bilder.length : null)),
    []
  );
  const nextImage = useCallback(
    () => setLightboxIdx((i) => (i !== null ? (i + 1) % bilder.length : null)),
    []
  );

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIdx, closeLightbox, nextImage, prevImage]);

  return (
    <>
      <section id="galerie" className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <div className="flex items-center gap-4">
              <div className="h-px w-10 bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
                Impressionen
              </span>
              <div className="h-px w-10 bg-[#c9a96e]" />
            </div>
            <h2
              className="text-4xl md:text-5xl font-light text-[#1a1a1a] leading-snug"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Einblicke in unsere{" "}
              <span className="italic text-[#c9a96e]">Arbeit</span>
            </h2>
            <p className="text-[#6b6b6b] text-sm tracking-wide max-w-md mt-2">
              Jedes Haar erzählt eine Geschichte — hier sind einige unserer
              liebsten Ergebnisse.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[240px]">
            {bilder.map((bild, idx) => (
              <div
                key={bild.id}
                className={`group relative overflow-hidden bg-[#e8e2d9] cursor-zoom-in ${bild.span}`}
                onClick={() => setLightboxIdx(idx)}
              >
                <Image
                  src={bild.src}
                  alt={bild.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/50 transition-all duration-400 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center mt-12 gap-3">
            <p className="text-[#6b6b6b] text-sm">
              Mehr Inspirationen finden Sie auf Instagram
            </p>
            <a
              href="https://www.instagram.com/ebru.creative.hair"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#c9a96e] text-xs tracking-[0.25em] uppercase border-b border-[#c9a96e]/40 pb-px hover:border-[#c9a96e] transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
              @ebru.creative.hair
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Image */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh] mx-20 my-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={bilder[lightboxIdx].src}
              alt={bilder[lightboxIdx].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.3em] select-none">
            {lightboxIdx + 1} / {bilder.length}
          </div>

          {/* Close */}
          <button
            className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors p-2"
            onClick={closeLightbox}
            aria-label="Schließen"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Prev */}
          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Vorheriges Bild"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next */}
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Nächstes Bild"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
