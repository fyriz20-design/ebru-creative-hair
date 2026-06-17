import Image from "next/image";

const bilder = [
  {
    id: 1,
    src: "/gallery/foto1.jpg",
    alt: "Blondes Styling",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    src: "/gallery/foto2.jpg",
    alt: "Damen-Haarschnitt",
    span: "",
  },
  {
    id: 3,
    src: "/gallery/foto3.jpg",
    alt: "Coloration",
    span: "",
  },
  {
    id: 4,
    src: "/gallery/foto4.jpg",
    alt: "Ebru Heim – Creative Director",
    span: "md:col-span-3",
  },
];

export default function Gallery() {
  return (
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[260px]">
          {bilder.map((bild) => (
            <div
              key={bild.id}
              className={`group relative overflow-hidden bg-[#e8e2d9] ${bild.span}`}
            >
              <Image
                src={bild.src}
                alt={bild.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/50 transition-all duration-500 flex items-end">
                <div className="w-full px-6 py-5 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <p className="text-white text-sm tracking-widest uppercase">
                    {bild.alt}
                  </p>
                  <div className="h-px w-8 bg-[#c9a96e] mt-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Hint */}
        <div className="flex flex-col items-center mt-12 gap-3">
          <p className="text-[#6b6b6b] text-sm">
            Mehr Inspirationen finden Sie auf Instagram
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#c9a96e] text-xs tracking-[0.25em] uppercase border-b border-[#c9a96e]/40 pb-px hover:border-[#c9a96e] transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
            @ebru.creative.hair
          </a>
        </div>
      </div>
    </section>
  );
}
