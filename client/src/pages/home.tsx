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
          <div className="container mx-auto px-4 md:px-6 py-2">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-secondary text-secondary-foreground rounded-xl p-2 md:p-3 border border-primary/20 shadow-lg flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                <div className="bg-primary/20 p-2 rounded-full shrink-0">
                  <Award className="text-primary w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0 flex-1 overflow-hidden">
                  <h3 className="font-display font-bold text-sm md:text-lg text-white truncate">Shasti Aptha Purti Mahotsav (60 Years)</h3>
                  <div className="relative h-4 md:h-5 overflow-hidden">
                    <p className="text-secondary-foreground/80 text-[10px] md:text-xs font-serif hidden sm:block">We request all certified Vidwans to register for the Diamond Jubilee celebrations.</p>
                    <div className="sm:hidden whitespace-nowrap">
                      <motion.p 
                        animate={{ x: ["100%", "-100%"] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="text-secondary-foreground/80 text-[10px] font-serif inline-block"
                      >
                        Vidwan Registration Open - We request all certified Vidwans to register for the Diamond Jubilee celebrations.
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/celebrations/60-years">
                <a className="inline-flex items-center gap-1.5 md:gap-2 bg-primary text-primary-foreground px-3 py-2 md:px-5 md:py-2.5 rounded-lg font-bold uppercase tracking-wider text-[9px] md:text-[10px] hover:bg-primary/90 transition-all shadow-md whitespace-nowrap shrink-0">
                  Register <span className="hidden xs:inline">Now</span> <ExternalLink size={12} className="md:w-[14px] md:h-[14px]" />
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
