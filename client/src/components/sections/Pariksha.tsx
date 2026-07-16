import React from 'react';
import { motion } from "framer-motion";
import { FileDown, GraduationCap, ClipboardCheck, Award, BookOpen, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ParikshaProps {
  isMenuOpen?: boolean;
  isDrawerOpen?: boolean;
}

export default function Pariksha({ isMenuOpen = false, isDrawerOpen = false }: ParikshaProps) {
  const expanded = !isMenuOpen && !isDrawerOpen;

  const forms = [
    {
      title: "2026 Poorthy Exam Registration",
      description: "Online registration for the 2026 Poorthy Examination.",
      icon: GraduationCap,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfGe_y1ErOfrNsTlb-51mu0LaL6cPXxbKv38hQFFzxecA5BrQ/viewform",
      isExternal: true,
      buttonText: "Register Online"
    },
    {
      title: "Poorthi Pariksha Application",
      description: "Download the application form for the final completion examination.",
      icon: FileDown,
      link: "/assets/forms/POORTHY_APPL_2024.pdf", // Served dynamically from the root assets folder
      filename: "POORTHY_APPL_2024.pdf",
      buttonText: "Download Form"
    },
    {
      title: "Varshika Pariksha Form",
      description: "Annual examination form for Vedic students.",
      icon: ClipboardCheck,
      link: "/assets/forms/VARSHIKA_FORM.pdf", // Served dynamically from the root assets folder
      filename: "VARSHIKA_FORM.pdf",
      buttonText: "Download Form"
    }
  ];

  const poorthyLevels = [
    { veda: "Rig Veda", levels: ["Moolam", "Padam–Kramam", "Ghanam", "Lakshanam"] },
    { veda: "Yajur Veda", levels: ["Padam–Kramam", "Ghanam", "Lakshanam"] },
    { veda: "Sama Veda", levels: ["Poorva Bhagam", "Uttara Bhagam"] },
    { veda: "Atharva Veda", levels: ["Moolam level"] }
  ];

  return (
    <div className={`min-h-screen bg-background text-foreground font-sans transition-all duration-300 ${expanded ? 'p-6' : 'p-0'}`}>
      <main className="pt-[20px] pb-24 min-h-[calc(100vh-80px)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4 underline decoration-primary decoration-4 underline-offset-8 inline-block">
              Pariksha (Examinations)
            </h1>
            <p className="text-lg text-muted-foreground font-serif mt-8 max-w-2xl mx-auto italic">
              Academic rigor is maintained through regular inspections and assessments to preserve traditional standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                    {form.isExternal ? (
                      <Button 
                        className="w-full gap-2 font-bold uppercase tracking-wider text-xs cursor-pointer"
                        asChild
                      >
                        <a href={form.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          {form.buttonText}
                        </a>
                      </Button>
                    ) : (
                      <Button 
                        className="w-full gap-2 font-bold uppercase tracking-wider text-xs cursor-pointer"
                        asChild
                      >
                        <a href={form.link} download={form.filename}>
                          <FileDown className="w-4 h-4" />
                          {form.buttonText}
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border rounded-2xl p-8 shadow-sm">
              <h3 className="font-display text-2xl font-bold mb-6 text-primary border-b pb-4 flex items-center gap-2">
                <GraduationCap className="text-primary" /> Poorthy Examination
              </h3>
              <p className="text-muted-foreground font-serif leading-relaxed mb-6">
                The final graduation examination marks the culmination of years of rigorous Adhyayanam. Certification levels:
              </p>
              <div className="grid grid-cols-2 gap-6 text-sm font-serif">
                {poorthyLevels.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <p className="font-bold text-secondary">{item.veda}</p>
                    <ul className="list-disc pl-4 text-xs space-y-1">
                      {item.levels.map((level, lIdx) => (
                        <li key={lIdx}>{level}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border rounded-2xl p-8 shadow-sm">
              <h3 className="font-display text-2xl font-bold mb-6 text-primary border-b pb-4 flex items-center gap-2">
                <BookOpen className="text-primary" /> Sanskrit Proficiency
              </h3>
              <p className="text-muted-foreground font-serif leading-relaxed mb-6">
                Students must complete Sanskrit exams by Chittoor Samskrutha Sabha corresponding to their Veda study:
              </p>
              <div className="space-y-3 text-sm font-serif">
                <div className="flex justify-between border-b border-border/50 pb-1">
                  <span className="font-medium">Moolam</span>
                  <span className="font-bold text-secondary italic">Parichaya</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-1">
                  <span className="font-medium">Kramam / Poorva Bhagam</span>
                  <span className="font-bold text-secondary italic">Abhijñā</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-1">
                  <span className="font-medium">Ghanam / Uttara Bhagam</span>
                  <span className="font-bold text-secondary italic">Vichakshana</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground italic">Linguistic depth complements Vedic mastery for true spiritual insight.</p>
            </div>
          </div>

          <div className="bg-card border rounded-2xl p-8 shadow-sm mb-12">
            <h3 className="font-display text-2xl font-bold mb-6 text-primary border-b pb-4 flex items-center gap-2">
              <Award className="text-primary" /> Selection of Śūrādhyāyī
            </h3>
            <p className="text-muted-foreground font-serif leading-relaxed mb-6">
              A prestigious distinction awarded to the "Best Vidyārthi" who demonstrates exceptional proficiency and dedication.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-sm font-serif">
              <div className="space-y-4">
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                  <p className="font-bold text-secondary mb-2 uppercase tracking-wider text-xs">Eligibility Criteria</p>
                  <ul className="list-disc pl-4 space-y-2 text-xs">
                    <li>Minimum 90% marks in the Gānāntham examination.</li>
                    <li>Cleared Gānāntham between 2 and 4 years prior.</li>
                    <li>Comprehensive understanding of Lakṣaṇam and Prātiśākhya.</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-secondary/5 p-4 rounded-xl border border-secondary/10">
                  <p className="font-bold text-secondary mb-2 uppercase tracking-wider text-xs">Examination Format</p>
                  <ul className="list-disc pl-4 space-y-2 text-xs">
                    <li>Recitation in Mūlam, Padam, Kramam, Jaṭā, and Gānam.</li>
                    <li>High-standard challenging questions from Saṃhitā and Brāhmaṇa.</li>
                    <li>Minimum 10 minutes of continuous, flawless recitation.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-2xl p-8 shadow-sm">
            <h3 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
              <ClipboardCheck className="text-primary" /> Examination Instructions
            </h3>
            <ul className="space-y-3 text-muted-foreground font-serif list-disc pl-5 leading-relaxed">
              <li>Candidates must submit the filled application forms before the specified deadline.</li>
              <li>Students must study their Sva-Śākhā (ancestral Vedic branch) exclusively.</li>
              <li>Maintaining the Śikhā (traditional tuft) as prescribed by Sampradāyam is mandatory.</li>
              <li>Pareekshādhikāris (examiners) personally visit Paatashalas for Varshikam assessments.</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}