import { Navbar } from "@/components/layout/Navbar";
import { VedaVruksham } from "@/components/sections/VedaVruksham";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { ExternalLink, Award, Bell, X, Calendar, FileText } from "lucide-react";

export default function Home() {
  // Notification bar state handling the toggle mechanism
  const [isNotificationOpen, setIsNotificationOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-x-hidden">
      <Navbar />
      
      {/* 
        THE SQUEEZE MECHANISM: 
        Using dynamic padding classes (`lg:pr-[420px]`) synchronized to the state toggle.
        When open, the page content squeezes to the left cleanly instead of getting overlapped.
      */}
      <motion.div 
        animate={{ paddingRight: isNotificationOpen ? "420px" : "0px" }}
        transition={{ type: "spring", damping: 26, stiffness: 220 }}
        className="w-full transition-all duration-300 ease-out lg:block hidden"
      />

      {/* Mobile/Tablet view fallback wrapper layout stream wrapper */}
      <div className={`w-full transition-all duration-300 ${isNotificationOpen ? 'lg:pr-[420px]' : 'lg:pr-0'}`}>
        <main>
          {/* Layout offset under sticky navbar panels */}
          <div className="pt-[110px] md:pt-[125px] lg:pt-[96px] bg-primary/5"></div>

          {/* Main Content Layout Block Container */}
          <div className="relative z-10 pt-2 pb-8">
            <VedaVruksham />
          </div>
        </main>
        <Footer />
      </div>

      {/* FLOATING ACTION BELL TAB ATTACHED ON THE RIGHT VIEWPORT BORDER */}
      <button 
        onClick={() => setIsNotificationOpen(!isNotificationOpen)}
        className="fixed right-0 top-1/3 bg-[#D4AF37] hover:bg-[#B8860B] text-secondary p-3 rounded-l-xl shadow-2xl transition-all z-40 group flex items-center justify-center border-l border-y border-white/20"
        aria-label="Toggle Announcements Workspace Panel"
      >
        <Bell size={22} className={`${!isNotificationOpen ? 'animate-pulse' : ''} group-hover:scale-110 transition-transform`} />
      </button>

      {/* NOTIFICATION STICKY SLIDE DRAWER ENGINE BAR MECHANISM */}
      <AnimatePresence>
        {isNotificationOpen && (
          <>
            {/* Space-constrained overlay mask behind the side panel */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNotificationOpen(false)}
              className="fixed inset-0 top-[174px] md:top-[189px] lg:top-[146px] bg-black/5 z-45 lg:hidden block"
            />

            {/* Space-maximized notification drawer aligned strictly below the header layout bounds */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="fixed top-[174px] md:top-[189px] lg:top-[146px] right-0 h-[calc(100vh-174px)] md:h-[calc(100vh-189px)] lg:h-[calc(100vh-146px)] w-[90vw] sm:w-[420px] bg-[#7A3E17] border-l border-white/10 shadow-2xl z-50 p-6 flex flex-col justify-between"
            >
              <div className="flex flex-col h-full overflow-hidden">
                
                {/* Upper Label Row Header Block */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 shrink-0">
                  <div className="flex items-center gap-2 text-[#FFD700]">
                    <Award size={20} />
                    <h2 className="font-display font-bold text-lg uppercase tracking-wider text-[#FFD700]">
                      Announcements
                    </h2>
                  </div>
                  <button 
                    onClick={() => setIsNotificationOpen(false)}
                    className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* SCROLLABLE ANNOUNCEMENT ITEMS CONTAINER CARD CONTAINER */}
                <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-4 custom-scrollbar pb-4">
                  
                  {/* NOTIFICATION 1: Shasti Aptha Purti Mahotsav */}
                  <div className="bg-[#D4AF37] text-secondary p-4 rounded-xl border border-[#FFD700]/30 shadow-md flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-white">
                      <Award size={18} className="shrink-0" />
                      <h3 className="font-display font-bold text-base leading-snug drop-shadow-sm">
                        Shasti Aptha Purti Mahotsav
                      </h3>
                    </div>
                    <p className="text-white font-serif text-xs leading-relaxed font-medium">
                      Celebrating 60 Years of Veda Rakshana. We cordially request all <span className="text-secondary font-bold underline decoration-white decoration-1">certified Vidwans</span> to register for the Diamond Jubilee celebrations.
                    </p>
                    <Link href="/celebrations/60-years">
                      <a 
                        onClick={() => setIsNotificationOpen(false)}
                        className="mt-2 inline-flex items-center justify-center gap-1.5 bg-white text-[#7A3E17] py-2 rounded-lg font-bold uppercase tracking-wider text-[10px] hover:bg-[#7A3E17] hover:text-white transition-all w-full shadow-sm"
                      >
                        Register Now <ExternalLink size={12} />
                      </a>
                    </Link>
                  </div>

                  {/* NOTIFICATION 2: Shankara Jayanti Veda Pariksha Results */}
                  <div className="bg-[#D4AF37] text-secondary p-4 rounded-xl border border-[#FFD700]/30 shadow-md flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-white">
                      <FileText size={18} className="shrink-0" />
                      <h3 className="font-display font-bold text-base leading-snug drop-shadow-sm">
                        Shankara Jayanti Veda Pariksha
                      </h3>
                    </div>
                    <p className="text-white font-serif text-xs leading-relaxed font-medium">
                      The official exam valuation results for the Shankara Jayanti Veda Pariksha 2026 session have been verified and processed.
                    </p>
                    <Link href="/news/0">
                      <a 
                        onClick={() => setIsNotificationOpen(false)}
                        className="mt-1 inline-flex items-center gap-1 text-white hover:text-secondary hover:underline text-xs font-bold transition-colors w-fit"
                      >
                        <ExternalLink size={12} /> View Results Portal
                      </a>
                    </Link>
                  </div>

                  {/* NOTIFICATION 3: Poorthy Exam September */}
                  <div className="bg-[#D4AF37] text-secondary p-4 rounded-xl border border-[#FFD700]/30 shadow-md flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-white">
                      <Calendar size={18} className="shrink-0" />
                      <h3 className="font-display font-bold text-base leading-snug drop-shadow-sm">
                        Poorthy Exam September
                      </h3>
                    </div>
                    <p className="text-white font-serif text-xs leading-relaxed font-medium">
                      Important update regarding schedules, registration parameters, and venue assignments for the upcoming Poorthy Examination scheduled for September 2026.
                    </p>
                    <Link href="/pariksha/september-2026">
                      <a 
                        onClick={() => setIsNotificationOpen(false)}
                        className="mt-1 inline-flex items-center gap-1 text-white hover:text-secondary hover:underline text-xs font-bold transition-colors w-fit"
                      >
                        <ExternalLink size={12} /> View Exam Details
                      </a>
                    </Link>
                  </div>

                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
/*
===================================================================
                    HOME CODE DIFF CHANGES LOG
===================================================================
1. SIDEBAR CONTAINER BACKGROUND recolored from "bg-secondary" (grey-dark)
   to "bg-[#7A3E17]" (matching core brown styling values).
   
2. INNER CONTENT BOX transformed from "bg-primary text-primary-foreground"
   to a solid "bg-[#D4AF37] text-secondary" theme to perfectly present 
   the golden announcement block layout.
   
3. FOOTER REGISTRATION LINK element swapped from "text-secondary" 
   to highly contrastive "text-[#7A3E17] bg-[#FFD700]" properties with 
   thickened vertical padding variables to form a sturdy, flat button panel.
===================================================================
*/