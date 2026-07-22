import React from 'react';
import { motion } from "framer-motion";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PoorthyProps {
  expanded: boolean;
  onBack: () => void;
}

export default function PoorthyPage({ expanded, onBack }: PoorthyProps) {
  const poorthyLevels = [
    { veda: "Rig Veda", levels: ["Moolam", "Padam–Kramam", "Ghanam", "Lakshanam"], note: "Separate examination for Athreya Brahmanam as well" },
    { veda: "Yajur Veda (both Krishna and Shukla Shaakhas)", levels: ["Padam–Kramam", "Ghanam", "Lakshanam"] },
    { veda: "Sama Veda", levels: ["Poorva Bhagam", "Uttara Bhagam"] },
    { veda: "Atharva Veda", levels: ["Moolam level"] }
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
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-secondary m-0">
                  Poorthy Examination
                </h1>
              </div>
              <p className="text-muted-foreground font-serif italic text-base mt-2 m-0">
                Final Completion and Graduation Assessment for Vidyaarthis
              </p>
            </div>

            <article className="flex flex-col gap-6 text-foreground font-serif leading-relaxed text-base md:text-lg mb-8">
              <p className="m-0">
                The <strong className="text-secondary font-sans font-semibold">Poorthy Examination</strong> serves as the final or graduation examination for <em className="italic font-semibold text-secondary">Vidyaarthis</em> (students) who have successfully completed their prescribed course of Vedic study. It marks the culmination of years of rigorous <em className="italic font-semibold text-secondary">Adhyayanam</em> and dedicated discipline within the Gurukula system.
              </p>

              <p className="m-0">
                Different Veda Shaakhas have distinct levels of certification, reflecting the traditional hierarchy of Vedic mastery:
              </p>
            </article>

            {/* Certification Levels Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8 font-serif">
              {poorthyLevels.map((item, idx) => (
                <div key={idx} className="bg-primary/5 border border-primary/15 rounded-xl p-5 space-y-3">
                  <p className="font-bold text-secondary text-base border-b border-primary/20 pb-2 m-0">
                    {item.veda}
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1.5 text-foreground/90 m-0">
                    {item.levels.map((level, lIdx) => (
                      <li key={lIdx}>{level}</li>
                    ))}
                  </ul>
                  {item.note && (
                    <p className="text-xs text-muted-foreground italic mt-2 border-t border-primary/10 pt-2 m-0">
                      * {item.note}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <p className="text-foreground font-serif leading-relaxed text-base md:text-lg m-0 border-t pt-6">
              Each stage of certification represents a significant milestone in the student’s Vedic journey, symbolizing not only scholarly accomplishment but also spiritual growth and dedication to the preservation of the sacred oral tradition.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}