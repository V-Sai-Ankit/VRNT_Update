import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Activities } from "@/components/sections/Activities";
import { Vedas } from "@/components/sections/Vedas";
import { SageSection } from "@/components/sections/SageSection";
import { News } from "@/components/sections/News";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <Activities />
        <SageSection />
      </main>
      <Footer />
    </div>
  );
}
