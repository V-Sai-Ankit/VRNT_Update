import React from 'react';

interface AnnouncementsProps {
  isMenuOpen: boolean;
  isDrawerOpen: boolean;
  setCurrentPage: (page: string) => void;
}

export default function AnnouncementsPage({ isMenuOpen, isDrawerOpen, setCurrentPage }: AnnouncementsProps) {
  const expanded = !isMenuOpen && !isDrawerOpen;

  const logs = [
    {
      title: "2026 Shankara Jayanti Veda Pariksha Result",
      date: "Published in 2026",
      type: "calendar",
      route: "pariksha-result"
    },
    {
      title: "60th Year Celebration",
      date: "Published in 2026",
      type: "document",
      route: "mahotsav"
    },
    {
      title: "Poorthy Pariksha Application",
      date: "Published in 2026",
      type: "calendar",
      route: "#"
    },
    {
      title: "VRNT Shasti Aptha Purti Mahotsav",
      date: "Published in 2026",
      type: "document",
      route: "mahotsav"
    },
    {
      title: "Sankara Jayanti 2024 Certificate Function",
      date: "Published in 2024",
      type: "calendar",
      route: "#"
    },
    {
      title: "Request for Contribution",
      date: "Published in 2024",
      type: "document",
      route: "donate"
    }
  ];

  return (
    <div className={`w-full flex flex-col gap-6 pb-12 transition-all duration-300 ${expanded ? 'p-6' : 'p-0'}`}>
      
      {/* Back to Home Link Navigation Bar */}
      <div className="mt-2">
        <button 
          onClick={() => setCurrentPage('home')}
          className="bg-transparent border-none text-[#b4892c] hover:text-[#967122] font-serif italic text-base flex items-center gap-2 cursor-pointer p-0"
        >
          ← Back to Home
        </button>
      </div>

      {/* Hero Header Area Frame */}
      <section className="mt-2">
        <h2 className={`font-serif font-bold text-[#171717] m-0 border-b-4 border-[#b4892c] pb-2 inline-block transition-all duration-300 ${expanded ? 'text-5xl' : 'text-4xl'}`}>
          Updates & Announcements
        </h2>
        <p className={`italic text-gray-600 font-serif mt-4 mb-0 transition-all ${expanded ? 'text-lg' : 'text-base'}`}>
          Latest circulars, examination results, and trust activities from Veda Rakshana Nidhi Trust.
        </p>
      </section>

      {/* Main Announcement Feed Cards Wrapper Group */}
      <div className="flex flex-col gap-4 mt-4 max-w-4xl w-full">
        {logs.map((item, index) => (
          <div 
            key={index}
            className="bg-[#f7f4eb] border border-gray-300/80 rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs hover:shadow-xs transition-shadow"
          >
            {/* Left Side: Metadata and Svg Icon Block */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-[#fffaf0] border border-[#e5dec9] flex items-center justify-center shrink-0">
                {item.type === 'calendar' ? (
                  <svg className="h-5 w-5 text-[#b4892c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-[#b4892c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )}
              </div>
              
              <div className="flex flex-col gap-1">
                <h3 className={`font-serif font-bold text-[#171717] m-0 leading-tight transition-all ${expanded ? 'text-xl' : 'text-base md:text-lg'}`}>
                  {item.title}
                </h3>
                <span className="text-xs text-gray-500 font-sans tracking-wide">
                  {item.date}
                </span>
              </div>
            </div>

            {/* Right Side: Navigation Trigger Button Array */}
            <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
              <button 
                onClick={() => {
                  if (item.route !== '#') setCurrentPage(item.route);
                }}
                className="bg-transparent hover:bg-black/5 text-[#b4892c] font-sans font-bold text-xs tracking-wider border border-[#b4892c]/40 hover:border-[#b4892c] py-2 px-4 rounded-lg transition-all flex items-center gap-1 cursor-pointer"
              >
                Details <span>↗</span>
              </button>
              
              <button className="bg-[#b4892c] hover:bg-[#967122] text-white font-sans font-bold text-xs tracking-wider py-2 px-4 rounded-lg shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer border-none">
                Download PDF <span>↓</span>
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}