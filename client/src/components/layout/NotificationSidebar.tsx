import React from 'react';

interface NotificationSidebarProps {
  isOpen: boolean;
  setCurrentPage: (page: string) => void;
}

export default function NotificationSidebar({ isOpen, setCurrentPage }: NotificationSidebarProps) {
  if (!isOpen) return null;

  const announcements = [
    {
      type: "mahotsav",
      icon: (
        <svg className="h-4 w-4 text-[#8b2b22] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      ),
      title: "Shasti Aptha Purti Mahotsav",
      description: (
        <>
          Celebrating 60 Years of Veda Rakshana. We cordially request all{" "}
          <span className="underline decoration-[#bf953f]/60 cursor-pointer font-semibold text-[#bf953f]">certified Vidwans</span> to register for the Diamond Jubilee celebrations.
        </>
      ),
      action: {
        type: "button",
        label: "REGISTER NOW",
        targetPage: "mahotsav"
      }
    },
    {
      type: "pariksha",
      icon: (
        <svg className="h-4 w-4 text-[#8b2b22] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Shankara Jayanti Veda Pariksha",
      description: "The official exam valuation results for the Shankara Jayanti Veda Pariksha 2026 session have been verified and processed.",
      action: {
        type: "link",
        label: "View Results Portal",
        targetPage: "pariksha-result"
      }
    },
    {
      type: "poorthy",
      icon: (
        <svg className="h-4 w-4 text-[#8b2b22] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Poorthy Exam September",
      description: "Important update regarding schedules, registration parameters, and venue assignments for the upcoming Poorthy Examination scheduled for September 2026.",
      action: {
        type: "link",
        label: "View Exam Details",
        targetPage: "#"
      }
    }
  ];

  return (
    <aside 
      className="fixed top-[200px] right-0 w-[380px] bottom-0 bg-[#8b2b22] border-l border-[#bf953f]/30 z-[1100] flex flex-col p-4 shadow-2xl animate-fade-in-right overflow-y-auto no-scrollbar"
      style={{ height: 'calc(100vh - 200px)' }}
    >
      {/* Sidebar Header Title Container */}
      <div className="flex items-center justify-between border-b border-[#bf953f]/20 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🔔</span>
          <h2 className="font-sans font-bold text-base tracking-wider text-[#ffd700] uppercase m-0">
            Announcements
          </h2>
        </div>
        <button className="text-white/60 hover:text-white bg-transparent border-none text-lg cursor-pointer p-0 leading-none">
          ✕
        </button>
      </div>

      {/* Stacked Cards Section Layout */}
      <div className="flex flex-col gap-4">
        {announcements.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white border border-[#bf953f]/30 rounded-xl p-4 flex flex-col gap-3 shadow-md"
          >
            {/* Header Area */}
            <div className="flex items-start gap-2.5">
              {item.icon}
              <h3 className="font-serif font-bold text-base m-0 leading-snug tracking-wide text-[#8b2b22]">
                {item.title}
              </h3>
            </div>

            {/* Description Paragraph Block */}
            <p className="font-serif text-sm text-gray-700 m-0 leading-relaxed font-normal">
              {item.description}
            </p>

            {/* Action Trigger Elements */}
            {item.action.type === "button" ? (
              <button 
                onClick={() => setCurrentPage(item.action.targetPage)}
                className="w-full bg-[#8b2b22] hover:bg-[#9c3a30] text-white font-sans font-bold text-xs tracking-wider text-center py-2.5 rounded-md shadow-xs mt-1 transition-colors flex items-center justify-center gap-1 uppercase cursor-pointer border-none"
              >
                {item.action.label} <span className="text-[10px]">↗</span>
              </button>
            ) : (
              <button 
                onClick={() => {
                  if (item.action.targetPage !== '#') {
                    setCurrentPage(item.action.targetPage);
                  }
                }}
                className="text-[#bf953f] hover:text-[#a37a24] bg-transparent border-none p-0 font-sans font-bold text-xs tracking-wide no-underline hover:underline flex items-center gap-1.5 mt-1 self-start cursor-pointer"
              >
                <span>↗</span> {item.action.label}
              </button>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}