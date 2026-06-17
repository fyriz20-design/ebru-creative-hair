const navLinks = [
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Galerie", href: "#galerie" },
  { label: "Kontakt", href: "#kontakt" },
];

const rechtliches = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">
      {/* Goldene Trennlinie */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent" />

      {/* Hauptbereich */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo & Beschreibung */}
        <div className="md:col-span-2 flex flex-col gap-5">
          <div>
            <p
              className="text-2xl font-semibold tracking-widest uppercase text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ebru
            </p>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e]">
              Creative Hair
            </p>
          </div>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            Ihr Friseursalon in Freudenstadt für professionelle Haarschnitte,
            Colorationen und kreative Haarstylings.
          </p>
          {/* Social Media */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/40 hover:text-[#c9a96e] transition-colors duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/40 hover:text-[#c9a96e] transition-colors duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs tracking-[0.3em] uppercase text-[#c9a96e]">
            Navigation
          </h4>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs tracking-[0.3em] uppercase text-[#c9a96e]">
            Kontakt
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-white/50">
            <li>Bahnhofstraße 36<br />72250 Freudenstadt</li>
            <li>
              <a href="tel:+4974418518" className="hover:text-white transition-colors duration-200">
                07441 / 85186
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright-Leiste */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs tracking-wide">
            © {year} Ebru Creative Hair. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-5">
            {rechtliches.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/25 text-xs hover:text-white/60 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
