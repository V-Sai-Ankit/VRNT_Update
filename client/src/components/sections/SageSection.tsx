import { motion } from "framer-motion";
import sageImg from "@assets/Kanchi_shankaracharyas_1768738006479.jpg";
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
            <div className="relative h-[600px] md:h-auto group">
              <img 
                src={sageImg} 
                alt="68th and 69th Kanchi Shankaracharyas" 
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm font-serif italic leading-relaxed drop-shadow-lg">
                  68th and 69th Kanchi Shankaracharyas<br/>
                  <span className="font-bold text-primary">Sri Jayendra Saraswati Mahaswamiji</span> and <br/>
                  <span className="font-bold text-primary">Sri Chandrashekarendra Saraswati Mahaswamiji</span>
                </p>
              </div>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-center bg-card">
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2">Founder</span>
              <h2 className="font-display text-4xl font-bold text-secondary mb-1">
                {SITE_CONTENT.sage.subtitle}
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-bold text-secondary/90 leading-tight">
                  {SITE_CONTENT.sage.name}
                </h3>
                <p className="text-primary text-xs font-medium uppercase tracking-wider border-l-4 border-primary/20 pl-3 py-1 mb-6">
                  {SITE_CONTENT.sage.designation}
                </p>
                <p className="text-muted-foreground leading-relaxed font-serif italic text-lg mb-8">
                  "Popularly known as 'Sage of Kanchi' or 'Kanchi Paramacharyal', His Holiness found that the number of those dedicating themselves to the study of Vedas had diminished due to an uncertain future. He made it His Life's mission to draw the attention of society to this situation and founded the <span className="text-primary font-bold">VEDA RAKSHANA NIDHI TRUST (VRNT)</span>."
                </p>
              </div>
              
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
