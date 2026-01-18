import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FileDown, GraduationCap, ClipboardCheck, X, Eye } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ParikshaPage() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const forms = [
    {
      title: "Poorthi Pariksha Application",
      description: "Application form for the final completion examination (2024).",
      icon: GraduationCap,
      link: "https://vrnt.org/form/POORTHY_APPL_2024.pdf",
      buttonText: "View / Download Poorthi Form"
    },
    {
      title: "Varshika Pariksha Form",
      description: "Annual examination form for Vedic students.",
      icon: ClipboardCheck,
      link: "https://vrnt.org/form/VARSHIKA_FORM.pdf",
      buttonText: "View / Download Varshika Form"
    },
    {
      title: "Examination Results",
      description: "View and download the latest examination results.",
      icon: FileDown,
      link: "#",
      buttonText: "Coming Soon",
      disabled: true
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-32 pb-24 bg-muted/30 min-h-[calc(100vh-80px)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4 underline decoration-primary decoration-4 underline-offset-8 inline-block">
              Pariksha (Examinations)
            </h1>
            <p className="text-lg text-muted-foreground font-serif mt-8 max-w-2xl mx-auto italic">
              View application forms directly or download them for Vedic examinations conducted by the Trust.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {forms.map((form, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col border-border/50 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 text-primary">
                      <form.icon size={28} />
                    </div>
                    <CardTitle className="font-display text-xl">{form.title}</CardTitle>
                    <CardDescription className="font-serif italic">{form.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-6">
                    <Button 
                      className="w-full gap-2 font-bold uppercase tracking-wider text-xs"
                      disabled={form.disabled}
                      onClick={() => !form.disabled && setSelectedPdf(form.link)}
                    >
                      {form.disabled ? (
                        <span>{form.buttonText}</span>
                      ) : (
                        <>
                          <Eye size={18} />
                          {form.buttonText}
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedPdf && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 md:p-10"
              >
                <div className="relative w-full h-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                  <div className="flex items-center justify-between p-4 border-b bg-card">
                    <h3 className="font-display font-bold text-lg">Form Viewer</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={selectedPdf} download target="_blank" rel="noopener noreferrer">
                          <FileDown size={18} className="mr-2" /> Download
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => setSelectedPdf(null)}>
                        <X size={24} />
                      </Button>
                    </div>
                  </div>
                  <div className="flex-1 bg-muted">
                    <iframe
                      src={`${selectedPdf}#toolbar=0`}
                      className="w-full h-full border-none"
                      title="PDF Viewer"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-16 bg-card border rounded-2xl p-8 shadow-sm">
            <h3 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
              <ClipboardCheck className="text-primary" /> Examination Instructions
            </h3>
            <ul className="space-y-3 text-muted-foreground font-serif list-disc pl-5 leading-relaxed">
              <li>Candidates must submit the filled application forms before the specified deadline.</li>
              <li>Ensure all Vedic recension (Sakha) details are correctly mentioned.</li>
              <li>Recommendation from the respective Guru/Patashala is mandatory.</li>
              <li>For any queries regarding the examinations, please contact the Trust office.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
