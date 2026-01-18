import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookOpen, GraduationCap, Globe, Award, ShieldCheck } from "lucide-react";

export default function ActivitiesPage() {
  const initiatives = [
    {
      title: "Hereditary Niyama Adhyayanam (HNY) Scheme",
      icon: <ShieldCheck className="w-8 h-8" />,
      content: "This unique initiative revives and sustains the hereditary mode of Vedic learning, where a father imparts the Vedas to his son within the family lineage. Such lineage-based teaching is considered the most authentic and time-tested method of preserving Vedic knowledge, ensuring both precision in pronunciation (śikṣā) and purity in intonation (svara)."
    },
    {
      title: "Support for Rare Veda Shaakhas",
      icon: <BookOpen className="w-8 h-8" />,
      content: "Certain branches (śākhās) of the Vedas are on the brink of extinction. VRNT has established and supported Veda Pāṭhaśālās dedicated to these rare Shaakhas, providing disciplined training under qualified scholars to ensure the revival of endangered Vedic recensions."
    },
    {
      title: "Pan-India Financial Assistance",
      icon: <Globe className="w-8 h-8" />,
      content: "The Trust extends comprehensive financial assistance to deserving Veda Pāṭhaśālās across India. This enables institutions in remote areas to maintain high standards of Vedic education, ensuring economic challenges do not hinder sacred learning."
    },
    {
      title: "Academic Monitoring & Examinations",
      icon: <GraduationCap className="w-8 h-8" />,
      content: "To maintain academic rigor, VRNT conducts regular inspections and Varshika Pariksha (annual assessments) across affiliated Pāṭhaśālās in Tamil Nadu, Kerala, Andhra Pradesh, Telangana, Maharashtra, and Assam."
    },
    {
      title: "Final Examinations and Recognition",
      icon: <Award className="w-8 h-8" />,
      content: "At the culmination of their course, students appear for final examinations. Successful candidates are conferred with certificates of proficiency and monetary rewards, acknowledging their hard work and devotion to the Vedas."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-48 md:pt-56 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 underline decoration-primary decoration-4 underline-offset-8">
              Trust Activities
            </h1>
            <p className="text-xl text-muted-foreground font-serif leading-relaxed italic mt-8">
              Major Initiatives of the Trust
            </p>
            <p className="text-lg text-muted-foreground font-serif mt-4 leading-relaxed">
              Over the decades, the Veda Rakshana Nidhi Trust (VRNT) has undertaken several pioneering initiatives to uphold and propagate the sacred Vedic tradition in its pristine form.
            </p>
          </div>

          <div className="grid gap-8 max-w-5xl mx-auto">
            {initiatives.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="p-4 bg-primary/10 rounded-xl text-primary h-fit group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-muted-foreground font-serif leading-relaxed text-lg">
                      {item.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
