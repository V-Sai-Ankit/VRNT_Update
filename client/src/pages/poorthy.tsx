import React from 'react';
import { motion } from "framer-motion";
import { GraduationCap, ArrowLeft, ExternalLink, Image as ImageIcon, Sparkles } from "lucide-react";
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

  // Embedded Photo Album Data for VRNT Poorthy Exams (Aug 13-16, 2022)
  const albumPhotos = [
    {
      url: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80",
      title: "Vidyārthis Oral Recitation",
      date: "Aug 13, 2022"
    },
    {
      url: "https://images.unsplash.com/photo-1545232979-fbf592320757?auto=format&fit=crop&w=800&q=80",
      title: "Pareekshādhikāris Inspection",
      date: "Aug 14, 2022"
    },
    {
      url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
      title: "Certificate Conferment",
      date: "Aug 15, 2022"
    },
    {
      url: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80",
      title: "Vedic Scholar Assembly",
      date: "Aug 15, 2022"
    },
    {
      url: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80",
      title: "Gānāntham Recitation Session",
      date: "Aug 16, 2022"
    },
    {
      url: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80",
      title: "Concluding Veda Swasti",
      date: "Aug 16, 2022"
    }
  ];

  const googlePhotosAlbumUrl = "https://photos.app.goo.gl/44zvTt67hd1FnXQw5";

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

          {/* EMBEDDED PHOTO ALBUM CONTAINER */}
          <div className="bg-[#f7f2e8] border border-[#d8caae] rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#d8caae]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ImageIcon className="w-6 h-6 text-[#7a2219]" />
                  <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#7a2219] m-0">
                    VRNT Poorthy Exams Photo Album
                  </h2>
                </div>
                <p className="font-serif text-sm text-[#4a3f35] m-0 flex items-center gap-2 mt-1">
                  <Sparkles className="w-4 h-4 text-[#b38600]" />
                  Official Event Photography — <span className="font-bold text-[#b38600]">Aug 13–16, 2022</span>
                </p>
              </div>

              <a
                href={googlePhotosAlbumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#7a2219] hover:bg-[#962d23] text-white font-sans font-bold text-xs tracking-wider uppercase py-2.5 px-5 rounded-md transition-colors duration-200 no-underline shadow-xs cursor-pointer self-start md:self-auto"
              >
                <span>Open Google Photos Album</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
              {albumPhotos.map((photo, index) => (
                <a
                  key={index}
                  href={googlePhotosAlbumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-[#d8caae]/80 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col no-underline cursor-pointer"
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-black/5">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    <span className="absolute top-2 right-2 bg-[#7a2219]/90 text-white font-serif text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                      {photo.date}
                    </span>
                  </div>
                  <div className="p-3">
                    <p className="font-serif text-xs md:text-sm font-semibold text-[#7a2219] group-hover:text-[#b38600] transition-colors m-0">
                      {photo.title}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}