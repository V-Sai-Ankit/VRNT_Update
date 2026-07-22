import React from 'react';
import { motion } from "framer-motion";
import { ClipboardCheck, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VaarshikaProps {
  expanded: boolean;
  onBack: () => void;
}

export default function VaarshikaPage({ expanded, onBack }: VaarshikaProps) {
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
                  <ClipboardCheck className="w-6 h-6" />
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-secondary m-0">
                  Varshikam Examination
                </h1>
              </div>
              <p className="text-muted-foreground font-serif italic text-base mt-2 m-0">
                Annual Academic Progress Assessment for Vidyaarthis
              </p>
            </div>

            <article className="flex flex-col gap-6 text-foreground font-serif leading-relaxed text-base md:text-lg">
              <p className="m-0">
                The <strong className="text-secondary font-sans font-semibold">Varshikam Examination</strong> is conducted annually with the primary objective of assessing the academic progress of the <em className="italic font-semibold text-secondary">Vidyaarthis</em> (students) in each Paatashala. Through this examination, the Trust ensures that students are advancing systematically in their <em className="italic font-semibold text-secondary">Adhyayanam</em> (Vedic studies) year after year.
              </p>

              <p className="m-0">
                During the Varshikam Examination, designated <em className="italic font-semibold text-secondary">Pareekshādhikāris</em> (examiners) personally visit the respective Paatashalas and evaluate the students based on the portions they have studied during the preceding year. This oral assessment helps students become accustomed to the examination process and prepares them to face the final or Poorthy Examination with confidence and composure.
              </p>

              <p className="m-0">
                In addition to testing recitation and mastery of lessons, the <em className="italic font-semibold text-secondary">Pareekshādhikāris</em> also observe whether the Vidyaarthis are studying their <em className="italic font-semibold text-secondary">Sva-Śākhā</em> (own Vedic branch) and maintaining the <em className="italic font-semibold text-secondary">Śikhā</em> (traditional tuft) as prescribed by the Sampradāyam. Thus, the Varshikam Examination serves not only as an academic evaluation but also as a means to reinforce discipline, tradition, and adherence to Dharmic practices among the students.
              </p>
            </article>
          </motion.div>
        </div>
      </main>
    </div>
  );
}