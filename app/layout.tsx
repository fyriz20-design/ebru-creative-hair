import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Ebru Creative Hair – Friseursalon in Freudenstadt",
  description:
    "Ihr Friseursalon in Freudenstadt für professionelle Haarschnitte, Colorationen und Haarpflege. Inh. Ebru Heim. Jetzt Termin vereinbaren: 07441 / 85186.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${playfair.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-lato)]">
        {children}
      </body>
    </html>
  );
}
