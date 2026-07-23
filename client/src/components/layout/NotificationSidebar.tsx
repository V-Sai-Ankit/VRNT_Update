import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NotificationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationSidebar({ isOpen, onClose }: NotificationSidebarProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  // Swapped order: Poorthy Exam comes FIRST
  const announcements = [
    {
      type: "poorthy",
      icon: (
        <svg className="h-4 w-4 text-[#8b2b22] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Vijaya Dasami Poorthy Exam (September)",
      description: "Important update regarding schedules, registration parameters, and venue assignments for the upcoming Vijaya Dasami Poorthy Examination scheduled for September 2026.",
      actions: [
        {
          type: "internal-link",
          label: "View Exam Details",
          targetPath: "/pariksha?view=poorthy"
        },
        {
          type: "external-link",
          label: "Register Online for Poorthy Exam",
          url: "https://docs.google.com/forms/d/e/1FAIpQLSfGe_y1ErOfrNsTlb-51mu0LaL6cPXxbKv38hQFFzxecA5BrQ/viewform"
        },
        {
          type: "download-link",
          label: "Download Application Form",
          url: "/assets/forms/POORTHY_APPL_2024.pdf",
          filename: "POORTHY_APPL_2024.pdf"
        }
      ]
    },
    {
      type: "mahotsav",
      icon: (
        <svg className="h-4 w-4 text-[#8b2b22] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      ),
      title: "Shashtyabda Poorthy Mahotsav",
      description: (
        <>
          Celebrating 60 Years of Veda Rakshana. We cordially request all{" "}
          <span 
            onClick={() => {
              navigate('/mahotsav');
              onClose();
            }}
            className="underline decoration-[#bf953f]/60 cursor-pointer font-semibold text-[#bf953f]"
          >
            certified Vidwans
          </span> to register for the Diamond Jubilee celebrations.
        </>
      ),
      actions: [
        {
          type: "button",
          label: "REGISTER NOW",
          targetPath: "/mahotsav"
        }
      ]
    }
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <aside 
      className="fixed top-[200px] right-0 w-[380px] bottom-0 bg-[#8b2b22] border-l border-[#bf953f]/30 z-[1100] flex flex-col p-4 shadow-2xl animate-fade-in-right overflow-y-auto no-scrollbar"
      style={{ height: 'calc(100vh - 200px)' }}
    >
      <div className="flex items-center justify-between border-b border-[#bf953f]/20 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🔔</span>
          <h2 className="font-sans font-bold text-base tracking-wider text-[#ffd700] uppercase m-0">
            Announcements
          </h2>
        </div>
        <button 
          onClick={onClose}
          className="text-white/60 hover:text-white bg-transparent border-none text-lg cursor-pointer p-0 leading-none"
        >
          ✕
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {announcements.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white border border-[#bf953f]/30 rounded-xl p-4 flex flex-col gap-3 shadow-md"
          >
            <div className="flex items-start gap-2.5">
              {item.icon}
              <h3 className="font-serif font-bold text-base m-0 leading-snug tracking-wide text-[#8b2b22]">
                {item.title}
              </h3>
            </div>

            <p className="font-serif text-sm text-gray-700 m-0 leading-relaxed font-normal">
              {item.description}
            </p>

            {/* Actions Section */}
            <div className="flex flex-col gap-2 pt-1 border-t border-gray-100">
              {item.actions.map((act, actionIdx) => {
                if (act.type === "button") {
                  return (
                    <button 
                      key={actionIdx}
                      onClick={() => handleNavigate(act.targetPath!)}
                      className="w-full bg-[#8b2b22] hover:bg-[#9c3a30] text-white font-sans font-bold text-xs tracking-wider text-center py-2.5 rounded-md shadow-xs mt-1 transition-colors flex items-center justify-center gap-1 uppercase cursor-pointer border-none"
                    >
                      {act.label} <span className="text-[10px]">↗</span>
                    </button>
                  );
                }

                if (act.type === "internal-link") {
                  return (
                    <button 
                      key={actionIdx}
                      onClick={() => handleNavigate(act.targetPath!)}
                      className="text-[#8b2b22] hover:text-[#9c3a30] bg-transparent border-none p-0 font-sans font-bold text-sm tracking-wide no-underline hover:underline flex items-center gap-1.5 self-start cursor-pointer text-left transition-colors"
                    >
                      <span>↗</span> {act.label}
                    </button>
                  );
                }

                if (act.type === "external-link") {
                  return (
                    <a 
                      key={actionIdx}
                      href={act.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8b2b22] hover:text-[#9c3a30] font-sans font-bold text-sm tracking-wide no-underline hover:underline flex items-center gap-1.5 self-start cursor-pointer transition-colors"
                    >
                      <span>↗</span> {act.label}
                    </a>
                  );
                }

                if (act.type === "download-link") {
                  return (
                    <a 
                      key={actionIdx}
                      href={act.url}
                      download={act.filename}
                      className="text-[#8b2b22] hover:text-[#9c3a30] font-sans font-bold text-sm tracking-wide no-underline hover:underline flex items-center gap-1.5 self-start cursor-pointer transition-colors"
                    >
                      <span>↗</span> {act.label}
                    </a>
                  );
                }

                return null;
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}