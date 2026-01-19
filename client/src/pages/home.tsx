import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Activities } from "@/components/sections/Activities";
import { Vedas } from "@/components/sections/Vedas";
import { SageSection } from "@/components/sections/SageSection";
import { News } from "@/components/sections/News";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ExternalLink, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        {/* Diamond Jubilee Registration Banner */}
        <div className="pt-56 md:pt-64 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6 py-4">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-secondary text-secondary-foreground rounded-xl p-4 md:p-6 border border-primary/20 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 text-center md:text-left">
                <div className="bg-primary/20 p-3 rounded-full shrink-0">
                  <Award className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg md:text-xl text-white">Shasti Aptha Purti Mahotsav (60 Years)</h3>
                  <p className="text-secondary-foreground/80 text-sm font-serif">We request all certified Vidwans to register for the Diamond Jubilee celebrations.</p>
                </div>
              </div>
              <Link href="/celebrations/60-years">
                <a className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold uppercase tracking-wider text-xs hover:bg-primary/90 transition-all shadow-md whitespace-nowrap">
                  Register Now <ExternalLink size={14} />
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
        <Hero />
        <Activities />
        <SageSection />
      </main>
      <Footer />
    </div>
  );
}
