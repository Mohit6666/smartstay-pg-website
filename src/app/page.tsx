import About from "../components/sections/About";
import CTA from "../components/sections/CTA";
import Gallery from "../components/sections/Gallery";
import Hero from "../components/sections/Hero";
import Reviews from "../components/sections/Reviews";
import Services from "../components/sections/Services";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Reviews />
      <CTA />
    </main>
  );
}
