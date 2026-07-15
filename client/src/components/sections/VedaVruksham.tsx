import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/lib/constants";

export const VedaVruksham = () => {
  const content = (SITE_CONTENT as any).vedaVruksham;
  
  if (!content) return null;

  return (
    <section className="py-8 bg-white overflow-hidden w-full">
      <div className="w-full px-4 md:px-6 lg:px-8 mx-auto">
        
        {/* PREMIUM INSTITUTIONAL INTRODUCTION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16 mt-4 px-4"
        >
          {/* Subtle Established Date Badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#7A3E17]/5 text-[#7A3E17] text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-4 border border-[#7A3E17]/10">
            Established 1963
          </span>

          {/* Strong Editorial Header Title */}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#7A3E17] tracking-tight leading-tight mb-6 font-serif">
            Welcome to Veda Rakshana Nidhi Trust
          </h1>

          {/* Elegant Accent Line Divider */}
          <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mb-8 rounded-full" />

          {/* Main Introduction Copy block */}
          <p className="text-base md:text-lg lg:text-xl text-[#333333] font-serif leading-relaxed tracking-wide antialiased max-w-3xl mx-auto font-medium">
            Founded in 1963 under the divine guidance of His Holiness Sri Sri Chandrashekarendra Saraswati MahaSwamigal, VRNT is a Public Charitable Trust dedicated to the preservation of the Vedic oral tradition.
          </p>

          {/* Secondary Core Mission Copy Block */}
          <p className="text-sm md:text-base text-[#666666] font-sans leading-relaxed tracking-wide mt-4 max-w-2xl mx-auto">
            Our mission is to ensure that the <span className="text-[#7A3E17] font-semibold">"unbroken chain"</span> of ancient wisdom remains vibrant and active for future generations.
          </p>
        </motion.div>

        {/* Traditional Elegant Break/Gap Separator */}
        <div className="w-full max-w-5xl mx-auto border-t border-gray-100 my-12" />

        {/* SECTION HEADING FOR THE VEDA VRUKSHAM */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#7A3E17] font-serif uppercase tracking-wider underline underline-offset-8 decoration-[#D4AF37] decoration-2">
            Veda Vruksham
          </h2>
        </motion.div>

        {/* 3-COLUMN HORIZONTAL COMPOSITION SPACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center justify-center gap-6 lg:gap-8 w-full">
          
          {/* LEFT SIDE: Tamil Meaning */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 w-full"
          >
            <div className="bg-primary/5 p-5 rounded-xl border-l-4 border-[#7A3E17] relative">
              <span className="absolute -top-3 left-4 bg-[#7A3E17] text-white px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                Tamil
              </span>
              <p className="text-xs md:text-sm font-serif leading-relaxed text-secondary/90 italic pt-1">
                "{content.tamil}"
              </p>
            </div>
          </motion.div>

          {/* CENTER: Veda Vruksham Diagram Layout Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 w-full flex flex-col items-center justify-center"
          >
            <div className="w-full max-w-[540px] px-2">
              <img 
                src="/images/veda-vruksha-original.jpg" 
                alt="Veda Vruksham Schematic Blueprint" 
                className="w-full h-auto object-contain rounded-lg shadow-md border border-gray-100"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE: English Meaning */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 w-full"
          >
            <div className="bg-primary/5 p-5 rounded-xl border-l-4 border-[#7A3E17] relative">
              <span className="absolute -top-3 left-4 bg-[#7A3E17] text-white px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                English
              </span>
              <p className="text-xs md:text-sm font-serif leading-relaxed text-secondary/90 italic pt-1">
                "{content.english}"
              </p>
            </div>
          </motion.div>

        </div>
        
        {/* BOTTOM MOTTO FOOTNOTE */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center text-[#7A3E17] font-extrabold text-sm md:text-lg uppercase tracking-[0.18em] max-w-4xl mx-auto border-t border-b border-primary/10 py-4"
        >
          Watering the roots of the Vedic tree is necessary to arrest its decay
        </motion.p>
        
      </div>
    </section>
  );
};