import { motion } from "framer-motion";
import sageImg from "@assets/mp_1768671094518.jpg";
import { SITE_CONTENT } from "@/lib/constants";

export function SageSection() {
  return (
    <section className="py-24 bg-secondary/5 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-card rounded-2xl shadow-xl overflow-hidden border border-border"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative h-[500px] md:h-auto">
              <img 
                src={sageImg} 
                alt="MahaPeriyava" 
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden" />
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-center bg-card">
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2">Founder</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 underline decoration-primary decoration-4 underline-offset-8">
                {SITE_CONTENT.sage.title}
              </h2>
              <h3 className="font-serif text-xl text-secondary mb-6 italic">
                {SITE_CONTENT.sage.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-sans mb-8 text-lg">
                {SITE_CONTENT.sage.description}
              </p>
              
              <div className="flex gap-4">
                <div className="h-1.5 w-20 bg-primary rounded-full" />
                <div className="h-1.5 w-4 bg-secondary rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
