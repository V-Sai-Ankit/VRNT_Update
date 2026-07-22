import React from 'react';
import { motion } from "framer-motion";
import { BookOpen, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SanskritProps {
  expanded: boolean;
  onBack: () => void;
}

export default function SanskritPage({ expanded, onBack }: SanskritProps) {
  const tableData = [
    { veda: "Rig Veda", studyLevel: "Moolam", examLevel: "Parichaya (Introductory Level)" },
    { veda: "Rig Veda", studyLevel: "Kramam", examLevel: "Abhijñā (Intermediate Level)" },
    { veda: "Rig Veda", studyLevel: "Ghanam", examLevel: "Vichakshana (Advanced Level)" },
    { veda: "Yajur Veda", studyLevel: "Kramam", examLevel: "Parichaya, Abhijñā" },
    { veda: "Yajur Veda", studyLevel: "Ghanam", examLevel: "Vichakshana" },
    { veda: "Sama Veda", studyLevel: "Poorva Bhagam", examLevel: "Parichaya, Abhijñā" },
    { veda: "Sama Veda", studyLevel: "Uttara Bhagam", examLevel: "Vichakshana" },
    { veda: "Atharva Veda", studyLevel: "Moolam", examLevel: "Parichaya (Introductory Level)" },
  ];

  return (
    <div className={`min-h-screen bg-background text-foreground font-sans transition-all duration-300 ${expanded ? 'p-6' : 'p-0'}`}>
      <main className="pt-[20px] pb-24 min-h-[calc(100vh-80px)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <Button 
              onClick={onBack}
              variant="ghost"
              className="gap-2 text-primary hover:text-primary/80 font-serif italic cursor-pointer p-0 hover:bg-transparent"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Pariksha Overview
            </Button>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-card border rounded-2xl p-6 md:p-10 shadow-sm"
          >
            <div className="border-b pb-6 mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-secondary m-0">
                  Ensuring Sanskrit Proficiency
                </h1>
              </div>
              <p className="text-muted-foreground font-serif italic text-base mt-2 m-0">
                Chittoor Samskrutha Sabha Examinations & Qualifications
              </p>
            </div>

            <article className="flex flex-col gap-6 text-foreground font-serif leading-relaxed text-base md:text-lg mb-8">
              <p className="m-0">
                In accordance with the Trust’s objective to promote comprehensive Vedic education, every <em className="italic font-semibold text-secondary">Vidyaarthi</em> is required to attain a sound knowledge of Sanskrit, the foundational language of the Vedas. To ensure this, students must successfully complete the various levels of Sanskrit examinations conducted by the <strong className="text-secondary font-sans font-semibold">Chittoor Samskrutha Sabha</strong>, which serves as the recognized academic body for assessing Sanskrit proficiency.
              </p>

              <p className="m-0">
                The prescribed levels of Sanskrit qualification corresponding to each Veda Shaakha and stage of study are as follows:
              </p>
            </article>

            {/* Structured Table */}
            <div className="overflow-x-auto mb-8 rounded-xl border border-border/80 shadow-xs">
              <table className="w-full text-left border-collapse font-serif text-sm md:text-base">
                <thead>
                  <tr className="bg-primary/10 border-b border-border/80 text-secondary font-display font-bold">
                    <th className="p-3.5 md:p-4">Veda Shaakha</th>
                    <th className="p-3.5 md:p-4">Level of Study</th>
                    <th className="p-3.5 md:p-4">Sanskrit Examination Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {tableData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-primary/5 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-secondary">{row.veda}</td>
                      <td className="p-3.5 md:p-4">{row.studyLevel}</td>
                      <td className="p-3.5 md:p-4 italic text-muted-foreground">{row.examLevel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-foreground font-serif leading-relaxed text-base md:text-lg m-0 border-t pt-6">
              These examinations ensure that Vidyaarthis not only master the Vedic recitations but also gain the linguistic depth necessary to understand the meaning, grammar, and structure of the sacred texts they study. Sanskrit proficiency thus complements Vedic learning, reinforcing both intellectual understanding and spiritual insight.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}