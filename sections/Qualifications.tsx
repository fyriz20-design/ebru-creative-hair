import Image from "next/image";

const zertifikate = [
  { src: "/quali/quali1.jpg", alt: "CMC Diplom" },
  { src: "/quali/quali5.jpg", alt: "Wella Diplom" },
  { src: "/quali/quali6.jpg", alt: "Wella Diplom" },
  { src: "/quali/quali7.jpg", alt: "Wella Diplom" },
  { src: "/quali/quali8.jpg", alt: "Wella Ecaille Collection Diplom" },
  { src: "/quali/quali9.jpg", alt: "Wella Ecaille Collection Diplom" },
  { src: "/quali/zert1.jpg", alt: "Wella Zertifikat" },
  { src: "/quali/zert2.jpg", alt: "Wella Zertifikat" },
  { src: "/quali/zert3.jpg", alt: "Wella Zertifikat" },
];

export default function Qualifications() {
  return (
    <section id="qualifikationen" className="bg-[#faf8f5] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 gap-4">
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
              Unsere Auszeichnungen
            </span>
            <div className="h-px w-10 bg-[#c9a96e]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-[#1a1a1a] leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Qualifikationen &amp;{" "}
            <span className="italic text-[#c9a96e]">Zertifikate</span>
          </h2>
          <p className="text-[#6b6b6b] text-sm tracking-wide max-w-lg mt-2">
            Unsere stetige Weiterbildung garantiert Ihnen höchste Qualität und
            die neuesten Techniken der professionellen Haarpflege.
          </p>
        </div>

        {/* Wella Top Salon Badge */}
        <div className="flex flex-col items-center gap-3 mb-14">
          <div className="relative w-24 h-24">
            <Image
              src="/images/wella-top.png"
              alt="Wella Top Salon – Circle of Excellence"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-[#6b6b6b] text-xs tracking-[0.2em] uppercase">
            Wella Top Salon – Circle of Excellence
          </p>
        </div>

        {/* Gold divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent mb-14 opacity-40" />

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {zertifikate.map((zert, i) => (
            <div
              key={i}
              className="bg-white border border-[#ece8e0] shadow-sm overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={zert.src}
                  alt={zert.alt}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
