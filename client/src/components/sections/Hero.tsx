import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/vedic_scriptures_and_oil_lamp_warm_background.png";
import { SITE_CONTENT } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Vedic Heritage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="inline-block border-b-2 border-primary pb-1 mb-4">
            <span className="font-sans text-sm md:text-base tracking-[0.2em] uppercase text-primary-foreground/90">
              {SITE_CONTENT.header.subtitle}
            </span>
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg text-amber-50">
            {SITE_CONTENT.hero.title}
          </h1>
          
          <p className="font-serif text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {SITE_CONTENT.hero.description}
          </p>

          <div className="pt-8">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-sans font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/20 flex items-center gap-2 mx-auto">
              {SITE_CONTENT.hero.cta}
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
}
