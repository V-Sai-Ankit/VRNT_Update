import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/lib/constants";
import { ArrowUpRight, Calendar, FileText, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function News() {
  return (
    <section id="news" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="text-left">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 underline decoration-primary decoration-4 underline-offset-8">
              Updates & Announcements
            </h2>
          </div>
          <Link href="/news">
            <button className="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group">
              View All Circulars <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONTENT.news.slice(0, 3).map((item, index) => (
            <Link key={index} href={`/news/${index}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card p-6 rounded-lg border border-border hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full cursor-pointer"
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
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
