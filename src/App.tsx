import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Proof } from "./components/Proof";
import { Stories } from "./components/Stories";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Proof />
        <Stories />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
}
