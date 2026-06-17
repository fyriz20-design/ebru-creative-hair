const kategorien = [
  {
    titel: "Damen",
    leistungen: [
      { name: "Waschen & Föhnen", preis: "27,50 €" },
      { name: "Waschen & Legen", preis: "27,50 €" },
      { name: "Cut and Go", preis: "33 – 39 €" },
      { name: "Waschen / Schneiden / Föhnen", preis: "42,50 €" },
      { name: "Schneiden / Föhnen / Festiger", preis: "41,50 €" },
      { name: "Waschen / Schneiden / Föhnen / Festiger", preis: "45,50 €" },
      { name: "Glätten", preis: "28,50 €" },
      { name: "Dauerwelle", preis: "ab 52,00 €" },
      { name: "Chemische Haarglättung", preis: "ab 52,00 €" },
      { name: "Färben", preis: "ab 51,50 €" },
      { name: "Tönung", preis: "ab 51,50 €" },
      { name: "Crystal Gloss", preis: "ab 34,50 €" },
      { name: "Pflanzenfarben", preis: "ab 47,50 €" },
      { name: "Kammsträhnen", preis: "ab 42,00 €" },
      { name: "Foliensträhnen Kurzhaar", preis: "ab 51,50 €" },
      { name: "Foliensträhnen Langhaar", preis: "ab 89,00 €" },
      { name: "Hochsteckfrisur", preis: "90 – 200 €" },
      { name: "Brautservice", preis: "auf Anfrage" },
      { name: "Haarmaske / Emulsion", preis: "19,00 €" },
      { name: "Conditioner / Spülung", preis: "12,00 €" },
      { name: "Maniküre", preis: "25,50 €" },
      { name: "Make-up", preis: "27,50 €" },
      { name: "Augenbrauen zupfen", preis: "14,50 €" },
      { name: "Augenbrauen färben", preis: "14,00 €" },
      { name: "Wimpern färben", preis: "16,50 €" },
      { name: "Entfernung Gesichtsbehaarung + Augenbrauen", preis: "27,50 €" },
    ],
  },
  {
    titel: "Herren",
    leistungen: [
      { name: "Maschinenhaarschnitt", preis: "20,50 €" },
      { name: "Nasshaarschnitt / Trockenhaarschnitt", preis: "27,00 €" },
      { name: "Waschen / Schneiden / Föhnen", preis: "36,50 €" },
      { name: "Bart (Maschine)", preis: "18,00 €" },
      { name: "Nassrasur", preis: "23,50 €" },
    ],
  },
  {
    titel: "Kinder",
    leistungen: [
      { name: "Haarschnitt bis 13 Jahre", preis: "22,50 €" },
    ],
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
              Leistungen &amp; Preise
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
            Transparente Preise für professionelle Friseurleistungen auf höchstem Niveau.
          </p>
        </div>

        {/* Price List Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {kategorien.map((kat) => (
            <div key={kat.titel} className="bg-[#1a1a1a] p-8 flex flex-col gap-6">
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className="h-px w-6 bg-[#c9a96e]" />
                <h3
                  className="text-lg tracking-[0.25em] uppercase text-[#c9a96e]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {kat.titel}
                </h3>
              </div>

              {/* Price Rows */}
              <ul className="flex flex-col gap-3">
                {kat.leistungen.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-baseline justify-between gap-2 border-b border-white/5 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-white/70 text-sm leading-snug flex-1">
                      {item.name}
                    </span>
                    <span className="text-[#c9a96e] text-sm font-light whitespace-nowrap">
                      {item.preis}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-white/25 text-xs text-center mt-8 tracking-wide">
          * Mehraufwand nach Vereinbarung. Alle Preise inkl. MwSt.
        </p>

        {/* CTA */}
        <div className="flex justify-center mt-8">
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
