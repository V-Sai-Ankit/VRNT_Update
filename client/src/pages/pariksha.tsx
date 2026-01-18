import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FileDown, GraduationCap, ClipboardCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import poorthiForm from "@assets/forms/POORTHY_APPL_2024.pdf";
import varshikaForm from "@assets/forms/VARSHIKA_FORM.pdf";

export default function ParikshaPage() {
  const forms = [
    {
      title: "Poorthi Pariksha Application",
      description: "Application form for the final completion examination (2024).",
      icon: GraduationCap,
      link: poorthiForm,
      filename: "POORTHY_APPL_2024.pdf",
      buttonText: "Download Poorthi Form"
    },
    {
      title: "Varshika Pariksha Form",
      description: "Annual examination form for Vedic students.",
      icon: ClipboardCheck,
      link: varshikaForm,
      filename: "VARSHIKA_FORM.pdf",
      buttonText: "Download Varshika Form"
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
              Download application forms directly for Vedic examinations conducted by the Trust.
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
                      asChild={!form.disabled}
                    >
                      {form.disabled ? (
                        <span>{form.buttonText}</span>
                      ) : (
                        <a href={form.link} download={form.filename}>
                          <FileDown size={18} />
                          {form.buttonText}
                        </a>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

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
