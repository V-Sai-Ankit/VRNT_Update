import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/lib/constants";
import { ArrowLeft, Calendar, FileText, Download, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/">
            <button className="flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 underline decoration-primary decoration-4 underline-offset-8">
              Updates & Announcements
            </h1>
            <p className="text-lg text-muted-foreground font-serif mt-8 mb-12 italic">
              Latest circulars, examination results, and trust activities from Veda Rakshna Nidhi Trust.
            </p>

            <div className="grid gap-6">
              {SITE_CONTENT.news.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {index % 2 === 0 ? <Calendar size={24} /> : <FileText size={24} />}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">Published in 2024</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Link href={`/news/${index}`}>
                      <button className="bg-primary/5 hover:bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
                        Details <ExternalLink size={16} />
                      </button>
                    </Link>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors">
                        View Document <Download size={16} />
                      </button>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
