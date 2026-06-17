import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Unser Team – Ebru Creative Hair",
  description:
    "Lernen Sie unser Team bei Ebru Creative Hair in Freudenstadt kennen.",
};

const team = [
  {
    name: "Ebru Heim",
    role: "Inhaberin",
    src: "/team/heim.jpg",
    bio: "Die Saloninhaberin arbeitete vor Ihrer Selbstständigkeit 8 Jahre bei Gutekunst Hairstyling in Nagold. Anfang 2008 erlangte Sie ihren Meistertitel in Stuttgart. Frau Heim nimmt immer wieder an zahlreichen Seminaren bei renommierten Firmen wie z.B. Keller the school, Wella uvm. teil. Frau Heim war in den Jahren 2007 und 2008 Viezelandesmeisterin von Hair und Style in der Kategorie Kosmetik sowie 2010 Viezedeutschemeisterin von Cat/CMC Festival Montial.",
  },
  {
    name: "Gabriele Hailer",
    role: "Top Stylistin",
    src: "/team/hailer.jpg",
    bio: "Seit beginn der Saloneröffnung in unserem Team. Davor arbeitete Frau Hailer 20 Jahre lang im Salon Rebholz und wurde dann von Frau Heim übernommen.",
  },
  {
    name: "Gabi Sautter",
    role: "Top Stylistin",
    src: "/team/sautter.jpg",
    bio: "Seit August 2014 in unserem Team. Davor arbeitete Frau Sautter im Salon ums Hairle in Freudenstadt.",
  },
  {
    name: "Aynur Kaba",
    role: "Top Stylistin",
    src: "/team/akaba.jpg",
    bio: "",
  },
];

export default function TeamPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Page Header */}
        <div className="bg-[#1a1a1a] pt-32 pb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
              Ebru Creative Hair
            </span>
            <div className="h-px w-10 bg-[#c9a96e]" />
          </div>
          <h1
            className="text-4xl md:text-5xl font-light text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Unser <span className="italic text-[#c9a96e]">Team</span>
          </h1>
        </div>

        {/* Intro */}
        <section className="bg-[#faf8f5] py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-[#6b6b6b] text-base leading-relaxed mb-4">
              Im Januar 2012 eröffneten wir den Salon „Ebru Creative Hair" in
              der Bahnhofstraße 36 in Freudenstadt.
            </p>
            <p className="text-[#6b6b6b] text-base leading-relaxed mb-4">
              Durch ständige Weiterbildungen und einer Individuellen Beratung
              finden wir den perfekten Look für Sie.
            </p>
            <p className="text-[#6b6b6b] text-base leading-relaxed">
              Entspannen Sie sich und genießen Sie eine speziell auf Sie
              zugeschnittene Beratung. Unser Ziel ist Ihr perfekter Look, damit
              sie auch nach Ihrem Besuch Spaß beim Frisieren haben.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6">
            {/* Section heading */}
            <div className="flex flex-col items-center text-center mb-14 gap-4">
              <div className="flex items-center gap-4">
                <div className="h-px w-10 bg-[#c9a96e]" />
                <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
                  Einzelportraits
                </span>
                <div className="h-px w-10 bg-[#c9a96e]" />
              </div>
            </div>

            {/* Team list */}
            <div className="flex flex-col divide-y divide-[#ede8e0]">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="flex gap-8 py-12 first:pt-0 last:pb-0"
                >
                  {/* Portrait */}
                  <div className="flex-shrink-0">
                    <div className="relative w-[160px] h-[200px] overflow-hidden bg-[#e8e2d9]">
                      <Image
                        src={member.src}
                        alt={`${member.name} – ${member.role}`}
                        fill
                        className="object-cover object-top"
                        sizes="160px"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-center gap-2">
                    <p
                      className="text-xl font-light text-[#1a1a1a]"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {member.name}
                    </p>
                    <p className="text-[#c9a96e] text-[10px] tracking-[0.3em] uppercase mb-2">
                      {member.role}
                    </p>
                    {member.bio && (
                      <p className="text-[#6b6b6b] text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Back link */}
            <div className="flex justify-center mt-16">
              <Link
                href="/"
                className="px-10 py-4 border border-[#c9a96e] text-[#c9a96e] text-xs tracking-[0.25em] uppercase hover:bg-[#c9a96e] hover:text-white transition-all duration-300"
              >
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
