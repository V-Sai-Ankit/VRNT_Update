import { motion, AnimatePresence } from "framer-motion";
import { X, Bell, ExternalLink, Calendar, MapPin, Info } from "lucide-react";
import { useState, useEffect } from "react";

export function NotificationSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
            />

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
                      Shasti Aptha Purti Mahotsav
                    </h3>
                    <p className="text-sm leading-relaxed text-white/90">
                      Celebrating 60 Years of Veda Rakshana. We cordially request all certified Vidwans to register for the Diamond Jubilee celebrations.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 font-bold text-primary uppercase text-sm tracking-widest border-b border-primary/20 pb-2">
                      <Info size={16} /> Registration
                    </h4>
                    <a
                      href="/news/0"
                      className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg transition-all group"
                      data-testid="link-exam-results"
                    >
                      EXAM RESULTS OUT <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="/news/0"
                      className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-[#FFD700] font-bold py-4 rounded-xl border border-[#FFD700]/30 transition-all group"
                      data-testid="link-shasti-registration"
                    >
                      2026 Poorthy Exam Registration Now Open <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 font-bold text-primary uppercase text-sm tracking-widest border-b border-primary/20 pb-2">
                      <Calendar size={16} /> Important Dates
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-3 rounded-lg">
                        <span className="text-[10px] uppercase text-white/40 block mb-1">Exam Dates</span>
                        <span className="text-sm font-bold text-white">9-12 April 2026</span>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg">
                        <span className="text-[10px] uppercase text-white/40 block mb-1">Venue</span>
                        <span className="text-sm font-bold text-white">Orikkai</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 font-bold text-primary uppercase text-sm tracking-widest border-b border-primary/20 pb-2">
                      <MapPin size={16} /> Venue & Schedule
                    </h4>
                    <div className="space-y-3 text-sm">
                      <p><strong>Venue:</strong> Orikkai Mani Madapam</p>
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <p className="font-bold text-primary mb-1">Veda Parayanam:</p>
                        <p className="text-white/80">5 March to 8 March 2026 at Kanchi Sankara Mutt.</p>
                      </div>
                    </div>
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
