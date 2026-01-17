import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/lib/constants";
import { ArrowUpRight, Calendar, FileText } from "lucide-react";

export function News() {
  return (
    <section id="news" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 underline decoration-primary decoration-4 underline-offset-8">
            Updates & Announcements
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONTENT.news.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card p-6 rounded-lg border border-border hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-muted rounded-md text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                    {index % 2 === 0 ? <Calendar size={20} /> : <FileText size={20} />}
                  </div>
                  <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {item.title}
                </h3>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border/50 flex justify-between items-center text-xs text-muted-foreground font-medium uppercase tracking-wider">
                <span>Latest Update</span>
                <span className="group-hover:translate-x-1 transition-transform">Read More</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
