const reviews = [
  {
    name: "Maria S.",
    rating: 5,
    text: "Absolut begeistert! Ebru hat mir genau den Look gegeben, den ich mir vorgestellt hatte. Tolle Beratung und eine sehr entspannte Atmosphäre. Ich komme seit Jahren hierher und würde den Salon jederzeit weiterempfehlen.",
    date: "vor 2 Wochen",
  },
  {
    name: "Sandra M.",
    rating: 5,
    text: "Professionell, freundlich und wirklich kreativ. Die Balayage ist genau so geworden wie ich es wollte — vielleicht sogar noch besser! Das Team nimmt sich wirklich Zeit für eine individuelle Beratung.",
    date: "vor 3 Wochen",
  },
  {
    name: "Klaus W.",
    rating: 5,
    text: "Meine Frau geht seit Jahren hierher und schwärmt immer davon. Jetzt war ich selbst für einen Haarschnitt da — und ich verstehe die Begeisterung! Sehr angenehme Atmosphäre, top Ergebnis.",
    date: "vor 1 Monat",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#c9a96e">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-[#1a1a1a] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 gap-4">
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
              Google Bewertungen
            </span>
            <div className="h-px w-10 bg-[#c9a96e]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-white leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Was unsere{" "}
            <span className="italic text-[#c9a96e]">Kunden sagen</span>
          </h2>

          {/* Overall rating badge */}
          <div className="flex items-center gap-3 mt-2">
            <span className="text-white text-3xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>
              5,0
            </span>
            <div className="flex flex-col gap-1">
              <StarRating count={5} />
              <span className="text-white/40 text-xs tracking-wide">
                auf Google
              </span>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-8 flex flex-col gap-4 hover:bg-white/8 transition-colors duration-200"
            >
              <StarRating count={review.rating} />
              <p className="text-white/70 text-sm leading-relaxed flex-1">
                „{review.text}"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-white text-sm font-medium">{review.name}</span>
                <span className="text-white/30 text-xs">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google */}
        <div className="flex justify-center mt-10">
          <a
            href="https://www.google.com/maps/search/Ebru+Creative+Hair+Freudenstadt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 border border-white/20 text-white/70 hover:text-white hover:border-[#c9a96e] text-xs tracking-[0.25em] uppercase transition-all duration-300"
          >
            {/* Google G logo */}
            <svg width="16" height="16" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            Alle Bewertungen lesen
          </a>
        </div>
      </div>
    </section>
  );
}
