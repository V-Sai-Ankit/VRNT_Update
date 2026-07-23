import React, { useState, useEffect } from 'react';

interface AnnouncementProps {
  isMenuOpen: boolean;
  isDrawerOpen: boolean;
  setCurrentPage: (page: string) => void;
  subView?: string | null;
  setSubView?: (view: string | null) => void;
}

export default function Announcement({ 
  isMenuOpen, 
  isDrawerOpen, 
  setCurrentPage,
  subView,
  setSubView
}: AnnouncementProps) {
  const expanded = !isMenuOpen && !isDrawerOpen;
  const [internalSubView, setInternalSubView] = useState<string | null>(subView || null);

  // Sync internal state when parent prop `subView` changes
  useEffect(() => {
    setInternalSubView(subView || null);
  }, [subView]);

  const handleSetView = (view: string | null) => {
    setInternalSubView(view);
    if (setSubView) {
      setSubView(view);
    }
  };

  const logs = [
    {
      id: "poorthy-sept",
      title: "Vijaya Dasami Poorthy Exam (September)",
      date: "Published in 2026",
      type: "calendar",
      route: "poorthy-circular",
      pdfUrl: "/assets/announcement/poorthy_exam_circular.pdf"
    },
    {
      id: "shankara-jayanti-result",
      title: "2026 Shankara Jayanti Veda Pariksha Result",
      date: "Published in 2026",
      type: "calendar",
      route: "pariksha-result",
      pdfUrl: null
    },
    {
      id: "mahotsav-60",
      title: "60th Year Celebration",
      date: "Published in 2026",
      type: "document",
      route: "mahotsav",
      pdfUrl: null
    },
    {
      id: "vrnt-mahotsav",
      title: "VRNT Shashtyabda Poorty Mahotsav",
      date: "Published in 2026",
      type: "document",
      route: "mahotsav",
      pdfUrl: null
    },
    {
      id: "certificate-2024",
      title: "Sankara Jayanti 2024 Certificate Function",
      date: "Published in 2024",
      type: "calendar",
      route: "#",
      pdfUrl: null
    },
    {
      id: "donate-req",
      title: "Request for Contribution",
      date: "Published in 2024",
      type: "document",
      route: "donate",
      pdfUrl: null
    }
  ];

  const handleDetailsClick = (route: string) => {
    if (route === "poorthy-circular") {
      handleSetView("poorthy-sept");
    } else if (route !== '#') {
      setCurrentPage(route);
    }
  };

  const handleDownload = (pdfUrl: string | null) => {
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'poorthy_exam_circular.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Dedicated Circular Images Sub-View
  if (internalSubView === "poorthy-sept") {
    return (
      <div className={`w-full flex flex-col gap-6 pb-12 transition-all duration-300 ${expanded ? 'p-6' : 'p-0'}`}>
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleSetView(null)}
            className="bg-transparent border-none text-[#b4892c] hover:text-[#967122] font-serif italic text-base flex items-center gap-2 cursor-pointer p-0"
          >
            ← Back to Announcements
          </button>

          <button 
            onClick={() => handleDownload("/assets/announcement/poorthy_exam_circular.pdf")}
            className="bg-[#b4892c] hover:bg-[#967122] text-white font-sans font-bold text-xs tracking-wider py-2 px-4 rounded-lg shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer border-none"
          >
            Download Poorthy Exam Circular <span>↓</span>
          </button>
        </div>

        <section className="border-b-2 border-[#b4892c] pb-4">
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-[#8b2b22] m-0">
            Vijaya Dasami Poorthy Exam Application (September) 2026 Circular
          </h1>
          <p className="text-sm font-sans text-gray-500 mt-1 mb-0">
            Published in 2026 • Official Notification from Veda Rakshana Nidhi Trust
          </p>
        </section>

        <div className="flex flex-col gap-8 max-w-4xl w-full mx-auto mt-2">
          <div className="bg-[#f7f4eb] p-4 rounded-2xl border border-gray-300/80 shadow-md">
            <h3 className="text-lg font-serif font-bold text-[#171717] mb-3 text-center">English Notification</h3>
            <img 
              src="/assets/announcement/poorthy-september-en.jpg" 
              alt="Poorthy Pariksha Circular English" 
              className="w-full h-auto object-contain rounded-xl border border-gray-200"
            />
          </div>

          <div className="bg-[#f7f4eb] p-4 rounded-2xl border border-gray-300/80 shadow-md">
            <h3 className="text-lg font-serif font-bold text-[#171717] mb-3 text-center">Tamil Notification (சுற்றறிக்கை)</h3>
            <img 
              src="/assets/announcement/poorthy-september-ta.jpg" 
              alt="Poorthy Pariksha Circular Tamil" 
              className="w-full h-auto object-contain rounded-xl border border-gray-200"
            />
          </div>
        </div>
      </div>
    );
  }

  // Default Announcements Feed View
  return (
    <div className={`w-full flex flex-col gap-6 pb-12 transition-all duration-300 ${expanded ? 'p-6' : 'p-0'}`}>
      <div className="mt-2">
        <button 
          onClick={() => setCurrentPage('home')}
          className="bg-transparent border-none text-[#b4892c] hover:text-[#967122] font-serif italic text-base flex items-center gap-2 cursor-pointer p-0"
        >
          ← Back to Home
        </button>
      </div>

      <section className="mt-2">
        <h2 className={`font-serif font-bold text-[#171717] m-0 border-b-4 border-[#b4892c] pb-2 inline-block transition-all duration-300 ${expanded ? 'text-5xl' : 'text-4xl'}`}>
          Updates & Announcements
        </h2>
        <p className={`italic text-gray-600 font-serif mt-4 mb-0 transition-all ${expanded ? 'text-lg' : 'text-base'}`}>
          Latest circulars, examination results, and trust activities from Veda Rakshana Nidhi Trust.
        </p>
      </section>

      <div className="flex flex-col gap-4 mt-4 max-w-4xl w-full">
        {logs.map((item, index) => (
          <div 
            key={index}
            className="bg-[#f7f4eb] border border-gray-300/80 rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs hover:shadow-xs transition-shadow"
          >
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

            <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
              <button 
                onClick={() => handleDetailsClick(item.route)}
                className="bg-transparent hover:bg-black/5 text-[#b4892c] font-sans font-bold text-xs tracking-wider border border-[#b4892c]/40 hover:border-[#b4892c] py-2 px-4 rounded-lg transition-all flex items-center gap-1 cursor-pointer"
              >
                Details <span>↗</span>
              </button>
              
              <button 
                onClick={() => handleDownload(item.pdfUrl)}
                className={`font-sans font-bold text-xs tracking-wider py-2 px-4 rounded-lg shadow-2xs transition-colors flex items-center gap-1.5 border-none ${
                  item.pdfUrl 
                    ? 'bg-[#b4892c] hover:bg-[#967122] text-white cursor-pointer' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!item.pdfUrl}
              >
                Download PDF <span>↓</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}