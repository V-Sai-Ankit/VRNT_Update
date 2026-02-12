import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/lib/constants";

export const VedaVruksham = () => {
  const content = (SITE_CONTENT as any).vedaVruksham;
  
  if (!content) return null;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary underline decoration-primary decoration-4 underline-offset-8">
            {content.title}
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Tamil Meaning */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 max-w-md"
          >
            <div className="bg-primary/5 p-8 rounded-2xl border-l-4 border-primary relative">
              <span className="absolute -top-4 left-8 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                Tamil
              </span>
              <p className="text-lg md:text-xl font-serif leading-relaxed text-secondary/90 italic">
                "{content.tamil}"
              </p>
            </div>
          </motion.div>

          {/* Vruksham Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative shrink-0 w-full max-w-[400px] lg:max-w-[500px]"
          >
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full -z-10 animate-pulse" />
            <img 
              src="/images/veda-vruksha-original.jpg" 
              alt="Veda Vruksham" 
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(184,134,11,0.3)] hover:scale-105 transition-transform duration-700 rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* English Meaning */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 max-w-md text-right lg:text-left"
          >
            <div className="bg-primary/5 p-8 rounded-2xl border-r-4 lg:border-r-0 lg:border-l-4 border-primary relative">
              <span className="absolute -top-4 right-8 lg:right-auto lg:left-8 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                English
              </span>
              <p className="text-lg md:text-xl font-serif leading-relaxed text-secondary/90 italic">
                "{content.english}"
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center text-primary font-bold text-xl md:text-2xl uppercase tracking-[0.2em] max-w-3xl mx-auto border-t border-b border-primary/20 py-6"
        >
          Watering the roots of the Vedic tree is necessary to arrest its decay
        </motion.p>
      </div>
    </section>
  );
};
