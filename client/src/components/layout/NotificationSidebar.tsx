import { motion, AnimatePresence } from "framer-motion";
import { X, Bell, ExternalLink, Calendar, MapPin, Info } from "lucide-react";
import { useState, useEffect } from "react";

export function NotificationSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Auto-open on first visit or important updates
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] bg-primary text-white p-3 rounded-l-2xl shadow-2xl hover:bg-primary/90 transition-all group flex items-center gap-2"
        data-testid="button-open-notifications"
      >
        <Bell className="w-6 h-6 animate-pulse" />
        <span className="hidden group-hover:block font-bold uppercase tracking-widest text-xs">Exams 2026</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-screen w-full max-w-md bg-secondary text-secondary-foreground shadow-2xl z-[80] overflow-y-auto border-l border-primary/20"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Bell className="text-primary w-6 h-6" />
                    <h2 className="font-display text-xl font-bold uppercase tracking-wider text-[#FFD700]">Important Notice</h2>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-8 font-serif">
                  <div className="bg-primary/10 border-l-4 border-primary p-5 rounded-r-xl">
                    <h3 className="font-display text-lg font-bold text-[#FFD700] mb-3 leading-tight">
                      Attention to candidates appearing for Poorthy Exams-Sankara Jayanthi-2026
                    </h3>
                    <p className="text-sm leading-relaxed text-white/90">
                      Only swasakai candidates are eligible to appear for poorthy exams (any issue with regard to swasakai, management decision is final)
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 font-bold text-primary uppercase text-sm tracking-widest border-b border-primary/20 pb-2">
                      <Info size={16} /> Eligibility Criteria
                    </h4>
                    <ul className="space-y-3 text-sm text-white/80 list-disc pl-4">
                      <li><strong>Moolam:</strong> Must complete Sanskrit Chittoor Syllabus 1 & 2</li>
                      <li><strong>Padam & Kramam:</strong> Must complete Sanskrit Chittoor Syllabus 3</li>
                      <li><strong>GHANAM:</strong> Must complete Sanskrit Chittoor Syllabus 4</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                    <h4 className="font-bold text-[#FFD700] text-sm mb-3">Shukla Yajur Candidates</h4>
                    <p className="text-sm italic text-white/70">
                      Kanva/Madyanthina Shaka Vidyartees who can recite entire <strong>BRUHADARANYAKOPANISHATH</strong> with KANTAPAATA are eligible for KRAMANTHA/GHANANTHA exams.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 font-bold text-primary uppercase text-sm tracking-widest border-b border-primary/20 pb-2">
                      <Calendar size={16} /> Important Dates
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-3 rounded-lg">
                        <span className="text-[10px] uppercase text-white/40 block mb-1">Due Date</span>
                        <span className="text-sm font-bold text-white">20 Feb 2026</span>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg">
                        <span className="text-[10px] uppercase text-white/40 block mb-1">Exam Dates</span>
                        <span className="text-sm font-bold text-white">9-12 April 2026</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 font-bold text-primary uppercase text-sm tracking-widest border-b border-primary/20 pb-2">
                      <MapPin size={16} /> Venue & Schedule
                    </h4>
                    <div className="space-y-3 text-sm">
                      <p><strong>Venue:</strong> Orikkai Mani Madapam</p>
                      <p><strong>Hall Tickets:</strong> Issued on 9th April 2026 at Orikkai.</p>
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <p className="font-bold text-primary mb-1">Veda Parayanam:</p>
                        <p className="text-white/80">5 March to 8 March 2026 at Kanchi Sankara Mutt.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FFD700]/10 border border-[#FFD700]/30 p-5 rounded-xl">
                    <p className="text-xs font-bold text-[#FFD700] uppercase text-center tracking-widest leading-relaxed">
                      ONLY THOSE WHO ATTEND PARAYANAM ARE ELIGIBLE TO APPEAR FOR EXAM.
                    </p>
                    <p className="text-[10px] text-white/60 text-center mt-2 italic">
                      (Students other than Tamil Nadu are exempted from Parayanam)
                    </p>
                  </div>

                  <div className="pt-4 space-y-4">
                    <a 
                      href="https://forms.gle/qqqngAjPv66ERt6FA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg transition-all group"
                    >
                      APPLY ONLINE NOW <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a 
                      href="https://vrnt.org/poorthiExam.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-[#FFD700] hover:text-white transition-colors text-sm font-bold border border-[#FFD700]/30 py-3 rounded-xl"
                    >
                      Download Application & Annexure
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
