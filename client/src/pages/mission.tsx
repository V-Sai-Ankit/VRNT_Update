import { Navbar } from "@/components/layout/Navbar";
import { Mission } from "@/components/sections/Mission";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Shield, BookOpen, Globe, Users } from "lucide-react";

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-[280px] md:pt-[340px] lg:pt-[240px] pb-24">
        <Mission />
        
        <div className="container mx-auto px-4 md:px-6 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">Major Initiatives</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif">Hereditary Niyama Adhyayanam (HNY)</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Reviving the hereditary mode of Vedic learning, where a father imparts the Vedas to his son, ensuring precision in pronunciation and purity in intonation.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif">Rare Veda Shaakhas Support</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Establishing Pāṭhaśālās dedicated to rare Shaakhas on the brink of extinction, providing disciplined training under qualified scholars.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif">Pan-India Assistance</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Extending comprehensive financial support to deserving Veda Pāṭhaśālās across India, ensuring economic challenges do not hinder sacred learning.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif">Academic Monitoring</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Conducting regular inspections and Varshika Pariksha to maintain academic rigor and uniformity across all affiliated institutions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-3xl p-8 md:p-16 border border-primary/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">Maha Periyava's Message</h2>
              <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground/90 leading-relaxed mb-10">
                "The preservation of the Vedas is the foremost duty, as they are the foundation of Sanatana Dharma and the source of all spiritual and cultural discipline."
              </blockquote>
              <p className="text-lg text-muted-foreground font-serif leading-relaxed italic">
                Ancient traditions should not be discarded merely for being old but should be judged by their true value and purpose. Neglecting the Vedas leads to the decay of Dharma, while preserving them ensures prosperity and peace for the world.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
