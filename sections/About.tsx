import Image from "next/image";

export default function About() {
  return (
    <section id="ueber-uns" className="bg-[#faf8f5] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Bild-Spalte */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            {/* Goldener Rahmen-Effekt (versetzt) */}
            <div className="absolute -top-3 -left-3 w-full h-full border border-[#c9a96e] opacity-40" />

            {/* Portrait-Container — fest auf 300×450px, kein Stretch über 2× */}
            <div className="relative w-[280px] h-[420px] sm:w-[300px] sm:h-[450px] bg-[#e8e2d9] overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Ebru Heim – Inhaberin Ebru Creative Hair"
                fill
                className="object-cover object-top"
                sizes="300px"
              />
              {/* Name-Overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-t from-[#1a1a1a]/70 to-transparent">
                <p
                  className="text-white text-xl font-light italic"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Ebru Heim
                </p>
                <p className="text-[#c9a96e] text-[10px] tracking-[0.3em] uppercase mt-1">
                  Inhaberin &amp; Creative Director
                </p>
              </div>
            </div>

            {/* Gold-Akzent-Linie links */}
            <div className="absolute -left-6 top-8 w-px h-24 bg-[#c9a96e] opacity-50" />
          </div>
        </div>

        {/* Text-Spalte */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
              Über uns
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-light text-[#1a1a1a] leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Leidenschaft für{" "}
            <span className="italic">schönes Haar</span>
          </h2>

          <div className="flex flex-col gap-4 text-[#6b6b6b] text-base leading-relaxed">
            <p>
              Willkommen bei{" "}
              <strong className="text-[#1a1a1a] font-normal">Ebru Creative Hair</strong>{" "}
              — Ihrem Friseursalon in Freudenstadt, wo Kreativität auf
              Handwerkskunst trifft. Mit langjähriger Erfahrung in der Branche
              bieten wir Ihnen ein umfassendes Spektrum an
              Friseur-Dienstleistungen auf höchstem Niveau.
            </p>
            <p>
              Unser Anspruch ist es, jeden Kunden individuell zu beraten und
              einen Look zu kreieren, der perfekt zu Ihrer Persönlichkeit passt.
              Von der klassischen Coloration bis zum modernen Schnitt — bei uns
              sind Sie in den besten Händen.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#e8e2d9]">
            {[
              { zahl: "15+", label: "Jahre Erfahrung" },
              { zahl: "500+", label: "Zufriedene Kunden" },
              { zahl: "100%", label: "Leidenschaft" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span
                  className="text-3xl font-light text-[#c9a96e]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.zahl}
                </span>
                <span className="text-xs tracking-widest uppercase text-[#6b6b6b]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
