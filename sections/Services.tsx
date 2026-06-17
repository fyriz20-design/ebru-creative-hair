const damen = [
  { name: "Waschen & Föhnen*", preis: "27,50 €" },
  { name: "Waschen & Legen*", preis: "27,50 €" },
  { name: "Cut and Go*", preis: "33 – 39 €" },
  { name: "Waschen / Schneiden / Föhnen*", preis: "42,50 €" },
  { name: "Schneiden / Föhnen / Festiger / Spray*", preis: "41,50 €" },
  { name: "Waschen / Schneiden / Föhnen / Festiger / Spray*", preis: "45,50 €" },
  { name: "Brautservice", preis: "n. A." },
  { name: "Hochsteckfrisur*", preis: "90 – 200 €" },
  { name: "Maniküre*", preis: "25,50 €" },
  { name: "Augenbrauen zupfen", preis: "14,50 €" },
  { name: "Entfernung Gesichtsbehaarung + Augenbrauen*", preis: "27,50 €" },
  { name: "Augenbrauen färben", preis: "14,00 €" },
  { name: "Wimpern färben", preis: "16,50 €" },
  { name: "Make-up*", preis: "27,50 €" },
  { name: "Glätten*", preis: "28,50 €" },
  { name: "Haarmaske / Emulsion*", preis: "19,00 €" },
  { name: "Conditioner / Spülung*", preis: "12,00 €" },
  { name: "Chemische Haarglättung*", preis: "ab 52,00 €" },
  { name: "Dauerwelle*", preis: "ab 52,00 €" },
  { name: "Kammsträhnen*", preis: "ab 42,00 €" },
  { name: "Foliensträhnen Langhaar*", preis: "ab 89,00 €" },
  { name: "Foliensträhnen Kurzhaar*", preis: "ab 51,50 €" },
  { name: "Färben*", preis: "ab 51,50 €" },
  { name: "Tönung*", preis: "ab 51,50 €" },
  { name: "Crystal Gloss*", preis: "ab 34,50 €" },
  { name: "Pflanzenfarben*", preis: "ab 47,50 €" },
];

const herren = [
  { name: "Maschinenhaarschnitt", preis: "20,50 €" },
  { name: "Nasshaarschnitt / Trockenhaarschnitt", preis: "27,00 €" },
  { name: "Waschen / Schneiden / Föhnen", preis: "36,50 €" },
  { name: "Bart Maschine", preis: "18,00 €" },
  { name: "Nassrasur", preis: "23,50 €" },
];

const kinder = [
  { name: "Haarschnitt bis 13 Jahre", preis: "22,50 €" },
];

function PreisListe({ items }: { items: { name: string; preis: string }[] }) {
  return (
    <ul className="flex flex-col divide-y divide-[#ede8e0]">
      {items.map((item, i) => (
        <li key={i} className="flex items-baseline justify-between gap-4 py-2.5">
          <span className="text-[#3a3a3a] text-sm">{item.name}</span>
          <span className="text-[#3a3a3a] text-sm whitespace-nowrap font-medium">
            {item.preis}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Services() {
  return (
    <section id="leistungen" className="bg-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">

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
            className="text-4xl md:text-5xl font-light text-[#1a1a1a] leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Unsere <span className="italic text-[#c9a96e]">Leistungen</span>
          </h2>
        </div>

        {/* Two-column price table */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">

          {/* Damen */}
          <div>
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1a1a1a] mb-4 pb-3 border-b-2 border-[#c9a96e]">
              Damen
            </h3>
            <PreisListe items={damen} />
          </div>

          {/* Herren + Kinder */}
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1a1a1a] mb-4 pb-3 border-b-2 border-[#c9a96e]">
                Herren
              </h3>
              <PreisListe items={herren} />
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1a1a1a] mb-4 pb-3 border-b-2 border-[#c9a96e]">
                Kinder
              </h3>
              <PreisListe items={kinder} />
            </div>
          </div>
        </div>

        {/* Footnote */}
        <p className="text-[#9a9a9a] text-xs mt-10 italic">
          * Mehraufwand nach Vereinbarung. Alle Preise inkl. MwSt.
        </p>

        {/* CTA */}
        <div className="flex justify-center mt-10">
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
