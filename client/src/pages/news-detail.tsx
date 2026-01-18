import { motion } from "framer-motion";
import { useParams, Link } from "wouter";
import { SITE_CONTENT } from "@/lib/constants";
import { ArrowLeft, Calendar, FileText, Download, Share2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NewsDetailPage() {
  const { id } = useParams();
  const newsItem = SITE_CONTENT.news[parseInt(id || "0")];

  if (!newsItem) return null;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/news">
            <button className="flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to News
            </button>
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto bg-card rounded-2xl border border-border shadow-xl p-8 md:p-12"
          >
            <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-6">
              <Calendar size={16} />
              <span>Announcement</span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 underline decoration-primary decoration-4 underline-offset-8 leading-tight">
              {newsItem.title}
            </h1>

            <div className="prose prose-stone prose-lg max-w-none text-muted-foreground font-serif leading-relaxed mb-12">
              <p>
                This official circular from Veda Rakshana Nidhi Trust details the upcoming {newsItem.title}. 
                The Trust continues its mission of preserving Vedic education through regular examinations and recognition functions.
              </p>
              <p>
                Detailed information regarding applications, schedules, and eligibility criteria can be found in the attached document. 
                Vaidikas and Vidhyarties are requested to review the content thoroughly.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <a 
                href={newsItem.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-primary text-white px-6 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all transform hover:scale-[1.02] shadow-lg shadow-primary/20"
              >
                <Download size={20} />
                Download PDF
              </a>
              <button className="flex items-center justify-center gap-3 bg-secondary/10 text-secondary px-6 py-4 rounded-xl font-bold hover:bg-secondary/20 transition-all transform hover:scale-[1.02]">
                <Share2 size={20} />
                Share Update
              </button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
