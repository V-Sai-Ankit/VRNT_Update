import { motion, AnimatePresence } from "framer-motion";
import { Bell, X, Info, Calendar, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";

const NOTIFICATIONS = [
  {
    id: 1,
    type: "event",
    title: "Veda Pariksha 2026",
    message: "Registrations for the upcoming Veda Pariksha are now open. Last date: Feb 15.",
    link: "/pariksha",
    date: "2026-01-20"
  },
  {
    id: 2,
    type: "event",
    title: "Shasti Aptha Purti Mahotsav",
    message: "VRNT celebrates 60 glorious years. Vidwans are requested to register for the Diamond Jubilee celebrations.",
    link: "/celebrations/60-years",
    date: "2026-01-21"
  }
];

export function NotificationSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(true);

  if (isMinimized) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setIsMinimized(false)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] bg-primary text-primary-foreground p-3 rounded-l-2xl shadow-2xl border-y border-l border-white/20 hover:pr-5 transition-all group"
      >
        <div className="flex flex-col items-center gap-2">
          <Bell className="animate-pulse" size={20} />
          <span className="[writing-mode:vertical-lr] text-[10px] font-bold uppercase tracking-widest py-2">Notifications</span>
        </div>
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed right-0 top-[180px] bottom-8 w-[300px] md:w-[350px] z-[60] px-4 pointer-events-none"
        >
          <div className="bg-white/95 backdrop-blur-md h-full rounded-2xl border border-primary/20 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col pointer-events-auto overflow-hidden">
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between text-primary-foreground">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-1.5 rounded-lg">
                  <Bell size={18} className="animate-pulse" />
                </div>
                <h3 className="font-display font-bold tracking-wide uppercase text-sm">Latest Notifications</h3>
              </div>
              <button 
                onClick={() => setIsMinimized(true)}
                className="hover:bg-white/20 p-1.5 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {NOTIFICATIONS.map((note) => (
                <motion.div
                  key={note.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all group cursor-pointer shadow-sm hover:shadow-md"
                >
                  <div className="flex gap-3">
                    <div className={`mt-1 p-2 rounded-lg shrink-0 ${
                      note.type === 'event' ? 'bg-orange-100 text-orange-600' :
                      note.type === 'update' ? 'bg-blue-100 text-blue-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {note.type === 'event' ? <Calendar size={16} /> :
                       note.type === 'update' ? <Info size={16} /> :
                       <Bell size={16} />}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm text-foreground leading-tight group-hover:text-primary transition-colors">
                        {note.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {note.message}
                      </p>
                      <Link href={note.link}>
                        <a className="inline-flex items-center gap-1 text-[10px] font-bold text-primary uppercase tracking-wider mt-2 group/btn">
                          View Details <ArrowRight size={10} className="group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-border bg-muted/30">
              <Link href="/news">
                <a className="block w-full text-center py-2 bg-secondary text-secondary-foreground rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-secondary/90 transition-colors">
                  See All Updates
                </a>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
