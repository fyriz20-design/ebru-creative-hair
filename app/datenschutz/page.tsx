export default function Datenschutz() {
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
          Datenschutzerklärung
        </h1>

        <div className="flex flex-col gap-8 text-[#6b6b6b] leading-relaxed">
          <div>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-3">
              Verantwortliche Stelle
            </h2>
            <p>
              Die Website ebru-creative-hair.vercel.app wird betrieben von:<br />
              Ebru Heim, Bahnhofstraße 36, 72250 Freudenstadt
            </p>
          </div>

          <div>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-3">
              Erhebung personenbezogener Daten
            </h2>
            <p>
              Wir erheben und verwenden personenbezogene Daten von Besuchern
              dieses Internetauftritts grundsätzlich nur, soweit dies zur
              Bereitstellung einer funktionsfähigen Website sowie unserer
              Inhalte und Leistungen erforderlich ist.
            </p>
          </div>

          <div>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-3">
              Kontaktformular
            </h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben zur Bearbeitung der Anfrage verwendet. Die
              Verarbeitung beruht auf Art. 6 Abs. 1 lit. f DSGVO. Eine
              Weitergabe der Daten an Dritte findet nicht statt.
            </p>
          </div>

          <div>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-3">
              Rechtsgrundlage
            </h2>
            <p>
              Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine
              Einwilligung einholen, dient Art. 6 Abs. 1 lit. a
              EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage.
            </p>
          </div>

          <div>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-3">
              Cookies
            </h2>
            <p>
              Diese Website verwendet keine Tracking-Cookies. Es können
              technisch notwendige Cookies zum Einsatz kommen, die ausschließlich
              dem Betrieb der Website dienen und keine personenbezogenen Daten
              im Sinne von Art. 4 Ziff. 1 DSGVO beinhalten.
            </p>
          </div>

          <div>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-3">
              Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder
              Löschung Ihrer gespeicherten Daten sowie das Recht, der
              Verarbeitung zu widersprechen. Wenden Sie sich dazu an:
              Telefon 07441 / 85186.
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
