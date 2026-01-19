import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Phone, Mail, MapPin, User } from "lucide-react";

export default function TrusteesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-[280px] md:pt-[340px] lg:pt-[240px] pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 underline decoration-primary decoration-4 underline-offset-8">
              List of Trustees
            </h1>
            <p className="text-lg text-muted-foreground font-serif mt-8 mb-12 italic">
              Dedicated individuals overseeing the mission of Veda Rakshana Nidhi Trust.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {(SITE_CONTENT.trustees || []).map((trustee: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                      <User size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-xl font-bold text-foreground truncate">
                        {trustee.name}
                      </h3>
                      <p className="text-sm font-bold text-primary uppercase tracking-wider mt-1">
                        {trustee.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
