const oeffnungszeiten = [
  { tag: "Montag", zeit: "Ruhetag" },
  { tag: "Dienstag", zeit: "08:00 – 18:00" },
  { tag: "Mittwoch", zeit: "08:00 – 18:00" },
  { tag: "Donnerstag", zeit: "08:00 – 18:00" },
  { tag: "Freitag", zeit: "08:00 – 18:00" },
  { tag: "Samstag", zeit: "08:00 – 14:00" },
  { tag: "Sonntag", zeit: "Ruhetag" },
];

export default function Contact() {
  return (
    <section id="kontakt" className="bg-[#faf8f5] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
              Kontakt
            </span>
            <div className="h-px w-10 bg-[#c9a96e]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-[#1a1a1a] leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Vereinbaren Sie Ihren{" "}
            <span className="italic text-[#c9a96e]">Termin</span>
          </h2>
        </div>

        {/* Grid: Info + Formular */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* Linke Spalte: Infos */}
          <div className="flex flex-col gap-10">

            {/* Adresse */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs tracking-[0.3em] uppercase text-[#c9a96e]">
                Adresse
              </h3>
              <p className="text-[#1a1a1a] leading-relaxed">
                Bahnhofstraße 36<br />
                72250 Freudenstadt
              </p>
            </div>

            {/* Kontakt */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs tracking-[0.3em] uppercase text-[#c9a96e]">
                Kontakt
              </h3>
              <div className="flex flex-col gap-1">
                <a
                  href="tel:+4974418518"
                  className="text-[#1a1a1a] hover:text-[#c9a96e] transition-colors duration-200"
                >
                  07441 / 85186
                </a>
              </div>
            </div>

            {/* Öffnungszeiten */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs tracking-[0.3em] uppercase text-[#c9a96e]">
                Öffnungszeiten
              </h3>
              <div className="flex flex-col gap-2">
                {oeffnungszeiten.map(({ tag, zeit }) => (
                  <div
                    key={tag}
                    className="flex justify-between border-b border-[#e8e2d9] pb-2 last:border-0"
                  >
                    <span className="text-sm text-[#6b6b6b]">{tag}</span>
                    <span
                      className={`text-sm ${
                        zeit === "Ruhetag"
                          ? "text-[#6b6b6b]/50 italic"
                          : "text-[#1a1a1a]"
                      }`}
                    >
                      {zeit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Formular */}
          <form className="flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-[0.2em] uppercase text-[#6b6b6b]">
                  Vorname
                </label>
                <input
                  type="text"
                  placeholder="Max"
                  className="border-b border-[#d0c9be] bg-transparent py-3 text-[#1a1a1a] placeholder:text-[#6b6b6b]/40 focus:outline-none focus:border-[#c9a96e] transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-[0.2em] uppercase text-[#6b6b6b]">
                  Nachname
                </label>
                <input
                  type="text"
                  placeholder="Mustermann"
                  className="border-b border-[#d0c9be] bg-transparent py-3 text-[#1a1a1a] placeholder:text-[#6b6b6b]/40 focus:outline-none focus:border-[#c9a96e] transition-colors duration-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-[0.2em] uppercase text-[#6b6b6b]">
                Telefon oder E-Mail
              </label>
              <input
                type="text"
                placeholder="+49 221 ..."
                className="border-b border-[#d0c9be] bg-transparent py-3 text-[#1a1a1a] placeholder:text-[#6b6b6b]/40 focus:outline-none focus:border-[#c9a96e] transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-[0.2em] uppercase text-[#6b6b6b]">
                Gewünschte Leistung
              </label>
              <select className="border-b border-[#d0c9be] bg-transparent py-3 text-[#1a1a1a] focus:outline-none focus:border-[#c9a96e] transition-colors duration-200 appearance-none">
                <option value="">Bitte wählen …</option>
                <option>Damen-Haarschnitt</option>
                <option>Herren-Haarschnitt</option>
                <option>Coloration</option>
                <option>Balayage & Strähnen</option>
                <option>Haarpflege & Kur</option>
                <option>Hochsteckfrisur</option>
                <option>Sonstiges</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-[0.2em] uppercase text-[#6b6b6b]">
                Nachricht (optional)
              </label>
              <textarea
                rows={3}
                placeholder="Ihr Wunschtermin oder weitere Infos …"
                className="border-b border-[#d0c9be] bg-transparent py-3 text-[#1a1a1a] placeholder:text-[#6b6b6b]/40 focus:outline-none focus:border-[#c9a96e] transition-colors duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 px-10 py-4 bg-[#1a1a1a] text-white text-xs tracking-[0.25em] uppercase hover:bg-[#c9a96e] transition-colors duration-300 self-start"
            >
              Anfrage senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
