import { Navbar } from "@/components/layout/Navbar";
import { Mission } from "@/components/sections/Mission";
import { Footer } from "@/components/layout/Footer";

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-56 md:pt-64 pb-24">
        <Mission />
      </main>
      <Footer />
    </div>
  );
}
