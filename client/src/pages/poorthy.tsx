import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  ArrowLeft, 
  ImageIcon, 
  Sparkles, 
  Images, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface PoorthyProps {
  expanded: boolean;
  onBack: () => void;
}

export default function PoorthyPage({ expanded, onBack }: PoorthyProps) {
  // Current active slide index for the main gallery
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const poorthyLevels = [
    { veda: "Rig Veda", levels: ["Moolam", "Padam–Kramam", "Ghanam", "Lakshanam"], note: "Separate examination for Athreya Brahmanam as well" },
    { veda: "Yajur Veda (both Krishna and Shukla Shaakhas)", levels: ["Padam–Kramam", "Ghanam", "Lakshanam"] },
    { veda: "Sama Veda", levels: ["Poorva Bhagam", "Uttara Bhagam"] },
    { veda: "Atharva Veda", levels: ["Moolam level"] }
  ];

  // Exact 17 file paths fetched directly from your local public directory
  const imagePaths = [
    "/poorthy/IMG20220814070144.jpg",
    "/poorthy/IMG20220814070154.jpg",
    "/poorthy/IMG20220814070346.jpg",
    "/poorthy/IMG20220814070350.jpg",
    "/poorthy/IMG20220814090011.jpg",
    "/poorthy/IMG20220814090029.jpg",
    "/poorthy/IMG20220814090102.jpg",
    "/poorthy/IMG20220814090120.jpg",
    "/poorthy/IMG20220814090141.jpg",
    "/poorthy/IMG20220814090203.jpg",
    "/poorthy/IMG20220814094026.jpg",
    "/poorthy/IMG20220814094035.jpg",
    "/poorthy/IMG20220814094102.jpg",
    "/poorthy/IMG20220814094727.jpg",
    "/poorthy/IMG20220814094851.jpg",
    "/poorthy/IMG20220814095008.jpg",
    "/poorthy/IMG20220814095119.jpg"
  ];

  const totalPhotos = imagePaths.length;

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % totalPhotos);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  };

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
            className="bg-card border rounded-2xl p-6 md:p-10 shadow-sm mb-12"
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
                <div key={idx} className="bg-[#f7f2e8] border border-[#d8caae] rounded-xl p-5 space-y-3">
                  <p className="font-bold text-[#7a2219] text-base border-b border-[#d8caae] pb-2 m-0">
                    {item.veda}
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1.5 text-[#4a3f35] m-0">
                    {item.levels.map((level, lIdx) => (
                      <li key={lIdx}>{level}</li>
                    ))}
                  </ul>
                  {item.note && (
                    <p className="text-xs text-[#b38600] italic mt-2 border-t border-[#d8caae]/60 pt-2 m-0">
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

          {/* SINGLE CONSOLIDATED PHOTO GALLERY SECTION */}
          <div className="space-y-6">
            <div className="border-b border-[#d8caae] pb-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Images className="w-7 h-7 text-[#7a2219]" />
                <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#7a2219] m-0">
                  Poorthy Examination Photo Archives
                </h2>
              </div>
            </div>

            <div className="bg-[#f7f2e8] border border-[#d8caae] rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              {/* Album Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#d8caae]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <ImageIcon className="w-5 h-5 text-[#7a2219]" />
                    <h3 className="font-serif font-bold text-xl md:text-2xl text-[#7a2219] m-0">
                      VRNT Poorthy Exams (Aug 13–16, 2022)
                    </h3>
                  </div>
                  <p className="font-serif text-sm text-[#4a3f35] m-0 flex items-center gap-2 mt-1">
                    <Sparkles className="w-4 h-4 text-[#b38600]" />
                    Official Photography — <span className="font-bold text-[#b38600]">August 13–16, 2022</span>
                  </p>
                </div>
              </div>

              {/* DIRECT INLINE CAROUSEL CONTAINER */}
              <div className="relative w-full aspect-16/10 md:aspect-16/9 rounded-2xl overflow-hidden bg-black/90 shadow-md group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIdx}
                    src={imagePaths[currentIdx]}
                    alt={`Poorthy Exam Photo ${currentIdx + 1}`}
                    initial={{ opacity: 0.3, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.3, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/poorthy/IMG20220814070144.jpg";
                    }}
                  />
                </AnimatePresence>

                {/* Gradient Overlay with Photo Counter Only */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 md:p-6 flex items-end justify-between text-white">
                  <div>
                    <p className="font-serif text-xs md:text-sm text-white/90 m-0 font-medium">
                      Photo {currentIdx + 1} of {totalPhotos}
                    </p>
                  </div>

                  {/* Slide Indicator Dots */}
                  <div className="hidden sm:flex gap-1.5 items-center max-w-[220px] overflow-x-auto py-1">
                    {imagePaths.map((_, dotIdx) => (
                      <div 
                        key={dotIdx}
                        onClick={() => setCurrentIdx(dotIdx)}
                        className={`h-2 rounded-full cursor-pointer transition-all ${
                          dotIdx === currentIdx 
                            ? 'w-6 bg-[#b38600]' 
                            : 'w-2 bg-white/50 hover:bg-white'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Navigation Arrow - Left */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors shadow-lg cursor-pointer border border-white/20"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Navigation Arrow - Right */}
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors shadow-lg cursor-pointer border border-white/20"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}