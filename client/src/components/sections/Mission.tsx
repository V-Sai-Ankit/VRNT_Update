import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/lib/constants";
import { BookOpen, Scroll, GraduationCap } from "lucide-react";

export function Mission() {
  return (
    <section id="mission" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-6 relative inline-block underline decoration-primary decoration-4 underline-offset-8">
              {SITE_CONTENT.mission.title}
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground font-serif leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-display first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                {SITE_CONTENT.mission.detailed}
              </p>
              
              <ul className="space-y-4 mt-8">
                {SITE_CONTENT.mission.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 p-1 bg-primary/10 rounded-full text-primary">
                       <Scroll size={16} />
                    </span>
                    <span className="text-foreground/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow hover:border-primary/30">
              <BookOpen className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold mb-2">Vedic Heritage</h3>
              <p className="text-muted-foreground text-sm">Preserving the ancient texts in their pristine purity for future generations.</p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow hover:border-primary/30 mt-0 sm:mt-12">
              <GraduationCap className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-display text-xl font-bold mb-2">Education</h3>
              <p className="text-muted-foreground text-sm">Supporting Gurukula education and traditional teaching methods.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
