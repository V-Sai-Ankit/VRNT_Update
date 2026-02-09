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
        <div className="pt-[280px] md:pt-[340px] lg:pt-[240px] bg-primary/5">
          <div className="container mx-auto px-4 md:px-6 py-2">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-primary text-primary-foreground rounded-2xl p-4 md:p-6 border-2 border-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.3)] flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4 md:gap-6 overflow-hidden">
                <div className="bg-[#FFD700]/20 p-3 rounded-2xl shrink-0 border border-[#FFD700]/30">
                  <Award className="text-[#FFD700] w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display font-bold text-xl md:text-3xl text-[#FFD700] mb-2">Shasti Aptha Purti Mahotsav</h3>
                  <div className="flex flex-col gap-2">
                    <p className="text-white/90 text-sm md:text-lg font-serif leading-relaxed">
                      Celebrating 60 Years of Veda Rakshana. We cordially request all <span className="text-[#FFD700] font-bold">certified Vidwans</span> to register for the Diamond Jubilee celebrations.
                    </p>
                    <Link href="/pariksha">
                      <a className="text-[#FFD700] hover:text-white text-sm font-bold flex items-center gap-2 transition-colors w-fit">
                        <ExternalLink size={14} /> 2026 Poorthy Exam Registration Now Open
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/celebrations/60-years">
                <a className="inline-flex items-center gap-2 md:gap-3 bg-[#FFD700] text-secondary px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-white transition-all shadow-xl whitespace-nowrap shrink-0 group">
                  Register Now <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
        <Hero />
        <SageSection />
      </main>
      <Footer />
    </div>
  );
}
