const leistungen = [
  {
    nr: "01",
    titel: "Damen-Haarschnitt",
    beschreibung:
      "Präziser Schnitt, abgestimmt auf Ihre Haarstruktur, Gesichtsform und persönlichen Stil.",
    preis: "ab 45 €",
  },
  {
    nr: "02",
    titel: "Herren-Haarschnitt",
    beschreibung:
      "Klassisch oder modern — wir bringen Sie mit dem perfekten Schnitt in Form.",
    preis: "ab 28 €",
  },
  {
    nr: "03",
    titel: "Coloration",
    beschreibung:
      "Von der dezenten Auffrischung bis zur kompletten Farbveränderung — mit hochwertigen Produkten.",
    preis: "ab 65 €",
  },
  {
    nr: "04",
    titel: "Balayage & Strähnen",
    beschreibung:
      "Natürliche Lichter und fließende Farbverläufe für einen modernen, strahlenden Look.",
    preis: "ab 90 €",
  },
  {
    nr: "05",
    titel: "Haarpflege & Kur",
    beschreibung:
      "Intensive Pflegebehandlungen für gesundes, glänzendes und starkes Haar.",
    preis: "ab 30 €",
  },
  {
    nr: "06",
    titel: "Hochsteckfrisuren",
    beschreibung:
      "Elegante Steckfrisuren für besondere Anlässe — Hochzeiten, Abschlüsse und mehr.",
    preis: "ab 80 €",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="bg-[#1a1a1a] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
              Was wir bieten
            </span>
            <div className="h-px w-10 bg-[#c9a96e]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-white leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Unsere <span className="italic text-[#c9a96e]">Leistungen</span>
          </h2>
          <p className="text-white/50 text-sm tracking-wide max-w-md mt-2">
            Vom klassischen Schnitt bis zur kreativen Coloration — wir bieten
            alles für Ihr perfektes Haar.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {leistungen.map((item) => (
            <div
              key={item.nr}
              className="group bg-[#1a1a1a] p-8 flex flex-col gap-4 hover:bg-[#222] transition-colors duration-300"
            >
              {/* Nummer */}
              <span
                className="text-4xl font-light text-white/10 group-hover:text-[#c9a96e]/30 transition-colors duration-300 leading-none"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {item.nr}
              </span>

              {/* Titel */}
              <h3
                className="text-xl font-light text-white group-hover:text-[#c9a96e] transition-colors duration-300"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {item.titel}
              </h3>

              {/* Beschreibung */}
              <p className="text-white/50 text-sm leading-relaxed flex-1">
                {item.beschreibung}
              </p>

              {/* Preis */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[#c9a96e] text-sm tracking-wide">
                  {item.preis}
                </span>
                <span className="text-white/20 text-xs tracking-widest uppercase group-hover:text-[#c9a96e]/60 transition-colors duration-300">
                  Mehr →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="#kontakt"
            className="px-10 py-4 border border-[#c9a96e] text-[#c9a96e] text-xs tracking-[0.25em] uppercase hover:bg-[#c9a96e] hover:text-white transition-all duration-300"
          >
            Jetzt Termin buchen
          </a>
        </div>
      </div>
    </section>
  );
}
