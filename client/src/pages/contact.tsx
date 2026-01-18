import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONTENT } from "@/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 underline decoration-primary decoration-4 underline-offset-8 inline-block">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground font-serif mt-8 mb-12 italic">
              Please feel free to get in touch, we value your feedback.
            </p>

            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="bg-card p-10 rounded-2xl border border-border shadow-sm">
                  <h3 className="font-display text-3xl font-bold mb-8">Get in Touch</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center p-4">
                      <div className="p-4 bg-primary/10 rounded-full text-primary mb-4">
                        <MapPin size={32} />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Address</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{SITE_CONTENT.header.address}</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4">
                      <div className="p-4 bg-primary/10 rounded-full text-primary mb-4">
                        <Mail size={32} />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Email</h4>
                      <p className="text-muted-foreground text-sm">office@vrnt.org</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4">
                      <div className="p-4 bg-primary/10 rounded-full text-primary mb-4">
                        <Phone size={32} />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Phone</h4>
                      <p className="text-muted-foreground text-sm">044-24985051</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
