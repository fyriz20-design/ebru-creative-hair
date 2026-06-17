import Navigation from "@/components/Navigation";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Gallery from "@/sections/Gallery";
import Qualifications from "@/sections/Qualifications";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Qualifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
