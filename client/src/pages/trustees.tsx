import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Phone, Mail, MapPin, User } from "lucide-react";

export default function TrusteesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-56 md:pt-64 pb-24">
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
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      <User size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {trustee.name}
                        </h3>
                        <span className="text-[10px] font-bold bg-secondary/10 text-secondary px-2 py-1 rounded uppercase tracking-wider">
                          {trustee.role}
                        </span>
                      </div>
                      
                      <div className="space-y-3 mt-4 text-sm text-muted-foreground font-sans">
                        <div className="flex items-start gap-2">
                          <MapPin size={16} className="mt-0.5 text-primary shrink-0" />
                          <span>{trustee.address}</span>
                        </div>
                        {trustee.email && (
                          <div className="flex items-center gap-2">
                            <Mail size={16} className="text-primary shrink-0" />
                            <a href={`mailto:${trustee.email}`} className="hover:text-primary transition-colors">{trustee.email}</a>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Phone size={16} className="text-primary shrink-0" />
                          <span>{trustee.contact}</span>
                        </div>
                      </div>
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
