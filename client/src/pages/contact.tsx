import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONTENT } from "@/lib/constants";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 underline decoration-primary decoration-4 underline-offset-8">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground font-serif mt-8 mb-12 italic">
              Please feel free to get in touch, we value your feedback.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                  <h3 className="font-display text-2xl font-bold mb-6">Our Office</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Address</p>
                        <p className="text-muted-foreground">{SITE_CONTENT.header.address}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Email</p>
                        <p className="text-muted-foreground">office@vrnt.org</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Phone</p>
                        <p className="text-muted-foreground">044-24985051</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm"
              >
                <h3 className="font-display text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Name *</label>
                    <input className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Email *</label>
                    <input className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Message *</label>
                    <textarea rows={4} className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" />
                  </div>
                  <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all">
                    Send Message <Send size={20} />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
