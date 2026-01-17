import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/lib/constants";
import { HandHeart, Building2 } from "lucide-react";

export function Activities() {
  return (
    <section id="activities" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
               
               <div className="relative z-10 space-y-8">
                 <div className="flex gap-4">
                   <div className="bg-white p-3 rounded-lg shadow-sm">
                     <Building2 className="text-secondary w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="font-display font-bold text-lg mb-1">Veda Patashalas</h4>
                     <p className="text-muted-foreground text-sm">Establishing traditional schools across India.</p>
                   </div>
                 </div>

                 <div className="flex gap-4">
                   <div className="bg-white p-3 rounded-lg shadow-sm">
                     <HandHeart className="text-primary w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="font-display font-bold text-lg mb-1">Financial Assistance</h4>
                     <p className="text-muted-foreground text-sm">Supporting scholars and institutions in need.</p>
                   </div>
                 </div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {SITE_CONTENT.activities.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-serif">
              {SITE_CONTENT.activities.description}
            </p>
            <div className="mt-8">
              <button className="text-primary font-bold uppercase tracking-widest text-sm hover:text-secondary transition-colors flex items-center gap-2 group">
                Support Our Activities
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
