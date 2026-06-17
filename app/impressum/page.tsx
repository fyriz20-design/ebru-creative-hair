export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#faf8f5] pt-32 pb-24">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-10 bg-[#c9a96e]" />
          <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
            Rechtliches
          </span>
        </div>
        <h1
          className="text-4xl font-light text-[#1a1a1a] mb-12"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Impressum
        </h1>

        <div className="flex flex-col gap-8 text-[#6b6b6b] leading-relaxed">
          <div>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-[#1a1a1a]">
              Ebru Creative Hair<br />
              Inh. Ebru Heim<br />
              Bahnhofstraße 36<br />
              72250 Freudenstadt
            </p>
          </div>

          <div>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-3">
              Kontakt
            </h2>
            <p>
              Telefon:{" "}
              <a href="tel:+4974418518" className="text-[#1a1a1a] hover:text-[#c9a96e] transition-colors">
                07441 / 85186
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-3">
              Umsatzsteuer-ID
            </h2>
            <p>
              USt-IdNr.: DE2804044661<br />
              Amtsgericht Freudenstadt
            </p>
          </div>

          <div>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-3">
              Verantwortlich für den Inhalt
            </h2>
            <p>
              Ebru Heim<br />
              Bahnhofstraße 36<br />
              72250 Freudenstadt
            </p>
          </div>

          <div>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-3">
              Haftungsausschluss
            </h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </div>

          <div>
            <p className="text-sm">
              Wir bitten um Ihr Verständnis, dass wir bei nicht rechtzeitiger
              Absage eines vereinbarten Termines (24 Stunden vor Terminbeginn)
              50% des Preises in Rechnung stellen.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/"
            className="text-xs tracking-[0.25em] uppercase text-[#c9a96e] border-b border-[#c9a96e]/40 pb-px hover:border-[#c9a96e] transition-colors"
          >
            ← Zurück zur Startseite
          </a>
        </div>
      </div>
    </main>
  );
}
